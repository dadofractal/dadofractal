---
layout: none
#title: Frequently Asked Questions
permalink: /
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
            <p>El podcast que te propone bajarte del tren del hype para repasar esos animes de los que ya nadie habla.</p>
            <div class="social-media">
                <h3>Escuchanos</h3>

                <a target="_blank" href="https://www.youtube.com/channel/UCvdnlKDxOBQerlBvsZKpEHQ">
                    <img src="{{ site.baseurl }}/assets/img/social-media/youtube.png" alt="Youtube"><img/> </a>
                <a target="_blank" href="https://open.spotify.com/show/4urOp89jKoWKsEXRRIqWJv">
                    <img src="{{ site.baseurl }}/assets/img/social-media/spotify.png" alt="Spotify"><img/> </a>
                <a target="_blank" href="https://podcasts.apple.com/ar/podcast/dado-fractal/id1527944158">
                    <img src="{{ site.baseurl }}/assets/img/social-media/itunes.png" alt="Apple Podcast"><img/> </a>
                <a target="_blank" href="https://ar.ivoox.com/es/podcast-dado-fractal_sq_f1908517_1.html">
                    <img src="{{ site.baseurl }}/assets/img/social-media/ivoox.png" alt="Ivoox"><img/> </a>
                <a target="_blank" href="http://feeds.feedburner.com/DadoFractal">
                    <img src="{{ site.baseurl }}/assets/img/social-media/rss.png" alt="Rss"><img/> </a>

                <h3>Seguinos</h3>

                <a target="_blank" href="https://www.facebook.com/Dado-Fractal-102035101503952">
                    <img src="{{ site.baseurl }}/assets/img/social-media/facebook.png" alt="Facebook"><img/> </a>
                <a target="_blank" href="https://twitter.com/dadofractal">
                    <img src="{{ site.baseurl }}/assets/img/social-media/twitter.png" alt="Twitter"><img/> </a>
                <a target="_blank" href="https://www.instagram.com/dadofractal/">
                    <img src="{{ site.baseurl }}/assets/img/social-media/instagram.png" alt="Instagram"><img/> </a>
            </div>
            <div class="episodes">
                <h3>Episodios</h3>
                {% assign posts = site.posts | where_exp:"item", "item.categories contains 'podcast'"  %}
                <p>
                {% for post in posts %}
                    <a href="{{ post.url }}">{{ post.date | date: "%Y-%m-%d" }} &raquo; {{ post.title }}</a><br/>
                {% endfor %}
                </p>
            </div>
            <div class="social-media">
                <h3><a href="{{ site.baseurl }}/blog">Blog</a></h3>
            </div>
        </div>
    </div>
</body>
