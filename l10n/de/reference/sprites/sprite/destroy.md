# zerstören

Zerstöre den Sprite.

```sig
sprites.create(null).destroy()
```

Der Sprite zerstört sich sofort selbst. Der Sprite wird aus dem Spiel entfernt und überlappt oder kollidiert nicht mehr mit anderen Sprites.

Sprites werden auch zerstört, wenn ihre [Lebensdauer](/reference/sprites/sprite/lifespan) `0` erreicht, oder wenn bei ihnen ``auto destroy`` als Sprite-Flag gesetzt ist und sie den Bildschirm verlassen.

Du kannst auch einen optionalen Partikeleffekt auswählen, der beim Zerstören am Sprite angezeigt wird.

## Parameter

* **effect**: ein optionaler eingebauter Effekt, der angezeigt wird, wenn der Sprite zerstört wird.


## Beispiel #example

### Den Spieler verschlucken #ex1

Erstelle einen ``Player``- und einen ``Enemy``-Sprite. Der Spieler bewegt sich in den offenen Bereich des Gegner-Sprites. Wenn eine Überlappung der beiden erkannt wird, zerstöre den ``Player``.

```blocks
let enemy: Sprite = null
let catchBox: Image = null
let player: Sprite = null
let yellowBlock: Image = null

yellowBlock = image.create(16, 16)
yellowBlock.fill(5)
yellowBlock.drawRect(0, 0, 16, 16, 1)
player = sprites.create(yellowBlock, SpriteKind.Player)
player.left = 0
catchBox = image.create(32, 32)
catchBox.drawRect(0, 0, 32, 32, 1)
catchBox.drawLine(0, 6, 0, 25, 0)
enemy = sprites.create(catchBox, SpriteKind.Enemy)
enemy.right = scene.screenWidth() - 16
player.vx = 20
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, anderesSprite) {
    anderesSprite.say("Gulp!", 1000)
    sprite.destroy()
})
```

### Einen Zerstörungseffekt zeigen #ex2

Erstelle einen quadratischen Sprite. Zerstöre den Sprite nach 3 Sekunden und zeige einen ``fountain``-Effekt.

```blocks
let square = image.create(32, 32)
square.fill(2)
square.drawRect(0, 0, 32, 32, 1)
let sqSprite = sprites.create(square)
pause(3000)
sqSprite.destroy(effects.fountain)
```

## Siehe auch #seealso

[bei Zerstörung](/reference/sprites/on-destroyed),
[Lebensdauer](/reference/sprites/sprite/lifespan),
[Flag setzen](/reference/sprites/sprite/set-flag)