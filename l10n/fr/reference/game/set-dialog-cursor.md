# définir le curseur du dialogue

Définit l'image du curseur du dialogue.

```sig
game.setDialogCursor(null)
```

Le curseur du dialogue est une petite image affichée dans le cadre du dialogue. Il montre au joueur quel bouton ferme le dialogue. Tu peux changer l'apparence du curseur en lui attribuant une autre image.

Tu peux revenir au curseur d'origine (par défaut) en utilisant une image vide :

```block
game.setDialogCursor(img``)
```

## Paramètres

* **cursor** : une [image](/types/image) à utiliser comme curseur du dialogue.

## Exemples #example

Crée une nouvelle image de curseur ronde avec une lettre en gras à l'intérieur. Définis cette image comme nouveau curseur du dialogue.

```blocks
game.setDialogCursor(img`
. . 8 8 8 8 8 8 . . 
. 8 8 8 1 1 8 8 8 . 
8 8 8 1 8 8 1 8 8 8 
8 8 8 1 1 1 1 8 8 8 
8 8 8 1 8 8 1 8 8 8 
8 8 8 1 8 8 1 8 8 8 
. 8 8 8 8 8 8 8 8 . 
. . 8 8 8 8 8 8 . . 
`)
game.showLongText("A new, much bolder cursor!", DialogLayout.Center)
```

## Voir aussi #seealso

[définir le cadre du dialogue](/reference/game/set-dialog-frame),
[définir la couleur du texte du dialogue](/reference/game/set-dialog-text-color),
[afficher un texte long](/reference/game/show-long-text)

