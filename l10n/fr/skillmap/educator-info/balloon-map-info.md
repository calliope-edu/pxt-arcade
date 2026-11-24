# Ballons éclatés

**Une page pour les enseignants et les parents**

La Skillmap **Ballons éclatés** initie à des notions simples de conception de jeux et d'informatique à travers la création d'un jeu compétitif où il faut faire éclater des ballons.

Dans cette série d'activités, les élèves créent un jeu de clics simple avec MakeCode Arcade. Cette Skillmap s'adresse aux élèves qui découvrent MakeCode et n'ont que peu d'expérience en programmation.

Conçue pour les élèves de 10 à 15 ans, cette expérience comprend 3 tutoriels principaux (environ 50 minutes d'enseignement) et un tutoriel facultatif (environ 30 minutes d'enseignement). À la fin du niveau 3, les élèves reçoivent un certificat de réussite et un badge.

|                 | Minutes* |  Concepts clés |
| --------------- | -------- |  ------------ |
| Crée un jeu de clics    |15  |  événements, points, minuteur |
| Fais éclater ton ballon   |15 |  sprites, mise à l'échelle, événements |
| Gonfle-le !   |20  |  animation, événements |
| Fête à deux joueurs   |30  |  révision |


\* Les durées sont approximatives et correspondent au temps nécessaire pour suivre les instructions. Nous vous encourageons à prévoir du temps supplémentaire pour la créativité et le débogage. Notez que les utilisateurs de niveau intermédiaire et les élèves plus âgés avanceront probablement presque deux fois plus vite.

### Objectifs

À l'issue de **Ballons éclatés**, les élèves auront découvert tous les éléments nécessaires pour créer leur propre jeu de clics avec MakeCode Arcade.

Plus précisément, ils aborderont les thèmes suivants :

#### Concepts informatiques

- Événements et déroulement du programme
- Saisie de l'utilisateur
- Variables


#### Concepts de conception de jeux

- Sprites
- Mise à l'échelle
- Score du jeu
- Conditions de victoire/défaite
- Animation




#### 1. Crée un jeu de clics

| Activité | Crée un jeu de clics (15 min) |
|---|---|
| ![Miniature Crée un jeu de clics](/static/skillmap/balloon/balloon1.gif) | Apprends à utiliser MakeCode Arcade et crée un jeu de clics simple. |
| Blocs utilisés | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]`` <br/> ``[info.startCountdown(10)]``<br/>``[info.player1.changeScoreBy(1)]``|
| Solution possible | [Projet Crée un jeu de clics](https://makecode.com/_M3JP02fdg2tT) |

#### 2. Fais éclater ton ballon

| Activité | Fais éclater ton ballon (15 min) |
|---|---|
| ![Miniature Fais éclater ton ballon](/static/skillmap/balloon/balloon2.gif) | Ajoute un ballon qui se gonfle à chaque clic ! Tu seras surpris de voir à quel point il grossit avant la fin du temps. |
| Blocs utilisés | ``[scene.setBackgroundColor(1)]`` <br/> ``[let monSprite = sprites.create(img`.`, SpriteKind.Player)]`` <br/> `` [let myMouse: Sprite = null; myMouse.setPosition(50, 93)]`` <br/> ``[scaling.scaleByPixels(monSprite, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)]`` <br/> ``[sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, autreSprite) {})]`` <br/> ``[game.gameOver(true)]`` |
| Solution possible | [Projet Fais éclater ton ballon](https://makecode.com/_LTehszFPdDsm) |

#### 3. Gonfle-le !

| Activité | Gonfle-le ! (20 min) |
|---|---|
| ![Miniature Gonfle-le !](/static/skillmap/balloon/balloon3.gif) | Ajoute un personnage de fête foraine pour gonfler ton ballon ! Arriveras-tu à battre le chrono ? |
| Blocs utilisés | ``[controller.A.onEvent(ControllerButtonEvent.Released, function () {})]`` <br/>  `` [let myMouse: Sprite = null; myMouse.setImage(img`.`)]`` |
| Solution possible | [Projet Gonfle-le](https://makecode.com/_KipDKK94Faog) |


#### 4. Fête à deux joueurs

| Activité | Fête à deux joueurs (30 min) |
|---|---|
| ![Miniature Fête à deux joueurs](/static/skillmap/balloon/balloon4.gif) | Supprime le minuteur et ajoute un deuxième joueur pour une vraie compétition ! |
| Blocs utilisés | ``[controller.B.onEvent(ControllerButtonEvent.Pressed, function () {})]`` <br/> ``[controller.B.onEvent(ControllerButtonEvent.Released, function () {})]`` <br/>``[info.player2.changeScoreBy(1)]`` |
| Solution possible | [Projet Fête à deux joueurs](https://arcade.makecode.com/S70036-65158-11283-34659) |


##### Idées de modifications

Après avoir terminé **Ballons éclatés**, les élèves peuvent revenir à la Skillmap et cliquer sur « ENREGISTRER DANS MES PROJETS », ce qui ouvre le jeu dans une fenêtre avec la boîte à outils complète. Voici quelques modifications qu'ils peuvent essayer :

- Remplacer les animaux qui gonflent les ballons par autre chose.
- Faire grossir les ballons encore plus vite pour une partie plus rapide.
- Ajouter un effet sonore chaque fois que le ballon grossit.


### Et ensuite ?

Après avoir terminé Ballons éclatés, les élèves peuvent poursuivre avec les activités suivantes :

* [Build a Space Explorer](https://arcade.calliope.cc/skillmap#docs:/skillmap/space)
* [Monster Racer](https://arcade.calliope.cc/skillmap#docs:/skillmap/racer)


```package
simple-blocks=github:microsoft/arcade-tutorial-extensions/simple-blocks/
arcade-text=github:microsoft/arcade-text/
pxt-sprite-scaling=github:microsoft/pxt-common-packages/libs/sprite-scaling
```
