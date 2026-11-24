# lors d'un événement de manette

Exécute du code quand un joueur se connecte ou se déconnecte.

```sig
mp.onControllerEvent(ControllerEvent.Connected, function (player) {})
```

Quand un nouveau joueur rejoint (se connecte à) la partie multijoueur ou la quitte (se déconnecte), un événement de manette se produit. Tu peux exécuter du code pour réagir à l'arrivée ou au départ d'un joueur.

## Paramètres

* **event** : l'action de connexion à attendre. Les actions de connexion (événements) sont :
> * ``connected`` : le joueur est connecté
> * ``disconnected`` : le joueur est déconnecté
* **handler** : le code que tu veux exécuter quand un événement de connexion de joueur se produit.
> * **player** : le joueur qui s'est connecté ou déconnecté.

## Exemple #example

Quand `player 2` se connecte, définis son sprite de personnage sur un canard jaune.

```blocks
mp.onControllerEvent(ControllerEvent.Connected, function (player) {
    if (mp.getPlayerProperty(player, mp.PlayerProperty.Number) == 2) {
        mp.setPlayerSprite(player, sprites.create(img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . . b d d 5 5 5 5 5 5 5 5 b . . 
            . b d d d d 5 5 5 5 5 5 5 5 b . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            . b 5 5 b c d d 5 5 5 5 5 d b . 
            b b c c c d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `, SpriteKind.Player))
    }
})
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
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setBounceOnWall(true)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setVelocity(40, -30)
```

## Voir aussi #seealso

[lors d'un événement de bouton](/reference/multiplayer/on-button-event),
[bouton est pressé](/reference/multiplayer/is-button-pressed)


```package
multiplayer
```