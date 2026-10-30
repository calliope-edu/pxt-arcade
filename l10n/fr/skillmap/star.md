# Spectacle de talents
* name: Spectacle de talents
* description: Apprends à créer un jeu de clics et accumule vite des points en applaudissant les animaux les plus talentueux.
* infoUrl: skillmap/educator-info/star-map-info
* bannerUrl: /static/skillmap/star/star4-trimmed.gif
* backgroundurl: /static/skillmap/backgrounds/star-comp.png
* primarycolor: #ff7f41
* secondarycolor: #fff53d
* tertiarycolor: #17001d
* completednodecolor: #4d3740
* highlightcolor: #ffffff
* allowcodecarryover: true
* tags: easy, beginner, tutorials


## talent-show
* layout: manual


### star-activity1
* allowcodecarryover: false

* name: Bienvenue au spectacle
* type: tutorial
* description: Crée un jeu de clics simple : un spectacle de talents avec tes animaux préférés en vedette !
* tags: easy, clicker, points
* next: star-activity2
* url: /skillmap/star/star1
* imageUrl: /static/skillmap/star/star1-trimmed.gif
* position: 0 0



### star-activity2
* name: Rejoins le public
* type: tutorial
* description: Ajoute un public qui applaudit quand tu cliques !
* tags: easy, clicker, game, events
* next: star-activity3
* url: /skillmap/star/star2
* imageUrl: /static/skillmap/star/star2-trimmed.gif
* position: 1 0


### star-activity3
* name: La plus grande star
* type: tutorial
* description: Ajoute du code pour faire jaillir une pluie d’étoiles à chaque clic !
* tags: easy, clicker, projectiles
* next: star-activity4
* url: /skillmap/star/star3
* imageUrl: /static/skillmap/star/star3-trimmed.gif
* position: 1 -1


### star-activity4
* name: La vie en roses
* type: tutorial
* description: Lance des étoiles et des roses sur la scène tout en découvrant les tableaux !
* tags: easy, clicker, projectiles, arrays
* next: star-cert
* url: /skillmap/star/star4
* imageUrl: /static/skillmap/star/star4-trimmed.gif
* position: 2 -1


### star-cert
* name: Félicitations !
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/star-cert.pdf
* imageUrl: /static/skillmap/certificates/star-cert.png
* position: 3 -1
* actions:
    * map: [Essaie Maman Dino](/skillmap/dino)
    * editor: [Modifier en mode créatif](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/star-cert.pdf
        * preview: /static/skillmap/certificates/star-cert.png
    * completion-badge:
        * image: /static/badges/badge-star.png
        * name: Star de la scène



