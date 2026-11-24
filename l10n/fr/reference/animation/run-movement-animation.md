# lancer l'animation de mouvement

Applique un effet d'animation de mouvement à un sprite.

```sig
animation.runMovementAnimation(null, "")
```

Une animation de mouvement est un effet de déplacement appliqué à un sprite. L'image du
sprite semblera bouger selon le type de mouvement que tu choisis. Tu as plusieurs
types de mouvement au choix et tu peux les sélectionner dans la liste du bloc.

L'animation dure le temps que tu lui as fixé. Quand l'animation se termine, le sprite revient à sa position d'origine. Tu peux faire répéter l'animation en mettant le paramètre **loop** sur **ON**.

## Paramètres

* **sprite** : un sprite auquel attacher l'animation.
* **pathString** : le nom d'une trajectoire de mouvement à appliquer au sprite.
* **duration** : le [nombre](/types/number) de millisecondes pendant lesquelles l'animation s'exécute.
* **loop** : une valeur [booléenne](/types/boolean) qui, si elle vaut ``true``, fait revenir le sprite à sa position d'origine et redémarre l'animation. Si elle vaut ``false``, l'animation ne s'exécute qu'une fois et le sprite reste à la dernière position de l'animation.

## Exemple #example

Crée un grand sprite de taco. Lance une animation de mouvement sur le taco pour le faire « sautiller »
vers la droite de l'écran pendant `5` secondes.

```blocks
scene.setBackgroundColor(1)
let monSprite = sprites.create(img`
    . . . . . . . . . . . . . . e e e e e e e . . . . . . . . . . .
    . . . . . . . . . . . . e e 4 5 5 6 6 2 e 2 e . . . . . . . . .
    . . . . . . . . . . e e 4 5 5 5 6 7 2 3 e 2 6 8 8 . . . . . . .
    . . . . . . . . . e 4 6 7 7 6 6 7 7 2 3 2 e 7 7 7 6 6 8 . . . .
    . . . . . . . . e 4 6 7 4 5 5 5 4 7 7 2 2 2 7 7 7 6 7 7 8 . . .
    . . . . . . . 4 4 4 8 7 4 4 4 4 4 7 7 7 7 6 6 7 7 7 6 7 8 . . .
    . . . . . . 4 5 2 2 e 7 7 7 7 7 7 6 7 7 7 7 6 6 6 7 6 6 6 8 . .
    . . . . . 4 5 2 3 2 2 7 7 6 6 7 2 2 e 6 6 6 e e e e e 8 8 8 . .
    . . . . 4 5 5 2 3 2 e 7 6 6 7 2 3 2 2 e 4 5 5 5 d d d d 4 8 . .
    . . . 4 4 5 6 7 7 7 7 5 5 4 6 2 3 e 4 5 5 d d d d d d d d d 4 .
    . . . e 6 6 7 7 4 5 5 4 4 7 7 e 4 5 5 d d d d 5 5 5 5 4 d d 4 4
    . . e 4 6 7 7 7 4 4 4 6 7 7 e 5 5 d d 5 5 5 5 5 d 5 5 d d d d 4
    . . e 5 6 6 8 6 7 7 6 6 6 e 5 d d 5 5 5 5 5 5 5 5 5 5 5 5 d d e
    . e 4 5 5 4 4 e 8 7 7 6 e 5 d 5 5 5 5 5 4 5 5 5 5 5 5 5 5 5 d e
    . e 5 5 4 e e e e 6 6 e 5 d 5 5 5 5 d 5 5 5 5 5 d d d d 5 4 d e
    . e 5 5 e e 4 4 f e e 5 d 5 d 5 5 5 5 5 5 d 5 d 5 d d d d d d e
    e 4 5 4 e e e e f e 4 5 d 5 5 5 5 5 5 5 5 5 5 5 d d 4 d d d e .
    e 5 e 4 e e f f f e 5 d 5 5 5 5 5 5 5 5 d 5 5 5 5 d d d d e . .
    e 5 e e 4 e e f f 4 5 d 5 5 5 5 5 5 5 5 5 5 5 5 d d d d e . . .
    e 5 e e e e f f e 5 d 5 5 d 5 5 5 d 5 5 5 5 d 5 d d d e . . . .
    e 5 f f e f e e e 5 d 5 5 5 4 5 5 5 5 5 5 5 d d d 4 e . . . . .
    e 5 f f f f f f e 5 4 5 5 5 5 5 5 5 d 5 d 4 d d e e . . . . . .
    e 5 4 e f e f f 4 5 d 5 5 d 5 5 5 5 5 d d d d e . . . . . . . .
    e 5 e e e f f e 5 d d 5 5 5 5 5 4 5 d d d e e . . . . . . . . .
    e 4 e e e f f f 5 d 5 5 5 5 d 5 5 d d d e . . . . . . . . . . .
    e 4 e f e f f f 5 d 5 d 5 5 5 5 5 d 4 e . . . . . . . . . . . .
    . e 4 e f f f e 5 d 5 5 5 5 5 5 d e e . . . . . . . . . . . . .
    . e 5 4 e e e e 5 d 5 4 5 d d 4 e . . . . . . . . . . . . . . .
    . . e 5 5 4 e e 5 d d d d d e e . . . . . . . . . . . . . . . .
    . . . e e 5 5 4 4 d d d e e . . . . . . . . . . . . . . . . . .
    . . . . . e e e e e e e . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
animation.runMovementAnimation(
monSprite,
animation.animationPresets(animation.bobbingRight),
5000,
true
)
```

## Voir aussi #seealso

[lancer l'animation d'image](/reference/animation/run-image-animation),
[arrêter l'animation](/reference/animation/stop-animation)

```package
animation
```
