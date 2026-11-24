# scale To Percent

Met un sprite à l'échelle d'un pourcentage de sa taille d'origine, dans une direction, à partir d'un point d'ancrage.

```sig
scaling.scaleToPercent(null, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
```

Un sprite peut être mis à l'échelle d'un pourcentage de sa taille d'origine, dans une direction, à partir d'un point d'ancrage. La mise à l'échelle peut se faire dans une seule direction ou de manière uniforme.

## Mise à l'échelle uniforme

Quand la **direction** de mise à l'échelle est réglée sur `uniformly`, le sprite est mis à l'échelle de sorte que sa largeur et sa hauteur changent du même pourcentage **value**. Si la taille d'origine d'un sprite est `64` x `32` et qu'il est mis à l'échelle uniformément à `50` pour cent, la nouvelle largeur est `32` et la nouvelle hauteur est `16`.

## Paramètres

* **sprite** : le sprite à mettre à l'échelle d'un pourcentage de sa taille d'origine.
* **value** : le [nombre](/types/number) qui est le pourcentage auquel mettre le sprite à l'échelle.
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

Crée un programme pour tester la mise à l'échelle d'un sprite dans les deux directions, pour l'agrandir et le rétrécir. Utilise les boutons de la manette pour augmenter et diminuer l'échelle selon un pourcentage du sprite d'origine, par direction. Utilise le bouton `A` pour remettre le sprite à sa taille d'origine.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleToPercent(monSprite, 100, ScaleDirection.Uniformly, ScaleAnchor.Middle)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleToPercent(monSprite, 200, ScaleDirection.Vertically, ScaleAnchor.Middle)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleToPercent(monSprite, 50, ScaleDirection.Horizontally, ScaleAnchor.Middle)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleToPercent(monSprite, 200, ScaleDirection.Horizontally, ScaleAnchor.Middle)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleToPercent(monSprite, 50, ScaleDirection.Vertically, ScaleAnchor.Middle)
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
```

## Voir aussi #seealso

[mettre à l'échelle de pourcentage](/reference/sprites/scaling/scale-by-percent)

```package
sprite-scaling
```
