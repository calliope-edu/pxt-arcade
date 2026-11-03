# Brotkrumen-Spur

## {Einführung @unplugged}

Wenn du ``||sprites:Sprites||`` auf einer ``||scene:Kachelübersicht||`` platzierst, kannst du tolle Level
zum Erkunden bauen. Diese ``||sprites:Sprites||`` können Dekoration sein
oder Objekte, mit denen der Spieler etwas machen kann.

Hier erstellst du eine Waldszene, in der Brotkrumen auf dem Gras liegen.

![Eine Brotkrumenspur entsteht](/static/concepts/breadcrumb-trail/breadcrumb-trail.gif)

## {Schritt 1}

Suche ``||scene:setze Tilemap auf||`` in ``||scene:Szene||``
und ziehe ihn in ``||loops:beim Start||``.
Öffne den Kachel-Editor und fülle die Fläche mit dem Farbeimer mit einem Gras-Hintergrund.

```blocks
tiles.setTilemap(tilemap`level_0`)
```

## {Schritt 2}

Öffne den Bildeditor für die ``||scene:Kachelübersicht||`` noch einmal.
Zeichne mit einer anderen Kachel einen Weg von **oben links** nach **unten rechts**.

```blocks
tiles.setTilemap(tilemap`level_1`)
```

## {Schritt 3}

Suche ``||loops:für Element value von list||``
und setze ihn unter den Block ``||scene:setze Tilemap auf||``.

```blocks
let list: number[] = []
tiles.setTilemap(tilemap`level_1`)
for (let value of list) {

}
```

## {Schritt 4}

Suche ``||scene:Array aller Standorte||`` in ``||scene:Szene||``.
Setze ihn im Block ``||loops:für Element value von list||`` auf ``||variables:list||``.
Wähle die Kachel aus, mit der du die Diagonale über die Karte gezeichnet hast.
Die Schleife läuft jetzt einmal für jede Kachel dieser Art in der Kachelübersicht.

```blocks
tiles.setTilemap(tilemap`level_1`)
for (let value of tiles.getTilesByType(sprites.castle.tileDarkGrass2)) {

}
```

## {Schritt 5}

Suche ``||variables(sprites):setze mySprite auf Sprite vom Typ Player||`` in ``||sprites:Sprites||``
und ziehe ihn in die Schleife ``||loops:für Element||``.
Zeichne Brotkrumen als Bild für das Sprite.
So entsteht für jede der
ausgewählten ``||scene:Kacheln||`` in der ``||scene:Kachelübersicht||`` ein neues ``||sprites:Sprite||``.

```blocks
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level_1`)
for (let value of tiles.getTilesByType(sprites.castle.tileDarkGrass2)) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . d . . . . . . d . .
        . . . . . d e d . . . . . . . .
        . . . . . . d e d . . . . . . .
        . . . . . . . d . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . d d . . . . .
        . . . . . . . . . e e d . . . .
        . . . . . . . . . d e d . . . .
        . . . . e . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . d d d d . .
        . . . . . . . . . . d e e d . .
        . . . . d . . . . . d e d d . .
        . . . . . . . . . . d d d . . .
    `, SpriteKind.Player)
}
```

## {Schritt 6}

Suche ``||scene:platziere mySprite oben auf tilemap col row||``
und setze ihn unter ``||variables(sprites):setze mySprite auf||``.
Ziehe ``||variables:value||`` aus der ``||loops:für-Schleife||`` auf ``||variables:tilemap col row||``.
Achte darauf, dass ``||variables(noclick):mySprite||`` die ``||variables:Variable||`` für das
``||sprites:Sprite||`` ist, das du gerade erstellt hast.
So landen die Brotkrumen auf jeder ``||scene:Kachel||`` der Diagonale.

```blocks
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level_1`)
for (let value of tiles.getTilesByType(sprites.castle.tileDarkGrass2)) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . d . . . . . . d . .
        . . . . . d e d . . . . . . . .
        . . . . . . d e d . . . . . . .
        . . . . . . . d . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . d d . . . . .
        . . . . . . . . . e e d . . . .
        . . . . . . . . . d e d . . . .
        . . . . e . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . d d d d . .
        . . . . . . . . . . d e e d . .
        . . . . d . . . . . d e d d . .
        . . . . . . . . . . d d d . . .
    `, SpriteKind.Player)
    tiles.placeOnTile(mySprite, value)
}
```

## {Schritt 7}

Wenn die Kachel unter dem Sprite genauso aussehen soll wie die anderen,
damit sie nicht auffällt,
suche ``||scene:setzte auf tilemap col row||`` in ``||scene:Szene||``
und setze ihn unter ``||variables(sprites):setze mySprite auf||``.
Ziehe ``||variables:value||`` auf ``||scene:tilemap col row||``
und wähle die Kachel, zu der sie werden soll (hier dieselbe wie die anderen Kacheln).

![Beispiel, wie du diesen Schritt abschließt](/static/concepts/breadcrumb-trail/removing-placer-tiles.gif)

```blocks
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level_1`)
for (let value of tiles.getTilesByType(sprites.castle.tileDarkGrass2)) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . d . . . . . . d . .
        . . . . . d e d . . . . . . . .
        . . . . . . d e d . . . . . . .
        . . . . . . . d . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . d d . . . . .
        . . . . . . . . . e e d . . . .
        . . . . . . . . . d e d . . . .
        . . . . e . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . d d d d . .
        . . . . . . . . . . d e e d . .
        . . . . d . . . . . d e d d . .
        . . . . . . . . . . d d d . . .
    `, SpriteKind.Player)
    tiles.placeOnTile(mySprite, value)
    tiles.setTileAt(value, sprites.castle.tileDarkGrass3)
}
```

## {Geschafft}

Glückwunsch, dein Wald ist fertig! Wenn du sehen willst, wie die Brotkrumen nacheinander erscheinen,
füge ein ``||loops:pausiere||`` in die Schleife ``||loops:für Element||`` ein.

```blocks
let mySprite: Sprite = null
tiles.setTilemap(tilemap`level_1`)
for (let value of tiles.getTilesByType(sprites.castle.tileDarkGrass2)) {
    mySprite = sprites.create(img`
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . d . . . . . . d . .
        . . . . . d e d . . . . . . . .
        . . . . . . d e d . . . . . . .
        . . . . . . . d . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . d d . . . . .
        . . . . . . . . . e e d . . . .
        . . . . . . . . . d e d . . . .
        . . . . e . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . d d d d . .
        . . . . . . . . . . d e e d . .
        . . . . d . . . . . d e d d . .
        . . . . . . . . . . d d d . . .
    `, SpriteKind.Player)
    tiles.placeOnTile(mySprite, value)
    tiles.setTileAt(value, sprites.castle.tileDarkGrass3)
    pause(350)
}
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
        "data": "MTAxMDAwMTAwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.castle.tileDarkGrass3"
        ]
    },
    "level_1": {
        "id": "level_1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxMDAwMTAwMDAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMjAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMjAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMjAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAyMDIwMjAyMDIwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMjAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAyMDIwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMjAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMjAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAyMDIwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMjAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMjAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMjAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.castle.tileDarkGrass3",
            "sprites.castle.tileDarkGrass2"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```