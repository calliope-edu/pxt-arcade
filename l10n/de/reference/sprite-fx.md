# sprite-fx

Hilfsfunktionen zum Bearbeiten von Sprites in MakeCode Arcade.

Hilfsfunktionen zum Bearbeiten von Sprites in MakeCode Arcade.

## Funktionen

Diese Erweiterung bietet Sprite-Hilfsfunktionen in fünf Gruppen:

### Drehung
- Um einen relativen Winkel drehen
- Absolute Drehung setzen/abfragen/zurücksetzen
- In eine bestimmte Richtung ausrichten
- Zu einem anderen Sprite ausrichten
- Gleichmäßige Drehung über eine Zeitspanne

### Transformation
- Horizontal spiegeln
- Vertikal spiegeln

### Effekte
- Deckkraft/Transparenz eines Sprites setzen (simuliert durch Dithering)
- Einen Paletten-Index in einen anderen umfärben
- Einen 1px-Umriss um nicht transparente Pixel hinzufügen

### Bewegung
- Abstand zwischen zwei Sprites abfragen
- Winkel von einem Sprite zu einem anderen abfragen
- Sprite in Richtung des aktuellen Drehwinkels vorwärts bewegen
- Sprite über eine Zeitspanne um einen Punkt kreisen lassen

### Bild
- Das aktuelle Bild eines Sprites auf ein anderes Sprite kopieren
- Sprite-Bild an der aktuellen Position auf den Hintergrund stempeln
- Transparente Ränder vom Sprite-Bild abschneiden

## Verwendung

## API-Beispiele

```typescript
let meinSprite = sprites.create(img`...`, SpriteKind.Player)
let other = sprites.create(img`...`, SpriteKind.Enemy)

// Rotation
spriteFx.rotate(meinSprite, 45)
spriteFx.setRotation(meinSprite, 90)
let rot = spriteFx.rotation(meinSprite)
spriteFx.resetRotation(meinSprite)
spriteFx.faceDirection(meinSprite, 270)
spriteFx.faceToward(meinSprite, other)
spriteFx.smoothRotate(meinSprite, 180, 1000)

// Transform
spriteFx.flipHorizontal(meinSprite)
spriteFx.flipVertical(meinSprite)

// Effects
spriteFx.setOpacity(meinSprite, 60)
spriteFx.recolor(meinSprite, 2, 9)
spriteFx.outline(meinSprite, 1)

// Movement
let d = spriteFx.distanceBetween(meinSprite, other)
let a = spriteFx.angleBetween(meinSprite, other)
spriteFx.moveForward(meinSprite, 12)
spriteFx.orbitAroundPoint(meinSprite, 80, 60, 30, 90, 2000)

// Image
spriteFx.cloneSpriteImage(meinSprite, other)
spriteFx.stampToBackground(meinSprite)
spriteFx.cropTransparentBorder(meinSprite)
```

## Block-Kategorie

- Name der Kategorie: **Sprite FX**
- Farbe der Kategorie: `#00A19B`

## Hinweise

- Winkel werden in Grad angegeben (nicht im Bogenmaß)
- Positive Winkel drehen im Uhrzeigersinn
- Die Deckkraft wird mit Dithering simuliert (Arcade-Bilder unterstützen keinen echten Alphakanal pro Pixel)
- Drehungen und Effekte bewahren ein internes Ausgangsbild, damit sie sich zuverlässig verketten lassen

## Unterstützung

Bei Problemen oder Funktionswünschen eröffne ein Issue im Repository.

Quelle: [kohanmathers/makecodespritefx](https://github.com/kohanmathers/makecodespritefx/tree/v1.3.0) (v1.3.0)

```package
sprite-fx
```
