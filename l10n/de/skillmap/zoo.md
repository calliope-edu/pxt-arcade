# Abenteuer im Zoo!
* name: Abenteuer im Zoo!
* description: Hast du dich schon mal gefragt, was man als Tierpfleger so alles können muss? Die Antwort wird dich überraschen ...
* infoUrl: skillmap/educator-info/zookeeper-map-info
* bannerurl: /static/skillmap/zoo/zoo-welcome.png
* backgroundurl: /static/skillmap/backgrounds/zookeeper-bg.png
* primarycolor: #2EA9B0
* secondarycolor: #fff609
* tertiarycolor: #78DC52
* highlightcolor: #FFFFFF
* completednodecolor: #c1aba3
* tags: easy, entertainment

## zookeeper
* name: Tierpfleger-Ausbildung
* layout: manual

### zoo-activity1
* allowcodecarryover: false
* name: Erster Tag
* type: tutorial
* next: zoo-activity2, zoo-activity2-2
* description: Dein neuer Job als Tierpfleger beginnt. Was soll da schon schiefgehen?
* url: /skillmap/zoo/zoo1
* imageurl: /static/skillmap/zoo/zoo1.gif
* tags: easy, sprite edit, controller, camera
* position: 0 0

### zoo-activity2
* allowcodecarryover: false
* name: An Land
* type: tutorial
* description: Richte ein Gehege ein! Lass uns zu den Säugetieren spazieren und dein erstes Gehege gestalten.
* url: /skillmap/zoo/zoo2
* imageurl: /static/skillmap/zoo/zoo2.gif
* tags: easy, movement, random
* next: zoo-activity3
* position: 1 0

### zoo-activity2-2
* allowcodecarryover: false
* name: Im Meer
* type: tutorial
* description: Ab ins Aquarium! Lass uns zu den Meeresbecken gehen und ein paar Meerestiere gestalten.
* url: /skillmap/zoo/zoo2a
* imageurl: /static/skillmap/zoo/zoo2a.gif
* tags: easy, movement, random
* next: zoo-activity3
* position: 1 1
* edges: 2 1, 2 0

### zoo-activity3
* allowcodecarryover: false
* name: Pinguine
* type: tutorial
* description: Pinguin-Chaos! Kannst du die Tiere wieder einfangen, bevor dein Tag weitergeht?
* url: /skillmap/zoo/zoo3
* imageurl: /static/skillmap/zoo/zoo3.gif
* tags: easy, positioning, debugging
* next: zoo-activity4
* position: 2 0

### zoo-activity4
* allowcodecarryover: false
* name: Füttere den Panda
* type: tutorial
* description: Fütterungszeit! Schnapp dir deinen Eimer Bambus und geh zum Panda-Gehege.
* url: /skillmap/zoo/zoo4
* imageurl: /static/skillmap/zoo/zoo4.gif
* tags: easy, overlaps, events
* next: zoo-activity5
* position: 3 0

### zoo-activity5
* allowcodecarryover: false
* name: Wachtel-Schlüpfzeit
* type: tutorial
* description: Wachteln! Überall! Fang die flinken Vögel mit Code ein!
* url: /skillmap/zoo/zoo5
* imageurl: /static/skillmap/zoo/zoo5.gif
* tags: intermediate, overlaps, destroy
* next: zoo-complete
* position: 4 0

### zoo-complete
* allowcodecarryover: false
* name: Glückwunsch!
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/zookeeper-license.pdf
* imageurl: /static/skillmap/zoo/zookeeper-license.png
* position: 5 0
* actions:
    * map: [Probiere die Anfänger-Skillmap](/skillmap/beginner)
    * editor: [Bearbeite dein Projekt](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/zookeeper-license.pdf
        * preview: /static/skillmap/zoo/zookeeper-license.png
    * completion-badge:
        * image: /static/badges/badge-zoo.png
        * name: Tierpfleger-Tag
