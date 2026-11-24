# Grußkarte
### @explicitHints true


## {Einführung @showdialog}

Mit diesen schnellen Schritten gestaltest du Grußkarten, die du mit Freunden und Familie teilen kannst!

![Grüße](/static/skillmap/story/story1.gif "Alles Gute zum Geburtstag!" )



## {Schritt 2}

**Setze den Hintergrund**

---

- :tree:  Nimm aus der Kategorie ``||scene:Szene||`` im Werkzeugkasten
```block
scene.setBackgroundImage(img`.`)
```
und ziehe ihn in den leeren Block<br/>
``||loops(noclick):beim Start||``<br/>
im Arbeitsbereich.

~hint Klicke hier, um zu sehen, wie es geht 🕵🏽

---

![Die Hintergrund-Galerie](/static/skillmap/story/choose-bg.gif "Zwischen Editor und Galerie wechseln" )
hint~

<br/><br/>

- :right arrow: Klicke auf **Weiter**, um zum nächsten Schritt zu gelangen.


#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(img`.`)
```




## {Schritt 3}


- :paint brush:  Klicke auf das leere graue Quadrat in
```block
scene.setBackgroundImage(img`.`)
```
um den **Bildeditor** zu öffnen. <br/><br/>
Du kannst deinen eigenen Hintergrund zeichnen oder einen aus der **Galerie** auswählen.
![Hier ist die Galerie](/static/skillmap/assets/gallery.png "Du kannst zur Galerie wechseln oder dein eigenes Bild malen." )


~hint Klicke hier, um zu sehen, wie es geht 🕵🏽

---

![Die Hintergrund-Galerie](/static/skillmap/story/story-bg-select.gif "Zwischen Editor und Galerie wechseln" )
hint~


#### ~ tutorialhint

```blocks
//@highlight
scene.setBackgroundImage(storySprites.halloween)
```





## {Schritt 4}

**Sieh dir deine Karte an.**

- :binoculars: Schau in das Spielfenster. <br/><br/>
Siehst du den Hintergrund, den du ausgewählt hast?




## {Schritt 5}

**Füge einen herzlichen Gruß hinzu**<br/>
💛 💛 💛

---

- :ticket:  Ziehe aus der Kategorie ``||carnival:Carnival||``
```block
carnival.addLabelTo("You Are Awesome", carnival.Areas.Top)
```
an **das Ende** des Blocks<br/>
``||loops(noclick):beim Start||``,<br/>
der schon im Arbeitsbereich liegt.


- :mouse pointer: Ändere die Nachricht, wie du möchtest.


~hint Klicke hier, um zu sehen, wie es geht 🕵🏽

---

![Die Hintergrund-Galerie](/static/skillmap/story/step5.gif "Zwischen Editor und Galerie wechseln" )
hint~



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(storySprites.halloween)
//@highlight
carnival.addLabelTo("You Are Awesome", carnival.Areas.Top)

```





## {Schritt 6}

**Ändere die Textfarbe**<br/>
🎨 🎨 🎨

---

- :mouse pointer: Wenn du die Farbe deines Textes ändern möchtest, klicke auf das Pluszeichen (+) in
```block
carnival.addLabelTo("You Are Awesome", carnival.Areas.Top)
```
und wähle eine Farbe, die dir gefällt.


~hint Klicke hier, um zu sehen, wie es geht 🕵🏽

---

![Klicke auf das Plus, um eine Farbe zu wählen](/static/skillmap/story/step6.gif "Wähle eine Farbe" )
hint~



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(storySprites.halloween)
//@highlight
carnival.addLabelTo("You Are Awesome", carnival.Areas.Top, 1)

```



## {Schritt 7}

**Zeit für Glanz und Glamour**<br/>
🎉🎉🎉

---

- :tree:  Öffne die Kategorie ``||scene:Szene||`` und ziehe
```block
effects.confetti.startScreenEffect()
```
an **das Ende** des Blocks<br/>
``||loops(noclick):beim Start||``,<br/>
der schon im Arbeitsbereich liegt.


- :mouse pointer: Ändere den Effekt, wie du möchtest.

~hint Klicke hier, um zu sehen, wie es geht 🕵🏽

---

![Füge einen Effekt aus der Kategorie Szene hinzu](/static/skillmap/story/step7.gif "Wähle einen Effekt" )
hint~

#### ~ tutorialhint

```blocks
scene.setBackgroundImage(storySprites.halloween)
carnival.addLabelTo("You Are Awesome", carnival.Areas.Top)
//@highlight
effects.confetti.startScreenEffect()

```




## {Schritt 8}

**Sieh dir dein Werk an!**

- :binoculars: Schau in das Spielfenster. Sieht die Karte so aus, wie du sie haben möchtest?  <br/><br/>
Du kannst sie gern weiter verändern, bis sie dir gefällt.





## {Geschafft}

**Herzlichen Glückwunsch, deine Grußkarte ist fertig!**<br/>
🥳 🥳 🥳



~hint Wie teile ich meine Karte?💡

---

**Möchtest du dein Projekt teilen?**

Klicke auf „Fertig“, um zur Skillmap zurückzukehren. Unten rechts findest du dann die Schaltfläche zum Teilen.

![Teile deine Karte](/static/skillmap/assets/share.gif )

hint~



Klicke auf **Fertig**, um zur Übersicht der Skillmap zurückzukehren. Dort kannst du weitermachen und eine noch ausführlichere Karte gestalten.



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