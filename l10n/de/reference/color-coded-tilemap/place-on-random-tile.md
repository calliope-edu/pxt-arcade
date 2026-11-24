# auf zufällige Kachel setzen

Setze einen Sprite in die Mitte einer zufälligen Kachel in der Szene.

```sig
scene.placeOnRandomTile(null, 0)
```

Du kannst einen Sprite genau auf eine zufällige Kachel in der Kachelkarte setzen. Gib die Farbnummer des Kacheltyps an, auf dessen Kacheln der Sprite gesetzt werden soll.


## Parameter

* **sprite**: der Sprite, der auf die Kachel gesetzt wird.
* **color**: die Farb[nummer](/types/number) der Kachel, aus der zufällig gewählt wird.

## Beispiel #example

Erstelle eine Kachelkarte mit mehreren verschiedenen Kacheln. Erstelle einen runden Sprite. Setze den Sprite zufällig auf eine Kachel mit der Farbnummer `8`.

```blocks
let meinSprite: Sprite = null
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
meinSprite = sprites.create(img`
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
scene.placeOnRandomTile(meinSprite, 8)
```

## Siehe auch #seealso

[hole Kachel](/reference/color-coded-tilemap/get-tile)

```package
color-coded-tilemap
```