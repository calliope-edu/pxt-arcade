# Über „Monstertruck-Rennen“

**Eine Seite für Lehrkräfte & Eltern**

Die Skillmap **Monstertruck-Rennen** setzt einfache Codeblöcke und Erweiterungen in MakeCode Arcade ein, um grundlegende Spielkonzepte umzusetzen.

In diesen kurzen Aktivitäten ... Diese Skillmap richtet sich an Lernende, die neu bei MakeCode sind und wenig oder keine Programmiererfahrung haben.

Das Angebot ist für Schülerinnen und Schüler im Alter von 10 bis 16 Jahren konzipiert und umfasst insgesamt 3 Tutorials (ca. 35 Minuten Unterricht). Am Ende des Lernpfads erhalten die Lernenden ein Abschlusszertifikat.

|                 | Minuten* |  Schlüsselkonzepte |
| --------------- | -------- | ------------ |
| Achtung, fertig, los! | 9 | Bewegung, Sprites |
| Drüber und drunter | 11 | Ereignisse, Spielende |
| Noch mehr (optional) | 15 | Animation, Tilemaps |


\* Die Minutenangaben sind Schätzwerte und beziehen sich auf die Zeit, die zum Befolgen der Anleitungen benötigt wird. Sie enthalten keine Zeit für das Gestalten von Elementen oder das erneute Einarbeiten in bereits geschriebenen Code. Wir empfehlen, zusätzliche Zeit für Kreativität und Fehlersuche einzuplanen.

### Lernziele 

Nach Abschluss von „Monstertruck-Rennen“ haben sich die Schülerinnen und Schüler mit folgenden Themen beschäftigt:

- Ereignisse
- Variablen
- Tilemaps
- Bewegung
- Kollisionen
- Animation
- Klänge

### Projekte

Im Verlauf dieser Projekte bauen die Schülerinnen und Schüler Schritt für Schritt ein Spiel, in dem ...

```package
pxt-forest-special=github:kiki-lee/forest-special/
```

#### 1. Achtung, fertig, los!
| Aktivität | Achtung, fertig, los! (7 Min.) |
|---|---|
| ![Vorschaubild Achtung, fertig, los!](https://makecode.com/api/_biY17aMhFFpJ/thumb) | Wähle einen Truck aus und fahr los.  |
| Verwendete Blöcke | ``[let truck = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let truck: Sprite=null; truck.ay = 500]`` <br/> ``[let truck: Sprite=null;truck.vx = 100]``<br/>``[let truck: Sprite=null; scene.cameraFollowSprite(meinSprite)]`` |
| Beispiellösung | [Projekt Achtung, fertig, los!](https://makecode.com/_biY17aMhFFpJ) |

#### 2. Drüber und drunter
| Aktivität | Drüber und drunter (8 Min.) |
|---|---|
| ![Vorschaubild Drüber und drunter](https://makecode.com/api/_FYseeH2FhhHR/thumb) | Füge die Möglichkeit hinzu zu springen, zu gewinnen und zu verlieren.  |
| Verwendete Blöcke | ``[scene.onOverlapTile()]``<br/>``[game.gameOver(true)]`` |
| Beispiellösung | [Projekt Drüber und drunter](https://makecode.com/_FYseeH2FhhHR) |

#### 3. Noch mehr (optional)
| Aktivität | Noch mehr (optional) (10 Min.) |
|---|---|
| ![Vorschaubild Noch mehr](https://makecode.com/api/_1yfTMtFAe5yC/thumb) | Füge deinem Projekt Animation und Klang hinzu!  |
| Verwendete Blöcke | ``[animation.runImageAnimation()]``<br/>``[music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)]`` |
| Beispiellösung | [Projekt Noch mehr](https://makecode.com/_1yfTMtFAe5yC) |



##### Ideen zum Erweitern des Spiels

Während die Lernenden an **Noch mehr** arbeiten, ermutigen wir sie, zu planen, wie sie mit dem vollständigen Editor noch tiefer einsteigen können, nachdem sie ihr Spiel über die Schaltfläche [IN MEINEN PROJEKTEN SPEICHERN] geöffnet haben. 

- Welche weiteren Kacheln könntest du der Höhle hinzufügen?
- Könnte dich etwas verfolgen, während du durch die Höhle fährst?
- Wie kannst du deinen Truck mit den Pfeiltasten schneller oder langsamer fahren lassen?

##### Wie geht es weiter?

Wenn die Schülerinnen und Schüler mit **Monstertruck-Rennen** fertig sind, können sie mit einer anderen Skillmap ihre Fähigkeiten weiter ausbauen.

- [Probieren Sie die Skillmap „Dschungel-Sprungspiel“ aus](/skillmap/jungle)
- [Probieren Sie die Skillmap „Rette die Galaxie“ aus](/skillmap/galaxy)
- [Probieren Sie unser Tutorial „Die Zeit fliegt“ aus](/tutorials/froggy)
