# wenn Temperaturzustand sich ändert

Führe Code aus, wenn die Temperatur von heiß zu kalt oder von kalt zu heiß wechselt.

```sig
input.onTemperatureConditionChanged(TemperatureCondition.Hot, 15, TemperatureUnit.Celsius, () => {
	
});
```

Du legst fest, welche Temperatur erreicht werden muss, bevor dein Code startet. Das ist die Temperatur-_Schwelle_.
Dein Code startet, wenn die Temperatur auf eine bestimmte Gradzahl in Celsius oder Fahrenheit abkühlt.
Du kannst deinen Code auch starten lassen, wenn sich die Temperatur auf eine bestimmte Gradzahl erwärmt.

Wähle den Zustand ``cold``, damit dein Code ausgeführt wird, wenn es auf deine gewählte Temperatur (Schwelle) abkühlt.
Oder verwende ``warm``, damit dein Code ausgeführt wird, wenn es sich auf deine Temperatur-_Schwelle_ erwärmt.

## Parameter

* **condition**: der Temperaturzustand, für den Code ausgeführt werden soll
>  * ``cold``: der Code wird ausgeführt, wenn die Temperatur auf einen bestimmten Wert abkühlt
>  * ``hot``: der Code wird ausgeführt, wenn sich die Temperatur auf einen bestimmten Wert erwärmt
* **temperature**: die Temperatur, die erreicht werden muss, bevor dein Code startet
* **unit**: die Temperatureinheit, Celsius oder Fahrenheit
* **handler**: der Code, der ausgeführt wird, wenn sich die Temperatur ändert

## Beispiel #example

Lass alle Pixel `blue` (blau) leuchten, wenn es kühl wird. Kühl bedeutet hier `10` Grad Celsius oder kälter.

```blocks
input.onTemperatureConditionChanged(TemperatureCondition.Cold, 10, TemperatureUnit.Celsius, () => {
	light.createStrip().setAll(0x0000ff);
})
```
## Siehe auch #seealso

[Temperatur](/reference/input/temperature)

```package
temperature
```
