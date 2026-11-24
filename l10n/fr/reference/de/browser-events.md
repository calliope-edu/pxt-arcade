# Événements du navigateur

Événements du clavier et de la souris de l'ordinateur sur lequel le jeu tourne.

Utilise-les pour les jeux joués **dans le navigateur** (simulateur, liens partagés) : réagis à n'importe quelle touche avec **lorsque la touche est appuyée**, vérifie avec **la touche est appuyée**, réagis aux clics et aux mouvements de la souris ou masque le pointeur de la souris.

## ~ hint

**Uniquement dans le navigateur.** Le Calliope mini n'a ni clavier ni souris ; sur l'appareil, ces blocs ne font rien. Pour les boutons du Calliope mini GameKit, utilise les blocs de **Contrôleur**.

## ~

```blocks
browserEvents.Space.onEvent(browserEvents.KeyEvent.Pressed, function () {
    game.splash("Space!")
})
browserEvents.MouseLeft.onEvent(browserEvents.MouseButtonEvent.Pressed, function (x, y) {
    game.splash("Click at " + x + ", " + y)
})
```

```package
browser-events
```
