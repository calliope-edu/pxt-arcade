# Boucle de jeu

Une `boucle de jeu` est au cœur du fonctionnement d'un jeu. Elle gère l'ordre des actions et répond aux changements d'état durant le jeu. Dans MakeCode @boardname@, la boucle de jeu principale est définie par la `||scene:Scene||` active.

### ~hint

#### Comportement de la boucle

MakeCode @boardname@ is under active development, so minor details in the game loop may change during updates. This page describes the game loop in version v1.3.42 of the editor.

If you are editing a file in another version, and find that things are not working exactly as you expect, you can see the exact implementation in the `scene.ts` file under `game`, or see the current file on [GitHub](https://github.com/microsoft/pxt-common-packages/blob/master/libs/game/scene.ts).

### ~

## Boucle de jeu de la scène

La boucle de jeu de la scène séquence toutes les actions et mises à jour de la scène de jeu, en se basant sur la physique qui a été définie ainsi que sur les événements survenant sur les objets du jeu. L'intervalle des images de la boucle est minutée en interne afin de permettre des mises à jour suffisamment fréquentes pour que les transitions soient fluides au niveau de la scène. La boucle cède suffisamment de temps pour l'entretien d'autres fibres liées au jeu.

Pour chaque trame, les étapes suivantes auront lieu (dans l'ordre) :

1. L'état du contrôleur est mis à jour, afin d'identifier si les boutons ont été pressés, relâchés, ou maintenu enfoncés.
2. Les `||sprites:Sprites||` contrôlées avec `||controller:controller.moveSprite||` sont déplacées en fonction des boutons enfoncés.
3. Sprites that are 'following' other sprites have their speed adjusted as necessary.
4. Physics are applied to the sprites, moving them around the screen and calculating collisions. See [the description of the physics step](#physics) for more details.
5. All `||game:on game update interval||` events are run if it has been long enough since the last time that event was run.
6. All `||game:on game update||` events are run.
7. Pre-render events are run 
    1. The camera is updated to center on any sprite that is currently being followed.
8. The current state of the game is rendered to the screen. See [the description of the game render step](#render) for more details.
9. Any diagnostics are rendered to the screen, if enabled.
10. The screen is updated and shown to the user.

It is also possible to register code to run between these events using `game.currentScene().eventContext.registerFrameHandler`. The first parameter to that function is an 'order', which specifies where in the game loop the event should run. The priorities for all portions of the default game loop are defined as constants in scene.ts, and all end in `_PRIORITY`.

### Etape des propriétés physiques #physics

This is the step where sprites are moved around the screen using the current velocity and acceleration set for them, and any `||scene:collisions||` and `||sprites:overlaps||` are calculated. The movements in this step are interpolated into small increments for fast moving `||sprites:sprites||`. This keeps these `||sprites:sprites||` from moving through walls or missing `||sprites:sprite overlap events||`.

1. La vitesse de chaque sprite dans la scène est mise à jour en fonction de son accélération, et de la vitesse maximale définie par le moteur de gestion de la physique actuel. Ces vitessses sont ensuite séparées en petites étapes qui seront prises une à la fois, et stockées pour chaque sprite.
2. Les obstacles sont éliminés de chaque sprite en mouvement.
3. Chaque sprite est déplacée d'une étape : 
    1. Les vitesses stockées sont comparées à la vitesse actuel du sprite, au cas où un événement aurait causé le retour en arrière du sprite. Si le sprite est revenu en arrière, le mouvement est ajusté afin que le sprite ne se déplace pas dans la mauvaise direction.
    2. Le sprite est déplacé de quelques pixels en fonction de sa vitesse.
    3. If the sprite can collide with walls, the sprite is checked for collisions with the tilemap. If it has hit something, the sprite may be stopped and a collision event with that type of wall is run.
    4. If the sprite can overlap with tile locations, the tiles underneath the sprite are checked and any matching event is run.
    5. If the sprite has not finished moving, it is stored to move again in future steps.
4. Lorsque tous les sprites se sont déplacés, les superpositions de sprites sont vérifiées, et tous les événements de superposition de sprites qui ne sont pas déjà en cours d'exécution sont configurés pour s'exécuter [indépendamment de la boucle du jeu](#fibers).
5. Si des sprites doivent encore se déplacer, l'étape 3 est répétée afin de continuer les mouvements. Sinon, les mouvements physique pour ce sprite sont terminés.

### Etape de rendu du jeu #render

Rendering elements to the screen is handled by drawing different elements depending on their `z index`. Elements with lower `z indices` are drawn to the screen before elements with higher `z indices`. A tie in `z index` equivalency is resolved by using creation order - newer elements are drawn on top of older elements when they are at the same `z index`.

1. The background is drawn to the screen, clearing anything else on the screen. This can be either a color or an image. This is always done first. 
    1. The `scene.Flag.SeeThrough` flag can be set on a scene to allow the scene below it to be renderered *below* the current scene as a background. This is currently used for text dialogs.
2. `z index -20`: les événements `on paint` sont exécutés et appliqués à l'écran.
3. `z index -1`: le `plan des tuiles` est rendu à l'écran.
4. `z index 0`: les sprites sont rendues à cet index par défaut, à moins qu'un nouveau `z index` leur ait été assigné.
5. `z index 80`: les événements `on shade` sont exécutés et appliqués à l'écran.
6. `z index 100`: Les éléments du `HUD`, comme `la vie` et `le score`, sont dessinés sur l'écran.

## Fibres indépendantes #fibers

It's possible to run things independently from the `||scene:Scene||` game loop. This can be done in a variety of ways - for example:

* `||control:control.runInParallel||` va exécuter la fonction qui lui est passée une seule fois indépendamment de la boucle du jeu.
* les boucles `||loops:forever||` ne vont s'exécuter que quand la `||scene:Scène||` dans laquelle ils sont créés est active, mais continueront indépendamment durant l'exécution; cela signifie qu'ils peuvent se produire plus ou moins d'une fois par trame.
* les `||sprites:événements de superposition||` sont créés dans la boucle de jeu, mais exécutés indépendamment après leur création. Par exemple, vous pouvez jouer une série de `||musique:mélodies|` lorsque le joueur touche un sprite de piano, sans que le jeu entier ne s'arrête.

Because these run outside of the core game loop, they are not necessarily bound to a particular `||scene:Scene||` while running; after the event starts, it will continue until it is complete, even if the scene changes. This can be confusing at times if you have multiple things running; for example, if you have an `||sprites:on overlap||` event with a delay, it may happen in another scene:

```typescript
sprites.create(img`
    . . . . . . . e c 7 . . . . . .
    . . . . e e e c 7 7 e e . . . .
    . . c e e e e c 7 e 2 2 e e . .
    . c e e e e e c 6 e e 2 2 2 e .
    . c e e e 2 e c c 2 4 5 4 2 e .
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
    . e e e 2 2 2 2 2 2 2 2 2 4 e .
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
    . . 2 e e 2 2 2 2 2 4 4 2 e . .
    . . . 2 2 e e 4 4 4 2 e e . . .
    . . . . . 2 2 e e e e . . . . .
`, SpriteKind.Player);
sprites.create(img`
    . . . . . . . . . . b b b . . .
    . . . . . . . . b e e 3 3 b . .
    . . . . . . b b e 3 2 e 3 a . .
    . . . . b b 3 3 e 2 2 e 3 3 a .
    . . b b 3 3 3 3 3 e e 3 3 3 a .
    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a
    b 3 3 3 d d d d 3 3 3 3 3 d d a
    b b b b b b b 3 d d d d d d 3 a
    b d 5 5 5 5 d b b b a a a a a a
    b 3 d d 5 5 5 5 5 5 5 d d d d a
    b 3 3 3 3 3 3 d 5 5 5 d d d d a
    b 3 d 5 5 5 3 3 3 3 3 3 b b b a
    b b b 3 d 5 5 5 5 5 5 5 d d b a
    . . . b b b 3 d 5 5 5 5 d d 3 a
    . . . . . . b b b b 3 d d d b a
    . . . . . . . . . . b b b a a .
`, SpriteKind.Enemy);
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, (sprite, autreSprite) => {
    pause(3000);
    game.splash("vous avez touché un ennemi il y a 3 secondes !");
});
```

In this case, the two sprites overlap immediately, so the `||game:splash screen||` will show up after three seconds, even if you open the menu. If you want to wait until the player leaves the menu to create the `||game:splash screen||`, one option is to store a reference to the current scene and wait until the player returns to that screen.

```typescript
const myMainScene = game.currentScene();
sprites.create(img`
    . . . . . . . e c 7 . . . . . .
    . . . . e e e c 7 7 e e . . . .
    . . c e e e e c 7 e 2 2 e e . .
    . c e e e e e c 6 e e 2 2 2 e .
    . c e e e 2 e c c 2 4 5 4 2 e .
    c e e e 2 2 2 2 2 2 4 5 5 2 2 e
    c e e 2 2 2 2 2 2 2 2 4 4 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 2 2 e
    c e e 2 2 2 2 2 2 2 2 2 2 4 2 e
    . e e e 2 2 2 2 2 2 2 2 2 4 e .
    . 2 e e 2 2 2 2 2 2 2 2 4 2 e .
    . . 2 e e 2 2 2 2 2 4 4 2 e . .
    . . . 2 2 e e 4 4 4 2 e e . . .
    . . . . . 2 2 e e e e . . . . .
`, SpriteKind.Player);
sprites.create(img`
    . . . . . . . . . . b b b . . .
    . . . . . . . . b e e 3 3 b . .
    . . . . . . b b e 3 2 e 3 a . .
    . . . . b b 3 3 e 2 2 e 3 3 a .
    . . b b 3 3 3 3 3 e e 3 3 3 a .
    b b 3 3 3 3 3 3 3 3 3 3 3 3 3 a
    b 3 3 3 d d d d 3 3 3 3 3 d d a
    b b b b b b b 3 d d d d d d 3 a
    b d 5 5 5 5 d b b b a a a a a a
    b 3 d d 5 5 5 5 5 5 5 d d d d a
    b 3 3 3 3 3 3 d 5 5 5 d d d d a
    b 3 d 5 5 5 3 3 3 3 3 3 b b b a
    b b b 3 d 5 5 5 5 5 5 5 d d b a
    . . . b b b 3 d 5 5 5 5 d d 3 a
    . . . . . . b b b b 3 d d d b a
    . . . . . . . . . . b b b a a .
`, SpriteKind.Enemy);
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, (sprite, autreSprite) => {
    pause(3000);
    pauseUntil(() => myMainScene === game.currentScene());
    game.splash("vous avez touché un ennemi il y a 3 secondes !");
});
```

It is generally better to avoid doing this whenever possible though, as it can make it much harder to keep track of the game state in your program code.