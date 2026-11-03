# Ramasse les trèfles
### @explicitHints true

### ~button /#tutorial:/tutorials/collect-the-clovers

Essaie ce tutoriel !

### ~

## {Introduction @showdialog}

Crée un jeu de jardin où tu ramasses des trèfles à quatre feuilles en évitant les abeilles !

![Le jeu Ramasse les trèfles en action](/static/tutorials/collect-the-clovers/collect-clovers-sim.gif)



## {Étape 2 - Définir l'image d'arrière-plan}


Commence par préparer la scène.


- :tree: Ouvre la catégorie ``||scene:Scène||`` et fais glisser
```block
scene.setBackgroundImage(assets.image`background`)
```
dans le conteneur ``||loops(noclick):au démarrage||``<br/>
qui se trouve déjà dans l'espace de travail.


<!-- Removing until anigifs are ready>

~hint Clique ici pour voir comment faire 🕵🏽

![Prendre le bloc d'arrière-plan](/static/skillmap/star/set-bg.gif "Fais glisser le bloc pour définir l'image d'arrière-plan." )

hint~

------------>

- :mouse pointer: Quand tu as fini, clique sur **Suivant** pour voir l'étape suivante.


#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(assets.image`background`)
```




## {Étape 3}

**Choisis ton arrière-plan !**<br/>
🖼 🖼 🖼

---


- :mouse pointer: Clique sur l'image dans<br/>
```block
scene.setBackgroundImage(assets.image`background`)
```
pour changer la scène.


- :paint brush: Dessine un joli fond plein d'herbe, ou choisis une image dans la **galerie**.


#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(assets.image`background`)
```




## {Étape 4}

**Regarde la fenêtre de jeu 🎮**

Est-ce que tu vois l'arrière-plan que tu as choisi ?

![La fenêtre de jeu se trouve en bas à gauche.](/static/skillmap/mole/game1.png " ")



## {Étape 5}

**⭐ Choisis ton héros ⭐**<br/>

Tu veux un lapin ? Une princesse ? Un guerrier ?


- :paper plane: Depuis ``||sprites: Sprites||``, fais glisser
```block
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
```
**à la fin** du conteneur ``||loops(noclick): au démarrage||``.


- :paint brush: Clique sur l'image du lapin et passe à la **galerie** pour
choisir un personnage pour ton projet.



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`background`)
//@highlight
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
```





## {Étape 6}

**Le héros doit pouvoir se déplacer sur l'écran.**


- :game: Dans la catégorie ``||controller: Contrôleur||``, prends
```block
controller.moveSprite(hero)
```
et place-le **à la fin** du bloc ``||loops(noclick): au démarrage||`` qui se trouve déjà dans l'espace de travail.




#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`background`)
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
//@highlight
controller.moveSprite(hero)
```




## {Étape 7 - Garder le joueur à l'écran}


**Le héros peut sortir de l'écran si ça devient trop agité.**

Corrigeons ça.


- :paper plane: Dans la catégorie ``||sprites: Sprites||``, prends
```block
let hero: Sprite = null
hero.setStayInScreen(true)
```
et place-le **à la fin** du bloc ``||loops(noclick): au démarrage||`` qui se trouve déjà dans l'espace de travail.


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`background`)
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
controller.moveSprite(hero)
//@highlight
hero.setStayInScreen(true)
```



## {Étape 8}

**Regarde la fenêtre de jeu 🎮**

Tu devrais pouvoir déplacer ton héros avec la manette ou les flèches du clavier.

Ton héros devrait toujours rester à l'écran.



## {Étape 9 - Mise à jour du jeu}

Toutes les 5 secondes, nous voulons que de nouveaux trèfles et de nouvelles abeilles apparaissent dans notre jeu.

- :circle: Dans la catégorie ``||game:Jeu||``, prends
```blocks
game.onUpdateInterval(200, function () { })
```
et place-le dans une **zone vide** de l'espace de travail.


- :mouse pointer: Clique sur la valeur **200 ms** et remplace-la par **5 secondes**
(soit 5000 millisecondes).


#### ~ tutorialhint

```blocks
//@highlight
game.onUpdateInterval(5000, function () {

})
```




## {Étape 10}

**Le héros a besoin de quelque chose à ramasser !**

Ajoutons des trèfles 🍀

---

- :paper plane:  Depuis ``||sprites:Sprites||``, prends le bloc
```block
    let clover = sprites.createProjectileFromSide(img`.`, 50, 50)
```
et fais-le glisser dans le conteneur vide ``||game(noclick):quand mise à jour du jeu chaque [5000] ms||`` qui se trouve déjà dans ton espace de travail.


- :paint brush:  Clique sur le **carré gris** et dessine un trèfle (ou choisis-en un dans la **galerie**).



#### ~ tutorialhint


```blocks
game.onUpdateInterval(5000, function () {
    //@highlight
    let clover = sprites.createProjectileFromSide(assets.image`collect`, 50, 50)
})
```

## {Étape 11 - Ajouter des mouvements aléatoires}

Nos trèfles arrivent toujours d'en haut à droite et tombent vers le bas à gauche.

Ajoutons de la variété avec des nombres aléatoires.



- :calculator:  Depuis la catégorie ``||math:Maths||``, fais glisser deux blocs
```block
randint(-50, 50)
```
dans l'espace de travail.


- :mouse pointer: Place un bloc ``||math:choisir aléatoirement||`` à la place de chacune des valeurs **vx** et **vy** du bloc <bbr/>
``||variables:définir clover à projectile||`` <br/>
.


~hint C'est quoi, des nombres aléatoires ? 💡

---

Les nombres **aléatoires** sont des nombres qui ne suivent aucun schéma prévisible. Avec notre bloc `random`, tu obtiens un nombre entre le minimum et le maximum que tu as choisis, mais tu ne sais pas à l'avance lequel sera tiré.

Ce nombre est tiré à nouveau chaque fois que le bloc s'exécute, et à chaque fois tu peux tomber par hasard sur le même nombre que la dernière fois ou sur un autre.

hint~


~hint C'est quoi, vx et vy ? 💡

---

Le champ **vx** correspond à la **vitesse** de l'objet de gauche à droite.<br/>
La vitesse d'un objet, c'est la rapidité avec laquelle il se déplace dans une direction.

_Vitesse dans la direction x (horizontale)_

- Avec un **vx** supérieur à 0, l'objet se déplace vers la droite.
- Avec un **vx** inférieur à 0, l'objet se déplace vers la gauche.
- Avec un **vx** de 0, sa position ne change pas.

_Vitesse dans la direction y (verticale)_

- Avec un **vy** supérieur à 0, l'objet se déplace vers le bas.
- Avec un **vy** inférieur à 0, l'objet se déplace vers le haut.
- Avec un **vy** de 0, sa position ne change pas.

hint~


#### ~ tutorialhint

```blocks

game.onUpdateInterval(5000, function () {

//@highlight
    let clover = sprites.createProjectileFromSide(assets.image`collect`, randint(-50, 50), randint(-50, 50))
})
```

## {Étape 12 - Ajouter le projectile abeille @fullscreen}

Maintenant, nous pouvons ajouter l'abeille 🐝

---

- :paper plane:  Depuis ``||sprites:Sprites||``, prends
```block
    let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
```
et fais-le glisser **à la fin** du conteneur ``||game(noclick):quand mise à jour du jeu chaque [5000] ms||`` qui se trouve déjà dans ton espace de travail.


- :paint brush:  Clique sur le **carré gris** et dessine une abeille (ou choisis-en une dans la **galerie**).


- :calculator:  Depuis ``||math:Maths||``, fais glisser d'autres blocs
```block
randint(-50, 50)
```
dans **vx** et **vy** du bloc <br/>
``||variables:définir bee à projectile||``</br>.



```blockconfig.local

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```


#### ~ tutorialhint

```blocks

game.onUpdateInterval(5000, function () {
    let clover = sprites.createProjectileFromSide(assets.image`collect`, randint(-50, 50), randint(-50, 50))
//@highlight
    let bee = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
})
```

## {Étape 13 - Faire de l'abeille un ennemi}


Pour que l'abeille soit dangereuse, nous devons changer son **type** en **Enemy**.

---

- :paper plane:  Depuis ``||sprites:Sprites||``, prends
```block
    let bee: Sprite = null
     bee.setKind(SpriteKind.Enemy)
```
et fais-le glisser **à la fin** du conteneur ``||game(noclick):quand mise à jour du jeu chaque [5000] ms||`` qui se trouve déjà dans ton espace de travail.


```blockconfig.local


let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

#### ~ tutorialhint

```blocks

game.onUpdateInterval(5000, function () {
    let clover = sprites.createProjectileFromSide(assets.image`collect`, randint(-50, 50), randint(-50, 50))
    let bee = sprites.createProjectileFromSide(assets.image`avoid`, randint(-50, 50), randint(-50, 50))
//@highlight
    bee.setKind(SpriteKind.Enemy)
})
```

## {Étape 14 - Ajouter le comportement de chevauchement}

C'est le moment d'ajouter le code qui donne un point quand le héros chevauche le trèfle.

- :paper plane:  Depuis ``||sprites:Sprites||``, prends
```blocks
   sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {  })
```
et fais-le glisser dans une zone **vide** de l'espace de travail.


~hint C'est quoi, un sprite ? 💡

Dans Arcade, chaque personnage ou image qui fait quelque chose s'appelle un **SPRITE**.

Les sprites ont des propriétés que tu peux utiliser et modifier — la taille, la position et la durée de vie sont toutes des propriétés des sprites.

Notre héros sera lui aussi un sprite.

hint~


~hint Pourquoi utiliser « sprite » et « othersprite » ? 💡

---

Tu pourrais penser que le chevauchement devrait utiliser les noms « hero » et « clover », mais cela poserait des problèmes plus tard.

Chaque trèfle s'appelle « clover » : si tu choisis de supprimer « clover » lors du chevauchement, c'est toujours le dernier trèfle créé qui sera supprimé, et **pas** celui que tu as touché !

C'est pour ça que l'événement de chevauchement utilise les noms « sprite » et « othersprite ». Ainsi, tu as des surnoms qui te permettent d'accéder _exactement_ aux sprites qui se sont chevauchés.


hint~


```blockconfig.local

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```


#### ~ tutorialhint

```blocks
//@highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {  })
```



## {Étape 15 - Détruire le trèfle}

Quand le trèfle est ramassé, il doit disparaître.


- :paper plane:  Depuis ``||sprites:Sprites||``, prends le bloc

```block
    let otherSprite: Sprite = null
    otherSprite.destroy()
```
et dépose-le dans le conteneur vide<br/>
``||sprites(noclick):quand sprite chevauche||``<br/>
qui se trouve déjà dans l'espace de travail.


~hint Pourquoi appeler le trèfle « othersprite » ? 💡

---

Tu pourrais penser que le chevauchement devrait utiliser les noms « hero » et « clover », mais cela poserait des problèmes plus tard.

Chaque trèfle s'appelle « clover » : si tu choisis de supprimer « clover » lors du chevauchement, c'est toujours le dernier trèfle créé qui sera supprimé, et **pas** celui que tu as touché !

C'est pour ça que l'événement de chevauchement utilise les noms « sprite » et « othersprite ». Ainsi, tu as des surnoms qui te permettent d'accéder _exactement_ aux sprites qui se sont chevauchés.



hint~


```blockconfig.local

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
//@highlight
    otherSprite.destroy()
})
```



## {Étape 16}

**Regarde la fenêtre de jeu 🎮**

Tu devrais pouvoir déplacer ton héros avec la manette ou les flèches du clavier.

Quand ton héros chevauche un trèfle, le trèfle devrait disparaître.


## {Étape 17 - Ajouter un effet @fullscreen}


- :binoculars: Cherche le bloc
```block
    let otherSprite: Sprite = null
    otherSprite.destroy()
```
qui se trouve déjà dans l'espace de travail.


- :mouse pointer: Clique sur l'icône plus **(+)** pour agrandir le bloc, puis clique sur le menu déroulant **spray effect** et choisis l'effet qui te plaît.


- :mouse pointer: Clique sur le menu déroulant **500 ms** et choisis **100 ms** pour que l'effet reste bien court.

![Choisir un effet de destruction](/static/tutorials/collect-the-clovers/destroy-effect.png)


```blockconfig.local

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

```validation.local
# BlocksExistValidator
    * Enabled: false
```

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
//@highlight
    otherSprite.destroy(effects.confetti, 100)
})
```


## {Étape 18 - Jouer un son}


**Ajoute des effets sonores**


- :headphones: Dans la catégorie ``||music:Musique||``, prends
```block
    music.baDing.play()
```
et fais-le glisser **à la fin** du conteneur <br/>
``||sprites(noclick):quand sprite chevauche||`` <br/>
qui se trouve déjà dans ton espace de travail.


- :mouse pointer: Clique sur le menu déroulant **ba ding** pour choisir le son que tu préfères.


```blockconfig.local

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
//@highlight
    music.baDing.play()
})
```

## {Étape 19 - Modifier le score}


**Ajoute des points quand un trèfle est ramassé**


- :id card: Dans la catégorie ``||info:Info||``, prends
```block
    info.changeScoreBy(1)
```
et fais-le glisser **à la fin** du conteneur <br/>
``||sprites(noclick):quand sprite chevauche||`` <br/>
qui se trouve déjà dans ton espace de travail.


```blockconfig.local
let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
//@highlight
    info.changeScoreBy(1)
})
```

## {Étape 20 - Ajouter le chevauchement pour l'abeille @fullscreen}

**Il nous faut un comportement de chevauchement pour l'abeille**

- :mouse pointer: Fais un clic droit sur le conteneur<br/>
``||sprites(noclick):quand sprite chevauche||`` <br/>
qui se trouve déjà dans ton espace de travail.
```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
```
et choisis **Dupliquer**.

_Pas d'inquiétude s'il semble désactivé, nous allons corriger ça._


- :mouse pointer: Dans le bloc copié <br/>
``||sprites(noclick):quand sprite chevauche||`` <br/>
, clique sur le type ``||sprites:Projectile||`` et remplace-le par ``||sprites:Enemy||``.

![Dupliquer l'événement de chevauchement pour l'ennemi](/static/tutorials/collect-the-clovers/overlaps-enemy.png)


```blockconfig.local
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) { })

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

#### ~ tutorialhint

```blocks
//@highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    music.baDing.play()
    info.changeScoreBy(1)
})
```

## {Étape 21 - Changer les effets et les sons}


Choisissons de meilleurs sons et effets pour l'abeille.

- :binoculars: Cherche le bloc
```block
    let otherSprite: Sprite = null
    otherSprite.destroy(effects.disintegrate, 100)
```
dans le conteneur  <br/>
``||sprites(noclick):quand sprite chevauche [Enemy]||`` <br/>
de ton espace de travail et remplace l'effet par quelque chose de moins joyeux.



- :binoculars: Cherche le bloc
```block
    music.baDing.play()
```
dans le conteneur  <br/>
``||sprites(noclick):quand sprite chevauche [Enemy]||`` <br/> qui se trouve déjà dans l'espace de travail et remplace le son par un son qui correspond mieux à une piqûre d'abeille.



```blockconfig.local
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) { })

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    music.pewPew.play()
    info.changeScoreBy(1)
})
```

## {Étape 22 - Perdre une vie}

Au lieu de gagner des points, notre joueur doit perdre une vie quand il touche une abeille.


- :binoculars: Cherche le bloc
```block
    info.changeScoreBy(1)
```
dans le conteneur  <br/>
``||sprites(noclick):quand sprite chevauche [Enemy]||`` <br/> qui se trouve déjà dans l'espace de travail et **supprime-le**.



~hint Comment supprimer un bloc ? 💡

---

Tu peux supprimer un bloc de trois façons :<br/>
1) Clique sur le bloc pour le sélectionner, puis appuie sur **Suppr** sur ton clavier<br/>
2) Fais un clic droit sur le bloc et choisis **Supprimer les blocs**<br/>
3) Fais glisser le bloc dans la boîte à outils<br/>

hint~

- :id card: Dans la catégorie ``||info:Info||``, prends
```block
    info.changeLifeBy(-1)
```
et dépose-le **à la fin** du conteneur  <br/>
``||sprites(noclick):quand sprite chevauche [Enemy]||`` <br/> qui se trouve déjà dans l'espace de travail.


```blockconfig.local
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) { })

let bee = sprites.createProjectileFromSide(img`.`, 50, 50)
    bee.setKind(SpriteKind.Enemy)
```

#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.disintegrate, 100)
    music.pewPew.play()
//@highlight
    info.changeLifeBy(-1)
})
```


## {Étape 23 - Joue à ton jeu !}

**C'est fini !**
🎉 🎉 🎉

Essaie maintenant ton jeu terminé dans le simulateur en plein écran.

Clique sur **Terminé** pour partager ton jeu avec ta famille et tes amis !


```validation.global
# BlocksExistValidator
```


```blockconfig.global
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) { })
let otherSprite: Sprite = null
info.changeLifeBy(-1)
scene.setBackgroundImage(assets.image`background`)
let hero = sprites.create(assets.image`hero`, SpriteKind.Player)
controller.moveSprite(hero)
hero.setStayInScreen(true)
otherSprite.destroy()
game.onUpdateInterval(200, function () {

})

let clover = sprites.createProjectileFromSide(img`.`, 50, 50)
let bee: Sprite = null
randint(-50, 50)
bee.setKind(SpriteKind.Enemy)
```


```package
clover=github:kiki-lee/clover-images
```


```ghost
info.setScore(0)
```



```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"image5\": {\n        \"data\": \"hwQQABMAAAARAQAAAAAAAAABAAAREQEAAAAAEBEBAAAQMxEAAAAQ0REBAAAAMRMREAHQ57ELAAAAEDMRERF75+4NAAAAABDRHRH97O4NAAAAAADRHxv95+4NAAAAAAARMRF95+4NAAAAAADRHxt95+4NAAAAADHRHRH97+4NAAAAEDMRERH77O4NAAAAMRMNEAHw5+4NAAAQEdEAAABw57ELAAAQEQEAAAAQ0REBAAAAEQEAAAAAEBEBAAAAAAAAAAAAAAABAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"hero\"\n    },\n    \"image2\": {\n        \"data\": \"hwQQABAAAAAAsAuwuwsAAAC7t7B1uwAAsHu2sHe3CwBbd7awd2cLAHt3Z3tnuwAAu7t3e7YAAAAAsHt3u7sLAACwe3drZrsLsLt3e7YLdgtbd2d7Z7tgC7t3trB3tgsAsHu2sHdnCwAAe7ewdbsAAACwC7C7CwAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"collect\"\n    },\n    \"image3\": {\n        \"data\": \"hwQQABAAAAAAAAD/DwAAAAAA8P39AAAAAAD///8PAAAAAP///w8AABEA8P//ABABCQlAVUUACQmRkFVVVZWQAQmR9f//lQEJkZBfVVWfkAEBmVVVVZUJAZmQ9P//lJAJAZFfVVWfAQGZCUBVRQCZCQAAAP8PAAAAAAAA8AAAAAAAAADwAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"avoid\"\n    },\n    \"image1\": {\n        \"data\": \"hwSgAHgAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3dxd3d3d3d3d3d3N3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3Fxd3d3d3d3Nzd3d3d3d3eZmZmZmZmZmZkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3dxd3d3d3d3d3d3N3d3d3d3eZmZmZmZmZmZkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3N3d3d3d3d3d3d3d3d3c3d3c3d3d3eZmZmZmZmZmZkZkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3Nzd3d3d3d3d3d3d3d3c3N3c3N3d3d3eZmZmZmZmZmZkRkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3N3d3d3d3d3d3d3d3d3c3d3c3d3d3eZmZmZmZmZmZkRkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3dzd3d3d3d3eZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3Nzd3d3d3eZmZmZmZmZmRkRkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3dzd3d3d3d3eZmZmZmZmZmRkRkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkRkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRERkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZkZd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZmZmZmZmZmZmZlxcXd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZmZmZmZmZmZmZkZd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkREZGZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3V3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3V1d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3V3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3dXd3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d1dXd3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3dXd3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZGREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZGREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZGREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmREREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3dXd3d3eZmZmZmZmZmZkRkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3dXV3d3d3eZmZmZmZmZmZkZkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3dXd3d3eZmZmZmZmZmZkZkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZkZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3c3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3c3N3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3c3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3cXd3d3d3d3dzdzd3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3cXF3d3d3d3dzc3d3Nzd3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3cXd3d3d3d3dzdzd3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3F3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3Fxd3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3F3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl1d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmVlZd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl1d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3c3c3d3d3d3dxd3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3c3N3dzc3d3dxcXd3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3c3c3d3d3d3dxd3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3N3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3Nzd3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3N3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkZkZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkZkZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkRkZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3N3N3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3Nzd3c3N3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3N3N3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3dzd3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3dzc3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3dzd3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZGREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZGREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZEREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZEREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZEREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZEREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZGREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZGREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZGREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZGREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d1d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZGREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3V1d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d1d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d1d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZl5d1dXd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZl5d3d1d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3dxd3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkREZGZmZmZmZmZmZmZmZlzd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmTk5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZlzd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmREREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3c3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZGZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3c3N3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3c3d3d3d3d3F3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmRkREZmZmZmZmZmZmZmZmZl5d3cXd3d3d3d3d3d3d3d3d3d3Fxd3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkREZmZmZmZmZmZmZmZmZl5d3dxcXd3d3d3d3d3d3d3d3d3d3F3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZkZEZmZmZmZmZmZmZmZmZl5d3cXd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZEZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZkZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dzd3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3dzc3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dzd3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3eZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZl5d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3c=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"background\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image5\":\n            case \"hero\":return img`\n11..............\n111.........11..\n1131.......1111.\n.1331.....13111.\n.1133....133111.\n..1131...331d...\n...11111111d....\n...11dd1dd1.....\n....1df1fd1.....\n...111131111....\n...111b1b111....\n....1111111.....\n....bdddddb.....\n..1d7ff77fff71..\n..177c777fc771..\n.1deeeeeeeeeed1.\n.111eeeeeeee111.\n.11beeeeeeeeb11.\n111bddddddddb111\n`;\n            case \"image2\":\n            case \"collect\":return img`\n. . . b b b . . . b b . . . . . \n. . b 5 7 b . . b 5 b b . . . . \n. b b 7 7 b . . b 7 7 b b . . . \nb b 7 7 7 b b b b 7 7 7 7 b . . \nb 7 6 6 7 7 b b 7 7 6 6 7 b . . \n. b b b 6 7 7 7 7 6 b b b . . . \n. . . . b b 7 7 b b . . . . . . \nb b b b 7 7 7 7 7 7 b b b b . . \nb 5 7 7 7 6 b b 6 7 7 7 5 b . . \nb 7 7 7 6 b b 6 b 6 7 7 7 b . . \nb b 7 7 b . b 6 b b 6 7 b b . . \n. b b 6 b . b 6 . b b 6 b . . . \n. . b b . . b b 6 . b b . . . . \n. . . . . . . b 7 6 . . . . . . \n. . . . . . . b b b . . . . . . \n. . . . . . . . . . . . . . . . \n`;\n            case \"image3\":\n            case \"avoid\":return img`\n. . . . 1 9 1 9 1 1 9 1 9 . . . \n. . . . 1 . 9 . 9 . 9 . 9 . . . \n. . . . . 9 . 1 . 9 . 1 9 . . . \n. . . . . . 9 9 9 9 9 9 . . . . \n. . f f . . 5 5 f 5 4 f . . . . \n. f f f f 4 5 f 5 5 f 5 4 . . . \nf d f f f 5 5 f 5 5 f 5 5 f . . \nf f f f f 5 5 f 5 5 f 5 5 f f f \nf d f f f 5 5 f 5 5 f 5 5 f . . \n. f f f f 4 5 f 5 5 f 5 4 . . . \n. . f f . . 5 5 f 5 4 f . . . . \n. . . . . . 9 9 9 9 9 9 . . . . \n. . . . . 9 . 1 . 9 . 1 9 . . . \n. . . . 1 . 9 . 9 . 9 . 9 . . . \n. . . . 1 9 1 9 1 1 9 1 9 . . . \n. . . . . . . . . . . . . . . . \n`;\n            case \"image1\":\n            case \"background\":return img`\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999991119999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999911119999999999991111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999911111111119999999111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999911111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999911111111111111111111111111111111111111111199999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999111111111111111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999199991111111111111111111111111111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999111999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111199999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999911111111111999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111999999991111111199999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111119999111111111111199999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111119999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111111111111111999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111111119999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999111111111111111111111111111111111111111111199999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999991111111111111111111111111111111111119999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999\n9999999999999999999999999999999999999999999999999999999999999999999999999999999999995999999999999999999999999999999999999999999999999399999999999999999999999999\n9999999999999999999999999999199999999999999999999999999999999999999999999999999999959599999999999999999999999999999999999999999999993939999999999999999999999999\n7777777777777777777777777771717777777777777777777777777777777777777777777777777777775777777777777777777777777777777777777777777777777377777777777777777777777777\n7777777777777777777777777777177777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777577777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777775757777777777777777717777777777777\n7777777777777777777777777777777777777777777777777777777777777777771777777777777777777777777773777777777777777777777777777777777577777777777777777171777777777777\n7777777777777777777777777777777777777777777777777777777777777777717177777777777777777777777737377777777777777777777777777777777777777777777777777717777777777777\n7777777777777777377777777777777777777777777777777777777777777777771777777777777777777777777773773777777777777777777777777777777777777777777777777777777777777777\n7777777777777773737777777777777777777777777777777777777777777777777777777777777777777777777777737377777777777777777777777777777777777777777777777777777777777777\n7777777777777777377777777777777777777777777777777777777777777777777777777777777777777777777777773777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777775777777777777777777777777777777777777777777777777777777773777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777757577777777777777777777777777777777777777777777777777777737377777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777775777777777777777777777777777777777777777777777777777777773777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777717777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777757777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777177777777777777777575777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777771717777777777777777757777777777777777777777777777777773777777777777777777777777771777777777777777777777777777777777777777777777777777777777777777777\n7777777777777177777777777777777777777777777777777777777777777777737377777777777777777777777717177777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777773773777777777777777777777777771777777777777777777777777777777777777777777777777737777777777777777\n7777777777777777777777777777777777777777777777777777777777777737377777777777777777777777777777777777777777777777777777777777777777777777777777373777777777777777\n7777777777777777777777777777777777777777777777777777777777777773777777777777777777777777777777777777777777777777777777777777777777777777777777737777777777777777\n7777777777777777777777777777777777777777777777777777777777777777773777777777777777777777777777777777777777777777777777777775777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777737377777777777777777777777777777777777777777777777777777757577777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777773777777777777777777777777777777777777777777777777777777775777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777377777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777773737777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777377377777777777777777777777777777777777777777777777777777777777777777777777777777777777777777377777777777777777777777777777777777777177777777777777\n7777777777773737777377777777777777777777777777777777777777777777777777777777777777777777777777777777777773737777777777777777777777777777777777771717777777777777\n7777777777777377773737777777777777777777777777777777777777777777777777777777777777777777777777777777777777377377777777777777777777777777777777777177777777777777\n7777777777777777777377777777777777777777777777777777777777777777777777777777777777777777777777777777777777773737777777777777777777777777777777777777777777777777\n7777777777777777377777777777777777777777777777777777577777777777777777777777777777777777777777777777777777777377777777777777777777777777777777777777777777777777\n7777777777777773737777777777777777777777777777777775757777777777777777777777777777777777777777777777777777377777777777777777777777777777777777777777777777777777\n7777777777777777377777777777777777777777777777777777577777777777777777777777717777777777777777777777777773737777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777171777777777777777777777777777377777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777717777777777777777777777777777777777777777777777777777777777777777777777773777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777737377777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777773777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"pcoKae73BU`bxMH8)EPW\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"s00fY26[O8lQ._PjJwO*\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"7a86~(il_yrY+NfHdD)7\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"}$#8kE~1GrFf$iYM8n6Z\">Enemy</variable><variable id=\"rq-L^pbk[}}i0*M8IU16\">projectile</variable><variable id=\"W2UpOS%v{TCp}r.:_:FF\">bee</variable><variable id=\")XVxwBJSsl^l_|zg}K3)\">hero</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"clovers-assets-only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"pxt.json\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.11.37\",\n        \"tag\": \"v1.11.37\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/bf992d35ca2baeaa26d773aac7caad5a152c45aa\",\n        \"target\": \"1.11.37\",\n        \"pxt\": \"8.4.30\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```