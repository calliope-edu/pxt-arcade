# L'heure du marteau
### @explicitHints true


## {Introduction @showdialog}

Ton code de l'activité précédente est déjà dans l'espace de travail.

Utilisons des **SPRITES** et des **ÉVÉNEMENTS** pour ajouter un marteau en caoutchouc.


![Tape-taupe](/static/skillmap/mole/mole2.gif "Ajoutons un marteau pour rendre notre jeu plus palpitant." )




## {2. Joue à ton jeu}


**Regarde la fenêtre de jeu.**

- :binoculars: Regarde ton projet dans la fenêtre de jeu pour voir notre point de départ.

Tu devrais voir une taupe qui change de place toutes les secondes.


💡 **Astuce :** _Si ton code ne marche pas et que tu ne trouves pas pourquoi, clique sur « Remplacer mon code » pour remplacer les blocs de ton espace de travail par un nouveau code de départ._






## {3. Ajoute le marteau}

Ajoutons un autre **SPRITE** pour notre marteau en caoutchouc.

- :paper plane: Dans la catégorie ``||sprites: Sprites||`` de la boîte à outils, prends

```block
let myHammer = sprites.create(img`.`, SpriteKind.Player)
```

et place-le tout à la **fin** du bloc
``||loops(noclick): au démarrage||``
qui se trouve déjà dans ton espace de travail.

- :mouse pointer: Clique sur le carré vide et, quand l'éditeur d'images s'ouvre, passe à **Mes ressources** <br/>
![Passe à Mes ressources](/static/skillmap/mole/my-assets.gif "Passe de l'éditeur à Mes ressources et choisis la grille.")
<br/>pour choisir le sprite **hammer**.<br/>
![Choisis l'image qui ressemble à un marteau.](/static/skillmap/mole/hammer.png "Choisis le marteau en caoutchouc dans Mes ressources.")
<br/>Puis clique sur **Terminé**.




~hint Montre-moi comment faire ! 🕵🏽

![Choisis le marteau dans Mes ressources](/static/skillmap/mole/choose-hammer.gif "Passe de l'éditeur à Mes ressources et choisis le marteau.")

hint~




#### ~ tutorialhint

```blocks
let myMole: Sprite = null
let myHammer: Sprite = null
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
//@highlight
myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
```


## {4. Déplace le marteau}

Il faut pouvoir déplacer le marteau sur l'écran pour poursuivre la taupe.


- :game: Dans la catégorie ``||simplified: Simplified||``, prends <br/>
```block
simplified.moveOnlyOnscreenWithArrows(myHammer, simplified.Speeds.Fast)
```
et place-le **à la fin** du bloc ``||loops(noclick): au démarrage||`` qui se trouve déjà dans l'espace de travail.


~hint Clique ici pour voir comment faire 🕵🏽

![Cherche le bloc dans Contrôleur](/static/skillmap/mole/add-controller.gif "Fais glisser le bloc du contrôleur pour l'utiliser plus tard.")


hint~





#### ~ tutorialhint

```blocks
let myMole: Sprite = null
let myHammer: Sprite = null
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
//@highlight
simplified.moveOnlyOnscreenWithArrows(myHammer, simplified.Speeds.Fast)
```



## {5. Teste ton jeu !}

- :binoculars: Teste ton projet dans la fenêtre de jeu pour voir comment il fonctionne !

Utilise la croix directionnelle à l'écran **(ou les flèches de ton clavier)** pour déplacer le marteau sur l'écran.







## {6. Ajoute le chevauchement}


As-tu remarqué que rien ne se passait quand le marteau chevauchait la taupe ?

C'est parce que nous n'avons pas encore créé d'**ÉVÉNEMENT** pour ça !


- :paper plane: Dans la catégorie ``||sprites: Sprites||``, prends <br/>

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {  info.changeScoreBy(1) })
```

et fais-le glisser dans une zone **vide** de l'espace de travail.


~hint Montre-moi comment faire ! 🕵🏽


![Ajoute un bloc de chevauchement.](/static/skillmap/mole/add-overlap.gif "Quand sprite de type Player chevauche otherSprite de type Enemy")

hint~




#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) { info.changeScoreBy(1) })
```




## {7. Teste encore ton jeu !}


- :binoculars: Joue avec ton projet dans la fenêtre de jeu !

Utilise la croix directionnelle à l'écran **(ou les flèches de ton clavier)** pour déplacer le marteau.

Quand ton marteau en caoutchouc chevauche la taupe, des points devraient apparaître en haut à droite.





## {8. Trop de points}

As-tu remarqué que les points montent très vite quand le marteau reste au-dessus de la taupe ? Corrigeons ça.


- :paper plane: Dans la catégorie ``||simplified: Simplified||``, prends <br/>

```block
    simplified.moveToRandomHoleOnGrid(myMole)
```

et place-le **à la fin** du bloc ``||sprites(noclick): quand sprite chevauche otherSprite||`` qui se trouve déjà dans l'espace de travail.

Maintenant, quand le marteau chevauche la taupe, elle file vite ailleurs !


~hint Montre-moi comment faire ! 🕵🏽

![Déplace la taupe.](/static/skillmap/mole/overlap-move.gif "Ajoute au projet un autre bloc qui déplace myMole vers une zone au hasard")

hint~




#### ~ tutorialhint

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
//@highlight
    simplified.moveToRandomHoleOnGrid(myMole)
})
```




## {9. Minuteur}

Pour finir, ajoutons un minuteur pour que le jeu reste palpitant.


- :id card: Dans la catégorie ``||carnival: Carnival||``, prends <br/>

```block
carnival.startCountdownGame(15, carnival.WinTypes.Score)
```

et place-le **à la fin** du bloc <br/>
``||loops(noclick): au démarrage||`` <br/>
qui se trouve déjà dans l'espace de travail.


~hint Montre-moi comment faire ! 🕵🏽

![Ajoute un minuteur.](/static/skillmap/mole/countdown.gif "Démarrer un compte à rebours de 15 (s) et fin de partie avec meilleur score")

hint~




#### ~ tutorialhint

```blocks
let myMole: Sprite = null
let myHammer: Sprite = null
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
simplified.moveOnlyOnscreenWithArrows(myHammer, simplified.Speeds.Fast)
//@highlight
carnival.startCountdownGame(15, carnival.WinTypes.Score)
```




## {10. Joue à ton jeu !}


- :binoculars: Joue à ton jeu dans la fenêtre de jeu.

Tu devrais gagner un point chaque fois que ton marteau chevauche la taupe, puis la taupe devrait sauter ailleurs. Le temps s'arrête après 15 secondes et ton meilleur score s'affiche !

**Arriveras-tu à marquer 15 points avant la fin du temps ?**









## {11. Terminé}

**🥳 Tu as réussi ! 🥳**

Tu as créé un jeu de Tape-taupe.


~hint Comment partager mon jeu ? 💡

---

**Tu veux partager ton jeu ?**

Clique sur « Terminé » pour revenir à la skillmap, puis cherche le bouton de partage en bas à droite.

![Partage ton jeu](/static/skillmap/mole/share.gif )

hint~


Quand tu es prêt, clique sur **Terminé** pour revenir à la skillmap et ajouter du son et des animations à ton jeu !





```blockconfig.global
let myHammer = sprites.create(img`.`, SpriteKind.Player)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) { info.changeScoreBy(1) })
carnival.startCountdownGame(15, carnival.WinTypes.Score)
simplified.moveOnlyOnscreenWithArrows(myHammer, simplified.Speeds.Fast)
simplified.moveToRandomHoleOnGrid(myMole)
```



```package
carnival=github:microsoft/arcade-carnival#v0.0.7
mole-images=github:microsoft/arcade-tutorial-extensions/mole-images#v0.0.11
```


```template

let myMole: Sprite = null
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)

game.onUpdateInterval(1000, function () {
    simplified.moveToRandomHoleOnGrid(myMole)
})
```

```ghost

sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(1)
    simplified.moveToRandomHoleOnGrid(myMole)

})
let myMole: Sprite = null
let myHammer: Sprite = null
scene.setBackgroundImage(assets.image`grid`)
myMole = sprites.create(assets.image`mole`, SpriteKind.Enemy)
myHammer = sprites.create(assets.image`hammer`, SpriteKind.Player)
simplified.moveOnlyOnscreenWithArrows(myHammer, simplified.Speeds.Fast)
carnival.startCountdownGame(15, carnival.WinTypes.Score)

game.onUpdateInterval(1000, function () {
    simplified.moveToRandomHoleOnGrid(myMole)
})
simplified.moveToRandomHoleOnGrid(myMole)
```



```assetjson
{
  "README.md": " ",
  "assets.json": "",
  "custom.ts": "",
  "images.g.jres": "{\n    \"Qv@;p79@e|(fGBFKaJ@[\": {\n        \"data\": \"hwQQABAAAAAAAO7u7u7u7gDg7u7u7u7uAO7u7u7u7u4A7u7u7u7v7gDu7v7u7v7uAO7u7u/v/u4A7v/u8+7+7gDu7u4z7v7uAO7u7jPu/u4A7v/u8+7+7gDu7u7v7/7uAO7u/u7u/u4A7u7u7u7v7gDu7u7u7u7uAODu7u7u7u4AAO7u7u7u7g==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"mole\"\n    },\n    \"/LJ4HDC9/+6j@JGvC7#:\": {\n        \"data\": \"hwSgAHgAAABmZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/////93d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3f3u7u7y393d3d3d3d3d3d397u7u8t/d3d3d3d3d3d3d/e7u7vLf3d3d3d39/////////////93d3d3d/e/u7u7zPx/d3d3d3d3d3f3v7u7u8z8f3d3d3d3d3d397+7u7vM/H93d3d39/////////////93d3d3d7+7u7vLzMz/d3d3d3d3d3e/u7u7y8zM/3d3d3d3d3d3v7u7u8vMzP93d3d39/////////////93d3d3d7+7u7vLzMz8d3d3d3d3d3e/u7u7y8zM/Hd3d3d3d3d3v7u7u8vMzPx3d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d/e7u7u7zMzMzH93d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d7+7u7u7zMzMzPx3d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d7+7u7u7zMzMzPx3d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u8vMzMzMzH93d3d3d7+7u7vLzMzMzMx/d3d3d3e/u7u7y8zMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzH93d3d397u7u7vMzMzMzMx/d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzPx3d3d397u7u7vMzMzMzMz8d3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d397u7u7vMzMzMzMz8d3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d3v7u7u7vMzMzMzMz8d3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d397u7u7vMzMzMzMz8d3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d397u7u7vMzMzMzMz8d3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzH93d3d397u7u7vMzMzMzMx/d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8vMzMzMzH93d3d397u7u7vLzMzMzMx/d3d3d/e7u7u7y8zMzMzMf3d39/////////////93d3d3v7u7u8vMzMzM/Hd3d3d3d7+7u7vLzMzMzPx3d3d3d3e/u7u7y8zMzMz8d3d39/////////////93d3d397u7u7vMzMzM/Hd3d3d3d/e7u7u7zMzMzPx3d3d3d3f3u7u7u8zMzMz8d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d/e7u7u7zMzMzH93d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3d7+7u7vMzMz8d3d3d3d3d3e/u7u7zMzM/Hd3d3d3d3d3v7u7u8zMzPx3d3d39/////////////93d3d3d/e7u7vLzMz/d3d3d3d3d3f3u7u7y8zM/3d3d3d3d3d397u7u8vMzP93d3d39/////////////93d3d3d/e/u7vLzPx/d3d3d3d3d3f3v7u7y8z8f3d3d3d3d3d397+7u8vM/H93d3d39/////////////93d3d3d3f3u7u7y3x3d3d3d3d3d3d397u7u8t8d3d3d3d3d3d3d/e7u7vLfHd3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/////93d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/f///9/d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3f3u7u7y393d3d3d3d3d3d3d7+7u7v8d3d3d3d3d3d3d/e7u7vLf3d3d3d39/////////////93d3d3d/e/u7u7zPx/d3d3d3d3d3d3/7u7u8vM/3d3d3d3d3d397+7u7vM/H93d3d39/////////////93d3d3d7+7u7vLzMz/d3d3d3d3d3f3u7u7u8zM/H93d3d3d3d3v7u7u8vMzP93d3d39/////////////93d3d3d7+7u7vLzMz8d3d3d3d3d3f3u7u7u8zMzH93d3d3d3d3v7u7u8vMzPx3d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d3e/u7u7y8zMzPx3d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d/e7u7u7y8zMzMx/d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d/e7u7u7y8zMzMx/d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u8vMzMzMzH93d3d3d/e7u7u7zMzMzMz8d3d3d3e/u7u7y8zMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzH93d3d3d7+7u7vLzMzMzMz8d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzH93d3d3d7+7u7vLzMzMzMz8d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8vMzMzMzH93d3d3d7+7u7u7zMzMzMz8d3d3d/e7u7u7y8zMzMzMf3d39/////////////93d3d3v7u7u8vMzMzM/Hd3d3d3d/e7u7u7zMzMzMx/d3d3d3e/u7u7y8zMzMz8d3d39/////////////93d3d397u7u7vMzMzM/Hd3d3d3d3e/u7u7y8zMzMx/d3d3d3f3u7u7u8zMzMz8d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d3e/u7u7y8zMzPx3d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3d7+7u7vMzMz8d3d3d3d3d3f3u7u7y8zMzH93d3d3d3d3v7u7u8zMzPx3d3d39/////////////93d3d3d/e7u7vLzMz/d3d3d3d3d3d3v7u7u8zM/H93d3d3d3d397u7u8vMzP93d3d39/////////////93d3d3d/e/u7vLzPx/d3d3d3d3d3d3/7u7u8zM/3d3d3d3d3d397+7u8vM/H93d3d39/////////////93d3d3d3f3u7u7y3x3d3d3d3d3d3d3d7+7u7vMd3d3d3d3d3d3d/e7u7vLfHd3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/f///9/d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/f///9/d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3f3u7u7y393d3d3d3d3d3d3d7+7u7v8d3d3d3d3d3d3d/e7u7vLf3d3d3d39/////////////93d3d3d/e/u7u7zPx/d3d3d3d3d3d3/7u7u8vM/3d3d3d3d3d397+7u7vM/H93d3d39/////////////93d3d3d7+7u7vLzMz/d3d3d3d3d3f3u7u7u8zM/H93d3d3d3d3v7u7u8vMzP93d3d39/////////////93d3d3d7+7u7vLzMz8d3d3d3d3d3f3u7u7u8zMzH93d3d3d3d3v7u7u8vMzPx3d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d3e/u7u7y8zMzPx3d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d/e7u7u7y8zMzMx/d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u7vMzMzM/Hd3d3d3d/e7u7u7y8zMzMx/d3d3d3e/u7u7u8zMzMz8d3d39/////////////93d3d3v7u7u8vMzMzMzH93d3d3d/e7u7u7zMzMzMz8d3d3d3e/u7u7y8zMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzH93d3d3d7+7u7vLzMzMzMz8d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3e/u7u7u8zMzMzMzPx3d3d397u7u7vLzMzMzMzMf3d3d7+7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzPx3d3d3d7+7u7vLzMzMzMzMf3d3d/e7u7u7zMzMzMzM/Hd39/////////////93d3f3u7u7u8zMzMzMzH93d3d3d7+7u7vLzMzMzMz8d3d3d/e7u7u7zMzMzMzMf3d39/////////////93d3f3u7u7u8vMzMzMzH93d3d3d7+7u7u7zMzMzMz8d3d3d/e7u7u7y8zMzMzMf3d39/////////////93d3d3v7u7u8vMzMzM/Hd3d3d3d/e7u7u7zMzMzMx/d3d3d3e/u7u7y8zMzMz8d3d39/////////////93d3d397u7u7vMzMzM/Hd3d3d3d3e/u7u7y8zMzMx/d3d3d3f3u7u7u8zMzMz8d3d39/////////////93d3d397u7u7vMzMzMf3d3d3d3d3e/u7u7y8zMzPx3d3d3d3f3u7u7u8zMzMx/d3d39/////////////93d3d3d7+7u7vMzMz8d3d3d3d3d3f3u7u7y8zMzH93d3d3d3d3v7u7u8zMzPx3d3d39/////////////93d3d3d/e7u7vLzMz/d3d3d3d3d3d3v7u7u8zM/H93d3d3d3d397u7u8vMzP93d3d39/////////////93d3d3d/e/u7vLzPx/d3d3d3d3d3d3/7u7u8zM/3d3d3d3d3d397+7u8vM/H93d3d39/////////////93d3d3d3f3u7u7y3x3d3d3d3d3d3d3d7+7u7vMd3d3d3d3d3d3d/e7u7vLfHd3d3d39/////////////93d3d3d3d3/////3d3d3d3d3d3d3d3d/f///9/d3d3d3d3d3d3d3f/////d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////93d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d39/////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////9mZnZ3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d2Zm9v////////////8=\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"grid\"\n    },\n    \"Oag!`vsg+~Y,+WT2meT;\": {\n        \"data\": \"hwQgACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwNwNAAAAAAAAAAAAAAAAAMDcDQAAAAAAAAAAAAAAAMDcvQsAAAAAAAAAAAAAAADA3L0LAAAAAAAAAAAAAADA3L0LAAAAAAAAAAAAAAAAwNy9CwAAAAAAAAAAAAAAwNy9CwAAAAAAAAAAAAAAAMDcvQsAAAAAAABABAAAAMDcvQsAAAAAAAAAQAQAAADA3L0LAAAAAAAAQCTiDgDA3L0LAAAAAAAAAEAk4g4AwNy9CwAAAAAAAEAk4u7uzty9CwAAAAAAAABAJOLu7s7cvQsAAAAAAABAJOLu7u7evQsAAAAAAAAAQCTi7u7u3r0LAAAAAAAAACTi7u7u7u7uDgAAAAAAAAAk4u7u7u7u7g4AAAAAAAAA4O7u7u7u7u7uDgAAAAAAAODu7u7u7u7u7g4AAAAAAAAA4O7u7u7u7o5oBgAAAAAAAODu7u7u7u6OaAYAAAAAAAAA4O7u7u6OaAYAAAAAAAAAAODu7u7ujmgGAAAAAAAAAAAA4O7ujmgGAAAAAAAAAAAAAODu7o5oBgAAAAAAAAAAAAAA4I5oBgAAAAAAAAAAAAAAAOCOaAYAAAAAAAAAAAAAAAAAYAYAAAAAAAAAAAAAAAAAAGAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==\",\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"displayName\": \"hammer\"\n    },\n    \"anim1\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim1\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"YzgwMDEwMDAxMDAwMDQwMDAwMDAwMDUwMDAwMDAwMDAwMDAwMDA1MDA1MDAwMDAwNTBlZWVlZWVlZWVlZWUwNWUwZWVlZWVlZWVlZWVlMGVlZWVlZWVlZmZlZWVlZWVlZWVlZWVlZWZmZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWZlZWVlZmVlZWVlZWVlZWZlMzMzM2VmZWVlZWVlZWVlZTNmZjNlZWVlZWVlZWVlZmVlZWVlZWZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZmVlZWVlZWVlZWVmZWVlZWVlZmZmZmZmZmZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWUwMDAwNTAwMDAwMDAwMDUwMDUwMDAwMDUwMDAwMDAwNTA1MDAwMDUwMDAwMDAwNTA1MDAwMDA1MDA1MDA1MDA1MDUwMDAwMDAwMDAwMDAwMDAwZWVlZWVlZWVlZWVlMDBlMGVlZWVlZWVlZWVlZTBlZWVlZWVlZWZmZWVlZWVlZWVlZWVlZWVmZmVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVmZWVlZWZlZWVlZWVlZWVmZTMzMzNlZmVlZWVlZWVlZWUzZmYzZWVlZWVlZWVlZWZlZWVlZWVmZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWZlZWVlZWVlZWVlZmVlMDAwMDAwMDUwMDAwMDAwMDAwMDAwMDUwMDAwMDAwMDAwNTAwMDAwMDA1MDAwMDAwNTAwMDAwMDAwNTAwMDA1MDUwMDAwMDUwMDAwMDAwMDUwMDA1MDA1MDAwMDAwMDUwNTAwMDAwMDAwMDAwMDA1NTAwMDAwMDAwMDAwMDAwMDAwMGVlZWVlZWVlZWVlZTAwZTBlZWVlZWVlZWVlZWUwZWVlZWVlZWVmZmVlZWVlZWVlZWVlZWVlZmZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZmVlZWVmZWVlZWVlZWVlZmUzMzMzZWZlZWVlZWVlZWVlM2ZmM2VlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBlZWVlZWVlZWVlZWUwMGUwZWVlZWVlZWVlZWVlMGVlZWVlZWVlZmZlZWVlZWVlZWVlZWVlZWZmZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWZlZWVlZmVlZWVlZWVlZWZlMzMzM2VmZWVlZWVlZWVlZTNmZjNlZWVlZWVlZWVlZmVlZWVlZWZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZmVlZWVlZWVlZWVmZWVlZWVlZmZmZmZmZmZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZWU=\",\n        \"displayName\": \"moleAnimation\"\n    },\n    \"anim2\": {\n        \"namespace\": \"myAnimations\",\n        \"id\": \"anim2\",\n        \"mimeType\": \"application/mkcd-animation\",\n        \"data\": \"MzIwMDIwMDAyMDAwMDcwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNDA0NDQ0NDQ0NDQ0MDAwMDAwMDAwMDAwMDAwMDAwMDA0MDQ0NDQ0NDQ0NDQwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMjIyMjIyMjIyMjAwMDAwMDAwMDAwMDAwMDAwMDAwMjAyMjIyMjIyMjIyMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVjMGNjY2NjY2NjY2NjY2NjY2NjY2VjZWVlZWVlZWVlZWQwZGRkZGRkZGRkZGRkZGRkZGRkZWRlZWVlZWVlZWVlZDBkZGRkZGRkZGRkZGRkZGRkZGRlZGVlZWVlZWVlZWViMGJiYmJiYmJiYmJiYmJiYmJiYmViZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDA4MDg4ODg4ODg4ODgwMDAwMDAwMDAwMDAwMDAwMDAwMDgwODg4ODg4ODg4ODAwMDAwMDAwMDAwMDAwMDAwMDAwNjA2NjY2NjY2NjY2MDAwMDAwMDAwMDAwMDAwMDAwMDA2MDY2NjY2NjY2NjYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDQwNDQ0NDQ0NDQ0NDAwMDAwMDAwMDAwMDAwMDAwMDAwNDA0NDQ0NDQ0NDQ0MDAwMDAwMDAwMDAwMDAwMDAwMDAyMDIyMjIyMjIyMjIwMDAwMDAwMDAwMDAwMDAwMDAwMDIwMjIyMjIyMjIyMjAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlYzBjY2NjY2NjY2NjY2NjY2NjY2NlY2VlZWVlZWVlZWVkMGRkZGRkZGRkZGRkZGRkZGRkZGVkZWVlZWVlZWVlZWQwZGRkZGRkZGRkZGRkZGRkZGRkZWRlZWVlZWVlZWVlYjBiYmJiYmJiYmJiYmJiYmJiYmJlYmVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwODA4ODg4ODg4ODg4MDAwMDAwMDAwMDAwMDAwMDAwMDA4MDg4ODg4ODg4ODgwMDAwMDAwMDAwMDAwMDAwMDAwMDYwNjY2NjY2NjY2NjAwMDAwMDAwMDAwMDAwMDAwMDAwNjA2NjY2NjY2NjY2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDQwMDQwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwNDAwNDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwZTAyZTQyMDQwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDBlMDJlNDIwNDAwMDAwMDAwMDAwMDAwMDBiMGRiY2RlY2VlZWUyZTQyMDQwMDAwMDAwMDAwMDAwMGIwZGJjZGVjZWVlZTJlNDIwNDAwMDAwMDAwMDAwMDAwMDBiMGRiZWRlZWVlZWUyZTQyMDQwMDAwMDAwMDAwMDAwMGIwZGJlZGVlZWVlZTJlNDIwNDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlZWUyZTQyMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZTJlNDIwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDYwODZlOGVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwNjA4NmU4ZWVlZWVlZWVlZWVlMGUwMDAwMDAwMDAwMDAwMDYwODZlOGVlZWVlZWVlMGUwMDAwMDAwMDAwMDAwMDAwNjA4NmU4ZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDAwMDAwMDYwODZlOGVlZWUwZTAwMDAwMDAwMDAwMDAwMDAwMDAwNjA4NmU4ZWVlZTBlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwODZlODBlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjA4NmU4MGUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwMDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjAwNjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkMGNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDA0MDA0MDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwMDAwMDQwMDQwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMGUwMmU0MjA0MDAwMDAwMDAwMDAwMDBiMGRiY2QwYzAwZTAyZTQyMDQwMDAwMDAwMDAwMDAwMDAwYjBkYmNkZWNlZWVlMmU0MjA0MDAwMDAwMDAwMDAwMDBiMGRiY2RlY2VlZWUyZTQyMDQwMDAwMDAwMDAwMDAwMDAwYjBkYmVkZWVlZWVlMmU0MjA0MDAwMDAwMDAwMDAwMDBiMGRiZWRlZWVlZWUyZTQyMDQwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlMmU0MjAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlZWUyZTQyMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlZWVlZWVlMGUwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDA2MDg2ZThlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDYwODZlOGVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDA2MDg2ZThlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDAwMDYwODZlOGVlZWVlZWVlMGUwMDAwMDAwMDAwMDAwMDAwMDA2MDg2ZThlZWVlMGUwMDAwMDAwMDAwMDAwMDAwMDAwMDYwODZlOGVlZWUwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDg2ZTgwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwODZlODBlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDYwMDYwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBkMGNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDAwMDAwNDAwNDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMDAwMDA0MDA0MDAwMDAwMDAwMDAwMDAwMGIwZGJjZDBjMDBlMDJlNDIwNDAwMDAwMDAwMDAwMDAwYjBkYmNkMGMwMGUwMmU0MjA0MDAwMDAwMDAwMDAwMDAwMGIwZGJjZGVjZWVlZTJlNDIwNDAwMDAwMDAwMDAwMDAwYjBkYmNkZWNlZWVlMmU0MjA0MDAwMDAwMDAwMDAwMDAwMGIwZGJlZGVlZWVlZTJlNDIwNDAwMDAwMDAwMDAwMDAwYjBkYmVkZWVlZWVlMmU0MjA0MDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZTJlNDIwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlMmU0MjAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlZWVlZWVlMGUwMDAwMDAwMDAwNjA4NmU4ZWVlZWVlZWVlZWVlMGUwMDAwMDAwMDAwMDA2MDg2ZThlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDAwNjA4NmU4ZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDAwMDA2MDg2ZThlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDAwMDAwNjA4NmU4ZWVlZTBlMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDg2ZThlZWVlMGUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjA4NmU4MGUwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDg2ZTgwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwNjAwNjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA2MDA2MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA0MDQ0NDQ0NDQ0NDQwMDAwMDAwMDAwMDAwMDAwMDAwMDQwNDQ0NDQ0NDQ0NDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAyMjIyMjIyMjIyMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDIyMjIyMjIyMjIwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWMwY2NjY2NjY2NjY2NjY2NjY2NjZWNlZWVlZWVlZWVlZDBkZGRkZGRkZGRkZGRkZGRkZGRlZGVlZWVlZWVlZWVkMGRkZGRkZGRkZGRkZGRkZGRkZGVkZWVlZWVlZWVlZWIwYmJiYmJiYmJiYmJiYmJiYmJiZWJlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZTAwMDAwMDAwMDAwMDAwMDAwMDAwZTBlZWVlZWVlZWVlMDAwMDAwMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWUwMDAwMDAwMDAwMDAwMDAwMDAwMDgwODg4ODg4ODg4ODAwMDAwMDAwMDAwMDAwMDAwMDAwODA4ODg4ODg4ODg4MDAwMDAwMDAwMDAwMDAwMDAwMDA2MDY2NjY2NjY2NjYwMDAwMDAwMDAwMDAwMDAwMDAwMDYwNjY2NjY2NjY2NjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA0MDA0MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA0MDI0ZTIwZTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDQwMjRlMjBlMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDQwMjRlMmVlZWUwZTAwMDAwMDAwMDAwMDAwMDAwMDAwNDAyNGUyZWVlZTBlMDAwMDAwMDAwMDAwMDAwMDAwNDAyNGUyZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDAwMDA0MDI0ZTJlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDA0MDI0ZTJlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMDQwMjRlMmVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZWVlZWUwZTAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlZWVlZTBlMDAwMDAwMDAwMDAwMDBlMGVlZWVlZWVlZWVlZThlNjgwNjAwMDAwMDAwMDAwMGUwZWVlZWVlZWVlZWVlOGU2ODA2MDAwMDAwMDAwMDAwYzBkY2VkZWVlZWVlOGU2ODA2MDAwMDAwMDAwMDAwMDBjMGRjZWRlZWVlZWU4ZTY4MDYwMDAwMDAwMDAwMDBjMGRjYmRlYmVlZWU4ZTY4MDYwMDAwMDAwMDAwMDAwMGMwZGNiZGViZWVlZThlNjgwNjAwMDAwMDAwMDAwMGMwZGNiZDBiMDBlMDhlNjgwNjAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMGUwOGU2ODA2MDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDA2MDA2MDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDYwMDYwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGMwZGNiZDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGMwZGNiZDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwYzBkY2JkMGIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDBjMGRjYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMGQwYmQwYjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwZDBiZDBiMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA=\",\n        \"displayName\": \"hammerAnimation\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"Qv@;p79@e|(fGBFKaJ@[\":\n            case \"mole\":return img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . e e e e e e e e e e e e . . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \ne e e e e f e e e e f e e e e e \ne e e e e e e e e e e e e e e e \ne e e f e e e e e e e e f e e e \ne e e e f f f f f f f f e e e e \ne e e e e e e e e e e e e e e e \ne e e e e e e e e e e e e e e e \n`;\n            case \"/LJ4HDC9/+6j@JGvC7#:\":\n            case \"grid\":return img`\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777fffffffffffff777777777777777777777777777777777777777fffffffffffff7777777777777777777777777777777777777fffffffffffff77777777777777777777777\n7777777777777777777fffbbbbbbbbbbbbbffff77777777777777777777777777777777fffbbbbbbbbbbbbbffff777777777777777777777777777777fffbbbbbbbbbbbbbffff7777777777777777777\n7777777777777777fffbbbbbbbbbbbbbbbbbbbbf7777777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf777777777777777777\n777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777\n7777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777\n77777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf777777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf7777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf77777777777\n7777777777fbbbbbbbccccccccccccccccccccccbbbbbbf777777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf7777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf77777777777\n7777777777fbbbbccccccccccccccccccccccccccccbbbf777777777777777fbbbbccccccccccccccccccccccccccccbbbf7777777777777fbbbbccccccccccccccccccccccccccccbbbf77777777777\n7777777777fbbccccccccccccccccccccccccccccccccbf777777777777777fbbccccccccccccccccccccccccccccccccbf7777777777777fbbccccccccccccccccccccccccccccccccbf77777777777\n7777777777fbcccccccccccccccccccccccccccccccccbf777777777777777fbcccccccccccccccccccccccccccccccccbf7777777777777fbcccccccccccccccccccccccccccccccccbf77777777777\n7777777777fcccccccccccccccccccccccccccccccccccf777777777777777fcccccccccccccccccccccccccccccccccccf7777777777777fcccccccccccccccccccccccccccccccccccf77777777777\n77777777777fcccccccccccccccccccccccccccccccccc77777777777777777fcccccccccccccccccccccccccccccccccc777777777777777fcccccccccccccccccccccccccccccccccc777777777777\n777777777777fcccccccccccccccccccccccccccccccf7777777777777777777fcccccccccccccccccccccccccccccccf77777777777777777fcccccccccccccccccccccccccccccccf7777777777777\n777777777777ffcccccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccccff77777777777777777ffcccccccccccccccccccccccccccccff7777777777777\n7777777777777ffcccccccccccccccccccccccccccff777777777777777777777ffcccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccff77777777777777\n777777777777777fcccccccccccccccccccccccccf7777777777777777777777777fcccccccccccccccccccccccccf77777777777777777777777fcccccccccccccccccccccccccf7777777777777777\n7777777777777777ffcccccccccccccccccccccff777777777777777777777777777ffcccccccccccccccccccccff7777777777777777777777777ffcccccccccccccccccccccff77777777777777777\n777777777777777777ffcccccccccccccccccff7777777777777777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccff7777777777777777777\n77777777777777777777fffffffffffffffff77777777777777777777777777777777777fffffffffffffffff777777777777777777777777777777777fffffffffffffffff777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777fffffffffffff77777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777fffbbbbbbbbbbbbbffff77777777777777777777777777777777777fffffffffffff7777777777777777777777777777777777777fffffffffffff77777777777777777777777\n7777777777777777fffbbbbbbbbbbbbbbbbbbbbf7777777777777777777777777777777fffbbbbbbbbbbbbbffff777777777777777777777777777777fffbbbbbbbbbbbbbffff7777777777777777777\n777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf777777777777777777\n7777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777\n77777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbccccccccccccccccccccccbbbbbbf777777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf7777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf77777777777\n7777777777fbbbbccccccccccccccccccccccccccccbbbf777777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf7777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf77777777777\n7777777777fbbccccccccccccccccccccccccccccccccbf777777777777777fbbbbccccccccccccccccccccccccccccbbbf7777777777777fbbbbccccccccccccccccccccccccccccbbbf77777777777\n7777777777fbcccccccccccccccccccccccccccccccccbf777777777777777fbbccccccccccccccccccccccccccccccccbf7777777777777fbbccccccccccccccccccccccccccccccccbf77777777777\n7777777777fcccccccccccccccccccccccccccccccccccf777777777777777fbcccccccccccccccccccccccccccccccccbf7777777777777fbcccccccccccccccccccccccccccccccccbf77777777777\n77777777777fcccccccccccccccccccccccccccccccccc7777777777777777fcccccccccccccccccccccccccccccccccccf7777777777777fcccccccccccccccccccccccccccccccccccf77777777777\n777777777777fcccccccccccccccccccccccccccccccf777777777777777777fcccccccccccccccccccccccccccccccccc777777777777777fcccccccccccccccccccccccccccccccccc777777777777\n777777777777ffcccccccccccccccccccccccccccccff7777777777777777777fcccccccccccccccccccccccccccccccf77777777777777777fcccccccccccccccccccccccccccccccf7777777777777\n7777777777777ffcccccccccccccccccccccccccccff77777777777777777777ffcccccccccccccccccccccccccccccff77777777777777777ffcccccccccccccccccccccccccccccff7777777777777\n777777777777777fcccccccccccccccccccccccccf77777777777777777777777ffcccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccff77777777777777\n7777777777777777ffcccccccccccccccccccccff77777777777777777777777777fcccccccccccccccccccccccccf77777777777777777777777fcccccccccccccccccccccccccf7777777777777777\n777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccccccff7777777777777777777777777ffcccccccccccccccccccccff77777777777777777\n77777777777777777777fffffffffffffffff777777777777777777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccff7777777777777777777\n777777777777777777777777777777777777777777777777777777777777777777777777fffffffffffffffff777777777777777777777777777777777fffffffffffffffff777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777\n7777777777777777777777fffffffffffff777777777777777777777777777777777777777fffffffffffff7777777777777777777777777777777777777fffffffffffff77777777777777777777777\n7777777777777777777fffbbbbbbbbbbbbbffff77777777777777777777777777777777fffbbbbbbbbbbbbbffff777777777777777777777777777777fffbbbbbbbbbbbbbffff7777777777777777777\n7777777777777777fffbbbbbbbbbbbbbbbbbbbbf7777777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf77777777777777777777777777fffbbbbbbbbbbbbbbbbbbbbf777777777777777777\n777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777\n7777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777777ffbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbff7777777777777\n777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777\n77777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf777777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf7777777777777fbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbf77777777777\n7777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf777777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf7777777777777fbbbbbbbbcccccccccccccccccccbbbbbbbbf77777777777\n7777777777fbbbbbbbccccccccccccccccccccccbbbbbbf777777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf7777777777777fbbbbbbbccccccccccccccccccccccbbbbbbf77777777777\n7777777777fbbbbccccccccccccccccccccccccccccbbbf777777777777777fbbbbccccccccccccccccccccccccccccbbbf7777777777777fbbbbccccccccccccccccccccccccccccbbbf77777777777\n7777777777fbbccccccccccccccccccccccccccccccccbf777777777777777fbbccccccccccccccccccccccccccccccccbf7777777777777fbbccccccccccccccccccccccccccccccccbf77777777777\n7777777777fbcccccccccccccccccccccccccccccccccbf777777777777777fbcccccccccccccccccccccccccccccccccbf7777777777777fbcccccccccccccccccccccccccccccccccbf77777777777\n7777777777fcccccccccccccccccccccccccccccccccccf777777777777777fcccccccccccccccccccccccccccccccccccf7777777777777fcccccccccccccccccccccccccccccccccccf77777777777\n77777777777fcccccccccccccccccccccccccccccccccc77777777777777777fcccccccccccccccccccccccccccccccccc777777777777777fcccccccccccccccccccccccccccccccccc777777777777\n777777777777fcccccccccccccccccccccccccccccccf7777777777777777777fcccccccccccccccccccccccccccccccf77777777777777777fcccccccccccccccccccccccccccccccf7777777777777\n777777777777ffcccccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccccff77777777777777777ffcccccccccccccccccccccccccccccff7777777777777\n7777777777777ffcccccccccccccccccccccccccccff777777777777777777777ffcccccccccccccccccccccccccccff7777777777777777777ffcccccccccccccccccccccccccccff77777777777777\n777777777777777fcccccccccccccccccccccccccf7777777777777777777777777fcccccccccccccccccccccccccf77777777777777777777777fcccccccccccccccccccccccccf7777777777777777\n7777777777777777ffcccccccccccccccccccccff777777777777777777777777777ffcccccccccccccccccccccff7777777777777777777777777ffcccccccccccccccccccccff77777777777777777\n777777777777777777ffcccccccccccccccccff7777777777777777777777777777777ffcccccccccccccccccff77777777777777777777777777777ffcccccccccccccccccff7777777777777777777\n77777777777777777777fffffffffffffffff77777777777777777777777777777777777fffffffffffffffff777777777777777777777777777777777fffffffffffffffff777777777777777777777\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\n6666677777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777777766666\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\nffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff\n`;\n            case \"Oag!`vsg+~Y,+WT2meT;\":\n            case \"hammer\":return img`\n.................44.............\n...............4422ee...........\n...............4422ee...........\n.............4422eeeeee.........\n.............4422eeeeee.........\n...........4422eeeeeeeeee.......\n...........4422eeeeeeeeee.......\n.........4422eeeeeeeeeeeeee.....\n.........4422eeeeeeeeeeeeee.....\n...........eeeeeeeeeeeeeeeeee...\n...........eeeeeeeeeeeeeeeeee...\n.............eeeeeeeeeeeeee8866.\n.............eeeeeeeeeeeeee8866.\n.............ccddeeeeeeee8866...\n.............ccddeeeeeeee8866...\n...........ccddbbeeeeee8866.....\n...........ccddbbeeeeee8866.....\n.........ccddbb....ee8866.......\n.........ccddbb....ee8866.......\n.......ccddbb........66.........\n.......ccddbb........66.........\n.....ccddbb.....................\n.....ccddbb.....................\n...ccddbb.......................\n...ccddbb.......................\n.ccddbb.........................\n.ccddbb.........................\n.ddbb...........................\n.ddbb...........................\n................................\n................................\n................................\n`;\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"moleAnimation\":\n            case \"anim1\":return [img`\n. . . . . . . 5 . . . . . . . . \n. . . . . . . 5 5 . . . . . . . \n. 5 e e e e e e e e e e e e 5 . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \ne e e e e f e e e e f e e e e e \ne e e e e e e e e e e e e e e e \ne e e f e e e e e e e e f e e e \ne e e e f f f f f f f f e e e e \ne e e e e e e e e e e e e e e e \ne e e e e e e e e e e e e e e e \n`, img`\n. . . . . 5 . . . . . . . . . 5 \n5 . . . . . 5 . . . . . . . 5 . \n5 . . . . . . 5 . . . . . . . 5 \n. 5 . . . . . 5 5 . . . . 5 5 . \n5 . . . . . . . . . . . . . . . \n. . e e e e e e e e e e e e . . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \ne e e e e f e e e e f e e e e e \ne e e e e e e e e e e e e e e e \ne e e f e e e e e e e e f e e e \n`, img`\n. . . . . . 5 . . . . . . . . . \n. . . . . . . 5 . . . . . . . . \n5 . . . . . . . 5 . . . . . . . \n. 5 . . . . . . 5 . . . . . . 5 \n. 5 . . . . . 5 . . . . . . 5 . \n. . 5 . . . . 5 . . . . . . . 5 \n. 5 . . . . . . . . . . . . 5 5 \n. . . . . . . . . . . . . . . . \n. . e e e e e e e e e e e e . . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \n`, img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . e e e e e e e e e e e e . . \n. e e e e e e e e e e e e e e . \ne e e e e e f e e f e e e e e e \ne e e e e e f e e f e e e e e e \ne e e e e e e e e e e e e e e e \ne e e e f e e e e e e f e e e e \ne e e e e f 3 3 3 3 f e e e e e \ne e e e e e f 3 3 f e e e e e e \ne e e e e f e e e e f e e e e e \ne e e e e e e e e e e e e e e e \ne e e f e e e e e e e e f e e e \ne e e e f f f f f f f f e e e e \ne e e e e e e e e e e e e e e e \ne e e e e e e e e e e e e e e e \n`];\n            case \"hammerAnimation\":\n            case \"anim2\":return [img`\n................................\n................................\n................................\n................................\n................................\n................................\n.....................44444444444\n.....................44444444444\n.....................22222222222\n.....................22222222222\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.cccccccccccccccccccceeeeeeeeeee\n.ddddddddddddddddddddeeeeeeeeeee\n.ddddddddddddddddddddeeeeeeeeeee\n.bbbbbbbbbbbbbbbbbbbbeeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................88888888888\n.....................88888888888\n.....................66666666666\n.....................66666666666\n................................\n................................\n................................\n................................\n................................\n................................\n`, img`\n................................\n................................\n................................\n................................\n................................\n................................\n.....................44444444444\n.....................44444444444\n.....................22222222222\n.....................22222222222\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.cccccccccccccccccccceeeeeeeeeee\n.ddddddddddddddddddddeeeeeeeeeee\n.ddddddddddddddddddddeeeeeeeeeee\n.bbbbbbbbbbbbbbbbbbbbeeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................88888888888\n.....................88888888888\n.....................66666666666\n.....................66666666666\n................................\n................................\n................................\n................................\n................................\n................................\n`, img`\n................................\n...ddcc.........................\n...ddcc.........................\n...bbddcc.......................\n...bbddcc.......................\n.....bbddcc.....................\n.....bbddcc.....................\n.......bbddcc...................\n.......bbddcc...................\n.........bbddcc........44.......\n.........bbddcc........44.......\n...........bbddcc....ee2244.....\n...........bbddcc....ee2244.....\n.............bbddcceeeeee2244...\n.............bbddcceeeeee2244...\n...............bbddeeeeeeee2244.\n...............bbddeeeeeeee2244.\n...............eeeeeeeeeeeeee224\n...............eeeeeeeeeeeeee224\n.............eeeeeeeeeeeeeeeeee.\n.............eeeeeeeeeeeeeeeeee.\n...........6688eeeeeeeeeeeeee...\n...........6688eeeeeeeeeeeeee...\n.............6688eeeeeeeeee.....\n.............6688eeeeeeeeee.....\n...............6688eeeeee.......\n...............6688eeeeee.......\n.................6688ee.........\n.................6688ee.........\n...................66...........\n...................66...........\n................................\n`, img`\n................................\n...ddcc.........................\n...ddcc.........................\n...bbddcc.......................\n...bbddcc.......................\n.....bbddcc.....................\n.....bbddcc.....................\n.......bbddcc...................\n.......bbddcc...................\n.........bbddcc........44.......\n.........bbddcc........44.......\n...........bbddcc....ee2244.....\n...........bbddcc....ee2244.....\n.............bbddcceeeeee2244...\n.............bbddcceeeeee2244...\n...............bbddeeeeeeee2244.\n...............bbddeeeeeeee2244.\n...............eeeeeeeeeeeeee224\n...............eeeeeeeeeeeeee224\n.............eeeeeeeeeeeeeeeeee.\n.............eeeeeeeeeeeeeeeeee.\n...........6688eeeeeeeeeeeeee...\n...........6688eeeeeeeeeeeeee...\n.............6688eeeeeeeeee.....\n.............6688eeeeeeeeee.....\n...............6688eeeeee.......\n...............6688eeeeee.......\n.................6688ee.........\n.................6688ee.........\n...................66...........\n...................66...........\n................................\n`, img`\n................................\n...ddcc.........................\n...ddcc.........................\n...bbddcc.......................\n...bbddcc.......................\n.....bbddcc.....................\n.....bbddcc.....................\n.......bbddcc...................\n.......bbddcc...................\n.........bbddcc........44.......\n.........bbddcc........44.......\n...........bbddcc....ee2244.....\n...........bbddcc....ee2244.....\n.............bbddcceeeeee2244...\n.............bbddcceeeeee2244...\n...............bbddeeeeeeee2244.\n...............bbddeeeeeeee2244.\n...............eeeeeeeeeeeeee224\n...............eeeeeeeeeeeeee224\n.............eeeeeeeeeeeeeeeeee.\n.............eeeeeeeeeeeeeeeeee.\n...........6688eeeeeeeeeeeeee...\n...........6688eeeeeeeeeeeeee...\n.............6688eeeeeeeeee.....\n.............6688eeeeeeeeee.....\n...............6688eeeeee.......\n...............6688eeeeee.......\n.................6688ee.........\n.................6688ee.........\n...................66...........\n...................66...........\n................................\n`, img`\n................................\n................................\n................................\n................................\n................................\n................................\n.....................44444444444\n.....................44444444444\n.....................22222222222\n.....................22222222222\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.cccccccccccccccccccceeeeeeeeeee\n.ddddddddddddddddddddeeeeeeeeeee\n.ddddddddddddddddddddeeeeeeeeeee\n.bbbbbbbbbbbbbbbbbbbbeeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................eeeeeeeeeee\n.....................88888888888\n.....................88888888888\n.....................66666666666\n.....................66666666666\n................................\n................................\n................................\n................................\n................................\n................................\n`, img`\n.................44.............\n...............4422ee...........\n...............4422ee...........\n.............4422eeeeee.........\n.............4422eeeeee.........\n...........4422eeeeeeeeee.......\n...........4422eeeeeeeeee.......\n.........4422eeeeeeeeeeeeee.....\n.........4422eeeeeeeeeeeeee.....\n...........eeeeeeeeeeeeeeeeee...\n...........eeeeeeeeeeeeeeeeee...\n.............eeeeeeeeeeeeee8866.\n.............eeeeeeeeeeeeee8866.\n.............ccddeeeeeeee8866...\n.............ccddeeeeeeee8866...\n...........ccddbbeeeeee8866.....\n...........ccddbbeeeeee8866.....\n.........ccddbb....ee8866.......\n.........ccddbb....ee8866.......\n.......ccddbb........66.........\n.......ccddbb........66.........\n.....ccddbb.....................\n.....ccddbb.....................\n...ccddbb.......................\n...ccddbb.......................\n.ccddbb.........................\n.ccddbb.........................\n.ddbb...........................\n.ddbb...........................\n................................\n................................\n................................\n`];\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><variables><variable id=\".{RX=%Dh$6newpr[9[I^\">myHammer</variable></variables><block type=\"pxt-on-start\" x=\"0\" y=\"0\"><statement name=\"HANDLER\"><block type=\"run_image_animation\"><value name=\"sprite\"><block type=\"variables_get\"><field name=\"VAR\" id=\".{RX=%Dh$6newpr[9[I^\">myHammer</field></block></value><value name=\"frames\"><block type=\"animation_editor\"><field name=\"frames\">[img`\n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n. . . . . . . . . . . . . . . . \n`]</field><data>{\"commentRefs\":[],\"fieldData\":{\"frames\":null}}</data></block></value><value name=\"frameInterval\"><shadow type=\"timePicker\"><field name=\"ms\">500</field></shadow></value><value name=\"loop\"><shadow type=\"toggleOnOff\"><field name=\"on\">false</field></shadow></value></block></statement></block></xml>",
  "main.ts": "",
  "pxt.json": "{\n    \"name\": \"Whackem2 - Assets Only\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\",\n        \"custom.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.8.26\",\n        \"tag\": \"v1.8.26\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/6434cb63948fe7c1d1a7498115a4bc495495512c\",\n        \"target\": \"1.8.26\",\n        \"pxt\": \"7.4.27\"\n    },\n    \"preferredEditor\": \"tsprj\"\n}\n"
}
```