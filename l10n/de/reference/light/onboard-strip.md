# eingebauter Streifen

Hol dir einen Controller für den eingebauten programmierbaren LED-Streifen.

```sig
light.onboardStrip();
```

Der eingebaute LED-Streifen ist ein Streifen, der sich auf dem Board befindet. Er ist normalerweise auch als [Standardstreifen](/reference/light/neopixelstrip/default-strip) festgelegt.

## Rückgabewert

* ein neuer **NeoPixelStrip**-Controller für den eingebauten NeoPixel-Streifen.

## Beispiel

Hol dir den eingebauten Pixelstreifen des Boards. Lass alle Pixel `grün` leuchten.

```typescript
const strip = light.onboardStrip( );
strip.setAll(0x00ff00)
```

## Siehe auch

[Standardstreifen](/reference/light/neopixelstrip/default-strip),
[Bereich](/reference/light/neopixelstrip/range),
[Modus festlegen](/reference/light/neopixelstrip/set-mode)

```package
light
```
