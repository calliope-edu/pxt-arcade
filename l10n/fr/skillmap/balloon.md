# Ballons éclatés
* name: Ballons éclatés
* description: Crée un jeu de fête foraine simple où tu cliques très vite pour faire éclater un ballon avant la fin du temps.
* infoUrl: skillmap/educator-info/balloon-map-info
* bannerUrl: /static/skillmap/balloon/balloon3.gif
* backgroundurl: /static/skillmap/backgrounds/mouse-comp.gif
* primarycolor: #ffffff
* secondarycolor: #fff53d
* tertiarycolor: #96ecfd
* completednodecolor: #4a8397
* highlightcolor: #ff0000
* allowcodecarryover: true
* tags: easy, beginner, carnival


## burstin-balloons
* layout: manual


### balloon1
* allowcodecarryover: false

* name: Crée un jeu de clics
* type: tutorial
* description: Découvre MakeCode Arcade et crée un jeu de clics simple.
* tags: easy, intro, points, clicker
* next: balloon2
* url: /skillmap/balloon/balloon1
* imageUrl: /static/skillmap/balloon/balloon1.gif
* position: -1 2



### balloon2
* name: Fais éclater ton ballon
* type: tutorial
* description: Ajoute un ballon qui gonfle à chaque clic ! Tu seras surpris de voir à quel point il grossit avant la fin du temps. Double-clique sur le premier niveau pour commencer.
* tags: easy, clicker, sprite, events
* next: balloon3
* url: /skillmap/balloon/balloon2
* imageUrl: /static/skillmap/balloon/balloon2.gif
* position: 0 2


### balloon3
* name: Gonfle-le !
* type: tutorial
* description: Ajoute un personnage de fête foraine pour gonfler ton ballon ! Arriveras-tu à battre le chrono ?
* tags: easy, clicker, sprite, buttons
* next: balloon4
* url: /skillmap/balloon/balloon3
* imageUrl: /static/skillmap/balloon/balloon3.gif
* position: 1 2



### balloon4
* name: Fête à deux joueurs
* type: tutorial
* description: Retire le minuteur et ajoute un deuxième joueur pour une vraie compétition !
* tags: easy, clicker, sprite, buttons, multiplayer
* next: balloon-cert
* url: /skillmap/balloon/balloon4
* imageUrl: /static/skillmap/balloon/balloon4.gif
* position: 2 2


### balloon-cert
* name: Bravo !
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/balloon-cert.pdf
* imageUrl: /static/skillmap/certificates/balloon-cert.png
* showMultiplayerShare: true
* position: 2 3
* actions:
    * map: [Essaie Tape-taupe](/skillmap/mole)
    * editor: [Ouvrir en mode créatif](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/balloon-cert.pdf
        * preview: /static/skillmap/certificates/balloon-cert.png
    * completion-badge:
        * image: /static/badges/badge-balloon.png
        * name: Course de ballons




