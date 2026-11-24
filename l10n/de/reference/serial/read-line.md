# Zeile lesen

Lies die gepufferten seriellen Daten als Textzeile.

```sig
serial.readLine();
```

Die Daten werden als Zeichenfolge bzw. Textzeile aus dem seriellen Empfangspuffer gelesen, bis ein Zeilenumbruch-Trennzeichen gefunden wird. Die zurückgegebene Zeichenfolge enthält das Zeilenumbruchzeichen.

## Rückgabewert

* eine [Zeichenfolge](/types/string) mit einer Textzeile, die von der seriellen Schnittstelle empfangen wurde. Die Zeichenfolge ist leer, wenn keine Daten verfügbar sind.

## Siehe auch #seealso

[Zeichenfolge lesen](/reference/serial/read-string)
[Zeile schreiben](/reference/serial/write-line),

```package
serial
```