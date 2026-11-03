# Über die Skillmap „Rette den Wald“

**Eine Seite für Lehrkräfte & Eltern**

Die Skillmap **Rette den Wald** nutzt einfache Codeblöcke und Erweiterungen in MakeCode Arcade, um grundlegende Spielkonzepte umzusetzen.

In diesen kurzen Aktivitäten programmieren die Schülerinnen und Schüler ein Spiel, das die Bedingungen für einen Waldbrand nachbildet, und anschließend ein Löschflugzeug, das Wasser versprüht und die Flammen löscht! Diese Skillmap richtet sich an Lernende, die neu bei MakeCode sind und wenig oder keine Programmiererfahrung haben.

Das Angebot ist für Schülerinnen und Schüler im Alter von 11 bis 18 Jahren konzipiert und umfasst insgesamt 6 Tutorials (ca. 54 Minuten Unterricht). Am Ende des Lernpfads erhalten die Lernenden ein Abschlusszertifikat.

|                 | Minuten* | Schlüsselkonzepte |
| --------------- | -------- | ------------ |
| Mach dein Flugzeug startklar | 7  | Bewegung, Sprites |
| Brandheiße Sache | 8  | Ereignisse, Schleifen, Zufall |
| Brandbekämpfung | 10 | Ereignisse, Projektile |
| Breitet sich aus wie ein Lauffeuer | 10 | Ereignisse, Variablen, Kollisionen |
| Alles im Blick | 9 | Anzeigen, Anpassung |
| Mach weiter! | 10 | Animationen, Klänge |

\* Die Minutenangaben sind Schätzwerte und beziehen sich auf die Zeit, die zum Befolgen der Anleitungen benötigt wird. Die Zeit für das Gestalten von Elementen oder das erneute Einarbeiten in bereits geschriebenen Code ist nicht enthalten. Wir empfehlen, zusätzliche Zeit für Kreativität und Fehlersuche einzuplanen.

### Lernziele

Nach Abschluss der Skillmap **Rette den Wald** haben die Schülerinnen und Schüler Elemente der Informatik und des Spieldesigns mit MakeCode Arcade kennengelernt.

Im Einzelnen beschäftigen sie sich mit folgenden Themen:

- Schleifen
- Ereignisse
- Variablen
- Tilemaps
- Bewegung
- Kollisionen
- Projektile
- Animation
- Klänge
- Stärke-/Lebensmechaniken


### Projekte

Im Verlauf dieser Projekte bauen die Schülerinnen und Schüler schrittweise ein Spiel, in dem ihr Flugzeug Wasser auf Flammen schießt, um sie zu schwächen, bis sie schließlich erlöschen.


#### 1. Mach dein Flugzeug startklar
| Aktivität | Mach dein Flugzeug startklar (7 Min.) |
|---|---|
| ![Vorschaubild Mach dein Flugzeug startklar](/static/skillmap/forest/forest1.gif) | Richte dein Flugzeug so ein, dass du überall hinkommst, wo du hinmusst!  |
| Verwendete Blöcke | ``[tiles.setTilemap(tilemap`level1`)]``<br/>``[let mySprite = sprites.create(img`.`, SpriteKind.Player)]``<br/>``[let mySprite: Sprite=null; controller.moveSprite(mySprite)]``<br/>``[let mySprite: Sprite=null; scene.cameraFollowSprite(mySprite)]`` |
| Beispiellösung | [Projekt Mach dein Flugzeug startklar](https://makecode.com/_epJ1pWYYeVyY) |

#### 2. Brandheiße Sache
| Aktivität | Brandheiße Sache (8 Min.) |
|---|---|
| ![Vorschaubild Brandheiße Sache](/static/skillmap/forest/forest2.gif) | Füge deiner Karte mithilfe von Schleifen zufällige Brände hinzu!  |
| Verwendete Blöcke | ``[for (let index = 0; index < 4; index++) {}]``<br/>``[sprites.create_spreading_fire(img`transparency16`, assets.tile`transparency16`)]``<br/>``[sprites.on_fire_created()]``<br/>``[scene.createParticleEffectAtLocation(location, effects.fire)]`` |
| Beispiellösung | [Projekt Brandheiße Sache](https://makecode.com/_Uq6C8RKcg5g4) |

#### 3. Brandbekämpfung
| Aktivität | Brandbekämpfung (10 Min.) |
|---|---|
| ![Vorschaubild Brandbekämpfung](/static/skillmap/forest/forest3.gif) | Statte dein Flugzeug mit einem Wasserschlauch aus, damit du die Brände unter Kontrolle hältst.  |
| Verwendete Blöcke | ``[controller.A.onEvent(ControllerButtonEvent.Repeated, function () {})]``<br/>``[let mySprite: Sprite=null; sprites.spray(mySprite, img`.`)]``<br/>``[sprites.set_flame_strength(location, 5)]``<br/>``[scene.onOverlapTile(SpriteKind.Water, assets.tile`transparency16`, function (sprite, location))]``<br/>``[let sprite: Sprite=null; sprite.destroy()]``<br/>``[sprites.change_flame_strength_by(sprite, -1)]``<br/>``[sprites.on_fire_destroyed(function (location))]``<br/>``[scene.clearParticleEffectsAtLocation(location)]``<br/>``[tiles.setTileAt(location, assets.tile`transparency16`)]`` |
| Beispiellösung | [Projekt Brandbekämpfung](https://makecode.com/_Vme4T0TkA1E3) |

#### 4. Breitet sich aus wie ein Lauffeuer
| Aktivität | Breitet sich aus wie ein Lauffeuer (10 Min.) |
|---|---|
| ![Vorschaubild Breitet sich aus wie ein Lauffeuer](/static/skillmap/forest/forest4.gif) | Wetter- und Umweltbedingungen wie Dürre, Wind, Vegetationsdichte und Trockenheit können dazu führen, dass sich Brände schneller ausbreiten. Simulieren wir diese Bedingungen in unserem Spiel.  |
| Verwendete Blöcke | ``[game.set_health_of_trees(7)]``<br/>``[game.set_strength_of_wind(3)]``<br/>``[game.set_dryness_of_grass(3)]``<br/>``[game.onUpdate(function () {})]``<br/>``[sprites.random_spread()]``|
| Beispiellösung | [Projekt Breitet sich aus wie ein Lauffeuer](https://makecode.com/_0MWamcehqV22) |

#### 5. Alles im Blick
| Aktivität | Alles im Blick (9 Min.) |
|---|---|
| ![Alles im Blick](/static/skillmap/forest/forest5.gif) | Informatik ist für die Brandbekämpfung wichtiger denn je. Fügen wir ein Head-up-Display (HUD) hinzu, damit die Pilotin oder der Pilot Informationen aus der Branddatenbank in Echtzeit erhält.  |
| Verwendete Blöcke | ``[hud.forest_hud(true)]``<br/>``[hud.danger_hud(true)]``<br/>``[hud.forest_hud(true)]`` |
| Beispiellösung | [Projekt Alles im Blick](https://makecode.com/_b6Y46WUtkCeJ) |

#### 6. Mach weiter!
| Aktivität | Mach weiter! (10 Min.) |
|---|---|
| ![Vorschaubild Mach weiter!](/static/skillmap/forest/forest6.gif) | Erweitere dein Spiel! Experimentiere mit Klängen und Animationen, um dein Spiel wirklich einzigartig zu machen.  |
| Verwendete Blöcke | ``[controller.left.onEvent(ControllerButtonEvent.Pressed, function () {})]``<br/>``[animation.runImageAnimation()]``<br/>``[music.thump.play()]`` |
| Beispiellösung | [Projekt Mach weiter!](https://makecode.com/_Y9PK4P2iF6D0) |

##### Ideen zum Erweitern des Spiels

Während die Lernenden an **Mach weiter!** arbeiten, empfehlen wir ihnen zu planen, wie sie noch tiefer einsteigen können, indem sie ihr Spiel über die Schaltfläche [IN MEINEN PROJEKTEN SPEICHERN] im vollständigen Editor öffnen.

- Welche andere Umgebung könnte mein Flugzeug erkunden? Wohngebiete? Die Wüste?
- Was könnte statt Bränden zufällig auftauchen? Fische? Mäuse? Schneemänner?
- Was könnte man statt eines Flugzeugs bewegen? Ein Boot? Eine Lupe?

##### Wie geht es weiter?

Wenn die Lernenden **Rette den Wald** abgeschlossen haben, können Sie sie zu einer anderen Skillmap weiterführen, um ihre Fähigkeiten weiter auszubauen.

- [Skillmap „Arcade für Einsteiger“ ausprobieren](/skillmap/beginner)
- [Skillmap „Dschungel-Sprungspiel“ ausprobieren](/skillmap/jungle)
- [Skillmap „Weltraumforscher“ ausprobieren](/skillmap/space)
- [Unser Tutorial „Time Flies“ ausprobieren](/tutorials/froggy)


##### Weitere Materialien für Lehrkräfte

Möchten Sie einen vollständigen Unterrichtsplan für diese Aktivität? Weitere Materialien finden Sie in unserem SharePoint-Ordner:

- [Unterrichtsmaterialien für Lehrkräfte](https://1drv.ms/u/s!AqsgsTyHBmRBkjR0izvm6EQ2NqLp?e=YRsyz6)


```package
pxt-arcade-forest-fire=github:microsoft/arcade-forest-fire
```
