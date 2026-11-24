# définir l'échelle

Définis le facteur d'échelle d'un sprite à partir d'un point d'ancrage.

```sig
sprites.create(null).setScale(1, ScaleAnchor.Middle)
```

Tu peux agrandir ou réduire un sprite de sa taille actuelle à une nouvelle taille en définissant une valeur d'échelle. Si l'échelle d'un sprite est réglée sur `2`, la nouvelle taille du sprite est deux fois plus grande que sa taille d'origine. La taille du sprite diminue si tu donnes une valeur négative. Si tu utilises `-3` comme valeur d'échelle, la nouvelle taille du sprite sera trois fois plus petite que sa taille d'origine.

L'**anchor** (ancrage) détermine dans quelle direction le sprite s'agrandit ou rétrécit. Si tu augmentes l'échelle à partir du `middle`, le sprite grandit de manière égale à partir de son centre. Si tu choisis de mettre à l'échelle à partir de `bottom left`, le sprite grandit vers le coin supérieur droit de l'écran.

## Paramètres

* **value** : un [nombre](/types/number) qui est le facteur d'échelle du sprite.
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

## Exemples #example

### Mise à l'échelle dans 4 directions

Crée un sprite avec une image carrée. Fais grandir et rétrécir le sprite de `3` dans chacune des 4 directions des coins.

```blocks
let scaleZone = 0
let monSprite = sprites.create(img`
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
game.onUpdateInterval(500, function () {
    if (scaleZone == 0) {
        monSprite.setScale(3, ScaleAnchor.TopLeft)
    } else if (scaleZone == 1) {
        monSprite.setScale(1, ScaleAnchor.TopLeft)
    } else if (scaleZone == 2) {
        monSprite.setScale(3, ScaleAnchor.TopRight)
    } else if (scaleZone == 3) {
        monSprite.setScale(1, ScaleAnchor.TopRight)
    } else if (scaleZone == 4) {
        monSprite.setScale(3, ScaleAnchor.BottomRight)
    } else if (scaleZone == 5) {
        monSprite.setScale(1, ScaleAnchor.BottomRight)
    } else if (scaleZone == 6) {
        monSprite.setScale(3, ScaleAnchor.BottomLeft)
    } else if (scaleZone == 7) {
        monSprite.setScale(1, ScaleAnchor.BottomLeft)
    } else {
        scaleZone = -1
    }
    scaleZone += 1
})
```

## Voir aussi #seealso

[modifier l'échelle](/reference/sprites/sprite/change-scale)
