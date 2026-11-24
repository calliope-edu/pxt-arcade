# is Empty

Legt fest, ob ein Text-String Zeichen enthält oder nicht.

```sig
"".isEmpty()
```

## Rückgabewert

* ein [boolean](/types/boolean) Wert, der `true` ist, wenn keine Zeichen darin enthalten sind, oder `falsch` wenn ein oder mehrere Zeichen vorhanden sind.

## Beispiel

Überprüfe, ob eine Zeichenkette namens `myString` leer ist.

```blocks
let myString = ""
let emptyStatus = false
if (myString.isEmpty()) {
    emptyStatus = true
}
```

## Siehe auch #seealso

[enthält](/reference/text/includes)