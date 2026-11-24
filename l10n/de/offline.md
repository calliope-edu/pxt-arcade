# MakeCode offline verwenden

MakeCode wird in der Regel unter @homeurl@ aufgerufen, während einer online Verbindung werden Projekte erstellt, geändert und ausgeführt. Du kannst MakeCode auch offline benutzen. Hier sind einige Möglichkeiten, wie du MakeCode offline nutzen kannst:

## #target-app

## Webanwendung

**[MakeCode](@homeurl@)** ist eine **HTML5 Webanwendung** welche automatisch im Cache-Speicher deines Computers oder Gerätes gespeichert wird, sobald du die Webseite in deinem Browser aufrufst. Nachdem die Anwendung geladen wurde, ist alles was du zum arbeiten brauchst auch ohne eine Internetverbindung verfügbar. Wenn du eine neue [Erweiterung](/extensions) hinzufügen möchtest kann es sein, dass du dich erneut mit dem Internet verbinden musst, damit der Code der neuen Erweiterung kompiliert werden kann.

### Wie funktioniert das?

Der MakeCode Editor ist, wie anderen Web-Anwendungen, in HTML JavaScript und CSS erstellt. Diese Teile des Editors werden beim Aufruf der Webseite auf dein Gerät heruntergeladen. Der Editor ist darauf ausgelegt vornehmlich mit diesen Dateien zu arbeiten, ohne das der Browser selbst eine konstante Verbindung zum Webserver benötigt. Um dies zu ermöglichen, sagt der Editor dem Browser dass dieser einige Dateien herunterladen soll, damit dieser die gleichen Funktionen wie die **[MakeCode](@homeurl@)**-Webseite auch lokal bietet. Dadurch kann der Editor auch ohne Internetverbindung problemlos verwendet werden, auch wenn die Verbindung zur Webseite nicht mehr besteht.

Wenn der Editor geöffnet wird, wird dem Browser mittgeteilt das die Funktionsdateien für den MakeCode Editor im *Application Cache* des Browsers gespeichert werden sollen. Dieser Datenspeicher wird von deinem Browser verwaltet und dient Webseiten dazu Dateien zu speichern die für die Nutzung benötigt werden.

### Cloud-Kompilierung

Um auf der wirklichen Hardware zu funktionieren wird der Code den du in JavaScript schreibst in Anweisungen umgewandelt, die der Prozessor des von dir verwenden Gerätes verstehen kann. Einige der Dateien im "Application Cache" werden ebenfalls für die Funktionen des Gerätes umgewandelt (kompiliert). Um die Funktionen Ihres Gerätes zu nutzen, stellt der Editor Blöcke für diese bereit, welche zu Ihren Programmen hinzugefügt werden. Die Blöcke können in dem Programm verwendet werden, wenn sie in einem zusätzlichen Paket enthalten sind. Der Code eines Paketes ist in TypeSkript geschrieben, manchmal wird zusätzlich auch C++ verwendet. Dieser Code muss mindestens einmal auf dem Server des Editors kompiliert werden, diese Dateien werden dann zu Ihrem Browser gesendet, welcher die Dateien lokal speichert (cached). Einmal gespeichert, kann der Editor die Dateien mit deinem Code auch Verbinden wenn der Computer keine Verbindung mehr zum Internet bzw. Server hat. Dieser einmalige Prozess wird "Cloud Kompilierung" genannt.

## Erweiterungen #extensions

Erweiterungen werden standardmäßig aus dem Internet heruntergeladen, so dass es normalerweise eine Onlineverbindung vorhanden sein muss, um sie nutzen zu können. Wenn du eine bestimmte Erweiterung verwenden möchtest, während du **offline** bist, müsst du folgenden Schritten folgen:

### Erweiterungen herunterladen

* **Während man mit dem Internet**verbunden ist, erstellt man ein neues Projekt im Editor und fügen diesem dann die Erweiterung hinzu, die verwenden werden soll. Es muss dem Projekt kein Programmcode hinzugefügt werden.
* Klick auf `|Speichern|` (das Projekt-Speicher-Symbol) oder `|Download|`und sicher die heruntergeladene Datei.

Diese Datei enthält den vollständigen Quellcode der Erweiterung, so dass die Erweiterung offline verwendet werden könnte.

### Offline-Erweiterung importieren

* **Während du offline bist**, gehst du zum `|Erweiterungen|` Dialog und drückst auf **Datei importieren**.
* Importiere die Datei, die früher heruntergeladen und gespeichert wurde, als eine Onlineverbindung zur Verfügung stand.

### ~ hint

#### Einschränkungen

Nicht alle MakeCode-Editoren unterstützen das Importieren von Erweiterungen als Quelldatei. Wenn das Importieren aktiviert ist, sieht man im Erweiterungen-Dialog eine **Datei importieren** Schaltfläche.

Erweiterungen, die C++ verwenden, werden noch nicht in einem vollständigen Offline-Szenario unterstützt, da sie die Cloud-Kompilierung erfordern.

### ~

## MakeCode auf einem Lokalem Server betreiben #local-serve

Die Open-Source Editionen von MakeCode können lokal auf dem Computer betrieben werden. Erfahrene Nutzerinnen und Nutzer können die gesamte [PXT Toolchain](https://github.com/microsoft/pxt) herunterladen und mittels der [Eingabeaufforderung (cmd)](/cli) zum kompilieren der Skripte lokal nutzen. PXT lässt sich übrigens sehr gut mit [Visual Studio Code](/code), einem plattformunabhängigem Editor für Programmier-Code verwenden. Für mehr Informationen um MakeCode lokal zu betreiben, besuche die Projektseite unter @githubUrl@.
## Couldn't apply replacement logic to:
## Offline-App #target-App

Der MakeCode @boardname@ Editor ist als App verfügbar, die Sie auf einem Windows oder Mac OS Computer installieren können. Nach der Installation kannst Du mit der **[MakeCode Offline App](/offline-app)** Deine Projekte auf Deinem Gerät erstellen, ausführen und herunterladen. Es funktioniert wie die Webanwendung in Ihrem Browser, aber es ist eine eigenständige Anwendung, die funktioniert, wenn eine Internetverbindung eingeschränkt ist oder nicht verfügbar ist.

### ~button /offline-app

Lade die Offline-App herunter!

### ~

