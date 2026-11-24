# Cherry Pickr

![Vue du jeu dans le simulateur](/static/lessons/cherry-pickr/cherry-pickr.png)

Ramasse autant de cerises que possible avant la fin du temps imparti !

## Objectif d'apprentissage

Apprends les bases nécessaires pour créer un jeu fonctionnel !

* Le concept de sprite
* Comment configurer une carte de tuiles
* Faire apparaître des cerises sur la carte de tuiles
* Placer et déplacer un personnage
* Concevoir la carte
* Mettre en place un compte à rebours

## Sections de la leçon

* [Première partie : Démarrer le jeu](#part-one-start-the-game)
* [Deuxième partie : Définir l'arrière-plan](#part-two-set-the-background)
* [Troisième partie : Créer et déplacer le joueur](#part-three-create-and-move-the-player)
* [Quatrième partie : Faire apparaître des cerises à l'écran](#part-four-spawn-cherries-on-the-screen)
* [Cinquième partie : Suivre le score et le temps](#part-five-keep-track-of-the-score-and-time)
* [Sixième partie : Ramasser les cerises](#part-six-picking-up-cherries)

## Première partie : Démarrer le jeu

Va dans l'éditeur [MakeCode Arcade](@homeurl@) et sélectionne **Nouveau projet** pour commencer à créer un nouveau jeu.

Une fois l'éditeur chargé, tu verras un bloc vert ``||loops:au démarrage||`` déjà placé dans l'espace de travail de l'éditeur.

Nous voulons que le jeu commence par un _écran titre_ pour indiquer au joueur à quel jeu il joue. Pour cela, va dans ``||game:Jeu||`` dans la boîte à outils et, dans la catégorie **Invite**, fais glisser un bloc ``||game:splash||`` dans le bloc ``||loops:au démarrage||``. Donne un titre à ton jeu et écris-le comme texte du bloc ``||game:splash||``.

```blocks
game.splash("Cherry Pickr")
```

## Deuxième partie : Définir l'arrière-plan

Pour définir l'arrière-plan, clique sur ``||scene:Scène||`` dans la boîte à outils et fais glisser le bloc ``||scene:définir la carte de tuiles à||`` dans le bloc ``||loops:au démarrage||``. Clique ensuite sur la case grise et dessine l'arrière-plan comme tu le souhaites.

```blocks
game.splash("Cherry Pickr")
tiles.setTilemap(tilemap`level`)
```

## Troisième partie : Créer et déplacer le joueur

### Création

L'étape suivante consiste à créer un personnage que l'on peut déplacer. Pour cela, va dans ``||sprites:Sprites||`` dans la boîte à outils, dans la catégorie **Créer**, et fais glisser un bloc ``||sprites:définir monSprite à||`` dans ``||loops:au démarrage|``.

Ensuite, dessine l'apparence de ton joueur. Clique sur la case grise carrée à l'intérieur du bloc ``||sprites:définir monSprite à||``. Un éditeur de dessin s'ouvre : c'est là que tu dessines ton joueur.

```blocks
let monSprite: Sprite = null
game.splash("Cherry Pickr")
tiles.setTilemap(tilemap`level`)
monSprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
```

Voilà, nous avons créé notre joueur !

### ~hint

#### Renommer la variable du sprite

Tu peux renommer ton personnage de ``monSprite`` en ``player`` (ou ce que tu veux) en cliquant sur la liste déroulante partout où tu vois la variable ``monSprite`` et en sélectionnant ``Renommer la variable...``. Si tu changes le nom de la variable, garde-le en tête pour la suite de cette leçon. Chaque fois que tu vois ``monSprite``, utilise le nom de ta variable à la place.

### ~

### Déplacement

Pour déplacer le joueur, clique sur ``||controller:Contrôleur||`` dans la boîte à outils et fais glisser un bloc ``||controller:contrôler le sprite||`` dans le bloc ``||loops:au démarrage||``. Vérifie que la variable sélectionnée est ``monSprite``.

Va ensuite dans ``||scene:Scène||`` et, dans la catégorie **Caméra**, fais glisser le bloc ``||scene:la caméra suit le sprite||`` dans le bloc ``||loops:au démarrage||``. Là encore, vérifie que la variable sélectionnée est ``monSprite``.

Ainsi, quand le joueur se déplace sur la carte de tuiles, il reste au centre de l'écran.
Pour que le joueur se déplace plus vite, règle ``vx`` et ``vy`` sur `150`.

```blocks
let monSprite: Sprite = null
game.splash("Cherry Pickr")
tiles.setTilemap(tilemap`level`)
monSprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
controller.moveSprite(monSprite, 150, 150)
scene.cameraFollowSprite(monSprite)
```

Nous pouvons maintenant déplacer notre joueur ! Teste les déplacements du joueur dans le simulateur.

![Joueur se déplaçant à l'écran](/static/lessons/cherry-pickr/movingplayer.gif)

## Quatrième partie : Faire apparaître des cerises à l'écran

Nous voulons que des cerises apparaissent au hasard à l'écran toutes les demi-secondes. Pour cela, va dans ``||game:Jeu||`` dans la boîte à outils et fais glisser le bloc ``||game:à chaque mise à jour du jeu toutes les||`` dans l'éditeur.

Ensuite, nous allons définir ce qu'est une cerise : va dans ``||sprites:Sprites||`` et fais glisser le bloc ``||sprites:définir monSprite à||`` dans le bloc ``||game:à chaque mise à jour du jeu toutes les||``.

Clique sur la liste déroulante et renomme la variable en ``||variables:cherry||``. Clique sur la case grise carrée pour dessiner l'apparence de ton objet. Clique ensuite sur la liste déroulante qui indique ``||sprites:Player||`` et change le type en ``||sprites:Food||``.

```blocks
let cherry: Sprite = null
game.onUpdateInterval(500, function () {
    cherry = sprites.create(sprites.food.smallCherries, SpriteKind.Food)
})
```

Pour faire apparaître des cerises à l'écran, nous devons définir des coordonnées x et y aléatoires. Va dans l'onglet ``||sprites:Sprites||`` et fais glisser ``||sprites:définir la position de monSprite à||`` dans le bloc ``||sprites:à chaque mise à jour du jeu toutes les||``. Remplace ``||variables:monSprite||`` par ``||variables:cherry||``.

Pour que la cerise apparaisse au hasard sur la carte de tuiles, va dans l'onglet ``||math:Maths||`` et fais glisser un bloc ``||math:choisir au hasard||`` dans la valeur x de ``||sprites:définir la position de item à||``. Fais-en glisser un autre dans la valeur y.

Change les valeurs du premier bloc ``||math:choisir au hasard||`` en `0` et `160`. Change les valeurs du second bloc ``||math:choisir au hasard||`` en `0` et `120`.

```blocks
let cherry: Sprite = null
game.onUpdateInterval(500, function () {
    cherry = sprites.create(sprites.food.smallCherries, SpriteKind.Food)
    cherry.setPosition(randint(0, 160), randint(0, 120))
})
```

## Cinquième partie : Suivre le score et le temps

### Suivre le temps

Nous devons définir la durée du jeu. Pour cela, va dans ``||info:Info||`` et fais glisser ``||info:démarrer le compte à rebours||`` dans le bloc ``||loops:au démarrage||``. Clique sur `10` et remplace-le par `60` pour que le jeu se termine au bout de 60 secondes.

### Suivre le score

L'étape suivante consiste à suivre le score. Va dans ``||info:Info||`` et fais glisser ``||info:définir le score à||`` dans le bloc ``||loops:au démarrage||``. Laisse la valeur à `0`, car le joueur n'a aucun point au début du jeu.

Nous augmenterons le score dans la [Sixième partie : Ramasser les cerises](#part-six-picking-up-cherries).

Le simulateur affiche automatiquement le chronomètre et le score en haut de l'écran.

```blocks
let monSprite: Sprite = null
game.splash("Cherry Pickr")
tiles.setTilemap(tilemap`level`)
monSprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
controller.moveSprite(monSprite, 150, 150)
scene.cameraFollowSprite(monSprite)
info.startCountdown(60)
info.setScore(0)
```

## Sixième partie : Ramasser les cerises

La dernière tâche consiste à permettre au joueur de ramasser réellement les cerises. Va dans ``||sprites:Sprites||`` et, dans la catégorie **Chevauchements**, fais glisser ``||sprites:quand un sprite de type Player chevauche||``. Change le second type ``||sprites:Player||`` en ``||sprites:Food||``. Le texte du bloc doit maintenant être ``||sprites:quand un sprite de type Player chevauche autreSprite de type Food||``.

Ce bloc s'exécute chaque fois qu'un sprite ``||sprites:Player||`` chevauche un sprite ``||sprites:Food||``.

### Modifier le score

Pour modifier le score quand la cerise est touchée, va dans l'onglet ``||info:Info||`` et fais glisser le bloc ``||info:modifier le score de||`` dans le bloc ``||sprites:quand un sprite de type Player chevauche||``. Laisse la valeur à `1`.

### Supprimer l'objet

Quand ce bloc s'exécute, deux nouvelles variables sont créées : ``||variables:sprite||`` et ``||variables:autreSprite||``. Nous devons retirer ``||variables:autreSprite||`` du jeu : c'est le ``||sprites:Food||`` qui est entré en collision avec le ``||sprites:Player||``.

Pour cela, va dans ``||sprites:Sprites||`` dans la boîte à outils et, dans **Effets**, fais glisser le bloc ``||sprites:détruire||`` dans le bloc ``||sprites:quand un sprite de type Player chevauche||``. Fais ensuite glisser la variable ``||variables:autreSprite||`` depuis le haut du bloc dans le bloc ``||sprites:détruire||``.

Tu remarqueras peut-être que le bloc ``||variables:monSprite||`` est retiré du bloc ``||sprites:détruire||`` quand tu le remplaces par ``||variables:autreSprite||``. Tu peux supprimer ce bloc en le faisant glisser vers la boîte à outils.

```blocks
let cherry: Sprite = null
let monSprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, autreSprite) {
    info.changeScoreBy(1)
    autreSprite.destroy()
})
game.splash("Cherry Pickr")
tiles.setTilemap(tilemap`level`)
monSprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
controller.moveSprite(monSprite, 150, 150)
scene.cameraFollowSprite(monSprite)
info.startCountdown(60)
info.setScore(0)
game.onUpdateInterval(500, function () {
    cherry = sprites.create(sprites.food.smallCherries, SpriteKind.Food)
    cherry.setPosition(randint(0, 160), randint(0, 120))
})
```

Et voilà, nous avons un jeu entièrement fonctionnel !

![Jeu fonctionnel](/static/lessons/cherry-pickr/workinggame.gif)

### ~hint

#### Variables locales

Les variables ``||variables:sprite||`` et ``||variables:autreSprite||`` sont appelées _variables locales_. Elles sont créées quand le bloc de collision s'exécute, et ne peuvent être utilisées qu'à l'intérieur de ce bloc. Quand ce bloc s'exécute, la variable ``||variables:sprite||`` contient le sprite ``||sprites:Player||`` impliqué dans la collision, et la variable ``||variables:autreSprite||`` contient le sprite ``||sprites:Food||``.

### ~

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile0": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZg==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile2": {
        "data": "hwQQABAAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMw==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile3": {
        "data": "hwQQABAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile4": {
        "data": "hwQQABAAAAB3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dw==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile5": {
        "data": "hwQQABAAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmQ==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile6": {
        "data": "hwQQABAAAABERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile7": {
        "data": "hwQQABAAAAAiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIg==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile8": {
        "data": "hwQQABAAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level": {
        "id": "level",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMjAyMDIwMjAyMDIwMjAyMDIwMzAzMDMwMzAzMDMwMzAzMDMwMzA0MDQwNDA0MDQwNDA0MDQwNDA0MDUwNTA1MDUwNTA1MDUwNTA1MDUwNjA2MDYwNjA2MDYwNjA2MDYwNjA3MDcwNzA3MDcwNzA3MDcwNzA3MDgwODA4MDgwODA4MDgwODA4MDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.tile0",
            "myTiles.tile1",
            "myTiles.tile2",
            "myTiles.tile3",
            "myTiles.tile4",
            "myTiles.tile5",
            "myTiles.tile6",
            "myTiles.tile7",
            "myTiles.tile8"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```