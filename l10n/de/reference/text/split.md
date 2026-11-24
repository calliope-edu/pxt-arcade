# trennen

Teile einen String in kleinere Zeichenketten mit einem Trennzeichenketten, um den größeren String zu teilen.

```sig
"".split(",")
```

Eine Zeichenkette wird in einen oder mehrere kürzere Zeichenketten aufgeteilt, indem man einen speziellen String im größeren String findet und ihn direkt an diesem String teilt. Diese spezielle Zeichenkette heißt _Trennzeichen_. Der Trennzeichen-String ist oft nur ein einzelnes Zeichen, kann aber auch länger sein, wenn man will. Die kleineren Zeichenketten, die nach der Aufteilung resultieren, werden in einem Zeichenketten [array](/types/array) zurückgegeben.

Wenn eine Zeichenkette eine Liste von Tieren und jedes dieser Tiernamen am Ende ein Komma hat, kann dieses Komma das Trennzeichen sein.

```block
let animals = "giraffe,lion,wolf,hippo,cat,racoon"
```

Wenn der `Tier` String mit dem Komma geteilt wird, wird ein Array von Tiernamen erstellt.

```block
let animals = "giraffe,lion,wolf,hippo,cat,racoon"
let animalNames = animals.split(",")
```

Wenn du den `"hippo"` String erhalten möchtest, wähle einfach den String aus `AnimalNames` im Index von `3`.

```block
let animals = "giraffe,lion,wolf,hippo,cat,racoon"
let animalNames = animals.split(",")
let hippo = animalNames[3]
```

Neben der Verwendung eines Trennzeichenzeichens kann die Split-Operation einen **limit** Parameter verwenden. Dies begrenzt die Anzahl der kleineren Zeichenketten, die von der größeren Zeichenkette getrennt werden. Es gibt `6` Tiernamen im `animal` String in den Beispielen. Wenn du nur die ersten `2` Tiere aus dieser Zeichenkette wolltest, kannst du die Grenze auf `2` setzen.

```typescript
let animals = "giraffe,lion,wolf,hippo,cat,racoon"
let animalNames = animals.split(",",2)
```

Jetzt wird das resultierende Array von `animalNames` nur `"giraffe"` und `"lion"` als Mitglieder haben.

## Parameter

* **Trennzeichen**: eine [Zeichenkette](/types/string) welche die Aufteilungsoperation angibt, wo die größere Zeichenkette in kleinere Zeichenketten aufgeteilt werden soll.
* **limit**: Eine [Zahl](/types/number) die die maximale Anzahl kleinerer Zeichenketten angibt, die von der größeren Zeichenkette getrennt werden können. Der Grenzwert kann mehr sein als die Anzahl möglicher zu teilender Zeichenketten, aber nur die mögliche Anzahl von Zeichenketten wird zurückgegeben.

## Rückgabewert

* ein Zeichenketten-[array](/types/array), das die kleineren Zeichenketten enthält, die beim Trennzeichen getrennt werden.

## Beispiele #examples

### Erhalte die Regenbogenfarben #ex1

Teilt eine Zeichenfolge mit den Regenbogenfarbennamen in eine Farbliste auf.

```blocks
let rainbow = "red, orange, yellow, green, blue, indigo, violet"
let colors = rainbow.split(",")
```

### Geheime Nachricht #ex2

Decodiere eine geheime Nachricht aus einem Satz, der durch zusätzliche Zeichen "verwirrt" wird. Die zusätzlichen Zeichen werden `messageKey` genannt. Die Zeichenkette wird mit dem messagekey (Nachrichtenschlüssel) aufgeteilt.

```blocks
let message = ""
let messageKey = "j8it62we"
let secret = "j8it62weHelj8it62welo,j8it62we mj8it62wey namj8it62wee ij8it62wes Sanj8it62wedy"
let decoded = secret.split(messageKey)
for (let word of decoded) {
    message = "" + message + word
}
```

## Siehe auch #seealso

[substr](/reference/text/substr)