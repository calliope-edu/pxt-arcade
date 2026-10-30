# Über Abenteuer im Zoo! in Arcade-Spielen

**Eine Seite für Lehrkräfte & Eltern**

**Abenteuer im Zoo!** ist eine Einführung in die blockbasierte Programmierung für junge Lernende. Die Skillmap führt durch grundlegende Gestaltungsschritte für erzählende Spiele, darunter: Bewegung, Zufall, Positionierung sowie das Erzeugen und Entfernen von Elementen.

In dieser Reihe von Aktivitäten nutzen die Schülerinnen und Schüler die Möglichkeiten des Programmierens, um einen Zoo zu verwalten. Diese Skillmap eignet sich für Lernende, die neu bei MakeCode sind und wenig oder keine Programmiererfahrung haben. Mit Schritt-für-Schritt-Anleitungen konzentrieren sie sich auf Projekte rund um Bewegung und Interaktion.

Dieses Angebot ist für Lernende zwischen 11 und 15 Jahren konzipiert und umfasst insgesamt 6 Tutorials (ca. 49 Minuten Unterrichtszeit), die auf eine oder zwei Einheiten verteilt werden können. Am Ende des Lernpfads erhalten die Lernenden eine Teilnahmeurkunde.

|                 | Minuten* | Spieltyp | Kernkonzepte |
| --------------- | -------- | --------- | ------------ |
| Erster Tag | 5 | Einführung | Sprite-Gestaltung, Bewegung, Navigation |
| An Land | 8 | Geschichte | Sprite-Gestaltung, Bewegung, Zufallszahlen |
| Im Meer | 8 | Geschichte | Sprite-Gestaltung, Bewegung, Zufallszahlen, Schleifen |
| Pinguine | 9 | Geschichte | Fehlersuche, Positionierung |
| Füttere den Panda | 9 | Geschichte | Ereignisse, Zufallszahlen, Bewegung, Entfernen von Elementen |
| Wachtel-Schlüpfzeit | 10 | Geschichte | Ereignisse, Entfernen von Elementen, Duplizieren |

\* Die Minutenangaben sind Schätzwerte und beziehen sich auf die Zeit, die Anleitungen wie beschrieben zu befolgen. Sie enthalten keine Zeit für die Gestaltung von Sprites. Wir empfehlen, zusätzliche Zeit für Kreativität und Fehlersuche einzuplanen.

### Lernziele

Während Abenteuer im Zoo! gestalten die Lernenden ihre eigene Tierpfleger-Figur, entwerfen Gehege und kümmern sich um Tiere. Dabei wenden sie Konzepte aus Informatik und Spieldesign an, zum Beispiel:

#### Informatik-Konzepte

- Benutzereingaben
- Schleifen
- Ereignisse

#### Spieldesign-Konzepte

- Sprite-Gestaltung
- Koordinaten
- Geschwindigkeit
- Punktestand
- Zufall
- Effekte

#### 1. Erster Tag

| Aktivität | Erster Tag (3 Min.) |
|---|---|
| ![Vorschaubild Erster Tag](/static/skillmap/zoo/activity1.png) | Gestalte deine Tierpfleger-Figur und bewege sie herum. |
| Wichtige verwendete Blöcke | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.moveSprite(mySprite)]``<br/> ``[scene.cameraFollowSprite(mySprite)]``|
| Lösungsvorschlag | [Projekt Erster Tag](https://makecode.com/_UrRYAkLCjTW7) |

#### 2. An Land

| Aktivität | An Land (6 Min.) |
|---|---|
| ![Vorschaubild An Land](/static/skillmap/zoo/activity2.png) | Gestalte ein Tiergehege an Land. |
| Wichtige verwendete Blöcke | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; mySprite.setVelocity(randint(), randint())]``<br/>``[let mySprite: Sprite=null; mySprite.setBounceOnWall(true)]`` |
| Lösungsvorschlag | [Projekt An Land](https://makecode.com/_TeKEE8W21eXa) |

#### 3. Im Meer

| Aktivität | Im Meer (6 Min.) |
|---|---|
| ![Vorschaubild Im Meer](/static/skillmap/zoo/activity2-2.png) | Gestalte ein Wassergehege mit mehreren Tieren derselben Art. |
| Wichtige verwendete Blöcke | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; mySprite.vx = 0]``<br/>``[let mySprite: Sprite=null; mySprite.setBounceOnWall(true)]``<br/>``[let mySprite: Sprite=null; mySprite.y = randint()]``<br/>``[for (let index = 0; index < 4; index++) {}]`` |
| Lösungsvorschlag | [Projekt Im Meer](https://makecode.com/_beDHXiLcj8dk) |

#### 4. Pinguine

| Aktivität | Pinguine (5 Min.) |
|---|---|
| ![Vorschaubild Pinguine](/static/skillmap/zoo/activity3.png) | Diese Aktivität zeigt, wie man Positionsfehler im Code findet und behebt. |
| Wichtige verwendete Blöcke | ``[let penguin = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; mySprite.x = 0]`` |
| Lösungsvorschlag | [Projekt Pinguine](https://makecode.com/_7FETiTYJiKq8) |

#### 5. Füttere den Panda

| Aktivität | Füttere den Panda (10 Min.) |
|---|---|
| ![Vorschaubild Füttere den Panda](/static/skillmap/zoo/activity4.png) | Erzeuge Bambus und führe den Panda dorthin, damit er ihn frisst. |
| Wichtige verwendete Blöcke | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[let mySprite = sprites.create(img`.`, SpriteKind.Food)]``<br/>``[let mySprite: Sprite=null; mySprite.setPosition(randint(), randint())]``<br/>``[let panda: Sprite=null; panda.follow(mySprite)]``<br/>``[sprites.onOverlap()]``<br/>``[let otherSprite: Sprite=null; otherSprite.destroy(effects.disintegrate, 0)]``|
| Lösungsvorschlag | [Projekt Füttere den Panda](https://makecode.com/_8AoUX74TK1Rr) |

#### 6. Wachtel-Schlüpfzeit

| Aktivität | Wachtel-Schlüpfzeit (6 Min.) |
|---|---|
| ![Vorschaubild Wachtel-Schlüpfzeit](/static/skillmap/zoo/activity5.png) | Bringe mit Code alle Wachteln und ihre Eier in den Stall. |
| Wichtige verwendete Blöcke | ``[sprites.onOverlap()]``<br/>``[let otherSprite: Sprite=null; otherSprite.follow(mySprite)]``<br/>``[scene.onOverlapTile())]``<br/>``[let sprite: Sprite=null; sprite.destroy()]`` |
| Lösungsvorschlag | [Projekt Wachtel-Schlüpfzeit](https://makecode.com/_UC93YfEEVEgq) |

##### Ideen zum Weiterentwickeln

Nach Wachtel-Schlüpfzeit können die Lernenden zur Skillmap zurückkehren und bei einem beliebigen Modul auf „IN MEINEN PROJEKTEN SPEICHERN“ klicken. Dadurch öffnet sich das jeweilige Spiel in einem Fenster mit vollständiger Werkzeugleiste. Hier einige Änderungen, die sie ausprobieren können:

- _[An Land/Im Meer]_ Ein weiteres Sprite mit eigenem Bewegungsmuster hinzufügen
- _[Im Meer]_ Die Geschwindigkeiten so ändern, dass sich jedes Sprite unterschiedlich schnell bewegt
- _[Im Meer]_ Die Sprites umdrehen lassen, wenn sie gegen eine Wand stoßen
- _[Füttere den Panda]_ Den Panda nach dem Fressen weiterlaufen lassen
- _[Füttere den Panda]_ Einen weiteren Panda erstellen
- _[Wachtel-Schlüpfzeit]_ Das Spiel leichter machen (z. B. indem sich der Handschuh schneller bewegt)
