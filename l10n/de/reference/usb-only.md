# Ohne Bluetooth (nur USB)

Normalerweise enthält jedes Spiel für den Calliope mini auch alles, was nötig ist, um das nächste Programm über **Bluetooth** mit der Calliope-mini-App zu übertragen (3-mal Reset drücken: die LED-Matrix zeigt das Kopplungsmuster). Das belegt etwa 140 KB Speicher des Calliope mini.

![USB-Kabel statt Bluetooth](/static/libs/usb-only.png)

Mit dieser Erweiterung wird das Spiel **ohne Bluetooth-Übertragung** erstellt. Das Spiel bekommt etwa **140 KB mehr Platz**, kann ab dann aber nur noch mit dem **USB-Kabel** übertragen werden (Download auf das Laufwerk MINI oder mit „Calliope mini verbinden“).

## ~ hint

**Automatisch hinzugefügt:** Wenn ein Spiel zu groß für Bluetooth ist, fügt der Editor diese Erweiterung selbst hinzu und zeigt einen Hinweis an. Der Download funktioniert dann wie gewohnt über USB.

## ~

## Wieder Bluetooth

Solange ein solches Spiel auf dem Calliope mini ist, startet 3-maliges Drücken von Reset den Kopplungsmodus nicht mehr. So überträgst du wieder über Bluetooth:

1. Mach das Spiel kleiner, falls es zu groß war.
2. Entferne diese Erweiterung: Wechsle zu **JavaScript**, öffne den **Explorer** unter dem Simulator und klicke auf den Papierkorb neben **usb-only**.
3. Übertrage das Spiel **einmal über USB**. Danach funktioniert Bluetooth wieder (3-mal Reset drücken).

```package
usb-only
```
