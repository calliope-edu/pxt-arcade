# demander une chaîne

Demande une chaîne de caractères au joueur.

```sig
game.askForString("")
```

Le joueur est invité à saisir une chaîne. Ton message s'affiche et le joueur choisit parmi les caractères proposés en dessous pour composer sa réponse. Chaque caractère de la réponse est sélectionné avec le bouton **A**. Tu peux limiter le nombre de caractères que le joueur peut taper.

Le joueur sélectionne **OK** et appuie sur le bouton **A** pour terminer la saisie de la réponse. La réponse est alors renvoyée à ton programme.

## Paramètres

* **message** : une [chaîne](/types/string) qui est le message affiché pour demander une réponse.
* **answerLength** : le [nombre](/types/number) de caractères que le joueur peut saisir. Le maximum est `24` et la valeur par défaut est `12`.

## Retourne

* une [chaîne](/types/string) qui est la réponse tapée par le joueur.

## Exemple #example

Demande au joueur un code de déverrouillage pour continuer à jouer.

```blocks
let unlock = "98745"
if (game.askForString("unlock code:", 5) != unlock) {
    game.gameOver(false)
}
```

## Voir aussi #seealso

[demander](/reference/game/ask),
[demander un nombre](/reference/game/ask-for-number)