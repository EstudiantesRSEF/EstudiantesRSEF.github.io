---
layout: plancks25
title: News - PLANCKS25
permalink: /PLANCKS25/news/
description: "Stay up to date with latest news!"
thumbnail: "/img/eventos/2025-PLANCKS/Logo.png"
---

<div class="no-pad-top" id="index-page">
  <div class="container">
    <div class="section">
<!-- BANNER -->
      <img class="materialboxed" width="100%" src="/img/eventos/2025-PLANCKS/PLANCKS25_Banner.png">
    </div>
<!-- NEWS PANNEL -->
    <div class="section">
      <div class="plancks25-news-panel">
        <div class="row">
          <!-- News Panel Item -->
          {% for article in site.data.PLANCKS25.multiple.news %}
          <div class="responsive-column">
            <div class="news-card">
              <a href="{{ article.url }}">
                <!-- Card Top Section with Image and Title -->
                <div class="card-top">
                  <div class="news-image">
                    <img src="{{ article.logo }}" alt="{{ article.outlet }}" class="circle">
                  </div>
                  <div class="news-info">
                    <h2 class="card-title">{{ article.outlet }}</h2>
                    {% if article.context %}
                    <p class="grey-text">{{ article.context }}</p>
                    {% endif %}
                  </div>
                </div>
                <!-- Headline section -->
                <div class="news-headline">
                  <h4><strong>{{ article.text}}</strong></h4>
                </div>
                <!-- Bottom Section -->
                <div class="card-bottom">
                  <img src="{{ article.image }}" alt="{{ article.text }}" class="news-image-large">
                </div>
              </a>
            </div>
          </div>
          {% endfor %}
        </div>
      </div>
    </div>  
    <!-- SPONSORS -->
    <div class="section">
      {% include patrocinadores.html sponsors=site.data.PLANCKS25.multiple.sponsors %}    
    </div>   
  </div>
</div>
