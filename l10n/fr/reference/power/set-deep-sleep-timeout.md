# set Deep Sleep Timeout

Indique la durée d'inactivité **en secondes** nécessaire pour passer en sommeil profond.

```sig
power.setDeepSleepTimeout(10)
```

Tu peux définir un délai après lequel l'appareil passe en « sommeil profond » lorsqu'il n'a aucune activité en cours. Le délai est indiqué en nombre de secondes.

## Paramètres

* **seconds** : un [nombre](types/number) de secondes à attendre une activité du système avant que l'appareil passe en sommeil profond.

## Exemple #example

Définis le délai d'inactivité à `30` secondes.

```blocks
power.setDeepSleepTimeout(30)
```

## Voir aussi

[vérifier le sommeil profond](/reference/power/check-deep-sleep),
[poke](/reference/power/poke)

```package
power
```
