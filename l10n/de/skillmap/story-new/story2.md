# Größere Grußkarte
### @explicitHints true


## {Einführung @showdialog}

Du hast eine Karte gestaltet – jetzt machen wir sie zu etwas ganz Besonderem!

![Liebe Grüße](/static/skillmap/story/story2.gif "Warum mögen tropische Fische Salzwasser?" )


## {Schritt 2}

Der Code für eine einfache Karte ist schon im Arbeitsbereich.<br/>
✉️ 💌 ✉️

---

- :mouse pointer:  Du kannst diese Karte ergänzen oder etwas ganz anderes daraus machen.


💡 **Tipp:** _Wenn dein Code nicht funktioniert und du nicht herausfindest, warum, klicke auf_<br/>
**"Meinen Code ersetzen"**<br/>
_um die Blöcke in deinem Arbeitsbereich durch neuen Startcode zu ersetzen._



#### ~ tutorialhint
```blocks
scene.setBackgroundImage(storySprites.halloween)
carnival.addLabelTo("You Are Awesome", carnival.Areas.Top)
effects.confetti.startScreenEffect()
```



## {Schritt 3}

Füge Musik hinzu, die abgespielt wird, wenn der **(A)-Knopf** gedrückt wird.

---

- :game:  Ziehe aus der Kategorie ``||controller: Controller||``
```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.createSong(hex`00780004080200`), music.PlaybackMode.InBackground)
})
```
in **einen leeren Bereich** des Arbeitsbereichs.


- :mouse pointer:  Klicke auf das leere graue Feld, um den Musikeditor zu öffnen, und komponiere dein eigenes Lied!


~hint Klicke hier, um zu sehen, wie es geht 🕵🏽

---

![Blöcke hinzufügen, um Musik zu machen](/static/skillmap/story/step2-3.gif " " )

hint~


#### ~ tutorialhint
``` blocks
//@highlight
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    //@highlight
    music.play(music.createSong(hex`0078000408020108001c000e050046006603320000040a002d000000640014000132000201000244000000040002222c04000800012508000c000220250c00100002222a10001400031d242a14001800012518001c00021b221c002000012720002400012a24002800031d2427`), music.PlaybackMode.InBackground)
})
```




## {Schritt 4}

**Probier es aus.**

- :binoculars: Schau dir das Spielfenster an und drücke den **A-Knopf** (oder die Leertaste), um deine Musik zu hören.

💡 _Vielleicht musst du neben dem Spielfenster den Ton einschalten, um deine Musik zu hören._


![Vergiss nicht, den Ton einzuschalten]( /static/skillmap/assets/sound-on.gif "Bild des Ton-Knopfs rechts neben dem Spielfenster" )




## {Schritt 5}

**Was für eine schöne Überraschung**

Füge deiner Karte eine weitere Nachricht hinzu, um zu zeigen, dass du an jemanden denkst.

---

- :circle:  Nimm aus ``||game:Spiel||``
```block
    game.showLongText("To the greatest Earth I know", DialogLayout.Bottom)
```
und setze ihn **ganz unten** in den Container<br/>
``||controller(noclick):wenn [A] Knopf [gedrückt]||``<br/>
ein.


- :mouse pointer:  Ändere die Nachricht so, dass sie zum Rest deines Projekts passt.

~hint Klicke hier, um zu sehen, wie es geht 🕵🏽

---

![Eine Nachricht aus der Kategorie Spiel hinzufügen](/static/skillmap/story/step2-5.gif " " )
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


## {Schritt 6}

**🎨 Bring es zum Strahlen 🎨**<br/>
Gestalte den Textrahmen, damit alles gut zusammenpasst.

---

- :circle:  Nimm aus ``||game:Spiel||``
```block
game.setDialogFrame(img`.`)
```
und setze ihn **ganz oben** in den Container<br/>
``||controller(noclick):wenn [A] Knopf [gedrückt]||``<br/>
ein, der schon in deinem Arbeitsbereich ist.


- :mouse pointer:  Wähle ein Design aus, indem du auf das leere Feld klickst und
etwas anderes aus der **Galerie** aussuchst.

~hint Klicke hier, um zu sehen, wie es geht 🕵🏽

---

![Den Rahmen ändern](/static/skillmap/story/step2-6.gif " " )
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



## {Schritt 7}

**Probier es noch einmal.**

- :binoculars: Schau dir das Spielfenster an und drücke den
**A-Knopf** (oder die Leertaste), um deinen Text zu sehen und deine Musik zu hören.





## {Schritt 8}

**Der letzte Schliff 🎀**

Ändere die Textfarbe, damit sie gut zu deinem Hintergrund passt.

---

- :circle:  Nimm aus ``||game:Spiel||``
```block
game.setDialogTextColor(1)
```
und setze ihn **ganz oben** in den Block<br/>
``||controller(noclick):wenn [A] Knopf [gedrückt]||``<br/>
in deinem Arbeitsbereich ein.


- :mouse pointer:  **Klicke auf das Farbfeld** und wähle eine Farbe, die gut zu deiner Nachricht passt.  <br/><br/>
Es ist völlig okay, wenn du sie ein paar Mal ändern musst, bis sie richtig aussieht.


~hint Klicke hier, um zu sehen, wie es geht 🕵🏽

---

![Die Hintergrund-Galerie](/static/skillmap/story/step2-8.gif "Zwischen Editor und Galerie wechseln" )
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



## {Schritt 9}

**Schau dir deine fertige Karte an.**

- :binoculars: Schau dir das Spielfenster an und drücke den
**A-Knopf** (oder die Leertaste), um zu sehen, wie dein Text jetzt aussieht.





## {Geschafft}

**✨ Glückwunsch ✨**

Du hast eine Karte gestaltet, über die sich jeder Freund und jede Freundin freuen würde!



~hint Wie teile ich meine Karte?💡

---

**Möchtest du dein Projekt teilen?**

Klicke auf "Fertig", um zur Skillmap zurückzukehren, und suche dann unten rechts nach dem Teilen-Knopf.

![Teile deine Karte](/static/skillmap/assets/share.gif )

hint~



Klicke auf **Fertig**, um zur Skillmap zurückzukehren und deine Karte mit einem Freund oder einer Freundin zu teilen. Danach geht es weiter zum nächsten Level, in dem du einen Witz erzählst!


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
