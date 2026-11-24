# BlockOut

Benutze die Pfeiltasten, um das Projektil mit deinem Schläger abprallen zu lassen und alle Blöcke auf dem Bildschirm zu zerstören!

![Spielansicht im Simulator](https://cdn.makecode.com/blob/a98cec6c8eee735ada2b8087b3cc6d8ba9e8adad/static/lessons/block-out/working-game.gif)

## Lernziele

Lerne die Grundlagen eines einfachen Spiels mit abprallendem Projektil!

* Das Konzept eines Sprites
* Wie man mehrere Sprites erzeugt
* Interaktionen zwischen Sprites und Projektilen
* Einen "Spieler" festlegen und bewegen
* Den Punktestand erhöhen
* Halbzufällige Bewegung

## Abschnitte der Lektion

* [Teil 1: Die Sprites erstellen](#part-one-creating-the-sprites)
* [Teil 2: Die Blöcke erstellen](#part-two-creating-the-blocks)
* [Teil 3: Die Einrichtung abschließen](#part-three-finishing-the-setup)
* [Teil 4: Interaktion zwischen Ball und Schläger](#part-four-ball-and-paddle-interactions)
* [Teil 5: Richtungsabhängiges Abprallen](#part-five-directional-bouncing)
* [Teil 6: Kollisionen mit Blöcken erstellen](#part-six-creating-block-collisions)
* [Teil 7: Das Spiel beenden](#part-seven-ending-the-game)

## Teil 1: Die Sprites erstellen

Öffne den [MakeCode Arcade](@homeurl@)-Editor und wähle **Neues Projekt**, um ein neues Spiel zu erstellen.

Sobald der Editor geladen ist, siehst du bereits einen grünen `||loops:on start||`-Block im Arbeitsbereich.

Zuerst erstellen wir die Hauptfigur des Spiels, in unserem Fall einen Schläger. Ziehe einen `||sprites:set meinSprite to sprite of kind player||`-Block aus `||sprites:Sprites||` und lege ihn in den `||loops:on start||`-Block. Klicke dann auf `||variables:meinSprite||` und wähle `rename variable`. Nenne deine Variable `paddle`. Klicke dann im Bildeditor auf `16x16`, bis dort `32x32` steht. Zeichne eine lila Linie nahe am unteren Rand des Bildes.

![Größe ändern](https://cdn.makecode.com/blob/71dd013ce03334825016cd18381e7bae208fb6ca/static/lessons/block-out/32x32Blockout.gif)

Ziehe als Nächstes einen `||sprites:set meinSprite position to x y||`-Block aus `||sprites:Sprites||` in den `||loops:on start||`-Block. Setze den **x**-Wert auf **79** und den **y**-Wert auf **100**. Ziehe wieder aus `||sprites:Sprites||` einen `||sprites:set meinSprite stay in screen||`-Block in `||loops:on start||`. Ändere `meinSprite` zu `paddle`. Nimm nun aus `||controller:Controller||` einen `||controller:move meinSprite with buttons||`-Block und ziehe ihn in `||loops:on start||`. Ändere auch hier `meinSprite` zu `paddle`. Klicke auf das **(+)**-Zeichen und setze den **vx**-Wert auf **100** und den **vy**-Wert auf **0**.

![Spieler bewegt sich auf dem Bildschirm](https://cdn.makecode.com/blob/7e6154b6d1c15630eb8114ce95f16fc5c8e4d054/static/lessons/block-out/moving-player.gif)

Als Nächstes erstellen wir das Projektil, das vom Schläger, den Wänden und den Blöcken abprallt. Gehe zu `||sprites:Sprites||`, nimm einen `||sprites:set projektil to projektil from meinSprite||`-Block und lege ihn in `||lopps:on start||`. Klicke auf den Bildeditor und zeichne einen Ball. Ändere `meinSprite` zu `paddle` und setze **vx** auf **50** und **vy** auf **-55**. Gehe zu `||sprites:Sprites||`, nimm einen `||sprites:set meinSprite stay in screen||`-Block und ziehe ihn in den Arbeitsbereich. Setze dann `meinSprite` auf `projektil` und ändere `stay in screen` zu `destroy on wall`. Lass den Schalter auf **AUS**. Gehe zu `||sprites:Sprites||`, nimm einen `||sprites:set projektil bounce on wall on||`-Block und ziehe ihn in `||loops:on start||`.

```blocks
let paddle = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . b b b b b b b b b b b b b b b b b b b b b b . . . . . .
    . . . . b b b b b b b b b b b b b b b b b b b b b b . . . . . .
    . . . . b b b b b b b b b b b b b b b b b b b b b b . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
paddle.setPosition(79, 100)
paddle.setStayInScreen(true)
controller.moveSprite(paddle, 100, 0)
let projektil = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . 9 9 9 . . . . . . .
    . . . . . 9 6 7 6 9 . . . . . .
    . . . . 9 6 7 6 7 6 9 . . . . .
    . . . . 1 7 1 7 1 7 1 . . . . .
    . . . . 8 6 7 6 7 6 8 . . . . .
    . . . . . 8 6 7 6 8 . . . . . .
    . . . . . . 8 8 8 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, paddle, 50, -55)
projektil.setFlag(SpriteFlag.DestroyOnWall, false)
projektil.setBounceOnWall(true)
```

Du hast es geschafft! Du hast jetzt die wichtigsten Sprites für das Spiel erstellt.

## Teil 2: Die Blöcke erstellen

In diesem Teil der Lektion erstellen wir die Blöcke. Gehe zu `||loops:Loops||`, nimm einen `||loops:for index from 0 to||`-Block und ziehe ihn in den Arbeitsbereich. Ändere den Wert im Feld auf **9**. Dupliziere denselben Block und lege ihn in die erste Schleife. Ändere jetzt den Wert von **9** auf **2**. Gehe zu `||variables:Variables||` und erstelle eine neue Variable namens `index2`. Ziehe dann `||variables:index2||` heraus und lege es in das Feld `input` der zweiten `||loops:for loop||`.

### Einen Versatz erstellen

![Versatz der Blöcke](https://cdn.makecode.com/blob/57586e47db3215df6251a5f8cc66517e544f3c6d/static/lessons/block-out/offset.png)

Ziehe aus `||variables:Variables||` einen `||variables:set var to||`-Block heraus und lege ihn in die zweite `||loops:for||`-Schleife. Öffne das Dropdown-Menü und benenne die Variable in **x** um. Nimm aus `||math:Math||` einen `||math:_ X _||`-Block und ziehe ihn in den `||variables:set x to||`-Block. Ziehe aus `||variables:Variables||` einen `||variables:index||`-Block in das erste Feld des `||math:_ X _||`-Blocks. Setze das zweite Feld auf **18**.

Nimm jetzt aus `||logic:Logic||` eine `||logic:if then||`-Anweisung und ziehe sie in die zweite Schleife. Ziehe einen `||logic:0 = 0||`-Block aus `||logic:Logic||` in die `||logic:if then||`-Anweisung. Ziehe aus `||math:Math||` einen `||math:remainder of _ / _||`-Block in das erste Feld des Vergleichs. Nimm aus den Variablen einen `||variables:index2||`-Block und ziehe ihn in das erste Feld des Rests. Setze das zweite Feld des Rests auf **2**. Setze zum Schluss das letzte Feld des Vergleichs auf **1**.

Jetzt versetzen wir die Blöcke abhängig von der Reihe, in der sie erzeugt werden. Nimm aus `||variables:Variables||` einen `||variables:set x to||`-Block und ziehe ihn in die Wenn-Anweisung. Nimm einen `||math:0 + 0||`-Block aus Mathematik und ziehe ihn in `||variables:set x to||`. Lege dann in das erste Feld einen `||math:0 x 0||`-Block und ziehe aus `||variables:Variables||` einen `||variables:index||`-Block in das erste Feld von `||math:0 x 0||`. Setze nun das zweite Feld von `||math:0 x 0||` auf **18** und das zweite Feld von `||math:0 + 0||` auf **8**.

### ~hint

Deine `||loops:for||`-Schleife sollte so aussehen.

```blocks
let x=0
for (let index = 0; index <= 9; index++) {
    for (let index2 = 0; index2 <= 2; index2++) {
        x = index * 18
        if (index2 % 2 == 1) {
            x = index * 18 + 8
        }
    }
}
```

### ~

### Die Blöcke erzeugen

Nimm jetzt aus `||variables:Variables||` einen `||variables: set x to||`-Block und lege ihn hinter die `||logic:if||`-Anweisung. Öffne das Dropdown-Menü, klicke auf `new variable` und nenne sie `tilePick`. Nimm aus `||math:Math||` einen `||math:pick random||`-Block und stelle ihn auf **0** bis **2** ein.

Hole einen `||logic: if then else||`-Block aus `||logic:Logic||` und ziehe ihn hinter `||variables:set tilePick to||`. Klicke auf das **(+)**-Symbol des neuen `||logic:if then else||`-Blocks. Lege in beide Bedingungsfelder von `||logic:if then else||` je einen `||logic:0 = 0||`-Block aus `||logic:Logic||`. Ziehe dann aus `||variables:Variables||` zwei `||variables:tilePick||`-Blöcke heraus und lege sie jeweils in das erste Feld der `||logic:0 = 0||`-Blöcke. Setze das zweite Feld des ersten Teils auf **0** und das zweite Feld des zweiten Teils auf **1**.

Nimm dann aus `||sprites:Sprites||` einen `||sprites:set meinSprite to sprite of kind player||`-Block. Öffne das erste Dropdown-Menü und erstelle einen neuen Namen `tile`. Klicke dann auf `player`, wähle `add a new kind` und nenne die Art `block`. Zeichne im Sprite-Editor einen Block. Dupliziere diesen Block und lege ihn in den `||logic:else if||`-Abschnitt und den `||logic:else||`-Abschnitt. Zeichne für jeden Teil eine andere Kachel.

Nimm zum Schluss aus `||sprites:Sprites||` einen `||sprites:set meinSprite position to||`-Block und ziehe ihn hinter den `||logic:if then else if then else||`-Block. Klicke auf `meinSprite` und wähle `tile`. Ziehe dann aus `||variables:Variables||` einen `||variables:x||`-Block in das `x`-Feld von `||sprites:set meinSprite position to||`. Ziehe in das `y`-Feld einen `||math:0 + 0||`-Block. Ziehe in dessen erstes Feld einen `||math:0 x 0||`-Block und setze dessen zweites Feld auf **18**. Lege in den ersten Teil des `||math:0 x 0||`-Blocks einen `||variables:index2||`-Block aus `||variables:Variables||`. Setze das letzte Feld des `||math:0 + 0||`-Blocks auf **20**.

```blocks
namespace SpriteKind {
    export const block = SpriteKind.create()
}
let tile:Sprite=null
let x = 0
let tilePick = 0
for (let index = 0; index <= 9; index++) {
    for (let index2 = 0; index2 <= 2; index2++) {
        x = index * 18
        if (index2 % 2 == 1) {
            x = index * 18 + 8
        }
        tilePick = randint(0, 2)
        if (tilePick == 0) {
            tile = sprites.create(img`
                8 8 1 1 8 8 6 6 1 7 7 7 1 8 8 9
                8 8 9 1 1 6 6 9 9 8 8 7 1 8 8 9
                7 6 9 9 9 8 8 7 9 8 8 6 6 1 9 9
                7 6 6 1 1 8 8 7 9 1 6 6 1 1 9 9
                7 7 6 1 1 6 6 7 7 8 8 1 1 1 7 9
                8 8 9 1 6 6 9 9 9 8 8 1 6 1 7 9
                8 8 9 9 9 7 8 8 9 6 6 1 6 6 7 7
                7 7 7 8 8 7 8 8 6 6 9 9 9 6 8 8
                7 6 6 8 8 7 7 6 1 7 7 7 9 1 8 8
                6 6 7 7 7 1 1 6 6 7 1 8 8 7 7 7
                1 1 7 9 9 9 1 1 6 1 1 8 8 7 1 9
                8 8 1 1 6 9 8 8 6 1 9 9 9 1 1 9
                8 8 9 1 6 6 8 8 6 6 8 8 9 1 9 9
                7 6 9 9 9 6 9 9 9 6 8 8 6 6 7 7
                7 6 6 8 8 1 6 6 9 7 9 6 6 8 8 7
                7 7 6 8 8 6 6 7 7 7 9 9 9 8 8 7
            `, SpriteKind.block)
        } else if (tilePick == 1) {
            tile = sprites.create(img`
                3 d 1 3 3 3 3 3 3 3 3 3 3 3 3 3
                3 d 1 3 d d d d d d d d d d d 3
                3 d 1 3 d 1 1 1 1 1 1 1 1 1 d 3
                3 d 1 3 d 1 3 3 3 3 3 3 3 1 d 3
                3 d 1 3 d 1 3 d d d d d 3 1 d 3
                3 d 1 3 d 1 3 d 1 1 1 d 3 1 d 3
                3 d 1 3 d 1 3 d 1 3 1 d 3 1 d 3
                3 d 1 3 d 1 3 d 1 3 1 d 3 1 d 3
                3 d 1 3 d 1 3 d d 3 1 d 3 1 d 3
                3 d 1 3 d 1 3 3 3 3 1 d 3 1 d 3
                3 d 1 3 d 1 1 1 1 1 1 d 3 1 d 3
                3 d 1 3 d d d d d d d d 3 1 d 3
                3 d 1 3 3 3 3 3 3 3 3 3 3 1 d 3
                3 d 1 1 1 1 1 1 1 1 1 1 1 1 d 3
                3 d d d d d d d d d d d d d d 3
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            `, SpriteKind.block)
        } else {
            tile = sprites.create(img`
                2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1
                1 2 2 2 2 2 2 2 1 1 1 4 4 4 4 4
                1 1 2 2 2 2 2 4 4 4 4 4 4 4 4 4
                4 4 4 2 2 5 5 5 5 5 5 4 4 4 4 4
                4 4 4 4 2 2 2 2 2 5 5 5 5 5 4 4
                4 4 b b b b b b b 5 5 5 5 5 5 5
                b b b b b b b 5 5 5 5 5 2 2 2 2
                b b b b 5 5 5 5 5 5 5 5 5 5 2 2
                b b b 2 2 2 2 2 2 2 2 2 1 1 1 1
                1 1 1 1 1 1 2 2 2 1 1 1 1 1 1 1
                1 1 4 4 2 2 2 2 2 2 2 1 1 1 1 1
                4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 4
                4 4 4 5 5 5 5 5 5 5 5 5 4 4 4 4
                5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4
                b b b b b 5 5 5 5 5 5 5 5 4 4 4
                . b b b b b b b b b b b 4 4 4 4
            `, SpriteKind.block)
        }
        tile.setPosition(x, index2 * 18 + 20)
    }
}
```

## Teil 3: Die Einrichtung abschließen

Jetzt schließen wir die Einrichtung des Spiels ab. Nimm aus `||info:Info||` einen `||info:set score to 0||`-Block und ziehe ihn in `||loops:on start||`. Ändere die **0** in **1**. Nimm aus `||scene:Scene||` einen `||scene:set background color to||`-Block und stelle ihn auf `light pink`. Nimm zum Schluss aus `||variables:Variables||` einen `||variables:set var to||`-Block und ziehe ihn in `||loops:on start||`. Öffne das Dropdown-Menü, klicke auf `new variable`, erstelle eine Variable namens **direction** und setze ihren Wert auf **1**.

```blocks
let direction = 0
info.setScore(1)
scene.setBackgroundColor(13)
direction = 1
```

## Teil 4: Interaktion zwischen Ball und Schläger

![Ball und Schläger](https://cdn.makecode.com/blob/7e6154b6d1c15630eb8114ce95f16fc5c8e4d054/static/lessons/block-out/moving-player.gif)

Um die Interaktion zu erstellen, gehe zu `||sprites:Sprites||`, nimm einen `||sprites:on sprite of kind player overlaps othersprite of kind player||`-Block und ziehe ihn an eine beliebige Stelle im Arbeitsbereich. Ändere das erste `player` zu `projektil` und prüfe, dass das zweite auf `player` steht. Nimm dann aus `||sprites:Sprites||` einen `||sprites:set meinSprite velocity to||`-Block und lege ihn in `||sprites:on sprite of kind player overlaps||`. Ziehe `sprite` aus dem `||sprites:overlaps||`-Block in das `meinSprite`-Feld des Geschwindigkeitsblocks.

Nimm wieder aus `||sprites:Sprites||` einen `||sprites:meinSprite x||`-Block und ziehe ihn in das `vx`-Feld. Ziehe `sprite` aus dem `||sprites:overlap||`-Block und lege es über `meinSprite` im `vx`-Feld. Öffne nun das Dropdown-Menü `x` und wähle `vx (velocity x)`.

Nimm aus `||math:Math||` einen `||math:0 x 0||`-Block und lege ihn in das `vy`-Feld des Geschwindigkeitsblocks. Setze das erste Feld des Blocks auf **-1**, nimm aus `||sprites:Sprites||` einen `||sprites:meinSprite x||`-Block und ziehe ihn in das zweite Feld. Öffne das Dropdown-Menü und wähle `vy (velocity y)`. Ziehe `sprite` aus dem `||sprites:overlap||`-Block und lege es über `meinSprite` in `||sprites:meinSprite vy||`.

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, anderesSprite) {
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
})
```

## Teil 5: Richtungsabhängiges Abprallen

![Richtungsabhängiges Abprallen](https://cdn.makecode.com/blob/16518e3b0e6ec1f767d1652c49826d20b96a7f47/static/lessons/block-out/directional-bouncing.gif)

Wenn unser Ball mit einem Block zusammenstößt, wollen wir erkennen, an welcher Seite des Blocks er abgeprallt ist. Dafür erstellen wir eine Funktion. Öffne dazu unter `Advanced` die Kategorie `||functions:Functions||` und klicke auf `Make a Function...`. Der Funktionseditor öffnet sich. Gib **getPos** dort ein, wo **doSomething** steht. Das steht für die Position des Balls relativ zum Block. Klicke in der oberen Leiste auf `Sprite`. Ein neuer **Parameter** wird hinzugefügt. Nenne ihn **sprite**. Klicke noch einmal in der oberen Leiste auf `Sprite`. Ein weiterer Parameter erscheint, nenne ihn **anderesSprite**.

![Funktionen erstellen](https://cdn.makecode.com/blob/b8252aad434b0d514cd4140c6da3d607d53ae6b7/static/lessons/block-out/creating-functions.gif)

### ~hint

#### Was ist ein Parameter?

Eine Funktion kann überall im Code aufgerufen werden. Eine Funktion kann Parameter verschiedener Typen haben. Das bedeutet, dass beim Aufruf der Funktion zum Beispiel Variablen an die Funktion übergeben werden können, um sie dort zu verändern oder zu bearbeiten.

### ~

Nimm aus `||logic:Logic||` einen `||logic: if then else||`-Block und lege ihn in die Funktion. Nimm nun aus `||logic:Logic||` einen `||logic:_ or _||`-Block und lege ihn in die `||logic:if||`-Anweisung.

Nimm aus `||logic:Logic||` einen `||logic:0 < 0||`-Block und lege ihn in das erste Feld des `||logic:_ or _||`-Blocks. Lege dann in das erste Feld des `||logic:0 < 0||`-Blocks einen `||sprites:meinSprite x||`-Block aus `||sprites:Sprites||`. Ziehe `sprite` aus dem Funktionsblock und lege es auf `meinSprite`. Lege in das zweite Feld einen `||math:0 - 0||`-Block aus `||math:Math||`. Setze dessen zweites Feld auf **8**. Lege in den ersten Teil des `||math:0-0||`-Blocks einen `||sprites:meinSprite x||`-Block. Ziehe `anderesSprite` aus der Funktion und lege es auf `meinSprite`.

Dupliziere den gesamten Block (der als einfacher `||logic:0 < 0||`-Block angefangen hat) und lege ihn in das zweite Feld der `||logic:or||`-Bedingung. Ändere das `<`-Zeichen in ein `>`-Zeichen. Ändere dann im Mathematik-Block das `-`-Zeichen in ein `+`-Zeichen. Lege in die `||logic:if||`-Anweisung einen `||variables:set var to||`-Block aus `||variables:Variables||`. Öffne das Dropdown-Menü und wähle `direction`. Gib dann **1** ein. Lege in die `||logic:else||`-Anweisung einen `||variables:set var to||`-Block aus `||variables:Variables||`. Öffne das Dropdown-Menü und wähle `direction`. Gib dann **0** ein.

Glückwunsch, wir haben jetzt eine Funktion erstellt!

```blocks
let direction = 0
function getPos (sprite: Sprite, anderesSprite: Sprite) {
    if (sprite.x < anderesSprite.x - 8 || sprite.x > anderesSprite.x + 8) {
        direction = 1
    } else {
        direction = 0
    }
}
```

## Teil 6: Kollisionen mit Blöcken erstellen

![Abprallen](https://cdn.makecode.com/blob/16518e3b0e6ec1f767d1652c49826d20b96a7f47/static/lessons/block-out/directional-bouncing.gif)

Wenn der Ball in unserem Spiel mit einem Block zusammenstößt, soll er abprallen, der Block soll zerstört werden und der Punktestand soll steigen.

Nimm aus `||sprites:Sprites||` einen `||sprites:on sprite of kind player overlaps||`-Block und lege ihn in den Arbeitsbereich. Ändere die erste Art von `player` zu `projektil`. Ändere die zweite Art von `player` zu `block`. Ziehe aus `||info:Info||` einen `||info:change score by 1||`-Block in den neuen `||sprites:overlap||`-Block. Nimm dann aus `||functions:Functions||` einen `||functions:call getPos meinSprite meinSprite||`-Block und lege ihn hinter den `score`-Block.

Nimm jetzt einen `||logic:if then else||`-Block aus `||logic:Logic||` und lege ihn hinter `||functions:call getPos||`. Nimm aus `||logic:Logic||` einen `||logic:0 = 0||`-Block und lege ihn in die `||logic:if||`-Anweisung. Setze die zweite **0** auf **1**. Ziehe aus `||variables:Variables||` einen `||variables:direction||`-Block an die Stelle der ersten **0**.

Lege in den ersten Teil der `||logic:if||`-Anweisung einen `||sprites:set meinSprite velocity to||`-Block aus `||sprites:Sprites||`. Ziehe `sprite` aus dem `||sprites:overlaps||`-Block und lege es über `meinSprite`. Ziehe in das `vx`-Feld einen `||math:0 x 0||`-Block aus `||math:Math||`. Gib in das erste Feld des `||math:0 x 0||`-Blocks **-1** ein und ziehe in das zweite Feld einen `||sprites:meinSprite x||`-Block aus `||sprites:Sprites||`. Ziehe `sprite` aus dem `||sprites::overlaps||`-Block und lege es über `meinSprite`. Öffne dann das Dropdown-Menü und wähle `vx (velocity x)`. Ziehe in das `vy`-Feld einen `||math:0 x 0||`-Block aus `||math:Math||` und setze das erste Feld auf **-1**. Ziehe einen `||sprites:meinSprite x||`-Block aus `||sprites:Sprites||` hinein. Ziehe `sprite` aus dem `||sprites:overlaps||`-Block und lege es über `meinSprite`. Öffne dann das Dropdown-Menü und wähle `vy (velocity y)`.

Dupliziere den gesamten `||sprites:set meinSprite velocity to||`-Block und lege ihn in die `||logic:else||`-Anweisung. Ziehe die Felder `vx` und `vy` heraus und vertausche sie. Stelle im ersten Feld, das zu `vx` gehört, das Dropdown-Menü auf `vx (velocity x)`. Stelle im zweiten Feld, das zu `vy` gehört, innerhalb von `||math:-1x(sprite)vx velocity x||` das Dropdown-Menü auf `vy (velocity y)`.

Ziehe zum Schluss außerhalb der `||logic:if||`-Anweisung einen `||sprites:destroy meinSprite||`-Block aus `||sprites:Sprites||` hinein. Ziehe `anderesSprite` aus dem `||sprites:overlaps||`-Block und lege es über `meinSprite`.

```blocks
let direction = 0
namespace SpriteKind {
    export const block = SpriteKind.create()
}
function getPos(sprite: Sprite, anderesSprite: Sprite) {
    if (sprite.x < anderesSprite.x - 8 || sprite.x > anderesSprite.x + 8) {
        direction = 1
    } else {
        direction = 0
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.block, function (sprite, anderesSprite) {
    info.changeScoreBy(1)
    getPos(sprite, anderesSprite)
    if (direction == 1) {
        sprite.setVelocity(-1 * sprite.vx, sprite.vy)
    } else {
        sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    }
    anderesSprite.destroy()
})
```

## Teil 7: Das Spiel beenden

Ziehe aus `||loops:Loops||` einen `||loops:forever block||` an eine beliebige Stelle im Arbeitsbereich. Ziehe aus `||logic:Logic||` einen `||logic:if then||`-Block in die `||loops:forever||`-Schleife. Ziehe aus `||logic:Logic||` einen `||logic:0 > 0||`-Block in die `||logic:if||`-Anweisung. Setze das zweite Feld auf **119**. Ziehe dann aus `||sprites:Sprites||` einen `||sprites:meinSprite x||`-Block in das erste Feld. Setze `meinSprite` auf `projektil` und `x` auf `bottom`. Ziehe in die `|logic:if||`-Anweisung einen `||game:use effect||`-Block und stelle den Schalter auf `LOSE`. Klicke dann auf das **(+)**-Symbol und stelle den Effekt auf `slash`. Hole einen `||game:game over win||`-Block aus `||game:Game||`. Stelle den Schalter auf `LOSE`.

Ziehe dann aus `||logic:Logic||` einen `||logic:if then||`-Block in die `||loops:forever||`-Schleife. Ziehe aus `||logic:Logic||` einen `||logic:0 = 0||`-Block in die `||logic:if||`-Anweisung. Setze das zweite Feld auf **30**. Ziehe in das erste Feld `||info:score||` aus `||info:Info||`. Ziehe in die `|logic:if||`-Anweisung einen `||game:use effect||`-Block und klicke auf das **(+)**-Symbol, um den Effekt auf `confetti` zu stellen. Hole einen `||game:game over||`-Block aus `||game:Game||`.

```blocks
info.setScore(1)
let projektil: Sprite = null
forever(function () {
    if (projektil.bottom > 119) {
        game.setGameOverEffect(false, effects.slash)
        game.gameOver(false)
    }
    if (info.score() == 2) {
        game.setGameOverEffect(true, effects.confetti)
        game.gameOver(true)
    }
})
```

Jetzt haben wir ein voll funktionsfähiges Spiel!

## Fertiges Spiel

```blocks
namespace SpriteKind {
    export const block = SpriteKind.create()
}
function getPos (sprite: Sprite, anderesSprite: Sprite) {
    if (sprite.x < anderesSprite.x - 8 || sprite.x > anderesSprite.x + 8) {
        direction = 1
    } else {
        direction = 0
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, anderesSprite) {
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.block, function (sprite, anderesSprite) {
    info.changeScoreBy(1)
    getPos(sprite, anderesSprite)
    if (direction == 1) {
        sprite.setVelocity(-1 * sprite.vx, sprite.vy)
    } else {
        sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    }
    anderesSprite.destroy()
})
let direction = 0
let tile: Sprite = null
let tilePick = 0
let x = 0
let paddle = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . b b b b b b b b b b b b b b b b b b b b b b . . . . . .
    . . . . b b b b b b b b b b b b b b b b b b b b b b . . . . . .
    . . . . b b b b b b b b b b b b b b b b b b b b b b . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
paddle.setPosition(79, 100)
paddle.setStayInScreen(true)
controller.moveSprite(paddle, 100, 0)
let projektil = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . 9 9 9 . . . . . . .
    . . . . . 9 6 7 6 9 . . . . . .
    . . . . 9 6 7 6 7 6 9 . . . . .
    . . . . 1 7 1 7 1 7 1 . . . . .
    . . . . 8 6 7 6 7 6 8 . . . . .
    . . . . . 8 6 7 6 8 . . . . . .
    . . . . . . 8 8 8 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, paddle, 50, -55)
projektil.setFlag(SpriteFlag.DestroyOnWall, false)
projektil.setBounceOnWall(true)
for (let index = 0; index <= 9; index++) {
    for (let index2 = 0; index2 <= 2; index2++) {
        x = index * 18
        if (index2 % 2 == 1) {
            x = index * 18 + 8
        }
        tilePick = randint(0, 2)
        if (tilePick == 0) {
            tile = sprites.create(img`
                8 8 1 1 8 8 6 6 1 7 7 7 1 8 8 9
                8 8 9 1 1 6 6 9 9 8 8 7 1 8 8 9
                7 6 9 9 9 8 8 7 9 8 8 6 6 1 9 9
                7 6 6 1 1 8 8 7 9 1 6 6 1 1 9 9
                7 7 6 1 1 6 6 7 7 8 8 1 1 1 7 9
                8 8 9 1 6 6 9 9 9 8 8 1 6 1 7 9
                8 8 9 9 9 7 8 8 9 6 6 1 6 6 7 7
                7 7 7 8 8 7 8 8 6 6 9 9 9 6 8 8
                7 6 6 8 8 7 7 6 1 7 7 7 9 1 8 8
                6 6 7 7 7 1 1 6 6 7 1 8 8 7 7 7
                1 1 7 9 9 9 1 1 6 1 1 8 8 7 1 9
                8 8 1 1 6 9 8 8 6 1 9 9 9 1 1 9
                8 8 9 1 6 6 8 8 6 6 8 8 9 1 9 9
                7 6 9 9 9 6 9 9 9 6 8 8 6 6 7 7
                7 6 6 8 8 1 6 6 9 7 9 6 6 8 8 7
                7 7 6 8 8 6 6 7 7 7 9 9 9 8 8 7
            `, SpriteKind.block)
        } else if (tilePick == 1) {
            tile = sprites.create(img`
                3 d 1 3 3 3 3 3 3 3 3 3 3 3 3 3
                3 d 1 3 d d d d d d d d d d d 3
                3 d 1 3 d 1 1 1 1 1 1 1 1 1 d 3
                3 d 1 3 d 1 3 3 3 3 3 3 3 1 d 3
                3 d 1 3 d 1 3 d d d d d 3 1 d 3
                3 d 1 3 d 1 3 d 1 1 1 d 3 1 d 3
                3 d 1 3 d 1 3 d 1 3 1 d 3 1 d 3
                3 d 1 3 d 1 3 d 1 3 1 d 3 1 d 3
                3 d 1 3 d 1 3 d d 3 1 d 3 1 d 3
                3 d 1 3 d 1 3 3 3 3 1 d 3 1 d 3
                3 d 1 3 d 1 1 1 1 1 1 d 3 1 d 3
                3 d 1 3 d d d d d d d d 3 1 d 3
                3 d 1 3 3 3 3 3 3 3 3 3 3 1 d 3
                3 d 1 1 1 1 1 1 1 1 1 1 1 1 d 3
                3 d d d d d d d d d d d d d d 3
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            `, SpriteKind.block)
        } else {
            tile = sprites.create(img`
                2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1
                1 2 2 2 2 2 2 2 1 1 1 4 4 4 4 4
                1 1 2 2 2 2 2 4 4 4 4 4 4 4 4 4
                4 4 4 2 2 5 5 5 5 5 5 4 4 4 4 4
                4 4 4 4 2 2 2 2 2 5 5 5 5 5 4 4
                4 4 b b b b b b b 5 5 5 5 5 5 5
                b b b b b b b 5 5 5 5 5 2 2 2 2
                b b b b 5 5 5 5 5 5 5 5 5 5 2 2
                b b b 2 2 2 2 2 2 2 2 2 1 1 1 1
                1 1 1 1 1 1 2 2 2 1 1 1 1 1 1 1
                1 1 4 4 2 2 2 2 2 2 2 1 1 1 1 1
                4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 4
                4 4 4 5 5 5 5 5 5 5 5 5 4 4 4 4
                5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4
                b b b b b 5 5 5 5 5 5 5 5 4 4 4
                . b b b b b b b b b b b 4 4 4 4
            `, SpriteKind.block)
        }
        tile.setPosition(x, index2 * 18 + 20)
    }
}
info.setScore(1)
scene.setBackgroundColor(13)
direction = 1
forever(function () {
    if (projektil.bottom > 119) {
        game.setGameOverEffect(false, effects.slash)
        game.gameOver(false)
    }
    if (info.score() == 30) {
        game.setGameOverEffect(true, effects.bubbles)
        game.gameOver(true)
    }
})
```

![Fertiges Spiel](https://cdn.makecode.com/blob/a98cec6c8eee735ada2b8087b3cc6d8ba9e8adad/static/lessons/block-out/working-game.gif)