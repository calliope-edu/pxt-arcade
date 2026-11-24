# arcade-character-animations

Eine MakeCode-Arcade-Erweiterung, mit der du Regeln erstellst, die steuern, wann Animationen auf einem Sprite laufen.

## Einfache Regeln

Um Animationen an ein Sprite zu hängen, erstellst du zuerst eine „Regel“, die festlegt, wann die Animation läuft. Regeln bestehen aus mehreren Teilen, die jeweils ein Verhalten des Sprites beschreiben. Wenn wir zum Beispiel ein Jump-'n'-Run-Spiel bauen, könnten wir diese Regeln für die Laufanimationen verwenden:

* Nach rechts rennen: „bewegt sich“ + „schaut nach rechts“ + „stößt unten an Wand“
* Nach links rennen: „bewegt sich“ + „schaut nach links“ + „stößt unten an Wand“

In diesem Beispiel prüft „stößt unten an Wand“, ob das Sprite auf dem Boden steht.

Wenn unser Sprite auch springen soll, können wir zwei weitere Regeln erstellen:

* Nach rechts springen: „bewegt sich“ + „schaut nach rechts“
* Nach links springen: „bewegt sich“ + „schaut nach links“

Dir fällt vielleicht auf, dass eine der Sprungregeln immer dann wahr ist, wenn auch eine Rennregel wahr ist. In dieser Erweiterung hat immer die genaueste Regel Vorrang vor allen anderen. Wenn sich ein Sprite also bewegt, nach rechts schaut und unten an eine Wand stößt, läuft die Rennregel, weil sie genauer ist (sie hat drei Teile statt zwei).

### Beispiel: in vier Richtungen laufen

Dieses Beispiel zeigt ein einfaches Spiel mit Draufsicht, in dem du in alle vier Richtungen laufen kannst.

https://makecode.com/_XV2EmJas4i8o

![Bild der Blöcke im Draufsicht-Beispiel](/static/libs/arcade-character-animations/image1.png)

Du könntest dieses Beispiel erweitern, indem du Animationen hinzufügst, wenn die Figur gegen eine Wand drückt!

### Beispiel: seitlich scrollendes Jump 'n' Run

Dieses Beispiel erstellt typische Animationen für ein Jump 'n' Run: rennen, springen und stehen.

https://makecode.com/_AD7hpC9pzW47

![Bild der Blöcke im Jump-'n'-Run-Beispiel](/static/libs/arcade-character-animations/image2.png)

Du könntest dieses Beispiel erweitern, indem du unterschiedliche Animationen für Springen und Fallen hinzufügst!

Quelle: [microsoft/arcade-character-animations](https://github.com/microsoft/arcade-character-animations/tree/v0.1.0) (v0.1.0)

```package
arcade-character-animations
```
