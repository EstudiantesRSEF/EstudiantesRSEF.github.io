---
layout: page
title: "El Blog del Grupo de Estudiantes de la RSEF"
permalink: /blog/
redirect_from:
  - /blog.html
---
<!-- FANCIER BLOG PRESENTATION IN DEVELOPMENT (WE NEED TO ATTRACT ATTENTION)
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
* {
  box-sizing: border-box;
}

/* Add a gray background color with some padding */
body {
  font-family: Arial;
  padding: 20px;
  background: #f1f1f1;
}

/* Header/Blog Title */
.header {
  padding: 30px;
  font-size: 40px;
  text-align: center;
  background: white;
}

/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {   
  float: left;
  width: 75%;
}

/* Right column */
.rightcolumn {
  float: left;
  width: 25%;
  padding-left: 20px;
}

/* Fake image */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}

/* Add a card effect for articles */
.card {
   background-color: white;
   padding: 20px;
   margin-top: 20px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
  margin-top: 20px;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn, .rightcolumn {   
    width: 100%;
    padding: 0;
  }
}
</style>
</head>
<body>

<div class="row">
  <div class="leftcolumn">
    <div class="card">
      <h2>¿QUIERES PUBLICAR CON NOSOTROS?</h2>
      <h5>Title description, Dec 7, 2017</h5>
      <div class="fakeimg" style="height:200px;">Image</div>
      <p>Some text..</p>
      <p>¿Te apetecería publicar algún artículo en nuestra web? ¿Eres un ávido divulgador científico que busca lectores? No dudes en contactarnos. ¡Esperamos tu mensaje!</p>
    </div>
  </div>
  <div class="rightcolumn">
    <div class="card">
      <h2>El autor</h2>
      <div class="fakeimg" style="height:100px;">Image</div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
    </div>
    <div class="card">
      <h3>Popular Post</h3>
      <div class="fakeimg">Image</div><br>
      <div class="fakeimg">Image</div><br>
      <div class="fakeimg">Image</div>
    </div>
    <div class="card">
      <h3>Follow Me</h3>
      <p>Some text..</p>
    </div>
  </div>
</div>

</body>
</html>
-->


<div class="row center" style="padding-top: 10px">
<button class="chip_button" id="All" onclick="filterUsingCategory('All')">
  Todas las entradas
</button>
{% assign categories = site.categories | sort %}
{% for category in categories %}
  {% assign cat = category | first %}
  {% if cat == 'blog' %}
  {% elsif cat == 'noticias' %}
  {% elsif cat == 'enef' %}
  {% elsif cat == 'ENEF' %}
  {% elsif cat == '2023' %}
  {% else %}
  <button class="chip_button" id="{{ cat }}" onclick="filterUsingCategory(this.id)">
    {{ cat }}
  </button>
  {% endif %}
{% endfor %}
</div>

<ul class="post-list">
  {% assign id = 0 %}
  {% for post in site.categories.blog %}
    {% if post.hidden != true %}
      {% assign id = id | plus:1 %}
      <div  id="{{id}}">
      <li>
        <h2>
          <a class="post-link" href="{{ post.url | prepend: site.baseurl }}">
            {{ post.title }}
          </a>
          {% if post.date %}
            <div class="chip">
              <span class="post-meta">
                {{ post.date | date: "%-d %b %Y" }}
              </span>
            </div>
          {% endif %}
          {% if post.author %}
            <div class="chip">
              <span class="post-meta">
                {{ post.author }}
              </span>
            </div>
          {% endif %}
          {% if post.categories %}
            {% for category in post.categories %}
              {% if category == 'blog' %}
                {% else %}
                  <div class="chip">
                    <span class="post-meta">
                      {{ category }}
                    </span>
                  </div>
              {% endif %}
            {% endfor %}
          {% endif %}
        </h2>
        <div class="entry-content">
          {{ post.excerpt | strip_html }}
        </div>
        <br>
        </li>
        <div class="divider">
        </div>
      </div>
    {% endif %}
  {% endfor %}
</ul>

<script type="text/javascript">
  function filterUsingCategory(selectedCategory) {
    var id = 0;
    {% for post in site.categories.blog %}
      var cats = {{ post.categories | jsonify }}

      var postDiv = document.getElementById(++id);
      postDiv.style.display =
        (selectedCategory == 'All' || cats.includes(selectedCategory)) 
          ? 'unset' 
          : 'none';
    {% endfor %}
  }
</script>
