# suivre

Fait qu'un sprite se déplace toujours vers la position d'un autre sprite cible.

```sig
sprites.create(null).follow(null, 0)
```

Quand tu règles un sprite pour suivre un sprite cible, il se déplace vers la cible en la « poursuivant » à une certaine vitesse. Si le sprite peut atteindre la cible avant qu'elle ne bouge à nouveau, il s'arrête et occupe la même position que le sprite cible. À l'arrêt, les sprites se chevauchent au niveau de leur centre.

## Paramètres

* **target** : le [sprite](/types/sprite) cible à suivre.
* **speed** : la vitesse de poursuite maximale après accélération, en pixels par seconde, en se déplaçant vers le sprite cible.
* **turnRate** : (optionnel) le temps nécessaire pour tourner vers le sprite cible. Par exemple, avec la valeur par défaut, `400`, le sprite atteint **speed** en 125 millisecondes quand il fait un demi-tour de 180 degrés pour poursuivre la cible.

## Exemple

Crée 2 sprites. Règle le deuxième sprite pour qu'il suive le premier. Chaque seconde, change au hasard la position du premier sprite sur l'écran pour que le deuxième continue à le poursuivre.

```blocks
let monSprite = sprites.create(img`
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
let monSprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . 5 5 5 5 5 5 5 5 5 5 . . . 
    . . . . . 5 5 5 5 5 5 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
monSprite2.follow(monSprite, 50,)
game.onUpdateInterval(1000, function () {
    monSprite.setPosition(randint(0, scene.screenWidth()), randint(0, scene.screenHeight()))
})
```

## Voir aussi

[ne plus suivre](/reference/sprites/sprite/unfollow),
[chevauche](/reference/sprites/sprite/overlaps-with)