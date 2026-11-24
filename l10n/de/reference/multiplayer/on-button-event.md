# on Button Event

Führe Code aus, wenn eine Taste am Controller eines Spielers gedrückt oder losgelassen wird.

```sig
mp.onButtonEvent(mp.MultiplayerButton.B, ControllerButtonEvent.Pressed, function (player) {})
```

Du kannst eine Tastenaktion am Controller eines Spielers erkennen und als Reaktion Code ausführen. Dazu wählst du eine Taste und eine Ereignisart aus.

## Parameter

* **button**: die Taste, deren Aktion erkannt werden soll:
>* Taste `A`
>* Taste `B`
>* Pfeiltaste `up` (oben)
>* Pfeiltaste `down` (unten)
> * Pfeiltaste `left` (links)
> * Pfeiltaste `right` (rechts)
* **event**: das Tastenereignis, das erkannt werden soll:
> * `pressed`: eine Taste oder Pfeiltaste wird gedrückt
> * `released`: eine Taste oder Pfeiltaste wird losgelassen
> * `repeat`: eine Taste oder Pfeiltaste wird mehrmals schnell gedrückt
* **handler**: der Code, der ausgeführt wird, wenn das Tastenereignis eintritt.

## Beispiel #example

```blocks
mp.onButtonEvent(mp.MultiplayerButton.A, ControllerButtonEvent.Pressed, function (player2) {
    mp.getPlayerSprite(player2).sayText("I'm pressed!", 500, false)
})
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f e e e e e f . . . . . 
    . . . f d d d d d d e f . . . . 
    . . f d f f d d f f d f f . . . 
    . c d d d e e d d d d e d f . . 
    . c d c d d d d c d d e f f . . 
    . c d d c c c c d d d e f f f f 
    . . c d d d d d d d e f f b d f 
    . . . c d d d d e e f f f d d f 
    . . . . f f f e e f e e e f f f 
    . . . . f e e e e e e e f f f . 
    . . . f e e e e e e f f f e f . 
    . . f f e e e e f f f f f e f . 
    . f b d f e e f b b f f f e f . 
    . f d d f f f f d d b f f f f . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.Player))
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setBounceOnWall(true)
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).setVelocity(40, -30)
```
## Siehe auch #seealso

[ist Taste gedrückt](/reference/multiplayer/is-button-pressed),
[mit Tasten bewegen](/reference/multiplayer/move-with-buttons)

```package
multiplayer
```