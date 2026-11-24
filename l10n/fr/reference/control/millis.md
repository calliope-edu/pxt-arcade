# millis

Obtiens le nombre de millisecondes écoulées depuis la mise en marche de la carte.

```sig
control.millis()
```

## Renvoie

* le [nombre](/types/number) de millisecondes écoulées depuis la mise en marche de la carte.

## Exemple #example

Calcule depuis combien de jours, d'heures, de minutes et de secondes la @boardname@ fonctionne.

```blocks
let msecs = control.millis()
let seconds = msecs / 1000
let mins = seconds / 60
let hours = mins / 60
let days = hours / 24
```

## #seealso