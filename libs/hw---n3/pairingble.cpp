// Calliope edition: Bluetooth part of the pairing mode (pairing.cpp). A separate file because
// CODAL's micro:bit headers (MicroBitIO.h, MicroBitButton.h, ...) clash with pxt's platform.h.
#include "CodalConfig.h"

#if CONFIG_ENABLED(DEVICE_BLE)

#include "MicroBitBLEManager.h"
#include <string.h>
#include "MicroBitDevice.h"

// CODAL's advertised model name ("BBC micro:bit" in the micro:bit fork Arcade uses)
extern const char *MICROBIT_BLE_MODEL;

using namespace codal;

// MicroBitBLEManager needs a key/value store, but uses it only for partial flashing (off
// here); still, creating one writes its header to flash. Keep it in RAM instead of CODAL's
// page at 0x74000, which holds the Arcade settings (MICROBIT_TOP_OF_FLASH in pxt.json). The
// game does not run in pairing mode, so the 4 KB come from the heap only then.
class RamFlash : public NVMController {
    static const uint32_t SIZE = 4096;
    uint32_t *mem;

  public:
    RamFlash() : mem(new uint32_t[SIZE / 4]) { memset(mem, 0xff, SIZE); }
    virtual uint32_t getFlashStart() { return (uint32_t)mem; }
    virtual uint32_t getFlashEnd() { return (uint32_t)mem + SIZE; }
    virtual uint32_t getPageSize() { return SIZE; }
    virtual uint32_t getFlashSize() { return SIZE; }
    // sizes in words, addresses as returned by getFlashStart()
    virtual int read(uint32_t *dest, uint32_t source, uint32_t size) {
        memcpy(dest, (void *)source, size * 4);
        return DEVICE_OK;
    }
    virtual int write(uint32_t dest, uint32_t *source, uint32_t size) {
        memcpy((void *)dest, source, size * 4);
        return DEVICE_OK;
    }
    virtual int erase(uint32_t page) {
        memset((void *)page, 0xff, SIZE);
        return DEVICE_OK;
    }
};

// Advertise as "Calliope mini [name]" with the services configured in pxt.json (MICROBIT_BLE_*).
// "Just works" pairing with bonding (MICROBIT_BLE_SECURITY_MODE 2) as on Calliope programs: the
// SDK always builds the bonded Buttonless DFU variant (its NRF_DFU_BLE_BUTTONLESS_SUPPORTS_BONDS
// does not see the CODAL config), which hands the bond to the bootloader, and the iPad app uses
// that characteristic. Bonds go to the peer manager's FDS pages (0x75000-0x77000).
void n3_ble_pairing_start() {
    MICROBIT_BLE_MODEL = "Calliope mini";
    static RamFlash flash;
    static MicroBitStorage storage(flash, 0);
    static MicroBitBLEManager ble(storage);
    ble.init(ManagedString(microbit_friendly_name()), ManagedString(""),
             *EventModel::defaultEventBus, storage, true);
}

#endif
