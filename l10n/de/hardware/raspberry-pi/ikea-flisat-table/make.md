# Machen

An IKEA FLISAT table is modified to accept the Arcade joysticks and buttons. Set up the table and get your tools and materials ready.

![A table with buttons](https://cdn.makecode.com/blob/0e944787e746526e0b21135ccbb8e0f7593c2bdc/static/hardware/raspberry-pi/ikea-flisat-table/buttons-installed.jpg)

## Drilling the table holes

https://youtu.be/ltzou5LEL8g

### Schritt 1

- \[ \] (Optional) Apply a layer of masking tape on the board to avoid scratches.
- [ ] Markiere mit einem Lineal und einem Bleistift den Mittelpunkt des Joysticks, **A** und **B** Schaltflächen. Stelle sicher, dass du mindestens 4" vom Rand bist, um zu vermeiden, dass die Boxen berührt werden. Lasse mindestens 2" Platz zwischen den Tastern.

![A table with masking tape and drill points](https://cdn.makecode.com/blob/35b6489796fc9aa5f9e54862ed483bc6678d8015/static/hardware/raspberry-pi/ikea-flisat-table/marked.jpg)

### Schritt 2

- [ ] Using an 1 1/8" bit, drill the 3 holes as marked.

![A table with 3 holes](https://cdn.makecode.com/blob/b29e16efa18d2fa4dfba10a91c3f324358d75f88/static/hardware/raspberry-pi/ikea-flisat-table/drilled.jpg)

### Schritt 3

- [ ] Position the joystick upside down and center the stick with the hole.
- [ ] Markiere die Ecklöcher des Joystick mit dem Bleistift.

![A table with 3 holes](https://cdn.makecode.com/blob/0136625820ed77f29f8ed482649abe3c4dfc8cf1/static/hardware/raspberry-pi/ikea-flisat-table/mask-joystick.jpg)

### Schritt 4

- [ ] Using a 5/16" bit, drill through each hole of the joystick.

![Ein Tisch mit 3 Löchern](https://cdn.makecode.com/blob/74bb8fc51a8da77da2f8ddca4b4ee913a619b956/static/hardware/raspberry-pi/ikea-flisat-table/holes.jpg)

#### ~ hint

Verwende einen **Senker-Bit** um die Löcher vorzubohren und Platz für den Schraubenkopf zu schaffen. So wird deine Arbeit viel professioneller aussehen!

![Ein Senker-Bit](https://cdn.makecode.com/blob/9411c06a7d586480eba9d1d0e1293e1fecd96266/static/hardware/raspberry-pi/ikea-flisat-table/countersink-bit.jpg)

#### ~

### Schritt 5

- [ ] Repeat steps 1 through 6 for the second player controls.

### Schritt 6

- [ ] Apply masking tape and mark 3 additional holes for the **RESET**, **RESTART**, **MENU** buttons.
- [ ] Drill the 3 holes.

## Preparing the boxes

https://youtu.be/_KtwX1xxTW8

### Schritt 1

- [ ] Remove the TROFAST boxes from the table.

### Schritt 2

- [ ] Using an 1 1/8" drill bit, drill in the middle of the long side of the table so that you can route the wires to the Raspberry-Pi.

### Schritt 3

- [ ] Drill another hole at the back to snake through the power supply cable.

## Installing the wire harnesses

https://youtu.be/Aq2tmcNKWnE

### Schritt 1

- [ ] Grab a player wire harness that you have previously [prepared](/hardware/raspberry-pi/wire-harness).
- [ ] Stick the mini-breadboard to the center of the board on the back side (hidden side). The minibreadboard has a sticky back.
- [ ] Mount both buttons on the board. The clicker can be removed in order to sleeve the button through the hole.
- [ ] Use 4 screws and bolts to secure the joystick to the table.
- [ ] Mount the system menu buttons if this harness has some.

### Schritt 2

- [ ] Repeat step 1 for the player 2 wire harness.

## Connecting to the Pi

https://youtu.be/VmLae3ztJ-8

### Schritt 1

- [ ] [Setup the Raspberry Pi](/hardware/raspberry-pi/setup) and connect it to a screen. It will show you where the pins should go.

### Schritt 2

- [ ] Connect a **male-to-female** jumper wire from the **ground** row to the first ground pin on the Pi. If the wire is too short, connect another **male-to-female** wire to double the length.

### Schritt 3

- [ ] Connect a **male-to-female** jumper wire from the first logic row to the first pin location for player 1.
- [ ] Try pressing the **A/B** buttons or moving the joystick until the configuration screen tells you which key is pressed. This allows you to identify which button the wire is connected to.
- [ ] Move the wire to the correct header on the raspberry Pi, following the instructions of the configuration game.

### Schritt 4

- [ ] Repeat step 3 for all other wires on the breadboard.

### Schritt 5

- [ ] Use electrical tape to secure all the headers added to the breadboard.


## Next steps

* [Setup the Raspberry Pi](/hardware/raspberry-pi/setup)
* [Close the table](/hardware/raspberry-pi/close)
