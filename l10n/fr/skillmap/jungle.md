# Plateforme dans la jungle
* name: Plateforme dans la jungle
* description: Crée un jeu de défilement horizontal sauvage appelé Jungle Jump ! Dans ces activités, tu vas programmer ton singe, ajouter des plateformes magiques, lancer des explosifs et ramasser des trésors dans deux niveaux personnalisables.
* infoUrl: skillmap/educator-info/jungle-map-info
* bannerUrl: /static/skillmap/jungle/jungle6.gif
* backgroundurl: /static/skillmap/backgrounds/jungle-bg.png
* primarycolor: #2EA9B0
* secondarycolor: #F392BD
* tertiarycolor: #83C252
* highlightcolor: #FAED28
* alternatesources: github:https://github.com/microsoft/pxt-skillmap-sample/skillmap.md



## Build a Platformer Game!
* name: Plateforme dans la jungle
* layout: manual

### jungle1
* allowcodecarryover: false
* name: Singe en mouvement
* type: tutorial
* description: Fais sauter et bouger ton joueur !
* url: /skillmap/jungle/jungle1
* imageUrl: /static/skillmap/jungle/jungle1.gif
* tags: easy
* next: jungle2
* position: 0 2

### jungle2
* name: Fin de partie
* type: tutorial
* description: Ajoute des plantes empoisonnées et des boules précieuses à ton jeu !
* url: /skillmap/jungle/jungle2
* imageUrl: /static/skillmap/jungle/jungle2.gif
* tags: easy, tiles, tilemaps
* next: jungle3
* position: 1 2

### jungle3
* name: Sauts et bonds
* type: tutorial
* description: Ajoute le code qui fait apparaître des plateformes d'une simple pression sur un bouton !
* url: /skillmap/jungle/jungle3
* imageUrl: /static/skillmap/jungle/jungle3.gif
* tags: easy, events
* next: jungle4
* position: 1 3

### jungle4
* name: Tout explose
* type: tutorial
* description: Utilise de la dynamite pour dégager les plateformes !
* url: /skillmap/jungle/jungle4
* imageUrl: /static/skillmap/jungle/jungle4.gif
* tags: easy, events, overlap
* next: jungle5
* position: 2 3

### jungle5
* name: Attention !
* type: tutorial
* description: Rends ta dynamite un tout petit peu dangereuse.
* url: /skillmap/jungle/jungle5
* imageUrl: /static/skillmap/jungle/jungle5.gif
* tags: easy, events, overlap, lives
* next: jungle6
* position: 2 2


### jungle6
* name: Animations
* type: tutorial
* description: Anime ton singe !
* url: /skillmap/jungle/jungle6
* imageUrl: /static/skillmap/jungle/jungle6.gif
* tags: easy, animations
* next: jungle7
* position: 2 1


### jungle7
* name: Niveaux bonus
* type: tutorial
* description: Ajoute un autre niveau à la fin de ton jeu pour encore plus de plaisir !
* url: /skillmap/jungle/jungle7
* imageUrl: /static/skillmap/jungle/jungle7.gif
* tags: easy, levels, tilemaps
* next: jungle8, platformer-cert-1
* position: 3 1


### jungle8
* name: Fais-en ton propre jeu
* type: tutorial
* description: Modifie tes images et tes tilemaps pour créer ton propre jeu !
* url: /skillmap/jungle/jungle8
* imageUrl: /static/skillmap/jungle/jungle8.gif
* tags: intermediate, art, assets
* position: 4 0


### platformer-cert-1
* name: Félicitations !
* kind: completion
* type: certificate
* imageUrl: /static/skillmap/certificates/jungle-cert.png
* url: /static/skillmap/certificates/jungle-cert.pdf
* position: 4 1
* actions:
    * map: [Essaie Space Explorer](/skillmap/space)
    * editor: [Modifie ton projet](/)
* rewards:
        * certificate:
            * url: /static/skillmap/certificates/jungle-cert.pdf
            * preview: /static/skillmap/certificates/jungle-cert.png
        * completion-badge:
            * image: /static/badges/badge-jungle.png
            * name: Plateforme dans la jungle