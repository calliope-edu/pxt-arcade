# Course à défilement horizontal

## {Introduction @unplugged}

Crée un jeu de course de voitures à défilement horizontal où tu sautes par-dessus des obstacles pour atteindre la ligne d'arrivée.

![Course de voitures dans le jeu](/static/recipes/side-scroller/car-race.gif)

## {Étape 1 - Choisir la couleur d'arrière-plan}

Choisis d'abord la couleur d'arrière-plan de ton jeu de course. Depuis le tiroir ``||scene:Scène||`` de la boîte à outils, fais glisser un bloc ``||scene:définir couleur d'arrière-plan à||`` dans l'espace de travail. Place-le dans le bloc ``||loops:au démarrage||``.

Dans le bloc ``||scene:définir couleur d'arrière-plan à||``, clique sur l'ovale gris pour choisir une couleur.

![Couleur d'arrière-plan](/static/recipes/side-scroller/background-color.png)

```blocks
scene.setBackgroundColor(6)
```

## {Étape 2 - Créer un plan des tuiles}

Maintenant, nous allons utiliser un plan des tuiles pour la route de notre jeu. Depuis le tiroir ``||scene:Scène||`` de la boîte à outils, fais glisser un bloc ``||scene:définir plan des tuiles à||`` dans le bloc ``||loops:au démarrage||``, sous le bloc ``||scene:définir couleur d'arrière-plan à||``.

![Définir le plan des tuiles](/static/recipes/side-scroller/set-tilemap.png)

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level_0`)
```

## {Étape 3 - Régler la taille du canevas}

Dans le bloc ``||scene:définir plan des tuiles à||``, clique sur le carré gris pour ouvrir l'éditeur de plan des tuiles.

En bas à gauche, règle la taille du canevas sur **50** par **8** pixels. L'arrière-plan de ton jeu sera ainsi très large et peu haut.

![Taille du canevas](/static/recipes/side-scroller/canvas-size.png)

## {Étape 4 - Dessiner la route}

Choisis une **tuile** dans la galerie de tuiles ou dessine ta propre tuile pour la piste de course. Dans la section **Divers** de la galerie, tu trouveras une tuile de route que tu peux utiliser.

Clique sur l'icône **Crayon** et dessine la route le long du bord inférieur de ton canevas.

![Tuile de route](/static/recipes/side-scroller/road-tile.png)

## {Étape 5 - Créer des obstacles}

Ouvre à nouveau l'éditeur de plan des tuiles en cliquant sur le carré dans le bloc ``||scene:définir plan des tuiles à||``. Cette fois, nous allons créer un obstacle par-dessus lequel ta voiture devra sauter.

Choisis une tuile dans la galerie ou dessine ta propre tuile pour un obstacle : ça peut être de l'eau, de la lave brûlante ou des pics !

À différents endroits au milieu de ta route, place jusqu'à trois tuiles d'obstacle côte à côte.

![Obstacles](/static/recipes/side-scroller/obstacles.png)

## {Étape 6 - Créer la ligne d'arrivée}

Ouvre de nouveau l'éditeur de plan des tuiles en cliquant sur le carré dans le bloc ``||scene:définir plan des tuiles à||``. Maintenant, nous allons créer la ligne d'arrivée de notre course.

Choisis une tuile dans la galerie ou dessine ta propre tuile pour la ligne d'arrivée, puis dessine-la sur le bord droit de ton canevas.

![Ligne d'arrivée](/static/recipes/side-scroller/finish-line.png)

## {Étape 7 - Dessiner les murs}

Retourne une dernière fois dans l'éditeur de plan des tuiles. Pour finir, nous allons ajouter des murs sur la route de notre plan des tuiles, sur lesquels notre voiture pourra rouler.

Clique sur l'outil **Mur** et dessine le long des tuiles de route.

![Murs](/static/recipes/side-scroller/walls.png)

## {Étape 8 - La piste terminée}

Dans le simulateur, tu vois maintenant une partie de ta nouvelle piste de course. Tu ne vois pas encore toute la piste, mais le reste apparaîtra dès que ta voiture avancera.

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level`)
```

## {Terminé @unplugged}

Maintenant, nous allons construire une voiture de course et lui donner des propriétés de mouvement pour qu'elle roule sur la piste que tu viens de créer.

|      |
|:----:|
| [![Créer la voiture](/static/recipes/side-scroller/02-create-car.gif)](#recipe:/recipes/side-scroller/02-create-car) |
| [**Créer une voiture de course**](#recipe:/recipes/side-scroller/02-create-car) |


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