# move Sprite

Contrôle le mouvement d'un sprite avec les boutons de direction.

```sig
controller.moveSprite(null, 0, 0)
```

Au lieu de surveiller les boutons de direction dans une fonction de mise à jour du jeu puis de mettre à jour la position d'un sprite, tu peux faire en sorte qu'un sprite se déplace automatiquement lorsque les boutons sont appuyés. Tu décides simplement à quelle vitesse le sprite se déplace horizontalement et verticalement lorsque les boutons correspondants sont appuyés.

## Paramètres

* **sprite** : le [sprite](/types/sprite) à contrôler avec les boutons.
* **vx** : un [nombre](/types/number) qui est la vitesse à laquelle le sprite se déplace horizontalement lorsque le bouton gauche ou droit est appuyé.
* **vy** : un [nombre](/types/number) qui est la vitesse à laquelle le sprite se déplace verticalement lorsque le bouton haut ou bas est appuyé.

## Exemple #example

Crée un sprite avec une image circulaire. Déplace le sprite sur l'écran avec les boutons de direction.

### Un joueur

```blocks
let monSprite: Sprite = null
monSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.moveSprite(monSprite, 100, 100)
```

### Multijoueur

```blocks
let monSprite: Sprite = null
monSprite = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . 7 7 7 7 7 7 7 7 7 7 . . . 
. . . . . 7 7 7 7 7 7 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
controller.player2.moveSprite(monSprite, 100, 100)
```

## Voir aussi #seealso

[dx](/reference/controller/dx),
[dy](/reference/controller/dy)