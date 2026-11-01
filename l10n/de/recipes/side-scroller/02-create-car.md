# Seitlich scrollendes Rennen: Auto erstellen

## {Einführung @unplugged}

Erstelle ein bewegtes Sprite, um ein Rennauto über eine Rennstrecken-Tilemap fahren zu lassen.

![Auto erstellen](/static/recipes/side-scroller/02-create-car.gif)

## {Schritt 1 - Ein Spieler-Sprite erstellen}

Ziehe aus der Werkzeugkasten-Schublade ``||sprites:Sprites||`` einen ``||variables(sprites):setze mySprite auf||``-Block in den ``||loops:beim Start||``-Block, unter den ``||scene:setze Tilemap auf||``-Block.

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
```

## {Schritt 2 - Dein Auto-Sprite gestalten}

Klicke im ``||sprites:Sprite||``-Block auf das graue Bild-Oval und wähle ein Bild aus der Galerie oder zeichne dein eigenes **Auto**-Sprite.

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . d 3 3 3 3 3 3 c . . . .
    . . . c d 3 3 3 3 3 3 c c . . .
    . . c c d d d d d d 3 c c d . .
    . . c 3 a a a a a a a b c d 3 3
    . 3 3 a b b a b b b a a b d 3 3
    . 3 a b b b a b b b b a 3 3 3 3
    . a a 3 3 3 a 3 3 3 3 3 a 3 3 3
    . a a a a a a f a a a f a 3 d d
    . a a a a a a f a a f a a a 3 d
    . a a a a a a f f f a a a a a a
    . a f f f f a a a a f f f a a a
    . . f f f f f a a f f f f f a .
    . . . f f f . . . . f f f f . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
```

## {Schritt 3 - Schwerkraft hinzufügen}

Jetzt fügen wir Code hinzu, der die Schwerkraft nachahmt, die unser Auto nach unten zieht. Das machen wir, indem wir dem Auto eine Beschleunigung geben.

Ziehe aus der Werkzeugkasten-Schublade ``||sprites:Sprites||`` einen ``||sprites:setze mySprite x auf 0||``-Block und lege ihn unter den ``||variables(sprites):setze mySprite auf||``-Block.

## {Schritt 4 - Beschleunigung festlegen}

Klicke im ``||sprites:setze mySprite x auf 0||``-Block auf das Dropdown-Menü der Eigenschaft ``||sprites:x||`` und wähle ``||sprites:ay (Beschleunigung y)||`` für die senkrechte Achse. Setze den Wert auf ``400``. Das zieht unser Auto nach unten, so wie die Schwerkraft.

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . d 3 3 3 3 3 3 c . . . .
    . . . c d 3 3 3 3 3 3 c c . . .
    . . c c d d d d d d 3 c c d . .
    . . c 3 a a a a a a a b c d 3 3
    . 3 3 a b b a b b b a a b d 3 3
    . 3 a b b b a b b b b a 3 3 3 3
    . a a 3 3 3 a 3 3 3 3 3 a 3 3 3
    . a a a a a a f a a a f a 3 d d
    . a a a a a a f a a f a a a 3 d
    . a a a a a a f f f a a a a a a
    . a f f f f a a a a f f f a a a
    . . f f f f f a a f f f f f a .
    . . . f f f . . . . f f f f . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
mySprite.ay = 400
```

## {Schritt 5 - Das Auto fahren lassen}

Jetzt fügen wir Code hinzu, damit unser Auto von selbst vorwärtsfährt.

Ziehe aus der Werkzeugkasten-Schublade ``||sprites:Sprites||`` noch einen ``||sprites:setze mySprite x auf 0||``-Block in den ``||loops:beim Start||``-Block. Klicke diesmal auf das Dropdown-Menü der Eigenschaft ``||sprites:x||`` und wähle ``||sprites:vx (Geschwindigkeit x)||`` für die waagerechte X-Achse. Setze den Wert auf ``100``. So bewegt sich unser Auto mit dieser Geschwindigkeit nach rechts über den Bildschirm.

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . d 3 3 3 3 3 3 c . . . .
    . . . c d 3 3 3 3 3 3 c c . . .
    . . c c d d d d d d 3 c c d . .
    . . c 3 a a a a a a a b c d 3 3
    . 3 3 a b b a b b b a a b d 3 3
    . 3 a b b b a b b b b a 3 3 3 3
    . a a 3 3 3 a 3 3 3 3 3 a 3 3 3
    . a a a a a a f a a a f a 3 d d
    . a a a a a a f a a f a a a 3 d
    . a a a a a a f f f a a a a a a
    . a f f f f a a a a f f f a a a
    . . f f f f f a a f f f f f a .
    . . . f f f . . . . f f f f . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
mySprite.ay = 400
mySprite.vx = 100
```

## {Schritt 6 - Kamera folgt dem Sprite}

Im Spielsimulator siehst du, dass unser Auto aus dem Bildschirm fährt! Wir brauchen Code, damit die Kamera unserem Auto folgt.

Ziehe aus der Werkzeugkasten-Schublade ``||scene:Szene||`` einen ``||scene:Kamera folgt Sprite||``-Block und lege ihn unter den letzten ``||sprites:setze mySprite||``-Block.

```blocks
scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . d 3 3 3 3 3 3 c . . . .
    . . . c d 3 3 3 3 3 3 c c . . .
    . . c c d d d d d d 3 c c d . .
    . . c 3 a a a a a a a b c d 3 3
    . 3 3 a b b a b b b a a b d 3 3
    . 3 a b b b a b b b b a 3 3 3 3
    . a a 3 3 3 a 3 3 3 3 3 a 3 3 3
    . a a a a a a f a a a f a 3 d d
    . a a a a a a f a a f a a a 3 d
    . a a a a a a f f f a a a a a a
    . a f f f f a a a a f f f a a a
    . . f f f f f a a f f f f f a .
    . . . f f f . . . . f f f f . .
    . . . . . . . . . . . . . . . .
    `, SpriteKind.Player)
mySprite.ay = 400
mySprite.vx = 100
scene.cameraFollowSprite(mySprite)
```

## {Geschafft @unplugged}

Auf dem Weg zur Ziellinie gibt es Hindernisse, also brauchen wir eine Möglichkeit, darüber zu springen. Füge als Nächstes eine Sprungsteuerung für das Auto hinzu.

|      |
|:----:|
| [![Rennauto springt](/static/recipes/side-scroller/03-control-car.gif)](#recipe:/recipes/side-scroller/03-control-car) |
| [**Lass dein Auto springen**](#recipe:/recipes/side-scroller/03-control-car) |

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