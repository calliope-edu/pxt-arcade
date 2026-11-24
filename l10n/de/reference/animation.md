# Animation

## Sprite-Animationen

Erstelle Animationen auf Sprites und führe sie aus. Du kannst Animationen aus Einzelbildern erstellen oder
animierte Bewegungen auf einen vorhandenen Sprite anwenden.

```cards
animation.runImageAnimation(null, null)
animation.runMovementAnimation(null, "")
animation.stopAnimation(0, null)
```

## Erweiterte Animationen

Diese Blöcke unterstützen Programme, die erweiterte Animationsmethoden verwenden.
Du findest sie, indem du die Erweiterung `animation` zu deinem Projekt hinzufügst.

```cards
animation.createAnimation(0, 0)
animation.createAnimation(0, 0).addAnimationFrame(null)
animation.attachAnimation(null, null)
animation.setAction(null, 0)
```

## Siehe auch #seealso

[Bildanimation ausführen](/reference/animation/run-image-animation),
[Bewegungsanimation ausführen](/reference/animation/run-movement-animation),
[Animation stoppen](/reference/animation/stop-animation),
[Animationen erstellen](/reference/animation/create-animations),
[Animationsbild hinzufügen](/reference/animation/add-animation-frame),
[Animation anhängen](/reference/animation/attach-animation),
[Aktion setzen](/reference/animation/set-action)

```package
animation
```