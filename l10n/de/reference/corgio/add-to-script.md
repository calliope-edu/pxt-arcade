# zum Skript hinzufügen

Füge einen Satz zur Liste der Sätze hinzu, die der Corgi sprechen kann.

```sig
corgio.create().addToScript("")
```

Dem Corgi wird ein neuer Satz "beigebracht", indem du ihn zu seiner Liste bekannter Sätze hinzufügst.

## Parameter

* **input**: ein [String](/types/string) mit dem neuen Satz, der zur Liste der bekannten Sätze hinzugefügt wird.

## Beispiel #example

Bring dem Corgi einige neue Sätze bei. Lass den Corgi alle `2` Sekunden einen Satz sagen.

```blocks
let myCorg = corgio.create(SpriteKind.Player)
myCorg.verticalMovement(true)
myCorg.horizontalMovement(true)
myCorg.addToScript("bark")
myCorg.addToScript("ruff, ruff")
myCorg.addToScript("ooow, ooow")
myCorg.addToScript("yip, yip")
game.onUpdateInterval(2000, function () {
    myCorg.bark()
})
```

## Siehe auch #seealso

[bellen](/reference/corgio/bark)

```package
corgio
```