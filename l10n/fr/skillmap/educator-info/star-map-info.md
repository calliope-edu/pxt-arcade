# À propos de la Skillmap « Spectacle de talents »

**Une page pour les enseignants et les parents**

Le **Spectacle de talents** initie à des notions simples de conception de jeux et d'informatique.

Dans cette série d'activités, les élèves créent un jeu de clics simple avec MakeCode Arcade. Cette Skillmap s'adresse aux élèves qui découvrent MakeCode et n'ont que peu ou pas d'expérience en programmation.

Conçue pour les élèves de 9 à 12 ans, cette expérience comprend 4 tutoriels au total (environ 50 minutes d'enseignement). À la fin du parcours, les élèves reçoivent un certificat de réussite et un badge.

|                 | Minutes* |  Concepts clés |
| --------------- | -------- |  ------------ |
| Bienvenue au spectacle    |15  |  événements, minuteur |
| Rejoins le public   |10 |  animation, événements |
| La plus grande star   |15  |  projectiles, nombres aléatoires, événements |
| La vie en roses   |10  |  projectiles, nombres aléatoires, événements |


\* Les durées sont approximatives et correspondent au temps nécessaire pour suivre les instructions. Nous vous encourageons à prévoir du temps supplémentaire pour la créativité et le débogage.

### Objectifs

À l'issue du Spectacle de talents, les élèves auront découvert tous les éléments nécessaires pour créer leur propre jeu de clics avec MakeCode Arcade.

Plus précisément, ils aborderont les thèmes suivants :

#### Concepts informatiques

- Événements et déroulement du programme
- Saisie de l'utilisateur
- Variables
- Listes/tableaux


#### Concepts de conception de jeux

- Sprites et projectiles
- Design, sons et effets
- Score du jeu
- Conditions de victoire/défaite
- Hasard
- Animation



#### 1. Bienvenue au spectacle

| Activité | Bienvenue au spectacle (15 min) |
|---|---|
| ![Miniature Bienvenue au spectacle](/static/skillmap/star/star1.gif) | Crée un jeu avec des animaux talentueux et ajoute des points à chaque clic. |
| Blocs utilisés | ``[info.startCountdown(10)]``<br/>``[info.changeScoreBy(1)]``<br/>``[info.onCountdownEnd(function () {})]``<br/>``[game.gameOver(true)]``|
| Solution possible | [Projet Bienvenue au spectacle](https://makecode.com/_d6TdD8VYPX1U) |

#### 2. Rejoins le public

| Activité | Rejoins le public (10 min) |
|---|---|
| ![Miniature Rejoins le public](/static/skillmap/star/star2.gif) | Ce jeu s'appuie sur le niveau précédent en ajoutant un sprite de public animé<br/>qui change lorsque l'on appuie sur le bouton (A) puis qu'on le relâche. |
| Blocs utilisés | ``[let monSprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``|
| Solution possible | [Projet Rejoins le public](https://makecode.com/_WY823cfoyTwj) |

#### 3. La plus grande star

| Activité | La plus grande star (15 min) |
|---|---|
| ![Miniature La plus grande star](/static/skillmap/star/star3.gif) | En s'appuyant sur le projet précédent, ce niveau ajoute des projectiles qui<br/>prennent la forme d'étoiles jaillissant du public à chaque appui sur le bouton. |
| Blocs utilisés | ``[sprites.create(img`.`, SpriteKind.Player).startEffect(effects.spray, 100)]`` |
| Solution possible | [Projet La plus grande star](https://makecode.com/_3gs2oWTCHXuw) |


#### 4. La vie en roses

| Activité | La vie en roses (15 min) |
|---|---|
| ![Miniature La vie en roses](/static/skillmap/star/star4.gif) | En s'appuyant sur le projet précédent, ce niveau utilise discrètement un tableau pour couvrir l'artiste d'étoiles et de roses. |
| Blocs utilisés | ``[let projectile = sprites.createProjectileFromSprite([img`.`, img`.`]._pickRandom(), clapping, randint(-100, 100), randint(-50, -100))]`` |
| Solution possible | [Projet La vie en roses](https://makecode.com/_aK1XDbamoH20) |


##### Idées de modifications

Après avoir terminé le Spectacle de talents, les élèves peuvent revenir à la Skillmap et cliquer sur « ENREGISTRER DANS MES PROJETS », ce qui ouvre le jeu dans une fenêtre avec la boîte à outils complète. Voici quelques modifications qu'ils peuvent essayer :

- Remplacer les animaux du public par une rangée de mains qui applaudissent
- Ajouter un nouveau sprite sur scène. Qui serait l'artiste ?
- Ajouter d'autres objets que le public peut lancer, comme des confettis ou des cœurs


### Et ensuite ?

Après avoir terminé le Spectacle de talents, les élèves peuvent poursuivre avec les activités suivantes :

* [Sauve les bébés dinos](https://arcade.calliope.cc/skillmap#docs:/skillmap/dino)
* [Jungle Jump](https://arcade.calliope.cc/skillmap#docs:/skillmap/jungle)
