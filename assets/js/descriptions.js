var descriptions = [
    "元気いいね、何かいいことでもあったのかい？",
    "Maybe this time it will end on a happier note",
    "Copper, 40g; Zinc, 25g; Nickel, 15g;</br >Hiding Embarrassment, 5g; Malice, 97kg",
    "Don't move. Oh, my bad. </br >I mean, you can move if you want, but it'd be very dangerous",
    "A true man never dies, even when he's killed",
    "天の光はすべて星",
    "欠けた翼で飛んだ, 醜い星の子ミカヅキ",
    "The scent of tea no longer fills that room",
    "What the lights in each of their hands illuminate",
    "Undoubtedly, girls are made of sugar, spice, and all that's nice",
    "Spring always comes to life buried underneath a pile of snow",
    "Un instante, una mente, al unísono",
    "Al borde de la muerte y después",
    "Al menos actúa como un ser humano"
];

var description = descriptions[Math.floor(Math.random() * descriptions.length)];
document.getElementById("site-description").innerHTML = description;
