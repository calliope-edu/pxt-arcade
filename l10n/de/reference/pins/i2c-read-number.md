# i2c Read Number

Liest eine Zahl von einer Adresse am I2C-Bus.

```sig
pins.i2cReadNumber(0, NumberFormat.Int8LE, false)
```

Wenn dein Board Pins mit der Beschriftung **SDA** und **SCL** hat, kannst du Zahlen von
anderen Chips lesen, die nicht auf deinem Board sind. Die Pins **SDA** und **SCL** werden mit anderen Chips
([ICs](https://wikipedia.org/wiki/Integrated_circuit)) verbunden, die ebenfalls diese Pins haben. Diese Verbindung
heißt [**I2C**](https://wikipedia.org/wiki/I2C). Sie braucht nur zwei Leitungen, um eine Zahl zu lesen oder
zu schreiben. Wie du dir denken kannst, ist eine Leitung für **SDA** und die andere für **SCL**.

Die Leitungen und die Signale, die durch sie laufen, nennt man zusammen einen _Bus_. Eine I2C-Verbindung ist
ein _I2C-Bus_.

Vielleicht weißt du, dass man zum Speichern einer Zahl in der Elektronik mehrere Bits digitaler Information braucht,
die alle gleichzeitig vorhanden sind (eine Kombination aus vielen hohen und niedrigen Spannungen in einem Chip). Da der I2C-Bus
nur zwei Leitungen hat, wandert eine Zahl Bit für Bit über eine der Leitungen. Die
Bits der Zahl sind kurze Impulse aus hoher und niedriger Spannung auf der **SDA**-Leitung. Über die **SCL**-Leitung
teilt ein Chip dem anderen mit, wann das nächste Bit der Zahl auf der **SDA**-Leitung liegt.

### Adressen

Damit es einfach bleibt, können beim I2C-Bus viele Chips an dieselben Leitungen angeschlossen werden. Praktisch, denn
es könnte ziemlich unübersichtlich werden, wenn sich die Chips die Leitungen nicht teilen könnten. Stell dir vor, die
Chips sind Häuser an einer Straße. Die Straße ist der Bus, an dem die Chips, also die Häuser, hängen. Wir wissen, dass
ein Haus an einer Straße normalerweise eine Adresse hat. Genauso ist es mit Chips an einem Bus. Ohne Adresse
würde eine Zahl über den Bus wandern, aber die Chips, die auf Eingaben warten, wüssten nicht, wer
sie empfangen soll.

Die Chips an deinem Bus können Adressnummern zwischen `8` und `123` haben. Achte
darauf, dass alle Chips eine andere Nummer verwenden, damit jeder auf seine eigene Adresse reagiert.

## Parameter

* **address**: eine [Zahl](types/number) zwischen `8` und `123`, die die Adresse eines Chips am I2C-Bus ist.
* **format**: der Typ der Zahl, die du vom Bus liest, zum Beispiel: `Int8LE`.
* **repeated**: ein [boolescher](/types/boolean) Wert, `true` oder `false`, der angibt, ob du sofort
noch einmal lesen willst.
>Normalerweise ist das `false`, wenn du eine Weile wartest, bevor du wieder vom Bus liest oder auf ihn schreibst.


## Rückgabewert

* eine [Zahl](types/number), die vom I2C-Bus gelesen wird. Sie ist ein oder mehrere
Bytes groß, je nachdem, welchen Typ du in **format** angegeben hast.

## Beispiel #example

Schließe einen Temperatursensor auf einem Steckbrett an die Pins **SDA** und **SCL** deines Boards an. Stelle deinen Sensor
so ein, dass er auf Adresse `24` reagiert. Lies alle 30 Sekunden die Temperatur vom Sensor und schreibe sie in Fahrenheit
an die serielle Schnittstelle.

```blocks
forever(() => {
    let celcius = pins.i2cReadNumber(24, NumberFormat.Int8LE, false)
    let fahr = Math.map(celcius, 0, 100, 32, 212)
    serial.writeValue("Degrees F", fahr)
    pause(30000)
})
```

## Siehe auch #seealso

[i2c write number](/reference/pins/i2c-write-number),
[create i2c](/reference/pins/create-i2c)
