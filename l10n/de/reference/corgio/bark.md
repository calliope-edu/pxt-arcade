# bellen

Lass den Corgi einen Satz aus der Liste der bekannten Sätze sprechen.

```sig
corgio.create().bark()
```

Dem Corgi werden neue Sätze mit dem Block [beibringen](/reference/corgio/add-to-script) "beigebracht". Der gesprochene Satz wird zufällig ausgewählt.

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

[zum Skript hinzufügen](/reference/corgio/add-to-script)

```package
corgio
```