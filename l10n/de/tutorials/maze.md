# Labyrinth

### ~button /#tutorial:/tutorials/maze

Probier dieses Tutorial aus!

### ~

## {Einführung @unplugged}

Willkommen bei @boardname@! Lass uns ein Spiel bauen, in dem deine Spielfigur versucht, aus einem Labyrinth zu entkommen, bevor die Zeit abläuft!

![Labyrinth-Spiel in Aktion](/static/tutorials/maze/maze-game.gif)

## {Schritt 1}

Als Erstes erstellen wir unsere Spielfigur. Suche ``||variables(sprites):setze meinSprite auf||`` in ``||sprites:Sprites||``. Ziehe den Block in ``||loops:beim Start||``.

```blocks
let meinSprite: Sprite = sprites.create(img`
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

## {Schritt 2 @fullscreen}

Klicke auf das graue Kästchen in ``||variables(sprites):setze meinSprite auf||`` und zeichne das Bild deiner Spielfigur. Das kann alles sein, ein einfarbiges Quadrat oder eine Figur.

![Eine Figur für das Sprite zeichnen](/static/tutorials/maze/draw-sprite-figure.gif)

```blocks
let meinSprite: Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
```

## {Schritt 3}

Jetzt lassen wir unsere Spielfigur mit den Pfeiltasten des Controllers laufen. Nimm ``||controller:bewege meinSprite mit Knöpfen||`` aus ``||controller:Controller||`` und lege den Block unter ``||variables(sprites):setze meinSprite auf||``.

```blocks
let meinSprite: Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(meinSprite, 100, 100)
```

## {Schritt 4}

Als Nächstes erstellst du eine Tilemap, die dein Labyrinth wird. Ziehe ``||scene:setze Tilemap auf||`` aus ``||scene:Szene||`` in ``||loops:beim Start||``.
Klicke auf das graue Kästchen, um eine Tilemap zu öffnen, wähle Kacheln aus und zeichne mit den Werkzeugen dein eigenes Labyrinth.
Achte darauf, einen Weg vom Start zum Ziel frei zu lassen, damit man entkommen kann.
Lass am Start und am Ziel jeweils eine Kachel leer.

![Die Labyrinth-Tilemap zeichnen](/static/tutorials/maze/draw-maze.gif)

```blocks
let meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(meinSprite, 100, 100)
tiles.setTilemap(tilemap`level_0`)
```

## {Schritt 5}

Fülle die beiden leeren Felder, die du im vorherigen Schritt in der Tilemap gelassen hast, mit zwei neuen Kacheln:
eine, die nach einem Ausgang aussieht (zum Beispiel eine Tür oder eine Treppe),
und eine andere, die den Startpunkt markiert (zum Beispiel eine Leiter).
Achte darauf, dass diese Kacheln sonst nirgends in der Tilemap vorkommen.

```blocks
let meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(meinSprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
```

## {Schritt 6}

Suche ``||scene:platziere meinSprite oben auf zufällig||`` in ``||scene:Szene||``
und ziehe den Block in ``||loops:beim Start||`` hinter ``||scene:setze Tilemap auf||``.
Damit wird deine Figur auf eine der ausgewählten Kacheln gesetzt;
klicke auf die karierte Kachel und wähle die Kachel, die du als Startpunkt für die Spielfigur ausgesucht hast.

```blocks
let meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(meinSprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(meinSprite, sprites.dungeon.stairLadder)
```

## {Schritt 7}

Die Spielfigur ist jetzt außerhalb des Bildschirms, und das macht das Spiel etwas zu schwer;
suche ``||scene:Kamera folgt Sprite meinSprite||`` in ``||scene:Szene||``
und ziehe den Block ans Ende von ``||loops:beim Start||``.
Damit folgt die Kamera der Spielfigur, während sie sich über den Bildschirm bewegt.

```blocks
let meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(meinSprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(meinSprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(meinSprite)
```

## {Schritt 8}

Suche ``||scene:wenn Sprite vom Typ Player überlappt bei Position||`` in ``||scene:Szene||``.
Dieses Ereignis tritt immer dann ein, wenn die Spielfigur auf einer Kachel des gewählten Typs steht;
klicke auf das karierte Kästchen und wähle die Kachel, die du für das Ende des Labyrinths ausgesucht hast.

```blocks
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {

})
let meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(meinSprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(meinSprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(meinSprite)
```

## {Schritt 9}

Suche ``||game:Game over lose||`` in ``||game:Spiel||`` und ziehe den Block in ``||scene:wenn Sprite vom Typ Player überlappt bei Position||``.
Klicke auf ``LOSE``, um es in ``WIN`` zu ändern.
So gewinnt die Spielfigur, wenn sie den Ausgang berührt.

```blocks
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.gameOver(true)
})
let meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(meinSprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(meinSprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(meinSprite)
```

## {Schritt 10}

Suche ``||info:starte Countdown 10 (s)||`` in ``||info:Info||`` und ziehe den Block in ``||loops:beim Start||``.

```blocks
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.gameOver(true)
})
let meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(meinSprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(meinSprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(meinSprite)
info.startCountdown(10)
```

## {Schritt 11 @unplugged}

Jetzt hast du ein Spiel mit einem Ziel und Zeitdruck ... aber die Spielfigur kann durch alle Wände laufen!
Öffne den Tilemap-Editor erneut
und zeichne mit dem Werkzeug ``Draw walls`` Wände über alles, was die Spielfigur in der Tilemap aufhalten soll,
damit sie nicht hindurchlaufen kann.

```blocks
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairWest, function (sprite, location) {
    game.gameOver(true)
})
let meinSprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . 2 2 2 2 2 2 2 2 . . . . .
    . . 2 2 . . . . . . 2 . . . . .
    . . 2 . 1 . . . 1 . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 . . . 1 . . . . 2 . . . .
    . . 2 . . . . . . . . 2 . . . .
    . . 2 2 2 . . . . . 2 2 . . . .
    . . . . 2 2 2 2 2 2 2 . . . . .
    . . . . . . 2 . . . . . . . . .
    . 2 2 2 . . 2 . . . . 2 . . . .
    . . . 2 2 2 2 2 2 2 2 2 . . . .
    . . . . . . 2 . . . . . . . . .
    . . . . . . 2 . . . . . . . . .
    . . . 2 2 2 . 2 . . . . . . . .
    . . . 2 . . . . 2 2 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(meinSprite, 100, 100)
tiles.setTilemap(tilemap`level_1`)
tiles.placeOnRandomTile(meinSprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(meinSprite)
info.startCountdown(10)
```

## {Geschafft}

Glückwunsch, dein Labyrinth-Spiel ist fertig! Jetzt kannst du dein erstes Spiel spielen. Schaffst du es, aus dem Labyrinth zu entkommen?

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
        "data": "MTAxMDAwMTAwMDAxMDIwMjBjMGMxODAxMDIwYzAyMDIxODBjMDIwMjAzMGEwZjBiMGIwYjBiMDkwYjBiMGIwYjBiMGIwYjBmMTcwMDBiMGIwYjBiMGIwOTBiMGIwYjBiMGYwYjBiMGIwZDA5MGIwYjAxMGMwYzFiMGYwYjFhMDcwNzEwMGIwYjBkMGEwYjBiMDkwYjBiMGIwYjBiMGQwZjBiMDkwYjBiMDQwOTBmMGIwYTBiMGIwZjBiMGIwZDBiMGIwYTBiMGIwNDEyMGIwYjBhMGIwYjA5MGYwYjBkMGIwZjA5MGYwYjE3MGEwYjBiMDgxMDBmMDkwYjBiMGQwZjBiMTIwYjBiMGQwOTBiMGYwYjA4MDYwOTBiMGIwZDBiMGIwYTBiMGIwNDBhMGIwYjBiMGYwYjA5MGYwYjBkMGIwYjA5MGYwYjBkMGEwYjBiMGIwYjBiMDkwYjBiMGQwYjBiMDkwYjBiMDQwOTBiMGIwYzBjMGMxYjBiMGYwYjBiMGYwOTBiMGIwNDEyMGIwYjBiMGIwYjBmMGIwYjBiMGIwYjA5MGIwYjE3MGEwYjBiMGIwYjBiMDkwYjBiMGIwYjBiMGEwYjAwMDQwOTBmMGIwYjBiMGYwOTBiMGIwZjBiMGIwOTBmMGIwNDA4MDcwNzE5MDcwNjA4MDYwNzE5MDYwNjA4MDYwNzA1MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.dungeon.greenOuterNorthWest",
            "sprites.dungeon.greenOuterNorth0",
            "sprites.dungeon.greenOuterNorthEast",
            "sprites.dungeon.greenOuterEast0",
            "sprites.dungeon.greenOuterSouthWest",
            "sprites.dungeon.greenOuterSouth0",
            "sprites.dungeon.greenOuterSouth1",
            "sprites.dungeon.greenOuterSouthEast",
            "sprites.dungeon.greenOuterWest1",
            "sprites.dungeon.greenOuterWest0",
            "sprites.dungeon.floorDark2",
            "sprites.dungeon.greenOuterNorth1",
            "sprites.dungeon.greenOuterEast1",
            "sprites.dungeon.floorDark1",
            "sprites.dungeon.floorDark5",
            "sprites.dungeon.greenInnerNorthEast",
            "sprites.dungeon.purpleInnerNorthWest",
            "sprites.dungeon.greenOuterWest2",
            "sprites.dungeon.stairWest",
            "sprites.dungeon.stairEast",
            "sprites.dungeon.stairLarge",
            "sprites.dungeon.greenInnerSouthWest",
            "sprites.dungeon.greenOuterEast2",
            "sprites.dungeon.greenOuterNorth2",
            "sprites.dungeon.greenOuterSouth2",
            "sprites.dungeon.greenInnerNorthWest",
            "sprites.dungeon.greenInnerSouthEast",
            "myTiles.transparency16"
        ]
    },
    "level_1": {
        "id": "level_1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxMDAwMTAwMDAxMDIwMjBjMGMxODAxMDIwYzAyMDIxODBjMDIwMjAzMGEwZjBiMGIwYjBiMDkwYjBiMGIwYjBiMGIwYjBmMTcxMzBiMGIwYjBiMGIwOTBiMGIwYjBiMGYwYjBiMGIwZDA5MGIwYjAxMGMwYzFiMGYwYjFhMDcwNzEwMGIwYjBkMGEwYjBiMDkwYjBiMGIwYjBiMGQwZjBiMDkwYjBiMDQwOTBmMGIwYTBiMGIwZjBiMGIwZDBiMGIwYTBiMGIwNDEyMGIwYjBhMGIwYjA5MGYwYjBkMGIwZjA5MGYwYjE3MGEwYjBiMDgxMDBmMDkwYjBiMGQwZjBiMTIwYjBiMGQwOTBiMGYwYjA4MDYwOTBiMGIwZDBiMGIwYTBiMGIwNDBhMGIwYjBiMGYwYjA5MGYwYjBkMGIwYjA5MGYwYjBkMGEwYjBiMGIwYjBiMDkwYjBiMGQwYjBiMDkwYjBiMDQwOTBiMGIwYzBjMGMxYjBiMGYwYjBiMGYwOTBiMGIwNDEyMGIwYjBiMGIwYjBmMGIwYjBiMGIwYjA5MGIwYjE3MGEwYjBiMGIwYjBiMDkwYjBiMGIwYjBiMGEwYjFjMDQwOTBmMGIwYjBiMGYwOTBiMGIwZjBiMGIwOTBmMGIwNDA4MDcwNzE5MDcwNjA4MDYwNzE5MDYwNjA4MDYwNzA1MDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.dungeon.greenOuterNorthWest",
            "sprites.dungeon.greenOuterNorth0",
            "sprites.dungeon.greenOuterNorthEast",
            "sprites.dungeon.greenOuterEast0",
            "sprites.dungeon.greenOuterSouthWest",
            "sprites.dungeon.greenOuterSouth0",
            "sprites.dungeon.greenOuterSouth1",
            "sprites.dungeon.greenOuterSouthEast",
            "sprites.dungeon.greenOuterWest1",
            "sprites.dungeon.greenOuterWest0",
            "sprites.dungeon.floorDark2",
            "sprites.dungeon.greenOuterNorth1",
            "sprites.dungeon.greenOuterEast1",
            "sprites.dungeon.floorDark1",
            "sprites.dungeon.floorDark5",
            "sprites.dungeon.greenInnerNorthEast",
            "sprites.dungeon.purpleInnerNorthWest",
            "sprites.dungeon.greenOuterWest2",
            "sprites.dungeon.stairWest",
            "sprites.dungeon.stairEast",
            "sprites.dungeon.stairLarge",
            "sprites.dungeon.greenInnerSouthWest",
            "sprites.dungeon.greenOuterEast2",
            "sprites.dungeon.greenOuterNorth2",
            "sprites.dungeon.greenOuterSouth2",
            "sprites.dungeon.greenInnerNorthWest",
            "sprites.dungeon.greenInnerSouthEast",
            "sprites.dungeon.stairLadder"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```