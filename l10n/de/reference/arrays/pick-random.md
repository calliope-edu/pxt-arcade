# zufällig auswählen

Wähle zufällig ein Element aus einem Array aus.

```sig
[""]._pickRandom()
```

Statt selbst einen zufälligen Index zu erzeugen, um ein Element auszuwählen, kannst du dir in einem einzigen Schritt ein zufälliges Element aus dem Array geben lassen. Das Element wird an einem zufälligen Index innerhalb der Länge des Arrays gewählt.

```block
let list: number[] = []
let item = list._pickRandom()
```

So kommst du bequemer an ein zufälliges Element. Andernfalls musst du zuerst einen zufälligen Index erzeugen, bevor du auf das Element zugreifst.


```block
let list: number[] = []
let item = list[Math.randomRange(0, list.length - 1)]
```

## Rückgabewert

* Ein zufällig ausgewähltes Element aus dem Array.

## Beispiel #example

Wähle zufällig einen Namen für dein neues Haustier aus einem Array von Namen aus.

```blocks
let petNames = ["sparky", "fido", "spots", "fluffy", "muffin"]
let newName = petNames._pickRandom()
```

## Siehe auch

[entferne an Position](/reference/arrays/remove-at), [abrufen](/reference/arrays/get), [letztes Element entfernen](/reference/arrays/pop), [erstes Element entfernen](/reference/arrays/shift)