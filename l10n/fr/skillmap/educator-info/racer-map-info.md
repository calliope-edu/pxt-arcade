# À propos de Course de monster trucks

**Une page pour les enseignants et les parents**

Le parcours **Course de monster trucks** utilise des blocs de code de base et des extensions de MakeCode Arcade pour mettre en œuvre des concepts de jeu simples.

Dans cette courte série d'activités, ... Ce parcours s'adresse aux élèves qui découvrent MakeCode et qui ont peu ou pas d'expérience en programmation.

Conçue pour des élèves de 10 à 16 ans, cette expérience comprend 3 tutoriels au total (environ 35 minutes d'enseignement). À la fin du parcours, les élèves reçoivent un certificat de réussite.

|                 | Minutes* |  Concepts clés |
| --------------- | -------- | ------------ |
| À vos marques, prêts, partez ! | 9 | mouvement, sprites |
| Par-dessus et par-dessous | 11 | événements, fin de partie |
| Aller plus loin | 15 | animation, cartes de tuiles |


\* Les durées sont approximatives et basées sur le temps nécessaire pour suivre les instructions telles qu'elles sont rédigées. Elles n'incluent pas le temps passé à concevoir des éléments ni à se replonger dans du code écrit auparavant. Nous vous encourageons à prévoir du temps supplémentaire pour la créativité et le débogage.

### Objectifs

Après avoir terminé Course de monster trucks, les élèves auront abordé les thèmes suivants :

- Événements
- Variables
- Cartes de tuiles
- Mouvement
- Collisions
- Animation
- Sons

### Projets

Au fil de ces projets, les élèves construisent progressivement un jeu dans lequel ...

```package
pxt-forest-special=github:kiki-lee/forest-special/
```

#### 1. À vos marques, prêts, partez !
| Activité | À vos marques, prêts, partez ! (7 min) |
|---|---|
| ![Miniature de À vos marques, prêts, partez !](https://makecode.com/api/_biY17aMhFFpJ/thumb) | Choisis un camion et mets-toi en route.  |
| Blocs utilisés | ``[let truck = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let truck: Sprite=null; truck.ay = 500]`` <br/> ``[let truck: Sprite=null;truck.vx = 100]``<br/>``[let truck: Sprite=null; scene.cameraFollowSprite(mySprite)]`` |
| Solution possible | [Projet À vos marques, prêts, partez !](https://makecode.com/_biY17aMhFFpJ) |

#### 2. Par-dessus et par-dessous
| Activité | Par-dessus et par-dessous (8 min) |
|---|---|
| ![Miniature de Par-dessus et par-dessous](https://makecode.com/api/_FYseeH2FhhHR/thumb) | Ajoute la possibilité de sauter, de gagner et de perdre.  |
| Blocs utilisés | ``[scene.onOverlapTile()]``<br/>``[game.gameOver(true)]`` |
| Solution possible | [Projet Par-dessus et par-dessous](https://makecode.com/_FYseeH2FhhHR) |

#### 3. Aller plus loin
| Activité | Aller plus loin (10 min) |
|---|---|
| ![Miniature de Aller plus loin !](https://makecode.com/api/_1yfTMtFAe5yC/thumb) | Ajoute de l'animation et du son à ton projet !  |
| Blocs utilisés | ``[animation.runImageAnimation()]``<br/>``[music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)]`` |
| Solution possible | [Projet Aller plus loin](https://makecode.com/_1yfTMtFAe5yC) |



##### Idées de modifications du jeu

Pendant que les élèves travaillent sur **Continue**, nous les encourageons à réfléchir à la manière d'aller encore plus loin avec l'éditeur complet, après avoir ouvert leur jeu avec le bouton [ENREGISTRER DANS MES PROJETS].

- Quelles autres tuiles peux-tu ajouter à la grotte ?
- Est-ce que quelque chose pourrait te poursuivre pendant que tu traverses la grotte ?
- Comment peux-tu faire rouler ton camion plus vite ou plus lentement avec les touches fléchées ?

##### Et ensuite ?

Lorsque les élèves ont terminé **Course de monster trucks**, vous pouvez leur proposer un autre parcours pour continuer à développer leurs compétences.

- [Essayer le parcours Plateforme dans la jungle](/skillmap/jungle)
- [Essayer le parcours Sauve la galaxie](/skillmap/galaxy)
- [Essayer notre tutoriel Time Flies](/tutorials/froggy)
