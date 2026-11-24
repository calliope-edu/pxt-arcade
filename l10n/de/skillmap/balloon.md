# Platzende Ballons
* name: Platzende Ballons
* description: Baue ein einfaches Jahrmarktspiel, bei dem du ganz schnell klickst, um einen Ballon platzen zu lassen, bevor die Zeit abläuft.
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

* name: Baue einen Klicker
* type: tutorial
* description: Lerne MakeCode Arcade kennen und baue ein einfaches Klickspiel.
* tags: easy, intro, points, clicker
* next: balloon2
* url: /skillmap/balloon/balloon1
* imageUrl: /static/skillmap/balloon/balloon1.gif
* position: -1 2



### balloon2
* name: Lass den Ballon platzen
* type: tutorial
* description: Füge einen Ballon hinzu, der sich mit jedem Klick aufbläst! Du wirst staunen, wie prall er wird, bevor die Zeit abläuft. Doppelklicke auf das erste Level, um zu starten.
* tags: easy, clicker, sprite, events
* next: balloon3
* url: /skillmap/balloon/balloon2
* imageUrl: /static/skillmap/balloon/balloon2.gif
* position: 0 2


### balloon3
* name: Pump ihn auf
* type: tutorial
* description: Füge eine Jahrmarktfigur hinzu, die deinen Ballon aufpumpt! Schaffst du es gegen die Uhr?
* tags: easy, clicker, sprite, buttons
* next: balloon4
* url: /skillmap/balloon/balloon3
* imageUrl: /static/skillmap/balloon/balloon3.gif
* position: 1 2



### balloon4
* name: Party zu zweit
* type: tutorial
* description: Entferne den Timer und füge einen zweiten Spieler hinzu – für einen echten Wettkampf!
* tags: easy, clicker, sprite, buttons, multiplayer
* next: balloon-cert
* url: /skillmap/balloon/balloon4
* imageUrl: /static/skillmap/balloon/balloon4.gif
* position: 2 2


### balloon-cert
* name: Glückwunsch!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/balloon-cert.pdf
* imageUrl: /static/skillmap/certificates/balloon-cert.png
* showMultiplayerShare: true
* position: 2 3
* actions:
    * map: [Probier Hau den Maulwurf](/skillmap/mole)
    * editor: [Im Kreativmodus öffnen](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/balloon-cert.pdf
        * preview: /static/skillmap/certificates/balloon-cert.png
    * completion-badge:
        * image: /static/badges/badge-balloon.png
        * name: Ballonrennen




