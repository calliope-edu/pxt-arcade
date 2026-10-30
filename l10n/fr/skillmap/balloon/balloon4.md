# Fête à deux joueurs

### @explicitHints true


## {Introduction @showdialog}

Ce tutoriel va t'aider à transformer ton jeu en partie à deux joueurs !

![Utilise ce que tu as appris pour ajouter un deuxième joueur](/static/skillmap/balloon/balloon4.gif "On peut ajouter une deuxième souris et un deuxième ballon." )




## {2. Joue à ton jeu}


**Joue au jeu !**

- :binoculars: Regarde ton projet dans la fenêtre de jeu.

Appuie sur le bouton (A) ou sur la **barre d'espace** aussi vite que possible. Tu devrais voir une souris gonfler un ballon qui grossit de plus en plus jusqu'à franchir la ligne et te faire gagner la partie.

~hint Mon jeu ne marche pas ⚠️

---

Si ton code ne marche pas, commence par chercher toi-même ce qui ne va pas. Vérifie que chaque bloc est dans le bon conteneur d'événement.

```blocks

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player1.changeScoreBy(1)
    scaling.scaleByPixels(myBalloon, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    myMouse.setImage(assets.image`mouse1-down`)
})

controller.A.onEvent(ControllerButtonEvent.Released, function () {
    myMouse.setImage(assets.image`mouse1-up`)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, otherSprite) {
carnival.onGameOverExpanded(carnival.WinTypes.Multi)
})

let myMouse: Sprite = null
let myBalloon: Sprite = null
carnival.startCountdownGame(20, carnival.WinTypes.Lose)
scene.setBackgroundColor(1)
myBalloon = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myBalloon.setPosition(80, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
myMouse.setPosition(80, 93)

```

Si ça ne résout pas ton problème, clique sur <br/>« Remplacer mon code »<br/>
 pour remplacer les blocs de ton espace de travail par un nouveau code de départ.

hint~




## {3. Ajoute un deuxième joueur}

**Refais les étapes précédentes pour ajouter un deuxième joueur !**

Pour gagner du temps, nous avons déjà assemblé les blocs dont tu as besoin dans une nouvelle catégorie de la boîte à outils. Sauras-tu trouver ce qu'il faut faire pour que le joueur 2 fonctionne ?

💡 **Astuce :** _Si tu as besoin de plus d'aide, parcours les étapes pour voir les détails._




## {4. Ajoute les sprites}

- :bolt: Regarde dans ``||simplified:Simplified||`` pour trouver l'ensemble de code à ajouter **à la fin** du conteneur ``||loops(noclick):au démarrage||``.

- :mouse pointer: Clique sur les cases grises vides pour choisir les images du ballon bleu et de la souris bleue.

💡 **Astuce :** _Tu peux aussi changer la valeur **x** des sprites du joueur 1 pour les décaler un peu vers la gauche._


~hint Montre-moi... 🕵🏽

![Ajoute un deuxième ensemble de sprites](/static/skillmap/balloon/player2.gif "Ajoute l'ensemble de Simplified pour créer un deuxième joueur." )


hint~


#### ~ tutorialhint

```blocks
let myMouse: Sprite = null
let myBalloon: Sprite = null
carnival.startCountdownGame(20, carnival.WinTypes.Lose)
scene.setBackgroundColor(1)
myBalloon = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myBalloon.setPosition(50, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
myMouse.setPosition(50, 93)
simplified.wrap(function () {
    let myBalloon2 = sprites.create(assets.image`balloon-2`, SpriteKind.Player)
    myBalloon2.setPosition(110, 93)
    let myMouse2 = sprites.create(assets.image`mouse2-up`, SpriteKind.Mouse)
    myMouse2.setPosition(110, 93)
})

```





## {5. Joue à ton jeu !}

**Jette un œil !**

- :binoculars: Regarde ton projet dans la fenêtre de jeu.  <br/><br/>
Une deuxième souris et un deuxième ballon devraient être apparus.






## {6. Le joueur 2 appuie}

- :game: Regarde maintenant dans ``||controller:Contrôleur||`` pour trouver les blocs qui font bouger la deuxième souris quand le joueur 2 appuie sur son **bouton A**.

- :mouse pointer: Dépose-les dans une zone vide de l'espace de travail, puis clique sur la case grise vide pour choisir l'image de la deuxième souris qui appuie sur la poignée.

💡 **Astuce :** _Pour tester ces blocs, utilise la touche U de ton clavier : elle simule le bouton A du joueur 2._



~hint Montre-moi ! 🕵🏽


![Ajoute un ensemble pour le bouton du joueur 2](/static/skillmap/balloon/pressed2.gif "Tu trouveras l'ensemble dans Contrôleur." )


hint~



#### ~ tutorialhint
```blocks
let myBalloon2: Sprite = null
let myMouse2: Sprite = null
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    info.player2.changeScoreBy(1)
    myMouse2.setImage(assets.image`mouse2-down`)
    scaling.scaleByPixels(myBalloon2, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
})
```





## {7. La souris remonte}

- :game: Regarde maintenant dans ``||controller:Contrôleur||`` pour trouver les blocs qui remettent la deuxième souris dans sa position normale quand le joueur 2 relâche le **bouton A**.

- :mouse pointer: Dépose-les dans une zone vide de l'espace de travail, puis clique sur la case grise vide pour choisir l'image de la deuxième souris qui relâche la poignée.


~hint Montre-moi ! 🕵🏽

![Ajoute le bouton pour quand le deuxième joueur relâche le bouton](/static/skillmap/balloon/released2.gif "Le nouvel ensemble se trouve maintenant dans la catégorie Contrôleur." )


hint~



```blockconfig.local
let myMouse2: Sprite = null
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
        myMouse2.setImage(img`.`)
})
```

#### ~ tutorialhint
```blocks
let myMouse2: Sprite = null
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
        myMouse2.setImage(assets.image`mouse2-up`)
})
```



## {8. Joue à ton jeu !}

**Essaie ton jeu !**

- :binoculars: Regarde ton projet en plein écran en cliquant sur le bouton d'**agrandissement** de la fenêtre de jeu normale !

Trouve un ami ou une amie : il ou elle appuie sur le bouton (A) ou sur la **barre d'espace** pendant que tu appuies sur la touche **U** du clavier. Qui arrive en haut le premier ?

![Clique sur le bouton d'agrandissement pour jouer sur le grand écran.](/static/skillmap/balloon/big.gif " En grand !" )



```blockconfig.local
let myMouse2: Sprite = null
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
        myMouse2.setImage(img`.`)
})
```



## {9. Ajoute une étiquette}

**Dernière étape !**

- :ticket: Dans ``||carnival:Carnival||``, ajoute
```block
carnival.addLabelTo("Burstin' Balloons", carnival.Areas.Mid)
```
**à la fin** du conteneur ``||loops(noclick):au démarrage||`` pour mettre une étiquette sur le stand, afin que tout le monde connaisse le nom du jeu !

**Joue plusieurs fois à ton jeu terminé ! Qui gagnera deux manches sur trois ?**




~hint Montre-moi ! 🕵🏽

![Ajoute une étiquette à la fenêtre de jeu](/static/skillmap/balloon/label.gif "Tu trouveras l'étiquette dans Carnival." )


hint~




```blockconfig.local
let myMouse2: Sprite = null
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
        myMouse2.setImage(img`.`)
})

simplified.wrap(function () {
    let myBalloon3 = sprites.create(img`.`, SpriteKind.Player)
    myBalloon3.setPosition(110, 93)
    let myMouse3 = sprites.create(img`.`, SpriteKind.Mouse)
    myMouse3.setPosition(110, 93)
})
```


#### ~ tutorialhint
```blocks
let myBalloon2: Sprite = null
let myMouse: Sprite = null
let myBalloon: Sprite = null
let myMouse2: Sprite = null
carnival.startCountdownGame(20, carnival.WinTypes.Lose)
scene.setBackgroundColor(1)
myBalloon = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myBalloon.setPosition(50, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
myMouse.setPosition(50, 93)
myBalloon2 = sprites.create(assets.image`balloon-2`, SpriteKind.Player)
myBalloon2.setPosition(110, 93)
myMouse2 = sprites.create(assets.image`mouse2-up`, SpriteKind.Mouse)
myMouse2.setPosition(110, 93)
//@highlight
carnival.addLabelTo("Burstin' Balloons", carnival.Areas.Mid)

```



## {10. Terminé}

**🥳 Tu as réussi 🥳**

Tu as terminé ton jeu à deux joueurs !


~hint Comment partager mon jeu ?💡

---

**Tu veux partager ton jeu ?**

Clique sur « Terminé » pour revenir à la skillmap, puis cherche le bouton de partage en bas à droite.

![Partage ton jeu](/static/skillmap/balloon/share.gif )

hint~


Quand tu es prêt, clique sur **Terminé** pour retourner à la skillmap, puis clique sur le bouton du panneau latéral pour partager ton jeu avec tes amis !



```blockconfig.global
let myBalloon2: Sprite = null
let myMouse2: Sprite = null
info.player2.changeScoreBy(1)
carnival.startCountdownGame(20, carnival.WinTypes.Lose)
myBalloon2 = sprites.create(img`.`, SpriteKind.Player)
scene.setBackgroundColor(1)
myBalloon2.setPosition(110, 93)
scaling.scaleByPixels(myBalloon2, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, otherSprite) { })
carnival.onGameOverExpanded(carnival.WinTypes.Multi)
myMouse2.setImage(img`.`)

controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    info.player2.changeScoreBy(1)
    myMouse2.setImage(img`.`)
    scaling.scaleByPixels(myBalloon2, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
})

carnival.addLabelTo("Burstin' Balloons", carnival.Areas.Mid)

simplified.wrap(function () {
    myBalloon2 = sprites.create(img`.`, SpriteKind.Player)
    myBalloon2.setPosition(110, 93)
    myMouse2 = sprites.create(img`.`, SpriteKind.Mouse)
    myMouse2.setPosition(110, 93)
})

controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    info.player2.changeScoreBy(1)
    scaling.scaleByPixels(myBalloon2, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    myMouse2.setImage(img`.`)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Released, function () {
    myMouse2.setImage(img`.`)
})

```


```package
sprite-scaling
carnival=github:microsoft/arcade-carnival#v0.0.7
simple-blocks=github:microsoft/arcade-tutorial-extensions/simple-blocks#v0.0.7
balloon-images=github:microsoft/arcade-tutorial-extensions/balloon-images#v0.0.11
```


```template

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player1.changeScoreBy(1)
    scaling.scaleByPixels(myBalloon, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    myMouse.setImage(assets.image`mouse1-down`)
})

controller.A.onEvent(ControllerButtonEvent.Released, function () {
    myMouse.setImage(assets.image`mouse1-up`)
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, otherSprite) {
carnival.onGameOverExpanded(carnival.WinTypes.Multi)
})

let myMouse: Sprite = null
let myBalloon: Sprite = null
carnival.startCountdownGame(20, carnival.WinTypes.Lose)
scene.setBackgroundColor(1)
myBalloon = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myBalloon.setPosition(80, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
myMouse.setPosition(80, 93)

```






```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "custom.ts": "",
  "images.g.jres": "{\n    \"image7\": {\n        \"data\": \"hwQRACAAAAAA//8AAAAAAAAAAAAAAAAA8Lu7DwAAAP8AAP//////D787M/////C7D/DR3d3d3fS/MzO/u7v/u///TURERETyvzvzu7u7+/+/+01ERERE8vC7v7u7u7tPv/tN9P//RPIA/7+7+7+7T7/7TfT0RETyAAC/u7u7v0+/+030/0RE8gAAv7u7+79P//9NRERERPIAAL+7u7u/T7/7TURP9ETyAP+/u/u/u0+/+030//9E8vC7v7u7u7tPv/tNRET0RPK/O/O7u7v7/7/7TURERETyvzMzv7u7/7v//01ERERE8r87M/////C7D/AkIiIiIvLwu7sPAAAA/w8A//////8PAP//AAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mouse1-up\"\n    },\n    \"image8\": {\n        \"data\": \"hwQRACAAAAAA//8AAAAAAAAAAAAAAAAA8Lu7DwAAAADwD///////D787M////wAAv/vR3d3d3fS/MzO/u7sP/7/7TURERETyvzvzu7u7+7v7/01ERERE8vC7v7u7u7u/+/RN9P//RPIA/7+7+7+7v/v0TfT0RETyAAC/u7u7v7/79E30/0RE8gAAv7u7+7+/+/RNRERERPIAAL+7u7u/v/v0TURP9ETyAP+/u/u/u7/79E30//9E8vC7v7u7u7u/+/RNRET0RPK/O/O7u7v7u/v/TURERETyvzMzv7u7D/+/+01ERERE8r87M////wAAv/skIiIiIvLwu7sPAAAAAPAP//////8PAP//AAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mouse1-down\"\n    },\n    \"image10\": {\n        \"data\": \"hwQRACAAAAAA//8AAAAAAAAAAAAAAAAA8Lu7DwAAAADwD///////D787M////wAAv/sREREREfm/MzO/u7sP/7/7kZmZmZn4vzvzu7u7+7v7/5GZmZmZ+PC7v7u7u7u/+/mR+f//mfgA/7+7+7+7v/v5kfn5mZn4AAC/u7u7v7/7+ZH5/5mZ+AAAv7u7+7+/+/mRmZmZmfgAAL+7u7u/v/v5kfmZ/5n4AP+/u/u/u7/7+ZH5+fmZ+PC7v7u7u7u/+/mRmZ/5mfi/O/O7u7v7u/v/kZmZmZn4vzMzv7u7D/+/+5GZmZmZ+L87M////wAAv/uJiIiIiPjwu7sPAAAAAPAP//////8PAP//AAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mouse2-down\"\n    },\n    \"image9\": {\n        \"data\": \"hwQRACAAAAAA//8AAAAAAAAAAAAAAAAA8Lu7DwAAAP8AAP//////D787M/////C7D/AREREREfm/MzO/u7v/u///kZmZmZn4vzvzu7u7+/+/+5GZmZmZ+PC7v7u7u7ufv/uR+f//mfgA/7+7+7+7n7/7kfn5mZn4AAC/u7u7v5+/+5H5/5mZ+AAAv7u7+7+f//+RmZmZmfgAAL+7u7u/n7/7kfmZ/5n4AP+/u/u/u5+/+5H5+fmZ+PC7v7u7u7ufv/uRmZ/5mfi/O/O7u7v7/7/7kZmZmZn4vzMzv7u7/7v//5GZmZmZ+L87M/////C7D/CJiIiIiPjwu7sPAAAA/wAA//////8PAP//AAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mouse2-up\"\n    },\n    \"image6\": {\n        \"data\": \"hwQUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAP8iIiL/AAAAAAAA8C8RISEiDwAAAAAA/xIRIREi8gAAAAAALxEiIiIiIg8AAADwEiEiIiIiIvLwAADwIiIiIiIiIiIvAADwIiIiIiIiIvLwAAAALyIiIiIiIg8AAAAA/yIiIiIi8gAAAAAA8C8iIiIiDwAAAAAAAP8iIiL/AAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"balloon-1\"\n    },\n    \"image11\": {\n        \"data\": \"hwQUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8AAAAAAAAAAP+IiIj/AAAAAAAA8I8RgYGIDwAAAAAA/xgRgRGI+AAAAAAAjxGIiIiIiA8AAADwGIGIiIiIiPjwAADwiIiIiIiIiIiPAADwiIiIiIiIiPjwAAAAj4iIiIiIiA8AAAAA/4iIiIiI+AAAAAAA8I+IiIiIDwAAAAAAAP+IiIj/AAAAAAAAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"balloon-2\"\n    },\n    \"image4\": {\n        \"data\": \"hwSgAHgAAAARERERERERES8iIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyEREREREREREREREREfEiIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyEREREREREREREREREdEvIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyEREREREREREREREREdH///9ftf//////////////////////////////////////////////////////EREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIREREREREREQ8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREfEAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREdEPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREREREREREREf0AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwERERERERERERERER0Q8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwEREREREkIiIiIiIi/wAAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIiIiIiIg8AAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiIi3S0iIvIAAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIdIiLSIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSIiLdIiIPAABftf8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwJCIiIiIkIiLSItIiIiL///9ftf//////////////////////////////////////////////////////JCIiIiIkIiIi3S0iIvIiIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyJCIiIiIkIiIiIiIiIi8iIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyJCIiIiIiIiIiIiIi/yIiIiJftS8iIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiLyJCIiIiI=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"booth\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"image7\":\n            case \"mouse1-up\":return img`\n..fff.......fff..\n.fbbbf.....fbbbf.\nfbb3bbf...fbb3bbf\nfb333bf...fb333bf\nfb333fffffff333bf\nfb33fbbbbbbbf33bf\n.fffbbbbbbbbbfff.\n..fbbbbbbbbbbbf..\n..fbbbbbbbbbbbf..\n..fbbbfbbbfbbbf..\n..fbbbfbbbfbbbf..\n..fbbbbbfbbbbbf..\n...fbbbfffbbbf...\n..fffbbbbbbbfff..\n.fbbfffffffffbbf.\n.fbbf4444444fbbf.\n..ffffffffffffff.\n...fbbbbfbbbbf...\n...fbbbbfbbbbf...\n..fffffffffffff..\n.f1ddddddddddd4f.\n.fd444444444442f.\n.fd444444444442f.\n.fd44fff44f4442f.\n.fd44f4f4ff4442f.\n.fd44fff44f4442f.\n.fd44f4444f4442f.\n.fd44f444fff442f.\n.fd444444444442f.\n.fd444444444442f.\n.f4222222222222f.\n..fffffffffffff..\n`;\n            case \"image8\":\n            case \"mouse1-down\":return img`\n..fff.......fff..\n.fbbbf.....fbbbf.\nfbb3bbf...fbb3bbf\nfb333bf...fb333bf\nfb333fffffff333bf\nfb33fbbbbbbbf33bf\n.fffbbbbbbbbbfff.\n..fbbbbbbbbbbbf..\n..fbbbbbbbbbbbf..\n..fbbbfbbbfbbbf..\n..fbbbfbbbfbbbf..\n..fbbbbbfbbbbbf..\n...fbbbfffbbbf...\n....fbbbbbbbf....\n...fbfffffffbf...\n...fbbbbbbbbbf...\n..ffbbbbbbbbbff..\n.fbbfffffffffbbf.\n.fbbf4444444fbbf.\n..fffffffffffff..\n.f1ddddddddddd4f.\n.fd444444444442f.\n.fd444444444442f.\n.fd44fff44f4442f.\n.fd44f4f4ff4442f.\n.fd44fff44f4442f.\n.fd44f4444f4442f.\n.fd44f444fff442f.\n.fd444444444442f.\n.fd444444444442f.\n.f4222222222222f.\n..fffffffffffff..\n`;\n            case \"image10\":\n            case \"mouse2-down\":return img`\n..fff.......fff..\n.fbbbf.....fbbbf.\nfbb3bbf...fbb3bbf\nfb333bf...fb333bf\nfb333fffffff333bf\nfb33fbbbbbbbf33bf\n.fffbbbbbbbbbfff.\n..fbbbbbbbbbbbf..\n..fbbbbbbbbbbbf..\n..fbbbfbbbfbbbf..\n..fbbbfbbbfbbbf..\n..fbbbbbfbbbbbf..\n...fbbbfffbbbf...\n....fbbbbbbbf....\n...fbfffffffbf...\n...fbbbbbbbbbf...\n..ffbbbbbbbbbff..\n.fbbfffffffffbbf.\n.fbbf9999999fbbf.\n..fffffffffffff..\n.f1111111111119f.\n.f1999999999998f.\n.f1999999999998f.\n.f199fff9ff9998f.\n.f199f9f999f998f.\n.f199fff99f9998f.\n.f199f999f99998f.\n.f199f999fff998f.\n.f1999999999998f.\n.f1999999999998f.\n.f9888888888888f.\n..fffffffffffff..\n`;\n            case \"image9\":\n            case \"mouse2-up\":return img`\n..fff.......fff..\n.fbbbf.....fbbbf.\nfbb3bbf...fbb3bbf\nfb333bf...fb333bf\nfb333fffffff333bf\nfb33fbbbbbbbf33bf\n.fffbbbbbbbbbfff.\n..fbbbbbbbbbbbf..\n..fbbbbbbbbbbbf..\n..fbbbfbbbfbbbf..\n..fbbbfbbbfbbbf..\n..fbbbbbfbbbbbf..\n...fbbbfffbbbf...\n..fffbbbbbbbfff..\n.fbbfffffffffbbf.\n.fbbf9999999fbbf.\n..fffffffffffff..\n...fbbbbfbbbbf...\n...fbbbbfbbbbf...\n..fffffffffffff..\n.f1111111111119f.\n.f1999999999998f.\n.f1999999999998f.\n.f199fff9ff9998f.\n.f199f9f999f998f.\n.f199fff99f9998f.\n.f199f999f99998f.\n.f199f999fff998f.\n.f1999999999998f.\n.f1999999999998f.\n.f9888888888888f.\n..fffffffffffff..\n`;\n            case \"image6\":\n            case \"balloon-1\":return img`\n....................\n.........fff........\n.......ff222ff......\n......ff21222ff.....\n.....ff2112222ff....\n.....f211222222f....\n....f21122222222f...\n....f21122222222f...\n....f21122222222f...\n....f22222222222f...\n....f21122222222f...\n....f22122222222f...\n.....f222222222f....\n.....f222222222f....\n......f2222222f.....\n.......f22222f......\n........f222f.......\n.........f2f........\n..........f.........\n.........f2f........\n`;\n            case \"image11\":\n            case \"balloon-2\":return img`\n....................\n.........fff........\n.......ff888ff......\n......ff81888ff.....\n.....ff8118888ff....\n.....f811888888f....\n....f81188888888f...\n....f81188888888f...\n....f81188888888f...\n....f88888888888f...\n....f81188888888f...\n....f88188888888f...\n.....f888888888f....\n.....f888888888f....\n......f8888888f.....\n.......f88888f......\n........f888f.......\n.........f8f........\n..........f.........\n.........f8f........\n`;\n            case \"image4\":\n            case \"booth\":return img`\n1111111444444444111111144444444411111114444444441111111444444444111111144444444411111114444444441111111444444444111111144444444411111114444444441111111444444442\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd2221111111222ddd222\n111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22111111122d122d22\n111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22\n111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22111111122d222d22\n1111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d2221111111222d2d222\n11111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d2222\n11111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d222211111112222d2222\n1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f1111111f22d2222f\n111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f111111df2222222f\nf1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f.f1111df.f22222f2\n2fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f...fdddf...f222f22\n22fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff.....fff222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555\n5555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555\nbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n222ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\n222f........................................................................................................................................................f222\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n1111111444444444111111144444444411111114444444441111111444444444111111144444444411111114444444441111111444444444111111144444444411111114444444441111111444444444\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n1111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222111111122222222211111112222222221111111222222222\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable type=\"KIND_SpriteKind\" id=\"xdO@[$nW`4LDKLg#s^bz\">Player</variable><variable type=\"KIND_SpriteKind\" id=\"bU#zm0=UP]u:}b/slhf$\">Projectile</variable><variable type=\"KIND_SpriteKind\" id=\"zAFx`|$CRYV(#oP.n0um\">Food</variable><variable type=\"KIND_SpriteKind\" id=\"NSZT%yrFP/(yEppCW+,,\">Enemy</variable><variable type=\"KIND_SpriteKind\" id=\"6,XcYCTZ$`~q!WN=ZLib\">Text</variable><variable type=\"KIND_SpriteKind\" id=\"p^C#95SSLD{u`5KR)yI;\">Booth</variable><variable type=\"KIND_SpriteKind\" id=\"KDrdsHZeu6_]66c^Zqc8\">Mouse</variable><variable id=\"^Ja9]?}+=p;vbofy@HVc\">mouse2</variable><variable id=\"7D`plCR=oBiOlmy$llaz\">myBalloon2</variable><variable id=\"/@$2f;zkY^{4IS;VP#R/\">mouse</variable><variable id=\"AAvaaW@7n2t{jE/(~.r~\">myBalloon</variable><variable id=\"^Wf-N]+O=H?)Xxqr_?(I\">booth</variable><variable id=\",O8rw%td!O5y$|YYktLm\">textSprite</variable></variables></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"balloon race - assets only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\",\n        \"simple-blocks\": \"github:microsoft/arcade-tutorial-extensions/simple-blocks#8267594819b733e5d5fe55c71fc21ea246e8319d\",\n        \"arcade-sprite-util\": \"github:jwunderl/arcade-sprite-util#v0.2.5\",\n        \"sprite-scaling\": \"*\",\n        \"arcade-character-animations\": \"github:microsoft/arcade-character-animations#v0.0.2\",\n        \"arcade-text\": \"github:microsoft/arcade-text#v1.3.0\",\n        \"Timers\": \"github:microsoft/arcade-timers#v1.1.0\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"custom.ts\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"tilemap.g.jres\",\n        \"tilemap.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.8.26\",\n        \"tag\": \"v1.8.26\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/6434cb63948fe7c1d1a7498115a4bc495495512c\",\n        \"target\": \"1.8.26\",\n        \"pxt\": \"7.4.27\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n",
  "tilemap.g.jres": "{\n    \"transparency16\": {\n        \"data\": \"hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"tilemapTile\": true\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myTiles\"\n    }\n}",
  "tilemap.g.ts": "// Auto-generated code. Do not edit.\nnamespace myTiles {\n    //% fixedInstance jres blockIdentity=images._tile\n    export const transparency16 = image.ofBuffer(hex``);\n\n    helpers._registerFactory(\"tile\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"transparency16\":return transparency16;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n"
}
```
