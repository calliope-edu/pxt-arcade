# Hau den Maulwurf
* name: Hau den Maulwurf
* description: Erstelle dein eigenes Jahrmarktspiel, in dem du Maulwürfe haust. Doppelklicke auf das erste Level, um zu starten.
* infoUrl: skillmap/educator-info/mole-map-info
* bannerUrl: /static/skillmap/mole/mole3.gif
* backgroundurl: /static/skillmap/backgrounds/mole-comp.gif
* primarycolor: #ffffff
* secondarycolor: #fff53d
* tertiarycolor: #82cd54
* completednodecolor: #604c4e
* highlightcolor: #ff0000
* allowcodecarryover: true
* tags: easy, beginner, carnival


## whack-the-mole
* layout: manual


### mole1
* allowcodecarryover: false

* name: Maulwurfjagd
* type: tutorial
* description: Lerne MakeCode Arcade kennen und füge deinem Projekt einen frechen Maulwurf-Sprite hinzu.
* tags: easy, sprite, random
* next: mole2
* url: /skillmap/mole/mole1
* imageUrl: /static/skillmap/mole/mole1.gif
* position: -1 1



### mole2
* name: Hammerzeit
* type: tutorial
* description: Füge einen Gummihammer hinzu, um den Maulwurf zu treffen und Punkte zu sammeln! Wie viele Punkte schaffst du, bevor die Zeit abläuft?
* tags: easy, sprite, overlap, points
* next: mole3
* url: /skillmap/mole/mole2
* imageUrl: /static/skillmap/mole/mole2.gif
* position: 0 1


### mole3
* name: Bring Bewegung rein
* type: tutorial
* description: Mach dein Spiel fertig mit einem spannenden Jahrmarkt-Sound und echten Einzelbild-Animationen!
* tags: easy, clicker, sprite, buttons
* next: mole4
* url: /skillmap/mole/mole3
* imageUrl: /static/skillmap/mole/mole3.gif
* position: 1 1



### mole4
* name: Spiel mit Freunden
* type: tutorial
* description: Du willst mit Freunden spielen? Mit ein paar einfachen Änderungen spielt ihr im Handumdrehen Fangen!
* tags: easy, clicker, multiplayer, buttons
* next: mole-cert
* url: /skillmap/mole/mole4
* imageUrl: /static/skillmap/mole/mole3.gif
* position: 1 0


### mole-cert
* name: Glückwunsch!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/mole-cert.pdf
* imageUrl: /static/skillmap/certificates/mole-cert.png
* showMultiplayerShare: true
* position: 2 0
* actions:
    * map: [Probiere Ballonplatzen aus](/skillmap/balloon)
    * editor: [Im Kreativmodus öffnen](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/mole-cert.pdf
        * preview: /static/skillmap/certificates/mole-cert.png
    * completion-badge:
        * image: /static/badges/badge-mole.png
        * name: Hau den Maulwurf
