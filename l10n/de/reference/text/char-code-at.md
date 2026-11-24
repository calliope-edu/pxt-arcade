# char Code At (Zeichencode an)

Rufe den Code eines Zeichens (Buchstabe, Ziffer oder Symbol) an einer Stelle in einem Text-String ab.

```sig
"".charCodeAt(0)
```

Ähnlich wie die Position eines Buchstabens im Alphabet oder die übliche Reihenfolge der Zeichen in einer Sprache bekommen Zeichen am Computer einen Code in einem Zeichensatz. Wenn ein Zeichensatz nur die 5 Zeichen "ABCDE" hätte, dann hätte 'A' als erstes Zeichen den Zeichencode `0` und 'D' den Zeichencode `3`.

Du kannst den Code eines Zeichens in einem Text-String herausfinden, indem du es über seine Position im String auswählst.

## Parameter

- **index**: die [Zahl](/types/number) für die Position im Text-String, deren Zeichencode zurückgegeben werden soll.

## Rückgabewert

- eine [Zahl](/types/string), die der Code im Zeichensatz für die ausgewählte Position im Text-String ist.

## Beispiel

Finde den Zeichencode des Zeichens an Position `6` in einem String.

```blocks
let sentence = "Super space ship"
let myCharCode = sentence.charCodeAt(6)
```

## Siehe auch

[Zeichen an](/reference/text/char-at),
[substr](/reference/text/substr)