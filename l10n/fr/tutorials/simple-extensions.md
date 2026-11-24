# Extensions simples
### @explicitHints true

## {Introduction @showdialog}

Les extensions permettent aux utilisateurs d'Arcade de développer facilement des parties de leur code et de les partager avec d'autres. 
Dans ce tutoriel, tu vas utiliser l'extension ``||corgio:corgio||`` pour créer un jeu de plateforme simple. 

L'extension est déjà chargée dans ce tutoriel, mais tu peux charger 
l'extension dans d'autres projets comme montré ci-dessous.

![Ajouter l'extension Corgio](/static/tutorials/simple-extensions/add-corgio.gif)



## {Étape 2}

La première chose à faire, c'est créer notre corgio. 

---



- :paw: Ouvre ``||corgio:Corgi||`` et trouve <br/> 
``||variables(corgio):set myCorg to||``<br/>
puis fais-le glisser dans le conteneur ``||loops(noclick):au démarrage||`` qui est déjà dans l'espace de travail. 

---

Le corgi devrait apparaître sur le côté gauche de l'écran.


#### ~ tutorialhint

```blocks
//@highlight
let myCorg: Corgio = corgio.create(SpriteKind.Player)
```

## {Étape 3}

Maintenant, faisons bouger notre sprite à gauche et à droite avec les flèches de la manette. 

---

- :paw: Ajoute <br/> 
``||corgio:make myCorg move left and right with arrow keys||``  <br/> 
et <br/>
``||corgio:make myCorg jump if up arrow key is pressed||`` <br/> 
sous ``||variables(noclick):set myCorg to||``.

#### ~ tutorialhint

```blocks
let myCorg: Corgio = corgio.create(SpriteKind.Player)
//@highlight
myCorg.horizontalMovement()
//@highlight
myCorg.verticalMovement()
```

## {Étape 4}

Le corgio est un peu ennuyeux quand son image ne change pas.

---

- :paw: Pour corriger ça, prends <br/>
``||corgio:change image when myCorg is moving||``<br/>
et place-le quelque part sous <br/>
``||variables(noclick):set myCorg to||``.


#### ~ tutorialhint

```blocks
let myCorg: Corgio = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()

//@highlight
myCorg.updateSprite()
```

## {Étape 5}

Ajoutons un décor au jeu avec un plan des tuiles.

~hint C'est quoi, un plan des tuiles ? 🤷🏽‍♀️

---

Un plan des tuiles est une carte de jeu faite de tuiles individuelles. Tu peux mettre des images dans des cases, 
puis rendre certaines de ces cases solides avec des murs. Un plan des tuiles a déjà été ajouté à ce tutoriel pour toi, mais
tu peux aussi créer le tien !

- Règle la taille du plan des tuiles sur ``20x8``
- Dessine quelques plateformes sur lesquelles le corgi peut se tenir
- Clique sur l'icône du mur pour couvrir tes plateformes de murs rouges

(Pas d'inquiétude, la couche rouge n'apparaîtra pas pendant que tu joues.)

![Animation montrant comment réaliser cette étape](/static/tutorials/simple-extensions/create-tilemap.gif)


hint~

---

- :tree: Depuis la catégorie ``||scene:Scène||``, <br/>
ajoute <br/>
``||scene:définir plan des tuiles à||`` <br/>
dans le conteneur ``||loops(noclick):au démarrage||``.

#### ~ tutorialhint

```blocks
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()

//@highlight
tiles.setTilemap(tilemap`level_0`)
```

## {Étape 6}

La caméra doit suivre le corgio quand il sort de l'écran.

---

- :paw: Prends <br/>
``||corgio:make camera follow myCorg left and right||`` <br/>
et place-le quelque part sous <br/>
``||variables(noclick):set myCorg to||``.



#### ~ tutorialhint

```blocks
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
tiles.setTilemap(tilemap`level_0`)
//@highlight
myCorg.cameraFollow()
```

## {Étape 7}

À la fin du plan des tuiles, il nous faut une colonne avec une tuile différente des autres tuiles de la carte.
Elle représentera l'arrivée pour le joueur.

---

- :mouse pointer: Clique sur l'icône du plan des tuiles dans le bloc <br/>
``||scene(noclick):définir plan des tuiles à||`` <br/>
qui est dans l'espace de travail. 

- :paint brush: Ajoute une colonne complète de tuiles qui ne sont utilisées nulle part ailleurs dans le 
jeu... mais **n'ajoute pas** de couche de mur ! Le corgi doit pouvoir traverser ces tuiles.  


![Animation montrant comment réaliser cette étape](/static/tutorials/simple-extensions/corgi-column.gif)



#### ~ tutorialhint

![Animation montrant comment réaliser cette étape](/static/tutorials/simple-extensions/corgi-column.gif)



## {Étape 8}

Déclenchons une **VICTOIRE** quand le corgi atteint la nouvelle colonne.

---

- :tree: Ouvre ``||scene:Scène||`` et ajoute <br/>
``||scene:lorsque sprite de type Player chevauche [ ] à location||``<br/>
à l'espace de travail. 

- :mouse pointer: Clique sur la tuile à damier et trouve la tuile que tu as utilisée comme arrivée.

- :circle: Dans le conteneur de l'événement de chevauchement, ajoute un bloc<br/>
``||game:jeu terminé <LOSE>||``<br/>
.

- :mouse pointer: Clique sur ``LOSE`` pour le changer en ``WIN``.


#### ~ tutorialhint

```blocks
//@highlight
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral0, function (sprite, location) {
    game.gameOver(true)
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
myCorg.cameraFollow()
tiles.setTilemap(tilemap`level_1`)
```

## {Terminé}

**Félicitations !! Ton jeu de plateforme simple est terminé ! **

Essaie d'atteindre la colonne à la fin du niveau.



```blockconfig.global

tiles.setTilemap(tilemap`level_0`)

```


```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level_0": {
        "id": "level_0",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxNDAwMDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDIyMjIwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMjIyMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMjIyMjIyMjIyMDIwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.builtin.oceanDepths4",
            "sprites.builtin.oceanDepths0"
        ]
    },
    "level_1": {
        "id": "level_1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxNDAwMDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAyMDIwMjAwMDMwMDAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDIwMjAyMDIwMDAwMDAwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMjIyMDAyMDIyMjIwMjAwMDAwMDIwMDAwMDAwMDAwMDAwMjIyMjIyMjIwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAyMjIyMjIyMjIyMjIwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.builtin.oceanDepths4",
            "sprites.builtin.oceanDepths0",
            "sprites.builtin.coral0"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```

```package
corgio
```
