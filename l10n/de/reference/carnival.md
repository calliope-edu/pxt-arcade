# Jahrmarkt

## Verwendung

Diese Erweiterung fügt Blöcke hinzu, mit denen du deine eigenen Jahrmarktspiele in MakeCode Arcade erstellen kannst: mit Wurfbällen, zusätzlichen Timer-Funktionen und zusätzlichen Optionen für das Spielende.

* Einen Ball einrichten

```blocks
let myBall: Ball = null
myBall = carnival.create(assets.image`ball-yellow`, SpriteKind.Player)
myBall.setPosition(80, 90)
myBall.controlBallWithArrowKeys(true)
myBall.setIter(50)
myBall.setTraceMulti(carnival.Tracers.Full)
```

Dieser Code richtet einen Ball namens myBall ein, den du mit den Pfeiltasten steuern kannst. Außerdem siehst du eine Flugbahn-Markierung, die auf 50 % eingestellt ist.

* Variable Kraft

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

Dieser Code ergänzt den obigen Code um eine Statusleiste, die jederzeit die aktuelle Kraft anzeigt. Die Kraft schwankt zwischen 30 % und 50 % der vollen Kraft.

* Bälle als Geschosse werfen

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    throwBall = carnival.createProjectileBallFromSprite(assets.image`ball-blue`, myBall)
})
```

Dieser Code erzeugt einen Ball als Geschoss, der mit Winkel und Kraft des Elternballs von diesem aus geworfen wird.

* Timer

```blocks
carnival.startTimer()
```

Damit startest du einen Timer, der während des ganzen Spiels hochzählt oder bis carnival.startTimer() erneut aufgerufen wird.

* Countdown

```blocks
carnival.startCountdownGame(15, carnival.WinTypes.Timed)

```

Damit startest du einen Countdown, nach dessen Ablauf das Spiel endet. Du kannst zwischen Gewinnen, Verlieren, Bestzeit, Höchstpunktzahl oder Mehrspieler wählen.

* Spiel

```blocks
    carnival.customGameOverExpanded("Great Job!", effects.confetti, music.powerUp, carnival.ScoreTypes.HScore, 0)
```

Damit kannst du eine eigene Spielende-Nachricht unter Bedingungen deiner Wahl anzeigen.  Du kannst die Nachricht, den Hintergrundeffekt, die Musik und die Art der Bewertung ändern (Gewinnen, Verlieren, Zeit, Punkte oder Mehrspieler). Du kannst auch einen eigenen "Punktestand" zur Bewertung des Erfolgs übergeben.

* Beschriftung

```blocks
carnival.addLabelTo("Target Practice", carnival.Areas.Top, 4)
```

Damit fügst du deiner Jahrmarktbude eine Beschriftung hinzu, an einer festen Stelle oben, in der Mitte oder unten im Spielbereich.

Quelle: [microsoft/arcade-carnival](https://github.com/microsoft/arcade-carnival/tree/v0.0.7) (v0.0.7)

```package
carnival
```
