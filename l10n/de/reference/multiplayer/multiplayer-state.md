# multiplayer State

Hole den Wert eines Spielerzustand-Bezeichners.

```sig
mp._multiplayerState(0)
```

Um verschiedene Mehrspielerzustände zu verwalten, wird ihnen eine _Art_ zugewiesen. Das ist ein Wert, der einen der Zustände eines [Spielers](/types/player) identifiziert. Die Mehrspielerzustände in deinem Spiel könnten so definiert sein:

```typescript-ignore
namespace MultiplayerState {
    export const score = create()
    export const life = create()
}
```

In Blöcken wird ein Bezeichner für die Zustandsart verwendet, um ein Element zu erstellen, das einer Variablen zugewiesen oder als Parameter verwendet werden kann:

```block
let lifeState = MultiplayerState.life
```

In Blöcken kannst du der Liste der Mehrspielerzustände eigene Bezeichner hinzufügen. Angenommen, du möchtest Spielern während des Spiels 'Edelsteine' als Belohnung geben. Wenn du `gems` zur Zustandsliste hinzufügst, wird auch eine neue Zustandskonstante namens `gems` in deinen Projektcode eingefügt:

```typescript-ignore
namespace MultiplayerState {
    export const gems = create()
}
```

Jetzt kannst du Zustandswerte für die Anzahl der `gems` festlegen, die du einem Spieler gibst.

```blocks
namespace MultiplayerState {
    export const gems = create()
}
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.gems, 6)
```

## Parameter

* **kind**: der Bezeichner des Mehrspielerzustands, dessen Wert abgerufen wird.

## Rückgabewert

* ein Wert für einen Spielerzustand-Bezeichner.

## Siehe auch #seealso

[Spielerzustand festlegen](/reference/multiplayer/set-player-state)

```package
multiplayer
```