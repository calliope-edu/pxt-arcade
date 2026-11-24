# Le jour de la dinde !
* name: Le jour de la dinde !
* description: C'est l'heure de l'évasion ! Aide ta dinde à libérer tous ses amis et à grimper vers la liberté dans ce jeu de plateforme vertical plein d'action. Double-clique sur le premier niveau pour commencer.
* infoUrl: /skillmap/educator-info/turkey-map-info
* backgroundurl: /static/skillmap/backgrounds/turkey-comp.gif
* bannerurl: /static/skillmap/turkey/turkey2.gif
* primarycolor: #cda6cc
* secondarycolor: #ffffff
* tertiarycolor: #baefff
* strokecolor: #fdf60c
* highlightcolor: #fdf60c
* completednodecolor: #003457


## turkey-day
* name: Le jour de la dinde
* layout: manual

### turkey1
* name: Fais bouger la dinde
* type: tutorial
* description: Crée une dinde et aide-la à se déplacer sur la carte de tuiles !
* url: /skillmap/turkey/turkey1
* tags: easy, sprites, tiles
* imageUrl: /static/skillmap/turkey/turkey1.gif
* next: turkey2
* position: 0 -1

### turkey2
* name: Rassemble une troupe
* type: tutorial
* description: Écris le code qui permet à ta dinde de libérer ses amis de leurs cages. Mais attention ! Tu vas vite avoir toute une troupe derrière toi.
* url: /skillmap/turkey/turkey2
* tags: easy, tiles, events
* imageUrl: /static/skillmap/turkey/turkey2.gif
* next: turkey3
* position: 1 -1

### turkey3
* name: Gagner ou perdre
* type: tutorial
* description: Lance un chronomètre et mets-toi au défi de libérer les dindes et de t'échapper du poulailler le plus vite possible !
* url: /skillmap/turkey/turkey3
* tags: easy, overlap, timer
* imageUrl: /static/skillmap/turkey/turkey3.gif
* next: turkey-finish
* position: 2 0


### turkey-finish
* name: Félicitations !
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/turkey-cert.pdf
* imageUrl: /static/skillmap/certificates/turkey-cert.png
* position: 3 0
* actions:
    * map: [Essaie Burstin' Balloons](/skillmap/balloon)
    * editor: [Modifier ce projet](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/turkey-cert.pdf
        * preview: /static/skillmap/certificates/turkey-cert.png
    * completion-badge:
        * image: /static/badges/badge-turkey.png
        * name: Le jour de la dinde

