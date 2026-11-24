# régler le tempo 

Rend le tempo (la vitesse) de la musique jouée plus rapide ou plus lent.

```sig
music.setTempo(60)
```

## #simnote
### ~hint

#### Simulateur

``||music:set tempo||`` fonctionne sur le @boardname@. Il se peut qu'il ne fonctionne pas dans le simulateur sur tous les navigateurs.
### ~

## Paramètres

* ``bpm`` est un [nombre](/types/number) qui indique le nombre de _battements par minute_ que tu veux. C'est la vitesse à laquelle
tu veux que le @boardname@ joue la musique.

## Exemple #example

Règle le tempo de la musique à 240 battements par minute.

```blocks
music.setTempo(240)
```

## Voir aussi #seealso

[jouer une tonalité](/reference/music/play-tone), [sonner une tonalité](/reference/music/ring-tone),
[pause](/reference/music/rest), [tempo](/reference/music/tempo),
[changer le tempo de](/reference/music/change-tempo-by)
