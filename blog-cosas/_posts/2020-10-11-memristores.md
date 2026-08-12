---
layout: post
categories: blog Divulgación
title:  "Memristores: ¿neuronas para tu ordenador?"
date:  2020-10-11 23:59
author: Sergio J Salvía Fernández
redirect-from:
---

Desde *Blade runner* o la *Saga fundación*, a los humanos siempre nos ha gustado imaginar ordenadores casi humanos, capaces de pensar y aprender de forma independiente y que se plantean el significado de la vida (normalmente con desastrosas consecuencias). A pesar de ello, llevamos bastante tiempo fallando en nuestras premoniciones distópicas (sin ir más lejos, ¡*Blade Runner* se desarrolla en un noviembre de 2019!). A día de hoy el uso de la inteligencia artificial está bastante extendido en distintos ámbitos, y pese a esto, seguimos sin poder saludar a nuestro jardinero androide cuando vamos a la universidad, por lo que parece que este futuro humanoide está bastante lejos... ¿o tal vez no?

Desde 2008 cientos de científicos trabajan para entender mejor lo que se conoce como **memristores**: dispositivos nanoelectrónicos que intentan imitar el funcionamiento de las neuronas, planteándose como una gran oportunidad de cara al diseño de nuevas estructuras computacionales, y como propulsores de una revolución en el campo de la inteligencia artificial. Son muchas las preguntas que quedan por responder en torno a este tema así que en este artículo, para no extendernos demasiado, vamos a intentar responder las más básicas: ¿cómo? y ¿por qué?.

<br />
<br />

### ¿Cómo aprende el cerebro?

En primer lugar ¿por qué nuestros ordenadores no son androides (o algo parecido)?. Al fin y al cabo «inteligencia artificial» ya es algo que suena bastante bien, y contiene la palabra «inteligencia»... ¿es todo una mentira?, ¿¡por qué se empeñan en engañarnos!? Que no cunda el pánico, veamos qué es lo que hace especial a la inteligencia biológica.

La forma que tiene el cerebro de almacenar información y, en consecuencia, aprender, es haciendo uso de las neuronas, más concretamente las conexiones que se establecen entre ellas: las sinápsis. En la [Figura 1](#Fig1) se muestra un esquema de su funcionamiento.

![Sinapsis](/img/blog/2020-10-11-memristores/Sinapsis.png)<br/>

<a name="Fig1">**Figura 1**</a>: Esquema de una sinapsis entre dos neuronas [[1]](#Ref1).

<br />
<br />

En este esquema podemos distinguir dos partes principales: el **axón terminal** y el **botón dendrítico**. Para no entrar mucho en la parte bioquímica, basta con pensar que el axón terminal es el cable final de una neurona, llamada **neurona presináptica** o emisora, mientras que el botón dendrítico es el cable inicial de la siguiente neurona, llamada **neurona postsináptica** o receptora. Cuando un impulso nervioso llega a la neurona presináptica, provoca que esta libere en el espacio sináptico una serie de neurotransmisores, que alcanzan la neurona postsináptica, pudiendo dar lugar a que el impulso continúe. Esta es la forma que tienen las neuronas de comunicarse entre ellas.

Pero, ¿qué tiene que ver esto con aprender? Cuando dos neuronas se conectan a través de una sinapsis, la concentración de iones de calcio en la neurona postsináptica aumenta muchísimo<sup name="f1">[1](#foot1)</sup>, para luego caer rápidamente, en un tiempo del orden de los milisegundos. Sin embargo, si se da otra sinápsis antes de que la concentración haya disminuido demasiado, puede superarse un umbral y que la cantidad de iones se mantenga constante en un valor mucho mayor que el que había antes de estos dos impulsos. La presencia de estos iones hace que la posibilidad de transmisión entre las dos neuronas que constituyen el enlace sea mucho más probable, ¡y así es como aprendemos!<sup name="f2">[2](#foot2)</sup>. La próxima vez que la neurona presináptica se active, será más probable que se active la neurona postsináptica que hayamos activado antes más veces. Esta capacidad por la cual las conexiones entre las neuronas pueden potenciarse o debilitarse se llama plasticidad sináptica, y es la base del aprendizaje en los seres vivos.  Un esquema conceptual de esto se representa en la [Figura 2](#Fig2).

![Grafo](/img/blog/2020-10-11-memristores/grafo.PNG)<br/>

<a name="Fig2">**Figura 2**</a>: Esquema conceptual del modelo de aprendizaje biológico. En azul se muestran enlaces reforzados, que hacen emerger conceptos en forma de red de conexiones. De esta forma, reforzando conexiones podemos crear cada vez conceptos más complejos.

<br />
<br />

Aquí podemos ver distintos nodos (que en la realidad estarían formados por subredes de neuronas) representando conceptos. Durante el aprendizaje de lo que es una manzana, en este ejemplo, se refuerzan las conexiones entre las características «redondo», «rojo» y «fruta». De esta forma el cerebro es capaz de representar un concepto abstracto simplemente usando el patrón que se forma gracias a las conexiones. Además, al estar reforzadas las conexiones, será capaz de recordar la manzana cuando vea una fruta roja, aunque no distinga bien su forma porque nos hayamos olvidado nuestras gafas en casa.

Cuando se descubrió esto y se pensó en implementarlo en ordenadores, se intentó hacer uso de este principio, aunque existe una enorme barrera que los esquemas clásicos de inteligencia artificial no pueden superar. Tal y como hemos descrito el proceso anteriormente, puede observarse que el procesado de información y la memoria son totalmente inseparables en el cerebro, ambos tienen lugar en la neurona. Así, nuestro cerebro es capaz de memorizar gracias a la plasticidad sináptica, y procesar información conectando distintas neuronas entre sí, por lo que el elemento principal es la sinapsis. Esto en un ordenador actual es imposible, ya que el procesado de información y la memoria están físicamente separados, lo que nos lleva al siguiente punto.

<br />
<br />

### Cuestión de velocidades: La arquitectura de von Neumann

Todos los ordenadores que hay actualmente en el mercado y disponibles para cualquier persona (a fecha de 2020) siguen una arquitectura computacional que se suele llamar arquitectura de von Neumann. Este esquema se representa en la [Figura 3](#Fig3).

![vNeumann](/img/blog/2020-10-11-memristores/vonneumann.jpg)<br/>

<a name="Fig3">**Figura 3**</a>: Esquema de distribución de elementos según la arquitectura de von Neumann[[2]](#Ref2).

<br />
<br />

El aspecto principal de este tipo de ordenadores es que la unidad de procesamiento, la CPU, (es decir, el lugar en el que se realizan las operaciones lógicas, donde el ordenador «piensa») está separado físicamente de la memoria, el lugar donde se almacena la información. Esto supone un grandísimo inconveniente, que en los últimos años ha empezado a preocupar a los científicos y científicas que se dedican a la computación. Tal y como están diseñados nuestros ordenadores, la CPU y la memoria deben intercambiar información **constantemente**, y ese flujo de información consume más tiempo que muchas actividades que tiene que realizar la CPU. Sería algo así como que un profesor en un examen nos mandara hacer una multiplicación, para luego ordenar entregar la respuesta en papel a un profesor en Pekín; la respuesta la podremos obtener rápido, pero perderíamos muchísimo tiempo en el viaje. Este problema se llama **cuello de botella de von Neumann** (en inglés *von Neumann bottleneck*), y es otro de los motivos por los que los memristores podrían suponer una revolución a nivel computacional, ya que en principio, como veremos más adelante, no tienen este problema. Este cuello de botella supone una gran desventaja para nuestras inteligencias artificiales, ya que su velocidad se ve mermada.

<br />
<br />

### Cuestión de aprendizaje: aprendizaje supervisado vs. aprendizaje no supervisado

Por otro lado, las inteligencias artificiales (IA) con las que se trabaja actualmente siguen entrenamientos de **aprendizaje supervisado**. Cuando se diseña una red neuronal se crean computacionalmente (se implementan a través de software) una serie de unidades llamadas neuronas (por el símil con el cerebro), y se establece entre ellas una serie de conexiones cuya probabilidad viene modulada por un número llamado peso sináptico (de nuevo, el símil). Para aprender, y he aquí la gran diferencia, debemos introducir manualmente en la IA un _target_, debemos decirle de antemano qué queremos que haga.

Pongamos un ejemplo de clasificación, en el que queremos que nuestra IA aprenda a reconocer manzanas. Para ello, debemos enseñar a la IA cientos de miles de fotografías de manzanas y de otros objetos, y en cada caso decirle si son o si no son una manzana, de ahí el nombre de aprendizaje supervisado. De esta forma, la red artificial va poco a poco modificando los parámetros del sistema, los pesos sinápticos, hasta ser capaz de reconocer si la imagen que se le enseña es una manzana. Y esto es sorprendente, pero también tiene varios inconvenientes.

El primero de ellos es el más evidente, y es que requiere de un alto coste temporal y energético, mientras que el cerebro es muy muy (y muchos muy) eficiente si se tiene en cuenta la cantidad de información que procesa por unidad de tiempo. El segundo es su limitación de cara a la velocidad del aprendizaje, debido a la arquitectura de von Neumann, ya que los pesos se almacenan en memoria, mientras que el reconocimiento se realiza en la CPU. Finalmente, un aspecto más abstracto: una red de aprendizaje supervisado no es capaz de reconocer la información que contiene lo aprendido.

Parémonos en este último punto. La red neuronal que acabamos de explicar sabe reconocer una manzana si se le enseña, pero no sabe por qué, no es capaz de reconocer la información que contiene la manzana. Por el contrario, en el caso de las neuronas, el concepto de manzana se representa a través de distintos subgrupos de información, llamados _clusters_, que se conectan entre sí, por lo que nuestro cerebro sí sabe lo que caracteriza una manzana. En otro ejemplo que a lo mejor es más claro, nuestro cerebro puede reconocer una silla, aunque esta sea muy moderna y en lugar de 4 patas se sostenga en alguna forma vanguardista.

Esta es la gran diferencia que presenta el cerebro con su plasticidad frente a la inteligencia artificial común, que el aprendizaje del cerebro es **aprendizaje no supervisado**. No necesitamos que alguien en una tienda venga a decirnos qué son sillas y qué son manzanas. Aunque no supieramos de antemano qué son, al exponernos a distintas sillas y manzanas nuestro cerebro sería capaz de reconocer ciertas características, clasificarlas en distintos grupos, y construir conceptos complejos a partir de conceptos más simples, lo que da lugar a un aprendizaje mucho más rico.

<br />
<br />

### Los memristores: Neuronas artificiales

En resumen, hay dos problemas principales a los que la inteligencia artificial debe hacer frente: la separación entre memoria y procesamiento, y el aprendizaje no supervisado. Estos problemas para nuestro cerebro son pan comido, pero con nuestros ordenadores (pobrecitos ellos) son incapaces de solventarse... de momento. Es aquí donde introducimos al gran protagonista, que se ha hecho esperar pero que por fin revelamos con detalle: los **memristores**.

¿Y si se pudiera implementar de forma física la plasticidad neuronal en un dispositivo electrónico? Pues esto precisamente es lo que los memristores consiguen, y para ello solo necesitan 3 elementos: dos electrodos metálicos, y una capa intermedia de un material especialmente diseñado para el memristor. Y, lo más importante, ¡su tamaño es del orden de los nanométros! ¡Como las neuronas bilógicas! En la [Figura 4](#Fig4) puedes ver un esquema del dispositivo, que como podrás observar es muy parecido a una resistencia (de ahí su nombre, memristor = memoria + resistor).

¿Cómo consigue un memristor imitar a una neurona? Desde hace unos 50 años, los científicos y científicas que se dedican a la ciencia de materiales saben que cuando algunos óxidos son expuestos a estrés eléctrico se da una transición de aislante a conductor; es decir, que si aplicamos una diferencia de potencial lo suficientemente elevada podemos modificar la resistencia del material, disminuyéndola, ¡y esto es justo lo que hacen las neuronas! Otra alternativa consiste en crear «caminos» conductores entre los terminales. Esto se consigue gracias a que la aplicación sucesiva de diferencias de potencial cambia cómo se configuran los iones de la capa intermedia (ver [Figura 4](#Fig4)).

![memristor](/img/blog/2020-10-11-memristores/memristor.PNG)<br/>

<a name="Fig4">**Figura 4**</a>: Memristor antes y después del aprendizaje. El aumento de la conductividad en este caso va ligado de la creación de canales de conexión entre ambos terminales después de la aplicación sucesiva de diferencias de potencial.

<br />
<br />

Recordemos que nuestro cerebro aprende reforzando conexiones entre neuronas a través de la acumulación de iones de calcio, lo que aumenta la probabilidad de que la corriente se transmita. En nuestro caso, es la disminución en la resistencia o la creación de canales de conducción lo que aumenta esa probabilidad. De esta forma, los memristores suponen un paso muy grande de cara a superar la arquitectura von Neumann, ¡la memoria se almacena en la misma unidad que transmite en el impulso!

De cara a su aplicación para tareas que no estén relacionadas con inteligencia artificial, podemos crear redes (mallas) de memristores a través de los cuales la intensidad circula en columnas, y donde podmeos inducir potenciales en las filas. De esta forma los potenciales aplicados en la dirección transversal también pueden modificar la capa intermedia, y codificar información, ¡y estas redes ya se han hecho funcionar en el laboratorio! Aunque todavia a pequeña escala, es un gran paso para superar la arquitectura von Neumann.

Por otro lado, el memristor aprende cuando se usa. Si ha sido utilizado muchas veces, si se ha visto sometido a ese estrés eléctrico en varias ocasiones, entonces su resistencia disminuirá, aumentando la probabilidad de conexión... ¡es un aprendizaje no supervisado! Si tenemos un conjunto de memristores que representa los términos fruta, rojo y redondo, y sus conexiones se refuerzan a través de la práctica (no hace falta decirle que es una manzana, simplemente la red lo aprende con el uso), entonces nuestra red es capaz de representar la manzana con un patrón de conexiones reforzadas. Además, al estar dividido en características interconectadas, la red es capaz de extraer el concepto «manzana» a partir de información parcial, como «fruta roja», tal y como hace el cerebro. Esto supone un grandísimo avance de cara a la inteligencia artificial, pero también para que nosotros mismos aprendamos. Al fin y al cabo, cuando nuestro cerebro reconoce objetos o conceptos, hay veces que nosotros mismos no somos capaces de entender qué características son las que hay reforzadas creando el patrón. Haciendo uso de redes de aprendizaje no supervisado podemos estudiar qué conceptos se refuerzan, porque podemos estudiar _in situ_ las conexiones entre _clusters_ ¡y descubrir patrones que ni siquiera nosotros habíamos reconocido!

<br />
<br />

### Y ahora... ¿qué?

La idea de los memristores es muy llamativa, y puede ser una revolución en la computación y en la inteligencia artificial, pero todavía son muchos los retos que se deben superar, y las mejoras que se deben implementar. Para quien tenga un mayor interés, dejamos dos artículos que estudian los memristores, su pasado, y su futuro en profundidad, y que han sido la base de este artículo ([[3]](#Ref3) y [[4]](#Ref4)).

¿Será este el paso que nos faltaba para conseguir diseñar androides capaces de imitar comportamientos humanos, o todavía se nos escapa algo? ¿Surgirá la consciencia de forma espontánea al crear una red lo suficientemente grande de memristores, o nuestro cerebro esconde algún secreto todavía sin descubrir? ¿Soñarán nuestros portátiles con ovejas eléctricas?

<br />
<br />

---

<a name="foot1">1</a>: Aquí hablamos del calcio, pero en general se dan un conjunto de corrientes iónicas que involucran otras especies químicas como el sodio o el potasio. La sinápsis es un proceso complejo, pero de hecho... ¡muy físico! El modelo de ecuaciones diferenciales que describe los procesos de disparo de un inpulso nervioso en las neuronas se conoce como Modelo de Hodgkin y Huxley, y le valió a estos dos biofísicos el Nobel en fisiología o medicina en 1963.[↩](#f1)

<a name="foot2">2</a>: «The calcium concentration in the post-synaptic neuron increases following a spiking event of the pre-synaptic neuron, then decays within a timescale of tens of milliseconds. If the post-synaptic neuron also fires within this time frame, the calcium concentration can be enhanced above a threshold that triggers synaptic potentiation. The calcium concentration, and in turn the strength of the potentiation, depends on the relative timing of the pre- and postneuron spikes and this mechanism has been argued as the possible underlying process behind the observed spike-timing-dependent plasticity and rate-dependent plasticity effects» [[3]](#Ref3). [↩](#f2)

<br />
<br />

### Referencias

<a name="Ref1">[1]</a>: Wikimedia Commons[https://commons.wikimedia.org/wiki/File:Sinapsis.png] (visita 07/10/2020)<br/>
<a name="Ref2">[2]</a>: Wikimedia Commons[https://commons.wikimedia.org/wiki/File:Arquitecturaneumann.jpg] (visita 07/10/2020)<br/>
<a name="Ref3">[3]</a>: M.A. Zidan, J.P. Strachan, W.D. Lu, _The future of electronics based on memristive systems_, Nat. Electron. 1, 22–29 (2018)<br/>
<a name="Ref4">[4]</a>: M. Ziegler, Ch. Wenger, E. Chicca, H. Kohlstedt _Tutorial: Concepts for closely mimicking biological learning with memristive devices: Principles to emulate cellular forms of learning_ J. Appl. Phys. 124, 152003 (2018)<br/>
