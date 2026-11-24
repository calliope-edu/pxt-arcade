# Sprites

Erstelle und bewege Spielobjekte. Reagiere auf Überlappungen zwischen Objekten.

## Sprites erstellen

```cards
sprites.create(img`.`, SpriteKind.Player)
sprites.createProjectileFromSprite(img`.`, null, 50, 50)
sprites.createProjectileFromSide(img`.`, 50, 50)
```

## Sprite-Aktionen

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

## Sprite-Effekte

```cards
sprites.create(null).startEffect(effects.spray, 500)
effects.clearParticles(null)
```

## Sprite-Ereignisse

```cards
sprites.onCreated(0, function (sprite) {})
sprites.onDestroyed(0, function (sprite) {})
sprites.onOverlap(0, 0, function (sprite, anderesSprite) {})
```

## Sprite-Eigenschaften

### Position

* [**x - horizontale Position**](/reference/sprites/sprite/x)
* [**y - vertikale Position**](/reference/sprites/sprite/y)
* [**z - Tiefe**](/reference/sprites/sprite/z)
* [**links**](/reference/sprites/sprite/left)
* [**rechts**](/reference/sprites/sprite/right)
* [**oben**](/reference/sprites/sprite/top)
* [**unten**](/reference/sprites/sprite/bottom)

### Physik

* [**vx - Geschwindigkeit x**](/reference/sprites/sprite/vx)
* [**vy - Geschwindigkeit y**](/reference/sprites/sprite/vy)
* [**ax - Beschleunigung x**](/reference/sprites/sprite/ax)
* [**ay - Beschleunigung y**](/reference/sprites/sprite/ay)
* [**fx - Reibung x**](/reference/sprites/sprite/fx)
* [**fy - Reibung y**](/reference/sprites/sprite/fy)

### Bild und Attribute

* [**Bild**](/reference/sprites/sprite/image)
* [**Breite**](/reference/sprites/sprite/width)
* [**Höhe**](/reference/sprites/sprite/height)
* [**Lebensdauer**](/reference/sprites/sprite/lifespan)

### Skalierung

* [**sx - Skalierung x**](/reference/sprites/sprite/sx)
* [**sy - Skalierung y**](/reference/sprites/sprite/sy)
* [**Skalierung**](/reference/sprites/sprite/scale)

## Siehe auch

[erstelle](/reference/sprites/create),
[erstelle Projektil vom Rand](/reference/sprites/create-projectile-from-side),
[erstelle Projektil von Sprite](/reference/sprites/create-projectile-from-sprite),
[sage](/reference/sprites/sprite/say),
[überlappt mit](/reference/sprites/sprite/overlaps-with),
[zerstöre](/reference/sprites/sprite/destroy),
[setze Flag](/reference/sprites/sprite/set-flag),
[setze bleibe auf dem Bildschirm](/reference/sprites/sprite/set-stay-in-screen),
[setze prallt von Wand ab](/reference/sprites/sprite/set-bounce-on-wall),
[setze Bild](/reference/sprites/sprite/set-image),
[setze Position](/reference/sprites/sprite/set-position),
[setze Art](/reference/sprites/sprite/set-kind),
[Art](/reference/sprites/sprite/kind),
[starte Effekt](/reference/sprites/sprite/start-effect),
[entferne Partikel](/reference/effects/clear-particles),
[wenn erstellt](/reference/sprites/on-created),
[wenn zerstört](/reference/sprites/on-destroyed),
[wenn überlappt](/reference/sprites/on-overlap),
[setze Skalierung](/reference/sprites/sprite/set-scale),
[ändere Skalierung](/reference/sprites/sprite/change-scale)
