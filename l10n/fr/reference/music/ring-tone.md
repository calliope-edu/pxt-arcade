# sonner une tonalité

Joue une tonalité musicale sur le haut-parleur. La tonalité a une hauteur (fréquence) aussi aiguë ou grave que tu le souhaites.
La tonalité continue de jouer jusqu'à ce que tu lui dises de s'arrêter.

```sig
music.ringTone(0);
```

## #simnote
### ~hint

#### Simulateur

``||music:ring tone||`` fonctionne sur le @boardname@. Il se peut qu'il ne fonctionne pas dans le simulateur sur tous les navigateurs.

### ~

La tonalité continue de jouer jusqu'à ce que tu l'arrêtes avec [``||music:stop all sounds||``](/reference/music/stop-all-sounds).

## Paramètres

* ``frequency`` est un [nombre](/types/number) qui indique
à quel point la tonalité est aiguë ou grave. Ce
nombre est en **Hz** (**Hertz**), une unité de mesure de la fréquence (_hauteur_).

## Exemple #example

Joue une tonalité avec une fréquence de base de ``440`` mais modifie-la par pas de ``20`` Hertz vers le haut et vers le bas.

```blocks
let offset = 0
offset = -100
while (true) {
    while (offset < 100) {
        offset += 20
        music.ringTone(440 + offset)
        pause(300)
    }
    while (offset > -100) {
        offset += -20
        music.ringTone(440 + offset)
        pause(300)
    }
}
```

## Voir aussi #seealso

[pause](/reference/music/rest), [jouer une tonalité](/reference/music/play-tone),
[tempo](/reference/music/tempo), [régler le tempo](/reference/music/set-tempo),
[changer le tempo de](/reference/music/change-tempo-by)
