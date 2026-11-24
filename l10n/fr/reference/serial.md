# Série

Lire et écrire des données via une connexion série.

## Lire

```cards
serial.readUntil(Delimiters.NewLine);
serial.readLine();
serial.readString();
serial.readBuffer();
```

## Écrire

```cards
serial.writeLine("");
serial.writeNumber(0);
serial.writeValue("x", 0);
serial.writeString("");
serial.writeBuffer(null);
```

## Événements

```cards
serial.onDelimiterReceived(Delimiters.NewLine, function () {})
serial.onEvent(SerialEvent.DataReceived, function () {})
```

## Configuration

```cards
serial.setRxBufferSize(64);
serial.setTxBufferSize(64);
serial.redirect
serial.setBaudRate(BaudRate.BaudRate115200)
serial.redirect(null, null, BaudRate.BaudRate115200)
serial.attachToConsole()
```

## Avancé

```cards
serial.createSerial(undefined, undefined);
```

## Voir aussi

[lire jusqu'à](/reference/serial/read-until),
[lire une ligne](/reference/serial/read-line),
[lire une chaîne](/reference/serial/read-string),
[lire un tampon](/reference/serial/read-buffer),
[écrire une ligne](/reference/serial/write-line),
[écrire une chaîne](/reference/serial/write-string),
[écrire un nombre](/reference/serial/write-number),
[écrire une valeur](/reference/serial/write-value),
[écrire un tampon](/reference/serial/write-buffer),
[lors d'un événement](/reference/serial/on-event),
[lorsque le délimiteur est reçu](/reference/serial/on-delimiter-received),
[définir la taille du tampon de réception](/reference/serial/set-rx-buffer-size),
[définir la taille du tampon d'émission](/reference/serial/set-tx-buffer-size),
[définir le débit en bauds](/reference/serial/set-baud-rate),
[rediriger](/reference/serial/redirect),
[attacher à la console](/reference/serial/attach-to-console),
[créer une liaison série](/reference/serial/create-serial)

```package
serial
```