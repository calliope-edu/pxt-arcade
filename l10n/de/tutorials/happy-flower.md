# Fröhliche Blume

### ~button /#tutorial:/tutorials/happy-flower

Probier diese Anleitung aus!

### ~

## {Einführung @unplugged}

Blumen machen alle um sie herum glücklicher, besonders die Bienen, die Nektar von ihnen bekommen. Um das zu zeigen, bauen wir eine Blume, die fröhliche kleine Bienen zurück zum Bienenstock schickt.

![Fröhliche Gedanken](/static/tutorials/happy-flower/happy-thoughts.gif)

## {Schritt 1}

Suche ``||scene:setze Hintergrundfarbe auf||`` in ``||scene:Szene||`` und lege den Block in ``||loops:beim Start||``. Stelle die Hintergrundfarbe auf **Hellblau**. Hol dir ein ``||variables(sprites):setze meinSprite auf||`` aus ``||sprites:Sprites||`` und ziehe es ebenfalls in ``||loops:beim Start||``. Klicke auf das leere Sprite-Bild, um den Bildeditor zu öffnen, und male eine Blume.

```blocks
let meinSprite: Sprite = null
scene.setBackgroundColor(9)
meinSprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
```

## {Schritt 2}

Suche ``||game:wenn Spielupdate alle 500 ms||`` in ``||game:Spiel||`` und ziehe den Block in den Arbeitsbereich. Stelle die Zeit auf **1000** Millisekunden (ms).

```blocks
let meinSprite: Sprite = null
scene.setBackgroundColor(9)
meinSprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {

})
```

## {Schritt 3}

Suche ``||variables(sprites):setze projektil auf||`` ``||sprites:Projektil von meinSprite||`` in ``||sprites:Sprites||``. Zieh den Block heraus und lege ihn in ``||game:wenn Spielupdate alle 1000 ms||``.

```blocks
let meinSprite: Sprite = null
scene.setBackgroundColor(9)
meinSprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    let projektil = sprites.createProjectileFromSprite(img`
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
`, meinSprite, 0, 100)
})
```

## {Schritt 4}

Klicke auf das leere Bild in ``||sprites:Projektil||``, um den Bildeditor zu öffnen. Male eine hübsche kleine Biene als Bild für ``||sprites:Projektil||``.

```blocks
let meinSprite: Sprite = null
scene.setBackgroundColor(9)
meinSprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    let projektil = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . b b . . b . . . . . . .
. . . . . b b b b . . . . . . .
. . . . . . . b b . . . . . . .
. . . . . f 5 f 5 f . . . . . .
. . . . 5 f 5 f 5 f 1 . . . . .
. . . . 5 f 5 f 5 f 5 b . . . .
. . . . . . 5 f 5 f 5 . . . . .
. . . . . e . . . e . . . . . .
. . . . e . . . . e . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, meinSprite, 0, 100)
})
```

## {Schritt 5}

Hol dir ``||Math:wähle eine zufällige Zahl von 0 bis 10||`` aus ``||math:Mathematik||``. Setze den Block in das ``||sprites:vx||``-Feld von ``||sprites:Projektil||``. Ändere in ``||Math:wähle eine zufällige Zahl von 0 bis 10||`` den ersten Wert von **0** auf **-25** und den zweiten Wert von **10** auf **25**.

```blocks
let meinSprite: Sprite = null
scene.setBackgroundColor(9)
meinSprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    let projektil = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . b b . . b . . . . . . .
. . . . . b b b b . . . . . . .
. . . . . . . b b . . . . . . .
. . . . . f 5 f 5 f . . . . . .
. . . . 5 f 5 f 5 f 1 . . . . .
. . . . 5 f 5 f 5 f 5 b . . . .
. . . . . . 5 f 5 f 5 . . . . .
. . . . . e . . . e . . . . . .
. . . . e . . . . e . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, meinSprite, randint(-25, 25), 100)
})
```

## {Schritt 6}

Dupliziere den Block ``||Math:wähle eine zufällige Zahl von -25 bis 25||`` und setze ihn in das ``||sprites:vy||``-Feld von ``||sprites:Projektil||``.

```blocks
let meinSprite: Sprite = null
scene.setBackgroundColor(9)
meinSprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    let projektil = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . b b . . b . . . . . . .
. . . . . b b b b . . . . . . .
. . . . . . . b b . . . . . . .
. . . . . f 5 f 5 f . . . . . .
. . . . 5 f 5 f 5 f 1 . . . . .
. . . . 5 f 5 f 5 f 5 b . . . .
. . . . . . 5 f 5 f 5 . . . . .
. . . . . e . . . e . . . . . .
. . . . e . . . . e . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, meinSprite, randint(-25, 25), randint(-25, 25))
})
```

## {Schritt 7 @fullscreen}

Suche ``||sprites:setze meinSprite x auf 0||`` in ``||sprites:Sprites||``, lege den Block hinter ``||variables(sprites):setze projektil auf||`` und ändere ``||variables(noclick):meinSprite||`` in ``||variables(noclick):projektil||``. Klicke auf ``||sprites:x||`` und wähle ``||sprites:Lebensdauer||`` aus der Liste der Eigenschaften. Setze den Wert auf **3000** statt **0**.

![Lebensdauer hinzufügen](/static/tutorials/happy-flower/life-span.gif)

```blocks
let projektil: Sprite = null
let meinSprite: Sprite = null
scene.setBackgroundColor(9)
meinSprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projektil = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . b b . . b . . . . . . .
. . . . . b b b b . . . . . . .
. . . . . . . b b . . . . . . .
. . . . . f 5 f 5 f . . . . . .
. . . . 5 f 5 f 5 f 1 . . . . .
. . . . 5 f 5 f 5 f 5 b . . . .
. . . . . . 5 f 5 f 5 . . . . .
. . . . . e . . . e . . . . . .
. . . . e . . . . e . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, meinSprite, randint(-25, 25), randint(-25, 25))
    projektil.lifespan = 3000
})
```

## {Schritt 8}

Glückwunsch, deine fröhliche Blume ist fertig! Sie schickt jetzt lauter fröhliche kleine Bienen los. Starte dein Programm im Simulator und schau zu, wie die Bienen davonfliegen. Hast du bemerkt, dass manche Bienen rückwärts fliegen? Möchtest du noch etwas ausprobieren? Dann können wir dafür sorgen, dass manche Bienen in die andere Richtung schauen, wenn sie davonfliegen. Mach einfach mit dem nächsten Schritt weiter.

## {Schritt 9}

Die Bienen sollen nach links schauen, wenn sie in diese Richtung davonfliegen.
Hol dir ein ``||logic:wenn dann||`` aus ``||logic:Logik||`` und lege es hinter ``||sprites:setze projektil Lebensdauer||``. Ersetze die Bedingung ``||logic:wahr||`` in ``||logic:wenn dann||`` durch ``||logic:0 < 0||``.

```blocks
let projektil: Sprite = null
let meinSprite: Sprite = null
scene.setBackgroundColor(9)
meinSprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projektil = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . b b . . b . . . . . . .
. . . . . b b b b . . . . . . .
. . . . . . . b b . . . . . . .
. . . . . f 5 f 5 f . . . . . .
. . . . 5 f 5 f 5 f 1 . . . . .
. . . . 5 f 5 f 5 f 5 b . . . .
. . . . . . 5 f 5 f 5 . . . . .
. . . . . e . . . e . . . . . .
. . . . e . . . . e . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, meinSprite, randint(-25, 25), randint(-25, 25))
    projektil.lifespan = 3000
    if (0 < 0) {
    }
})
```

## {Schritt 10}

Ersetze die erste **0** in der Bedingung ``||logic:0 < 0||`` durch ``||sprites:meinSprite x||``. Ändere ``||variables(noclick):meinSprite||`` in ``||variables(noclick):projektil||`` und ändere ``||sprites:x||`` in ``||sprites:vx (Geschwindigkeit x)||``.

```blocks
let projektil: Sprite = null
let meinSprite: Sprite = null
scene.setBackgroundColor(9)
meinSprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projektil = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . b b . . b . . . . . . .
. . . . . b b b b . . . . . . .
. . . . . . . b b . . . . . . .
. . . . . f 5 f 5 f . . . . . .
. . . . 5 f 5 f 5 f 1 . . . . .
. . . . 5 f 5 f 5 f 5 b . . . .
. . . . . . 5 f 5 f 5 . . . . .
. . . . . e . . . e . . . . . .
. . . . e . . . . e . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, meinSprite, randint(-25, 25), randint(-25, 25))
    projektil.lifespan = 3000
    if (projektil.vx < 0) {
    }
})
```

## {Schritt 11}

Geh in den Werkzeugkasten und öffne die **Fortgeschritten**-Kategorien. Suche in ``||images:Bilder||`` den Block ``||images:spiegle Bild horizontal||``. Zieh ihn heraus und lege ihn in ``||logic:wenn dann||``. Hol dir jetzt wieder in ``||sprites:Sprites||`` ein ``||sprites:meinSprite Bild||`` und lass es auf die Variable ``||variables(noclick):picture||`` fallen, um sie in ``||images:spiegle Bild horizontal||`` zu ersetzen. Ändere ``||variables(noclick):meinSprite||`` in ``||variables(noclick):projektil||``.

![Bild der Biene spiegeln](/static/tutorials/happy-flower/bee-flip.gif)

```blocks
let projektil: Sprite = null
let meinSprite: Sprite = null
scene.setBackgroundColor(9)
meinSprite = sprites.create(img`
. . . 4 . . . . . . 2 2 . . . .
. . . 4 4 4 3 . 3 2 2 . . . . .
. . . . 4 e 5 5 5 e 2 . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . . 5 5 e 5 5 . . . . . .
. . . . 3 5 5 5 5 5 3 . . . . .
. . . . 2 e 5 5 5 e 4 . . . . .
. . . . 2 2 3 7 3 4 4 4 . . . .
. . . 2 2 . . 7 . . . 4 . . . .
. . . . . . . 7 . . . . . . . .
. . . 7 7 7 . 7 . 7 7 . . . . .
. . . . 7 7 . 7 . 7 7 . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . 7 7 7 . . . . . . .
. . . . . . . 7 . . . . . . . .
. . . . . . . 7 . . . . . . . .
`, SpriteKind.Player)
game.onUpdateInterval(1000, function () {
    projektil = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . b b . . b . . . . . . .
. . . . . b b b b . . . . . . .
. . . . . . . b b . . . . . . .
. . . . . f 5 f 5 f . . . . . .
. . . . 5 f 5 f 5 f 1 . . . . .
. . . . 5 f 5 f 5 f 5 b . . . .
. . . . . . 5 f 5 f 5 . . . . .
. . . . . e . . . e . . . . . .
. . . . e . . . . e . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, meinSprite, randint(-25, 25), randint(-25, 25))
    projektil.lifespan = 3000
    if (projektil.vx < 0) {
        projektil.image.flipX()
    }
})
```

## {Geschafft}

Super, jetzt fliegen deine Bienen fröhlich in beide Richtungen davon!
