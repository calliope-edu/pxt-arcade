# create Strip

Erstellt eine Steuerung für einen programmierbaren LED-Streifen.

```sig
light.createStrip();
```
Wenn du einen Pixelstreifen an deinen @boardname@ anschließt, musst du deinem Programm eine Möglichkeit geben,
damit zu arbeiten. Mit ``||create strip||`` teilst du deinem Programm mit, dass es einen Pixelstreifen gibt,
den du verwenden möchtest.

Um ``||create strip||`` zu verwenden, musst du wissen, an welchem Pin der Streifen angeschlossen ist und
wie viele Pixel (LEDs) der Streifen hat. Außerdem haben manche Pixelstreifen unterschiedliche LED-Typen.
Wenn du den genauen Typ kennst, kannst du ihn im Pixelmodus einstellen. 

## Parameter

* **pin**: [DigitalInOutPin](/reference/pins), der Pin, an dem der Neopixel-Streifen angeschlossen ist.
* **numleds**: die [Anzahl](/types/number) der LEDs im Streifen, wie: 10, 30, 60 oder 64.

## Rückgabewert

* eine neue **NeoPixelStrip**-Steuerung für die Neopixel auf einem Streifen, der an das Board angeschlossen ist.

## Beispiel

Schließe einen Pixelstreifen an den Pin `A1` an. Lass alle Pixel `grün` leuchten.

```typescript
const strip = light.createStrip(pins.A1, 10);
strip.setAll(0x00ff00)
```

## Siehe auch

[``||range||``](/reference/light/neopixelstrip/range), [``||set mode||``](/reference/light/neopixelstrip/set-mode)

```package
light
```
