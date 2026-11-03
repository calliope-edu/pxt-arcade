# Die Szene gestalten

## {Einführung @unplugged}

Karten und Level machen ein Spiel spannend zum Erkunden. Mit ``||scene:Kachelübersichten||`` erstellst du Karten, die der Spieler erkunden kann. Du kannst sogar festlegen, dass der Spieler an bestimmten Stellen nicht weiterkommt.

## {Schritt 1 @fullscreen}

Suche ``||scene:setze Tilemap auf||`` in ``||scene:Szene||``. Ziehe ihn in ``||loops:beim Start||``.

```blocks
tiles.setTilemap(tilemap`level`)
```

## {Schritt 2 @fullscreen}

Klicke auf das graue Feld in ``||scene:setze Tilemap auf||``, um den Kachel-Editor zu öffnen. Wähle eine Kachel aus der Galerie (oder erstelle unter `My Tiles` deine eigene) und zeichne eine kleine Karte für die ``||scene:Kachelübersicht||``.

Starte den Code und schau: Die Kachelübersicht wird als Hintergrund angezeigt. Jedes Pixel deiner Zeichnung im Bildeditor erscheint auf dem Bildschirm als 16x16 großes Quadrat.

![Beispiel: eine Kachel erstellen und in die Kachelübersicht einfügen](/static/concepts/setting-the-scene/make-a-tile.gif)

```blocks
tiles.setTilemap(tilemap`level_0`)

```

## {Schritt 3 @fullscreen}

Suche ``||variables(sprites):setze mySprite auf||`` und ziehe ihn in ``||loops:beim Start||``, um ein ``||sprites:Sprite||`` zu erstellen. Öffne den Bildeditor für das ``||sprites:Sprite||`` und zeichne ein Bild, mit dem es auf dem Bildschirm erscheint.

```blocks
tiles.setTilemap(tilemap`level_0`)
let mySprite = sprites.create(img`
. . . . . . f f f f . . . . . .
. . . . f f f 2 2 f f f . . . .
. . . f f f 2 2 2 2 f f f . . .
. . f f f e e e e e e f f f . .
. . f f e 2 2 2 2 2 2 e e f . .
. . f e 2 f f f f f f 2 e f . .
. . f f f f e e e e f f f f . .
. f f e f b f 4 4 f b f e f f .
. f e e 4 1 f d d f 1 4 e e f .
. . f e e d d d d d d e e f . .
. . . f e e 4 4 4 4 e e f . . .
. . e 4 f 2 2 2 2 2 2 f 4 e . .
. . 4 d f 2 2 2 2 2 2 f d 4 . .
. . 4 4 f 4 4 5 5 4 4 f 4 4 . .
. . . . . f f f f f f . . . . .
. . . . . f f . . f f . . . . .
`, SpriteKind.Player)
```

## {Schritt 4 @fullscreen}

Suche ``||controller:bewege mySprite mit Knöpfen||`` und ziehe ihn in ``||loops:beim Start||`` unter ``||variables(sprites):setze mySprite auf||``.

Damit kann der Spieler die Figur über die Karte auf dem Bildschirm bewegen. Aber es gibt ein Problem: Die Figur läuft einfach durch die schönen Kacheln, die wir gestaltet haben! Das lösen wir, indem wir sie alle zu ``||scene:Wand||``-Kacheln machen.

```blocks
tiles.setTilemap(tilemap`level_0`)
let mySprite = sprites.create(img`
. . . . . . f f f f . . . . . .
. . . . f f f 2 2 f f f . . . .
. . . f f f 2 2 2 2 f f f . . .
. . f f f e e e e e e f f f . .
. . f f e 2 2 2 2 2 2 e e f . .
. . f e 2 f f f f f f 2 e f . .
. . f f f f e e e e f f f f . .
. f f e f b f 4 4 f b f e f f .
. f e e 4 1 f d d f 1 4 e e f .
. . f e e d d d d d d e e f . .
. . . f e e 4 4 4 4 e e f . . .
. . e 4 f 2 2 2 2 2 2 f 4 e . .
. . 4 d f 2 2 2 2 2 2 f d 4 . .
. . 4 4 f 4 4 5 5 4 4 f 4 4 . .
. . . . . f f f f f f . . . . .
. . . . . f f . . f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
```

## {Schritt 5 @fullscreen}

Öffne den Kachel-Editor und klicke auf das Wand-Symbol über `Gallery`.
Zeichne damit Wände über die Teile deiner Karte, durch die der Spieler nicht hindurchgehen soll.

![Beispiel: Wände im Kachel-Editor zeichnen](/static/concepts/setting-the-scene/drawing-walls.gif)

```blocks
tiles.setTilemap(tilemap`level_1`)
let mySprite = sprites.create(img`
    . . . . . . f f f f . . . . . .
    . . . . f f f 2 2 f f f . . . .
    . . . f f f 2 2 2 2 f f f . . .
    . . f f f e e e e e e f f f . .
    . . f f e 2 2 2 2 2 2 e e f . .
    . . f e 2 f f f f f f 2 e f . .
    . . f f f f e e e e f f f f . .
    . f f e f b f 4 4 f b f e f f .
    . f e e 4 1 f d d f 1 4 e e f .
    . . f e e d d d d d d e e f . .
    . . . f e e 4 4 4 4 e e f . . .
    . . e 4 f 2 2 2 2 2 2 f 4 e . .
    . . 4 d f 2 2 2 2 2 2 f d 4 . .
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . .
    . . . . . f f f f f f . . . . .
    . . . . . f f . . f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)

```

## {Geschafft @fullscreen}

Glückwunsch, deine erste Kachelübersicht ist fertig! Bewege die Figur über den Bildschirm oder erstelle weitere Arten von ``||scene:Kacheln||``. Wenn du die ``||scene:Kachelübersicht||`` vergrößerst, kannst du eine größere Karte bauen. Nutze dann ``||scene:Kamera folgt Sprite mySprite||``, damit die Kamera immer auf deiner Figur bleibt und du die ganze Karte erkunden kannst!

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
        "data": "hwQQABAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVUREREREREREREREREREREREREREREREREREREREREREVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVERERERERERERERERERERERERERERERERERERERERERA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level_0": {
        "id": "level_0",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMDAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAwMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDAwMDAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMDAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.tile0",
            "myTiles.tile1"
        ]
    },
    "level": {
        "id": "level",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": []
    },
    "level_1": {
        "id": "level_1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMDAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAwMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDAwMDAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDEwMDAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAwMDAyMDAwMDAwMDAwMDIwMDAwMjAwMDAwMDAwMDAyMDAwMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAyMDAwMDAwMDAwMDAyMDIyMDIwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.tile0",
            "myTiles.tile1"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```