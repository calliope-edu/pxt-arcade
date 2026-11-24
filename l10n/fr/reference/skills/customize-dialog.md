## Personnaliser une boîte de dialogue

Le bloc ``||game:show long text||`` affiche un texte à l'écran dans une _boîte de dialogue_ encadrée. Le texte, le cadre de la boîte et le curseur sont affichés avec des couleurs par défaut. Si tu veux adapter ces éléments aux couleurs de ton jeu, tu peux choisir tes propres couleurs et images.

### Boîtes de dialogue

Une boîte de dialogue est un cadre contenant un message texte qui couvre une partie de l'écran lorsqu'il est affiché. Une boîte de dialogue est créée avec le bloc ``||game:show long text||``. Le texte, le cadre et le curseur ont des couleurs et des images par défaut.

```block
game.showLongText("This is a text dialog with default colors, frame, and cursor.", DialogLayout.Center)
```

#### Éléments de la boîte de dialogue

* Le message affiché dans la boîte de dialogue est ce que tu indiques dans le paramètre texte de ``||game:show long text||``.
* Le cadre de la boîte de dialogue est une image utilisée comme arrière-plan derrière le message texte.
* Le curseur de la boîte de dialogue est un symbole, ou une icône, qui t'indique d'appuyer sur un bouton pour faire disparaître la boîte de dialogue (la fermer) et laisser ton jeu continuer.

```sim
game.showLongText("This is a text dialog with default colors, frame, and cursor.", DialogLayout.Center)
```

### Changer la couleur du texte

Une couleur personnalisée pour afficher le texte d'un message de dialogue se définit avec le bloc ``||game:set dialog text color||``.

```blocks
game.setDialogTextColor(2)
game.showLongText("Let's use red for the dialog text color.", DialogLayout.Top)
```

### Changer le cadre de la boîte de dialogue

Le cadre de la boîte de dialogue est une image d'arrière-plan qui définit ce qui est affiché derrière le texte du message. En général, l'image a une couleur de bordure sur son bord et une couleur unie ou un motif pour le reste de l'arrière-plan. Si l'image du cadre est plus petite que la boîte de dialogue affichée, elle est agrandie pour remplir la zone.

```blocks
game.setDialogFrame(img`
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 9 9 9 9 9 9 9 9 9 9 9 9 9 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `)
game.showLongText("Like my dialog border and background?", DialogLayout.Center)
```

### Changer le curseur de la boîte de dialogue

Le curseur de la boîte de dialogue est un petit symbole affiché en bas à droite du cadre. Il indique qu'il faut appuyer sur un bouton pour fermer la boîte de dialogue. Tu peux dessiner ta propre image de curseur et l'utiliser dans tes boîtes de dialogue avec ``||game:set dialog cursor||``.

```blocks
game.setDialogCursor(img`
    f f f f f f f f f f f f f f f f 
    f f f f f f 5 5 5 5 5 f f f f f 
    f f f f f 5 5 f f f 5 5 f f f f 
    f f f f f 5 5 f f f 5 5 f f f f 
    f f f f f 5 f f f f f 5 f f f f 
    f f f f 5 5 f f f f f 5 5 f f f 
    f f f f 5 5 f f f f f 5 5 f f f 
    f f f f 5 5 5 5 5 5 5 5 5 f f f 
    f f f f 5 5 5 5 5 5 5 5 5 f f f 
    f f f f 5 f f f f f f f 5 f f f 
    f f f 5 5 f f f f f f f 5 5 f f 
    f f f 5 5 f f f f f f f 5 5 f f 
    f f f 5 f f f f f f f f f 5 f f 
    f f 5 5 f f f f f f f f f 5 5 f 
    f f 5 f f f f f f f f f f f 5 f 
    f f f f f f f f f f f f f f f f 
    `)
game.showLongText("Use my own dialog cursor image.", DialogLayout.Right)
```

### Exemple

L'exemple suivant remplace les trois éléments par défaut de la boîte de dialogue par des éléments personnalisés.

```blocks
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    game.showLongText("Once upon a time, dialogs only had default colors. Well, let's change that.", DialogLayout.Bottom)
})
game.setDialogTextColor(1)
game.setDialogCursor(img`
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
    . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . 6 6 7 6 6 6 6 6 6 6 6 7 6 6 . 
    6 6 6 6 7 6 6 6 6 6 6 7 6 6 6 6 
    6 6 6 6 6 7 6 6 6 6 7 6 6 6 6 6 
    6 6 6 6 6 6 7 6 6 7 6 6 6 6 6 6 
    6 6 6 6 6 6 6 7 7 6 6 6 6 6 6 6 
    6 6 6 6 6 6 6 7 7 6 6 6 6 6 6 6 
    6 6 6 6 6 6 7 6 6 7 6 6 6 6 6 6 
    6 6 6 6 6 7 6 6 6 6 7 6 6 6 6 6 
    6 6 6 6 7 6 6 6 6 6 6 7 6 6 6 6 
    . 6 6 7 6 6 6 6 6 6 6 6 7 6 6 . 
    . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . . 6 6 6 6 6 6 6 6 6 6 6 6 . . 
    . . . . 6 6 6 6 6 6 6 6 . . . . 
    `)
game.setDialogFrame(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 4 2 4 2 4 2 4 2 4 2 4 2 4 7 
    7 2 4 4 4 4 4 4 4 4 4 4 4 2 7 
    7 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
    7 2 4 4 4 4 4 4 4 4 4 4 4 2 7 
    7 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
    7 2 4 4 4 4 4 4 4 4 4 4 4 2 7 
    7 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
    7 2 4 4 4 4 4 4 4 4 4 4 4 2 7 
    7 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
    7 2 4 4 4 4 4 4 4 4 4 4 4 2 7 
    7 4 4 4 4 4 4 4 4 4 4 4 4 4 7 
    7 2 4 4 4 4 4 4 4 4 4 4 4 2 7 
    7 4 2 4 2 4 2 4 2 4 2 4 2 4 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `)
```
