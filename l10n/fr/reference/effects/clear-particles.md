# effacer les particules

Arrête l'effet de particules actuellement affiché sur un sprite.

```sig
effects.clearParticles(null)
```

Les effets de particules, une fois démarrés, sont attachés à un sprite. Tu peux arrêter l'effet plus tôt si une durée a été définie, ou l'empêcher de s'afficher en continu si aucune durée n'a été définie.

## Paramètres

* **anchor** : le sprite sur lequel l'effet est affiché.

## Exemple #example

### Lancer des confettis #ex1

Démarre un effet ``confetti`` sur le sprite blob pendant 5 secondes, puis arrête-le au bout de seulement 2 secondes.

```blocks
let blobject: Sprite = null
blobject = sprites.create(img`
    . a a a a .
    . a a a a .
    a a a a a a
    a a a a a a
    . a a a a .
    . a a a a .
`, 0)
blobject.startEffect(effects.confetti, 5000)
pause(2000)
effects.clearParticles(blobject)
```

### Feu de camp #ex2

Affiche un effet ``fire`` sortant d'une image de sprite de bois de chauffage. Quand le bouton **A** est pressé, le feu de camp s'éteint et l'effet ``blizzard`` avec l'effet ``bubble`` simule le feu qui couve.

```blocks
let logs: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    effects.clearParticles(logs)
    logs.startEffect(effects.blizzard, 750)
    logs.startEffect(effects.bubbles, 2000)
})
logs = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . e . . .
    . . e e . . . . . . . e e . . .
    . . . e e e . . . e e d e . . .
    . . . e d e e e . e d e e . . .
    . . . e e d d e e d d e . . . .
    . . . . . e e d d e e . . . . .
    . . . e e d e e d d e . . . . .
    . . e e d d e e e d d e e . . .
    . . e d d e e . e e e d e e . .
    . . e e e . . . . . e e e . . .
    . . . . . . . . . . . . . . . .
`, 0)
logs.startEffect(effects.fire)
```

### Effacer immédiatement toutes les particules

Le bloc effacer les particules supprime les sources, mais si tu veux supprimer immédiatement toutes les particules à l'écran, tu dois aussi appeler `particles.clearAll()`, qui n'est pour l'instant disponible qu'en programmation texte.

```typescript
let logs: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    effects.clearParticles(logs)
    logs.startEffect(effects.blizzard, 750)
    logs.startEffect(effects.bubbles, 2000)
})

controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    effects.clearParticles(logs)
    particles.clearAll()
})
logs = sprites.create(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . e . . .
    . . e e . . . . . . . e e . . .
    . . . e e e . . . e e d e . . .
    . . . e d e e e . e d e e . . .
    . . . e e d d e e d d e . . . .
    . . . . . e e d d e e . . . . .
    . . . e e d e e d d e . . . . .
    . . e e d d e e e d d e e . . .
    . . e d d e e . e e e d e e . .
    . . e e e . . . . . e e e . . .
    . . . . . . . . . . . . . . . .
`, 0)
logs.startEffect(effects.fire)
```

## Voir aussi #seealso

[démarrer l'effet](/reference/sprites/sprite/start-effect)
