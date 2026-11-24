# Prinzessin Pizza

## {Einführung @unplugged}

Wenn sich ``||sprites:Sprites||`` bewegen, kommt es oft vor, dass zwei Sprites übereinander landen. Mit dem Ereignis ``||sprites:Sprite-Überlappung||`` kannst du festlegen, was dann zwischen den ``||sprites:Sprites||`` passieren soll.

## {Schritt 1 @fullscreen}

Suche ``||variables(sprites):setze meinSprite auf||`` in ``||sprites:Sprites||``. Ziehe den Block in ``||loops:beim Start||``. Klicke auf ``||variables:meinSprite||``, wähle ``Variable umbenennen...`` und ändere den Namen von ``||variables:meinSprite||`` in ``||variables:princess||``.

```blocks
let princess = sprites.create(img`
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

Öffne den Bildeditor für ``||variables:princess||`` und wähle oder zeichne ein Bild von einer Prinzessin.

```blocks
let princess: Sprite = null
princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . .
. . . . f 5 4 5 5 4 5 f . . . .
. . . f e 4 5 5 5 5 4 e f . . .
. . f b 3 e 4 4 4 4 e 3 b f . .
. . f 3 3 3 3 3 3 3 3 3 3 f . .
. f 3 3 e b 3 e e 3 b e 3 3 f .
. f 3 3 f f e e e e f f 3 3 f .
. f b b f b f e e f b f b b f .
. f b b e 1 f 4 4 f 1 e b b f .
f f b b f 4 4 4 4 4 4 f b b f f
f b b f f f e e e e f f f b b f
. f e e f b d d d d b f e e f .
. . e 4 c d d d d d d c 4 e . .
. . e f b d b d b d b b f e . .
. . . f f 1 d 1 d 1 d f f . . .
. . . . . f f b b f f . . . . .
`, SpriteKind.Player)
```

## {Schritt 3 @fullscreen}

Suche ``||controller:bewege meinSprite mit Knöpfen||`` in ``||controller:Controller||``. Setze den Block unter ``||variables:setze princess auf||``. Ändere ``||variables:meinSprite||`` in ``||variables:princess||``.

```blocks
let princess: Sprite = null
princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . .
. . . . f 5 4 5 5 4 5 f . . . .
. . . f e 4 5 5 5 5 4 e f . . .
. . f b 3 e 4 4 4 4 e 3 b f . .
. . f 3 3 3 3 3 3 3 3 3 3 f . .
. f 3 3 e b 3 e e 3 b e 3 3 f .
. f 3 3 f f e e e e f f 3 3 f .
. f b b f b f e e f b f b b f .
. f b b e 1 f 4 4 f 1 e b b f .
f f b b f 4 4 4 4 4 4 f b b f f
f b b f f f e e e e f f f b b f
. f e e f b d d d d b f e e f .
. . e 4 c d d d d d d c 4 e . .
. . e f b d b d b d b b f e . .
. . . f f 1 d 1 d 1 d f f . . .
. . . . . f f b b f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(princess)
```

## {Schritt 4 @fullscreen}

Suche ``||variables(sprites):setze meinSprite auf||`` in ``||sprites:Sprites||``. Ziehe den Block in ``||loops:beim Start||``. Benenne ``||variables:meinSprite||`` in ``||variables:pizza||`` um. Öffne den Bildeditor und wähle oder zeichne ein Bild von einer Pizza.

```blocks
let pizza: Sprite = null
let princess: Sprite = null
princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . .
. . . . f 5 4 5 5 4 5 f . . . .
. . . f e 4 5 5 5 5 4 e f . . .
. . f b 3 e 4 4 4 4 e 3 b f . .
. . f 3 3 3 3 3 3 3 3 3 3 f . .
. f 3 3 e b 3 e e 3 b e 3 3 f .
. f 3 3 f f e e e e f f 3 3 f .
. f b b f b f e e f b f b b f .
. f b b e 1 f 4 4 f 1 e b b f .
f f b b f 4 4 4 4 4 4 f b b f f
f b b f f f e e e e f f f b b f
. f e e f b d d d d b f e e f .
. . e 4 c d d d d d d c 4 e . .
. . e f b d b d b d b b f e . .
. . . f f 1 d 1 d 1 d f f . . .
. . . . . f f b b f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(princess)
pizza = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Player)
```

## {Schritt 5 @fullscreen}

Suche ``||sprites:setze Position von meinSprite auf x 0 y 0||`` in ``||sprites:Sprites||``. Ändere ``||variables(noclick):meinSprite||`` in ``||variables(noclick):pizza||``, ``||sprites:x||`` auf 140 und ``||sprites:y||`` auf 100.

```blocks
let pizza: Sprite = null
let princess: Sprite = null
princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . .
. . . . f 5 4 5 5 4 5 f . . . .
. . . f e 4 5 5 5 5 4 e f . . .
. . f b 3 e 4 4 4 4 e 3 b f . .
. . f 3 3 3 3 3 3 3 3 3 3 f . .
. f 3 3 e b 3 e e 3 b e 3 3 f .
. f 3 3 f f e e e e f f 3 3 f .
. f b b f b f e e f b f b b f .
. f b b e 1 f 4 4 f 1 e b b f .
f f b b f 4 4 4 4 4 4 f b b f f
f b b f f f e e e e f f f b b f
. f e e f b d d d d b f e e f .
. . e 4 c d d d d d d c 4 e . .
. . e f b d b d b d b b f e . .
. . . f f 1 d 1 d 1 d f f . . .
. . . . . f f b b f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(princess)
pizza = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Player)
pizza.setPosition(140, 100)
```

## {Schritt 6 @fullscreen}

Wähle im ``||sprites:Sprite||`` ``||variables:pizza||`` den Eintrag ``||sprites:Typ Player||`` und ändere ihn in ``||sprites:Typ Food||``.

Der ``||sprites:Typ||`` eines ``||sprites:Sprite|``s zeigt, was für eine Art Sprite es ist. So kannst du verschiedene Sprites zu Gruppen zusammenfassen.

```blocks
let pizza: Sprite = null
let princess: Sprite = null
princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . .
. . . . f 5 4 5 5 4 5 f . . . .
. . . f e 4 5 5 5 5 4 e f . . .
. . f b 3 e 4 4 4 4 e 3 b f . .
. . f 3 3 3 3 3 3 3 3 3 3 f . .
. f 3 3 e b 3 e e 3 b e 3 3 f .
. f 3 3 f f e e e e f f 3 3 f .
. f b b f b f e e f b f b b f .
. f b b e 1 f 4 4 f 1 e b b f .
f f b b f 4 4 4 4 4 4 f b b f f
f b b f f f e e e e f f f b b f
. f e e f b d d d d b f e e f .
. . e 4 c d d d d d d c 4 e . .
. . e f b d b d b d b b f e . .
. . . f f 1 d 1 d 1 d f f . . .
. . . . . f f b b f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(princess)
pizza = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Food)
pizza.setPosition(140, 100)
```

## {Schritt 7 @fullscreen}

Suche ``||sprites:wenn sprite der Art Player überlappt anderesSprite der Art Player||`` in ``||sprites:Sprites||`` und ziehe den Block in den Arbeitsbereich. Ändere das erste ``||sprites:Player||`` in ``||sprites:Food||``.

Dieses Ereignis tritt immer dann ein, wenn zwei ``||sprites:Sprites||`` der angegebenen ``||sprites:Typen||`` übereinander liegen.

```blocks
let pizza: Sprite = null
let princess: Sprite = null
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, anderesSprite) {

})
princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . .
. . . . f 5 4 5 5 4 5 f . . . .
. . . f e 4 5 5 5 5 4 e f . . .
. . f b 3 e 4 4 4 4 e 3 b f . .
. . f 3 3 3 3 3 3 3 3 3 3 f . .
. f 3 3 e b 3 e e 3 b e 3 3 f .
. f 3 3 f f e e e e f f 3 3 f .
. f b b f b f e e f b f b b f .
. f b b e 1 f 4 4 f 1 e b b f .
f f b b f 4 4 4 4 4 4 f b b f f
f b b f f f e e e e f f f b b f
. f e e f b d d d d b f e e f .
. . e 4 c d d d d d d c 4 e . .
. . e f b d b d b d b b f e . .
. . . f f 1 d 1 d 1 d f f . . .
. . . . . f f b b f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(princess)
pizza = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Food)
pizza.setPosition(140, 100)
```

## {Schritt 8 @fullscreen}

Suche ``||game:Game over||`` in ``||game:Spiel||`` und ziehe den Block in das Ereignis ``||sprites:Sprite-Überlappung||``.

Dadurch endet das Spiel, sobald die ``||sprites:princess||`` die ``||sprites:pizza||`` berührt.

```blocks
let pizza: Sprite = null
let princess: Sprite = null
sprites.onOverlap(SpriteKind.Food, SpriteKind.Player, function (sprite, anderesSprite) {
    game.gameOver(false)
})
princess = sprites.create(img`
. . . . . f f 4 4 f f . . . . .
. . . . f 5 4 5 5 4 5 f . . . .
. . . f e 4 5 5 5 5 4 e f . . .
. . f b 3 e 4 4 4 4 e 3 b f . .
. . f 3 3 3 3 3 3 3 3 3 3 f . .
. f 3 3 e b 3 e e 3 b e 3 3 f .
. f 3 3 f f e e e e f f 3 3 f .
. f b b f b f e e f b f b b f .
. f b b e 1 f 4 4 f 1 e b b f .
f f b b f 4 4 4 4 4 4 f b b f f
f b b f f f e e e e f f f b b f
. f e e f b d d d d b f e e f .
. . e 4 c d d d d d d c 4 e . .
. . e f b d b d b d b b f e . .
. . . f f 1 d 1 d 1 d f f . . .
. . . . . f f b b f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(princess)
pizza = sprites.create(img`
. . . . . . b b b b . . . . . .
. . . . . . b 4 4 4 b . . . . .
. . . . . . b b 4 4 4 b . . . .
. . . . . b 4 b b b 4 4 b . . .
. . . . b d 5 5 5 4 b 4 4 b . .
. . . . b 3 2 3 5 5 4 e 4 4 b .
. . . b d 2 2 2 5 7 5 4 e 4 4 e
. . . b 5 3 2 3 5 5 5 5 e e e e
. . b d 7 5 5 5 3 2 3 5 5 e e e
. . b 5 5 5 5 5 2 2 2 5 5 d e e
. b 3 2 3 5 7 5 3 2 3 5 d d e 4
. b 2 2 2 5 5 5 5 5 5 d d e 4 .
b d 3 2 d 5 5 5 d d d 4 4 . . .
b 5 5 5 5 d d 4 4 4 4 . . . . .
4 d d d 4 4 4 . . . . . . . . .
4 4 4 4 . . . . . . . . . . . .
`, SpriteKind.Food)
pizza.setPosition(140, 100)
```

## {Geschafft}

Super, dein Spiel ist fertig! Man kann die ``||variables(noclick):princess||`` so lange herumbewegen, wie man will – solange man der ``||variables(noclick):pizza||`` ausweicht.
