# Labyrinthe de la rock star des années 80
* name: Labyrinthe de la rock star des années 80
* description: Crée un labyrinthe rapide en programmant une rock star qui doit traverser les coulisses bondées et récupérer tout son matériel avant d'être assaillie par les fans !
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
* name: Labyrinthe de la rock star des années 80
* layout: manual

### rockstar1
* name: Coincée en coulisses
* type: tutorial
* description: Crée une rock star dans les coulisses après le concert, puis garde un œil sur elle pendant qu'elle trouve son chemin !
* url: /skillmap/rockstar/rockstar1
* tags: easy, sprites, tiles
* imageUrl: /static/skillmap/rockstar/rockstar1.gif
* next: rockstar2
* position: 1 -1

### rockstar2
* name: Récupère ton matériel
* type: tutorial
* description: Écris le code qui donne des points à ta rock star quand elle récupère tout son matériel avant de partir en tournée.
* url: /skillmap/rockstar/rockstar2
* tags: easy, tiles, events
* imageUrl: /static/skillmap/rockstar/rockstar2.gif
* next: rockstar3
* position: 2 -1

### rockstar3
* name: Évite les fans !
* type: tutorial
* description: Programme des fans déchaînés qui volent des points comme souvenirs, à moins que la rock star ne réussisse à les éviter !
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
    * map: [Essaie Explorateur spatial](/skillmap/space)
    * editor: [Modifie ton projet](/)
* rewards:
    * certificate: /static/skillmap/certificates/rockstar-cert.pdf
    * completion-badge: /static/badges/badge-rockstar.png

