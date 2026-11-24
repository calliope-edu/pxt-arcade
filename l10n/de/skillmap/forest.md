# Rette den Wald
* name: Rette den Wald
* description: Die letzten Sommer gehörten zu den heißesten seit Beginn der Aufzeichnungen und die Forstbehörde braucht dich, um die Brände unter Kontrolle zu halten. Programmiere mit Blöcken dein Löschflugzeug und richte Technik ein, damit dein Bodenteam dir helfen kann, den Wald zu retten! Doppelklicke auf das erste Level, um zu starten.
* infoUrl: skillmap/educator-info/forest-map-info
* bannerUrl: /static/skillmap/forest/forest6.gif
* backgroundurl: /static/skillmap/backgrounds/forest-comp.png
* primarycolor: #b27ea3
* secondarycolor: #ffffff
* tertiarycolor: #249fa5
* highlightcolor: #fcd34b
* completednodecolor: #466849


## Save the Forest
* name: Rette den Wald
* layout: manual

### forest1
* allowcodecarryover: false
* name: Mach dein Flugzeug startklar
* type: tutorial
* description: Mach dein Löschflugzeug startklar, damit du überall hinkommst, wo du gebraucht wirst!
* url: /skillmap/forest_new/forest1
* imageUrl: /static/skillmap/forest/forest1.gif
* tags: easy, sprite, movement
* next: forest2
* position: 0 0

### forest2
* name: 🔥 Brandheiße Sache 🔥
* type: tutorial
* description: Füge mit Schleifen zufällige Feuer zu deiner Karte hinzu!
* url: /skillmap/forest_new/forest2
* imageUrl: /static/skillmap/forest/forest2.gif
* tags: easy, loops, sprites
* next: forest3
* position: 1 0

### forest3
* name: Brandbekämpfung
* type: tutorial
* description: Rüste dein Flugzeug mit einem Wasserschlauch aus, damit du die Feuer unter Kontrolle hältst.
* url: /skillmap/forest_new/forest3
* imageUrl: /static/skillmap/forest/forest3.gif
* tags: easy, events, sprites
* next: forest4
* position: 1 1

### forest4
* name: Breitet sich aus wie ein Lauffeuer
* type: tutorial
* description: Viele Dinge beeinflussen, wie schnell sich Feuer ausbreitet. In dieser Aktivität fügst du Variablen hinzu, um die Brandgefahr zu verändern.
* url: /skillmap/forest_new/forest4
* imageUrl: /static/skillmap/forest/forest4.gif
* tags: easy, variables, overlaps
* next: forest5
* position: 2 1

### forest5
* name: Alles im Blick
* type: tutorial
* description: Informatik ist für die Brandbekämpfung wichtiger als je zuvor! Füge Technik hinzu, damit deine Piloten immer auf dem neuesten Stand sind!
* url: /skillmap/forest_new/forest5
* imageUrl: /static/skillmap/forest/forest5.gif
* tags: easy, custom
* next: forest-cert
* position: 2 2



### forest-cert
* name: Glückwunsch!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/forest-cert.pdf
* imageUrl: /static/skillmap/certificates/forest-cert.png
* next: forest6
* position: 3 2
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/forest-cert.pdf
        * preview: /static/skillmap/certificates/forest-cert.png
    * completion-badge:
        * image: /static/badges/badge-forest.png
        * name: Rette den Wald
* actions:
    * map: [Probier Jungle Jump](/skillmap/jungle)
    * map: [Probier Space Explorer](/skillmap/space)
    * editor: [Bearbeite dein Projekt mit dem vollen Werkzeugkasten] (/)


### forest6
* name: Mach weiter!
* type: tutorial
* description: Füge Sounds und Animationen hinzu, um dein Spiel zu gestalten.
* url: /skillmap/forest_new/forest6
* imageUrl: /static/skillmap/forest/forest6.gif
* tags: custom, animation, sounds
* position: 4 2