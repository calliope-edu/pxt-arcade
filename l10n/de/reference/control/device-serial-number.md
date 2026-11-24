# device Serial Number

Ruft die Seriennummer des @boardname@ ab.

```sig
control.deviceSerialNumber()
```

Die Systemsoftware deines Boards erzeugt eine eindeutige Nummer, um das Board zu identifizieren. Du kannst diese Nummer in deinem Programm verwenden, wenn du wissen willst, auf welchem Board dein Programm läuft.

## Rückgabewert

* eine [Zahl](/types/number), die erzeugt wird, um dieses Board eindeutig zu identifizieren.

## Beispiel #example

Schreibe die Seriennummer des Boards an die serielle Schnittstelle.

```blocks
serial.writeValue("serialnumber", control.deviceSerialNumber());
```

## Siehe auch #seealso

[lange Geräte-Seriennummer](/reference/control/device-long-serial-number),
[DAL-Version des Geräts](/reference/control/device-dal-version)
