# Haifisch-Abenteuer
* name: Haifisch-Abenteuer
* description: Die Tiefsee ist ein faszinierender Ort! Diese Skillmap führt dich als Hai durch den Ozean – auf der Suche nach Futter!
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
* name: Haifisch-Abenteuer
* layout: manual

### shark1
* name: Schwimmen mit Haien
* type: tutorial
* description: Zuerst setzen wir einen Hai in den weiten Ozean, dann bringen wir ihn zum Schwimmen!
* url: /skillmap/shark/shark1-simple
* tags: easy, sprites, projectiles
* imageUrl: /static/skillmap/shark/shark1-simple.gif
* next: shark2
* position: 0 0



### shark2
* name: Futter, keine Freunde
* type: tutorial
* description: Ein Hai muss fressen! Lerne, wie überall im Ozean Fische auftauchen.
* url: /skillmap/shark/shark2-simple
* tags: easy, spawn, sprites
* imageUrl: /static/skillmap/shark/shark2.gif
* next: shark3
* position: 1 0


### shark3
* name: Guten Appetit!
* type: tutorial
* description: Sammle Punkte für jeden Fisch, den du in 15 Sekunden fängst!
* url: /skillmap/shark/shark3-simple
* tags: easy, enemies, overlaps
* imageUrl: /static/skillmap/shark/shark3.gif
* next: shark4
* position: 1 1


### shark4

* name: Unter dem Meer
* type: tutorial
* description: Schmücke die Umgebung deines Hais mit einem Meereshintergrund und Seetang.
* url: /skillmap/shark/shark4-simple
* tags: easy, background, decorations
* imageUrl: /static/skillmap/shark/shark4.gif
* next: shark4a
* position: 2 1

### shark4a

* name: Animiere dein Spiel
* type: tutorial
* description: Erwecke dein Spiel mit eigenen Animationen für deine Figuren zum Leben.
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
    * map: [Probiere Dschungelsprung](/skillmap/jungle)
    * editor: [Mit vollem Werkzeugkasten bearbeiten](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/shark-cert.pdf
        * preview: /static/skillmap/certificates/shark-cert.png
    * completion-badge:
        * image: /static/badges/badge-shark.png
        * name: Haifisch-Abenteuer

