# Programme une aventure

**Une page pour les enseignants et les parents**

Le parcours **Programme une aventure** initie aux concepts de base de la conception de jeux et de l'informatique à travers un amusant jeu d'aventure textuel au style rétro.

Dans ces activités, les élèves créent une aventure textuelle avec MakeCode Arcade. Ce parcours s'adresse aux élèves qui découvrent MakeCode et qui ont peu ou pas d'expérience en programmation.

Il est conçu pour des élèves de 12 à 16 ans et comprend 3 tutoriels au total (environ 75 minutes de cours). À la fin du parcours, les élèves reçoivent un certificat de réussite et un badge.

|                 | Minutes* |  Concepts clés |
| --------------- | -------- |  ------------ |
| Commence ton voyage    |20  |  Conditions, événements |
| Rends-le spectaculaire   |25 |  Musique, images, fonctions |
| Vies et or   |30  |  Fonctions, narration |

\* Les durées sont des estimations du temps nécessaire pour suivre les instructions. Nous vous recommandons de prévoir du temps supplémentaire pour la créativité et le débogage.


### Objectifs d'apprentissage

Après avoir terminé « Programme une aventure », les élèves auront découvert tous les éléments nécessaires pour créer avec succès leur propre jeu d'aventure textuel avec MakeCode Arcade, notamment :

#### Concepts informatiques

- Séquences et algorithmes
- Événements
- Saisie de l'utilisateur
- Conditions
- Fonctions


#### Concepts de conception de jeux

- Critères de victoire et de défaite
- Musique et effets sonores
- Création d'images
- Conception d'histoires



#### 1. Commence ton voyage

| Activité | Commence ton voyage (20 min) |
|---|---|
| ![Aperçu de Commence ton voyage](/static/skillmap/adventure/adventure1.gif) | Utilise des conditions pour créer une histoire d'aventure ! |
| Blocs utilisés |  ``[adventure.addToTextlog(" ")]`` <br/> ``[pauseUntil(() => controller.anyButton.isPressed())]``  <br/> ``[if (controller.A.isPressed()) {}else{}]`` <br/> ``[game.gameOver(true)]``|
| Exemple de solution | [Projet Commence ton voyage](https://makecode.com/_iEp94zKPD4VX) |

#### 2. Rends-le spectaculaire

| Activité | Rends-le spectaculaire (25 min) |
|---|---|
| ![Aperçu de Rends-le spectaculaire](/static/skillmap/adventure/adventure2.gif) | Crée ta propre musique et tes propres images pour enrichir ton aventure !|
| Blocs utilisés | ``[function quest1() {} quest1()]`` <br/> ``[music.play( (music.createSong(hex`00780004080200`)), music.PlaybackMode.InBackground)]`` <br/> ``[ adventure.addImageToTextLog()]`` |
| Exemple de solution | [Projet Rends-le spectaculaire](https://makecode.com/_LW6JyKFvJMuA) |

#### 3. Vies et or

| Activité | Vies et or (30 min) |
|---|---|
| ![Aperçu de Vies et or](/static/skillmap/adventure/adventure3.gif) | Termine ton jeu avec des fonctions en ajoutant d'autres quêtes, avec des dangers et des récompenses ! |
| Blocs utilisés | ``[info.setLife(5)]`` <br/> ``[info.changeLifeBy(-1)]`` <br/>``[adventure.changeScoreOverride(adventure.Currency.Coins, 5)]`` |
| Exemple de solution | [Projet Vies et or](https://arcade.makecode.com/S86685-42080-20608-87423) |



##### Idées pour enrichir le jeu

Une fois « Programme une aventure » terminé, les élèves peuvent revenir au parcours et cliquer sur « ENREGISTRER DANS MES PROJETS ». Le jeu s'ouvre alors dans une fenêtre avec la boîte à outils complète. Voici quelques extensions qu'ils peuvent essayer :

- Ajouter des effets sonores qui se déclenchent quand le joueur fait un bon ou un mauvais choix
- Proposer plus de choix dans l'histoire en utilisant les touches haut, bas, gauche et droite au lieu de A et B


### Et ensuite ?

Après avoir terminé « Programme une aventure », les élèves peuvent poursuivre avec les activités suivantes :

* [Ballons éclatés](https://arcade.makecode.com/--skillmap#docs:/skillmap/balloon)
* [Le jour de la dinde !](https://arcade.makecode.com/--skillmap#docs:/skillmap/turkey)


```package
adventure=github:microsoft/arcade-tutorial-extensions/adventure#v0.0.10
```
