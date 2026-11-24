# write Line

Schreibe eine Textzeile an die serielle Schnittstelle.

```sig
serial.writeLine("");
```

Eine Textzeile ist ein Text, an dessen Ende zwei Sonderzeichen angehängt sind: _Wagenrücklauf_
und _Zeilenvorschub_. Diese Zeichen sind eigentlich nur Codes, die bedeuten: Beginne eine neue Zeile.
Im Code erscheinen sie manchmal als ``"\r\n"``.

Nach einem ``||serial:write line||`` beginnt jeder neue Text, der an die serielle Schnittstelle geschrieben wird, in einer neuen Zeile.

Bei ``||serial:write line||`` werden die Zeilenumbruchzeichen automatisch für dich hinzugefügt. Du musst nur
den Text angeben, den du schreiben willst.

## Parameter

* **text**: der [Text](/types/string), der an die serielle Schnittstelle geschrieben wird

## Beispiel #example

Schreibe zwei Grußnachrichten an die serielle Schnittstelle.

```blocks
serial.writeLine("How are you today?");
pause(5000);
serial.writeLine("Well that's great! I'm doing well too.");
```

## Siehe auch #seealso

[schreibe Zahl](/reference/serial/write-number),
[schreibe Text](/reference/serial/write-string),
[schreibe Wert](/reference/serial/write-value)

```package
serial
```
