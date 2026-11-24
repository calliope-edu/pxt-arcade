# créer

Crée un sprite fléchette à une position sur l'écran.

```sig
darts.create(img``, SpriteKind.Player)
```

Une fléchette est un sprite semblable à un [projectile](/reference/sprites/create-projectile-from-side), mais avec des actions spéciales qui contrôlent son mouvement pour simuler les forces qui agissent sur un objet lancé. Tu choisis l'image de la fléchette et tu lui donnes un [type](/reference/sprites/sprite/kind) de sprite.

# Paramètres

* **img** : une image pour le sprite fléchette.
* **kind** : un [type](/reference/sprites/sprite/kind) de sprite à utiliser pour le sprite fléchette.
* **x** : une position horizontale initiale facultative de la fléchette sur l'écran.
* **y** : une position verticale initiale facultative de la fléchette sur l'écran.

## Exemple

Crée une fléchette sur l'écran et lance-la quand le bouton `A` est pressé.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myDart.throwDart()
})
let myDart: Dart = null
myDart = darts.create(img`
    . . 8 . . . . . . . . . . . . . 
    8 . . 8 . . . . . . . . . . . . 
    . 8 . . 8 . . . . . . . 8 8 8 . 
    3 3 3 3 3 3 3 3 3 3 3 3 3 8 8 8 
    3 3 3 3 3 3 3 3 3 3 3 3 3 8 8 8 
    . 8 . . 8 . . . . . . . 8 8 8 . 
    8 . . 8 . . . . . . . . . . . . 
    . . 8 . . . . . . . . . . . . . 
    `, SpriteKind.Player)
myDart.pow = 75
```

## Voir aussi

[propriétés](/reference/darts/properties)

```package
darts
```