# wenn erstellt

Führe Code aus, wenn ein Sprite erstellt wird.


```sig
sprites.onCreated(0, function (sprite) {

})
```

Sprites werden mit den Funktionen [erstelle](/reference/sprites/sprite/destroy) und [Projektil erstellen](/reference/sprites/create-projectile) erstellt. Du kannst auf ein Erstellungsereignis eines Sprites reagieren und dann Code ausführen.

Sprites haben drei Typen: ``player``, ``food``, ``coin``. Mit dem Sprite-Objektparameter ``sprite`` kannst du die Erstellung jedes Sprites eines bestimmten Typs verfolgen.

```blocks
sprites.onCreated(SpriteKind.Player, function (sprite) {
    sprite.say("Hello, I'm new here")
})
let smiley = sprites.create(img`
    . . . . . f f f f f f f . . . .
    . . . f f e e e e e e e f . . .
    . . f e e e e e e e e e e f . .
    . f e e e e e e e e e e e e f .
    f e e e e f f e e e f f e e e f
    f e e e e f f e e e f f e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e e e e f e e e e e e f
    f e e e e e e e e e e e e e e f
    f e e e e f e e e e e f e e e f
    f e e e e e f f f f f e e e e f
    . f e e e e e e e e e e e e f .
    . . f e e e e e e e e e e f . .
    . . . f f e e e e e e e f . . .
    . . . . . f f f f f f f . . . .
    `, SpriteKind.Player)
```

## Parameter

* **type**: der Sprite-Typ, für den auf ein Erstellungsereignis gewartet wird. Das sind ``player``, ``food`` und ``coin``.
* **sprite**: der [Sprite](/types/sprite), für den auf ein Erstellungsereignis gewartet wird. Verwende ``sprite`` für ein Ereignis bei allen Sprites eines bestimmten **type**.
* **handler**: der Code, der ausgeführt wird, wenn der Sprite erstellt wird.

## Beispiel #example

Erstelle einen ``player``-Sprite als „Beobachter“ für das Erstellen und Zerstören eines ``food``-Sprites. Lass den Beobachter etwas sagen, wenn Essen erstellt wird und wenn es zerstört wird.

```blocks
sprites.onDestroyed(SpriteKind.Food, function (sprite) {
    viewer.say("food's gone!!", 1000)
})
sprites.onCreated(SpriteKind.Food, function (sprite) {
    viewer.say("I see food!", 1000)
})
let viewer: Sprite = null
let playerBlock = image.create(16, 16)
playerBlock.fill(7)
viewer = sprites.create(playerBlock, SpriteKind.Player)
viewer.setPosition(8, 32)
let foodBlock = image.create(32, 32)
foodBlock.fill(8)
pause(1000)
let snack = sprites.create(foodBlock, SpriteKind.Food)
snack.say("new food here")
pause(2000)
snack.destroy()
```

## Siehe auch #seeaslo

[wenn zerstört](/reference/sprites/on-destroyed),
[erstelle](/reference/sprites/sprite/destroy),
[Projektil erstellen](/reference/sprites/create-projectile)