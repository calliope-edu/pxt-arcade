# pxt-button-combos

## Referenz

### Wenn Tastenkombination

Fügt dem Spiel eine neue Kombo hinzu.

Kombos werden als Zeichenfolge geschrieben, in der jedes Zeichen für einen Tastendruck steht:
u=oben, d=unten, l=links, r=rechts, a=A und b=B. Mit `+` zwischen zwei Zeichen
müssen beide Tasten gleichzeitig gedrückt werden.

| Controller-Taste | Wert |
|---| ---|
| oben | U |
| unten | D |
| links | L |
| rechts | R |
| A | A |
| B | B |

Die Folge „drücke a, dann b, dann unten und rechts gleichzeitig“ wird
als Zeichenfolge "abd+r" geschrieben.

Jede Kombo muss anders sein; wenn du für eine schon verwendete Kombo einen neuen
Handler hinzufügst, wird der alte ersetzt.

@param combo die Tastenfolge der Kombo: Beispiele siehe oben.
@param handler Funktion, die ausgeführt wird, wenn die Kombo eingegeben wurde.

### Tasten-IDs

Ein Teil einer Tastenfolge. Kann mit ``join`` mit anderen Tasten
verbunden werden, um eine ganze Folge für ``generateComboString`` zu erstellen

@param id die Taste, für die ein Text erzeugt wird

### Kombo entfernen

Entfernt eine vorher hinzugefügte Kombo.

@param combo die Kombo, die entfernt wird; Format siehe attachCombo.

### Kombo-Zeitlimit setzen

Legt fest, wie viel Zeit zwischen zwei Tastendrücken vergehen darf, bevor eine Kombo endet.

@param t längste Zeit zwischen Tastendrücken, die noch zur Kombo zählt.

### Kombo auslösen

Legt fest, wann Kombos ausgelöst werden (versucht wird, sie auszuführen).

Standardmäßig ist TriggerType.Continuous eingestellt: Bei jedem Tastendruck
wird versucht, eine Kombo auszuführen.

### Wenn Spezialkombination

Fügt ein Ereignis hinzu, das ausgeführt wird, wenn ein Spezialcode eingegeben wird.

Der Spezialcode für dieses Ereignis ist:
>oben, oben, unten, unten, links, rechts, links, rechts, B, A

@param handler Ereignis, das bei Eingabe des Codes ausgeführt wird.

Quelle: [jwunderl/pxt-button-combos](https://github.com/jwunderl/pxt-button-combos/tree/v0.0.24) (v0.0.24)

```package
pxt-button-combos
```
