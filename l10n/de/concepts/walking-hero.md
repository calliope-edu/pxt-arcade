# Laufender Held

## {Einführung @unplugged}

``||sprites:Sprites||`` können die **Figuren** in deinem Spiel darstellen. Das kann alles Mögliche sein – Münzen zum Einsammeln, Gegner, denen du ausweichen musst, oder Laser, die ein Raumschiff abfeuert.

In diesem Tutorial erstellst du die Hauptfigur für ein Spiel und lässt sie mit den Knöpfen des Controllers laufen.

## {Schritt 1 @fullscreen}

Suche ``||variables(sprites):setze meinSprite auf||`` in ``||sprites:Sprites||``. Ziehe den Block in ``||loops:beim Start||``.

Dieses ``||sprites:Sprite||`` ist die Hauptfigur im Spiel. Im Moment hat es aber noch kein Bild und macht noch nichts.

```blocks
let meinSprite = sprites.create(img`
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

Klicke auf das graue Feld in ``||variables(sprites):setze meinSprite auf||``, um den Bildeditor zu öffnen. Zeichne damit ein Bild für dein neues Sprite.

Wenn du den Bildeditor schließt, indem du daneben klickst, erscheint dein Bild in der Mitte des Bildschirms im Simulator.

```blocks
let meinSprite: Sprite = null
meinSprite = sprites.create(img`
. . . . . . . . 7 7 . . . . . .
. . . . . . . 7 7 7 . . . . . .
. . . . . . 7 7 7 7 . . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . d d d d . . . . . .
. . . . . . f d f d . . . . . .
. . . . . . d d d d . . . . . .
. . . . 7 7 7 7 7 7 7 7 . . . .
. . . . 7 7 7 7 7 7 7 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . . . 6 . . 6 . . . . . .
. . . . . 6 6 . 6 6 . . . . . .
. . . . 6 6 6 6 6 6 . . . . . .
`, SpriteKind.Player)
```

## {Schritt 3 @fullscreen}

Dieses ``||sprites:Sprite||`` ist die Hauptfigur in unserem Spiel, also soll es sich bewegen, wenn die Spielerin oder der Spieler Knöpfe drückt.

Suche ``||controller:bewege meinSprite mit Knöpfen||`` in ``||controller:Controller||``. Setze den Block unter ``||variables(sprites):setze meinSprite auf||``.

```blocks
let meinSprite: Sprite = null
meinSprite = sprites.create(img`
. . . . . . . . 7 7 . . . . . .
. . . . . . . 7 7 7 . . . . . .
. . . . . . 7 7 7 7 . . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . d d d d . . . . . .
. . . . . . f d f d . . . . . .
. . . . . . d d d d . . . . . .
. . . . 7 7 7 7 7 7 7 7 . . . .
. . . . 7 7 7 7 7 7 7 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . . . 6 . . 6 . . . . . .
. . . . . 6 6 . 6 6 . . . . . .
. . . . 6 6 6 6 6 6 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(meinSprite)
```

## {Geschafft}

Super, dein Held läuft jetzt, sobald jemand einen der Richtungsknöpfe drückt!
