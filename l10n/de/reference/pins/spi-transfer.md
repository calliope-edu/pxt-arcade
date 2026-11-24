# spi Transfer

Sende einen Befehl über eine SPI-Verbindung und empfange eine Antwort.

```sig
pins.spiTransfer(null, null)
```

Befehlsdaten im **Buffer** werden an ein SPI-Slave-Gerät gesendet. Das Format der Daten im Befehlspuffer hängt davon ab, wie das angeschlossene Gerät sie lesen möchte.

## Parameter

* **command**: ein **Buffer** mit den Befehlsdaten, die an das Slave-Gerät gesendet werden.
* **response**: ein **Buffer**, der die Daten der Antwort auf **command** empfängt.

## Beispiel
Sende Text, der auf einem alphanumerischen LCD-Display angezeigt werden soll. Das Display ist über SPI angeschlossen und der Anzeigebefehl ist `2`. Der für das Display formatierte Befehlspuffer enthält sowohl den Befehl als auch den Text ``Hello!``.


```typescript
let resBuff = pins.createBuffer(2)
let cmdBuff = pins.createBuffer(16)
let message = "Hello!"
cmdBuff.setUint8(0, 2)
for (let i = 0; i <= message.length - 1; i++) {
    cmdBuff.setUint8(i+1, message.charCodeAt(i))
}
pins.spiTransfer(cmdBuff, resBuff)
```

## Siehe auch

[spi write](/reference/pins/spi-write)
