# pulse Duration

Ermittle die Dauer des letzten Pulses an einem beliebigen digitalen Pin.

```sig
pins.pulseDuration()
```

Wenn du Code in einem [``||pins:on pulsed||``](/reference/pins/on-pulsed)-Ereignis hast und wissen willst, wie lange der Puls an diesem Pin gedauert hat, verwende ``||pins:pulse duration||``. 

Der Block ``||pins:pulse duration||`` merkt sich, wie viele Mikrosekunden der letzte Puls lang war. Das gilt nur für den
letzten Puls, der an irgendeinem der Pins aufgetreten ist. Deshalb verwendest du ihn in einem ``||pins:on pulsed||``-Ereignisblock, damit
du weißt, an welchem Pin der Puls war.

## Rückgabewert

* eine [Zahl](/types/number), die die Dauer des letzten Pulses in Mikrosekunden angibt.

## Beispiel #example

Zähle jeden Puls an Pin `D4`, der länger als 2 Millisekunden dauert. Schreibe die Gesamtzahl
der Pulse an die serielle Schnittstelle, jedes Mal wenn die Zählung um weitere tausend Pulse gestiegen ist.

```blocks
let pulses = 0
pins.D4.setPull(PinPullMode.PullUp)

pins.D4.onPulsed(PulseValue.Low, () => {
    if (pins.pulseDuration() > 2000) {
        pulses++
    }
    if (pulses % 1000 == 0) {
        serial.writeValue("pulse count", pulses)
    }
})
```

## Siehe auch #seealso

[digital read](/reference/pins/digital-read), [set pull](/reference/pins/set-pull),
[on pulsed](/reference/pins/on-pulsed)
