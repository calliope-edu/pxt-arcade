# arcade-character-animations

Eine MakeCode-Arcade-Erweiterung zum Erstellen von Regeln, die steuern, wann Animationen auf einem Sprite laufen.

## Grundlegende Regeln

Um Animationen an einen Sprite anzuhängen, musst du zuerst eine „Regel“ erstellen, die festlegt, wann die Animation läuft. Regeln bestehen aus mehreren Teilen, die jeweils ein Verhalten des Sprites beschreiben. Wenn wir zum Beispiel ein Jump-'n'-Run-Spiel bauen, könnten wir diese Regeln für die Laufanimationen verwenden:

* Nach rechts rennen: „Moving“ + „Facing Right“ + „Is Hitting Wall Down“
* Nach links rennen: „Moving“ + „Facing Left“ + „Is Hitting Wall Down“

In diesem Beispiel prüft „Is Hitting Wall Down“, ob der Sprite auf dem Boden steht oder nicht.

Wenn unser Sprite auch springen soll, könnten wir zwei weitere Regeln wie diese erstellen:

* Nach rechts springen: „Moving“ + „Facing Right“
* Nach links springen: „Moving“ + „Facing Left“

Dir fällt vielleicht auf, dass eine der Sprungregeln immer dann zutrifft, wenn auch die Laufregeln zutreffen. In dieser Erweiterung hat immer die spezifischste Regel Vorrang vor allen anderen. Wenn sich ein Sprite also bewegt, nach rechts schaut und unten eine Wand berührt, wird die Laufregel ausgeführt, weil sie spezifischer ist (sie hat drei Teile statt zwei).

### Beispiel: in vier Richtungen laufen

Dieses Beispiel zeigt, wie du ein einfaches Spiel mit Draufsicht erstellst, in dem du in alle vier Richtungen laufen kannst.

https://makecode.com/_XV2EmJas4i8o

![Ein Bild der Blöcke im Draufsicht-Beispiel](/static/libs/arcade-character-animations/image1.png)

Du könntest dieses Beispiel erweitern, indem du Animationen hinzufügst, wenn die Figur gegen eine Wand drückt!

### Beispiel: seitlich scrollendes Jump 'n' Run

Dieses Beispiel erstellt typische Animationen, die du in einem Jump 'n' Run verwenden könntest: Rennen, Springen und Stillstehen.

https://makecode.com/_AD7hpC9pzW47

![Ein Bild der Blöcke im Jump-'n'-Run-Beispiel](/static/libs/arcade-character-animations/image2.png)

Du könntest dieses Beispiel erweitern, indem du unterschiedliche Animationen für Springen und Fallen hinzufügst!

Quelle: [microsoft/arcade-character-animations](https://github.com/microsoft/arcade-character-animations/tree/v0.1.0) (v0.1.0)

```package
arcade-character-animations
```
