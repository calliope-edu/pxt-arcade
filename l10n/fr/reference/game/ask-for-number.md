# demander un nombre

Demande une valeur numérique au joueur.

```sig
game.askForNumber("")
```

Le joueur est invité à saisir un nombre. Ton message s'affiche et le joueur utilise le pavé numérique pour choisir le nombre à renvoyer. Chaque chiffre de la réponse est sélectionné avec le bouton **A**. Tu peux limiter le nombre de chiffres que le joueur peut taper.

Le joueur sélectionne **OK** et appuie sur le bouton **A** pour terminer la saisie de la réponse. La réponse est alors renvoyée à ton programme.

## Paramètres

* **message** : une [chaîne](/types/string) qui est le message affiché pour demander une réponse.
* **answerLength** : le [nombre](/types/number) de chiffres que le joueur peut saisir. Le maximum est `10` et la valeur par défaut est `6`.

## Retourne

* une valeur [numérique](/types/number) qui est la réponse tapée par le joueur.

## Exemple #example

Demande au joueur combien de fois le code doit se répéter.

```blocks
let numOfRepeats = game.askForNumber("How many times should this repeat?")
for (let i = 0; i < numOfRepeats; i++) {
    game.splash("repeated");
}
```

## Voir aussi #seealso

[demander](/reference/game/ask),
[demander une chaîne](/reference/game/ask-for-string)