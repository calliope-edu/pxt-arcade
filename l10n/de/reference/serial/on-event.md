# bei Ereignis

Führe Code aus, wenn Daten empfangen werden oder wenn der Empfangspuffer voll ist.

```sig
serial.onEvent(SerialEvent.DataReceived, function () {})
```

Wenn dein Programm neue Daten lesen soll, sobald sie empfangen werden, kannst du das Ereignis ``data received`` verwenden. So erhältst du neue Daten, ohne es zuerst mit einer der Lesefunktionen versuchen zu müssen. Außerdem kannst du ein Ereignis nutzen, um Daten zu lesen, wenn der Empfangspuffer voll ist. So wartet dein Programm, bis eine bestimmte Datenmenge empfangen wurde, bevor es sie einliest.

## Parameter

* **event**: das Empfangsereignis, auf das gewartet wird. Du kannst Code sofort beim Empfang von Daten ausführen oder das Ereignis warten lassen, bis der Empfangspuffer voll ist. Die Empfangsereignisse sind: ``data received`` und ``rx buffer full``.
* **handler**: der Code, der ausgeführt wird, wenn das Empfangsereignis eintritt.

## Beispiel #example

### Ereignis „Daten empfangen“ #ex1

Baue eine Zeichenfolge aus den Zeichen auf, während sie über die serielle Verbindung empfangen werden.

```blocks
let myChars = ""
serial.onEvent(SerialEvent.DataReceived, function () {
    myChars += serial.readString()
})
```

### Ereignis „Empfangspuffer voll“

Setze die Größe des Empfangspuffers auf `80`. Lies alle Daten im Empfangspuffer, wenn er voll ist.

```blocks
let myChars = ""
serial.setRxBufferSize(80)
serial.onEvent(SerialEvent.RxBufferFull, function () {
    myChars = serial.readString()
})
```

## Siehe auch #seealso

[wenn Trennzeichen empfangen](/reference/serial/on-delimiter-received)

```package
serial
```