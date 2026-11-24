# créer une animation

Crée un objet animation qui sera attaché à un sprite.

```sig
animation.createAnimation(0, 0)
```

Un objet animation contient des images (frames) qui sont affichées en séquence. L'animation est vide lorsqu'elle vient d'être créée. Des frames sont ajoutées à l'animation pour montrer une action complète. L'animation est associée, ou étiquetée, à son action. Une action est une activité à laquelle on donne une valeur, comme ``Walking``, ``Flying``, ``Running`` ou ``Jumping``. 

Les actions sont définies dans une énumération appelée ``ActionKind`` et sont choisies pour l'animation lors de sa création. Tu peux ajouter de nouvelles actions en ajoutant une nouvelle valeur à ``ActionKind`` en JavaScript ou en choisissant ``Add a new action...`` dans la liste déroulante des actions de ``||animation:create animation||``.

```typescript-ignore
enum ActionKind {
    Walking,
    Idle,
    Jumping
}
```

Chaque frame d'une animation est affichée pendant un certain temps. Celui-ci est défini dans l'**intervalle** des frames, en millisecondes.

## Paramètres

* **action** : une action à laquelle associer l'animation. Cela peut être une action comme ``Walking`` ou ``Jumping``.
* **interval** : un [nombre](/types/number) qui est la durée en millisecondes d'affichage de chaque frame de l'animation.

## Retours

* une [animation](/types/animation) qui est attachée plus tard à un sprite.

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

[ajouter une frame d'animation](/reference/animation/add-animation-frame),
[attacher l'animation](/reference/animation/attach-animation),
[définir l'action](/reference/animation/set-action)

```package
animation
```