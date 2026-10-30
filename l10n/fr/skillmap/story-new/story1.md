# Carte de vœux
### @explicitHints true


## {Introduction @showdialog}

Suis ces étapes rapides pour créer des cartes de vœux à partager avec tes amis et ta famille !

![Vœux](/static/skillmap/story/story1.gif "Joyeux anniversaire !" )



## {Étape 2}

**Choisis l'arrière-plan**

---

- :tree:  Dans la catégorie ``||scene:Scène||`` de la boîte à outils, prends
```block
scene.setBackgroundImage(img`.`)
```
et fais-le glisser dans le bloc vide<br/>
``||loops(noclick):au démarrage||``<br/>
de l'espace de travail.

~hint Clique ici pour voir comment faire 🕵🏽

---

![La galerie d'arrière-plans](/static/skillmap/story/choose-bg.gif "Passer de l'éditeur à la galerie" )
hint~

<br/><br/>

- :right arrow: Clique sur **Suivant** pour passer à l'étape suivante.


#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(img`.`)
```




## {Étape 3}


- :paint brush:  Clique sur le carré gris vide dans
```block
scene.setBackgroundImage(img`.`)
```
pour ouvrir l'**éditeur d'images**. <br/><br/>
Tu peux dessiner ton propre arrière-plan ou en choisir un dans la **Galerie**.
![Voici où se trouve la galerie](/static/skillmap/assets/gallery.png "Tu peux passer à la galerie ou dessiner ta propre image." )


~hint Clique ici pour voir comment faire 🕵🏽

---

![La galerie d'arrière-plans](/static/skillmap/story/story-bg-select.gif "Passer de l'éditeur à la galerie" )
hint~


#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(storySprites.halloween)
```





## {Étape 4}

**Regarde ta carte.**

- :binoculars: Regarde la fenêtre de jeu. <br/><br/>
Vois-tu l'arrière-plan que tu as choisi ?




## {Étape 5}

**Ajoute un message chaleureux**<br/>
💛 💛 💛

---

- :ticket:  Dans la catégorie ``||carnival:Carnival||``, fais glisser
```block
carnival.addLabelTo("You Are Awesome", carnival.Areas.Top)
```
à **la fin** du bloc<br/>
``||loops(noclick):au démarrage||``<br/>
qui se trouve déjà dans l'espace de travail.


- :mouse pointer: Change le message comme tu le souhaites.


~hint Clique ici pour voir comment faire 🕵🏽

---

![La galerie d'arrière-plans](/static/skillmap/story/step5.gif "Passer de l'éditeur à la galerie" )
hint~



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(storySprites.halloween)
//@highlight
carnival.addLabelTo("You Are Awesome", carnival.Areas.Top)

```





## {Étape 6}

**Change la couleur du texte**<br/>
🎨 🎨 🎨

---

- :mouse pointer: Pour changer la couleur de ton texte, clique sur le signe plus (+) dans
```block
carnival.addLabelTo("You Are Awesome", carnival.Areas.Top)
```
et choisis la couleur qui te plaît.


~hint Clique ici pour voir comment faire 🕵🏽

---

![Clique sur le plus pour choisir une couleur](/static/skillmap/story/step6.gif "Choisis une couleur" )
hint~



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(storySprites.halloween)
//@highlight
carnival.addLabelTo("You Are Awesome", carnival.Areas.Top, 1)

```



## {Étape 7}

**Place au spectacle**<br/>
🎉🎉🎉

---

- :tree:  Ouvre la catégorie ``||scene:Scène||`` et fais glisser
```block
effects.confetti.startScreenEffect()
```
à **la fin** du bloc<br/>
``||loops(noclick):au démarrage||``<br/>
qui se trouve déjà dans l'espace de travail.


- :mouse pointer: Change l'effet comme tu le souhaites.

~hint Clique ici pour voir comment faire 🕵🏽

---

![Ajoute un effet de la catégorie Scène](/static/skillmap/story/step7.gif "Choisis un effet" )
hint~

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(storySprites.halloween)
carnival.addLabelTo("You Are Awesome", carnival.Areas.Top)
//@highlight
effects.confetti.startScreenEffect()

```




## {Étape 8}

**Admire ta création !**

- :binoculars: Regarde la fenêtre de jeu. La carte ressemble-t-elle à ce que tu voulais ?  <br/><br/>
Tu peux la modifier autant que tu veux jusqu'à ce qu'elle te plaise.





## {Terminé}

**Bravo, ta carte de vœux est terminée !**<br/>
🥳 🥳 🥳



~hint Comment partager ma carte ?💡

---

**Tu veux partager ton projet ?**

Clique sur « Terminé » pour revenir à la carte des compétences, puis cherche le bouton de partage en bas à droite.

![Partage ta carte](/static/skillmap/assets/share.gif )

hint~



Clique sur **Terminé** pour revenir à la page principale de la carte des compétences, où tu pourras continuer et créer une carte encore plus détaillée.



```blockconfig.global
carnival.addLabelTo("You Are Awesome", carnival.Areas.Top)
```



```package
carnival=github:microsoft/arcade-carnival#v0.0.7
```


```ghost
scene.setBackgroundColor(1)
scene.setBackgroundImage(img`.`)
effects.confetti.startScreenEffect()
carnival.addLabelTo("You Are Awesome", carnival.Areas.Bottom)
music.startSong(assets.song`birthday`, false)
```


```assetjson

{
  "README.md": " ",
  "assets.json": "",
  "images.g.jres": "{\n    \"song2\": {\n        \"data\": \"0078000408060107001c00020a006400f401640000040000000000000000000000000000000000a80000000200012504000600012508000c0001270e001000012514001800012a18001e00012920002200012524002600012528002c0001272e003000012534003800012c38003e00012a40004200012544004600012548004c0001314c005000012e50005200012a52005400012a54005600012956005800012958005a0001275a006200012762006600013068006c0001306e007400012e76007c00012a7e008000012c82008400012a\",\n        \"mimeType\": \"application/mkcd-song\",\n        \"displayName\": \"birthday\"\n    },\n    \"song1\": {\n        \"data\": \"0078000408020202001c00010a006400f40164000004000000000000000000000000000500000077000000040002423c0400080002413a08000c00023f380c001000023d3610001400023c3514001800023d3618001c00023f381c002000023c3522002400023d3624002600023f382600280002413a28002a00023d362a002e00023f3830003200023d3632003400023c3536003800023a333a004000023c3507001c00020a006400f401640000040000000000000000000000000000000000660000000200013004000600012e08000a00012c0c000e00012a10001200012914001600012a18001a00012c1c001e00012922002400012a24002600012c26002800012e28002a00012a2a002c00012c30003200012a3200340001293600380001273a003c000129\",\n        \"mimeType\": \"application/mkcd-song\",\n        \"displayName\": \"Noel Halls\"\n    },\n    \"*\": {\n        \"mimeType\": \"image/x-mkcd-f4\",\n        \"dataEncoding\": \"base64\",\n        \"namespace\": \"myImages\"\n    }\n}",
  "images.g.ts": "// Auto-generated code. Do not edit.\nnamespace myImages {\n\n    helpers._registerFactory(\"image\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"animation\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n\n        }\n        return null;\n    })\n\n    helpers._registerFactory(\"song\", function(name: string) {\n        switch(helpers.stringTrim(name)) {\n            case \"song2\":\n            case \"birthday\":return hex`0078000408060107001c00020a006400f401640000040000000000000000000000000000000000a80000000200012504000600012508000c0001270e001000012514001800012a18001e00012920002200012524002600012528002c0001272e003000012534003800012c38003e00012a40004200012544004600012548004c0001314c005000012e50005200012a52005400012a54005600012956005800012958005a0001275a006200012762006600013068006c0001306e007400012e76007c00012a7e008000012c82008400012a`;\n            case \"song1\":\n            case \"Noel Halls\":return hex`0078000408020202001c00010a006400f40164000004000000000000000000000000000500000077000000040002423c0400080002413a08000c00023f380c001000023d3610001400023c3514001800023d3618001c00023f381c002000023c3522002400023d3624002600023f382600280002413a28002a00023d362a002e00023f3830003200023d3632003400023c3536003800023a333a004000023c3507001c00020a006400f401640000040000000000000000000000000000000000660000000200013004000600012e08000a00012c0c000e00012a10001200012914001600012a18001a00012c1c001e00012922002400012a24002600012c26002800012e28002a00012a2a002c00012c30003200012a3200340001293600380001273a003c000129`;\n        }\n        return null;\n    })\n\n}\n// Auto-generated code. Do not edit.\n",
  "main.blocks": "<xml xmlns=\"https://developers.google.com/blockly/xml\"><block type=\"pxt-on-start\" x=\"0\" y=\"0\"></block></xml>",
  "main.ts": "\n",
  "pxt.json": "{\n    \"name\": \"Untitled - Copy - Copy - Copy\",\n    \"description\": \"\",\n    \"dependencies\": {\n        \"device\": \"*\",\n        \"carnival\": \"github:microsoft/arcade-carnival#v0.0.7\"\n    },\n    \"files\": [\n        \"main.blocks\",\n        \"main.ts\",\n        \"README.md\",\n        \"assets.json\",\n        \"images.g.jres\",\n        \"images.g.ts\"\n    ],\n    \"targetVersions\": {\n        \"branch\": \"v1.11.21\",\n        \"tag\": \"v1.11.21\",\n        \"commits\": \"https://github.com/microsoft/pxt-arcade/commits/5fb4210ecb70e5d405aa1a5701b4408b5bfe9094\",\n        \"target\": \"1.11.21\",\n        \"pxt\": \"8.4.15\"\n    },\n    \"preferredEditor\": \"blocksprj\"\n}\n"
}

```