# À propos de L'aventure du soigneur de zoo dans les jeux Arcade

**Une page pour les enseignants et les parents**

**L'aventure du soigneur de zoo !** est une introduction à la programmation par blocs pour les jeunes élèves. Elle guide les élèves à travers les actions de base de la conception de jeux narratifs, notamment : le mouvement, le hasard, le positionnement, ainsi que la création et la destruction d'éléments.

Dans cette série d'activités, les élèves utilisent la programmation pour gérer un zoo. Cette Skillmap convient aux élèves qui découvrent MakeCode et qui ont peu ou pas d'expérience en programmation. Grâce à des instructions pas à pas, les élèves se concentrent sur des projets liés au mouvement et à l'interaction.

Conçue pour les élèves de 11 à 15 ans, cette expérience comprend 6 tutoriels au total (environ 49 minutes d'enseignement), qui peuvent être répartis sur une ou deux séances. À la fin du parcours, les élèves reçoivent un certificat de réussite.

|                 | Minutes* | Type de jeu | Concepts clés |
| --------------- | -------- | --------- | ------------ |
| Premier jour | 5 | Introduction | conception de sprites, mouvement, navigation |
| Sur terre | 8 | Histoire | conception de sprites, mouvement, nombres aléatoires |
| En mer | 8 | Histoire | conception de sprites, mouvement, nombres aléatoires, boucles |
| Pingouins | 9 | Histoire | débogage, positionnement |
| Nourris le panda | 9 | Histoire | événements, nombres aléatoires, mouvement, destruction d'éléments |
| L'éclosion des cailles | 10 | Histoire | événements, destruction d'éléments, duplication |

\* Les durées sont approximatives et correspondent au temps nécessaire pour suivre les instructions telles qu'elles sont rédigées. Elles n'incluent pas le temps consacré à la conception des sprites. Nous vous encourageons à prévoir du temps supplémentaire pour la créativité et le débogage.

### Objectifs

Au fil de L'aventure du soigneur de zoo, les élèves créent leur propre sprite de soigneur, conçoivent des enclos et prennent soin des animaux. Tout au long de ces expériences, ils mobilisent des concepts d'informatique et de conception de jeux, tels que :

#### Concepts d'informatique

- Saisie de l'utilisateur
- Boucles
- Événements

#### Concepts de conception de jeux

- Conception de sprites
- Coordonnées
- Vitesse
- Score
- Hasard
- Effets

#### 1. Premier jour

| Activité | Premier jour (3 min) |
|---|---|
| ![Miniature Premier jour](/static/skillmap/zoo/activity1.png) | Dessine ton sprite de soigneur et fais-le se déplacer. |
| Principaux blocs utilisés | ``[let monSprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.moveSprite(monSprite)]``<br/> ``[scene.cameraFollowSprite(monSprite)]``|
| Solution possible | [Projet Premier jour](https://makecode.com/_UrRYAkLCjTW7) |

#### 2. Sur terre

| Activité | Sur terre (6 min) |
|---|---|
| ![Miniature Sur terre](/static/skillmap/zoo/activity2.png) | Conçois un enclos terrestre pour un animal du zoo. |
| Principaux blocs utilisés | ``[let monSprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let monSprite: Sprite=null; monSprite.setVelocity(randint(), randint())]``<br/>``[let monSprite: Sprite=null; monSprite.setBounceOnWall(true)]`` |
| Solution possible | [Projet Sur terre](https://makecode.com/_TeKEE8W21eXa) |

#### 3. En mer

| Activité | En mer (6 min) |
|---|---|
| ![Miniature En mer](/static/skillmap/zoo/activity2-2.png) | Conçois un bassin aquatique avec plusieurs créatures de la même espèce. |
| Principaux blocs utilisés | ``[let monSprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let monSprite: Sprite=null; monSprite.vx = 0]``<br/>``[let monSprite: Sprite=null; monSprite.setBounceOnWall(true)]``<br/>``[let monSprite: Sprite=null; monSprite.y = randint()]``<br/>``[for (let index = 0; index < 4; index++) {}]`` |
| Solution possible | [Projet En mer](https://makecode.com/_beDHXiLcj8dk) |

#### 4. Pingouins

| Activité | Pingouins (5 min) |
|---|---|
| ![Miniature Pingouins](/static/skillmap/zoo/activity3.png) | Cette activité apprend à corriger des erreurs de position dans le code. |
| Principaux blocs utilisés | ``[let penguin = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let monSprite: Sprite=null; monSprite.x = 0]`` |
| Solution possible | [Projet Pingouins](https://makecode.com/_7FETiTYJiKq8) |

#### 5. Nourris le panda

| Activité | Nourris le panda (10 min) |
|---|---|
| ![Miniature Nourris le panda](/static/skillmap/zoo/activity4.png) | Crée du bambou et guide le panda pour qu'il le mange. |
| Principaux blocs utilisés | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[let monSprite = sprites.create(img`.`, SpriteKind.Food)]``<br/>``[let monSprite: Sprite=null; monSprite.setPosition(randint(), randint())]``<br/>``[let panda: Sprite=null; panda.follow(monSprite)]``<br/>``[sprites.onOverlap()]``<br/>``[let autreSprite: Sprite=null; autreSprite.destroy(effects.disintegrate, 0)]``|
| Solution possible | [Projet Nourris le panda](https://makecode.com/_8AoUX74TK1Rr) |

#### 6. L'éclosion des cailles

| Activité | L'éclosion des cailles (6 min) |
|---|---|
| ![Miniature L'éclosion des cailles](/static/skillmap/zoo/activity5.png) | Utilise le code pour rassembler toutes les cailles et leurs œufs dans le poulailler. |
| Principaux blocs utilisés | ``[sprites.onOverlap()]``<br/>``[let autreSprite: Sprite=null; autreSprite.follow(monSprite)]``<br/>``[scene.onOverlapTile())]``<br/>``[let sprite: Sprite=null; sprite.destroy()]`` |
| Solution possible | [Projet L'éclosion des cailles](https://makecode.com/_UC93YfEEVEgq) |

##### Idées de modifications

Après L'éclosion des cailles, les élèves peuvent revenir à la Skillmap et cliquer sur « ENREGISTRER DANS MES PROJETS » pour n'importe quel module. Le jeu correspondant s'ouvre alors dans une fenêtre avec la boîte à outils complète. Voici quelques modifications qu'ils peuvent essayer :

- _[Sur terre/En mer]_ Ajouter un autre sprite avec son propre mode de déplacement
- _[En mer]_ Modifier les vitesses pour que chaque sprite se déplace à un rythme différent
- _[En mer]_ Faire se retourner les sprites lorsqu'ils touchent un mur
- _[Nourris le panda]_ Faire en sorte que le panda continue à bouger après avoir mangé
- _[Nourris le panda]_ Créer un autre panda
- _[L'éclosion des cailles]_ Rendre le jeu plus facile (par ex. en faisant bouger le gant plus vite)
