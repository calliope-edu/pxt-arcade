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

For controlling, the extension needs no blocks of its own (its blocks for the second screen are further below). You program player 2 with the normal **Controller** blocks for **player 2**: everything pressed on the controller arrives in the game as a button of player 2.

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

The game still runs only on the host. The second Calliope mini shows the mirrored picture and is the controller at the same time: its buttons control **player 2** in the game, just like without mirroring. So you program player 2 as above with the Controller blocks for **player 2**.

**Show frame rate:** Press the **MENU** button on player 2's Calliope mini. At the top you see the packets received per second and how many complete pictures that would make. Press **MENU** again to hide it.

## Send playfield to player 2

Smoother than mirroring: with this block (category **Controller**, group **Multiplayer**) the host does not send the finished picture but what is on the playfield. Put it in **on start**:

```blocks
jacdac.multiplayer.sendPlayfield()
```

Player 2's Calliope mini rebuilds sprites, tilemap, camera, background, **score and lives of player 1** and speech bubbles from it and draws them itself. Per frame only positions go over the cable; each image and tile is sent just once. That is why the picture stays smooth even in scrolling games. The game still runs only on the host, and player 2's device controls **player 2** as always.

When the host shows something other than the playfield (e.g. **game.splash**, a dialog or "Game Over"), that picture is mirrored as with the mirror block.

## ~ hint

**Not transferred:** particle effects, pictures the game draws on the screen itself, background layers (parallax) and the score and lives of **player 2**. For player 2, send the score with the value blocks (see below).

## ~

## Send values to player 2

With these blocks you build player 2's view yourself. The host sends named numbers, e.g. the position of the ball. When player 2's device joins, it creates its own sprites and moves them to the received values. A value is sent right away when it changes and repeated regularly.

```cards
jacdac.multiplayer.sendValue("x", 0)
jacdac.multiplayer.onValue("x", function (value) {})
jacdac.multiplayer.receivedValue("x")
jacdac.multiplayer.onStartAsGuest(function () {})
jacdac.multiplayer.isGuest()
```

As **the same program** runs on both Calliope mini, both sides are in the same project: **on start as player 2** only runs on player 2's device, and **is player 2** tells the two devices apart in loops. The "Connected – you are player 2" screen does not appear once you use **on start as player 2**.

## Example: ball on both screens

```blocks
let ball2: Sprite = null
let ball = sprites.create(img`
    . 5 5 .
    5 5 5 5
    5 5 5 5
    . 5 5 .
`, SpriteKind.Projectile)
ball.setVelocity(50, 35)
ball.setBounceOnWall(true)
game.onUpdate(function () {
    jacdac.multiplayer.sendValue("x", ball.x)
    jacdac.multiplayer.sendValue("y", ball.y)
    jacdac.multiplayer.sendValue("score 2", info.player2.score())
})
jacdac.multiplayer.onStartAsGuest(function () {
    ball2 = sprites.create(img`
        . 5 5 .
        5 5 5 5
        5 5 5 5
        . 5 5 .
    `, SpriteKind.Projectile)
})
jacdac.multiplayer.onValue("score 2", function (value) {
    info.player2.setScore(value)
})
game.onUpdate(function () {
    if (jacdac.multiplayer.isGuest() && ball2) {
        ball2.setPosition(jacdac.multiplayer.receivedValue("x"), jacdac.multiplayer.receivedValue("y"))
    }
})
```

The value "score 2" also shows how to transfer player 2's score with **send playfield to player 2**: the value blocks work in addition to the playfield.

## ~ hint

**Memory:** multiplayer games with sprites, collisions and score are usually too big for transfer over Bluetooth. The editor then builds them for transfer with the USB cable automatically (see [Without Bluetooth](/reference/usb-only)). **Send playfield to player 2** needs about 18 KB, the value blocks about 5 KB.

## ~

## For advanced users: the game on both screens

What the value blocks do also works in **JavaScript** with a data packet of your own: the host regularly sends a small **game state** (for example positions and points, up to about 200 bytes), and the guest draws its own view from it.

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
