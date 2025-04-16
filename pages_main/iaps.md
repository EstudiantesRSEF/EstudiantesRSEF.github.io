---
layout: default
title: IAPS
permalink: /iaps/
---

<div id="index-banner">
  <div class="row">
      <div class="col l4 offset-l4 s8 offset-s2">
	<h1>
	  <img id="index-top-logo" src="/img/iaps.png" alt="Logo de IAPS">
	</h1>
      </div>
  </div>
</div>

<div class="no-pad-top" id="index-page">
  <div class="container">
      
      <div class="row">
        <div class="col s12">
          <div class="row center">
            <a href="http://www.iaps.info" id="about-button" class="btn-large waves-effect waves-light">IAPS website</a>
          </div>
        </div>
    </div>
      
    <div class="section">
        IAPS is an association of physics students and student societies from around the globe, working to promote peaceful collaboration amongst them. Its members are represented by national and local committees, who meet regularly to ensure the relevance of the activities.
    </div>    

    <div class="section"> <!-- eventi -->
      <h3 class="center">ICPS</h3>
      
      <p>
          ICPS is the International Conference of Physics Students, which is the main event of IAPS, organized yearly by one of its member committees. The purpose of the conference is to create an opportunity for physics students from all around the world to come together, to talk about science and life, to practice presenting their research and, all in all, to have a great time.
      <br>
          The first ICPS was organized by students of the Eötvös Loránd University, in Budapest, Hungary in the year 1986. The event had less than fifty participants, but since then, the conference has grown considerably, nowadays bringing together more than four hundred students.
      <br>
          The one week of the conference has its fair share of scientific, social and touristic programs. One gets a chance to listen to and give lectures on various topics in physics, to check out the laboratories of the host city, to make friends with physics students from all around the world, to get a little glimpse of the foreign cultures that gather here and to see another part of the world.
      <br>
          Just for you to see how awesome can ICPS be, we think that you would like to watch this video:
      </p>
      
      <center><iframe width="560" height="315" src="https://www.youtube.com/embed/GcoZuXLViAA?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></center>
      
      {% assign loopindex = 0 %}
      {% for event in site.events reversed %}
      {% if event.title contains "ICPS" and loopindex < 4 %}
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
          	<p><small><b>{{ event.place }}</b> {{ event.startingdate | date: '%d %b %Y' }} - {{ event.endingdate | date: '%d %b %Y' }}</small></p>
                </div>
          	<div class="card-action">
          	  <a href="{{ event.site }}">Site</a>
          	  <a href="{{ event.url }}">Info</a>
          	</div>
          </div>
        </div>
      {% if rowfinder == 1 %} 
      </div>
      {% endif %}
      {% assign loopindex = loopindex | plus: 1 %}
      {% endif %}
      {% endfor %}
      {% if loopindex == 1 %} 
      </div>
      {% endif %}
      <!-- {% if loopindex == 0 %}
      <ul class="collection">
          <li class="collection-item"> Non ci sono eventi in programma. Stay tuned! </li>
      </ul>
      {% endif %} -->
    </div> 
    
    <div class="section"> <!-- eventi -->
      <h3 class="center">PLANCKS</h3>
      
      <p>
          PLANCKS is an annual international physics contest for bachelor- and master students. It’s usually a three day event and can include in addition to the competition itself social events like a symposium, excursions, parties and the award ceremony. PLANCKS is arranged by different IAPS member committees.
          <br>
          Participants of PLANCKS compete in teams consisting of three to four members and they have to answer very difficult physics exercises. Some countries are currently organising a preliminary for PLANCKS and the winners of these preliminaries will participate in PLANCKS, in other countries people can show interest and the participants will be selected by a random number generator.
          <br>
          The intention of the competition is to increase international collaboration, social activities and personal development of individual contestants. By gathering physics students from different parts of the world, a setting to exchange ideas and experiences and to challenge each other is created.

          
      </p>
      
      {% assign loopindex = 0 %}
      {% for event in site.events reversed %}
      {% if event.title contains "PLANCKS" and loopindex < 4 %}
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
          	<p><small><b>{{ event.place }}</b> {{ event.startingdate | date: '%d %b %Y' }} - {{ event.endingdate | date: '%d %b %Y' }}</small></p>
                </div>
          	<div class="card-action">
          	  <a href="{{ event.site }}">Site</a>
          	  <a href="{{ event.url }}">Info</a>
          	</div>
          </div>
        </div>
      {% if rowfinder == 1 %} 
      </div>
      {% endif %}
      {% assign loopindex = loopindex | plus: 1 %}
      {% endif %}
      {% endfor %}
      {% if loopindex == 1 %} 
      </div>
      {% endif %}
      <!-- {% if loopindex == 0 %}
      <ul class="collection">
          <li class="collection-item"> Non ci sono eventi in programma. Stay tuned! </li>
      </ul>
      {% endif %} -->
    </div>
    
    <div class="row">
      <div class="col s12 m5">
        <div class="row center">
            <h2 class="center">Contact Network</h2>
          <p>
          To help each student interested in an exchange or starting at a new university, IAPS is establishing a Contact Network. The goal is to have at least one student at each university in it, willing to help others with information on the university, city or country. At the same time it’s always nice to already know a person in the city you move to, e.g. to find good places to hang out.
          </p>
        </div>
      </div>
      <div class="col s12 m5 offset-m2">
        <div class="row center">
            <h2 class="center">jIAPS</h2>
          <p>
          jIAPS is the journal for the International Association of Physics Students which features Physics related articles written by students for students. jIAPS is published once a year and distributed for free during ICPS. Any physics student who would like to publish his article on jIAPS please can send an email to the editors.
          Previous issues are freely accessible!
          </p>
        </div>
      </div>
    </div>
    <div class="row">
        <div class="col s12 m5">
          <div class="row center">
            <a href="http://www.iaps.info/opportunities/iaps-contact-network-2" id="about-button" class="center btn-large waves-effect waves-light">Contact Network</a>
          </div>
        </div>
        <div class="col s12 m5 offset-m2">
          <div class="row center">
            <a href="http://www.iaps.info/jiaps" id="about-button" class="center btn-large waves-effect waves-light">jIAPS</a>
          </div>
        </div>
    </div>

    
  </div>
</div>


<!-- Modal Structure -->
<!-- <div id="modal1" class="modal"> -->
<!--   <div class="modal-content"> -->
<!--     <h4>PLANCKS 2016</h4> -->
<!--     <div class="chip">Bucharest, Romania</div><div class="chip">20-23 Maggio 2016</div> -->
<!--     <p>PLANCKS è una competizione di fisica teorica organizzata da IAPS, che bla bla bla</p> -->
<!--   </div> -->

<!--   <div class="modal-footer"> -->
<!--     <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Chiudi</a> -->
<!--     <a href="http://2016.plancks.org" class=" modal-action modal-close waves-effect waves-green btn-flat">Sito ufficiale</a> -->
<!--   </div> -->
<!-- </div> -->

<!-- {% include eventos-pagina-principal-modal.html %} -->
{% include schema.html %}
