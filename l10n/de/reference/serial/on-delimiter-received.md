# wenn Trennzeichen empfangen

Führe Code aus, wenn ein Trennzeichen empfangen wird.

```sig
serial.onDelimiterReceived(Delimiters.NewLine, function () {})
```

Das Ende einer Textzeile, einer Folge von Befehlszeichen und anderer Nachrichten wird oft durch ein besonderes Zeichen angezeigt. Dieses Zeichen heißt _Trennzeichen_. Übliche Trennzeichen sind Leerzeichen, Tabulatoren, Kommas und Zeilenumbrüche. Du kannst auf ein Trennzeichen warten und dein Programm dann die bereits empfangenen Daten verarbeiten lassen, sobald das Trennzeichen über die serielle Verbindung ankommt.

## Parameter

* **delimiter**: das Trennzeichen, auf das gewartet wird. Wähle ein Zeichen aus der Liste im Block. In JavaScript steht der Zeichenwert in der Aufzählung ``Delimiters``.
* **handler**: der Code, der ausgeführt wird, wenn das Trennzeichen empfangen wird.

### Beispiel #example

Lies eine Zeichenfolge, wenn das Zeilenumbruch-Trennzeichen empfangen wird.

```blocks
let myLine = ""
serial.onDelimiterReceived(Delimiters.NewLine, function () {
    myLine = serial.readString()
})
```

## Siehe auch #seealso

[bei Ereignis](/reference/serial/on-event),
[Zeichenfolge lesen](/reference/serial/read-string)

```package
serial
```