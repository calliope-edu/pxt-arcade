# Spiele-Macher-Leitfaden
* name: Spiele-Macher-Leitfaden
* description: Bring deine Spieleentwickler-Fähigkeiten aufs nächste Level, indem du die Tutorials in diesem Leitfaden abschließt.
* infoUrl: skillmap/educator-info/int-map-info
* bannerUrl: /static/skillmap/platformer/activity4.png
* backgroundurl: /static/skillmap/space/game-maker-guide-background.png
* primarycolor: #2EA9B0
* secondarycolor: #F392BD
* tertiarycolor: #83C252
* highlightcolor: #FAED28
* alternatesources: github:https://github.com/microsoft/pxt-skillmap-sample/skillmap.md

## interface
* name: Lerne MakeCode Arcade kennen
* description: Hier lernst du, wie du Tutorials in Microsoft MakeCode Arcade bearbeitest.

### interface-activity1
* allowcodecarryover: false


* name: Lerne MakeCode Arcade kennen
* type: tutorial
* description: Einführung in unsere Tutorial-Karten
* tags: easy

* url: /skillmap/interface/activity1
* imageUrl: /static/skillmap/interface/interface-activity-1.gif

## space
* name: Gestalte einen Weltraumforscher
* description: Lass uns die Tiefen des Weltraums erkunden! Wir gestalten ein Raumschiff, fügen ein paar Gegner hinzu und füllen das Universum mit Planeten.
* completionUrl: /static/skillmap/certificates/design-a-space-explorer.pdf

### space-activity1
* allowcodecarryover: false


* name: Raumschiff-Design
* type: tutorial
* description: Zeichne und programmiere ein Raumschiff!
* tags: easy
* next: space-activity2, pusher1

* url: /skillmap/space/activity1
* imageUrl: /static/skillmap/space/space1.gif

### space-activity2

* name: Projektile
* type: tutorial
* description: Gestalte dein Raumschiff mit Projektilen und Effekten.
* tags: easy, projectiles, kinds
* next: pusher2, space-activity3

* url: /skillmap/space/activity2
* imageUrl: /static/skillmap/space/projectiles.gif

### space-activity3

* name: Gegner
* description: Vorsicht, Gefahr! Füge deinem Spiel Gegner und Leben hinzu.
* type: tutorial
* tags: easy, enemies, kinds
* next: space-activity4

* url: /skillmap/space/activity3
* imageUrl: /static/skillmap/space/enemies.gif

### space-activity4

* name: Volltanken
* type: tutorial
* description: Nutze eine Erweiterung, um deinem Raumschiff eine Tankanzeige zu geben. Denk daran, oft nachzutanken!
* tags: intermediate, extensions
* next: space-cert-1

* url: /skillmap/space/activity4
* imageUrl: /static/skillmap/space/eat-gas.gif

### space-cert-1
* name: Glückwunsch!
* kind: completion
* type: certificate
* imageUrl: /static/skillmap/certificates/space-cert.png
* url: /static/skillmap/certificates/design-a-space-explorer.pdf


### pusher1
* name: Leerer Knoten
* kind: layout

### pusher2
* name: Leerer Knoten
* kind: layout


## platformer
* name: Lerne, ein Jump'n'Run zu bauen
* description: Eine Skillmap, die dir zeigt, wie du ein Jump'n'Run mit mehreren Levels baust.

### platformer-activity1
* allowcodecarryover: false


* name: Einfaches Jump'n'Run
* type: tutorial
* description: Lerne, eine Spielfigur zu erstellen, die springen und sich über eine Kachelkarte bewegen kann.
* url: /skillmap/platformer/activity1
* imageUrl: /static/skillmap/platformer/platformer1.gif
* tags: easy
* next: platformer-activity2

### platformer-activity2

* name: Kamera und Kacheln
* type: tutorial
* description: Lerne, die Kamera zu benutzen und Kachel-Überschneidungsereignisse hinzuzufügen, damit man gewinnen und verlieren kann.
* url: /skillmap/platformer/activity2
* imageUrl: /static/skillmap/platformer/platformer2.gif
* tags: easy, tiles
* next: platformer-activity3

### platformer-activity3

* name: Einfache Gegner
* type: tutorial
* description: Lerne, deinem Spiel Gegner hinzuzufügen, die der Spielfigur folgen.
* url: /skillmap/platformer/activity3
* imageUrl: /static/skillmap/platformer/platformer3.gif
* tags: intermediate, overlaps
* next: pusher3, platformer-activity4

### platformer-activity4

* name: Mehrere Levels
* type: tutorial
* description: Füge deinem Jump'n'Run mit Funktionen ein zweites Level hinzu.
* url: /skillmap/platformer/activity4
* imageUrl: /static/skillmap/platformer/platformer4.gif
* tags: intermediate, functions
* next: platformer-activity5

### platformer-activity5

* name: Gegner-KI
* type: tutorial
* description: Gib den Gegnern in deinem Spiel Physik und KI.
* url: /skillmap/platformer/activity5
* imageUrl: /static/skillmap/platformer/platformer5.gif
* tags: intermediate, AI, physics
* next: platformer-cert-1

### platformer-cert-1
* name: Glückwunsch!
* kind: completion
* type: certificate
* imageUrl: /static/skillmap/certificates/platformer-cert.png
* url: /static/skillmap/certificates/learn-to-make-a-platformer.pdf




### pusher3
* name: Leerer Knoten
* kind: layout
