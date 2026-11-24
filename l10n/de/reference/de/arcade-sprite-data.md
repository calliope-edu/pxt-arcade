# arcade-sprite-data

## Verwendung

Diese Erweiterung fügt Blöcke hinzu, mit denen du Daten in Sprites speichern
und lesen kannst. Die Blöcke stehen unten in der Toolbox-Kategorie **Sprites**.

* Zahlen speichern

```blocks
let meinSprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
sprites.setDataNumber(meinSprite, "life", 3)
sprites.changeDataNumberBy(meinSprite, "life", -1)
let life = sprites.readDataNumber(meinSprite, "life")
```

* Zeichenfolgen speichern

```blocks
let meinSprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
sprites.setDataString(meinSprite, "name", "alex")
let name = sprites.readDataString(meinSprite, "name")
```

* Wahrheitswerte speichern

```blocks
let meinSprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
sprites.setDataBoolean(meinSprite, "sleepy", false)
let sleepy = sprites.readDataBoolean(meinSprite, "sleepy")
```

* Sprites speichern

```blocks
let alex = sprites.create(sprites.duck.duck1, SpriteKind.Player)
let steve = sprites.create(sprites.food.smallBurger, SpriteKind.Food)
sprites.setDataSprite(steve, "other", alex)
```
* Bilder speichern

```blocks
let meinSprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
sprites.setDataImage(meinSprite, "flipped", sprites.vehicle.carBlueBack)
let altImage = sprites.readDataImage(meinSprite, "flipped")
```

Quelle: [microsoft/arcade-sprite-data](https://github.com/microsoft/arcade-sprite-data/tree/v0.2.1) (v0.2.1)

```package
arcade-sprite-data
```
