# klonen

Kopiere ein Bild, um ein genau gleiches zu erhalten.

```sig
image.create(0, 0).clone()
```

Es wird ein neues Bild als Kopie des Originals erstellt. Aufbau und Pixelfarben sind gleich.

## Rückgabewerte

* ein [Bild](/types/image), das eine exakte Kopie des Originalbildes ist.

## Beispiel #example

Erstelle ein Bild von einem Strichmännchen. Klone das Bild und zeige es unter dem Originalbild an.

```blocks
let stickPerson1 = img`
. . . a a . . .
. . a . . a . .
. . . a a . . .
. . . a . . . .
a a a a a a a .
. . . a . . . .
. . . a . . . .
. . . a . . . .
. . . a . . . .
. . a   a . . .
. a . . . a . .
. a a . . a a .
`
let stickPerson2 = stickPerson1.clone()

let showPerson1 = sprites.create(stickPerson1)
let showPerson2 = sprites.create(stickPerson2)
showPerson2.y = showPerson1.y + 16
```

## Siehe auch #seealso

[erstellen](/reference/images/create)

