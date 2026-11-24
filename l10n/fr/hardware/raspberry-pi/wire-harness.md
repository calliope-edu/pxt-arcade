
# Wire Harness

This guide describes how to build a wire harness to connect arcade buttons and joysticks to a Raspberry Pi.

![A wire harness](https://cdn.makecode.com/blob/4e6e4550f96124733c8c24d532c4fd16ecedba39/static/hardware/raspberry-pi/wire-harness/gallery.jpg)

## Matériaux

* **Arcade button kits** for 2 players, containing buttons and joysticks
* **Male-to-male** jumper cables
* **Male-to-female** jumper wires
* 2 **mini breadboard**
* Electrical insulation tape

## 5-Pin Joystick "Sanwa-style"

Let's start by wiring a "Sanwa-style" joystick with a 5-pin JST connector and two buttons. This is a typical setup for a player in MakeCode Arcade.

The idea of the harness is to use the mini breadboard as a centralized wiring point which can then be used to connect to the Raspberry Pi Zero. The mini breadboard allows to connect ground wires without having to strip and solder cables. Let's get started!

https://youtu.be/nb6OEdccT6w

### Marche à suivre (1ᵉ étape)

- [ ] Connect 5 male jumper wires into the 5-pin JST connector of the joystick.
- [ ] Use electrical tape to secure the cables.

![A button is connected](https://cdn.makecode.com/blob/47bbade56f2dc2f31262a136df0d5e6f43868a9c/static/hardware/raspberry-pi/wire-harness/joystick-tape.jpg)

### Marche à suivre (2ᵉ étape)

- [ ] Identify the ground wire in the JST connector. Hold the joystick with the bottom facing you and the JST connector on the upper right, the ground wire is the upper wire.

![Finding ground](https://cdn.makecode.com/blob/375b87cbcf9ac06bd776be181349a231aba3c657/static/hardware/raspberry-pi/wire-harness/5pin.jpg)

- [ ] Connect the other 4 jumper wires to the other side of the breadboard. Make sure to place them each in their own row.

![A button is connected](https://cdn.makecode.com/blob/71605d2788b5d8958134276a5436d692d9fc37fd/static/hardware/raspberry-pi/wire-harness/joystick-breadboard.jpg)

## A+B buttons

### Marche à suivre (1ᵉ étape)

- [ ] Connect 2 jumper wires in to the 2-pin JST connector of a button.
- [ ] Use electrical tape to secure the cables.
- [ ] Connect one of jumper wires to the same row as the ground wire on the mini bread board.
- [ ] Connect the other jumper wire next to the 4 jumper wires, on its own row.

![A button is connected](https://cdn.makecode.com/blob/6d04c1ed4f96b89bffbc0aeb83b936f2cf08ce3b/static/hardware/raspberry-pi/wire-harness/button-breadboard.jpg)

### Marche à suivre (2ᵉ étape)

- [ ] Repeat steps 4 through 6 for the other button.

![A button is connected](https://cdn.makecode.com/blob/bf240c80d12f19705bf3f47f0faed255a8546bf6/static/hardware/raspberry-pi/wire-harness/buttons-breadboard.jpg)


### Marche à suivre (3ᵉ étape)

- [ ] Insert 6 **male-to-female** jumper wires in parallel to the logic wires.
- [ ] Insert 1 **male-to-female** jumper wire on the ground row.
- [ ] Use electrical tape around the two group of wires to secure them together.

![Wires with tape around them on a mini breadboard](https://cdn.makecode.com/blob/56aeddc66fd9496f871f0d41deda9301b4eaa4af/static/hardware/raspberry-pi/wire-harness/breadboard-tape.jpg)

That harness is ready! You can repeat the steps for player 2.

## Menu buttons

There are 3 "system buttons" in arcade: `RESET`, `RESTART` and `MENU`. You can create a wire harness for those buttons and use the other side of the mini breadboard.

https://youtu.be/uCF_dTbmA0I

### Marche à suivre (1ᵉ étape)

- [ ] Connect 2 jumper wires in to the 2-pin JST connector of a button.
- [ ] Use electrical tape to secure the cables.
- [ ] Connect one of jumper wire to the same row as the ground wire on the mini bread board.
- [ ] Connect the other jumper wire next to the 4 jumper wires, on its own row.

### Marche à suivre (2ᵉ étape)

- [ ] Repeat step 1 for the two other buttons

### Marche à suivre (3ᵉ étape)

- [ ] Use electrical tape around the two group of wires to secure them together.

![Wires with tape around them on a mini breadboard](https://cdn.makecode.com/blob/958690cd415f1cc4c54a0c292fe5ca78a592f8cd/static/hardware/raspberry-pi/wire-harness/breadboard-menu-harness.jpg)


It's ready!

![A wire harness with 5 buttons and a joystick](https://cdn.makecode.com/blob/67430f5181e5c3135cdd134403bedd258b27cf16/static/hardware/raspberry-pi/wire-harness/menu-harness.jpg)
