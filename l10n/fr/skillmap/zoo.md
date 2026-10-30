# L'aventure du soigneur de zoo !
* name: L'aventure du soigneur de zoo !
* description: Tu t'es déjà demandé ce qu'il faut pour être soigneur de zoo ? La réponse risque de te surprendre...
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
* name: Diplôme de soigneur
* layout: manual

### zoo-activity1
* allowcodecarryover: false
* name: Premier jour
* type: tutorial
* next: zoo-activity2, zoo-activity2-2
* description: C'est le début de ton nouveau travail de soigneur. Qu'est-ce qui pourrait mal tourner ?
* url: /skillmap/zoo/zoo1
* imageurl: /static/skillmap/zoo/zoo1.gif
* tags: easy, sprite edit, controller, camera
* position: 0 0

### zoo-activity2
* allowcodecarryover: false
* name: Sur terre
* type: tutorial
* description: Aménage un enclos ! Allons faire un tour du côté des mammifères pour préparer ton premier enclos.
* url: /skillmap/zoo/zoo2
* imageurl: /static/skillmap/zoo/zoo2.gif
* tags: easy, movement, random
* next: zoo-activity3
* position: 1 0

### zoo-activity2-2
* allowcodecarryover: false
* name: En mer
* type: tutorial
* description: Direction l'aquarium ! Allons voir les bassins et dessinons quelques créatures marines.
* url: /skillmap/zoo/zoo2a
* imageurl: /static/skillmap/zoo/zoo2a.gif
* tags: easy, movement, random
* next: zoo-activity3
* position: 1 1
* edges: 2 1, 2 0

### zoo-activity3
* allowcodecarryover: false
* name: Pingouins
* type: tutorial
* description: C'est la panique chez les pingouins ! Peux-tu les rattraper avant de continuer ta journée ?
* url: /skillmap/zoo/zoo3
* imageurl: /static/skillmap/zoo/zoo3.gif
* tags: easy, positioning, debugging
* next: zoo-activity4
* position: 2 0

### zoo-activity4
* allowcodecarryover: false
* name: Nourris le panda
* type: tutorial
* description: C'est l'heure du repas ! Prends ton seau de bambou et va à l'enclos du panda.
* url: /skillmap/zoo/zoo4
* imageurl: /static/skillmap/zoo/zoo4.gif
* tags: easy, overlaps, events
* next: zoo-activity5
* position: 3 0

### zoo-activity5
* allowcodecarryover: false
* name: L'éclosion des cailles
* type: tutorial
* description: Des cailles ! Partout ! Utilise le code pour attraper ces oiseaux rapides !
* url: /skillmap/zoo/zoo5
* imageurl: /static/skillmap/zoo/zoo5.gif
* tags: intermediate, overlaps, destroy
* next: zoo-complete
* position: 4 0

### zoo-complete
* allowcodecarryover: false
* name: Bravo !
* kind: completion
* type: certificate
* url: /static/skillmap/certificates/zookeeper-license.pdf
* imageurl: /static/skillmap/zoo/zookeeper-license.png
* position: 5 0
* actions:
    * map: [Essaie la carte débutant](/skillmap/beginner)
    * editor: [Modifie ton projet](/)
* rewards:
    * certificate:
        * url: /static/skillmap/certificates/zookeeper-license.pdf
        * preview: /static/skillmap/zoo/zookeeper-license.png
    * completion-badge:
        * image: /static/badges/badge-zoo.png
        * name: Journée de soigneur
