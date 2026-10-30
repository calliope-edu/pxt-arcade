# Arcade für Einsteiger
* name: Einsteigerkurs für Arcade-Spiele
* description: Lerne, deine eigenen Arcade-Spiele zu erstellen! In den Tutorials geht es um Grußkarten, ein Klickspiel und ein Sammelspiel mit einem Dinosaurier, der fest entschlossen ist, die Dino-Babys zu retten!
* infoUrl: skillmap/educator-info/basic-map-info
* bannerUrl: /static/skillmap/backgrounds/beg-map-tile.png
* backgroundurl: /static/skillmap/backgrounds/beg-comp.png
* primarycolor: #ff7f41
* secondarycolor: #fff53d
* tertiarycolor: #87f2ff
* completednodecolor: #738472
* highlightcolor: #ffffff
* allowcodecarryover: true
* tags: easy, beginner, tutorials



## Learn to Use Arcade Tutorial
* layout: manual

### interface-activity1
* allowcodecarryover: false

* name: Lerne MakeCode Arcade kennen
* type: tutorial
* description: Eine freiwillige Einführung in die Funktionen und Begriffe, die in den Arcade-Tutorials vorkommen.
* url: /skillmap/interface/activity1
* imageUrl: /static/skillmap/interface/interface-activity-1.gif
* tags: optional, easy, introduction
* position: 0 0



## Greeting Cards and Jokes
* layout: manual

### story-activity1
* allowcodecarryover: false

* name: Grußkarte
* type: tutorial
* description: Gestalte in wenigen Minuten eine tolle Grußkarte!
* url: /skillmap/story/story1
* imageUrl: /static/skillmap/story/story-comp.png
* tags: easy, story, creative, card
* next: story-activity2
* position: 0 0


### story-activity2
* name: Größere Grüße
* type: tutorial
* description: Erweitere deine Grußkarte zu einem Geschenk, das noch lange Freude macht!
* url: /skillmap/story/story2
* imageUrl: /static/skillmap/story/story-activity-2.gif
* tags: easy, card, creative, art
* reqired: 1 story
* next: story-activity3
* position: 1 0


### story-activity3
* name: Witze machen
* allowcodecarryover: false
* type: tutorial
* description: Erstelle deine erste Arcade-Geschichte mit einem zweizeiligen Witz!
* url: /skillmap/story/story3
* imageUrl: /static/skillmap/story/muffins.gif
* tags: easy, story, joke, share
* next: beginner-cert-1
* position: 2 0


### beginner-cert-1
* name: Glückwunsch!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/beginner-cert-01.pdf
* imageUrl: /static/skillmap/certificates/beginner-cert-01.png
* position: 3 1

* rewards:
    * certificate:
        * url: /static/skillmap/certificates/beginner-cert-01.pdf
        * preview: /static/skillmap/certificates/beginner-cert-01.png
    * completion-badge:
        * image: /static/badges/badge-story.png
        * name: Grüße





## Make a Clicker Game
<!-- * required: 1 story -->
* layout: manual

### clicker-activity1
* allowcodecarryover: false

* name: Klickspiel
* type: tutorial
* description: Erstelle ein einfaches Klickspiel in MakeCode Arcade!
* url: /skillmap/clicker-themed/clickert1
* imageUrl: /static/skillmap/clicker/clicker-comp.png
* tags: easy, clicker, game
* next: clicker-activity2
* position: 0 0


### clicker-activity2
* name: Knopf-Klicker
* type: tutorial
* description: Füge deinem Klickspiel einen sichtbaren Knopf hinzu!
* url: /skillmap/clicker-themed/clickert2
* imageUrl: /static/skillmap/clicker/clickert2.gif
* tags: easy, clicker, game, images
* next: clicker-activity3
* position: 1 0


### clicker-activity3
* name: Klick-Superstar
* type: tutorial
* description: Programmiere einen Sternenregen, der bei jedem Klick erscheint!
* url: /skillmap/clicker-themed/clickert3
* imageUrl: /static/skillmap/clicker/clickert3.gif
* tags: easy, clicker, projectiles
* next: beginner-cert-2
* position: 2 1


### beginner-cert-2
* name: Glückwunsch!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/beginner-cert-02.pdf
* imageUrl: /static/skillmap/certificates/beginner-cert-02.png

* position: 3 1

* rewards:
    * certificate:
        * url: /static/skillmap/certificates/beginner-cert-02.pdf
        * preview: /static/skillmap/certificates/beginner-cert-02.png
    * completion-badge:
        * image: /static/badges/badge-clicker.png
        * name: Klicker




## Rescue the Baby Dinos
<!-- * required: 1 clicker -->
* layout: manual

### collector-activity1
* allowcodecarryover: false

* name: Dino-Schwarm
* type: tutorial
* description: Erschaffe einen Schwarm Dino-Babys, die durch die Straßen der Stadt rennen.
* url: /skillmap/collector-themed/collectort1
* imageUrl: /static/skillmap/collector/collector-comp.png
* tags: easy, collector, game
* next: collector-activity2
* position: 0 0





### collector-activity2

* name: Rette die Dino-Babys!
* type: tutorial
* description: Mit ein paar einfachen Änderungen entsteht ein Spiel, in dem Mama Dino ihre Babys einsammelt, um sie nach Hause zu bringen.
* url: /skillmap/collector-themed/collectort2
* imageUrl: /static/skillmap/collector/collectort2.gif
* tags: easy, collector, game, projectiles
* next: collector-activity3
* position: 1 1



### collector-activity3

* name: Verkehrs-Ausweicher
* type: tutorial
* description: Rette die Dino-Babys, bevor die Autos dazwischenkommen!
* url: /skillmap/collector-themed/collectort3
* imageUrl: /static/skillmap/collector/collectort3.gif
* tags: easy, collector, game, collisions
* next: collector-activity4
* position: 2 1



### collector-activity4
* name: Erwecke sie zum Leben!
* type: tutorial
* description: Animiere deine Figuren, damit sie lebendig werden!
* url: /skillmap/collector-themed/collectort4
* imageUrl: /static/skillmap/collector/collectort4.gif
* tags: easy, game, animation
* next: beginner-cert-3
* position: 3 1


### beginner-cert-3
* name: Glückwunsch!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/beginner-cert-03.pdf
* imageUrl: /static/skillmap/certificates/beginner-cert-03.png
* position: 4 1

* rewards:
    * certificate:
        * url: /static/skillmap/certificates/beginner-cert-03.pdf
        * preview: /static/skillmap/certificates/beginner-cert-03.png
    * completion-badge:
        * image: /static/badges/badge-dino.png
        * name: Dino-Baby


