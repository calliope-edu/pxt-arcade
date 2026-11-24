# Tape-taupe
* name: Tape-taupe
* description: Crée ton propre jeu de fête foraine où il faut taper les taupes. Double-clique sur le premier niveau pour commencer.
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

* name: Chasse à la taupe
* type: tutorial
* description: Apprends à utiliser MakeCode Arcade et ajoute un sprite de taupe espiègle à ton projet.
* tags: easy, sprite, random
* next: mole2
* url: /skillmap/mole/mole1
* imageUrl: /static/skillmap/mole/mole1.gif
* position: -1 1



### mole2
* name: L'heure du marteau
* type: tutorial
* description: Ajoute un marteau en caoutchouc pour toucher la taupe et gagner des points ! Combien de points peux-tu marquer avant la fin du temps ?
* tags: easy, sprite, overlap, points
* next: mole3
* url: /skillmap/mole/mole2
* imageUrl: /static/skillmap/mole/mole2.gif
* position: 0 1


### mole3
* name: Place à l'animation
* type: tutorial
* description: Termine ton jeu en ajoutant un son de fête foraine palpitant et de vraies animations image par image !
* tags: easy, clicker, sprite, buttons
* next: mole4
* url: /skillmap/mole/mole3
* imageUrl: /static/skillmap/mole/mole3.gif
* position: 1 1



### mole4
* name: Joue avec tes amis
* type: tutorial
* description: Tu veux jouer avec tes amis ? Quelques changements simples et vous jouerez à la poursuite en un rien de temps !
* tags: easy, clicker, multiplayer, buttons
* next: mole-cert
* url: /skillmap/mole/mole4
* imageUrl: /static/skillmap/mole/mole3.gif
* position: 1 0


### mole-cert
* name: Bravo !
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/mole-cert.pdf
* imageUrl: /static/skillmap/certificates/mole-cert.png
* showMultiplayerShare: true
* position: 2 0
* actions:
    * map: [Essaie Éclate-ballons](/skillmap/balloon)
    * editor: [Ouvrir en mode créatif](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/mole-cert.pdf
        * preview: /static/skillmap/certificates/mole-cert.png
    * completion-badge:
        * image: /static/badges/badge-mole.png
        * name: Tape-taupe
