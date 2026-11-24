# wait Micros

Fait attendre la partie du programme en cours d'exécution pendant un certain nombre de microsecondes.

```sig
control.waitMicros(10)
```
Le code à l'intérieur du bloc actuel, comme ``||on start||``, ``||control:run in parallel||`` et 
``||control:on event||``, attend pendant un certain temps. Le temps est indiqué en microsecondes (un millionième de seconde).

## Paramètres

* **micros** : le [nombre](/types/number) de microsecondes pendant lesquelles ce bloc de code doit attendre.

## Exemple #example

Allume un capteur dont le signal de commande est connecté à la broche `D4`. Attends `20` microsecondes
que le capteur détecte quelque chose, puis lis la valeur du capteur sur la broche `A4`.

```blocks
pins.D4.digitalWrite(true)
control.waitMicros(20)
let temperature = pins.A4.analogRead()
```

## #seealso
