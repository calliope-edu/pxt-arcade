# GitHub-Veröffentlichung

Wenn du dein Projektarchiv als Erweiterung in anderen Projekten wiederverwenden willst, musst du dafür Releases erstellen.

Releases markieren einen bestimmten Punkt in der Historie deines Projektarchivs und erlauben es dir, deine Erweiterung für andere zu veröffentlichen, wenn du glaubst, dass deine Änderungen fertig sind.

### #youtube

https://youtu.be/vkOWnBfBqak

## Versionierung #versioning

In MakeCode hat jede der drei Zahlen der Version einer Erweiterung eine besondere Bedeutung. Sie folgen einem gemeinsamen Schema namens [Semver](https://semver.org/).

Immer wenn du eine Versionsnummer wie **1.3.19** siehst, bedeutet es tatsächlich **Haupt**version ist `1`, **Neben**version ist `3`, und **Patch-Nummer** ist `19`.

Im Grunde sind die Regeln des **Semver,** für eine bestimmte Version `HAUPT. NEBEN.PATCH`, du legst die nächste Version fest, indem du folgende Nummer erhöhst:

* `HAUPT` Version wenn du inkompatible API-Änderungen vornimmst.
* `NEBEN` Version wenn du Funktionen rückwärtskompatibel hinzufügst.
* `PATCH-` Version, wenn du abwärtskompatible Fehlerbehebungen vornimmst.

## Vorkompiliertes Javascript

Releases laden auch eine vorkompilierte Version deiner Anwendung hoch, sodass die GitHub pages Website verwendet werden kann. Du findest die Datei unter `assets/js/binary.js`.

## Lizenz #license

[GitHub-Lizenzierungsdokumentation](https://help.github.com/en/articles/licensing-a-repository), [GitHub Veröffentlichungsdokumentation](https://help.github.com/en/articles/about-releases)

## Siehe auch

[GitHub Licensing Documentation](https://help.github.com/en/articles/licensing-a-repository), [GitHub Releases Documentation](https://help.github.com/en/articles/about-releases)