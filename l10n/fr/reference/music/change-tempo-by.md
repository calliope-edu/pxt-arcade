# Changer le tempo de

Rend le [tempo](/reference/music/tempo) (vitesse d'un morceau de musique)
plus rapide ou plus lent de la valeur que tu indiques.

```sig
music.changeTempoBy(20)
```

## Simulateur

Cette fonction ne marche que sur la @boardname@ et dans certains navigateurs.

## Paramètres

* ``bpm`` est un [nombre](/types/number) qui indique de combien
  changer le bpm (battements par minute, ou nombre de temps dans une minute de
  la musique que la @boardname@ joue).

## Exemple #example

Ce programme rend la musique plus rapide de 12 bpm.

```blocks
music.changeTempoBy(12)
```

Ce programme rend la musique _plus lente_ de 12 bpm.

```blocks
music.changeTempoBy(-12)
```

## Voir aussi #seealso

[jouer une tonalité](/reference/music/play-tone), [sonner](/reference/music/ring-tone) 
