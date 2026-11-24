# from Char Code

Erstellen Sie einen einzelnen Zeichenstring aus einer Zeichencode-Nummer.

```sig
String.fromCharCode(0);
```

Damit Computer Text verwenden können, benötigt jeder Buchstabe und jedes Symbol eine Nummer, um ihn von allen anderen zu unterscheiden. Außerdem haben verschiedene Sprachen ihre eigenen Buchstaben und Symbole. Die gesamte Gruppe von Buchstaben und Symbolen, die von einem Computer für eine bestimmte Sprache verwendet wird, wird als *Zeichensatz* bezeichnet.

Angenommen, du hast eine eigene Sprache entwickelt, die nur folgende Buchstaben verwendet hat: `A, B, C, D, E, F`. Deine Sprache hat einen Zeichensatz von 6 Buchstaben. Wenn der Buchstabe `A` der erste Buchstabe in deinem Zeichensatz ist, dann hat er einen Zeichencode von `0`. Entsprechen ist dann der Zeichencode von `F` `5`.

Einer der ersten und beliebtesten Zeichensätze, welche in Computern verwendet werden, ist [ASCII](https://wikipedia.org/wiki/ASCII). Es gibt viele Zeichen in ASCII, so dass der Buchstabe `A` einen Code von `65`hat.

Die meisten neueren Zeichensätze behielten alle Buchstaben und Symbole aus ASCII und fügten viele weitere hinzu. Daher ist es üblich, dass die Codes für die älteren ASCII-Buchstaben in den neuen Sets funktionieren. Jedes Mal, wenn du mit einem Computer interagierst, tippst du Buchstaben und Symbole aus einem Zeichensatz und es werden Buchstaben und Symbole aus einem Zeichensatz angezeigt.

Somit kannst du den Buchstaben `B` so erhalten:

```block
let letItBe = String.fromCharCode(66);
```

## Parameter

* **code**: Die Code-[Nummer](/types/number) des Buchstaben, der Zahl oder eines anderen Symbols (wie z. B. Satzzeichen) im Zeichensatz.

## Rückgabewert

* ein einzelnen [Zeichenstring](/types/string), welcher ein Buchstabe oder ein Symbol ist, das aus dem Zeichensatz ausgewählt ist.

## Beispiel

Dekodiere eine geheime Nachricht aus einer Reihe von Zahlen!

```blocks
let secret = [67, 111, 111, 107, 105, 101, 115, 33];
let decoded = "";
for (let code of secret) {
    decoded = decoded + String.fromCharCode(code);
}
```

## Siehe auch

[parse Float](/reference/text/parse-float)