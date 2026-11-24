# write Number

Schreibe eine Zahl an die serielle Schnittstelle.

```sig
serial.writeNumber(0);
```
Die Zahl, die du sendest, wird vor dem Senden in einen Text umgewandelt. Ein Wert wie ``1023``
wird also als vierstelliger Text ``"1023"`` über die serielle
Verbindung gesendet. Die Zahl wird als Teil der aktuellen Zeile geschrieben, und danach wird keine
neue Zeile begonnen.

## Parameter

* **value**: die [Zahl](/types/number), die an die serielle Schnittstelle geschrieben wird

## Beispiel #example

Schreibe eine 10-stellige Zahl sehr, sehr oft an die serielle Schnittstelle.

```blocks
forever(() => {
    serial.writeNumber(1234567890);
    pause(5000);
});
```

## Siehe auch #seealso

[schreibe Zeile](/reference/serial/write-line),
[schreibe Wert](/reference/serial/write-value)

```package
serial
```
