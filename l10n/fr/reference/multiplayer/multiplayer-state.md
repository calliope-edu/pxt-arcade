# état multijoueur

Obtiens la valeur d'un identifiant d'état de joueur.

```sig
mp._multiplayerState(0)
```

Pour suivre les différents états multijoueur, un _type_ leur est attribué. C'est une valeur qui identifie l'un des états définis pour un [Joueur](/types/player). Les valeurs d'état multijoueur de ton jeu peuvent être définies ainsi :

```typescript-ignore
namespace MultiplayerState {
    export const score = create()
    export const life = create()
}
```

Dans les blocs, un identifiant de type d'état multijoueur sert à créer un élément de type d'état qui peut être affecté à une variable ou utilisé comme paramètre :

```block
let lifeState = MultiplayerState.life
```

Dans les blocs, la liste des états multijoueur te permet d'y ajouter tes propres identifiants d'état. Disons que tu veux donner des « gemmes » aux joueurs comme récompenses pendant une partie. Quand tu ajoutes `gems` à la liste des états, une nouvelle constante d'état appelée `gems` est aussi ajoutée au code de ton projet :

```typescript-ignore
namespace MultiplayerState {
    export const gems = create()
}
```

Tu peux maintenant définir des valeurs d'état pour le nombre de `gems` que tu donnes à un joueur.

```blocks
namespace MultiplayerState {
    export const gems = create()
}
mp.setPlayerState(mp.playerSelector(mp.PlayerNumber.One), MultiplayerState.gems, 6)
```

## Paramètres

* **kind** : l'identifiant d'état multijoueur dont tu veux obtenir la valeur.

## Retourne

* une valeur pour un identifiant d'état de joueur.

## Voir aussi #seealso

[définir l'état du joueur](/reference/multiplayer/set-player-state)

```package
multiplayer
```