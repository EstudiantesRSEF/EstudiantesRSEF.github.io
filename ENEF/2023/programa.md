---
layout: enef
title: Encuentro Nacional de Estudiantes de Física 2023
hidden: true
permalink: /ENEF2023/programa
---

<div class="no-pad-top" id="index-page">
  <div class="container">
  
    <div class="section">


<!-- BANNER -->
      <img class="materialboxed" width="100%" src="/img/eventos/2023-ENEF/Banner-5.png">

	
<!-- PROGRAMA -->
      <div class="section">
        <h4 id="programa">Programa</h4>
	<p style="text-align: justify;">¡Ya está aquí el programa del ENEF! ¿Te lo vas a perder? Consulta el resto de información en la <a href="{{ site.url }}/ENEF2023">web del ENEF</a>.</p>
      </div>
	    
      <div class="section" id="content-desktop">
        <div class="row">
          <img class="materialboxed" width="100%" src="/img/eventos/2023-ENEF/Programa-3.png">
        </div>	 
      </div>
      <div class="section" id="content-mobile">
        <div class="row">
          <img class="materialboxed" width="100%" src="/img/eventos/2023-ENEF/Programa-4.png">
        </div>
      </div>


	    
	    
	    
      <div class="section">
        <div class="row center">
          <div class="col s12 m6 l6">
            <div class="row center">
              <h2 style="text-align: center;">Programa detallado</h2>
              <ul class="collapsible">
                <li>
                  <div class="collapsible-header">Miércoles 26</div>
                  <div class="collapsible-body">
                    <ul class="collection">
                      <!-- <a href="#{{ person.id | remove: "/" }}-modal" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">11:00h Bienvenida y check-in</a> -->
		      <div style="text-align: left;">
                        <p style="padding: 5px; text-align: center;">11:00</p>
			<p style="padding: 5px; text-align: center;">Bienvenida y check-in</p>
		      </div>
                    </ul>
                  </div>
                </li>
	      </ul>
	    </div>
	  </div>
	</div>
      </div>  
	    
      <div class="section">
	<h3 id="ponentes">En el ENEF contaremos con...</h3>
	<p style="text-align: justify;">¡Descubre los mejores ponentes que nos acompañarán durante el ENEF!</p>
      </div>
	    
	    
<!-- PONENTES -->    
      <div class="section">
       <div class="col s12 m6">
         <div class="row center">
         {% for person in site.persons %}
         {% if person.evento contains "ENEF2023" %}
         {% if person.visible contains "SÍ" %}
           <ul class="collection waves-effect waves-light" style="width: 33%">
             <a href="#{{ person.id | remove: "/" }}-modal" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">
               <li class="collection-item avatar2">
                 <img src="{{ person.img }}" alt="" class="circle">
                 {% if person.nombredes %}
                 <span class="title" style="padding-left: 10px">{{ person.nombredes }}</span>
                 {% else %}
                 <span class="title" style="padding-left: 10px">{{ person.nombre }}</span>
                 {% endif %}
                 <p style="padding-top: 10px">
                   {{ person.horario }}
                 </p>
               </li>
             </a>
           </ul>
         {% endif %}
         {% endif %}
         {% endfor %}    
         </div>
       </div>
     </div>


	  
<!-- SPONSORS -->
      <div class="section">
        <h2>Organiza:</h2>
        <div class="row">
          <div class="col s12 m6 l6">
            <img id="logo GdeE" class="materialboxed" width="100%" src="/img/logos/gdee-rsef.png" alt="Grupo de Estudiantes de la RSEF">
          </div>
	</div>
	<h2>Colaboradores oro:</h2>
        <div class="row">	
          <div class="col s12 m6 l6">
            <img id="logo EPS-YM" class="materialboxed" width="100%" src="/img/eventos/2023-ENEF/Patrocinadores/YoungMinds.png" alt="European Physical Society - Young Minds">
          </div>
	  <div class="col s8 m4 l4">
            <img id="logo EDP" class="materialboxed" width="100%" src="/img/eventos/2023-ENEF/Patrocinadores/edp.png" alt="EDP">
          </div>
	</div>
	<h2>Colaboradores plata:</h2>
	<div class="row">
	  <div class="col s12 m4 l4">
            <img id="logo TKELEVATOR" class="materialboxed" width="100%" src="/img/eventos/2023-ENEF/Patrocinadores/TKE.png" alt="TKElevator">
          </div>
	  <div class="col s12 m4 l4">
            <img id="logo TIMEO" class="materialboxed" width="100%" src="/img/eventos/2023-ENEF/Patrocinadores/FATineo.png" alt="Fundación Automáticos Tineo">
          </div>
	  <div class="col s12 m4 l4">
            <img id="logo CASIO" class="materialboxed" width="100%" src="/img/eventos/2023-ENEF/Patrocinadores/CDE.png" alt="CASIO">
          </div>
        </div>
	<div class="row">
	  <div class="col s12 m4 l4">
            <img id="logo Merkle" class="materialboxed" width="100%" src="/img/eventos/2023-ENEF/Patrocinadores/Merkle.png" alt="Merkle">
          </div>
        </div>
      </div>
	  
    </div>
	   
    
  </div>
</div>

<!-- Modal PONENTES -->

{% for person in site.persons %}
{% if person.evento contains "ENEF2023" %}

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
        <h3 class="justify" style="padding-bottom: 12px;">Contenido Recomendado</h3>
        {%- if person.book1title -%}
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
