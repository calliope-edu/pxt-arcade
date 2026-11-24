# Making the enemies move

## {Introduction @unplugged}

Use the `||sprites:on created||` event to make the enemies in your game move!

![Moving Enemies](https://cdn.makecode.com/blob/90ba1f78e928795f698dc2384904a6a2796a8a61/static/recipes/shark-splash/02-A-enemies.gif)

## {Step 1}

Drag an `||sprites:on created||` block into the workspace. Change the kind dropdown to `||sprites:Enemy||`.

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
})
```


## {Step 2}

Inside the `||sprites:on created||` block, place a `||sprites:set velocity||` block. Drag the `||variables(noclick):sprite||` variable from the `||sprites:on created||` block and use it as the sprite inside of `||sprites:set velocity||`.

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(50, 50)
})
```

## {Step 3}

Change the values in the `||sprites:set velocity||` block to set the speed and direction of your enemy sprite. In this example, we will set `||sprites:vx||` to `-50` and `||sprites:vy||` to `0`.

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(-50, 0)
})
```

## {Step 4}

Place a `||sprites:set auto destroy||` block below the `||sprites:set velocity||` block (this is called a sprite **flag**). Just like before, drag the `||variables(noclick):sprite||` variable from the `||sprites:on created||` block and use it as the sprite for `||sprites:set auto destroy||`.


```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(-50, 0)
    sprite.setFlag(SpriteFlag.AutoDestroy, false)
})
```

## {Step 5}

In the `||sprites:set auto destroy||` block. Switch the setting for that from **OFF** to **ON**. This setting will cause all of the enemies to get automatically destroyed when they travel outside of the screen.

```blocks
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.setVelocity(-50, 0)
    sprite.setFlag(SpriteFlag.AutoDestroy, true)
})
```

## {Conclusion @unplugged}

Now let's add code to destroy the enemies with your projectiles! Or, if you're feeling creative, add a background to set the scene.

|                                                                                                                 |                                                                                                                  |                                                                                                 |
|:---------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|
| [![Projectiles](https://cdn.makecode.com/blob/d02cb3c2983a193c64ebfc3cf153ef03d0497cd9/static/recipes/shark-splash/03-projectiles.gif)](#recipe:/recipes/shark-splash/03-projectiles) | [![Multiple enemies](https://cdn.makecode.com/blob/5e5b5623014efbd8e21f1ce355660238139d2b73/static/recipes/shark-splash/02-B-enemies.gif)](#recipe:/recipes/shark-splash/02-B-enemies) | [![Background](https://cdn.makecode.com/blob/b1862c522e081c22044d542e07e61594d2dc723f/static/recipes/shark-splash/04-background.png)](#recipe:/recipes/04-background) |
|                     [**Projectile effects**](#recipe:/recipes/shark-splash/03-projectiles)                      |                        [**Multiple enemies**](#recipe:/recipes/shark-splash/02-B-enemies)                        |             [**Design a background**](#recipe:/recipes/shark-splash/04-background)              |