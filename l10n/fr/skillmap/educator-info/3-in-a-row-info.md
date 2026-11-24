# À propos de « 3 à la suite »

**Une page pour les enseignants et les parents**

Le parcours **3 à la suite** initie à des concepts intermédiaires de conception de jeux et d'informatique à travers un classique jeu de réflexion de type « match-3 ».

Dans ces activités, les élèves créent avec MakeCode Arcade un jeu de réflexion dans lequel ils échangent des cases pour aligner 3 symboles identiques ou plus. Ce parcours s'adresse aux élèves qui connaissent déjà un peu MakeCode et qui souhaitent explorer des concepts plus avancés comme les fonctions, les tableaux et les boucles imbriquées.

Il est conçu pour des élèves de 11 à 14 ans et comprend 3 tutoriels au total (environ 45 à 60 minutes de cours). À la fin du parcours, les élèves reçoivent un certificat de réussite et un badge.

|                 | Minutes* | Concepts clés |
| --------------- | -------- | ------------ |
| **Séance 1** | **45-60** |  |
| 3 à la suite – Partie 1 | 15 | Sprites, tilemaps, tableaux, fonctions |
| 3 à la suite – Partie 2 | 20 | Déplacement, boucles imbriquées, fonctions, conditions |
| 3 à la suite – Partie 3 | 15 | Variables, positions des cases, logique du jeu |

\* Les durées sont des estimations du temps nécessaire pour suivre les instructions. Elles n'incluent pas le temps de création des éléments graphiques ni celui de reprise du code déjà écrit. Nous vous recommandons de prévoir du temps supplémentaire pour la créativité et le débogage.

### Objectifs d'apprentissage

Après avoir terminé **3 à la suite**, les élèves auront découvert plusieurs concepts avancés de jeux d'arcade avec MakeCode Arcade.

Plus précisément, ils travailleront sur les thèmes suivants :

#### Concepts informatiques

- **Fonctions** : créer et appeler des blocs de code réutilisables
- **Tableaux** : stocker des collections de données (symboles de pierres précieuses) et y accéder
- **Boucles imbriquées** : utiliser des boucles dans des boucles pour parcourir plusieurs ensembles de données
- **Variables booléennes** : suivre des états vrai/faux pour la logique du jeu
- **Conditions** : prendre des décisions en fonction de l'état du jeu
- **Événements** : réagir aux actions de l'utilisateur (appuis sur les boutons)
- **Variables** : stocker et modifier des données (positions des cases, images à échanger)

#### Concepts de conception de jeux

- **Tilemaps** : utiliser des plateaux de jeu basés sur une grille
- **Sprites** : créer des objets de jeu visibles (curseur)
- **Déplacement** : déplacement sur une grille avec un positionnement au pixel près
- **Reconnaissance de motifs** : détecter les alignements dans les lignes et les colonnes
- **Score** : suivre et afficher les points du joueur
- **Critères de victoire et de défaite** : terminer la partie selon la performance du joueur
- **Effets sonores** : ajouter un retour sonore lors des alignements
- **Effets visuels** : utiliser des effets de particules pour célébrer les alignements

### Tutoriels

Les élèves construisent leur jeu de réflexion pas à pas en suivant les 3 tutoriels du parcours. Ils commencent par un plateau de jeu simple et un curseur, ajoutent la logique de détection des alignements, puis mettent en place l'échange de cases qui donne vie au jeu.

#### Partie 1

| Activité | 3 à la suite – Partie 1 (15 min) |
|---|---|
| ![Aperçu de la partie 1](/static/skillmap/3-in-a-row/3-in-a-row1.png) | Configurer le plateau de jeu (tilemap), créer un sprite curseur, créer un tableau de symboles de pierres précieuses et écrire une fonction qui remplit les cases vides avec des pierres aléatoires. |
| Blocs utilisés | ``[scene.setBackgroundColor(13)]``<br/>``[let cursor = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[cursor.setPosition(80, 56)]``<br/>``[tiles.setCurrentTilemap(tilemap`level1`)]``<br/>``[let symbols = [assets.tile`Gem1`, assets.tile`Gem2`]]``<br/>``[function fillEmptyTiles () {}]``<br/>``[for (let emptyTile of tiles.getTilesByType(assets.tile`transparency16`)) {}]``<br/>``[tiles.setTileAt(emptyTile, symbols._pickRandom())]``<br/>``[info.setScore(0)]`` |
| Exemple de solution | [Projet 3 à la suite – Partie 1](https://makecode.com/_fhYPxPb9j7K9) |

#### Partie 2

| Activité | 3 à la suite – Partie 2 (20 min) |
|---|---|
| ![Aperçu de la partie 2](/static/skillmap/3-in-a-row/3-in-a-row2.png) | Ajouter le déplacement du curseur avec les flèches, créer avec l'extension « Tile Scanner » une fonction qui trouve et supprime les alignements de trois, et ajouter des effets sonores et un retour visuel. |
| Blocs utilisés | ``[controller.up.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[cursor.y += -16]``<br/>``[function clearMatches () {}]``<br/>``[let cleared = false]``<br/>``[for (let gem of symbols) {}]``<br/>``[for (let location of tileScanner.scanForLines()) {}]``<br/>``[tileScanner.setTileAtLocations(location, assets.tile`transparency16`)]``<br/>``[cursor.startEffect(effects.confetti, 500)]``<br/>``[music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)]``<br/>``[info.changeScoreBy(1)]``<br/>``[if (!(cleared)) { game.gameOver(false) }]`` |
| Exemple de solution | [Projet 3 à la suite – Partie 2](https://makecode.com/_9ocWr34CCciR) |

#### Partie 3

| Activité | 3 à la suite – Partie 3 (15 min) |
|---|---|
| ![Aperçu de la partie 3](/static/skillmap/3-in-a-row/3-in-a-row3.png) | Créer avec le bouton A la logique d'échange des cases, obtenir les positions des cases, stocker et échanger les images des cases, puis appeler la fonction de recherche d'alignements après chaque échange. |
| Blocs utilisés | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[locationRight = cursor.tilemapLocation()]``<br/>``[locationLeft = locationRight.getNeighboringLocation(CollisionDirection.Left)]``<br/>``[swapImage = tiles.tileImageAtLocation(locationRight)]``<br/>``[tiles.setTileAt(locationRight, tiles.tileImageAtLocation(locationLeft))]``<br/>``[tiles.setTileAt(locationLeft, swapImage)]``<br/>``[clearMatches()]`` |
| Exemple de solution | [Projet 3 à la suite – Partie 3](https://makecode.com/_AreWAHeJFUxt) |

### Idées pour enrichir le jeu

Une fois le dernier tutoriel terminé, les élèves peuvent cliquer sur **« Enregistrer dans mes projets »** sur la page du parcours. Le jeu s'ouvre alors dans une fenêtre avec la boîte à outils complète. Voici quelques extensions qu'ils peuvent essayer :

- **Ajouter un minuteur** : créer de la pression avec un compte à rebours
- **Ajouter une musique de fond** : rendre le jeu plus prenant avec une musique d'ambiance
- **Créer des pierres bonus spéciales** : ajouter des pierres qui donnent des points bonus ou des capacités spéciales
- **Mettre en place des réactions en chaîne** : quand de nouvelles cases forment des alignements, déclencher d'autres suppressions
- **Ajouter l'échange vertical** : permettre de faire pivoter le curseur pour échanger verticalement
- **Ajouter des animations** : animer les pierres quand elles apparaissent ou disparaissent
- **Autoriser plusieurs échanges ratés** : donner au joueur une barre de vie qui diminue à chaque mauvais échange
- **Dessiner de nouvelles pierres** : remplacer les pierres par défaut par des créations personnelles

### Et ensuite ?

Après avoir terminé « 3 à la suite », les élèves peuvent poursuivre leur aventure avec MakeCode Arcade grâce à ces activités :

* [Plateforme dans la jungle](https://arcade.makecode.com/--skillmap#docs:/skillmap/jungle) – Créer un jeu de plateforme avec des sauts et des obstacles
* [Explorateur de l'espace](https://arcade.makecode.com/--skillmap#docs:/skillmap/space) – Construire un jeu d'aventure dans l'espace
* [Course de monster trucks](https://arcade.makecode.com/--skillmap#docs:/skillmap/racer) – Concevoir un jeu de course avec des monster trucks

```package
tileScanner=github:riknoll/arcade-tile-scanner
```
