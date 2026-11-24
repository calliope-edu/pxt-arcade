# on Light Condition Changed

Exécute du code quand les conditions de lumière changent.

```sig
input.onLightConditionChanged(LightCondition.Dark, function() {
});
```
Qu'est-ce qui décide si la condition de lumière est sombre ou lumineuse ? Un nombre entre `0` et `255` est défini pour chacune de ces deux conditions de niveau de lumière. Ces valeurs de niveau de lumière décident quelle condition signifie ``dark`` (sombre) et laquelle signifie ``bright`` (lumineux). Elles sont définies par la fonction ``||input:set light threshold||``.

## Paramètres

* **condition** : la condition de lumière à détecter
>  * ``dark`` : sombre, aucune lumière détectée
>  * ``bright`` : la lumière est assez vive pour être détectée
* **handler** : le code à exécuter quand les conditions de lumière changent

## Exemple #example

Réduis les pixels rouges à la moitié de leur intensité quand les conditions de lumière deviennent sombres.

```blocks
input.onLightConditionChanged(LightCondition.Dark, function() {
	light.createStrip().setAll(light.fade(light.rgb(255, 0, 0), 128))
})
```

## Voir aussi #seealso

[niveau de lumière](/reference/input/light-level),
[définir le seuil de lumière](/reference/input/set-light-threshold)
