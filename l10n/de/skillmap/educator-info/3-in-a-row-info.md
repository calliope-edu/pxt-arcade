# Über „Drei in einer Reihe“

**Eine Seite für Lehrkräfte & Eltern**

Die Skillmap **Drei in einer Reihe** führt anhand eines klassischen Match-3-Puzzlespiels in Konzepte des Spieldesigns und der Informatik für Fortgeschrittene ein.

In diesen Aktivitäten erstellen die Schülerinnen und Schüler mit MakeCode Arcade ein Puzzlespiel, in dem sie Kacheln tauschen, um 3 oder mehr gleiche Symbole in einer Reihe zu bilden. Diese Skillmap richtet sich an Lernende, die bereits etwas mit MakeCode vertraut sind und fortgeschrittenere Konzepte wie Funktionen, Arrays und verschachtelte Schleifen erkunden möchten.

Das Angebot ist für Schülerinnen und Schüler im Alter von 11 bis 14 Jahren konzipiert und umfasst insgesamt 3 Tutorials (ca. 45–60 Minuten Unterricht). Am Ende des Lernpfads erhalten die Lernenden ein Abschlusszertifikat und ein Abzeichen.

|                 | Minuten* | Schlüsselkonzepte |
| --------------- | -------- | ------------ |
| **Einheit 1** | **45-60** |  |
| Drei in einer Reihe – Teil 1 | 15 | Sprites, Tilemaps, Arrays, Funktionen |
| Drei in einer Reihe – Teil 2 | 20 | Bewegung, verschachtelte Schleifen, Funktionen, Bedingungen |
| Drei in einer Reihe – Teil 3 | 15 | Variablen, Kachelpositionen, Spiellogik |

\* Die Minutenangaben sind Schätzwerte und beziehen sich auf die Zeit, die zum Befolgen der Anleitungen benötigt wird. Sie enthalten keine Zeit für das Gestalten von Elementen oder das erneute Einarbeiten in bereits geschriebenen Code. Wir empfehlen, zusätzliche Zeit für Kreativität und Fehlersuche einzuplanen.

### Lernziele

Nach Abschluss von **Drei in einer Reihe** haben die Schülerinnen und Schüler mehrere fortgeschrittene Konzepte für Arcade-Spiele mit MakeCode Arcade kennengelernt.

Im Einzelnen beschäftigen sie sich mit folgenden Themen:

#### Informatische Konzepte

- **Funktionen**: Wiederverwendbare Codeblöcke erstellen und aufrufen
- **Arrays**: Sammlungen von Daten (Edelstein-Symbole) speichern und darauf zugreifen
- **Verschachtelte Schleifen**: Schleifen innerhalb von Schleifen nutzen, um mehrere Datensätze zu durchlaufen
- **Boolesche Variablen**: Wahr/Falsch-Zustände für die Spiellogik verfolgen
- **Bedingungen**: Entscheidungen auf Grundlage des Spielzustands treffen
- **Ereignisse**: Auf Benutzereingaben (Tastendrücke) reagieren
- **Variablen**: Daten speichern und verändern (Kachelpositionen, Tauschbilder)

#### Konzepte des Spieldesigns

- **Tilemaps**: Rasterbasierte Spielfelder verwenden
- **Sprites**: Sichtbare Spielobjekte erstellen (Cursor)
- **Bewegung**: Rasterbasierte Bewegung mit pixelgenauer Positionierung
- **Mustererkennung**: Treffer in Zeilen und Spalten erkennen
- **Punktestand**: Punkte der Spielenden verfolgen und anzeigen
- **Gewinn-/Verlustkriterien**: Das Spiel abhängig von der Leistung der Spielenden beenden
- **Soundeffekte**: Akustische Rückmeldung bei Treffern hinzufügen
- **Visuelle Effekte**: Partikeleffekte nutzen, um Treffer zu feiern

### Tutorials

Die Schülerinnen und Schüler bauen ihr Puzzlespiel Schritt für Schritt auf, indem sie die 3 Tutorials der Skillmap durcharbeiten. Sie beginnen mit einem einfachen Spielfeld und Cursor, fügen die Logik zur Treffererkennung hinzu und setzen schließlich den Kacheltausch um, der das Spiel zum Leben erweckt.

#### Teil 1

| Aktivität | Drei in einer Reihe – Teil 1 (15 Min.) |
|---|---|
| ![Vorschaubild Teil 1](/static/skillmap/3-in-a-row/3-in-a-row1.png) | Das Tilemap-Spielfeld einrichten, ein Cursor-Sprite erstellen, ein Array mit Edelstein-Symbolen anlegen und eine Funktion schreiben, die leere Kacheln mit zufälligen Edelsteinen füllt. |
| Verwendete Blöcke | ``[scene.setBackgroundColor(13)]``<br/>``[let cursor = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[cursor.setPosition(80, 56)]``<br/>``[tiles.setCurrentTilemap(tilemap`level1`)]``<br/>``[let symbols = [assets.tile`Gem1`, assets.tile`Gem2`]]``<br/>``[function fillEmptyTiles () {}]``<br/>``[for (let emptyTile of tiles.getTilesByType(assets.tile`transparency16`)) {}]``<br/>``[tiles.setTileAt(emptyTile, symbols._pickRandom())]``<br/>``[info.setScore(0)]`` |
| Beispiellösung | [Projekt Drei in einer Reihe – Teil 1](https://makecode.com/_fhYPxPb9j7K9) |

#### Teil 2

| Aktivität | Drei in einer Reihe – Teil 2 (20 Min.) |
|---|---|
| ![Vorschaubild Teil 2](/static/skillmap/3-in-a-row/3-in-a-row2.png) | Cursorbewegung mit den Pfeiltasten hinzufügen, mit der Erweiterung „Tile Scanner“ eine Funktion erstellen, die Dreierreihen sucht und entfernt, sowie Soundeffekte und visuelle Rückmeldung hinzufügen. |
| Verwendete Blöcke | ``[controller.up.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[cursor.y += -16]``<br/>``[function clearMatches () {}]``<br/>``[let cleared = false]``<br/>``[for (let gem of symbols) {}]``<br/>``[for (let location of tileScanner.scanForLines()) {}]``<br/>``[tileScanner.setTileAtLocations(location, assets.tile`transparency16`)]``<br/>``[cursor.startEffect(effects.confetti, 500)]``<br/>``[music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.InBackground)]``<br/>``[info.changeScoreBy(1)]``<br/>``[if (!(cleared)) { game.gameOver(false) }]`` |
| Beispiellösung | [Projekt Drei in einer Reihe – Teil 2](https://makecode.com/_9ocWr34CCciR) |

#### Teil 3

| Aktivität | Drei in einer Reihe – Teil 3 (15 Min.) |
|---|---|
| ![Vorschaubild Teil 3](/static/skillmap/3-in-a-row/3-in-a-row3.png) | Mit der Taste A die Logik zum Tauschen von Kacheln erstellen, Kachelpositionen ermitteln, Kachelbilder speichern und tauschen und nach jedem Tausch die Funktion zur Treffersuche aufrufen. |
| Verwendete Blöcke | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[locationRight = cursor.tilemapLocation()]``<br/>``[locationLeft = locationRight.getNeighboringLocation(CollisionDirection.Left)]``<br/>``[swapImage = tiles.tileImageAtLocation(locationRight)]``<br/>``[tiles.setTileAt(locationRight, tiles.tileImageAtLocation(locationLeft))]``<br/>``[tiles.setTileAt(locationLeft, swapImage)]``<br/>``[clearMatches()]`` |
| Beispiellösung | [Projekt Drei in einer Reihe – Teil 3](https://makecode.com/_AreWAHeJFUxt) |

### Ideen zum Erweitern des Spiels

Nachdem die Lernenden das letzte Tutorial abgeschlossen haben, können sie auf der Skillmap-Seite auf **„In meinen Projekten speichern“** klicken. Dadurch wird das Spiel in einem Fenster mit dem vollständigen Werkzeugkasten geöffnet. Hier einige Erweiterungen, die sie ausprobieren können:

- **Einen Timer hinzufügen**: Mit einem Countdown zusätzlichen Druck erzeugen
- **Hintergrundmusik hinzufügen**: Das Spiel mit stimmungsvoller Musik fesselnder machen
- **Besondere Power-up-Edelsteine erstellen**: Edelsteine mit Bonuspunkten oder besonderen Fähigkeiten hinzufügen
- **Kettenreaktionen umsetzen**: Wenn neue Kacheln Treffer bilden, weitere Entfernungen auslösen
- **Vertikales Tauschen hinzufügen**: Eine Möglichkeit schaffen, den Cursor für vertikales Tauschen zu drehen
- **Animationen hinzufügen**: Die Edelsteine beim Erscheinen oder Entfernen animieren
- **Mehrere Fehltausche erlauben**: Den Spielenden eine Lebensleiste geben, die bei schlechten Tauschen sinkt
- **Neue Edelstein-Grafiken gestalten**: Die Standard-Edelsteine durch eigene Designs ersetzen

### Wie geht es weiter?

Nach Abschluss von „Drei in einer Reihe“ können die Schülerinnen und Schüler ihre Reise mit MakeCode Arcade mit diesen Aktivitäten fortsetzen:

* [Dschungel-Sprungspiel](https://arcade.makecode.com/--skillmap#docs:/skillmap/jungle) – Ein Jump-’n’-Run-Spiel mit Sprüngen und Hindernissen erstellen
* [Weltraumforscher](https://arcade.makecode.com/--skillmap#docs:/skillmap/space) – Ein Abenteuerspiel im Weltraum bauen
* [Monstertruck-Rennen](https://arcade.makecode.com/--skillmap#docs:/skillmap/racer) – Ein Rennspiel mit Monstertrucks gestalten

```package
tileScanner=github:riknoll/arcade-tile-scanner
```
