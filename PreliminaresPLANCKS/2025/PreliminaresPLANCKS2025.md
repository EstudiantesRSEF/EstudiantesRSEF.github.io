---
layout: default
title: Preliminares PLANCKS 2025
permalink: /PreliminaresPLANCKS2025pruebasmd/
---

<div class="no-pad-top" id="index-page">
  <div class="container">
     <div class="section">

<!-- BANNER -->
      <img class="materialboxed" width="100%" src="/img/eventos/2024-PrelisPLANCKS/bannerPrelis24.png">


<!-- RESULTADOS -->
      <hr>
      <h2 style="text-align: center;">        
          <a href="{{ site.url}}/PreliminaresPLANCKS/2024/clasificacionprelis2024.pdf" target="_blank"><span style="color: #3ca41c;"><strong>CLASIFICACIÓN DE LAS PRELIMINARES DE PLANCKS 2024</strong></span></a>        
      </h2>
      <hr>

<!-- SOLUCIONES -->
      <h2 style="text-align: center;">        
          <a href="https://drive.google.com/drive/folders/1W5TApAH-R18FIYzg79aIk_bP2T36iI4F" target="_blank"><span style="color: #3ca41c;"><strong>SOLUCIONES DE LOS PROBLEMAS</strong></span></a>        
      </h2>
      <hr>

<!-- INTRODUCCIÓN -->
      <p style="text-align: justify;">¿Tienes ganas de pasar un rato divertido resolviendo problemas de física? ¡Ya tenemos aquí la séptima edición de las <strong>Preliminares de PLANCKS</strong>! Y este año también ofrecemos <strong>1000€ en PREMIOS</strong> gracias al apoyo de la Fundación Ramón Areces. Así que reúne a un grupo de motivados como tú y sigue explorando la web para saber más. ¡Bienvenid@!</p>

<!-- BOTONES -->
      <div class="section">
        <div class="row center">
          <a href="#info-modal" id="info-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: #ffffff; color: #3ca41c; display: inline-flex; align-items: center;"><i class="material-icons" style="padding-right: 8px;">info</i><strong>Información general</strong></a>
        </div>
        <div class="row center">
          <a href="#supervisores-modal" id="supervisores-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: #ffffff; color: #3ca41c; display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">remove_red_eye</i><strong>Supervisoras/es</strong></a>
          <a href="#plancks-modal" id="conocer-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: #ffffff; color: #3ca41c; display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">explore</i><strong>Conoce Plancks</strong></a>
          <a href="#premios-modal" id="premios-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: #ffffff; color: #3ca41c; display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">star</i><strong>Premios</strong></a>
          <a href="#inscripcion-modal" id="inscripcion-button" class="collection-item modal-trigger btn-large waves-effect waves-light" style="background-color: #ffffff; color: #3ca41c; display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">create</i><strong>Inscríbete</strong></a>
        </div>
      </div>

<!-- COUNTDOWN -->
<!--
      <div class="row">  
        <p style="text-align: justify;">Las inscripciones para las Preliminares de PLANCKS 2024 se cerrarán en...</p>
        <h3 style="text-align: center;"><p id="countdown" style="text-align:center"></p></h3>
        <p style="text-align: justify;">¡No dejes tu inscripción para el último momento para asegurarnos que tendrás aulas y supervisores disponibles en tu facultad!</p>
        <p style="text-align: justify;"> Sólo para equipos con miembros del GdeE. Hemos comenzado ya con la promoción a todos los estudiantes de física de España. ¡Así que no te quedes sin plaza!</p>
      </div> -->
      
<!-- FINAL INSCRIPCIONES -->
<div class="section">  
        <div class="row center">
          <p style="text-align: justify;">¡Las inscripciones para las Preliminares de PLANCKS 2024 han sido un éxito! Hemos vuelto a superar el número de participantes, con un total de...</p>
          <h3 style="text-align: center;">¡¡105 equipos en 19 sedes!!</h3>
          <p style="text-align: justify;">¡Gracias por ser parte de las Preliminares de PLANCKS 2024 y contribuir a su éxito!</p>
        </div>
      </div>



<!-- AUTORES -->
<!--
      <div class="section">
        <h3 id="Autores">¡Conoce a l@s autor@s de los problemas!</h3>
        <p style="text-align: justify;">Los miembros del Comité Académico de las Preliminares PLANCKS 2024 son:</p>

        <div class="col s12 m6">
          <div class="row center">
            {% for person in site.persons %}
            {% if person.evento contains "Prelis2024" %}
              <ul class="collection waves-effect waves-light" style="width: 40%">
                <a href="#{{ person.id | remove: "/" }}-modal" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">
                  <li class="collection-item avatar2">
                    <img src="{{ person.img }}" alt="" class="circle">
                    <span class="title" style="padding-left: 10px">{{ person.nombre }}</span>
                    <p style="padding-top: 10px">{{ person.rol }}</p>
                  </li>
                </a>
              </ul>
            {% endif %}
            {% endfor %}    
          </div>
       </div>
     </div>
-->

<!-- COMITÉS -->
    <div class="row"> 
      <p style="text-align: justify;">Además, puedes <a href="#comites-modal" class="prelis24 modal-trigger">consultar aquí</a> los integrantes del Comité Organizador de las Preliminares de PLANCKS 2024.</p>
    </div>

    
     <!-- Modal PONENTES -->

     {% for person in site.persons %}
     {% if person.evento contains "Prelis2024" %}

     <div id="{{ person.id | remove: "/" }}-modal" class="modal">
       <div class="modal-content">
         <div class="section" style="padding-left: 30px; padding-right: 30px;">

           <div class="row">
             <div class="col s12 m6 l6">
               <div class="row center">
                <img src="{{ person.img }}" alt="" class="circle" width="70%">
               </div>
             </div>
             <div class="col s12 m6 l6">        
               <div class="row center" style="padding-left: 30px; padding-top: 50px;">
                 <h3 class="justify">{{ person.nombre }}</h3>
                 <h5 class="justify">{{ person.aff }}</h5>
                 <h5 class="justify" style="padding-top: 10px;">{{ person.roldes }}</h5>
               </div>
             </div>
           </div>

           <div class="row">
             <h2 class="justify">Biografía</h2>
             {%- if person.bio1 -%}<p style="text-align: justify;">
             {{ person.bio1 }}
             </p>{%- endif -%}
             {%- if person.bio2 -%}<p style="text-align: justify;">
             {{ person.bio2 }}
             </p>{%- endif -%}
             {%- if person.bio3 -%}<p style="text-align: justify;">
             {{ person.bio3 }}
             </p>{%- endif -%}
           </div>

         </div>
       </div>
       <div class="modal-footer">
         <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
       </div>
     </div>

     {% endif %}
     {% endfor %}


<!-- MAP -->

    <div class="section">
      <div class="section">
        <strong><h3>El mapa de las Preliminares de PLANCKS 2025</h3></strong>
        <p style="text-align: justify;">¡En el siguiente mapa puedes consultar todas las sedes!</p>
        <iframe src="/PreliminaresPLANCKS/2025/universities_map.html" width="100%" height="600" style="border:none;"></iframe>                
      </div> 
    </div>



<!-- EDICIONES ANTERIORES -->
    <div class="section" id="ediciones-anteriores">
      <div class="row center">
        <h3 id="EdicionesAnteriores">Ediciones Anteriores</h3>
        <p style="text-align: justify;">En esta sección encontrarás información sobre ediciones anteriores de las Preliminares de PLANCKS como clasificaciones, exámenes resueltos o los integrantes de los Comités Organizador y Académico.</p>
      </div>
    </div>

    {% assign loopindex = 0 %}
    {% for event in site.events reversed %}
    {% if event.title contains "Preliminares de PLANCKS"%}
    {% if event.title != "Preliminares de PLANCKS 2024"%}
    {% assign rowfinder = loopindex | modulo:2 %}
    {% if rowfinder == 0 %}
      <div class="row">
    {% endif %}
      <div class="col s12 m6">
        <div class="card horizontal">
          <div class="card-image">
    	      <img style="height: 230px; object-fit: cover;" src="{{ event.cover }}">
          </div>
          <div class="card-content">
        	  <span class="card-title grey-text text-darken-4">{{ event.title }}</span>
        	  <p><small><b>{{ event.place }}</b> {{ event.startingdate | date: '%d %b %Y' }} {% if event.endingdate != nil %} - {{ event.endingdate | date: '%d %b %Y' }}                    {% endif %} </small></p>
          </div>
        	<div class="card-action">
        	  <a href="{{ event.ranking }}" target="_blank">Clasificación</a>
            <a href="{{ event.exam }}" target="_blank">Soluciones</a>
        	  <a href="{{ event.url }}">Post web</a>
            {% if event.comm != nil %}<a href="{{ event.comm }}">Comités Organizador y Académico</a>{% endif %}
        	</div>
        </div>
      </div>
    {% if rowfinder == 1 %}
      </div>
    {% endif %}
    {% assign loopindex = loopindex | plus: 1 %}
    {% endif %}
    {% endif %}
    {% endfor %}
    {% if loopindex == 1 %}
      </div>
    {% endif %}
  </div>
</div>


<!-- INFO MODAL -->
<div id="info-modal" class="modal">
  <div class="modal-content-tight">
    
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row center">
        <h3 class="justify">Información general</h3>

        <p style="text-align: justify;"><strong>¿En qué consisten las Preliminares?</strong> Las Preliminares de PLANCKS 2024 es una competición de física teórica por equipos en la que habrá que resolver 4 problemas. Puedes ver las pruebas de otros años en la <a class="prelis24 modal-close" href="#ediciones-anteriores">sección de Ediciones anteriores</a>.</p>
        
        <p style="text-align: justify;"><strong>¿Cómo puedo participar en las Preliminares?</strong> Es muy sencillo: si conoces un@s cuant@s amig@s con los que te apetecería pasar un buen rato, resolver problemas que resultan todo un reto e inventarte respuestas disparatadas cuando no sepas por donde salir, reúne un equipo de hasta cuatro personas y no lo dudes: <a class="prelis24" href="https://docs.google.com/forms/d/e/1FAIpQLSe621X8cPqOPlC6gNIk9nioyiRIrpsDfFANJnPRVUAaavZDNA/viewform" id="inscripcion-button" target="_blank">¡inscríbete!</a> Esta primera fase nacional nos permitirá seleccionar al mejor equipo para que nos represente en la competición internacional. Por cierto, es posible que el comité organizador os pida ayuda para encontrar un aula y un/a supervisor/a para poder garantizar una sede de las Preliminares en vuestra ciudad.</p>

        <p style="text-align: justify;"><strong>¿Cómo y cuándo tendrán lugar las Preliminares?</strong> Las Preliminares de PLANCKS 2024 en España se celebrarán el próximo <strong>viernes 1 de marzo por la tarde</strong>, de forma simultánea en sedes situadas en facultades de física del territorio nacional. La prueba durará 3 horas y tendrá lugar de 16:00 a 19:00 (GMT+1).</p>
        
        <p style="text-align: justify;"><strong>Y si la prueba os sale muy bien hay premio por partida doble...</strong></p>
        
        <list class="a">
          <li style="text-align: justify;">Las Preliminares de PLANCKS son además la fase de clasificación nacional para PLANCKS en nuestro país. El mejor equipo de las Prelis nos representará en mayo en la final, ¡que se celebra en Dublín! La inscripción y alojamiento estará cubierta por el Grupo de Estudiantes. ¿Que aun no sabes lo que es PLANCKS? Encuentra toda la información en <a class="prelis24 modal-trigger" href="#plancks-modal">este enlace</a>.</li>
          <li style="text-align: justify;">¡Y este año tenemos premios para los dos mejores equipos gracias a la financiación de la Fundación Ramón Areces! Lee más en <a href="#premios-modal" class="prelis24">este enlace</a>.</li> 
        </list> 

        <p style="text-align: justify;"><i class="material-icons" style="padding-right: 8px;">warning</i><strong>Lee las reglas de la competición en <a class="prelis24" href="/PreliminaresPLANCKS/2024/CompetitionRules_PrelisPLANCKS2024.pdf" id="reglas-button" target="_blank">este enlace</a>.</strong></p>
      </div>
    </div>
    
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="section" style="padding-left: 15px; padding-right: 15px; border: 2px solid #3ca41c;">
        <strong>Términos y Condiciones de IAPS</strong> | Todos los participantes:
        <p style="text-align: justify;">- Declaran conocer que PLANCKS está regulado por el Artículo 12 de las <a class="prelis24" href="https://www.iaps.info/wp-content/uploads/2023/01/iaps__Regulations_2022.pdf" target="_blank">IAPS Regulations</a>.</p>
        <p style="text-align: justify;">- Y se comprometen a cumplir las <a class="prelis24" href="https://www.iaps.info/wp-content/uploads/2021/01/PLANCKS-General-Rules-EGM-2020.pdf" target="_blank">Reglas Generales de PLANCKS</a>, además del <a class="prelis24" href="https://www.iaps.info/wp-content/uploads/2022/08/IAPS-Code-of-Conduct-2020.pdf" target="_blank">IAPS Code of Conduct</a>.</p>
        <p style="text-align: justify;">Además, habrán de tener en cuenta que el Grupo de Estudiantes de la RSEF no ejerce en modo alguno de intermediario económico en este convocatoria de PLANCKS.</p>
      </div>
    </div>
    
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div>


<!-- PREMIOS MODAL -->
<div id="premios-modal" class="modal">
  <div class="modal-content-tight">
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row center">
        <h3 class="justify">Premios</h3>
        <p style="text-align: justify;">
          Este año contamos con el apoyo y financiación de la <a class="prelis24" href="https://www.fundacionareces.es" id="ramon-areces" target="_blank">Fundación Ramón Areces</a>, que nos permite ofrecer premios a los dos mejores equipos: 550€ para el primer equipo y 450€ para el segundo. Además, los clasificados participarán en la fase internacional de PLANCKS en Dublín, con la inscripción y el alojamiento financiado por el Grupo de Estudiantes.
        </p>
        <p style="text-align: justify;">
          Todo esto no sería posible sin el apoyo de la Fundación Ramón Areces y de los miembros del GdeE. ¡Así que muchas gracias por confiar en nosotros!
        </p>
        <p style="text-align: justify;">
          Si aún no sabes de qué estamos hablando, clica en este <a class="prelis24 modal-trigger" href="#info-modal">este enlace</a>.
        </p>
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div>

<!-- SUPERVISORES MODAL -->
<div id="supervisores-modal" class="modal">
  <div class="modal-content-tight">
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row center">
        <h3 class="justify">Información para supervisoras/es</h3>
        <p style="text-align: justify;">¡Hola! Si has llegado hasta esta página es que puedes ser un/a posible supervisor/a de examen en las Preliminares de PLANCKS 2024. A continuación, te contamos cuáles son los requisitos y las responsabilidades del cargo.</p>
        <p style="text-align: justify;">Lee sobre la información general de las Preliminares de PLANCKS en <a class="prelis24 modal-trigger" href="#info-modal">este enlace</a>.</p>
        <p style="text-align: justify;"><strong>¿Cuáles son los requisitos del cargo de Supervisor/a?</strong> Son dos:</p>
        <list class="a">
          <li style="text-align: justify;">Ser investigador pre- o post-doctoral o ser docente universitario o de educación secundaria (en activo o jubilado).</li>
          <li style="text-align: justify;">Comprometerse a tener disponibilidad en el rango horario 15:30h - 19:30h el viernes 1 de marzo de 2024, así como a dedicar esa disponibilidad a las responsabilidades abajo indicadas.</li>
        </list>
        <p style="text-align: justify;"><strong>¿Cuáles son las responsabilidades del cargo de Supervisor/a?</strong> Son las siguientes:</p>
        <list class="a">
          <li style="text-align: justify;">Imprimir las hojas de la prueba y custodiarlas hasta la realización del examen.</li>
          <li style="text-align: justify;">Comprobar la identificación de los participantes a la prueba.</li>
          <li style="text-align: justify;">Supervisar el desarrollo de la prueba durante su realización y velar por el cumplimiento de las normas establecidas.</li>
          <li style="text-align: justify;">Recoger las hojas de la prueba y escanearlas para enviarlas al Comité Organizador el mismo día de la prueba.</li>
        </list>
        <p style="text-align: justify;"><strong>¿Cómo puedo supervisar un examen en las Preliminares 2024?</strong> Es muy sencillo: sólo tienes que rellenar <a class="prelis24" href="https://docs.google.com/forms/d/e/1FAIpQLSdEsspz155pqui07-RYSDWc12-pOQ4msZ2p6EI-iPYuWypghw/viewform" id="inscripcion-supervisores-button" target="_blank">este formulario</a>. Una vez cumplimentado, nos pondremos en contacto contigo para informarte de los siguientes pasos.</p>
        <p style="text-align: justify;"><i class="material-icons" style="padding-right: 8px;">warning</i><strong>Lee las reglas de la competición en <a class="prelis24" href="/PreliminaresPLANCKS/2024/CompetitionRules_PrelisPLANCKS2024.pdf" id="reglas-button" target="_blank">este enlace</a>.</strong></p>
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div>

<!-- CONOCER MODAL -->
<div id="plancks-modal" class="modal">
  <div class="modal-content-tight">
    
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row center">
        <h3 class="justify">Conoce Plancks </h3>
        <p style="text-align: justify;"><strong>¿Qué es PLANCKS?</strong> PLANCKS (Physics League Across Numerous Countries for Kick-ass Students) es la competición internacional de física teórica de IAPS, la International Association of Physics Students. En ella pueden participar equipos de tres a cuatro estudiantes de grado y/o máster. Además, la competición se enmarca en un evento de varios días repleto de charlas y actividades para que los participantes se conozcan entre sí.</p>
        <p style="text-align: justify;">
          Este año PLANCKS será organizado por <a class="prelis24" href="https://www.iop.org/" id="iop-button" target="_blank"> the Institute of Physics (IOP) </a> y la prueba tendrá lugar del 23 al 27 de mayo en la Universidad de Dublín. ¡La última edición reunió 250 participantes de unos 30 países! Si quieres conocer más sobre PLANCKS y IAPS, la International Association of Physics Students, clica en los enlaces siguientes.
        </p>
      </div>
    </div>
    
    <div class="section">
      <div class="row center">
        <div class="col s12 m6">
          <div class="row center">
            <a href="https://plancks.uk/dublin24/" target="_blank" id="plancks-button" class="btn-large waves-effect waves-light" style="background-color: #ffffff; color: #3ca41c"><strong>Conoce Plancks 2024</strong></a>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="row center">
            <a href="https://www.iaps.info/" target="_blank" id="iaps-button" class="btn-large waves-effect waves-light" style="background-color: #ffffff; color: #3ca41c"><strong>Conoce IAPS</strong></a>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div>

<!-- INSCRIPCIÓN MODAL -->
<div id="inscripcion-modal" class="modal">
  <div class="modal-content-tight">
    
    <div class="section">
      <div class="row center">
        <h3 class="justify">¡Inscríbete!</h3>
      </div>
      
      <div class="row center">  
        <div class="col s12 m6">
          <div class="row center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSe621X8cPqOPlC6gNIk9nioyiRIrpsDfFANJnPRVUAaavZDNA/viewform" id="inscripcion-equipos-button" target="_blank" class="btn-large waves-effect waves-light" style="background-color: #ffffff; color: #3ca41c; display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">groups</i><strong>Inscripción equipos</strong></a>
          </div>
        </div>
        <div class="col s12 m6">
          <div class="row center">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdEsspz155pqui07-RYSDWc12-pOQ4msZ2p6EI-iPYuWypghw/viewform" id="inscripcion-supers-button" target="_blank" class="btn-large waves-effect waves-light" style="background-color: #ffffff; color: #3ca41c; display: inline-flex; align-items: center; margin-bottom: 5px;"><i class="material-icons" style="padding-right: 8px;">remove_red_eye</i><strong>Inscripción supervisores</strong></a>
          </div>
        </div>
      </div>
      
    </div>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div>


<!-- COMITÉS MODAL-->
<div id="comites-modal" class="modal">
  <div class="modal-content-tight">
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row center" style="padding-left: 30px; padding-top: 10px;">
        <h3 class="justify">Los Comités Organizador y Académico</h3>
        <div class="row">
          <div class="col s12 m6 l7">
            <div class="icon-block">
              <h5 class="center">Comité Organizador</h5>
              <p align="center">Joan Llobera Querol - Presidente</p>
              <p align="center">Irene Carrión López - Vicepresidenta</p>
              <p align="center">Misael Samir Malqui Cruz - Redes </p>
              <p align="center">Lucía Longo - Redes </p>
              <p align="center">María Sánchez Hernández - Redes </p>
              <p align="center">Miguel Durán Vera - Web </p>
              <p align="center">Adrián Marín Boyero - Grafismos </p>
              <p align="center">Víctor Palma Cortés - Logística</p>
              <p align="center">Eric Jiménez Zurera - Logística</p>
              <p align="center">Eloi Casalé Cabanes - Logística</p>
              <p align="center">Manuel Porrón Álvarez - Logística </p>
              <p align="center">Inmaculada Pérez Pérez  - Senior Advisor</p>
              
            </div>
          </div>
          <div class="col s12 m6 l5">
            <div class="icon-block">
              <h5 class="center">Comité Académico</h5>
              <!-- <p align="center">No podemos desvelar su composición hasta después de la realización de la prueba. ;)</p> -->
              <p align="center">Juan León - Presidente y Autor del Problema 2</p>
              <p align="center">Sònia Estradé Albiol (UB) - Autora del Problema 1</p>
              <p align="center">J. Arturo Alonso (CIEMAT) - Autor del Problema 3</p>
              <p align="center">Enrique Conejero Jarque (USAL) - Autor del Problema 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div>


<!-- MODAL COMITÉ ORGANIZADOR -->

<div id="OCPrelis23" class="modal">
  <div class="modal-content">
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row center" style="padding-left: 30px; padding-top: 10px;">
        <h3 class="justify">El Comité Organizador</h3>

        {% for item in site.data.prelis %}
        {% for miembro in item.miembros %}
        {% if miembro.class contains "OC" %}
        <ul class="collection waves-effect waves-light">
          <li class="collection-item avatar2">
            <img src="{{ miembro.img }}" alt="imagen" class="circle">
            <strong><p class="title" style="padding-top: 10px">{{ miembro.nombre }}</p></strong>
            <p>{{ miembro.rol }}</p>
          </li>
        </ul>
        {% endif %}
        {% endfor %}
        {% endfor %}

        <p>Conócenos mejor en la <a href="{{ site.url}}/junta-de-gobierno" target="_blank">web de la Junta de Gobierno</a> del Grupo de Estudiantes de la RSEF.</p>


      </div>
    </div>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div>


<!-- TIMER SCRIPT -->
<script>
  // Set the date we're counting down to
  var countDownDate = new Date("Feb 26, 2024 00:00:00").getTime();

  // Update the count down every 1 second
  var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";

    // If the count down is over, write some text
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("countdown").innerHTML = "INSCRIPCIONES CERRADAS.";
    }
  }, 1000);
</script>