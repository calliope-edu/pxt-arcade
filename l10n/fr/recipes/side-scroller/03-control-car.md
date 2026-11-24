# Course à défilement horizontal : piloter la voiture

## {Introduction @unplugged}

Utilise un bouton de la manette pour faire sauter ta voiture par-dessus les obstacles du circuit.

![Faire sauter la voiture avec un bouton de la manette](/static/recipes/side-scroller/03-control-car.gif)

## {Étape 1 - Sauter quand on appuie sur un bouton}

Quand le joueur appuie sur le bouton **A**, notre voiture doit pouvoir sauter par-dessus les obstacles.

Depuis le tiroir ``||controller:Contrôleur||`` de la boîte à outils, fais glisser un bloc ``||controller:quand bouton A est appuyé||`` dans l'espace de travail.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {

})
```

## {Étape 2 - Vérifier que la voiture est sur la route}

On ne doit pouvoir sauter que quand la voiture est sur la route – pas de voitures volantes ! Il faut donc ajouter une vérification.

Depuis le tiroir ``||logic:Logique||`` de la boîte à outils, fais glisser un bloc ``||logic:si alors||`` dans le bloc ``||controller:quand bouton A est appuyé||``.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {

    }
})
```

## {Étape 3 - Détecter les murs}

Depuis le tiroir ``||scene:Scène||`` de la boîte à outils, fais glisser un bloc ``||scene:monSprite touche-t'il le mur||`` et dépose-le dans le bloc ``||logic:si alors||`` à la place de vrai. Clique sur le menu déroulant et choisis ``||scene:bas||`` comme direction du mur.

```blocks
let monSprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (monSprite.isHittingTile(CollisionDirection.Bottom)) {

    }
})
```

## {Étape 4 - Faire sauter la voiture}

Depuis le tiroir ``||sprites:Sprites||`` de la boîte à outils, fais glisser un bloc ``||sprites:définir monSprite x à 0||`` dans le bloc ``||logic:si alors||``.

Clique sur le menu déroulant de la propriété ``||sprites:x||`` et choisis ``||sprites:vy (vitesse selon y)||`` pour l'axe vertical Y. Mets la valeur à ``-200``. Ainsi, notre voiture monte à cette vitesse et saute.

```blocks
let monSprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (monSprite.isHittingTile(CollisionDirection.Bottom)) {
        monSprite.vy = -200
    }
})
```

## {Étape 5 - Gérer les chevauchements}

Quand notre voiture heurte un obstacle, on doit perdre la partie. Et quand elle atteint la ligne d'arrivée, on doit gagner. Pour écrire ce code, on utilise des blocs ``||scene:sprite chevauche tuile||``.

Depuis le tiroir ``||scene:Scène||`` de la boîte à outils, fais glisser deux blocs ``||scene:lorsque sprite de type chevauche||`` dans l'espace de travail.

![Sprite qui chevauche une tuile](/static/recipes/side-scroller/sprite-overlaps-tile.png)

## {Étape 6 - Choisir les tuiles obstacle et arrivée}

Dans le premier bloc ``||scene:lorsque sprite de type chevauche||``, clique sur le menu déroulant avec le carré à damier et choisis ta tuile Obstacle.

Dans le second bloc ``||scene:lorsque sprite de type chevauche||``, clique sur le menu déroulant avec le carré à damier et choisis ta tuile Ligne d'arrivée.

```blocks
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {

})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterEast0, function (sprite, location) {

})
```

## {Étape 7 - Fin de partie}

Depuis le tiroir ``||game:Jeu||`` de la boîte à outils, fais glisser **deux** blocs ``||game:jeu terminé||`` dans l'espace de travail – dépose-en un dans chacun des blocs ``||scene:lorsque sprite de type chevauche||``.

Dans le second bloc ``||scene:lorsque sprite de type chevauche||`` (ligne d'arrivée), mets le réglage de ``||game:jeu terminé||`` sur **GAGNÉ**.

```blocks
scene.onOverlapTile(SpriteKind.Player, myTiles.tile1, function (sprite, location) {
    game.gameOver(false)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.greenOuterEast0, function (sprite, location) {
    game.gameOver(true)
})
```

## {Terminé - Joue à ton jeu ! @unplugged}

Et voilà ! Joue à ton jeu dans le simulateur en plein écran – saute par-dessus les obstacles pour atteindre la ligne d'arrivée ! Ensuite, tu peux ajouter différents types d'obstacles ou des plateformes sur lesquelles ta voiture peut sauter.

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAAAAAAAA/8z//wAAAMzP/P//wP////////8AAAD//8zM/AAAAADw////AAAAAP////8AAMz8/////8D////PzP//AAD///////8AAADw///P/wAAAADM////AAAAAPD///8AAPD//8zM/8D//8z8////AMD8//z//P8AAAAAAP/PzA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level": {
        "id": "level",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAzMjAwMDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMjAyMDEwMTAxMDEwMTAxMDEwMTAyMDIwMjAxMDEwMTAxMDEwMTAxMDIwMjAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMjIyMjIyMjIyMDIwMDIyMjIyMjIyMDAyMDIyMjIyMjAwMjAyMjIyMjIyMjIyMjIyMg==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.vehicle.roadHorizontal",
            "myTiles.tile1",
            "sprites.dungeon.greenOuterEast0"
        ]
    },
    "level_0": {
        "id": "level_0",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```