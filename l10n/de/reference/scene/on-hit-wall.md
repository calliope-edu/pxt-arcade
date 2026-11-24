# wenn Wand getroffen

Führt Code aus, wenn ein Sprite eine Wandkachel berührt.

```sig
scene.onHitWall(SpriteKind.Player, function (sprite, location) { })
```

Du kannst erkennen, wann ein bewegtes Sprite eine Wandkachel in der Kachelkarte berührt. Wenn dein Sprite eine Kachel berührt, die als Wand gesetzt ist, kannst du Code ausführen lassen. Du wählst die Sprite-Art (**kind**), die geprüft werden soll.

Wenn ein Sprite der gewählten Art eine Wand trifft, bekommst du es im Parameter **sprite** von **handler**, zusammen mit der Position (**location**) der berührten Kachel.

Ein Treffer an der Wand wird erkannt, wenn die Außenkanten des Sprite-Bilds die Kachel berühren. Wenn bei einem Sprite das ``ghost``-Flag gesetzt ist, wird kein Kontakt mit der Wandkachel bemerkt.

## Parameter

* **kind**: die Art von Sprite, bei der auf einen Wandtreffer geprüft wird.
* **handler**: der Code, der beim Kontakt ausgeführt wird. Dem Handler werden diese Parameter übergeben:
>* **sprite**: das Sprite, das die Wandkachel getroffen hat.
>* **location**: die Position der Wand in der Kachelkarte, die das Sprite berührt hat.

## Beispiel #example

Erstelle eine Kachelkarte mit Wandkacheln an den Rändern der Szene. Setze ein Sprite in Bewegung und lass es von Wandkacheln abprallen. Wenn das Sprite die Wandkacheln berührt, erzeuge einen kurzen Feuereffekt am Sprite.

```blocks
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    sprite.startEffect(effects.fire, 200)
})
tiles.setTilemap(tilemap`level1`)
let meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . 1 1 2 2 2 2 2 2 1 1 . . . 
    . . . 1 2 2 2 2 2 2 2 2 1 . . . 
    . . 1 2 2 2 2 2 2 2 2 2 2 1 . . 
    . . 1 2 2 2 2 2 2 2 2 2 2 1 . . 
    . . 1 2 2 2 2 2 2 2 2 2 2 1 . . 
    . . 1 2 2 2 2 2 2 2 2 2 2 1 . . 
    . . 1 2 2 2 2 2 2 2 2 2 2 1 . . 
    . . 1 2 2 2 2 2 2 2 2 2 2 1 . . 
    . . . 1 2 2 2 2 2 2 2 2 1 . . . 
    . . . 1 1 2 2 2 2 2 2 1 1 . . . 
    . . . . . 1 1 1 1 1 1 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
meinSprite.setBounceOnWall(true)
meinSprite.vx = 80
meinSprite.vy = 70
```

## Siehe auch #seealso

[Kachelposition abrufen](/reference/scene/get-tile-location),
[setze Wand an](/reference/scene/set-wall-at)

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAADu7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7g==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true,
        "displayName": "myTile"
    },
    "level1": {
        "id": "level1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDEwMTAwMDAwMDAwMDAwMDAwMDAwMTAxMDAwMDAwMDAwMDAwMDAwMDAxMDEwMDAwMDAwMDAwMDAwMDAwMDEwMTAwMDAwMDAwMDAwMDAwMDAwMTAxMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEyMjIyMjIyMjIyMDIwMDAwMDAyMDAyMDAwMDAwMjAwMjAwMDAwMDIwMDIwMDAwMDAyMDAyMDAwMDAwMjAwMjAwMDAwMDIwMjIyMjIyMjIyMg==",
        "tileset": [
            "myTiles.transparency16",
            "myTiles.tile1"
        ],
        "displayName": "level1"
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```