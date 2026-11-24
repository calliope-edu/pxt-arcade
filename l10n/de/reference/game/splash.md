# Titel anzeigen

Zeige einen Titel und einen Untertitel auf dem Bildschirm an.

```sig
game.splash("")
```

Du kannst zu Beginn deines Spiels oder später im Spiel einen Titel auf dem Bildschirm einblenden. Für weitere Informationen kannst du optional einen Untertitel hinzufügen. Der Titeltext verschwindet, wenn du eine Taste drückst.

## Parameter

* **title**: eine [Zeichenkette](/types/string) mit deinem Titeltext.
* **subtitle**: eine [Zeichenkette](/types/string) als optionale zweite Zeile des Titeltexts.

## Beispiel #example

Zeige den Titelbildschirm des Spiels an, bevor das Menü angezeigt wird.

```blocks
game.splash("Magical Forest", "Find your way out!!!")
let choice = game.askForString("Choose game: (1) Thick Woods, (2) Valley Grove", 1)
```

## Siehe auch #seealso

[fragen](/reference/game/ask)