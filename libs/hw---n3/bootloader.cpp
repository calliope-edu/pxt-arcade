// Calliope edition: pressing reset 3 times in a row starts the Nordic Secure DFU bootloader,
// so the Calliope mini can be flashed over Bluetooth (iPad app). Same idea as CODAL's
// MICROBIT_TRIPLE_RESET_TO_PAIR, which Arcade does not get because it does not use the
// MicroBit class. The bootloader comes with the SoftDevice layout (DEVICE_BLE in pxt.json).
#include "pxt.h"

// GPREGRET value that makes the Nordic bootloader stay in DFU mode (BOOTLOADER_DFU_START)
#define N3_BOOTLOADER_DFU_START 0xB1
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

// Created before main(), i.e. before the display and the game start. CODAL calls
// periodicCallback() from the system tick as soon as its event bus is up (even while the
// runtime still waits for the GameKit display), so the window does not depend on the game.
class ResetCounter : public CodalComponent {
  public:
    ResetCounter() {
        // RESETREAS stays 0 after power-on and is not cleared by Arcade, so any other value
        // means "reset since power-on" (pin, soft reset, watchdog) - as in MicroBit::init()
        bool powerOn = NRF_POWER->RESETREAS == 0;
        if (powerOn || n3ResetCounter.magic != N3_RESET_MAGIC) {
            n3ResetCounter.magic = N3_RESET_MAGIC;
            n3ResetCounter.count = 0;
        }
        if (!powerOn && ++n3ResetCounter.count >= 3) {
            n3ResetCounter.count = 0;
            NRF_POWER->GPREGRET = N3_BOOTLOADER_DFU_START;
            NVIC_SystemReset();
        }
        status |= DEVICE_COMPONENT_STATUS_SYSTEM_TICK;
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
