# Hau den Maulwurf

**Eine Seite für Lehrkräfte & Eltern**

Die Skillmap **Hau den Maulwurf** führt über eine unterhaltsame, vertraute Jahrmarkt-Oberfläche in einfache Konzepte des Spieldesigns und der Informatik ein.

In diesen Aktivitäten erstellen die Schülerinnen und Schüler mit MakeCode Arcade ein einfaches Spiel, in dem ein Maulwurf gejagt wird. Diese Skillmap richtet sich an Lernende, die neu bei MakeCode sind und wenig oder keine Programmiererfahrung haben.

Das Angebot ist für Schülerinnen und Schüler im Alter von 8 bis 13 Jahren konzipiert und umfasst insgesamt 3 Tutorials (ca. 45 Minuten Unterricht). Am Ende des Lernpfads erhalten die Lernenden ein Abschlusszertifikat und ein Abzeichen.

|                 | Minuten* |  Schlüsselkonzepte |
| --------------- | -------- |  ------------ |
| Maulwurfjagd    |18  |  Sprites, Ereignisse, Timer |
| Hammerzeit   |12 |  Sprites, Überlappungen, Ereignisse |
| Bring Bewegung rein   |15  |  Klang, Text, Animationen |


\* Die Minutenangaben sind Schätzwerte und beziehen sich auf die Zeit, die zum Befolgen der Anleitungen benötigt wird. Wir empfehlen, zusätzliche Zeit für Kreativität und Fehlersuche einzuplanen.

### Lernziele

Nach Abschluss von „Hau den Maulwurf“ haben die Schülerinnen und Schüler alle Elemente kennengelernt, die sie benötigen, um mit MakeCode Arcade erfolgreich ihr eigenes Klick-Spiel zu erstellen, darunter:

#### Informatische Konzepte

- Abfolgen und Algorithmen
- Ereignisse
- Benutzereingaben


#### Konzepte des Spieldesigns

- Sprites
- Design, Klänge und Effekte
- Kollision / Überlappung
- Countdown-Timer
- Punktestand
- Gewinn- und Verlustbedingungen
- Animation



#### 1. Maulwurfjagd

| Aktivität | Maulwurfjagd (18 Min.) |
|---|---|
| ![Vorschaubild Maulwurfjagd](/static/skillmap/mole/mole1.gif) | Lerne MakeCode Arcade kennen und füge deinem Projekt ein sich bewegendes Figuren-Sprite hinzu. |
| Verwendete Blöcke |  ``[scene.setBackgroundImage(img`.`)]`` <br/> ``[let meinSprite = sprites.create(img`.`, SpriteKind.Enemy)]`` <br/> ``[game.onUpdateInterval(1000, function () {}]``|
| Beispiellösung | [Projekt Maulwurfjagd](https://makecode.com/_4WPAes5LMe9z) |

#### 2. Hammerzeit

| Aktivität | Hammerzeit (12 Min.) |
|---|---|
| ![Vorschaubild Hammerzeit](/static/skillmap/mole/mole2.gif) | Füge einen Gummihammer hinzu, um den Maulwurf zu treffen und Punkte zu sammeln! |
| Verwendete Blöcke | ``[let meinSprite = sprites.create(img`.`, SpriteKind.Player)]`` <br/> ``[simplified.moveToRandomHoleOnGrid(myMole)]`` <br/> ``[simplified.moveOnlyOnscreenWithArrows(myHammer, simplified.Speeds.Fast)]`` <br/> ``[sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, anderesSprite) {})]`` <br/> ``[carnival.startCountdownGame(15, carnival.WinTypes.Score)]`` <br/> ``[info.changeScoreBy(1)]`` |
| Beispiellösung | [Projekt Hammerzeit](https://makecode.com/_3kzWrvbA51PL) |

#### 3. Bring Bewegung rein

| Aktivität | Bring Bewegung rein (15 Min.) |
|---|---|
| ![Vorschaubild Bring Bewegung rein](/static/skillmap/mole/mole3.gif) | Füge Klang und Animation hinzu, um dein Spiel aufzupolieren! |
| Verwendete Blöcke | ``[music.knock.play()]`` <br/> ``[animation.runImageAnimation(myHammer,assets.animation`hammerAnimation`,50,false)})]`` <br/>``[carnival.addLabelTo("Whack-the-Mole", carnival.Areas.Bottom))]`` |
| Beispiellösung | [Projekt Bring Bewegung rein](https://makecode.com/_PCKW94TVLMpA) |


#### 4. Spiel mit Freunden

| Aktivität | Spiel mit Freunden (15 Min.) |
|---|---|
| ![Vorschaubild Spiel mit Freunden](/static/skillmap/mole/mole4.gif) | Mit ein paar einfachen Änderungen spielst du im Handumdrehen Fangen! |
| Verwendete Blöcke | ``[game.showLongText(" ", DialogLayout.Center)]`` <br/> ``[carnival.startCountdownGame(15, carnival.WinTypes.Multi)]`` <br/>``[simplified.checkMoleEscape(mp.playerSelector(mp.PlayerNumber.Two), 1)]`` |
| Beispiellösung | [Projekt Spiel mit Freunden](https://makecode.com/_Hvte8pVtoDft) |






##### Ideen zum Erweitern des Spiels

Nachdem die Lernenden „Hau den Maulwurf“ abgeschlossen haben, können sie zur Skillmap zurückkehren und auf „IN MEINEN PROJEKTEN SPEICHERN“ klicken. Dadurch wird das Spiel in einem Fenster mit dem vollständigen Werkzeugkasten geöffnet. Hier einige Erweiterungen, die sie ausprobieren können:

- Den Maulwurf durch eine andere Figur ersetzen. Probiere ein Monster, einen Außerirdischen oder einen Stern!
- Die Figur jedes Mal animieren, wenn sie vom Gummihammer getroffen wird.
- Hintergrundmusik hinzufügen.


### Wie geht es weiter?

Nach Abschluss von „Hau den Maulwurf“ können die Schülerinnen und Schüler mit den folgenden Aktivitäten weitermachen:

* [Platzende Ballons](https://arcade.calliope.cc/skillmap#docs:/skillmap/balloon)
* [Space Explorer](https://arcade.calliope.cc/skillmap#docs:/skillmap/space)



```package
mole-images=github:microsoft/arcade-tutorial-extensions/mole-images#v0.0.11
carnival=github:microsoft/arcade-carnival
```
