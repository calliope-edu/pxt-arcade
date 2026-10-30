# Über den Einsteigerkurs für Arcade-Spiele

**Eine Seite für Lehrkräfte & Eltern**

Der **Einsteigerkurs für Arcade-Spiele** stellt die am häufigsten verwendeten Arten von Codeblöcken in MakeCode Arcade vor.

In dieser Reihe von Aktivitäten erstellen die Schülerinnen und Schüler ihre allerersten digitalen Spiele mit MakeCode Arcade. Dieser Kurs richtet sich an Lernende, die neu bei MakeCode sind und wenig oder keine Programmiererfahrung haben. Mit Schritt-für-Schritt-Anleitungen konzentrieren sie sich auf Projekte aus 3 verschiedenen Kategorien: [Geschichten erzählen](#lernpfad-geschichten-erzahlen), [Klickspiele](#lernpfad-klickspiel) und [Sammelspiele](#lernpfad-sammelspiel).

Dieses Angebot ist für Lernende zwischen 11 und 15 Jahren konzipiert und umfasst insgesamt 11 Tutorials (ca. 145 Minuten Unterrichtszeit), verteilt auf 5 Einheiten. Am Ende jedes Lernpfads erhalten die Lernenden eine Teilnahmeurkunde.

|                 | Minuten* | Spieltyp | Kernkonzepte |
| --------------- | -------- | --------- | ------------ |
| **Tag 1**           |          |           |              |
| Lerne MakeCode Arcade kennen (optional) | 12 | Einführung | Einführung in die Oberfläche, grundlegende Blöcke, Ereignisse |
| Grußkarte | 10 | Geschichte | Grafikgestaltung, Musik |
| Größere Grüße | 10 | Geschichte | Grafikgestaltung, Musik, Ereignisse |
| **Tag 2**           |          |           |              |
| Witze machen   |30 | Geschichte | Geschichten erzählen, Ereignisse |
| **Tag 3**           |          |           |              |
| Klickspiel    |10  | Klickspiel | Ereignisse, Punktestand, Timer |
| Knopf-Klicker   |10 | Klickspiel | Animation, Argumente, Ereignisse |
| Klick-Superstar   |7  | Klickspiel | Projektile, Zufallszahlen, Ereignisse |
| **Tag 4**           |          |           |              |
| Dino-Schwarm      | 10       | Sammelspiel | Schleifen, Projektile, Zufallszahlen |
| Rette die Dino-Babys! | 12   | Sammelspiel | Kollisionen, Variablen, Timer |
| **Tag 5**  |          |           |              |
| Verkehrs-Ausweicher | 14 | Sammelspiel | Projektile, Zufallszahlen, Variablen |
| Erwecke sie zum Leben! | 20 | Sammelspiel | Grafikgestaltung, Schleifen |

\* Die Minutenangaben sind Schätzwerte und beziehen sich auf die Zeit, die Anleitungen wie beschrieben zu befolgen. Wir empfehlen, zusätzliche Zeit für Kreativität und Fehlersuche einzuplanen.

### Lernziele

Nach Abschluss des Einsteigerkurses für Arcade-Spiele haben die Lernenden alle Elemente kennengelernt, die sie brauchen, um mit MakeCode Arcade erfolgreich eigene Arcade-Spiele zu erstellen.

Im Einzelnen beschäftigen sie sich mit folgenden Themen:

#### Informatik-Konzepte

- Ereignisse und Programmablauf
- Benutzereingaben
- Schleifen
- Variablen
- Ereignisse

#### Spieldesign-Konzepte

- Geschichten erzählen
- Sprites und Projektile
- Gestaltung, Klänge und Effekte
- Koordinaten
- Geschwindigkeit
- Punktestand
- Sieg-/Niederlagebedingungen
- Zufall
- Animation

### Lernpfad Geschichten erzählen

In diesem Lernpfad lernen die Lernenden, wie sie Hintergrundbilder, Musik und Dialogfelder einsetzen, um kreative Projekte zu bauen, die eine Botschaft vermitteln, einen Witz erzählen oder ihre Gedanken veranschaulichen.

#### 1. Grußkarte

| Aktivität | Grußkarte (10 Min.) |
|---|---|
| ![Vorschaubild Grußkarte](/static/skillmap/map-info/greeting-card.png) | Gestalte eine einfache Grußkarte für Freunde und Familie. |
| Verwendete Blöcke | **[On Start](/blocks/on-start)** <br/><br/> ``[scene.setBackgroundImage(img`.`)]``<br/>``[effects.confetti.startScreenEffect()]``<br/> ``[music.playMelody("", 120)]``|
| Lösungsvorschlag | [Projekt Grußkarte](https://arcade.makecode.com/14885-64298-31361-79978) |

#### 2. Größere Grüße

| Aktivität | Größere Grüße (10 Min.) |
|---|---|
| ![Vorschaubild Größere Grüße](/static/skillmap/map-info/bigger-greeting.png) | Diese Aktivität baut auf der vorherigen Aktivität Grußkarte auf.<br/>Die Lernenden fügen Text hinzu, der per Knopfdruck &nbsp;<br/>angezeigt wird. |
| Verwendete Blöcke | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[game.setDialogFrame(img`.`)]``<br/>``[game.setDialogTextColor(0)]``<br/>``[game.showLongText("", DialogLayout.Bottom)]`` |
| Lösungsvorschlag | [Projekt Größere Grüße](https://arcade.makecode.com/42444-68014-69780-79234) |

#### 3. Witze machen

| Aktivität | Witze machen (30 Min.) |
|---|---|
| ![Vorschaubild Witze machen](/static/skillmap/map-info/joking-around.png) | Diese Aktivität führt in Figuren und Dialoge ein,<br/>während die Lernenden kurze Witze zum Leben erwecken. |
| Verwendete Blöcke | ``[music.baDing.play()]``<br/>``[music.setVolume(20)]``<br/>``[game.splash("")]``<br/>``[sprites.create(img`.`).setPosition(0, 0)]``<br/>``[sprites.create(img`.`).startEffect(effects.spray)]``<br/>``[sprites.create(img`.`).setImage(img`.`)]``<br/>``[scene.cameraShake(4, 500)]`` |
| Lösungsvorschlag | [Projekt Witze machen](https://arcade.makecode.com/87828-03702-46750-80177) |

##### Ideen zum Weiterentwickeln

Nach Witze machen können die Lernenden zur Skillmap zurückkehren und auf „IN MEINEN PROJEKTEN SPEICHERN“ klicken. Dadurch öffnet sich das Spiel in einem Fenster mit vollständiger Werkzeugleiste. Hier einige Änderungen, die sie ausprobieren können:

- Ein zweites Sprite für einen Witz mit mehr Interaktion hinzufügen
- Bei jedem Druck auf die (A)-Taste Sprites bewegen oder den Hintergrund wechseln
- Das Projekt so verändern, dass es ein Gedicht illustriert
- Das Gelernte nutzen, um einen längeren Witz oder eine Geschichte zu illustrieren

### Lernpfad Klickspiel

In diesem Lernpfad nutzen die Lernenden Ereignis-Container, Sprites und Projektile, um ein einfaches „Klickspiel“ zu erstellen, das Benutzereingaben entgegennimmt und eine Aktion ausführt. Die Herausforderung besteht darin, die (A)-Taste so schnell wie möglich zu drücken, bevor die Zeit abläuft.

#### 1. Klickspiel

| Aktivität | Klickspiel (10 Min.) |
|---|---|
| ![Vorschaubild Klickspiel](/static/skillmap/map-info/clicker-game.png) | Erstelle ein Spiel, das für jeden Klick Punkte vergibt. |
| Verwendete Blöcke | ``[info.startCountdown(10)]``<br/>``[info.changeScoreBy(1)]``<br/>``[info.onCountdownEnd(function () {})]``<br/>``[game.gameOver(true)]``|
| Lösungsvorschlag | [Projekt Klickspiel](https://arcade.makecode.com/12273-78408-58405-09625) |

#### 2. Knopf-Klicker

| Aktivität | Knopf-Klicker (10 Min.) |
|---|---|
| ![Vorschaubild Knopf-Klicker](/static/skillmap/map-info/button-clicker.png) | Dieses Spiel baut auf dem vorherigen Level auf und fügt ein animiertes Sprite hinzu,<br/>das beim Drücken und Loslassen der (A)-Taste wechselt. |
| Verwendete Blöcke | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[let power = 2]``|
| Lösungsvorschlag | [Projekt Knopf-Klicker](https://arcade.makecode.com/77414-66317-99137-92560) |

#### 3. Klick-Superstar

| Aktivität | Klick-Superstar (7 Min.) |
|---|---|
| ![Vorschaubild Klick-Superstar](/static/skillmap/map-info/clicking-superstar.png) | Aufbauend auf dem vorherigen Projekt fügt dieses Level Projektile hinzu,<br/>die bei jedem Druck als Sterne aus dem Knopf sprühen. |
| Verwendete Blöcke | ``[sprites.create(img`.`, SpriteKind.Player).startEffect(effects.spray, 100)]`` |
| Lösungsvorschlag | [Projekt Klick-Superstar](https://arcade.makecode.com/24852-02760-23597-83909) |

##### Ideen zum Weiterentwickeln

Nach Klick-Superstar können die Lernenden zur Skillmap zurückkehren und auf „IN MEINEN PROJEKTEN SPEICHERN“ klicken. Dadurch öffnet sich das Spiel in einem Fenster mit vollständiger Werkzeugleiste. Hier einige Änderungen, die sie ausprobieren können:

- Die A-Taste nach unten links verschieben und unten rechts eine B-Taste hinzufügen
- Ein neues Sprite auf das Podest stellen – etwas ganz Besonderes!
- Das Thema ändern: statt Sternen auf der Bühne Vögel in einem Baum

### Lernpfad Sammelspiel

Die Lernenden arbeiten mit Blöcken zur Sprite-Steuerung, Variablen und bedingten Anweisungen, um ein Spiel zu bauen, in dem Mama Dino so viele ihrer Babys wie möglich einsammelt und dabei dem Verkehr ausweicht.

#### 1. Dino-Schwarm

| Aktivität | Dino-Schwarm (10 Min.) |
|---|---|
| ![Vorschaubild Dino-Schwarm](/static/skillmap/map-info/dino-hoard.png) | Lege einen animierten Hintergrund an, durch den deine Heldenfigur auf der Suche nach Dino-Babys reist. |
| Verwendete Blöcke | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.moveSprite(sprites.create(img`.`), 0, 100)]``<br/>``[let random = randint(0, 10)]``<br/>``[let projectile = sprites.createProjectileFromSide(img`.`, 0, 100)]``<br/>``[sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {})]``<br/>``[forever(function () {})]``<br/>``[sprites.create(img`.`).destroy()]`` |
| Lösungsvorschlag | [Projekt Dino-Schwarm](https://arcade.makecode.com/00050-04644-99185-20758) |


#### 2. Rette die Dino-Babys!

| Aktivität | Rette die Dino-Babys! (12 Min.) |
|---|---|
| ![Vorschaubild Rette die Dino-Babys](/static/skillmap/map-info/save-baby-dinos.png) | Erweitere die vorherige Aktivität, sodass dein Spiel Punkte vergibt, wenn du Dinos einsammelst. |
| Verwendete Blöcke | ``[scene.setBackgroundColor(0)]``<br/>``[scene.setBackgroundImage(img`.`)]``<br/>``[effects.blizzard.startScreenEffect()]``<br/>``[sprites.create(img`.`).setStayInScreen(true)]``|
| Lösungsvorschlag | [Projekt Rette die Dino-Babys](https://arcade.makecode.com/21438-61170-25811-66074) |

#### 3. Verkehrs-Ausweicher

| Aktivität | Verkehrs-Ausweicher (14 Min.) |
|---|---|
| ![Vorschaubild Verkehrs-Ausweicher](/static/skillmap/map-info/traffic-dodger.png) | Entwickle dein Spiel weiter: Autos ziehen ein Leben ab, wenn du mit ihnen zusammenstößt. |
| Verwendete Blöcke | ``[sprites.create(img`.`).setKind(SpriteKind.Enemy)]``<br/>``[sprites.create(img`.`).y = 0]``|
| Lösungsvorschlag | [Projekt Verkehrs-Ausweicher](https://arcade.makecode.com/76596-99011-88241-42675) |
 
#### 4. Erwecke sie zum Leben!

| Aktivität | Erwecke sie zum Leben! (20 Min.) |
|---|---|
| ![Vorschaubild Erwecke sie zum Leben!](/static/skillmap/map-info/animate-it.png) | Verfeinere dein Spiel mit Animationen, die deine Figuren lebendig machen! |
| Verwendete Blöcke | ``[info.changeLifeBy(1)]``|
| Lösungsvorschlag | [Projekt Erwecke sie zum Leben](https://arcade.makecode.com/20377-15271-69070-26521) |

##### Ideen zum Weiterentwickeln

Nach Erwecke sie zum Leben! können die Lernenden zur Skillmap zurückkehren und auf „IN MEINEN PROJEKTEN SPEICHERN“ klicken. Dadurch öffnet sich das Spiel in einem Fenster mit vollständiger Werkzeugleiste. Hier einige Änderungen, die sie ausprobieren können:

- Die Kamera wackeln lassen, wenn der Dino mit einem Auto zusammenstößt
- Ein weiteres Sprite hinzufügen, das beim Einsammeln mehr Zeit gibt
- Ein Sprite hinzufügen, das beim Einsammeln zusätzliche Leben gibt
- Die Szene ändern: statt eines Dinos auf der Straße ein Hai im Ozean

### Wie geht es weiter?

Nach Abschluss des Einsteigerkurses für Arcade-Spiele können die Lernenden mit folgenden Aktivitäten weitermachen:

* Baue einen Weltraumforscher
* Scrollendes Plattformspiel
