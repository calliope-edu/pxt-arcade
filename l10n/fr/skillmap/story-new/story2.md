# Une carte encore plus belle
### @explicitHints true


## {Introduction @showdialog}

Tu as créé une carte, maintenant rendons-la vraiment spéciale !

![Avec tout notre amour](/static/skillmap/story/story2.gif "Pourquoi les poissons tropicaux aiment-ils l'eau salée ?" )


## {Étape 2}

Le code d'une carte simple se trouve déjà dans l'espace de travail.<br/>
✉️ 💌 ✉️

---

- :mouse pointer:  Tu peux compléter cette carte ou la transformer en quelque chose de complètement différent.


💡 **Astuce :** _Si ton code ne fonctionne pas et que tu ne comprends pas pourquoi, clique sur_<br/>
**"Remplacer mon code"**<br/>
_pour remplacer les blocs de ton espace de travail par un nouveau code de départ._



#### ~ tutorialhint
```blocks
scene.setBackgroundImage(storySprites.halloween)
carnival.addLabelTo("You Are Awesome", carnival.Areas.Top)
effects.confetti.startScreenEffect()
```



## {Étape 3}

Ajoute de la musique qui se joue quand on appuie sur le **bouton (A)**.

---

- :game:  Dans la catégorie ``||controller: Contrôleur||``, fais glisser
```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.InBackground)
})
```
dans **une zone vide** de l'espace de travail.


- :mouse pointer:  Clique sur la case grise vide pour ouvrir l'éditeur de musique et compose ta propre chanson !


~hint Clique ici pour voir comment faire 🕵🏽

---

![Ajouter des blocs pour faire de la musique](/static/skillmap/story/step2-3.gif " " )

hint~


#### ~ tutorialhint
``` blocks
//@highlight
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    //@highlight
    music.play(music.createSong(hex`0078000408020108001c000e050046006603320000040a002d000000640014000132000201000244000000040002222c04000800012508000c000220250c00100002222a10001400031d242a14001800012518001c00021b221c002000012720002400012a24002800031d2427`), music.PlaybackMode.InBackground)
})
```




## {Étape 4}

**Essaie-le.**

- :binoculars: Regarde la fenêtre de jeu et appuie sur le **bouton A** (ou la barre d'espace) pour écouter ta musique.

💡 _Tu devras peut-être activer le son à côté de la fenêtre de jeu pour entendre la musique que tu as ajoutée._


![N'oublie pas d'activer le son]( /static/skillmap/assets/sound-on.gif "Image du bouton de son à droite de la fenêtre de jeu" )




## {Étape 5}

**Quelle belle surprise**

Ajoute un autre message à ta carte pour montrer que tu tiens à la personne.

---

- :circle:  Dans ``||game:Jeu||``, prends
```block
    game.showLongText("To the greatest Earth I know", DialogLayout.Bottom)
```
et place-le **tout en bas** du conteneur<br/>
``||controller(noclick):quand bouton [A] est [appuyé]||``<br/>
.


- :mouse pointer:  Modifie ce message pour qu'il aille bien avec le reste de ton projet.

~hint Clique ici pour voir comment faire 🕵🏽

---

![Ajouter un message depuis la catégorie Jeu](/static/skillmap/story/step2-5.gif " " )
hint~

```blockconfig.local
game.showLongText("To the greatest Earth I know", DialogLayout.Bottom)
```

#### ~ tutorialhint
``` blocks

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSong(hex`0078000408020108001c000e050046006603320000040a002d000000640014000132000201000244000000040002222c04000800012508000c000220250c00100002222a10001400031d242a14001800012518001c00021b221c002000012720002400012a24002800031d2427`), music.PlaybackMode.InBackground)

    //@highlight
    game.showLongText("Happy Earth Day", DialogLayout.Bottom)
})

```


## {Étape 6}

**🎨 Fais-la briller 🎨**<br/>
Personnalise le cadre du texte pour que tout aille bien ensemble.

---

- :circle:  Dans ``||game:Jeu||``, prends
```block
game.setDialogFrame(img`.`)
```
et place-le **tout en haut** du conteneur<br/>
``||controller(noclick):quand bouton [A] est [appuyé]||``<br/>
qui se trouve déjà dans ton espace de travail.


- :mouse pointer:  Choisis un design en cliquant sur la case vide et en prenant
autre chose dans la **Galerie**.

~hint Clique ici pour voir comment faire 🕵🏽

---

![Changer le cadre](/static/skillmap/story/step2-6.gif " " )
hint~


#### ~ tutorialhint
``` blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    //@highlight
    game.setDialogFrame(sprites.dialog.mediumLeaf1)
    music.play(music.createSong(hex`0078000408020108001c000e050046006603320000040a002d000000640014000132000201000244000000040002222c04000800012508000c000220250c00100002222a10001400031d242a14001800012518001c00021b221c002000012720002400012a24002800031d2427`), music.PlaybackMode.InBackground)


    game.showLongText("Happy Earth Day", DialogLayout.Bottom)
    })

```



## {Étape 7}

**Essaie encore.**

- :binoculars: Regarde la fenêtre de jeu et appuie sur le
**bouton A** (ou la barre d'espace) pour voir ton texte et écouter ta musique.





## {Étape 8}

**La touche finale 🎀**

Change la couleur du texte pour qu'elle aille bien avec ton arrière-plan.

---

- :circle:  Dans ``||game:Jeu||``, prends
```block
game.setDialogTextColor(1)
```
et place-le **tout en haut** du bloc<br/>
``||controller(noclick):quand bouton [A] est [appuyé]||``<br/>
de ton espace de travail.


- :mouse pointer:  **Clique sur l'échantillon de couleur** et choisis une couleur qui va bien avec ton message.  <br/><br/>
Ce n'est pas grave si tu dois la changer plusieurs fois avant que ce soit joli.


~hint Clique ici pour voir comment faire 🕵🏽

---

![La galerie d'arrière-plans](/static/skillmap/story/step2-8.gif "Basculer entre l'éditeur et la galerie" )
hint~


#### ~ tutorialhint
``` blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    //@highlight
    game.setDialogTextColor(1)
    game.setDialogFrame(sprites.dialog.mediumLeaf1)
    music.play(music.createSong(hex`0078000408020108001c000e050046006603320000040a002d000000640014000132000201000244000000040002222c04000800012508000c000220250c00100002222a10001400031d242a14001800012518001c00021b221c002000012720002400012a24002800031d2427`), music.PlaybackMode.InBackground)

    game.showLongText("Happy Earth Day", DialogLayout.Bottom)
    })
```



## {Étape 9}

**Regarde ta carte terminée.**

- :binoculars: Regarde la fenêtre de jeu et appuie sur le
**bouton A** (ou la barre d'espace) pour voir à quoi ressemble ton texte maintenant.





## {Terminé}

**✨ Bravo ✨**

Tu as créé une carte que tous tes amis seraient ravis de recevoir !



~hint Comment partager ma carte ?💡

---

**Tu veux partager ton projet ?**

Clique sur "Terminé" pour revenir à la skillmap, puis cherche le bouton de partage en bas à droite.

![Partage ta carte](/static/skillmap/assets/share.gif )

hint~



Clique sur **Terminé** pour revenir à la skillmap principale et partager ta carte avec un ami, puis passe au niveau suivant où tu vas créer une blague !


```blockconfig.global
carnival.addLabelTo("You Are Awesome", carnival.Areas.Top)
game.showLongText("Happy Earth Day", DialogLayout.Bottom)
game.setDialogTextColor(1)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.InBackground)
})
```


```package
carnival=github:microsoft/arcade-carnival#v0.0.7
```


```template
scene.setBackgroundImage(storySprites.world)
carnival.addLabelTo("You Are Awesome", carnival.Areas.Bottom)
effects.confetti.startScreenEffect()
```

```ghost
scene.setBackgroundColor(1)
    game.setDialogTextColor(1)
    game.setDialogFrame(img`
        88888..8888888888888888....88888.
        87768888777877787778777888867778.
        87777686767876767678767688777778.
        87767767667676676676766786776768.
        8677676767767767677677678676778..
        .877768777686767776867678667768..
        .886668888888888888888888886688..
        .888888866666666666666668877768..
        88677786666666666666666668766778.
        87766686666666666666666668776678.
        87667786666666666666666668677778.
        87777686666666666666666668866888.
        88866886666666666666666668677778.
        87777686666666666666666668776678.
        87667786666666666666666668666778.
        87766786666666666666666668777688.
        88677786666666666666666668766778.
        87766686666666666666666668776678.
        87667786666666666666666668677778.
        87777686666666666666666668866888.
        88866886666666666666666668677778.
        87777686666666666666666668776678.
        87667786666666666666666668666778.
        87766786666666666666666668777688.
        .867778866666666666666668888888..
        .886688888888888888888888866688..
        .867766876768677767686777867778..
        .8776768767767767677677676767768.
        86767768766767667667676676776778.
        87777788676787676767876768677778.
        87776888877787778777877788886778.
        88888..88888888888888888....8888.
        .................................
        `)
    game.showLongText("You are so special", DialogLayout.Bottom)
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
