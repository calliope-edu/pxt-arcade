# usb-only

Calliope edition: builds the Calliope mini runtime without the SoftDevice, the DFU bootloader
and the Bluetooth pairing mode (`DEVICE_BLE: 0`), as before. The game then has the whole flash
(about 144 KB more), but can only be transferred over USB.

The editor adds this extension by itself when a game is too big for the Bluetooth layout
(`showProgramTooLargeErrorAsync` in `editor/extension.ts`). Remove it from the project
(`pxt.json`) to try Bluetooth again after making the game smaller.
