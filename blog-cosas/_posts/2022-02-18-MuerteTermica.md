---
layout: post
categories: blog Divulgación
title:  "Entendiendo la muerte térmica del Universo"
date:  2022-02-18 00:01
author: Sergio J Salvía Fernández
redirect-from:
---

<p style="text-align: justify;"> ¡Que paren las rotativas! ¡El universo se muere! Seguro que alguna vez has escuchado eso de que el universo está muriendo poco a poco, que nada hay que pueda evitarlo y que la culpable (cómo no) es la dichosa termodinámica. Y si no, ¡enhorabuena! te doy la bienvenida a un capítulo más de físicos tremendistas. Pero, ¿qué significa que el universo se muere? ¿qué tiene que ver la termodinámica con todo esto? </p>

### Entropía: el desorden y los microestados

<p style="text-align: justify;"> Para empezar a hablar de muerte térmica es importante introducir nuestra protagonista: la entropía. Normalmente se dice que la entropía es "el grado de desorden de un sistema", aunque esto es bastante matizable. Por ejemplo, decimos que en una partida de billar la entropía aumenta a medida que pasa el tiempo, ya que pasamos de un estado ordenado (inicial) a un estado desordenado (final), tal y como se puede ver en la Figura 1. En realidad la entropía no mide el grado de desorden, sino "el número de microestados que son compatibles con un macroestado dado". ¿Que qué significa esto? Podemos usar el ejemplo de las bolas de billar para explicarlo. </p>

![Fig1](/img/blog/2022-02-18-MuerteTermica/billar.png)<br/>
<a name="Fig1">**Figura 1**</a>: Ejemplo de cómo se desordena una mesa de billar en el tiempo a medida que transcurre la partida.

<p style="text-align: justify;"> En primer lugar tenemos que distinguir dos conceptos: microestado y macroestado. El microestado tiene que ver con las configuraciones que son posibles para las componentes del sistema. En el caso del billar, con cómo se sitúan las bolas encima de la mesa, con cuales son sus posiciones <b>individuales</b>. El macroestado se relaciona con una propiedad del <b>conjunto</b>, donde lo que importa es una visión global, más que lo que ocurre a nivel individual. Volviendo al caso del billar, podríamos distinguir dos macroestados distintos: ordenado o desordenado. </p>

<p style="text-align: justify;"> Si tenemos en cuenta las posiciones de las bolas de billar, podemos observar que las configuraciones de posiciones que podemos llamar "estado ordenado" (con el que se empieza la partida) son mucho menores que aquellas en las que el estado está desordenado, ¡por eso la entropía aumenta! Todo se trata de una cuestión de probabilidad: no es que sea imposible que las bolas vuelvan a ordenarse y colocarse tal y como estaban al principio, es que es <b>altamente improbable</b>, ya que el número de formas en las que las bolas se pueden distribuir correspondientes a estar ordenado es <b>mucho menor</b> que el número de configuraciones que llamamos estar desordenado. </p>

### La segunda Ley de la termodinámica

<p style="text-align: justify;"> "Muy bien, ¿pero esto qué tiene que ver con la muerte del universo?" te preguntarás. Aquí entra la segunda Ley de la termodinámica, que establece que: </p>
  
<p style="text-align: justify;"> <i> En un estado de equilibrio, los valores que toman los parámetros característicos de un sistema termodinámico aislado son tales que maximizan el valor de una cierta magnitud que está en función de dichos parámetros, llamada entropía </i> <a href="#Ref1">[1]</a>. </p>

<p style="text-align: justify;"> Lo que esto quiere decir es que la entropía del universo aumenta inevitablemente a medida que pasa el tiempo. Si queremos verlo desde esa perspectiva un tanto inexacta del desorden, esto quiere significar que el universo se desordena, tal y como hemos visto en nuestra mesa de billar, por una cuestión meramente probabilística. Pero seguimos en las mismas, ¿a mi qué me importa que el universo se desordene? ¿por qué esto significa que se muere? Para entender esto debemos volver a los orígenes, y entender <b>por qué se define la entropía</b>. </p>

<p style="text-align: justify;"> No intentaré dar una fecha de cuándo nace exactamente la termodinámica, pero lo que sí podemos decir es que tiene un gran auge entre los siglos XVIII y XIX. Es en esta época en la que desarrollan sus actividades científicos como Clausius, Lord Kelvin, Watt, Carnot, entre otros muchos nombres que cualquier estudiante de termodinámica teme. Este auge no es casual, la ciencia como actividad humana se desarrolla en contextos históricos concretos, y en este caso estamos ante el invento de la máquina de vapor y la primera revolución industrial.</p>

<p style="text-align: justify;"> Por aquél entonces el problema que preocupaba a gran parte de los científicos era el de la eficiencia de las máquinas. Este problema viene a decir que la energía útil que puede extraerse de un proceso físico real es siempre menor a la energía que está en juego en dicho proceso, y además, suele ser bastante menor. Lo sé, puede parecer decepcionante, empezamos hablando de la muerte del universo y ahora de repente empezamos a hablar de la máquina de vapor. Pero créeme, tiene sentido.</p>

<p style="text-align: justify;"> Este es un problema importante ya que en muchas ocasiones energía es igual a dinero, y tener que perder dinero cada vez que se pone a trabajar la máquina era algo que preocupaba a los dueños de las fábricas. Imagina que quieres extraer energía de una presa, aprovechando la energía cinética del agua que cae desde la parte alta hasta la parte baja. La segunda Ley de la termodinámica nos dice que, independientemente de lo buena que sea nuestra turbina, parte de la energía se perderá durante el proceso. Esta energía que se pierde es lo que Clausius denominó entropía. Cada vez que un proceso termodinámico irreversible tiene lugar se produce entropía, es decir, energía que no es útil. Esta energía se invierte en "desordenar" nuestro sistema.</p>

### La muerte térmica
<p style="text-align: justify;"> Una forma de entender esto de forma visual es a través de la máquina de Stirling. Esta máquina térmica aprovecha una diferencia de temperatura entre dos zonas, lo que hace que un pistón se mueva, accionando un motor. Lo importante de esta historia es que hace falta una diferencia de temperatura, si no, la máquina no funciona.</p>

![Fig2](/img/blog/2022-02-18-MuerteTermica/stirling.PNG)<br/>
<a name="Fig2">**Figura 2**</a>: Esquema básico de las componentes de una máquina de Stirling <a href="#Ref3">[3]</a>.

<p style="text-align: justify;"> Ahora bien, si alguna vez te has hecho un chocolate caliente, sabrás que cuando dejas tu taza sobre la mesa, esta no se mantiene caliente de forma infinita. A medida que pasa el tiempo el calor de la taza pasa al aire, que está más frío, lo que acaba enfriando tu taza hasta que alcanzar la temperatura ambiente. Es decir, la energía térmica que había en tu taza se ha "esparcido" hasta que las temperaturas se han igualado, momento a partir del cual nada más ocurre, todo se mantiene estático. Si intentamos hacer funcionar nuestra máquina de Stirling posándola sobre nuestra taza, solo funcionará durante el tiempo en el que ésta se esté enfriando. En el momento en el que alcance temperatura ambiente, el motor se parará. Como puedes observar, este "esparcimiento" de energía es lo que hace que la máquina se pare. Y es aquí donde todo se relaciona con el desorden.</p>

<p style="text-align: justify;"> En nuestra mesa de billar, las bolas se esparcen sobre la mesa a medida que pasa el tiempo. Los estados que llamamos "desordenados" son aquellos que se corresponden con situaciones más uniformes, donde distinguir entre regiones es más complicado. En el caso de la mesa de billar, empezamos con una región donde la concentración de bolas es muy alta (donde están) y regiones donde no hay bolas. Sin embargo, esta diferencia de concentración de bolas disminuye a medida que la partida discurre, la mesa se homogeneiza. Esto es lo mismo que pasa cuando nuestra máquina se enfría: comenzamos teniendo una diferencia de temperaturas distinguible, que desaparece a medida que la energía se "esparce" en el espacio.</p>

<p style="text-align: justify;"> Y así cobra sentido la muerte térmica. Si la entropía del universo aumenta de forma constante, llegará un momento en el que ninguna máquina podrá funcionar, porque toda la energía se habrá "esparcido" por el universo; un momento en el que ningún proceso termodinámico podrá tener lugar. El estado de equilibrio a nivel global será alcanzado y por tanto ningún flujo de energía tendrá lugar, dado que no existirán regiones con diferencias, lo que implica que ni siquiera una supuesta colonia de humanos podría subsistir (al fin y al cabo nuestro cuerpo también se comporta como una máquina que usa la termodinámica para impulsar los procesos que necesitamos para vivir). Todo se mantendrá bastante aburrido, aunque tampoco habrá nadie para aburrirse.</p>

### Conclusión

<p style="text-align: justify;"> La muerte térmica del universo es inevitable, pero es muy posible que antes de eso haya cualquier otro evento que acabe con la humanidad, por lo que no es algo que deba preocuparnos realmente.</p>

<p style="text-align: justify;"> Lo que sí es un problema actual es la eficiencia. La crisis energética es un problema real, y las energías renovables a veces poseen eficiencias realmente bajas. Por ejemplo, la célula solar más eficiente y aún experimental, a fecha de febrero de 2022, tiene una eficiencia menor del 50% <a href="#Ref4">[4]</a>, lo que significa que es incapaz de convertir en trabajo útil más de la mitad de la energía que nos llega del Sol. Conseguir formas de extracción de energía más eficientes y, sobre todo, más limpias, sí es un problema real, en el que cientos de científicos y científicas trabajan a diario, con el objetivo de hacer del mundo un lugar más habitable.</p>

---

### Referencias
<a name="Ref1">[1]</a>: H. Callen, Thermodynamics and an Introduction to Thermostatistics (1985). <br/>
<a name="Ref2">[2]</a>: Blog Hyperphysics [http://hyperphysics.phy-astr.gsu.edu/hbasees/thermo/seclaw.html]. <br/>
<a name="Ref3">[3]</a>: Wikimedia Commons [https://es.wikipedia.org/wiki/Motor_Stirling]. <br/>
<a name="Ref4">[4]</a>: NREL [https://www.nrel.govNREL/pv/cell-efficiency.html]. <br/>
