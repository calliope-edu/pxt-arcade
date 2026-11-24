# place

Déplacer un sprite au centre d'une tuile de la scène.

```sig
scene.getTile(0, 0).place(null)
```

Tu peux placer un sprite juste au-dessus d'une tuile. Si tu as un objet [tuile](/reference/color-coded-tilemap/tile) de la carte de tuiles, utilise simplement **place** pour poser un sprite dessus.

## Paramètres

* **sprite** : le sprite à déplacer sur la tuile.

## Exemple #example

Crée une carte avec plusieurs tuiles différentes. Crée un sprite de forme ronde. Choisis la tuile à la position (1, 1) de la carte et place le sprite dessus.

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
let tileDock = scene.getTile(1, 1)
tileDock.place(monSprite)
```

## Voir aussi #seealso

[obtenir la tuile](/reference/color-coded-tilemap/get-tile)

```package
color-coded-tilemap
```