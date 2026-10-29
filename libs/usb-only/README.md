# usb-only

Calliope edition: builds the Calliope mini runtime without the SoftDevice, the DFU bootloader
and the Bluetooth pairing mode (`DEVICE_BLE: 0`). The game then has the whole flash (about
144 KB more), but can only be transferred over USB.

Shown as "Without Bluetooth (USB only)" in the extensions dialog (name and description are
localized by `localizeExtensionCards` in `editor/extension.ts`, help: `docs/reference/usb-only.md`).
The editor also adds it by itself when a game is too big for the Bluetooth layout
(`showProgramTooLargeErrorAsync` in `editor/extension.ts`). Remove it from the project to use
Bluetooth again.
