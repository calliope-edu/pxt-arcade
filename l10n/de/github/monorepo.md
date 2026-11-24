# Mono-Repository

## ~ hint

Dies ist eine neue Funktion, die in den freigegebenen Editoren noch nicht verfügbar ist.

## ~

Es ist möglich, mehrere MakeCode **verschachtelte Erweiterungen** im gleichen GitHub Repository zu speichern. Wenn Sie sehr große Pakete haben, oder zu viele von ihnen, sollten Sie diese Lösung in Erwägung ziehen.

## Wie es funktioniert

Eine MakeCode-Erweiterung in einem GitHub Repository hat eine beliebige Anzahl verschachtelter Erweiterungen in Unterordnern. **Eine Top-Level-Erweiterung ist erforderlich.**

Die Dateistruktur einer Erweiterung mit 2 Unter-Erweiterungen, `Schaltfläche` und `Schieberegler` könnte wie folgt erscheinen:

```
/pxt.json // die Haupterweiterung kann eine Dummy-Datei sein
/button/pxt.json
           /...
/slider/pxt.json
           /...        
```

## Wie erstelle ich eine neue verschachtelte Erweiterung?

Erstellen Sie zuerst ein GitHub Projekt der obersten Ebene mit MakeCode. Sobald dies erledigt ist, ist es einfach, neue verschachtelte Repositories hinzuzufügen:

Auf der Startseite,

* klicken Sie auf **Importieren** und dann <0>URL importieren**</li>
* geben Sie die GitHub-Repository-URL inklusive Pfad ein

    https://github.com/owner/name/path</ul>

MakeCode wird ein verschachteltes Projekt für Sie generieren.

## Wie referenziere ich auf eine verschachtelte Erweiterung?

Sie können die verschachtelte Erweiterung über den Dialog **Erweiterung hinzufügen** hinzufügen, indem Sie den Ordnerpfad zur Repo-Url hinzufügen:

    https://github.com/owner/name/path

Die Referenz-Syntax in `pxt.json` wird ähnlich aussehen wie existierende Github-Referenzen, mit dem hinzugefügten Pfad:

```
    "dependencies": {
        ...
        "button": "github:contoso/ui/button",
    }
```
