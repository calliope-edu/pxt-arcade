# Animation

Eine Animation ist eine Folge von Bildern, die nacheinander angezeigt werden, um eine Aktion darzustellen. Die Bilder könnten zum Beispiel eine laufende Figur oder einen explodierenden Stern zeigen. Der Animation wird ein Aktionswert zugewiesen, und sie startet, wenn diese Aktion für einen Sprite festgelegt wird.

## Eine Animation für eine Aktion erstellen

Zuerst wird für eine Aktion ein Animationsobjekt [erstellt](/reference/animation/create-animation). Wenn die Animation eine laufende Figur zeigen soll, wird die Aktion auf ``Walking`` gesetzt:

```block
enum ActionKind {
    Walking,
    Idle,
    Jumping
}
let anim: animation.Animation = null
anim = animation.createAnimation(ActionKind.Walking, 1000)
```

Diese Animation hat ein Intervall von `1000` Millisekunden, das heißt, jedes Einzelbild wird `1` Sekunde lang angezeigt, bevor das nächste kommt. Das ist die Geschwindigkeit der Animation, die _Bildrate_.

## Einzelbilder zur Animation hinzufügen

Die Animation wird durch [Hinzufügen von Einzelbildern](/reference/animation/add-animation-frame) aufgebaut. Ein Einzelbild ist ein [Bild](/types/image), das zur Liste der anderen Bilder in der Animation hinzugefügt wird. 

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

Es werden weitere Einzelbilder hinzugefügt, bis die Aktion vollständig ist. Wenn die Animation gestartet wird, werden die Einzelbilder in der Reihenfolge angezeigt, in der sie hinzugefügt wurden.

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

## An einen Sprite anhängen

Die Animation braucht einen Ort, an dem sie angezeigt wird. Animationen werden an einen Sprite [angehängt](/reference/animation/attach-animation) und im Bildbereich des Sprites angezeigt. Die Animation bewegt sich also mit dem Sprite, sodass ihre Aktion überall dort angezeigt wird, wo der Sprite gerade ist.

```block
enum SpriteKind {
    Player,
    Enemy
}
let anim: animation.Animation = null
let meinSprite: Sprite = null
meinSprite = sprites.create(img``)
animation.attachAnimation(meinSprite, anim)
```

## Die Animation starten

Animationen werden gestartet, indem ihre Aktion [aktiviert](/reference/animation/set-action) wird. Um die ``Walking``-Animation zu starten, wird die Laufaktion für den Sprite aktiviert, an den sie angehängt ist:

```block
enum ActionKind {
    Walking,
    Idle,
    Jumping
}
let meinSprite: Sprite = null
animation.setAction(meinSprite, ActionKind.Walking)
```

## Weitere Aktionen

Du kannst eine andere Aktion auswählen oder eine neue erstellen und sie zur Aufzählung ``ActionKind`` hinzufügen. Eine neue Aktion kannst du auch hinzufügen, indem du ``Add a new action...`` in der Aktions-Auswahlliste von ``||animation:create animation||`` wählst.

```typescript
enum ActionKind {
    Walking,
    Running,
    Idle,
    Jumping
}
```

Wenn die Figur in den Beispielen oben nicht nur gehen, sondern auch rennen soll, kannst du eine zweite Animation für die Aktion ``Running`` erstellen:

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

Dieselben Einzelbilder können in die Aktion ``Running`` übernommen werden, aber das Intervall ist kürzer, sodass die Figur in der zweiten Animation zu rennen statt zu gehen scheint.

### Gehen und Rennen

Um die Animationseffekte von Gehen und Rennen zu sehen, werden zwei Animationen an einen Sprite angehängt. Die Aktion ``Walking`` wird gestartet und läuft `4` Sekunden lang. Direkt danach läuft die Aktion ``Running`` `4` Sekunden lang. Die Aktionen werden dann in dieser Reihenfolge wiederholt.

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
let meinSprite: Sprite = null
let walk = false
walk = true
meinSprite = sprites.create(img`
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
animation.attachAnimation(meinSprite, walker)
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
animation.attachAnimation(meinSprite, runner)
game.onUpdateInterval(4000, function () {
    if (walk) {
        animation.setAction(meinSprite, ActionKind.Walking)
    } else {
        animation.setAction(meinSprite, ActionKind.Running)
    }
    walk = !(walk)
})
```

## Siehe auch #seealso

[Animation erstellen](/reference/animation/create-animation),
[Einzelbild zur Animation hinzufügen](/reference/animation/add-animation-frame),
[Animation anhängen](/reference/animation/attach-animation),
[Aktion festlegen](/reference/animation/set-action)

```package
animation
```