# Jacdac multiplayer mode

Play with two players: connect two Calliope mini with GameKit using a **Jacdac cable**. One Calliope mini runs the game, the second one becomes the controller for **player 2**.

![Jacdac cable](/static/libs/jacdac-multiplayer.png)

## How it works

1. Download the **same program** to both Calliope mini. The extension checks this: if a different game is running on the other Calliope mini, the message **"Anderes Spiel erkannt"** ("Other game detected") briefly appears instead of the question about joining.
2. Connect the two devices through their **Jacdac sockets** with a Jacdac cable.
3. Both displays show the question **"Calliope mini erkannt! Mitspielen?"** ("Calliope mini detected! Join the game?").
4. On **one** of the two devices, press **A = Ja** (A = Yes). This device becomes the controller and shows **"Verbunden – Du bist Spieler 2"** ("Connected – You are player 2").
5. The game keeps running on the other device. There you control **player 1**, and the controller controls **player 2**.

With **B = Nein** (B = No), each device keeps playing its own game.

## ~ hint

**Only one screen shows the game.** The game runs on the device where nobody pressed "Ja". The controller only shows whether it is connected – unless you use the block **mirror screen to player 2** (see below).

## ~

## Player 2 in your program

The extension has no blocks of its own. You program player 2 with the normal **Controller** blocks for **player 2**: everything pressed on the controller arrives in the game as a button of player 2.

```cards
controller.player2.moveSprite(null)
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {})
controller.player2.isPressed(ControllerButton.A)
controller.player2.onEvent(ControllerEvent.Connected, function () {})
```

The direction buttons as well as **A** and **B** are sent. The **Menu** button stays on the controller.

## Example: two characters #example

Player 1 controls the red character, player 2 on the second Calliope mini controls the green one. With **A**, each character says "Hallo!". As soon as the controller is connected, a message appears.

```blocks
let rot = sprites.create(img`
    . . 2 2 2 2 . .
    . 2 2 2 2 2 2 .
    2 2 1 2 2 1 2 2
    2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2
    2 2 1 1 1 1 2 2
    . 2 2 2 2 2 2 .
    . . 2 2 2 2 . .
`, SpriteKind.Player)
let gruen = sprites.create(img`
    . . 7 7 7 7 . .
    . 7 7 7 7 7 7 .
    7 7 1 7 7 1 7 7
    7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7
    7 7 1 1 1 1 7 7
    . 7 7 7 7 7 7 .
    . . 7 7 7 7 . .
`, SpriteKind.Player)
rot.setPosition(50, 60)
gruen.setPosition(110, 60)
rot.setStayInScreen(true)
gruen.setStayInScreen(true)
controller.moveSprite(rot)
controller.player2.moveSprite(gruen)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    rot.sayText("Hallo!", 500)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    gruen.sayText("Hallo!", 500)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    game.splash("Spieler 2 ist da!")
})
```

## Example: when player 2 pulls the cable

If no more data comes from the controller, the game releases all buttons of player 2 after a short time so that their character stops. Only after about 6 seconds without a connection does the game report that player 2 is no longer connected – this way short dropouts on the cable do not cause a disconnect.

```blocks
controller.player2.onEvent(ControllerEvent.Disconnected, function () {
    game.splash("Spieler 2 ist weg", "Kabel prüfen!")
})
```

The controller shows **"Verbindung getrennt"** ("Connection lost"). With **B** it restarts and returns to its own game.

## ~ hint

**Tips**

* **Power:** Each Calliope mini needs its own power supply (USB or battery). The Jacdac cable does not power a second GameKit.
* **Two players:** Multiplayer mode connects exactly **two** Calliope mini.
* **Reconnect:** If "Nein" was chosen, restart both Calliope mini so the question appears again.
* **Cable:** Both Jacdac sockets of the Calliope mini work the same – you can use either one.
* **Don't mix:** Don't use this extension and the normal **Jacdac** extension in the same project.

## ~

## Mirror screen to player 2

With this block (category **Controller**, group **Multiplayer**), the Calliope mini of player 2 shows the game too. Put it in **on start**:

```blocks
jacdac.multiplayer.mirrorScreen()
```

The host sends its picture over the Jacdac cable, but only the parts that have changed since last time. In theory, about **4 to 5 completely new pictures per second** fit through the cable. If only a little changes (a character walks across a still background), the picture for player 2 is much smoother. In games with a scrolling background or many moving parts, the second screen stutters. The host only sends as much as it can while the buttons of player 2 still get through right away.

**Show frame rate:** Press the **MENU** button on player 2's Calliope mini. At the top you see the packets received per second and how many complete pictures that would make. Press **MENU** again to hide it.

## For advanced users: the game on both screens

There is a smoother way than mirroring: in **JavaScript** you can let the second Calliope mini show the playing field too. The host regularly sends a small **game state** (for example positions and points, up to about 200 bytes), and the guest draws its own view from it.

```typescript-ignore
// Host: etwa 10-20 mal pro Sekunde den Zustand schicken
const state = Buffer.create(4)
state[0] = info.score()
jacdac.multiplayer.sendGameState(state)

// Gast: Zustand empfangen ...
let punkte = 0
jacdac.multiplayer.onGameState(function (data) {
    punkte = data[0]
})
// ... und statt "Verbunden" jedes Bild selbst zeichnen
jacdac.multiplayer.setGuestRenderer(function (target) {
    target.fill(9)
    target.printCenter("Punkte: " + punkte, 50, 1)
})
```

`jacdac.multiplayer.isGuest()` tells you whether your device is currently the guest. All game logic always runs on the host; the guest still only sends its buttons.

## Technical background

Jacdac is a bus over a single data wire (on the Calliope mini V3 at pin **P12**). Every device announces itself there regularly. The controller sends its complete button state every 100 milliseconds and also right away whenever something changes, including a counter for each button press. This way even a very short press is not lost if a data packet gets swallowed on the cable.

## See also

[Controller](/reference/controller),
[Jacdac](https://jacdac.github.io/jacdac-docs/)

```package
jacdac-multiplayer
```
