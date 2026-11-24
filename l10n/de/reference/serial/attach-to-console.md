# an Konsole anhängen

Leite die in die Konsole geschriebenen Daten zusätzlich über die serielle Verbindung aus.

```sig
serial.attachToConsole()
```

Wenn du die Konsole an die serielle Sendeverbindung anhängst, werden alle Informationen, die du in die Konsole schreibst, auch über die serielle Verbindung übertragen.

## Beispiel #example

Sende einige Konsolen-Lognachrichten über die serielle Verbindung.

```blocks
serial.attachToConsole()
console.log("Send this message to the serial connection")
console.logValue("SerialValue", 999)
```

## Siehe auch #seealso

[umleiten](/reference/serial/redirect)

```package
serial
```
