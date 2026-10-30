# Tape-taupe

**Une page pour les enseignants et les parents**

La Skillmap **Tape-taupe** présente des concepts simples de conception de jeux et d'informatique à travers une interface de fête foraine ludique et familière.

Dans cette série d'activités, les élèves créent avec MakeCode Arcade un jeu simple de chasse à la taupe. Cette Skillmap s'adresse aux élèves qui découvrent MakeCode et qui ont peu ou pas d'expérience en programmation.

Conçu pour les élèves de 8 à 13 ans, ce parcours comprend au total 3 tutoriels (environ 45 minutes d'enseignement). À la fin du parcours, les élèves reçoivent un certificat de réussite et un badge.

|                 | Minutes* |  Concepts clés |
| --------------- | -------- |  ------------ |
| Chasse à la taupe    |18  |  sprites, événements, minuteur |
| L'heure du marteau   |12 |  sprites, chevauchements, événements |
| Place à l'animation   |15  |  son, texte, animations |


\* Les durées sont approximatives et correspondent au temps nécessaire pour suivre les instructions telles qu'elles sont rédigées. Nous vous encourageons à prévoir du temps supplémentaire pour la créativité et le débogage.

### Objectifs

Après avoir terminé Tape-taupe, les élèves auront découvert tous les éléments nécessaires pour créer avec succès leur propre jeu de clic avec MakeCode Arcade, notamment :

#### Concepts informatiques

- Séquences et algorithmes
- Événements
- Saisie de l'utilisateur


#### Concepts de conception de jeux

- Sprites
- Design, sons et effets
- Collision / chevauchement
- Comptes à rebours
- Score
- Conditions de victoire et de défaite
- Animation



#### 1. Chasse à la taupe

| Activité | Chasse à la taupe (18 min) |
|---|---|
| ![Miniature Chasse à la taupe](/static/skillmap/mole/mole1.gif) | Découvre MakeCode Arcade et ajoute à ton projet un sprite de personnage qui se déplace. |
| Blocs utilisés |  ``[scene.setBackgroundImage(img`.`)]`` <br/> ``[let mySprite = sprites.create(img`.`, SpriteKind.Enemy)]`` <br/> ``[game.onUpdateInterval(1000, function () {}]``|
| Solution possible | [Projet Chasse à la taupe](https://makecode.com/_4WPAes5LMe9z) |

#### 2. L'heure du marteau

| Activité | L'heure du marteau (12 min) |
|---|---|
| ![Miniature L'heure du marteau](/static/skillmap/mole/mole2.gif) | Ajoute un marteau en caoutchouc pour toucher la taupe et gagner des points ! |
| Blocs utilisés | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]`` <br/> ``[simplified.moveToRandomHoleOnGrid(myMole)]`` <br/> ``[simplified.moveOnlyOnscreenWithArrows(myHammer, simplified.Speeds.Fast)]`` <br/> ``[sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {})]`` <br/> ``[carnival.startCountdownGame(15, carnival.WinTypes.Score)]`` <br/> ``[info.changeScoreBy(1)]`` |
| Solution possible | [Projet L'heure du marteau](https://makecode.com/_3kzWrvbA51PL) |

#### 3. Place à l'animation

| Activité | Place à l'animation (15 min) |
|---|---|
| ![Miniature Place à l'animation](/static/skillmap/mole/mole3.gif) | Ajoute du son et de l'animation pour peaufiner ton jeu ! |
| Blocs utilisés | ``[music.knock.play()]`` <br/> ``[animation.runImageAnimation(myHammer,assets.animation`hammerAnimation`,50,false)})]`` <br/>``[carnival.addLabelTo("Whack-the-Mole", carnival.Areas.Bottom))]`` |
| Solution possible | [Projet Place à l'animation](https://makecode.com/_PCKW94TVLMpA) |


#### 4. Joue avec tes amis

| Activité | Joue avec tes amis (15 min) |
|---|---|
| ![Miniature Joue avec tes amis](/static/skillmap/mole/mole4.gif) | Quelques modifications simples et tu joueras à chat en un rien de temps ! |
| Blocs utilisés | ``[game.showLongText(" ", DialogLayout.Center)]`` <br/> ``[carnival.startCountdownGame(15, carnival.WinTypes.Multi)]`` <br/>``[simplified.checkMoleEscape(mp.playerSelector(mp.PlayerNumber.Two), 1)]`` |
| Solution possible | [Projet Joue avec tes amis](https://makecode.com/_Hvte8pVtoDft) |






##### Idées de modifications du jeu

Après avoir terminé Tape-taupe, les élèves peuvent revenir à la Skillmap et cliquer sur « ENREGISTRER DANS MES PROJETS », ce qui ouvre le jeu dans une fenêtre avec la boîte à outils complète. Voici quelques modifications qu'ils peuvent essayer :

- Remplacer la taupe par un autre personnage. Essaie un monstre, un extraterrestre ou une étoile !
- Animer le personnage chaque fois qu'il est touché par le marteau en caoutchouc.
- Ajouter une musique de fond.


### Et ensuite ?

Après avoir terminé Tape-taupe, les élèves peuvent passer aux activités suivantes :

* [Ballons éclatés](https://arcade.calliope.cc/skillmap#docs:/skillmap/balloon)
* [Space Explorer](https://arcade.calliope.cc/skillmap#docs:/skillmap/space)



```package
mole-images=github:microsoft/arcade-tutorial-extensions/mole-images#v0.0.11
carnival=github:microsoft/arcade-carnival
```
