# set Tx Buffer Size

Lege die Größe des Sendepuffers für serielle Daten fest.

```sig
serial.setTxBufferSize(0)
```

Du kannst die Größe des Sendepuffers der seriellen Verbindung festlegen. Wenn dein Programm Daten schneller schreibt, als die serielle Verbindung sie übertragen kann, werden sie vorübergehend im Puffer gespeichert, bis sie gesendet sind. Wenn der Puffer voll wird, weil nicht schnell genug übertragen wurde, werden die ältesten Daten im Puffer verworfen, um Platz für die neueren Daten zu schaffen.

Wenn du häufig nur kleine Datenmengen schreibst, kannst du den Puffer klein halten, um Speicher auf deinem Board zu sparen.

## Parameter

* **size**: eine [Zahl](/types/number) von Bytes (je 8 Datenbits) für den Sendepuffer.

## Beispiel #example

Setze die Größe des Sendepuffers auf `40`. Schreibe einen Text, der in den Sendepuffer passt.

```blocks
serial.setTxBufferSize(40)
serial.writeString("Send me out. I'm not too big for the buffer.")
```

## Siehe auch #seealso

[setze Rx-Puffergröße](/reference/serial/set-rx-buffer-size)

```package
serial
```
