# définir l'indicateur

Définis un indicateur (flag) de sprite sur **ON** ou **OFF**.

```sig
sprites.create(null).setFlag(0, false)
```

Les indicateurs de sprite sont des paramètres qui modifient la façon dont un sprite réagit à l'écran. Quand les sprites sont créés, ils ont des comportements par défaut définis par ces indicateurs. Les indicateurs déterminent si un sprite est forcé de toujours rester à l'écran ou s'il est détruit lorsqu'il sort de l'écran. Un autre comportement, le _mode fantôme_, fait que le sprite ne chevauche pas d'autres sprites et n'entre pas en collision avec les obstacles. Il existe des indicateurs pour définir le comportement d'un sprite lorsqu'il touche un mur ou chevauche d'autres sprites.

## Paramètres

* **flag** : l'indicateur de sprite à activer ou désactiver. Les indicateurs sont :
>* [stay in screen](#stay-in-screen) : le sprite est forcé de rester à l'écran lorsqu'il atteint un bord de l'écran.
>* [ghost](#ghost) : le sprite ne chevauche jamais d'autres sprites, il traverse les tuiles murales, et les chevauchements de tuiles et les collisions avec les murs ne sont pas détectés.
>* [auto destroy](#auto-destroy) : le sprite est automatiquement détruit lorsqu'il sort de l'écran.
>* [destroy on wall](#destroy-on-wall) : le sprite est automatiquement détruit lorsqu'il entre en collision avec une tuile murale.
>* [bounce on wall](#bounce-on-wall) : le sprite rebondit lorsqu'il entre en collision avec une tuile murale
>* [show physics](#show-physics) : le sprite affiche sa position, sa vitesse et son accélération en dessous de lui.
>* [invisible](#invisible) : le sprite n'est pas dessiné à l'écran.
>* [relative to camera](#relative-to-camera) : le sprite est dessiné par rapport à la caméra plutôt que par rapport au monde, et il ne chevauche jamais d'autres sprites ni n'entre en collision avec des obstacles. C'est utile pour dessiner à l'écran des éléments statiques (scores, boîtes de dialogue, etc.) qui ne doivent pas bouger quand la caméra se déplace.
>* [ghost through sprites](#ghost-through-sprites) : le sprite passe au-dessus ou en dessous des autres sprites sans créer d'événement de chevauchement.
>* [ghost through tiles](#ghost-through-tiles) : le sprite ne déclenche pas d'événements lorsqu'il passe sur des tuiles.
>* [ghost through walls](#ghost-through-walls) : le sprite traverse les tuiles murales sans déclencher d'événement de collision avec un mur.

## Indicateurs

### Stay in screen

```block
let monSprite: Sprite = null
monSprite.setFlag(SpriteFlag.StayInScreen, true)
```

Régler ``stay in screen`` sur **ON** force le sprite à rester visible à l'écran. Le sprite reste dans la vue actuelle de l'écran même si on lui donne une nouvelle position en dehors de l'écran. Dans l'exemple suivant, le sprite apparaît toujours à l'écran, même si sa position initiale est hors de l'écran et que son mouvement l'enverrait au-delà du bord de l'écran.

```blocks
let monSprite = sprites.create(img`
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
monSprite.setFlag(SpriteFlag.StayInScreen, true)
pause(500)
monSprite.left = -20
monSprite.top = -50
pause(500)
monSprite.vx = 30
```

### ~hint

#### Scène ou écran ?

Un sprite reste toujours dans les limites de ta scène si ton jeu a une carte de tuiles (tilemap). Régler l'indicateur ``stay in screen`` sur **OFF** ne permettra pas à ton sprite de continuer au-delà du bord de la scène du jeu. Si la scène est plus grande que l'écran et que ``auto destroy`` est réglé sur **ON**, le sprite se détruira lorsqu'il dépassera le bord de l'écran, même s'il se trouve encore dans la scène.

### ~

### Ghost

```block
let monSprite: Sprite = null
monSprite.setFlag(SpriteFlag.Ghost, true)
```

Un sprite ``ghost`` traverse les tuiles murales et ne provoque aucun événement de chevauchement avec les tuiles ou les autres sprites.

L'exemple ci-dessous montre un sprite fantôme qui passe à côté d'un autre sprite sans qu'un événement de chevauchement se produise. Il passe aussi sur une tuile qui n'est pas un mur et à travers une tuile murale sans s'arrêter ni déclencher d'événements de tuile.

```blocks
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    sprite.say("Ouch!")
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, autreSprite) {
    autreSprite.say("Boo!")
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
let monSprite: Sprite = null
monSprite.setFlag(SpriteFlag.AutoDestroy, true)
```
Les sprites dont l'indicateur ``auto destroy`` est activé sont détruits lorsque l'image du sprite dépasse le bord de l'écran.

Cet exemple crée des sprites en continu et les détruit lorsqu'ils sortent de l'écran. La valeur du score sert à compter les sprites détruits.

```blocks
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    info.changeScoreBy(1)
})
let monSprite: Sprite = null
info.setScore(0)
game.onUpdateInterval(500, function () {
    monSprite = sprites.create(img`
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
    monSprite.setFlag(SpriteFlag.AutoDestroy, true)
    monSprite.left = 0
    monSprite.vx = 200
})
```

### Destroy on wall

```block
let monSprite: Sprite = null
monSprite.setFlag(SpriteFlag.DestroyOnWall, true)
```

Le sprite est détruit lorsqu'il rencontre une tuile murale ou atteint le bord de la carte de tuiles de la scène.

```blocks
sprites.onDestroyed(SpriteKind.Player, function (sprite) {
    sprite.startEffect(effects.disintegrate)
})
let monSprite: Sprite = null
monSprite = sprites.create(img`
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
monSprite.setFlag(SpriteFlag.DestroyOnWall, true)
monSprite.left = 0
monSprite.vx = 30
```

### Bounce on wall

```block
let monSprite: Sprite = null
monSprite.setFlag(SpriteFlag.BounceOnWall, true)
```

L'indicateur ``bounce on wall`` fait rebondir le sprite lorsqu'il touche une tuile murale. Le sprite rebondit aussi sur le bord de la carte de tuiles de la scène.

```blocks
let monSprite = sprites.create(img`
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
monSprite.setFlag(SpriteFlag.BounceOnWall, true)
tiles.setTilemap(tilemap`level_0`)
monSprite.vx = 50
monSprite.vy = 50
```

Si aucune carte de tuiles n'est définie pour la scène, le sprite rebondit sur les bords de l'écran.

```blocks
let monSprite = sprites.create(img`
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
monSprite.setFlag(SpriteFlag.BounceOnWall, true)
monSprite.vx = 50
monSprite.vy = 50
```

### Show physics

```block
let monSprite: Sprite = null
monSprite.setFlag(SpriteFlag.ShowPhysics, true)
```

Un sprite dont ``show physics`` est réglé sur **ON** affiche sa position et ses paramètres de mouvement dans une légende à côté de lui.

```blocks
let monSprite = sprites.create(img`
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
monSprite.setFlag(SpriteFlag.ShowPhysics, true)
monSprite.x = 10
monSprite.y = 10
monSprite.ax = 7
monSprite.ay = 5
```

### Invisible

```block
let monSprite: Sprite = null
monSprite.setFlag(SpriteFlag.Invisible, true)
```

Activer l'indicateur de sprite `invisible` fait que le sprite n'est pas affiché à l'écran.

```blocks
let visible = false
let monSprite = sprites.create(img`
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
monSprite.left = 0
monSprite.vx = 10
game.onUpdateInterval(1000, function () {
    if (visible) {
        monSprite.setFlag(SpriteFlag.Invisible, false)
    } else {
        monSprite.setFlag(SpriteFlag.Invisible, true)
    }
    visible = !(visible)
})
```

### Relative to camera

```block
let monSprite: Sprite = null
monSprite.setFlag(SpriteFlag.RelativeToCamera, true)
```

L'indicateur ``relative to camera`` fixe la position du sprite à l'écran lorsque la vue de la scène change. Cela empêche le sprite de sortir de l'écran quand la vue de la caméra se déplace. De plus, le sprite ne crée aucune collision et ne chevauche pas d'autres sprites.

L'exemple suivant place un sprite dans le coin supérieur droit de l'écran. Le sprite reste au même endroit à l'écran pendant que la vue de la caméra se déplace de gauche à droite dans la scène.

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
let monSprite: Sprite = null
monSprite.setFlag(SpriteFlag.GhostThroughSprites, true)
```

Activer ``ghost through sprites`` permet à un sprite de passer au-dessus ou en dessous d'un autre sprite sans provoquer d'événement de chevauchement.

L'exemple suivant montre un sprite fantôme qui passe sous un autre sprite sans déclencher d'événement de chevauchement.

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, autreSprite) {
    autreSprite.say("Boo!")
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
let monSprite: Sprite = null
monSprite.setFlag(SpriteFlag.GhostThroughTiles, true)
```

Régler ``ghost through tiles`` sur **ON** permet à un sprite de passer sur une tuile sans provoquer d'événement de chevauchement.

L'exemple ci-dessous montre un sprite fantôme qui passe sur une tuile sans être détecté par un événement de chevauchement.

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
let monSprite: Sprite = null
monSprite.setFlag(SpriteFlag.GhostThroughWalls, true)
```

Activer l'indicateur ``ghost through walls`` permet à un sprite de traverser les tuiles murales. De plus, aucune collision avec un mur ne se produit lorsqu'il atteint une tuile murale.

L'exemple ci-dessous montre un sprite fantôme qui traverse une tuile murale sans être détecté.

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

## Voir aussi #seealso

[définir rester à l'écran](/reference/sprites/sprite/set-stay-in-screen),
[définir rebondir sur les murs](/reference/sprites/sprite/set-bounce-on-wall),
[lors du chevauchement](/reference/sprites/on-overlap),
[lors de la collision avec un mur](/reference/tiles/on-hit-wall),
[la caméra suit le sprite](/reference/scene/camera-follow-sprite)
