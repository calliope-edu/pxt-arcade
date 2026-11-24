# jouer jusqu'à la fin

Joue une mélodie intégrée jusqu'à ce qu'elle se termine.

```sig
music.baDing.playUntilDone()
```

Il existe plusieurs mélodies intégrées que tu peux jouer dans ton jeu. Avec les blocs, une mélodie est choisie dans une liste déroulante. En JavaScript, une instance de l'une des mélodies intégrées est référencée dans ton code. Tu appelles la fonction **playUntilDone** depuis cette instance de la mélodie, comme ceci :

```typescript
music.baDing.playUntilDone()
```

La partie de ton programme qui appelle **playUntilDone** attend que la mélodie soit terminée. Une fois la mélodie terminée, ton code continue de s'exécuter. Si tu veux que le code qui suit la fonction **playUntilDone** continue immédiatement, tu peux utiliser [jouer](/reference/mixer/melody/play-until-done) à la place.

## ~ hint

Pour comprendre comment les mélodies sont créées pour arcade, consulte la page développeur [son](/developer/sound).

## ~

## Paramètres

* **volume** : un volume sonore facultatif pour jouer la mélodie. Le volume va de `0` à `255`. La valeur par défaut est `128`.

## Exemples #example

### Je vais jouer 'BaDing' #ex1

Joue le son intégré appelé `BaDing`.

```blocks
music.baDing.playUntilDone()
```

### Jouer 'Power Up' à faible volume #ex2

Joue le son ``power up`` à un volume de `75`.

```blocks
music.powerUp.playUntilDone(75)
```

## Voir aussi #seealso

[jouer](/reference/music/melody/play),
[boucle](/reference/music/melody/loop),
[arrêter](/reference/music/melody/stop)

```package
mixer
```