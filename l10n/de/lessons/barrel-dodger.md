# Barrel Dodger

Erstelle ein Actionspiel, in dem der Spieler schnell reagieren muss, um schnell rollenden Fässern auszuweichen. Wirst du getroffen, heißt es **GAME OVER!**

![Barrel Dodger wird gespielt](https://cdn.makecode.com/blob/4f5ea194a5cfd19789eabefb674c346da2f8bb8b/static/lessons/barrel-dodger/barrel-dodger.gif)

## Schritt 1

OK, lass uns damit anfangen, unser `Player`-Sprite zu erstellen. Lege zuerst einen `||variables(sprites):setze meinSprite auf||`-Block in einen `||loops:beim Start||`-Block, um dein Sprite zu erstellen.

```blocks
let meinSprite: Sprite = sprites.create(img``, SpriteKind.Player)
```

## Schritt 2

Zeichne das Bild deines Spieler-Sprites mit dem Bildeditor.

![Sprite-Bildeditor](https://cdn.makecode.com/blob/bd2c87a67ed4a5c830bc81b45c818ebb14890fd7/static/lessons/barrel-dodger/draw-player.gif)

## Schritt 3

Wir wollen unsere Sprite-Figur näher an den linken Bildschirmrand setzen. Ziehe also einen `||sprites:setze Position von meinSprite||`-Block in `||loops:beim Start||` und setze `x` auf `20` und `y` auf `70`.

```blocks
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
meinSprite.setPosition(20, 70)
```

## Schritt 4

Ziehe einen `||variables(sprites):setze meinSprite x||`-Block in `||loops:beim Start||`, klicke auf das Dropdown-Menü und wähle `ay (acceleration y)`. Setze den Wert auf `500`, damit die Figur von der "Schwerkraft" nach unten gezogen wird.

```blocks
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
meinSprite.setPosition(20, 70)
meinSprite.ay = 500
```

## Schritt 5

Jetzt erstellen wir eine Plattform am unteren Bildschirmrand. Hole einen `||scene:setze Kachelkarte auf||`-Block und lege ihn in `||loops:beim Start||`. Klicke auf das graue Feld, um den `tilemap editor` zu öffnen. Stelle unten links die Größe der Kachelkarte auf `10x8` und zeichne in die unteren zwei Reihen der Kachelkarte eine Plattform. Klicke zum Schluss auf die Schaltfläche `Wall` und fülle diese zwei Reihen mit Wänden.

![Beispiel für das Zeichnen der Kachelkarte](https://cdn.makecode.com/blob/c2c94a4d83f7aed434e26b158a45ab98abc2bb8b/static/lessons/barrel-dodger/draw-tilemap.gif)

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

## Schritt 6

Als Nächstes lassen wir ein paar Fässer mit zufälliger Geschwindigkeit rollen. Sie sollen am rechten Bildschirmrand starten und auf das Spieler-Sprite zufliegen. Ziehe einen `||game:bei Spielaktualisierung alle||`-Block in den Editor und setze das Intervall auf `1500` Millisekunden. Ziehe einen `||sprites:Projektil von der Seite||`-Block hinein. Klicke auf das leere Bildfeld im Projektil-Block und ändere die Größe auf 8x8. Zeichne das Fass.

![Ein Fass im Bildeditor zeichnen](https://cdn.makecode.com/blob/d8219770bd82d7eef31bef97cfa6cf3e51102218/static/lessons/barrel-dodger/draw-barrel.gif)

Ziehe danach einen `||math:wähle eine zufällige Zahl||`-Block an die Stelle von `vx` und setze den Bereich von `-100` bis `-80`.

```blocks
game.onUpdateInterval(1500, function () {
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

## Schritt 7

Suche `||scene:platziere meinSprite auf Kachelkarte Spalte Zeile||` und ziehe den Block in `||game:bei Spielaktualisierung alle||` nach `||variables:setze projektil auf||`. Setze `||scene:Spalte||` auf 9 und `||scene:Zeile||` auf 5. Das ist die Kachel am rechten Bildschirmrand direkt über der Wand. Ändere `||variables(noclick):meinSprite||` in `||variables(noclick):projektil||`, damit sich der Block auf das gerade erstellte Sprite bezieht.

```blocks
game.onUpdateInterval(1500, function () {
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
    tiles.placeOnTile(projektil, tiles.getTileLocation(9, 5))
})
```

## Schritt 8

Jetzt soll das Sprite springen können, wenn wir eine Taste drücken. Das machen wir mit `||controller:wenn beliebige Taste gedrückt||`. Suche diesen Block und ziehe ihn in den Editor. Ändere die Taste von `any` auf `A`.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {

})
```

## Schritt 9

Wir müssen sicherstellen, dass das Sprite vor dem Sprung auf dem Boden steht. Ziehe also eine `||logic:wenn dann||`-Bedingung in `||controller:wenn Taste A gedrückt||`. Ersetze `true` durch `||scene:meinSprite trifft Wand||` und ändere die Seite `left` in `bottom`. Füge zum Schluss einen `||sprites:setze meinSprite x||`-Block ein und wähle im Dropdown-Menü `||sprites:vy (velocity y)||`. Setze den Wert auf `-250`.

```blocks
let meinSprite = sprites.create(img`
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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (meinSprite.isHittingTile(CollisionDirection.Bottom)) {
        meinSprite.vy = -250
    }
})
```

## Schritt 10

Jedes Mal, wenn ein Fass losrollt, soll der Punktestand steigen. Hole einen `||info:ändere Punktestand um||`-Block und lege ihn in `||game:bei Spielaktualisierung alle||`. Lass den Wert bei `1`.

```blocks
game.onUpdateInterval(1500, function () {
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
    info.changeScoreBy(1)
    tiles.placeOnTile(projektil, tiles.getTileLocation(9, 5))
})
```

## Schritt 11

Im letzten Schritt beenden wir das Spiel, wenn ein Fass das Spieler-Sprite berührt. Ziehe einen `||sprites:wenn Sprite überlappt||`-Block in den Editor. Setze die Sprite-Art für `anderesSprite` auf `Projectile`. Beende das Spiel mit einem `||game:Spiel beendet||`-Block darin.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, anderesSprite) {
    game.gameOver(false)
})
```

## Fertig

Super! Herzlichen Glückwunsch, du hast das Spiel Barrel Dodger erstellt! Du bist auf dem besten Weg, mit @boardname@ tolle Spiele zu machen.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (meinSprite.isHittingTile(CollisionDirection.Bottom)) {
        meinSprite.vy = -250
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, anderesSprite) {
    game.gameOver(false)
})
let meinSprite = sprites.create(img`
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
meinSprite.setPosition(20, 70)
meinSprite.ay = 500

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
game.onUpdateInterval(1500, function () {
    let projektil = sprites.createProjectileFromSide(img`
        1 e e e e e e 1
        e e e e e e e e
        1 1 1 1 1 1 1 1
        e e e e e e e e
        e e e e e e e e
        1 1 1 1 1 1 1 1
        e e e e e e e e
        1 e e e e e e 1
    `, randint(-100, -80), 0)
    info.changeScoreBy(1)
    tiles.placeOnTile(projektil, tiles.getTileLocation(9, 5))
})
```