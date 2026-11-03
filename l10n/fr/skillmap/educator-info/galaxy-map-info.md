# À propos de Sauve la galaxie dans les jeux Arcade

**Une page pour les enseignants et les parents**

**Sauve la galaxie** propose aux élèves un enseignement du développement de jeux à base de blocs. Ce parcours aborde des concepts de développement de jeux de niveau débutant à intermédiaire, de façon accessible aux débutants.

Dans cette série d'activités, les élèves utilisent la puissance de la programmation pour créer un jeu spatial dans le style de Galaga. La NASA a besoin de ton aide pour mettre à jour des satellites. Arriveras-tu à en mettre 20 à jour avant que les astéroïdes ne détruisent ton vaisseau ?

Nos instructions pas à pas sont rédigées pour convenir aux personnes ayant peu d'expérience en programmation, mais elles s'adressent à des élèves à l'aise avec la lecture.

Conçue pour des élèves de 12 à 18 ans, cette expérience comprend 3 tutoriels au total (environ 60 minutes d'enseignement). À la fin du parcours, les élèves reçoivent un certificat de réussite.

|                 | Minutes* | Type de jeu | Concepts clés |
| --------------- | -------- | --------- | ------------ |
| **Séance 1**           |          |           |              |
| Prépare ton vaisseau | 25 | Introduction | vitesse, mouvement |
| La communication, c'est essentiel ! | 15 | Projectiles | événements, projectiles, collisions |
| Voilà les ennuis ! | 20 | Projectiles | événements, hasard, animation, score, vies |

\* Les durées sont approximatives et basées sur les instructions telles qu'elles sont rédigées. Elles n'incluent pas le temps passé à concevoir des éléments ni à se replonger dans du code écrit auparavant. Nous vous encourageons à prévoir du temps supplémentaire pour la créativité et le débogage.

### Objectifs

En parcourant Sauve la galaxie, les élèves construisent un environnement galactique dans lequel ils peuvent envoyer des projectiles d'information, contourner des astéroïdes, gagner des points et perdre des vies. Tout au long de ces expériences, ils utilisent différents concepts d'informatique et de conception de jeux.

Plus précisément, ils aborderont les thèmes suivants :

#### Concepts d'informatique

- Boucles
- Événements
- Variables

#### Concepts de conception de jeux

- Vitesse
- Projectiles
- Effets
- Hasard
- Score
- Destruction
- Animation
- Positionnement
- Affichage de texte
- Conception de sprites



#### 1. Prépare ton vaisseau

| Activité | Prépare ton vaisseau (25 min) |
|---|---|
| ![Miniature de Prépare ton vaisseau](/static/skillmap/galaxy/galaxy1.gif) | Prépare ton vaisseau spatial et ton décor galactique. |
| Blocs utilisés | ``[scene.setBackgroundImage(img`.`)]``<br/>``[scroller.scrollBackgroundWithSpeed()]``<br/> ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; controller.moveSprite(mySprite)]``<br/>``[let mySprite: Sprite=null; mySprite.setStayInScreen(true)]``|
| Solution possible | [Projet Prépare ton vaisseau](https://makecode.com/_RbcKJ1Lo2LmT) |

#### 2. La communication, c'est essentiel !

| Activité | La communication, c'est essentiel ! (15 min) |
|---|---|
| ![Miniature de La communication, c'est essentiel !](/static/skillmap/galaxy/galaxy2.gif) | Équipe ton vaisseau de projectiles et d'effets spéciaux. |
| Blocs utilisés | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[projectile = sprites.createProjectileFromSprite(img`.`, mySprite, 0, 0)]``<br/>``[let projectile: Sprite=null; projectile.startEffect(effects.fire, 100)]`` <br/>``[info.changeLifeBy()]`` |
| Solution possible | [Projet La communication, c'est essentiel !](https://makecode.com/_gU3XY18mw6k9) |

#### 3. Voilà les ennuis

| Activité | Voilà les ennuis (20 min) |
|---|---|
| ![Miniature de Voilà les ennuis](/static/skillmap/galaxy/galaxy3.gif) | Ajoute des ennemis, leur comportement et leur destruction à ton jeu. |
| Blocs utilisés | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[let mySprite: Sprite=null; projectile = sprites.createProjectileFromSprite(img`.`, mySprite, 0, 0)]``<br/>``[let projectile: Sprite=null; projectile.startEffect()]``<br/>``[sprites.onOverlap()]``<br/>``[let sprite: Sprite=null; sprite.destroy(effects.ashes, 0)]``<br/>``[let otherSprite: Sprite=null; otherSprite.destroy()]``<br/>``[info.changeScoreBy()]`` |
| Solution possible | [Projet Voilà les ennuis](https://makecode.com/_VuJha6i1FeWT) |



##### Idées de modifications du jeu

Après avoir terminé le dernier niveau, les élèves peuvent revenir au parcours et cliquer sur « ENREGISTRER DANS MES PROJETS », ce qui ouvre le jeu dans une fenêtre avec la boîte à outils complète. Voici quelques modifications qu'ils peuvent essayer :

- Ajouter du code pour détruire les satellites s'ils sont touchés par un astéroïde
- Ajouter un autre type d'ennemi
- Ajouter une extension de barre de santé (vies, PV) affichée au démarrage
- Ajouter un autre niveau au jeu


```package
arcade-background-scroll=github:microsoft/arcade-background-scroll/
pxt-status-bar=github:jwunderl/pxt-status-bar
```
