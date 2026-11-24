# Rette die Galaxie
* name: Rette die Galaxie
* description: Baue mit dieser kurzen Tutorial-Reihe ein Spiel im Galaga-Stil. Du erschaffst eine Rakete, die Informationen an Satelliten sendet, weichst Asteroiden aus, erstellst tolle Animationen und noch VIEL MEHR!  Worauf wartest du noch?  Doppelklicke auf das erste Level, um loszulegen!
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
* name: Rette die Galaxie
* layout: manual

### galaxy1
* name: Mach dein Schiff startklar
* type: tutorial
* description: Mach dein Raumschiff bereit für ein Abenteuer!
* tags: easy, sprites, scroller
* next: galaxy2
* url: /skillmap/galaxy/galaxy1
* imageUrl: /static/skillmap/galaxy/galaxy1.gif
* position: 0 1

### galaxy2
* name: Kommunikation ist alles!
* type: tutorial
* description: Rüste dein Schiff mit Projektilen aus, um Satelliten zu aktualisieren.
* tags: easy, projectiles, kinds, overlaps
* next: galaxy3
* url: /skillmap/galaxy/galaxy2
* imageUrl: /static/skillmap/galaxy/galaxy2.gif
* position: 0 3

### galaxy3
* name: Jetzt wird's gefährlich
* description: Übertrage alle Informationen, die du senden musst – aber lass dich nicht von Asteroiden treffen!
* type: tutorial
* tags: intermediate, collisions, kinds, animations
* next: galaxy-cert-1
* url: /skillmap/galaxy/galaxy3
* imageUrl: /static/skillmap/galaxy/galaxy3.gif
* position: 4 3



### galaxy-cert-1
* name: Glückwunsch!
* kind: completion
* type: certificate
* imageUrl: /static/skillmap/certificates/galaxy-cert.png
* url: /static/skillmap/certificates/galaxy-cert.pdf
* position: 4 1
* actions:
    * map: [Probiere das 80er-Rockstar-Labyrinth](/skillmap/rockstar)
    * map: [Probiere Dschungelsprung](/skillmap/jungle)
    * editor: [Projekt umbauen](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/galaxy-cert.pdf
        * preview:  /static/skillmap/certificates/galaxy-cert.png
    * completion-badge:
        * image: /static/badges/badge-galaxy.png
        * name: Rette die Galaxie