# Häufig gestellte Fragen

### @description Häufig gestellte Fragen und Antworten unserer Benutzer.

## Welche Websites muss ich für Arcade entsperren? #unblock

Der Zugriff auf bestimmte Domains ist notwendig, damit der Web-Editor alle Ressourcen erreichen kann, die er benötigt, um voll funktionsfähig zu sein. Dies sind die Domains, die du entsperren musst:

* https://arcade.calliope.cc
* https://makecode.com
* https://trg-@targetid@.userpxt.io
* https://cdn.makecode.com
* https://api.github.com
* https://immersivereaderprod.cognitiveservices.azure.com

Um zusätzliche Funktionen für die Entwicklung zu aktivieren, werden auch folgende Domains benötigt. In den meisten Fällen müssen diese Domains nicht entsperrt werden:

* https://github.com
* https://raw.githubusercontent.com/

## ~button /domains

Domains testen

## ~

## Wo werden meine Projekte gespeichert?

Die Projekte werden im lokalen Datenspeicher des Browsers gespeichert. Du kannst dein Projekt mit einem Namen speichern. Wenn du dein Projekt nicht benennst, bleibt es als "Unbenannt" Projekt erhalten. Du kannst dein Projekt auch in einer Datei oder in der Cloud speichern.

Erfahre mehr über das [Speichern](/save) von Projekten.

<!--
## Kann ich eine frühere Version meines Projekts wieder herstellen?

Ja! Gehe zur GitHub Ansicht und klicke auf `Commits anzeigen` im Abschnitt [History](/github/history). Du kannst jeden Commit überprüfen und auswählen, um dein Projekt zu diesem Commit wiederherzustellen.
-->

## Kann ich MakeCode verwenden, wenn ich nicht mit dem Internet verbunden bin? #work-offline

Einige MakeCode-Editoren sind als [Offline-Apps](/offline)verfügbar. Wenn MakeCode zum ersten Mal im Browser geladen wird, wird automatisch eine zwischengespeicherte Version von MakeCode gespeichert. Wenn du später eine Erweiterung hinzufügen möchtest, die mit deinem Programm verwendet werden soll, musst du dich erneut verbinden. Weitere Informationen findest du auf der Seite über die Verwendung von MakeCode [offline](/offline).

## Kann ich Erweiterungen verwenden, wenn ich nicht mit dem Internet verbunden bin?

Ja, es ist möglich, Erweiterungen zu speichern, damit deine Programme diese weiterhin verwenden können, wenn du offline bist. Folge [diesen Anweisungen](/offline#extensions).

## Was passiert, wenn ich den Cache und temporäre Dateien des Browsers leere? #clear-data

Wenn du Browserdaten löschst, werden alle gespeicherten Projekte und Dateien, die MakeCode unterstützen, offline gelöscht. Jedes Projekt, das du an die öffentliche Cloud weitergegeben hast, ist immer noch da.

## Wohin geht ein Projekt, das ich teile? #sharing

Wenn du ein Projekt teilst, wird es in der öffentlichen Cloud für MakeCode gespeichert. Alle, die den Link zum Projekt haben, können es sehen.

## Was sind zusätzliche Möglichkeiten, wie ich Projekte mit Lehrern und Freunden teilen kann? #share-options

* Verwende den Teilen-Button, um dein Projekt in der MakeCode-Cloud zu veröffentlichen. Du kannst die Freigabe-URL an jeden senden.
* Die Freigabe-URL kann in eine OneNote-Seite eingefügt oder als eingebetteter Link auf einer Website eingefügt werden. In einigen Fällen wird der Link automatisch in eine schreibgeschützte Ansicht deines Projekts erweitert.
* Du kannst das Projekt speichern und auf eine Klassenwebseite oder an einen zugelassenen Ort im Klassen- oder Schulnetzwerk kopieren.
* Du kannst Code kopieren und Code in die JavaScript-Ansicht des Editors einfügen. Hiermit verschiebst du Code zwischen MakeCode und anderen Anwendungen auf deinem Computer oder Gerät.

## Warum verwendet der Editor noch den vorherigen Projektnamen, wenn ich die Download-Datei umbenannt habe?

Wenn du das Programm für dein Projekt herunterlädst, wird der Name des Projekts Teil der Download-Datei. Wenn du die Download-Datei umbenennen möchtest, wird der nicht der aktuelle Dateiname sondern der Namen den du für das Projekt gewählt hast vom Editor verwendet und angezeigt.

## Ich habe gerade eine neue Übersetzung in Crowdin hinzugefügt / genehmigt, wann wird sie erscheinen?

[Übersetzungen](https://makecode.com/translate) werden von der [Crowdin](https://crowdin.com/project/makecode) Seite verwaltet. Es gibt einen geplanten Prozess, der auf neue Übersetzungen in Crowdin prüft und sie auf die Webseite bringt, die einen MakeCode-Editor bereitstellt. Der Vorgang dauert in der Regel 10 - 30 Minuten, wenn eine neue Übersetzung genehmigt wird, bis sie in einem Online-Editor erscheint.

## Wo ist der "Paket hinzufügen"-Button?

Pakete wurden in **Erweiterungen ** umbenannt, um sich an andere Code-Editoren anzupassen. Du wirst jetzt das **Erweiterungen** Menü finden, das den **Paket hinzufügen** Button ersetzt.

## Wie kann ich Tutorials teilen? #share-Tutorials

Tutorials laden im Editor, was es schwer machen kann sie zu teilen. Wenn du einen direkten Link zu einem Tutorial erstellen möchtest, musst du den Ort des Tutorials in der Dokumentation des Ziels finden. Von dort aus kannst du einen Link erstellen, der direkt zum Tutorial führt. Um zum Beispiel einen Link zu micro:bit's `Blinkendes Herz` Tutorial zu erstellen, musst du...

1. Finde das Tutorial in der Dokumentation: <https://makecode.microbit.org/projects/flashing-heart>.
2. Nimm diese URL und teile sie in zwei Teile auf: die Haupt-Domain (`https://makecode.microbit.org`) und den Ort des Tutorials (`/projects/flashing-heart`).
3. Zwischen diesen beiden Teilen füge `/#tutorial:` ein: <https://makecode.microbit.org/#tutorial:/projects/flashing-heart>.

Wenn du auf das GitHub Repository für das Ziel schaust, wird der Link folgendermaßen:

    https://[editor url]/#tutorial:/[Tutorialposition im Dokumentenordnerr]
    

Wenn du dein eigenes Tutorial erstellen möchtest, findest du hier [hier](https://makecode.com/writing-docs/user-tutorials) mehr Dokumentation.

## Ich bin Lehrer. Gibt es etwas Besonderes, was ich wissen sollte?

Ja! Wir haben eine Liste von Tipps und Tricks für Lehrer vorbereitet. [Schau dir das an](/teachers).

## Wie kann ich den Ordner auswählen, in dem meine heruntergeladenen Projekte gespeichert werden?

Bei den meisten Browsern kannst du eine Einstellung aktivieren, bei der der Browser dich zunächst fragen muss, wo du deine Dateien speichern möchtest, bevor sie heruntergeladen werden.

* In Microsoft Edge öffnest du das Browser-Menü und wählst **Einstellungen**. Scrolle im Einstellungsbereich "Allgemein" nach unten zum Abschnitt **Downloads**. Schalte die Einstellung "Fragen, was mit jedem Download zu tun ist" **EIN**.
* In Chrome gehe zu **Einstellungen** im Browser-Menü. Klicke auf der Seite "Einstellungen" auf **Erweitert** um weitere Einstellungen anzuzeigen. Unter den erweiterten Einstellungen findest du den Abschnitt **Downloads**. In diesem Abschnitt schaltest du die Einstellung "Vor dem Download von Dateien nach dem Speicherort fragen" **EIN**.

## #specific

## Ich sehe meine Frage hier nicht. Was kommt als Nächstes?

Du kannst deine Frage nicht finden? Bitte besuche unsere [Support](/support)-Seite.