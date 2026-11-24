# lors d'un événement de bouton

Exécute du code quand un bouton de la manette d'un joueur est pressé ou relâché.

```sig
mp.onButtonEvent(mp.MultiplayerButton.B, ControllerButtonEvent.Pressed, function (player) {})
```

Tu peux détecter une action sur un bouton de la manette d'un joueur et exécuter du code en réponse. Un bouton est choisi et un type d'événement est sélectionné.

## Paramètres

* **button** : le bouton pour lequel détecter une action :
>* bouton `A`
>* bouton `B`
>* flèche `up` (haut)
>* flèche `down` (bas)
> * flèche `left` (gauche)
> * flèche `right` (droite)
* **event** : l'événement de bouton à détecter :
> * `pressed` : un bouton ou une flèche est pressé
> * `released` : un bouton ou une flèche est relâché
> * `repeat` : un bouton ou une flèche est pressé rapidement plusieurs fois
* **handler** : le code à exécuter quand l'événement de bouton se produit.

## Exemple #example

```blocks
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).sayText("I'm pressed!", 500, false)
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

[bouton est pressé](/reference/multiplayer/is-button-pressed),
[déplacer avec les boutons](/reference/multiplayer/move-with-buttons)

```package
multiplayer
```