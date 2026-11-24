# afficher un texte long

Affiche une fenêtre de dialogue contenant un texte plus long.

```sig
game.showLongText("", DialogLayout.Bottom)
```

Si tu veux donner un long message à ton joueur, tu peux utiliser un dialogue de texte long. Le dialogue apparaît à l'écran à la position que tu choisis : sur les côtés de l'écran, au centre, ou sur tout l'écran.

Quand le joueur a fini de lire le message, il ferme le dialogue en appuyant sur le bouton **A** et le jeu continue. Si le texte est trop long pour être vu en entier, le joueur peut cliquer sur la fenêtre de dialogue pour le faire défiler.

## Paramètres

* **str** : une [chaîne](/types/string) de texte à afficher dans le dialogue de texte long.
* **layout** : la position du dialogue de texte long à l'écran. Les positions sont :
>* ``left`` : le dialogue est affiché sur le côté gauche de l'écran
>* ``right`` : le dialogue est affiché sur le côté droit de l'écran
>* ``top`` : le dialogue est affiché en haut de l'écran
>* ``bottom`` : le dialogue est affiché en bas de l'écran
>* ``center`` : le dialogue est affiché au centre de l'écran
>* ``full screen`` : le dialogue occupe tout l'écran

## Exemple #example

### Texte de tous les côtés #ex1

Affiche un dialogue de texte long à une position différente de l'écran pour chaque bouton de la manette pressé.

```blocks
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Long text on the left", DialogLayout.Left)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Long text on the right", DialogLayout.Right)
})
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Long text on the top", DialogLayout.Top)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Long text on the bottom", DialogLayout.Bottom)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Long text in the center", DialogLayout.Center)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Long text in full screen", DialogLayout.Full)
})
```

### Faire défiler le texte

Affiche une très longue chaîne de texte dans un dialogue de texte long lorsque le bouton **A** est pressé. Fais défiler le dialogue pour voir tout le texte.

```blocks
let veryLongText = "A very"
for (let i = 0; i < 40; i++) {
    veryLongText = veryLongText + ", very"
}
veryLongText = veryLongText + " long text string!"
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText(veryLongText, DialogLayout.Center)
})
```

[définir la couleur du texte du dialogue](/reference/game/set-dialog-text-color)
