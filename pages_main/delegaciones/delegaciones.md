---
layout: page
title: Delegaciones
permalink: /delegaciones/
redirect_from:
---

En esta página podrás encontrar información sobre qué son, dónde están y cómo crear una nueva Delegación del Grupo de Estudiantes de la RSEF. 

## ¿Qué son?

Descubre con este vídeo todo lo que nuestras Delegaciones pueden ofrecerte:

<center><iframe width="700" height="394" src="https://www.youtube.com/embed/hm7Ur7Jxh_0?rel=0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></center>

## ¿Dónde están?

{% assign n = 0 %}
{% for item in site.data.LC %}
	{% unless item.congelado %}
		{% assign n = n | plus: 1 %}
 	{% endunless %}
{% endfor %}

El Grupo de Estudiantes de la RSEF cuenta por el momento con {{ n }} Delegaciones en:

<ul id="presidenti_LC" class="collection">
	{% for item in site.data.LC %}
		{% unless item.congelado %}
		        <a href="#{{item.id}}" class="modal-trigger" style="color: rgba(0, 0, 0, 0.87)">
				<li class="collection-item avatar  waves-effect waves-light" id="{{ item.nombre }}">
					<div class="tertiary-content">
						<img src="{{ item.logo }}">
					</div>
					{% assign image = "/img/presidenti/vuoto.png" %}
					{% unless item.img == "" %}
						{% assign image = item.img %}
					{% endunless %}
					<img src="{{ item.img }}" alt="" class="circle">
					Delegación de <b> {{ item.nombre }} </b>
					<p>
						{% if item.presidente != nil %}
						Presidenta/e: {{ item.presidente }}
						{% endif %}
						<br>
						Fundación: {{ item.fundacion }}
						<br>
						{% if item.ex != nil %}
							Ex presidentes/as: 
								{% for ex in item.ex limit:3 %}
        							{{ ex.nombre_ex }}
								{% if forloop.last == false %}, {% endif %}
 							   {% endfor %}
   						{% endif %}			
					</p>
					<br>
					{% if item.ins != nil %}	
					<a href="{{ item.ins }}" target="_blank" title="Página Instagram">
						<i class="fa fa-lg fa-instagram" aria-hidden="true"></i>
					</a>
					{% endif %}
					{% if item.tw != nil %}	
						<a href="{{ item.tw }}" target="_blank" title="Página Twitter">
							<i class="fa fa-lg fa-twitter-square" aria-hidden="true"></i>
						</a>
					{% endif %}
					{% if item.fb != nil %}	
						<a href="{{ item.fb }}" target="_blank" title="Página Facebook">
							<i class="fa fa-lg fa-facebook-square" aria-hidden="true"></i>
						</a>
					{% endif %}
					{% if item.url != nil %}	
						<a href="{{ item.url }}" target="_blank" title="Página Web">
							<i class="fas fa-lg fa-globe" aria-hidden="true"></i>
						</a>
					{% endif %}
					{% if item.reglamento != nil %}
						<a href="{{ item.reglamento }}" target="_blank" title="Reglamento Interno">
							<i class="fa fa-lg fa-file-text"></i>
						</a>
					{% endif %}
					<a href="mailto:{{ item.mail }};" title="Email Delegación">
						<i class="fa fa-lg fa-envelope"></i>
					</a>
				</li>
		        </a>	
		{% endunless %}
	{% endfor %}
</ul>


## ¿Quieres crear una nueva Delegación?

Consulta [esta página](/nueva-delegacion/).


<!-- Modales -->

{% for item in site.data.LC %}
{% unless item.congelado %}

<div id="{{item.id}}" class="modal">
  <div class="modal-content">
    <div class="section" style="padding-left: 30px; padding-right: 30px;">
      <div class="row">
        <div class="col s12 m6 l6">
          <div class="row center">
	    <img src="{{ item.img }}" width="80%">
          </div>
        </div>
        <div class="col s12 m6 l6">        
          <div class="row center" style="padding-top: 40px;">
            <h1 class="justify">{{ item.nombre }}</h1>
            	Desde <h5 class="justify">{{ item.fundacion }}</h5>
		<h5>Equipo</h5>
		<ul>
			<li><b>Presidencia:</b> {{item.presidente}}</li>
			<li><b>Vicepresidencia:</b> {{item.vicepresidente}}</li>
			<li><b>Secretaría:</b> {{item.secretario}}</li>
			<li><b>Tesorería:</b> {{item.tesorero}} </li>
			{% if item.colaboradores != nil %}	
				<li><b>Colaboradores</b>:
					<ul>
					{% for col in item.colaboradores %}
		  				<li> {{col.nombre_col}} </li>
		  			{% endfor %}	
					</ul>	  			
	   	  		</li>			
			{% endif %}	  
			{% if item.ex != nil %}	
				<li><b>Expresidentes</b>:
					<ul>
					{% for ex in item.ex %}
		  				<li> {{ex.nombre_ex}} </li>
		  			{% endfor %}	
					</ul>	  			
	   	  		</li>			
			{% endif %}	  
		</ul>   
          </div>
        </div>
      </div>	  
    </div>
   </div>  
   <div class="modal-footer">
     <a href="#!" class="modal-close waves-effect waves-green btn-flat">CERRAR</a>
   </div>
 </div>
{% endunless %}
{% endfor %}


