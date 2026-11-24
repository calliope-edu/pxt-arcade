# obtenir la propriété du joueur

Obtiens la valeur d'une propriété d'un joueur.

```sig
mp.getPlayerProperty(mp.playerSelector(mp.PlayerNumber.One), PlayerProperty.Index)
```

Les propriétés d'un joueur contiennent des informations d'identité. Elles sont définies pour un objet [Joueur](/types/player) lors de sa création afin de l'identifier de façon unique. Actuellement, il y a deux propriétés : ``||mp:index||`` et ``||mp:number||``.

## Paramètres

* **player** : le [Joueur](/types/player) dont tu veux obtenir une propriété.
* **prop** : la propriété dont tu veux obtenir la **valeur** :
>* `index` : l'index (commençant à zéro) du joueur dans la liste des objets multijoueur.
>* `number` : le numéro d'identité de joueur de l'objet Joueur.

## Retourne

* un [nombre](/types/number) qui est la valeur de la propriété.

## Exemple #example

Obtiens la propriété numéro de joueur de `player 1` et affiche-la avec son sprite de personnage. 

```blocks
scene.setBackgroundColor(10)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
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
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("I'm player " + mp.getPlayerProperty(mp.playerSelector(mp.PlayerNumber.One), mp.PlayerProperty.Number))
```

## Voir aussi #seealso

[obtenir l'état du joueur](/reference/multiplayer/get-player-state)

```package
multiplayer
```