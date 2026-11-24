# Zitronensaft

### ~button /#tutorial:/tutorials/lemon-leak

Probier dieses Tutorial aus!

### ~

## {Einführung @unplugged}

![Spielanimation](/static/tutorials/lemon-leak.gif)

Hey, lass uns ein Spiel bauen, in dem wilde Erdbeeren unsere Zitrone angreifen. Ziel ist es, dass die Zitrone ihren Saft nicht verliert, indem sie den heranfliegenden Erdbeeren ausweicht. Jedes Mal, wenn eine Erdbeere mit der Zitrone zusammenstößt, verliert sie etwas Saft.

## {Schritt 1  @fullscreen}

Lege in den Block ``||loops:beim Start||`` den Block ``||scene:setze Hintergrundfarbe auf||`` aus ``||scene:Szene||``. Wähle ``lila`` als Farbe. Hol dir aus ``||sprites:Sprites||`` einen Block ``||variables(sprites):setze meinSprite auf||``. Klicke auf das graue Feld und wähle die Zitrone aus der Galerie. Nimm aus ``||controller:Controller||`` einen Block ``||controller:bewege meinSprite mit Knöpfen||``, damit wir die Zitrone herumbewegen können.

![Wähle das Zitronenbild](/static/tutorials/lemon-leak/pick-a-lemon.gif)

```blocks
scene.setBackgroundColor(10)
let meinSprite = sprites.create(img`
    4 4 4 . . 4 4 4 4 4 . . . . . .
    4 5 5 4 4 5 5 5 5 5 4 4 . . . .
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . .
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . .
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 .
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 .
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c
    . . c 4 4 d 4 4 4 4 4 d d 5 d c
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4
    . . . . c c b 4 4 4 b b 4 5 4 4
    . . . . . . c c c c c c b b 4 .
`, SpriteKind.Player)
controller.moveSprite(meinSprite)
```

## {Schritt 2}

Damit die Zitrone den Bildschirm nicht verlässt, zieh einen Block ``||sprites:setze meinSprite bleibe auf dem Display||`` dazu. Suche den Block ``||info:starte Countdown||`` und hänge ihn ans Ende. Ändere die Zeit von `10` auf `30` Sekunden.

```blocks
scene.setBackgroundColor(10)
let meinSprite = sprites.create(img`
    4 4 4 . . 4 4 4 4 4 . . . . . .
    4 5 5 4 4 5 5 5 5 5 4 4 . . . .
    b 4 5 5 1 5 1 1 1 5 5 5 4 . . .
    . b 5 5 5 5 1 1 5 5 1 1 5 4 . .
    . b d 5 5 5 5 5 5 5 5 1 1 5 4 .
    b 4 5 5 5 5 5 5 5 5 5 5 1 5 4 .
    c d 5 5 5 5 5 5 5 5 5 5 5 5 5 4
    c d 4 5 5 5 5 5 5 5 5 5 5 1 5 4
    c 4 5 5 5 d 5 5 5 5 5 5 5 5 5 4
    c 4 d 5 4 5 d 5 5 5 5 5 5 5 5 4
    . c 4 5 5 5 5 d d d 5 5 5 5 5 b
    . c 4 d 5 4 5 d 4 4 d 5 5 5 4 c
    . . c 4 4 d 4 4 4 4 4 d d 5 d c
    . . . c 4 4 4 4 4 4 4 4 5 5 5 4
    . . . . c c b 4 4 4 b b 4 5 4 4
    . . . . . . c c c c c c b b 4 .
`, SpriteKind.Player)
controller.moveSprite(meinSprite)
meinSprite.setStayInScreen(true)
info.startCountdown(30)
```

## {Schritt 3}

Zieh jetzt einen Block ``||game:wenn Spielupdate alle||`` aus ``||game:Spiel||`` heraus. Stelle die Zeit auf `1000` ms, also 1 Sekunde. Zieh aus ``||sprites:Sprites||`` den Block ``||variables(sprites):setze projektil auf||`` ``||sprites:Projektil von der Seite||`` und lege ihn in ``||game:wenn Spielupdate alle||``. Klicke auf das graue Bildfeld und wähle die Erdbeere aus der Galerie.

```blocks
let projektil: Sprite = null
game.onUpdateInterval(1000, function () {
    projektil = sprites.createProjectileFromSide(img`
        . . . . . . . 6 . . . . . . . .
        . . . . . . 8 6 6 . . . 6 8 . .
        . . . e e e 8 8 6 6 . 6 7 8 . .
        . . e 2 2 2 2 e 8 6 6 7 6 . . .
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . .
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 .
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . .
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 .
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 .
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 .
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 .
        e 2 2 2 2 2 2 2 4 e 2 e e c . .
        e e 2 e 2 2 4 2 2 e e e c . . .
        e e e e 2 e 2 2 e e e c . . . .
        e e e 2 e e c e c c c . . . . .
        . c c c c c c c . . . . . . . .
    `, 50, 50)
})
```

## {Schritt 4}

Nimm aus der Schublade ``||math:Mathematik||`` einen Block ``||math: wähle eine zufällige Zahl||`` und setze ihn in das Feld ``vx`` des Projektils. Ändere in ``||math:wähle eine zufällige Zahl||`` die erste `0` in `-50` und die zweite Zahl von `10` in `50`. Dupliziere diesen Block und setze die Kopie in das Feld ``vy``.

```blocks
let projektil: Sprite = null
game.onUpdateInterval(1000, function () {
    projektil = sprites.createProjectileFromSide(img`
        . . . . . . . 6 . . . . . . . .
        . . . . . . 8 6 6 . . . 6 8 . .
        . . . e e e 8 8 6 6 . 6 7 8 . .
        . . e 2 2 2 2 e 8 6 6 7 6 . . .
        . e 2 2 4 4 2 7 7 7 7 7 8 6 . .
        . e 2 4 4 2 6 7 7 7 6 7 6 8 8 .
        e 2 4 5 2 2 6 7 7 6 2 7 7 6 . .
        e 2 4 4 2 2 6 7 6 2 2 6 7 7 6 .
        e 2 4 2 2 2 6 6 2 2 2 e 7 7 6 .
        e 2 4 2 2 4 2 2 2 4 2 2 e 7 6 .
        e 2 4 2 2 2 2 2 2 2 2 2 e c 6 .
        e 2 2 2 2 2 2 2 4 e 2 e e c . .
        e e 2 e 2 2 4 2 2 e e e c . . .
        e e e e 2 e 2 2 e e e c . . . .
        e e e 2 e e c e c c c . . . . .
        . c c c c c c c . . . . . . . .
    `, randint(-50, 50), randint(-50, 50))
})
```

## {Schritt 5}

Zieh aus ``||sprites:Sprites||`` einen Block ``||sprites:wenn Sprite der Art überlappt||`` in den Arbeitsbereich. Stelle die Art für ``anderesSprite`` auf ``Projectile``. Zieh aus ``||sprites:Sprites||`` einen Block ``||sprites:meinSprite beginne Effekt||`` und lege ihn in den Block ``||sprites:überlappt||``. Klicke auf das Symbol **(+)**, um den Block zu erweitern, und stelle die Dauer des Effekts auf ``200`` ms.

```blocks
let meinSprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, anderesSprite) {
    meinSprite.startEffect(effects.spray, 200)
})
```

## {Schritt 6}

Damit die Treffer der Erdbeeren auf die Zitrone gezählt werden, zieh zum Schluss einen Block ``||info:ändere Punktzahl um||`` aus ``||info:Info||`` unter den Block ``||sprites:meinSprite beginne Effekt||``.

```blocks
let meinSprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, anderesSprite) {
    meinSprite.startEffect(effects.spray, 200)
    info.changeScoreBy(1)
})
```

## {Geschafft @fullscreen}

Das war's! Bewege die Zitrone jetzt immer weiter und versuche, nicht zu viel Saft zu verlieren. Jedes Mal, wenn eine Erdbeere deine Zitrone trifft, tropft etwas Saft heraus und das Erdbeer-Team bekommt Punkte. Schau, ob du die Saftpunkte während der `30` Sekunden Spielzeit niedrig halten kannst.

![Zitronensaft spielen](/static/tutorials/lemon-leak/play-lemon-leak.jpg)
