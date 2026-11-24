# Make enemies damage the player

## {Einführung @unplugged}

Use the `||info:change life by -1||` block to damage the player when they overlap an enemy!

![Enemy Damage](https://cdn.makecode.com/blob/f88122aedef78f27fde62e59ad79c46b3aa0f1e5/static/recipes/shark-splash/02-C-enemies.gif)

## {Step 1}

Place a `||info:set life to 3||` block inside the `||loops:on start||` event in your workspace.

```blocks
info.setLife(3)
```

## {Step 2}

Drag an `||sprites:on overlaps||` block into the workspace. Change the second kind to `||sprites:Enemy||` in the dropdown. If you already have a `||sprites:on overlaps||` block in your workspace for the `||sprites:Player||` and `||sprites:Enemy||` sprites, use that instead.

```blocks
info.setLife(3)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, anderesSprite) {
})
```

## {Step 3}

Place a `||sprites:destroy sprite||` block inside the `||sprites:on overlaps||` event. Drag the `||variables:anderesSprite||` variable from the `||sprites:on overlaps||` block and place it inside the `||sprites:destroy sprite||`. You can skip this step if `||variables:anderesSprite||` is already destroyed in this event.

```blocks
info.setLife(3)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, anderesSprite) {
    anderesSprite.destroy()
})
```

## {Step 4}

Place a `||info:change life by -1||` block inside the `||sprites:on overlaps||` event.

```blocks
info.setLife(3)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, anderesSprite) {
    anderesSprite.destroy()
    info.changeLifeBy(-1)
})
```

## {Step 5}

Place a `||scene:camera shake||` block inside the `||sprites:on overlaps||` event. This lets the player know that they have been hit.

```blocks
info.setLife(3)
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, anderesSprite) {
    anderesSprite.destroy()
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
})
```

## {Conclusion @unplugged}

|                                                                                                                |                                                                                                                  |                                                                                                  |
|:--------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------:|:------------------------------------------------------------------------------------------------:|
| [![Moving enemies](https://cdn.makecode.com/blob/90ba1f78e928795f698dc2384904a6a2796a8a61/static/recipes/shark-splash/02-A-enemies.gif)](#recipe:/recipes/shark-splash/02-A-enemies) | [![Multiple enemies](https://cdn.makecode.com/blob/5e5b5623014efbd8e21f1ce355660238139d2b73/static/recipes/shark-splash/02-B-enemies.gif)](#recipe:/recipes/shark-splash/02-B-enemies) | [![Hintergrund](https://cdn.makecode.com/blob/b1862c522e081c22044d542e07e61594d2dc723f/static/recipes/shark-splash/04-background.png)](#recipe:/recipes/04-background) |
|                        [**Moving enemies**](#recipe:/recipes/shark-splash/02-A-enemies)                        |                        [**Multiple enemies**](#recipe:/recipes/shark-splash/02-B-enemies)                        |              [**Design a background**](#recipe:/recipes/shark-splash/04-background)              |

