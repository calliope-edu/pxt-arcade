# carnival

## Verwendung

Diese Erweiterung fügt Blöcke hinzu, mit denen du in MakeCode Arcade deine eigenen Jahrmarkt-Spiele bauen kannst: mit Wurfbällen, zusätzlichen Timer-Funktionen und weiteren Möglichkeiten für das Spielende.

* Einen Ball einrichten

```blocks
let myBall: Ball = null
myBall = carnival.create(assets.image`ball-yellow`, SpriteKind.Player)
myBall.setPosition(80, 90)
myBall.controlBallWithArrowKeys(true)
myBall.setIter(50)
myBall.setTraceMulti(carnival.Tracers.Full)
```

Dieser Code richtet einen Ball namens myBall ein, den du mit den Pfeiltasten steuern kannst. Du siehst auch eine Spur, die auf 50 % eingestellt ist.

* Wechselnde Kraft

```blocks
let theTarget: Sprite = null
let throwBall: Ball = null
let myBall: Ball = null
scene.setBackgroundImage(assets.image`wildWest`)
myBall = carnival.create(assets.image`ball-yellow`, SpriteKind.Player)
myBall.setPosition(80, 90)
let statusleiste = statusbars.create(120, 6, StatusBarKind.Health)
statusleiste.setColor(5, 10)
statusleiste.setBarBorder(1, 1)
statusleiste.setPosition(80, 113)
let myBooth = sprites.create(assets.image`booth`, SpriteKind.Booth)
myBall.controlBallWithArrowKeys(true)
myBall.setIter(10)
myBall.setTraceMulti(carnival.Tracers.Cross)
myBall.variablePower(statusleiste, 30, 50, 100)
```

Dieser Code erweitert den Code oben um eine Statusleiste, die jederzeit die aktuelle Kraft anzeigt. Die Kraft wechselt zwischen 30 % und 50 % der vollen Kraft.

* Bälle werfen

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    throwBall = carnival.createProjectileBallFromSprite(assets.image`ball-blue`, myBall)
})
```

Dieser Code erstellt einen Ball als Projektil, der mit dem Winkel und der Kraft des Eltern-Balls losfliegt.

* Timer

```blocks
carnival.startTimer()
```

Damit startest du einen Timer, der während des ganzen Spiels hochzählt oder bis carnival.startTimer() noch einmal aufgerufen wird.

* Countdown

```blocks
carnival.startCountdownGame(15, carnival.WinTypes.Timed)

```

Damit startest du einen Countdown, der am Ende das Spielende auslöst. Du kannst wählen zwischen gewonnen, verloren, beste Zeit, beste Punktzahl oder Mehrspieler.

* Spiel

```blocks
    carnival.customGameOverExpanded("Great Job!", effects.confetti, music.powerUp, carnival.ScoreTypes.HScore, 0)
```

Damit zeigst du eine eigene Spielende-Nachricht an, wann du willst. Du kannst die Nachricht, den Hintergrundeffekt, die Musik und die Bewertung ändern (gewonnen, verloren, Zeit, Punktzahl oder Mehrspieler). Du kannst auch eine eigene „Punktzahl“ für die Bewertung übergeben.

* Beschriftung

```blocks
carnival.addLabelTo("Target Practice", carnival.Areas.Top, 4)
```

Damit fügst du deiner Jahrmarktbude eine Beschriftung hinzu, an einer festen Stelle oben, in der Mitte oder unten im Spielbereich.

Quelle: [microsoft/arcade-carnival](https://github.com/microsoft/arcade-carnival/tree/v0.0.7) (v0.0.7)

```package
carnival
```
