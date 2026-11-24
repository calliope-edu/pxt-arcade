# seriell erstellen

Erstelle einen neuen seriellen Kommunikationskanal an den Pins.

```sig
serial.createSerial(pins.TX, pins.RX)
```

Wenn dein Board keine USB-Verbindung mit serieller Schnittstelle hat, kannst du einen seriellen Kommunikationskanal an seinen Pins erstellen. Vielleicht möchtest du auch einen weiteren seriellen Kanal, den nur dein Programm nutzt und für den du eine eigene Bus-Kennung festlegst.

Du wählst einen digitalen Pin zum Senden und einen anderen digitalen Pin zum Empfangen.

Dadurch wird eine Instanz des ``Serial``-Port-Objekts erstellt. Diese neue Instanz wird nicht als Geräteinstanz des Boards festgelegt, daher musst du die [seriellen](/reference/serial) Funktionen als Methoden des zurückgegebenen Objekts verwenden.

## Parameter

* **tx**: der digitale Pin, über den der neue serielle Kanal sendet.
* **rx**: der digitale Pin, über den der neue serielle Kanal empfängt.
* **id**: die Kennung des Ereignisbusses (optional).

## Rückgabewert

* eine ``Serial``-Instanz, mit der du direkt mit dem Bus arbeiten kannst.

## Beispiel #example

Erstelle dein eigenes serielles Kommunikationsgerät an den Pins **A0** und **A1**.

```typescript-ignore
let mySerial = serial.createSerial(pins.A0, pins.A1)
mySerial.serialDevice.setBaudRate(BaudRate.BaudRate9600)
mySerial.writeLine("My own serial connection")
```

## Siehe auch #seealso

[umleiten](/reference/serial/redirect)

```package
serial
```