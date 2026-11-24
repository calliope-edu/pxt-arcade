# lifespan (propriété)

Obtiens ou définis la durée de vie d'un sprite en millisecondes.

## Obtenir

Obtiens la durée de vie du sprite.

```block
let monSprite: Sprite = null

let lifetime = monSprite.lifespan
```

```typescript-ignore
let lifetime = monSprite.lifespan
```

### Retourne

* un [nombre](/types/number) qui est la durée de vie actuelle du sprite en millisecondes.

## Définir

```block
let monSprite: Sprite = null

monSprite.lifespan = 0
```

```typescript-ignore
monSprite.lifespan = 0
```

### Paramètre

* **value** : la nouvelle durée de vie du sprite.

## Durée de vie du sprite

Les sprites qui ne sont pas configurés pour se détruire automatiquement restent dans le jeu jusqu'à ce qu'ils soient détruits par un appel à leur fonction **destroy** ou jusqu'à ce que leur durée de vie expire. Tu dois définir la durée de vie pour donner à un sprite un temps de vie limité. Tu définis la durée de vie d'un sprite pour qu'il quitte le jeu après un certain temps.

La durée de vie d'un sprite est infinie à sa création et le reste jusqu'à ce que tu lui donnes une valeur. Une fois définie, la durée de vie commence à décompter jusqu'à `0`. Tu peux redéfinir la durée de vie pour garder un sprite en vie plus longtemps, comme bonus pour ton joueur.

## Exemple #example

Crée un sprite ``Player`` et définis sa ``lifespan`` à `1000` millisecondes (soit `1` seconde).

```blocks
let orangeBlock = image.create(16, 16)
orangeBlock.fill(4)
orangeBlock.drawRect(0, 0, 16, 16, 1)
let player = sprites.create(orangeBlock, SpriteKind.Player)
player.lifespan = 1000
```

## Voir aussi #seealso

[créer](/reference/sprites/create),
[à chaque mise à jour](/reference/game/on-update)
