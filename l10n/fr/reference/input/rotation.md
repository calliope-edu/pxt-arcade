# Rotation

Trouve à quel point la @boardname@ est inclinée dans une direction.

```sig
input.rotation(Rotation.Roll);
```

## ~hint

La @boardname@ possède un composant appelé **accéléromètre** qui peut
détecter les façons dont la @boardname@ bouge.

## ~

## Paramètres

* ``kind`` la direction que tu vérifies :
> * `Pitch` : vers le haut ou vers le bas
> * `Roll` : vers la gauche ou vers la droite

## Retourne

* un [nombre](/types/number) qui indique à quel point la @boardname@ est inclinée dans la direction choisie, de `0` à `360` degrés

## Exemple : niveau à bulle @boardname@ #example

Ce programme t'aide à bouger la @boardname@ jusqu'à ce qu'elle soit à plat. Quand
elle est à plat, le message "LEVELED" apparaît dans la console.

```blocks
let roll = 0
let pitch = 0
forever(() => {
    pitch = input.rotation(Rotation.Pitch)
    roll = input.rotation(Rotation.Roll)
    if (Math.abs(pitch) < 10 && Math.abs(roll) < 10) {
        console.log("LEVELED")
    }
})
```

### ~hint
**Simulateur**

Si tu exécutes ce programme dans un navigateur, tu peux incliner la @boardname@ avec ta souris.
### ~

## Voir aussi #seealso

[accélération](/reference/input/acceleration)

```package
accelerometer
```
