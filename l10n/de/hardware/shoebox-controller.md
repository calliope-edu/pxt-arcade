# MakeCode Arcade Shoebox Controller

Want to create your very own DIY Arcade Video Game experience with fun joysticks and buttons? It’s easier than you think! Follow these instructions to use a shoebox as your controller for Arcade games that you play on a computer. Note that these instructions will also work if you want to create a full Arcade cabinet, but instead of using a [Raspberry Pi](https://arcade.makecode.com/hardware/raspberry-pi/cardboard-control-panel), use a computer to power it.

![Shoebox controller connected](https://cdn.makecode.com/blob/8f8f86a9c141dbc8e50ace9c1401c2341926e656/static/hardware/shoebox-controller/shoebox.jpg)

## Materialien

* Computer – 1 USB port (or 2 USB ports for 2-player games), internet connection
* Shoebox
* 2nd Shoebox (optional) – if you want to be able to support 2-player games
* 1 joystick, 4 buttons (or 2 joysticks, 6 buttons for 2 shoeboxes) with JST cables and USB – note that you usually order these in an Arcade Game Kit. We used the [Hikig 2-Player LED Arcade DIY Kit for USB](https://www.amazon.com/dp/B07JFXQSM5) which is $45 on Amazon.
* Pen knife
* 4 small zip ties (8 for 2 shoeboxes)
* Pen or Pencil
* Decorating materials – paint, markers, glitter, stickers, etc.

![Project materials](https://cdn.makecode.com/blob/ba57efb894a02979c55dcb96f014cb648ce665ad/static/hardware/shoebox-controller/materials.jpg)

## Anleitung

### Map out the Controls

* With a Pen or Pencil, draw out where you would like to place the Joystick and buttons on the top of the shoebox.

![Placement of the controls](https://cdn.makecode.com/blob/800d0d784e1ea3ddfdf09dd7c60adcdafa1c96fb/static/hardware/shoebox-controller/placing-controls.jpg)

* You will need space for:
> * Joystick
> * **A** button
> * **B** button
> * **Menu** button
> * **Reset** button

* Here is how we mapped out our controller panel:

![Layout of player 1 controls](https://cdn.makecode.com/blob/1b79916bea8d69ff1c4e1729b929dbd3e1013c40/static/hardware/shoebox-controller/p1-controller.png)

### Determine orientation of your Joystick

* Connect the JST cable between the Joystick and the USB encoder board – you may want to refer to the documentation in your kit to figure out which port to connect to. For our kit, there was only 1 port the right size for the joystick cable.

![Testing joystick wiring](https://cdn.makecode.com/blob/a1f03dc28b56ad6c66cba77b166e201c51fb80bd/static/hardware/shoebox-controller/testing-joystick1.jpg)

* Attach the USB cable between the encoder board and your computer.
* Open up a MakeCode Arcade game in the browser – i.e. https://makecode.com/_XsCCsy5L1eXr.
* Use the Joystick to move the player around the screen and mark the correct directions on the Joystick.

![Testing joystick in game](https://cdn.makecode.com/blob/eb34db585378d9eab34900048cca1070b09dac44/static/hardware/shoebox-controller/testing-joystick2.jpg)

![Orientation of the joystick](https://cdn.makecode.com/blob/58c1bf5210184883e278fb6527c1f45e9f78d46b/static/hardware/shoebox-controller/joystick-orientation.jpg)

## Install Joystick and buttons on shoebox

* Disconnect the Joystick from the cable and make sure the black plastic washer and Joystick knob handle are removed.
* Using the pen knife cut out a small hole in the top of the shoebox to fit the Joystick handle through.

![Cut out the handle hole for joystick](https://cdn.makecode.com/blob/12b2f373ffdf87e959dd332dcbeeaac0ca67e2e5/static/hardware/shoebox-controller/joystick-handle-hole.jpg)

* From inside the box, push the Joystick handle through the hole.

![Insert the handle of the joystick](https://cdn.makecode.com/blob/415b0520dc876716e53146713130db1a6cb8a8d8/static/hardware/shoebox-controller/insert-joystick-handle.jpg)

* From outside the box, drop the large washer and twist the top ball onto the Joystick handle threads.

![Joystick mounted in the shoebox](https://cdn.makecode.com/blob/aa0228bd97a65ac30234bae86bc74386be436843/static/hardware/shoebox-controller/joystick-installed.jpg)

* On the inside of the box, use the pen knife to cut 2 holes in each of the 4 corners of the Joystick mount plate – one through the plate opening, and one on the outside edge of the plate.
* Make sure the orientation of the Joystick is correct (up is at the top).
* Thread a zip tie through each of these holes securing the Joystick plate to the top of the box.

![Zip ties securing the joystick](https://cdn.makecode.com/blob/89fe3de78eb1d3592a5d8d722e704778f95520f0/static/hardware/shoebox-controller/joystick-zip-ties.jpg)

* Using the pen knife, cut holes for the buttons in the top of the box – make sure you don’t cut the holes too big so the buttons don’t fall through.

![Cut holes for the buttons](https://cdn.makecode.com/blob/faf1fe5ce04f744f188cfb8a86948678737f31e7/static/hardware/shoebox-controller/cutting-button-holes.jpg)

* Push the buttons through the top of the box.

![Install the buttons](https://cdn.makecode.com/blob/8e229ec7c4eabb4e63a4e0c704f43b020368899d/static/hardware/shoebox-controller/install-button.jpg)

* Then from the inside of the box, turn the black nuts onto the threads at the bottom of the buttons to secure them.

![Attach the buttons with nuts](https://cdn.makecode.com/blob/9c37a683c49e187ed0cc73adf47cde1b2b9efa47/static/hardware/shoebox-controller/button-nuts.jpg)

## Install USB Encoder Board in shoebox

* Using the pen knife, make a small hole in the front side of the Shoebox and thread the USB cable through it.

![Make a hole for the USB cable](https://cdn.makecode.com/blob/d86252c3977490855611e26b7e30862da2929a52/static/hardware/shoebox-controller/usb-hole.jpg)

* Place the USB encoder board inside the shoebox.
* Connect the USB encoder board to the USB cable.

![Encoder board in the shoebox](https://cdn.makecode.com/blob/053e690b49e19efcc28a41c7516e49f020ba4b1c/static/hardware/shoebox-controller/installing-encoder-board.jpg)

## Wire the Joystick and buttons to the USB Encoder Board

Different kits may have different ports, so you should check the wiring diagram that comes with your kit. We used the following connection diagram for the Hikig 2-Player Arcade Kit:

![Encoder board pin diagram](https://cdn.makecode.com/blob/7bd461bf9d14ae6051843c29384ac9c20a831740/static/hardware/shoebox-controller/usb-encoder-board.png)

* Connect the Joystick JST cable between the Joystick and the USB encoder board.

![Wiring the joystick](https://cdn.makecode.com/blob/48aa582e82d87d9c41fd7ba45b87e2b05df2be80/static/hardware/shoebox-controller/wiring-joystick.jpg)

* Connect a JST cable between button **A** and the first pin (K1 in our kit) on the USB encoder board.

![Wiring button A](https://cdn.makecode.com/blob/4ef8ccb2b98b45f92c109cd272328e045daee1df/static/hardware/shoebox-controller/wiring-a.jpg)

* Connect a JST cable between button **B** and the second pin (K2 in our kit) on the USB encoder board.

![Wiring button B](https://cdn.makecode.com/blob/ac6d5d6ef55fe33c13f6415962f4f93157d6415a/static/hardware/shoebox-controller/wiring-b.jpg)

* Connect a JST cable between the **Reset** button and the K11 pin (2nd port from the end in our kit) on the USB encoder board.

![Wiring Reset button](https://cdn.makecode.com/blob/8fd0ec8fcbe394b92ece018d8eeb62ada4243f7c/static/hardware/shoebox-controller/wiring-reset.jpg)

* Connect a JST cable between the **Menu** button and the Start pin (3rd port from the end in our kit) on the USB encoder board.

![Wiring Menu button](https://cdn.makecode.com/blob/1f03e3c4ff40612d642088ea0189a26e41f07e52/static/hardware/shoebox-controller/wiring-menu.jpg)

## Test

* Connect the USB cable to your computer and open up a MakeCode Arcade game in the browser – i.e. https://makecode.com/_XsCCsy5L1eXr.
* Make sure the Joystick and the buttons all work as expected. If not, troubleshoot by attaching different wires to different pins on the USB encoder board.

![Testing the controller](https://cdn.makecode.com/blob/590f4679d1463fb508f10fd4d5a08f639cc965bd/static/hardware/shoebox-controller/test.gif)

## Decorate!

* Use Paint, Markers, Glitter, Tin Foil, Stickers or anything else to really customize your Arcade controller and make it your own!

## Player Two Shoebox Controller (optional):

If you want to use 2 Arcade controllers for 2-player games, create a second shoebox controller. You will follow the same directions as above for the single player controller, but don't include a **Reset** or **Menu** button. Connect both shoebox controller USB cables to your computer and open a 2-Player MakeCode Arcade game in the browser. Note that whichever controller is connected to the computer first will be the Player 1 controller.

![Layout of player 2 controls](https://cdn.makecode.com/blob/c0a51171aacbd5f7cb31c6c61dd93ec50c5b43a9/static/hardware/shoebox-controller/p2-controller.png)
