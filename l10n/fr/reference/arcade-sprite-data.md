# arcade-sprite-data

## Utilisation

Cette extension ajoute des blocs pour stocker et lire des données
dans les sprites. Les blocs sont ajoutés en bas de la catégorie **Sprites** de la boîte à outils.

* Stocker des nombres

```blocks
let monSprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
sprites.setDataNumber(monSprite, "life", 3)
sprites.changeDataNumberBy(monSprite, "life", -1)
let life = sprites.readDataNumber(monSprite, "life")
```

* Stocker des chaînes de caractères

```blocks
let monSprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
sprites.setDataString(monSprite, "name", "alex")
let name = sprites.readDataString(monSprite, "name")
```

* Stocker des booléens

```blocks
let monSprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
sprites.setDataBoolean(monSprite, "sleepy", false)
let sleepy = sprites.readDataBoolean(monSprite, "sleepy")
```

* Stocker des sprites

```blocks
let alex = sprites.create(sprites.duck.duck1, SpriteKind.Player)
let steve = sprites.create(sprites.food.smallBurger, SpriteKind.Food)
sprites.setDataSprite(steve, "other", alex)
```
* Stocker des images

```blocks
let monSprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
sprites.setDataImage(monSprite, "flipped", sprites.vehicle.carBlueBack)
let altImage = sprites.readDataImage(monSprite, "flipped")
```

Source: [microsoft/arcade-sprite-data](https://github.com/microsoft/arcade-sprite-data/tree/v0.2.1) (v0.2.1)

```package
arcade-sprite-data
```
