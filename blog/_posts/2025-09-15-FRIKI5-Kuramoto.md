---
layout: post
categories: 
   - blog 
   - Divulgación 
   - "Diario de un Friki"
title:  "Diario de un Friki V: ¿Lo de que a las tías se les sincronice la regla qué es? – El modelo de Kuramoto"
date: 2025-09-15 11:00
author: Enrique Rodríguez Ramos
redirect-from:
excerpt: "Hay cosas en la vida que parecen ser resultado de algún proceso de magia negra. El caso que nos ataña hoy es una de esas cosas. La sincronización de la regla en mujeres es, primero, inverosímil a priori y, segundo, para los que conviven con las sincronizadas, catastrófico. Nuestro Friki nos va a contar cómo ha vivido este fenómeno, y nos deducirá paso a paso un modelo que puede explicar este tipo de sucesos paranormales."
---

<section class="blog">

<p class="clearfix">
  Hay cosas en la vida que parecen ser resultado de algún proceso de magia negra. El caso que nos ataña hoy es una de esas cosas. La sincronización de la regla en mujeres es, primero, inverosímil <i>a priori</i> y, segundo, para los que conviven con las sincronizadas, catastrófico. Nuestro Friki nos va a contar cómo ha vivido este fenómeno, y nos deducirá paso a paso un modelo que puede explicar este tipo de sucesos paranormales.
</p>

<br>
«¿Aprender? – Pensé – ¿Qué será aprender para él? Si de hecho estaba aprendiendo muchísimo mirando al cielo…»
<p>
Querido Diario:
</p>

<br>

<p>
Por este tipo de cosas digo que prefiero lidiar con las intrincadas expresiones matemáticas de la teoría de supercuerdas en un mundo de 10+1 dimensiones, antes que tratar de entender a las mujeres. Es que, ¿qué cojones?
</p>

<p>
Quede claro que no tengo nada en contra de ellas, eh, (tengo una madre y una hermana, como decía el del pikito). Nosotros los hombres no tenemos ni idea de lo que pasan ellas cada 28 días y por mí que se mantenga así por mucho tiempo. La Biblia dice que es porque la primera de ellas mordió una manzana; no sé yo si será cierto, pero seguro que más de una se acordará de ella (y de su madre, aunque no tuviera) al menos una vez al mes. 
</p>

<p>
<img class="img-right" src="/img/blog/2025-09-06-FRIKI4-MachineLearning/6 sept 2025, 13_26_03.png">
Está claro ya que no las culpo, ahora permítanme quejarme de lo que tengo que aguantar cada vez que llega ese momento. Hasta ayer, era algo duro, pero aguantable: de vez en cuando una de mis amigas se ponía un poco irritable, pero me podía apoyar en mis otras amigas para pasar un día agradable. Y cuando a otra diferente le pasaba lo mismo, la de antes ya había salido de esa etapa. ¿¡Pero lo de hoy qué ha sido!?
</p>

<p>
¿Cómo puede suceder que se sincronicen la regla de mis 5 amigas, cuando hace unos meses a cada una le bajaba en semanas distintas? Tras irme, no paraba de darle vueltas a por qué me habían dejado solo en el descanso para irse todas ellas a comprarse <<algo dulce>>. El camino de vuelta a casa, sin embargo, me sirvió para darme cuenta de que la sincronización es un fenómeno que se ha estudiado bastante gracias a, como no, la Física. 
</p>

<p>
Los fenómenos de sincronización ocurren cuando un conjunto de objetos de una misma clase que tienen un comportamiento cíclico pasan de evolucionar de manera independiente a comportarse todos al unísono. Tienen la particularidad de que el paso del estado inicial (aleatorio) al estado síncrono sucede de forma repentina y, muchas veces, con consecuencias catastróficas, como lo que ha sucedido hoy en clase con mis amigas, o como otros muchos ejemplos que se comentan aquí [video Veritasium]<hyperref>.
</p>

<p>
El modelo más simple y a la vez más útil para describir este tipo de fenómenos es el modelo de Kuramoto, propuesto en 1975. Una de sus virtudes es que sirve para explicar muchos fenómenos de sincronización diferentes: desde el desafortunado episodio que viví hoy, hasta por qué, cuando llevas mucho rato caminando con alguien, empezáis a dar los mismos pasos a la vez (fíjate la próxima vez).
</p>

<p>
Como tratar con mujeres es algo demasiado complicado, para explicar cómo funciona la sincronización de sus dramáticas menstruaciones, vamos a abstraernos un poco y vamos a considerar que estamos tratando con una serie de osciladores genéricos que tienen una interacción determinada entre ellos (así sí, mucho más fácil). Por ejemplo: considera una pareja de metrónomos sobre una tabla de madera flotando en un estanque de agua. 
</p>

<p>
Pues bien, digamos que cada metrónomo va a un ritmo distinto: tienen una frecuencia natural diferente cada uno, que vamos a llamar \omega_1 y \omega_2. Y van a empezar a marchar en posiciones distintas: van a tener fases iniciales diferentes, \theta_01 y \theta_02. Si dejas al par de metrónomos marchar libremente, en poco tiempo te sorprenderás al ver que, de la nada, se han sincronizado ellos solos. ¡Cómo mis amigas con la regla! Un proceso igual de inesperado, aunque menos traumático. ¿Cómo puede ser? (Ver <hyperref> video)
</p>

<p>  
El modelo de Kuramoto establece que la diferencia entre las fases de los metrónomos es la responsable de que surja una determinada fuerza entre ellos que haga que oscilen a ritmos ligeramente diferentes que su frecuencia natural. Poco a poco, hasta que empiecen a oscilar de manera sincronizada, llegando a un estado estable.
</p>

<p>
<img class="img-left" src="/img/blog/2025-09-06-FRIKI4-MachineLearning/6 sept 2025, 13_26_03.png">
El proceso es exactamente como cuando tu primo y tú os subíais a un columpio, cada uno en una silla. Al principio cada uno se columpia a un ritmo y está en un lugar diferente en cada instante, pero cada vez que tu primo iba hacia adelante, el travesaño del columpio se movía un poco con él, haciendo que tú, que, en ese momento, digamos, estabas en tu punto más alto, tardases un poco más en empezar a bajar. Así, sucesivamente acercando vuestras posiciones y modificando el ritmo de vuestro balanceo, hasta que, de repente, os estabais columpiando de manera sincronizada mirándoos como si fuerais los más felices del mundo (ciertamente lo erais), mientras vuestras madres os gritaban que ibais a caeros y a haceros daño. Prefiero mil veces esos gritos a los de esta mañana, sinceramente.
</p>

<p>
Vale, con los columpios es fácil entender por qué se han sincronizado, al final la diferencia de movimiento de cada uno hacía que el travesaño que los unía (que los acoplaba el uno al otro) ejerciera una pequeña fuerza en ambos, modificando sus balanceos hasta columpiarse de manera síncrona. ¿Pero y en el caso de los metrónomos qué pasa? ¿Y en el caso de la sincronización de la regla? Para la primera pregunta es sencillo, la clave está en que están sobre una misma base que se puede mover (la tabla de madera flotando en el estanque), lo que la convierte en análogo al travesaño del columpio. Para la segunda pregunta, sin embargo, no tengo ni idea; no entiendo a las mujeres.^1 
</p>

<p>
Parece entonces que, si queremos estudiar el proceso de sincronización, tenemos que buscar una expresión matemática que relacione cómo cambia la fase del objeto en cuestión con el tiempo. Así que vamos con ello. La velocidad de cambio de fase de un oscilador viene dada por el tiempo $dt$ que tarda el oscilador en recorrer una diferencia de fase $d\theta$: buscamos, pues, $d\theta/dt$.
</p>

<p>
Si no tuviera relaciones de ningún tipo y tu amiga estuviera encerrada toda su vida en una torre sola, a lo Fiona, su regla bajaría cuando le tocase. Asimismo, si no hay interacción entre osciladores, su ritmo de oscilación sería igual a su frecuencia natural y no cambiaría nunca. Por tanto, en ese caso nuestra expresión matemática se vería así:
</p>


  ECUACION(Modelo de Kuramoto sin interacción)

<br>

<img
     class = "img-center"
     src="/img/blog/2025-09-06-FRIKI4-MachineLearning/model.png"
    />
   <p>
      <i><h6>Simulación del modelo de Kuramoto para el caso de 5000 osciladores acoplados con una interacción demasiado débil, con una distribución lorentziana de frecuencias naturales, con media nula. IZQ: evolución de las fases de los osciladores para el caso de una interacción demasiado débil (se ve que cada uno va evolucionando a su bola, sin ningún tipo de sincronización). DCHA: evolución del ritmo de oscilación de cada oscilador (se ve que no se ven prácticamente alterados).</h6></i>
   </p>

<br>

<p>
Sin embargo, si juntamos a tu amiga Alicia con tu amiga Blanca en la torre, sus periodos empiezan a influenciarse el uno al otro con una intensidad que va a venir modulada por una constante K_AB, y que va a depender únicamente de la diferencia de las fases de sus periodos (esta es la clave del modelo de Kuramoto, lo que lo hace tan simple): $\theta_A$ y $\theta_B$. 
</p>

<p>
¿Pero cómo describimos esa dependencia?
</p>

<p>
Vamos a suponer que el efecto neto es el mismo si a Alicia le baja antes que a Blanca o si a Blanca le baja antes que Alicia. Lo único que cambia es que la regla de Alicia se retrasará un poco en el primer caso o se adelantará en el segundo, es decir, $d\theta/dt$ será menor o mayor, respectivamente. Es decir, el termino que añadamos a la función estará restando o sumando en función de si $\theta_A - \theta_B$ es negativo o positivo. Por lo que necesitamos una función de $\theta_B -\theta_A$ que tenga simetría impar (f(-x) = -f(x)).
</p>

<p>
Además, necesitamos que esa función sea periódica, pues la influencia de tu primo en su columpio sobre el tuyo no dependerá (en este modelo) de si lleva 3 o 4 columpiadas más que tú, sino que depende de la diferencia de fase en ese instante, como si no hubiera pasado nada más anteriormente. Por ejemplo, imagina que tu primo se ha columpiado 2 veces completas, pero que en el instante en el que tú te montas, tu primo está justo abajo del todo, en la misma posición que tú. La influencia que sobre ti ejerce ahí será la misma que si tu primo se acabara de montar, pues no hay diferencia de posición. Por tanto, para parametrizar la interacción entre los dos osciladores en función de su diferencia de fase, necesitamos una función periódica, con el mismo periodo que las fases de los osciladores (como siempre 2\pi radianes). 
</p>

<p>
¿Qué función sencilla es impar y es periódica con periodo 2\pi? El seno.
</p>

<p>
Por tanto, la velocidad de cambio de fase de un oscilador A en un sistema de 2 osciladores acoplados (A y B), viene dada por:
</p>
  ECUACION(Modelo de Kuramoto n=2)
<p>
Si tenemos muchos osciladores (N), la velocidad de cambio de fase del oscilador i vendrá dada por su frecuencia natural, que se verá modificada por cada interacción del oscilador i con cualquier otro oscilador j, cuya intensidad estará modulada por la constante K_ij.
</p>
  ECUACION(Modelo de Kuramoto N)
<p>
Y este es, Queridos Lectores, el modelo de Kuramoto. Las diferencias de fase entre cada par de osciladores harán que al final cada oscilador vaya modificando su velocidad de cambio de fase hasta que, de repente, todos estén oscilando al mismo tiempo. Esto se puede ver en la siguiente figura, en la que se muestra la velocidad de cambio de fase de muchos osciladores que interaccionan todos con todos de la misma manera a medida que pasa el tiempo, conspirando todos juntos para que llegue un momento que se dé el milagro.
</p>


<br>

<img
     class = "img-center"
     src="/img/blog/2025-09-06-FRIKI4-MachineLearning/model.png"
    />
   <p>
      <i><h6>Simulación del modelo de Kuramoto para el caso de 5000 osciladores acoplados con una interacción suficientemente fuerte para que aparezca la sincronización, con una distribución lorentziana de frecuencias naturales, con media nula. IZQ: evolución de las fases de los osciladores (se ve que cada uno va evolucionando a su bola hasta que de repente convergen en un intervalo estrecho de fases). DCHA: evolución del ritmo de oscilación de cada oscilador (de nuevo, cada uno empieza a su ritmo para luego converger todos y sincronizarse a un ritmo cercano a la media de la distribución inicial de frecuencias (cero))</h6></i>
   </p>

<br>

<p>
Esta ha sido intensa, eh Querido Diario. Pero hemos podido comprobar que, al contrario de lo que pueda parecer, se puede llegar a entender bastante bien un suceso de primeras tan inverosímil como es la sincronización de la regla en mujeres. Al final parece que sí que voy a poder entenderlas un poco al menos…
</p>





<br>

<p>
Atte.
</p>
<p>
Un Friki
</p>

<p>
<h2>Referencias:</h2>
</p>

<p>
[1] A. Géron. O’Reilly Book Club. Aurélien Géron on hands-on machine learning with Scikit-Learn, Keras, and TensorFlow., (2023).
</p>
<p>
[2] Peter Norvig et al., “The Unreasonable Effectiveness of Data,” IEEE Intelligent Systems 24, no. 2 (2009): 8–12.
</p>
</section>
