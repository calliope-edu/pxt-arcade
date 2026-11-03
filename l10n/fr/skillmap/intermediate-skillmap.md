# Guide du créateur de jeux
* name: Guide du créateur de jeux
* description: Améliore tes compétences de création de jeux en terminant les tutoriels de ce guide.
* infoUrl: skillmap/educator-info/int-map-info
* bannerUrl: /static/skillmap/platformer/activity4.png
* backgroundurl: /static/skillmap/space/game-maker-guide-background.png
* primarycolor: #2EA9B0
* secondarycolor: #F392BD
* tertiarycolor: #83C252
* highlightcolor: #FAED28
* alternatesources: github:https://github.com/microsoft/pxt-skillmap-sample/skillmap.md

## interface
* name: Apprends à utiliser MakeCode Arcade
* description: Ici, tu apprends à suivre les tutoriels dans Microsoft MakeCode Arcade.

### interface-activity1
* allowcodecarryover: false


* name: Apprends à utiliser MakeCode Arcade
* type: tutorial
* description: Introduction à nos cartes de tutoriel
* tags: easy

* url: /skillmap/interface/activity1
* imageUrl: /static/skillmap/interface/interface-activity-1.gif

## space
* name: Conçois un explorateur spatial
* description: Explorons les profondeurs de l'espace ! Nous allons concevoir un vaisseau spatial, ajouter quelques ennemis et remplir l'univers de planètes.
* completionUrl: /static/skillmap/certificates/design-a-space-explorer.pdf

### space-activity1
* allowcodecarryover: false


* name: Design du vaisseau
* type: tutorial
* description: Dessine et programme un vaisseau spatial !
* tags: easy
* next: space-activity2, pusher1

* url: /skillmap/space/activity1
* imageUrl: /static/skillmap/space/space1.gif

### space-activity2

* name: Projectiles
* type: tutorial
* description: Personnalise ton vaisseau avec des projectiles et des effets.
* tags: easy, projectiles, kinds
* next: pusher2, space-activity3

* url: /skillmap/space/activity2
* imageUrl: /static/skillmap/space/projectiles.gif

### space-activity3

* name: Ennemis
* description: Attention, danger ! Ajoute des ennemis et des vies à ton jeu.
* type: tutorial
* tags: easy, enemies, kinds
* next: space-activity4

* url: /skillmap/space/activity3
* imageUrl: /static/skillmap/space/enemies.gif

### space-activity4

* name: Fais le plein
* type: tutorial
* description: Utilise une extension pour ajouter une jauge de carburant à ton vaisseau. Pense à faire le plein souvent !
* tags: intermediate, extensions
* next: space-cert-1

* url: /skillmap/space/activity4
* imageUrl: /static/skillmap/space/eat-gas.gif

### space-cert-1
* name: Félicitations !
* kind: completion
* type: certificate
* imageUrl: /static/skillmap/certificates/space-cert.png
* url: /static/skillmap/certificates/design-a-space-explorer.pdf


### pusher1
* name: Nœud vide
* kind: layout

### pusher2
* name: Nœud vide
* kind: layout


## platformer
* name: Apprends à créer un jeu de plateforme
* description: Une skillmap qui te montre comment construire un jeu de plateforme avec plusieurs niveaux.

### platformer-activity1
* allowcodecarryover: false


* name: Jeu de plateforme simple
* type: tutorial
* description: Apprends à créer un personnage qui peut sauter et se déplacer sur une tilemap.
* url: /skillmap/platformer/activity1
* imageUrl: /static/skillmap/platformer/platformer1.gif
* tags: easy
* next: platformer-activity2

### platformer-activity2

* name: Caméra et tuiles
* type: tutorial
* description: Apprends à utiliser la caméra et à ajouter des événements de chevauchement de tuiles pour que le joueur puisse gagner et perdre.
* url: /skillmap/platformer/activity2
* imageUrl: /static/skillmap/platformer/platformer2.gif
* tags: easy, tiles
* next: platformer-activity3

### platformer-activity3

* name: Ennemis simples
* type: tutorial
* description: Apprends à ajouter à ton jeu des ennemis qui suivent le joueur.
* url: /skillmap/platformer/activity3
* imageUrl: /static/skillmap/platformer/platformer3.gif
* tags: intermediate, overlaps
* next: pusher3, platformer-activity4

### platformer-activity4

* name: Plusieurs niveaux
* type: tutorial
* description: Ajoute un deuxième niveau à ton jeu de plateforme grâce aux fonctions.
* url: /skillmap/platformer/activity4
* imageUrl: /static/skillmap/platformer/platformer4.gif
* tags: intermediate, functions
* next: platformer-activity5

### platformer-activity5

* name: IA des ennemis
* type: tutorial
* description: Ajoute de la physique et de l'IA aux ennemis de ton jeu.
* url: /skillmap/platformer/activity5
* imageUrl: /static/skillmap/platformer/platformer5.gif
* tags: intermediate, AI, physics
* next: platformer-cert-1

### platformer-cert-1
* name: Félicitations !
* kind: completion
* type: certificate
* imageUrl: /static/skillmap/certificates/platformer-cert.png
* url: /static/skillmap/certificates/learn-to-make-a-platformer.pdf




### pusher3
* name: Nœud vide
* kind: layout
