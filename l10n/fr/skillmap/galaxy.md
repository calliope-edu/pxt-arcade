# Sauve la galaxie
* name: Sauve la galaxie
* description: Crée un jeu de style Galaga avec cette courte série de tutoriels. Tu construis une fusée qui envoie des informations aux satellites, tu évites des astéroïdes, tu crées de superbes animations et BIEN PLUS !  Qu'attends-tu ?  Double-clique sur le premier niveau pour commencer !
* infoUrl: skillmap/educator-info/galaxy-map-info
* bannerUrl: /static/skillmap/galaxy/galaxy3.gif
* backgroundurl: /static/skillmap/backgrounds/galaxy-comp1.png
* primarycolor: #ffa000
* secondarycolor: #ff07d9
* tertiarycolor: #001122
* highlightcolor: #ffffff
* completednodecolor: #31125d
* tags: space, projectiles
* alternatesources: github:https://github.com/microsoft/pxt-skillmap-sample/skillmap.md


## galaxy
* name: Sauve la galaxie
* layout: manual

### galaxy1
* name: Prépare ton vaisseau
* type: tutorial
* description: Prépare ton vaisseau spatial pour l'aventure !
* tags: easy, sprites, scroller
* next: galaxy2
* url: /skillmap/galaxy/galaxy1
* imageUrl: /static/skillmap/galaxy/galaxy1.gif
* position: 0 1

### galaxy2
* name: La communication, c'est essentiel !
* type: tutorial
* description: Équipe ton vaisseau de projectiles pour mettre à jour les satellites.
* tags: easy, projectiles, kinds, overlaps
* next: galaxy3
* url: /skillmap/galaxy/galaxy2
* imageUrl: /static/skillmap/galaxy/galaxy2.gif
* position: 0 3

### galaxy3
* name: Les ennuis arrivent
* description: Transmets toutes les informations que tu dois envoyer, mais ne te fais pas toucher par les astéroïdes !
* type: tutorial
* tags: intermediate, collisions, kinds, animations
* next: galaxy-cert-1
* url: /skillmap/galaxy/galaxy3
* imageUrl: /static/skillmap/galaxy/galaxy3.gif
* position: 4 3



### galaxy-cert-1
* name: Félicitations !
* kind: completion
* type: certificate
* imageUrl: /static/skillmap/certificates/galaxy-cert.png
* url: /static/skillmap/certificates/galaxy-cert.pdf
* position: 4 1
* actions:
    * map: [Essaie le labyrinthe rock des années 80](/skillmap/rockstar)
    * map: [Essaie Saut dans la jungle](/skillmap/jungle)
    * editor: [Modifie ce projet](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/galaxy-cert.pdf
        * preview:  /static/skillmap/certificates/galaxy-cert.png
    * completion-badge:
        * image: /static/badges/badge-galaxy.png
        * name: Sauve la galaxie