# Héros en marche

## {Introduction @unplugged}

Les ``||sprites:Sprites||`` peuvent représenter les **personnages** de ton jeu. Ça peut être n'importe quoi : des pièces à ramasser, des ennemis à éviter ou des lasers tirés par un vaisseau spatial.

Dans ce tutoriel, tu vas créer le personnage principal d'un jeu et le faire marcher avec les boutons de la manette.

## {Étape 1 @fullscreen}

Trouve ``||variables(sprites):définir mySprite à||`` dans ``||sprites:Sprites||``. Fais glisser le bloc dans ``||loops:au démarrage||``.

Ce ``||sprites:sprite||`` est le personnage principal du jeu. Pour l'instant, il n'a pas encore d'image et ne fait rien.

```blocks
let mySprite = sprites.create(img`
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
. . . . . . . . . . . . . . . .
`, SpriteKind.Player)
```

## {Étape 2 @fullscreen}

Clique sur la case grise dans ``||variables(sprites):définir mySprite à||`` pour ouvrir l'éditeur d'images. Dessine une image pour ton nouveau sprite.

Quand tu fermes l'éditeur d'images en cliquant à côté, ton image apparaît au milieu de l'écran dans le simulateur.

```blocks
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . 7 7 . . . . . .
. . . . . . . 7 7 7 . . . . . .
. . . . . . 7 7 7 7 . . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . d d d d . . . . . .
. . . . . . f d f d . . . . . .
. . . . . . d d d d . . . . . .
. . . . 7 7 7 7 7 7 7 7 . . . .
. . . . 7 7 7 7 7 7 7 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . . . 6 . . 6 . . . . . .
. . . . . 6 6 . 6 6 . . . . . .
. . . . 6 6 6 6 6 6 . . . . . .
`, SpriteKind.Player)
```

## {Étape 3 @fullscreen}

Ce ``||sprites:sprite||`` est le personnage principal de notre jeu, il doit donc bouger quand la joueuse ou le joueur appuie sur les boutons.

Trouve ``||controller:déplacer mySprite avec les boutons||`` dans ``||controller:Contrôleur||``. Place le bloc sous ``||variables(sprites):définir mySprite à||``.

```blocks
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . 7 7 . . . . . .
. . . . . . . 7 7 7 . . . . . .
. . . . . . 7 7 7 7 . . . . . .
. . . . . 7 7 7 7 7 . . . . . .
. . . . . . d d d d . . . . . .
. . . . . . f d f d . . . . . .
. . . . . . d d d d . . . . . .
. . . . 7 7 7 7 7 7 7 7 . . . .
. . . . 7 7 7 7 7 7 7 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . 7 . 7 7 7 7 . 7 . . . .
. . . . . . 6 . . 6 . . . . . .
. . . . . 6 6 . 6 6 . . . . . .
. . . . 6 6 6 6 6 6 . . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
```

## {Terminé}

Super, ton héros marche maintenant dès que quelqu'un appuie sur un des boutons de direction !
