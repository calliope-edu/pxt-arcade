# device Dal Version

Ruft die Versionsinformation der Systemsoftware auf dem @boardname@ ab.

```sig
control.deviceDalVersion()
```

## Rückgabewert

* eine [Zeichenkette](/types/string), die die Version der Systemsoftware (DAL) auf dem Board darstellt.

Gibt `"sim"` zurück, wenn der Simulator läuft, und `"linux"`, wenn das Programm auf einem Raspberry Pi läuft.

## Beispiel #example

Schreibe die Version der Systemsoftware an die serielle Schnittstelle.

```blocks
serial.writeLine("DAL version = " + control.deviceDalVersion());
```

## Siehe auch #seealso

[Geräte-Seriennummer](/reference/control/device-serial-number)
