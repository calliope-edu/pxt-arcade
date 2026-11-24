# Aktivität: Bilder

`||images:Images||` werden verwendet, um viele Dinge auf dem Bildschirm in @boardname@ darzustellen – `||scene:backgrounds||`, `||sprites:Sprites||` und viele andere Elemente der Spiele.

Eine Reihe komplexer Verhaltensweisen lässt sich mithilfe von `||arrays:arrays||` von `||images:Images||` leicht handhaben, wodurch Spiele mit einer größeren Vielfalt an Inhalten für die Spielerinnen und Spieler möglich werden.

## Konzept: Einfache Animationen

Animationen in Spielen werden als eine Reihe verschiedener Bilder dargestellt, die in einer bestimmten Reihenfolge gezeigt werden.

Mit `||arrays:arrays||` können diese `||images:images||` an einem einzigen Ort gespeichert und viel einfacher referenziert werden als mit einzelnen Variablen.

## Beispiel #1: Flapping Duck

1. Schau dir den folgenden Code an
2. Identifiziere, wie das `||images:Image||` Array erstellt wird
3. Identifiziere, wie die Schleife `||loops:for||` verwendet wird, um die verschiedenen `||images:images||` der `||sprites:ducks||` zu durchlaufen

```typescript
let characterImages: Image[] = [
    sprites.duck.duck1,
    sprites.duck.duck2,
    sprites.duck.duck3,
    sprites.duck.duck4,
    sprites.duck.duck5,
    sprites.duck.duck6
];

let duck: Sprite = sprites.create(characterImages[0], SpriteKind.Player);
for (let index = 0; index < characterImages.length; index++) {
    pause(150);
    duck.setImage(characterImages[index]);
}
```

## Aufgabe #1: Walking Hero

1. Beginne mit dem Code aus Beispiel Nr. 1
2. Ändere den Code so, dass statt einer **fliegenden Ente** ein **laufender Held** angezeigt wird, indem du die Bilder in `||variables:characterImages||` ersetzt
3. Verwende eine zweite Schleife `||loops:for||`, die bewirkt, dass die aktuelle Schleife `||loops:for||` 20 Mal wiederholt wird, sodass die Animation kontinuierlich wiederholt wird

### ~hint

Die `||images:images||` der Heldin können mit den folgenden Variablen referenziert werden:

* `||sprites:sprites.castle.heroWalkFront1||`
* `||sprites:sprites.castle.heroWalkFront2||`
* `||sprites:sprites.castle.heroWalkFront3||`
* `||sprites:sprites.castle.heroWalkFront4||`

### ~

## Konzept: Rest von ... Operator

Das Erstellen einer Animation mithilfe von Arrays ist nützlich, führt jedoch zu einigen Problemen. Was wäre beispielsweise, wenn die Absicht darin besteht, es im Hintergrund auszuführen, und zwar für immer?

Ein Ansatz wäre die Verwendung des Ereignisses `||game:on update interval||`. Die Anwendung dieses Beispiels auf das vorherige Beispiel könnte wie im folgenden Ausschnitt aussehen.

```typescript-ignore
let count = 0;
game.onUpdateInterval(150, function () {
    duck.setImage(characterImages[count]);
    count++;
});
```

Dies funktioniert jedoch nicht ganz; nach dem letzten Index im Array stürzt der Code ab, da du versuchst, auf ein `||images:image||` zu verweisen, das **nicht existiert**.

Dies könnte mit `||logic:logic||` gelöst werden, um den Wert zurückzusetzen, wenn er zu hoch wird.

```typescript-ignore
let count = 0;
game.onUpdateInterval(150, function () {
    duck.setImage(characterImages[count]);
    count++;
    if (count == characterImages.length) {
        count = 0;
    }
});
```

Der **Rest von ... ** -Operator, `%`, kann verwendet werden, um diesen Fall angemessener zu behandeln. Dieser Operator wird verwendet, um den **Rest von** der Integer-Aufteilung zwischen zwei Zahlen zu signalisieren: also `5 % 3` ist gleich 2, da 5 einmal in 3 geht, mit **zwei verbleibenden**.

### ~hint

Der Restoperator wird oft als `mod`-Operator bezeichnet, kurz für Modulo oder Modulus.

### ~

## Beispiel #2: Kontinuierlich laufend

![Animation of a duck from this example](https://cdn.makecode.com/blob/5eb2548e9af0ed2738a9143baac9de25eb0c2bda/static/courses/csintro3/arrays/duck-animation.gif)

1. Schau dir den folgenden Code an
2. Identifiziere, wie `||Variables:count||` verwendet wird
3. Identifiziere, wie der restliche Operator (`%`) verwendet wird, um auf einen Wert innerhalb der `||images:image||` `||Arrays:array||` zu verweisen

```typescript
let characterImages: Image[] = [
    sprites.duck.duck1,
    sprites.duck.duck2,
    sprites.duck.duck3,
    sprites.duck.duck4,
    sprites.duck.duck5,
    sprites.duck.duck6
];

let duck: Sprite = sprites.create(characterImages[0], SpriteKind.Player);
let count: number = 0;

game.onUpdateInterval(150, function () {
    duck.setImage(characterImages[count % characterImages.length]);
    count++;
});
```

## Sufgabe #2: Laufende Animation

1. Beginne mit dem Code aus Beispiel Nr. 1
2. Ersetze die Schleifen `||loops:for||` durch das Ereignis `||game:on update interval||` mit einer Variablen `||variables:counter||`, wie in Beispiel 2 gezeigt, damit die Animation unbegrenzt läuft
3. Die Heldin soll sich mit den Richtungstasten `||Controller:move||` bewegen

## Konzept: Zufällige Bilder

In Spielen müssen `|||sprites:sprites||` sehr oft erstellt werden um `||sprites:enemies||`, `||sprites:collectible items||`, oder irgendetwas anderes zur Verfügung stehen zu haben.

Um die Spiele optisch ansprechender zu gestalten, können diese `||Sprites:Sprites||` mit unterschiedlichen `||Bildern:images||` versehen werden, damit sie nicht alle gleich aussehen.

Das Ereignis `||sprites.onCreated||` ist hilfreich, um dieses Verhalten zu handhaben.

```sig
sprites.onCreated(0, null);
```

## Beispiel #3: Asteroids!

![Animation von Asteroiden, die mit diesem Beispiel erstellt werden](https://cdn.makecode.com/blob/eb6f7839e71ea806c8f97bc2c011bc23c26105f1/static/courses/csintro3/arrays/asteroid-spawning.gif)

1. Schau dir den folgenden Code an
2. Identifiziere, wie die verschiedenen Bilder für `||sprites:Asteroid||`s definiert sind, und was passiert mit dem ursprünglichen Bild für die `||sprites:Sprite||`
3. Identifiziere, was passiert, wenn ein `||sprites:Asteroid||` `||sprites:created||` wird
4. Identifiziere, wie `||math:Math.pickRandom||` verwendet wird, um ein `||math:random||` `||images:image||` auszuwählen

```typescript
namespace SpriteKind {
    export const Asteroid = SpriteKind.create();
}

let asteroids: Image[] = [
    sprites.space.spaceAsteroid0,
    sprites.space.spaceAsteroid1
];

game.onUpdateInterval(1000, function () {
    sprites.create(img`1`, SpriteKind.Asteroid);
});

sprites.onCreated(SpriteKind.Asteroid, function (sprite: Sprite) {
    sprite.setImage(Math.pickRandom(asteroids));
    sprite.y = randint(0, screen.height);
    sprite.x = randint(0, screen.width);
});
```

## Aufgabe #3: Falling Asteroids

1. Beginne mit dem Code aus Beispiel Nr. 3
2. Setze im Ereignis `||sprites:on created||` die Position `||variables:sprite||` `||sprites:y||` auf 0, damit sie am oberen Bildschirmrand beginnt
3. Nachdem du die Position `||sprites:y||` festgelegt hast, setze `||sprites:vy||` auf einen `||math:Zufallswert zwischen||` 30 und 50
4. Setze die Flag `||sprites:Ghost||` für jedes `||sprites:Asteroid||` auf `||logic:true||`

### ~hint

Die anderen `||sprites:Asteroid||` `||images:images||` können mit den folgenden `||variables:variables||` referenziert werden:

* `||sprites:sprites.space.spaceAsteroid2||`
* `||sprites:sprites.space.spaceAsteroid3||`
* `||sprites:sprites.space.spaceAsteroid4||`

### ~

## Was haben wir gelernt?

1. Wie kann man mehrere `||images:images||` in Spielen zulassen, die optisch ansprechender sind?
2. Wie wird der **Restoperator** `%` verwendet, um sicherzustellen, dass der Code niemals auf einen ungültigen Index im `||arrays:array||` zugreift?

### ~hint

Bevor du mit der nächsten Lektion fortfährst, solltest du die [ausgewählten Aufgaben](/courses/csintro3/arrays/images-problems) für diesen Abschnitt ansehen, um den Stoff zu wiederholen und die in diesem Abschnitt vorgestellten Konzepte zu üben.

### ~

### ~hint

## Fallbeispiel

### Power-Up Bilder

Ändere im Namespace `spritesheet` die `||variables:powerUp||` `||images:image||` in ein `||arrays:array||` von `||images:images||` und benenne es in `||variables:powerUps||` um. Erstelle für jeden Typ von `PowerUp` ein benutzerdefiniertes `||images:image||` und speichere dieses unter dem Index für den jeweiligen Typ (ähnlich wie bei `||variables:powerups.responses||`).

Um diese Bilder zu verwenden, setze beim Erstellen eines `||sprites:sprite||` den `||images:image||` auf einen Standardwert (ein einzelnes Pixel `||images:image||` oder eines der `PowerUp`-Bilder) und lege dann `||images:image||` entsprechend dem gewählten Typ im Ereignis `||sprites:on created||` fest.

Da der Typ sowohl in den `Daten` als auch als Index für die `||Bilder:Bild||` gespeichert wird, sollte das Ergebnis von `||math:Math.pickRandom(availablePowerUps)||` gespeichert werden, damit es an beiden Stellen, an denen es benötigt wird, referenziert werden kann.

### Asteroids!

Anstatt ein einziges Bild für alle Asteroiden zu verwenden, erstellst du ein `||arrays:array||` aus `||images:images||` und `||math:pick||` wähle jedes Mal, wenn du einen neuen Asteroiden erstellst, zufällig eines aus.

### Lösung

```typescript-ignore
namespace spritesheet {
    export let asteroids: Image[] = [
        sprites.space.spaceAsteroid0,
        sprites.space.spaceAsteroid1,
        sprites.space.spaceAsteroid2,
        sprites.space.spaceAsteroid3,
        sprites.space.spaceAsteroid4
    ];

    export let powerUps: Image[] = [];

    powerUps[PowerUpType.Health] = img`
        . . . 1 1 1 1 1 . . .
        . . 1 1 1 1 1 1 1 . .
        . 1 1 1 1 1 1 1 1 1 .
        1 1 1 2 2 1 2 2 1 1 1
        1 1 2 2 2 2 2 3 2 1 1
        1 1 f 2 2 2 3 2 2 1 1
        1 1 f 2 2 2 2 2 2 1 1
        1 1 1 f 2 2 2 2 1 1 1
        . 1 1 1 f 2 2 1 1 1 .
        . . 1 1 1 f 1 1 1 . .
        . . . 1 1 1 1 1 . . .
    `;

    powerUps[PowerUpType.Score] = img`
        . . . 5 5 5 5 5 . . .
        . . 5 5 5 f 5 5 5 . .
        . 5 5 5 f f f 5 5 5 .
        5 5 5 f 5 f 5 f 5 5 5
        5 5 5 5 f 5 5 5 5 5 5
        5 5 5 5 5 f 5 5 5 5 5
        5 5 5 5 5 5 f 5 5 5 5
        5 5 5 f 5 f 5 f 5 5 5
        . 5 5 5 f f f 5 5 5 .
        . . 5 5 5 f 5 5 5 . .
        . . . 5 5 5 5 5 . . .
    `;

    powerUps[PowerUpType.EnergyUp] = img`
        . . . 8 8 8 8 8 . . .
        . . 8 8 8 f 8 8 8 . .
        . 8 8 f f f f f 8 8 .
        8 8 8 f 8 d 8 f 8 8 8
        8 8 8 f d d d f 8 8 8
        8 8 8 f 8 d 8 f 8 8 8
        8 8 8 f 8 8 8 f 8 8 8
        8 8 8 f d d d f 8 8 8
        . 8 8 f 8 8 8 f 8 8 .
        . . 8 f f f f f 8 . .
        . . . 8 8 8 8 8 . . .
    `;

    powerUps[PowerUpType.RechargeRateUp] = img`
        . . . e e e e e . . .
        . . e e e 5 4 e e . .
        . e e e 5 5 e e e e .
        e e e 5 5 4 4 4 e e e
        e e 5 5 5 5 5 5 5 5 e
        e e e e e 5 5 5 4 e e
        e e e e 5 5 5 4 e e e
        e e e 5 5 5 4 e e e e
        . e e 5 5 4 e e e e .
        . . e e 5 4 e e e . .
        . . . e e e e e . . .
    `;
}

namespace asteroids {
    game.onUpdateInterval(1500, function () {
        sprites.create(Math.pickRandom(spritesheet.asteroids), SpriteKind.Asteroid);
    });
}

namespace powerups {
    sprites.onCreated(SpriteKind.PowerUp, function (sprite: Sprite) {
        let typeOfPowerUp = Math.pickRandom(availablePowerUps);
        sprite.data = typeOfPowerUp;
        sprite.setImage(spritesheet.powerUps[typeOfPowerUp]);
        sprite.setFlag(SpriteFlag.AutoDestroy, true);
        setPosition(sprite, 10);
        setMotion(sprite);
    });

    game.onUpdateInterval(600, function () {
        if (Math.percentChance(50)) {
            let currentPowerUps = sprites.allOfKind(SpriteKind.PowerUp);
            if (currentPowerUps.length() < 2) {
                sprites.create(img`1`, SpriteKind.PowerUp);
            }
        }
    });
}
```

### ~