# Carte de tuiles

La scène de ton jeu contient une carte de tuiles. Une carte de tuiles est un arrangement (un motif) de tuiles d'image qui remplissent tout ou partie de la scène. Au début, la scène a une carte de tuiles vide et aucun motif de tuiles n'est affiché. Pour construire ta scène, tu dois créer des tuiles, les ajouter à la scène, puis indiquer à la scène où placer les tuiles.

## Tuiles

Une tuile est une image définie pour être utilisée comme partie d'une carte de tuiles. Grâce aux tuiles, la scène peut afficher la même image plusieurs fois à différents endroits.

```block
scene.setTile(1, img`
d d
d d
`)
scene.setTile(4, img`
5 c 5 c 5 c
c 5 c 5 5 5
5 5 5 c 5 c
c 5 c 5 c 5
5 c 5 5 5 c
c 5 c 5 c 5
`)
```

Les tuiles utilisent un numéro de couleur comme identifiant (index). Pour placer une tuile dans la scène, ce numéro est inscrit à un endroit de la carte de tuiles. Ici, le numéro de couleur `1` sert à identifier une tuile de couleur unie.

```typescript
scene.setTile(1, img`
d d
d d
`)
```
### Tailles des tuiles

Les tuiles peuvent avoir n'importe quelle taille et leurs tailles n'ont pas besoin d'être identiques. La scène peut afficher des tuiles de tailles différentes en ajustant leurs dimensions pour mieux les montrer, afin qu'elles gardent leur ordre dans la scène.

### Collisions avec les sprites

Une tuile a une fonction spéciale pour provoquer une _collision_ avec un sprite. Si un sprite est en mouvement et touche une tuile que tu as définie pour les collisions, elle peut bloquer le sprite ou le dévier pour qu'il ne la traverse pas. Tu actives les collisions (``on``) pour bloquer les sprites.

```block
scene.setTile(6, img`8`, true)
```

## Carte de tuiles de la scène

La carte de tuiles est un plan qui indique où placer certaines tuiles. La carte a des lignes et des colonnes qui contiennent un index de tuile à chaque position. La carte de tuiles est en fait une image dans laquelle, au lieu d'avoir des pixels, les numéros de couleur aux positions des pixels sont des index de tuiles.

Comment ça marche ? Pour le découvrir, créons deux petites tuiles et ajoutons-les à la scène.

```block
scene.setTile(1, img`
d d
d d
`)
scene.setTile(2, img`
a a
a a
`)
```

Maintenant, nous créons une carte pour faire un motif avec les tuiles.

```block
scene.setTileMap(img`
1 2
2 1
`)
```

Tu vois que les numéros de couleur dans la carte correspondent aux numéros de couleur définis pour les tuiles. Les tuiles `1` et `2` sont disposées en damier dans la carte. Ensemble, les blocs ressemblent à ceci en code :

```typescript
scene.setTile(1, img`
d d
d d
`)
scene.setTile(2, img`
a a
a a
`)
scene.setTileMap(img`
1 2
2 1
`)
```

Après avoir défini la carte de tuiles, le motif apparaîtra dans la scène.

```sim
let tile2: Image = null
let tile1: Image = null
tile1 = image.create(32, 32)
tile1.fill(13)
tile2 = image.create(32, 32)
tile2.fill(10)
scene.setTile(1, tile1)
scene.setTile(2, tile2)
scene.setTileMap(img`
1 1 2 2 
1 1 2 2
2 2 1 1
2 2 1 1
`)
```

### Numéros de couleur sans correspondance

Si la carte de tuiles contient des numéros de couleur qui ne correspondent à aucune des tuiles ajoutées à la scène, le numéro de couleur n'est pas utilisé comme index mais simplement comme couleur de remplissage. La zone de cette tuile se remplit simplement avec la couleur correspondant à ce numéro.

```block
scene.setTileMap(img`
7 7 7 7
7 1 2 7
7 2 1 7
7 7 7 7
`)
```

L'image de la carte avec le numéro de couleur sans correspondance `7` est la suivante :

```typescript
scene.setTileMap(img`
7 7 7 7
7 1 2 7
7 2 1 7
7 7 7 7
`)
```

### Tuiles de tailles différentes

Quand la carte de tuiles contient des tuiles de tailles différentes, la scène peut ajuster leur taille à l'affichage pour essayer de les faire tenir. Si nécessaire, les plus grandes tuiles sont partiellement recouvertes ou réduites pour s'adapter aux plus petites.

En mélangeant ces deux tailles de tuiles dans la carte :

```typescript
scene.setTile(1, img`
d d
d d
`)
scene.setTile(2, img`
4 4 4 4
4 4 4 4
4 4 4 4
4 4 4 4
`)
scene.setTileMap(img`
1 2
2 1
`)
```

La scène les affiche ainsi :

```sim
let tile1 = image.create(32, 32)
tile1.fill(13)
let tile2 = image.create(64, 64)
tile2.fill(4)
scene.setTile(1, tile1)
scene.setTile(2, tile2)
scene.setTileMap(img`
1 2
2 1
`)
```

## Voir aussi #seealso

[définir tuile](/reference/color-coded-tilemap/set-tile),
[définir carte de tuiles](/reference/color-coded-tilemap/set-tile-map)

```package
color-coded-tilemap
```