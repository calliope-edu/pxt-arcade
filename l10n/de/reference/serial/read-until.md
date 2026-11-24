# lesen bis

Lies Text von der seriellen Schnittstelle, bis ein Trennzeichen gefunden wird.

```sig
serial.readUntil(",");
```

## Rückgabewert

* eine [Zeichenfolge](/types/string) mit den Eingaben von der seriellen Schnittstelle, zum Beispiel einer Antwort, die jemand eingetippt hat

## Beispiel #example

Das folgende Beispiel liest Zeichenfolgen, die durch Kommas (``,``) getrennt sind.

```blocks
basic.forever(() => {
    let answer = serial.readUntil(",");
    serial.writeLine(answer);
});
```

## Siehe auch #seealso

[seriell](/device/serial),
[seriell Zeile schreiben](/reference/serial/write-line),
[seriell Wert schreiben](/reference/serial/write-value)
