# Picknick

## {Einführung @unplugged}

``||sprites:Sprites||`` können an verschiedenen Stellen auf dem Bildschirm platziert werden. Dazu legst du ihre ``||sprites:x||``- und ``||sprites:y||``-Position fest.

Eine ``||sprites:x||``-Position von 0 setzt das Sprite an den **linken Rand** des Bildschirms – stell es dir vor wie „0 Pixel vom linken Rand entfernt“.

Eine ``||sprites:y||``-Position von 0 setzt das Sprite an den **oberen Rand** des Bildschirms.

## {Schritt 1}

Suche ``||variables(sprites):setze mySprite auf||`` in ``||sprites:Sprites||``. Ziehe den Block in ``||loops:beim Start||``. Klicke auf ``||variables(noclick):mySprite||``, wähle ``Variable umbenennen...`` und ändere den Namen von ``||variables(noclick):mySprite||`` in ``||variables(noclick):cherry||``.

```blocks
let cherry = sprites.create(img`
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

Öffne den Bildeditor für ``||variables(noclick):cherry||``. Du kannst selbst eine Kirsche zeichnen oder die Galerie öffnen und dort ein fertiges Bild aussuchen.

```blocks
let cherry: Sprite = null
cherry = sprites.create(img`
. . . . . . . . . . . 6 6 6 6 6
. . . . . . . . . 6 6 7 7 7 7 8
. . . . . . 8 8 8 7 7 8 8 6 8 8
. . e e e e c 6 6 8 8 . 8 7 8 .
. e 2 5 4 2 e c 8 . . . 6 7 8 .
e 2 4 2 2 2 2 2 c . . . 6 7 8 .
e 2 2 2 2 2 2 2 c . . . 8 6 8 .
e 2 e e 2 2 2 2 e e e e c 6 8 .
c 2 e e 2 2 2 2 e 2 5 4 2 c 8 .
. c 2 e e e 2 e 2 4 2 2 2 2 c .
. . c 2 2 2 e e 2 2 2 2 2 2 2 e
. . . e c c e c 2 2 2 2 2 2 2 e
. . . . . . . c 2 e e 2 2 e 2 c
. . . . . . . c e e e e e e 2 c
. . . . . . . . c e 2 2 2 2 c .
. . . . . . . . . c c c c c . .
`, SpriteKind.Player)
```

## {Schritt 3 @fullscreen}

Suche ``||sprites:setze Position von mySprite auf x 0 y 0||`` in ``||sprites:Sprites||``. Ändere ``||variables(noclick):mySprite||`` in ``||variables(noclick):cherry||`` und setze ``||sprites:x||`` auf 25.

Dadurch steht die ``||variables(noclick):cherry||`` oben auf dem Bildschirm, ein kleines Stück (25 Pixel) vom linken Rand entfernt.

```blocks
let cherry: Sprite = null
cherry = sprites.create(img`
. . . . . . . . . . . 6 6 6 6 6
. . . . . . . . . 6 6 7 7 7 7 8
. . . . . . 8 8 8 7 7 8 8 6 8 8
. . e e e e c 6 6 8 8 . 8 7 8 .
. e 2 5 4 2 e c 8 . . . 6 7 8 .
e 2 4 2 2 2 2 2 c . . . 6 7 8 .
e 2 2 2 2 2 2 2 c . . . 8 6 8 .
e 2 e e 2 2 2 2 e e e e c 6 8 .
c 2 e e 2 2 2 2 e 2 5 4 2 c 8 .
. c 2 e e e 2 e 2 4 2 2 2 2 c .
. . c 2 2 2 e e 2 2 2 2 2 2 2 e
. . . e c c e c 2 2 2 2 2 2 2 e
. . . . . . . c 2 e e 2 2 e 2 c
. . . . . . . c e e e e e e 2 c
. . . . . . . . c e 2 2 2 2 c .
. . . . . . . . . c c c c c . .
`, SpriteKind.Player)
cherry.setPosition(25, 0)
```

## {Schritt 4 @fullscreen}

Ändere in ``||sprites:setze Position von mySprite auf x 0 y 0||`` den Wert ``||sprites:y||`` auf 45.

Dadurch rutscht das Sprite um 45 Pixel **nach unten**.

```blocks
let cherry: Sprite = null
cherry = sprites.create(img`
. . . . . . . . . . . 6 6 6 6 6
. . . . . . . . . 6 6 7 7 7 7 8
. . . . . . 8 8 8 7 7 8 8 6 8 8
. . e e e e c 6 6 8 8 . 8 7 8 .
. e 2 5 4 2 e c 8 . . . 6 7 8 .
e 2 4 2 2 2 2 2 c . . . 6 7 8 .
e 2 2 2 2 2 2 2 c . . . 8 6 8 .
e 2 e e 2 2 2 2 e e e e c 6 8 .
c 2 e e 2 2 2 2 e 2 5 4 2 c 8 .
. c 2 e e e 2 e 2 4 2 2 2 2 c .
. . c 2 2 2 e e 2 2 2 2 2 2 2 e
. . . e c c e c 2 2 2 2 2 2 2 e
. . . . . . . c 2 e e 2 2 e 2 c
. . . . . . . c e e e e e e 2 c
. . . . . . . . c e 2 2 2 2 c .
. . . . . . . . . c c c c c . .
`, SpriteKind.Player)
cherry.setPosition(25, 45)
```

## {Schritt 5}

Erstelle ein weiteres ``||sprites:Sprite||`` und nenne es ``||variables(noclick):chicken||``. Suche (oder zeichne) ein Bild von einem Hähnchen dafür.

```blocks
let chicken: Sprite = null
let cherry: Sprite = null
cherry = sprites.create(img`
. . . . . . . . . . . 6 6 6 6 6
. . . . . . . . . 6 6 7 7 7 7 8
. . . . . . 8 8 8 7 7 8 8 6 8 8
. . e e e e c 6 6 8 8 . 8 7 8 .
. e 2 5 4 2 e c 8 . . . 6 7 8 .
e 2 4 2 2 2 2 2 c . . . 6 7 8 .
e 2 2 2 2 2 2 2 c . . . 8 6 8 .
e 2 e e 2 2 2 2 e e e e c 6 8 .
c 2 e e 2 2 2 2 e 2 5 4 2 c 8 .
. c 2 e e e 2 e 2 4 2 2 2 2 c .
. . c 2 2 2 e e 2 2 2 2 2 2 2 e
. . . e c c e c 2 2 2 2 2 2 2 e
. . . . . . . c 2 e e 2 2 e 2 c
. . . . . . . c e e e e e e 2 c
. . . . . . . . c e 2 2 2 2 c .
. . . . . . . . . c c c c c . .
`, SpriteKind.Player)
cherry.setPosition(25, 45)
chicken = sprites.create(img`
. . 2 2 b b b b b . . . . . . .
. 2 b 4 4 4 4 4 4 b . . . . . .
2 2 4 4 4 4 d d 4 4 b . . . . .
2 b 4 4 4 4 4 4 d 4 b . . . . .
2 b 4 4 4 4 4 4 4 d 4 b . . . .
2 b 4 4 4 4 4 4 4 4 4 b . . . .
2 b 4 4 4 4 4 4 4 4 4 e . . . .
2 2 b 4 4 4 4 4 4 4 b e . . . .
. 2 b b b 4 4 4 b b b e . . . .
. . e b b b b b b b e e . . . .
. . . e e b 4 4 b e e e b . . .
. . . . . e e e e e e b d b b .
. . . . . . . . . . . b 1 1 1 b
. . . . . . . . . . . c 1 d d b
. . . . . . . . . . . c 1 b c .
. . . . . . . . . . . . c c . .
`, SpriteKind.Player)
```

## {Schritt 6}

Setze die ``||sprites:x||``-Position von ``||variables(noclick):chicken||`` auf 120 und die ``||sprites:y||``-Position auf 80.

```blocks
let chicken: Sprite = null
let cherry: Sprite = null
cherry = sprites.create(img`
. . . . . . . . . . . 6 6 6 6 6
. . . . . . . . . 6 6 7 7 7 7 8
. . . . . . 8 8 8 7 7 8 8 6 8 8
. . e e e e c 6 6 8 8 . 8 7 8 .
. e 2 5 4 2 e c 8 . . . 6 7 8 .
e 2 4 2 2 2 2 2 c . . . 6 7 8 .
e 2 2 2 2 2 2 2 c . . . 8 6 8 .
e 2 e e 2 2 2 2 e e e e c 6 8 .
c 2 e e 2 2 2 2 e 2 5 4 2 c 8 .
. c 2 e e e 2 e 2 4 2 2 2 2 c .
. . c 2 2 2 e e 2 2 2 2 2 2 2 e
. . . e c c e c 2 2 2 2 2 2 2 e
. . . . . . . c 2 e e 2 2 e 2 c
. . . . . . . c e e e e e e 2 c
. . . . . . . . c e 2 2 2 2 c .
. . . . . . . . . c c c c c . .
`, SpriteKind.Player)
cherry.setPosition(25, 45)
chicken = sprites.create(img`
. . 2 2 b b b b b . . . . . . .
. 2 b 4 4 4 4 4 4 b . . . . . .
2 2 4 4 4 4 d d 4 4 b . . . . .
2 b 4 4 4 4 4 4 d 4 b . . . . .
2 b 4 4 4 4 4 4 4 d 4 b . . . .
2 b 4 4 4 4 4 4 4 4 4 b . . . .
2 b 4 4 4 4 4 4 4 4 4 e . . . .
2 2 b 4 4 4 4 4 4 4 b e . . . .
. 2 b b b 4 4 4 b b b e . . . .
. . e b b b b b b b e e . . . .
. . . e e b 4 4 b e e e b . . .
. . . . . e e e e e e b d b b .
. . . . . . . . . . . b 1 1 1 b
. . . . . . . . . . . c 1 d d b
. . . . . . . . . . . c 1 b c .
. . . . . . . . . . . . c c . .
`, SpriteKind.Player)
chicken.setPosition(120, 80)
```

## {Geschafft}

Super, dein Picknick ist fertig aufgebaut – mit ``||sprites:Sprites||`` an verschiedenen Stellen auf dem Bildschirm.
