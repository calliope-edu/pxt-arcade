# Hintergrundfarbe

Ruft die Hintergrundfarbe des Bildschirms ab.

```sig
scene.backgroundColor()
```

Die Hintergrundfarbe ist die Farbe, die hinter allen anderen Bildern auf dem Bildschirm gemalt wird.

### ~ hint

#### Farbnummer

Es stehen 16 Farben zur Auswahl. Diese Farben sind in der aktuellen Farb-_Palette_ festgelegt.
Die Palette enthält eine Sammlung von Farben, von denen jede eine Indexnummer von `0` bis `15` hat. Der Index
wird auch **Farbnummer** genannt. Solange die Palette nicht geändert wird, enthält sie standardmäßig
diese Farben:

* `0`: transparent
* `1`: weiß
* `2`: rot
* `3`: rosa
* `4`: orange
* `5`: gelb
* `6`: türkis
* `7`: grün
* `8`: blau
* `9`: hellblau
* `10`: lila
* `11`: helllila
* `12`: dunkellila
* `13`: hellbraun
* `14`: braun
* `15`: schwarz

### ~

## Rückgabe

* eine [Zahl](/types/number): die als Hintergrundfarbe des Bildschirms eingestellte Farbe.

## Beispiel #example

Zeige ein lila Quadrat auf dem Bildschirm. Wechsle jede Sekunde die Hintergrundfarbe zwischen hell und dunkel.

```blocks
let showSquare: Sprite = null
let purpleSquare: Image = null
let toggle = false
toggle = true
purpleSquare = image.create(32, 32)
purpleSquare.fill(11)
showSquare = sprites.create(purpleSquare)
game.onUpdateInterval(1000, function () {
    scene.setBackgroundColor((scene.backgroundColor() + 1) % 2) //toggle between 0 and 1

})
```

## Siehe auch #seealso

[setze Hintergrundfarbe](/reference/scene/set-background-color)