# arrêter

Arrête la lecture d'une mélodie intégrée.

```sig
music.baDing.stop()
```

Si la mélodie intégrée est en train de jouer, elle s'arrête. Si tu décides de rejouer la mélodie, elle recommence depuis le début. Elle ne reprend pas à l'endroit où tu l'as arrêtée.

Il existe plusieurs mélodies intégrées que tu peux jouer dans ton jeu. Avec les blocs, une mélodie est choisie dans une liste déroulante. En JavaScript, une instance de l'une des mélodies intégrées est référencée dans ton code. Tu appelles la fonction **stop** depuis cette instance de la mélodie, comme ceci :

```typescript
music.baDing.stop()
```

## ~ hint

Pour comprendre comment les mélodies sont créées pour arcade, consulte la page développeur [son](/developer/sound).

## ~

## Exemple #example

Joue en boucle la mélodie ``power up``. Attends 5 secondes, puis arrête-la.

```blocks
music.powerUp.loop()
pause(5000)
music.powerUp.stop()
```

## Voir aussi #seealso

[jouer](/reference/music/melody/play),
[jouer jusqu'à la fin](/reference/music/melody/play-until-done),
[boucle](/reference/music/melody/loop)

```package
mixer
```