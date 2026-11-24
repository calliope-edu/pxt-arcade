# set Rx Buffer Size

Lege die Größe des Empfangspuffers für serielle Daten fest.

```sig
serial.setRxBufferSize(0)
```

Du kannst die Größe des Empfangspuffers der seriellen Verbindung festlegen. Wenn Daten schneller empfangen werden, als dein Programm sie liest, werden sie vorübergehend im Puffer gespeichert, bis sie gelesen werden. Wenn der Puffer voll wird, weil dein Programm ihn nicht oder nicht schnell genug liest, werden die ältesten Daten im Puffer verworfen, um Platz für die neu empfangenen Daten zu schaffen.

Du kannst eine Puffergröße wählen, die am besten dazu passt, wie dein Programm Daten einlesen will. Die Größe festzulegen ist auch nützlich, wenn du eine bestimmte Menge eingehender Daten mit einem [on rx buffer full](/reference/serial/on-event)-Ereignis lesen möchtest. Wenn du häufig nur kleine Datenmengen liest, kannst du den Puffer klein halten, um Speicher auf deinem Board zu sparen.

## Parameter

* **size**: eine [Zahl](/types/number) von Bytes (je 8 Datenbits) für den Empfangspuffer.

## Beispiel #example

Setze die Größe des Empfangspuffers auf `80`. Lies alle Daten im Empfangspuffer, wenn er voll ist.

```blocks
let myChars = ""
serial.setRxBufferSize(80)
serial.onEvent(SerialEvent.RxBufferFull, function () {
    myChars = serial.readString()
})
```

## Siehe auch #seealso

[setze Tx-Puffergröße](/reference/serial/set-tx-buffer-size),
[bei Ereignis](/reference/serial/on-event)

```package
serial
```
