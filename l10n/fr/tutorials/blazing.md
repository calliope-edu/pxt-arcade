# Gloire flamboyante
### @explicitHints true


## Introduction à Gloire flamboyante @showdialog

Dans ce tutoriel, nous allons te montrer comment créer un jeu multijoueur où il faut esquiver le feu.

![Joue à Gloire flamboyante](/static/tutorials/blazing/blazing.gif " ")




## {2. Ton premier bloc}

**Choisis tes personnages**

Nous avons préparé un tableau de personnages dans l'espace de travail.

---

- :mouse pointer: Clique sur chaque personnage et change-le comme tu veux.



#### ~ tutorialhint

```blocks
//@highlight
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
```



## {3. Définir les joueurs}

**Ajoute le joueur 1**

- :suitcase: Ouvre la catégorie ``||bundles:Bundles||`` et fais glisser le bundle <br/>
``||bundles:créer les joueurs||``<br/>
**à la fin** du conteneur<br/>
``||loops(noclick):au démarrage||`` <br/>
qui se trouve déjà dans l'espace de travail.



#### ~ tutorialhint

```blocks
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
//@highlight
bundles.wrap1(function () {
    for (let index = 0; index <= 2; index++) {
        mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
    }
})
```


## {4. Qu'est-ce que j'ai fait ?}

**Lis ceci pour découvrir ce que fait chaque bloc...**

Fais défiler jusqu'en bas pour passer à l'instruction suivante.

---

```block
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
```
Ce bloc crée un tableau d'images que nous utiliserons pour configurer les joueurs.

---


```block
for (let index = 0; index <= 2; index++) { }
```
C'est une `boucle for`. Elle s'exécute trois fois et donne à `index` les valeurs 0, 1 et 2. Nous allons en profiter pour configurer chaque joueur.

---

```block
mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
```
À chaque passage dans la boucle, ce bloc donne au bon joueur l'image correspondante du tableau.

---

```block
mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
```
Après les trois passages de la boucle, ce bloc place les trois joueurs au bon endroit sur l'écran (grâce à un petit calcul qui utilise l'index de la `boucle for`).

---

```block
mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
```
Ce bloc met l'accélération verticale de chaque sprite à 600, pour imiter la gravité.

---

```block
mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
```
Ce bloc fait en sorte qu'aucun sprite ne tombe hors de l'écran une fois la gravité appliquée.




## {5. Vérifie ton jeu !}


- :binoculars: Regarde ton projet dans la fenêtre de jeu pour voir ce que fait ton code.

Tu devrais voir trois sprites alignés.


~hint C'est quoi, un sprite ? 💡

---

Dans Arcade, chaque personnage ou image qui fait quelque chose s'appelle un **SPRITE**.

Les sprites ont des propriétés que tu peux utiliser et modifier : l'échelle, la position et la durée de vie sont toutes des propriétés des sprites.

Nos joueurs seront aussi des sprites.

hint~




## {6. SAUTER}

**Aide chaque joueur à sauter quand il appuie sur le bouton (A).**

- :game: Dans la catégorie ``||mp:Multijoueur||``, fais glisser le bundle <br/>
``||mp:lorsque le bouton [A] est [appuyé] pour [joueur]||`` <br/>
dans **une zone vide** de l'espace de travail. <br/>

Maintenant, quand un joueur appuie sur son bouton (A), son sprite défie la gravité pendant un instant.



#### ~ tutorialhint

```blocks
//@highlight
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).vy = -200
})
```



## {7. Ajouter des projectiles}

**Que le feu se déchaîne !**

- :circle: Ouvre la catégorie ``||game:Jeu||`` et fais glisser le bundle<br/>
``||game:quand mise à jour du jeu chaque [900] ms||``<br/>
dans **une zone vide** de l'espace de travail.


- :mouse pointer: Clique sur le carré gris vide pour choisir une image de projectile.
![Passe à Mes ressources](/static/skillmap/assets/my-assets-three.png " ")
Passe à la bibliothèque **Mes ressources** pour choisir la boule de feu.



#### ~ tutorialhint

```blocks
//@highlight
game.onUpdateInterval(900, function () {
    let projectile = sprites.createProjectileFromSide(assets.image`fireball`, -75, 0)
    projectile.y = randint(0, 120)
})
```



## {8. Ajouter la ligne d'arrivée}

**Ajoute un point d'arrivée**

Nous devons savoir quand les projectiles atteignent le bord gauche de l'écran pour que les joueurs gagnent un point.

---

- :paper plane: Ouvre la catégorie ``||sprites:Sprites||`` et fais glisser le bloc<br/>
``||variables(sprites):définir [finish] à sprite de type [Finish]||``
<br/>**à la fin** du conteneur<br/>
``||loops(noclick):au démarrage||`` <br/>
qui se trouve déjà dans l'espace de travail.


- :mouse pointer: Clique sur le carré d'image vide et passe à la bibliothèque **Mes ressources**.<br/>
![Passe à Mes ressources](/static/skillmap/assets/my-assets-three.png " ")
Choisis la grande ligne noire appelée **finish**.



#### ~ tutorialhint

```blocks
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
bundles.wrap1(function () {
    for (let index = 0; index <= 2; index++) {
        mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
    }
})
//@highlight
let finish = sprites.create(assets.image`finish`, SpriteKind.Finish)

```




## {9. Déplacer la ligne d'arrivée}

**Déplace la ligne d'arrivée vers la gauche.**

- :paper plane: Ouvre la catégorie ``||sprites:Sprites||`` et fais glisser<br/>
``||sprites:définir [finish] [x] à [0]||``<br/>
**à la fin** du conteneur<br/>
``||loops(noclick):au démarrage||`` <br/>
qui se trouve déjà dans l'espace de travail.


#### ~ tutorialhint

```blocks
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
bundles.wrap1(function () {
    for (let index = 0; index <= 2; index++) {
        mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
    }
})
let finish = sprites.create(assets.image`finish`, SpriteKind.Finish)
//@highlight
    finish.x = 0
```



## {10. Jette un œil}


- :binoculars: Regarde encore ton jeu.

Le premier joueur devrait sauter quand tu appuies sur le **bouton (A)** ou sur la barre d'espace.

Tu peux faire sauter le **joueur 2** en appuyant sur la **touche U** de ton clavier<br/>
(ou tu peux cliquer sur les icônes multijoueur pour tester n'importe quel joueur avec la barre d'espace).

![Joue avec les boutons de l'émulateur](/static/tutorials/assets/multi.png " ")



## {11. Ajouter des points}

**Ajoute des points quand les projectiles atteignent la ligne.**

- :users: Ouvre la catégorie ``||sprites:Sprites||`` et fais glisser le bundle<br/>
``||sprites:quand [sprite] de type [Projectile] chevauche||``
<br/>dans **une zone vide** de l'espace de travail.


Cet événement ajoute un point quand les boules de feu touchent la ligne d'arrivée.


#### ~ tutorialhint

```blocks
//@highlight
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Finish, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
```




## {12. Ajouter des vies}

**Définis les vies du groupe.**

- :id card: Ouvre la catégorie ``||info:Info||`` et fais glisser<br/>
``||info:définir vie à [5]||``<br/>
**à la fin** du conteneur<br/>
``||loops(noclick):au démarrage||`` <br/>
qui se trouve déjà dans l'espace de travail.


#### ~ tutorialhint

```blocks
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
bundles.wrap1(function () {
    for (let index = 0; index <= 2; index++) {
        mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
    }
})
let finish = sprites.create(assets.image`finish`, SpriteKind.Finish)
    finish.x = 0
    //@highlight
    info.setLife(5)
```




## {13. Retirer des vies}

**Retire des vies quand les joueurs sont touchés.**


- :paper plane: Ouvre la catégorie ``||sprites:Sprites||`` et fais glisser le bundle<br/>
``||sprites:quand sprite de type [Projectile] chevauche ... [Player]||``<br/>
dans **une zone vide** de l'espace de travail.

Ce bloc retire une vie au groupe chaque fois qu'un projectile touche un joueur.


```blockconfig.local
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 100)
    info.changeLifeBy(-1)
})
```


#### ~ tutorialhint

```blocks
//@highlight
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 100)
    info.changeLifeBy(-1)
})
```




## {14. Joue !}


- :binoculars: Joue à ton jeu !

Utilise les icônes multijoueur pour tester ton jeu avec chaque joueur.

![Joue avec les boutons de l'émulateur](/static/tutorials/assets/multi.png " ")

Tu devrais perdre une vie quand une boule de feu touche quelqu'un de l'équipe, mais gagner un point quand tous les joueurs l'esquivent.




## {Terminé}

**🔥 Bravo 🔥**

Tu as terminé ton jeu multijoueur !

Quand tu es prêt, connecte-toi et sélectionne **Terminé** pour jouer en ligne avec tes amis et gagner ensemble.

**Ton équipe arrivera-t-elle à marquer 20 points avant de perdre toutes ses vies ?**






```blockconfig.global


let finish = sprites.create(img`.`, SpriteKind.Finish)
let projectile = sprites.createProjectileFromSide(img`.`, -75, 0)

mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).vy = -200
})

bundles.wrap1(function () {
    for (let index = 0; index <= 2; index++) {
        let locations: tiles.Location[] = []
        mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
        mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
    }
})

sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Finish, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})

game.onUpdateInterval(900, function () {
    projectile = sprites.createProjectileFromSide(assets.image`fireball`, -75, 0)
    projectile.y = randint(0, 120)
})
finish.x = 0
info.setLife(5)

```

```template
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
```



```ghost
namespace SpriteKind {
    export const Finish = SpriteKind.create()
}
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player) {
    mp.getPlayerSprite(player).vy = -200
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, otherSprite) {
    sprites.destroy(sprite, effects.fire, 100)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Finish, function (sprite, otherSprite) {
    info.changeScoreBy(1)
})
let projectile: Sprite = null
let playerImages = [assets.image`red duck`, assets.image`blue duck`, assets.image`orange duck`]
for (let index = 0; index <= 2; index++) {
    let locations: tiles.Location[] = []
    mp.setPlayerSprite(mp.getPlayerByIndex(index), sprites.create(playerImages[index], SpriteKind.Player))
    tiles.placeOnTile(mp.getPlayerSprite(mp.getPlayerByIndex(index)), locations[index])
    mp.getPlayerSprite(mp.getPlayerByIndex(index)).x = 75 + -30 * index
    mp.getPlayerSprite(mp.getPlayerByIndex(index)).ay = 600
    mp.getPlayerSprite(mp.getPlayerByIndex(index)).setStayInScreen(true)
}
let finish = sprites.create(assets.image`finish`, SpriteKind.Finish)
finish.x = 0
info.setLife(5)
game.onUpdateInterval(900, function () {
    projectile = sprites.createProjectileFromSide(assets.image`fireball`, -75, 0)
    projectile.y = randint(0, 120)
})
game.onUpdateInterval(500, function () {
    if (Math.percentChance(33)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).vy = -200
    } else if (Math.percentChance(33)) {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).vy = -200
    } else {
        mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Three)).vy = -200
    }
})


```


```package
multiplayer
```

```customts
namespace SpriteKind {
    //% isKind
    export const Finish = SpriteKind.create()
}

//% color=#6d5ba4 icon="\uf0f2"
namespace bundles{
    /**
    * this just holds code
    */
    //% block="créer les joueurs"  weight=300
    //% handlerStatement=1
    //% help=tutorial-only
    export function wrap1(handler: () => void) {
        handler();
    }

    /**
    * this just holds code
    */
    //% block="créer la ligne d'arrivée"  weight=300
    //% handlerStatement=1
    //% help=tutorial-only
    export function wrap2(handler: () => void) {
        handler();
    }

    /**
    * this just holds code
    */
    //% block="créer les joueurs"  weight=300
    //% handlerStatement=1
    //% help=tutorial-only
    export function wrap3(handler: () => void) {
        handler();
    }

}

```

```assetjson
{
  "assets.json": "",
  "images.g.jres": "{\n    \"image2\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAEQkAgAAAABE1VUtIAAAQF3VVUUiAgBAVRVR1SICAEQdEdHdJCQAVBVRFVEtJABUFVERUUUkAFTVVRFRRSQA1N0RVVVNJABAXREV0S0kAEBdVR3RJAIAQFRVXVUkAgBARNRdRQAAAAAARCQCAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"fireball\"\n    },\n    \"image3\": {\n        \"data\": \"hwQQABAAAAAAAAAAAMQMAAAAQARAM8QAAABAQzQzMwwAAEAiQzwzxAAARCQiwzPDAEAkQiLCM8MARCIiJEIzwwAkJCQyJDLDACRMLCIiIsNEJPJUIiIiwiIkUlUiIiLCRCRVVSIiIkIAQFVVIiIiRAAAXEUkIjIEAABQBEBERAAAAEAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"red duck\"\n    },\n    \"image4\": {\n        \"data\": \"hwQQABAAAAAAAAAAAMsMAAAAsAuwiMsAAACwvYuIiAwAALBmuIyIywAAu2tmyIjIALBrtmbGiMgAu2Zma7aIyABra2vWa4bIAGu8bGZmZsi7a/ZLZmZmxmZr1kRmZmbGu2vdRGZmZrYAsEREZmZmuwAATLRrZtYLAABAC7C7uwAAALAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"blue duck\"\n    },\n    \"p7I@x)wGtLkpOtwZ\": {\n        \"data\": \"hwQQABAAAAAAAAAAAMsMAAAAsAuw3csAAACwvdvd3QwAALBVvdzdywAAu1tVzd3NALBbtVXF3c0Au1VVW7XdzQBbW1vVW9XNAFu8XFVVVc27W/VLVVVVxVVb1URVVVXFu1vdRFVVVbUAsEREVVVVuwAATLRbVdULAABAC7C7uwAAALAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"orange duck\"\n    },\n    \"image1\": {\n        \"data\": \"hwQCAHgAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"finish\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image2\":\n            case \"fireball\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . 4 4 4 4 4 . . . . . . \n. . . 4 4 4 5 5 5 d 4 4 4 4 . . \n. . 4 d 5 d 5 5 5 d d d 4 4 . . \n. . 4 5 5 1 1 1 d d 5 5 5 4 . . \n. 4 5 5 5 1 1 1 5 1 1 5 5 4 4 . \n. 4 d d 1 1 5 5 5 1 1 5 5 d 4 . \n. 4 5 5 1 1 5 1 1 5 5 d d d 4 . \n. 2 5 5 5 d 1 1 1 5 1 1 5 5 2 . \n. 2 d 5 5 d 1 1 1 5 1 1 5 5 2 . \n. . 2 4 d d 5 5 5 5 d d 5 4 . . \n. . . 2 2 4 d 5 5 d d 4 4 . . . \n. . 2 2 2 2 2 4 4 4 2 2 2 . . . \n. . . 2 2 4 4 4 4 4 4 2 2 . . . \n. . . . . 2 2 2 2 2 2 . . . . . \n`;\n            case \"image3\":\n            case \"red duck\":return img`\n. . . . . . . . . 4 2 4 . . . . \n. . . . . . . . . 4 2 4 . . . . \n. . . . . . 4 4 4 4 4 4 . . . . \n. . . . . 4 4 2 2 2 2 2 4 . . . \n. . . . 4 4 2 4 c 2 2 5 5 c . . \n. 4 4 4 4 2 2 2 4 f 5 5 5 5 5 4 \n. 4 3 2 4 2 2 4 c 4 5 5 5 5 4 . \n. . 4 2 2 4 2 2 2 5 5 5 5 4 . . \n. . 4 3 2 2 4 2 2 2 2 2 2 4 . . \n. 4 3 4 2 2 2 3 2 2 2 2 2 2 4 . \n4 3 3 c 3 2 2 4 2 2 2 2 2 2 4 . \nc 3 3 3 c c 4 2 2 2 2 2 2 2 4 . \nc 4 3 3 3 3 3 2 2 2 2 2 2 2 4 . \n. c 3 3 3 3 3 3 2 2 2 2 2 3 4 . \n. . c 4 3 3 3 3 3 2 2 2 4 4 . . \n. . . c c c c c c c c 4 4 . . . \n`;\n            case \"image4\":\n            case \"blue duck\":return img`\n. . . . . . . . . b 6 b . . . . \n. . . . . . . . . b 6 b . . . . \n. . . . . . b b b b b b . . . . \n. . . . . b b 6 6 6 6 6 b . . . \n. . . . b b 6 b c 6 6 d 4 c . . \n. b b b b 6 6 6 b f d d 4 4 4 b \n. b d 6 b 6 6 b c b 4 4 4 4 b . \n. . b 6 6 b 6 6 6 4 4 4 4 b . . \n. . b 8 6 6 b 6 6 6 6 6 6 b . . \n. b 8 b 6 6 6 d 6 6 6 6 6 6 b . \nb 8 8 c 8 6 6 b 6 6 6 6 6 6 b . \nc 8 8 8 c c b 6 6 6 6 6 6 6 b . \nc b 8 8 8 8 8 6 6 6 6 6 6 6 b . \n. c 8 8 8 8 8 8 6 6 6 6 6 d b . \n. . c b 8 8 8 8 8 6 6 6 b b . . \n. . . c c c c c c c c b b . . . \n`;\n            case \"p7I@x)wGtLkpOtwZ\":\n            case \"orange duck\":return img`\n. . . . . . . . . b 5 b . . . . \n. . . . . . . . . b 5 b . . . . \n. . . . . . b b b b b b . . . . \n. . . . . b b 5 5 5 5 5 b . . . \n. . . . b b 5 b c 5 5 d 4 c . . \n. b b b b 5 5 5 b f d d 4 4 4 b \n. b d 5 b 5 5 b c b 4 4 4 4 b . \n. . b 5 5 b 5 5 5 4 4 4 4 b . . \n. . b d 5 5 b 5 5 5 5 5 5 b . . \n. b d b 5 5 5 d 5 5 5 5 5 5 b . \nb d d c d 5 5 b 5 5 5 5 5 5 b . \nc d d d c c b 5 5 5 5 5 5 5 b . \nc b d d d d d 5 5 5 5 5 5 5 b . \n. c d d d d d d 5 5 5 5 5 d b . \n. . c b d d d d d 5 5 5 b b . . \n. . . c c c c c c c c b b . . . \n`;\n            case \"image1\":\n            case \"finish\":return img`\nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \nf f \n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\"dcuHOE)w3Dy2ga(*,{/+\">playerImages</variable><variable id=\"9XsA+9Yp~ML+3fS2UxPk\">index</variable><variable id=\"Iu0IA-Q`Z6{q;AY6Pq~N\">locations</variable><variable id=\"+1[X;7m[URg[C#$iB]W}\">finish</variable><variable id=\"~RqTMBwD|[OkKCrcz@$=\">projectile</variable><variable id=\"RX5_{hl_iket8GKqRp_O\">mySprite</variable><variable type=\"KIND_SpriteKind\" id=\"##QU.N~3_~jV,Az:bFcd\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"A84S$,NiW.X)*7t?i-(L\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"`lZ-0^Tql%66mA(dw1)`\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"=V6!#QIO]F:I#R`7|2*.\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"swEIFl7XM8#;:QqasIzT\">Finish</variable></variables></xml>",
  "main.ts": "",
  "pxt.json": "{\n    \"name\": \"Blazing Glory - Assets\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.24\",\n        \"tag\": \"v1.12.24\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/89b1551216675ebebbbe889528fa9279c1a7bef3\",\n        \"target\": \"1.12.24\",\n        \"pxt\": \"8.5.35\"\n    },\n    \"preferredEditor\": \"tsprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency18\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency18 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency18\":return transparency18;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```