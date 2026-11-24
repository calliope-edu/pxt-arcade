# sprite-fx

Fonctions utilitaires pour manipuler les sprites dans MakeCode Arcade.

Fonctions utilitaires pour manipuler les sprites dans MakeCode Arcade.

## Fonctionnalités

Cette extension fournit des utilitaires pour sprites répartis en cinq groupes :

### Rotation
- Tourner d'un angle relatif
- Définir/obtenir/réinitialiser la rotation absolue
- S'orienter dans une direction précise
- S'orienter vers un autre sprite
- Rotation fluide dans le temps

### Transformation
- Retourner horizontalement
- Retourner verticalement

### Effets
- Définir l'opacité/la transparence du sprite (simulation par tramage)
- Recolorer un index de palette en un autre
- Ajouter un contour de 1 px autour des pixels opaques

### Mouvement
- Obtenir la distance entre deux sprites
- Obtenir l'angle d'un sprite vers un autre
- Avancer le sprite selon son angle de rotation actuel
- Faire orbiter un sprite autour d'un point dans le temps

### Image
- Copier l'image actuelle d'un sprite vers un autre sprite
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
- L'opacité est simulée par tramage (les images Arcade ne prennent pas en charge une vraie transparence alpha par pixel)
- Les opérations de rotation/d'effet conservent une image de base interne pour pouvoir être enchaînées de façon cohérente

## Assistance

Pour signaler un problème ou demander une fonctionnalité, ouvre une issue sur le dépôt.

Source: [kohanmathers/makecodespritefx](https://github.com/kohanmathers/makecodespritefx/tree/v1.3.0) (v1.3.0)

```package
sprite-fx
```
