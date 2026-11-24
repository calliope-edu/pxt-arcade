# pulse Duration

Obtiens la durée de la dernière impulsion sur l'une des broches numériques.

```sig
pins.pulseDuration()
```

Si tu as du code dans un événement [``||pins:on pulsed||``](/reference/pins/on-pulsed) et que tu veux savoir combien de temps l'impulsion a duré sur cette broche, utilise ``||pins:pulse duration||``. 

Le bloc ``||pins:pulse duration||`` mémorise combien de microsecondes a duré la dernière impulsion. Cela concerne uniquement
la période d'impulsion la plus récente survenue sur l'une des broches. Tu l'utilises donc dans un bloc d'événement ``||pins:on pulsed||`` pour
savoir sur quelle broche l'impulsion a eu lieu.

## Retourne

* un [nombre](/types/number) qui est la durée de la dernière impulsion, en microsecondes.

## Exemple #example

Compte chaque impulsion sur la broche `D4` qui dure plus de 2 millisecondes. Écris le nombre total
d'impulsions sur le port série chaque fois que le compteur augmente de mille impulsions.

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

## Voir aussi #seealso

[digital read](/reference/pins/digital-read), [set pull](/reference/pins/set-pull),
[on pulsed](/reference/pins/on-pulsed)
