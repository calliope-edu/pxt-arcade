# Bataille de nœuds d'anniversaire
### @explicitHints true


## Introduction à la Bataille de nœuds d'anniversaire @showdialog

Dans ce tutoriel, nous allons te montrer comment créer ta propre Bataille de nœuds d'anniversaire.

![Joue à la Bataille de nœuds d'anniversaire](/static/tutorials/holiday/bbb.gif "Voici comment on joue à la Bataille de nœuds d'anniversaire")




## {2. Ton premier bloc}

**Prêt à coder ?**

Commençons par choisir un arrière-plan.


- :tree: Va dans la catégorie ``||scene:Scène||`` **de la boîte à outils** et prends le bloc
```block
scene.setBackgroundImage(img`.`)
```
puis place-le dans le conteneur vide <br/>
``||loops(noclick):au démarrage||`` <br/>
qui se trouve déjà dans l'espace de travail.




#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(img`.`)
```


## {3. Ton premier bloc}


- :mouse pointer: Clique sur le carré gris vide dans le bloc <br/>
``||scene(noclick):définir image d'arrière-plan à [ ]||`` <br/>
et passe à la bibliothèque **Mes ressources**.<br/>
![Passe à Mes ressources](/static/skillmap/assets/my-assets-three.png " ")
Choisis l'arrière-plan d'anniversaire appelé **bday_bg**.
![Choisis l'arrière-plan d'anniversaire](/static/tutorials/holiday/bbd.png " ")



#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(assets.image`bday_bg`)
```


## {4. Définir le joueur 1}

**Ajoute le joueur 1**

- :suitcase: Ouvre la catégorie ``||bundles:Bundles||`` et fais glisser le
```block
bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`.`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})
```
bundle **à la fin** du conteneur<br/>
``||loops(noclick):au démarrage||`` <br/>
qui se trouve déjà dans l'espace de travail.



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`bday_bg`)
//@highlight
bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`.`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})
```




## {5. Définir le joueur 1}

- :mouse pointer: Clique sur le carré gris vide dans le bloc <br/>
``||mp(noclick):définir le sprite de joueur 1||`` <br/>
et passe à la bibliothèque **Mes ressources**.<br/>
![Passe à Mes ressources](/static/skillmap/assets/my-assets-three.png " ")
Choisis le cadeau rouge-orange appelé **p1**.
![Choisis le cadeau rouge](/static/tutorials/holiday/p1.png " ")



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(assets.image`bday_bg`)
bundles.wrap1(function () {
    //@highlight
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})
```





## {6. Vérifie ton jeu !}


- :binoculars: Regarde ton projet dans la fenêtre de jeu pour voir ce que fait ton code.

~hint Clique ici pour voir comment 🕵🏽

![Cherche la fenêtre de jeu en bas à droite](/static/skillmap/mole/game1.png "Clique sur la mini fenêtre de jeu pour ouvrir la grande fenêtre de jeu.")

hint~

Tu devrais voir ton image d'arrière-plan avec un cadeau rouge-orange à gauche.

Quand tu passes la souris sur la fenêtre de jeu, le cadeau devrait monter et descendre avec les flèches, mais pas bouger vers la gauche ou la droite.





## {7. Qu'est-ce que j'ai fait ?}

**Lis ceci pour découvrir ce que fait chaque bloc...**

Fais défiler jusqu'en bas pour passer à l'instruction suivante.


- :tree:  ---
```block
scene.setBackgroundImage(assets.image`bday_bg`)
```
Ce bloc définit l'arrière-plan de la fenêtre de jeu avec l'image que tu as choisie.


- :users: ---
```block
        mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
```
Ce bloc crée un **sprite** attribué à « player1 » et définit son **type** à « Player ». Il lui donne aussi l'image d'un cadeau rouge.


- :users:  ---
```block
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
```
Ce bloc permet au premier joueur de déplacer le sprite de « player1 » avec les flèches. La valeur de **vx** est mise à **0** pour que les boutons ne permettent pas de déplacer le cadeau de gauche à droite.



- :paper plane: ---
```block
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
```
Ce bloc fait en sorte que le sprite de « player1 » ne quitte pas l'écran quand on appuie trop longtemps sur les boutons.


- :paper plane: ---
```block
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
```
Ce bloc place les pixels les plus à gauche du sprite de « player1 » à 15 pixels du bord gauche de l'écran.





## {8. Définir le joueur 2}

**Ajoute le joueur 2**

- :suitcase: Ouvre la catégorie ``||bundles:Bundles||`` et fais glisser le
```block
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`.`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).right = 145
})
```
bundle **à la fin** du conteneur<br/>
``||loops(noclick):au démarrage||`` <br/>
qui se trouve déjà dans l'espace de travail.


- :mouse pointer: Clique sur le carré gris vide dans le bloc <br/>
``||mp(noclick):définir le sprite de joueur 2||`` <br/>
et passe à la bibliothèque **Mes ressources**.<br/>
![Passe à Mes ressources](/static/skillmap/assets/my-assets-three.png " ")
Choisis le cadeau bleu appelé **p2**.
![Choisis le cadeau bleu](/static/tutorials/holiday/p2.png " ")



#### ~ tutorialhint

```blocks

scene.setBackgroundImage(assets.image`bday_bg`)

bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})
//@highlight
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`p2`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).right = 145
})
```


## {9. Vérifie ton jeu !}


- :binoculars: Regarde encore ton projet dans la fenêtre de jeu.

Tu devrais voir ton arrière-plan avec un cadeau rouge-orange à gauche et un cadeau bleu à droite.

Tu peux déplacer le cadeau bleu vers le haut et vers le bas avec les touches **I** et **K** de ton clavier.




## {10. Lancer un nœud}

**Lance un nœud dans le jeu !**

- :paper plane: Ouvre la catégorie ``||sprites:Sprites||`` et fais glisser le bloc
```block
sprites.launchBow()
```
**à la fin** du conteneur<br/>
``||loops(noclick):au démarrage||`` <br/>
qui se trouve déjà dans l'espace de travail.




#### ~ tutorialhint

```blocks

scene.setBackgroundImage(assets.image`bday_bg`)

bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`p2`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).right = 145
})

//@highlight
sprites.launchBow()

```



## {9. Ajouter des points}

**Gagne des points pour chaque nœud !**

Ajoutons un événement de chevauchement pour détecter quand un joueur attrape un nœud.

- :paper plane: Ouvre la catégorie ``||sprites:Sprites||`` et fais glisser le
```block
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bow, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 200)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
    sprites.launchBow()
})
```
bundle dans **une zone vide** de l'espace de travail.


Maintenant, chaque fois qu'un nœud touche un joueur, il disparaît dans une pluie de confettis, le joueur gagne un point et un nouveau nœud apparaît dans la fenêtre de jeu.



#### ~ tutorialhint

```blocks

//@highlight
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bow, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 200)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
    sprites.launchBow()
})
```



## {10. Joue !}


- :binoculars: Joue encore à ton jeu !

Tu devrais pouvoir déplacer les deux joueurs vers le haut et vers le bas (avec les flèches et les touches **I**, **K** du clavier).

Chaque joueur devrait gagner des points en attrapant un nœud !




## {12. Fin du jeu}

Pour finir, ajoute un compte à rebours pour que le jeu sache quand annoncer le gagnant.

- :ticket: Ouvre la catégorie ``||carnival:Carnival||`` et fais glisser le bloc
```block
carnival.startCountdownGame(60, carnival.WinTypes.Multi)
```
**à la fin** du conteneur<br/>
``||loops(noclick):au démarrage||`` <br/>
qui se trouve déjà dans l'espace de travail.


Maintenant, le jeu annonce le gagnant au bout de 60 secondes !

Arriveras-tu à rendre le jeu plus long ou plus court ?



#### ~ tutorialhint

```blocks

scene.setBackgroundImage(assets.image`bday_bg`)

bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`p2`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).right = 145
})


//@highlight
carnival.startCountdownGame(60, carnival.WinTypes.Multi)

```




## {11. Terminé}

**🎉 Bravo 🎉**

Tu as terminé ta propre Bataille de nœuds d'anniversaire !

Quand tu es prêt, connecte-toi et clique sur **Terminé** pour défier un ami en ligne dans une bataille multijoueur !






```blockconfig.global

scene.setBackgroundImage(img`.`)

bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`.`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Bow, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 200)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
    sprites.launchBow()
})

bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`.`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).right = 145
})

carnival.startCountdownGame(60, carnival.WinTypes.Multi)

```


```package
multiplayer
arcade-carnival=github:microsoft/arcade-carnival#v0.0.7
```

```ghost
sprites.onOverlap(SpriteKind.Player, SpriteKind.Bow, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 200)
    mp.changePlayerStateBy(mp.getPlayerBySprite(sprite), MultiplayerState.score, 1)
    sprites.launchBow()
})
scene.setBackgroundImage(assets.image`bday_bg`)
bundles.wrap1(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(assets.image`p1`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).left = 15
})
bundles.wrap2(function () {
    mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(assets.image`p2`, SpriteKind.Player))
    mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two), 0, 150)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).setStayInScreen(true)
    mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two)).right = 145
})
sprites.launchBow()
carnival.startCountdownGame(60, carnival.WinTypes.Multi)

```





```customts
namespace SpriteKind {
    //% isKind
    export const Bow = SpriteKind.create()
}

//% color=#6d5ba4 icon="\uf0f2"
namespace bundles{
    /**
    * just run the code
    */
    //% block="créer joueur 1"  weight=300
    //% handlerStatement=1
    //% help=tutorial-only
    export function wrap1(handler: () => void) {
        handler();
    }

    /**
    * just run the code
    */
    //% block="créer joueur 2"  weight=200
    //% handlerStatement=1
    //% help=tutorial-only
    export function wrap2(handler: () => void) {
        handler();
    }
}

namespace sprites{
    /**
    * Launches a new bow either to
    * the right or to the left
    */
    //% block="lancer un nouveau nœud"  weight=200
    export function launchBow () {
        let bow = sprites.create(assets.image`bow`, SpriteKind.Bow)
        bow.setPosition(80, 90)
        bow.setVelocity([-150, 150]._pickRandom(), [75, -75]._pickRandom())
        bow.setBounceOnWall(true)
    }
}

```


```assetjson
{
  "assets.json": "",
  "images.g.jres": "{\n    \"image1\": {\n        \"data\": \"hwQZABkAAAAAu7u7CwAAAAAAAAAAAAAAAOvu7ru7u7u7uwAAAAAAAADr7u6+IiIiIiILAAAAAAAAu+7uviIiIiIiuwAAAAAAsEvu7u4rIiIiIrIAAAAAALBE6+7uKyIiIiIiCwAAAACwRLS7u7siIiIiIrIAAAAAsES0IiKyu7u7u7u7AAAAALBERCsiskREREREtAAAAACwREQrIrJERERERLQAAAAAsEREKyKyRERERES0AAAAALBERCsiskREREREtAAAAACwRLQiIktERERERAsAAAAAS0S0IiJLREREREQLAAAAAEtEtCIiS0RERERECwAAAABLRLQiIktERERERAsAAAAAS0S0IiJLREREREQLAAAAAEtEtCIiS0RERERECwAAAABLRLQiIktERERERAsAAAAAsES0IiJLREREREQLAAAAALBEtCKyRERERES0AAAAAAAAS7QiskREREREtAAAAAAAALC7IrJERERERLQAAAAAAACwKyKyu7u7u7u7AAAAAAAAACsisgAAAAAAAAAAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"p1\"\n    },\n    \"image2\": {\n        \"data\": \"hwQZABkAAAAAAGtmtgAAAAAAAAAAAAAAALBrZra7u7u7u7sAAAAAAACwu2a2mZmZmZm5AAAAAAAAm7lmtpmZmZmZuQAAAAAAsJm5ZraZmZmZmbkAAAAAALCZuWZmm5mZmZmZCwAAAACbmblmZpuZmZmZmQsAAAAAm5m5ZmabmZmZmZkLAAAAAJuZuWZmm5mZmZmZCwAAAACbmblmZpuZmZmZmQsAAAAAm5m5ZmabmZmZmZkLAAAAAJuZuWZmm5mZmZmZCwAAAACwmblmZpuZmZmZmQsAAAAAsJmZa2a2mZmZmZm5AAAAALCZmWtmtpmZmZmZuQAAAACwmZlrZraZmZmZmbkAAAAAsJmZa2a2mZmZmZm5AAAAALCZuWZmtru7u7u7uwAAAACwmbm7u7tmZmZmZrYAAAAAsJmLiIhrZmZmZmYLAAAAALCbiIiIa2ZmZma2AAAAAAAAu4iIuGZmZmZmuwAAAAAAAIuIiLhmZmZmZgsAAAAAAACLiIi7u7u7u7sAAAAAAAAAu7u7CwAAAAAAAAAAAAAA\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"p2\"\n    },\n    \"image4\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAsLsLAAAAAACw1b3MzAAAALBVvVvFDACwu1W7VdUMALu1u1VbvQywXbVVVbXLALBVtVVV1csAsFW1VVXVywCwXbURVbXLAAC7GxtVu70MALDbsbtb1QwAALBVvVXFDAAAsNW9zMwAAACwuwsAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"bow\"\n    },\n    \"image3\": {\n        \"data\": \"hwSgAHgAAADd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0R3d3d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R0d3d3d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R3d0d3d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd0d3d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHdHd3d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3dHd3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3dHd3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3dHd3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3dHd3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3R3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3R3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3R3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R3d3d0d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3d3d0dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3d0d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3d3R0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3R3R0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3dHdHd0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd0d0d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d0R0d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3dEd3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dHdHd0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3R3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0R0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R3d3d3R3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R3d3d3R3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3d3R3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3R3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3R3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3R3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3R3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3dHd3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3dHd3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3dHd3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dHd3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dHd3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3RsRERERERGx290d3d3d0d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEbsREREREbG7290d3d3d0d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEbG7ERERERERu90d3d0d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0bERG7ERERERERu90d3d0R3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3b0RERG7ERERERERu90d3d0R3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3b0RERGxGxERERERsdsd3d0d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3b0RERGxuxERERERsdsd3d3d0d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3b27GxERuxEREREREbsd3d3dEd3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3bsREbG7uxsRsREREREREbsd3d3d3dHd3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHbsbERERsRsRsRsREREREbEb3d3d3dHd3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEbEbERERsbsREbsREREREbEb3d3d3R3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEbEbEREREbEREbsREREREbEb3R3d3d3R3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dERG7EREREbEbEbEREREREbEb3R3d3d3R3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d1N0dERG7EREREbEbEbEbEREREREb3dHd3d0d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dRN0dmRG7EREREbG7EbEbEREREREb3dHd3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3UTUXZSZmRGxERERERG7EREbEREREREbHd3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3URVWZSZmRGxGxERERG7EREbEREREREbHd3d3d3d0R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2dkdERGxERERERG7EREbEREREREb0d3d3d3d0dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERGxGxERERGxGxG7EREREREb3d3d3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dTUQUERG5GxERERGxGxGxEREREREb3d3d3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dTVSVmZm5GxERERGxGxGxEREREREb3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RmZkZGxERERGxGxGxERERERER3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3U3d3d2ZGRERGxERERGxGxGxGxERERER3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3URUlZmZmRERuxERERGxGxGxERERERER3d3d3d0dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3U1EldkRGRERuxERERGxGxGxEREREREb3d3d3d0RHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERGxERERERGxGxGxEREREb3d3d3RHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0RERERuxERERERGxGxGxEREREb3d3dHdHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dTVWZmZkZuxERERERGxGxGxERERER3d3d0d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dTVWZmZkZGxERERERGxGxERERERER3d0d0d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d1E3Z2ZmZERGxERERERGxGxEREREREb3d0R0d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d1UVZmZmRGxGxERERGxGxG7EREREREb3d3dEd3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dVd0dmRGxGxERERGxGxG7EREREREb3d3dHdHd3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERGxGxERERGxGxG7EREREREb3d3d3R3R3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERG7ERERERGxGxG7EREREREb3d3d3d3R3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dERG7ERERERG7ERG7EREREREb3d3d3d0dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dkRG7ERERERG7ERG7EREREREb3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d1NVJSZmbEbEREREbG7ERG7EREREbEb3R3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d1NVZ3ZmbEbEREREbEbEbEbEREREbEb3dHd3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEbsREREREbsREbEbEREREbEb3dHd3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dEbsRERERsbsREbEbEREREbEbHd3d3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHbsRERERsRsREbsREREREbEb0d3d3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3RsREbERuxEREbsREREREbsd3d3d3d3d0R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R2xGxEREbsREREREbsd3d3d3d3d0R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERERsRsREREREbsd3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERERuxERERERsbsd3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERGxGxERERERsdsd3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3R0RERG7ERERERERu90d3d3d3d3R3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0REbsbERERERERu90d3d3d3R3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0Ru7sRERERERGx290d3d3d3R3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3duxERERERERG73d0d3d3d3dHd3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dHREREREREbHb3d0d3d3d3dHd3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3dHd3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dHd3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d0d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d0d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0R3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0R3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R0d0d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHdHd3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3dHd3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3R3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3R3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dEdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R3d3d3RHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3d3RHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3R3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3dHdHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dEd3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d0d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0d0d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dEdHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dHRHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3dHRHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d0dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dEd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3dHdHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d0RHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d0R3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3d0d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3R3d3d3d0d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3dHd3d3d0d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0dHd3d3d0d3d3d0d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d0d3d3d0d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3d3R3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3R3R3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3d3RHd3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dHdHd3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d3dEd3d3d3d3dHd3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0d0d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0R3d3d3d3d3R3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d0d3d0=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"bday_bg\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image1\":\n            case \"p1\":return img`\n.............bbbbbb......\n....bbbbbbbbb444444bb....\nbbbbb4444444444444444b...\nbeeb444444444444444444bb.\nbeeeeb4444444444444444bbb\nbeeeeebb4444bbbbbbbbbbb22\nbeeeeeb2bbbb2222222222222\nbeeeeeb222222222222222222\nbbeeeeb222222222222222222\n.bbbeeb2222222222222bbbbb\n.b22bbb22222bbbbbbbb444b.\n.b2222bbbbbb44444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n.b22222b444444444444444b.\n..bb222b444444444444444b.\n...bb22b444444444444bbbb.\n.....b2b4444bbbbbbbb.....\n......bbbbbb.............\n.........................\n`;\n            case \"image2\":\n            case \"p2\":return img`\n......bbbbbb.............\n....bb999999bbbbbbbbb....\n...b9999999999999999bbbbb\n.bb999999999999999999b88b\nbbb9999999999999999b8888b\n66bbbbbbbbbbb9999bb88888b\n6666666666666bbbb6b88888b\n666666666666666666b88888b\n666666666666666666b8888bb\nbbbbb6666666666666b88bbb.\n.b999bbbbbbbb66666bbb66b.\n.b99999999999bbbbbb6666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b66666b.\n.b999999999999999b666bb..\n.bbbb999999999999b66bb...\n.....bbbbbbbb9999b6b.....\n.............bbbbbb......\n.........................\n`;\n            case \"image4\":\n            case \"bow\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . b b b b . . . . . . \n. . . . . b d 5 5 d b . . . . . \n. . . . b b 5 5 5 5 b b . . . . \n. . . . b 5 5 5 5 5 b b . . . . \n. b b b b b b b b b 1 d b b b . \n. b 5 5 5 b 5 5 5 1 b 1 5 5 b . \n. b d 5 5 b 5 5 5 1 1 b 5 d b . \n. b d d b 5 5 5 5 5 5 b d d b . \n. . b b b 5 5 5 5 5 5 b b b . . \n. . c b 5 b 5 5 5 5 b b 5 c . . \n. . c 5 5 5 b d d b b 5 5 c . . \n. . c 5 5 d b b b b d 5 5 c . . \n. . c c d b c c c c b d c c . . \n. . . c c c . . . . c c c . . . \n. . . . . . . . . . . . . . . . \n`;\n            case \"image3\":\n            case \"bday_bg\":return img`\nd1dddddddddddddddddddddddddd1dddddddddddddddddddddddddddd11dddddddddddddddddddddddd1dddddddddddddddddddddddddd11ddddddddddddddddddddddddddddddddddddddddddddddd1\nd11dddddddddddddddddddddddd11ddddddddddddddddddddddddddd1111dddddddddddddddddddddd11ddddddddddddddddddddddddd1111dddddddddddddddddddddddd11ddddddddddddddddddd11\nddd11dddddddddddddddddddddd111dddddddddddddddddddddddd11dddd11ddddddddddddddddddd1111dddddddddddddddddddddd11ddd1dddddddddddddddddddddd11d11ddddddddddddddddd11d\nddddd1dddddddddddddddddddd1dd11ddddddddddddddddddddd11ddddddd1dddddddddddddddddd1ddd11dddddddddddddddddddd1dddddd1dddddddddddddddddddd11ddd11ddddddddddddddd11dd\ndddddd1111dddddddddddddddd1ddd1dddddddddddddddddd111dddddddddd11ddddddddddddddd11dddd1ddddddddddddddddd111dddddddd1dddddddddddddddddd11dddd111ddddddddddddd11ddd\ndddddddddd111dddddddddddd1ddddd1ddddddddddddd1111ddddddddddddddd1dddddddddddddd1dddddd1dddddddddddddd11dddddddddddd11ddddddddddddddd1ddddddd1ddddddddddddd11dddd\nddddddddddddd1111ddddddd11dddddd11ddddddd1111dddddddddddddddddddd11ddddddddddd1ddddddd11dddddddddddd1dddddddddddddddd11ddddddddddd11ddddddddd1ddddddddddd11ddddd\nddddddddddddddddd1111dd1ddddddddd1ddd1111dddddddddddddddddddddddddd1ddddddddd11ddddddddd1dddddddd111ddddddddddddddddddd111ddddd111dddddddddddd1dddddddd11ddddddd\nddddddddddddddddddddd1111111111111111ddddddddddddddddddddddddddddddd1111dddd11ddddddddddd11dddd11ddddddddddddddddddddddddd111111ddddddddddddddd1d111111ddddddddd\ndddddddddddddddddddddd1dddddddddddd11ddddddddddddddddddddddddddddddddddd111111111ddddddd1111111ddddddddddddddddddddddddddd1111dd11111111111111111ddddddddddddddd\ndddddddddddddddddddd11ddddddddddddddd11dddddddddddddddddddddddddddddddd111ddddddd1111111ddd1111ddddddddddddddddddddddddd111ddddddddddddddddddddd11dddddddddddddd\ndddddddddddddddddd11ddddddddddddddddddd11ddddddddddddddddddddddddddddd1dddddddddddddddddddddddd111111dddddddddddddddd111ddddddddddddddddddddddddd11ddddddddddddd\ndddddddddddddddd11ddddddddddddddddddddddd111ddddddddddddddddddddd11111ddddddddddddddddddddddddddddddd1111111111111111ddddddddddddddddddddddddddddd111ddddddddddd\nddddddddddddddd1dddddddddddddddddddddddddddd11111dddddddddddd1111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1dddddddddd\ndddddddddddddd1dddddddddddddddddddddddddddddddddd111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddddd\nddddddddddddd1dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11dddddd\ndddddddddd111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111dd\nddddddd111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11\nd111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44dddddd4ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44ddddd444dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd45dddddd44dddd44dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd5dddddd54dddd45ddddd44ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd44d99ddddd55ddddd55dddd45ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd455dd44dd99dd44d55dddd55ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd449d44dd99dd55d9ddddd4dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99dd45dd9ddd5599ddddd99ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd99dd451991119999ddddd99ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd119911191991119999111119dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111199911199999119999911119911ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111999111991911199999111999111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbb1111111111991111199111111111bbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbb111111119911111999111111bbbbb1ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1bbbbbb111199911111991111bbbbb1111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111bbbbbbbbb111111111bbbbbb111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd11111111b1bbbbbbbbbbbbbbb111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111bb1bb11111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111111111111111111111ddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbb11111111111111111111111111111111b11111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddb111bb1111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddd1111bb111111111111111111111111111111111b111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddd111111bb11111111111111111111111111111111bb11111bbddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111bbb1111111111111111111111111111bbb111111bb1dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddbb111111bbb111111111111111111111111111bbb111111bb11dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd1bb1111111bbbbb111111111111111111111bbbb1111111bb11dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd11bbb1111111bbbbbb1111111111111111bbbb11111111bb111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd11bbbbb1111111bbbbbbbbbbb11111bbbbbbb11111111bb1111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd11111bbb1111111111bbbbbbbbbbbbbbbb1111111111bb11111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd111111bbbb111111111111111111111111111111111bb111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111bbb1111111111111111111111111111bbbb1111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111bbbbb1111111111111111111111bbbbbb11111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111bbbbbb11111111111bbbbbbbbbb11111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111bbbbbbbbbbbbbbbbbbb11111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd1111111111111111111111b11bbb11111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd111111111111111111111111111111111111111111111111111dddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd1b111111111111111111111111111111111111111111111111bdddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddd1b11111111111111111111111111111111111111111111111bbdddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddbb1111111111111111111111111111111111111111111111bbddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbb11111111111111111111111111111111111111111bbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\ndddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbb1111111111111111111111111111111111111bbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbb11111111111111111111111111111111bbbbbddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbb11111111111111111111111bbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddbbbbbbbbbbbb111bbb11bbbbbbbbbbbbdddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd\nd111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111\ndddddddd111dddddddddddddddd11dddddddddddddddddd11ddddddddddddddddddddd1dddddddddddddddddddddd1dddddddddddddddddddd1dddddddddddddddddd1ddddddddddddddddd1dddddddd\ndddddd11ddddddddddddddd1111dddddddddddddddddd11ddddddddddddddddddddd11dddddddddddddddddddddd1dddddddddddddddddddd1ddddddddddddddddd11ddddddddddddddddd1ddddddddd\nddd111dddddddddddddd111dddddddddddddddddddd11ddddddddddddddddddddd11dddddddddddddddddddddd11dddddddddddddddddddd1ddddddddddddddddd1dddddddddddddddddd1dddddddddd\nd11ddddddddddddddd11ddddddddddddddddddddd11ddddddddddddddddddddd11ddddddddddddddddddddddd1ddddddddddddddddddddd1ddddddddddddddddd1dddddddddddddddddd1ddddddddddd\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"+L@37OtAh-@U(h02.~C$\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"@fwth9I9VWKqCr_!k|C9\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"QPxgI^19#P;R}ei9=H2(\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"Ib.*;}fFz`nX|a@Cv;48\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"tcGjS24Brz2f(}-2+.XM\">Text</variable><variable type=\"KIND_SpriteKind\" id=\"9.C(:PBLZKYxNFd,AKyu\">StatusBar</variable><variable type=\"KIND_SpriteKind\" id=\"OEG4MWTI*GLfJSeT.eKN\">Ball</variable><variable type=\"KIND_SpriteKind\" id=\":Ea#$n1nPt))9F=Z/B8U\">Booth</variable><variable type=\"KIND_SpriteKind\" id=\"@TbO|viA(x*OE^l~VAg{\">Mouse</variable><variable type=\"KIND_SpriteKind\" id=\"b?V9^K)TLR$a`X?r]10S\">Crosshair</variable><variable type=\"KIND_SpriteKind\" id=\"~`%]c#P#JSb~yB6]osqs\">Moon</variable><variable type=\"KIND_SpriteKind\" id=\"`?JC.+4w3G#`B^^UK3)w\">Player1</variable><variable type=\"KIND_SpriteKind\" id=\")_!+w|]NQZ!.O,ZS.xVL\">Player2</variable><variable type=\"KIND_SpriteKind\" id=\"~r#(!_OeEM1Z7FwJL$QR\">Bow</variable><variable type=\"KIND_MultiplayerState\" id=\"0#~~A-8S60wBa$/tC#P;\">score</variable><variable type=\"KIND_MultiplayerState\" id=\"T5n~2=KNl^tW;jE`-$wd\">life</variable><variable id=\".epr(Ghbmrv^*wX6Mxo`\">player_1</variable><variable id=\";8}vvBtXl8A!el%7ZzR)\">player_2</variable><variable id=\"oVpxnQ_d;[r?R`8=k|a~\">mySprite</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"Birthday Bow Battle Assets Only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"assets.json\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.12.22\",\n        \"tag\": \"v1.12.22\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/5a74c95efabdfb2d0d4e687bbbf662ac2532527d\",\n        \"target\": \"1.12.22\",\n        \"pxt\": \"8.5.32\"\n    },\n    \"preferredEditor\": \"tsprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```