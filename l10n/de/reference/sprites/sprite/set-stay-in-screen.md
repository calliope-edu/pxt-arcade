# Auf dem Bildschirm bleiben setzen

Lege fest, dass ein Sprite immer im sichtbaren Bildschirmbereich bleibt.

```sig
sprites.create(null).setStayInScreen(false)
```

Du kannst deinen Sprite immer im sichtbaren Bildschirmbereich bleiben lassen. Dadurch wird eine Sprite-[Flag](/reference/sprites/sprite/set-flag#stay-in-screen) gesetzt, die den Sprite auf dem Bildschirm hält, selbst wenn seine Position oder Bewegung ihn aus dem sichtbaren Bildschirmbereich bringen würde.

## Parameter

* **on**: ein [boolescher](/types/boolean) Wert, um die Flag ``stay in screen`` für den Sprite zu setzen. Ein Wert ``true`` bedeutet **AN** und ein Wert ``false`` bedeutet **AUS**.

## Beispiel

Lass einen Sprite auf dem Bildschirm erscheinen, obwohl seine Startposition außerhalb des Bildschirms liegt und seine Bewegung ihn über den Bildschirmrand hinaus bringen würde.

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

## Siehe auch

[setze Flag](/reference/sprites/sprite/set-flag), [setze an Wand abprallen](/reference/sprites/sprite/set-bounce-on-wall)