# arcade-sprite-data

## Usage

This extensions adds block to store and read data 
in sprites. The blocks are added to the bottom of the **sprites** toolbox.

* Storing numbers

```blocks
let mySprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
sprites.setDataNumber(mySprite, "life", 3)
sprites.changeDataNumberBy(mySprite, "life", -1)
let life = sprites.readDataNumber(mySprite, "life")
```

* Storing strings

```blocks
let mySprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
sprites.setDataString(mySprite, "name", "alex")
let name = sprites.readDataString(mySprite, "name")
```

* Storing booleans

```blocks
let mySprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
sprites.setDataBoolean(mySprite, "sleepy", false)
let sleepy = sprites.readDataBoolean(mySprite, "sleepy")
```

* Storing sprites

```blocks
let alex = sprites.create(sprites.duck.duck1, SpriteKind.Player)
let steve = sprites.create(sprites.food.smallBurger, SpriteKind.Food)
sprites.setDataSprite(steve, "other", alex)
```
* Storing images

```blocks
let mySprite = sprites.create(sprites.food.smallApple, SpriteKind.Player)
sprites.setDataImage(mySprite, "flipped", sprites.vehicle.carBlueBack)
let altImage = sprites.readDataImage(mySprite, "flipped")
```

Source: [microsoft/arcade-sprite-data](https://github.com/microsoft/arcade-sprite-data/tree/v0.2.1) (v0.2.1)

```package
arcade-sprite-data
```
