# wenn Leben null

Führe Code aus, wenn die Anzahl der Leben des Spielers null erreicht.

```sig
info.onLifeZero(function () {})
```

Wenn du eine Anzahl von Leben für dein Spiel festgelegt hast, kannst du etwas tun, wenn die Anzahl der Leben `0` erreicht. Je nach den Regeln deines Spiels möchtest du vielleicht das Spiel beenden oder einen Spieler-Sprite entfernen.

Wenn du eine Anzahl von Leben festlegst (mit [setLife](/reference/info/set-life)) und sie auf `0` sinkt, du aber keine **onLifeZero**-Funktion in deinem Programm hast, endet das Spiel automatisch.

## ~ hint

Einzelne Sprites haben ihre eigene [Lebensdauer](/reference/sprites/sprite/lifespan). Sie werden zerstört, wenn ihre Lebensdauer festgelegt wurde und dann `0` erreicht. Das ist etwas anderes als die Anzahl der [Leben](/reference/info/life) im Spiel. Spielleben werden nach deinen eigenen Spielregeln vergeben und abgezogen.

## ~

## Parameter

* **handler**: der Code, der ausgeführt wird, wenn die Anzahl der Leben `0` erreicht.

## Beispiel #example

### Nachricht bei null Leben #ex1

Setze die Anzahl der Leben auf `3`. Verringere in der Spielaktualisierungsfunktion die Anzahl der Leben jede Sekunde um `1`. Zeige eine Nachricht an, wenn die Anzahl der Leben `0` wird.

#### Ein Spieler

```blocks
info.setLife(3)
game.onUpdateInterval(1000, function() {
    info.changeLifeBy(-1)
})
info.onLifeZero(function () {
    game.showLongText("Life is zero!", DialogLayout.Bottom)
})
```

#### Mehrspieler

```blocks
info.player2.setLife(3)
game.onUpdateInterval(1000, function() {
    info.player2.changeLifeBy(-1)
})
info.player2.onLifeZero(function () {
    game.showLongText("Life is zero!", DialogLayout.Bottom)
})
```

### Keine Leben, Spiel vorbei #ex2

Setze die Anzahl der Leben auf `9`. Verbrauche alle Leben, um das Spiel zu beenden.

```blocks
info.setLife(9)
game.onUpdateInterval(300, function() {
    info.changeLifeBy(-1)
})
```

## Siehe auch #seealso

[Leben](/reference/info/life),
[Leben festlegen](/reference/info/set-life),
[ändere Leben um](/reference/info/change-life-by)