# lifespan (Eigenschaft)

Frage die Lebensdauer eines Sprites in Millisekunden ab oder lege sie fest.

## Abfragen

Frage die Lebensdauer des Sprites ab.

```block
let meinSprite: Sprite = null

let lifetime = meinSprite.lifespan
```

```typescript-ignore
let lifetime = meinSprite.lifespan
```

### Rückgabewert

* eine [Zahl](/types/number), die die aktuelle Lebensdauer des Sprites in Millisekunden angibt.

## Festlegen

```block
let meinSprite: Sprite = null

meinSprite.lifespan = 0
```

```typescript-ignore
meinSprite.lifespan = 0
```

### Parameter

* **value**: die neue Lebensdauer des Sprites.

## Lebensdauer eines Sprites

Sprites, die nicht automatisch zerstört werden, bleiben im Spiel, bis sie mit ihrer Funktion **destroy** zerstört werden oder bis ihre Lebensdauer abläuft. Du musst die Lebensdauer festlegen, damit ein Sprite nur begrenzt lange lebt. Mit der Lebensdauer sorgst du dafür, dass ein Sprite das Spiel nach einer bestimmten Zeit verlässt.

Die Lebensdauer eines Sprites ist beim Erstellen unendlich und bleibt es, bis du sie tatsächlich auf eine Zahl setzt. Sobald du sie festlegst, zählt die Lebensdauer bis `0` herunter. Du kannst den Wert der Lebensdauer neu setzen, um ein Sprite als Bonus für deinen Spieler länger am Leben zu halten.

## Beispiel #example

Erstelle ein ``Player``-Sprite und setze seine ``lifespan`` auf `1000` Millisekunden (oder `1` Sekunde).

```blocks
let orangeBlock = image.create(16, 16)
orangeBlock.fill(4)
orangeBlock.drawRect(0, 0, 16, 16, 1)
let player = sprites.create(orangeBlock, SpriteKind.Player)
player.lifespan = 1000
```

## Siehe auch #seealso

[erstelle](/reference/sprites/create),
[bei Aktualisierung](/reference/game/on-update)
