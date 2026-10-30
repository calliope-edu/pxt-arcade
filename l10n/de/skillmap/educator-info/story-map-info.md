# Über die Skillmap „Voller Geschichten“

**Eine Seite für Lehrkräfte & Eltern**

Die Skillmap **Voller Geschichten** führt in die gängigsten Arten von Codeblöcken ein, die in MakeCode Arcade verwendet werden.

In diesen Aktivitäten erstellen die Schülerinnen und Schüler kreative Erzählprojekte mit MakeCode Arcade. Diese Skillmap richtet sich an Lernende, die neu bei MakeCode sind und wenig oder keine Programmiererfahrung haben. Mithilfe von Schritt-für-Schritt-Anleitungen arbeiten sie an Projekten, die von Grußkarten über Witze bis hin zu vollständigen Kurzgeschichten reichen.

Das Angebot ist für Schülerinnen und Schüler im Alter von 10 bis 15 Jahren konzipiert und umfasst insgesamt 4 Tutorials (ca. 120 Minuten Unterricht), verteilt auf 3 Einheiten. Am Ende des Lernpfads erhalten die Lernenden ein Abschlusszertifikat.

|                 | Minuten* | Spieltyp | Schlüsselkonzepte |
| --------------- | -------- | --------- | ------------ |
| **Tag 1**           |          |           |              |
| Grußkarte | 15 | Geschichte | Grafikdesign, Effekte |
| Größerer Gruß | 15 | Geschichte | Grafikdesign, Musik, Ereignisse |
| **Tag 2**           |          |           |              |
| Witze erzählen   | 45 | Geschichte | Erzählen, Klänge, Ereignisse |
| **Tag 3**           |          |           |              |
| Die kürzeste Geschichte    | 45  | Geschichte | Erzählen, Musik, Ereignisse |

\* Die Minutenangaben sind Schätzwerte und beziehen sich auf die Zeit, die zum Befolgen der Anleitungen benötigt wird. Wir empfehlen, zusätzliche Zeit für Planung, Kreativität und Fehlersuche einzuplanen.

### Lernziele

Nach Abschluss der Skillmap **Voller Geschichten** haben die Schülerinnen und Schüler alle Elemente kennengelernt, die sie benötigen, um erfolgreich ihre ersten Projekte mit MakeCode Arcade zu erstellen.

Im Einzelnen beschäftigen sie sich mit folgenden Themen:

#### Informatische Konzepte

- Ereignisse und Programmablauf
- Benutzereingaben
- Werte

#### Konzepte des Spieldesigns

- Erzählen von Geschichten
- Sprites
- Grafikdesign
- Klänge & Musik
- Effekte


### Lernpfad „Geschichten erzählen“

In diesem Lernpfad lernen die Schülerinnen und Schüler, wie sie Hintergrundbilder, Musik und Dialogfelder einsetzen, um kreative Projekte zu gestalten, die eine Botschaft übermitteln, einen Witz erzählen oder ihre Gedanken veranschaulichen.

#### 1. Grußkarte

| Aktivität | Grußkarte (15 Min.) |
|---|---|
| ![Vorschaubild Grußkarte](/static/skillmap/map-info/greeting-card.png) | Gestalte eine einfache Grußkarte für Freunde und Familie. |
| Verwendete Blöcke | ``[scene.setBackgroundImage(img`.`)]`` <br/> ``[effects.confetti.startScreenEffect()]``|
| Beispiellösung | [Projekt Grußkarte](https://arcade.makecode.com/S21073-89960-25393-61916) |

#### 2. Größerer Gruß

| Aktivität | Größerer Gruß (15 Min.) |
|---|---|
| ![Vorschaubild Größerer Gruß](/static/skillmap/map-info/bigger-greeting.png) | Diese Aktivität baut auf der vorherigen Aktivität „Grußkarte“ auf.<br/>Die Lernenden fügen Text hinzu, der auf Knopfdruck &nbsp;<br/>angezeigt wird. |
| Verwendete Blöcke | ``[carnival.addLabelTo("", carnival.Areas.Top, 2)]`` <br/> ``[music.play(music.createSong()music.PlaybackMode.LoopingInBackground)]`` <br/> ``[music.setVolume(20)]``<br/> ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]`` <br/> ``[game.setDialogFrame(img`.`)]`` <br/> ``[game.setDialogTextColor(0)]`` <br/> ``[game.showLongText("", DialogLayout.Bottom)]`` |
| Beispiellösung | [Projekt Größerer Gruß](https://arcade.makecode.com/S38456-47249-27054-15853) |

#### 3. Witze erzählen

| Aktivität | Witze erzählen (45 Min.) |
|---|---|
| ![Vorschaubild Witze erzählen](/static/skillmap/map-info/joking-around.png) | Diese Aktivität führt die Lernenden in Figuren und Dialoge ein,<br/>während sie ihre Lieblingswitze zum Leben erwecken. |
| Verwendete Blöcke | ``[game.showLongText("", DialogLayout.Top)]`` <br/> ``[game.splash("")]`` <br/> ``[sprites.create(img`.`).setPosition(0, 0)]`` <br/> ``[effects.bubbles.startScreenEffect()]`` <br/> ``[sprites.create(img`.`).setImage(img`.`)]`` <br/> ``[scene.cameraShake(4, 500)]`` <br/> ``[animation.runImageAnimation()]``|
| Beispiellösung | [Projekt Witze erzählen](https://arcade.makecode.com/S05893-52939-88219-32873) |


#### 4. Die kürzeste Geschichte

| Aktivität | Die kürzeste Geschichte (45 Min.) |
|---|---|
| ![Vorschaubild Die kürzeste Geschichte](/static/skillmap/map-info/short-story.png) | In dieser Aktivität können die Lernenden ihrer eigenen Kreativität folgen, <br/> indem sie Kurzgeschichten entwickeln, die sie mit Freunden teilen können. |
| Verwendete Blöcke | ``[music.play(music.createSong()music.PlaybackMode.LoopingInBackground)]`` <br/> ``[music.setVolume(20)]`` <br/> ``[scene.setBackgroundImage()]`` <br/> ``[effects.bubbles.startScreenEffect()]`` |
| Beispiellösung | [Projekt Die kürzeste Geschichte](https://arcade.makecode.com/S33219-62880-94664-42434) |


##### Ideen zum Erweitern des Spiels

Nachdem die Lernenden **Die kürzeste Geschichte** abgeschlossen haben, können sie zur Skillmap zurückkehren und auf „IN MEINEN PROJEKTEN SPEICHERN“ klicken. Dadurch wird das Spiel in einem Fenster mit dem vollständigen Werkzeugkasten geöffnet. Hier einige Erweiterungen, die sie ausprobieren können:

- Sprites hinzufügen, die sich bei jedem Druck auf die Taste (A) bewegen oder verändern
- Bei jedem Umblättern einen Soundeffekt abspielen
- Animierte Elemente zur Betonung hinzufügen


### Wie geht es weiter?

Nach Abschluss der Skillmap **Voller Geschichten** können die Schülerinnen und Schüler mit den folgenden Aktivitäten weitermachen:

* [Talentshow](https://arcade.makecode.com/--skillmap#docs:/skillmap/star)
* [Truthahn-Tag!](https://arcade.makecode.com/--skillmap#docs:/skillmap/turkey)



```package
carnival=github:microsoft/arcade-carnival#v0.0.7
```
