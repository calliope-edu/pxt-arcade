# set Light Threshold

Lege fest, wie hell oder dunkel es sein muss, damit ein Lichtereignis ausgelöst wird.

```sig
input.setLightThreshold(LightCondition.Dark, 0)
```

The [``||input:on light condition changed||``](/reference/input/on-light-condition-changed) startet,
wenn die Lichtbedingung eine bestimmte Helligkeit erreicht. Du entscheidest, ob das Ereignis eintreten soll, wenn
es heller oder dunkler wird. Das legst du fest, indem du `bright` oder `dark` für **condition**
in ``||input:set light threshold||`` wählst. Außerdem gibst du an, bei welcher Helligkeit das Ereignis eintritt,
wenn es heller oder dunkler wird.

## Parameter

* **condition**: die Lichtbedingung, die du prüfst, entweder `dark` oder `bright`.
* **value**: eine [Zahl](/types/number), die den Helligkeitswert angibt, bei dem ein Lichtereignis eintritt. Das ist eine Zahl zwischen `0` (völlig dunkel) und `255` (sehr hell).

## Beispiel #example

Lege eine Lichtbedingung für den Fall fest, dass es von hell zu halbdunkel wechselt. Lass die Pixel dann zu halbem Rot verblassen.

```blocks
const halfBright = 127;
let pixels = light.createStrip();

pixels.setAll(0xff0000);
input.setLightThreshold(LightCondition.Dark, halfBright);
input.onLightConditionChanged(LightCondition.Dark, () => {
	pixels.setAll(light.fade(light.rgb(255, 0, 0), halfBright));
});
```

## Siehe auch #seealso

[wenn Lichtbedingung sich ändert](/reference/input/on-light-condition-changed)

```package
lightsensor
```