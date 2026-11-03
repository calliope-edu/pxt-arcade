# Plongeon du requin
* name: Plongeon du requin
* description: Les profondeurs de la mer sont fascinantes ! Cette skillmap te guide à travers l'océan dans la peau d'un requin qui cherche à manger !
* infoUrl: skillmap/educator-info/simple-shark-map-info
* backgroundurl: /static/skillmap/backgrounds/shark-attack-bg.png
* bannerurl: /static/skillmap/shark/shark4a.gif
* primarycolor: #ff93c4
* secondarycolor: #87f2ff
* tertiarycolor: #001538
* strokecolor: #5c406c
* highlightcolor: #fff609
* completednodecolor: #473c4d


## shark
* name: Plongeon du requin
* layout: manual

### shark1
* name: Nager avec les requins
* type: tutorial
* description: D'abord, on plonge un requin dans le vaste océan, puis on le fait bouger !
* url: /skillmap/shark/shark1-simple
* tags: easy, sprites, projectiles
* imageUrl: /static/skillmap/shark/shark1-simple.gif
* next: shark2
* position: 0 0



### shark2
* name: De la nourriture, pas des amis
* type: tutorial
* description: Un requin doit bien manger ! Apprends à faire apparaître des poissons partout dans l'océan.
* url: /skillmap/shark/shark2-simple
* tags: easy, spawn, sprites
* imageUrl: /static/skillmap/shark/shark2.gif
* next: shark3
* position: 1 0


### shark3
* name: Bon appétit !
* type: tutorial
* description: Gagne des points pour chaque poisson attrapé en 15 secondes !
* url: /skillmap/shark/shark3-simple
* tags: easy, enemies, overlaps
* imageUrl: /static/skillmap/shark/shark3.gif
* next: shark4
* position: 1 1


### shark4

* name: Sous la mer
* type: tutorial
* description: Décore les environs de ton requin avec un fond marin et des algues.
* url: /skillmap/shark/shark4-simple
* tags: easy, background, decorations
* imageUrl: /static/skillmap/shark/shark4.gif
* next: shark4a
* position: 2 1

### shark4a

* name: Anime ton jeu
* type: tutorial
* description: Donne vie à ton jeu avec des animations personnalisées pour tes personnages.
* url: /skillmap/shark/shark4a-simple
* tags: easy, animations
* imageUrl: /static/skillmap/shark/shark4a-simple.gif
* next: shark-finish
* position: 2 0


### shark-finish
* kind: completion
* type: certificate
* imageUrl: /static/skillmap/certificates/shark-cert.png
* url: /static/skillmap/certificates/shark-cert.pdf
* position: 3 0
* actions:
    * map: [Essaie Plateforme dans la jungle](/skillmap/jungle)
    * editor: [Modifier avec la boîte à outils complète](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/shark-cert.pdf
        * preview: /static/skillmap/certificates/shark-cert.png
    * completion-badge:
        * image: /static/badges/badge-shark.png
        * name: Plongeon du requin

