# Käfer-Arena: Hin und her
### @hideReplaceMyCode true

## Einführung in die Käfer-Arena @showdialog

Willkommen in der 👾 **Käfer-Arena** 👾, wo die klügsten Käfer um den Ruhm kämpfen!

Schau dir dieses Einführungsvideo an und klicke dann auf OK.

![Einführung Käfer-Arena](youtube:U_bcAht2o0A "Video-Einführung in die Käfer-Arena")

## Hin-und-her-Algorithmus @showdialog

![Käfer-Arena hin und her](/static/skillmap/bug-arena/back-and-forth.gif "Animation eines Hin-und-her-Musters")

💡 Kluge Entscheidung, diesen Algorithmus zu wählen – Millionen Rasenmäher können sich nicht irren! 🚜

Folge diesen Anweisungen, um den KI-Algorithmus ✨ deines Käfers so zu programmieren, dass er sich hin und her über den Bildschirm bewegt.

## Richtung festlegen

Unser Käfer bewegt sich von selbst, aber es ist wichtig, dass er gleich zu Beginn in die richtige Richtung läuft! 🗺️

Ziehe aus der Kategorie ``||hourOfAi:Bug AI||`` im Werkzeugkasten einen ``||hourOfAi:face towards 0||``-Block heraus und lege ihn in den Block ``||hourOfAi:on start||``.

~hint Was macht das?

---

``||hourOfAi:Face towards||`` dreht deinen Käfer so, dass er in einen bestimmten Winkel (in Grad) schaut. Dabei gilt:
- 0 = rechts
- 90 = unten
- 180 = links
- 270 = oben

![Face towards in Grad](/static/skillmap/bug-arena/degrees.png "face towards in Grad")

Unser Käfer läuft also zuerst in Richtung des rechten Bildschirmrands.

hint~

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onStart(function () {
    //@highlight
    hourOfAi.turnTowards(0)
})
```

## 🧱 An die Wand stoßen

Klicke im Spielfenster 🖼️ unten rechts auf den Knopf **Practice**.

Wähle dann **No Opponent** und **Infinite**.

Siehst du, wie sich dein Käfer nach rechts bewegt? Super! 😊 Aber was passiert, wenn dein Käfer auf der anderen Seite des Bildschirms ankommt?

Nichts 🥺 Also fügen wir Code hinzu für den Fall, dass er gegen eine Wand stößt.

Ziehe aus der Kategorie ``||hourOfAi:Bug AI||`` einen ``||hourOfAi:on bump wall||``-Block in den Arbeitsbereich – du kannst ihn irgendwo ablegen.

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onBumpWall(function () {

})
```

## Um 90 Grad drehen

Ziehe aus der Kategorie ``||hourOfAi:Bug AI||`` einen ``||hourOfAi:turn 90||``-Block heraus und lege ihn in den Block ``||hourOfAi:on bump wall||``.
<br/>
<br/>

~hint Was macht turn 90?

---

Der Dreh-Block ↩️ dreht unseren Käfer um eine bestimmte Gradzahl, ausgehend von seiner aktuellen Richtung. Eine positive Zahl ➕ dreht im Uhrzeigersinn, eine negative Zahl ➖ gegen den Uhrzeigersinn.

![Drehwinkel](/static/skillmap/bug-arena/turn-angle.png "Drehwinkel")

hint~

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onBumpWall(function () {
    //@highlight
    hourOfAi.turnBy(90)
})
```

## ⬇️ Nach unten bewegen

Wir wollen unseren Käfer um 90 Grad drehen, sodass er nach unten schaut ⤵️, ihn ein Stück laufen lassen ⬇️ und ihn dann noch einmal um 90 Grad drehen, sodass er in die Richtung zurückschaut, aus der er kam. ↩️

Dafür brauchen wir einen Block, der eine bestimmte Zeit ⏱️ wartet, bevor er sich wieder dreht.

Ziehe aus der Kategorie ``||hourOfAi:Bug AI||`` einen ``||hourOfAi:run after 1000 ms||``-Block heraus und lege ihn unter den Block ``||hourOfAi:turn 90||``.

~hint Was macht das?

---

Der Block ``||hourOfAi:run after||`` führt den Code darin aus, nachdem er eine bestimmte Zeit gewartet hat ⏳. Hier warten wir 1 Sekunde, also 1000 Millisekunden (ms), bevor wir uns wieder umdrehen.

hint~

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(90)
    //@highlight
    hourOfAi.doAfter(1000, function () {
 
    })
})
```

## ↩️ Jetzt umdrehen

Ziehe aus der Kategorie ``||hourOfAi:Bug AI||`` noch einen ``||hourOfAi:turn 90||``-Block heraus und lege ihn in den Block ``||hourOfAi:run after||``.

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(90)
    hourOfAi.doAfter(1000, function () {
        //@highlight
        hourOfAi.turnBy(90)
    })
})
```

## 🚜 Lass uns mähen!

Lass uns unseren KI-Algorithmus testen und sehen, wie gut er funktioniert. 💫

Schau ins 🕹️ Spielfenster. Was passiert? 

Unser Käfer läuft zwar hin und her, aber immer nur oben am Bildschirmrand! ➡️⬅️

Wie bringen wir unseren Käfer dazu, immer weiter nach unten ⬇️ zu laufen, damit er die ganze Arena ausfüllt?

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

## Erstelle eine Variable

Wir müssen die Richtung ändern, in die sich unser Käfer jedes Mal dreht, wenn er gegen eine Wand stößt. Zuerst dreht er sich nach rechts ➡️ (90 Grad), dann soll er sich nach links ⬅️ drehen (-90 Grad), und so weiter, immer hin und her.

Dafür erstellen wir zuerst eine Variable.

Öffne im Werkzeugkasten die Kategorie ``||Variables:Variablen||`` und klicke auf den Knopf **Erstelle eine Variable...**.  

Nenne die Variable **angle** und klicke auf OK.

~hint Was ist eine Variable?

---

Eine **Variable** ist wie ein Behälter 🪣, der einen Wert speichert. Variablen haben Namen, damit du sie in deinem Programm leicht verwenden kannst. Und der Wert in einer Variable kann sich ändern.

hint~

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

## Den Wert der Variable festlegen

Ziehe aus der Kategorie ``||Variables:Variablen||`` einen ``||Variables:setze angle auf 0||``-Block in den Block ``||hourOfAi:on start||``.

Tippe **-90** als Wert für die Variable angle ein, anstelle der **0**.

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
let angle = 0
hourOfAi.onStart(function () {
    hourOfAi.turnTowards(0)
    //@highlight
    angle = -90
})
```
## Den Wert der Variable beim Wandstoß ändern

Ziehe aus der Kategorie ``||Variables:Variablen||`` noch einen ``||Variables:setze angle auf 0||``-Block ganz oben in den Block ``||hourOfAi:on bump wall||``.

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onBumpWall(function () {
    //@highlight
    angle = 0
    hourOfAi.turnBy(90)
    hourOfAi.doAfter(1000, function () {
        hourOfAi.turnBy(90)
    })
})
```

## Mal -1 nehmen

Um zwischen 90 und -90 Grad hin und her zu wechseln, multiplizieren wir mit -1.

Ziehe aus der Kategorie ``||Math:Mathematik||`` im Werkzeugkasten einen ``||Math:Multiplikation||``-Block heraus und lege ihn in den Block ``||Variables:setze angle auf||``, anstelle der **0**.

Ziehe aus der Kategorie ``||Variables:Variablen||`` einen ``||Variables:angle||``-Block heraus und lege ihn in den ``||Math:Multiplikation||``-Block, anstelle der ersten **0**.

Tippe **-1** als zweiten Wert in den ``||Math:Multiplikation||``-Block ein.

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onBumpWall(function () {
    //@highlight
    angle = angle * -1
    hourOfAi.turnBy(90)
    hourOfAi.doAfter(1000, function () {
        hourOfAi.turnBy(90)
    })
})
```

## Drehwinkel

Jetzt ersetzen wir unsere 90-Grad-Drehungen durch unsere Variable ``||Variables:angle||``.

Ziehe aus der Kategorie ``||Variables:Variablen||`` zwei ``||Variables:angle||``-Blöcke heraus und lege jeweils einen in jeden ``||hourOfAi:turn||``-Block, anstelle der **90** Grad.

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onBumpWall(function () {
    angle = angle * -1
    //@highlight
    hourOfAi.turnBy(angle)
    hourOfAi.doAfter(1000, function () {
        //@highlight
        hourOfAi.turnBy(angle)
    })
})
```

## 🎉 Super gemacht! 🎉

Teste dein Spiel noch einmal im 🕹️ Spielfenster.

Schiebe den Regler **SPEED** nach rechts ➡️ und sieh zu, wie dein Käfer hin und her läuft und den Bildschirm mit herrlicher Farbe füllt!

👏 Gute Arbeit! Du hast einen schlauen KI-Algorithmus ✨ programmiert, der deine Gegner in der Käfer-Arena einfach niedermäht 🍃!

Weiter geht's zum 🏰 Turmkampf, wo du deine Käfer-Rivalen herausforderst!

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
let angle = 0
hourOfAi.onStart(function () {
    hourOfAi.turnTowards(0)
    angle = -90
})
hourOfAi.onBumpWall(function () {
    angle = angle * -1
    hourOfAi.turnBy(angle)
    hourOfAi.doAfter(1000, function () {
        hourOfAi.turnBy(angle)
    })
})
```

```template
hourOfAi.onStart(function () {
	
})
```

```package
bug-arena=github:riknoll/bug-arena
```
