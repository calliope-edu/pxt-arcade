# in Text umwandeln

Wandle einen Wert eines beliebigen [Typs](/types) in einen Text-[String](/types/string) um.

```sig
convertToText(123)
```

## Parameter

* **value**: ein Wert eines beliebigen [Typs](/types), der in einen [String](/types/string) umgewandelt werden soll.

## Rückgabewert

* ein [String](/types/string), der **value** als Text darstellt.

## Beispiel #example

Wandle einen Wahrheitswert und eine Zahl in Strings um und verbinde sie zu einem Satz.

```blocks
let myBoolean = false
let myNumber = 0

myBoolean = true
myNumber = 123

let myString = "It is " + convertToText(myBoolean) + " that " + convertToText(myNumber) + " is now a string!"
```

## Siehe auch #seealso

[parse int](/reference/text/parse-int), 
[parse float](/reference/text/parse-float)
