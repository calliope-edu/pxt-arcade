# mettre à l'échelle en pourcentage

Met un sprite à l'échelle d'un pourcentage de sa taille actuelle dans une direction à partir d'un point d'ancrage.

```sig
scaling.scaleByPercent(null, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
```

Un sprite peut être mis à l'échelle d'un pourcentage de sa taille d'origine dans une direction à partir d'un point d'ancrage. La mise à l'échelle peut se faire dans une seule direction ou de manière uniforme.

## Mise à l'échelle uniforme

Lorsque la **direction** de mise à l'échelle est définie sur `uniformly`, le sprite est mis à l'échelle de sorte que la largeur et la hauteur de la nouvelle taille changent du même pourcentage **value**. Si la taille actuelle d'un sprite est `64` x `32` et qu'il est mis à l'échelle uniformément de `50` pour cent, la nouvelle largeur est `32` et la nouvelle hauteur est `16`.

## Paramètres

* **sprite** : le sprite à mettre à l'échelle d'un pourcentage de sa taille d'origine.
* **value** : le [nombre](/types/number) qui indique le pourcentage de mise à l'échelle du sprite.
* **direction** : la direction dans laquelle mettre à l'échelle :
>* `horizontally`
>* `vertically`
>* `uniformly`
* **anchor** : un point d'ancrage à partir duquel mettre le sprite à l'échelle :
>* `middle`
>* `top`
>* `left`
>* `right`
>* `bottom`
>* `top left`
>* `top right`
>* `bottom right`
>* `bottom left`

## Exemple #example

### Testeur de mise à l'échelle #ex1

Crée un programme pour tester la mise à l'échelle d'un sprite en l'agrandissant et en le rétrécissant uniformément. Utilise les boutons de la manette pour augmenter et diminuer l'échelle d'un sprite d'un pourcentage de sa taille actuelle.

```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleByPercent(monSprite, -50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    info.setScore(monSprite.width)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleByPercent(monSprite, 50, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    info.setScore(monSprite.width)
})
let monSprite: Sprite = null
monSprite = sprites.create(img`
    22222222222222222222222222222222
    25557777777777777777777777775552
    25577777777777777777777777777552
    25777777777777777777777777777752
    27777777777777777777777777777772
    27777777777777777777777777777772
    27777777777777777777777777777772
    27777777777777888877777777777772
    27777777777777888877777777777772
    27777777777777777777777777777772
    27777777777777777777777777777772
    27777777777777777777777777777772
    25777777777777777777777777777752
    25577777777777777777777777777552
    25557777777777777777777777775552
    22222222222222222222222222222222
    `, SpriteKind.Player)
info.setScore(monSprite.width)
```

## Voir aussi #seealso

[mettre à l'échelle en pourcentage](/reference/sprites/scaling/scale-to-percent)

```package
sprite-scaling
```
