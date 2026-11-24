# Raspberry Pi Zero Setup

![An Arcade control panel made of cardboard](https://cdn.makecode.com/blob/727f5ea7eb40cb1b34d287d813d680740363965a/static/hardware/raspberry-pi/cardboard-control-panel/pisetup.jpg)

## Firwmare setup

### Install the firmware

Folgen Sie den [Firmware Installationsanleitungen](https://learn.adafruit.com/makecode-arcade-with-raspberry-pi-zero/firmware#firmware-3-1) um deine Raspberry Pi SD-Karte mit der MakeCode Arcade Firmware neu zu installieren. Stelle sicher, dass du die `arcade-cardboard.zip` Datei wählst.

### 4:3 VGA screens

If you are using a VGA screen via a HDMI->VGA adapter. Die folgenden Änderungen auf `config.txt` anwenden

    framebuffer_width=640
    framebuffer_height=480
    hdmi_mode=1

## Test the firmware

Now, let's try out the firmware.

- [ ] insert the SD card in the Raspberry Pi Zero
- [ ] connect the screen cable
- [ ] connect USB power cable. Double check which one you plug in!
- [ ] connect the USB data cable

Du solltest das Konfigurationsprogramm sehen:

![Ein Screenshot des Konfigurationsspiels](https://cdn.makecode.com/blob/797111727a187c4c2c69c2bfa37d7908f64d5830/static/hardware/raspberry-pi/cardboard-control-panel/configurator.png)

You can use this program on the Raspberry Pi panel to help make sure your wiring is correct.

## Verkabelung

Führe alle weiblichen Header-Stecker auf den Jumper Drähten von der Innenseite der Box durch das Loch für die Drähte.

![Ein Bündel von Jumperdrähten, die aus dem mittleren Loch auf dem Bedienfeld herausragen](https://cdn.makecode.com/blob/548165b27c326109d7a088dae9bbc405533cf290/static/hardware/raspberry-pi/cardboard-control-panel/cable-stick.jpg)

### Connect GROUND pins

Verwende das Testprogramm, um zu identifizieren, welcher Header auf dem Raspberry Pi Ground (-) ist. You should have **3 jumper wires** with **female header** connectors wrapped with electrical tape. These connect to the **GROUND** pins.

### Connect the all of the buttons except EXIT, MENU, RESET

Use the Test Program to determine which header the buttons will go to. You can connect them randomly then use the program to reorder them:

- [ ] connect a wire to a valid pin location
- [ ] press the buttons until you identity which button this wire connects to
- [ ] move the jumper wire to the correct jumper using the pinout map
- [ ] press the button again to test the correct mapping

<br/>
https://youtu.be/-P5I_BzoYdg

### Connect EXIT, MENU

Use the program to determine which header those buttons will go to.

- [ ] pressing **EXIT** exits the current game and goes back to the selection screen
- [ ] pressing **MENU** will pop up the game menu

Once you're done connecting all the wires, press the **A** an **B** buttons in this order, **A B A B A B**, to terminate the configuration program. You should now see the game selection menu. Next time you reboot your Pi, it will go straight to the menu and will not run the configuration program.

### Update or customize the menu

Wenn Du das Menü, das auf dem Pi angezeigt wird, anpassen möchtest:

* öffnen das Programm https://makecode.com/_CMgeUJ0Jp0KY
* folgen den Anweisungen um ein Projekt zu erstellen
* click `|Download|` and select the **Pi 0** hardware profile
* teste deine Menüänderungen im Simulator
* make sure that your project is named **.menu**
* **Compile** and drop the menu into your ARCADE drive after connecting your Pi to the computer
