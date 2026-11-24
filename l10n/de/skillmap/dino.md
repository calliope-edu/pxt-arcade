# Rettet die Dino-Babys
* name: Arcade-Spiele für Anfänger
* description: Lerne, ein Sammelspiel zu erstellen, in dem eine Dino-Mama fest entschlossen ist, ihre Babys zu retten!
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

* name: Dino-Horde
* type: tutorial
* description: Erschaffe einen Schwarm Dino-Babys, die durch die Straßen der Stadt rennen.
* url: /skillmap/dino/dino1
* imageUrl: /static/skillmap/dino/dino1.gif
* tags: easy, collector, game
* next: dino2
* position: 0 0


### dino2

* name: Rettet die Dino-Babys!
* type: tutorial
* description: Mit ein paar einfachen Änderungen entsteht ein Spiel, in dem Mama Dino ihre Babys einsammelt und nach Hause bringt.
* url: /skillmap/dino/dino2
* imageUrl: /static/skillmap/dino/dino2.gif
* tags: easy, collector, game, projectiles
* next: dino3
* position: 1 1


### dino3

* name: Verkehrs-Ausweicher
* type: tutorial
* description: Rette die Dino-Babys, bevor die Autos dazwischenkommen!
* url: /skillmap/dino/dino3
* imageUrl: /static/skillmap/dino/dino3.gif
* tags: easy, collector, game, collisions
* next: dino4
* position: 2 1


### dino4
* name: Animiere es!
* type: tutorial
* description: Animiere deine Figuren und erwecke sie zum Leben!
* url: /skillmap/dino/dino4
* imageUrl: /static/skillmap/dino/dino4.gif
* tags: easy, game, animation
* next: beginner-cert-3
* position: 3 1


### beginner-cert-3
* name: Glückwunsch!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/beginner-cert-03.pdf
* imageUrl: /static/skillmap/certificates/beginner-cert-03.png
* position: 3 2
* actions:
    * map: [Probiere Turkey Day](/skillmap/turkey)
    * editor: [Im kreativen Modus bearbeiten](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/beginner-cert-03.pdf
        * preview: /static/skillmap/certificates/beginner-cert-03.png
    * completion-badge:
        * image: /static/badges/badge-dino.png
        * name: Dino-Baby


