# Käfer-Arena: Quadrate
### @hideReplaceMyCode true

## Einführung in die Käfer-Arena @showdialog

Willkommen in der 👾 **Käfer-Arena** 👾, wo die klügsten Käfer um den Ruhm kämpfen!

Schau dir dieses Einführungsvideo an und klicke dann auf OK.

![Einführung Käfer-Arena](youtube:U_bcAht2o0A "Video-Einführung in die Käfer-Arena")

## Quadrat-Algorithmus @showdialog

![Käfer-Arena Quadrate](/static/skillmap/bug-arena/squares.gif "Animation eines Quadratmusters")

Tolle Wahl beim KI-Algorithmus ✨ – damit drängst du die Konkurrenz garantiert in die Ecke 🟨!

Lass uns deinen Käfer so programmieren, dass er sich über den Bildschirm bewegt und die Arena in einem Quadratmuster einfärbt.

## Richtung festlegen

Unser Käfer bewegt sich von selbst, aber es ist wichtig, dass er gleich zu Beginn in die richtige Richtung läuft! 🗺️

Ziehe aus der Kategorie ``||hourOfAi:Bug AI||`` im Werkzeugkasten den Block ``||hourOfAi:face towards 0||`` heraus und lege ihn in den Block ``||hourOfAi:on start||``.

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
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
    	
    }
})
```

```blocks
hourOfAi.onStart(function () {
    //@highlight
    hourOfAi.turnTowards(0)
})
```

## An die Wand stoßen

Klicke im Spielfenster 🖼️ unten rechts auf den Knopf **Practice**.

Wähle dann **No Opponent** und **Infinite**.

Was passiert, wenn dein Käfer auf der anderen Seite des Bildschirms ankommt?

Oh-oh! Er bleibt stecken! 🔄

Lass uns programmieren, was passieren soll, wenn er gegen eine Wand stößt. 🧱

Ziehe aus der Kategorie ``||hourOfAi:Bug AI||`` einen ``||hourOfAi:on bump wall||``-Block in den Arbeitsbereich – du kannst ihn irgendwo ablegen.

```blockconfig.local
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
    	
    }
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

Der Dreh-Block ↩️ dreht unseren Käfer um eine bestimmte Gradzahl. Eine positive Zahl ➕ dreht im Uhrzeigersinn, eine negative Zahl ➖ gegen den Uhrzeigersinn.

![Drehwinkel](/static/skillmap/bug-arena/turn-angle.png "Drehwinkel")

Hier lassen wir es bei 90 Grad, denn unser Käfer soll sich in der Bildschirmecke genau um einen rechten Winkel drehen.

hint~

```blockconfig.local
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
    	
    }
})
```

```blocks
hourOfAi.onBumpWall(function () {
    //@highlight
    hourOfAi.turnBy(90)
})
```

## Teste auf Fehler! 🐞

Lass uns unseren Algorithmus testen und schauen, ob sich unser Käfer im Quadrat bewegt. 🟨

Was passiert im Spielfenster 🖼️, wenn unser Käfer alle 4 Seiten der Arena abgelaufen ist?

Oje! Er läuft immer weiter im selben Quadrat! ⏹️

Wie bringen wir unseren Käfer dazu, sich in konzentrischen Quadraten zu bewegen, damit er den ganzen Bildschirm ausfüllt?

~hint Was heißt konzentrisch?

---

**Konzentrisch** nennt man Formen, die ineinander passen – so wie eine Zielscheibe 🎯 aus mehreren konzentrischen Kreisen besteht.

hint~

```blockconfig.local
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
    	
    }
})
```

## Wann abbiegen?

Bevor unser Käfer abbiegt, soll er prüfen, ob er gerade auf einem Teil des Bildschirms steht, der schon mit seiner eigenen Farbe 🎨 bemalt ist.

Ziehe aus der Kategorie ``||hourOfAi:Bug AI||`` die Blockgruppe ``||hourOfAi:every 500 ms||`` in den Arbeitsbereich – du kannst sie irgendwo ablegen.

~hint Was macht das?

---

Der Block ``||hourOfAi:every 500 ms||`` führt den Code darin immer wieder nach einem bestimmten Zeitintervall ⏱️ aus, hier alle 500 Millisekunden (ms), also jede halbe Sekunde. Der Block ``||hourOfAi:distance to my color||`` liefert den Abstand in Pixeln von der Vorderseite unseres Käfers bis zu seiner eigenen Farbe 🎨. Ist der Abstand 0, dann steht unser Käfer auf seiner eigenen Farbe!

hint~

```blockconfig.local
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
    	
    }
})
```

```blocks
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {

    }
})
```

## Rechts abbiegen

Wenn der Abstand zwischen unserem Käfer und seiner eigenen Farbe 0 ist, soll er rechts abbiegen. ↩️

Ziehe aus der Kategorie ``||hourOfAi:Bug AI||`` einen ``||hourOfAi:turn 90||``-Block heraus und lege ihn in den Block ``||Logic:wenn dann||``.

```blockconfig.local
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
    	
    }
})
```

```blocks
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
        //@highlight
        hourOfAi.turnBy(90)
    }
})
```

## 🎉 Super gemacht! 🎉

Teste dein Spiel noch einmal unten im 🕹️ Spielfenster.

Schiebe den Regler **SPEED** nach rechts ➡️ und sieh zu, wie dein Käfer perfekte Quadrate malt! 🟨🟦🟩

Gute Arbeit! 👍 Du hast einen schlauen KI-Algorithmus ✨ programmiert, der deine Gegner in der Käfer-Arena einkesselt!

Weiter geht's zum 🏰 Turmkampf, wo du deine Käfer-Rivalen herausforderst!

```blockconfig.local
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
    	
    }
})
```

```blocks
hourOfAi.onStart(function () {
    hourOfAi.turnTowards(0)
})
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(90)
})
hourOfAi.every(500, function () {
    if (hourOfAi.distanceToColor(ColorType.MyColor) == 0) {
        hourOfAi.turnBy(90)
    }
})
```

```template
hourOfAi.onStart(function () {
	
})
```

```package
bug-arena=github:riknoll/bug-arena
```
