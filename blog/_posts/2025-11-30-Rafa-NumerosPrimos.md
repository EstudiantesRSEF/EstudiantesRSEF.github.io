---
layout: post
categories: 
   - blog 
   - Divulgación 
title:  "Euclides, Furstenberg y la infinitud de números primos"
date: 2025-11-30 11:00
author: Rafa Ojeda
redirect-from:
excerpt: "El concepto de número primo nos aparece en las clases de matemáticas desde que somos muy pequeños. Euclides ya los estudió hace más de dos mil años y demostró que existen infinitos de ellos. En el colegio no se nos suele enseñar a hacer demostraciones rigurosas, por ello en esta publicación doy la prueba del Teorema de Euclides, la cual es tan rigurosa como accesible para todo el mundo. Para los más “frikis” de las matemáticas incluyo una demostración topológica de la infinitud de los números primos, publicada por Furstenberg en 1955."
---

<section class="blog">

<p class="clearfix">
  El concepto de número primo nos aparece en las clases de matemáticas desde que somos muy pequeños. Euclides ya los estudió hace más de dos mil años y demostró que existen infinitos de ellos. En el colegio no se nos suele enseñar a hacer demostraciones rigurosas, por ello en esta publicación doy la prueba del Teorema de Euclides, la cual es tan rigurosa como accesible para todo el mundo. Para los más “frikis” de las matemáticas incluyo una demostración topológica de la infinitud de los números primos, publicada por Furstenberg en 1955.
</p>

<br>

<h2> Introducción </h2>
<p>
La idea de número primo es esencial en las matemáticas y, en concreto, en la teoría de números. Una definición clásica es decir que un número es <b>primo</b> si no puede expresarse como producto (multiplicación) de dos números menores que él. Así, el número \(13\) es primo ya que sólo puede expresarse como \(13 · 1\). El \(8 = 2·4\) no es un número primo. Otra definición equivalente es decir que un número es primo si solo puede dividirse por \(1\) y por sí mismo. Hay aquí un pequeño problema, porque el \(1\) no se considera un número primo, las definiciones anteriores son entonces válidas para números naturales mayores que \(1\), y por definición \(1\) no es primo. Una definición más compacta es la siguiente:
</p>

<p><blocknote>
 Un número es primo si es divisible exactamente por dos números
 distintos.
  </blocknote>
</p>

<p>
 Con esta definición \(1\) no es primo, solo es divisible por sí mismo. La definición es equivalente a las anteriores porque cualquier número distinto de \(1\) es divisible por, al menos, dos números, \(1\) y por sí mismo; por tanto los primos son los que pueden dividirse por \(1\) y por sí mismo. El teorema fundamental de la aritmética establece lo siguiente:
</p>
<p><blocknote>
 Todo número natural tiene una representación única como producto
 de factores primos, salvo el orden.
</blocknote>
</p>
<p>
Los números primos tienen muchas aplicaciones en la tecnología actual, un ejemplo clásico es el algoritmo RSA [1], que usa la factorización de números enteros para crear claves públicas seguras, es decir, se utiliza la teoría de números primos para crear un algoritmo con el que se pueden fabricar claves que permitan la transmisión de información de forma segura.
  </p>
<p>
 Hay muchas preguntas que podríamos hacernos sobre los números primos, ¿cómo sabemos si un número cualquiera es primo? ¿Cuál es la probabilidad de que al escoger un número aleatorio, este sea primo? <b>¿Cuántos números primos hay?</b> En esta pequeña publicación nos centramos en la última pregunta.
  </p>
<p>
 Quiero aprovechar para recomendar el libro de <b>Isaac Asimov</b>, <i>El electrón es zurdo y otros ensayos científicos</i>, tiene un capítulo sobre números primos del cual me inspiro. Asimov comenta brevemente que un lector le escribe una carta dando una demostración sobre la existencia de infinitos números primos, sin embargo, esta ya la dio <b>Euclides</b> hace más de dos mil años.
  </p>
<p>
 Euclides, considerado el padre de la geometría, fue un matemático griego. En su obra, <i>Los Elementos</i>, da una prueba de la infinitud de los números primos, lo cual, por lo menos para mí, no deja de ser sorprendente cómo en la antigua Grecia ya se trataban conceptos matemáticos tan abstractos como el propio infinito. Lo que es más sorprendente de todo es que la demostración es tan simple como instructiva y por ello vamos a realizarla con detalle, de forma que sea accesible a todo el mundo.
 </p>
<p>
  Al poco rato de leer la demostración de Euclides, encontré otra prueba de la infinitud de los números primos. Esto fue la excusa perfecta para escribir este pequeño texto.
  </p>
<p>
 Esta prueba fue propuesta por <b>Furstenberg</b> [3], en un artículo de menos de media carilla. Para esta prueba se necesitan unos requisitos mínimos de topología general (saber qué es un conjunto abierto, cerrado, y las propiedades esenciales), en cualquier caso, pocos planes mejoran al de estar una tarde estudiando topología (en el artículo de wikipedia, mismo) con el objetivo de entender esta prueba.
</p>

<p><h2>La demostración de Euclides</h2></p>
<p>
<img class="img-left" src="/img/blog/2025-11-30-Rafa-NumerosPrimos/losElementos.jpeg"> Vamos a ilustrar primero la idea de la prueba. Consideremos los números primos \(2\) y \(3\). Si hacemos su producto y le sumamos \(1\), obtenemos \(2·3+1 = 7\), otro número primo. Hacemos ahora \(2 · 3 · 7 + 1 = 43\), de nuevo obtenemos un primo. Si ahora hacemos \(2·3·7·43+1 = 1807 = 13·139\) obtenemos un número que no es primo, sin embargo, es producto de primos distintos de \(2,3,7,43\). Esto nos da un método para, dado un conjunto finito de números primos, encontrar otro número primo fuera de este.
    </p>
<p>
 Consideremos entonces un conjunto finito de números primos \(p_1,...,p_n\) y consideremos el producto de todos estos números primos y sumémosle \(1\):
    </p>
<p><blocknote>
 \[
   p =p_1...p_n +1
\]
</blocknote>
    </p>
<p>
Hay dos opciones: que \(p\) sea otro número primo, distinto a todos los de nuestra familia o que pueda factorizarse como producto de varios números primos menores a él.
    </p>
<p>
 Supongamos que \(p\) no es primo. Si dividimos \(p\) entre cualquier elemento \(p_i\) de la familia \(p_1,...,p_n\) obtenemos
    </p>
<p><blocknote>
\[
   \frac{p}/{p_i} = p_1...p_{i−1}p_{i+1} ...p_n + \frac{1}/{p_i}.
   \]
 </blocknote>
    </p>
<p>
 La única forma de que el resultado de esta división sea un número entero es que \(p_i = 1\), lo cual no es posible al no ser \(1\) un número primo. Por tanto ningún \(p_i\) divide a \(p\). Concluimos que si \(p\) no es primo, debe ser producto de primos que no se encuentren en la familia que hemos considerado. Con esto se prueba que dado cualquier conjunto finito de números primos, siempre encontraremos primos fuera de él, en otras palabras, ningún conjunto finito de números primos contiene a todos ellos. Por tanto, deben existir infinitos, es decir, deben existir infinitos números primos.
  </p>
<p>
<h2>La demostración de Furstenberg</h2>
  </p>
<p>
<img class="img-left" src="/img/blog/2025-11-30-Rafa-NumerosPrimos/Furstenberg.jpeg">Hasta ahora, aunque no lo he especificado (por simplificar las cosas), hemos trabajado únicamente con números naturales. En esta sección vamos a considerar enteros, ya que es el tratamiento más moderno. Un entero p es primo si \(p ̸= 1,−1\) y si únicamente es divisible por \(±1\) y por \(±p\).
   </p>
<p>
 Vamos a darle una topología a \(\mathbb{Z}\) de forma que las progresiones aritméticas \(S(a,b) = {a +bn : n ∈ \mathbb{Z}}\), donde \(a,b ∈ \mathbb{Z]\) y \(b ⩾ 1\), sean una base para dicha topología. En concreto, \(U ⊆ \mathbb{Z}\) es abierto en esta topología si para todo \(a ∈ U\) existe \(b ∈ \mathbb{Z}\), con \(b ⩾ 1\) tal que \(S(a,b) = {a+bn : n ∈ \mathbb{Z}} ⊆ U\). Comprobar que esto es efectivamente una topología es un ejercicio relativamente sencillo. Hay dos observaciones esenciales que debemos hacer.
   </p>
<ul>
<p>
 <li>Cualquier abierto en esta topología debe tener una cantidad infinita de elementos, ya que cualquier abierto contiene, al menos, una sucesión aritmética.</li>
</p>
  <p>
    <li> Una sucesión aritmética \(S(a,b)\) es abierto y cerrado en esta topología. Que es abierto es claro por la propia definición de la topología. Es también muy intuitivo ver que \(S(a,b) = {a + bn : n ∈ \mathbb{Z}}\) es cerrado. El complemento de este conjunto es la unión de las progresiones aritméticas \({r + bn : n ∈ \mathbb{Z}}\) con \(r ∈ {a +1,...,a + b − 1}\). Por tanto, el complemento de una sucesión aritmética es abierto al ser unión de \(b−1\) sucesiones aritméticas. Entonces \(S(a,b)\) es también un conjunto cerrado en esta topología para \(\mathbb{Z}\). La intuición de esto último se basa en considerar una sucesión aritmética, por ejemplo \(S(1,3) = {...,−2,1,4,7,10,...}\). El complemento de este conjunto es \({...,−1,2,5,8,11,...}\cup{...,−3,0,3,6,9,...}\) que es la unión de las dos sucesiones aritméticas \(S(2,3)\) y \(S(3,3)\).</li> 
  </p>
</ul>
<p>Con esto ya podemos dar la prueba. Consideramos \(\mathbb{Z}\) equipado con esta topología. Sea el conjunto
</p>
<p>
<blocknote>
   \[
   \bigcup_{p primo} p\mathbb{Z} = \bigcup_{p primo} S(0,p) = \mathbb{Z}−{−1,1},
   \]
</blocknote>
</p>
<p>
 donde la segunda igualdad se sigue de que cualquier entero, excepto \(1\) y \(−1\), se escribe como el producto de un entero por un primo. El conjunto \(\mathbb{Z}−{−1,1}\) no puede ser cerrado, ya que \({−1,1}\) no puede ser abierto al ser finito. Por otro lado \(\mathbb{Z}−{−1,1}\) es unión de cerrados, ya que los \(S(0,p)\) lo son, como acabamos de discutir. Esto implica que esta unión no puede ser finita, por tanto el conjunto de los números primos debe ser infinito.
</p>


  
<br>

<p>
<h2>Referencias:</h2>
</p>
<p>
[1] <a href="https://www.usc.gal/es/departamento/fisica-particulas/directorio/jose-daniel-edelstein-glaubach-143228"> Wikipedia: RSA</a>
</p>
<p>
[2] Isaac Asimov. El electrón es zurdo y otros ensayos científicos. Trad. por
 Francisco Morán Samaniego. Alianza Editorial, 2013.
</p>
<p>
[3] H. Furstenberg. “On the Infinitude of Primes”. En: The American Mathe
matical Monthly 62.5 (1955), págs. 353-354..
</p>
