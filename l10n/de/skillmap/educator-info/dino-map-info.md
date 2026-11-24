# Über die Skillmap „Rettet die Dino-Babys“

**Eine Seite für Lehrkräfte & Eltern**

Die **Skillmap „Rettet die Dino-Babys“** führt in die gebräuchlichsten Arten von Codeblöcken in MakeCode Arcade ein.

In dieser Reihe von Aktivitäten erstellen die Schülerinnen und Schüler ein Sammelspiel, in dem Mama Dino dem Verkehr ausweicht, um ihre Babys zu retten. Diese Anleitung richtet sich an Lernende, die neu bei MakeCode sind und wenig oder keine Programmiererfahrung haben.

Konzipiert für Schülerinnen und Schüler zwischen 11 und 15 Jahren, umfasst dieses Angebot insgesamt 4 Tutorials (ca. 105 Minuten Unterricht), verteilt auf 3 Einheiten. Am Ende jedes Lernpfads erhalten die Lernenden ein Abschlusszertifikat.

|                 | Minuten* | Spieltyp | Schlüsselkonzepte |
| --------------- | -------- | --------- | ------------ |
| **Tag 1**           |          |           |              |
| Dino-Horde      | 20       | Sammelspiel | Schleifen, Projektile, Zufallszahlen |
| Rettet die Dino-Babys! | 25   | Sammelspiel | Kollisionen, Variablen, Timer |
| **Tag 2**  |          |           |              |
| Verkehrs-Ausweicher | 30 | Sammelspiel | Projektile, Zufallszahlen, Variablen |
| **Tag 3**  |          |           |              |
| Animiere es! | 30 | Sammelspiel | Grafikdesign, Schleifen |

\* Die Minutenangaben sind Richtwerte und beziehen sich auf die Zeit, die zum Befolgen der Anleitungen benötigt wird. Wir empfehlen, zusätzliche Zeit für Kreativität und Fehlersuche einzuplanen.

### Lernziele

Nach Abschluss der Skillmap „Rettet die Dino-Babys“ haben die Lernenden alle Elemente kennengelernt, die sie benötigen, um mit MakeCode Arcade eigene Arcade-Spiele zu erstellen.

Konkret lernen sie folgende Themen kennen:

#### Informatik-Konzepte

- Ereignisse und Programmablauf
- Benutzereingaben
- Schleifen
- Variablen
- Ereignisse

#### Spieldesign-Konzepte

- Sprites und Projektile
- Design, Sounds und Effekte
- Geschwindigkeit
- Spielpunktestand
- Gewinn-/Verlustbedingungen
- Zufall
- Animation


### Spielpfad

Die Lernenden arbeiten mit Sprite-Steuerungsblöcken, Variablen und bedingten Anweisungen, um ein Spiel zu bauen, in dem Mama Dino so viele ihrer Babys wie möglich einsammelt und dabei dem Verkehr ausweicht.

#### 1. Dino-Horde

| Aktivität | Dino-Horde (10 Min.) |
|---|---|
| ![Vorschaubild Dino-Horde](/static/skillmap/map-info/dino-hoard.png) | Lege einen animierten Hintergrund an, durch den dein Held-Sprite auf der Suche nach Dino-Babys reist. |
| Verwendete Blöcke | ``[let meinSprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.moveSprite(sprites.create(img`.`), 0, 100)]``<br/>``[let random = randint(0, 10)]``<br/>``[let projektil = sprites.createProjectileFromSide(img`.`, 0, 100)]``<br/>``[sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, anderesSprite) {})]``<br/>``[forever(function () {})]``<br/>``[sprites.create(img`.`).destroy()]`` |
| Lösungsvorschlag | [Projekt Dino-Horde](https://arcade.makecode.com/00050-04644-99185-20758) |


#### 2. Rettet die Dino-Babys!

| Aktivität | Rettet die Dino-Babys! (12 Min.) |
|---|---|
| ![Vorschaubild Rettet die Dino-Babys](/static/skillmap/map-info/save-baby-dinos.png) | Baue auf der vorherigen Aktivität auf und vergib Punkte, wenn du Dinos einsammelst. |
| Verwendete Blöcke | ``[scene.setBackgroundColor(0)]``<br/>``[scene.setBackgroundImage(img`.`)]``<br/>``[effects.blizzard.startScreenEffect()]``<br/>``[sprites.create(img`.`).setStayInScreen(true)]``|
| Lösungsvorschlag | [Projekt Rettet die Dino-Babys](https://arcade.makecode.com/21438-61170-25811-66074) |

#### 3. Verkehrs-Ausweicher

| Aktivität | Verkehrs-Ausweicher (14 Min.) |
|---|---|
| ![Vorschaubild Verkehrs-Ausweicher](/static/skillmap/map-info/traffic-dodger.png) | Erweitere dein Spiel um Autos, die dir ein Leben abziehen, wenn du mit ihnen zusammenstößt. |
| Verwendete Blöcke | ``[sprites.create(img`.`).setKind(SpriteKind.Enemy)]``<br/>``[sprites.create(img`.`).y = 0]``|
| Lösungsvorschlag | [Projekt Verkehrs-Ausweicher](https://arcade.makecode.com/76596-99011-88241-42675) |

#### 4. Animiere es!

| Aktivität | Animiere es! (20 Min.) |
|---|---|
| ![Vorschaubild Animiere es!](https://makecode.com/api/_VbY6wsJ643HV/thumb) | Verfeinere dein Spiel mit Animationen und erwecke deine Figuren zum Leben! |
| Verwendete Blöcke | ``[animation.runImageAnimation()]``|
| Lösungsvorschlag | [Projekt Animiere es](https://makecode.com/_VbY6wsJ643HV) |

##### Ideen zum Weiterentwickeln

Nach Abschluss von „Animiere es!“ können die Lernenden zur Skillmap zurückkehren und auf „IN MEINEN PROJEKTEN SPEICHERN“ klicken. Dadurch wird das Spiel in einem Fenster mit der vollständigen Werkzeugleiste geöffnet. Folgende Änderungen können sie ausprobieren:

- Die Kamera wackeln lassen, wenn der Dino mit einem Auto zusammenstößt
- Ein weiteres Sprite hinzufügen, das beim Einsammeln mehr Zeit gibt
- Ein Sprite hinzufügen, das beim Einsammeln zusätzliche Leben gibt
- Die Szene ändern: statt eines Dinos auf der Straße ein Hai im Ozean

### Wie geht es weiter?

Nach Abschluss der Skillmap „Rettet die Dino-Babys“ können die Lernenden mit folgenden Aktivitäten weitermachen:

* [Turkey Day](https://arcade.calliope.cc/skillmap#docs:/skillmap/turkey)
* [Jungle Jump](https://arcade.calliope.cc/skillmap#docs:/skillmap/jungle)
