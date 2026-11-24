# 80er-Rockstar-Labyrinth!
* name: 80er-Rockstar-Labyrinth!
* description: Erstelle ein rasantes Labyrinth-Spiel: Programmiere einen Rockstar, der sich durch den vollen Backstage-Bereich bewegt und seine ganze Ausrüstung einsammelt, bevor die Fans ihn umzingeln!
* infoUrl: skillmap/educator-info/rockstar-map-info
* backgroundurl: /static/skillmap/backgrounds/rockstar-comp.png
* bannerurl: /static/skillmap/rockstar/rockstar2.gif
* primarycolor: #ff93c4
* secondarycolor: #fdf60c
* tertiarycolor: #161112
* strokecolor: #ffffff
* highlightcolor: #ffffff
* completednodecolor: #3b3738

## rockstar
* name: 80er-Rockstar-Labyrinth
* layout: manual

### rockstar1
* name: Gefangen im Backstage
* type: tutorial
* description: Erstelle einen Rockstar, der nach der Show im Backstage-Bereich steckt, und behalte ihn im Blick, während er seinen Weg sucht!
* url: /skillmap/rockstar/rockstar1
* tags: easy, sprites, tiles
* imageUrl: /static/skillmap/rockstar/rockstar1.gif
* next: rockstar2
* position: 1 -1

### rockstar2
* name: Sammle deine Ausrüstung
* type: tutorial
* description: Schreibe den Code, der deinem Rockstar Punkte gibt, wenn er seine ganze Ausrüstung einsammelt, bevor es auf Tour geht.
* url: /skillmap/rockstar/rockstar2
* tags: easy, tiles, events
* imageUrl: /static/skillmap/rockstar/rockstar2.gif
* next: rockstar3
* position: 2 -1

### rockstar3
* name: Weiche den Fans aus!
* type: tutorial
* description: Programmiere ein paar verrückte Fans, die Punkte als Souvenirs stehlen – außer der Rockstar kann ihnen ausweichen!
* url: /skillmap/rockstar/rockstar3
* tags: easy, enemies, overlap, lives
* imageUrl: /static/skillmap/rockstar/rockstar3.gif
* next: rockstar-finish
* position: 3 0


### rockstar-finish
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/rockstar-cert.pdf
* imageUrl: /static/skillmap/certificates/rockstar-cert.png
* position: 4 0
* actions:
    * map: [Probiere unseren Weltraumforscher](/skillmap/space)
    * editor: [Verändere dein Projekt](/)
* rewards:
    * certificate: /static/skillmap/certificates/rockstar-cert.pdf
    * completion-badge: /static/badges/badge-rockstar.png

