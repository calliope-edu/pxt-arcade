# écran titre

Affiche un titre et un sous-titre à l'écran.

```sig
game.splash("")
```

Tu peux afficher un titre à l'écran au début de ton jeu ou plus tard pendant la partie. Pour donner plus d'informations, ajoute une chaîne de sous-titre facultative. Le texte disparaît lorsque tu appuies sur une touche ou un bouton.

## Paramètres

* **title** : une [chaîne](/types/string) qui contient ton texte d'écran titre.
* **subtitle** : une [chaîne](/types/string) facultative qui forme une seconde ligne de texte.

## Exemple #example

Affiche l'écran titre du jeu avant d'afficher le menu.

```blocks
game.splash("Magical Forest", "Find your way out!!!")
let choice = game.askForString("Choose game: (1) Thick Woods, (2) Valley Grove", 1)
```

## Voir aussi #seealso

[demander](/reference/game/ask)