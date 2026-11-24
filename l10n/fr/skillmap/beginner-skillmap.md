# Arcade pour débutants
* name: Guide des jeux Arcade pour débutants
* description: Apprends à créer tes propres jeux d'arcade grâce à des tutoriels sur les cartes de vœux, un jeu de clics et un jeu de collecte avec un dinosaure bien décidé à sauver les bébés dinos !
* infoUrl: skillmap/educator-info/basic-map-info
* bannerUrl: /static/skillmap/backgrounds/beg-map-tile.png
* backgroundurl: /static/skillmap/backgrounds/beg-comp.png
* primarycolor: #ff7f41
* secondarycolor: #fff53d
* tertiarycolor: #87f2ff
* completednodecolor: #738472
* highlightcolor: #ffffff
* allowcodecarryover: true
* tags: easy, beginner, tutorials



## Learn to Use Arcade Tutorial
* layout: manual

### interface-activity1
* allowcodecarryover: false

* name: Découvre MakeCode Arcade
* type: tutorial
* description: Une introduction facultative aux fonctionnalités et au vocabulaire utilisés dans les tutoriels Arcade.
* url: /skillmap/interface/activity1
* imageUrl: /static/skillmap/interface/interface-activity-1.gif
* tags: optional, easy, introduction
* position: 0 0



## Greeting Cards and Jokes
* layout: manual

### story-activity1
* allowcodecarryover: false

* name: Carte de vœux
* type: tutorial
* description: Crée une superbe carte de vœux en quelques minutes !
* url: /skillmap/story/story1
* imageUrl: /static/skillmap/story/story-comp.png
* tags: easy, story, creative, card
* next: story-activity2
* position: 0 0


### story-activity2
* name: Des vœux plus grands
* type: tutorial
* description: Enrichis ta carte de vœux pour un cadeau qui fait plaisir longtemps !
* url: /skillmap/story/story2
* imageUrl: /static/skillmap/story/story-activity-2.gif
* tags: easy, card, creative, art
* reqired: 1 story
* next: story-activity3
* position: 1 0


### story-activity3
* name: Pour rire
* allowcodecarryover: false
* type: tutorial
* description: Crée ta première histoire Arcade avec une blague en deux lignes !
* url: /skillmap/story/story3
* imageUrl: /static/skillmap/story/muffins.gif
* tags: easy, story, joke, share
* next: beginner-cert-1
* position: 2 0


### beginner-cert-1
* name: Bravo !
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/beginner-cert-01.pdf
* imageUrl: /static/skillmap/certificates/beginner-cert-01.png
* position: 3 1

* rewards:
    * certificate:
        * url: /static/skillmap/certificates/beginner-cert-01.pdf
        * preview: /static/skillmap/certificates/beginner-cert-01.png
    * completion-badge:
        * image: /static/badges/badge-story.png
        * name: Vœux





## Make a Clicker Game
<!-- * required: 1 story -->
* layout: manual

### clicker-activity1
* allowcodecarryover: false

* name: Jeu de clics
* type: tutorial
* description: Crée un jeu de clics simple dans MakeCode Arcade !
* url: /skillmap/clicker-themed/clickert1
* imageUrl: /static/skillmap/clicker/clicker-comp.png
* tags: easy, clicker, game
* next: clicker-activity2
* position: 0 0


### clicker-activity2
* name: Bouton à cliquer
* type: tutorial
* description: Ajoute un bouton visible à ton jeu de clics !
* url: /skillmap/clicker-themed/clickert2
* imageUrl: /static/skillmap/clicker/clickert2.gif
* tags: easy, clicker, game, images
* next: clicker-activity3
* position: 1 0


### clicker-activity3
* name: Superstar du clic
* type: tutorial
* description: Ajoute du code pour faire jaillir des étoiles à chaque clic !
* url: /skillmap/clicker-themed/clickert3
* imageUrl: /static/skillmap/clicker/clickert3.gif
* tags: easy, clicker, projectiles
* next: beginner-cert-2
* position: 2 1


### beginner-cert-2
* name: Bravo !
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/beginner-cert-02.pdf
* imageUrl: /static/skillmap/certificates/beginner-cert-02.png

* position: 3 1

* rewards:
    * certificate:
        * url: /static/skillmap/certificates/beginner-cert-02.pdf
        * preview: /static/skillmap/certificates/beginner-cert-02.png
    * completion-badge:
        * image: /static/badges/badge-clicker.png
        * name: Cliqueur




## Rescue the Baby Dinos
<!-- * required: 1 clicker -->
* layout: manual

### collector-activity1
* allowcodecarryover: false

* name: Horde de dinos
* type: tutorial
* description: Crée un essaim de bébés dinosaures qui courent dans les rues de la ville.
* url: /skillmap/collector-themed/collectort1
* imageUrl: /static/skillmap/collector/collector-comp.png
* tags: easy, collector, game
* next: collector-activity2
* position: 0 0





### collector-activity2

* name: Sauve les bébés dinos !
* type: tutorial
* description: Fais quelques changements simples pour créer un jeu où Maman Dino récupère ses bébés pour les ramener à la maison.
* url: /skillmap/collector-themed/collectort2
* imageUrl: /static/skillmap/collector/collectort2.gif
* tags: easy, collector, game, projectiles
* next: collector-activity3
* position: 1 1



### collector-activity3

* name: Gare aux voitures
* type: tutorial
* description: Sauve les bébés dinos avant que les voitures ne leur barrent la route !
* url: /skillmap/collector-themed/collectort3
* imageUrl: /static/skillmap/collector/collectort3.gif
* tags: easy, collector, game, collisions
* next: collector-activity4
* position: 2 1



### collector-activity4
* name: Anime-les !
* type: tutorial
* description: Anime tes personnages pour leur donner vie !
* url: /skillmap/collector-themed/collectort4
* imageUrl: /static/skillmap/collector/collectort4.gif
* tags: easy, game, animation
* next: beginner-cert-3
* position: 3 1


### beginner-cert-3
* name: Bravo !
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/beginner-cert-03.pdf
* imageUrl: /static/skillmap/certificates/beginner-cert-03.png
* position: 4 1

* rewards:
    * certificate:
        * url: /static/skillmap/certificates/beginner-cert-03.pdf
        * preview: /static/skillmap/certificates/beginner-cert-03.png
    * completion-badge:
        * image: /static/badges/badge-dino.png
        * name: Bébé dino


