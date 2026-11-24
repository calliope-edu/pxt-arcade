# parse Float

Wandle einen Text, der nur Zahlen enthält, in einen Wert für Gleitpunktzahlen um.

```sig
parseFloat("0.5");
```

Du kannst einen Text mit Zahlenzeichen in einen aktuellen Fließkommawert umwandeln. Der Text darf nur aus Nummern bestehen. Hierzu zählen zusätzlich auch die Zeichen `'-'` und `'.'`.

Falls der Text andere Zeichen, wie z. B. `"-5.g5u7"`, enthält, wird nur `-2` zurückgegeben, da dies der beste Versuch ist, den Text zu einer Zahl zu konvertieren. Versuche Zahlen nicht mit Buchstaben oder anderen Zeichen zu vermischen.

## ~ hint

**Potenzen von 10**

Wenn der Text den Buchstaben **'e' hat** hinter den Zahlenzeichen und dann einige weitere Zahlenzeichen wie **"2e4"**, dann sind die Zahlenzeichen nach dem **'e'** ein *Exponent* von **10**. Das bedeutet, dass ein String mit `"7.5e2"` den Wert von `750` hat, wenn er in einen Fließkommawert konvertiert wird. Das liegt daran, dass das `2` nach dem `e` 2 Zehnerpotenzen sind, was `10 * 10` oder `100` entspricht. Der resultierende Wert ist dann `7.5 * 100` und entspricht `750`.

## ~

## Rückgabewert

* ein Fließkommawert [Zahl](/types/string) für die Textnummer in der Zeichenkette.

## Beispiel #exsection

Nimm die ersten Ziffern von PI aus dem Satz und wandle sie in eine Zahl um.

```blocks
let text = "pi is 3.14...";
let pi = parseFloat(text.substr(6, 3));
```

## Siehe auch #seealso

[parse int](/reference/text/parse-int)