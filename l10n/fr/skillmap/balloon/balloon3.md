# Gonfle-le !

### @explicitHints true


## {Introduction @showdialog}

Ajoutons d'autres **SPRITES** et **ÉVÉNEMENTS** à notre jeu de fête foraine !

![Ajoute une souris pour représenter ton joueur](/static/skillmap/balloon/balloon3.gif "On peut créer une souris qui bouge quand tu cliques." )




## {2. Joue à ton jeu}


**Joue au jeu du ballon !**

- :binoculars: Regarde ton projet dans la fenêtre de jeu.

Appuie sur le bouton (A) (ou sur la **barre d'espace**) aussi vite que possible. Tu devrais voir un ballon grossir de plus en plus jusqu'à franchir la ligne et te faire gagner la partie.

~hint Mon jeu ne marche pas ⚠️

---


Si ton code ne marche pas, commence par chercher toi-même ce qui ne va pas. Vérifie que chaque bloc est dans le bon conteneur d'événement.

```blocks

let myBalloon: Sprite = null
carnival.startCountdownGame(20, carnival.WinTypes.Lose)
scene.setBackgroundColor(1)

myBalloon = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myBalloon.setPosition(80, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.player1.changeScoreBy(1)
   scaling.scaleByPixels(myBalloon, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)

})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, autreSprite) {
    carnival.onGameOverExpanded(carnival.WinTypes.Multi)
})

```

Si ça ne résout pas ton problème, clique sur <br/>« Remplacer mon code »<br/>
 pour remplacer les blocs de ton espace de travail par un nouveau code de départ.

hint~




## {3. Ajoute une souris}

Ajoutons un sprite de souris pour gonfler le ballon.

- :paper plane: Suis les étapes que tu as déjà faites pour ajouter un nouveau sprite à ton jeu.

~hint Rappelle-moi comment ! 🕵🏽

Ajoute un nouveau bloc à la fin du conteneur <br/>
``||loops(noclick):au démarrage||`` <br/>
pour qu'il ressemble à ceci :

```block
let myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
```

hint~

- :mouse pointer: Choisis l'image **mouse1-up** dans **Mes ressources**.

![Choisis la souris orange qui tient la poignée de la pompe](/static/skillmap/balloon/mouse1-up.png "Choisis `mouse1-up` dans Mes ressources")


~hint Montre-m'en plus ! 🕵🏽

---

(Regarde dans la catégorie ``||sprites:Sprites||`` pour trouver les blocs dont tu as besoin.)

![Ajoute un nouveau bloc `définir sprite` à la fin du conteneur `au démarrage`.](/static/skillmap/balloon/third-sprite.gif "Ajoute un bloc `définir sprite` dans le conteneur `au démarrage` et change le nom et le type." )

hint~






#### ~ tutorialhint
```blocks
let myMouse: Sprite = null
let myBalloon: Sprite = null
carnival.startCountdownGame(20, carnival.WinTypes.Lose)

scene.setBackgroundColor(1)
myBalloon = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myBalloon.setPosition(80, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
    //@highlight
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
```


## {4. Teste ton jeu !}

**Essaie ton jeu maintenant !**

- :binoculars: Regarde ton projet dans la fenêtre de jeu pour voir la souris que tu as ajoutée !

Appuie sur le bouton (A) aussi vite que possible. Le ballon devrait grossir à chaque clic, et tu devrais voir une souris flotter au-dessus.





## {5. Déplace la souris}


Tu as peut-être remarqué que ta souris n'était pas devant le ballon. Pour corriger ça, ajoute un bloc de position pour myMouse.

- :paper plane: Dans la catégorie ``||sprites: Sprites||`` de la boîte à outils, prends <br/>
``||sprites: définir la position de [myMouse] à x [80] y [93]||`` <br/>
et emboîte-le à la **fin** du bloc
``||loops(noclick): au démarrage||``
qui se trouve déjà dans ton espace de travail.

Ta souris devrait se placer juste devant ton ballon.

~hint Montre-moi comment ! 🕵🏽

![Fais un clic droit pour dupliquer ton bloc de position](/static/skillmap/balloon/duplicate.gif "Change le sprite de myBalloon en myMouse.")

hint~

💡 _N'oublie pas de regarder la fenêtre de jeu pour voir comment ça avance !_





#### ~ tutorialhint
```blocks
info.startCountdown(20)
let myMouse: Sprite = null
let myBalloon: Sprite = null
scene.setBackgroundColor(1)
myBalloon = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myBalloon.setPosition(80, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
    //@highlight
myMouse.setPosition(80, 93)
```


## {6. La souris appuie}

Faisons comme si la souris gonflait le ballon : à chaque clic sur le bouton, elle appuie sur la pompe.

- :paper plane: Dans la catégorie ``||sprites: Sprites||`` de la boîte à outils, prends <br/>
``||sprites: définir image de myMouse à [ ]||``  <br/>
et emboîte-le n'importe où dans le bloc <br/>
``||controller(noclick): quand bouton [A] est [appuyé]||`` <br/>
qui se trouve déjà dans ton espace de travail.

- :mouse pointer: Clique sur le carré vide pour choisir l'image **mouse1-down** dans **Mes ressources**.

![Choisis la souris orange qui appuie sur la poignée](/static/skillmap/balloon/mouse1-down.png "Choisis `mouse1-down` dans Mes ressources")

~hint Montre-moi comment ! 🕵🏽

![Change l'image de la souris](/static/skillmap/balloon/second-mouse.gif "Utilise le bloc `définir image de [myBalloon] à [ ]`.")

hint~



#### ~ tutorialhint
```blocks

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    let myMouse: Sprite = null

    info.player1.changeScoreBy(1)
    scaling.scaleByPixels(myBalloon, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
        //@highlight
myMouse.setImage(assets.image`mouse1-down`)
})
```



## {7. Rejoue !}

**Essaie encore ton jeu !**

- :binoculars: Regarde ton projet dans la fenêtre de jeu et fais un essai !

Appuie sur le bouton (A) aussi vite que possible. La souris devrait appuyer une fois sur la poignée, et le ballon devrait continuer à gonfler à chaque appui.






## {8. En haut, en bas}

On dirait que la souris s'arrête de bouger après un seul appui ? Ajoutons un autre événement pour remettre l'image d'origine quand tu relâches le bouton (A).


- :game: Dans la catégorie ``||controller: Contrôleur||`` de la boîte à outils, prends l'ensemble <br/>
``||controller: quand bouton [A] est [relâché]||`` <br/>
et dépose-le dans une zone vide de ton espace de travail.


- :mouse pointer: Clique sur le carré vide pour choisir l'image **mouse1-up** dans **Mes ressources**.

![Choisis la souris orange qui tient la poignée de la pompe](/static/skillmap/balloon/mouse1-up.png "Choisis `mouse1-up` dans Mes ressources")

~hint Montre-moi comment ! 🕵🏽

![Change l'image de la souris](/static/skillmap/balloon/third-mouse.gif "Utilise le bloc `définir image de [myBalloon] à [ ]`.")

hint~



```blockconfig.local
let myMouse: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    myMouse.setImage(img`.`)
})
```

#### ~ tutorialhint
```blocks

controller.A.onEvent(ControllerButtonEvent.Released, function () {
    let myMouse: Sprite = null

    myMouse.setImage(assets.image`mouse1-up`)
})
```



## {9. Jette un œil}


Place le pointeur sur la fenêtre de jeu et appuie sur le bouton (A) (ou sur la **barre d'espace** de ton clavier) aussi vite que possible.

Pendant que tu joues, ta souris devrait avoir l'air de gonfler le ballon !



```blockconfig.local
let myMouse: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    myMouse.setImage(img`.`)
})
```


## {10. Terminé}

**🐭 Youpi ! 🐭**

Tu as terminé un super jeu de fête foraine ! Prends le temps d'y jouer et d'apprécier ce que tu as construit.


~hint Comment partager mon jeu ?💡

---

**Tu veux partager ton jeu ?**

Clique sur « Terminé » pour revenir à la skillmap, puis cherche le bouton de partage en bas à droite.

![Partage ton jeu](/static/skillmap/balloon/share.gif )

hint~


Quand tu es prêt, clique sur **Terminé** pour retourner à la skillmap et transformer ton jeu en course à deux joueurs.


```blockconfig.local
let myMouse: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    myMouse.setImage(img`.`)
})
```



```blockconfig.global
info.player1.changeScoreBy(1)
carnival.startCountdownGame(20, carnival.WinTypes.Lose)
let myMouse = sprites.create(img`.`, SpriteKind.Mouse)
scene.setBackgroundColor(1)
myMouse.setPosition(80, 93)
scaling.scaleByPixels(myBalloon, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, autreSprite) { })
carnival.onGameOverExpanded(carnival.WinTypes.Multi)
myMouse.setImage(img`.`)

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
})

sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, autreSprite) {
carnival.onGameOverExpanded(carnival.WinTypes.Multi)
})

let myBalloon: Sprite = null
carnival.startCountdownGame(20, carnival.WinTypes.Lose)
scene.setBackgroundColor(1)

myBalloon = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myBalloon.setPosition(80, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
```


```ghost
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myMouse.setImage(assets.image`mouse1-down`)
    scaling.scaleByPixels(myBalloon, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)
    info.changeScoreBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Released, function () {
    myMouse.setImage(assets.image`mouse1-up`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Booth, function (sprite, autreSprite) {
carnival.onGameOverExpanded(carnival.WinTypes.Multi)
})
let myMouse: Sprite = null
let myBalloon: Sprite = null
info.startCountdown(20)
scene.setBackgroundColor(1)
myBalloon = sprites.create(assets.image`balloon-1`, SpriteKind.Player)
myBalloon.setPosition(80, 93)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myMouse = sprites.create(assets.image`mouse1-up`, SpriteKind.Mouse)
myMouse.setPosition(80, 93)
info.changeScoreBy_defl1(info.player1, 1)
scaling.scaleByPixels_defl(myBalloon, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)

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
