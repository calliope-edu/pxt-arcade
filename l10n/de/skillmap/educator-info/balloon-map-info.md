# Platzende Ballons

**Eine Seite für Lehrkräfte & Eltern**

Die Skillmap **Platzende Ballons** führt durch die Entwicklung eines Wettkampfspiels, in dem Ballons zum Platzen gebracht werden, in einfache Konzepte des Spieldesigns und der Informatik ein.

In dieser Reihe von Aktivitäten erstellen die Schülerinnen und Schüler ein einfaches Klickspiel mit MakeCode Arcade. Diese Skillmap richtet sich an Lernende, die neu bei MakeCode sind und wenig Programmiererfahrung haben.

Konzipiert für Schülerinnen und Schüler zwischen 10 und 15 Jahren, umfasst dieses Angebot insgesamt 3 Haupt-Tutorials (ca. 50 Minuten Unterricht) und ein optionales Tutorial (ca. 30 Minuten Unterricht). Am Ende von Level 3 erhalten die Lernenden ein Abschlusszertifikat und ein Abzeichen.

|                 | Minuten* |  Schlüsselkonzepte |
| --------------- | -------- |  ------------ |
| Baue einen Klicker    |15  |  Ereignisse, Punkte, Timer |
| Lass den Ballon platzen   |15 |  Sprites, Skalierung, Ereignisse |
| Pump ihn auf   |20  |  Animation, Ereignisse |
| Party zu zweit   |30  |  Wiederholung |


\* Die Minutenangaben sind Richtwerte und beziehen sich auf die Zeit, die zum Befolgen der Anleitungen benötigt wird. Wir empfehlen, zusätzliche Zeit für Kreativität und Fehlersuche einzuplanen. Fortgeschrittene und ältere Lernende kommen voraussichtlich fast doppelt so schnell voran.

### Lernziele

Nach Abschluss von **Platzende Ballons** haben die Lernenden alle Elemente kennengelernt, die sie benötigen, um mit MakeCode Arcade ein eigenes Klickspiel zu erstellen.

Konkret lernen sie folgende Themen kennen:

#### Informatik-Konzepte

- Ereignisse und Programmablauf
- Benutzereingaben
- Variablen


#### Spieldesign-Konzepte

- Sprites
- Skalierung
- Spielpunktestand
- Gewinn-/Verlustbedingungen
- Animation




#### 1. Baue einen Klicker

| Aktivität | Baue einen Klicker (15 Min.) |
|---|---|
| ![Vorschaubild Baue einen Klicker](/static/skillmap/balloon/balloon1.gif) | Lerne MakeCode Arcade kennen und erstelle ein einfaches Klickspiel. |
| Verwendete Blöcke | ``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]`` <br/> ``[info.startCountdown(10)]``<br/>``[info.player1.changeScoreBy(1)]``|
| Lösungsvorschlag | [Projekt Baue einen Klicker](https://makecode.com/_M3JP02fdg2tT) |

#### 2. Lass den Ballon platzen

| Aktivität | Lass den Ballon platzen (15 Min.) |
|---|---|
| ![Vorschaubild Lass den Ballon platzen](/static/skillmap/balloon/balloon2.gif) | Füge einen Ballon hinzu, der sich mit jedem Klick aufbläst! Du wirst staunen, wie prall er wird, bevor die Zeit abläuft. |
| Verwendete Blöcke | ``[scene.setBackgroundColor(1)]`` <br/> ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]`` <br/> `` [let myMouse: Sprite = null; myMouse.setPosition(50, 93)]`` <br/> ``[scaling.scaleByPixels(mySprite, 1, ScaleDirection.Uniformly, ScaleAnchor.Bottom)]`` <br/> ``[sprites.onOverlap(SpriteKind.Player, SpriteKind.Player, function (sprite, otherSprite) {})]`` <br/> ``[game.gameOver(true)]`` |
| Lösungsvorschlag | [Projekt Lass den Ballon platzen](https://makecode.com/_LTehszFPdDsm) |

#### 3. Pump ihn auf

| Aktivität | Pump ihn auf (20 Min.) |
|---|---|
| ![Vorschaubild Pump ihn auf](/static/skillmap/balloon/balloon3.gif) | Füge eine Jahrmarktfigur hinzu, die deinen Ballon aufpumpt! Schaffst du es vor Ablauf der Zeit? |
| Verwendete Blöcke | ``[controller.A.onEvent(ControllerButtonEvent.Released, function () {})]`` <br/>  `` [let myMouse: Sprite = null; myMouse.setImage(img`.`)]`` |
| Lösungsvorschlag | [Projekt Pump ihn auf](https://makecode.com/_KipDKK94Faog) |


#### 4. Party zu zweit

| Aktivität | Party zu zweit (30 Min.) |
|---|---|
| ![Vorschaubild Party zu zweit](/static/skillmap/balloon/balloon4.gif) | Entferne den Timer und füge einen zweiten Spieler hinzu – für einen echten Wettkampf! |
| Verwendete Blöcke | ``[controller.B.onEvent(ControllerButtonEvent.Pressed, function () {})]`` <br/> ``[controller.B.onEvent(ControllerButtonEvent.Released, function () {})]`` <br/>``[info.player2.changeScoreBy(1)]`` |
| Lösungsvorschlag | [Projekt Party zu zweit](https://arcade.makecode.com/S70036-65158-11283-34659) |


##### Ideen zum Weiterentwickeln

Nach Abschluss von **Platzende Ballons** können die Lernenden zur Skillmap zurückkehren und auf „IN MEINEN PROJEKTEN SPEICHERN“ klicken. Dadurch wird das Spiel in einem Fenster mit der vollständigen Werkzeugleiste geöffnet. Folgende Änderungen können sie ausprobieren:

- Die Tiere, die die Ballons aufpumpen, durch etwas Neues ersetzen.
- Die Ballons noch schneller wachsen lassen, damit das Spiel kürzer wird.
- Einen Soundeffekt abspielen, wann immer der Ballon größer wird.


### Wie geht es weiter?

Nach Abschluss von Platzende Ballons können die Lernenden mit folgenden Aktivitäten weitermachen:

* [Build a Space Explorer](https://arcade.makecode.com/--skillmap#docs:/skillmap/space)
* [Monster Racer](https://arcade.makecode.com/--skillmap#docs:/skillmap/racer)


```package
simple-blocks=github:microsoft/arcade-tutorial-extensions/simple-blocks/
arcade-text=github:microsoft/arcade-text/
pxt-sprite-scaling=github:microsoft/pxt-common-packages/libs/sprite-scaling
```
