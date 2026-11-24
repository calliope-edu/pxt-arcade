# À propos du jour de la dinde

**Une page pour les enseignants et les parents**

**Le jour de la dinde** présente des éléments de conception de jeux avec MakeCode Arcade.

Dans cette série d'activités, les élèves créent leur propre jeu de plateforme avec
MakeCode Arcade. Ce parcours s'adresse aux élèves qui découvrent MakeCode et qui ont peu ou pas d'expérience en programmation.
Grâce à des instructions pas à pas, les élèves
construisent un jeu dans lequel ils guident leur dinde vers la liberté, en sauvant des amis en chemin.

Conçue pour les élèves de 10 à 16 ans, cette expérience comprend 3 tutoriels au total (environ 25 minutes d'enseignement).
À la fin de ce parcours, les élèves reçoivent un certificat de réussite.

|                 | Minutes* | Concepts clés |
| --------------- | -------- | ------------ |
| Fais bouger la dinde | 10 | mouvement, accélération, événements, gravité |
| Rassemble une troupe | 10 | chevauchement, score |
| Gagner ou perdre | 5 | minuteurs, conditions de victoire |

\* Les durées sont approximatives et correspondent au temps nécessaire pour suivre les instructions telles qu'elles sont rédigées. Elles n'incluent pas le temps consacré à la conception des éléments ni à la reprise du code écrit précédemment. Nous vous encourageons à prévoir du temps supplémentaire pour la créativité et le débogage.

### Objectifs

Après avoir terminé Le jour de la dinde, les élèves auront découvert plusieurs concepts des jeux de plateforme avec MakeCode Arcade.

Plus précisément, ils aborderont les thèmes suivants :

#### Concepts d'informatique

- Événements
- Saisie de l'utilisateur

#### Concepts de conception de jeux

- Mouvement
- Accélération
- Gravité
- Création de ressources graphiques
- Projectiles

### Projets

Au fil de ces projets, les élèves construisent progressivement leur jeu. Ils verront la dinde évoluer d'une simple créature qui ne sait que se déplacer
à une _championne_ du saut qui sauve d'autres oiseaux pour gagner des points.

#### 1. Fais bouger la dinde

| Activité | Fais bouger la dinde (10 min) |
|---|---|
| ![Miniature Fais bouger la dinde](/static/skillmap/turkey/turkey1.gif) | Configure les déplacements latéraux et les sauts de ta dinde. |
| Blocs utilisés | ``[monSprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.moveSprite(monSprite, 0, 0)]``<br/>``[let monSprite: Sprite=null; monSprite.ay = 0]``<br/>``[scene.cameraFollowSprite(monSprite)]``<br/>``[controller.A.onEvent()]`` |
| Solution possible | [Projet Fais bouger la dinde](https://makecode.com/_awyEh4E58XEK) |

#### 2. Rassemble une troupe

| Activité | Rassemble une troupe (10 min) |
|---|---|
| ![Miniature Rassemble une troupe](/static/skillmap/turkey/turkey2.gif) | Gagne des points et libère les dindes de leurs cages. |
| Blocs utilisés | ``[scene.onOverlapTile()]``<br/>``[info.changeScoreBy()]`` <br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]`` <br/>``[let turkey: Sprite=null;tiles.placeOnTile(turkey, location)]``  <br/>``[let turkey: Sprite=null;turkey.follow(monSprite)]``|
| Solution possible | [Rassemble une troupe](https://makecode.com/_eH5FKDRqV9Dd) |

#### 3. Gagner ou perdre

| Activité | Gagner ou perdre (5 min) |
|---|---|
| ![Miniature Gagner ou perdre](/static/skillmap/turkey/turkey3.gif) | Ajoute des conditions de victoire et de défaite. |
| Blocs utilisés | ``[scene.onOverlapTile()]``<br/>``[game.gameOver(true)]``<br/>``[info.onCountdownEnd()]`` <br/>``[info.startCountdown(120)]`` |
| Solution possible | [Projet Gagner ou perdre](https://makecode.com/_3a81pJ6t1dHX) |



##### Idées de modifications

Une fois la Skillmap terminée, nous encourageons les élèves à réfléchir à la façon dont ils souhaitent modifier
ce jeu selon leurs centres d'intérêt. Voici quelques questions pour les guider :

- Quel genre de monde aimerais-je explorer ? Redessine la scène dans l'environnement de ton choix !
- Quel animal ou quelle créature trouverait sa place dans ce monde ? Remplace la dinde par la créature de ton choix !
- Quels objets mon personnage pourrait-il collecter ? Comment les intégrer de façon créative ?
