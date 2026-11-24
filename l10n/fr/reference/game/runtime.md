# temps d'exécution

Récupère le temps en millisecondes écoulé depuis le démarrage du jeu.

```sig
game.runtime()
```

## Valeur retournée

* un [nombre](/types/number) qui représente le temps en millsecondes écoulé depuis le début de la partie.

## Exemple #Example

Déplace un sprite d'un bout à l'autre de l'écran. Lorsque `5` secondes se sont écoulées, stoppe le sprite et affiche le temps en jeu.

```blocks
enum SpriteKind {
    Player,
    Enemy
}
let monSprite: Sprite = null
monSprite = sprites.create(img`
. . . . . 2 2 2 2 2 2 . . . . . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
. . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
. . . . . 2 2 2 2 2 2 . . . . . 
`, SpriteKind.Player)
monSprite.vx = 10
pause(5000)
monSprite.vx = 0
game.showLongText("Game time = " + game.runtime(), DialogLayout.Bottom)
```

## Voir aussi #seealso

[start countdown](/reference/info/start-countdown)