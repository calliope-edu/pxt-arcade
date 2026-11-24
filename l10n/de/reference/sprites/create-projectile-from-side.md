# erstelle Projektil vom Rand

Erstelle ein neues bewegtes Sprite, das am Rand des Bildschirms startet.

```sig
sprites.createProjectileFromSide(img`.`, 50, 50)
```

Ein Projektil ist ein bewegtes Sprite, das sich von der Stelle wegbewegt, an der es erstellt wurde. Es bewegt sich mit Geschwindigkeiten (`vx` und `vy`), die du für die horizontale und die vertikale Richtung festlegst.

Von welchem Rand des Bildschirms das Projektil startet, hängt von der Richtung der angegebenen Geschwindigkeitswerte ab. Die Geschwindigkeiten `vx` und `vy` haben entweder positive oder negative Werte, die die Richtung bestimmen. Das Projektil startet je nach Geschwindigkeitsrichtung von dem Rand, der in der folgenden Tabelle angegeben ist.

|Rand|vx|vy|
|-|-|-|
|oben links|positiv|positiv|
|unten links|positiv|negativ|
|oben rechts|negativ|positiv|
|unten rechts|negativ|negativ|
<br/>

Das Projektil hat viele der Eigenschaften, die auch ein unbewegtes Sprite hat. Es überlappt mit anderen Sprites und kann Kacheln treffen und überlappen.

Projektile werden zerstört, wenn sie den Bildschirm verlassen.

## Parameter

* **img**: ein [Bild](/types/image) für das Projektil-Sprite.
* **vx**: die Geschwindigkeit, mit der sich das Sprite in horizontaler Richtung bewegt.
* **vy**: die Geschwindigkeit, mit der sich das Sprite in vertikaler Richtung bewegt.

## Rückgabewert

* ein neues Projektil-[Sprite](/types/sprite), das sich mit den festgelegten Geschwindigkeiten bewegt.

## Beispiele #example

### Ein Projektil unten links erstellen #ex1

Starte ein Projektil-Sprite unten links auf dem Bildschirm. Lass es von den Bildschirmrändern abprallen.

```blocks
let projektil = sprites.createProjectileFromSide(img`
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    5 5 5 5 5 5 . . . . 5 5 5 5 5 5 
    5 5 5 5 5 . . . . . . 5 5 5 5 5 
    5 5 5 5 . . . . . . . . 5 5 5 5 
    5 5 5 5 . . . . . . . . 5 5 5 5 
    5 5 5 5 . . . . . . . . 5 5 5 5 
    5 5 5 5 . . . . . . . . 5 5 5 5 
    5 5 5 5 5 . . . . . . 5 5 5 5 5 
    5 5 5 5 5 5 . . . . 5 5 5 5 5 5 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
    . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
    . . . . 5 5 5 5 5 5 5 5 . . . . 
    `, 40, -30)
projektil.setFlag(SpriteFlag.BounceOnWall, true)
```

### Projektile für alle Seiten erstellen #ex2

Erstelle Projektile, die zufällig von allen Seiten des Bildschirms starten. Zeige die Richtung der Projektile an, indem du die Physik-Eigenschaften anzeigst.

```blocks
let projektil: Sprite = null
game.onUpdateInterval(2000, function () {
    projektil = sprites.createProjectileFromSide(img`
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
        . 7 7 7 7 7 7 7 7 7 7 7 7 7 7 . 
        `, randint(-50, 50), randint(-50, 50))
    projektil.setFlag(SpriteFlag.ShowPhysics, true)
})
```

## Siehe auch #seealso

[erstelle](/reference/sprites/create), [create projektil from sprite](/reference/sprites/create-projectile-from-sprite)