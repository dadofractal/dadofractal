---
layout: none
#title: Frequently Asked Questions
permalink: /podcast/
---
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.1/css/all.css" integrity="sha384-5sAR7xN1Nv6T6+dT2mhtzEpVJvfS3NScPQTrOxhwjIuvcA67KV2R5Jz6kr4abQsz" crossorigin="anonymous">
    <link rel="stylesheet" href="{{ site.baseurl }}/assets/css/podcast-style.css">
    <title>Dado Fractal</title>
</head>
<body>
    <div class="grid-2">
        <div class="section">
            <img src="{{ site.baseurl }}/assets/img/logo150x150.png"><img>
            <h2>Dado Fractal</h2>
            <p>El podcast que te propone bajarte del tren del hype para repasar esos animes de los que ya nadie habla</p>
            <div class="social-media">
                <a href="https://www.facebook.com/Dado-Fractal-102035101503952">
                    <i class="fab fa-2x fa-facebook"></i></a>
                <a href="https://twitter.com/dadofractal">
                    <i class="fab fa-2x fa-twitter"></i></a>
                <a href="https://www.instagram.com/dadofractal/">
                    <i class="fab fa-2x fa-instagram"></i></a>
                <a href="https://www.youtube.com/channel/UCvdnlKDxOBQerlBvsZKpEHQ">
                    <i class="fab fa-2x fa-youtube"></i></a>
                <a href="https://open.spotify.com/show/4urOp89jKoWKsEXRRIqWJv">
                    <i class="fab fa-2x fa-spotify"></i></a>
                <a href="http://feeds.feedburner.com/DadoFractal">
                    <i class="fas fa-2x fa-rss"></i></a>
            </div>
        </div>
        <!-- <div class="section episodes">
            <h3>Episodios</h3>
            {% assign posts = site.posts | where_exp:"item", "item.categories contains 'podcast'"  %}
            {% for post in posts %}
                <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} &raquo; {{ post.title }}</a>
            {% endfor %}
        </div> -->
    </div>
</body>
