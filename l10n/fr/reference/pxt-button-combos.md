# pxt-button-combos

## Référence

### On Button Combination

Ajoute un nouveau combo au jeu.

Les combos sont représentés par une chaîne de caractères correspondant aux appuis sur les boutons,
où u=haut, d=bas, l=gauche, r=droite, a=A et b=B. `+` peut être utilisé entre les caractères pour
exiger qu'ils soient appuyés en même temps.

| bouton de la manette | valeur |
|---| ---|
| haut | U |
| bas | D |
| gauche | L |
| droite | R |
| A | A |
| B | B |

La séquence « appuie sur a, puis sur b, puis sur bas et droite en même temps » serait
représentée par la chaîne "abd+r".

Chaque combo doit être unique ; ajouter un nouveau gestionnaire pour un combo déjà utilisé
remplacera l'ancien gestionnaire.

@param combo la séquence de mouvements du combo : voir le combo complet pour des exemples.
@param handler fonction à exécuter lorsque le combo a été saisi.

### Button Ids

Une partie d'une séquence de boutons. Peut être ``join``é sous forme de texte avec des boutons
pour créer une séquence complète pour ``generateComboString``

@param id le bouton pour lequel générer une chaîne

### Remove Combo

Supprime un combo ajouté précédemment.

@param combo combo à supprimer ; voir attachCombo pour le format.

### Set Combo Timeout

Définis le temps maximal entre les appuis sur les boutons avant qu'un combo se termine.

@param t temps maximal entre les appuis sur les boutons qui doit déclencher le combo.

### Combo Trigger

Définis la condition dans laquelle les mouvements se déclenchent (tentent de s'exécuter).

Par défaut, elle est réglée sur TriggerType.Continuous, qui tente d'exécuter
un combo à chaque appui sur un bouton.

### On Special Combination

Ajoute un nouvel événement qui s'exécute lorsqu'un code spécial est saisi.

Le code spécial pour cet événement est :
>haut, haut, bas, bas, gauche, droite, gauche, droite, B, A

@param handler événement à exécuter lorsque le code est saisi.

Source : [jwunderl/pxt-button-combos](https://github.com/jwunderl/pxt-button-combos/tree/v0.0.24) (v0.0.24)

```package
pxt-button-combos
```

