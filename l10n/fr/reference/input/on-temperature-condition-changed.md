# on Temperature Condition Changed

Exécute du code quand la température passe de chaud à froid, ou de froid à chaud.

```sig
input.onTemperatureConditionChanged(TemperatureCondition.Hot, 15, TemperatureUnit.Celsius, () => {
	
});
```

Tu décides quelle température doit être atteinte avant que ton code commence à s'exécuter. C'est le _seuil_ de température.
Ton code démarre quand la température descend jusqu'à un certain nombre de degrés Celsius ou Fahrenheit.
Tu peux aussi faire démarrer ton code quand la température monte jusqu'à un certain nombre de degrés.

Tu choisis la condition ``cold`` pour exécuter ton code quand la température descend jusqu'à la valeur choisie (le seuil).
Ou bien, tu utilises ``warm`` pour exécuter ton code quand la température monte jusqu'à ton _seuil_.

## Paramètres

* **condition** : la condition de température pour laquelle ton code doit s'exécuter
>  * ``cold`` : le code s'exécute quand la température descend jusqu'à un certain point
>  * ``hot`` : le code s'exécute quand la température monte jusqu'à un certain point
* **temperature** : la température à atteindre avant que ton code démarre
* **unit** : l'unité de température, Celsius ou Fahrenheit
* **handler** : le code à exécuter quand la température change

## Exemple #example

Fais afficher `bleu` à tous les pixels quand il fait frais. Le réglage « frais » est de `10` degrés Celsius ou moins.

```blocks
input.onTemperatureConditionChanged(TemperatureCondition.Cold, 10, TemperatureUnit.Celsius, () => {
	light.createStrip().setAll(0x0000ff);
})
```
## Voir aussi #seealso

[température](/reference/input/temperature)

```package
temperature
```
