# millis

Obtient le nombre de secondes écoulées depuis que la carte a été allumée ou réinitialisée pour la dernière fois.

```sig
control.seconds()
```

## Retourne

* le [nombre](/types/number) de secondes écoulées depuis la réinitialisation de la carte.

## Exemple #example

Trouve depuis combien de jours, d'heures, de minutes et de secondes la @boardname@ fonctionne.

```blocks
let seconds = control.seconds()
let mins = seconds / 60
let hours = mins / 60
let days = hours / 24
```

## #seealso
