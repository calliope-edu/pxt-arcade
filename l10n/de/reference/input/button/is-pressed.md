# ist gedrückt

Prüfe, ob ein Knopf gerade gedrückt wird oder nicht.

```sig
input.buttonA.isPressed()
```

## ~hint
**Berührung**

Wenn dein Board Pins oder Flächen hat, die als Berührungseingänge funktionieren, kann dein Code sie genauso wie Knöpfe verwenden.
Statt `button A` oder `button B` als Eingabequelle anzugeben, verwendest du einen Pin-Namen wie `pin A1`.

```block
if (input.pinA1.isPressed()) {
    console.log("Hey, I feel pressed.");
}
```
Lies mehr über [**Berührungssensoren**](/reference/input/button/touch-sensors) und wie du die Pins als Berührungsknöpfe verwendest.
## ~

## Rückgabewert

* ein [Wahrheitswert](types/boolean): `true`, wenn der Knopf gedrückt ist, `false`, wenn der Knopf nicht gedrückt ist

## Beispiel #example

Gib eine Nachricht aus, wenn Knopf `A` gedrückt ist.

```blocks
forever(function() {
    if (input.buttonA.isPressed()) {
        console.log("Button A is pressed")
    }
    pause(300)
})
```

## Siehe auch #seealso

[wurde gedrückt](/reference/input/button/was-pressed),
[wenn Ereignis](/reference/input/button/on-event)

[Berührungssensoren](/reference/input/button/touch-sensors)
