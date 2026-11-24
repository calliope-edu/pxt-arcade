# arcade-sprite-data

## Verwendung

Diese Erweiterung fügt Blöcke hinzu, mit denen du Daten in Sprites speichern
und lesen kannst. Die Blöcke stehen unten in der Toolbox-Kategorie **Sprites**.

* Zahlen speichern

```blocks
let mySprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
sprites.setDataNumber(mySprite, "life", 3)
sprites.changeDataNumberBy(mySprite, "life", -1)
let life = sprites.readDataNumber(mySprite, "life")
```

* Zeichenfolgen speichern

```blocks
let mySprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
sprites.setDataString(mySprite, "name", "alex")
let name = sprites.readDataString(mySprite, "name")
```

* Wahrheitswerte speichern

```blocks
let mySprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
sprites.setDataBoolean(mySprite, "sleepy", false)
let sleepy = sprites.readDataBoolean(mySprite, "sleepy")
```

* Sprites speichern

```blocks
let alex = sprites.create(sprites.duck.duck1, SpriteKind.Player)
let steve = sprites.create(sprites.food.smallBurger, SpriteKind.Food)
sprites.setDataSprite(steve, "other", alex)
```
* Bilder speichern

```blocks
let mySprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
sprites.setDataImage(mySprite, "flipped", sprites.vehicle.carBlueBack)
let altImage = sprites.readDataImage(mySprite, "flipped")
```

Quelle: [microsoft/arcade-sprite-data](https://github.com/microsoft/arcade-sprite-data/tree/v0.2.1) (v0.2.1)

```package
arcade-sprite-data
```
