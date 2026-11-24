# create APA102 Strip

Erstellt eine Steuerung für einen adressierbaren APA102-LED-Streifen.

```sig
light.createAPA102Strip();
```

Wenn du einen APA102-Pixelstreifen an deinen @boardname@ anschließt, musst du deinem Programm eine Möglichkeit geben,
damit zu arbeiten. Mit ``||create apa102 strip||`` teilst du deinem Programm mit, dass es einen Pixelstreifen gibt,
den du verwenden möchtest.

Um ``||create apa102 strip||`` zu verwenden, musst du wissen, an welchen Pins der Streifen für Daten- und Taktsignal angeschlossen ist und
wie viele Pixel (LEDs) der Streifen hat. Außerdem haben manche Pixelstreifen unterschiedliche LED-Typen.
Wenn du den genauen Typ kennst, kannst du ihn im Pixelmodus einstellen. 

## Parameter

* **dataPin**: [DigitalInOutPin](/reference/pins), der Pin, an dem der Neopixel-Streifen für die Daten angeschlossen ist.
* **clkPin**: [DigitalInOutPin](/reference/pins), der Pin, an dem der Neopixel-Streifen für das Taktsignal angeschlossen ist.
* **numleds**: die [Anzahl](/types/number) der LEDs im Streifen, wie: 10, 30, 60 oder 64.

## Rückgabewert

* eine neue **NeoPixelStrip**-Steuerung für die Neopixel auf einem APA102-Streifen, der an das Board angeschlossen ist.

## Beispiel

Schließe einen APA102-Pixelstreifen an die Pins `A1` und `A2` an. Lass alle Pixel `grün` leuchten.

```typescript
const strip = light.createStrip(pins.A1, pins.A2, 40);
strip.setAll(0x00ff00)
```

## Siehe auch

[Bereich](/reference/light/neopixelstrip/range), [Modus festlegen](/reference/light/neopixelstrip/set-mode)

```package
light
```
