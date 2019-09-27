---
layout: page
title: Tags
permalink: /tags/
---

<div>
  <div>
    <ul class="posts">
    {% assign sorted_tags = site.tags | sort %}
    {% for tag in sorted_tags %}
        <li>
            &raquo; <a href="#{{ tag[0] | slugify }}" >{{ tag[0] | capitalize }}</a>
        </li>
    {% endfor %}
    </ul>
  </div>
  <hr/>
  <div>
    {% for tag in sorted_tags %}
    <h2 id="{{ tag[0] | slugify }}">{{ tag | first | capitalize}}</h2>
    <ul class="posts">
        {% for post in tag[1] %}
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

