# Sternenfeld

## {Einführung @unplugged}

Sterne, die sich im Hintergrund deiner Szene bewegen, zeigen sehr gut Bewegung in einem Spiel, das im Weltall spielt. Wenn Sterne als bewegte Projektile über den Bildschirm fliegen, sieht es so aus, als würde dein Spieler-Sprite durchs All rasen – auch wenn er an derselben Stelle auf dem Bildschirm bleibt.

![Sternenfeld-Hintergrund in Aktion](/static/concepts/star-field/star-field-background.gif)

## {Schritt 1}

Hol dir aus der Kategorie ``||game:Spiel||`` im Werkzeugkasten einen ``||game:wenn Spielupdate||``-Block und ziehe ihn in den Arbeitsbereich.

```blocks
game.onUpdate(function () {

})
```

## {Schritt 2}

Suche in ``||sprites:Sprites||`` den Block ``||variables(sprites):setze projektil auf||``, in dem ein ``||sprites:Projektil von der Seite||`` steckt. Ziehe ihn in ``||game:wenn Spielupdate||``. Ändere `vx` auf `0` und `vy` auf `100`.

```blocks
game.onUpdate(function () {
    let projektil = sprites.createProjectileFromSide(img`
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
`, 0, 100)
})
```

## {Schritt 3 @fullscreen}

Klicke auf das graue Feld in ``||sprites:Projektil von der Seite||`` und male ein einzelnes weißes Pixel als Stern.

![Sternbild erstellen](/static/concepts/star-field/creating-star-image.gif)

```blocks
game.onUpdate(function () {
    let projektil = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 0, 100)
})
```

## {Schritt 4 @fullscreen}

Nimm einen ``||Math:wähle eine zufällige Zahl von 0 bis 10||`` aus ``||Math:Mathematik||``. Setze ihn in das Feld ``||sprites:vy||`` von ``||sprites:Projektil||``, direkt über die ``100``. Ändere in ``||Math:wähle eine zufällige Zahl von 0 bis 10||`` die ``0`` auf ``20`` und die ``10`` auf ``30``.

```blocks
game.onUpdate(function () {
    let projektil = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 0, randint(20, 30))
})
```

## {Schritt 5}

Geh zurück zu ``||sprites:Sprites||`` und suche ``||sprites:setze Position von meinSprite auf||``. Setze ihn unter ``||variables(sprites):setze projektil auf||`` und ändere ``||variables:meinSprite||`` in ``||variables:projektil||``.

```blocks
game.onUpdate(function () {
    let projektil = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 0, randint(20, 30))
    projektil.setPosition(0, 0)
})
```

## {Schritt 6}

Nimm noch einen ``||Math:wähle eine zufällige Zahl von 0 bis 10||`` und setze ihn als ``||sprites:x||``-Wert in ``||sprites:setze Position von projektil auf||`` ein. Suche ``||scene:Bildschirmbreite||`` in ``||scene:Szene||`` und ersetze damit die ``10`` in ``||Math:wähle eine zufällige Zahl von 0 bis 10||``.

```blocks
game.onUpdate(function () {
    let projektil = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 0, randint(20, 30))
    projektil.setPosition(randint(0, scene.screenWidth()), 0)
})
```

## {Schritt 7 @fullscreen}

Jetzt entstehen zu viele Sterne. Das kannst du beheben, indem du die Blöcke in ``||game:wenn Spielupdate||`` mit einem ``||logic:wenn dann||``-Block umschließt.

![Mit wenn dann umschließen](/static/concepts/star-field/surround-if-then.gif)

```blocks
game.onUpdate(function () {
    if (true) {
        let projektil = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 0, randint(20, 30))
        projektil.setPosition(randint(0, scene.screenWidth()), 0)
    }
})
```

## {Schritt 8}

Hol dir einen ``||Math:0 % Chance||``-Block aus ``||math:Mathematik||`` und ersetze damit die Bedingung ``true`` in ``||logic: wenn dann||``. Ändere den Prozentwert von ``0`` auf ``25``.

```blocks
game.onUpdate(function () {
    if (Math.percentChance(25)) {
        let projektil = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 0, randint(20, 30))
        projektil.setPosition(randint(0, scene.screenWidth()), 0)
    }
})
```

## {Geschafft}

Super, dein Sternenfeld ist fertig! Bau darauf jedes Spiel, das du möchtest, oder mach mit dem nächsten Schritt weiter – dort wartet eine Herausforderung, mit der du deinen Code verbessern kannst.

## {Extra-Herausforderung @fullscreen}

In Wirklichkeit sind die Sterne im Weltall Millionen Lichtjahre von allem anderen entfernt. Deshalb sollten sie mit anderen Objekten dort draußen nicht zusammenstoßen.

Suche ``||sprites:setze meinSprite automatisch zerstören||`` in ``||sprites:Sprites||``. Setze ihn unter ``||variables(sprites):setze projektil auf||`` und ändere ``||variables:meinSprite||`` in ``||variables:projektil||``. Ändere ``||sprites:automatisch zerstören||`` in ``||sprites:Geist||`` und klicke auf ``AUS``, um es auf ``AN`` zu schalten.

Das wirkt sich auch stark auf die Bildrate aus, weil das Spiel dann nicht mehr prüfen muss, ob die Sterne andere Sprites im Spiel überlappen.

```blocks
game.onUpdate(function () {
    if (Math.percentChance(25)) {
        let projektil = sprites.createProjectileFromSide(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . 1 . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, 0, randint(20, 30))
        projektil.setPosition(randint(0, scene.screenWidth()), 0)
        projektil.setFlag(SpriteFlag.Ghost, true)
    }
})
```
