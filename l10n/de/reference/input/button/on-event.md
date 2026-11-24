# wenn Ereignis

Führe Code aus, wenn ein Knopf (``A``, ``B`` oder beide ``A`` + ``B``) geklickt, doppelt geklickt oder anders betätigt wird.

```sig
input.buttonA.onEvent(ButtonEvent.Click, () => {

})
```

## ~hint

**Berührung**

Wenn dein Board Pins oder Flächen hat, die als Berührungseingänge funktionieren, kann dein Code sie genauso wie Knöpfe verwenden.
Statt `button A` oder `button B` als Eingabequelle anzugeben, verwendest du einen Pin-Namen wie `pin A1`.

```block
input.pinA1.onEvent(ButtonEvent.Down, function() {
    console.log("Press down")
})
```

Lies mehr über [**Berührungssensoren**](/reference/input/button/touch-sensors) und wie du die Pins als Berührungsknöpfe verwendest.

## ~

## Parameter

* ``ev`` die Knopfaktion, für die Code ausgeführt werden soll. Die Knopfaktionen (Ereignisse) sind:
> * ``click``: Knopf wurde geklickt (gedrückt und losgelassen)
> * ``double click``: Knopf wird zweimal sehr schnell geklickt (zweimal kurz hintereinander gedrückt und losgelassen)
> * ``long click``: Knopf wird losgelassen, nachdem er lange gedrückt gehalten wurde, etwa eine Sekunde oder länger
> * ``up``: Knopf wird nach dem Drücken losgelassen
> * ``down``: Knopf wird gerade heruntergedrückt
> * ``held``: Knopf wurde gedrückt und ist immer noch gedrückt
* ``body`` der Code, der ausgeführt werden soll, wenn etwas mit einem Knopf passiert

## Beispiele #example

### Knopf loslassen #ex1

Gib eine Nachricht aus, wenn der Knopf ``B`` losgelassen wird.

```blocks
input.buttonB.onEvent(ButtonEvent.Up, function() {
    console.log("Release button")
})
```

### Berühren #ex2

Gib eine Nachricht aus, wenn du den kapazitiven Pin `pin A1` auf dem Board berührst oder loslässt.

```blocks
input.pinA1.onEvent(ButtonEvent.Down, function() {
    console.log("Touch pin")
})
input.pinA1.onEvent(ButtonEvent.Up, function() {
    console.log("Release pin")
})
```

## Siehe auch #seealso

[ist gedrückt](/reference/input/button/is-pressed),
[wurde gedrückt](/reference/input/button/was-pressed),
[Zufallszahl](/blocks/math#random-value)

[Berührungssensoren](/reference/input/button/touch-sensors)
