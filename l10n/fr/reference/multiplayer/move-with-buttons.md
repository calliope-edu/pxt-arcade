# déplacer avec les boutons

Ajoute un contrôle de mouvement à un sprite de joueur avec les flèches de la manette.

```sig
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
```

Le sprite d'un joueur se déplace verticalement ou horizontalement avec les flèches de la manette. Les valeurs horizontale `vx` et verticale `vy` sont les vitesses (en pixels par seconde) auxquelles le sprite se déplace quand une flèche est pressée. Si aucune valeur n'est définie pour `vx` et `vy`, la valeur par défaut `100` est utilisée.

## Paramètres

* **player** : le joueur pour lequel tu veux définir le contrôle de mouvement.
* **vx** : une vitesse optionnelle pour déplacer le joueur vers la gauche ou la droite. La valeur par défaut est `100`.
* **vy** : une vitesse optionnelle pour déplacer le joueur vers le haut ou le bas. La valeur par défaut est `100`.

## Exemple #example

Définis un sprite de personnage pour `player 2` et fais-le bouger avec les boutons de la manette.

```blocks
scene.setBackgroundColor(10)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f e e e e e f . . . . . 
    . . . f d d d d d d e f . . . . 
    . . f d f f d d f f d f f . . . 
    . c d d d e e d d d d e d f . . 
    . c d c d d d d c d d e f f . . 
    . c d d c c c c d d d e f f f f 
    . . c d d d d d d d e f f b d f 
    . . . c d d d d e e f f f d d f 
    . . . . f f f e e f e e e f f f 
    . . . . f e e e e e e e f f f . 
    . . . f e e e e e e f f f e f . 
    . . f f e e e e f f f f f e f . 
    . f b d f e e f b b f f f e f . 
    . f d d f f f f d d b f f f f . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
```

## Voir aussi #seealso

[bouton est pressé](/reference/multiplayer/is-button-pressed)

```package
multiplayer
```