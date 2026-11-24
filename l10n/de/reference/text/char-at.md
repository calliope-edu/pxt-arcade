# char At

Hole ein Zeichen (Buchstabe, Zahl oder Symbol) von einem Platz in einer Zeichenkette.

```sig
"".charAt(0);
```

Du kannst herausfinden, welches Zeichen sich an einer beliebigen Stelle in irgendeinem Text befindet. Du könntest Text haben, der `"Hallo da!"` lautet. Das Zeichen an Position 6 ist `'t'`. Das Wort "Hallo" plus das Leerzeichen haben die Positionen 0-5, also ist 't' an Position 6. Um das Zeichen an dieser Position zu erhalten, den Buchstaben `'t'`, kannst du einen Block wie diesen verwenden:

```block
let begruessen = "Hallo dort!";
let tee = begruessen.charAt(6);
```

## Parameter

* **Index**: die [Nummer](/types/number) für die Position im Textstring, für die ein Zeichen zurückgegeben werden soll.

## Rückgabewert

* ein [String](/types/string) bestehend aus einem Zeichen, das aus der gewählten Position im Textstring stammt.

## Beispiel

Mach einen lustigen neuen Satz aus einem existierenden Satz, indem du jeden anderen Buchstaben wählst.

```blocks
let sentence = "Cinnamon vanilla latte";
let funnySentence = "";
for (let i = 0; i < sentence.length; i++) {
    if (i % 2 > 0) {
        funnySentence = funnySentence + sentence.charAt(i);
    }
}
```

## Siehe auch

[char code at](/reference/text/char-code-at), [substr](/reference/text/substr)