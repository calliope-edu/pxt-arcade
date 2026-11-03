# Funkenflug
* name: Funkenflug
* description: In diesem Tutorial, das im prähistorischen Israel spielt, erstellst du ein Spiel, in dem du ein Feuer entfachen musst, um dich warm zu halten. Aber Vorsicht! Das ist nicht so leicht, wie es klingt!  Doppelklicke auf das erste Level, um zu beginnen.
* infoUrl: skillmap/educator-info/spark-map-info
* bannerUrl: /static/skillmap/sparks/campfire.gif
* backgroundurl: /static/skillmap/backgrounds/sparks-comp.png
* primarycolor: #bebebe
* secondarycolor: #ffb200
* tertiarycolor: #0d1a36
* completednodecolor: #5f282a
* highlightcolor: #ffff00
* allowcodecarryover: true
* tags: prehistoric, educational, clicker


## sparks-flying
* layout: manual


### sparks1
* allowcodecarryover: false
* name: Ein Haufen Stöcke
* type: tutorial
* description: Lerne MakeCode Arcade kennen und baue eine klassische Feuerstelle in die Mitte deines Klick-Spiels.
* tags: easy, sprite, effects, events
* next: sparks2
* url: /skillmap/sparks/sparks1
* imageUrl: /static/skillmap/sparks/sparks1.gif
* position: 0 -2



### sparks2
* name: Gewinnen und Verlieren
* type: tutorial
* description: Füge Code hinzu, mit dem man dein tolles Klick-Spiel gewinnen oder verlieren kann.
* tags: easy, events, win, loss
* next: sparks-cert
* url: /skillmap/sparks/sparks2
* imageUrl: /static/skillmap/sparks/sparks2.gif
* position: 1 -2

<!--
### sparks3
* name: Bring Bewegung rein
* type: tutorial
* description: Vollende dein Spiel mit einem mitreißenden Jahrmarkt-Sound und echten Bild-für-Bild-Animationen!
* tags: easy, clicker, sprite, buttons
* next: sparks4
* url: /skillmap/sparks/sparks3
* imageUrl: /static/skillmap/sparks/sparks3.gif
* position: 1 1



### sparks4
* name: Spiel mit Freunden
* type: tutorial
* description: Willst du mit Freunden spielen? Mit ein paar einfachen Änderungen spielt ihr im Handumdrehen Fangen!
* tags: easy, clicker, multiplayer, buttons
* next: sparks-cert
* url: /skillmap/sparks/sparks4
* imageUrl: /static/skillmap/sparks/sparks3.gif
* position: 1 0
-->

### sparks-cert
* name: Glückwunsch!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/sparks-cert.pdf
* imageUrl: /static/skillmap/certificates/sparks-cert.png
* showMultiplayerShare: false
* position: 2 -2
* actions:
    * map: [Probiere Platzende Ballons](/skillmap/balloon)
    * editor: [Im Kreativmodus öffnen](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/sparks-cert.pdf
        * preview: /static/skillmap/certificates/sparks-cert.png
    * completion-badge:
        * image: /static/badges/badge-sparks.png
        * name: Funkenflug
