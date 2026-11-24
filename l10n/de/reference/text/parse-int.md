# parse Int

Umwandlung von Text, der nur aus Zahlenzeichen besteht, in einen ganzzahligen Zahlenwert.

```sig
parseInt("0");
```

Du kannst eine Textzeichenfolge, die Zahlenzeichen enthält, in einen tatsächlichen Ganzzahlwert ändern. Der Text darf nur aus Nummern bestehen. Hierzu zählen zusätzlich auch die Zeichen `'-'` und `'.'`. Allerdings wird nur der *Ganzzahl/Integer*-Teil (links vom Dezimalpunkt) zu einer Zahl konvertiert.

Falls der Text andere Zeichen, wie z. B. `"-2g5u7"`, enthält, wird nur `-2` zurückgegeben, da dies der beste Versuch ist, den Text zu einer Zahl zu konvertieren. Versuche Zahlen nicht mit Buchstaben oder anderen Zeichen zu vermischen.

## ~ hint

**Potenzen von 10**

Wenn der Text den Buchstaben **'e' hat** hinter den Zahlenzeichen und dann einige weitere Zahlenzeichen wie **"2e4"**, dann sind die Zahlenzeichen nach dem **'e'** ein *Exponent* von **10**. Das bedeutet, dass ein String mit `"7.5e2"` den Wert von `750` hat, wenn er in einen Fließkommawert konvertiert wird. Das liegt daran, dass die `2` nach dem `e` 2 Zehnerpotenzen sind, was `10 * 10` oder `100` entspricht. Der resultierende Wert ist dann `8 * 1000` und entspricht `8000`.

## ~

## Rückgabewert

* eine [Zahl](/types/string), die die Zahl im Text repräsentiert.

## Beispiel #exsection

Nimm die Temperatur aus dem Temperatur-Text und mache daraus ein Zahl.

```blocks
let gefrorenesWasser = "Der Gefrierpunkt von Wasser beträgt 0 Grad Celsius.";
let gefroren = parseInt(gefrorenesWasser.substr(37, 1));
```

## Siehe auch #seealso

[parse Float](/reference/text/parse-float)