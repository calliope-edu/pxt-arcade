# À propos de Sauve la forêt !

**Une page pour les enseignants et les parents**

Le parcours **Sauve la forêt !** utilise des blocs de code de base et des extensions de MakeCode Arcade pour mettre en œuvre des concepts de jeu simples.

Dans cette courte série d'activités, les élèves programment un jeu qui recrée les conditions d'un feu de forêt, puis programment un avion bombardier d'eau qui pulvérise de l'eau pour éteindre les flammes ! Ce parcours s'adresse aux élèves qui découvrent MakeCode et qui ont peu ou pas d'expérience en programmation.

Conçue pour des élèves de 11 à 18 ans, cette expérience comprend 6 tutoriels au total (environ 54 minutes d'enseignement). À la fin du parcours, les élèves reçoivent un certificat de réussite.

|                 | Minutes* | Concepts clés |
| --------------- | -------- | ------------ |
| Prépare ton avion | 7  | mouvement, sprites |
| Ça chauffe ! | 8  | événements, boucles, hasard |
| Lutte contre le feu | 10 | événements, projectiles |
| Ça se propage comme une traînée de poudre | 10 | événements, variables, collisions |
| Garde l'œil ouvert ! | 9 | affichages, personnalisation |
| Continue | 10 | animations, sons |

\* Les durées sont approximatives et basées sur le temps nécessaire pour suivre les instructions telles qu'elles sont rédigées. Elles n'incluent pas le temps passé à concevoir des éléments ni à se replonger dans du code écrit auparavant. Nous vous encourageons à prévoir du temps supplémentaire pour la créativité et le débogage.

### Objectifs

Après avoir terminé Sauve la forêt, les élèves auront découvert des éléments d'informatique et de conception de jeux avec MakeCode Arcade.

Plus précisément, ils aborderont les thèmes suivants :

- Boucles
- Événements
- Variables
- Cartes de tuiles
- Mouvement
- Collisions
- Projectiles
- Animation
- Sons
- Mécaniques de force/vie


### Projets

Au fil de ces projets, les élèves construisent progressivement un jeu dans lequel leur avion projette de l'eau sur les flammes pour les affaiblir jusqu'à ce qu'elles s'éteignent.


#### 1. Prépare ton avion
| Activité | Prépare ton avion (7 min) |
|---|---|
| ![Miniature de Prépare ton avion](/static/skillmap/forest/forest1.gif) | Prépare ton avion pour pouvoir aller partout où tu dois aller !  |
| Blocs utilisés | ``[tiles.setTilemap(tilemap`level1`)]``<br/>``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; controller.moveSprite(mySprite)]``<br/>``[let mySprite: Sprite=null; scene.cameraFollowSprite(mySprite)]`` |
| Solution possible | [Projet Prépare ton avion](https://makecode.com/_epJ1pWYYeVyY) |

#### 2. Ça chauffe !
| Activité | Ça chauffe ! (8 min) |
|---|---|
| ![Miniature de Ça chauffe !](/static/skillmap/forest/forest2.gif) | Utilise des boucles pour ajouter des feux au hasard sur ta carte !  |
| Blocs utilisés | ``[for (let index = 0; index < 4; index++) {}]``<br/>``[sprites.create_spreading_fire(img`transparency16`, assets.tile`transparency16`)]``<br/>``[sprites.on_fire_created()]``<br/>``[scene.createParticleEffectAtLocation(location, effects.fire)]`` |
| Solution possible | [Projet Ça chauffe !](https://makecode.com/_Uq6C8RKcg5g4) |

#### 3. Lutte contre le feu
| Activité | Lutte contre le feu (10 min) |
|---|---|
| ![Miniature de Lutte contre le feu !](/static/skillmap/forest/forest3.gif) | Ajoute une lance à eau à ton avion pour garder les feux sous contrôle.  |
| Blocs utilisés | ``[controller.A.onEvent(ControllerButtonEvent.Repeated, function () {})]``<br/>``[let mySprite: Sprite=null; sprites.spray(mySprite, img`.`)]``<br/>``[sprites.set_flame_strength(location, 5)]``<br/>``[scene.onOverlapTile(SpriteKind.Water, assets.tile`transparency16`, function (sprite, location))]``<br/>``[let sprite: Sprite=null; sprite.destroy()]``<br/>``[sprites.change_flame_strength_by(sprite, -1)]``<br/>``[sprites.on_fire_destroyed(function (location))]``<br/>``[scene.clearParticleEffectsAtLocation(location)]``<br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]`` |
| Solution possible | [Projet Lutte contre le feu](https://makecode.com/_Vme4T0TkA1E3) |

#### 4. Ça se propage comme une traînée de poudre
| Activité | Ça se propage comme une traînée de poudre (10 min) |
|---|---|
| ![Miniature de Ça se propage comme une traînée de poudre](/static/skillmap/forest/forest4.gif) | Les conditions météorologiques et environnementales comme la sécheresse, le vent, la densité et la sécheresse de la végétation peuvent faire se propager les feux plus rapidement. Simulons ces conditions dans notre jeu.  |
| Blocs utilisés | ``[game.set_health_of_trees(7)]``<br/>``[game.set_strength_of_wind(3)]``<br/>``[game.set_dryness_of_grass(3)]``<br/>``[game.onUpdate(function () {})]``<br/>``[sprites.random_spread()]``|
| Solution possible | [Projet Ça se propage comme une traînée de poudre](https://makecode.com/_0MWamcehqV22) |

#### 5. Garde l'œil ouvert !
| Activité | Garde l'œil ouvert ! (9 min) |
|---|---|
| ![Garde l'œil ouvert !](/static/skillmap/forest/forest5.gif) | L'informatique est plus importante que jamais pour la lutte contre les incendies. Ajoutons un affichage tête haute (HUD) pour aider le pilote à obtenir en temps réel les informations de sa base de données sur les incendies.  |
| Blocs utilisés | ``[hud.forest_hud(true)]``<br/>``[hud.danger_hud(true)]``<br/>``[hud.forest_hud(true)]`` |
| Solution possible | [Projet Garde l'œil ouvert](https://makecode.com/_b6Y46WUtkCeJ) |

#### 6. Continue
| Activité | Continue (10 min) |
|---|---|
| ![Miniature de Continue](/static/skillmap/forest/forest6.gif) | Enrichis ton jeu ! Expérimente avec les sons et l'animation pour rendre ton jeu vraiment unique.  |
| Blocs utilisés | ``[controller.left.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[animation.runImageAnimation()]``<br/>``[music.thump.play()]`` |
| Solution possible | [Projet Continue](https://makecode.com/_Y9PK4P2iF6D0) |

##### Idées de modifications du jeu

Pendant que les élèves travaillent sur **Continue**, nous les encourageons à réfléchir à la manière d'aller encore plus loin avec l'éditeur complet, après avoir ouvert leur jeu avec le bouton [ENREGISTRER DANS MES PROJETS].

- Quel autre environnement mon avion pourrait-il explorer ? Des quartiers ? Le désert ?
- Qu'est-ce qui pourrait apparaître au hasard à la place des feux ? Des poissons ? Des souris ? Des bonshommes de neige ?
- Qu'est-ce que tu pourrais déplacer à la place d'un avion ? Un bateau ? Une loupe ?

##### Et ensuite ?

Lorsque les élèves ont terminé **Sauve la forêt !**, vous pouvez leur proposer un autre parcours pour continuer à développer leurs compétences.

- [Essayer le parcours pour débutants](/skillmap/beginner)
- [Essayer le parcours Plateforme dans la jungle](/skillmap/jungle)
- [Essayer le parcours Space Explorer](/skillmap/space)
- [Essayer notre tutoriel Time Flies](/tutorials/froggy)


##### Autres ressources pour les enseignants

Vous souhaitez un plan de cours complet pour cette activité ? Consultez notre dossier Sharepoint pour en savoir plus :

- [Ressources pédagogiques pour les enseignants](https://1drv.ms/u/s!AqsgsTyHBmRBkjR0izvm6EQ2NqLp?e=YRsyz6)


```package
pxt-arcade-forest-fire=github:microsoft/arcade-forest-fire
```
