---
layout: plancks25
title: PLANCKS Barcelona 2025
hidden: true
permalink: /PLANCKS25/venue/
---

<div class="no-pad-top" id="index-page">
  <div class="container">
  
    <div class="section">


<!-- BANNER -->
      <img class="materialboxed" width="100%" src="/img/eventos/2025-PLANCKS/PLANCKS25_Banner.png">

	
<!-- VENUE -->
      <div class="section">
        <h4 id="program">Venue</h4>
 	<p style="text-align: justify;"> Here is the program for PLANCKS 2025! Are you going to miss it? Check the rest of the information in the  <a href="{{ site.url }}/PLANCKS25">PLANCKS web</a>.</p>
      </div>

      <div class="section" id="content-desktop">
 	<h5> Click on the image to see the program on full size </h5>
        <div class="row">
             <img class="materialboxed" width="80%" src="/img/eventos/2024-ENEF/ENEF24_programav3.png">
        </div>	 
      </div>
      <div class="section" id="content-mobile">
	<div class="row">
          <img class="materialboxed" width="100%" src="/img/eventos/2024-ENEF/ENEF24_programav3.png">
        </div>
      </div>

   
      <div class="section">
	<h3 id="ponentes">En el ENEF contaremos con...</h3>
	<p style="text-align: justify;">¡Descubre los mejores ponentes que nos acompañarán durante el ENEF!</p>
      </div>
	    
<!-- ACCOMODATION -->

<div class="section">
  <h4 id="accommodation">Accommodation: La Conreria de Tiana</h4>
  <p style="text-align: justify;">
    La Conreria de Tiana is a meticulously restored old wine estate that combines historical charm 
    with modern services to ensure a comfortable and relaxing stay. Located just a few kilometers 
    from Barcelona, it offers a natural setting perfect for unwinding after each day of competition, 
    while still providing convenient access to the city’s sports venues.
  </p>
  <p style="text-align: justify;">
    The spacious common areas encourage participants to share experiences and forge new friendships. 
    In addition, its gastronomic offering, based on local products, ensures a healthy and delicious diet 
    to stay energized throughout the competition.
  </p>
  <h5 style="margin-top: 1em;">Why will you love it?</h5>
  <ul>
    <li><strong>Privileged location:</strong> Only a short distance from Barcelona, yet surrounded by a natural setting that helps you relax.</li>
    <li><strong>Comfort and authenticity:</strong> Cozy rooms in a historic estate that will make you feel in a truly unique place.</li>
    <li><strong>Connection and networking:</strong> Common areas designed to exchange ideas, stories, and experiences with fellow competitors.</li>
    <li><strong>Local flavor:</strong> A fresh, proximity-based cuisine to help you tackle each day with plenty of energy.</li>
  </ul>
</div>

<!-- CARRUSEL DE FOTOS -->
      <!-- <div class="carousel-container">
        <div class="carousel">
          <div class="carousel-item active"><img src="/img/eventos/2025-PLANCKS/FotosPrelis/prelis1.jpg" alt="Imagen 1"></div>
          <div class="carousel-item"><img src="/img/eventos/2025-PLANCKS/FotosPrelis/prelis2.jpg" alt="Imagen 2"></div>
          <div class="carousel-item"><img src="/img/eventos/2025-PLANCKS/FotosPrelis/prelis3.jpg" alt="Imagen 3"></div>
	  <div class="carousel-item"><img src="/img/eventos/2025-PLANCKS/FotosPrelis/prelis4.jpeg" alt="Imagen 4"></div>
        </div>
      </div> -->
<!-- CARRUSEL DE FOTOS -->
<div class="slider-auto">
  <div class="slide-track">
    {% for image in site.data.PLANCKS25.multiple.carousel_images %}
      <div class="slide">
        <img src="{{ image.src }}" alt="{{ image.alt }}">
      </div>
    {% endfor %}
    {% for image in site.data.PLANCKS25.multiple.carousel_images %}
      <div class="slide">
        <img src="{{ image.src }}" alt="{{ image.alt }}">
      </div>
    {% endfor %}
  </div>
</div>


<!-- LOCATIONS MANUAL -->    
<!--        <div class="section">
       <h3 id="espacios">Además visitaremos espacios como...</h3>
       <p style="text-align: justify;">Instalaciones de la Universidad de Oviedo y laboratorios de física de los alrededores.</p>
     </div>
     
     <div class="section">
       <div class="col s12 m6">
         <div class="row center">
           <ul class="collection waves-effect waves-light" style="width: 33%">
             <a href="#CINN-modal" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">
               <li class="collection-item avatar2">
                 <img src="/img/eventos/2023-ENEF/locations/CINN_image.png" alt="" class="circle">
                 <span class="title" style="padding-left: 10px">CINN</span>
                 <p style="padding-top: 10px">
                   Viernes 28 por la mañana.
                 </p>
               </li>
             </a>
           </ul>
	   <ul class="collection waves-effect waves-light" style="width: 33%">
             <a href="#SeveroOchoa-modal" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">
               <li class="collection-item avatar2">
                 <img src="/img/eventos/2023-ENEF/locations/SeveroOchoa_image.png" alt="" class="circle">
                 <span class="title" style="padding-left: 10px">Centro Científico-Tecnológico Severo Ochoa</span>
                 <p style="padding-top: 10px">
                   Viernes 28 por la mañana.
                 </p>
               </li>
             </a>
           </ul>
         <h5>...¡y muchos más!</h5>
         </div>
       </div>
     </div>

-->
     
	    
  
<!-- SPONSORS -->
	{% include PLANCKS25_patrocinadores.html %}
	  
    </div>
	   
    
  </div>
</div>

<!-- Modal PONENTES -->

{% for person in site.persons %}
{% if person.evento contains "ENEF2024" %}

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
          <div class="row center" style="padding-left: 30px; padding-top: 70px;">
            <h2 class="justify">{{ person.nombre }}</h2>
            <h5 class="justify">{{ person.roldes }}</h5>
          </div>
        </div>
      </div>

      <!-- Biografía -->

      <div class="row">
        {% if person.charla %}
          <p style="text-align: justify;">
	    {{ person.charla }}
          </p>
        {% endif %}
      </div>
	    
      <div class="row">
        <h3 class="justify">Biografía</h3>
        {% if person.bio1 %}
          <p style="text-align: justify;">
	    {{ person.bio1 }}
          </p>
        {% endif %}
        {%- if person.bio2 -%}<p style="text-align: justify;">
          {{ person.bio2 }}
        </p>{%- endif -%}
        {%- if person.bio3 -%}<p style="text-align: justify;">
          {{ person.bio3 }}
        </p>{%- endif -%}
        {%- if person.bio4 -%}<p style="text-align: justify;">
          {{ person.bio4 }}
        </p>{%- endif -%}
      </div>

      <!-- Recomendaciones -->

      <div class="row">
        {%- if person.book1title -%}
	  <h3 class="justify" style="padding-bottom: 12px;">Contenido Recomendado</h3>
          {%- if person.book2title -%}<div class="col s12 m6 l6">{%- endif -%}     
            <div class="row center">
              <a href="{{ person.book1link }}" target="_blank"><img class="responsive-img" style="width:50%; align: center;" src="{{ person.book1img }}"></a>
              <p style="text-align: center; padding-right: 2px; padding-left: 2px;">
                <a href="{{ person.book1link }}" target="_blank">{{ person.book1title }}</a>
              </p>
            </div>
          {%- if person.book2title -%}</div>{%- endif -%}      
          {%- endif -%}
        {%- if person.book2title -%}
          <div class="col s12 m6 l6">
            <div class="row center">
              <a href="{{ person.book2link }}" target="_blank"><img class="responsive-img" style="width:50%" src="{{ person.book2img }}"></a>
              <p style="text-align: center; padding-right: 2px; padding-left: 2px;">
                <a href="{{ person.book2link }}" target="_blank">{{ person.book2title }}</a>
              </p>
            </div>
          </div>
        {%- endif -%}
      </div>

      {%- if person.videotitle -%}
        <div class="row">
          <center><iframe width="642" height="361" src="{{- person.videolink -}}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>
        </div>
      {%- endif -%}

      {%- if person.otherinfo1link -%}
        <div class="row">
          <div class="col s12 m6 l6">
            <div class="row center">
              <a href="{{ person.otherinfo1link }}" target="_blank">{{ person.otherinfo1text }}</a>
            </div>
          </div>
          {%- if person.otherinfo2link -%}
            <div class="col s12 m6 l6">
              <div class="row center">
                <a href="{{ person.otherinfo2link }}" target="_blank">{{ person.otherinfo2text }}</a>
              </div>
            </div>
          {%- endif -%}
        </div>
      {%- endif -%}

      {%- if person.otherinfo3link -%}
        <div class="row">
          <div class="col s12 m6 l6">
            <div class="row center">
              <a href="{{ person.otherinfo3link }}" target="_blank">{{ person.otherinfo3text }}</a>
            </div>
          </div>
          {%- if person.otherinfo4link -%}
            <div class="col s12 m6 l6">
              <div class="row center">
                <a href="{{ person.otherinfo4link }}" target="_blank">{{ person.otherinfo4text }}</a>
              </div>
            </div>
          {%- endif -%}
        </div>
      {%- endif -%}

    </div>
  </div>
  <div class="modal-footer">
    <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
  </div>
</div>

{% endif %}
{% endfor %}
