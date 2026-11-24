# move With Buttons

Steuere die Bewegung eines Spieler-Sprites mit den Pfeiltasten des Controllers.

```sig
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.One))
```

Das Sprite eines Spielers bewegt sich mit den Pfeiltasten des Controllers senkrecht oder waagerecht. Die Werte `vx` (waagerecht) und `vy` (senkrecht) sind die Geschwindigkeiten (Pixel pro Sekunde), mit denen sich das Sprite bewegt, wenn eine Pfeiltaste gedrückt wird. Wenn für `vx` und `vy` keine Werte gesetzt sind, wird der Standardwert `100` verwendet.

## Parameter

* **player**: der Spieler, für den die Bewegungssteuerung festgelegt wird.
* **vx**: eine optionale Geschwindigkeit, mit der sich der Spieler nach links oder rechts bewegt. Der Standardwert ist `100`.
* **vy**: eine optionale Geschwindigkeit, mit der sich der Spieler nach oben oder unten bewegt. Der Standardwert ist `100`.

## Beispiel #example

Lege ein Figuren-Sprite für `player 2` fest und lass es sich mit den Controllertasten bewegen.

```blocks
scene.setBackgroundColor(10)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f e e e e e f . . . . . 
    . . . f d d d d d d e f . . . . 
    . . f d f f d d f f d f f . . . 
    . c d d d e e d d d d e d f . . 
    . c d c d d d d c d d e f f . . 
    . c d d c c c c d d d e f f f f 
    . . c d d d d d d d e f f b d f 
    . . . c d d d d e e f f f d d f 
    . . . . f f f e e f e e e f f f 
    . . . . f e e e e e e e f f f . 
    . . . f e e e e e e f f f e f . 
    . . f f e e e e f f f f f e f . 
    . f b d f e e f b b f f f e f . 
    . f d d f f f f d d b f f f f . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.Player))
mp.moveWithButtons(mp.playerSelector(mp.PlayerNumber.Two))
```

## Siehe auch #seealso

[ist Taste gedrückt](/reference/multiplayer/is-button-pressed)

```package
multiplayer
```