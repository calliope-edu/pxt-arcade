# Tanzparty

Drücke die Pfeiltasten, die zu den Pfeilen in den Blöcken auf dem Bildschirm passen. Wenn deine Spielfigur mit einem Pfeilblock zusammenstößt, bekommst du Punkte. Versuche, deinen Highscore zu knacken, und tanz los!

![Spielansicht im Simulator](https://cdn.makecode.com/blob/d0485ac5564de94ba426044cf47f8a1d53c0d3b4/static/lessons/dance-party/working-game.gif)

## Lernziele

Lerne die Grundlagen für ein Spiel mit Kollisionen!

* Das Konzept eines Sprites
* Wie man eine Kachelkarte und eine Szene einrichtet
* Projektile erzeugen und zerstören
* Eine Spielfigur festlegen und bewegen
* Eine Punkteerhöhung festlegen
* Partikeleffekte erstellen
* Zufallsgenerierung

## Abschnitte der Lektion

* [Teil 1: Die Szene gestalten](#part-one-setting-the-scene)
* [Teil 2: Das Sprite erstellen](#part-two-creating-the-sprite)
* [Teil 3: Die Spielfigur bewegen](#part-three-move-the-player)
* [Teil 4: Geschwindigkeitsvariablen festlegen](#part-four-setting-speed-variables)
* [Teil 5: Projektile erzeugen](#part-five-spawning-projectiles)
* [Teil 6: Punkte festlegen und Kollisionen erstellen](#part-six-setting-score-and-creating-collisions)

## Teil 1: Die Szene gestalten

Öffne den [MakeCode Arcade](@homeurl@)-Editor und wähle **Neues Projekt**, um ein neues Spiel zu erstellen.

Sobald der Editor geladen ist, siehst du bereits einen grünen `||loops:on start||`-Block im Arbeitsbereich.

Um eine Welt für das Spiel zu erschaffen, verwenden wir eine Kachelkarte. Gehe dazu in `||scene:scene||`, nimm einen `||scene:set tilemap to||`-Block und ziehe ihn in `||loops:on start||`. Öffne den Kachelkarten-Editor, indem du auf das graue Feld in diesem Block klickst.

Im Kachelkarten-Editor können wir ein Level für das Spiel erstellen. Stelle zuerst unten links die Größe der Welt auf 10x8 ein; dadurch ist die Karte ungefähr so groß wie der Bildschirm. Zeichne als Nächstes am unteren Rand eine Linie mit einer Kachel, die die untere Wand bildet. Fülle den Rest des Bildschirms mit einem Hintergrund deiner Wahl. Klicke zum Schluss auf die Schaltfläche `Draw Walls` und zeichne noch eine Linie am unteren Bildschirmrand; dadurch bekommen diese Kacheln einen roten Farbton, der anzeigt, dass sie **Wände** sind, an denen Sprites nicht vorbeikommen.

Damit der Hintergrund nicht so schlicht ist, kannst du Szeneneffekte hinzufügen. Hol dir dazu einen `||scene:start screen effect||`-Block aus `||scene:Scene||`. Wähle im Dropdown-Menü des Blocks den Sternenhimmel aus, um ein Weltraum-Thema zu erzeugen.

![Animation, die die fertige Kachelkarte aus diesem Abschnitt zeigt](https://cdn.makecode.com/blob/b499de43673f2937daf49b4061e6d1a6154c4aa4/static/lessons/dance-party/drawing-tilemap.gif)

```blocks
tiles.setTilemap(tilemap`level`)
effects.starField.startScreenEffect()
```

Du hast es geschafft! Du hast jetzt die Szene für dein Spiel gestaltet.

## Teil 2: Das Sprite erstellen

Um das Sprite festzulegen, nimm einen `||sprites:set meinSprite to sprite of kind player||` aus `||sprites:Sprites||` und ziehe ihn in `||loops:on start||`. Klicke jetzt mit der rechten Maustaste auf `meinSprite` und wähle im Menü „Variable umbenennen“. Benenne dein Sprite so, wie deine Spielfigur heißen soll. Wähle im Block `||sprites:sprite of kind player||` das graue Quadrat aus und zeichne ein Bild deiner Spielfigur.

Jetzt wollen wir die Startposition unseres Sprites festlegen. Gehe dazu in Sprites, nimm `||sprites:set meinSprite position to x y||` und ziehe ihn unter `||sprites:sprite of kind player||`. Setze die `x`-Position auf **80** und die `y`-Position auf **100**.

```blocks
let steve: Sprite = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . d 9 9 9 d . . . . . .
    . . . . . d 9 9 9 d . . . . . .
    . . . . . d 8 8 8 d . . . . . .
    . . . . . d 8 8 8 d . . . . . .
    . . . . . . 8 . 8 . . . . . . .
    . . . . . . 8 . 8 . . . . . . .
    . . . . . . c . c . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
steve.setPosition(80, 100)
```

## Teil 3: Die Spielfigur bewegen

Als Nächstes erstellen wir eine Spielfigur, die sich nur zwischen vier Positionen bewegen kann. Gehe dazu zu `||controller:Controller||`, nimm `||controller:on button pressed||` und ziehe ihn in deinen Arbeitsbereich. Wähle dann in der ersten Dropdown-Liste **rechts**. Nimm jetzt einen `||sprites:set meinSprite position to x y||` und wähle im Dropdown-Menü dein Sprite aus. Gib als `x`-Wert **130** und als `y`-Wert **100** ein.

Wähle den `||controller:on button pressed||`, der den `||sprites:set meinSprite position to x y||` enthält, und dupliziere ihn **3**-mal. Stelle bei den neuen Kopien eine auf `up`, eine auf `down` und die dritte auf `left`. Da die `y`-Variable gleich bleiben soll, änderst du nur die Positionen für `x`.

* Oben: x = 60
* Unten: x = 100
* Rechts: x = 130
* Links: x = 30

Jetzt solltest du vier `||controller:Controller||`-Blöcke haben, die so aussehen.

```blocks
let steve: Sprite = null
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(30, 100)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(60, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(100, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(130, 100)
})
```

![Spielfigur bewegt sich auf dem Bildschirm](https://cdn.makecode.com/blob/9926c4b899c331fd90cf34cf0b3bae7c838832cf/static/lessons/dance-party/moving-player.gif)

## Teil 4: Geschwindigkeitsvariablen festlegen

Für den Start mit unseren Geschwindigkeitsvariablen ziehst du einen `||variables:set var to||` in `||loops:on start||`. Benenne die Variable in speed um und setze sie auf `40`.

```blocks
let speed = 40
```

### ~hint

#### Geschwindigkeit ändern

Wir können die Geschwindigkeit erhöhen, mit der die Projektile fallen. Gehe dazu zu `||game: on game update every ms||` und ziehe ihn in den Arbeitsbereich. Ändere dann die Zahl auf `2000 ms`. Gehe zu `||variables:Variables||`, wähle `||variables:change by||` und ziehe ihn in `||game:on game update||`. Wähle im Dropdown-Menü die Variable speed. Jetzt erhöht sich die Geschwindigkeit der Projektile alle zwei Sekunden um 1.

```blocks
let speed = 40
game.onUpdateInterval(2000, function () {
    speed += 1
})
```

### ~

## Teil 5: Projektile erzeugen

Jede halbe Sekunde sollen Projektile erscheinen. Gehe also in `||game:Game||`, nimm `||game:on game update every ms||` und platziere ihn in deinem Arbeitsbereich. Stelle das Intervall auf `500 ms`. Als Nächstes wollen wir auswählen, in welcher „Bahn“ unser Projektil erscheint. Dafür brauchen wir eine Variable für die Bahn. Um diese Variable zu erstellen, gehe in `||variables:Variables||` und klicke auf **Erstelle eine Variable**. Nenne die neue Variable `lane`. Ziehe den Block `||set lane to||` in `||game:on game update every ms||`. Nimm einen `||math:pick random||` aus `||math:Math||` und setze ihn nach dem **to** in unserem `||variables:set lane to||`. Setze in `||math:pick random||` die erste Zahl auf `1` und die zweite auf `4`.

Jetzt wollen wir die Projektile für jede Bahn erstellen. Nimm einen `||logic: if then else if||`-Block aus `||logic:Logic||` und setze ihn unter die Variable `lane`. Nimm dann aus `||logic:Logic||` einen `||Logic:_ = _||`-Block und setze ihn in die erste `||logic:if then||`-Anweisung. Ziehe jetzt einen `||variables:lane||`-Block in den ersten Teil und gib `1` in den zweiten Teil ein. Dupliziere diesen Vergleich 3-mal und setze den zweiten Teil jeweils auf `2`, `3` und `4`. Klicke zweimal auf das Symbol **(+)** im `||logic:if else||`-Block und ziehe diese Vergleiche in die `||logic:else||`-Anweisungen.

Nimm jetzt 4 `||sprites:set meinSprite to sprite of kind||` und ziehe je einen in jede der 4 Positionen der `||logic:if||`-Anweisung. Lege die Variable für jede `||logic:if||`-Anweisung so fest:

* Für 1 ist der Variablenname Left
* Für 2 ist der Variablenname Up
* Für 3 ist der Variablenname Down
* Für 4 ist der Variablenname Right

Wähle passend zu den Variablennamen das graue Feld aus und zeichne einen Pfeil, der in die Richtung des Variablennamens zeigt. Setze jede Art auf Projectile.

Vorhin haben wir eine Variable speed erstellt. Sie bestimmt jetzt die Geschwindigkeit, mit der die Projektile erscheinen. Nimm einen `||sprites:set meinSprite velocity to||` und ziehe ihn in jede der 4 Positionen der if-Anweisung. Passe `meinSprite` an die Variable der if-Anweisung an, setze dann `vx` auf `0` und ziehe die Variable speed aus `||variables:Variables||` an die Position vy. Wiederhole das für alle Abschnitte.

Nimm aus `||sprites:Sprites||` für jeden der 4 Abschnitte der `||logic:if||`-Anweisungen einen `||sprites:set position to||`-Block. Setze sie jeweils ans Ende jedes Abschnitts. Ändere die Variable `meinSprite` passend zur Richtungsvariable der `||logic:if||`-Anweisung und setze `y` auf `8`. Setze jetzt die `x`-Positionen auf diese Werte:

* Links: 30
* Oben: 60
* Unten: 100
* Rechts: 130

Glückwunsch, jetzt können wir Projektile erzeugen!

![Projektile erzeugen](https://cdn.makecode.com/blob/57714e4043a5fdc65cfa99551fce40647c2ac5e2/static/lessons/dance-party/spawning-projectiles.gif)

```blocks
let speed = 40
game.onUpdateInterval(500, function () {
    let lane = randint(1, 4)
    if (lane == 1) {
        let left: Sprite = null
        left = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 1 1 6 6 6 6 6 6 . .
            . . 6 6 6 1 6 1 6 6 6 6 6 6 . .
            . . 6 6 1 6 6 1 1 1 1 1 6 6 . .
            . . 6 1 6 6 6 6 6 6 6 1 6 6 . .
            . . 6 6 1 6 6 1 1 1 1 1 6 6 . .
            . . 6 6 6 1 6 1 6 6 6 6 6 6 . .
            . . 6 6 6 6 1 1 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        left.setVelocity(0, speed)
        left.setPosition(30, 8)
    } else if (lane == 2) {
        let up: Sprite = null
        up = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 1 6 6 6 1 6 6 6 . .
            . . 6 6 6 1 6 6 6 6 6 1 6 6 . .
            . . 6 6 6 1 1 1 6 1 1 1 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        up.setVelocity(0, speed)
        up.setPosition(60, 8)
    } else if (lane == 3) {
        let down: Sprite = null
        down = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 1 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 1 1 1 6 1 1 1 6 6 . .
            . . 6 6 6 1 6 6 6 6 6 1 6 6 . .
            . . 6 6 6 6 1 6 6 6 1 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        down.setVelocity(0, speed)
        down.setPosition(100, 8)
    } else {
        let right: Sprite = null
        right = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 1 6 6 6 . .
            . . 6 6 1 1 1 1 1 6 6 1 6 6 . .
            . . 6 6 1 6 6 6 6 6 6 6 1 6 . .
            . . 6 6 1 1 1 1 1 6 6 1 6 6 . .
            . . 6 6 6 6 6 6 1 6 1 6 6 6 . .
            . . 6 6 6 6 6 6 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        right.setVelocity(0, speed)
        right.setPosition(130, 8)
    }
})
```

## Teil 6: Punkte festlegen und Kollisionen erstellen

### Punkte und Leben festlegen

In unserem Spiel soll die Spielfigur Punkte für die Anzahl der zerstörten Projektile bekommen, und sie soll mehrere Leben haben, falls sie Blöcke verpasst. Gehe dazu in `||info:info||` und ziehe `||info:set score to||` in den Block `||loops: on start||`. Nimm dann einen `||info:set life to||` und ziehe ihn unter `||info:set score to||`. Ändere jetzt die Zahl in `||info:set life to||` auf **5**, damit die Spielfigur fünf Projektile verpassen kann, bevor das Spiel endet.

```blocks
info.setScore(0)
info.setLife(5)
```

Wenn die Spielfigur keine Leben mehr hat, soll das Spiel enden und der Punktestand angezeigt werden. Gehe dazu zu `||info:Info||`, nimm `||info:on life zero||` und ziehe ihn in deinen Arbeitsbereich. Gehe dann zu `||game:game||` und nimm `||game:use effect||`. Ziehe ihn in `||info:on life zero||`. Klicke auf das Symbol **(+)**. Wenn du auf **(+)** klickst, kannst du einen Effekt auswählen. Wähle den Effekt `confetti`. Hol dir jetzt einen `||game:game over win||` und setze ihn ans Ende von `||info:on life zero||`.

```blocks
info.onLifeZero(function () {
    game.setGameOverEffect(true, effects.confetti)
    game.gameOver(true)
})
```

Du hast jetzt die Grundlage für das Punktesystem eingerichtet!

### Kollisionen behandeln

Wenn ein Projektil die untere Wand trifft, soll das eine Kollision sein, und die Spielfigur soll ein Leben verlieren. Um das einzubauen, gehe in `||scene:Scene||`, wähle `||scene:on sprite of kind hits wall||` und ziehe ihn in deinen Arbeitsbereich. Setze jetzt die Art auf `projektil`.

Gehe jetzt in `||sprites:Sprite||`, wähle `||sprites:destroy meinSprite||` und ziehe ihn in `||scene:on sprite of kind hits wall||`. Ziehe die Variable `||variables:sprite||` aus dem Ereignisblock und ersetze damit `||variables:meinSprite||`. Klicke dann auf das Symbol **(+)**, wähle den Effekt `fire` und setze die Zeit auf `100 ms`. Ziehe einen `||info:change life by||` heraus und setze ihn unter `||sprites:destroy sprite with effect||`. Setze die Zahl auf `-1`. Jetzt wird jedes Projektil, das den Boden trifft, zerstört, und die verbleibenden Leben der Spielfigur nehmen ab.

![Spielfigur bewegt sich auf dem Bildschirm](https://cdn.makecode.com/blob/a9e37714ea14ae47dac884db9a84d7c7d3544d6d/static/lessons/dance-party/missed-collision.gif)

```blocks
scene.onHitWall(SpriteKind.Projectile, function (sprite) {
    sprite.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
})
```

Wenn die Spielfigur mit einem Projektil zusammenstößt, soll ihr Punktestand steigen und das Projektil zerstört werden. Gehe zu `||sprites:Sprites||`, nimm `||sprites:on sprite of kind player overlaps anderesSprite of kind||` und ziehe ihn in deinen Arbeitsbereich. Ändere das Feld nach `anderesSprite` von `player` auf `projektil`. Gehe jetzt zurück in `||sprites:Sprites||` und ziehe `||sprites:destroy meinSprite||` hinein. Ziehe die Variable `||variables:anderesSprite||` aus dem Ereignisblock auf die Variable `||variables:meinSprite||`, um sie zu ersetzen. Klicke auf das Symbol **(+)**, setze den Effekt auf `disintegrate` und gib `100 ms` ein. Gehe jetzt zu `||info:Info|`, nimm `||info:change score by||` und ziehe ihn unter `||sprites:destroy anderesSprite with effect||`.

![Spielfigur bewegt sich auf dem Bildschirm](https://cdn.makecode.com/blob/e2d8769aa5f30ad1e03f5077c71eb5a1c9bfec0d/static/lessons/dance-party/collision-projectiles.gif)

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, anderesSprite) {
    anderesSprite.destroy(effects.disintegrate, 100)
    info.changeScoreBy(1)
})
```

Und jetzt haben wir ein voll funktionsfähiges Spiel!

## Fertiges Spiel

```blocks
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, anderesSprite) {
    anderesSprite.destroy(effects.disintegrate, 100)
    music.setVolume(10)
    info.changeScoreBy(1)
})
scene.onHitWall(SpriteKind.Projectile, function (sprite) {
    sprite.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(30, 100)
})
info.onLifeZero(function () {
    game.setGameOverEffect(true, effects.confetti)
    game.gameOver(true)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(130, 100)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(60, 100)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    steve.setPosition(100, 100)
})
let right: Sprite = null
let down: Sprite = null
let up: Sprite = null
let left: Sprite = null
let lane = 0
let steve: Sprite = null
scene.setBackgroundColor(11)

effects.starField.startScreenEffect()
tiles.setTilemap(tilemap`level`)

steve = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . . f f f . . . . . . .
    . . . . . d 9 9 9 d . . . . . .
    . . . . . d 9 9 9 d . . . . . .
    . . . . . d 8 8 8 d . . . . . .
    . . . . . d 8 8 8 d . . . . . .
    . . . . . . 8 . 8 . . . . . . .
    . . . . . . 8 . 8 . . . . . . .
    . . . . . . c . c . . . . . . .
    . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
steve.setPosition(80, 100)
info.setScore(0)
info.setLife(5)
let speed = 40
game.onUpdateInterval(500, function () {
    lane = randint(1, 4)
    if (lane == 1) {
        left = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 1 1 6 6 6 6 6 6 . .
            . . 6 6 6 1 6 1 6 6 6 6 6 6 . .
            . . 6 6 1 6 6 1 1 1 1 1 6 6 . .
            . . 6 1 6 6 6 6 6 6 6 1 6 6 . .
            . . 6 6 1 6 6 1 1 1 1 1 6 6 . .
            . . 6 6 6 1 6 1 6 6 6 6 6 6 . .
            . . 6 6 6 6 1 1 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        left.setVelocity(0, speed)
        left.setPosition(30, 8)
    } else if (lane == 2) {
        up = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 1 6 6 6 1 6 6 6 . .
            . . 6 6 6 1 6 6 6 6 6 1 6 6 . .
            . . 6 6 6 1 1 1 6 1 1 1 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        up.setVelocity(0, speed)
        up.setPosition(60, 8)
    } else if (lane == 3) {
        down = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 1 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 1 1 1 6 1 1 1 6 6 . .
            . . 6 6 6 1 6 6 6 6 6 1 6 6 . .
            . . 6 6 6 6 1 6 6 6 1 6 6 6 . .
            . . 6 6 6 6 6 1 6 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        down.setVelocity(0, speed)
        down.setPosition(100, 8)
    } else {
        right = sprites.create(img`
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 1 6 1 6 6 6 . .
            . . 6 6 1 1 1 1 1 6 6 1 6 6 . .
            . . 6 6 1 6 6 6 6 6 6 6 1 6 . .
            . . 6 6 1 1 1 1 1 6 6 1 6 6 . .
            . . 6 6 6 6 6 6 1 6 1 6 6 6 . .
            . . 6 6 6 6 6 6 1 1 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . 6 6 6 6 6 6 6 6 6 6 6 6 . .
            . . . . . . . . . . . . . . . .
            . . . . . . . . . . . . . . . .
        `, SpriteKind.Projectile)
        right.setVelocity(0, speed)
        right.setPosition(130, 8)
    }
})
game.onUpdateInterval(2000, function () {
    speed += 1
})
```

![Funktionierendes Spiel](https://cdn.makecode.com/blob/d0485ac5564de94ba426044cf47f8a1d53c0d3b4/static/lessons/dance-party/working-game.gif)

```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile0": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile1": {
        "data": "hwQQABAAAAAREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREREQ==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile2": {
        "data": "hwQQABAAAAC7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7u7uw==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level": {
        "id": "level",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDIwMjAyMDEwMTAxMDEwMTAxMDEwMTAxMDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.tile0",
            "myTiles.tile1",
            "myTiles.tile2"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```