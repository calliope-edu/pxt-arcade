# pxt-button-combos

## Referenz

### On Button Combination

Füge dem Spiel eine neue Kombination hinzu.

Kombinationen werden durch eine Zeichenfolge dargestellt, deren Zeichen Tastendrücken entsprechen,
wobei u=oben, d=unten, l=links, r=rechts, a=A und b=B. Mit `+` zwischen Zeichen legst du fest,
dass sie gleichzeitig gedrückt werden müssen.

| Controller-Taste | Wert |
|---| ---|
| oben | U |
| unten | D |
| links | L |
| rechts | R |
| A | A |
| B | B |

Die Folge „drücke a, dann b, dann unten und rechts gleichzeitig“ wird
durch die Zeichenfolge "abd+r" dargestellt.

Jede Kombination muss eindeutig sein; wenn du einen neuen Handler für eine bereits verwendete Kombination hinzufügst,
wird der alte Handler überschrieben.

@param combo die Kombinationsfolge: Beispiele siehe vollständige Kombination.
@param handler Funktion, die ausgeführt wird, wenn die Kombination eingegeben wurde.

### Button Ids

Ein Teil einer Tastenfolge. Kann mit Tasten per ``join`` zu Text verbunden werden,
um eine vollständige Folge für ``generateComboString`` zu erzeugen.

@param id die Taste, für die eine Zeichenfolge erzeugt werden soll

### Remove Combo

Entferne eine zuvor hinzugefügte Kombination.

@param combo die zu entfernende Kombination; Format siehe attachCombo.

### Set Combo Timeout

Lege fest, wie viel Zeit zwischen Tastendrücken vergehen darf, bevor eine Kombination beendet wird.

@param t maximale Zeit zwischen Tastendrücken, die noch eine Kombination auslösen soll.

### Combo Trigger

Lege die Bedingung fest, wann Kombinationen ausgelöst werden (versucht werden).

Standardmäßig ist das TriggerType.Continuous, wodurch bei jedem Tastendruck
versucht wird, eine Kombination auszuführen.

### On Special Combination

Füge ein neues Ereignis hinzu, das ausgeführt wird, wenn ein spezieller Code eingegeben wird.

Der spezielle Code für dieses Ereignis lautet:
>oben, oben, unten, unten, links, rechts, links, rechts, B, A

@param handler Ereignis, das ausgeführt wird, wenn der Code eingegeben wird.

Quelle: [jwunderl/pxt-button-combos](https://github.com/jwunderl/pxt-button-combos/tree/v0.0.24) (v0.0.24)

```package
pxt-button-combos
```
