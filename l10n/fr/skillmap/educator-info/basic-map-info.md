# À propos du Guide des jeux Arcade pour débutants

**Une page pour les enseignants et les parents**

Le **Guide des jeux Arcade pour débutants** présente les types de blocs de code les plus utilisés dans MakeCode Arcade.

Dans cette série d'activités, les élèves créent leurs tout premiers jeux numériques avec MakeCode Arcade. Ce guide s'adresse aux élèves qui découvrent MakeCode et qui ont peu ou pas d'expérience en programmation. Grâce à des instructions pas à pas, les élèves se concentrent sur des projets de 3 catégories différentes : [Narration](#parcours-narration), [Jeux de clics](#parcours-jeu-de-clics) et [Jeux de collecte](#parcours-jeu-de-collecte).

Conçue pour les élèves de 11 à 15 ans, cette expérience comprend 11 tutoriels au total (environ 145 minutes d'enseignement) répartis sur 5 séances. À la fin de chaque parcours, les élèves reçoivent un certificat de réussite.

|                 | Minutes* | Type de jeu | Concepts clés |
| --------------- | -------- | --------- | ------------ |
| **Jour 1**           |          |           |              |
| Découvre MakeCode Arcade (facultatif) | 12 | Introduction | prise en main de l'interface, blocs de base, événements |
| Carte de vœux | 10 | Histoire | conception graphique, musique |
| Des vœux plus grands | 10 | Histoire | conception graphique, musique, événements |
| **Jour 2**           |          |           |              |
| Pour rire   |30 | Histoire | narration, événements |
| **Jour 3**           |          |           |              |
| Jeu de clics    |10  | Clics | événements, score, minuteur |
| Bouton à cliquer   |10 | Clics | animation, arguments, événements |
| Superstar du clic   |7  | Clics | projectiles, nombres aléatoires, événements |
| **Jour 4**           |          |           |              |
| Horde de dinos      | 10       | Collecte | boucles, projectiles, nombres aléatoires |
| Sauve les bébés dinos ! | 12   | Collecte | collisions, variables, minuteur |
| **Jour 5**  |          |           |              |
| Gare aux voitures | 14 | Collecte | projectiles, nombres aléatoires, variables |
| Anime-les ! | 20 | Collecte | conception graphique, boucles |

\* Les durées sont approximatives et correspondent au temps nécessaire pour suivre les instructions telles qu'elles sont rédigées. Nous vous encourageons à prévoir du temps supplémentaire pour la créativité et le débogage.

### Objectifs

Après avoir terminé le Guide des jeux Arcade pour débutants, les élèves auront découvert tous les éléments nécessaires pour créer avec succès leurs propres jeux d'arcade avec MakeCode Arcade.

Plus précisément, ils aborderont les thèmes suivants :

#### Concepts d'informatique

- Événements et flux de contrôle du programme
- Saisie de l'utilisateur
- Boucles
- Variables
- Événements

#### Concepts de conception de jeux

- Narration
- Sprites et projectiles
- Graphismes, sons et effets
- Coordonnées
- Vitesse
- Score
- Conditions de victoire/défaite
- Hasard
- Animation

### Parcours Narration

Dans ce parcours, les élèves apprennent à utiliser des images d'arrière-plan, de la musique et des boîtes de dialogue pour créer des projets originaux qui transmettent un message, racontent une blague ou illustrent leurs idées.

#### 1. Carte de vœux

| Activité | Carte de vœux (10 min) |
|---|---|
| ![Miniature Carte de vœux](/static/skillmap/map-info/greeting-card.png) | Conçois une carte de vœux simple à envoyer à tes amis et à ta famille. |
| Blocs utilisés | **[On Start](/blocks/on-start)** <br/><br/> ``[scene.setBackgroundImage(img`.`)]``<br/>``[effects.confetti.startScreenEffect()]``<br/> ``[music.playMelody("", 120)]``|
| Solution possible | [Projet Carte de vœux](https://arcade.makecode.com/14885-64298-31361-79978) |

#### 2. Des vœux plus grands

| Activité | Des vœux plus grands (10 min) |
|---|---|
| ![Miniature Des vœux plus grands](/static/skillmap/map-info/bigger-greeting.png) | Cette activité prolonge l'activité Carte de vœux précédente.<br/>Les élèves ajoutent un texte qui s'affiche lorsqu'on appuie sur un &nbsp;<br/>bouton. |
| Blocs utilisés | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[game.setDialogFrame(img`.`)]``<br/>``[game.setDialogTextColor(0)]``<br/>``[game.showLongText("", DialogLayout.Bottom)]`` |
| Solution possible | [Projet Des vœux plus grands](https://arcade.makecode.com/42444-68014-69780-79234) |

#### 3. Pour rire

| Activité | Pour rire (30 min) |
|---|---|
| ![Miniature Pour rire](/static/skillmap/map-info/joking-around.png) | Cette activité présente les personnages et les dialogues<br/>tandis que les élèves donnent vie à de courtes blagues. |
| Blocs utilisés | ``[music.baDing.play()]``<br/>``[music.setVolume(20)]``<br/>``[game.splash("")]``<br/>``[sprites.create(img`.`).setPosition(0, 0)]``<br/>``[sprites.create(img`.`).startEffect(effects.spray)]``<br/>``[sprites.create(img`.`).setImage(img`.`)]``<br/>``[scene.cameraShake(4, 500)]`` |
| Solution possible | [Projet Pour rire](https://arcade.makecode.com/87828-03702-46750-80177) |

##### Idées de modifications

Après Pour rire, les élèves peuvent revenir à la Skillmap et cliquer sur « ENREGISTRER DANS MES PROJETS », ce qui ouvre le jeu dans une fenêtre avec la boîte à outils complète. Voici quelques modifications qu'ils peuvent essayer :

- Ajouter un deuxième sprite pour une blague plus interactive
- Déplacer des sprites ou changer d'arrière-plan à chaque appui sur le bouton (A)
- Modifier le projet pour illustrer un poème
- Utiliser ce qu'ils ont appris pour illustrer une blague ou une histoire plus longue

### Parcours Jeu de clics

Dans ce parcours, les élèves utilisent des conteneurs d'événements, des sprites et des projectiles pour créer un simple « jeu de clics » qui reçoit une saisie de l'utilisateur et exécute une action. Le défi consiste à appuyer sur le bouton (A) le plus vite possible avant la fin du temps imparti.

#### 1. Jeu de clics

| Activité | Jeu de clics (10 min) |
|---|---|
| ![Miniature Jeu de clics](/static/skillmap/map-info/clicker-game.png) | Crée un jeu qui ajoute des points à chaque clic. |
| Blocs utilisés | ``[info.startCountdown(10)]``<br/>``[info.changeScoreBy(1)]``<br/>``[info.onCountdownEnd(function () {})]``<br/>``[game.gameOver(true)]``|
| Solution possible | [Projet Jeu de clics](https://arcade.makecode.com/12273-78408-58405-09625) |

#### 2. Bouton à cliquer

| Activité | Bouton à cliquer (10 min) |
|---|---|
| ![Miniature Bouton à cliquer](/static/skillmap/map-info/button-clicker.png) | Ce jeu prolonge le niveau précédent en ajoutant un sprite animé<br/>qui change quand on appuie sur le bouton (A) et qu'on le relâche. |
| Blocs utilisés | ``[let monSprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[let power = 2]``|
| Solution possible | [Projet Bouton à cliquer](https://arcade.makecode.com/77414-66317-99137-92560) |

#### 3. Superstar du clic

| Activité | Superstar du clic (7 min) |
|---|---|
| ![Miniature Superstar du clic](/static/skillmap/map-info/clicking-superstar.png) | En s'appuyant sur le projet précédent, ce niveau ajoute des projectiles<br/>en forme d'étoiles qui jaillissent du bouton à chaque appui. |
| Blocs utilisés | ``[sprites.create(img`.`, SpriteKind.Player).startEffect(effects.spray, 100)]`` |
| Solution possible | [Projet Superstar du clic](https://arcade.makecode.com/24852-02760-23597-83909) |

##### Idées de modifications

Après Superstar du clic, les élèves peuvent revenir à la Skillmap et cliquer sur « ENREGISTRER DANS MES PROJETS », ce qui ouvre le jeu dans une fenêtre avec la boîte à outils complète. Voici quelques modifications qu'ils peuvent essayer :

- Déplacer le bouton A en bas à gauche et ajouter un bouton B en bas à droite
- Ajouter un nouveau sprite sur le piédestal, quelque chose de spécial !
- Changer le thème : des oiseaux dans un arbre au lieu d'étoiles sur scène

### Parcours Jeu de collecte

Les élèves utilisent des blocs de contrôle des sprites, des variables et des instructions conditionnelles pour créer un jeu dans lequel Maman Dino se dépêche de récupérer le plus possible de ses bébés tout en évitant la circulation.

#### 1. Horde de dinos

| Activité | Horde de dinos (10 min) |
|---|---|
| ![Miniature Horde de dinos](/static/skillmap/map-info/dino-hoard.png) | Crée un arrière-plan animé que ton héros parcourt à la recherche des bébés dinos. |
| Blocs utilisés | ``[let monSprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.moveSprite(sprites.create(img`.`), 0, 100)]``<br/>``[let random = randint(0, 10)]``<br/>``[let projectile = sprites.createProjectileFromSide(img`.`, 0, 100)]``<br/>``[sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, autreSprite) {})]``<br/>``[forever(function () {})]``<br/>``[sprites.create(img`.`).destroy()]`` |
| Solution possible | [Projet Horde de dinos](https://arcade.makecode.com/00050-04644-99185-20758) |


#### 2. Sauve les bébés dinos !

| Activité | Sauve les bébés dinos ! (12 min) |
|---|---|
| ![Miniature Sauve les bébés dinos](/static/skillmap/map-info/save-baby-dinos.png) | Prolonge l'activité précédente pour gagner des points en récupérant des dinos. |
| Blocs utilisés | ``[scene.setBackgroundColor(0)]``<br/>``[scene.setBackgroundImage(img`.`)]``<br/>``[effects.blizzard.startScreenEffect()]``<br/>``[sprites.create(img`.`).setStayInScreen(true)]``|
| Solution possible | [Projet Sauve les bébés dinos](https://arcade.makecode.com/21438-61170-25811-66074) |

#### 3. Gare aux voitures

| Activité | Gare aux voitures (14 min) |
|---|---|
| ![Miniature Gare aux voitures](/static/skillmap/map-info/traffic-dodger.png) | Va plus loin avec des voitures qui te font perdre une vie si tu les percutes. |
| Blocs utilisés | ``[sprites.create(img`.`).setKind(SpriteKind.Enemy)]``<br/>``[sprites.create(img`.`).y = 0]``|
| Solution possible | [Projet Gare aux voitures](https://arcade.makecode.com/76596-99011-88241-42675) |
 
#### 4. Anime-les !

| Activité | Anime-les ! (20 min) |
|---|---|
| ![Miniature Anime-les !](/static/skillmap/map-info/animate-it.png) | Peaufine ton jeu avec des animations pour donner vie à tes personnages ! |
| Blocs utilisés | ``[info.changeLifeBy(1)]``|
| Solution possible | [Projet Anime-les](https://arcade.makecode.com/20377-15271-69070-26521) |

##### Idées de modifications

Après Anime-les !, les élèves peuvent revenir à la Skillmap et cliquer sur « ENREGISTRER DANS MES PROJETS », ce qui ouvre le jeu dans une fenêtre avec la boîte à outils complète. Voici quelques modifications qu'ils peuvent essayer :

- Faire trembler la caméra quand le dino percute une voiture
- Ajouter un autre sprite qui donne plus de temps lorsqu'on le récupère
- Ajouter un sprite qui donne des vies supplémentaires lorsqu'on le récupère
- Changer la scène : un requin dans l'océan au lieu d'un dino dans la rue

### Et ensuite ?

Après avoir terminé le Guide des jeux Arcade pour débutants, les élèves peuvent passer aux activités suivantes :

* Construis un explorateur spatial
* Jeu de plateforme à défilement
