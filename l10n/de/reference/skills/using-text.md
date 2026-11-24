## Text in einem Spiel verwenden

An verschiedenen Stellen in einem Spiel musst du dem Spieler Nachrichten oder Anweisungen geben. Du kannst Textnachrichten in deinem Spiel auf mehrere Arten anzeigen.

### Splash-Nachrichten

Eine Splash-Nachricht wird als Titelbildschirm verwendet, um das Spiel vorzustellen. Ein Splash-Bildschirm kann optional auch eine zweite Untertitelzeile haben. Sobald der Spieler bereit ist, drückt er die **A**-Taste, um das Spiel zu starten.

```blocks
game.splash("My Screen Message")
```

Die Untertitelzeile fügst du hinzu, indem du den Block mit **(+)** erweiterst und die zweite Textzeile eingibst.

```blocks
game.splash("Star Quest", "Journey to new and distant galaxies!")
```

### Längere Textnachrichten anzeigen

Wenn du den Spielablauf unterbrechen und dem Spieler Informationen anzeigen musst, verwendest du einen Block ``||game:zeige langen Text||``. Damit wird ein Text angezeigt, der länger als eine Splash-Nachricht ist. Du kannst wählen, wo auf dem Bildschirm die Nachricht erscheinen soll: am Rand, in der Mitte oder auf dem ganzen Bildschirm.

Die Positionen, an denen du den Text anzeigen kannst, sind:

* unten
* links
* rechts
* oben
* Mitte
* Vollbild

Wenn die Nachricht zu lang für den Anzeigebereich ist, wird durch Drücken der **A**-Taste der restliche Text eingeblendet. Nachdem du die Nachricht gelesen hast, schließt ein Druck auf die Taste **A** die Textanzeige und das Spiel geht weiter.

```blocks
game.showLongText("Did you see the UFO enter land to your left? Turn on your shields and arm the phasors", DialogLayout.Bottom)
```

### Beispiel

Dieses Beispiel kombiniert die beiden Blöcke zur Textanzeige. Zuerst wird ein Splash-Bildschirm angezeigt und dann an jeder Bildschirmposition eine lange Textnachricht. Drücke die Taste **A**, um zur jeweils „nächsten" Nachricht zu gelangen.

```blocks
game.splash("Press (A) to begin testing text messages")
game.showLongText("This is text is at the bottom. Press the (A) button for the next message", DialogLayout.Bottom)
game.showLongText("This is text is at the left. Press the (A) button for the next message", DialogLayout.Left)
game.showLongText("This is text is at the right. Press the (A) button for the next message", DialogLayout.Right)
game.showLongText("This is text is at the top. Press the (A) button for the next message", DialogLayout.Top)
game.showLongText("This is text is in the center. Press the (A) button for the next message", DialogLayout.Center)
game.showLongText("This is text is full screen. Press the (A) button to end messages", DialogLayout.Full)
```
