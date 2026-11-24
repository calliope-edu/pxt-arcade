# Poke

Teilt der Energieverwaltung mit, dass eine Aktivität stattgefunden hat und das Schlaf-Timeout zurückgesetzt werden soll.

```sig
power.poke();
```

Wenn ein Timeout für den „Tiefschlaf“ gesetzt ist und das Gerät für eine weitere Timeout-Dauer wach bleiben soll, kannst du es _anstupsen_ (poke). Ein Poke setzt die Dauer des Tiefschlaf-Timeouts einfach wieder auf die Zeit zurück, mit der der Countdown begonnen hat. Das Timeout stoppt nicht, sondern zählt mit der vollen verbleibenden Zeit weiter herunter.

## Beispiel

Stupse das Gerät an, damit es länger wach bleibt, wenn ein Lichtsensor Tageslicht erkennt.

```typescript
const LIGHT_SENSOR_DETECT = 15
const LIGHT_SENSOR_DAYLIGHT = 1

control.onEvent(LIGHT_SENSOR_DETECT, LIGHT_SENSOR_DAYLIGHT, () => {
    power.poke()
})
```

## Siehe auch

[set deep sleep timeout](/reference/power/set-deep-sleep-timeout)

```package
power
```
