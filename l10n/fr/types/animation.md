# Animation

Une animation est une suite d'images affichées l'une après l'autre pour montrer une action. Les images peuvent montrer, par exemple, un personnage qui marche ou une étoile qui explose. L'effet de l'animation reçoit une valeur d'action et démarre lorsque cette action est définie pour un sprite.

## Créer une animation pour une action

D'abord, un objet animation est [créé](/reference/animation/create-animation) pour une action. Si l'animation doit montrer un personnage qui marche, l'action est définie sur ``Walking`` :

```block
enum ActionKind {
    Walking,
    Idle,
    Jumping
}
let anim: animation.Animation = null
anim = animation.createAnimation(ActionKind.Walking, 1000)
```

Cette animation a un intervalle de `1000` millisecondes, ce qui signifie que chaque image est affichée pendant `1` seconde avant que la suivante apparaisse. C'est la vitesse de l'animation, ou la _fréquence d'images_.

## Ajouter des images à l'animation

L'animation est construite en [ajoutant des images](/reference/animation/add-animation-frame). Une image (frame) est une [image](/types/image) ajoutée à la liste des autres images de l'animation. 

```block
enum ActionKind {
    Walking,
    Idle,
    Jumping
}
let anim: animation.Animation = null
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
```

D'autres images sont ajoutées à l'animation jusqu'à ce que l'action soit complète. Quand l'animation démarre, les images sont affichées dans l'ordre où elles ont été ajoutées.

```block
let anim: animation.Animation = null
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
```

## Attacher à un sprite

L'animation a besoin d'un endroit où s'afficher. Les animations sont [attachées](/reference/animation/attach-animation) à un sprite et affichées dans la zone d'image du sprite. L'animation se déplace donc avec le sprite, et son action s'affiche partout où se trouve le sprite.

```block
enum SpriteKind {
    Player,
    Enemy
}
let anim: animation.Animation = null
let monSprite: Sprite = null
monSprite = sprites.create(img``)
animation.attachAnimation(monSprite, anim)
```

## Démarrer l'animation

Une animation démarre quand on [active](/reference/animation/set-action) son action. Pour démarrer l'animation ``Walking``, l'action de marche est activée pour le sprite auquel elle est attachée :

```block
enum ActionKind {
    Walking,
    Idle,
    Jumping
}
let monSprite: Sprite = null
animation.setAction(monSprite, ActionKind.Walking)
```

## Plus d'actions

Tu peux choisir une autre action ou en créer une nouvelle et l'ajouter à l'énumération ``ActionKind``. Tu peux aussi ajouter une nouvelle action en choisissant ``Add a new action...`` dans la liste déroulante des actions de ``||animation:create animation||``.

```typescript
enum ActionKind {
    Walking,
    Running,
    Idle,
    Jumping
}
```

Si tu veux que le personnage des exemples ci-dessus puisse courir en plus de marcher, tu peux créer une deuxième animation pour l'action ``Running`` :

```block
enum ActionKind {
    Walking,
    Running,
    Idle,
    Jumping
}
let walker: animation.Animation = null
let runner: animation.Animation = null
walker = animation.createAnimation(ActionKind.Walking, 1000)
runner = animation.createAnimation(ActionKind.Running, 250)
```

Les mêmes images peuvent être utilisées pour l'action ``Running``, mais l'intervalle est plus court, si bien que le personnage semble courir au lieu de marcher dans la deuxième animation.

### Marcher et courir

Pour voir les effets d'animation de la marche et de la course, deux animations sont attachées à un sprite. L'action ``Walking`` démarre et dure `4` secondes. Juste après, l'action ``Running`` est jouée pendant `4` secondes. Les actions se répètent ensuite dans cet ordre.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
enum ActionKind {
    Walking,
    Idle,
    Jumping,
    Running
}
let runner: animation.Animation = null
let walker: animation.Animation = null
let monSprite: Sprite = null
let walk = false
walk = true
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
walker = animation.createAnimation(ActionKind.Walking, 1000)
walker.addAnimationFrame(img`
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
walker.addAnimationFrame(img`
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
walker.addAnimationFrame(img`
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
walker.addAnimationFrame(img`
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
animation.attachAnimation(monSprite, walker)
runner = animation.createAnimation(ActionKind.Running, 250)
runner.addAnimationFrame(img`
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
runner.addAnimationFrame(img`
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
runner.addAnimationFrame(img`
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
runner.addAnimationFrame(img`
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
animation.attachAnimation(monSprite, runner)
game.onUpdateInterval(4000, function () {
    if (walk) {
        animation.setAction(monSprite, ActionKind.Walking)
    } else {
        animation.setAction(monSprite, ActionKind.Running)
    }
    walk = !(walk)
})
```

## Voir aussi #seealso

[créer une animation](/reference/animation/create-animation),
[ajouter une image d'animation](/reference/animation/add-animation-frame),
[attacher une animation](/reference/animation/attach-animation),
[définir l'action](/reference/animation/set-action)

```package
animation
```