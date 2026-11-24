# demander

Pose au joueur une question « oui » ou « non » à laquelle il répond avec le bouton **A** ou **B**.

```sig
game.ask("")
```

Tu poses une question à laquelle le joueur répond en appuyant sur le bouton **A** ou **B**. Si le joueur appuie sur **A**, le résultat est `true`. Si le bouton **B** est pressé, le résultat est `false`. Tu peux ajouter un sous-titre facultatif comme seconde partie de ta question.

## Paramètres

* **title** : une [chaîne](/types/string) contenant le texte de ta question.
* **subtitle** : une [chaîne](/types/string) facultative qui forme la seconde partie de ta question.

## Retourne

* une valeur [booléenne](/types/boolean) qui vaut `true` si le joueur a appuyé sur **A** en réponse à ta question et `false` s'il a appuyé sur **B**.

## Exemple #example

Demande au joueur s'il est prêt à jouer le niveau suivant. Si oui, mets le score à `0`. Sinon, termine la partie.

```blocks
if (game.ask("Ready to play?", "Next: advanced level")) {
    info.setScore(0)
} else {
    game.gameOver(false)
}
```

## Voir aussi #seealso

[demander une chaîne](/reference/game/ask-for-string),
[demander un nombre](/reference/game/ask-for-number)