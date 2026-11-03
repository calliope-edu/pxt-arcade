# Attrape la pizza
### @explicitHints true


### ~button /#tutorial:/tutorials/chase-the-pizza

Essaie ce tutoriel !

### ~

## Introduction @showdialog

![Animation du jeu](/static/tutorials/chase-the-pizza/chasing.gif)

Crée un jeu où le but est de manger autant de pizzas que possible
avant la fin du temps !


## {Étape 2}

**Définis la couleur d'arrière-plan**

---

- :tree: Ouvre le tiroir <br/>
``||scene:Scène||``<br/>
de la boîte à outils et fais glisser <br/>
``||scene:définir couleur d'arrière-plan à [ ]||`` <br/>
dans le conteneur **vide** ``||loops(noclick):au démarrage||`` qui se trouve déjà dans ton espace de travail.

~hint Qu'est-ce que ça veut dire ? 🤷🏽

---

Dans les instructions, nous mettons certains textes en évidence pour t'aider à trouver ce que tu cherches.

Par exemple, quand nous te proposons le bloc <br/>
``||scene:définir couleur d'arrière-plan à [ ]||``<br/>
nous voulons dire ce bloc : <br/>

```block
scene.setBackgroundColor(13)
```

hint~

💡 _Tu peux choisir une autre couleur si celle du bloc ne te plaît pas._


---

- :mouse pointer: Clique sur le bouton **Suivant** pour passer à
l'étape suivante du tutoriel.


#### ~ tutorialhint
```blocks
// @highlight
scene.setBackgroundColor(13)
```


## {Étape 3}

Ajoute un **sprite** pour le joueur.

---

- :paper plane: Ouvre le tiroir ``||sprites:Sprites||`` et fais glisser <br/>
``||variables(sprites):définir [mySprite] à sprite [ ] de type [Player]||`` <br/>
**à la fin** du bloc ``||loops(noclick):au démarrage||`` qui se trouve déjà dans ton espace de travail.

---


~hint C'est quoi, un sprite ? 💡

---

Dans Arcade, chaque personnage ou image qui fait quelque chose s'appelle un **SPRITE**.

Les sprites ont des propriétés que tu peux utiliser et modifier —
la taille, la position et la durée de vie sont toutes des propriétés des sprites.

Notre joueur sera lui aussi un sprite.

hint~


~hint Montre-moi 🔍

![Ajouter un bloc sprite](/static/tutorials/chase-the-pizza/mySprite.gif)

hint~


#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(13)
// @highlight
mySprite = sprites.create(img`.`, SpriteKind.Player)
```

## {Étape 4}

- :mouse pointer: Dessine ton sprite en cliquant sur le carré gris vide du bloc <br/>
``||variables(sprites):définir [mySprite] à sprite [ ] de type [Player]||`` <br/>
pour ouvrir l'**éditeur de sprites**.


- :mouse pointer: Clique sur **Terminé** quand tu as fini de dessiner.

~hint Montre-moi 🔍

![Éditeur d'images](/static/tutorials/chase-the-pizza/draw.gif)

hint~



#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(13)
// @highlight
mySprite = sprites.create(img`
. . . . . 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 f 5 5 5 5 f 5 5 5 5 5 
. 5 5 5 5 f f 5 5 5 f f 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 f f f f f f f f f 5 5 5 
. 5 5 5 5 f b b b b b f 5 5 5 5 
. . 5 5 5 5 f b b b f 5 5 5 5 . 
. . 5 5 5 5 5 f f f 5 5 5 5 5 . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . . . 5 5 5 5 5 5 5 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
```


## {Étape 5}

**Fais bouger le sprite**

---

- :game: Ouvre ``||controller:Contrôleur||`` et fais glisser<br/>
``||controller:déplacer [mySprite] avec les boutons||``<br/>
**à la fin** du bloc <br/>
``||loops(noclick):au démarrage||`` qui se trouve déjà dans ton espace de travail.

Tu peux maintenant déplacer ton sprite sur l'écran avec les flèches de la manette ou de ton clavier.


~hint Montre-moi 🔍

![Ajouter le bloc de déplacement](/static/tutorials/chase-the-pizza/move.gif)

hint~


#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
scene.setBackgroundColor(13)
mySprite = sprites.create(img`
. . . . . 5 5 5 5 5 5 5 . . . . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 f 5 5 5 5 f 5 5 5 5 5 
. 5 5 5 5 f f 5 5 5 f f 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 f f f f f f f f f 5 5 5 
. 5 5 5 5 f b b b b b f 5 5 5 5 
. . 5 5 5 5 f b b b f 5 5 5 5 . 
. . 5 5 5 5 5 f f f 5 5 5 5 5 . 
. . . 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . . . 5 5 5 5 5 5 5 . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
// @highlight
controller.moveSprite(mySprite)
```




## {Étape 6}


- :binoculars: Teste ton projet dans la fenêtre de jeu !

Tu devrais pouvoir déplacer ton sprite avec la manette ou les flèches de ton clavier.


![La fenêtre de jeu se trouve en bas à droite](/static/tutorials/chase-the-pizza/game.png)







## {Étape 7}

**Ajoute une pizza**

---

- :paper plane: Ouvre ``||sprites:Sprites||`` et fais glisser<br/>
``||variables(sprites):définir [pizza] à sprite [ ] de type [Player]||``<br/>
**à la fin** du bloc <br/>
``||loops(noclick):au démarrage||`` qui se trouve déjà dans ton espace de travail.


- :mouse pointer: Clique sur **Player** dans<br/>
``||variables(noclick):définir [pizza] à sprite [ ] de type [Player]||``<br/>
et choisis plutôt **Food**.

---

~hint Montre-moi 🔍

![Changer le type de la pizza en Food](/static/tutorials/chase-the-pizza/food.gif)

hint~


```blockconfig.local
let pizza = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
```


#### ~ tutorialhint
```blocks
let mySprite: Sprite = null
let pizza: Sprite = null
scene.setBackgroundColor(13)
mySprite = sprites.create(img`
. . . . 5 5 5 5 5 5 5 . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
5 5 5 5 f 5 5 5 5 f 5 5 5 5 5 . 
5 5 5 5 f f 5 5 5 f f 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 f f f f f f f f f 5 5 5 . 
5 5 5 5 f b b b b b f 5 5 5 5 . 
5 5 5 5 5 f b b b f 5 5 5 5 5 . 
. 5 5 5 5 5 f f f 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
// @highlight
pizza = sprites.create(img`.`, SpriteKind.Food)
```


## {Étape 8}


- :mouse pointer: Choisis ta pizza en cliquant sur le carré gris vide dans <br/>
``||variables(noclick):définir [pizza] à sprite [ ] de type [Food]||`` <br/>
pour ouvrir l'**éditeur de sprites**.

- :mouse pointer: Passe à l'onglet **Galerie** en haut.
![Sélectionner la galerie](/static/skillmap/assets/gallery.png)


- :mouse pointer: Choisis ta pizza, puis clique sur **Terminé**.

~hint Montre-moi 🔍

![Galerie d'images](/static/tutorials/chase-the-pizza/gallery.gif)

hint~


💡 _Tu peux aussi dessiner ta propre pizza si tu préfères !_

```blockconfig.local
let pizza = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
```


#### ~ tutorialhint
```blocks
let pizza: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(13)
mySprite = sprites.create(img`
. . . . 5 5 5 5 5 5 5 . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
5 5 5 5 f 5 5 5 5 f 5 5 5 5 5 . 
5 5 5 5 f f 5 5 5 f f 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 f f f f f f f f f 5 5 5 . 
5 5 5 5 f b b b b b f 5 5 5 5 . 
5 5 5 5 5 f b b b f 5 5 5 5 5 . 
. 5 5 5 5 5 f f f 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . 5 5 5 5 5 5 5 5 5 5 5 . . . 
. . . . 5 5 5 5 5 5 5 . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Food)
```



## {Étape 9}

**Fais qu'il se passe quelque chose quand les sprites se chevauchent !**

---

- :paper plane: Ouvre ``||sprites:Sprites||`` et fais glisser le conteneur<br/>
``||sprites:quand [sprite] de type [Player] chevauche [otherSprite] de type [Food]||``<br/>
dans **une zone vide** de l'espace de travail.


🤷🏽‍♀️ _Besoin d'aide ? Clique sur l'ampoule dans le cercle ci-dessous pour voir les blocs nécessaires à cette étape._



```blockconfig.local
let pizza = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
```


#### ~ tutorialhint
```blocks
// @highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {

})
```



## {Étape 10}

**Ajoute un point quand les sprites se chevauchent**

---

- :id card: Ouvre ``||info:Info||`` et fais glisser<br/>
``||info:modifier le score de [1]||``<br/>
dans le conteneur **vide** <br/>
``||sprites(noclick):quand [sprite] ... chevauche [otherSprite]||`` <br/>
qui se trouve déjà dans l'espace de travail.



```blockconfig.local
let pizza = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
```


#### ~ tutorialhint
```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    // @highlight
	info.changeScoreBy(1)
})
```





## {Étape 11}


- :binoculars: Teste ton jeu !

Tu remarques que tu gagnes BEAUCOUUUUUP trop de points quand ton sprite
joueur chevauche la pizza ?

Nous allons corriger ça à l'étape suivante.




## {Étape 12}

**Téléporte la pizza à un endroit aléatoire chaque fois que les sprites se chevauchent.**

~hint Ça veut dire quoi, aléatoire ? 🤷🏽‍♀️

---

Un nombre « aléatoire » est une valeur que tu ne peux pas prévoir à l'avance.

Dans Arcade, on utilise ce bloc :

```block
randint(0, scene.screenWidth())
```

pour obtenir un nombre aléatoire entre **0** et la **largeur de l'écran**.

hint~

---

- :paper plane: Ouvre ``||sprites:Sprites||`` et fais glisser <br/>
``||sprites:définir la position de [pizza] à ...||``<br/>
**à la fin** du conteneur <br/>
``||sprites(noclick):quand [sprite] ... chevauche [otherSprite]||`` <br/>
qui se trouve déjà dans l'espace de travail.


```blockconfig.local
let pizza = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
```


#### ~ tutorialhint
```blocks
let pizza: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    // @highlight
    pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
})
```




## {Étape 13}

**Démarrons un compte à rebours chaque fois que les sprites se chevauchent.**

---

- :id card: Depuis ``||info:Info||``, fais glisser <br/>
``||info:démarrer compte à rebours [3] (s)||`` <br/>
**à la fin** du conteneur <br/>
``||sprites(noclick):quand [sprite] ... chevauche [otherSprite]||`` <br/>
qui se trouve déjà dans l'espace de travail.


```blockconfig.local
let pizza = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
```


#### ~ tutorialhint
```blocks
let pizza: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    // @highlight
    info.startCountdown(3)
})
```


## {Finale}

**🎉 Bravo ! 🎉**

Tu as créé un jeu **Attrape la pizza**.

Joue à ton jeu. Combien de points peux-tu marquer avant la fin du temps ?

Quand tu as fini de jouer, clique sur **Terminé** pour partager ton jeu avec ta famille et tes amis !



```blockconfig.local
let pizza = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
```

#### ~ tutorialhint
```blocks
let pizza: Sprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(13)
mySprite = sprites.create(img`
. . . . . 5 5 5 5 5 5 . . . . .
. . . 5 5 5 5 5 5 5 5 5 5 . . .
. . 5 5 5 5 5 5 5 5 5 5 5 5 . .
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 .
. 5 5 5 f f 5 5 5 5 f f 5 5 5 .
5 5 5 5 f f 5 5 5 5 f f 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5
5 5 f 5 5 5 5 5 5 5 5 5 5 f 5 5
5 5 5 f 5 5 5 5 5 5 5 5 f 5 5 5
. 5 5 5 f 5 5 5 5 5 5 f 5 5 5 .
. 5 5 5 5 f f f f f f 5 5 5 5 .
. . 5 5 5 5 5 5 5 5 5 5 5 5 . .
. . . 5 5 5 5 5 5 5 5 5 5 . . .
. . . . . 5 5 5 5 5 5 . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
pizza = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Food)

sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	info.changeScoreBy(1)
    pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
    info.startCountdown(3)
})
```


```blockconfig.global
let pizza: Sprite = null

scene.setBackgroundColor(13)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {})
randint(0, scene.screenWidth())
pizza.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
info.startCountdown(3)

```

```package
chase-the-pizza=github:kiki-lee/chase-the-pizza
```