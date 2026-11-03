# À propos de Labyrinthe de la rock star des années 80 !

**Une page pour les enseignants et les parents**

Le parcours **Labyrinthe de la rock star des années 80 !** utilise des blocs de code de base de MakeCode Arcade pour mettre en œuvre des concepts de jeu simples.

Dans cette courte série d'activités, les élèves placent un sprite de rock star dans un labyrinthe en coulisses, où elle doit récupérer ses instruments et éviter les fans après un concert. Ce parcours s'adresse aux élèves qui découvrent MakeCode et qui ont peu ou pas d'expérience en programmation.

Conçue pour des élèves de 11 à 14 ans, cette expérience comprend 3 tutoriels au total (environ 22 minutes d'enseignement). À la fin du parcours, les élèves reçoivent un certificat de réussite.

|                 | Minutes* | Type de jeu | Concepts clés |
| --------------- | -------- | --------- | ------------ |
| Coincée en coulisses | 7 | Introduction | mouvement, création |
| Rassemble ton matériel | 8 | Labyrinthe | événements, score |
| Les ennemis attaquent ! | 7 | Labyrinthe | événements, score, minuteur |

\* Les durées sont approximatives et basées sur le temps nécessaire pour suivre les instructions telles qu'elles sont rédigées. Elles n'incluent pas le temps passé à concevoir des éléments ni à se replonger dans du code écrit auparavant. Nous vous encourageons à prévoir du temps supplémentaire pour la créativité et le débogage.

### Objectifs

Après avoir terminé Labyrinthe de la rock star des années 80, les élèves auront découvert des éléments d'informatique et de conception de jeux avec MakeCode Arcade.

Plus précisément, ils aborderont les thèmes suivants :

- Événements
- Mouvement
- Collisions
- Score
- Minuteur

### Projets

Au fil de ces projets, les élèves construisent progressivement un jeu dans lequel la rock star se déplace en coulisses, gagne des points en récupérant des instruments et en perd lorsqu'elle tombe sur un fan enthousiaste.

```package
pxt-tilemaps=github:microsoft/pxt-tilemaps/
```

#### 1. Coincée en coulisses
| Activité | Coincée en coulisses (7 min) |
|---|---|
| ![Miniature de Coincée en coulisses](/static/skillmap/rockstar/rockstar1.gif) | Crée une rock star en coulisses après le concert et garde un œil sur elle pendant qu'elle se déplace dans le décor. |
| Blocs utilisés | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; controller.moveSprite(mySprite)]``<br/>``[tiles.placeOnRandomTile()]``<br/>``[let mySprite: Sprite=null; scene.cameraFollowSprite(mySprite)]`` |
| Solution possible | [Projet Coincée en coulisses](https://makecode.com/_FM1DbPhEia87) |

#### 2. Rassemble ton matériel
| Activité | Rassemble ton matériel (8 min) |
|---|---|
| ![Miniature de Rassemble ton matériel](/static/skillmap/rockstar/rockstar2.gif) | Permets à ta rock star de gagner des points en ramassant ses instruments et ajoute un moyen de terminer la partie. |
| Blocs utilisés | ``[scene.onOverlapTile()]``<br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]``<br/>``[info.changeScoreBy(1)]``<br/>``[game.gameOver(true)]`` |
| Solution possible | [Projet Rassemble ton matériel](https://makecode.com/_aE3eYm23wad3) |

#### 3. Évite les fans !
| Activité | Évite les fans ! (7 min) |
|---|---|
| ![Miniature de Évite les fans !](/static/skillmap/rockstar/rockstar3.gif) | Ajoute des fans déchaînés qui volent des points en guise de souvenirs, sauf si la rock star parvient à les éviter. |
| Blocs utilisés | ``[scene.onOverlapTile()]``<br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]``<br/>``[info.changeScoreBy(-1)]``<br/>``[info.startCountdown(0)]`` |
| Solution possible | [Projet Évite les fans !](https://makecode.com/_dW115JWAR2d0) |
