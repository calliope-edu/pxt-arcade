# Geschwindigkeit setzen

Setze die horizontale und vertikale Geschwindigkeit eines Sprites.

```sig
sprites.create(null).setVelocity(0, 0)
```

Sprites, die keine Projektile sind, werden ohne Bewegung erstellt. Jeder Sprite hat die Eigenschaften `vx` und `vy`, die seine horizontale und vertikale Geschwindigkeit sind.
Du kannst beide Geschwindigkeiten auf einmal setzen, damit sich ein Sprite in eine beliebige Richtung bewegt.

## Parameter

* **vx**: die neue horizontale Geschwindigkeit des Sprites.
* **vy**: die neue vertikale Geschwindigkeit des Sprites.

## Beispiel #example

Erstelle einen Sprite, der von den Bildschirmrändern abprallt. Setze die Geschwindigkeiten **vx** und **vy**
auf `50`.

```blocks
let meinSprite = sprites.create(img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 2 2 2 2 2 2 2 2 2 2 2 2 7 7 
7 5 7 2 2 2 2 2 2 2 2 2 2 7 4 7 
7 5 5 7 2 2 2 2 2 2 2 2 7 4 4 7 
7 5 5 5 7 2 2 2 2 2 2 7 4 4 4 7 
7 5 5 5 5 7 2 2 2 2 7 4 4 4 4 7 
7 5 5 5 5 5 7 2 2 7 4 4 4 4 4 7 
7 5 5 5 5 5 5 7 7 4 4 4 4 4 4 7 
7 5 5 5 5 5 5 7 7 4 4 4 4 4 4 7 
7 5 5 5 5 5 7 8 8 7 4 4 4 4 4 7 
7 5 5 5 5 7 8 8 8 8 7 4 4 4 4 7 
7 5 5 5 7 8 8 8 8 8 8 7 4 4 4 7 
7 5 5 7 8 8 8 8 8 8 8 8 7 4 4 7 
7 5 7 8 8 8 8 8 8 8 8 8 8 7 4 7 
7 7 8 8 8 8 8 8 8 8 8 8 8 8 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, SpriteKind.Player)
meinSprite.setFlag(SpriteFlag.BounceOnWall, true)
meinSprite.setVelocity(50, 50)
```

## Siehe auch #seealso

[vx](/reference/sprites/sprite/vx),
[vy](/reference/sprites/sprite/vy)
