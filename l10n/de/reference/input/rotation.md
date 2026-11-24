# Rotation

Finde heraus, wie stark der @boardname@ in eine Richtung geneigt ist.

```sig
input.rotation(Rotation.Roll);
```

## ~hint

Der @boardname@ hat ein Bauteil namens **Beschleunigungsmesser**, das
erkennen kann, wie sich der @boardname@ bewegt.

## ~

## Parameter

* ``kind`` die Richtung, die du prüfst:
> * `Pitch`: nach oben oder unten
> * `Roll`: nach links oder rechts

## Rückgabewert

* eine [Zahl](/types/number), die angibt, wie stark der @boardname@ in die angegebene Richtung geneigt ist, von `0` bis `360` Grad

## Beispiel: @boardname@-Wasserwaage #example

Dieses Programm hilft dir, den @boardname@ so zu bewegen, dass er waagerecht liegt. Wenn
er waagerecht ist, erscheint die Nachricht "LEVELED" in der Konsole.

```blocks
let roll = 0
let pitch = 0
forever(() => {
    pitch = input.rotation(Rotation.Pitch)
    roll = input.rotation(Rotation.Roll)
    if (Math.abs(pitch) < 10 && Math.abs(roll) < 10) {
        console.log("LEVELED")
    }
})
```

### ~hint
**Simulator**

Wenn du dieses Programm im Browser ausführst, kannst du den @boardname@ mit der Maus neigen.
### ~

## Siehe auch #seealso

[Beschleunigung](/reference/input/acceleration)

```package
accelerometer
```
