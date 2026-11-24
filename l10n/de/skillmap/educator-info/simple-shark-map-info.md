# Über die Skillmap „Haifisch-Abenteuer“

**Eine Seite für Lehrkräfte & Eltern**

**Haifisch-Abenteuer** führt in eine Reihe von Spieldesign-Elementen von MakeCode Arcade ein.

In diesen Aktivitäten erstellen die Schülerinnen und Schüler ein MakeCode-Arcade-Spiel, in dem sie ihren Hai vor U-Booten schützen, während er auf Futtersuche geht. Diese Aktivität richtet sich an Lernende, die neu bei MakeCode sind und wenig bis mittlere Programmiererfahrung haben. Mithilfe von Schritt-für-Schritt-Anleitungen konzentrieren sie sich bei der Spielentwicklung auf 3 Hauptthemen: Gegner zerstören, Futter sammeln und eigene Anpassungen.

Das Angebot ist für Schülerinnen und Schüler im Alter von 10 bis 16 Jahren konzipiert und umfasst insgesamt 5 Tutorials (ca. mindestens 32 Minuten Unterricht). Am Ende des Lernpfads erhalten die Lernenden ein Abschlusszertifikat.

|                 | Minuten* | Spieltyp | Schlüsselkonzepte |
| --------------- | -------- | --------- | ------------ |
| **Tag 1**           |          |           |              |
| Schwimmen mit Haien | 7 | Einführung | Bewegung, Ereignisse, Projektile |
| Futter, keine Freunde | 7 | Sammelspiel | Ereignisse, Positionierung, Zufallszahlen, Bewegung |
| Guten Appetit! | 8 | Sammelspiel | Ereignisse, Zerstören, Punktestand |
| Unter dem Meer | 8 | Sammelspiel | Schleifen, Design, Positionierung, Zufallszahlen |
| Animiere dein Spiel | 10+ | Design | Grafikdesign, Effekte |


\* Die Minutenangaben sind Schätzwerte und beziehen sich auf die Zeit, die zum Befolgen der Anleitungen benötigt wird. Die Zeit für das Gestalten von Elementen oder das erneute Einarbeiten in bereits geschriebenen Code ist nicht enthalten. Wir empfehlen, zusätzliche Zeit für Kreativität und Fehlersuche einzuplanen.

### Lernziele

Nach Abschluss der Skillmap **Haifisch-Abenteuer** haben die Schülerinnen und Schüler mehrere klassische Arcade-Spielkonzepte mit MakeCode Arcade kennengelernt.

Im Einzelnen beschäftigen sie sich mit folgenden Themen:

#### Informatische Konzepte

- Ereignisse
- Schleifen
- Variablen

#### Konzepte des Spieldesigns

- Bewegung
- Positionierung
- Zufall
- Effekte
- Punktestand
- Geschwindigkeit
- Grafikdesign



#### 1. Schwimmen mit Haien

| Aktivität | Schwimmen mit Haien (7 Min.) |
|---|---|
| ![Vorschaubild Schwimmen mit Haien](/static/skillmap/shark/shark1.gif) | Richte deinen laserschießenden Meereshai ein. |
| Verwendete Blöcke | ``[scene.setBackgroundColor(0)]``<br/>``[let meinSprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.moveSprite(meinSprite)]``<br/>``[let meinSprite: Sprite = null; meinSprite.setStayInScreen(true)]``<br>``[controller.A.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[projektil = sprites.createProjectileFromSprite(img`.`, meinSprite)]``|
| Beispiellösung | [Projekt Schwimmen mit Haien](https://makecode.com/_ghyiPCDsJLAC) |




#### 2. Futter, keine Freunde

| Aktivität | Futter, keine Freunde (7 Min.) |
|---|---|
| ![Vorschaubild Futter, keine Freunde](/static/skillmap/shark/shark2.gif) | Zurück in einem Ozean ohne Gegner: In diesem Tutorial lässt du Futter für deinen Hai erscheinen. |
| Verwendete Blöcke | ``[game.onUpdateInterval()]``<br/>``[myFood = sprites.create(img`.`, SpriteKind.Food)]``<br/>``[let myFood: Sprite = null; let meinSprite: Sprite = null; myFood.setPosition(0 + meinSprite.x, randint())]``<br/>``[let myFood: Sprite = null; myFood.vx = 0]``|
| Beispiellösung | [Projekt Futter, keine Freunde](https://makecode.com/_dLJHiifhR2ev) |

#### 3. Guten Appetit!

| Aktivität | Guten Appetit! (8 Min.) |
|---|---|
| ![Vorschaubild Guten Appetit!](/static/skillmap/shark/shark3.gif) | Dieses Spiel baut auf dem letzten Level auf. Animiere das Fressen der Fische und mache ein Spiel daraus. |
| Verwendete Blöcke | ``[sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, anderesSprite) {})]``<br/>``[let anderesSprite: Sprite = null; anderesSprite.destroy(effects.disintegrate,)]``<br/>``[info.changeScoreBy()]``<br/>``[info.startCountdown()]``<br/>``[info.onCountdownEnd(function () {})]``<br/>``[game.gameOver(true)]``|
| Beispiellösung | [Projekt Guten Appetit!](https://makecode.com/_WM31H3Uur331) |

#### 4. Unter dem Meer

| Aktivität | Unter dem Meer (8 Min.) |
|---|---|
| ![Vorschaubild Unter dem Meer](/static/skillmap/shark/shark4.gif) | Aufbauend auf dem vorherigen Level verbindet dieses Level Design mit automatischer Generierung, um eine einzigartige Meeresumgebung für deinen Hai zu schaffen. |
| Verwendete Blöcke | ``[scene.setBackgroundImage(img`.`)]``<br/>``[for (let index = 0; index < 10; index++) {}]``<br/>``[myDecor = sprites.create(img`.`,)]``<br/>``[let myDecor: Sprite = null; myDecor.setPosition(randint())]`` |
| Beispiellösung | [Projekt Unter dem Meer](https://makecode.com/_2D9JL6Rm36yC) |


#### 5. Animiere dein Spiel

| Aktivität | Animiere dein Spiel (15+ Min.) |
|---|---|
| ![Vorschaubild Animiere dein Spiel](/static/skillmap/shark/shark4a.gif) | Animiere deine Sprites für ein lebendigeres Spiel! |
| Verwendete Blöcke | _Keine_ |
| Beispiellösung | – |



##### Ideen zum Erweitern des Spiels

Nachdem die Lernenden an „Animiere dein Spiel“ gearbeitet haben, empfehlen wir ihnen zu planen, wie sie dieses Spiel an ihre eigenen Interessen anpassen möchten. Dabei helfen folgende Fragen:

- Welche Aktivität mache ich besonders gern? Was sagt mir das darüber, wer meine Hauptfigur sein sollte?
- Was brauche ich für diese Aktivität? Ersetze das Fischfutter durch diese Dinge!
- In welcher Umgebung mache ich diese Aktivität normalerweise? Ersetze den Hintergrund durch etwas Ähnliches!

Vergessen Sie nicht, diese Aktivität in den Projekten zu speichern und weiterzubauen!
