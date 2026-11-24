# String

Ein *String* (Zeichenkette) ist eine Folge von Zeichen. 

## #intro

Ein String-Typ ist komplexer als eine [Zahl](/types/number) oder ein [Wahrheitswert](/types/boolean). Neben seinen Zeichen enthält ein String Informationen über seine Länge, und du kannst jedes seiner Zeichen über einen Index ändern. Strings können in kleinere Strings zerlegt oder zu größeren Strings zusammengefügt werden.

Strings können Buchstaben, Zahlen, Satzzeichen und andere Sonderzeichen enthalten. Strings können auch Zeichen aus verschiedenen Sprachen enthalten.

``"abcdefg1234*?!"``

Eine String-[Variable](/blocks/variables/var) wird deklariert, indem einer Variablen ein String-Wert [zugewiesen](/blocks/variables/assign) wird:

```block
let myString = "My nice new string is here!"
```

Für Strings gibt es Operationen, mit denen du sie ändern oder mit Teilen davon arbeiten kannst.

```blocks
let myString = "My nice new string is here!"
// make a smaller string
let mySmallString = myString.substr(0, myString.indexOf("g") + 1)
```

## Eine String-Variable erstellen #create

```block
let greeting = "hello"
```

So erstellst du eine Variable, die einen String enthält:

1. Klicke auf `Variables` (in der Werkzeugleiste).
2. Klicke auf **Erstelle eine Variable...**.
3. Wähle einen Namen für deine Variable, z. B. "greeting", tippe ihn ein und klicke auf **Ok**.
4. Ziehe den neuen Variablenblock in deinen Code.
5. Klicke auf ``Text`` (in der Werkzeugleiste) und suche den `" "`-Block.
6. Klicke auf `" "` und tippe dann einen String wie `hello` ein.

Dein Code sollte ungefähr so aussehen:

```block
let greeting = "hello"
```

## #examples

## #custom

## Siehe auch #seealso
 
[Zahl](/types/number)
