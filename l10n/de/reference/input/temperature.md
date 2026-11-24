# Temperatur

Finde die Temperatur an deinem Ort heraus. Die Temperatur wird in Celsius (metrisch) oder Fahrenheit (imperial) gemessen.
Der @boardname@ kann die Temperatur in der Umgebung ermitteln, indem er prüft, wie heiß seine Computerchips sind.

```sig
input.temperature(TemperatureUnit.Celsius);
```
## Parameter

* **unit**: die Temperatureinheit, entweder Celsius oder Fahrenheit.

## Rückgabewert

* eine [Zahl](/types/number), die die Temperatur in Grad Celsius oder Fahrenheit angibt.

### Wie funktioniert das?

Der @boardname@ prüft, wie heiß seine CPU (der Hauptcomputerchip) ist.
Weil der @boardname@ normalerweise nicht sehr heiß wird, liegt die Temperatur der CPU
meist nahe an der Temperatur deiner Umgebung.
Der @boardname@ kann sich aber etwas erwärmen, wenn du ihn hart arbeiten lässt!

## Beispiele #example

### @boardname@-Thermometer #ex1

Verwende **Temperatur** und **set all**, um die Helligkeit der Pixel abhängig von der Raumtemperatur zu verändern.

```blocks
let pixels = light.createStrip();

forever(() => {
    pixels.setBrightness(Math.map(
        input.temperature(TemperatureUnit.Celsius),
        0,
        50,
        0,
        255
    ));
    pixels.setAll(0xff0000);
});
```


### Fahrenheit-Thermometer #ex2

Miss die Temperatur in Grad Fahrenheit.

```blocks
let pixels = light.createStrip()

forever(() => {
    pixels.setBrightness(Math.map(
        input.temperature(TemperatureUnit.Fahrenheit),
        30,
        100,
        0,
        255
    ));
    pixels.setAll(0xff0000);
})
```

### ~hint
**Probier das aus**

Vergleiche die Temperatur, die dein @boardname@ anzeigt, mit einem echten Thermometer am selben Ort.
Vielleicht findest du heraus, wie viel du von der Zahl abziehen musst, die der @boardname@
anzeigt, um die echte Temperatur zu erhalten. Dann kannst du dein Programm so ändern, dass der @boardname@ ein
besseres Thermometer ist.

### ~

## Siehe auch #seealso

[wenn Temperaturbedingung sich ändert](/reference/input/on-temperature-condition-changed)

