# placer

Déplace un sprite au centre d'une tuile choisie.

```sig
tiles.getTileLocation(0, 0).place(null)
```

Tu peux placer un sprite directement sur une tuile. Si tu as un emplacement de [tuile](/types/tile) de la tilemap, utilise simplement **placer** pour mettre un sprite dessus.

## Paramètres

* **sprite** : le sprite à déplacer sur la tuile.

## Exemple #example

Crée une tilemap avec plusieurs tuiles différentes. Crée un sprite en forme de cercle. Choisis la tuile à la position (1, 1) de la tilemap et place le sprite dessus.

```blocks
let monSprite: Sprite = null
// TODO tiles.setTilemap(tiles.createTilemap(null, 0, 8 ** 8, 9)); 
monSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
pause(1000)
let tileDock = tiles.getTileLocation(1, 1)
tileDock.place(monSprite)
```

## Voir aussi #seealso

[obtenir l'emplacement de la tuile](/reference/tiles/get-tile-location)