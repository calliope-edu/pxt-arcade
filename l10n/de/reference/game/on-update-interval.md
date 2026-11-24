# bei Aktualisierung alle

Führt Code jedes Mal aus, wenn ein Zeitintervall abgelaufen ist.

```sig
game.onUpdateInterval(500, function () {
	
})
```

Es gibt Ereignisse, mit denen du Code ausführen kannst, wenn Sprites sich überlappen, zusammenstoßen, erstellt oder zerstört werden. Du kannst mit Ereignissen auch reagieren, wenn Knöpfe gedrückt werden oder Spielzähler null erreichen. Wenn du aber Code haben willst, der regelmäßig steuert, was im Spiel passiert, musst du ihn in einer Aktualisierungsfunktion ausführen.

Dein Programm arbeitet über eine Aktualisierungsfunktion mit der Spiel-Engine zusammen. Die Spiel-Engine ruft die Aktualisierungsfunktion in einem Zeitintervall auf, das du wählst. In die Aktualisierungsfunktion kannst du Code schreiben, der die Positionen von Sprites prüft, Bedingungen, die den Punktestand ändern, die Anzahl der Leben anpasst oder prüft, ob etwas passiert ist, das das Spiel beendet.

Mit **onUpdateInterval** entscheidest du, wie oft dein Aktualisierungscode laufen soll. Das ist anders als bei [onUpdate](/reference/game/on-update), wo die Spiel-Engine entscheidet, wann dein Aktualisierungscode läuft.

Hat dein Programm sowohl [onUpdate](/reference/game/on-update)- als auch **onUpdateInterval**-Funktionen, läuft der Code in deiner **onUpdateInterval**-Funktion zuerst.

# Parameter

* **period** eine [Anzahl](/types/number) Millisekunden, die gewartet wird, bis der Intervallcode laufen soll. 
* **a**: der Code, der ausgeführt wird, wenn die Zeit in **period** abgelaufen ist

## Beispiel #example

Prüfe jede Sekunde, ob noch Leben übrig sind. Wenn nicht, beende das Spiel!

```blocks
game.onUpdateInterval(1000, function () {
	if (info.life() < 1) {
        game.gameOver(false)
    }
})
```

## Siehe auch #seealso

[bei Aktualisierung](/reference/game/on-update)