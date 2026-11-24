# sprite-fx

Hilfsfunktionen zum Bearbeiten von Sprites in MakeCode Arcade.

Hilfsfunktionen zum Bearbeiten von Sprites in MakeCode Arcade.

## Funktionen

Diese Erweiterung bietet Sprite-Werkzeuge in fünf Gruppen:

### Drehung
- Um einen Winkel weiterdrehen
- Absolute Drehung setzen/abfragen/zurücksetzen
- In eine bestimmte Richtung schauen
- Zu einem anderen Sprite schauen
- Weich über eine bestimmte Zeit drehen

### Verwandeln
- Waagerecht spiegeln
- Senkrecht spiegeln

### Effekte
- Deckkraft/Durchsichtigkeit eines Sprites setzen (mit Rastermuster nachgeahmt)
- Einen Paletteneintrag in einen anderen umfärben
- Einen 1-Pixel-Umriss um nicht durchsichtige Pixel zeichnen

### Bewegung
- Abstand zwischen zwei Sprites abfragen
- Winkel von einem Sprite zu einem anderen abfragen
- Sprite in seine aktuelle Drehrichtung vorwärts bewegen
- Sprite über eine bestimmte Zeit um einen Punkt kreisen lassen

### Bild
- Das aktuelle Bild eines Sprites auf ein anderes Sprite kopieren
- Das Sprite-Bild an der aktuellen Position auf den Hintergrund stempeln
- Durchsichtige Ränder vom Sprite-Bild abschneiden

## Verwendung

## API-Beispiele

```typescript
let mySprite = sprites.create(img`...`, SpriteKind.Player)
let other = sprites.create(img`...`, SpriteKind.Enemy)

// Rotation
spriteFx.rotate(mySprite, 45)
spriteFx.setRotation(mySprite, 90)
let rot = spriteFx.rotation(mySprite)
spriteFx.resetRotation(mySprite)
spriteFx.faceDirection(mySprite, 270)
spriteFx.faceToward(mySprite, other)
spriteFx.smoothRotate(mySprite, 180, 1000)

// Transform
spriteFx.flipHorizontal(mySprite)
spriteFx.flipVertical(mySprite)

// Effects
spriteFx.setOpacity(mySprite, 60)
spriteFx.recolor(mySprite, 2, 9)
spriteFx.outline(mySprite, 1)

// Movement
let d = spriteFx.distanceBetween(mySprite, other)
let a = spriteFx.angleBetween(mySprite, other)
spriteFx.moveForward(mySprite, 12)
spriteFx.orbitAroundPoint(mySprite, 80, 60, 30, 90, 2000)

// Image
spriteFx.cloneSpriteImage(mySprite, other)
spriteFx.stampToBackground(mySprite)
spriteFx.cropTransparentBorder(mySprite)
```

## Block-Kategorie

- Name der Kategorie: **Sprite FX**
- Farbe der Kategorie: `#00A19B`

## Hinweise

- Winkel sind in Grad (nicht im Bogenmaß)
- Positive Winkel drehen im Uhrzeigersinn
- Die Deckkraft wird mit einem Rastermuster nachgeahmt (Arcade-Bilder haben keine echte Transparenz pro Pixel)
- Drehungen und Effekte merken sich intern ein Grundbild, damit du sie gut hintereinander verwenden kannst

## Hilfe

Bei Problemen oder Wünschen für neue Funktionen eröffne ein Issue im Repository.

Quelle: [kohanmathers/makecodespritefx](https://github.com/kohanmathers/makecodespritefx/tree/v1.3.0) (v1.3.0)

```package
sprite-fx
```
