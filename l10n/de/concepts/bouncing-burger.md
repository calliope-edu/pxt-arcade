# Hüpfender Burger

## {Einführung @unplugged}

Du kannst ``||sprites:Sprites||`` eine Geschwindigkeit in ``||sprites:x||``- und ``||sprites:y||``-Richtung geben, damit sie sich über den Bildschirm bewegen. Hier stellt ein ``||sprites:Sprite||`` einen Burger dar, der über den Bildschirm hüpft.

## {Schritt 1 @fullscreen}

Suche ``||variables(sprites):setze mySprite auf||`` in ``||sprites:Sprites||``. Ziehe den Block in ``||loops:beim Start||``.

```blocks
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

## {Schritt 2 @fullscreen}

Klicke auf das graue Feld in ``||variables(sprites):setze mySprite auf||``, um den Bildeditor zu öffnen. Öffne die Galerie, scrolle zum Bild eines Burgers und klicke darauf, um es auszuwählen.

Jetzt ist das Bild des ``||sprites:Sprite||``s ein Burger. Starte den Code und prüfe, ob du ihn auf dem Bildschirm siehst!

```blocks
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . c c c c c 6 6 6 6 6 . . . . . . . . . . .
. . . . . . . . c c c 4 4 4 4 4 4 4 4 4 4 6 6 6 . . . . . . . .
. . . . . . c c 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 6 6 . . . . . .
. . . . . c b 4 4 4 4 b b 4 4 4 4 b 5 b 4 4 4 4 4 4 b . . . . .
. . . . e b 4 4 4 4 b 5 b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 b . . . .
. . . e b b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 6 . . .
. . e b 6 b b 4 4 4 4 4 4 4 4 4 b b 4 4 4 b 5 b 4 4 4 4 4 6 . .
. . e 6 b b 5 b 4 4 4 4 4 4 4 4 b 5 b 4 4 4 b 4 4 b b 4 4 e . .
. e 6 6 b 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 4 4 b 5 b 4 4 e .
. e 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 e .
e b 6 6 b 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b e
e b 6 6 b b 4 4 4 b 5 b 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 b e
f b 6 6 6 b 4 4 4 b b 4 4 4 4 4 4 4 4 4 b 5 b 4 4 4 4 4 4 4 b f
f c b 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 b c f
. f b b 6 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f .
. e f b b 6 6 6 6 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f e .
. 8 6 f c b b 6 6 6 6 6 b b b 4 4 4 4 4 4 4 4 4 4 4 b c c 6 8 8
8 7 7 2 e f f c b b b b b b b b b b b b b b b b c f c 2 2 7 7 8
8 7 7 2 2 2 2 2 c c c c c c c c c c c c c c c c 2 2 2 2 6 6 7 8
f 8 6 6 6 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 7 6 6 8 6 f
f e f 8 6 6 6 7 7 7 6 6 6 6 7 7 7 7 7 7 6 6 6 7 7 7 7 f f f e f
f b f f 8 7 7 7 6 8 f 8 6 7 7 7 7 7 7 6 6 6 7 7 6 f f f f f b f
f b e f f e e f f f e f f 7 7 6 6 6 8 8 e f f e e e e f e b 6 f
f 6 b f f f e f f e e e e e e e e e e e e e f e e e e e b b 6 e
f 6 6 d d f f f f f e e e f f e f f e e e e e f f e e d b 4 6 e
. c 6 6 d d d 4 e f f f f f f e e e e e f f f f 4 d d b 4 6 e .
. f c 6 b 4 d d d d d d d d d d d d d d d d d d d b 4 4 4 e e .
. . f f 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . .
. . . . f f b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . . . .
. . . . . . f f e b b b b b b 4 4 4 4 4 4 4 4 e e e . . . . . .
. . . . . . . . . f f f f f f f c c c c c e e . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
```

## {Schritt 3 @fullscreen}

Suche ``||sprites:setze mySprite x auf 0||`` in ``||sprites:Sprites||``. Setze den Block unter ``||variables(sprites):setze mySprite auf||`` und ändere ``||sprites:x||`` in ``||sprites:vx||``. Ändere die 0 in 40.

Dadurch bewegt sich das Sprite **nach rechts** über den Bildschirm, weil seine ``||sprites:x||``-Position **größer** wird.

```blocks
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . c c c c c 6 6 6 6 6 . . . . . . . . . . .
. . . . . . . . c c c 4 4 4 4 4 4 4 4 4 4 6 6 6 . . . . . . . .
. . . . . . c c 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 6 6 . . . . . .
. . . . . c b 4 4 4 4 b b 4 4 4 4 b 5 b 4 4 4 4 4 4 b . . . . .
. . . . e b 4 4 4 4 b 5 b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 b . . . .
. . . e b b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 6 . . .
. . e b 6 b b 4 4 4 4 4 4 4 4 4 b b 4 4 4 b 5 b 4 4 4 4 4 6 . .
. . e 6 b b 5 b 4 4 4 4 4 4 4 4 b 5 b 4 4 4 b 4 4 b b 4 4 e . .
. e 6 6 b 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 4 4 b 5 b 4 4 e .
. e 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 e .
e b 6 6 b 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b e
e b 6 6 b b 4 4 4 b 5 b 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 b e
f b 6 6 6 b 4 4 4 b b 4 4 4 4 4 4 4 4 4 b 5 b 4 4 4 4 4 4 4 b f
f c b 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 b c f
. f b b 6 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f .
. e f b b 6 6 6 6 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f e .
. 8 6 f c b b 6 6 6 6 6 b b b 4 4 4 4 4 4 4 4 4 4 4 b c c 6 8 8
8 7 7 2 e f f c b b b b b b b b b b b b b b b b c f c 2 2 7 7 8
8 7 7 2 2 2 2 2 c c c c c c c c c c c c c c c c 2 2 2 2 6 6 7 8
f 8 6 6 6 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 7 6 6 8 6 f
f e f 8 6 6 6 7 7 7 6 6 6 6 7 7 7 7 7 7 6 6 6 7 7 7 7 f f f e f
f b f f 8 7 7 7 6 8 f 8 6 7 7 7 7 7 7 6 6 6 7 7 6 f f f f f b f
f b e f f e e f f f e f f 7 7 6 6 6 8 8 e f f e e e e f e b 6 f
f 6 b f f f e f f e e e e e e e e e e e e e f e e e e e b b 6 e
f 6 6 d d f f f f f e e e f f e f f e e e e e f f e e d b 4 6 e
. c 6 6 d d d 4 e f f f f f f e e e e e f f f f 4 d d b 4 6 e .
. f c 6 b 4 d d d d d d d d d d d d d d d d d d d b 4 4 4 e e .
. . f f 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . .
. . . . f f b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . . . .
. . . . . . f f e b b b b b b 4 4 4 4 4 4 4 4 e e e . . . . . .
. . . . . . . . . f f f f f f f c c c c c e e . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
mySprite.vx = 40;
```

## {Schritt 4 @fullscreen}

Suche ``||sprites:setze mySprite x auf 0||`` in ``||sprites:Sprites||``. Setze den Block unter ``||variables(sprites):setze mySprite auf||`` und ändere ``||sprites:x||`` in ``||sprites:vy||``. Ändere die 0 in 60.

Dadurch bewegt sich das Sprite **nach unten** über den Bildschirm, weil seine ``||sprites:y||``-Position **größer** wird.

```blocks
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . c c c c c 6 6 6 6 6 . . . . . . . . . . .
. . . . . . . . c c c 4 4 4 4 4 4 4 4 4 4 6 6 6 . . . . . . . .
. . . . . . c c 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 6 6 . . . . . .
. . . . . c b 4 4 4 4 b b 4 4 4 4 b 5 b 4 4 4 4 4 4 b . . . . .
. . . . e b 4 4 4 4 b 5 b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 b . . . .
. . . e b b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 6 . . .
. . e b 6 b b 4 4 4 4 4 4 4 4 4 b b 4 4 4 b 5 b 4 4 4 4 4 6 . .
. . e 6 b b 5 b 4 4 4 4 4 4 4 4 b 5 b 4 4 4 b 4 4 b b 4 4 e . .
. e 6 6 b 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 4 4 b 5 b 4 4 e .
. e 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 e .
e b 6 6 b 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b e
e b 6 6 b b 4 4 4 b 5 b 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 b e
f b 6 6 6 b 4 4 4 b b 4 4 4 4 4 4 4 4 4 b 5 b 4 4 4 4 4 4 4 b f
f c b 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 b c f
. f b b 6 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f .
. e f b b 6 6 6 6 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f e .
. 8 6 f c b b 6 6 6 6 6 b b b 4 4 4 4 4 4 4 4 4 4 4 b c c 6 8 8
8 7 7 2 e f f c b b b b b b b b b b b b b b b b c f c 2 2 7 7 8
8 7 7 2 2 2 2 2 c c c c c c c c c c c c c c c c 2 2 2 2 6 6 7 8
f 8 6 6 6 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 7 6 6 8 6 f
f e f 8 6 6 6 7 7 7 6 6 6 6 7 7 7 7 7 7 6 6 6 7 7 7 7 f f f e f
f b f f 8 7 7 7 6 8 f 8 6 7 7 7 7 7 7 6 6 6 7 7 6 f f f f f b f
f b e f f e e f f f e f f 7 7 6 6 6 8 8 e f f e e e e f e b 6 f
f 6 b f f f e f f e e e e e e e e e e e e e f e e e e e b b 6 e
f 6 6 d d f f f f f e e e f f e f f e e e e e f f e e d b 4 6 e
. c 6 6 d d d 4 e f f f f f f e e e e e f f f f 4 d d b 4 6 e .
. f c 6 b 4 d d d d d d d d d d d d d d d d d d d b 4 4 4 e e .
. . f f 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . .
. . . . f f b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . . . .
. . . . . . f f e b b b b b b 4 4 4 4 4 4 4 4 e e e . . . . . .
. . . . . . . . . f f f f f f f c c c c c e e . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
mySprite.vx = 40
mySprite.vy = 60
```

## {Schritt 5 @fullscreen}

Suche ``||sprites:setze mySprite pralle gegen Wand||`` in ``||sprites:Sprites||``. Setze den Block unter ``||variables(sprites):setze mySprite auf||``.

Wenn der Burger jetzt gegen eine Wand stößt, „prallt“ er davon ab und ändert dabei ``||sprites:vx||`` oder ``||sprites:vy||``.

```blocks
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . . c c c c c 6 6 6 6 6 . . . . . . . . . . .
. . . . . . . . c c c 4 4 4 4 4 4 4 4 4 4 6 6 6 . . . . . . . .
. . . . . . c c 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 6 6 . . . . . .
. . . . . c b 4 4 4 4 b b 4 4 4 4 b 5 b 4 4 4 4 4 4 b . . . . .
. . . . e b 4 4 4 4 b 5 b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 b . . . .
. . . e b b 4 4 4 4 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 6 . . .
. . e b 6 b b 4 4 4 4 4 4 4 4 4 b b 4 4 4 b 5 b 4 4 4 4 4 6 . .
. . e 6 b b 5 b 4 4 4 4 4 4 4 4 b 5 b 4 4 4 b 4 4 b b 4 4 e . .
. e 6 6 b 4 b 4 4 4 4 4 4 4 4 4 4 b 4 4 4 4 4 4 4 b 5 b 4 4 e .
. e 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 e .
e b 6 6 b 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b e
e b 6 6 b b 4 4 4 b 5 b 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 b e
f b 6 6 6 b 4 4 4 b b 4 4 4 4 4 4 4 4 4 b 5 b 4 4 4 4 4 4 4 b f
f c b 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 b c f
. f b b 6 6 6 6 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f .
. e f b b 6 6 6 6 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b f e .
. 8 6 f c b b 6 6 6 6 6 b b b 4 4 4 4 4 4 4 4 4 4 4 b c c 6 8 8
8 7 7 2 e f f c b b b b b b b b b b b b b b b b c f c 2 2 7 7 8
8 7 7 2 2 2 2 2 c c c c c c c c c c c c c c c c 2 2 2 2 6 6 7 8
f 8 6 6 6 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 7 6 6 8 6 f
f e f 8 6 6 6 7 7 7 6 6 6 6 7 7 7 7 7 7 6 6 6 7 7 7 7 f f f e f
f b f f 8 7 7 7 6 8 f 8 6 7 7 7 7 7 7 6 6 6 7 7 6 f f f f f b f
f b e f f e e f f f e f f 7 7 6 6 6 8 8 e f f e e e e f e b 6 f
f 6 b f f f e f f e e e e e e e e e e e e e f e e e e e b b 6 e
f 6 6 d d f f f f f e e e f f e f f e e e e e f f e e d b 4 6 e
. c 6 6 d d d 4 e f f f f f f e e e e e f f f f 4 d d b 4 6 e .
. f c 6 b 4 d d d d d d d d d d d d d d d d d d d b 4 4 4 e e .
. . f f 6 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . .
. . . . f f b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e e . . . .
. . . . . . f f e b b b b b b 4 4 4 4 4 4 4 4 e e e . . . . . .
. . . . . . . . . f f f f f f f c c c c c e e . . . . . . . . .
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
mySprite.vx = 40
mySprite.vy = 60
mySprite.setBounceOnWall(true)
```

## {Geschafft}

Super, dein Burger prallt jetzt von den Wänden ab! Damit kannst du ganz verschiedene Spiele bauen.

Du könntest zum Beispiel ein Spiel machen, in dem du ein anderes ``||sprites:Sprite||`` herumsteuerst und dem Burger so lange wie möglich **ausweichst**.
