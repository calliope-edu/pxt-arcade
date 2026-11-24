# create Strip

Gibt eine Steuerung für den standardmäßigen programmierbaren LED-Streifen zurück.

```sig
light.defaultStrip();
```

Der Standard-LED-Streifen ist entweder ein Streifen auf dem Board oder einer, der an das Board angeschlossen und als Standard festgelegt ist.

## Rückgabewert

* eine neue **NeoPixelStrip**-Steuerung für den Standard-Neopixel-Streifen, der an das Board angeschlossen oder darauf vorhanden ist.

## Beispiel

Hole dir den Standard-Pixelstreifen des Boards. Lass alle Pixel `grün` leuchten.

```typescript
const strip = light.defaultStrip( );
strip.setAll(0x00ff00)
```

## Siehe auch

[Streifen auf dem Board](/reference/light/neopixelstrip/onboard-strip),
[Bereich](/reference/light/neopixelstrip/range),
[Modus festlegen](/reference/light/neopixelstrip/set-mode)

```package
light
```
