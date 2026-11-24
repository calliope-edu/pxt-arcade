# player Selector

Hole einen Spieler mit einer Spielerauswahl.

```sig
mp.playerSelector(mp.PlayerNumber.One)
```

Spieler in einem Mehrspielerspiel werden durch das Spielobjekt [Spieler](/types/player) dargestellt. Auf Spieler-Objekte wird meist über eine Spielerauswahl zugegriffen. Die Auswahlen sind nach der Spielernummer benannt, z. B. `player 1`, `player 2` usw. Für viele Mehrspielerblöcke brauchst du eine Auswahl, um festzulegen, welchen Spieler oder welche Spieler du mit dem Block verwendest.

## Parameter

* **player**: ein [Spieler](/types/player), der über die Auswahl abgerufen wird.

## Rückgabewert

* der [Spieler](/types/player), der durch die Auswahl in **player** gewählt wurde.

## Beispiel #example

Lege ein Figuren-Sprite für den Spieler fest, der mit ``||mp:player 2||`` ausgewählt ist.

```blocks
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.Two), sprites.create(img`
    . . . . f f f f f . . . . . . . 
    . . . f e e e e e f . . . . . . 
    . . f d d d d e e e f . . . . . 
    . c d f d d f d e e f f . . . . 
    . c d f d d f d e e d d f . . . 
    c d e e d d d d e e b d c . . . 
    c d d d d c d d e e b d c . . . 
    c c c c c d d e e e f c . . . . 
    . f d d d d e e e f f . . . . . 
    . . f f f f f e e e e f . . . . 
    . . . . f f e e e e e e f . f f 
    . . . f e e f e e f e e f . e f 
    . . f e e f e e f e e e f . e f 
    . f b d f d b f b b f e f f e f 
    . f d d f d d f d d b e f f f f 
    . . f f f f f f f f f f f f f . 
    `, SpriteKind.Player))
```

## Siehe auch #seealso

[Spieler nach Nummer abrufen](/reference/multiplayer/get-player-by-number),
[Spieler nach Index abrufen](/reference/multiplayer/get-player-by-index)

```package
multiplayer
```