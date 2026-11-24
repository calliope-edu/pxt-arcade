# Course de monster trucks
* name: Course de monster trucks
* description: Crée un jeu de course de monster trucks à défilement horizontal et saute par-dessus les obstacles jusqu'à la ligne d'arrivée.
* infoUrl: skillmap/educator-info/racer-map-info
* backgroundurl: /static/skillmap/backgrounds/racer-comp.gif
* bannerurl: /static/skillmap/racer/racer3.gif

* primarycolor: #fa8033
* secondarycolor: #fdf60c
* tertiarycolor: #020311
* strokecolor: #ffffff
* highlightcolor: #ffffff
* completednodecolor: #504c52

## Monster Racer
* name: Course de monster trucks
* layout: manual

### racer1
* name: À vos marques, prêts, partez !
* type: tutorial
* description: Fais avancer ton monster truck et essaie d'atteindre le bout de ta grotte.
* url: /skillmap/racer/racer1
* tags: easy, sprites, design
* imageUrl: /static/skillmap/racer/racer1.gif
* next: racer2
* position: 1 -1

### racer2
* name: Par-dessus et par-dessous
* type: tutorial
* description: Programme des actions pour aider ton pilote à survivre aux fosses et aux dangers de la grotte.
* url: /skillmap/racer/racer2
* tags: easy, tiles, events
* imageUrl: /static/skillmap/racer/racer2.gif
* next: racer-finish
* position: 2 -1



### racer-finish
* kind: completion
* type: certificate
* imageUrl: /static/skillmap/certificates/racer-cert.png
* url: /static/skillmap/certificates/racer-cert.pdf
* next: racer3
* position: 3 0
* actions:
    * activity: [Termine le niveau facultatif](racer3)
    * map: [Essaie Explorateur spatial](/skillmap/space)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/racer-cert.pdf
        * preview: /static/skillmap/certificates/racer-cert.png
    * completion-badge:
        * image: /static/badges/badge-racer.png
        * name: Monster truck




### racer3
* name: Aller plus loin (facultatif)
* type: tutorial
* description: Personnalise ton jeu en ajoutant des animations et en modifiant ta carte de tuiles.
* url: /skillmap/racer/racer3
* tags: easy, enemies, overlap, lives
* imageUrl: /static/skillmap/racer/racer3.gif
* position: 4 0
