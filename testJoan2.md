---
layout: page
title: "Test Joan 2 wo/ comments"
permalink: /testJoan2/
redirect_from:
---

<ul class="post-list">
  {% for post in site.categories.blog %}
    {% if post.hidden != true %}
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
      </li>
      <div class="divider">
      </div>
    {% endif %}
  {% endfor %}
</ul>