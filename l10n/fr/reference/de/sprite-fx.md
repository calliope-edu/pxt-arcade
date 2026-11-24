# sprite-fx

Fonctions utilitaires pour manipuler les sprites dans MakeCode Arcade.

Fonctions utilitaires pour manipuler les sprites dans MakeCode Arcade.

## Fonctionnalités

Cette extension propose des outils pour sprites en cinq groupes :

### Rotation
- Tourner d'un certain angle
- Définir/lire/réinitialiser la rotation absolue
- Regarder dans une direction donnée
- Se tourner vers un autre sprite
- Tourner en douceur pendant une durée donnée

### Transformation
- Retourner horizontalement
- Retourner verticalement

### Effets
- Définir l'opacité/la transparence d'un sprite (simulée par un motif de tramage)
- Remplacer une couleur de la palette par une autre
- Dessiner un contour d'1 pixel autour des pixels non transparents

### Mouvement
- Obtenir la distance entre deux sprites
- Obtenir l'angle d'un sprite vers un autre
- Avancer un sprite dans sa direction de rotation actuelle
- Faire tourner un sprite autour d'un point pendant une durée donnée

### Image
- Copier l'image actuelle d'un sprite sur un autre sprite
- Imprimer l'image du sprite sur l'arrière-plan à sa position actuelle
- Rogner les bords transparents de l'image du sprite

## Utilisation

## Exemples d'API

```typescript
let monSprite = sprites.create(img`...`, SpriteKind.Player)
let other = sprites.create(img`...`, SpriteKind.Enemy)

// Rotation
spriteFx.rotate(monSprite, 45)
spriteFx.setRotation(monSprite, 90)
let rot = spriteFx.rotation(monSprite)
spriteFx.resetRotation(monSprite)
spriteFx.faceDirection(monSprite, 270)
spriteFx.faceToward(monSprite, other)
spriteFx.smoothRotate(monSprite, 180, 1000)

// Transform
spriteFx.flipHorizontal(monSprite)
spriteFx.flipVertical(monSprite)

// Effects
spriteFx.setOpacity(monSprite, 60)
spriteFx.recolor(monSprite, 2, 9)
spriteFx.outline(monSprite, 1)

// Movement
let d = spriteFx.distanceBetween(monSprite, other)
let a = spriteFx.angleBetween(monSprite, other)
spriteFx.moveForward(monSprite, 12)
spriteFx.orbitAroundPoint(monSprite, 80, 60, 30, 90, 2000)

// Image
spriteFx.cloneSpriteImage(monSprite, other)
spriteFx.stampToBackground(monSprite)
spriteFx.cropTransparentBorder(monSprite)
```

## Catégorie de blocs

- Nom de la catégorie : **Sprite FX**
- Couleur de la catégorie : `#00A19B`

## Remarques

- Les angles sont en degrés (pas en radians)
- Les angles positifs tournent dans le sens des aiguilles d'une montre
- L'opacité est simulée par un motif de tramage (les images Arcade n'ont pas de vraie transparence par pixel)
- Les rotations et effets mémorisent en interne une image de base, pour que tu puisses bien les enchaîner

## Aide

En cas de problème ou pour demander de nouvelles fonctionnalités, ouvre une issue dans le dépôt.

Source : [kohanmathers/makecodespritefx](https://github.com/kohanmathers/makecodespritefx/tree/v1.3.0) (v1.3.0)

```package
sprite-fx
```
