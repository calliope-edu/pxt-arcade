# write String

Schreibe einen Text an die serielle Schnittstelle, ohne eine neue Zeile zu beginnen.

```sig
serial.writeString("");
```
Nur der Text selbst wird an die serielle Schnittstelle geschrieben. Beim nächsten Schreiben
landet der Text in derselben Zeile wie dieser. Der Text wird geschrieben, ohne
eine neue Zeile zu beginnen.

## Parameter

* **text**: der [Text](/types/string), der an die serielle Schnittstelle geschrieben wird

## Beispiel #example

Schreibt das Wort `JUMBO` viele Male an die serielle Schnittstelle, ohne neue Zeilen.

```blocks
forever(() => {
    serial.writeString("JUMBO");
    pause(1000);
});
```

## Siehe auch #seealso

[schreibe Zeile](/reference/serial/write-line),
[schreibe Zahl](/reference/serial/write-number),
[schreibe Wert](/reference/serial/write-value)

```package
serial
```
