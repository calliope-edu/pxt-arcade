# Arène des insectes : carrés
### @hideReplaceMyCode true

## Présentation de l'arène des insectes @showdialog

Bienvenue dans l'👾 **Arène des insectes** 👾, où les insectes les plus malins se battent pour la gloire !

Regarde cette vidéo de présentation pour commencer, puis clique sur OK.

![Présentation de l'arène](youtube:U_bcAht2o0A "vidéo de présentation de l'arène des insectes")

## Algorithme des carrés @showdialog

![Arène des insectes carrés](/static/skillmap/bug-arena/squares.gif "animation d'un motif en carrés")

Excellent choix d'algorithme d'IA ✨ – tu vas mettre la concurrence au carré 🟨 !

Programmons ton insecte pour qu'il se déplace sur l'écran en coloriant l'arène selon un motif en carrés.

## Choisir la direction

Notre insecte se déplace tout seul, mais il est important qu'il parte dans la bonne direction ! 🗺️

Depuis la catégorie ``||hourOfAi:Bug AI||`` de la boîte à outils, fais glisser le bloc ``||hourOfAi:face towards 0||`` et dépose-le dans le bloc ``||hourOfAi:on start||``.

~hint Ça sert à quoi ?

---

``||hourOfAi:Face towards||`` oriente ton insecte vers un angle précis en degrés, où :
- 0 = droite
- 90 = bas
- 180 = gauche
- 270 = haut

![Face towards en degrés](/static/skillmap/bug-arena/degrees.png "face towards en degrés")

Notre insecte va donc d'abord se diriger vers le bord droit de l'écran.

hint~

```blockconfig.local
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
    	
    }
})
```

```blocks
hourOfAi.onStart(function () {
    //@highlight
    hourOfAi.turnTowards(0)
})
```

## Contre le mur

Dans la fenêtre de jeu 🖼️ en bas à droite, clique sur le bouton **Practice**.

Puis choisis **No Opponent** et **Infinite**.

Que se passe-t-il quand ton insecte arrive de l'autre côté de l'écran ?

Oh oh ! Il reste coincé ! 🔄

Programmons ce qu'il doit faire quand il touche un mur. 🧱

Depuis la catégorie ``||hourOfAi:Bug AI||``, fais glisser un bloc ``||hourOfAi:on bump wall||`` dans l'espace de travail – tu peux le poser n'importe où.

```blockconfig.local
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
    	
    }
})
```

```blocks
hourOfAi.onBumpWall(function () {

})
```

## Tourner de 90 degrés

Depuis la catégorie ``||hourOfAi:Bug AI||``, fais glisser un bloc ``||hourOfAi:turn 90||`` et dépose-le dans le bloc ``||hourOfAi:on bump wall||``.
<br/>
<br/>

~hint Que fait turn 90 ?

---

Le bloc de rotation ↩️ fait tourner notre insecte d'un certain nombre de degrés. Un nombre positif ➕ tourne dans le sens des aiguilles d'une montre, un nombre négatif ➖ dans le sens inverse.

![Angle de rotation](/static/skillmap/bug-arena/turn-angle.png "angle de rotation")

Ici, on garde 90 degrés, car notre insecte doit faire un angle droit complet dans le coin de l'écran.

hint~

```blockconfig.local
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
    	
    }
})
```

```blocks
hourOfAi.onBumpWall(function () {
    //@highlight
    hourOfAi.turnBy(90)
})
```

## Chasse aux bugs ! 🐞

Testons notre algorithme pour voir si notre insecte se déplace bien en carré. 🟨

Dans la fenêtre de jeu 🖼️, que se passe-t-il quand notre insecte a parcouru les 4 côtés de l'arène ?

Aïe ! Il continue de tourner dans le même carré ! ⏹️

Comment faire pour que notre insecte se déplace en carrés concentriques et remplisse tout l'écran ?

~hint Que veut dire concentrique ?

---

Des formes **concentriques** s'emboîtent les unes dans les autres, comme une cible 🎯 composée de cercles concentriques.

hint~

```blockconfig.local
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
    	
    }
})
```

## Quand tourner

Avant de tourner, notre insecte doit vérifier qu'il ne se trouve pas sur une partie de l'écran déjà recouverte de sa propre couleur 🎨.

Depuis la catégorie ``||hourOfAi:Bug AI||``, fais glisser le groupe de blocs ``||hourOfAi:every 500 ms||`` dans l'espace de travail – tu peux le poser n'importe où.

~hint Ça sert à quoi ?

---

Le bloc ``||hourOfAi:every 500 ms||`` exécute le code que tu mets dedans à un intervalle de temps donné ⏱️, ici toutes les 500 millisecondes (ms), soit une demi-seconde. Le bloc ``||hourOfAi:distance to my color||`` renvoie la distance en pixels entre l'avant de notre insecte et sa propre couleur 🎨. Si la distance vaut 0, notre insecte est sur sa propre peinture !

hint~

```blockconfig.local
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
    	
    }
})
```

```blocks
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {

    }
})
```

## Tourner à droite

Quand la distance entre notre insecte et sa propre couleur vaut 0, il doit tourner à droite. ↩️

Depuis la catégorie ``||hourOfAi:Bug AI||``, fais glisser un bloc ``||hourOfAi:turn 90||`` et dépose-le dans le bloc ``||Logic:si alors||``.

```blockconfig.local
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
    	
    }
})
```

```blocks
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
        //@highlight
        hourOfAi.turnBy(90)
    }
})
```

## 🎉 Bien joué ! 🎉

Teste à nouveau ton jeu dans la 🕹️ fenêtre de jeu ci-dessous.

Tu peux pousser le curseur **SPEED** vers la droite ➡️ pour voir ton insecte dessiner des carrés parfaits ! 🟨🟦🟩

Beau travail ! 👍 Tu as programmé un algorithme d'IA malin ✨ qui va enfermer tes adversaires dans l'arène des insectes !

Passe maintenant à la 🏰 bataille de la tour pour défier tes insectes rivaux !

```blockconfig.local
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
    	
    }
})
```

```blocks
hourOfAi.onStart(function () {
    hourOfAi.turnTowards(0)
})
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(90)
})
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
        hourOfAi.turnBy(90)
    }
})
```

```template
hourOfAi.onStart(function () {
	
})
```

```package
bug-arena=github:riknoll/bug-arena
```
