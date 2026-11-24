# set Light Threshold

Indique à quel point il doit faire clair ou sombre pour déclencher un événement de lumière.

```sig
input.setLightThreshold(LightCondition.Dark, 0)
```

L'événement [``||input:on light condition changed||``](/reference/input/on-light-condition-changed) démarre
quand la condition de lumière atteint une certaine luminosité. Tu décides si l'événement doit se produire quand
la lumière devient plus vive ou plus sombre. Cela se règle en choisissant `bright` ou `dark` pour **condition**
dans ``||input:set light threshold||``. Tu indiques aussi quel niveau de luminosité déclenche l'événement quand
la lumière devient plus vive ou plus sombre.

## Paramètres

* **condition** : la condition de lumière que tu vérifies, soit `dark`, soit `bright`.
* **value** : un [nombre](/types/number) qui est la valeur de luminosité qui déclenche un événement de lumière. C'est un nombre entre `0` (complètement sombre) et `255` (très lumineux).

## Exemple #example

Définis une condition de lumière pour le moment où la lumière passe de lumineuse à à moitié sombre. Fais alors passer les pixels à un rouge à moitié atténué.

```blocks
const halfBright = 127;
let pixels = light.createStrip();

pixels.setAll(0xff0000);
input.setLightThreshold(LightCondition.Dark, halfBright);
input.onLightConditionChanged(LightCondition.Dark, () => {
	pixels.setAll(light.fade(light.rgb(255, 0, 0), halfBright));
});
```

## Voir aussi #seealso

[lors du changement de condition de lumière](/reference/input/on-light-condition-changed)

```package
lightsensor
```
