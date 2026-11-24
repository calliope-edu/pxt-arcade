# obtenir l'état du joueur

Obtiens la valeur d'un élément d'état d'un joueur.

```sig
mp.getPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.score)
```

Des informations comme le score et le nombre de vies du joueur sont contenues dans l'objet de jeu [Joueur](/types/player). L'objet Joueur possède déjà les éléments d'état ``||mp:score||`` et ``||mp:life||``.

## Paramètres

* **player** : le [Joueur](/types/player) dont tu veux obtenir la valeur d'un élément d'état.
* **state** : l'[élément d'état](/reference/multiplayer/multiplayer-state) dont tu veux obtenir la **valeur**, comme `score` ou `life`.

## Retourne

* **value** : un [nombre](/types/number) qui est la valeur de **state**.

## Exemple #example

Obtiens la propriété ``||mp:number||`` de `player 3`.

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

[définir l'état du joueur](/refernece/multiplayer/set-player-state),
[modifier l'état du joueur de](/reference/multiplayer/change-player-state-by),
[obtenir la propriété du joueur](/reference/multiplayer/get-player-property)

```package
multiplayer
```