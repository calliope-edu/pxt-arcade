# check Deep Sleep

Vérifie si le délai de « veille profonde » est écoulé et si l'appareil doit être mis en veille.

```sig
power.checkDeepSleep()
```

## Retourne

* une valeur [booléenne](/types/boolean) qui est `true` si le délai de veille est `0` ou `false` s'il reste du temps.

## Exemple #example

Mets l'appareil en veille si le délai de veille est écoulé.

```blocks{
power.checkDeepSleep()
```

## Voir aussi

[set deep sleep timeout](/reference/power/set-deep-sleep-timeout),
[deep sleep](/reference/power/deep-sleep)

```package
power
```
