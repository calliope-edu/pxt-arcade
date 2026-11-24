# Welche Taste?

## {Einführung @unplugged}

Die Kategorie ``||info:Info||`` hat einige Eigenschaften, die bei typischen Abläufen in Spielen helfen. Standardmäßig erscheinen diese Eigenschaften auf dem Bildschirm, sobald sie gesetzt sind. So können die Leute, die dein Spiel spielen, ganz einfach sehen, wie gut sie gerade sind.

## {Schritt 1 @fullscreen}

Suche ``||info:setze Punktzahl auf 0||`` in ``||info:Info||`` und ziehe ihn in ``||loops:beim Start||``.

Damit wird die Punktzahl am Spielanfang auf 0 gesetzt. Schau mal: Die Punktzahl erscheint jetzt oben rechts auf dem Bildschirm.

```blocks
info.setScore(0)
```

## {Schritt 2 @fullscreen}

Suche ``||info:setze Anzahl Leben auf 3||`` in ``||info:Info||`` und ziehe ihn in ``||loops:beim Start||``. Ändere die 3 auf 5.

Damit legst du fest, mit wie vielen Leben ein Spieler startet. Die Leben erscheinen oben links auf dem Bildschirm. Wenn der Spieler keine Leben mehr hat, ist das Spiel vorbei.

```blocks
info.setScore(0)
info.setLife(5)
```

## {Schritt 3 @fullscreen}

Suche ``||info:starte Countdown 10 (s)||`` in ``||info:Info||`` und ziehe ihn in ``||loops:beim Start||``.

Damit startet ein Countdown von 10 Sekunden. Danach ist das Spiel vorbei. Außerdem erscheint oben auf dem Bildschirm ein großer Timer, damit der Spieler weiß, dass er sich beeilen muss.

```blocks
info.setScore(0)
info.setLife(5)
info.startCountdown(10)
```

## {Schritt 4 @fullscreen}

Suche ``||controller:wenn Knopf A gedrückt||`` in ``||controller:Controller||`` und ziehe ihn in den Arbeitsbereich.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {

})
info.setScore(0)
info.setLife(5)
info.startCountdown(10)
```

## {Schritt 5 @fullscreen}

Suche ``||info:ändere Punktzahl um 1||`` in ``||info:Info||`` und ziehe ihn in ``||controller:wenn Knopf A gedrückt||``.

Jetzt steigt die Punktzahl des Spielers jedes Mal um eins, wenn der Knopf ``||controller:A||`` gedrückt wird. Drück den Knopf mehrmals und schau, wie hoch du die Punktzahl bekommst.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
info.setScore(0)
info.setLife(5)
info.startCountdown(10)
```

## {Schritt 6 @fullscreen}

Hol dir noch einen ``||controller:wenn Knopf A gedrückt||`` und ziehe ihn in den Arbeitsbereich. Ändere ``||controller:A||`` in ``||controller:B||``.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {

})
info.setScore(0)
info.setLife(5)
info.startCountdown(10)
```

## {Schritt 7 @fullscreen}

Suche ``||info:ändere Leben um -1||`` in ``||info:Info||`` und ziehe ihn in ``||controller:wenn Knopf B gedrückt||``.

Jetzt verliert der Spieler ein Leben, wenn er den Knopf ``||controller:B||`` drückt. Drück ihn mehrmals und schau, wie die Anzeige der Leben bis auf 0 sinkt.

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeLifeBy(-1)
})
info.setScore(0)
info.setLife(5)
info.startCountdown(10)
```

## {Geschafft @fullscreen}

Glückwunsch, dein Spiel ist fertig! Es ist vielleicht einfach – man verliert nur Leben, wenn man den falschen Knopf drückt –, aber du kannst die Blöcke mit anderen kombinieren, zum Beispiel mit Überlappungs-Ereignissen für Sprites. So entstehen Spiele, in denen Spieler je nach Leistung belohnt oder bestraft werden.
