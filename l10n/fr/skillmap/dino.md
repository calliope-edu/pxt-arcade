# Sauve les bébés dinos
* name: Guide des jeux Arcade pour débutants
* description: Apprends à créer un jeu de collecte avec une maman dinosaure bien décidée à sauver ses bébés !
* infoUrl: skillmap/educator-info/dino-map-info
* bannerUrl: /static/skillmap/dino/dino4.gif
* backgroundurl: /static/skillmap/backgrounds/dino-comp.png
* primarycolor: #ff7f41
* secondarycolor: #fff53d
* tertiarycolor: #87f2ff
* completednodecolor: #738472
* highlightcolor: #ffffff
* allowcodecarryover: true
* tags: easy, beginner, tutorials


## save-dinos
* layout: manual

### dino1

* name: La horde de dinos
* type: tutorial
* description: Crée une nuée de bébés dinosaures qui courent dans les rues de la ville.
* url: /skillmap/dino/dino1
* imageUrl: /static/skillmap/dino/dino1.gif
* tags: easy, collector, game
* next: dino2
* position: 0 0


### dino2

* name: Sauve les bébés dinos !
* type: tutorial
* description: Fais quelques petites modifications pour créer un jeu où Maman Dino récupère ses bébés pour les ramener à la maison.
* url: /skillmap/dino/dino2
* imageUrl: /static/skillmap/dino/dino2.gif
* tags: easy, collector, game, projectiles
* next: dino3
* position: 1 1


### dino3

* name: Esquive la circulation
* type: tutorial
* description: Sauve les bébés dinos avant que les voitures ne leur barrent la route !
* url: /skillmap/dino/dino3
* imageUrl: /static/skillmap/dino/dino3.gif
* tags: easy, collector, game, collisions
* next: dino4
* position: 2 1


### dino4
* name: Anime-le !
* type: tutorial
* description: Anime tes personnages pour leur donner vie !
* url: /skillmap/dino/dino4
* imageUrl: /static/skillmap/dino/dino4.gif
* tags: easy, game, animation
* next: beginner-cert-3
* position: 3 1


### beginner-cert-3
* name: Bravo !
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/beginner-cert-03.pdf
* imageUrl: /static/skillmap/certificates/beginner-cert-03.png
* position: 3 2
* actions:
    * map: [Essaie Turkey Day](/skillmap/turkey)
    * editor: [Modifier en mode créatif](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/beginner-cert-03.pdf
        * preview: /static/skillmap/certificates/beginner-cert-03.png
    * completion-badge:
        * image: /static/badges/badge-dino.png
        * name: Bébé dino


