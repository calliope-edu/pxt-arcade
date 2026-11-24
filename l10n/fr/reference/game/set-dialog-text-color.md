# définir la couleur du texte du dialogue

Définit la couleur du texte affiché dans le dialogue de texte long.

```sig
game.setDialogTextColor(0)
```

## Paramètres

* **color** : le [nombre](/types/number) de la couleur utilisée pour afficher le texte du dialogue.

## Exemple #example

Affiche du texte de couleur `10` dans le dialogue de texte long.

```blocks
game.setDialogTextColor(10)
game.showLongText("Some long text with color!", DialogLayout.Center)
```

## Voir aussi #seealso

[définir le cadre du dialogue](/reference/game/set-dialog-frame),
[définir le curseur du dialogue](/reference/game/set-dialog-cursor),
[afficher un texte long](/reference/game/show-long-text)


