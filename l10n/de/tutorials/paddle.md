# Schläger

## {Einführung @unplugged}

**Schläger** ist eine Variante des berühmten Pong-Spiels für 2 Spieler!

![Ein Ball prallt an Schlägern ab](/static/tutorials/paddle.gif)

## {Schritt 1}

Lass uns mit dem Ball anfangen. Benutze ``||variables(sprites):setze meinSprite auf Sprite||``, um einen Ball-Sprite zu erstellen. Ändere den Variablennamen ``||variables(noclick):meinSprite||`` in ``||variables(noclick):ball||``.

```blocks
let ball = sprites.create(img`
    . . 6 6 6 6 . .
    . 6 d 4 4 4 b .
    . c b 1 1 4 4 b
    . c b b 4 4 d b
    . . c b b d 1 c
    . . . c c b b .
`, SpriteKind.Player)
```

## {Schritt 2}

Füge Code hinzu, um ``||sprites:setze Geschwindigkeit von ball||`` auf ``||sprites:vx||`` ``100`` und ``||sprites:vy||`` ``100`` zu setzen. Füge außerdem ``||sprites:setze ball pralle gegen Wand||`` hinzu.

```blocks
let ball = sprites.create(img`
    . . 6 6 6 6 . .
    . 6 d 4 4 4 b .
    . c b 1 1 4 4 b
    . c b b 4 4 d b
    . . c b b d 1 c
    . . . c c b b .
`, SpriteKind.Player)
ball.setVelocity(100, 100)
ball.setBounceOnWall(true)
```

## {Schritt 3}

Setze mit etwas mehr Code ``||sprites:y||`` von ``||variables(noclick):ball||`` mit ``||math:wähle eine zufällige Zahl||`` auf einen Wert zwischen ``0`` und ``120``.

```blocks
let ball = sprites.create(img`
    . . 6 6 6 6 . .
    . 6 d 4 4 4 b .
    . c b 1 1 4 4 b
    . c b b 4 4 d b
    . . c b b d 1 c
    . . . c c b b .
`, SpriteKind.Player)
ball.setVelocity(100, 100)
ball.setBounceOnWall(true)
ball.y = randint(0, 120)
```

## {Schritt 4}

Erstelle eine ``||functions:Funktion||`` namens ``create_ball`` und verschiebe den Code aus den vorherigen
Schritten von ``||loops:beim Start||`` in diese Funktion. Füge jetzt ``||functions:Aufruf create_ball||`` in ``||loops:beim Start||`` ein.

```blocks
function create_ball () {
    ball = sprites.create(img`
        . . 6 6 6 6 . .
        . 6 d 4 4 4 b .
        . c b 1 1 4 4 b
        . c b b 4 4 d b
        . . c b b d 1 c
        . . . c c b b .
    `, SpriteKind.Player)
    ball.setVelocity(100, 100)
    ball.setBounceOnWall(true)
    ball.y = randint(0, 120)
}
let ball: Sprite = null
create_ball()
```

## {Schritt 5}

Jetzt kommt der linke Schläger. Füge einen neuen Block ``||variables(sprites):setze meinSprite auf Sprite||`` in ``||loops:beim Start||`` ein und benenne die Variable in ``||variables(noclick):left_paddle||`` um. Ändere den Typ in ``||sprites:LeftPaddles||``.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
let left_paddle = sprites.create(img`
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
`, SpriteKind.LeftPaddles)
```

## {Schritt 6}

Lass ``||variables(noclick):left_paddle||`` mit 
``||controller:bewege left_paddle mit Knöpfen||`` nach oben und unten fahren. Nimm die Geschwindigkeit `0` für ``||controller:vx||`` und `150`
für ``||controller:vy||``.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
let left_paddle = sprites.create(img`
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
`, SpriteKind.LeftPaddles)
controller.moveSprite(left_paddle, 0, 150)
```

## {Schritt 7}

Füge Code hinzu, um ``||sprites:setze left_paddle links||`` auf die Position ``0`` zu setzen.
Außerdem brauchst du ``||sprites:setze left_paddle bleibe auf dem Display||``, damit der Schläger nicht verschwindet.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
let left_paddle = sprites.create(img`
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    a 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
    8 8 1
`, SpriteKind.LeftPaddles)
controller.moveSprite(left_paddle, 0, 150)
left_paddle.left = 0
left_paddle.setStayInScreen(true)
```

## {Schritt 8}

Erstelle eine ``||functions:Funktion||`` namens ``create_left_paddle`` und verschiebe den Code, den du in ``||loops:beim Start||`` hinzugefügt hast, in diese Funktion. Füge jetzt ``||functions:Aufruf create_left_paddle||`` in ``||loops:beim Start||`` ein.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
let left_paddle: Sprite = null
function create_left_paddle() {
    left_paddle = sprites.create(img`
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
    `, SpriteKind.LeftPaddles)
    controller.moveSprite(left_paddle, 0, 150)
    left_paddle.left = 0
    left_paddle.setStayInScreen(true)
}
create_left_paddle()
```

## {Schritt 9}

Erstelle eine weitere ``||functions:Funktion||`` namens ``create_right_paddle``. Sie enthält den Code für ``||variables(noclick):right_paddle||``.
Kopiere den ganzen Code aus der Funktion ``create_left_paddle`` und füge ihn in diese neue
Funktion ein. Ändere alle Variablen ``||variables(noclick):left_paddle||`` in dieser Funktion in
``||variables(noclick):right_paddle||``. Füge jetzt ``||functions:Aufruf create_right_paddle||`` in ``||loops:beim Start||`` ein.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
function create_right_paddle() {
    right_paddle = sprites.create(img`
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
    `, SpriteKind.LeftPaddles)
    controller.moveSprite(right_paddle, 0, 150)
    right_paddle.left = 0
    right_paddle.setStayInScreen(true)
}
let right_paddle: Sprite = null
create_right_paddle()
```

## {Schritt 10}

Lass uns in ``create_right_paddle`` noch etwas ändern. Setze den Typ des Schläger-Sprites auf ``||sprites:RightPaddles||``. Ändere die Positionseinstellung des Schlägers von ``||sprites:links||`` auf
``||sprites:rechts||`` und setze den Wert auf `160`. Damit daraus ein Spiel für 2 Spieler wird, ersetze den
Code ``||controller:bewege||`` ``||variables(noclick):right_paddle||`` durch den Mehrspieler-Block ``||controller:Spieler 2 bewege||`` für
``||variables(noclick):right_paddle||``. Nimm dieselben Werte für ``||controller:vx||`` und ``||controller:vy||``.

```blocks
namespace SpriteKind {
    export const RightPaddles = SpriteKind.create()
}
function create_right_paddle() {
    right_paddle = sprites.create(img`
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
    `, SpriteKind.RightPaddles)
    controller.player2.moveSprite(right_paddle, 0, 150)
    right_paddle.right = 160
    right_paddle.setStayInScreen(true)
}
let right_paddle: Sprite = null
create_right_paddle()
```

## {Schritt 11}

Achte darauf, dass du in ``||loops:beim Start||`` 3 Funktionen aufrufst: ``||functions:Aufruf create_ball||``, ``||functions:Aufruf create_left_paddle||`` und ``||functions:Aufruf create_right_paddle||``.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
    export const RightPaddles = SpriteKind.create()
}
function create_ball () {
    ball = sprites.create(img`
        . . 6 6 6 6 . .
        . 6 d 4 4 4 b .
        . c b 1 1 4 4 b
        . c b b 4 4 d b
        . . c b b d 1 c
        . . . c c b b .
    `, SpriteKind.Player)
    ball.setVelocity(100, 100)
    ball.setBounceOnWall(true)
    ball.y = randint(0, 120)
}
function create_left_paddle() {
    left_paddle = sprites.create(img`
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
    `, SpriteKind.LeftPaddles)
    controller.moveSprite(left_paddle, 0, 150)
    left_paddle.left = 0
    left_paddle.setStayInScreen(true)
}
function create_right_paddle() {
    right_paddle = sprites.create(img`
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        a 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
        8 8 1
    `, SpriteKind.RightPaddles)
    controller.player2.moveSprite(right_paddle, 0, 150)
    right_paddle.right = 160
    right_paddle.setStayInScreen(true)
}
let ball: Sprite = null
let left_paddle: Sprite = null
let right_paddle: Sprite = null
create_ball()
create_left_paddle()
create_right_paddle()
```

## {Schritt 12}

Füge ein Ereignis hinzu, das Code ausführt, wenn ``||variables(noclick):ball||`` ``||variables:left_paddle||`` berührt. Das passiert im Fall ``||sprites:wenn||`` ``||variables(noclick):sprite||`` ``||sprites:der Art Player überlappt||`` ``||variables(noclick):anderesSprite||`` ``||sprites:der Art LeftPaddles||``.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LeftPaddles, function (sprite, anderesSprite) {
})
```

## {Schritt 13}

Kehre in diesem Ereignis die horizontale Geschwindigkeit von ``||variables(noclick):sprite||`` um, damit der Ball vom Schläger abprallt. Dafür benutzt du ``||sprites:setze sprite vx (Geschwindigkeit x) auf||`` mit dem negativen Wert der horizontalen Geschwindigkeit, also ``||variables(noclick):sprite||`` ``||sprites:vx (Geschwindigkeit x)||`` mal ``-1``. Füge außerdem ``||info:ändere Punktzahl um||`` ``1`` für die Person hinzu, die ``||variables(noclick):left_paddle||`` steuert.

```blocks
namespace SpriteKind {
    export const LeftPaddles = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.LeftPaddles, function (sprite, anderesSprite) {
    sprite.vx = sprite.vx * -1
    info.changeScoreBy(1)
})
```

## {Schritt 14}

Kopiere das Ereignis mit seinem ganzen Code aus dem vorherigen Schritt. Ändere in diesem Ereignis die Art von ``||variables(noclick):anderesSprite||`` von ``||sprites:LeftPaddles||`` auf ``||sprites:RightPaddles||``. Ersetze ``||info:ändere Punktzahl um||`` durch den Mehrspieler-Block ``||info:ändere Spieler 2 Punktzahl um||`` für die Person, die ``||variables(noclick):right_paddle||`` steuert. Behalte die Erhöhung um ``1`` bei.

```blocks
namespace SpriteKind {
    export const RightPaddles = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.RightPaddles, function (sprite, anderesSprite) {
    sprite.vx = sprite.vx * -1
    info.player2.changeScoreBy(1)
})
```
