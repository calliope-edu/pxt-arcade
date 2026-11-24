# Hintergrundfarbe festlegen

Lege die Hintergrundfarbe des Bildschirms fest.

```sig
scene.setBackgroundColor(0)
```

Du kannst die Hintergrundfarbe des Bildschirms jederzeit festlegen. Die Hintergrundfarbe liegt immer hinter anderen Bildern, die auf dem Bildschirm angezeigt werden.

### ~ hint

#### Farbnummer

Es stehen 16 Farben zur Auswahl. Diese Farben sind in der aktuellen Farb-_Palette_ festgelegt.
Die Palette enthält eine Sammlung von Farben, die jeweils eine Indexnummer von `0` bis `15` haben. Der Index
wird auch **Farbnummer** genannt. Solange die Palette nicht geändert wird, enthält sie diese Farben als
Standard:

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
* `13`: beige
* `14`: braun
* `15`: schwarz

### ~

## Parameter

* **color**: die [Zahl](/types/number) der Farbe, die als Hintergrundfarbe des Bildschirms festgelegt werden soll.

## Beispiel #example

Zeige ein lila Quadrat auf dem Bildschirm an. Wechsle jede Sekunde die Hintergrundfarbe zwischen hell und dunkel.

```blocks
let showSquare: Sprite = null
let purpleSquare: Image = null
let toggle = false
toggle = true
purpleSquare = image.create(32, 32)
purpleSquare.fill(11)
showSquare = sprites.create(purpleSquare)
game.onUpdateInterval(1000, function () {
    if (toggle) {
        scene.setBackgroundColor(1)
    } else {
        scene.setBackgroundColor(0)
    }
    toggle = !(toggle)
})
```

## Siehe auch #seealso

[Hintergrundbild festlegen](/reference/scene/set-background-image)