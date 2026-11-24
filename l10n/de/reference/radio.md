# Bit Radio

Sende und empfange Daten mit dem Bit-Radio-Protokoll.

### ~ hint

#### Bit Radio

Das Bit-Radio-Protokoll wurde ursprünglich von der [Lancaster University](https://github.com/lancaster-university/microbit-dal/commit/d9d2343ab63a707ac9d0167545261ab57b996430#diff-4f1efa652dafc9c738aae3a4bc5c3dad) für das BBC-micro:bit-Projekt entwickelt.

Dieses Protokoll enthält keinerlei Verschlüsselung, Authentifizierung oder Autorisierung. Es dient ausschließlich als Lehrmittel, um zu zeigen, wie einfache Kommunikation funktioniert, und um einen Sandkasten zum Lernen bereitzustellen.

### ~


```cards
radio.sendNumber(0);
radio.sendValue("name", 0);
radio.sendString("");
radio.sendBuffer(pins.createBuffer(1));
radio.onReceivedNumber(function (receivedNumber) { });
radio.onReceivedValue(function (name, value) { });
radio.onReceivedString(function (receivedString) { });
radio.onReceivedBuffer(function (receivedBuffer) { });
radio.setGroup(0);
```

## Fortgeschritten

```cards
radio.setTransmitPower(7);
radio.setFrequencyBand(50);
radio.setTransmitSerialNumber(false);
radio.raiseEvent(0, 0);
```

```package
radio
```

## Siehe auch

[sende Zahl](/reference/radio/send-number),
[sende Wert](/reference/radio/send-value),
[sende Zeichenkette](/reference/radio/send-string),
[sende Puffer](/reference/radio/send-buffer),
[wenn Zahl empfangen](/reference/radio/on-received-number),
[wenn Wert empfangen](/reference/radio/on-received-value),
[wenn Zeichenkette empfangen](/reference/radio/on-received-string),
[wenn Puffer empfangen](/reference/radio/on-received-buffer),
[setze Gruppe](/reference/radio/set-group),
[setze Sendeleistung](/reference/radio/set-transmit-power),
[setze Übertragung Seriennummer](/reference/radio/set-transmit-serial-number),
[löse Ereignis aus](/reference/radio/raise-event)
