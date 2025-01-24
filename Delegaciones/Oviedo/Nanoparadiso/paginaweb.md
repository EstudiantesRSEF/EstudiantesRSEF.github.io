---
layout: enef
title: Nanoparadise 2025
hidden: true
permalink: /DeleOviedo/Nanoparadise2025/
---

<div class="no-pad-top" id="index-page">
  <div class="container">
  
    <div class="section">


<!-- BANNER -->
      <img class="materialboxed" width="100%" src="/Delegaciones/Oviedo/img/2025-Nanoparadise/Banner_Nanoparadise.png">

<!-- INTRODUCCIÓN -->

      <p style="text-align: justify;">Welcome to Nanoparadise 2025!</p>
      <p style="text-align: justify;">Nanoparadise is an international event for up to <strong>50 physics students </strong>all around the world who are finishing their degree or are at their master.<strong> From April 1st to April 5th</strong>, they will have the chance to visit advanced research centers about nanoscience and nanomaterials all around <strong> Asturias, Spain.</strong></p>
      <p style="text-align: justify;">Asturias is waiting for you!</p>

<!-- BOTONES -->
      <div class="section">
        <div class="row">
          <div class="col s6 m6 l3">
            <div class="row center">
              <a href="#programa" id="boton-programa" class="btn-enef24 waves-effect waves-light">Programme</a>
            </div>
          </div>
	      <div class="col s6 m6 l3">
            <div class="row center">
              <a href="#inscribete" id="boton-inscribete" class="btn-enef24 waves-effect waves-light">Register!</a> 	      
            </div>
          </div>
	  <!--
      </div>

      <!-- <div class="section" id="content-desktop">
        <div class="row">
          <a href="{{ site.url }}/ENEF2023/puntuaciones"><img class="materialboxed" width="100%" src="/img/eventos/2023-ENEF/Choque.png"></a>
        </div>
      </div> -->


<!-- FOTOS -->
      <div class="section" id="content-desktop">
        <div class="row">
          <div class="col s12 m12 l12">
            <div class="row center">
              <img class="materialboxed" width="100%" src="/Delegaciones/Oviedo/img/2025-Nanoparadise/Foto_grande_Nanoparadise.png">
            </div>
          </div>
        </div>
      </div>
      <div class="section" id="content-mobile">
        <div class="row">
          <div class="col s12 m12 l12">
            <div class="row center">
              <img class="materialboxed" width="100%" src="/Delegaciones/Oviedo/img/2025-Nanoparadise/Foto_peque_Nanoparadise.png">
            </div>
          </div>
        </div>
      </div>

    
	
<!-- PROGRAMA -->
      <div class="section">
        <h4 id="programa">Programme</h4>
	<p style="text-align: justify;">Programme is still preliminar. The plan is that the first day is a welcoming day, the second day will be full of talks about what each nanoscience group does, next two days will be full of visits to all labs and the final day will be a round table and a closing ceremony.</p>
    <p style="text-align: justify;">If enough people are willing to bring posters, we will also do a poster sesion on the second day with a prize for the most liked one</p>
	<div class="col s6 m6 l3">
          <div class="row center">
            <a href="{{ site.url }}/ENEF2024/programa" id="boton-programa" class="btn-enef24 waves-effect waves-light">Conoce el programa provisional</a>
          </div>
        </div>
      </div> 

            <div class="section" id="content-desktop">
        <div class="row">
          <div class="col s12 m12 l12">
            <div class="row center">
              <img class="materialboxed" width="100%" src="/Delegaciones/Oviedo/img/2025-Nanoparadise/Foto_grande_Nanoparadise.png">
            </div>
          </div>
        </div>
      </div>
      <div class="section" id="content-mobile">
        <div class="row">
          <div class="col s12 m12 l12">
            <div class="row center">
              <img class="materialboxed" width="100%" src="/Delegaciones/Oviedo/img/2025-Nanoparadise/Foto_peque_Nanoparadise.png">
            </div>
          </div>
        </div>
      </div>



<!-- INSCRIPTIONS -->


<div class="section">
    <h4 id="inscribete">Inscriptions</h4>
  <p style="text-align: justify;">
    Registrations will open soon! To participate, you will need to complete a form with some general information and a motivation letter. 
    We will contact you later to arrange the payment of <strong>€80</strong>. 
    While priority will be given to those who have studied subjects such as condensed matter physics, nanoscience, or nanomaterials, 
    students from any bachelor's, master's, or PhD program are welcome to apply.
  </p>

  <h4>What’s Included in the Registration Fee?</h4>
  <ul>
    <li><strong>Accommodation</strong> in Oviedo for the four nights of the event.</li>
    <li><strong>Breakfasts</strong> and transportation during the event activities.</li>
    <li>Most lunches and dinners (exact details depend on the final budget).</li>
  </ul>

  <h4>Participation Requirements</h4>
  <p style="text-align: justify;">
    To attend <strong>Nanoparadise</strong>, you must be a member of <strong>IAPS</strong> (International Association of Physics Students) 
    or <strong>Young Minds</strong>. If you are not yet a member, feel free to contact us or your local Territorial Committee to join IAPS or Young Minds.
  </p>
    <p style="text-align: justify;">
    Filling the inscription won't mean you are already in. You must wait until our confirmation email arrives to you.
  </p>
</div>
        <div class="row">
          <div class="col s12 m6 l6">
            <div class="row center">
              <h2>Register Here:</h2>
              <a href="{{ site.url }}/ENEF2024/inscripcion" target="_blank" class="btn-enef24 waves-effect waves-light">Inscripción ENEF</a>
	      <!--<h5>Inscripciones cerradas</h5>-->
            </div>
          </div>
        </div>
      </div>
	  
<!-- SPONSORS -->
      {% include Delegaciones/Oviedo/Nanoparadise_patrocinadores.html %}
	  
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