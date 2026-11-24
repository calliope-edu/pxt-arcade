# Sprites

Crée et déplace des objets de jeu. Gère les chevauchements entre objets.

## Créer des sprites

```cards
sprites.create(img`.`, SpriteKind.Player)
sprites.createProjectileFromSprite(img`.`, null, 50, 50)
sprites.createProjectileFromSide(img`.`, 50, 50)
```

## Actions des sprites

```cards
sprites.create(null).say("")
sprites.create(null).overlapsWith(null)
sprites.create(null).destroy()
sprites.create(null).setFlag(0, false)
sprites.create(null).setImage(null)
sprites.create(null).setPosition(0, 0)
sprites.create(null).setKind(0)
sprites.create(null).kind()
sprites.create(null).setBounceOnWall(false)
sprites.create(null).setStayInScreen(false)
sprites.create(null).setScale(1, ScaleAnchor.Middle)
sprites.create(null).changeScale(1, ScaleAnchor.Middle)
```

## Effets des sprites

```cards
sprites.create(null).startEffect(effects.spray, 500)
effects.clearParticles(null)
```

## Événements des sprites

```cards
sprites.onCreated(0, function (sprite) {})
sprites.onDestroyed(0, function (sprite) {})
sprites.onOverlap(0, 0, function (sprite, autreSprite) {})
```

## Propriétés des sprites

### Position

* [**x - position horizontale**](/reference/sprites/sprite/x)
* [**y - position verticale**](/reference/sprites/sprite/y)
* [**z - profondeur**](/reference/sprites/sprite/z)
* [**gauche**](/reference/sprites/sprite/left)
* [**droite**](/reference/sprites/sprite/right)
* [**haut**](/reference/sprites/sprite/top)
* [**bas**](/reference/sprites/sprite/bottom)

### Physique

* [**vx - vitesse x**](/reference/sprites/sprite/vx)
* [**vy - vitesse y**](/reference/sprites/sprite/vy)
* [**ax - accélération x**](/reference/sprites/sprite/ax)
* [**ay - accélération y**](/reference/sprites/sprite/ay)
* [**fx - frottement x**](/reference/sprites/sprite/fx)
* [**fy - frottement y**](/reference/sprites/sprite/fy)

### Image et attributs

* [**image**](/reference/sprites/sprite/image)
* [**largeur**](/reference/sprites/sprite/width)
* [**hauteur**](/reference/sprites/sprite/height)
* [**durée de vie**](/reference/sprites/sprite/lifespan)

### Mise à l'échelle

* [**sx - échelle x**](/reference/sprites/sprite/sx)
* [**sy - échelle y**](/reference/sprites/sprite/sy)
* [**échelle**](/reference/sprites/sprite/scale)

## Voir aussi

[créer](/reference/sprites/create),
[créer un projectile depuis le côté](/reference/sprites/create-projectile-from-side),
[créer un projectile depuis un sprite](/reference/sprites/create-projectile-from-sprite),
[dire](/reference/sprites/sprite/say),
[chevauche](/reference/sprites/sprite/overlaps-with),
[détruire](/reference/sprites/sprite/destroy),
[définir l'indicateur](/reference/sprites/sprite/set-flag),
[rester dans l'écran](/reference/sprites/sprite/set-stay-in-screen),
[rebondir sur les murs](/reference/sprites/sprite/set-bounce-on-wall),
[définir l'image](/reference/sprites/sprite/set-image),
[définir la position](/reference/sprites/sprite/set-position),
[définir le type](/reference/sprites/sprite/set-kind),
[type](/reference/sprites/sprite/kind),
[démarrer l'effet](/reference/sprites/sprite/start-effect),
[effacer les particules](/reference/effects/clear-particles),
[lorsqu'un sprite est créé](/reference/sprites/on-created),
[lorsqu'un sprite est détruit](/reference/sprites/on-destroyed),
[lors d'un chevauchement](/reference/sprites/on-overlap),
[définir l'échelle](/reference/sprites/sprite/set-scale),
[modifier l'échelle](/reference/sprites/sprite/change-scale)
