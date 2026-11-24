# Poke

Signale à la gestion de l'énergie qu'une activité a eu lieu et que le délai avant la mise en veille doit être réinitialisé.

```sig
power.poke();
```

Si un délai de « sommeil profond » est défini et que tu veux que l'appareil reste éveillé pendant une nouvelle durée de ce délai, tu peux le _relancer_ (poke). Un poke remet simplement le délai de sommeil profond à la durée qu'il avait au début du compte à rebours. Le délai ne s'arrête pas mais continue son compte à rebours avec toute la durée restante.

## Exemple

Relance l'appareil pour qu'il reste éveillé plus longtemps si la lumière du jour est détectée par un capteur de lumière.

```typescript
const LIGHT_SENSOR_DETECT = 15
const LIGHT_SENSOR_DAYLIGHT = 1

control.onEvent(LIGHT_SENSOR_DETECT, LIGHT_SENSOR_DAYLIGHT, () => {
    power.poke()
})
```

## Voir aussi

[définir le délai de sommeil profond](/reference/power/set-deep-sleep-timeout)

```package
power
```
