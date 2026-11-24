# Fässern ausweichen

## {Einführung @unplugged}

Baue ein Actionspiel, in dem die Spielfigur schnell reagieren muss, um rasenden Fässern auszuweichen. Wirst du getroffen, heißt es **GAME OVER!**

![Das Spiel Fässern ausweichen in Aktion](/static/lessons/barrel-dodger/barrel-dodger.gif)

## {Schritt 1}

Lass uns unten im Bild eine Plattform als Boden bauen.

Nimm ``||scene:setze Tilemap auf||`` und lege ihn in ``||loops:beim Start||``.
Klicke auf das graue Feld, um den ``tilemap editor`` zu öffnen.
Stelle unten links die Größe der Tilemap auf ``10x8``
und male eine Plattform in die beiden untersten Reihen der Tilemap.
Klicke zum Schluss auf den Knopf `Wall` und fülle diese beiden Reihen mit Wand-Kacheln.

![Beispiel: eine Tilemap malen](/static/lessons/barrel-dodger/draw-tilemap.gif)

```blocks
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
    `
}
// @highlight
tiles.setTilemap(tiles.createTilemap(
    hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303030303030303030303030303030303030303`,
    img`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2
    `,
    [myTiles.tile0,sprites.builtin.brick,sprites.builtin.oceanDepths0,sprites.builtin.oceanDepths3],
    TileScale.Sixteen
))
```

## {Schritt 2}

Suche ``||variables(sprites):setze meinSprite auf||`` in ``||sprites:Sprites||``. Ziehe ihn in ``||loops:beim Start||`` und male deine Spielfigur.

```blocks
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
    `
}
// @highlight
tiles.setTilemap(tiles.createTilemap(
    hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303030303030303030303030303030303030303`,
    img`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2
    `,
    [myTiles.tile0,sprites.builtin.brick,sprites.builtin.oceanDepths0,sprites.builtin.oceanDepths3],
    TileScale.Sixteen
))
// @highlight
let meinSprite: Sprite = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . .
    . . . . . f 5 5 5 f f . . . . .
    . . . . f 1 5 2 5 1 6 f . . . .
    . . . f 1 6 6 6 6 6 1 6 f . . .
    . . . f 6 6 f f f f 6 1 f . . .
    . . . f 6 f f d d f f 6 f . . .
    . . f 6 f d f d d f d f 6 f . .
    . . f 6 f d 3 d d 3 d f 6 f . .
    . . f 6 6 f d d d d f 6 6 f . .
    . f 6 6 f 3 f f f f 3 f 6 6 f .
    . . f f d 3 5 3 3 5 3 d f f . .
    . . f d d f 3 5 5 3 f d d f . .
    . . . f f 3 3 3 3 3 3 f f . . .
    . . . f 3 3 5 3 3 5 3 3 f . . .
    . . . f f f f f f f f f f . . .
    . . . . . f f . . f f . . . . .
`, SpriteKind.Player)
```

## {Schritt 3}

Öffne den Tilemap-Editor und suche die Kachelposition, auf die du deinen Sprite setzen willst (Tipp: Es ist 1, 5!). Die Position siehst du unten links im Editor.

Benutze den Block ``||scene:platziere meinSprite oben auf Tilemap Spalte Reihe||``, um deine Spielfigur auf diese Kachel zu setzen.

```blocks
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
    `
}
// @highlight
tiles.setTilemap(tiles.createTilemap(
    hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303030303030303030303030303030303030303`,
    img`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2
    `,
    [myTiles.tile0,sprites.builtin.brick,sprites.builtin.oceanDepths0,sprites.builtin.oceanDepths3],
    TileScale.Sixteen
))
let meinSprite: Sprite = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . .
    . . . . . f 5 5 5 f f . . . . .
    . . . . f 1 5 2 5 1 6 f . . . .
    . . . f 1 6 6 6 6 6 1 6 f . . .
    . . . f 6 6 f f f f 6 1 f . . .
    . . . f 6 f f d d f f 6 f . . .
    . . f 6 f d f d d f d f 6 f . .
    . . f 6 f d 3 d d 3 d f 6 f . .
    . . f 6 6 f d d d d f 6 6 f . .
    . f 6 6 f 3 f f f f 3 f 6 6 f .
    . . f f d 3 5 3 3 5 3 d f f . .
    . . f d d f 3 5 5 3 f d d f . .
    . . . f f 3 3 3 3 3 3 f f . . .
    . . . f 3 3 5 3 3 5 3 3 f . . .
    . . . f f f f f f f f f f . . .
    . . . . . f f . . f f . . . . .
`, SpriteKind.Player)
// @highlight
tiles.placeOnTile(meinSprite, tiles.getTileLocation(1, 5))
```

## {Schritt 4}

Lass den Sprite springen, wenn wir einen Knopf drücken. Dafür bewegen wir
die Spielfigur im Ereignis ``||controller:wenn A Knopf gedrückt||`` nach oben. Lass den Sprite in diesem Ereignis mit ``||sprites:vy (Geschwindkeit y)||`` nach oben fliegen. Nimm `-200` als Wert für `vy`.

```blocks
let meinSprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    meinSprite.vy = -200
})
```

## {Schritt 5}

Ziehe ``||sprites:setze meinSprite x||`` in ``||loops:beim Start||``, klicke auf das Dropdown-Menü und wähle ``||sprites:ay (Beschleunigung y)||``. Setze den Wert auf `500`, damit die Figur von der „Schwerkraft“ nach unten gezogen wird.

```blocks
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
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
    `
}
// @highlight
tiles.setTilemap(tiles.createTilemap(
    hex`0a0008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000303030303030303030303030303030303030303`,
    img`
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        . . . . . . . . . .
        2 2 2 2 2 2 2 2 2 2
        2 2 2 2 2 2 2 2 2 2
    `,
    [myTiles.tile0,sprites.builtin.brick,sprites.builtin.oceanDepths0,sprites.builtin.oceanDepths3],
    TileScale.Sixteen
))
let meinSprite: Sprite = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . .
    . . . . . f 5 5 5 f f . . . . .
    . . . . f 1 5 2 5 1 6 f . . . .
    . . . f 1 6 6 6 6 6 1 6 f . . .
    . . . f 6 6 f f f f 6 1 f . . .
    . . . f 6 f f d d f f 6 f . . .
    . . f 6 f d f d d f d f 6 f . .
    . . f 6 f d 3 d d 3 d f 6 f . .
    . . f 6 6 f d d d d f 6 6 f . .
    . f 6 6 f 3 f f f f 3 f 6 6 f .
    . . f f d 3 5 3 3 5 3 d f f . .
    . . f d d f 3 5 5 3 f d d f . .
    . . . f f 3 3 3 3 3 3 f f . . .
    . . . f 3 3 5 3 3 5 3 3 f . . .
    . . . f f f f f f f f f f . . .
    . . . . . f f . . f f . . . . .
`, SpriteKind.Player)
tiles.placeOnTile(meinSprite, tiles.getTileLocation(1, 5))
// @highlight
meinSprite.ay = 500
```

## {Schritt 6}

Der Sprite soll nur springen, wenn er auf dem Boden steht. Ziehe also eine Bedingung ``||logic:wenn dann||`` in ``||controller:wenn A Knopf gedrückt||``. Ersetze `true` durch ``||scene:wenn meinSprite Wand trifft||`` und ändere die Seite ``left`` in ``bottom``. Ziehe jetzt den vorhin hinzugefügten Block ``||sprites:vy (Geschwindkeit y)||`` in die Bedingung ``||logic:wenn dann||``.

```blocks
let meinSprite: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (meinSprite.isHittingTile(CollisionDirection.Bottom)) {
        meinSprite.vy = -200
    }
})
```

## {Schritt 7}

Jetzt sollen Fässer mit zufälliger Geschwindigkeit kommen. Sie starten am rechten Bildschirmrand und fliegen auf die Spielfigur zu. Ziehe ``||game:wenn Spielupdate alle||`` in den Editor und stelle die Zeit auf `2000` Millisekunden. Ziehe ``||sprites:Projektil von der Seite||`` hinein und male das Fass.

![Ein Fass im Bildeditor malen](/static/lessons/barrel-dodger/draw-barrel.gif)

```blocks
game.onUpdateInterval(2000, function () {
    let projektil = sprites.createProjectileFromSide(img`
    . e e e e e e .
    e e e e e e e e
    1 1 1 1 1 1 1 1
    e e e e e e e e
    e e e e e e e e
    1 1 1 1 1 1 1 1
    e e e e e e e e
    . e e e e e e .
`, 100, 50)
})
```

## {Schritt 8}

Ziehe einen Block ``||math:wähle eine zufällige Zahl||`` an die Stelle von ``vx`` und stelle den Bereich von ``-100`` bis ``-80`` ein. Setze außerdem die ``vy``-Geschwindigkeit des Projektils auf ``0``.

```blocks
game.onUpdateInterval(2000, function () {
    // @highlight
    let projektil = sprites.createProjectileFromSide(img`
    . e e e e e e .
    e e e e e e e e
    1 1 1 1 1 1 1 1
    e e e e e e e e
    e e e e e e e e
    1 1 1 1 1 1 1 1
    e e e e e e e e
    . e e e e e e .
`, randint(-100, -80), 0)
})
```

## {Schritt 9}

Suche ``||scene:platziere meinSprite oben auf Tilemap Spalte Reihe||`` und ziehe ihn in ``||game:wenn Spielupdate alle||`` hinter ``||variables(sprites):setze projektil auf||``.
Setze ``||scene:Spalte||`` auf 9 und ``||scene:Reihe||`` auf 5. Das ist die Kachel am rechten Bildschirmrand direkt über der Wand.
Ändere ``||variables(noclick):meinSprite||`` in ``||variables(noclick):projektil||``, damit der Block den gerade erstellten Sprite meint.

```blocks
game.onUpdateInterval(2000, function () {
    let  projektil = sprites.createProjectileFromSide(img`
        . e e e e e e .
        e e e e e e e e
        1 1 1 1 1 1 1 1
        e e e e e e e e
        e e e e e e e e
        1 1 1 1 1 1 1 1
        e e e e e e e e
        . e e e e e e .
    `, randint(-100, -80), 0)
    // @highlight
    tiles.placeOnTile(projektil, tiles.getTileLocation(9, 5))
})
```

## {Schritt 10}

Jedes Mal, wenn ein Fass losrollt, soll die Punktzahl steigen. Nimm ``||info:ändere Punktzahl um||`` und lege ihn in ``||game:wenn Spielupdate alle||``.

```blocks
game.onUpdateInterval(2000, function () {
    let projektil = sprites.createProjectileFromSide(img`
        . e e e e e e .
        e e e e e e e e
        1 1 1 1 1 1 1 1
        e e e e e e e e
        e e e e e e e e
        1 1 1 1 1 1 1 1
        e e e e e e e e
        . e e e e e e .
    `, randint(-100, -80), 0)
    tiles.placeOnTile(projektil, tiles.getTileLocation(9, 5))
    // @highlight
    info.changeScoreBy(1)
})
```

## {Schritt 11}

Im letzten Schritt soll das Spiel enden, wenn ein Fass die Spielfigur berührt. Ziehe ``||sprites:wenn sprite überlappt||`` in den Editor. Stelle die Art von ``anderesSprite`` auf ``Projectile``. Beende das Spiel mit einem Block ``||game:Game over||`` darin.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, anderesSprite) {
    game.gameOver(false)
})
```

## {Geschafft}

Super! Herzlichen Glückwunsch, du hast das Spiel „Fässern ausweichen“ gebaut!
