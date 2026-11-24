# wenn Lichtverhältnis sich ändert

Führe Code aus, wenn sich die Lichtverhältnisse ändern.

```sig
input.onLightConditionChanged(LightCondition.Dark, function() {
});
```
Was entscheidet, ob es dunkel oder hell ist? Für beide Lichtverhältnisse wird eine Zahl zwischen `0` und `255` festgelegt. Diese Werte bestimmen, welcher Zustand ``dark`` (dunkel) und welcher ``bright`` (hell) bedeutet. Sie werden mit der Funktion ``||input:set light threshold||`` festgelegt.

## Parameter

* **condition**: das Lichtverhältnis, das erkannt werden soll
>  * ``dark``: dunkel, kein Licht erkannt
>  * ``bright``: das Licht ist hell genug, um erkannt zu werden
* **handler**: Code, der ausgeführt wird, wenn sich die Lichtverhältnisse ändern

## Beispiel #example

Dimme die roten Pixel auf halbe Helligkeit, wenn es dunkel wird.

```blocks
input.onLightConditionChanged(LightCondition.Dark, function() {
	light.createStrip().setAll(light.fade(light.rgb(255, 0, 0), 128))
})
```

## Siehe auch #seealso

[Lichtstärke](/reference/input/light-level),
[setze Lichtschwelle](/reference/input/set-light-threshold)
