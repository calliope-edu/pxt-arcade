// Calliope edition: pressing reset 3 times in a row starts a minimal Bluetooth pairing mode
// instead of the game, so the Calliope mini can be flashed from the iPad app. It works like
// CODAL's MICROBIT_TRIPLE_RESET_TO_PAIR (which Arcade does not get because it does not use
// the MicroBit class): the LED matrix shows the pattern, the device advertises as
// "Calliope mini [name]" and offers the Buttonless Secure DFU service (FE59). The app then
// switches into the Nordic DFU bootloader through that service and flashes the new program.
// The bootloader comes with the SoftDevice layout (DEVICE_BLE in pxt.json); the Bluetooth
// services are configured there as well (MICROBIT_BLE_*).
#include "pxt.h"

// Without the SoftDevice layout (DEVICE_BLE 0, e.g. with the jacdac-multiplayer extension)
// there is no bootloader to flash over Bluetooth, so the whole feature is left out.
#if DEVICE_BLE

// pairingble.cpp
void n3_ble_pairing_start();

#define N3_RESET_MAGIC 0x3b5e7c01
// resets count as "in a row" while the previous start is younger than this
#define N3_RESET_WINDOW_MS 500

// survives resets, but not power-on (section in CODAL's nrf52833-softdevice.ld)
struct N3ResetCounter {
    uint32_t magic;
    uint32_t count;
};
static N3ResetCounter n3ResetCounter __attribute__((section(".noinit")));

namespace n3boot {

// Calliope mini 3 LED matrix: row pins drive x (high = on), column pins drive y (low = on),
// pins from MicroBitIO.h in calliope-edu/codal-microbit-v2; in reverse order because x = 0,
// y = 0 is the opposite corner of what ledMatrixPositions there suggests (checked on a device)
static const uint8_t ledRows[5] = {19, 24, 15, 22, 21};      // P0.19 P0.24 P0.15 P0.22 P0.21
static const uint8_t ledCols[5] = {30, 32 + 5, 31, 11, 28}; // P0.30 P1.05 P0.31 P0.11 P0.28

static void ledPin(int pin, bool high) {
    NRF_GPIO_Type *port = pin >= 32 ? NRF_P1 : NRF_P0;
    uint32_t mask = 1u << (pin & 31);
    if (high)
        port->OUTSET = mask;
    else
        port->OUTCLR = mask;
    port->DIRSET = mask;
}

// The pattern of the pairing mode: one column per name letter, as in
// MicroBitBLEManager::showNameHistogram(); returns the lit rows (bit y) of each column x
static void namePattern(uint8_t columns[5]) {
    uint32_t n = NRF_FICR->DEVICEID[1];
    int ld = 1, d = 5;
    for (int i = 0; i < 5; i++) {
        int h = (n % d) / ld;
        n -= h;
        d *= 5;
        ld *= 5;
        uint8_t bits = 0;
        for (int j = 0; j <= h; j++)
            bits |= 1 << (4 - j);
        columns[4 - i] = bits;
    }
}

static void pairingMode() {
    n3_ble_pairing_start();

    uint8_t columns[5];
    namePattern(columns);

    // multiplex the matrix forever; the app resets the device into the bootloader
    for (;;) {
        for (int x = 0; x < 5; x++) {
            for (int r = 0; r < 5; r++)
                ledPin(ledRows[r], false);
            for (int y = 0; y < 5; y++)
                ledPin(ledCols[y], !(columns[x] & (1 << y)));
            ledPin(ledRows[x], true);
            fiber_sleep(2);
        }
    }
}

// Created before main(), i.e. before the display and the game start. initCodal() calls
// init() once the scheduler and the event bus run - in pairing mode it never returns, so
// the game does not start. CODAL calls periodicCallback() from the system tick, also while
// the runtime still waits for the GameKit display, so the window does not depend on the game.
class ResetCounter : public CodalComponent {
    bool pairing;

  public:
    ResetCounter() : pairing(false) {
        // RESETREAS stays 0 after power-on and is not cleared by Arcade, so any other value
        // means "reset since power-on" (pin, soft reset, watchdog) - as in MicroBit::init()
        bool powerOn = NRF_POWER->RESETREAS == 0;
        if (powerOn || n3ResetCounter.magic != N3_RESET_MAGIC) {
            n3ResetCounter.magic = N3_RESET_MAGIC;
            n3ResetCounter.count = 0;
        }
        if (!powerOn && ++n3ResetCounter.count >= 3) {
            n3ResetCounter.count = 0;
            pairing = true;
        }
        status |= DEVICE_COMPONENT_STATUS_SYSTEM_TICK;
    }

    virtual int init() override {
        if (pairing)
            pairingMode();
        return DEVICE_OK;
    }

    virtual void periodicCallback() override {
        if (current_time_ms() < N3_RESET_WINDOW_MS)
            return;
        n3ResetCounter.count = 0;
        status &= ~DEVICE_COMPONENT_STATUS_SYSTEM_TICK;
    }
};

static ResetCounter resetCounter;

} // namespace n3boot

#endif
