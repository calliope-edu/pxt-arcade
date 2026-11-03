# Sonntagsausflug

## {Einführung @unplugged}

In Spielen müssen oft Dinge immer wieder passieren – Gegner und Sammelobjekte müssen erzeugt werden, Gewinnbedingungen müssen geprüft werden und so weiter. Mit dem Ereignis ``||game:wenn Spielupdate alle||`` kannst du Code in einem festen Zeitabstand ausführen lassen, sodass er sich immer wiederholt.

## {Schritt 1 @fullscreen}

Entferne alles, was gerade im Arbeitsbereich ist, und suche ``||game:wenn Spielupdate alle 500 ms||`` in ``||game:Spiel||``. Ziehe ihn in den Arbeitsbereich.

```blocks
game.onUpdateInterval(500, function () {

})
```

## {Schritt 2 @fullscreen}

Ersetze in ``||game:wenn Spielupdate alle 500 ms||`` die 500 durch 1000. Dann passiert das Ereignis einmal pro Sekunde, denn 1 ms ist eine Tausendstelsekunde.

```blocks
game.onUpdateInterval(1000, function () {

})
```

## {Schritt 3 @fullscreen}

Suche ``||sprites:Projektil von der Seite||`` in ``||sprites:Sprites||`` und ziehe ihn in ``||game:wenn Spielupdate alle||``. Öffne den Bildeditor für ``||variables:projectile||`` und wähle oder male ein Auto, das nach **rechts** schaut.

```blocks
let projectile: Sprite = null;
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . 2 2 2 2 2 2 2 2 . . . .
. . . 2 4 2 2 2 2 2 2 c 2 . . .
. . 2 c 4 2 2 2 2 2 2 c c 2 . .
. 2 c c 4 4 4 4 4 4 2 c c 4 2 d
. 2 c 2 e e e e e e e b c 4 2 2
. 2 2 e b b e b b b e e b 4 2 2
. 2 e b b b e b b b b e 2 2 2 2
. e e 2 2 2 e 2 2 2 2 2 e 2 2 2
. e e e e e e f e e e f e 2 d d
. e e e e e e f e e f e e e 2 d
. e e e e e e f f f e e e e e e
. e f f f f e e e e f f f e e e
. . f f f f f e e f f f f f e .
. . . f f f . . . . f f f f . .
. . . . . . . . . . . . . . . .
`, 50, 50)
})
```

## {Schritt 4 @fullscreen}

Setze in ``||sprites:Projektil||`` den Wert ``||sprites:vy||`` auf `0`, damit die Autos **nur** nach rechts fahren.

```blocks
let projectile: Sprite = null;
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . 2 2 2 2 2 2 2 2 . . . .
. . . 2 4 2 2 2 2 2 2 c 2 . . .
. . 2 c 4 2 2 2 2 2 2 c c 2 . .
. 2 c c 4 4 4 4 4 4 2 c c 4 2 d
. 2 c 2 e e e e e e e b c 4 2 2
. 2 2 e b b e b b b e e b 4 2 2
. 2 e b b b e b b b b e 2 2 2 2
. e e 2 2 2 e 2 2 2 2 2 e 2 2 2
. e e e e e e f e e e f e 2 d d
. e e e e e e f e e f e e e 2 d
. e e e e e e f f f e e e e e e
. e f f f f e e e e f f f e e e
. . f f f f f e e f f f f f e .
. . . f f f . . . . f f f f . .
. . . . . . . . . . . . . . . .
`, 50, 0)
})
```

## {Schritt 5 @fullscreen}

Suche ``||sprites:setze mySprite x auf 0||`` in ``||sprites:Sprites||`` und ziehe ihn unter ``||variables:setze projectile auf||``. Ändere ``||variables:mySprite||`` in ``||variables:projectile||`` und ändere ``||sprites:x||`` in ``||sprites:y||``.

```blocks
let projectile: Sprite = null;
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . 2 2 2 2 2 2 2 2 . . . .
. . . 2 4 2 2 2 2 2 2 c 2 . . .
. . 2 c 4 2 2 2 2 2 2 c c 2 . .
. 2 c c 4 4 4 4 4 4 2 c c 4 2 d
. 2 c 2 e e e e e e e b c 4 2 2
. 2 2 e b b e b b b e e b 4 2 2
. 2 e b b b e b b b b e 2 2 2 2
. e e 2 2 2 e 2 2 2 2 2 e 2 2 2
. e e e e e e f e e e f e 2 d d
. e e e e e e f e e f e e e 2 d
. e e e e e e f f f e e e e e e
. e f f f f e e e e f f f e e e
. . f f f f f e e f f f f f e .
. . . f f f . . . . f f f f . .
. . . . . . . . . . . . . . . .
`, 50, 0)
    projectile.y = 0
})
```

## {Schritt 6 @fullscreen}

Suche ``||math:wähle eine zufällige Zahl von 0 bis 10||`` in ``||math:Mathematik||`` und ersetze damit die 0 in ``||sprites:setze projectile y auf 0||``.

Dadurch wird ``||variables:projectile||`` an eine zufällige ``||sprites:y||``-Position zwischen `0` und `10` gesetzt.

```blocks
let projectile: Sprite = null;
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . 2 2 2 2 2 2 2 2 . . . .
. . . 2 4 2 2 2 2 2 2 c 2 . . .
. . 2 c 4 2 2 2 2 2 2 c c 2 . .
. 2 c c 4 4 4 4 4 4 2 c c 4 2 d
. 2 c 2 e e e e e e e b c 4 2 2
. 2 2 e b b e b b b e e b 4 2 2
. 2 e b b b e b b b b e 2 2 2 2
. e e 2 2 2 e 2 2 2 2 2 e 2 2 2
. e e e e e e f e e e f e 2 d d
. e e e e e e f e e f e e e 2 d
. e e e e e e f f f e e e e e e
. e f f f f e e e e f f f e e e
. . f f f f f e e f f f f f e .
. . . f f f . . . . f f f f . .
. . . . . . . . . . . . . . . .
`, 50, 0)
    projectile.y = randint(0, 10)
})
```

## {Schritt 7 @fullscreen}

Suche ``||scene:Bildschirmhöhe||`` in ``||scene:Szene||``. Ersetze damit die 10 in ``||math:wähle eine zufällige Zahl von 0 bis 10||``.

``||scene:Bildschirmhöhe||`` ist die Höhe des Bildschirms (120). So wird ``||variables:projectile||`` an eine zufällige Position am linken Bildschirmrand gesetzt.

```blocks
let projectile: Sprite = null;
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . 2 2 2 2 2 2 2 2 . . . .
. . . 2 4 2 2 2 2 2 2 c 2 . . .
. . 2 c 4 2 2 2 2 2 2 c c 2 . .
. 2 c c 4 4 4 4 4 4 2 c c 4 2 d
. 2 c 2 e e e e e e e b c 4 2 2
. 2 2 e b b e b b b e e b 4 2 2
. 2 e b b b e b b b b e 2 2 2 2
. e e 2 2 2 e 2 2 2 2 2 e 2 2 2
. e e e e e e f e e e f e 2 d d
. e e e e e e f e e f e e e 2 d
. e e e e e e f f f e e e e e e
. e f f f f e e e e f f f e e e
. . f f f f f e e f f f f f e .
. . . f f f . . . . f f f f . .
. . . . . . . . . . . . . . . .
`, 50, 0)
    projectile.y = randint(0, scene.screenHeight())
})
```

## {Geschafft}

Glückwunsch, jetzt fahren Autos zufällig über den Bildschirm! Damit kannst du deine eigene Version eines Spiels bauen, in dem man eine Straße überqueren muss – zum Beispiel mit einem Huhn oder einer Ente. Denk nur daran, dass ``||sprites:Projektile||`` standardmäßig vom Typ ``||sprites:Projectile||`` sind.
