# jouer

Joue une mélodie intégrée.

```sig
music.baDing.play()
```

Il existe plusieurs mélodies intégrées que tu peux jouer dans ton jeu. Avec les blocs, une mélodie est choisie dans une liste déroulante. En JavaScript, une instance de l'une des mélodies intégrées est référencée dans ton code. Tu appelles la fonction **play** depuis cette instance de la mélodie, comme ceci :

```typescript
music.baDing.play()
```

Ton programme continue immédiatement après que la mélodie commence à jouer. Si tu veux que le code qui suit la fonction **play** attende, tu peux utiliser [playUntilDone](/reference/mixer/melody/play-until-done) à la place.

## ~ hint

Pour comprendre comment les mélodies sont créées pour arcade, consulte la page développeur [son](/developer/sound).

## ~

## Paramètres

* **volume** : un volume sonore facultatif pour jouer la mélodie. Le volume va de `0` à `255`. La valeur par défaut est `128`.

## Exemples #example

### Je vais jouer 'BaDing' #ex1

Joue le son intégré appelé `BaDing`.

```blocks
music.baDing.play()
```

### Jouer 'Power Up' à plein volume #ex2

Joue le son ``power up`` à un volume de `255`.

```blocks
music.powerUp.play(255)
```

## Voir aussi #seealso

[jouer jusqu'à la fin](/reference/music/melody/play-until-done),
[boucle](/reference/music/melody/loop),
[arrêter](/reference/music/melody/stop)

```package
mixer
```