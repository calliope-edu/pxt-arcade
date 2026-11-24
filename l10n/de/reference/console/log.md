# protokolliere

Schreibe eine Textzeile in die Konsolenausgabe.

```sig
console.log("");
```

Eine Textzeile ist eine Zeichenkette, an deren Ende zwei Sonderzeichen angehängt sind: _Wagenrücklauf_
und _Zeilenvorschub_. Diese Zeichen sind eigentlich nur Codes, die bedeuten: Beginne eine neue Zeile.
Manchmal stehen sie im Code als ``"\r\n"``.

Nach ``||console:log||`` beginnt jeder neue Text in der Konsolenausgabe in einer neuen Zeile.

Bei ``||console:log||`` werden die Zeilenumbruchzeichen automatisch für dich hinzugefügt. Du musst nur den Text angeben, den du schreiben möchtest.

## Parameter

* **text**: die [Zeichenkette](/types/string), die in die Konsolenausgabe geschrieben wird.

## Beispiel #example

Schreibe zwei Grußnachrichten in die Konsolenausgabe.

```blocks
console.log("How are you today?");
pause(5000);
console.log("Well that's great! I'm doing well too.");
```

## Siehe auch #seealso

[protokolliere Wert](/reference/console/log-value)