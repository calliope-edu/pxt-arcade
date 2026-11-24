# Projectile Effects

## {Introduction @unplugged}

Now that you have enemies and projectiles, let's give your projectiles some power!

![Projectiles](https://cdn.makecode.com/blob/d02cb3c2983a193c64ebfc3cf153ef03d0497cd9/static/recipes/shark-splash/03-projectiles.gif)

## {Detect sprite overlaps}

From `||sprites:Sprites||`, drag the `||sprites:on||` `||variables:sprite||` `||sprites:overlaps||`  `||variables:autreSprite||` block into your workspace. Click the first dropdown and select `||sprites:Projectile||`, then click the second dropdown and select `||sprites:Enemy||`.

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, autreSprite) {
})
```

## {Destroy the enemy}

From `||sprites:Sprites||`, drag the `||sprites:destroy||` block into your `||sprites:on sprite overlaps||` blocks. Drag the `||variables:autreSprite||` variable into the `||sprites:destroy sprite||`.

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, autreSprite) {
    // @highlight
    autreSprite.destroy()
})
```

## {Add score}

From `||info:Info||`, drag the `||info:change score||` block into `||sprites:on sprite overlaps||` to give yourself a point each time you hit an enemy.

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, autreSprite) {
    autreSprite.destroy()
    // @highlight
    info.changeScoreBy(1)
})
```

## {Spawn projectiles}

From `||sprites:Sprites||`, drag the `||sprites:monSprite start effect||` block into `||sprites:on sprite overlaps||`. Then drag the `||variables:sprite||` variable into the `||sprites:start effect||` block. Click the dropdown to select your favorite effect!


```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, autreSprite) {
    autreSprite.destroy()
    info.changeScoreBy(1)
    // @highlight
    sprite.startEffect(effects.bubbles)
})
```

## {Conclusion @unplugged}

Now try making your enemies move or spawn multiple kinds of enemies!

|                                                                                                                |                                                                                                                  |                                                                                                 |
|:--------------------------------------------------------------------------------------------------------------:|:----------------------------------------------------------------------------------------------------------------:|:-----------------------------------------------------------------------------------------------:|
| [![Moving enemies](https://cdn.makecode.com/blob/90ba1f78e928795f698dc2384904a6a2796a8a61/static/recipes/shark-splash/02-A-enemies.gif)](#recipe:/recipes/shark-splash/02-A-enemies) | [![Multiple enemies](https://cdn.makecode.com/blob/5e5b5623014efbd8e21f1ce355660238139d2b73/static/recipes/shark-splash/02-B-enemies.gif)](#recipe:/recipes/shark-splash/02-B-enemies) | [![Background](https://cdn.makecode.com/blob/b1862c522e081c22044d542e07e61594d2dc723f/static/recipes/shark-splash/04-background.png)](#recipe:/recipes/04-background) |
|                        [**Moving enemies**](#recipe:/recipes/shark-splash/02-A-enemies)                        |                        [**Multiple enemies**](#recipe:/recipes/shark-splash/02-B-enemies)                        |             [**Design a background**](#recipe:/recipes/shark-splash/04-background)              |