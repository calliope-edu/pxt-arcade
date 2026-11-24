# Des étincelles

**Une page pour les enseignants et les parents**

Le parcours **Des étincelles** présente des concepts simples de conception de jeux et d'informatique à travers un jeu d'arcade de type « clicker », simple et amusant.

Dans cette série d'activités, les élèves créent un jeu de type clicker à 5 niveaux avec MakeCode Arcade. Ce parcours s'adresse aux élèves qui découvrent MakeCode et qui ont peu ou pas d'expérience en programmation.

* [Voir le plan de cours pour les enseignants](https://1drv.ms/w/s!AqsgsTyHBmRBoCHZ8rm2BKsISKS1?e=5xrAQl)
* [Voir les diapositives](https://1drv.ms/p/s!AqsgsTyHBmRBn2pQnnku4yb7iYfa?e=tsFXRo)
* [Consulter les ressources sur OneDrive](https://1drv.ms/f/s!AqsgsTyHBmRBn2mMdQSkzSMTSCJg?e=pnPxYg)





Conçue pour des élèves de 10 à 16 ans, cette expérience comprend 3 tutoriels au total (environ 45 minutes d'enseignement). À la fin du parcours, les élèves reçoivent un certificat de réussite et un badge.

|                 | Minutes* |  Concepts clés |
| --------------- | -------- |  ------------ |
| Un tas de brindilles    |18  |  sprites, événements, effets |
| On gagne, on perd   |22 |  sprites, victoire, défaite |
<!--| Place à l'animation   |15  |  son, texte, animations | -->


\* Les durées sont approximatives et basées sur le temps nécessaire pour suivre les instructions telles qu'elles sont rédigées. Nous vous encourageons à prévoir du temps supplémentaire pour la créativité et le débogage.

### Objectifs

Après avoir terminé Des étincelles, les élèves auront découvert tous les éléments nécessaires pour créer avec succès leur propre jeu de type clicker avec MakeCode Arcade, notamment :

#### Concepts d'informatique

- Séquences et algorithmes
- Événements
- Saisie utilisateur

<!--
- Fonctions
- Conditions
- Variables
-->


#### Concepts de conception de jeux

- Sprites
- Conception, sons et effets
- Minuteurs
- Score
- Critères de victoire/défaite



#### 1. Un tas de brindilles

| Activité | Un tas de brindilles (18 min) |
|---|---|
| ![Miniature de Un tas de brindilles](/static/skillmap/sparks/sparks1.gif) | Apprends à utiliser MakeCode Arcade et ajoute un sprite de foyer à ton projet. |
| Blocs utilisés |  ``[scene.setBackgroundImage(img`.`)]`` <br/> ``[let kindling = sprites.create(img`.`, SpriteKind.Player)]`` <br/> ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]`` <br/> ``[info.changeScoreBy(1)]`` <br/> ``[let kindling: Sprite = null; kindling.startEffect(effects.fire, 500)]``|
| Solution possible | [Projet Un tas de brindilles](https://makecode.com/_PXrdTU93ig45) |

#### 2. On gagne, on perd

| Activité | On gagne, on perd (12 min) |
|---|---|
| ![Miniature de On gagne, on perd](/static/skillmap/sparks/sparks2.gif) | Ajoute des conditions de victoire et de défaite à ton jeu à l'aide d'événements. |
| Blocs utilisés | <br/> ``[game.onUpdateInterval(1000, function () {}]`` <br/>``[info.changeScoreBy(1)]`` <br/> ``[info.onScore(30, function () {})]`` <br/> ``[game.setGameOverScoringType(game.ScoringType.LowScore) ]`` <br/> ``[info.setScore(0)]`` <br/> ``[game.gameOver(true)]``|
| Solution possible | [Projet On gagne, on perd](https://makecode.com/_KkM6gg0fEevk) |


<!--
#### 3. Place à l'animation

| Activité | Place à l'animation (15 min) |
|---|---|
| ![Miniature de Place à l'animation](/static/skillmap/sparks/sparks3.gif) | Ajoute du son et de l'animation pour peaufiner ton jeu ! |
| Blocs utilisés | ``[music.knock.play()]`` <br/> ``[animation.runImageAnimation(myHammer,assets.animation`hammerAnimation`,50,false)})]`` <br/>``[carnival.addLabelTo("Sparks Flying", carnival.Areas.Bottom))]`` |
| Solution possible | [Projet Place à l'animation](https://makecode.com/_PCKW94TVLMpA) |


#### 4. Joue avec tes amis

| Activité | Place à l'animation (15 min) |
|---|---|
| ![Miniature de Joue avec tes amis](/static/skillmap/sparks/sparks4.gif) | Quelques changements simples et tu joueras à chat en un rien de temps ! |
| Blocs utilisés | ``[game.showLongText(" ", DialogLayout.Center)]`` <br/> ``[carnival.startCountdownGame(15, carnival.WinTypes.Multi)]`` <br/>``[simplified.checkMoleEscape(mp.playerSelector(mp.PlayerNumber.Two), 1)]`` |
| Solution possible | [Projet Joue avec tes amis](https://makecode.com/_Hvte8pVtoDft) |

-->




##### Idées de modifications du jeu

Une fois Des étincelles terminé, les élèves peuvent revenir au parcours et cliquer sur « ENREGISTRER DANS MES PROJETS », ce qui ouvre le jeu dans une fenêtre avec la boîte à outils complète. Voici quelques modifications qu'ils peuvent essayer :

- Change la scène pour quelque chose de nouveau. Essaie de créer une fontaine en Grèce ou un nuage de pluie
- Transforme-le en jeu à deux joueurs : l'un joue le feu et l'autre l'arroseur
- Ajoute des effets sonores et/ou une musique de fond


### Et ensuite ?

Après avoir terminé Des étincelles, les élèves peuvent passer aux activités suivantes :

* [Sauve la galaxie](https://arcade.makecode.com/--skillmap#docs:/skillmap/galaxy)
* [Le jour de la dinde !](https://arcade.makecode.com/--skillmap#docs:/skillmap/turkey)




```package
arcade-carnival=github:microsoft/arcade-carnival
arcade-storytelling=github:microsoft/arcade-storytelling
arcade-text=github:microsoft/arcade-text
sparks=github:kiki-lee/sparks#v0.0.4
```
