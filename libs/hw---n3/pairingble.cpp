// Calliope edition: Bluetooth part of the pairing mode (pairing.cpp). A separate file because
// CODAL's micro:bit headers (MicroBitIO.h, MicroBitButton.h, ...) clash with pxt's platform.h.
#include "MicroBitBLEManager.h"
#include "NRF52FlashManager.h"
#include "MicroBitDevice.h"

// CODAL's advertised model name ("BBC micro:bit" in the micro:bit fork Arcade uses)
extern const char *MICROBIT_BLE_MODEL;

using namespace codal;

// Advertise as "Calliope mini [name]" with the services configured in pxt.json (MICROBIT_BLE_*).
void n3_ble_pairing_start() {
    MICROBIT_BLE_MODEL = "Calliope mini";
    // CODAL's key/value page (not written here: no bonding, no partial flashing)
    static NRF52FlashManager flash(MICROBIT_STORAGE_PAGE, 1, MICROBIT_CODEPAGESIZE);
    static MicroBitStorage storage(flash, 0);
    static MicroBitBLEManager ble(storage);
    ble.init(ManagedString(microbit_friendly_name()), ManagedString(""),
             *EventModel::defaultEventBus, storage, false);
}
