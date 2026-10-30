# À propos de la Skillmap « Plein d'histoires »

**Une page pour les enseignants et les parents**

La Skillmap **Plein d'histoires** présente les types de blocs de code les plus courants dans MakeCode Arcade.

Dans cette série d'activités, les élèves créent des projets narratifs créatifs avec MakeCode Arcade. Cette Skillmap s'adresse aux élèves qui découvrent MakeCode et qui ont peu ou pas d'expérience en programmation. Grâce à des instructions pas à pas, ils réalisent des projets allant de la carte de vœux à la blague, jusqu'à de véritables courtes histoires.

Conçu pour les élèves de 10 à 15 ans, ce parcours comprend au total 4 tutoriels (environ 120 minutes d'enseignement) répartis sur 3 séances. À la fin du parcours, les élèves reçoivent un certificat de réussite.

|                 | Minutes* | Type de jeu | Concepts clés |
| --------------- | -------- | --------- | ------------ |
| **Jour 1**           |          |           |              |
| Carte de vœux | 15 | Histoire | conception graphique, effets |
| Des vœux plus grands | 15 | Histoire | conception graphique, musique, événements |
| **Jour 2**           |          |           |              |
| Pour rire   | 45 | Histoire | narration, sons, événements |
| **Jour 3**           |          |           |              |
| La plus courte histoire    | 45  | Histoire | narration, musique, événements |

\* Les durées sont approximatives et correspondent au temps nécessaire pour suivre les instructions telles qu'elles sont rédigées. Nous vous encourageons à prévoir du temps supplémentaire pour la planification, la créativité et le débogage.

### Objectifs

Après avoir terminé la Skillmap **Plein d'histoires**, les élèves auront découvert tous les éléments nécessaires pour réussir leurs premiers projets avec MakeCode Arcade.

Plus précisément, ils aborderont les thèmes suivants :

#### Concepts informatiques

- Événements et déroulement du programme
- Saisie de l'utilisateur
- Valeurs

#### Concepts de conception de jeux

- Narration
- Sprites
- Conception graphique
- Sons et musique
- Effets


### Parcours « Raconter des histoires »

Dans ce parcours, les élèves apprennent à utiliser des images d'arrière-plan, de la musique et des boîtes de dialogue pour créer des projets qui transmettent un message, racontent une blague ou illustrent leurs idées.

#### 1. Carte de vœux

| Activité | Carte de vœux (15 min) |
|---|---|
| ![Miniature Carte de vœux](/static/skillmap/map-info/greeting-card.png) | Concevoir une carte de vœux simple à envoyer à ses amis et à sa famille. |
| Blocs utilisés | ``[scene.setBackgroundImage(img`.`)]`` <br/> ``[effects.confetti.startScreenEffect()]``|
| Solution possible | [Projet Carte de vœux](https://arcade.makecode.com/S21073-89960-25393-61916) |

#### 2. Des vœux plus grands

| Activité | Des vœux plus grands (15 min) |
|---|---|
| ![Miniature Des vœux plus grands](/static/skillmap/map-info/bigger-greeting.png) | Cette activité s'appuie sur l'activité précédente « Carte de vœux ».<br/>Les élèves ajoutent un texte qui s'affiche lorsqu'on appuie &nbsp;<br/>sur un bouton. |
| Blocs utilisés | ``[carnival.addLabelTo("", carnival.Areas.Top, 2)]`` <br/> ``[music.play(music.createSong()music.PlaybackMode.LoopingInBackground)]`` <br/> ``[music.setVolume(20)]``<br/> ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]`` <br/> ``[game.setDialogFrame(img`.`)]`` <br/> ``[game.setDialogTextColor(0)]`` <br/> ``[game.showLongText("", DialogLayout.Bottom)]`` |
| Solution possible | [Projet Des vœux plus grands](https://arcade.makecode.com/S38456-47249-27054-15853) |

#### 3. Pour rire

| Activité | Pour rire (45 min) |
|---|---|
| ![Miniature Pour rire](/static/skillmap/map-info/joking-around.png) | Cette activité initie les élèves aux personnages et aux dialogues,<br/>tandis qu'ils donnent vie à leurs blagues préférées. |
| Blocs utilisés | ``[game.showLongText("", DialogLayout.Top)]`` <br/> ``[game.splash("")]`` <br/> ``[sprites.create(img`.`).setPosition(0, 0)]`` <br/> ``[effects.bubbles.startScreenEffect()]`` <br/> ``[sprites.create(img`.`).setImage(img`.`)]`` <br/> ``[scene.cameraShake(4, 500)]`` <br/> ``[animation.runImageAnimation()]``|
| Solution possible | [Projet Pour rire](https://arcade.makecode.com/S05893-52939-88219-32873) |


#### 4. La plus courte histoire

| Activité | La plus courte histoire (45 min) |
|---|---|
| ![Miniature La plus courte histoire](/static/skillmap/map-info/short-story.png) | Cette activité permet aux élèves de laisser libre cours à leur créativité, <br/> en écrivant de courtes histoires à partager avec leurs amis. |
| Blocs utilisés | ``[music.play(music.createSong()music.PlaybackMode.LoopingInBackground)]`` <br/> ``[music.setVolume(20)]`` <br/> ``[scene.setBackgroundImage()]`` <br/> ``[effects.bubbles.startScreenEffect()]`` |
| Solution possible | [Projet La plus courte histoire](https://arcade.makecode.com/S33219-62880-94664-42434) |


##### Idées de modifications du jeu

Après avoir terminé **La plus courte histoire**, les élèves peuvent revenir à la Skillmap et cliquer sur « ENREGISTRER DANS MES PROJETS », ce qui ouvre le jeu dans une fenêtre avec la boîte à outils complète. Voici quelques modifications qu'ils peuvent essayer :

- Ajouter des sprites qui bougent ou changent à chaque appui sur le bouton (A)
- Ajouter des effets sonores à chaque changement de page
- Ajouter des éléments animés pour mettre en valeur certains passages


### Et ensuite ?

Après avoir terminé la Skillmap **Plein d'histoires**, les élèves peuvent passer aux activités suivantes :

* [Spectacle de talents](https://arcade.makecode.com/--skillmap#docs:/skillmap/star)
* [Le jour de la dinde !](https://arcade.makecode.com/--skillmap#docs:/skillmap/turkey)



```package
carnival=github:microsoft/arcade-carnival#v0.0.7
```
