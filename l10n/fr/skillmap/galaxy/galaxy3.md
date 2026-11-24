# Les ennuis arrivent

## Introduction @showdialog

**Voyager entre les galaxies peut être dangereux !**

Ajoutons des astéroïdes que ton vaisseau devra éviter.

![Navigation](/static/skillmap/galaxy/galaxy3.gif "Pousse-toi de là !")


## {2. Pluie d'ennemis}

**Attention aux astéroïdes !**<br/>
☄️ ☄️ ☄️

Ajoutons du code qui fait tomber des astéroïdes vers le vaisseau toutes les quelques secondes.

---

- :circle: Depuis ``||game: Jeu||``, fais glisser le bloc<br/>
``||game:quand mise à jour du jeu chaque [3000] ms||``<br/>
dans **une zone vide** de l'espace de travail.


- :paint brush: Clique sur la case vide et passe à la **Galerie** pour choisir
l'image **Asteroid**.


Tu vois comme ce code ressemble à celui qui a créé nos satellites ?


```blocks

game.onUpdateInterval(3000, function () {
    let myRock = sprites.createProjectileFromSide(galaxyimgs.Asteroid, 0, 90)
    myRock.x = randint(5, 155)
    myRock.setKind(SpriteKind.Enemy)
})
```


## {3. Collision}

**Collision imminente !**

Ajoute du code qui dit à l'ordinateur quoi faire quand
l'astéroïde (**Enemy**) chevauche le vaisseau (**Player**).

---

- :paper plane: Depuis ``||sprites:Sprites||``, fais glisser le bloc<br/>
``||sprites:quand [sprite] de type [Enemy] chevauche [othersprite] de type [Player]||``<br/>
dans **une zone vide** de l'espace de travail.

Ce bloc détecte quand un astéroïde chevauche le vaisseau du joueur,
puis il détruit l'astéroïde et retire une vie.


```blocks

sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, autreSprite) {
    sprite.destroy()
    info.changeLifeBy(-1)
})
```



## {4. Secousse}

**Ajoute un peu de drame**

Le jeu est plus réussi avec un peu de panache.

---

- :tree: Depuis ``||scene:Scène||``, fais glisser<br/>
``||scene:secouer la caméra de [4] pixels durant [500] ms ||`` <br/>
tout **en haut** du bloc<br/>
``||sprites(noclick):quand [sprite] de type [Enemy] chevauche [othersprite] de type [Player]||``<br/>
qui se trouve déjà dans l'espace de travail.

Maintenant, ton vaisseau tremblera s'il est touché par un astéroïde.


```blocks

sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, autreSprite) {
    //@highlight
    scene.cameraShake(4, 500)
    sprite.destroy()
    info.changeLifeBy(-1)
})
```


## {5. Étincelles}

**Ajoute des étincelles**

---

- :tree: Regarde à l'intérieur du bloc<br/>
``||sprites(noclick):quand [sprite] de type [Enemy] chevauche [othersprite] de type [Player]||``<br/>
déjà présent dans l'espace de travail et clique sur le plus (+) à droite du bloc <br/>
``||sprites(noclick):détruire [sprites] + ||`` <br/>
.

- :mouse pointer: Choisis un effet pour ton astéroïde. Essaie de le faire se **désintégrer** ou disparaître dans le **feu**.

- :mouse pointer: Règle la durée de l'effet sur **100** pour qu'il reste court et efficace.


```blocks

sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, autreSprite) {
    scene.cameraShake(4, 500)
    //@highlight
    sprite.destroy(effects.ashes, 100)
    info.changeLifeBy(-1)
})
```



## {6. Victoire}

**Ajoute une mission**

La NASA a besoin que tu mettes à jour 20 satellites avant de pouvoir gagner !

---

- :id card: Depuis ``||info:Info||``, fais glisser le bloc<br/>
``||info:quand le score atteint [20]||``<br/>
dans **une zone vide** de l'espace de travail

Maintenant, tu gagnes la partie si ton score atteint 20 avant que tu n'aies plus de vies !


```blocks
info.onScore(20, function () {
    game.gameOver(true)
})
```


## {7. Animer}

**Anime le jeu**

Tu peux ajouter des animations à n'importe lequel de tes sprites
en faisant glisser un bloc ``||animation:Animation||``
à la fin de l'événement où il est créé.

---

- :chevron up: Clique sur **Avancé** pour afficher le menu ``||animation:Animation||``.

- :sync: Depuis ``||animation:Animation||``, dépose le bloc<br/>
``||animation:animer [myShip]||``<br/>
**à la fin** du conteneur ``||loops(noclick):au démarrage||`` déjà présent dans l'espace de travail.

- :mouse pointer: Clique sur la case vide pour choisir ton vaisseau animé.


```blocks
    let myShip: Sprite = null
    scene.setBackgroundImage(galaxyimgs.Galaxy)
    scroller.scrollBackgroundWithSpeed(0, 10)
    myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
    controller.moveSprite(myShip, 100, 100)
    myShip.setStayInScreen(true)
    //@highlight
    animation.runImageAnimation(
        myShip,
        [img`
    .......99.......
    ......9119......
    .....911119.....
    .....116a11.....
    .....16cca1.....
    .....11cc11.....
    ....11111111....
    ....961111a9....
    ...96f1111fa9...
    ...9ff1111ff9...
    ..96ff1111ffa9..
    ..9fff1111fff9..
    .96fff1111fffa9.
    .96f.ffffff.fa9.
    .d....aaaa....9.
    ......4554......
    .....4.44.4.....
    ....4.5455.4....
    ........4.......
    ................
    ................
    ................
    `],
        100,
        true
    )
```





## {Étape 8}

**Essaie ton activité !**

- :binoculars: Clique sur l'écran de jeu.

Tu devrais voir du feu sortir de tes moteurs, et ton vaisseau devrait trembler chaque fois qu'un astéroïde le touche.




## {9. Animer davantage}

Arriveras-tu à animer aussi tes satellites et tes astéroïdes ?

---

- :sync: Depuis ``||animation:Animation||``, dépose le bloc<br/>
``||animation:animer [myShip]||``<br/>
**à la fin** du conteneur ``||game(noclick):quand mise à jour du jeu||``
où ton sprite est créé.

- :mouse pointer: Remplace ``||variables(noclick):myShip||`` par le nom du sprite que tu
veux animer, puis clique sur la case vide pour **choisir ton animation**.


```blocks
game.onUpdateInterval(3000, function () {
    let myRock = sprites.createProjectileFromSide(galaxyimgs.Asteroid, 0, 90)
    myRock.x = randint(5, 155)
    myRock.setKind(SpriteKind.Enemy)
    //@highlight
    animation.runImageAnimation(
        myRock,
        [img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . c c c . . . . . .
    . . . . . . a b a a . . . . . .
    . . . . . c b a f c a c . . . .
    . . . . c b b b f f a c c . . .
    . . . . b b f a b b a a c . . .
    . . . . c b f f b a f c a . . .
    . . . . . c a a c b b a . . . .
    . . . . . . c c c c . . . . . .
    . . . . . . . c . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `],
        100,
        true
    )
```



## {Étape 10}

**Tu as réussi !**

- :binoculars: Clique sur l'écran de jeu pour essayer ton activité terminée.

Tu vois tes animations ?

Essaie de mettre à jour les 20 satellites avant de ne plus avoir de vies !





## {13. Terminé}

**Félicitations**

---

Tu as écrit le code qui va te permettre de **sauver la galaxie** !

~hint Comment partager mon projet ?💡

---

**Tu veux partager ton projet ?**

Clique sur « Terminé » pour revenir à la carte de compétences, puis cherche le bouton de partage dans le coin inférieur droit.

![Partage ta carte](/static/skillmap/galaxy/share.gif )

hint~


Quand tu es prêt, clique sur **Terminé** pour revenir à la carte de compétences principale,
où tu pourras partager ton activité ou la modifier avec la boîte à outils complète !



```blockconfig.global
game.onUpdateInterval(3000, function () {
    let myRock = sprites.createProjectileFromSide(img`
        . . . .
        . . . .
        . . . .
        . . . .
        `, 0, 90)
    myRock.x = randint(5, 155)
    myRock.setKind(SpriteKind.Enemy)
})

sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, autreSprite) {
    sprite.destroy()
    info.changeLifeBy(-1)
})

    scene.cameraShake(4, 500)

info.onScore(20, function () {
    game.gameOver(true)
})

animation.runImageAnimation(
myShip,
[img`.`],
100,
true
)

```



```package
arcade-background-scroll=github:microsoft/arcade-background-scroll
galaxy-imgs=github:kiki-lee/galaxy-imgs#v0.0.9
```



```ghost

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(assets.image`Dart1`, myShip, 0, -150)
    projectile.startEffect(effects.fire)
})

let projectile: Sprite = null
let barreEtat: StatusBarSprite = null
let myShip: Sprite = null
scene.setBackgroundImage(assets.image`Galaxy`)
scroller.scrollBackgroundWithSpeed(0, 10)
myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
controller.moveSprite(myShip, 100, 100)
myShip.setStayInScreen(true)

game.onUpdateInterval(2000, function () {
    mySat = sprites.createProjectileFromSide(assets.image`Satellite`, 0, 50)
    mySat.x = randint(5, 155)
})

myShip.y = 100

sprites.onOverlap(SpriteKind.Satellite, SpriteKind.Projectile, function (sprite, autreSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
    autreSprite.sayText("Uploading...")
    autreSprite.setVelocity(-30, -30)
})

    scene.cameraShake(4, 500)

    animation.runImageAnimation(
monSprite,
assets.animation`BowieAnimated`,
100,
true
)
```


```template
    let myShip: Sprite = null
    scene.setBackgroundImage(galaxyimgs.Galaxy)
    scroller.scrollBackgroundWithSpeed(0, 10)
    myShip = sprites.create(galaxyimgs.Rocket, SpriteKind.Player)
    controller.moveSprite(myShip, 100, 100)
    myShip.setStayInScreen(true)


sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Satellite, function (sprite, autreSprite) {
    sprite.destroy()
    info.changeScoreBy(1)
    autreSprite.sayText("Uploading...")
    autreSprite.setVelocity(-30, -30)
})

game.onUpdateInterval(2000, function () {
    let mySat = sprites.createProjectileFromSide(galaxyimgs.Satellite, 0, 50)
    mySat.x = randint(5, 155)
    mySat.setKind(SpriteKind.Satellite)
})

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(galaxyimgs.p101, myShip, 0, -150)
})

```


```customts
    namespace SpriteKind {
      //% isKind
        export const Satellite = SpriteKind.create()
    }
```


```simtheme
{
    "palette": [
        "#000000",
        "#FFFFFF",
        "#FF92BA",
        "#993648",
        "#FF8135",
        "#FFF76B",
        "#0BA6B1",
        "#FFB5AF",
        "#003FAD",
        "#87F2FF",
        "#8E2EC4",
        "#A4839F",
        "#5C406c",
        "#C0C0C0",
        "#180A42",
        "#001E57"
    ]
}
```