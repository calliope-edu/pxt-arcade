# Über das Dschungel-Sprungspiel

**Eine Seite für Lehrkräfte & Eltern**

Das **Dschungel-Sprungspiel** führt in eine Reihe von Spieldesign-Elementen in MakeCode Arcade ein.

In diesen Aktivitäten erstellen die Schülerinnen und Schüler mit MakeCode Arcade ihr ganz eigenes Jump'n'Run-Spiel. Diese Skillmap richtet sich an Lernende, die neu bei MakeCode sind und wenig oder keine Programmiererfahrung haben. Mithilfe von Schritt-für-Schritt-Anleitungen erwecken sie einen Affen zum Leben – in einer Welt voller gefährlicher Hindernisse und sammelbarer Schmuckstücke.

Das Angebot ist für Schülerinnen und Schüler im Alter von 11 bis 15 Jahren konzipiert und umfasst insgesamt 8 Tutorials (ca. 68+ Minuten Unterricht), verteilt auf 2 Einheiten. Am Ende des Lernpfads erhalten die Lernenden ein Abschlusszertifikat.

|                 | Minuten* | Spieltyp | Schlüsselkonzepte |
| --------------- | -------- | --------- | ------------ |
| **Einheit 1** | **38** |  |  |
| Affe in Bewegung | 10 | Einführung | Bewegung, Beschleunigung, Benutzereingaben, Schwerkraft |
| Game Over | 8 | Jump'n'Run | Ereignisse, Punktestand |
| Große Sprünge | 10 | Jump'n'Run | Benutzereingaben, Erzeugen |
| Weggesprengt | 10 | Jump'n'Run | Benutzereingaben, Projektile, Animation, Ereignisse, Zerstörung |
| **Einheit 2** | **30+** |  |  |
| Pass auf! | 10 | Jump'n'Run | Ereignisse, Zerstörung, Lebensanzeige |
| Animationen | 12 | Jump'n'Run | Ereignisse, Animation |
| Extra-Level | 8 | Jump'n'Run | Ereignisse, Animation |
| Mach es zu deinem Spiel | k. A. | Jump'n'Run | Grafikdesign, Spielanpassung, Leveldesign |

\* Die Minutenangaben sind Schätzwerte und beziehen sich auf die Zeit, die zum Befolgen der Anleitungen benötigt wird. Zeit für das Gestalten von Elementen oder das erneute Einarbeiten in zuvor geschriebenen Code ist nicht enthalten. Wir empfehlen, zusätzliche Zeit für Kreativität und Fehlersuche einzuplanen.

### Lernziele

Nach Abschluss des Dschungel-Sprungspiels haben die Schülerinnen und Schüler zahlreiche Konzepte von Jump'n'Run-Spielen in MakeCode Arcade kennengelernt.

Im Einzelnen beschäftigen sie sich mit folgenden Themen:

#### Informatische Konzepte

- Ereignisse
- Benutzereingaben

#### Konzepte des Spieldesigns

- Bewegung
- Beschleunigung
- Schwerkraft
- Erzeugen
- Projektile
- Animation
- Zerstörung
- Lebensanzeige
- Level
- Textanzeige
- Grafikdesign
- Spielanpassung
- Leveldesign

### Projekte

Im Verlauf dieser Projekte bauen die Schülerinnen und Schüler ihr Spiel schrittweise auf. Sie erleben, wie sich der Affe von einem einfachen Wesen, das sich nur bewegen kann, zu einem animierten Lauf- und Sprung-_Meister_ entwickelt, der eigene Plattformen erschafft, Hindernisse sprengt und in mehreren Welten Schmuckstücke sammelt.

#### 1. Affe in Bewegung

| Aktivität | Affe in Bewegung (10 Min.) |
|---|---|
| ![Vorschaubild Affe in Bewegung](/static/skillmap/jungle/jungle1.gif) | Richte die Seitwärts- und Sprungbewegungen deines Affen ein. |
| Verwendete Blöcke | ``[mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[controller.moveSprite(mySprite, 0, 0)]``<br/>``[let mySprite: Sprite=null; mySprite.ay = 0]``<br/>``[scene.cameraFollowSprite(mySprite)]``<br/>``[controller.up.onEvent()]``<br/>``[let mySprite: Sprite=null; sprites.gravity_jump(mySprite)]`` |
| Beispiellösung | [Projekt Affe in Bewegung](https://makecode.com/_2cdMJY6x5F1U) |

#### 2. Game Over

| Aktivität | Game Over (8 Min.) |
|---|---|
| ![Vorschaubild Game Over](/static/skillmap/jungle/jungle2.gif) | Füge deinem Spiel Gewinnen, Verlieren und das Sammeln von Punkten hinzu. |
| Verwendete Blöcke | ``[scene.onOverlapTile()]``<br/>``[game.gameOver(true)]``<br/>``[info.changeScoreBy()]`` |
| Beispiellösung | [Projekt Game Over](https://makecode.com/_TPD1cCdtVD6i) |

#### 3. Große Sprünge

| Aktivität | Große Sprünge (10 Min.) |
|---|---|
| ![Vorschaubild Große Sprünge](/static/skillmap/jungle/jungle3.gif) | Mach Hindernisse leichter, indem du Plattformen unter deinem Affen erscheinen lässt. |
| Verwendete Blöcke | ``[controller.A.onEvent()]``<br/>``[tiles.setWallAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), true)]``<br/>``[tiles.setTileAt(tiles.locationInDirection(tiles.locationOfSprite(mySprite), CollisionDirection.Bottom), assets.tile`bounce`)]`` |
| Beispiellösung | [Projekt Große Sprünge](https://makecode.com/_V5VcYsFw62h0) |

#### 4. Weggesprengt

| Aktivität | Weggesprengt (10 Min.) |
|---|---|
| ![Vorschaubild Weggesprengt](/static/skillmap/jungle/jungle4.gif) | Räume Plattformen mit Dynamit aus dem Weg. |
| Verwendete Blöcke | ``[controller.B.onEvent()]``<br/>``[let mySprite: Sprite=null; projectile = sprites.createProjectileFromSprite(img`.`, mySprite, 0, 0)]``<br/>``[let projectile: Sprite=null; projectile.setFlag(SpriteFlag.GhostThroughWalls, true)]``<br/>``[animation.runImageAnimation()]``<br/>``[scene.onOverlapTile()]``<br/>``[let tiles: Sprite=null; tiles.setWallAt(location, false)]``<br/>``[let tiles: Sprite=null; tiles.setTileAt(location, assets.tile`transparency16`)]`` |
| Beispiellösung | [Projekt Weggesprengt](https://makecode.com/_dRsUjvEJj8K7) |

#### 5. Pass auf!

| Aktivität | Pass auf! (10 Min.) |
|---|---|
| ![Vorschaubild Pass auf!](/static/skillmap/jungle/jungle5.gif) | Mach dein Dynamit gefährlicher und zerstörerischer. |
| Verwendete Blöcke | ``[sprites.onOverlap()]``<br/>``[let otherSprite: Sprite=null; otherSprite.destroy()]``<br/>``[info.changeLifeBy(-1)]``<br/>``[scene.onOverlapTile()]`` |
| Beispiellösung | [Projekt Pass auf!](https://makecode.com/_C4XbyuU4tV3y) |

#### 6. Animationen

| Aktivität | Animationen (12 Min.) |
|---|---|
| ![Vorschaubild Animationen](/static/skillmap/jungle/jungle6.gif) | Animiere deinen Affen! |
| Verwendete Blöcke | ``[controller.left.onEvent()]``<br/>``[animation.runImageAnimation()]`` |
| Beispiellösung | [Projekt Animationen](https://makecode.com/_hU3ULXVvq02F) |

#### 7. Extra-Level

| Aktivität | Extra-Level (8 Min.) |
|---|---|
| ![Vorschaubild Extra-Level](/static/skillmap/jungle/jungle7.gif) | Füge deinem Spiel ein weiteres Level hinzu. |
| Verwendete Blöcke | ``[scene.onOverlapTile()]``<br/>``[scene.setBackgroundImage(img`.`)]``<br/>``[tiles.setTilemap()]``<br/>``[animation.runMovementAnimation()]``<br/>``[let mySprite: Sprite=null; mySprite.say("Level 2!", 500)]`` |
| Beispiellösung | [Projekt Extra-Level](https://makecode.com/_2oiXEVKaK29s) |

#### 8. Mach es zu deinem Spiel

| Aktivität | Mach es zu deinem Spiel |
|---|---|
| ![Vorschaubild Mach es zu deinem Spiel](/static/skillmap/jungle/jungle8.gif) | Ändere deine Bilder und Tilemaps, um ein ganz eigenes Spiel zu erstellen! |
| Verwendete Blöcke | _Keine_ |
| Beispiellösung | k. A. |

##### Ideen zur Spielanpassung

Während die Schülerinnen und Schüler an „Mach es zu deinem Spiel“ arbeiten, ermutigen wir sie, zu planen, wie sie dieses Spiel nach ihren eigenen Interessen anpassen möchten. Dabei können folgende Fragen helfen:

- Welche Art von Welt würde ich gern erkunden? Gestalte die Szene mit deiner gewählten Umgebung neu!
- Welches Tier oder Wesen würde in diese Welt passen? Ersetze den Affen durch dein gewähltes Wesen!
- Welche Hindernisse wären eine Herausforderung für meine Figur? Wie kann ich sie kreativ einbauen?
- Welche Vorräte brauche ich, wenn ich diese Welt erkunde? Ersetze die Schmuckstücke durch diese Vorräte!