# Cherry Pickr

![Spielansicht im Simulator](https://cdn.makecode.com/blob/4f7cf599f42129cf192fdd08d34f7b7974558006/static/lessons/cherry-pickr/cherry-pickr.png)

Sammle so viele Kirschen wie möglich, bevor die Zeit abläuft!

## Lernziel

Lerne die grundlegenden Voraussetzungen, um ein funktionierendes Spiel zu bauen!

* Das Konzept eines Sprites
* Wie man eine Kachelkarte (Tilemap) einrichtet
* Kirschen auf der Kachelkarte erscheinen lassen
* Eine Spielfigur festlegen und bewegen
* Die Karte gestalten
* Einen Countdown einrichten

## Abschnitte der Lektion

* [Teil 1: Das Spiel starten](#part-one-start-the-game)
* [Teil 2: Den Hintergrund festlegen](#part-two-set-the-background)
* [Teil 3: Den Spieler erstellen und bewegen](#part-three-create-and-move-the-player)
* [Teil 4: Kirschen auf dem Bildschirm erscheinen lassen](#part-four-spawn-cherries-on-the-screen)
* [Teil 5: Punktestand und Zeit im Blick behalten](#part-five-keep-track-of-the-score-and-time)
* [Teil 6: Kirschen einsammeln](#part-six-picking-up-cherries)

## Teil 1: Das Spiel starten

Öffne den [MakeCode Arcade](@homeurl@)-Editor und wähle **Neues Projekt**, um ein neues Spiel zu erstellen.

Sobald der Editor geladen ist, siehst du einen grünen `||loops:on start||`-Block, der bereits im Arbeitsbereich des Editors liegt.

Das Spiel soll mit einem *Titelbildschirm* beginnen, damit der Spieler weiß, welches Spiel er spielt. Gehe dazu in der Toolbox zu `||game:Game||` und ziehe unter der Kategorie **Prompt** einen `||game:splash||`-Block in den `||loops:on start||`-Block. Gib deinem Spiel einen Titel und trage ihn als Text in den `||game:splash||`-Block ein.

```blocks
game.splash("Cherry Pickr")
```

## Teil 2: Den Hintergrund festlegen

Um den Hintergrund festzulegen, klicke in der Toolbox auf `||scene:Scene||` und ziehe den `||scene:set tilemap to||`-Block in den `||loops:on start||`-Block. Klicke auf das graue Feld und zeichne den Hintergrund so, wie er aussehen soll.

```blocks
game.splash("Cherry Pickr")
tiles.setTilemap(tilemap`level`)
```

## Teil 3: Den Spieler erstellen und bewegen

### Erstellen

Als Nächstes erstellen wir eine bewegliche Spielfigur. Gehe dazu zu `||sprites:Sprites||` in der Toolbox unter der **Create** Kategorie und ziehe einen `||sprites:set meinSprite to||`-Block in `||loops:on start|`.

Als nächstes zeichne, wie der Spieler aussehen soll. Klicke auf das quadratische graue Feld im `|| sprites:set meinSprite to||`-Block. Ein Zeicheneditor öffnet sich, in dem du zeichnest, wie dein Spieler aussehen soll.

```blocks
let meinSprite: Sprite = null
game.splash("Cherry Pickr")
tiles.setTilemap(tilemap`level`)
meinSprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
```

OK, wir haben unseren Spieler erstellt!

### ~hint

#### Die Sprite-Variable umbenennen

Wir können unseren Charakter von `meinSprite` zu `player` (oder alles andere, was du möchtest) umbenennen, indem du überall auf den Dropdown klickst, wo du die Variable `meinSprite` siehst `Rename variable....`. Wenn Du den Namen der Variablen änderst, denke immer daran, während Du den Rest dieser Lektion durchläufst. Jedes Mal, wenn Du `meinSprite`siehst, verwende stattdessen deinen Variablennamen.

### ~

### Bewegen

Um den Spieler zu bewegen, klicke auf `||Controller:Controller||` in der Toolbox und ziehe einen `||controller:control sprite||`-Block in den `||loops:on start|`-Block. Stelle sicher, dass die ausgewählte Variable `meinSprite`ist.

Gehe dann zu `||scene:Scene||` und ziehe unter der Kategorie **Camera** den `||scene:camera follow sprite||`-Block in den `||loops:on start||`-Block. Stelle erneut sicher, dass die ausgewählte Variable `meinSprite`ist.

Das machen wir, damit der Spieler in der Mitte des Bildschirms bleibt, wenn er sich über die Kachelkarte bewegt. Damit sich der Spieler schneller bewegt, setze `vx` und `vy` auf `150`.

```blocks
let meinSprite: Sprite = null
game.splash("Cherry Pickr")
tiles.setTilemap(tilemap`level`)
meinSprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
controller.moveSprite(meinSprite, 150, 150)
scene.cameraFollowSprite(meinSprite)
```

Jetzt können wir unseren Spieler bewegen! Teste im Simulator, wie sich der Spieler bewegt.

![Spieler bewegt sich auf dem Bildschirm](https://cdn.makecode.com/blob/b1ed6ae5cef540f226437477e4145e8f4280ef88/static/lessons/cherry-pickr/movingplayer.gif)

## Teil 4: Kirschen auf dem Bildschirm erscheinen lassen

Jede halbe Sekunde soll an einer zufälligen Stelle eine Kirsche erscheinen. Gehe dazu in der Toolbox zu `||game:Game||` und ziehe den `||game:on game update every||`-Block in den Editor.

Als nächstes werden wir festlegen, was eine Kirsche ist, indem wir zu `|| sprites:Sprites||` gehen und den `|| sprites:set meinSprite to||`-Block in der `||game:on game update every||` block ziehen.

Klicke auf die Dropdown-Liste, und benenne die Variable in `||variables:cherry|` um. Klicke auf das graue quadratische Feld und zeichne, wie dein Gegenstand aussehen soll. Klicke dann auf die Dropdown-Liste mit der Aufschrift `||sprites:Player||` und ändere die Art auf `||sprites:Food||`.

```blocks
let cherry: Sprite = null
game.onUpdateInterval(500, function () {
    cherry = sprites.create(sprites.food.smallCherries, SpriteKind.Food)
})
```

Um Kirschen auf dem Bildschirm zu erzeugen, müssen wir eine zufällige x- und y-Koordinate setzen. Gehe zur `||sprites:Sprites||` Registerkarte und ziehe den `||sprites:set meinSprite Position to|` -Block in den `||sprites:on game update every|`-Block. Ändere `||variables:meinSprite||` in `||variables:cherry||`.

Damit die Kirsche an einer zufälligen Stelle der Kachelkarte erscheint, gehe zur Registerkarte `||math:Math||` und ziehe einen `||math:pick random||`-Block in den x-Wert von `||sprites:set item position to||`. Ziehe einen anderen in den y-Wert.

Ändere die Werte des ersten `||math:pick random||`-Blocks auf `0` und `160`. Ändere die Werte des zweiten `||math:pick random||`-Blocks auf `0` und `120`.

```blocks
let cherry: Sprite = null
game.onUpdateInterval(500, function () {
    cherry = sprites.create(sprites.food.smallCherries, SpriteKind.Food)
    cherry.setPosition(randint(0, 160), randint(0, 120))
})
```

## Teil 5: Punktestand und Zeit im Blick behalten

### Die Zeit im Blick behalten

Wir müssen festlegen, wie lange das Spiel dauert. Gehe dazu zu `||info:Info||` und ziehe den `||info:start countdown||`-Block in den `||loops:on start||`-Block. Klicke auf die `10` und ändere sie auf `60`, damit das Spiel nach 60 Sekunden endet.

### Den Punktestand im Blick behalten

Als Nächstes kümmern wir uns um den Punktestand. Gehe zu `||info:Info||` und ziehe den `||info:set score to||`-Block in den `||loops:on start||`-Block. Lass den Wert auf `0`, da der Spieler zu Beginn des Spiels noch keine Punkte hat.

Punkte fügen wir in [Teil 6: Kirschen einsammeln](#part-six-picking-up-cherries) hinzu.

Der Spielsimulator zeigt den Timer und den Punktestand automatisch oben auf dem Bildschirm an.

```blocks
let meinSprite: Sprite = null
game.splash("Cherry Pickr")
tiles.setTilemap(tilemap`level`)
meinSprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
controller.moveSprite(meinSprite, 150, 150)
scene.cameraFollowSprite(meinSprite)
info.startCountdown(60)
info.setScore(0)
```

## Teil 6: Kirschen einsammeln

Zum Schluss soll unser Spieler die Kirschen auch wirklich einsammeln können. Gehe zu `||sprites:Sprites||` und ziehe aus der Kategorie **Overlaps** den Block `||sprites:on sprite of kind Player overlaps||`. Ändere den zweiten `||sprites:Player||` auf `||sprites:Food||`. Der Text für den Block sollte nun sein: `||sprites:on sprite of kind Player overlaps anderesSprite of kind Food||`.

Dieser Block wird jedes Mal ausgeführt, wenn ein `||sprites:Player||`-Sprite einen `||sprites:Food||`-Sprite überlappt.

### Den Punktestand ändern

Um die Punktzahl zu ändern wenn die Kirsche berührt wird, gehe auf den `||info:Info||`-Reiter und ziehe den `||info:change score by||`-Block in den `||sprites:on sprite of kind Player overlaps||`-Block. Lass den Wert auf `1`.

### Den Gegenstand entfernen

Wenn dieser Block ausgeführt wird, werden zwei neue Variablen erstellt: `||variables:sprite||` und `||variables:anderesSprite||`. Wir müssen `||variables:anderesSprite||` aus dem Spiel entfernen, denn es ist der `||sprites:Food||` -Sprite der mit dem `||sprites:Player||`-Sprite zusammengestoßen ist.

Gehe dazu in der Toolbox zu `||sprites:Sprites||` und ziehe unter **Effects** den `||sprites:destroy||`-Block in den `||sprites:on sprite of kind Player overlaps||`-Block. Ziehe dann die Variable `||variables:anderesSprite||` aus den vorderen Bereich des Blocks in den `||sprites:destroy||`-Block.

Du wirst feststellen, dass der `||variables:meinSprite||`-Block aus dem `||sprites:destroy||`-Block entfernt wird, wenn du ihn durch den `||variables:anderesSprite||`-Block ersetzt. Du kannst diesen Block löschen, indem du ihn in das Werkzeugfeld (Toolbox) ziehst.

```blocks
let cherry: Sprite = null
let meinSprite: Sprite = null
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, anderesSprite) {
    info.changeScoreBy(1)
    anderesSprite.destroy()
})
game.splash("Cherry Pickr")
tiles.setTilemap(tilemap`level`)
meinSprite = sprites.create(sprites.castle.princessFront0, SpriteKind.Player)
controller.moveSprite(meinSprite, 150, 150)
scene.cameraFollowSprite(meinSprite)
info.startCountdown(60)
info.setScore(0)
game.onUpdateInterval(500, function () {
    cherry = sprites.create(sprites.food.smallCherries, SpriteKind.Food)
    cherry.setPosition(randint(0, 160), randint(0, 120))
})
```

Und jetzt haben wir ein voll funktionsfähiges Spiel!

![Fertiges Spiel](https://cdn.makecode.com/blob/ce6b3522ea1100f786a4e01ece4c2a8b1d2b37b8/static/lessons/cherry-pickr/workinggame.gif)

### ~hint

#### Lokale Variablen

Die Variablen `||variables:sprite||` und `||variables:anderesSprite||` werden *local variables* genannt. Sie werden erstellt, wenn der Block für die Kollision ausgeführt wird, und sie können nur innerhalb dieses Blocks verwendet werden. Wenn dieser Block läuft, beinhaltet die Variable `||variables:sprite||` den `||sprites:Player||`-Sprite der an der Kollision beteiligt ist und die `||variables:anderesSprite||`-Variable speichert den `||sprites:Food||`-Sprite.

### ~

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
        "data": "hwQQABAAAABmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZg==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile2": {
        "data": "hwQQABAAAAAzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMw==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile3": {
        "data": "hwQQABAAAABVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVQ==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile4": {
        "data": "hwQQABAAAAB3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3d3dw==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile5": {
        "data": "hwQQABAAAACZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmQ==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile6": {
        "data": "hwQQABAAAABERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERERA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile7": {
        "data": "hwQQABAAAAAiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIg==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "tile8": {
        "data": "hwQQABAAAADMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzMzA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level": {
        "id": "level",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAwYTAwMDgwMDAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMjAyMDIwMjAyMDIwMjAyMDIwMzAzMDMwMzAzMDMwMzAzMDMwMzA0MDQwNDA0MDQwNDA0MDQwNDA0MDUwNTA1MDUwNTA1MDUwNTA1MDUwNjA2MDYwNjA2MDYwNjA2MDYwNjA3MDcwNzA3MDcwNzA3MDcwNzA3MDgwODA4MDgwODA4MDgwODA4MDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMA==",
        "tileset": [
            "myTiles.tile0",
            "myTiles.tile1",
            "myTiles.tile2",
            "myTiles.tile3",
            "myTiles.tile4",
            "myTiles.tile5",
            "myTiles.tile6",
            "myTiles.tile7",
            "myTiles.tile8"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```