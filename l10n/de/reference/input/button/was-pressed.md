# wurde gedrückt

Prüfe, ob ein Knopf vorher gedrückt wurde.

```sig
input.buttonA.wasPressed()
```

Dass ein Knopf vorher gedrückt wurde, wird gespeichert. Sobald **wurde gedrückt** verwendet wird, wird das wieder vergessen und
das Ergebnis ist `false`, wenn du das nächste Mal mit **wurde gedrückt** prüfst (der _Zustand_ des Knopfs wird zurückgesetzt). Wenn du den Knopf aber erneut drückst, bevor du
mit **wurde gedrückt** prüfst, bekommst du `true`. 

## ~hint
**Berührung**

Wenn dein Board Pins oder Flächen hat, die als Berührungseingänge funktionieren, kann dein Code sie genauso wie Knöpfe verwenden.
Statt `button A` oder `button B` als Eingabequelle anzugeben, verwendest du einen Pin-Namen wie `pin A1`.

```block
if (input.pinA1.wasPressed()) {
    console.log("Hey, I was pressed.");
}
```

Lies mehr über [**Berührungssensoren**](/reference/input/button/touch-sensors) und wie du die Pins als Berührungsknöpfe verwendest.
## ~

## Rückgabewert

* ein [Wahrheitswert](types/boolean): `true`, wenn der Knopf vorher gedrückt wurde, `false`, wenn der Knopf vorher nicht gedrückt wurde

## Beispiel #example

Gib eine Nachricht aus, die anzeigt, ob Knopf `A` oder `B` gedrückt wurde.

```blocks
input.buttonB.onEvent(ButtonEvent.Click, function() {
    if (input.buttonA.wasPressed()) {
        console.log("Button A Pressed")
    } else {
        console.log("Button B Pressed")
    }
})
```

## Siehe auch #seealso

[ist gedrückt](/reference/input/button/is-pressed),
[wenn Ereignis](/reference/input/button/on-event)

[Berührungssensoren](/reference/input/button/touch-sensors)
