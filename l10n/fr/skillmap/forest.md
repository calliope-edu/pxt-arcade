# Sauve la forêt
* name: Sauve la forêt
* description: Les derniers étés ont été parmi les plus chauds jamais enregistrés et le service des forêts a besoin de toi pour garder les incendies sous contrôle. Programme ton avion bombardier d'eau avec des blocs et installe la technique pour que ton équipe au sol t'aide à sauver la forêt ! Double-clique sur le premier niveau pour commencer.
* infoUrl: skillmap/educator-info/forest-map-info
* bannerUrl: /static/skillmap/forest/forest6.gif
* backgroundurl: /static/skillmap/backgrounds/forest-comp.png
* primarycolor: #b27ea3
* secondarycolor: #ffffff
* tertiarycolor: #249fa5
* highlightcolor: #fcd34b
* completednodecolor: #466849


## Save the Forest
* name: Sauve la forêt
* layout: manual

### forest1
* allowcodecarryover: false
* name: Prépare ton avion
* type: tutorial
* description: Prépare ton bombardier d'eau pour pouvoir aller partout où tu dois aller !
* url: /skillmap/forest_new/forest1
* imageUrl: /static/skillmap/forest/forest1.gif
* tags: easy, sprite, movement
* next: forest2
* position: 0 0

### forest2
* name: 🔥 Ça chauffe ! 🔥
* type: tutorial
* description: Utilise des boucles pour ajouter des feux au hasard sur ta carte !
* url: /skillmap/forest_new/forest2
* imageUrl: /static/skillmap/forest/forest2.gif
* tags: easy, loops, sprites
* next: forest3
* position: 1 0

### forest3
* name: Lutte contre le feu
* type: tutorial
* description: Ajoute une lance à eau à ton avion pour garder les feux sous contrôle.
* url: /skillmap/forest_new/forest3
* imageUrl: /static/skillmap/forest/forest3.gif
* tags: easy, events, sprites
* next: forest4
* position: 1 1

### forest4
* name: Ça se propage comme une traînée de poudre
* type: tutorial
* description: Beaucoup de choses influencent la vitesse à laquelle le feu se propage. Dans cette activité, tu vas ajouter des variables pour modifier le niveau de danger d'incendie.
* url: /skillmap/forest_new/forest4
* imageUrl: /static/skillmap/forest/forest4.gif
* tags: easy, variables, overlaps
* next: forest5
* position: 2 1

### forest5
* name: Garde l'œil ouvert
* type: tutorial
* description: L'informatique est plus importante que jamais pour la lutte contre les incendies ! Ajoute de la technologie pour tenir tes pilotes informés !
* url: /skillmap/forest_new/forest5
* imageUrl: /static/skillmap/forest/forest5.gif
* tags: easy, custom
* next: forest-cert
* position: 2 2



### forest-cert
* name: Bravo !
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
        * name: Sauve la forêt
* actions:
    * map: [Essaie Plateforme dans la jungle](/skillmap/jungle)
    * map: [Essaie Space Explorer](/skillmap/space)
    * editor: [Modifie ton projet avec la boîte à outils complète] (/)


### forest6
* name: Continue !
* type: tutorial
* description: Ajoute des sons et des animations pour personnaliser ton jeu.
* url: /skillmap/forest_new/forest6
* imageUrl: /static/skillmap/forest/forest6.gif
* tags: custom, animation, sounds
* position: 4 2