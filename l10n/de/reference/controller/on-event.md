# wenn Ereignis

Führe Code aus, wenn ein Spieler sich verbindet oder die Verbindung trennt.

```sig
controller.player2.onEvent(ControllerEvent.Connected, function () {})
```

## Parameter

* **event**: die Verbindungsaktion, auf die gewartet wird. Die Verbindungsaktionen (Ereignisse) sind:
> * ``connected``: Spieler ist verbunden
> * ``disconnected``: Spieler ist nicht mehr verbunden
* **handler**: der Code, der ausgeführt werden soll, wenn ein Verbindungsereignis eines Spielers eintritt

## Beispiel #example

Lass das gelbe Kästchen eine Nachricht anzeigen, wenn sich Spieler 2 verbindet.

```blocks
let yellowBox = sprites.create(img`
e e e e e e
e 1 1 1 1 e
e 1 6 6 1 e
e 1 6 6 1 e
e 1 1 1 1 e
e e e e e e
`)
controller.player2.onEvent(ControllerEvent.Connected, function () {
    yellowBox.say("Player2 is on!")
})
```

## Siehe auch #seealso

[wenn Tasten-Ereignis](/reference/controller/on-button-event)
