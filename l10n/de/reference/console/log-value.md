# protokolliere Wert

Schreibe ein **Name:Wert**-Paar als Textzeile in die Konsolenausgabe.

```sig
console.logValue("x", 0);
```

Ein **Name:Wert**-Paar ist eine Zeichenkette, die sowohl einen Namen für einen Wert
als auch den Wert selbst enthält. Wenn du einen Temperaturwert von 32 Grad als _Name:Wert_-Paar sendest,
erscheint er in der Konsolenausgabe so: "temperature:32". So kannst du einen Zahlenwert
gut mit seiner Bedeutung verbinden.

``||console:log value||`` macht genau das: Du gibst den Namen und den Wert als zwei Teile an und es
sendet sie als Paar.

## Parameter

* **name**: eine [Zeichenkette](/types/string), die den Namensteil des _Name:Wert_-Paars bildet
* **value**: eine [Zahl](/types/number), die den Wertteil des _Name:Wert_-Paars bildet 

## Beispiel #example

Sende _Name:Wert_-Paare für ungerade und gerade Zahlen an die Konsolenausgabe.

```blocks
for (let i = 0; i < 10; i++) {
    if (i % 2 > 0) {
        console.logValue("odd", i)
    } else {
        console.logValue("even", i)
    }
}
```

## Siehe auch #seealso

[protokolliere](/reference/console/log)