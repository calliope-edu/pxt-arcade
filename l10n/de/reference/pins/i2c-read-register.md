# i2c Read Register

Liest einen Zahlenwert aus einem Register eines Geräts an einer Adresse am I2C-Bus.

```sig
pins.i2cReadRegister(0, 0)
```

Geräte, die an einen I2C-Bus angeschlossen sind, haben oft Register, in denen Datenwerte als Status oder Aktionsanforderungen gesetzt werden. Obwohl das Gerät über eine einzige Adresse angesprochen wird, kann es mehrere Register haben. Jedes Register hat einen Index, damit ein Lesevorgang den Datenwert von der richtigen Stelle holen kann. Register sind wie Postfächer in einer Post, die jeweils einen einzigen Zahlenwert enthalten.

## Parameter

* **address**: eine [Zahl](types/number) zwischen `8` und `123`, die die Adresse eines Chips am I2C-Bus ist.
* **register**: eine [Zahl](types/number), die der Index des Geräteregisters ist, das gelesen werden soll.
* **valueFormat**: eine optionale Formatangabe für die Zahl im Register, zum Beispiel: `UInt16LE`. Der Standard ist ``UInt8LE``. 

## Rückgabewert

* eine [Zahl](types/number), die aus dem **register** an der **address** am I2C-Bus gelesen wird. Ihre Größe (Anzahl der Bytes) hängt davon ab, was du in **valueFormat** angibst.

## Beispiel

Lies einen Wert von einem Temperatursensor, der am I2C-Bus angeschlossen ist. Der Sensor hat die Adresse `41` und das Register für den Temperaturwert hat den Index `3`.

```blocks
let sensor = 41
let register = 3
let temperature = 0
temperature = pins.i2cReadRegister(sensor, register)
```

## Siehe auch

[i2c write register](/reference/pins/i2c-write-register),
[i2c read number](/reference/pins/i2c-read-number)

