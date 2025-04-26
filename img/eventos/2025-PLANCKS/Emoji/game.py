#Imports
import numpy as np
import matplotlib.pyplot as plt
import numpy.random as rd
from timeit import default_timer as timer
import scipy.spatial as spa
import keyboard as key
from matplotlib.backend_bases import KeyEvent

#Datos sistema
l = 10
npart = 10
m = 1
d = 0.25
k_B = 0.01
T = 15
E = k_B*T

#Condiciones iniciales (pos & dirección aleatorias)
r = rd.rand(2,npart)*l
Ei = rd.exponential(k_B*T,npart)
mv = np.sqrt(2/m*Ei)
mv[0] = rd.uniform(0.4,1)
# mv[0] = 1
thetav = rd.rand(npart)*2*np.pi
v = np.array([np.cos(thetav),np.sin(thetav)])*mv

#Datos simulación (Ec. Euler --> r(t+dt) = r(t) + v(t)·dt
dt = 0.01
n = 100000
ninter = 10
ninter2 = 50
nlevels = 2000
ntraps = 5000
tinter = 0.01   #(s) t entre representaciones

#Traps
rtraps = np.zeros((2,8)) - 1
vtraps = np.zeros((2,8))
dshield = 0
pshield = 0

def choque(r1,r2,v1,v2):    
    uc = (r1-r2)/np.linalg.norm(r1-r2)
    up = np.array([uc[1],-uc[0]])
    
    v1c = np.dot(v2,uc)*uc
    v1p = np.dot(v1,up)*up
    
    v2c = np.dot(v1,uc)*uc
    v2p = np.dot(v2,up)*up
    
    if np.dot(v1,uc) > np.dot(v2,uc):
        return v1,v2
    else: return v1c + v1p,v2c + v2p
    
def YouDied():
    #YOU DIED
    die = plt.figure()
    die.suptitle('YOU DIED',x = 0.5,y = 0.65,fontsize = 40)
    die.text(0.39,0.45,'Points: ' + str(i),fontsize = 16)
    die.text(0.39,0.35,'Level: ' + str(int(i/2000 + 1)),fontsize = 16)
    die.show()
    exit()
    
#Representación
f = plt.figure()
ejes = f.add_subplot()
ejes.set_xlim(0,l)
ejes.set_ylim(0,l)
punto, = ejes.plot(r[0,1:],r[1,1:],'go')
punto1, = ejes.plot(r[0,0],r[1,0],'ro',label = '0')
punto2, = ejes.plot(rtraps[0,:],rtraps[1,:],'bo')
shield, = ejes.plot(-1,-1,'ko',ms = 2)
ejes.set(title = 'Level 0')
ejes.legend()

parts = np.arange(npart)

rot1 = np.array([[0,-1],[1,0]])
rot2 = np.array([[0,1],[-1,0]])
delayright = np.zeros(5)
delayleft = np.zeros(5)

key_pressed = {"a": False, "d": False, "w": False}

def on_key(event: KeyEvent):
    global key_pressed
    if event.key == 'a':
        key_pressed["a"] = True
        key_pressed["d"] = False
    if event.key == 'd':
        key_pressed["d"] = True
        key_pressed["a"] = False
    if event.key == 'w':
        key_pressed["w"] = True

def on_key_release(event: KeyEvent):
    global key_pressed
    if event.key == 'a':
        key_pressed["a"] = False
    if event.key == 'd':
        key_pressed["d"] = False
    if event.key == 'w':
        key_pressed["w"] = False

f.canvas.mpl_connect('key_press_event', on_key)
f.canvas.mpl_connect('key_release_event', on_key_release)

for i in range(n):
    tstart = timer()
    #Ec Euler
    r += v*dt
    
    #Boundaries
    for j in range(npart):
        if r[0,j] <= 0 or r[0,j] >= l:
            v[0,j] = -v[0,j]
        
        if r[1,j] <= 0 or r[1,j] >= l:
            v[1,j] = -v[1,j]
    
    #Colissions
    arbol = spa.cKDTree(np.transpose(r))
    pairs = arbol.query_pairs(d)
    
    for p in pairs:
        if p[0] == 0 or p[1] == 0:
          if pshield != 0: pshield = 0
          else: YouDied()
    
    for p in pairs:
        v[:,p[0]],v[:,p[1]] = choque(r[:,p[0]],r[:,p[1]],v[:,p[0]],v[:,p[1]])
    '''
    for j in range(npart):
        for k in range(j,npart):
            if np.linalg.norm(r[:,j] - r[:,k]) <= d and j!=k:
                v[:,j],v[:,k] = choque(r[:,j],r[:,k],v[:,j],v[:,k])
    '''
    
    #Representar
    if i%ninter == 0:
        punto.set_data(r[0,1:],r[1,1:])
        punto1.set_data([r[0,0]],[r[1,0]])
        punto1.set_label(str(i))
        punto2.set_data(rtraps[0,:],rtraps[1,:])
        if pshield != 0:
            shield.set_data(([r[0,0]],[r[1,0]]))
        else:
            shield.set_data(([-1],[-1]))
        ejes.set(title = '[Level ' + str(npart - 9) + ']  (' + str(dshield) + ' shields available)')
        ejes.legend()
        plt.pause(tinter)
    
    #PLAYER TURN
    if i%ninter2 == 0:
        if key_pressed["a"] and sum(delayleft) == 0:
            v[:,0] = rot1 @ v[:,0]
            delayleft[0] = 1
            delayright[0] = 0
            
        if key_pressed["d"] and sum(delayright) == 0:
            v[:,0] = rot2 @ v[:,0]
            delayright[0] = 1
            delayleft[0] = 0
            
        else:
            delayright[0] = 0
            delayleft[0] = 0
        
    delayright[1:] = delayright[:-1]  
    delayleft[1:] = delayleft[:-1]  
    
    #PLAYER SHIELD
    if i%ntraps == 0 and i != 0: dshield += 1
    
    if dshield != 0 and key_pressed["w"]:
        dshield -= 1
        pshield = 1
    
    #Cambio de nivel
    if i%nlevels == 0 and i != 0:
        r0 = np.append(r[0,:],abs(r[0,0] - r[0,-1])/2)
        r1 = np.append(r[1,:],abs(r[1,0] - r[1,-1])/2)
        r = np.vstack((r0,r1))
        
        v0 = np.append(v[0,:],abs(v[0,0] - v[0,-1])/2)
        v1 = np.append(v[1,:],abs(v[1,0] - v[1,-1])/2)
        v = np.vstack((v0,v1))
        
        npart += 1
        
    if i%ntraps == 0 and i != 0:
        postraps = rd.randint(1,9,2)
        rtraps[:,0] = np.array([0,postraps[0]])
        rtraps[:,1] = np.array([0,postraps[1]])
        rtraps[:,2] = np.array([l,postraps[0]])
        rtraps[:,3] = np.array([l,postraps[1]])
        rtraps[:,4] = np.array([postraps[0],0])
        rtraps[:,5] = np.array([postraps[1],0])
        rtraps[:,6] = np.array([postraps[0],l])
        rtraps[:,7] = np.array([postraps[1],l])
        
        vtraps[:,0] = vtraps[:,1] = np.array([1,0])
        vtraps[:,2] = vtraps[:,3] = np.array([-1,0])
        vtraps[:,4] = vtraps[:,5] = np.array([0,1])
        vtraps[:,6] = vtraps[:,7] = np.array([0,-1])
        
    #Ec Euler
    rtraps += vtraps*dt
    
    #Colission with traps
    rtraps1 = np.zeros((2,9))
    rtraps1[:,1:] = rtraps
    rtraps1[:,0] = r[:,0]
    arboltraps = spa.cKDTree(np.transpose(rtraps1))
    bumps = arboltraps.query_pairs(d)
    
    for p in bumps:
        if p[0] == 0 or p[1] == 0:
          if pshield != 0: pshield = 0
          else: YouDied()
    
    
    tend = timer()
    #print(tend-tstart)