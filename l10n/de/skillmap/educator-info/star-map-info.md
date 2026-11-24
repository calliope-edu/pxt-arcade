# Über die Skillmap „Talentshow“

**Eine Seite für Lehrkräfte & Eltern**

Die **Talentshow** führt in einfache Konzepte des Spieldesigns und der Informatik ein.

In dieser Reihe von Aktivitäten erstellen die Schülerinnen und Schüler ein einfaches Klickspiel mit MakeCode Arcade. Diese Skillmap richtet sich an Lernende, die neu bei MakeCode sind und wenig oder keine Programmiererfahrung haben.

Konzipiert für Schülerinnen und Schüler zwischen 9 und 12 Jahren, umfasst dieses Angebot insgesamt 4 Tutorials (ca. 50 Minuten Unterricht). Am Ende des Lernpfads erhalten die Lernenden ein Abschlusszertifikat und ein Abzeichen.

|                 | Minuten* |  Schlüsselkonzepte |
| --------------- | -------- |  ------------ |
| Willkommen zur Show    |15  |  Ereignisse, Timer |
| Ab ins Publikum   |10 |  Animation, Ereignisse |
| Der größte Star   |15  |  Projektile, Zufallszahlen, Ereignisse |
| Rosen für die Stars   |10  |  Projektile, Zufallszahlen, Ereignisse |


\* Die Minutenangaben sind Richtwerte und beziehen sich auf die Zeit, die zum Befolgen der Anleitungen benötigt wird. Wir empfehlen, zusätzliche Zeit für Kreativität und Fehlersuche einzuplanen.

### Lernziele

Nach Abschluss der Talentshow haben die Lernenden alle Elemente kennengelernt, die sie benötigen, um mit MakeCode Arcade ein eigenes Klickspiel zu erstellen.

Konkret lernen sie folgende Themen kennen:

#### Informatik-Konzepte

- Ereignisse und Programmablauf
- Benutzereingaben
- Variablen
- Listen/Arrays


#### Spieldesign-Konzepte

- Sprites und Projektile
- Design, Sounds und Effekte
- Spielpunktestand
- Gewinn-/Verlustbedingungen
- Zufall
- Animation



#### 1. Willkommen zur Show

| Aktivität | Willkommen zur Show (15 Min.) |
|---|---|
| ![Vorschaubild Willkommen zur Show](/static/skillmap/star/star1.gif) | Erstelle ein Spiel mit talentierten Tieren und vergib Punkte für jeden Klick. |
| Verwendete Blöcke | ``[info.startCountdown(10)]``<br/>``[info.changeScoreBy(1)]``<br/>``[info.onCountdownEnd(function () {})]``<br/>``[game.gameOver(true)]``|
| Lösungsvorschlag | [Projekt Willkommen zur Show](https://makecode.com/_d6TdD8VYPX1U) |

#### 2. Ab ins Publikum

| Aktivität | Ab ins Publikum (10 Min.) |
|---|---|
| ![Vorschaubild Ab ins Publikum](/static/skillmap/star/star2.gif) | Dieses Spiel baut auf dem vorherigen Level auf und fügt ein animiertes Publikums-Sprite hinzu,<br/>das wechselt, wenn die (A)-Taste gedrückt und losgelassen wird. |
| Verwendete Blöcke | ``[let meinSprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``|
| Lösungsvorschlag | [Projekt Ab ins Publikum](https://makecode.com/_WY823cfoyTwj) |

#### 3. Der größte Star

| Aktivität | Der größte Star (15 Min.) |
|---|---|
| ![Vorschaubild Der größte Star](/static/skillmap/star/star3.gif) | Aufbauend auf dem vorherigen Projekt fügt dieses Level Projektile hinzu, die<br/>bei jedem Tastendruck als Sterne aus dem Publikum sprühen. |
| Verwendete Blöcke | ``[sprites.create(img`.`, SpriteKind.Player).startEffect(effects.spray, 100)]`` |
| Lösungsvorschlag | [Projekt Der größte Star](https://makecode.com/_3gs2oWTCHXuw) |


#### 4. Rosen für die Stars

| Aktivität | Rosen für die Stars (15 Min.) |
|---|---|
| ![Vorschaubild Rosen für die Stars](/static/skillmap/star/star4.gif) | Aufbauend auf dem vorherigen Projekt nutzt dieses Level im Hintergrund ein Array, um den Star mit Sternen und Rosen zu überschütten. |
| Verwendete Blöcke | ``[let projektil = sprites.createProjectileFromSprite([img`.`, img`.`]._pickRandom(), clapping, randint(-100, 100), randint(-50, -100))]`` |
| Lösungsvorschlag | [Projekt Rosen für die Stars](https://makecode.com/_aK1XDbamoH20) |


##### Ideen zum Weiterentwickeln

Nach Abschluss der Talentshow können die Lernenden zur Skillmap zurückkehren und auf „IN MEINEN PROJEKTEN SPEICHERN“ klicken. Dadurch wird das Spiel in einem Fenster mit der vollständigen Werkzeugleiste geöffnet. Folgende Änderungen können sie ausprobieren:

- Die Tiere im Publikum durch eine Reihe klatschender Hände ersetzen
- Ein neues Sprite auf die Bühne bringen. Wer könnte der Star sein?
- Weitere Dinge hinzufügen, die das Publikum werfen kann, z. B. Konfetti oder Herzen


### Wie geht es weiter?

Nach Abschluss der Talentshow können die Lernenden mit folgenden Aktivitäten weitermachen:

* [Rettet die Dino-Babys](https://arcade.calliope.cc/skillmap#docs:/skillmap/dino)
* [Jungle Jump](https://arcade.calliope.cc/skillmap#docs:/skillmap/jungle)
