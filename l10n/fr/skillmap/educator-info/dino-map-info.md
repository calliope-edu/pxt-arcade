# À propos de la Skillmap « Sauve les bébés dinos »

**Une page pour les enseignants et les parents**

La **Skillmap « Sauve les bébés dinos »** présente les types de blocs de code les plus utilisés dans MakeCode Arcade.

Dans cette série d'activités, les élèves créent un jeu de collecte dans lequel Maman Dino évite la circulation pour sauver ses bébés. Ce guide s'adresse aux élèves qui découvrent MakeCode et n'ont que peu ou pas d'expérience en programmation.

Conçue pour les élèves de 11 à 15 ans, cette expérience comprend 4 tutoriels au total (environ 105 minutes d'enseignement) répartis sur 3 séances. À la fin de chaque parcours, les élèves reçoivent un certificat de réussite.

|                 | Minutes* | Type de jeu | Concepts clés |
| --------------- | -------- | --------- | ------------ |
| **Jour 1**           |          |           |              |
| La horde de dinos      | 20       | Collecte | boucles, projectiles, nombres aléatoires |
| Sauve les bébés dinos ! | 25   | Collecte | collisions, variables, minuteur |
| **Jour 2**  |          |           |              |
| Esquive la circulation | 30 | Collecte | projectiles, nombres aléatoires, variables |
| **Jour 3**  |          |           |              |
| Anime-le ! | 30 | Collecte | conception graphique, boucles |

\* Les durées sont approximatives et correspondent au temps nécessaire pour suivre les instructions. Nous vous encourageons à prévoir du temps supplémentaire pour la créativité et le débogage.

### Objectifs

À l'issue de la Skillmap « Sauve les bébés dinos », les élèves auront découvert tous les éléments nécessaires pour créer leurs propres jeux d'arcade avec MakeCode Arcade.

Plus précisément, ils aborderont les thèmes suivants :

#### Concepts informatiques

- Événements et déroulement du programme
- Saisie de l'utilisateur
- Boucles
- Variables
- Événements

#### Concepts de conception de jeux

- Sprites et projectiles
- Design, sons et effets
- Vitesse
- Score du jeu
- Conditions de victoire/défaite
- Hasard
- Animation


### Parcours du jeu

Les élèves utilisent des blocs de contrôle des sprites, des variables et des instructions conditionnelles pour créer un jeu dans lequel Maman Dino se dépêche de récupérer le plus possible de ses bébés tout en évitant la circulation.

#### 1. La horde de dinos

| Activité | La horde de dinos (10 min) |
|---|---|
| ![Miniature La horde de dinos](/static/skillmap/map-info/dino-hoard.png) | Crée un arrière-plan animé que ton sprite héros parcourt à la recherche des bébés dinos. |
| Blocs utilisés | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.moveSprite(sprites.create(img`.`), 0, 100)]``<br/>``[let random = randint(0, 10)]``<br/>``[let projectile = sprites.createProjectileFromSide(img`.`, 0, 100)]``<br/>``[sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {})]``<br/>``[forever(function () {})]``<br/>``[sprites.create(img`.`).destroy()]`` |
| Solution possible | [Projet La horde de dinos](https://arcade.makecode.com/00050-04644-99185-20758) |


#### 2. Sauve les bébés dinos !

| Activité | Sauve les bébés dinos ! (12 min) |
|---|---|
| ![Miniature Sauve les bébés dinos](/static/skillmap/map-info/save-baby-dinos.png) | Pars de l'activité précédente pour ajouter des points à ton jeu à chaque dino récupéré. |
| Blocs utilisés | ``[scene.setBackgroundColor(0)]``<br/>``[scene.setBackgroundImage(img`.`)]``<br/>``[effects.blizzard.startScreenEffect()]``<br/>``[sprites.create(img`.`).setStayInScreen(true)]``|
| Solution possible | [Projet Sauve les bébés dinos](https://arcade.makecode.com/21438-61170-25811-66074) |

#### 3. Esquive la circulation

| Activité | Esquive la circulation (14 min) |
|---|---|
| ![Miniature Esquive la circulation](/static/skillmap/map-info/traffic-dodger.png) | Enrichis ton jeu avec des voitures qui font perdre une vie quand tu les percutes. |
| Blocs utilisés | ``[sprites.create(img`.`).setKind(SpriteKind.Enemy)]``<br/>``[sprites.create(img`.`).y = 0]``|
| Solution possible | [Projet Esquive la circulation](https://arcade.makecode.com/76596-99011-88241-42675) |

#### 4. Anime-le !

| Activité | Anime-le ! (20 min) |
|---|---|
| ![Miniature Anime-le !](https://makecode.com/api/_VbY6wsJ643HV/thumb) | Peaufine ton jeu avec des animations pour donner vie à tes personnages ! |
| Blocs utilisés | ``[animation.runImageAnimation()]``|
| Solution possible | [Projet Anime-le](https://makecode.com/_VbY6wsJ643HV) |

##### Idées de modifications

Après avoir terminé « Anime-le ! », les élèves peuvent revenir à la Skillmap et cliquer sur « ENREGISTRER DANS MES PROJETS », ce qui ouvre le jeu dans une fenêtre avec la boîte à outils complète. Voici quelques modifications qu'ils peuvent essayer :

- Faire trembler la caméra quand le dino percute une voiture
- Ajouter un autre sprite qui donne plus de temps quand on le récupère
- Ajouter un sprite qui donne des vies supplémentaires quand on le récupère
- Remplacer le dino dans la rue par un requin dans l'océan

### Et ensuite ?

Après avoir terminé la Skillmap « Sauve les bébés dinos », les élèves peuvent poursuivre avec les activités suivantes :

* [Turkey Day](https://arcade.calliope.cc/skillmap#docs:/skillmap/turkey)
* [Jungle Jump](https://arcade.calliope.cc/skillmap#docs:/skillmap/jungle)
