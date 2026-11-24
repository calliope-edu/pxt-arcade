# Programmiere ein Abenteuer

**Eine Seite für Lehrkräfte & Eltern**

Die Skillmap **Programmiere ein Abenteuer** führt anhand eines unterhaltsamen, textbasierten Abenteuerspiels im Retro-Stil in einfache Konzepte des Spieldesigns und der Informatik ein.

In diesen Aktivitäten erstellen die Schülerinnen und Schüler mit MakeCode Arcade ein textbasiertes Abenteuer. Diese Skillmap richtet sich an Lernende, die neu bei MakeCode sind und wenig oder keine Programmiererfahrung haben.

Das Angebot ist für Schülerinnen und Schüler im Alter von 12 bis 16 Jahren konzipiert und umfasst insgesamt 3 Tutorials (ca. 75 Minuten Unterricht). Am Ende des Lernpfads erhalten die Lernenden ein Abschlusszertifikat und ein Abzeichen.

|                 | Minuten* |  Schlüsselkonzepte |
| --------------- | -------- |  ------------ |
| Beginne deine Reise    |20  |  Bedingungen, Ereignisse |
| Mach es spektakulär   |25 |  Musik, Bilder, Funktionen |
| Leben und Gold   |30  |  Funktionen, Geschichten erzählen |

\* Die Minutenangaben sind Schätzwerte und beziehen sich auf die Zeit, die zum Befolgen der Anleitungen benötigt wird. Wir empfehlen, zusätzliche Zeit für Kreativität und Fehlersuche einzuplanen.


### Lernziele

Nach Abschluss von „Programmiere ein Abenteuer“ haben die Schülerinnen und Schüler alle Elemente kennengelernt, die sie benötigen, um mit MakeCode Arcade erfolgreich ihr eigenes textbasiertes Abenteuerspiel zu erstellen, darunter:

#### Informatische Konzepte

- Abläufe und Algorithmen
- Ereignisse
- Benutzereingaben
- Bedingungen
- Funktionen


#### Konzepte des Spieldesigns

- Gewinn-/Verlustkriterien
- Musik & Soundeffekte
- Bildgestaltung
- Gestaltung von Geschichten



#### 1. Beginne deine Reise

| Aktivität | Beginne deine Reise (20 Min.) |
|---|---|
| ![Vorschaubild Beginne deine Reise](/static/skillmap/adventure/adventure1.gif) | Erstelle mit Bedingungen eine Abenteuergeschichte! |
| Verwendete Blöcke |  ``[adventure.addToTextlog(" ")]`` <br/> ``[pauseUntil(() => controller.anyButton.isPressed())]``  <br/> ``[if (controller.A.isPressed()) {}else{}]`` <br/> ``[game.gameOver(true)]``|
| Beispiellösung | [Projekt Beginne deine Reise](https://makecode.com/_iEp94zKPD4VX) |

#### 2. Mach es spektakulär

| Aktivität | Mach es spektakulär (25 Min.) |
|---|---|
| ![Vorschaubild Mach es spektakulär](/static/skillmap/adventure/adventure2.gif) | Erstelle eigene Musik und Bilder, um dein Abenteuer aufzuwerten!|
| Verwendete Blöcke | ``[function quest1() {} quest1()]`` <br/> ``[music.play( (music.createSong(hex`00780004080200`)), music.PlaybackMode.InBackground)]`` <br/> ``[ adventure.addImageToTextLog()]`` |
| Beispiellösung | [Projekt Mach es spektakulär](https://makecode.com/_LW6JyKFvJMuA) |

#### 3. Leben und Gold

| Aktivität | Leben und Gold (30 Min.) |
|---|---|
| ![Vorschaubild Leben und Gold](/static/skillmap/adventure/adventure3.gif) | Vervollständige dein Spiel mit Funktionen, indem du weitere Aufgaben hinzufügst – mit Gefahren und Belohnungen! |
| Verwendete Blöcke | ``[info.setLife(5)]`` <br/> ``[info.changeLifeBy(-1)]`` <br/>``[adventure.changeScoreOverride(adventure.Currency.Coins, 5)]`` |
| Beispiellösung | [Projekt Leben und Gold](https://arcade.makecode.com/S86685-42080-20608-87423) |



##### Ideen zum Erweitern des Spiels

Nachdem die Lernenden „Programmiere ein Abenteuer“ abgeschlossen haben, können sie zur Skillmap zurückkehren und auf „IN MEINEN PROJEKTEN SPEICHERN“ klicken. Dadurch wird das Spiel in einem Fenster mit dem vollständigen Werkzeugkasten geöffnet. Hier einige Erweiterungen, die sie ausprobieren können:

- Soundeffekte hinzufügen, die abgespielt werden, wenn die Spielenden eine gute oder schlechte Wahl treffen
- Der Geschichte mehr Auswahlmöglichkeiten geben, indem statt A & B die Tasten oben, unten, links und rechts verwendet werden


### Wie geht es weiter?

Nach Abschluss von „Programmiere ein Abenteuer“ können die Schülerinnen und Schüler mit den folgenden Aktivitäten weitermachen:

* [Platzende Ballons](https://arcade.makecode.com/--skillmap#docs:/skillmap/balloon)
* [Truthahn-Tag!](https://arcade.makecode.com/--skillmap#docs:/skillmap/turkey)


```package
adventure=github:microsoft/arcade-tutorial-extensions/adventure#v0.0.10
```
