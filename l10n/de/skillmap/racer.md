# Monstertruck-Rennen
* name: Monstertruck-Rennen
* description: Baue ein seitlich scrollendes Monstertruck-Rennspiel, in dem du über Hindernisse springst und deinen Monstertruck ins Ziel bringst.
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
* name: Monstertruck-Rennen
* layout: manual

### racer1
* name: Achtung, fertig, los!
* type: tutorial
* description: Bring deinen Monstertruck ins Rollen und versuche, bis zum Ende deiner Höhle zu kommen.
* url: /skillmap/racer/racer1
* tags: easy, sprites, design
* imageUrl: /static/skillmap/racer/racer1.gif
* next: racer2
* position: 1 -1

### racer2
* name: Drüber und drunter
* type: tutorial
* description: Programmiere Aktionen, damit dein Truck die Gruben und Gefahren der Höhle übersteht.
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
    * activity: [Complete Optional Level](racer3)
    * map: [Probiere Weltraum-Entdecker aus](/skillmap/space)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/racer-cert.pdf
        * preview: /static/skillmap/certificates/racer-cert.png
    * completion-badge:
        * image: /static/badges/badge-racer.png
        * name: Monstertruck




### racer3
* name: Noch mehr (optional)
* type: tutorial
* description: Gestalte dein Spiel nach deinen Wünschen, indem du Animationen hinzufügst und deine Tilemap änderst.
* url: /skillmap/racer/racer3
* tags: easy, enemies, overlap, lives
* imageUrl: /static/skillmap/racer/racer3.gif
* position: 4 0
