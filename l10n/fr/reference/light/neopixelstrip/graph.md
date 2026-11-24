# graph

Affiche un nombre sous forme de graphique avec les pixels de la bande.

```sig
light.createStrip().graph(0, 0);
```
Le bloc ``||graph||`` transforme tes pixels en un graphique lumineux pour afficher des valeurs numériques. Le nombre total de pixels de la
bande forme l'échelle du graphique. Si tu as 20 pixels dans ta bande et que tu veux afficher une
valeur entre `0` et `100`, chaque pixel allumé vaut `5`. Ainsi, avec cette échelle, la valeur
`45` s'affichera avec 10 pixels sur la bande.

Pour chaque valeur, tu règles **high** comme le haut de l'échelle et les pixels s'allument jusqu'au point
qui correspond à la part de **value** dans **high**.

De plus, si tu utilises `0` pour **high**, le graphique s'_ajuste automatiquement_. Cela signifie que le plus grand nombre utilisé
dans **value** définit le haut de l'échelle. Ainsi, tu peux utiliser le graphique plusieurs fois, par exemple dans une boucle, pour afficher
une série de nombres dont tu ne connais pas le plus grand. L'ajustement automatique se réinitialise toutefois à la
valeur actuelle si tu n'as pas utilisé ``||graph||`` au cours des 10 dernières secondes.

## Paramètres

* **value** : un [nombre](/types/number) qui est la valeur à afficher sur le graphique.
* **high** : un [nombre](/types/number) qui est le nombre le plus haut de l'échelle du graphique. Une valeur de
`0` permet au graphique de s'ajuster automatiquement.

#### ~hint
Le bloc ``||graph||`` écrit aussi le nombre de **value** sur le port série pour t'aider à enregistrer
les valeurs.
#### ~

## Exemples #exsection

### Graphique de dix #ex1

Affiche 10 valeurs entre 0 et 100 sur les pixels.

```blocks
let strip = light.createStrip()
for (let i = 0; i <= 10; i++) {
    strip.graph(i * 10, 100)
    pause(500)
}
```
### Graphique à échelle automatique #ex2

Affiche la valeur `1000`. Affiche d'autres valeurs en les laissant s'ajuster automatiquement.

```blocks
let strip = light.createStrip()
strip.graph(1000, 0)
forever(() => {
    strip.graph(Math.randomRange(0, 1000), 0)
    pause(500)
})
```
## Voir aussi

[``||range||``](/reference/light/neopixelstrip/range)

```package
light
```


