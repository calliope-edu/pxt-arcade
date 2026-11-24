# Programme une aventure
* name: Programme une aventure
* description: Programme ta propre aventure textuelle, avec sa propre musique de générique !
* infoUrl: skillmap/educator-info/adventure-info
* bannerUrl: /static/skillmap/adventure/adventure3.gif
* backgroundurl: /static/skillmap/backgrounds/adventure-comp.png
* primarycolor: #faeece
* secondarycolor: #8c281d
* tertiarycolor: #004b87
* completednodecolor: #202c1b
* highlightcolor: #ffffff
* allowcodecarryover: true
* tags: creative, intermediate, conditionals


## adventure
* layout: manual


### adventure1
* allowcodecarryover: false

* name: Commence ton voyage
* type: tutorial
* description: Crée une aventure textuelle avec des conditions !
* tags: conditionals, text
* next: adventure2
* url: /skillmap/adventure/adventure1
* imageUrl: /static/skillmap/adventure/adventure1.gif
* position: 0 -2



### adventure2
* name: Rends-la spectaculaire
* type: tutorial
* description: Crée ta propre musique et tes propres images pour enrichir ton aventure !
* tags: music, functions
* next: adventure3
* url: /skillmap/adventure/adventure2
* imageUrl: /static/skillmap/adventure/adventure2.gif
* position: 1 -2


### adventure3
* name: Vies et or
* type: tutorial
* description: Termine ton jeu en ajoutant d'autres quêtes, avec des dangers et des récompenses !
* tags: lives, score, functions
* next: adventure-cert
* url: /skillmap/adventure/adventure3
* imageUrl: /static/skillmap/adventure/adventure3.gif
* position: 1 -1




### adventure-cert
* name: Bravo !
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/adventure-cert.pdf
* imageUrl: /static/skillmap/certificates/adventure-cert.png
* showMultiplayerShare: false
* position: 2 -1
* actions:
    * map: [Essaie Ballons éclatés](/skillmap/balloon)
    * editor: [Ouvrir en mode créatif](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/adventure-cert.pdf
        * preview: /static/skillmap/certificates/adventure-cert.png
    * completion-badge:
        * image: /static/badges/badge-adventure.png
        * name: Aventure codée
