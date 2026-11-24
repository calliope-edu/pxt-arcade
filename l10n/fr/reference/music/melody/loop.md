# boucle

Joue une mélodie intégrée en continu.

```sig
music.baDing.loop()
```

Une mélodie est jouée et continue d'être rejouée jusqu'à ce qu'elle soit arrêtée avec la fonction [arrêter](/reference/music/melody/stop).

Il existe plusieurs mélodies intégrées que tu peux jouer dans ton jeu. Avec les blocs, une mélodie est choisie dans une liste déroulante. En JavaScript, une instance de l'une des mélodies intégrées est référencée dans ton code. Tu appelles la fonction **loop** depuis cette instance de la mélodie, comme ceci :

```typescript
music.baDing.loop()
```

Ton programme continue immédiatement après que la mélodie commence à boucler.

## ~ hint

Pour comprendre comment les mélodies sont créées pour arcade, consulte la page développeur [son](/developer/sound).

## ~

## Paramètres

* **volume** : un volume sonore facultatif pour jouer la mélodie en boucle. Le volume va de `0` à `255`. La valeur par défaut est `128`.

## Exemples #example

### Je vais boucler 'BaDing' #ex1

Joue en boucle le son intégré appelé `BaDing`.

```blocks
music.baDing.loop()
```

### Boucler 'Power Up' à plein volume #ex2

Joue le son ``power up`` à un volume de `255`.

```blocks
music.powerUp.loop(255)
```

## Voir aussi #seealso

[jouer](/reference/music/melody/play),
[jouer jusqu'à la fin](/reference/music/melody/play-until-done),
[arrêter](/reference/music/melody/stop)

```package
mixer
```