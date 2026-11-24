# définir la vitesse

Définis les vitesses horizontale et verticale d'un sprite.

```sig
sprites.create(null).setVelocity(0, 0)
```

Les sprites qui ne sont pas des projectiles sont créés sans aucun mouvement. Chaque sprite possède les propriétés `vx` et `vy`, qui sont ses vitesses horizontale et verticale.
Tu peux définir les deux vitesses en même temps pour faire bouger un sprite dans n'importe quelle direction.

## Paramètres

* **vx** : la nouvelle vitesse horizontale du sprite.
* **vy** : la nouvelle vitesse verticale du sprite.

## Exemple #example

Crée un sprite qui rebondit sur les bords de l'écran. Règle les vitesses **vx** et **vy**
sur `50`.

```blocks
let monSprite = sprites.create(img`
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
monSprite.setFlag(SpriteFlag.BounceOnWall, true)
monSprite.setVelocity(50, 50)
```

## Voir aussi #seealso

[vx](/reference/sprites/sprite/vx),
[vy](/reference/sprites/sprite/vy)
