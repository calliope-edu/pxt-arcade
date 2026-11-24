# Funkenflug

**Eine Seite für Lehrkräfte & Eltern**

Die Skillmap **Funkenflug** führt anhand eines einfachen und unterhaltsamen „Klick“-Spiels in grundlegende Konzepte des Spieldesigns und der Informatik ein.

In diesen Aktivitäten erstellen die Schülerinnen und Schüler mit MakeCode Arcade ein Klick-Spiel mit 5 Levels. Diese Skillmap richtet sich an Lernende, die neu bei MakeCode sind und wenig oder keine Programmiererfahrung haben.

* [Unterrichtsplan für Lehrkräfte ansehen](https://1drv.ms/w/s!AqsgsTyHBmRBoCHZ8rm2BKsISKS1?e=5xrAQl)
* [Folien ansehen](https://1drv.ms/p/s!AqsgsTyHBmRBn2pQnnku4yb7iYfa?e=tsFXRo)
* [Materialien auf OneDrive ansehen](https://1drv.ms/f/s!AqsgsTyHBmRBn2mMdQSkzSMTSCJg?e=pnPxYg)





Das Angebot ist für Schülerinnen und Schüler im Alter von 10 bis 16 Jahren konzipiert und umfasst insgesamt 3 Tutorials (ca. 45 Minuten Unterricht). Am Ende des Lernpfads erhalten die Lernenden ein Abschlusszertifikat und ein Abzeichen.

|                 | Minuten* |  Schlüsselkonzepte |
| --------------- | -------- |  ------------ |
| Ein Haufen Stöcke    |18  |  Sprites, Ereignisse, Effekte |
| Gewinnen und Verlieren   |22 |  Sprites, Gewinnen, Verlieren |
<!--| Bring Bewegung rein   |15  |  Klänge, Text, Animationen | -->


\* Die Minutenangaben sind Schätzwerte und beziehen sich auf die Zeit, die zum Befolgen der Anleitungen benötigt wird. Wir empfehlen, zusätzliche Zeit für Kreativität und Fehlersuche einzuplanen.

### Lernziele

Nach Abschluss der Skillmap **Funkenflug** haben die Schülerinnen und Schüler alle Elemente kennengelernt, die sie benötigen, um mit MakeCode Arcade erfolgreich ein eigenes Klick-Spiel zu erstellen, darunter:

#### Informatische Konzepte

- Abfolgen und Algorithmen
- Ereignisse
- Benutzereingaben

<!--
- Funktionen
- Bedingungen
- Variablen
-->


#### Konzepte des Spieldesigns

- Sprites
- Design, Klänge und Effekte
- Timer
- Punktestand
- Gewinn- und Verlustbedingungen



#### 1. Ein Haufen Stöcke

| Aktivität | Ein Haufen Stöcke (18 Min.) |
|---|---|
| ![Vorschaubild Ein Haufen Stöcke](/static/skillmap/sparks/sparks1.gif) | Lerne MakeCode Arcade kennen und füge deinem Projekt ein Feuerstellen-Sprite hinzu. |
| Verwendete Blöcke |  ``[scene.setBackgroundImage(img`.`)]`` <br/> ``[let kindling = sprites.create(img`.`, SpriteKind.Player)]`` <br/> ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]`` <br/> ``[info.changeScoreBy(1)]`` <br/> ``[let kindling: Sprite = null; kindling.startEffect(effects.fire, 500)]``|
| Beispiellösung | [Projekt Ein Haufen Stöcke](https://makecode.com/_PXrdTU93ig45) |

#### 2. Gewinnen und Verlieren

| Aktivität | Gewinnen und Verlieren (12 Min.) |
|---|---|
| ![Vorschaubild Gewinnen und Verlieren](/static/skillmap/sparks/sparks2.gif) | Füge deinem Spiel mithilfe von Ereignissen Gewinn- und Verlustbedingungen hinzu. |
| Verwendete Blöcke | <br/> ``[game.onUpdateInterval(1000, function () {}]`` <br/>``[info.changeScoreBy(1)]`` <br/> ``[info.onScore(30, function () {})]`` <br/> ``[game.setGameOverScoringType(game.ScoringType.LowScore) ]`` <br/> ``[info.setScore(0)]`` <br/> ``[game.gameOver(true)]``|
| Beispiellösung | [Projekt Gewinnen und Verlieren](https://makecode.com/_KkM6gg0fEevk) |


<!--
#### 3. Bring Bewegung rein

| Aktivität | Bring Bewegung rein (15 Min.) |
|---|---|
| ![Vorschaubild Bring Bewegung rein](/static/skillmap/sparks/sparks3.gif) | Verfeinere dein Spiel mit Klängen und Animationen! |
| Verwendete Blöcke | ``[music.knock.play()]`` <br/> ``[animation.runImageAnimation(myHammer,assets.animation`hammerAnimation`,50,false)})]`` <br/>``[carnival.addLabelTo("Sparks Flying", carnival.Areas.Bottom))]`` |
| Beispiellösung | [Projekt Bring Bewegung rein](https://makecode.com/_PCKW94TVLMpA) |


#### 4. Spiel mit Freunden

| Aktivität | Bring Bewegung rein (15 Min.) |
|---|---|
| ![Vorschaubild Spiel mit Freunden](/static/skillmap/sparks/sparks4.gif) | Mit ein paar einfachen Änderungen spielst du im Handumdrehen Fangen! |
| Verwendete Blöcke | ``[game.showLongText(" ", DialogLayout.Center)]`` <br/> ``[carnival.startCountdownGame(15, carnival.WinTypes.Multi)]`` <br/>``[simplified.checkMoleEscape(mp.playerSelector(mp.PlayerNumber.Two), 1)]`` |
| Beispiellösung | [Projekt Spiel mit Freunden](https://makecode.com/_Hvte8pVtoDft) |

-->




##### Ideen zum Erweitern des Spiels

Nachdem die Lernenden **Funkenflug** abgeschlossen haben, können sie zur Skillmap zurückkehren und auf „IN MEINEN PROJEKTEN SPEICHERN“ klicken. Dadurch wird das Spiel in einem Fenster mit dem vollständigen Werkzeugkasten geöffnet. Hier einige Erweiterungen, die sie ausprobieren können:

- Die Szene durch etwas Neues ersetzen, zum Beispiel einen Springbrunnen in Griechenland oder eine Regenwolke
- Ein Spiel für zwei Personen daraus machen, bei dem eine Person das Feuer und die andere den Rasensprenger spielt
- Soundeffekte und/oder Hintergrundmusik hinzufügen


### Wie geht es weiter?

Nach Abschluss der Skillmap **Funkenflug** können die Schülerinnen und Schüler mit den folgenden Aktivitäten weitermachen:

* [Rette die Galaxie](https://arcade.makecode.com/--skillmap#docs:/skillmap/galaxy)
* [Truthahn-Tag!](https://arcade.makecode.com/--skillmap#docs:/skillmap/turkey)




```package
arcade-carnival=github:microsoft/arcade-carnival
arcade-storytelling=github:microsoft/arcade-storytelling
arcade-text=github:microsoft/arcade-text
sparks=github:kiki-lee/sparks#v0.0.4
```
