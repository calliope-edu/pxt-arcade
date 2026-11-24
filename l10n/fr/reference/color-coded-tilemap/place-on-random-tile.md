# place On Random Tile

Déplacer un sprite au centre d'une tuile aléatoire de la scène.

```sig
scene.placeOnRandomTile(null, 0)
```

Tu peux placer un sprite juste au-dessus d'une tuile aléatoire de la carte de tuiles. Utilise le numéro de couleur du type de tuile pour choisir sur lequel de ces types le sprite doit se placer.


## Paramètres

* **sprite** : le sprite à déplacer sur la tuile.
* **color** : le [nombre](/types/number) de couleur d'une tuile à choisir au hasard.

## Exemple #example

Crée une carte avec plusieurs tuiles différentes. Crée un sprite de forme ronde. Place le sprite au hasard sur une tuile de numéro de couleur `8`.

```blocks
let monSprite: Sprite = null
scene.setTileMap(img`
. . . . . . . . 3 . 
. 2 . . . . . . . . 
. . . . . 8 . . . . 
. . . . . . . b . . 
. . 8 . 6 . . . . . 
. . . . . . 4 . . . 
. a . . . . . . . . 
. . . . . . . . e . 
`)
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
scene.placeOnRandomTile(monSprite, 8)
```

## Voir aussi #seealso

[obtenir la tuile](/reference/color-coded-tilemap/get-tile)

```package
color-coded-tilemap
```