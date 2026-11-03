# Über „Rette die Galaxie“ in Arcade-Spielen

**Eine Seite für Lehrkräfte & Eltern**

**Rette die Galaxie** bietet Schülerinnen und Schülern eine Anleitung zur blockbasierten Spieleentwicklung. Diese Skillmap führt durch Konzepte der Spieleentwicklung für Einsteiger und Fortgeschrittene und vermittelt sie auf einsteigerfreundliche Weise.

In diesen Aktivitäten nutzen die Schülerinnen und Schüler die Kraft des Programmierens, um ein Weltraumspiel im Stil von Galaga zu erstellen. Die NASA braucht Hilfe beim Aktualisieren von Satelliten. Schaffen sie es, 20 davon zu aktualisieren, bevor Asteroiden ihr Raumschiff zerstören?

Unsere Schritt-für-Schritt-Anleitungen sind für Personen mit wenig Programmiererfahrung geschrieben, richten sich aber an Lernende, die sicher lesen können.

Das Angebot ist für Schülerinnen und Schüler im Alter von 12 bis 18 Jahren konzipiert und umfasst insgesamt 3 Tutorials (ca. 60 Minuten Unterricht). Am Ende des Lernpfads erhalten die Lernenden ein Abschlusszertifikat.

|                 | Minuten* | Spieltyp | Schlüsselkonzepte |
| --------------- | -------- | --------- | ------------ |
| **Einheit 1**           |          |           |              |
| Mach dein Schiff startklar | 25 | Einführung | Geschwindigkeit, Bewegung |
| Kommunikation ist alles! | 15 | Projektil | Ereignisse, Projektile, Kollisionen |
| Jetzt wird's gefährlich | 20 | Projektil | Ereignisse, Zufall, Animation, Punktestand, Leben |

\* Die Minutenangaben sind Schätzwerte und beziehen sich auf die Anleitungen in ihrer vorliegenden Form. Sie enthalten keine Zeit für das Gestalten von Elementen oder das erneute Einarbeiten in bereits geschriebenen Code. Wir empfehlen, zusätzliche Zeit für Kreativität und Fehlersuche einzuplanen.

### Lernziele

Während die Schülerinnen und Schüler „Rette die Galaxie“ bearbeiten, bauen sie eine galaktische Umgebung, in der sie Informationsprojektile senden, Asteroiden ausweichen, Punkte sammeln und Leben verlieren können. Dabei wenden sie verschiedene Konzepte der Informatik und des Spieldesigns an.

Im Einzelnen beschäftigen sie sich mit folgenden Themen:

#### Informatische Konzepte

- Schleifen
- Ereignisse
- Variablen

#### Konzepte des Spieldesigns

- Geschwindigkeit
- Projektile
- Effekte
- Zufall
- Punktestand
- Zerstörung
- Animation
- Positionierung
- Textanzeige
- Sprite-Design



#### 1. Mach dein Schiff startklar

| Aktivität | Mach dein Schiff startklar (25 Min.) |
|---|---|
| ![Vorschaubild Mach dein Schiff startklar](/static/skillmap/galaxy/galaxy1.gif) | Richte dein Raumschiff und den galaktischen Hintergrund ein. |
| Verwendete Blöcke | ``[scene.setBackgroundImage(img`.`)]``<br/>``[scroller.scrollBackgroundWithSpeed()]``<br/> ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; controller.moveSprite(mySprite)]``<br/>``[let mySprite: Sprite=null; mySprite.setStayInScreen(true)]``|
| Beispiellösung | [Projekt Mach dein Schiff startklar](https://makecode.com/_RbcKJ1Lo2LmT) |

#### 2. Kommunikation ist alles!

| Aktivität | Kommunikation ist alles! (15 Min.) |
|---|---|
| ![Vorschaubild Kommunikation ist alles!](/static/skillmap/galaxy/galaxy2.gif) | Rüste dein Schiff mit Projektilen und Spezialeffekten aus. |
| Verwendete Blöcke | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[projectile = sprites.createProjectileFromSprite(img`.`, mySprite, 0, 0)]``<br/>``[let projectile: Sprite=null; projectile.startEffect(effects.fire, 100)]`` <br/>``[info.changeLifeBy()]`` |
| Beispiellösung | [Projekt Kommunikation ist alles!](https://makecode.com/_gU3XY18mw6k9) |

#### 3. Jetzt wird's gefährlich

| Aktivität | Jetzt wird's gefährlich (20 Min.) |
|---|---|
| ![Vorschaubild Jetzt wird's gefährlich](/static/skillmap/galaxy/galaxy3.gif) | Füge deinem Spiel Gegner, ihr Verhalten und ihre Zerstörung hinzu. |
| Verwendete Blöcke | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[let mySprite: Sprite=null; projectile = sprites.createProjectileFromSprite(img`.`, mySprite, 0, 0)]``<br/>``[let projectile: Sprite=null; projectile.startEffect()]``<br/>``[sprites.onOverlap()]``<br/>``[let sprite: Sprite=null; sprite.destroy(effects.ashes, 0)]``<br/>``[let otherSprite: Sprite=null; otherSprite.destroy()]``<br/>``[info.changeScoreBy()]`` |
| Beispiellösung | [Projekt Jetzt wird's gefährlich](https://makecode.com/_VuJha6i1FeWT) |



##### Ideen zum Erweitern des Spiels

Nachdem die Lernenden die letzte Stufe abgeschlossen haben, können sie zur Skillmap zurückkehren und auf „IN MEINEN PROJEKTEN SPEICHERN“ klicken. Dadurch wird das Spiel in einem Fenster mit dem vollständigen Werkzeugkasten geöffnet. Hier einige Erweiterungen, die sie ausprobieren können:

- Code hinzufügen, der Satelliten zerstört, wenn sie von einem Asteroiden getroffen werden
- Eine weitere Art von Gegner hinzufügen
- Eine Erweiterung für Statusleisten (Leben, HP) hinzufügen, die beim Start angezeigt wird
- Dem Spiel ein weiteres Level hinzufügen


```package
arcade-background-scroll=github:microsoft/arcade-background-scroll/
pxt-status-bar=github:jwunderl/pxt-status-bar
```
