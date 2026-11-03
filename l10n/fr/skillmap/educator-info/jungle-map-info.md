# À propos de Plateforme dans la jungle

**Une page pour les enseignants et les parents**

**Plateforme dans la jungle** présente de nombreux éléments de conception de jeux de MakeCode Arcade.

Dans cette série d'activités, les élèves créent leur propre jeu de plateforme avec MakeCode Arcade. Ce parcours s'adresse aux élèves qui découvrent MakeCode et qui ont peu ou pas d'expérience en programmation. Grâce à des instructions pas à pas, les élèves donnent vie à un ami singe dans un monde rempli d'obstacles dangereux et de babioles à collectionner.

Conçue pour des élèves de 11 à 15 ans, cette expérience comprend 8 tutoriels au total (environ 68 minutes d'enseignement ou plus) répartis sur 2 séances. À la fin du parcours, les élèves reçoivent un certificat de réussite.

|                 | Minutes* | Type de jeu | Concepts clés |
| --------------- | -------- | --------- | ------------ |
| **Séance 1** | **38** |  |  |
| Saut dans la jungle | 10 | Introduction | mouvement, accélération, saisie utilisateur, gravité |
| Fin de partie | 8 | Plateforme | événements, score |
| Sauts et rebonds | 10 | Plateforme | saisie utilisateur, création |
| Tout explose | 10 | Plateforme | saisie utilisateur, projectiles, animation, événements, destruction |
| **Séance 2** | **30+** |  |  |
| Attention ! | 10 | Plateforme | événements, destruction, barre de vie |
| Animations | 12 | Plateforme | événements, animation |
| Niveaux supplémentaires | 8 | Plateforme | événements, animation |
| Personnalise-le | s.o. | Plateforme | conception graphique, modification du jeu, conception de niveaux |

\* Les durées sont approximatives et basées sur le temps nécessaire pour suivre les instructions telles qu'elles sont rédigées. Elles n'incluent pas le temps passé à concevoir des éléments ni à se replonger dans du code écrit auparavant. Nous vous encourageons à prévoir du temps supplémentaire pour la créativité et le débogage.

### Objectifs

Après avoir terminé Plateforme dans la jungle, les élèves auront découvert de nombreux concepts de jeux de plateforme avec MakeCode Arcade.

Plus précisément, ils aborderont les thèmes suivants :

#### Concepts d'informatique

- Événements
- Saisie utilisateur

#### Concepts de conception de jeux

- Mouvement
- Accélération
- Gravité
- Création
- Projectiles
- Animation
- Destruction
- Barre de vie
- Niveaux
- Affichage de texte
- Conception graphique
- Modification du jeu
- Conception de niveaux

### Projets

Au fil de ces projets, les élèves construisent progressivement leur jeu. Ils assistent à l'évolution du singe : d'une simple créature qui ne sait que se déplacer, il devient un _maître_ animé de la course et du saut, capable de créer ses propres plateformes, de faire exploser des obstacles et de collectionner des babioles à travers plusieurs mondes.

#### 1. Saut dans la jungle

| Activité | Saut dans la jungle (10 min) |
|---|---|
| ![Miniature de Saut dans la jungle](/static/skillmap/jungle/jungle1.gif) | Programme les déplacements latéraux et les sauts de ton singe. |
| Blocs utilisés | ``[mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.moveSprite(mySprite, 0, 0)]``<br/>``[let mySprite: Sprite=null; mySprite.ay = 0]``<br/>``[scene.cameraFollowSprite(mySprite)]``<br/>``[controller.up.onEvent()]``<br/>``[let mySprite: Sprite=null; sprites.gravity_jump(mySprite)]`` |
| Solution possible | [Projet Saut dans la jungle](https://makecode.com/_2cdMJY6x5F1U) |

#### 2. Fin de partie

| Activité | Fin de partie (8 min) |
|---|---|
| ![Miniature de Fin de partie](/static/skillmap/jungle/jungle2.gif) | Ajoute à ton jeu la possibilité de gagner, de perdre et de récolter des points. |
| Blocs utilisés | ``[scene.onOverlapTile()]``<br/>``[game.gameOver(true)]``<br/>``[info.changeScoreBy()]`` |
| Solution possible | [Projet Fin de partie](https://makecode.com/_TPD1cCdtVD6i) |

#### 3. Sauts et rebonds

| Activité | Sauts et rebonds (10 min) |
|---|---|
| ![Miniature de Sauts et rebonds](/static/skillmap/jungle/jungle3.gif) | Rends les obstacles plus faciles en faisant apparaître des plateformes sous ton singe. |
| Blocs utilisés | ``[controller.A.onEvent()]``<br/>``[tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), true)]``<br/>``[tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`bounce`)]`` |
| Solution possible | [Projet Sauts et rebonds](https://makecode.com/_V5VcYsFw62h0) |

#### 4. Tout explose

| Activité | Tout explose (10 min) |
|---|---|
| ![Miniature de Tout explose](/static/skillmap/jungle/jungle4.gif) | Utilise de la dynamite pour dégager les plateformes. |
| Blocs utilisés | ``[controller.B.onEvent()]``<br/>``[let mySprite: Sprite=null; projectile = sprites.createProjectileFromSprite(img`.`, mySprite, 0, 0)]``<br/>``[let projectile: Sprite=null; projectile.setFlag(SpriteFlag.GhostThroughWalls, true)]``<br/>``[animation.runImageAnimation()]``<br/>``[scene.onOverlapTile()]``<br/>``[let tiles: Sprite=null; tiles.setWallAt(location, false)]``<br/>``[let tiles: Sprite=null; tiles.setTileAt(location, assets.tile`transparency16`)]`` |
| Solution possible | [Projet Tout explose](https://makecode.com/_dRsUjvEJj8K7) |

#### 5. Attention !

| Activité | Attention ! (10 min) |
|---|---|
| ![Miniature d'Attention !](/static/skillmap/jungle/jungle5.gif) | Rends ta dynamite plus dangereuse et destructrice. |
| Blocs utilisés | ``[sprites.onOverlap()]``<br/>``[let otherSprite: Sprite=null; otherSprite.destroy()]``<br/>``[info.changeLifeBy(-1)]``<br/>``[scene.onOverlapTile()]`` |
| Solution possible | [Projet Attention !](https://makecode.com/_C4XbyuU4tV3y) |

#### 6. Animations

| Activité | Animations (12 min) |
|---|---|
| ![Miniature d'Animations](/static/skillmap/jungle/jungle6.gif) | Anime ton singe ! |
| Blocs utilisés | ``[controller.left.onEvent()]``<br/>``[animation.runImageAnimation()]`` |
| Solution possible | [Projet Animations](https://makecode.com/_hU3ULXVvq02F) |

#### 7. Niveaux supplémentaires

| Activité | Niveaux supplémentaires (8 min) |
|---|---|
| ![Miniature de Niveaux supplémentaires](/static/skillmap/jungle/jungle7.gif) | Ajoute un autre niveau à ton jeu. |
| Blocs utilisés | ``[scene.onOverlapTile()]``<br/>``[scene.setBackgroundImage(img`.`)]``<br/>``[tiles.setTilemap()]``<br/>``[animation.runMovementAnimation()]``<br/>``[let mySprite: Sprite=null; mySprite.say("Level 2!", 500)]`` |
| Solution possible | [Projet Niveaux supplémentaires](https://makecode.com/_2oiXEVKaK29s) |

#### 8. Personnalise-le

| Activité | Personnalise-le |
|---|---|
| ![Miniature de Personnalise-le](/static/skillmap/jungle/jungle8.gif) | Modifie tes images et tes cartes de tuiles pour créer ton propre jeu ! |
| Blocs utilisés | _Aucun_ |
| Solution possible | s.o. |

##### Idées de modifications du jeu

Pendant que les élèves travaillent sur Personnalise-le, nous les encourageons à réfléchir à la façon dont ils veulent modifier ce jeu pour qu'il corresponde au mieux à leurs centres d'intérêt. Voici quelques questions à se poser :

- Quel genre de monde aimerais-je explorer ? Redessine la scène avec l'environnement de ton choix !
- Quel animal ou quelle créature irait bien dans ce monde ? Remplace le singe par la créature de ton choix !
- Quels obstacles pourraient mettre mon personnage au défi ? Comment puis-je les intégrer de façon créative ?
- Quand j'explore ce monde, de quelles provisions ai-je besoin ? Remplace les babioles par ces provisions !