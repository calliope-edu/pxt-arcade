# Käfer-Arena: Gekritzel
### @hideReplaceMyCode true

## Einführung in die Käfer-Arena @showdialog

Willkommen in der 👾 **Käfer-Arena** 👾, wo die klügsten Käfer um den Ruhm kämpfen!

Schau dir dieses Einführungsvideo an und klicke dann auf OK.

![Einführung Käfer-Arena](youtube:U_bcAht2o0A "Video-Einführung in die Käfer-Arena")

## Zufalls-Algorithmus @showdialog

![Käfer-Arena Zufall](/static/skillmap/bug-arena/random.gif "Animation eines zufälligen Musters")

Gute Wahl beim Algorithmus – lass das Chaos regieren! 🤪

In diesem Tutorial programmieren wir den KI-Algorithmus ✨ unseres Käfers so, dass er sich in zufälligen Mustern 𖡎 über den Bildschirm bewegt.

## Wann abbiegen? 

Unser Käfer soll alle 5 Sekunden in eine andere Richtung abbiegen. Dafür nehmen wir einen Zeitintervall-Block. 🕓

Ziehe aus der Kategorie ``||hourOfAi:Bug AI||`` im Werkzeugkasten einen ``||hourOfAi:every 5000 ms||``-Block in den Arbeitsbereich – du kannst ihn irgendwo ablegen.

![Blöcke ziehen und ablegen](/static/skillmap/bug-arena/dragdrop.gif "Animation: Blöcke ziehen und ablegen")

~hint Was macht das?

---

Der Block ``||hourOfAi:every 5000 ms||`` führt den Code darin immer wieder nach einem bestimmten Zeitintervall in Millisekunden (ms) 🕓 aus, hier also alle 5000 ms oder 5 Sekunden.

hint~

Klicke auf die Glühbirne 💡, wenn du Hilfe brauchst, oder klicke auf **Weiter**, um fortzufahren.

```blockconfig.local
hourOfAi.every(5000, function () {

})
randint(-180, 180)
```

```blocks
hourOfAi.every(5000, function () {

})
```

## Lass deinen Käfer abbiegen!

Ziehe aus der Kategorie ``||hourOfAi:Bug AI||`` einen ``||hourOfAi:turn 90||``-Block heraus und lege ihn in den Block ``||hourOfAi:every 5000 ms||``.
<br/>
<br/>

~hint Was macht turn 90?

---

Der Dreh-Block ↩️ dreht unseren Käfer um eine bestimmte Gradzahl, ausgehend von seiner aktuellen Richtung. Eine positive Zahl ➕ dreht im Uhrzeigersinn, eine negative Zahl ➖ gegen den Uhrzeigersinn.

![Drehwinkel](/static/skillmap/bug-arena/turn-angle.png "Drehwinkel")

hint~

```blockconfig.local
hourOfAi.every(5000, function () {

})
randint(-180, 180)
```

```blocks
hourOfAi.every(5000, function () {
    //@highlight
    hourOfAi.turnBy(90)
})
```

## 🎲 Zufallszahl wählen

Alle 5 Sekunden soll unser Käfer in eine andere, zufällige Richtung abbiegen.

Ziehe aus der Schublade ``||Math:Mathematik||`` im Werkzeugkasten einen ``||Math:wähle eine zufällige Zahl||``-Block und lege ihn in den ``||hourOfAi:turn||``-Block, anstelle der **90**.
<br/>
<br/>

~hint Was macht die Zufallszahl?

---

Der Block ``||Math:wähle eine zufällige Zahl||`` liefert eine zufällige Zahl 🎲 zwischen einem kleinsten ⏬ und einem größten ⏫ Wert. Hier ist das eine Zufallszahl zwischen **-180** Grad (gegen den Uhrzeigersinn) und **+180** Grad (im Uhrzeigersinn).

hint~

```blockconfig.local
hourOfAi.every(5000, function () {

})
randint(-180, 180)
```

```blocks
hourOfAi.every(5000, function () {
    //@highlight
    hourOfAi.turnBy(randint(-180, 180))
})
```

## 🔎 Finde ein paar Fehler!

Lass uns unseren Algorithmus testen, um sicherzugehen, dass unser Käfer macht, was wir erwarten – nämlich in zufälligen Mustern herumlaufen!

Klicke im Spielfenster 🖼️ auf den Knopf **Practice**.

Wähle dann **No Opponent** und **Infinite**.

Ändert dein Käfer alle 5 Sekunden die Richtung? Sehr cool! 😎

```blockconfig.local
hourOfAi.every(5000, function () {

})
randint(-180, 180)
```

## 🧱 An die Wand stoßen

Jetzt fügen wir Code hinzu, damit sich unser Käfer dreht ↩️, wenn er gegen eine Wand stößt.

Ziehe aus der Kategorie ``||hourOfAi:Bug AI||`` einen ``||hourOfAi:on bump wall||``-Block in den Arbeitsbereich – du kannst ihn irgendwo ablegen.

Ziehe jetzt einen weiteren ``||hourOfAi:turn 90||``-Block heraus und lege ihn in den Block ``||hourOfAi:on bump wall||``.

```blockconfig.local
hourOfAi.every(5000, function () {

})
randint(-180, 180)
```

```blocks
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(90)
})
```

## Zufällig drehen

Auch hier soll sich unser Käfer in eine zufällige Richtung drehen, also nehmen wir wieder die 🎲 Zufallszahl.

Ziehe aus der Schublade ``||Math:Mathematik||`` im Werkzeugkasten noch einen ``||Math:wähle eine zufällige Zahl||``-Block und lege ihn in den ``||hourOfAi:turn||``-Block, anstelle der **90**.

```blockconfig.local
hourOfAi.every(5000, function () {

})
randint(-180, 180)
```

```blocks
hourOfAi.onBumpWall(function () {
    //@highlight
    hourOfAi.turnBy(randint(-180, 180))
})
```

## 🎉 Super gemacht! 🎉

Teste dein Spiel noch einmal im 🕹️ Spielfenster.

Schiebe den Regler **SPEED** nach rechts ➡️ und sieh zu, wie dein Käfer wunderschöne 🌈 verrückte Farbmuster malt!

Gute Arbeit! 👍 Du hast einen schlauen KI-Algorithmus ✨ programmiert, der deine Gegner in der Käfer-Arena verwirren wird!

Weiter geht's zum 🏰 Turmkampf, wo du deine Käfer-Rivalen herausforderst!

```blockconfig.local
hourOfAi.every(5000, function () {

})
randint(-180, 180)
```

```blocks
hourOfAi.every(5000, function () {
    hourOfAi.turnBy(randint(-180, 180))
})
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(randint(-180, 180))
})
```

```template
hourOfAi.onStart(function () {
	
})
```

```package
bug-arena=github:riknoll/bug-arena
```
