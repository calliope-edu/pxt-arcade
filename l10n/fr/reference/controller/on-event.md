# onEvent

Exécute du code lorsqu'un joueur se connecte ou se déconnecte.

```sig
controller.player2.onEvent(ControllerEvent.Connected, function () {})
```

## Paramètres

* **event** : l'action de connexion à attendre. Les actions de connexion (événements) sont :
> * ``connected`` : le joueur est connecté
> * ``disconnected`` : le joueur est déconnecté
* **handler** : le code que tu veux exécuter lorsqu'un événement de connexion d'un joueur se produit

## Exemple #example

Fais afficher un message au sprite de la boîte jaune lorsque le joueur 2 se connecte.

```blocks
let yellowBox = sprites.create(img`
e e e e e e
e 1 1 1 1 e
e 1 6 6 1 e
e 1 6 6 1 e
e 1 1 1 1 e
e e e e e e
`)
controller.player2.onEvent(ControllerEvent.Connected, function () {
    yellowBox.say("Player2 is on!")
})
```

## Voir aussi #seealso

[est appuyé](/reference/controller/on-button-event)
