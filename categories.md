---
layout: page
title: Categorias
permalink: /categories/
---

<div>
  <div>
    <ul class="posts">
    {% assign sorted_categories = site.categories | sort %}
    {% for category in sorted_categories %}
        <li>
            &raquo; <a href="#{{ category[0] | slugify }}" >{{ category[0] | capitalize }}</a>
        </li>
    {% endfor %}
    </ul>
  </div>
  <hr/>
  <div>
    {% for category in sorted_categories %}
    <h2 id="{{ category[0] | slugify }}">{{ category | first | capitalize}}</h2>
    <ul class="posts">
        {% for post in category[1] %}
        <li>
            <span>{{ post.date | date_to_string }}</span> &raquo;
            <a href="{{ post.url }}">{{ post.title }}</a>
            {% for category in post.categories %}
                <span class="category">{{ category }}</span>
            {% endfor %}
        </li>
        {% endfor %}
    </ul>
  {% endfor %}
  </div>
</div>

