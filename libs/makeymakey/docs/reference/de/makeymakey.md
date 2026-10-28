# makeymakey

Eine Erweiterung, mit der du MakeCode-Arcade-Spiele mit dem Makey-Makey-Board spielen kannst. Dazu kannst du die Tasten für die Knöpfe des MakeCode-Arcade-Simulators neu belegen.

## Verwendung

Mit dieser Erweiterung änderst du die Tasten, mit denen du den MakeCode-Arcade-Simulator steuerst. So kannst du mit dem [Makey Makey](https://makeymakey.com/) eigene Controller bauen und damit MakeCode-Arcade-Spiele spielen.

### Blöcke
#### `Use Default Makey Makey Keys`

Der Block `Use Default Makey Makey Keys` (verwende Makey-Makey-Standardtasten) sorgt dafür, dass der Simulator die Anschlüsse auf der Vorderseite des Makey Makey als Tasten für das MakeCode-Arcade-Spiel verwendet. Diese Tasten sind:
##### Spieler 1 ###
* OBEN -> PFEIL OBEN
* UNTEN -> PFEIL UNTEN
* LINKS -> PFEIL LINKS
* RECHTS -> PFEIL RECHTS
* TASTE A -> KLICK
* TASTE B -> LEERTASTE
##### Spieler 2 ###
* OBEN -> W
* UNTEN -> S
* LINKS -> A
* RECHTS -> D
* TASTE A -> G
* TASTE B -> F

#### `Set Simulator Keymap for Player`
Mit dem Block `Set Simulator Keymap for Player` (setze Simulator-Tasten für Spieler) erstellst du eine eigene Steuerung, indem du festlegst, welche Taste zu welchem Knopf des MakeCode-Arcade-Simulators gehört.

Quelle: [joylabz/makeymakey-makecode-arcade-extension](https://github.com/joylabz/makeymakey-makecode-arcade-extension/tree/1.0.3) (1.0.3)

```package
makeymakey
```
