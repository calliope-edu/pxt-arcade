# Über das 80er-Rockstar-Labyrinth!

**Eine Seite für Lehrkräfte & Eltern**

Die Skillmap **80er-Rockstar-Labyrinth!** setzt mit einfachen Codeblöcken in MakeCode Arcade grundlegende Spielkonzepte um.

In diesen kurzen Aktivitäten platzieren die Schülerinnen und Schüler ein Rockstar-Sprite in einem Backstage-Labyrinth, in dem es nach einer Show Instrumente einsammeln und Fans ausweichen muss. Diese Skillmap richtet sich an Lernende, die neu bei MakeCode sind und wenig oder keine Programmiererfahrung haben.

Das Angebot ist für Schülerinnen und Schüler im Alter von 11 bis 14 Jahren konzipiert und umfasst insgesamt 3 Tutorials (ca. 22 Minuten Unterricht). Am Ende des Lernpfads erhalten die Lernenden ein Abschlusszertifikat.

|                 | Minuten* | Spieltyp | Schlüsselkonzepte |
| --------------- | -------- | --------- | ------------ |
| Gefangen im Backstage | 7 | Einführung | Bewegung, Erzeugen |
| Sammle deine Ausrüstung | 8 | Labyrinth | Ereignisse, Punktestand |
| Weiche den Fans aus! | 7 | Labyrinth | Ereignisse, Punktestand, Timer |

\* Die Minutenangaben sind Schätzwerte und beziehen sich auf die Zeit, die zum Befolgen der Anleitungen benötigt wird. Zeit für das Gestalten von Elementen oder das erneute Einarbeiten in zuvor geschriebenen Code ist nicht enthalten. Wir empfehlen, zusätzliche Zeit für Kreativität und Fehlersuche einzuplanen.

### Lernziele

Nach Abschluss des 80er-Rockstar-Labyrinths haben die Schülerinnen und Schüler erste Erfahrungen mit Informatik und Elementen des Spieldesigns in MakeCode Arcade gesammelt.

Im Einzelnen beschäftigen sie sich mit folgenden Themen:

- Ereignisse
- Bewegung
- Kollisionen
- Punktestand
- Timer

### Projekte

Im Verlauf dieser Projekte bauen die Schülerinnen und Schüler schrittweise ein Spiel, in dem sich der Rockstar durch den Backstage-Bereich bewegt, beim Einsammeln von Instrumenten Punkte erhält und Punkte verliert, wenn er einem begeisterten Fan begegnet.

```package
pxt-tilemaps=github:microsoft/pxt-tilemaps/
```

#### 1. Gefangen im Backstage
| Aktivität | Gefangen im Backstage (7 Min.) |
|---|---|
| ![Vorschaubild Gefangen im Backstage](/static/skillmap/rockstar/rockstar1.gif) | Erstelle nach der Show einen Rockstar im Backstage-Bereich und behalte ihn im Blick, während er sich durch die Kulissen bewegt. |
| Verwendete Blöcke | ``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; controller.moveSprite(mySprite)]``<br/>``[tiles.placeOnRandomTile()]``<br/>``[let mySprite: Sprite=null; scene.cameraFollowSprite(mySprite)]`` |
| Beispiellösung | [Projekt Gefangen im Backstage](https://makecode.com/_FM1DbPhEia87) |

#### 2. Sammle deine Ausrüstung
| Aktivität | Sammle deine Ausrüstung (8 Min.) |
|---|---|
| ![Vorschaubild Sammle deine Ausrüstung](/static/skillmap/rockstar/rockstar2.gif) | Lass deinen Rockstar beim Einsammeln von Instrumenten Punkte sammeln und gib dem Spiel ein Ende. |
| Verwendete Blöcke | ``[scene.onOverlapTile()]``<br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]``<br/>``[info.changeScoreBy(1)]``<br/>``[game.gameOver(true)]`` |
| Beispiellösung | [Projekt Sammle deine Ausrüstung](https://makecode.com/_aE3eYm23wad3) |

#### 3. Weiche den Fans aus!
| Aktivität | Weiche den Fans aus! (7 Min.) |
|---|---|
| ![Vorschaubild Weiche den Fans aus!](/static/skillmap/rockstar/rockstar3.gif) | Füge übereifrige Fans hinzu, die sich Punkte als Souvenirs schnappen, wenn der Rockstar ihnen nicht ausweichen kann. |
| Verwendete Blöcke | ``[scene.onOverlapTile()]``<br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]``<br/>``[info.changeScoreBy(-1)]``<br/>``[info.startCountdown(0)]`` |
| Beispiellösung | [Projekt Weiche den Fans aus!](https://makecode.com/_dW115JWAR2d0) |