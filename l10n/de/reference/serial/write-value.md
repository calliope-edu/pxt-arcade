# write Value

Schreibe ein **Name:Wert**-Paar als Textzeile an die serielle Schnittstelle.

```sig
serial.writeValue("x", 0);
```

Ein **Name:Wert**-Paar ist ein Text, der sowohl einen Namen für einen Wert als auch den Wert
selbst enthält. Wenn du eine Temperatur von 32 Grad als _Name:Wert_-Paar senden willst,
geht sie so an die serielle Schnittstelle: "temperature:32". So kannst du gut
einen Zahlenwert mit seiner Bedeutung verbinden.

``||serial:write value||`` macht genau das, aber du gibst Name und Wert als zwei Teile an, und es
sendet sie als Paar.

## Parameter

* **name**: ein [Text](/types/string), der den Namensteil des _Name:Wert_-Paars bildet
* **value**: eine [Zahl](/types/number), die den Wertteil des _Name:Wert_-Paars bildet 

## Beispiel #example

Sende _Name:Wert_-Paare für ungerade und gerade Zahlen an die serielle Schnittstelle.

```blocks
for (let i = 0; i < 10; i++) {
    if (i % 2 > 0) {
        serial.writeValue("odd", i)
    } else {
        serial.writeValue("even", i)
    }
}
```

## Siehe auch #seealso

[schreibe Zeile](/reference/serial/write-line),
[schreibe Zahl](/reference/serial/write-number)

```package
serial
```
