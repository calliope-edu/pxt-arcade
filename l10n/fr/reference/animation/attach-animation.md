# attacher l'animation

Attache une animation à un sprite.

```sig
animation.attachAnimation(null, null)
```

Une animation doit être attachée à un sprite avant de pouvoir s'activer. L'animation se joue dans la zone d'image du sprite. Quand le sprite se déplace, l'animation se déplace avec lui et s'affiche là où se trouve le sprite.

Tu peux attacher plusieurs animations à un sprite. Une seule est active à la fois, lorsque son [action](/reference/animation/set-action) est définie sur le sprite.

## Exemple #example

Crée une animation de marche avec quatre frames.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
enum ActionKind {
    Walking,
    Idle,
    Jumping
}
let anim: animation.Animation = null
let monSprite: Sprite = null
monSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
anim = animation.createAnimation(ActionKind.Walking, 1000)
anim.addAnimationFrame(img`
d d d d d d f f f f d d d d d d 
d d d d f f f 2 2 f f f d d d d 
d d d f f f 2 2 2 2 f f f d d d 
d d f f f e e e e e e f f f d d 
d d f f e 2 2 2 2 2 2 e e f d d 
d d f e 2 f f f f f f 2 e f d d 
d d f f f f e e e e f f f f d d 
d f f e f b f 4 4 f b f e f f d 
d f e e 4 1 f d d f 1 4 e e f d 
d d f e e d d d d d d e e f d d 
d d d f e e 4 4 4 4 e e f d d d 
d d e 4 f 2 2 2 2 2 2 f 4 e d d 
d d 4 d f 2 2 2 2 2 2 f d 4 d d 
d d 4 4 f 4 4 5 5 4 4 f 4 4 d d 
d d d d d f f f f f f d d d d d 
d d d d d f f d d f f d d d d d 
`)
anim.addAnimationFrame(img`
d d d d d d d d d d d d d d d d 
d d d d d d f f f f d d d d d d 
d d d d f f f 2 2 f f f d d d d 
d d d f f f 2 2 2 2 f f f d d d 
d d f f f e e e e e e f f f d d 
d d f f e 2 2 2 2 2 2 e e f d d 
d f f e 2 f f f f f f 2 e f f d 
d f f f f f e e e e f f f f f d 
d d f e f b f 4 4 f b f e f d d 
d d f e 4 1 f d d f 1 4 e f d d 
d d d f e 4 d d d d 4 e f e d d 
d d f e f 2 2 2 2 e d d 4 e d d 
d d e 4 f 2 2 2 2 e d d e d d d 
d d d d f 4 4 5 5 f e e d d d d 
d d d d f f f f f f f d d d d d 
d d d d f f f d d d d d d d d d 
`)
anim.addAnimationFrame(img`
d d d d d d f f f f d d d d d d 
d d d d f f f 2 2 f f f d d d d 
d d d f f f 2 2 2 2 f f f d d d 
d d f f f e e e e e e f f f d d 
d d f f e 2 2 2 2 2 2 e e f d d 
d d f e 2 f f f f f f 2 e f d d 
d d f f f f e e e e f f f f d d 
d f f e f b f 4 4 f b f e f f d 
d f e e 4 1 f d d f 1 4 e e f d 
d d f e e d d d d d d e e f d d 
d d d f e e 4 4 4 4 e e f d d d 
d d e 4 f 2 2 2 2 2 2 f 4 e d d 
d d 4 d f 2 2 2 2 2 2 f d 4 d d 
d d 4 4 f 4 4 5 5 4 4 f 4 4 d d 
d d d d d f f f f f f d d d d d 
d d d d d f f d d f f d d d d d 
`)
anim.addAnimationFrame(img`
d d d d d d d d d d d d d d d d 
d d d d d d f f f f d d d d d d 
d d d d f f f 2 2 f f f d d d d 
d d d f f f 2 2 2 2 f f f d d d 
d d f f f e e e e e e f f f d d 
d d f e e 2 2 2 2 2 2 e f f d d 
d f f e 2 f f f f f f 2 e f f d 
d f f f f f e e e e f f f f f d 
d d f e f b f 4 4 f b f e f d d 
d d f e 4 1 f d d f 1 4 e f d d 
d d e f e 4 d d d d 4 e f d d d 
d d e 4 d d e 2 2 2 2 f e f d d 
d d d e d d e 2 2 2 2 f 4 e d d 
d d d d e e f 5 5 4 4 f d d d d 
d d d d d f f f f f f f d d d d 
d d d d d d d d d f f f d d d d 
`)
animation.attachAnimation(monSprite, anim)
animation.setAction(monSprite, ActionKind.Walking)
```

## Voir aussi #seealso

[créer une animation](/reference/animation/add-animation-frame),
[ajouter une frame d'animation](/reference/animation/add-animation-frame),
[définir l'action](/reference/animation/set-action)

```package
animation
```
