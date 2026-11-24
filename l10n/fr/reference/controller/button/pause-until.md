# pause Until

Fait attendre ton programme jusqu'à ce qu'un événement de bouton se produise.

```sig
controller.A.pauseUntil(ControllerButtonEvent.Pressed)
```

## Paramètres

* **event** : l'action du bouton à attendre. Les actions du bouton (événements) sont :
> * ``pressed`` : le bouton a été appuyé
> * ``released`` : le bouton est relâché après avoir été appuyé

## Exemple #example

Attends que le bouton ``B`` soit appuyé avant de déplacer un carré jaune dans le coin supérieur gauche de l'écran.

```blocks
let square = sprites.create(img`
e e e e e e 
e e e e e e 
e e e e e e 
e e e e e e 
e e e e e e 
e e e e e e 
`)
controller.B.pauseUntil(ControllerButtonEvent.Pressed)
square.x = 3
square.y = 3
```

## Voir aussi #seealso

[on event](/reference/controller/button/on-event)