# get Player Property

Hole den Wert einer Spielereigenschaft.

```sig
mp.getPlayerProperty(mp.playerSelector(mp.PlayerNumber.One), PlayerProperty.Index)
```

Spielereigenschaften enthalten Identitätsinformationen. Sie werden beim Erstellen eines [Spieler](/types/player)-Objekts gesetzt, um es eindeutig zu identifizieren. Derzeit gibt es zwei Eigenschaften: ``||mp:index||`` und ``||mp:number||``.

## Parameter

* **player**: der [Spieler](/types/player), dessen Eigenschaft abgerufen wird.
* **prop**: die Eigenschaft, deren **Wert** abgerufen wird:
>* `index`: der nullbasierte Index des Spielers in der Mehrspieler-Objektliste.
>* `number`: die Spielernummer des Spieler-Objekts.

## Rückgabewert

* eine [Zahl](/types/number), die der Wert der Eigenschaft ist.

## Beispiel #example

Hole die Spielernummer von `player 1` und zeige sie mit seinem Figuren-Sprite an.

```blocks
scene.setBackgroundColor(10)
mp.setPlayerSprite(mp.playerSelector(mp.PlayerNumber.One), sprites.create(img`
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
mp.getPlayerSprite(mp.playerSelector(mp.PlayerNumber.One)).sayText("I'm player " + mp.getPlayerProperty(mp.playerSelector(mp.PlayerNumber.One), mp.PlayerProperty.Number))
```

## Siehe auch #seealso

[Spielerzustand abrufen](/reference/multiplayer/get-player-state)

```package
multiplayer
```