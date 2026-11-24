# Without Bluetooth (USB only)

Normally every game for the Calliope mini also contains what is needed to transfer the next program over **Bluetooth** with the Calliope mini app (press reset 3 times: the LED matrix shows the pairing pattern). That takes about 140 KB of the Calliope mini's memory.

![USB cable instead of Bluetooth](/static/libs/usb-only.png)

With this extension the game is built **without Bluetooth transfer**. The game gets about **140 KB more space**, but from now on it can only be transferred with the **USB cable** (download to the MINI drive or with "Connect Calliope mini").

## ~ hint

**Added automatically:** If a game is too big for Bluetooth, the editor adds this extension by itself and shows a notice. The download then works over USB as usual.

## ~

## Bluetooth again

Pressing reset 3 times no longer starts the pairing mode while such a game is on the Calliope mini. To transfer over Bluetooth again:

1. Make the game smaller, if it was too big.
2. Remove this extension: switch to **JavaScript**, open the **Explorer** below the simulator and click the trash can next to **usb-only**.
3. Transfer the game **once over USB**. After that, Bluetooth works again (press reset 3 times).

```package
usb-only
```
