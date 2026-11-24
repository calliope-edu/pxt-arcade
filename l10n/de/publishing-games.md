# Veröffentlichen von Spielen

Diese Seite beschreibt verschiedene Möglichkeiten, dein Spiel zu veröffentlichen und es von Freunden spielen zu lassen.

## MakeCode teilen

Der einfachste Weg, dein Spiel zu veröffentlichen, ist den **Teilen** Button im Editor zu drücken. Es wird eine einzigartige URL erstellt, die dieses Spiel lädt. Dies ist ein großartiger Anfang und ist reibungslos.

## GitHub-Repository

Die Kehrseite der Standardfreigabe ist, dass sich der Link bei jeder Veröffentlichung ändert. Wenn du vorhast dein Spiel zu iterieren, kannst du GitHub verwenden, um dein Spiel zu verbessern. Wenn du auf GitHub veröffentlichst, hast du eine stabile URL mit einem Vollbilderlebnis.

* im MakeCode auf **GitHub** klicken (neben dem **Speichern** Button)
* übertrage deine Änderungen
* Klicken auf **Release erstellen,** um das kompilierte Projekt in dein Repository hochzuladen
* **Projekt öffnen** klicken, um auf die GitHub-Seiten deines Projektarchivs zu navigieren (https://OWNER.github.io/REPOSITORY_NAME für Repository https://github.com/OWNER/REPOSITORY_NAME)

Ein Beispiel eines exportierten Spiels findest du unter https://microsoft.github.io/pxt-kickoff/.

### Einbetten und keine Fußzeile

The website generated above supports a few query parameters. These can be added to the end of the url after a `?` to change what is shown.

* `nofooter=1`: Entfernt die Fußzeile von der Seite, so dass nur der Simulator angezeigt wird
* `embed=1`: makes the background transparent for use when embedding the page

For example, these can be used when embedding the page on another platform similar to the share page:

```html
<div>
  <iframe
    style="position:absolute;top:0;left:0;width:100%;height:100%;"
    src="https://microsoft.github.io/pxt-kickoff/?embed=1&nofooter=1"
    allowfullscreen="allowfullscreen"
    sandbox="allow-popups allow-forms allow-scripts allow-same-origin"
    frameborder="0"
  ></iframe>
</div>
```

## Itch.io

[itch.io](https://itch.io) ist eine beliebte Indie Game Webseite. Um ein Spiel hochzuladen, klicke auf den Pfeil mit deinem Benutzernamen und wähle dann 'Neues Projekt hochladen'. Wenn du dich an einem Game-Jam beteiligst, klicke auf 'Projekt senden' auf der Game-Jam-Seite dann auf 'Spiel hochladen' im Dialog, der erscheint. Von hier aus gibt es einige Möglichkeiten, ein MakeCode Arcade Spiel zu verknüpfen.

### Manueller Upload

Klicke bei deinem Spiel im MakeCode Arcade Editor auf das Symbol Speichern in der unteren Symbolleiste (neben dem Namen deines Projektes). Stelle sicher, dass du deinen Kanal als `HTML` markierst. Wähle in itch.io als Projekt 'Downloadable' aus und klicken auf 'Dateien hochladen', um die PNG-Detei deines Spiels hochzuladen. Füge Titel, Titelbild und andere Details hinzu, wenn du sie hast!

### Share URL

Klicke im MakeCode Arcade Editor oben links auf 'Teilen' und dann auf 'Projekt veröffentlichen'. Kopiere die generierte URL und kehre zur itch.io 'Neues Projekt erstellen' Seite zurück. Wähle 'Downloadbar' als Projekttyp aus und fügen die URL in dein Spiel in der Beschreibung ein. Dann füllen zusätzliche Details über dein Spiel aus!

### HTML-Einbettung

Embedding the game in itch.io is a little more complex, but will allow folks to play your game on the itch.io page directly! In the MakeCode Arcade editor, click 'Share' in the top left, then 'Publish Project'. Unten im Dialog 'Projekt teilen' siehst du einen blauen '> Embed'-Link. Klicke auf diesen Link und wählen die Registerkarte Simulator. Kopiere den generierten Embed-Code in eine Textdatei und speichere ihn als `[dein game].html`

Wähle auf der itch.io 'Erstelle ein neues Projekt' Seite 'HTML' als Projekt. Klicke auf die Schaltfläche 'Dateien hochladen', um deine HTML-Datei hochzuladen und aktiviere 'Diese Datei wird im Browser abgespielt'. Unter "Optionen einbetten" empfehlen wir:
* füge eine `.github/workflows/itch.io.yml` Datei in dein Repository mit dem folgenden Inhalt hinzu
* Wähle die Kontrollkästchen 'Mobile Friendly', 'Automatisch starten' und 'Vollbild-Schaltfläche'.

Fülle alle weiteren Details über dein Spiel aus und klicke auf veröffentlichen!

### Manueller Upload

Zippe den Inhalt des `Assets` Ordners und lade diesen in dein itch.io Projekt hoch. Stelle sicher, dass du deinen Kanal als `HTML` markierst.

### Automatischer Upload

Du kannst auch dein GitHub Repository in jedem Release automatisch auf itch.io hochladen.

* add a `.github/workflows/itch.io.yml` file in your repository with the following content

```
# Workflow that pushes compiled game to itch.io
# Add a secret BUTLER_API_KEY to the project to enable uploading.
# If needed update user and project name in script.
name: itch.io
on:
  push:
    branches: master
    paths: assets/**
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v1
      - name: install butler
        run: |
          curl -L -o butler.zip https://broth.itch.ovh/butler/linux-amd64/LATEST/archive/default
          unzip butler.zip
          chmod +x butler
      - name: push to itch.io
        run: |
          if [ "$BUTLER_API_KEY" != "" ]; then
            ./butler push assets $ITCH_IO_PROJECT:$ITCH_IO_CHANNEL --userversion-file assets/version.txt
          fi
        env:
          BUTLER_API_KEY: ${{ secrets.BUTLER_API_KEY }}
          ITCH_IO_PROJECT: USER/PROJECT
          ITCH_IO_CHANNEL: HTML
```

* aktualisiere den `ITCH_IO_PROJECT` Eintrag in der Datei, so dass er deinem `user/project` in itch.io entspricht.
* folge den Anweisungen auf https://itch.io/docs/butler/login.html um den **butler** Autorisierungs-Token zu erhalten und als geheimen `BUTLER_API_KEY` in deinem Repository hinzuzufügen.

Dein Repository ist bereit. Gehe zurück zu MakeCode Arcade und erstelle eine neue Version deines Spiels, um den Workflow zu starten.
