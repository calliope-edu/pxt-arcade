# i2c Write Register

Schreibt einen Zahlenwert in ein Register eines Geräts an einer Adresse am I2C-Bus.

```sig
pins.i2cWriteRegister(0, 0, 0)
```

Geräte, die an einen I2C-Bus angeschlossen sind, haben oft Register, in denen Datenwerte als Status oder Aktionsanforderungen gesetzt werden. Obwohl das Gerät über eine einzige Adresse angesprochen wird, kann es mehrere Register haben. Jedes Register hat einen Index, damit ein Schreibvorgang den Datenwert an die richtige Stelle legen kann. Register sind wie Postfächer in einer Post, die jeweils einen einzigen Zahlenwert enthalten.

## Parameter

* **address**: eine [Zahl](types/number) zwischen `8` und `123`, die die Adresse eines Chips am I2C-Bus ist.
* **register**: eine [Zahl](types/number), die der Index des Geräteregisters ist, in das geschrieben werden soll.
* **value**: eine [Zahl](types/number), die auf den I2C-Bus geschrieben wird. Ihre Größe (Anzahl der Bytes) hängt davon ab,
was du in **valueFormat** angibst.
* **valueFormat**: eine optionale Formatangabe für die Zahl, die du in das Register schreibst, zum Beispiel: `UInt16LE`. Der Standard ist ``UInt8LE``. 

## Beispiel

Schreibe einen Ausgabewert in das Wandlungsregister eines Digital-Analog-Wandlers (DAC). Der DAC ist mit Adresse `23` am I2C-Bus angeschlossen und das Wandlungsregister hat den Index `1`.

```blocks
let DAC = 23
let register = 1 
let dacData = 178
pins.i2cWriteRegister(DAC, register, dacData)
```

## Siehe auch

[i2c read register](/reference/pins/i2c-read-register)
[i2c write number](/reference/pins/i2c-write-number)
