# À propos de Plongeon du requin

**Une page pour les enseignants et les parents**

**Plongeon du requin** présente de nombreux éléments de conception de jeux de MakeCode Arcade.

Dans cette série d'activités, les élèves créent un jeu MakeCode Arcade dans lequel ils doivent protéger leur requin des sous-marins pendant qu'il chasse sa nourriture. Cette activité s'adresse aux élèves qui découvrent MakeCode et qui ont peu ou une expérience moyenne en programmation. Grâce à des instructions pas à pas, les élèves se concentrent sur la création de jeux autour de 3 thèmes principaux : détruire des ennemis, collecter de la nourriture et personnaliser le jeu.

Conçue pour des élèves de 10 à 16 ans, cette expérience comprend 5 tutoriels au total (au moins 32 minutes d'enseignement environ). À la fin du parcours, les élèves reçoivent un certificat de réussite.

|                 | Minutes* | Type de jeu | Concepts clés |
| --------------- | -------- | --------- | ------------ |
| **Jour 1**           |          |           |              |
| Plante le décor | 7 | Introduction | mouvement, événements, projectiles |
| De la nourriture, pas des amis | 7 | Collecte | événements, positionnement, nombres aléatoires, mouvement |
| Bon appétit ! | 8 | Collecte | événements, destruction, score |
| Sous la mer | 8 | Collecte | boucles, conception, positionnement, nombres aléatoires |
| Place à l'animation ! | 10+ | Conception | conception graphique, effets |


\* Les durées sont approximatives et basées sur le temps nécessaire pour suivre les instructions telles qu'elles sont rédigées. Elles n'incluent pas le temps passé à concevoir des éléments ni à se replonger dans du code écrit auparavant. Nous vous encourageons à prévoir du temps supplémentaire pour la créativité et le débogage.

### Objectifs

Après avoir terminé Plongeon du requin, les élèves auront découvert de nombreux concepts de jeux d'arcade classiques avec MakeCode Arcade.

Plus précisément, ils aborderont les thèmes suivants :

#### Concepts d'informatique

- Événements
- Boucles
- Variables

#### Concepts de conception de jeux

- Mouvement
- Positionnement
- Hasard
- Effets
- Score
- Vitesse
- Conception graphique



#### 1. Plante le décor

| Activité | Plante le décor (7 min) |
|---|---|
| ![Miniature de Plante le décor](/static/skillmap/shark/shark1.gif) | Prépare ton requin des océans qui tire des lasers. |
| Blocs utilisés | ``[scene.setBackgroundColor(0)]``<br/>``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.moveSprite(mySprite)]``<br/>``[let mySprite: Sprite = null; mySprite.setStayInScreen(true)]``<br>``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[projectile = sprites.createProjectileFromSprite(img`.`, mySprite)]``|
| Solution possible | [Projet Plante le décor](https://makecode.com/_ghyiPCDsJLAC) |




#### 2. De la nourriture, pas des amis

| Activité | De la nourriture, pas des amis (7 min) |
|---|---|
| ![Miniature de De la nourriture, pas des amis](/static/skillmap/shark/shark2.gif) | De retour dans un océan sans ennemis, ce tutoriel montre comment faire apparaître de la nourriture pour ton requin. |
| Blocs utilisés | ``[game.onUpdateInterval()]``<br/>``[myFood = sprites.create(img`.`, SpriteKind.Food)]``<br/>``[let myFood: Sprite = null; let mySprite: Sprite = null; myFood.setPosition(0 + mySprite.x, randint())]``<br/>``[let myFood: Sprite = null; myFood.vx = 0]``|
| Solution possible | [Projet De la nourriture, pas des amis](https://makecode.com/_dLJHiifhR2ev) |

#### 3. Bon appétit !

| Activité | Bon appétit ! (8 min) |
|---|---|
| ![Miniature de Bon appétit !](/static/skillmap/shark/shark3.gif) | Ce jeu s'appuie sur le niveau précédent. Anime la façon dont ton requin mange les poissons et transforme-la en jeu. |
| Blocs utilisés | ``[sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {})]``<br/>``[let otherSprite: Sprite = null; otherSprite.destroy(effects.disintegrate,)]``<br/>``[info.changeScoreBy()]``<br/>``[info.startCountdown()]``<br/>``[info.onCountdownEnd(function () {})]``<br/>``[game.gameOver(true)]``|
| Solution possible | [Projet Bon appétit !](https://makecode.com/_WM31H3Uur331) |

#### 4. Sous la mer

| Activité | Sous la mer (8 min) |
|---|---|
| ![Miniature de Sous la mer](/static/skillmap/shark/shark4.gif) | S'appuyant sur le niveau précédent, ce niveau mêle conception et génération automatique pour créer un environnement marin unique pour ton requin. |
| Blocs utilisés | ``[scene.setBackgroundImage(img`.`)]``<br/>``[for (let index = 0; index < 10; index++) {}]``<br/>``[myDecor = sprites.create(img`.`,)]``<br/>``[let myDecor: Sprite = null; myDecor.setPosition(randint())]`` |
| Solution possible | [Projet Sous la mer](https://makecode.com/_2D9JL6Rm36yC) |


#### 5. Place à l'animation !

| Activité | Place à l'animation ! (15+) |
|---|---|
| ![Miniature de Place à l'animation !](/static/skillmap/shark/shark4a.gif) | Anime tes sprites pour un jeu plus vivant ! |
| Blocs utilisés | _Aucun_ |
| Solution possible | s.o. |



##### Idées de modifications du jeu

Une fois que les élèves ont travaillé sur « Place à l'animation ! », nous les encourageons à réfléchir à la façon dont ils veulent modifier ce jeu pour qu'il corresponde au mieux à leurs centres d'intérêt. Voici quelques questions à se poser :

- Quelle activité est-ce que j'aime vraiment ? Qu'est-ce que cela me dit sur le héros que je devrais choisir ?
- Quand je fais cette activité, de quel matériel ai-je besoin ? Remplace la nourriture pour poissons par ce matériel !
- Dans quel environnement est-ce que je pratique habituellement cette activité ? Remplace l'arrière-plan par quelque chose de semblable !

N'oublie pas d'enregistrer cette activité dans tes projets et de continuer à construire !
