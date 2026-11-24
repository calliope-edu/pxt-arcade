## Ajouter une mélodie

Mets une petite chanson dans ton projet !

Pour une mélodie de plusieurs notes, ajoute le bloc **jouer la mélodie** là où tu veux lancer la musique.

### Exemple de code

```block
music.playMelody("" + "C D E F G A B C5 " + "C5 B A G F E D C ", 120)
```

### Utiliser une mélodie de la galerie

La galerie musicale contient quelques chansons pour différentes occasions. Clique sur la note de musique et choisis **Galerie** pour les parcourir.

### Créer une mélodie

Tu as une chanson dans le cœur que tu veux partager ? Clique sur la note de musique du bloc **jouer la mélodie** pour ouvrir l'éditeur de musique.

Ici, chaque ligne est un ton de la gamme (C, D, E, F, G, A, B, C5), de bas en haut. Chaque colonne est un temps. Tu peux assembler plusieurs mesures avec le bloc ``||text: join [ ] [ ]||`` de la catégorie ``||text:Text||``.
