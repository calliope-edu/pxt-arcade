# sélecteur de joueur

Obtiens un joueur du jeu à l'aide d'un sélecteur de joueur.

```sig
mp.playerSelector(mp.PlayerNumber.One)
```

Les joueurs d'un jeu multijoueur sont représentés par l'objet de jeu [Joueur](/types/player). On fait généralement référence aux objets Joueur à l'aide d'un sélecteur de joueur. Les sélecteurs portent le nom d'un numéro de joueur, comme `player 1`, `player 2`, etc. Pour utiliser beaucoup des blocs du jeu multijoueur, tu as besoin d'un sélecteur pour indiquer quel(s) joueur(s) tu utilises avec le bloc.

## Paramètres

* **player** : un [Joueur](/types/player) à obtenir à l'aide du sélecteur.

## Retourne

* le [Joueur](/types/player) choisi par le sélecteur dans **player**.

## Exemple #example

Définis un sprite de personnage pour le joueur sélectionné par ``||mp:player 2||``.

```blocks
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f f f f f e e e e f . . . . 
    . . . . f f e e e e e e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player))
```

## Voir aussi #seealso

[obtenir le joueur par numéro](/reference/multiplayer/get-player-by-number),
[obtenir le joueur par index](/reference/multiplayer/get-player-by-index)

```package
multiplayer
```