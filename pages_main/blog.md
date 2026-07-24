---
title: "El Blog del Grupo de Estudiantes de la RSEF"
permalink: /blog/
redirect_from:
  - /blog.html
---
<DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ page.title }}</title>
    {% include blog-styles.html %}
    {% include analytics.html %}
</head>
<body>

{% include blog-header.html %}

<!-- CARRUSEL DE SECCIONES -->
<div class="secciones-carousel" id="seccionesCarousel">
    {% for item in site.data.secciones %}
        {% assign slug = item[0] %}
        {% assign s = item[1] %}
        <a href="/blog/secciones/{{ slug }}/" class="seccion-slide" style="background-image: url('{{ s.imagen }}');">
            <div class="seccion-slide-overlay"></div>
            <div class="seccion-slide-content">
                <h2>{{ s.titulo }}</h2>
                <p>{{ s.descripcion }}</p>
                <span class="btn btn-small">Ver sección</span>
            </div>
        </a>
    {% endfor %}
    <button class="carousel-arrow prev" onclick="moverSecciones(-1)"><i class="fas fa-chevron-left"></i></button>
    <button class="carousel-arrow next" onclick="moverSecciones(1)"><i class="fas fa-chevron-right"></i></button>
    <div class="carousel-dots" id="carouselDots"></div>
</div>

<div class="blog-layout">

    <div class="blog-main">
        <h2 class="blog-heading">Todas las entradas</h2>

        <div class="filtros-categorias">
            <button class="chip_button active" id="All" onclick="filterUsingCategory('All')">Todas las entradas</button>
            {% assign categories = site.categories | sort %}
            {% for category in categories %}
                {% assign cat = category | first %}
                {% if cat == 'blog' %}
                {% else %}
                    <button class="chip_button" id="{{ cat }}" onclick="filterUsingCategory(this.id)">{{ cat }}</button>
                {% endif %}
            {% endfor %}
        </div>

        <div class="post-card-grid">
            {% assign id = 0 %}
            {% for post in site.posts %}
                {% if post.hidden != true and post.categories contains 'blog' %}
                    {% assign id = id | plus: 1 %}
                    <div id="{{ id }}">
                        {% include blog-post-card.html post=post %}
                    </div>
                {% endif %}
            {% endfor %}
        </div>
    </div>

    <aside class="blog-sidebar">

        <div class="sidebar-widget">
            <h3>Autores destacados</h3>
            {% assign posts_by_author = site.posts | where_exp: "p", "p.categories contains 'blog'" | group_by: "author" | sort: "size" | reverse %}
            {% for grupo in posts_by_author limit: 2 %}
                {% assign autor_info = site.data.autores[grupo.name] %}
                <div class="autor-destacado">
                    <img src="{{ autor_info.image | default: '/Divulgacion/avatar-default.svg' }}" alt="Foto de {{ grupo.name }}" onerror="this.onerror=null;this.src='/Divulgacion/avatar-default.svg';">
                    <div>
                        <div class="nombre">{{ grupo.name }}</div>
                        <div class="conteo">{{ grupo.items.size }} entrada{% if grupo.items.size != 1 %}s{% endif %}</div>
                    </div>
                </div>
            {% endfor %}
        </div>

        <div class="sidebar-widget">
            <h3>Entradas más visitadas</h3>
            {% assign posts_por_visitas = site.posts | where_exp: "p", "p.categories contains 'blog'" | sort: "views" | reverse %}
            {% for post in posts_por_visitas limit: 5 %}
                <a href="{{ post.url | prepend: site.baseurl }}" class="entrada-destacada">
                    <span class="num">{{ forloop.index }}</span>
                    <div>
                        <div class="titulo">{{ post.title }}</div>
                        <div class="visitas">{{ post.views | default: 0 }} visitas</div>
                    </div>
                </a>
            {% endfor %}
        </div>

    </aside>

</div>

{% include blog-footer.html %}

<script>
    // Carrusel de secciones
    const seccionesCarousel = document.getElementById('seccionesCarousel');
    const totalSlides = {{ site.data.secciones | size }};
    const dotsContainer = document.getElementById('carouselDots');
    for (let i = 0; i < totalSlides; i++) {
        const dot = document.createElement('button');
        if (i === 0) dot.classList.add('active');
        dot.onclick = () => irASeccion(i);
        dotsContainer.appendChild(dot);
    }
    function actualizarDots() {
        const index = Math.round(seccionesCarousel.scrollLeft / seccionesCarousel.offsetWidth);
        document.querySelectorAll('.carousel-dots button').forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }
    function irASeccion(i) {
        seccionesCarousel.scrollTo({ left: i * seccionesCarousel.offsetWidth, behavior: 'smooth' });
    }
    function moverSecciones(direccion) {
        seccionesCarousel.scrollBy({ left: direccion * seccionesCarousel.offsetWidth, behavior: 'smooth' });
    }
    seccionesCarousel.addEventListener('scroll', () => {
        clearTimeout(window._scrollDebounce);
        window._scrollDebounce = setTimeout(actualizarDots, 100);
    });

    // Filtro de categorías (misma lógica que ya teníamos)
    function filterUsingCategory(selectedCategory) {
        var id = 0;
        document.querySelectorAll('.chip_button').forEach(function (btn) {
            btn.classList.toggle('active', btn.id === selectedCategory);
        });
        {% for post in site.posts %}
            {% if post.categories contains 'blog' and post.hidden != true %}
                var cats = {{ post.categories | jsonify }};
                var postDiv = document.getElementById(++id);
                postDiv.style.display =
                    (selectedCategory == 'All' || cats.includes(selectedCategory))
                        ? 'unset'
                        : 'none';
            {% endif %}
        {% endfor %}
    }
</script>
</body>
</html>
