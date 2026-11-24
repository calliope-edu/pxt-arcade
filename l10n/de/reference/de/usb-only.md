# Ohne Bluetooth (nur USB)

Normalerweise enthält jedes Spiel für den Calliope mini auch alles, was nötig ist, um das nächste Programm per **Bluetooth** mit der Calliope-mini-App zu übertragen (3× Reset drücken: Die LED-Matrix zeigt das Kopplungsmuster). Das belegt etwa 140 KB im Speicher des Calliope mini.

![USB-Kabel statt Bluetooth](/static/libs/usb-only.png)

Mit dieser Erweiterung wird das Spiel **ohne Bluetooth-Übertragung** erstellt. Das Spiel hat dann etwa **140 KB mehr Platz**, kann aber ab jetzt nur noch per **USB-Kabel** übertragen werden (Herunterladen auf das Laufwerk MINI oder mit „Calliope mini verbinden“).

## ~ hint

**Wird automatisch hinzugefügt:** Ist ein Spiel für Bluetooth zu groß, fügt der Editor diese Erweiterung selbst hinzu und zeigt einen Hinweis. Das Herunterladen per USB klappt dann wie gewohnt.

## ~

## Wieder mit Bluetooth

Solange ein solches Spiel auf dem Calliope mini ist, startet 3× Reset keinen Kopplungsmodus. So geht es wieder per Bluetooth:

1. Mach das Spiel kleiner, falls es zu groß war.
2. Entferne diese Erweiterung: Wechsle zu **JavaScript**, öffne unter dem Simulator den **Explorer** und klicke auf den Papierkorb neben **usb-only**.
3. Übertrage das Spiel **einmal per USB**. Danach klappt Bluetooth wieder (3× Reset drücken).

```package
usb-only
```
