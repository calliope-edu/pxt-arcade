# mettre à l'échelle en pixels

Met un sprite à l'échelle d'un nombre de pixels dans une direction à partir d'un point d'ancrage.

```sig
scaling.scaleByPixels(null, 1, ScaleDirection.Uniformly, ScaleAnchor.Middle)
```

Un sprite peut être mis à l'échelle d'un nombre de pixels dans une direction à partir d'un point d'ancrage. La mise à l'échelle peut se faire uniquement dans la direction choisie, ou le sprite peut aussi être mis à l'échelle proportionnellement dans l'autre direction.

## Mise à l'échelle proportionnelle

Si la direction de mise à l'échelle est `vertically` ou `horizontally` mais que **proportional** est défini sur `false`, le sprite est mis à l'échelle du nombre de pixels donné dans **value** uniquement dans la direction choisie. Le sprite s'agrandit en hauteur tandis que la largeur reste la même, ou il s'agrandit en largeur tandis que la hauteur reste la même.

Si la direction de mise à l'échelle est `vertically` et que le paramètre `proportional` est `true`, la largeur s'agrandit aussi dans le même rapport que la hauteur. Avec ce réglage, agrandir un sprite de `32` x `16` de `16` pixels dans la direction verticale agrandit aussi la largeur de `32`. La même mise à l'échelle proportionnelle s'applique à la hauteur si la direction est `horizontally`.

## Mise à l'échelle uniforme

Lorsque la **direction** de mise à l'échelle est définie sur `uniformly`, le sprite est mis à l'échelle de sorte que la largeur et la hauteur de la nouvelle taille changent de la même quantité. Si la taille actuelle d'un sprite est `64` x `16` et qu'il est mis à l'échelle uniformément de `64`, la nouvelle largeur est `128` et la nouvelle hauteur est `80`.

## Paramètres

* **sprite** : le sprite à mettre à l'échelle d'un nombre de pixels.
* **value** : le [nombre](/types/number) de pixels de mise à l'échelle du sprite.
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
* **proportional** : une valeur [booléenne](/types/boolean) qui, si elle est `true`, met le sprite à l'échelle proportionnellement. Si elle est `false`, le sprite n'est mis à l'échelle que selon **direction**. Ce paramètre n'a aucun effet lorsque **direction** est définie sur `uniformly`.

## Exemple #example

### Testeur de mise à l'échelle #ex1

Crée un programme pour tester la mise à l'échelle d'un sprite dans les deux directions, en l'agrandissant et en le rétrécissant. Utilise les boutons de la manette pour augmenter et diminuer l'échelle. Utilise des boutons pour passer **proportional** à `true` ou `false`.

```blocks
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleByPixels(monSprite, pixelMin, ScaleDirection.Vertically, ScaleAnchor.Middle, proportion)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    proportion = false
    game.showLongText("Proportional = FALSE", DialogLayout.Bottom)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    proportion = true
    game.showLongText("Proportional = TRUE", DialogLayout.Bottom)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    if (monSprite.width > pixelMin) {
        scaling.scaleByPixels(monSprite, pixelMin * -1, ScaleDirection.Horizontally, ScaleAnchor.Middle, proportion)
    }
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleByPixels(monSprite, pixelMin, ScaleDirection.Horizontally, ScaleAnchor.Middle, proportion)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (monSprite.width > pixelMin) {
        scaling.scaleByPixels(monSprite, pixelMin * -1, ScaleDirection.Vertically, ScaleAnchor.Middle, proportion)
    }
})
let proportion = false
let pixelMin = 0
let monSprite: Sprite = null
monSprite = sprites.create(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 5 5 5 7 7 7 7 7 7 7 7 5 5 5 2 
    2 5 5 7 7 7 7 7 7 7 7 7 7 5 5 2 
    2 5 7 7 7 7 7 7 7 7 7 7 7 7 5 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 8 8 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 8 8 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 7 7 7 7 7 7 7 7 7 7 7 7 7 7 2 
    2 5 7 7 7 7 7 7 7 7 7 7 7 7 5 2 
    2 5 5 7 7 7 7 7 7 7 7 7 7 5 5 2 
    2 5 5 5 7 7 7 7 7 7 7 7 5 5 5 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, SpriteKind.Player)
pixelMin = monSprite.width
let pixelMax = pixelMin * 5
game.showLongText("Proportional = FALSE", DialogLayout.Bottom)
```

### Testeur d'uniformité #ex2

Teste la mise à l'échelle uniforme d'un sprite non carré. Utilise les boutons de la manette pour augmenter ou diminuer l'échelle.

```blocks
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    scaling.scaleByPixels(monSprite, pixelMax, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    info.setScore(monSprite.width)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (my)
    scaling.scaleByPixels(monSprite, pixelMin * -1, ScaleDirection.Uniformly, ScaleAnchor.Middle)
    info.setScore(monSprite.width)
})
let pixelMax = 0
let pixelMin = 0
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
pixelMin = monSprite.height
pixelMax = pixelMin * 5
info.setScore(monSprite.width)
```

## Voir aussi #seealso

[mettre à l'échelle en pixels](/reference/sprites/scaling/scale-to-pixels)

```package
sprite-scaling
```
