---
layout: page
title: Junta de Gobierno
permalink: /junta-de-gobierno/
---

<!-- INTRO -->

{% for item in site.data.EC4 %}

<div class="row">
  <div class="col s12 m4">
    <img data-caption="Logo de Estudiantes RSEF." width="100%" src="{{ site.url }}/img/logos/gdee-rsef.png">
  </div>
    <div class="col s12 m6 offset-m1">
      <p>La Junta de Gobierno es el órgano administrativo y ejecutivo del Grupo de Estudiantes de la RSEF, y está actualmente compuesta por {{ item.nmiembros }} miembros.</p>
    </div>
</div>

## Junta de Gobierno actual

Esta Junta de Gobierno fue elegida el {{ item.dataElecciones }}.
{% if item.dataInicio != nil %}Sus miembros tomaron posesión de su cargo el {{ item.dataInicio }}.{% endif %}
{% if item.dataFin != nil %}Sus miembros permanecieron en sus respectivos cargos hasta el {{ item.dataFin }}.{% endif %}

<!--
{% for person in item.miembros %}

Miembro {{person.nombre}}

{% endfor %}
-->

<div class="section" id="content-desktop">
  <div class="col s12 m6">
    <div class="row center">
	{% assign sorted_persons = site.persons | sort: 'Pos_EC4' %}
    	{% for person in sorted_persons %}
	    	{% if person.EC4 %}
		      <ul class="collection waves-effect waves-light" style="width: 300px">
		        <a href="#{{ person.id | remove: "/" }}-EC4" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">
		          <li class="collection-item avatar5">
		            <img src="{{ person.img }}" style="margin-bottom: 10px;" alt="" class="circle">
		            <p class="title" style="padding-left: 120px; padding-top: 15px">{{ person.nombre }}</p>
		            <p class="rol" style="padding-left: 120px; padding-bottom: 25px">{{ person.EC4 }}</p>
		          </li>
		        </a>
		      </ul>
	   	 {% endif %}
    	{% endfor %}    
    </div>
  </div>
</div>

<div class="section" id="content-mobile">
  <div class="col s12 m6">
    <div class="row center">
	{% assign sorted_persons = site.persons | sort: 'Pos_EC4' %}
	{% for person in sorted_persons %}
		{% if person.EC4 %}
			<ul class="collection waves-effect waves-light" style="width: 90%">
		        <a href="#{{ person.id | remove: "/" }}-EC4" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">
		          <li class="collection-item avatar5">
		            <img src="{{ person.img }}" style="margin-bottom: 10px;" alt="" class="circle">
		            <p class="title" style="padding-left: 120px; padding-top: 15px">{{ person.nombre }}</p>
		            <p class="rol" style="padding-left: 120px">{{ person.EC4 }}</p>
		          </li>
		        </a>
		      </ul>
		{% endif %}
	    {% endfor %}    
    </div>
  </div>
</div>
{% endfor %}


## Junta de Gobierno Anterior

<div class="section" id="content-desktop">
  <div class="col s12 m6">
    <div class="row center">
	{% assign sorted_persons = site.persons | sort: 'Pos_EC3' %}
    	{% for person in sorted_persons%} 
	    	{% if person.EC3 %}
		      <ul class="collection waves-effect waves-light" style="width: 300px">
		        <a href="#{{ person.id | remove: "/" }}-EC3" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">
		          <li class="collection-item avatar5">
		            <img src="{{ person.img }}" style="margin-bottom: 10px;" alt="" class="circle">
		            <p class="title" style="padding-left: 120px; padding-top: 15px">{{ person.nombre }}</p>
		            <p class="rol" style="padding-left: 120px; padding-bottom: 25px">{{ person.EC3 }}</p>
		          </li>
		        </a>
		      </ul>
	   	 {% endif %}
    	{% endfor %}    
    </div>
  </div>
</div>

<div class="section" id="content-mobile">
  <div class="col s12 m6">
    <div class="row center">
	{% assign sorted_persons = site.persons | sort: 'Pos_EC3' %}
	{% for person in sorted_persons %}
		{% if person.EC3 "%}
			<ul class="collection waves-effect waves-light" style="width: 90%">
		        <a href="#{{ person.id | remove: "/" }}-EC3" class="collection-item modal-trigger waves-effect waves-light" style="color: rgba(0, 0, 0, 0.87); padding: 2px">
		          <li class="collection-item avatar5">
		            <img src="{{ person.img }}" style="margin-bottom: 10px;" alt="" class="circle">
		            <p class="title" style="padding-left: 120px; padding-top: 15px">{{ person.nombre }}</p>
		            <p class="rol" style="padding-left: 120px">{{ person.EC3 }}</p>
		          </li>
		        </a>
		      </ul>
		{% endif %}
	    {% endfor %}    
    </div>
  </div>
</div>



<!--              Modales            -->

{% for person in site.persons %}
{% if person.EC4 %}

<div id="{{ person.id | remove: "/" }}-EC4" class="modal">
  <div class="modal-content">
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row">
        <div class="col s12 m6 l6">
          <div class="row center">
	    <img src="{{ person.header }}" width="80%">
          </div>
        </div>
        <div class="col s12 m6 l6">        
          <div class="row center" style="padding-top: 40px;">
            <h3 class="justify">{{ person.nombre }}</h3>
            <h5 class="justify">{{ person.EC4 }}</h5>
          </div>
        </div>
      </div>

      <!-- Biografía -->

      <div class="row">
        <h5 class="justify">Biografía</h5>
        {% if person.descr %}
          <p style="text-align: justify;">
            {{ person.descr }}
          </p>
        {% endif %}
      </div>
      
      <!-- Responsabilidades -->

      <div class="row">
        <h5 class="justify">¿Qué ha hecho en el GdeE?</h5>
        <list class="a">
          {% if person.part1 %}
            {% if person.link1 %}
              <li><a href="{{ person.link1 }}" target="_blank">{{ person.part1 }}</a></li>
            {% else %}
            <li>{{ person.part1 }}</li>
            {% endif %}
          {% endif %}
          {% if person.part2 %}
            {% if person.link2 %}
              <li><a href="{{ person.link2 }}" target="_blank">{{ person.part2 }}</a></li>
            {% else %}
            <li>{{ person.part2 }}</li>
            {% endif %}
          {% endif %}
          {% if person.part3 %}
            {% if person.link3 %}
              <li><a href="{{ person.link3 }}" target="_blank">{{ person.part3 }}</a></li>
            {% else %}
            <li>{{ person.part3 }}</li>
            {% endif %}
          {% endif %}
          {% if person.part4 %}
            {% if person.link4 %}
              <li><a href="{{ person.link4 }}" target="_blank">{{ person.part4 }}</a></li>
            {% else %}
            <li>{{ person.part4 }}</li>
            {% endif %}
          {% endif %}
        </list>
      </div>
      
      <!-- Artículos -->
      
      {% if person.arti1 %}
        <div class="row">
          <h5 class="justify">Artículos del blog</h5>
          <list class="a">
            {% if person.arti1 %}
              <li><a href="{{ person.lkar1 }}" target="_blank">{{ person.arti1 }}</a></li>
            {% endif %}
            {% if person.arti2 %}
              <li><a href="{{ person.lkar2 }}" target="_blank">{{ person.arti2 }}</a></li>
            {% endif %}
            {% if person.arti3 %}
              <li><a href="{{ person.lkar3 }}" target="_blank">{{ person.arti3 }}</a></li>
            {% endif %}
            {% if person.arti4 %}
              <li><a href="{{ person.lkar4 }}" target="_blank">{{ person.arti4 }}</a></li>
            {% endif %}
            {% if person.arti5 %}
              <li><a href="{{ person.lkar5 }}" target="_blank">{{ person.arti5 }}</a></li>
            {% endif %}
            {% if person.arti6 %}
              <li><a href="{{ person.lkar6 }}" target="_blank">{{ person.arti6 }}</a></li>
            {% endif %}
            {% if person.arti7 %}
              <li><a href="{{ person.lkar7 }}" target="_blank">{{ person.arti7 }}</a></li>
            {% endif %}
            {% if person.arti8 %}
              <li><a href="{{ person.lkar8 }}" target="_blank">{{ person.arti8 }}</a></li>
            {% endif %}
            {% if person.arti9 %}
              <li><a href="{{ person.lkar9 }}" target="_blank">{{ person.arti9 }}</a></li>
            {% endif %}
            {% if person.arti10 %}
              <li><a href="{{ person.lkar10 }}" target="_blank">{{ person.arti10 }}</a></li>
            {% endif %}
          </list>
        </div>
      {% endif %}

     </div>
   </div>
  
   <div class="modal-footer">
     <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
   </div>
 </div>

 {% endif %}
 {% endfor %}


{% for person in site.persons %}
{% if person.EC3%}

<div id="{{ person.id | remove: "/" }}-EC3" class="modal">
  <div class="modal-content">
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row">
        <div class="col s12 m6 l6">
          <div class="row center">
	    <img src="{{ person.header }}" width="80%">
          </div>
        </div>
        <div class="col s12 m6 l6">        
          <div class="row center" style="padding-top: 40px;">
            <h3 class="justify">{{ person.nombre }}</h3>
            <h5 class="justify">{{ person.EC3 }}</h5>
          </div>
        </div>
      </div>

      <!-- Biografía -->

      <div class="row">
        <h5 class="justify">Biografía</h5>
        {% if person.descr %}
          <p style="text-align: justify;">
            {{ person.descr }}
          </p>
        {% endif %}
      </div>
      
      <!-- Responsabilidades -->

      <div class="row">
        <h5 class="justify">¿Qué ha hecho en el GdeE?</h5>
        <list class="a">
          {% if person.part1 %}
            {% if person.link1 %}
              <li><a href="{{ person.link1 }}" target="_blank">{{ person.part1 }}</a></li>
            {% else %}
            <li>{{ person.part1 }}</li>
            {% endif %}
          {% endif %}
          {% if person.part2 %}
            {% if person.link2 %}
              <li><a href="{{ person.link2 }}" target="_blank">{{ person.part2 }}</a></li>
            {% else %}
            <li>{{ person.part2 }}</li>
            {% endif %}
          {% endif %}
          {% if person.part3 %}
            {% if person.link3 %}
              <li><a href="{{ person.link3 }}" target="_blank">{{ person.part3 }}</a></li>
            {% else %}
            <li>{{ person.part3 }}</li>
            {% endif %}
          {% endif %}
          {% if person.part4 %}
            {% if person.link4 %}
              <li><a href="{{ person.link4 }}" target="_blank">{{ person.part4 }}</a></li>
            {% else %}
            <li>{{ person.part4 }}</li>
            {% endif %}
          {% endif %}
        </list>
      </div>
      
      <!-- Artículos -->
      
      {% if person.arti1 %}
        <div class="row">
          <h5 class="justify">Artículos del blog</h5>
          <list class="a">
            {% if person.arti1 %}
              <li><a href="{{ person.lkar1 }}" target="_blank">{{ person.arti1 }}</a></li>
            {% endif %}
            {% if person.arti2 %}
              <li><a href="{{ person.lkar2 }}" target="_blank">{{ person.arti2 }}</a></li>
            {% endif %}
            {% if person.arti3 %}
              <li><a href="{{ person.lkar3 }}" target="_blank">{{ person.arti3 }}</a></li>
            {% endif %}
            {% if person.arti4 %}
              <li><a href="{{ person.lkar4 }}" target="_blank">{{ person.arti4 }}</a></li>
            {% endif %}
            {% if person.arti5 %}
              <li><a href="{{ person.lkar5 }}" target="_blank">{{ person.arti5 }}</a></li>
            {% endif %}
            {% if person.arti6 %}
              <li><a href="{{ person.lkar6 }}" target="_blank">{{ person.arti6 }}</a></li>
            {% endif %}
            {% if person.arti7 %}
              <li><a href="{{ person.lkar7 }}" target="_blank">{{ person.arti7 }}</a></li>
            {% endif %}
            {% if person.arti8 %}
              <li><a href="{{ person.lkar8 }}" target="_blank">{{ person.arti8 }}</a></li>
            {% endif %}
            {% if person.arti9 %}
              <li><a href="{{ person.lkar9 }}" target="_blank">{{ person.arti9 }}</a></li>
            {% endif %}
            {% if person.arti10 %}
              <li><a href="{{ person.lkar10 }}" target="_blank">{{ person.arti10 }}</a></li>
            {% endif %}
          </list>
        </div>
      {% endif %}

     </div>
   </div>
  
   <div class="modal-footer">
     <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
   </div>
 </div>

 {% endif %}
 {% endfor %}  
