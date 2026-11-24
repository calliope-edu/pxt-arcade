# Truthahn-Tag!
* name: Truthahn-Tag!
* description: Zeit für den großen Ausbruch! Hilf deinem Truthahn, alle seine Freunde zu befreien und in diesem rasanten Plattformspiel in die Freiheit zu klettern. Doppelklicke auf das erste Level, um zu starten.
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
* name: Truthahn-Tag
* layout: manual

### turkey1
* name: Beweg den Truthahn
* type: tutorial
* description: Erstelle einen Truthahn und hilf ihm, sich über die Kachelkarte zu bewegen!
* url: /skillmap/turkey/turkey1
* tags: easy, sprites, tiles
* imageUrl: /static/skillmap/turkey/turkey1.gif
* next: turkey2
* position: 0 -1

### turkey2
* name: Versammle eine Schar
* type: tutorial
* description: Schreib den Code, mit dem dein Truthahn seine Freunde aus ihren Käfigen befreit. Aber pass auf! Bald hast du eine ganze Schar um dich.
* url: /skillmap/turkey/turkey2
* tags: easy, tiles, events
* imageUrl: /static/skillmap/turkey/turkey2.gif
* next: turkey3
* position: 1 -1

### turkey3
* name: Gewinnen oder verlieren
* type: tutorial
* description: Stell einen Timer und fordere dich selbst heraus: Befreie die Truthähne und flieh so schnell wie möglich aus dem Stall!
* url: /skillmap/turkey/turkey3
* tags: easy, overlap, timer
* imageUrl: /static/skillmap/turkey/turkey3.gif
* next: turkey-finish
* position: 2 0


### turkey-finish
* name: Glückwunsch!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/turkey-cert.pdf
* imageUrl: /static/skillmap/certificates/turkey-cert.png
* position: 3 0
* actions:
    * map: [Probiere Burstin' Balloons](/skillmap/balloon)
    * editor: [Dieses Projekt verändern](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/turkey-cert.pdf
        * preview: /static/skillmap/certificates/turkey-cert.png
    * completion-badge:
        * image: /static/badges/badge-turkey.png
        * name: Truthahn-Tag

