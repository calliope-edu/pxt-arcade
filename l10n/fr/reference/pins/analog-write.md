# analog Write

Écris une valeur entre `0` et `1023` pour créer un signal sur une broche analogique.

```sig
pins.A0.analogWrite(0)
```
Une sortie analogique sur une broche aura une tension liée à la valeur de sortie
que tu donnes à ``||pins:analog write||``. Tu définis la quantité de _signal_ sur la broche.
Tu utilises des valeurs entre `0` (aucun signal) et `1023` (signal complet). La tension réelle
sur la broche suit la valeur que tu donnes. Ainsi, `0` correspond à aucune tension et `1023`
à la tension maximale. La tension correspondant à ta valeur de signal dépend de la
plage de tension utilisée par ta carte.

## Paramètres

*  **value** : un [nombre](types/number) entre `0` (aucun signal) et `1023` (signal complet)


## Exemple #example

Crée un signal en dents de scie sur la broche `A0`.

```blocks
let i = 0
forever(() => {
    i = 0
    while (i <= 1023) {
        pins.A0.analogWrite(i)
        pause(100)
        if (i > 0) {
            i += 128
        } else {
            i += 127
        }
    }
})

```

## Voir aussi #seealso

[analog read](/reference/pins/analog-read)
