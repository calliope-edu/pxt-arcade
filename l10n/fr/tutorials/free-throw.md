# Lancer franc
### @explicitHints true

## {1. Introduction @showdialog}

Vise bien et essaie de marquer un panier dans ce jeu de lancer franc au basket !

![Lancer franc d'un joueur](/static/tutorials/free-throw/freethrow.gif)



## {2. Ton premier bloc}

**Prêt à programmer ?**

Ajoutons un terrain de basket comme arrière-plan.

---


- :tree: Dans la **boîte à outils**, va dans la catégorie ``||scene: Scène||`` et prends <br/>
``||scene:définir image d'arrière-plan à [ ]||``<br/>
puis fais-le glisser dans le bloc vide <br/>
``||loops(noclick): au démarrage||`` <br/>
qui se trouve déjà dans l'espace de travail.



~hint Qu'est-ce que ça veut dire ? 🤷🏽

---

Dans les tutoriels, nous mettons certains textes en évidence pour que tu saches mieux ce que tu dois chercher.

Par exemple, quand nous te proposons le bloc <br/>
``||scene:définir image d'arrière-plan à [ ]||``<br/>
nous parlons de ce bloc <br/>

```block
scene.setBackgroundImage(img`.`)
```

qui se trouve dans la catégorie ``||scene:Scène||`` de la boîte à outils.

hint~

- :paint brush: Clique sur la case grise vide du bloc d'arrière-plan pour dessiner un terrain de basket <Br/>
(ou passe à la **Galerie** pour choisir celui que nous avons préparé.)

<!--
<br/><br/>
💡 _The court image should be preloaded in the block, but you are welcome to edit the image if you like._
-->



#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(throw_imgs.court)
```




## {3. Regarde la fenêtre de jeu}


- :binoculars: Regarde ton projet dans la fenêtre de jeu !

Tu devrais voir l'arrière-plan du terrain de basket que tu viens d'ajouter.

![La fenêtre de jeu se trouve en bas à droite](/static/tutorials/free-throw/game.png)






## {4. Crée le personnage}

**Choisis ta joueuse ou ton joueur !**<br/>
⛹🏾 ⛹🏼‍♀️ ⛹🏿‍♂️

---

- :paper plane: Dans ``||sprites:Sprites||``, fais glisser le bloc<br/>
``||variables(sprites):définir [athlete] à sprite [ ] de type [Player]||``<br/>
à **la fin** du conteneur
``||loops(noclick):au démarrage||``.


~hint C'est quoi, un sprite ? 💡

---

Dans Arcade, chaque personnage ou image qui fait quelque chose s'appelle un **SPRITE**.

Les sprites ont des propriétés que tu peux utiliser et modifier, comme la taille, la position et la durée de vie.

Notre sportive ou notre sportif sera aussi un sprite.

hint~


- :paint brush: Clique sur la case grise vide du bloc sprite pour dessiner ton personnage <Br/>
(ou passe à la **Galerie** pour en choisir un que nous avons préparé.)



<!-- 

<br/><br/>
💡 _The athlete image should be preloaded in the block, but you are welcome to edit the image if you like._
-->

#### ~ tutorialhint
```blocks
scene.setBackgroundImage(throw_imgs.court)
//@highlight
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)

```

## {5. Place le personnage en bas de l'écran}


Déplaçons le personnage vers le bas pour qu'il ait de la place.

---

- :paper plane: Dans la catégorie ``||sprites: Sprites||`` de la boîte à outils, prends <br/>
``||sprites: définir la position de [athlete] à x [80] y [90]||`` <br/>
et fais-le glisser à la **fin** du bloc
``||loops(noclick): au démarrage||``
qui se trouve déjà dans l'espace de travail.


~hint Pourquoi 80 et 90 ? 💡

---

L'écran fait 160 pixels de large. Une valeur **x** de **80** place donc le personnage au milieu, de gauche à droite.

La valeur **y** de **90** place le personnage près du bas, car l'écran fait 120 pixels de haut.

Ces nombres sont choisis pour que le personnage soit au bon endroit pour les étapes suivantes... mais tu peux aussi essayer d'autres valeurs et voir ce qui se passe quand tu les agrandis ou les diminues.

hint~




#### ~ tutorialhint
```blocks
scene.setBackgroundImage(throw_imgs.court)
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
//@highlight
athlete.setPosition(80, 90)
```





## {6. Définis la vitesse du personnage (mouvement)}

Dans ce jeu, ton personnage court d'un côté à l'autre.

---

- :paper plane:  Dans ``||sprites:Sprites||``, fais glisser le bloc<br/>
``||sprites:définir la vitesse de [athelete] à vx [50] vy [0]||``<br/>
à **la fin** du conteneur <br/>
``||loops(onclick):au démarrage||``.


~hint C'est quoi, vx et vy ?💡

---

Dans MakeCode Arcade, **vx** veut dire « vitesse selon x » – une façon compliquée de dire « la vitesse d'un côté à l'autre ».

- Plus ta valeur **vx** est grande, plus quelque chose va vite vers la droite.
- Plus ta valeur **vx** est petite, plus ça va vite vers la gauche.
- Si **vx** vaut 0, rien ne bouge sur le côté.


De la même façon, **vy** veut dire « vitesse selon y » – une
façon compliquée de dire « la vitesse de haut en bas ».

- Plus ta valeur **vy** est grande, plus quelque chose va vite vers le bas.
- Plus ta valeur **vy** est petite, plus ça va vite vers le haut.
- Si **vy** vaut 0, rien ne bouge vers le haut ou le bas.

hint~


#### ~ tutorialhint
```blocks
scene.setBackgroundImage(throw_imgs.court)
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
//@highlight
athlete.setVelocity(50, 0)
```



## {7. Regarde à nouveau la fenêtre de jeu}


- :binoculars: Regarde ton projet dans la fenêtre de jeu !

Ton personnage devrait maintenant se mettre à courir.




## {8. Fais rebondir le personnage sur les murs}

**Le personnage s'est enfui !** <br/>
Ajoutons un bloc qui le garde sur le terrain.

---

- :paper plane: Dans ``||sprites:Sprites||``, prends un bloc <br/>
``||sprites:définir [athlete] rebondir sur mur <activé>||`` <br/>
et fais-le glisser à la **fin** du conteneur <br/>
``||loops(noclick):au démarrage||``. <br/>



#### ~ tutorialhint
```blocks
scene.setBackgroundImage(throw_imgs.court)
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
athlete.setVelocity(50, 0)
//@highlight
athlete.setBounceOnWall(true)

```




## {9. Crée le panier de basket}


Avec ce que tu as appris en ajoutant le personnage, ajoute un panier et place-le sur le panneau.

---

~hint Rappelle-moi 🤨

- :paper plane: Dans ``||sprites:Sprites||``, fais glisser le bloc<br/>
``||variables(sprites):définir [hoop] à sprite [ ] de type [Goal]||``<br/>
à **la fin** du conteneur
``||loops(noclick):au démarrage||``, puis choisis le panier dans la galerie.

- :paper plane: Dans la catégorie ``||sprites: Sprites||`` de la boîte à outils, prends <br/>
``||sprites: définir la position de [hoop] à x [80] y [35]||`` <br/>
et fais-le glisser à la **fin** du bloc
``||loops(noclick): au démarrage||``
qui se trouve déjà dans l'espace de travail.

hint~


```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```


#### ~ tutorialhint
```blocks
scene.setBackgroundImage(throw_imgs.court)
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
athlete.setVelocity(50, 0)
athlete.setBounceOnWall(true)
//@highlight
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
//@highlight
hoop.setPosition(80, 35)
```



## {10. Lance avec le bouton (A)}


Programmons le personnage pour qu'il lance des ballons de basket quand on appuie sur le bouton (A).


- :game: Dans ``||controller:Contrôleur||``, fais glisser le conteneur<br/>
``||controller:quand bouton [A] est [appuyé] ||``<br/>
dans un **endroit libre** de l'espace de travail.



```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```


#### ~ tutorialhint
```blocks
//@highlight
controller.A.onEvent(ControllerButtonEvent.Pressed, function () { })
```




## {11. Lance les ballons de basket}

**Ajoute les projectiles ballons de basket.**


~hint C'est quoi, des projectiles ?💡

---

Dans MakeCode Arcade, les projectiles sont des sprites qui se déplacent tout seuls,
souvent en grand nombre.

Les projectiles ont des propriétés en plus que les sprites normaux n'ont pas.
Par exemple, ils se détruisent eux-mêmes dès qu'ils quittent l'écran, pour que
l'ordinateur ne soit pas surchargé.

hint~

---


- :paper plane: Fais glisser <br/>
``||variables(sprites):définir [projectile] à projectile [ ] depuis [athlete] avec vx [0] vy [-100]||`` <br/>
dans le conteneur **vide** <br/>
``||controller(noclick):quand bouton [A] est [appuyé] ||``.<br/>


- :paint brush: Clique sur l'image du ballon dans le bloc projectile si tu veux dessiner ton propre ballon.


<!--
💡 _The projectile is a basketball, but you can click the ball and change it to whatever you like._
-->



```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```


#### ~ tutorialhint
```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(throw_imgs.ball, athlete, 0, -100)
})
```




## {12. Essaie-le}


- :binoculars: Regarde ton jeu !

Ton personnage devrait se déplacer d'un côté à l'autre du terrain.

Quand tu appuies sur le bouton (A) (ou sur la barre d'espace), le personnage devrait lancer un ballon vers le haut de l'écran.


💡 _À l'étape suivante, nous ajoutons des points._


~hint Ça ne marche pas chez moi 🤷‍♂️ 

---

Compare ton code avec les blocs ci-dessous pour voir s'il manque quelque chose :


```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(throw_imgs.ball, athlete, 0, -100)
})


scene.setBackgroundImage(throw_imgs.court)
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
athlete.setVelocity(50, 0)
athlete.setBounceOnWall(true)
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```

hint~


```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```




## {13. Des points quand on touche}


**Exécute du code quand le ballon touche le panier !**

---


- :paper plane: Dans ``||sprites:Sprites||``, fais glisser le conteneur<br/>
``||sprites:quand [sprite] de type [Projectile] chevauche [othersprite] de type [Goal]||``<br/>
dans un **endroit libre** de l'espace de travail.


```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```


#### ~ tutorialhint
```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Goal, function (sprite, otherSprite) {

})
```



## {14. Des points pour un panier}

**Donne un point et détruis le ballon.**

---


- :id card: Dans ``||info:Info||``, prends <br/>
``||info:modifier le score de [1]||``  <br/>
et fais-le glisser dans le conteneur **vide** <br/>
``||sprites(noclick):quand [sprite] de type [Projectile] chevauche...||``<br/>
qui se trouve déjà dans l'espace de travail.


- :paper plane: Dans ``||sprites:Sprites||``, prends <br/>
``||sprites:détruire [sprite]||`` <br/>
et fais-le glisser à la **fin** du conteneur <br/>
``||sprites(noclick):quand [sprite] de type [Projectile] chevauche...||``<br/>
dans l'espace de travail.


~hint Pourquoi détruire « sprite » ? 💡

---

Tu penses peut-être qu'il faut détruire **projectile** ou même **ball** pour te
débarrasser du ballon qui a touché le panier. Mais dans ce conteneur de chevauchement, tu dois choisir 
soit <br/>
``||variables:sprite||`` soit ``||variables:otherSprite||``<br/> 
quand tu veux parler de l'un des objets **exacts** qui se sont touchés.

hint~



```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```


#### ~ tutorialhint
```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Goal, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
})
```



## {15. Regarde encore la fenêtre de jeu}


- :binoculars: Regarde ton projet dans la fenêtre de jeu !

Tu devrais gagner exactement un point chaque fois que ton ballon touche le panier !



```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```


## {16. Ajoute une limite de temps}

**Le jeu te paraît long ?**<br/>
🕔 🕔 🕔

Nous n'avons pas encore de moyen de gagner.
Ajoutons un compte à rebours.

---

- :id card:  Dans ``||info:Info||``, prends<br/>
 ``||info:démarrer compte à rebours [30] (s)||``<br/>
et fais-le glisser à la **fin** du conteneur <br/>
``||loops(noclick):au démarrage||``.

---

🎮 **Joue à ton jeu et regarde combien de points tu peux marquer en 30 secondes !**



```blockconfig.local
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
```


#### ~ tutorialhint
```blocks
scene.setBackgroundImage(throw_imgs.court)
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
athlete.setVelocity(50, 0)
athlete.setBounceOnWall(true)
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
info.startCountdown(30)
```


<!--## You did a great job!!! @showdialog


### What did you think of this tutorial?

### 😍  😑  ☹️

Would you like to tell us more?

(Yes)  (No)

-->



## {18. Terminé}

**🏀 Bien joué 🏀**

---

Tu as programmé un super jeu !

**Arriveras-tu à marquer 20 points avant que le compte à rebours arrive à zéro ?**

Quand tu as fini de jouer, clique sur **Terminé** pour partager ton jeu avec ta famille et tes amis !











#### ~ tutorialhint
```blocks
scene.setBackgroundImage(throw_imgs.court)
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
athlete.setVelocity(50, 0)
athlete.setBounceOnWall(true)
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
//@highlight
info.startCountdown(30)

```


```blockconfig.global
namespace SpriteKind {
    export const Goal = SpriteKind.create()
}
let athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
athlete.setVelocity(50, 0)

athlete.setBounceOnWall(true)
info.startCountdown(30)
sprites.destroy(sprite)

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Goal, function (sprite, otherSprite) { })
projectile = sprites.createProjectileFromSprite(throw_imgs.ball, athlete, 0, -100)
music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.InBackground)

scene.setBackgroundImage(img`.`)
```


```package
throw_imgs=github:kiki-lee/throw_imgs
```

```customts
namespace SpriteKind {
    //% isKind
    export const Goal = SpriteKind.create()
}

info.onCountdownEnd(function () {
    game.gameOver(true)
})
```


```ghost

    music.play(music.createSoundEffect(WaveShape.Sine, 5000, 0, 255, 0, 500, SoundExpressionEffect.None, InterpolationCurve.Linear), music.PlaybackMode.UntilDone)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`ball`, athlete, 0, -100)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Goal, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    sprites.destroy(sprite)
})
let projectile: Sprite = null
let athlete: Sprite = null
scene.setBackgroundImage(throw_imgs.court)
athlete = sprites.create(throw_imgs.dunk, SpriteKind.Player)
athlete.setPosition(80, 90)
athlete.setVelocity(50, 0)
athlete.setBounceOnWall(true)
let hoop = sprites.create(throw_imgs.hoop, SpriteKind.Goal)
hoop.setPosition(80, 35)
info.startCountdown(30)
info.onCountdownEnd(function () {
    game.gameOver(true)
})

game.setGameOverEffect(true, effects.confetti)
game.setGameOverMessage(true, "GAME OVER!")
game.setGameOverScoringType(game.ScoringType.HighScore)
```


```simtheme
{
    "palette": [
       "#000000",
        "#FFFFFF",
        "#FF2121",
        "#FF93C4",
        "#FF8135",
        "#FFF609",
        "#249CA3",
        "#78DC52",
        "#003FAD",
        "#87F2FF",
        "#E3A591",
        "#A4839F",
        "#5F5F5F",
        "#E5CDC4",
        "#91463d",
        "#000000"
    ]
}
```
