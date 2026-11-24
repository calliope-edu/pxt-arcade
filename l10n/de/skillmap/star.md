# Talentshow
* name: Talentshow
* description: Lerne, ein Klickspiel zu bauen, und sammle blitzschnell Punkte, während du den talentiertesten Tieren applaudierst.
* infoUrl: skillmap/educator-info/star-map-info
* bannerUrl: /static/skillmap/star/star4-trimmed.gif
* backgroundurl: /static/skillmap/backgrounds/star-comp.png
* primarycolor: #ff7f41
* secondarycolor: #fff53d
* tertiarycolor: #17001d
* completednodecolor: #4d3740
* highlightcolor: #ffffff
* allowcodecarryover: true
* tags: easy, beginner, tutorials


## talent-show
* layout: manual


### star-activity1
* allowcodecarryover: false

* name: Willkommen zur Show
* type: tutorial
* description: Baue eine einfache Klickspiel-Talentshow mit deinen Lieblingstieren als Stars!
* tags: easy, clicker, points
* next: star-activity2
* url: /skillmap/star/star1
* imageUrl: /static/skillmap/star/star1-trimmed.gif
* position: 0 0



### star-activity2
* name: Ab ins Publikum
* type: tutorial
* description: Füge ein Publikum hinzu, das applaudiert, wenn du klickst!
* tags: easy, clicker, game, events
* next: star-activity3
* url: /skillmap/star/star2
* imageUrl: /static/skillmap/star/star2-trimmed.gif
* position: 1 0


### star-activity3
* name: Der größte Star
* type: tutorial
* description: Lass mit jedem Klick einen Sternenregen sprühen!
* tags: easy, clicker, projectiles
* next: star-activity4
* url: /skillmap/star/star3
* imageUrl: /static/skillmap/star/star3-trimmed.gif
* position: 1 -1


### star-activity4
* name: Rosen für die Stars
* type: tutorial
* description: Wirf Sterne und Rosen auf die Bühne und lerne dabei Arrays kennen!
* tags: easy, clicker, projectiles, arrays
* next: star-cert
* url: /skillmap/star/star4
* imageUrl: /static/skillmap/star/star4-trimmed.gif
* position: 2 -1


### star-cert
* name: Glückwunsch!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/star-cert.pdf
* imageUrl: /static/skillmap/certificates/star-cert.png
* position: 3 -1
* actions:
    * map: [Probiere Mama Dino](/skillmap/dino)
    * editor: [Im Kreativmodus bearbeiten](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/star-cert.pdf
        * preview: /static/skillmap/certificates/star-cert.png
    * completion-badge:
        * image: /static/badges/badge-star.png
        * name: Star der Bühne



