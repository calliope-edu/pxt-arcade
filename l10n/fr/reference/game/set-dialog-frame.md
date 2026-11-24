# définir le cadre du dialogue

Définit l'image du cadre de la fenêtre de dialogue de texte long.

```sig
game.setDialogFrame(null)
```
Un cadre de dialogue comprend le bord extérieur et l'intérieur du dialogue. Tu crées un cadre de dialogue en dessinant une [image](/types/image) dont les pixels représentent les bordures et l'intérieur du cadre.

L'image du cadre doit avoir assez de pixels pour indiquer au dialogue à quoi le cadre doit ressembler. Le cadre le plus simple est une image de 3 lignes et 3 colonnes. Elle a assez de pixels pour montrer la couleur des bords et la couleur du centre :

```block
game.setDialogFrame(img`
9 9 9 
9 5 9 
9 9 9 
`)
```

Tu peux revenir au cadre d'origine (par défaut) en utilisant une image vide :

```block
game.setDialogFrame(img``)
```

## Paramètres

* **frame** : une [image](/types/image) à utiliser comme cadre du dialogue.

## Exemples #example

### Cadre simple

Affiche un message dans un dialogue avec un cadre simple fait d'une image de `3` x `3`.

```blocks
game.setDialogFrame(img`
3 3 3
3 9 3
3 3 3
`)
game.showLongText("A really simple frame here", DialogLayout.Center)
```

### Cadre décoré #ex2

Crée un nouveau cadre de dialogue avec une bordure décorée et une couleur à l'intérieur.

```blocks
game.showLongText("Here's the old frame...", DialogLayout.Center)
game.setDialogFrame(img`
2 2 1 1 2 2 1 1 2 2 1 1 
2 9 9 9 9 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 9 9 9 9 2 
1 9 9 9 9 9 9 9 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 1 
2 9 9 9 9 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 9 9 9 9 2 
1 9 9 9 9 9 9 9 9 9 9 2 
2 9 9 9 9 9 9 9 9 9 9 1 
2 9 9 9 9 9 9 9 9 9 9 1 
1 9 9 9 9 9 9 9 9 9 9 2 
1 1 2 2 1 1 2 2 1 1 2 2 
`)
game.showLongText("How do you like my new fancy frame?", DialogLayout.Center)
```

## Voir aussi #seealso

[définir le curseur du dialogue](/reference/game/set-dialog-cursor),
[définir la couleur du texte du dialogue](/reference/game/set-dialog-text-color),
[afficher un texte long](/reference/game/show-long-text)

