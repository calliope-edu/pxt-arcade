# Flag setzen

Setze eine Sprite-Flag auf **AN** oder **AUS**.

```sig
sprites.create(null).setFlag(0, false)
```

Sprite-Flags sind Einstellungen, die verändern, wie ein Sprite auf dem Bildschirm reagiert. Wenn Sprites erstellt werden, haben sie Standardverhalten, die durch diese Flags festgelegt sind. Die Flags bestimmen, ob ein Sprite gezwungen wird, immer auf dem Bildschirm zu bleiben, oder ob er zerstört wird, wenn er den Bildschirm verlässt. Ein anderes Verhalten, das _Geistermodus_ (ghosting), sorgt dafür, dass der Sprite sich nicht mit anderen Sprites überlappt oder mit Hindernissen kollidiert. Es gibt Flags, die das Verhalten eines Sprites festlegen, wenn er auf Wände trifft oder sich mit anderen Sprites überlappt.

## Parameter

* **flag**: die Sprite-Flag, die an- oder ausgeschaltet werden soll. Die Flags sind:
>* [stay in screen](#stay-in-screen): Der Sprite muss auf dem Bildschirm bleiben, wenn er einen Bildschirmrand erreicht.
>* [ghost](#ghost): Der Sprite überlappt sich nie mit anderen Sprites, er geht durch Wandkacheln hindurch, und Kachelüberlappungen sowie Wandtreffer werden nicht erkannt.
>* [auto destroy](#auto-destroy): Der Sprite wird automatisch zerstört, wenn er den Bildschirm verlässt.
>* [destroy on wall](#destroy-on-wall): Der Sprite wird automatisch zerstört, wenn er mit einer Wandkachel kollidiert.
>* [bounce on wall](#bounce-on-wall): Der Sprite prallt ab, wenn er mit einer Wandkachel kollidiert.
>* [show physics](#show-physics): Der Sprite zeigt unter sich seine Position, Geschwindigkeit und Beschleunigung an.
>* [invisible](#invisible): Der Sprite wird nicht auf den Bildschirm gezeichnet.
>* [relative to camera](#relative-to-camera): Der Sprite wird relativ zur Kamera statt relativ zur Welt gezeichnet, und er überlappt sich nie mit anderen Sprites oder kollidiert mit Hindernissen. Das ist nützlich, um statische Elemente auf den Bildschirm zu zeichnen (Punktestände, Dialogfenster usw.), die sich nicht bewegen sollen, wenn die Kamera schwenkt.
>* [ghost through sprites](#ghost-through-sprites): Der Sprite bewegt sich über oder unter anderen Sprites hindurch und löst kein Überlappungsereignis aus.
>* [ghost through tiles](#ghost-through-tiles): Der Sprite löst keine Ereignisse aus, wenn er über Kacheln läuft.
>* [ghost through walls](#ghost-through-walls): Der Sprite geht durch Wandkacheln hindurch und löst kein Wandtreffer-Ereignis aus.

## Flags

### Stay in screen

```block
let meinSprite: Sprite = null
meinSprite.setFlag(SpriteFlag.StayInScreen, true)
```

Wenn du ``stay in screen`` auf **AN** setzt, bleibt der Sprite immer im sichtbaren Bereich des Bildschirms. Der Sprite bleibt in der aktuellen Bildschirmansicht, selbst wenn eine neue Position für ihn außerhalb des Bildschirms gesetzt wird. Der Sprite im folgenden Beispiel erscheint immer auf dem Bildschirm, obwohl seine Startposition außerhalb des Bildschirms liegt und seine Bewegung ihn über den Bildschirmrand hinaus bringen würde.

```blocks
let meinSprite = sprites.create(img`
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    `, SpriteKind.Player)
meinSprite.setFlag(SpriteFlag.StayInScreen, true)
pause(500)
meinSprite.left = -20
meinSprite.top = -50
pause(500)
meinSprite.vx = 30
```

### ~hint

#### Szene oder Bildschirm?

Ein Sprite bleibt immer innerhalb der Grenzen deiner Szene, wenn dein Spiel eine Kachelkarte hat. Wenn du die Flag ``stay in screen`` auf **AUS** setzt, kann sich dein Sprite trotzdem nicht über den Rand der Spielszene hinaus bewegen. Wenn die Szene größer als der Bildschirm ist und ``auto destroy`` auf **AN** gesetzt ist, zerstört sich der Sprite selbst, wenn er sich über den Bildschirmrand hinaus bewegt, obwohl er noch in der Szene ist.

### ~

### Ghost

```block
let meinSprite: Sprite = null
meinSprite.setFlag(SpriteFlag.Ghost, true)
```

Ein ``ghost``-Sprite geht durch Wandkacheln hindurch und löst keine Überlappungsereignisse mit Kacheln oder anderen Sprites aus.

Das Beispiel hier zeigt einen Geister-Sprite, der sich an einem anderen Sprite vorbeibewegt, ohne dass ein Überlappungsereignis auftritt. Er bewegt sich außerdem über eine normale Kachel und durch eine Wandkachel, ohne anzuhalten oder Kachelereignisse auszulösen.

```blocks
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    sprite.say("Ouch!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, anderesSprite) {
    anderesSprite.say("Boo!")
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark2, function (sprite, location) {
    sprite.say("Pass!")
})
let ghost = sprites.create(img`
    . . . . . . d d d d d . . . . . 
    . . . d d d d 1 1 1 d d d . . . 
    . . d d 1 1 1 1 1 1 1 1 d d . . 
    . . d 1 1 1 1 1 1 1 1 1 1 d . . 
    . . d 1 1 1 1 1 1 1 1 1 1 d d . 
    . d d 1 1 1 f 1 1 1 f 1 1 1 d . 
    . d 1 1 1 1 1 1 1 1 1 1 1 1 d d 
    . d 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    . d 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d d 1 1 1 1 1 1 f f 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 f f 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 d 1 1 1 1 1 1 d 
    d 1 d d d 1 1 d d d d 1 d 1 1 d 
    d d d . d d d d . . d d d d d d 
    d d . . . d d . . . . d . . d d 
    `, SpriteKind.Player)
let person = sprites.create(img`
    . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . 
    . . . f f 5 5 5 5 f f . . . 
    . . f 5 5 5 5 5 5 5 5 f . . 
    . f 5 5 5 5 5 5 5 5 5 5 f . 
    c b 5 5 5 d b b d 5 5 5 b c 
    f 5 5 5 b 4 4 4 4 b 5 5 5 f 
    f 5 5 c c 4 4 4 4 c c 5 5 f 
    f b b f b f 4 4 f b f b b f 
    f b b e 1 f d d f 1 e b b f 
    c f b f d d d d d 4 4 b f c 
    . c e c 6 9 9 9 4 d d d c . 
    . e 4 c 9 9 9 9 4 d d 4 c . 
    . e c b b 3 b b b e e c . . 
    . . c c 3 3 b 3 b 3 c c . . 
    . . . . c b b c c c . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level_2`)
ghost.setFlag(SpriteFlag.Ghost, true)
ghost.left = 0
person.left = 30
ghost.vx = 40
```

### Auto destroy

```block
let meinSprite: Sprite = null
meinSprite.setFlag(SpriteFlag.AutoDestroy, true)
```
Sprites mit eingeschalteter ``auto destroy``-Flag werden zerstört, wenn sich das Bild des Sprites über den Bildschirmrand hinaus bewegt.

Dieses Beispiel erstellt fortlaufend Sprites und zerstört sie, wenn sie den Bildschirm verlassen. Der Punktestand wird verwendet, um die zerstörten Sprites zu zählen.

```blocks
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    info.changeScoreBy(1)
})
let meinSprite: Sprite = null
info.setScore(0)
game.onUpdateInterval(500, function () {
    meinSprite = sprites.create(img`
        . . . . . 2 2 2 2 2 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . . 2 2 2 2 2 2 . . . . . 
        `, SpriteKind.Player)
    meinSprite.setFlag(SpriteFlag.AutoDestroy, true)
    meinSprite.left = 0
    meinSprite.vx = 200
})
```

### Destroy on wall

```block
let meinSprite: Sprite = null
meinSprite.setFlag(SpriteFlag.DestroyOnWall, true)
```

Der Sprite wird zerstört, wenn er auf eine Wandkachel trifft oder den Rand der Kachelkarte der Szene erreicht.

```blocks
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    sprite.startEffect(effects.disintegrate)
})
let meinSprite: Sprite = null
meinSprite = sprites.create(img`
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level_0`)
meinSprite.setFlag(SpriteFlag.DestroyOnWall, true)
meinSprite.left = 0
meinSprite.vx = 30
```

### Bounce on wall

```block
let meinSprite: Sprite = null
meinSprite.setFlag(SpriteFlag.BounceOnWall, true)
```

Die Flag ``bounce on wall`` lässt den Sprite von einer Wandkachel abprallen, wenn er sie berührt. Der Sprite prallt auch vom Rand der Kachelkarte der Szene ab.

```blocks
let meinSprite = sprites.create(img`
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    `, SpriteKind.Player)
meinSprite.setFlag(SpriteFlag.BounceOnWall, true)
tiles.setTilemap(tilemap`level_0`)
meinSprite.vx = 50
meinSprite.vy = 50
```

Wenn für die Szene keine Kachelkarte festgelegt ist, prallt der Sprite von den Bildschirmrändern ab.

```blocks
let meinSprite = sprites.create(img`
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    `, SpriteKind.Player)
meinSprite.setFlag(SpriteFlag.BounceOnWall, true)
meinSprite.vx = 50
meinSprite.vy = 50
```

### Show physics

```block
let meinSprite: Sprite = null
meinSprite.setFlag(SpriteFlag.ShowPhysics, true)
```

Ein Sprite, bei dem ``show physics`` auf **AN** gesetzt ist, zeigt seine Position und seine Bewegungswerte in einer Beschriftung neben sich an.

```blocks
let meinSprite = sprites.create(img`
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    `, SpriteKind.Player)
meinSprite.setFlag(SpriteFlag.ShowPhysics, true)
meinSprite.x = 10
meinSprite.y = 10
meinSprite.ax = 7
meinSprite.ay = 5
```

### Invisible

```block
let meinSprite: Sprite = null
meinSprite.setFlag(SpriteFlag.Invisible, true)
```

Wenn du die Sprite-Flag `invisible` setzt, wird der Sprite nicht auf dem Bildschirm angezeigt.

```blocks
let visible = false
let meinSprite = sprites.create(img`
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    `, SpriteKind.Player)
meinSprite.left = 0
meinSprite.vx = 10
game.onUpdateInterval(1000, function () {
    if (visible) {
        meinSprite.setFlag(SpriteFlag.Invisible, false)
    } else {
        meinSprite.setFlag(SpriteFlag.Invisible, true)
    }
    visible = !(visible)
})
```

### Relative to camera

```block
let meinSprite: Sprite = null
meinSprite.setFlag(SpriteFlag.RelativeToCamera, true)
```

Die Flag ``relative to camera`` fixiert die Position des Sprites auf dem Bildschirm, während sich die Ansicht der Szene ändert. So bewegt sich der Sprite nicht vom Bildschirm weg, wenn sich die Kameraansicht bewegt. Außerdem erzeugt der Sprite keine Kollisionen und überlappt sich nicht mit anderen Sprites.

Das folgende Beispiel setzt einen Sprite in die obere rechte Ecke des Bildschirms. Der Sprite bleibt an derselben Stelle auf dem Bildschirm, während sich die Kameraansicht der Szene von links nach rechts bewegt.

```blocks
tiles.setTilemap(tilemap`level_3`)
let mover = sprites.create(img`
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    `, SpriteKind.Player)
let fixer = sprites.create(img`
    . . . . . 7 7 7 7 7 7 . . . . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
    . . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
    . . . 7 7 7 7 7 7 7 7 7 7 . . . 
    . . . . . 7 7 7 7 7 7 . . . . . 
    `, SpriteKind.Player)
fixer.setFlag(SpriteFlag.RelativeToCamera, true)
fixer.top = 0
fixer.right = scene.screenWidth()
mover.left = 0
mover.vx = 50
scene.cameraFollowSprite(mover)
```

### Ghost through sprites

```block
let meinSprite: Sprite = null
meinSprite.setFlag(SpriteFlag.GhostThroughSprites, true)
```

Wenn du ``ghost through sprites`` setzt, kann sich ein Sprite über oder unter einem anderen Sprite hindurch bewegen, ohne ein Überlappungsereignis auszulösen.

Das folgende Beispiel zeigt einen Geister-Sprite, der unter einem anderen Sprite hindurchläuft, ohne ein Überlappungsereignis auszulösen.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, anderesSprite) {
    anderesSprite.say("Boo!")
})
let ghost = sprites.create(img`
    . . . . . . d d d d d . . . . . 
    . . . d d d d 1 1 1 d d d . . . 
    . . d d 1 1 1 1 1 1 1 1 d d . . 
    . . d 1 1 1 1 1 1 1 1 1 1 d . . 
    . . d 1 1 1 1 1 1 1 1 1 1 d d . 
    . d d 1 1 1 f 1 1 1 f 1 1 1 d . 
    . d 1 1 1 1 1 1 1 1 1 1 1 1 d d 
    . d 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    . d 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d d 1 1 1 1 1 1 f f 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 f f 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 d 1 1 1 1 1 1 d 
    d 1 d d d 1 1 d d d d 1 d 1 1 d 
    d d d . d d d d . . d d d d d d 
    d d . . . d d . . . . d . . d d 
    `, SpriteKind.Player)
    let person = sprites.create(img`
    . . . . . . . . . . . . . . 
    . . . . . f f f f . . . . . 
    . . . f f 5 5 5 5 f f . . . 
    . . f 5 5 5 5 5 5 5 5 f . . 
    . f 5 5 5 5 5 5 5 5 5 5 f . 
    c b 5 5 5 d b b d 5 5 5 b c 
    f 5 5 5 b 4 4 4 4 b 5 5 5 f 
    f 5 5 c c 4 4 4 4 c c 5 5 f 
    f b b f b f 4 4 f b f b b f 
    f b b e 1 f d d f 1 e b b f 
    c f b f d d d d d 4 4 b f c 
    . c e c 6 9 9 9 4 d d d c . 
    . e 4 c 9 9 9 9 4 d d 4 c . 
    . e c b b 3 b b b e e c . . 
    . . c c 3 3 b 3 b 3 c c . . 
    . . . . c b b c c c . . . . 
    `, SpriteKind.Player)
ghost.setFlag(SpriteFlag.GhostThroughSprites, true)
ghost.left = 0
ghost.vx = 40
```

### Ghost through tiles

```block
let meinSprite: Sprite = null
meinSprite.setFlag(SpriteFlag.GhostThroughTiles, true)
```

Wenn du ``ghost through tiles`` auf **AN** setzt, kann sich ein Sprite über eine Kachel bewegen, ohne ein Überlappungsereignis auszulösen.

Das Beispiel hier zeigt einen Geister-Sprite, der eine Kachel überquert, ohne in einem Überlappungsereignis erkannt zu werden.

```blocks
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.floorDark0, function (sprite, location) {
    sprite.say("Pass!")
})
let ghost = sprites.create(img`
    . . . . . . d d d d d . . . . . 
    . . . d d d d 1 1 1 d d d . . . 
    . . d d 1 1 1 1 1 1 1 1 d d . . 
    . . d 1 1 1 1 1 1 1 1 1 1 d . . 
    . . d 1 1 1 1 1 1 1 1 1 1 d d . 
    . d d 1 1 1 f 1 1 1 f 1 1 1 d . 
    . d 1 1 1 1 1 1 1 1 1 1 1 1 d d 
    . d 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    . d 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d d 1 1 1 1 1 1 f f 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 f f 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 d 1 1 1 1 1 1 d 
    d 1 d d d 1 1 d d d d 1 d 1 1 d 
    d d d . d d d d . . d d d d d d 
    d d . . . d d . . . . d . . d d 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level_0`)
ghost.setFlag(SpriteFlag.GhostThroughTiles, true)
ghost.left = 0
ghost.vx = 40
```

### Ghost through walls

```block
let meinSprite: Sprite = null
meinSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
```

Wenn du die Flag ``ghost through walls`` setzt, kann sich ein Sprite durch Wandkacheln hindurch bewegen. Außerdem tritt kein Wandtreffer auf, wenn er eine Wandkachel erreicht.

Das Beispiel hier zeigt einen Geister-Sprite, der durch eine Wandkachel geht, ohne erkannt zu werden.

```blocks
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    sprite.say("Ouch!")
})
let ghost = sprites.create(img`
    . . . . . . d d d d d . . . . . 
    . . . d d d d 1 1 1 d d d . . . 
    . . d d 1 1 1 1 1 1 1 1 d d . . 
    . . d 1 1 1 1 1 1 1 1 1 1 d . . 
    . . d 1 1 1 1 1 1 1 1 1 1 d d . 
    . d d 1 1 1 f 1 1 1 f 1 1 1 d . 
    . d 1 1 1 1 1 1 1 1 1 1 1 1 d d 
    . d 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    . d 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d d 1 1 1 1 1 1 f f 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 f f 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d 
    d 1 1 1 1 1 1 1 d 1 1 1 1 1 1 d 
    d 1 d d d 1 1 d d d d 1 d 1 1 d 
    d d d . d d d d . . d d d d d d 
    d d . . . d d . . . . d . . d d 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level_1`)
ghost.setFlag(SpriteFlag.GhostThroughWalls, true)
ghost.left = 0
ghost.vx = 40
```

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level_0": {
        "id": "level_0",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAwMDAwMDAwMDAwMDAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMDAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMDAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMTAwMDAwMDAwMDAyMDAwMDAwMDAwMjAwMDAwMDAwMDIwMDAwMDAwMDAyMDAwMDAwMDAwMjAwMDAwMDAwMDIwMDAwMDAwMDAyMDAwMDAwMDAwMjAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.dungeon.floorDark0"
        ]
    },
    "level_1": {
        "id": "level_1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAwMDAwMDAwMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMDAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMDAwMDEwMDAwMDAwMDAwMDAwMDAwMDAwMTAwMDAwMDAwMDAwMDAwMDAwMDAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.dungeon.floorDark0"
        ]
    },
    "level_2": {
        "id": "level_2",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAwMDAwMDAwMDAwMjAwMDAwMTAwMDAwMDAwMDAwMDAyMDAwMDAxMDAwMDAwMDAwMDAwMDIwMDAwMDEwMDAwMDAwMDAwMDAwMjAwMDAwMTAwMDAwMDAwMDAwMDAyMDAwMDAxMDAwMDAwMDAwMDAwMDIwMDAwMDEwMDAwMDAwMDAwMDAwMjAwMDAwMTAwMDAwMDAwMDAwMDAyMDAwMDAxMDAwMDAwMDAwMDAyMDAwMDAwMDAwMjAwMDAwMDAwMDIwMDAwMDAwMDAyMDAwMDAwMDAwMjAwMDAwMDAwMDIwMDAwMDAwMDAyMDAwMDAwMDAwMg==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.dungeon.floorLight2",
            "sprites.dungeon.floorDark2"
        ]
    },
    "level_3": {
        "id": "level_3",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAyNDAwMDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAyMDIwMjAzMDMwMzA0MDQwNDAzMDMwMzA0MDQwNDA1MDUwNTA1MDYwNjA2MDYwNzA3MDcwNzA1MDUwNTA1MDgwODAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.builtin.forestTiles2",
            "sprites.builtin.forestTiles28",
            "sprites.builtin.forestTiles22",
            "sprites.builtin.forestTiles25",
            "sprites.castle.tileGrass3",
            "sprites.castle.tilePath5",
            "sprites.builtin.forestTiles12",
            "sprites.castle.tileDarkGrass2"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```

## Siehe auch #seealso

[setze bleibe auf dem Bildschirm](/reference/sprites/sprite/set-stay-in-screen),
[setze an Wand abprallen](/reference/sprites/sprite/set-bounce-on-wall),
[wenn überlappt](/reference/sprites/on-overlap),
[wenn Wand getroffen](/reference/tiles/on-hit-wall),
[Kamera folgt Sprite](/reference/scene/camera-follow-sprite)
