# Über Truthahn-Tag

**Eine Seite für Lehrkräfte & Eltern**

**Truthahn-Tag** führt in Elemente des Spieldesigns mit MakeCode Arcade ein.

In dieser Reihe von Aktivitäten erstellen die Schülerinnen und Schüler ihr eigenes Jump-and-Run-Plattformspiel mit
MakeCode Arcade. Diese Skillmap richtet sich an Lernende, die neu bei MakeCode sind und wenig oder keine Programmiererfahrung haben.
Mit Schritt-für-Schritt-Anleitungen bauen sie
ein Spiel, in dem sie ihren Truthahn in die Freiheit führen und unterwegs Freunde retten.

Dieses Angebot ist für Lernende zwischen 10 und 16 Jahren konzipiert und umfasst insgesamt 3 Tutorials (ca. 25 Minuten Unterrichtszeit).
Am Ende dieses Lernpfads erhalten die Lernenden eine Teilnahmeurkunde.

|                 | Minuten* | Kernkonzepte |
| --------------- | -------- | ------------ |
| Beweg den Truthahn | 10 | Bewegung, Beschleunigung, Ereignisse, Schwerkraft |
| Versammle eine Schar | 10 | Überlappung, Punktestand |
| Gewinnen oder verlieren | 5 | Timer, Siegbedingungen |

\* Die Minutenangaben sind Schätzwerte und beziehen sich auf die Zeit, die Anleitungen wie beschrieben zu befolgen. Sie enthalten keine Zeit für das Gestalten von Elementen oder das erneute Einarbeiten in zuvor geschriebenen Code. Wir empfehlen, zusätzliche Zeit für Kreativität und Fehlersuche einzuplanen.

### Lernziele

Nach Abschluss von Truthahn-Tag haben die Lernenden mehrere Konzepte von Plattformspielen mit MakeCode Arcade kennengelernt.

Im Einzelnen beschäftigen sie sich mit folgenden Themen:

#### Informatik-Konzepte

- Ereignisse
- Benutzereingaben

#### Spieldesign-Konzepte

- Bewegung
- Beschleunigung
- Schwerkraft
- Erstellen von Assets
- Projektile

### Projekte

Im Verlauf dieser Projekte bauen die Lernenden ihr Spiel Schritt für Schritt aus. Sie erleben, wie sich der Truthahn von einem einfachen Wesen, das sich nur bewegen kann,
zu einem _Meister_ im Springen entwickelt, der andere Vögel rettet und dafür Punkte erhält.

#### 1. Beweg den Truthahn

| Aktivität | Beweg den Truthahn (10 Min.) |
|---|---|
| ![Vorschaubild Beweg den Truthahn](/static/skillmap/turkey/turkey1.gif) | Richte die Seitwärts- und Sprungbewegungen deines Truthahns ein. |
| Verwendete Blöcke | ``[mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.moveSprite(mySprite, 0, 0)]``<br/>``[let mySprite: Sprite=null; mySprite.ay = 0]``<br/>``[scene.cameraFollowSprite(mySprite)]``<br/>``[controller.A.onEvent()]`` |
| Lösungsvorschlag | [Projekt Beweg den Truthahn](https://makecode.com/_awyEh4E58XEK) |

#### 2. Versammle eine Schar

| Aktivität | Versammle eine Schar (10 Min.) |
|---|---|
| ![Vorschaubild Versammle eine Schar](/static/skillmap/turkey/turkey2.gif) | Sammle Punkte und befreie Truthähne aus ihren Käfigen. |
| Verwendete Blöcke | ``[scene.onOverlapTile()]``<br/>``[info.changeScoreBy()]`` <br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]`` <br/>``[let turkey: Sprite=null;tiles.placeOnTile(turkey, location)]``  <br/>``[let turkey: Sprite=null;turkey.follow(mySprite)]``|
| Lösungsvorschlag | [Versammle eine Schar](https://makecode.com/_eH5FKDRqV9Dd) |

#### 3. Gewinnen oder verlieren

| Aktivität | Gewinnen oder verlieren (5 Min.) |
|---|---|
| ![Vorschaubild Gewinnen oder verlieren](/static/skillmap/turkey/turkey3.gif) | Füge Bedingungen für Sieg und Niederlage hinzu. |
| Verwendete Blöcke | ``[scene.onOverlapTile()]``<br/>``[game.gameOver(true)]``<br/>``[info.onCountdownEnd()]`` <br/>``[info.startCountdown(120)]`` |
| Lösungsvorschlag | [Projekt Gewinnen oder verlieren](https://makecode.com/_3a81pJ6t1dHX) |



##### Ideen zum Weiterentwickeln

Wenn die Lernenden die Skillmap abgeschlossen haben, ermutigen wir sie, zu planen, wie sie
dieses Spiel nach ihren eigenen Interessen verändern möchten. Folgende Fragen können dabei helfen:

- Welche Art von Welt würde ich gerne erkunden? Gestalte die Szene in deiner gewählten Umgebung neu!
- Welches Tier oder Wesen würde in diese Welt passen? Ersetze den Truthahn durch dein gewähltes Wesen!
- Welche Gegenstände könnte meine Figur sammeln? Wie kann ich sie kreativ einbauen?
