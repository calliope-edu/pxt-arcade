# Text-Adventure
* name: Programmiere ein Abenteuer
* description: Programmiere dein eigenes Text-Abenteuer – komplett mit eigener Titelmelodie!
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

* name: Beginne deine Reise
* type: tutorial
* description: Erstelle ein Text-Abenteuer mit Bedingungen!
* tags: conditionals, text
* next: adventure2
* url: /skillmap/adventure/adventure1
* imageUrl: /static/skillmap/adventure/adventure1.gif
* position: 0 -2



### adventure2
* name: Mach es spektakulär
* type: tutorial
* description: Erstelle eigene Musik und Bilder, um dein Abenteuer noch besser zu machen!
* tags: music, functions
* next: adventure3
* url: /skillmap/adventure/adventure2
* imageUrl: /static/skillmap/adventure/adventure2.gif
* position: 1 -2


### adventure3
* name: Leben und Gold
* type: tutorial
* description: Stelle dein Spiel fertig, indem du weitere Aufgaben hinzufügst – mit Gefahren und Belohnungen!
* tags: lives, score, functions
* next: adventure-cert
* url: /skillmap/adventure/adventure3
* imageUrl: /static/skillmap/adventure/adventure3.gif
* position: 1 -1




### adventure-cert
* name: Glückwunsch!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/adventure-cert.pdf
* imageUrl: /static/skillmap/certificates/adventure-cert.png
* showMultiplayerShare: false
* position: 2 -1
* actions:
    * map: [Probiere Platzende Ballons](/skillmap/balloon)
    * editor: [Im Kreativmodus öffnen](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/adventure-cert.pdf
        * preview: /static/skillmap/certificates/adventure-cert.png
    * completion-badge:
        * image: /static/badges/badge-adventure.png
        * name: Code-Abenteuer
