# Arène des insectes : gribouillis
### @hideReplaceMyCode true

## Présentation de l'arène des insectes @showdialog

Bienvenue dans l'👾 **Arène des insectes** 👾, où les insectes les plus malins se battent pour la gloire !

Regarde cette vidéo de présentation pour commencer, puis clique sur OK.

![Présentation de l'arène](youtube:U_bcAht2o0A "vidéo de présentation de l'arène des insectes")

## Algorithme aléatoire @showdialog

![Arène des insectes aléatoire](/static/skillmap/bug-arena/random.gif "animation d'un motif aléatoire")

Excellent choix d'algorithme – que le chaos règne ! 🤪

Dans ce tutoriel, nous allons programmer l'algorithme d'IA ✨ de notre insecte pour qu'il se déplace selon des motifs aléatoires 𖡎 sur l'écran.

## Quand tourner 

Notre insecte va changer de direction toutes les 5 secondes. Pour cela, on utilise un bloc d'intervalle de temps. 🕓

Depuis la catégorie ``||hourOfAi:Bug AI||`` de la boîte à outils, fais glisser un bloc ``||hourOfAi:every 5000 ms||`` dans l'espace de travail – tu peux le poser n'importe où.

![Glisser-déposer des blocs](/static/skillmap/bug-arena/dragdrop.gif "animation : glisser-déposer des blocs")

~hint Ça sert à quoi ?

---

Le bloc ``||hourOfAi:every 5000 ms||`` exécute le code que tu mets dedans à un intervalle de temps donné en millisecondes (ms) 🕓, ici toutes les 5000 ms, soit 5 secondes.

hint~

Clique sur l'ampoule 💡 si tu as besoin d'aide, ou clique sur **Suivant** pour continuer.

```blockconfig.local
hourOfAi.every(5000, function () {

})
randint(-180, 180)
```

```blocks
hourOfAi.every(5000, function () {

})
```

## Fais tourner ton insecte !

Depuis la catégorie ``||hourOfAi:Bug AI||``, fais glisser un bloc ``||hourOfAi:turn 90||`` et dépose-le dans le bloc ``||hourOfAi:every 5000 ms||``.
<br/>
<br/>

~hint Que fait turn 90 ?

---

Le bloc de rotation ↩️ fait tourner notre insecte d'un certain nombre de degrés par rapport à sa direction actuelle. Un nombre positif ➕ tourne dans le sens des aiguilles d'une montre, un nombre négatif ➖ dans le sens inverse.

![Angle de rotation](/static/skillmap/bug-arena/turn-angle.png "angle de rotation")

hint~

```blockconfig.local
hourOfAi.every(5000, function () {

})
randint(-180, 180)
```

```blocks
hourOfAi.every(5000, function () {
    //@highlight
    hourOfAi.turnBy(90)
})
```

## 🎲 Choisir au hasard

Toutes les 5 secondes, notre insecte doit tourner dans une nouvelle direction choisie au hasard.

Depuis le tiroir ``||Math:Maths||`` de la boîte à outils, fais glisser un bloc ``||Math:choisir aléatoirement||`` et dépose-le dans le bloc ``||hourOfAi:turn||``, à la place du **90**.
<br/>
<br/>

~hint Explique-moi le choix aléatoire

---

Le bloc ``||Math:choisir aléatoirement||`` renvoie un nombre au hasard 🎲 entre une valeur minimale ⏬ et une valeur maximale ⏫. Ici, il renvoie un nombre au hasard entre **-180** degrés (sens inverse des aiguilles d'une montre) et **+180** degrés (sens des aiguilles d'une montre).

hint~

```blockconfig.local
hourOfAi.every(5000, function () {

})
randint(-180, 180)
```

```blocks
hourOfAi.every(5000, function () {
    //@highlight
    hourOfAi.turnBy(randint(-180, 180))
})
```

## 🔎 Chasse aux bugs !

Testons notre algorithme pour vérifier que notre insecte fait bien ce qu'on attend : courir partout selon des motifs aléatoires !

Dans la fenêtre de jeu 🖼️, clique sur le bouton **Practice**.

Puis choisis **No Opponent** et **Infinite**.

Ton insecte change-t-il de direction toutes les 5 secondes ? Trop cool ! 😎

```blockconfig.local
hourOfAi.every(5000, function () {

})
randint(-180, 180)
```

## 🧱 Contre le mur

Ajoutons du code pour que notre insecte tourne ↩️ quand il touche un mur.

Depuis la catégorie ``||hourOfAi:Bug AI||``, fais glisser un bloc ``||hourOfAi:on bump wall||`` dans l'espace de travail – tu peux le poser n'importe où.

Fais maintenant glisser un autre bloc ``||hourOfAi:turn 90||`` et dépose-le dans le bloc ``||hourOfAi:on bump wall||``.

```blockconfig.local
hourOfAi.every(5000, function () {

})
randint(-180, 180)
```

```blocks
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(90)
})
```

## Rotation aléatoire

Là encore, notre insecte doit tourner dans une direction au hasard, alors réutilisons le 🎲 choix aléatoire.

Depuis le tiroir ``||Math:Maths||`` de la boîte à outils, fais glisser un autre bloc ``||Math:choisir aléatoirement||`` et dépose-le dans le bloc ``||hourOfAi:turn||``, à la place du **90**.

```blockconfig.local
hourOfAi.every(5000, function () {

})
randint(-180, 180)
```

```blocks
hourOfAi.onBumpWall(function () {
    //@highlight
    hourOfAi.turnBy(randint(-180, 180))
})
```

## 🎉 Bien joué ! 🎉

Teste à nouveau ton jeu dans la 🕹️ fenêtre de jeu.

Tu peux pousser le curseur **SPEED** vers la droite ➡️ pour voir ton insecte dessiner de magnifiques 🌈 motifs colorés complètement fous !

Beau travail ! 👍 Tu as programmé un algorithme d'IA malin ✨ qui va semer la confusion chez tes adversaires dans l'arène des insectes !

Passe maintenant à la 🏰 bataille de la tour pour défier tes insectes rivaux !

```blockconfig.local
hourOfAi.every(5000, function () {

})
randint(-180, 180)
```

```blocks
hourOfAi.every(5000, function () {
    hourOfAi.turnBy(randint(-180, 180))
})
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(randint(-180, 180))
})
```

```template
hourOfAi.onStart(function () {
	
})
```

```package
bug-arena=github:riknoll/bug-arena
```
