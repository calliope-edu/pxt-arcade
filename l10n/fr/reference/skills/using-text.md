## Utiliser du texte dans un jeu

À différents moments d'un jeu, tu dois donner des messages ou des instructions au joueur. Tu peux afficher des messages texte dans ton jeu de plusieurs façons.

### Messages d'accueil (splash)

Un message d'accueil sert d'écran titre pour présenter le jeu. Un écran d'accueil peut aussi avoir, en option, une deuxième ligne de sous-titre. Quand le joueur est prêt, il appuie sur le bouton **A** pour lancer le jeu.

```blocks
game.splash("My Screen Message")
```

La ligne de sous-titre s'ajoute en développant le bloc avec **(+)** et en saisissant la deuxième ligne de texte.

```blocks
game.splash("Star Quest", "Journey to new and distant galaxies!")
```

### Afficher des messages texte plus longs

Si tu dois interrompre le déroulement d'un jeu pour afficher des informations au joueur, utilise un bloc ``||game:show long text||``. Il affiche un texte plus long qu'un message d'accueil. Tu peux choisir où le message apparaît à l'écran : dans un coin, au centre, ou sur tout l'écran.

Les positions où tu peux afficher le texte sont :

* en bas
* à gauche
* à droite
* en haut
* au centre
* plein écran

Si le message est trop long pour la zone d'affichage, appuyer sur le bouton **A** fait défiler le reste du texte. Après avoir lu le message, appuyer sur le bouton **A** ferme l'affichage du texte et le jeu continue.

```blocks
game.showLongText("Did you see the UFO enter land to your left? Turn on your shields and arm the phasors", DialogLayout.Bottom)
```

### Exemple

Cet exemple combine les deux blocs d'affichage de texte. Un écran d'accueil est affiché, puis un long message texte est montré dans chaque position de l'écran. Appuie sur le bouton **A** pour passer à chaque message « suivant ».

```blocks
game.splash("Press (A) to begin testing text messages")
game.showLongText("This is text is at the bottom. Press the (A) button for the next message", DialogLayout.Bottom)
game.showLongText("This is text is at the left. Press the (A) button for the next message", DialogLayout.Left)
game.showLongText("This is text is at the right. Press the (A) button for the next message", DialogLayout.Right)
game.showLongText("This is text is at the top. Press the (A) button for the next message", DialogLayout.Top)
game.showLongText("This is text is in the center. Press the (A) button for the next message", DialogLayout.Center)
game.showLongText("This is text is full screen. Press the (A) button to end messages", DialogLayout.Full)
```
