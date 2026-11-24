# Länge

Anzahl der Zeichen in der Zeichenfolge.

```block
let text = "";
text.length;
```

## Rückgabewert

* eine [Zahl,](/types/number) die die Länge (Anzahl der Zeichen) in der Textzeichenfolge ist.

## Beispiel

Füge einen Text zu einem String hinzu, bis er mindestens 100 Zeichen lang ist.

```blocks
let tooShort = "";
while (tooShort.length < 100)
{
    tooShort = tooShort + "add some more...";
}
```