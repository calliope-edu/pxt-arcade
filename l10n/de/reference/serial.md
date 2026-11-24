# Seriell

Daten über eine serielle Verbindung lesen und schreiben.

## Lesen

```cards
serial.readUntil(Delimiters.NewLine);
serial.readLine();
serial.readString();
serial.readBuffer();
```

## Schreiben

```cards
serial.writeLine("");
serial.writeNumber(0);
serial.writeValue("x", 0);
serial.writeString("");
serial.writeBuffer(null);
```

## Ereignisse

```cards
serial.onDelimiterReceived(Delimiters.NewLine, function () {})
serial.onEvent(SerialEvent.DataReceived, function () {})
```

## Konfiguration

```cards
serial.setRxBufferSize(64);
serial.setTxBufferSize(64);
serial.redirect
serial.setBaudRate(BaudRate.BaudRate115200)
serial.redirect(null, null, BaudRate.BaudRate115200)
serial.attachToConsole()
```

## Fortgeschritten

```cards
serial.createSerial(undefined, undefined);
```

## Siehe auch

[lesen bis](/reference/serial/read-until),
[Zeile lesen](/reference/serial/read-line),
[Zeichenfolge lesen](/reference/serial/read-string),
[Puffer lesen](/reference/serial/read-buffer),
[Zeile schreiben](/reference/serial/write-line),
[Zeichenfolge schreiben](/reference/serial/write-string),
[Zahl schreiben](/reference/serial/write-number),
[Wert schreiben](/reference/serial/write-value),
[Puffer schreiben](/reference/serial/write-buffer),
[bei Ereignis](/reference/serial/on-event),
[wenn Trennzeichen empfangen](/reference/serial/on-delimiter-received),
[RX-Puffergröße festlegen](/reference/serial/set-rx-buffer-size),
[TX-Puffergröße festlegen](/reference/serial/set-tx-buffer-size),
[Baudrate festlegen](/reference/serial/set-baud-rate),
[umleiten](/reference/serial/redirect),
[an Konsole anhängen](/reference/serial/attach-to-console),
[seriell erstellen](/reference/serial/create-serial)

```package
serial
```