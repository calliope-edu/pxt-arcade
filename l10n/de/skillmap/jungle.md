# Dschungel-Sprungspiel
* name: Dschungel-Sprungspiel
* description: Erstelle einen wilden Sidescroller namens Jungle Jump! In diesen Aktivitäten programmierst du deinen Affen, fügst magische Plattformen hinzu, wirfst Sprengstoff und sammelst Schätze in zwei anpassbaren Leveln.
* infoUrl: skillmap/educator-info/jungle-map-info
* bannerUrl: /static/skillmap/jungle/jungle6.gif
* backgroundurl: /static/skillmap/backgrounds/jungle-bg.png
* primarycolor: #2EA9B0
* secondarycolor: #F392BD
* tertiarycolor: #83C252
* highlightcolor: #FAED28
* alternatesources: github:https://github.com/microsoft/pxt-skillmap-sample/skillmap.md



## Build a Platformer Game!
* name: Dschungel-Sprungspiel
* layout: manual

### jungle1
* allowcodecarryover: false
* name: Affe in Bewegung
* type: tutorial
* description: Lass deinen Spieler springen und herumlaufen!
* url: /skillmap/jungle/jungle1
* imageUrl: /static/skillmap/jungle/jungle1.gif
* tags: easy
* next: jungle2
* position: 0 2

### jungle2
* name: Game Over
* type: tutorial
* description: Füge deinem Spiel giftige Pflanzen und wertvolle Kugeln hinzu!
* url: /skillmap/jungle/jungle2
* imageUrl: /static/skillmap/jungle/jungle2.gif
* tags: easy, tiles, tilemaps
* next: jungle3
* position: 1 2

### jungle3
* name: Große Sprünge
* type: tutorial
* description: Füge den Code hinzu, mit dem du per Knopfdruck Plattformen erzeugst!
* url: /skillmap/jungle/jungle3
* imageUrl: /static/skillmap/jungle/jungle3.gif
* tags: easy, events
* next: jungle4
* position: 1 3

### jungle4
* name: Weggesprengt
* type: tutorial
* description: Räume Plattformen mit Dynamit weg!
* url: /skillmap/jungle/jungle4
* imageUrl: /static/skillmap/jungle/jungle4.gif
* tags: easy, events, overlap
* next: jungle5
* position: 2 3

### jungle5
* name: Pass auf!
* type: tutorial
* description: Mach dein Dynamit ein kleines bisschen gefährlich.
* url: /skillmap/jungle/jungle5
* imageUrl: /static/skillmap/jungle/jungle5.gif
* tags: easy, events, overlap, lives
* next: jungle6
* position: 2 2


### jungle6
* name: Animationen
* type: tutorial
* description: Animiere deinen Affen!
* url: /skillmap/jungle/jungle6
* imageUrl: /static/skillmap/jungle/jungle6.gif
* tags: easy, animations
* next: jungle7
* position: 2 1


### jungle7
* name: Extra-Level
* type: tutorial
* description: Füge am Ende deines Spiels ein weiteres Level hinzu – für noch mehr Spaß!
* url: /skillmap/jungle/jungle7
* imageUrl: /static/skillmap/jungle/jungle7.gif
* tags: easy, levels, tilemaps
* next: jungle8, platformer-cert-1
* position: 3 1


### jungle8
* name: Mach es zu deinem Spiel
* type: tutorial
* description: Ändere deine Bilder und Tilemaps und mach daraus dein eigenes Spiel!
* url: /skillmap/jungle/jungle8
* imageUrl: /static/skillmap/jungle/jungle8.gif
* tags: intermediate, art, assets
* position: 4 0


### platformer-cert-1
* name: Glückwunsch!
* kind: completion
* type: certificate
* imageUrl: /static/skillmap/certificates/jungle-cert.png
* url: /static/skillmap/certificates/jungle-cert.pdf
* position: 4 1
* actions:
    * map: [Probiere Space Explorer](/skillmap/space)
    * editor: [Bearbeite dein Projekt](/)
* rewards:
        * certificate:
            * url: /static/skillmap/certificates/jungle-cert.pdf
            * preview: /static/skillmap/certificates/jungle-cert.png
        * completion-badge:
            * image: /static/badges/badge-jungle.png
            * name: Dschungel-Sprungspiel