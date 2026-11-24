# pxt-button-combos

## Référence

### Lorsque la combinaison de boutons

Ajoute un nouveau combo au jeu.

Les combos s'écrivent sous forme de chaîne dans laquelle chaque caractère représente un appui sur un bouton :
u=haut, d=bas, l=gauche, r=droite, a=A et b=B. Avec `+` entre deux caractères,
les deux boutons doivent être appuyés en même temps.

| Bouton du contrôleur | Valeur |
|---| ---|
| haut | U |
| bas | D |
| gauche | L |
| droite | R |
| A | A |
| B | B |

La séquence « appuie sur a, puis sur b, puis sur bas et droite en même temps » s'écrit
sous forme de la chaîne "abd+r".

Chaque combo doit être différent ; si tu ajoutes un nouveau gestionnaire pour un combo
déjà utilisé, l'ancien est remplacé.

@param combo la séquence de boutons du combo : voir les exemples ci-dessus.
@param handler fonction exécutée lorsque le combo a été saisi.

### ID des boutons

Une partie d'une séquence de boutons. Peut être reliée avec ``join`` à d'autres boutons
pour créer une séquence complète pour ``generateComboString``

@param id le bouton pour lequel un texte est généré

### supprimer le combo

Supprime un combo ajouté auparavant.

@param combo le combo à supprimer ; pour le format, voir attachCombo.

### définir le délai du combo

Définit combien de temps peut s'écouler entre deux appuis avant qu'un combo se termine.

@param t temps maximal entre deux appuis qui compte encore pour le combo.

### déclencher le combo

Définit quand les combos sont déclenchés (c'est-à-dire quand on essaie de les exécuter).

Par défaut, TriggerType.Continuous est réglé : à chaque appui sur un bouton,
on essaie d'exécuter un combo.

### Lorsque le code spécial

Ajoute un événement exécuté lorsqu'un code spécial est saisi.

Le code spécial de cet événement est :
>haut, haut, bas, bas, gauche, droite, gauche, droite, B, A

@param handler événement exécuté lorsque le code est saisi.

Source : [jwunderl/pxt-button-combos](https://github.com/jwunderl/pxt-button-combos/tree/v0.0.24) (v0.0.24)

```package
pxt-button-combos
```
