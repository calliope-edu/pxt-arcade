# Lichtstärke

Finde die Lichtstärke (wie hell oder dunkel es ist) an deinem Ort heraus.
Die Lichtstärke ``0`` bedeutet Dunkelheit und ``255`` bedeutet helles Licht.

```sig
input.lightLevel();
```

Beim ersten Aufruf liefert diese Funktion ``0``.
Danach liefert sie die echte Lichtstärke.
Das liegt daran, dass der _Lichtsensor_ (das Teil auf dem Board, das Licht erkennt)
erst eingeschaltet werden muss.

## Rückgabewert

* eine [Zahl](/types/number), die eine Lichtstärke von ``0`` (dunkel) bis ``255`` (hell) angibt.

## Beispiele #example

### Lichtstärke anzeigen #ex1

Wenn du Knopf `A` auf dem @boardname@ drückst, ändert
dieses Programm die Helligkeit der Pixel entsprechend.

```blocks
let pixels = light.createStrip();

input.buttonA.onEvent(ButtonEvent.Click, function() {
    let level = input.lightLevel();
    pixels.setBrightness(level);
    pixels.setAll(0xff0000);
});
```

### Lichtstärke als Diagramm #ex2

Dieses Programm zeigt die Lichtstärke mit einem [Diagramm](/reference/light/graph) auf den LEDs des @boardname@ an.
Wenn du den @boardname@ an verschiedene Orte mit unterschiedlicher Helligkeit trägst, ändert sich das Diagramm.

```blocks
let pixels = light.createStrip();

forever(function() {
    pixels.graph(
        input.lightLevel(),
        0
    );
});
```

## Siehe auch #seealso

[Beschleunigung](/reference/input/acceleration)

