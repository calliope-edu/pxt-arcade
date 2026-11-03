# Des étincelles
* name: Des étincelles
* description: Dans ce tutoriel situé dans l'Israël préhistorique, tu crées un jeu où tu dois allumer un feu pour te tenir chaud. Mais attention ! Ce n'est pas aussi facile qu'il n'y paraît !  Double-clique sur le premier niveau pour commencer.
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
* name: Un tas de bâtons
* type: tutorial
* description: Apprends à utiliser MakeCode Arcade et place un foyer classique au centre de ton jeu de clics.
* tags: easy, sprite, effects, events
* next: sparks2
* url: /skillmap/sparks/sparks1
* imageUrl: /static/skillmap/sparks/sparks1.gif
* position: 0 -2



### sparks2
* name: Gagner ou perdre
* type: tutorial
* description: Ajoute du code pour pouvoir gagner ou perdre dans ton super jeu de clics.
* tags: easy, events, win, loss
* next: sparks-cert
* url: /skillmap/sparks/sparks2
* imageUrl: /static/skillmap/sparks/sparks2.gif
* position: 1 -2

<!--
### sparks3
* name: Place à l'animation
* type: tutorial
* description: Termine ton jeu en ajoutant un son de fête foraine palpitant et de vraies animations image par image !
* tags: easy, clicker, sprite, buttons
* next: sparks4
* url: /skillmap/sparks/sparks3
* imageUrl: /static/skillmap/sparks/sparks3.gif
* position: 1 1



### sparks4
* name: Joue avec tes amis
* type: tutorial
* description: Tu veux jouer avec tes amis ? Quelques changements simples et vous jouerez à chat en un rien de temps !
* tags: easy, clicker, multiplayer, buttons
* next: sparks-cert
* url: /skillmap/sparks/sparks4
* imageUrl: /static/skillmap/sparks/sparks3.gif
* position: 1 0
-->

### sparks-cert
* name: Félicitations !
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/sparks-cert.pdf
* imageUrl: /static/skillmap/certificates/sparks-cert.png
* showMultiplayerShare: false
* position: 2 -2
* actions:
    * map: [Essaie Ballons éclatés](/skillmap/balloon)
    * editor: [Ouvrir en mode créatif](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/sparks-cert.pdf
        * preview: /static/skillmap/certificates/sparks-cert.png
    * completion-badge:
        * image: /static/badges/badge-sparks.png
        * name: Des étincelles
