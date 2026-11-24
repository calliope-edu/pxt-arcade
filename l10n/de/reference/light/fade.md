# fade

Blendet eine Farbe um einen Helligkeitswert ab.

```sig
light.fade(128, 128);
```

Die Helligkeit, auf die du die Farbe abblendest, reicht von 0 (völlig dunkel, keine Farbe mehr) bis 255
(die ganze aktuelle Farbe, keine Änderung der Helligkeit). Irgendwo zwischen diesen beiden Zahlen liegt
der Farbton, auf den du die Farbe abblenden möchtest.

## Parameter

* **color**: eine [Zahl](/types/number), die die RGB-Farbe ist, die abgeblendet wird, wie: 0x0000ff
* **brightness**: eine [Zahl](/types/number) zwischen `0` (völlig dunkel) und `255` (volle Helligkeit, gar kein Abblenden)

## Rückgabewert

* eine [Zahl](/types/number), die der RGB-Wert der abgeblendeten Farbe ist.

## Beispiel

Blende das `grüne` Licht der Pixel auf halbe Helligkeit ab, wenn der Knopf `A` gedrückt wird.
Die Zahl `128` ist ungefähr die Hälfte der vollen Helligkeit (255).

```blocks
let strip = light.createStrip()
input.buttonA.onEvent(ButtonEvent.Click, () => {
    strip.setAll(light.fade(0x00ff00, 128))
})
```

[``||rgb||``](/reference/light/rgb)

```package
light
```


