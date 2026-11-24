# device Long Serial Number

Ruft die lange (64-Bit-)Seriennummer des @boardname@ ab.

```sig
control.deviceSerialNumber()
```

Die Systemsoftware deines Boards erzeugt eine eindeutige Nummer, um das Board zu identifizieren. Du kannst diese Nummer in deinem Programm verwenden, wenn du wissen willst, auf welchem Board dein Programm läuft.

## Rückgabewert

* ein [Puffer](/types/buffer), der einen 64-Bit-Wert enthält, der dieses Board eindeutig identifiziert.

## Beispiel #example

Schreibe die lange Seriennummer des Boards als Base64-Zeichenkette an die serielle Schnittstelle.

```blocks
console.log("serialnumber: " + control.deviceLongSerialNumber().toBase64())
```

## Siehe auch #seealso

[DAL-Version des Geräts](/reference/control/device-dal-version),
[Geräte-Seriennummer](/reference/control/device-serial-number)
