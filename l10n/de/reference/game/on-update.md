# bei Aktualisierung

Führt Code zur Spielaktualisierung aus.

```sig
game.onUpdate(function () {
	
})
```

Es gibt Ereignisse, mit denen du Code ausführen kannst, wenn Sprites sich überlappen, zusammenstoßen, erstellt oder zerstört werden. Du kannst mit Ereignissen auch reagieren, wenn Knöpfe gedrückt werden oder Spielzähler null erreichen. Wenn du aber Code haben willst, der regelmäßig steuert, was im Spiel passiert, musst du ihn in einer Aktualisierungsfunktion ausführen.

Dein Programm arbeitet über eine Aktualisierungsfunktion mit der Spiel-Engine zusammen. Die Spiel-Engine ruft die Aktualisierungsfunktion in regelmäßigen Abständen auf. In die Aktualisierungsfunktion kannst du Code schreiben, der die Positionen von Sprites prüft, Bedingungen, die den Punktestand ändern, die Anzahl der Leben anpasst oder prüft, ob etwas passiert ist, das das Spiel beendet.

## Die Spielschleife

Ein grundlegender Teil der Spieleprogrammierung ist die Spielschleife (Game Loop). Sie ist Teil der Spiel-Engine in @boardname@. Eine Spielschleife hält das Geschehen im Spiel am Laufen. Als einfacher Code könnte sie so aussehen:

```typescript-ignore
while (!gameOver) {
    checkInputs()
    gameUpdate()
    showGameUpdates()
}
```

Als Teil von **gameUpdate** wird der Code in deinem **onUpdate** ausgeführt, um die regelmäßigen Aktualisierungen deines Spiels zu erledigen. Die Zeit zwischen den Aktualisierungen (Aktualisierungsrate) legt die Spiel-Engine fest. Dieses Intervall ist kurz genug, damit nie jemand darauf warten muss, dass dein Programm seine Aktualisierungen macht. In ein **onUpdate** gehört Code, der regelmäßig laufen muss, aber nicht von einem festen Zeitintervall abhängt. Wenn dein Aktualisierungscode in einem selbst gewählten Zeitintervall laufen soll, verwende [onUpdateInterval](/reference/game/on-update-interval).

## Parameter

* **a**: der Code, der die Sprites bewegt oder verändert.

## Beispiel #example

Erstelle ein Sprite und setze es in Bewegung. Prüfe in der **onUpdate**-Funktion, ob das Sprite den Bildschirmrand erreicht. Wenn ja, schicke es in die entgegengesetzte Richtung.

```blocks
let meinSprite: Sprite = null
meinSprite = sprites.create(img`
. . . . . 5 5 5 5 5 5 . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . . . 5 5 5 5 5 5 . . . . . 
`, SpriteKind.Player)
meinSprite.vx = 30
game.onUpdate(function () {
    if (meinSprite.x > scene.screenWidth()) {
        meinSprite.vx = -30
    } else if (meinSprite.x < 0) {
        meinSprite.vx = 30
    }
})
```

## Siehe auch #seealso

[bei Aktualisierung alle](/reference/game/on-update-interval)
