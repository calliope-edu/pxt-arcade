# Einfache Erweiterungen
### @explicitHints true

## {Einführung @showdialog}

Mit Erweiterungen können Arcade-Nutzer ganz einfach Teile ihres Codes entwickeln und mit anderen teilen. 
In diesem Tutorial benutzt du die Erweiterung ``||corgio:corgio||``, um ein einfaches Jump-'n'-Run-Spiel zu bauen. 

Die Erweiterung ist in diesem Tutorial schon geladen, aber du kannst sie auch 
in andere Projekte laden, so wie unten gezeigt.

![Corgio-Erweiterung hinzufügen](/static/tutorials/simple-extensions/add-corgio.gif)



## {Schritt 2}

Als Erstes erstellen wir unseren Corgio. 

---



- :paw: Öffne ``||corgio:Corgi||`` und suche <br/> 
``||variables(corgio):set myCorg to||``<br/>
und ziehe ihn in den Container ``||loops(noclick):beim Start||``, der schon im Arbeitsbereich liegt. 

---

Der Corgi sollte auf der linken Seite des Bildschirms erscheinen.


#### ~ tutorialhint

```blocks
//@highlight
let myCorg: Corgio = corgio.create(SpriteKind.Player)
```

## {Schritt 3}

Jetzt lassen wir unsere Spielfigur mit den Pfeiltasten des Controllers nach links und rechts laufen. 

---

- :paw: Füge <br/> 
``||corgio:make myCorg move left and right with arrow keys||``  <br/> 
und <br/>
``||corgio:make myCorg jump if up arrow key is pressed||`` <br/> 
unter ``||variables(noclick):set myCorg to||`` hinzu.

#### ~ tutorialhint

```blocks
let myCorg: Corgio = corgio.create(SpriteKind.Player)
//@highlight
myCorg.horizontalMovement()
//@highlight
myCorg.verticalMovement()
```

## {Schritt 4}

Der Corgio ist ein bisschen langweilig, wenn sich sein Bild nie ändert.

---

- :paw: Um das zu ändern, nimm <br/>
``||corgio:change image when myCorg is moving||``<br/>
und lege ihn irgendwo unter <br/>
``||variables(noclick):set myCorg to||``.


#### ~ tutorialhint

```blocks
let myCorg: Corgio = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()

//@highlight
myCorg.updateSprite()
```

## {Schritt 5}

Lass uns mit einer Tilemap eine Szene zum Spiel hinzufügen.

~hint Was ist eine Tilemap? 🤷🏽‍♀️

---

Eine Tilemap ist eine Spielkarte, die aus einzelnen Kacheln besteht. Du kannst Bilder in Felder setzen 
und einige dieser Felder mit Wänden fest machen. Für dieses Tutorial wurde schon eine Tilemap hinzugefügt, aber
du kannst auch deine eigene erstellen!

- Stelle die Größe der Tilemap auf ``20x8``
- Zeichne ein paar Plattformen, auf denen der Corgi stehen kann
- Klicke auf das Wand-Symbol, um deine Plattformen mit roten Wänden zu bedecken

(Keine Sorge, die rote Markierung ist beim Spielen nicht zu sehen.)

![Animation, die zeigt, wie dieser Schritt fertig aussieht](/static/tutorials/simple-extensions/create-tilemap.gif)


hint~

---

- :tree: Füge aus der Kategorie ``||scene:Szene||`` <br/>
den Block <br/>
``||scene:setze Tilemap auf||`` <br/>
in den Container ``||loops(noclick):beim Start||`` ein.

#### ~ tutorialhint

```blocks
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()

//@highlight
tiles.setTilemap(tilemap`level_0`)
```

## {Schritt 6}

Die Kamera soll dem Corgio folgen, wenn er den Bildschirm verlässt.

---

- :paw: Nimm <br/>
``||corgio:make camera follow myCorg left and right||`` <br/>
und lege ihn irgendwo unter <br/>
``||variables(noclick):set myCorg to||``.



#### ~ tutorialhint

```blocks
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
tiles.setTilemap(tilemap`level_0`)
//@highlight
myCorg.cameraFollow()
```

## {Schritt 7}

Am Ende der Tilemap brauchen wir eine Spalte aus einer anderen Kachel als alle übrigen Kacheln der Karte.
Sie ist das Ziel für den Spieler.

---

- :mouse pointer: Klicke auf das Tilemap-Symbol im <br/>
``||scene(noclick):setze Tilemap auf||``-Block <br/>
im Arbeitsbereich. 

- :paint brush: Füge eine komplette Spalte aus Kacheln hinzu, die sonst nirgends im 
Spiel vorkommen ... aber füge **keine** Wand-Markierung hinzu! Der Corgi muss durch diese Kacheln hindurchlaufen können.  


![Animation, die zeigt, wie dieser Schritt fertig aussieht](/static/tutorials/simple-extensions/corgi-column.gif)



#### ~ tutorialhint

![Animation, die zeigt, wie dieser Schritt fertig aussieht](/static/tutorials/simple-extensions/corgi-column.gif)



## {Schritt 8}

Lass uns einen **SIEG** auslösen, wenn der Corgi die neue Spalte erreicht.

---

- :tree: Öffne ``||scene:Szene||`` und füge <br/>
``||scene:wenn Sprite vom Typ Player überlappt [ ] bei Position||``<br/>
zum Arbeitsbereich hinzu. 

- :mouse pointer: Klicke auf die karierte Kachel und wähle die Kachel aus, die du als Ziel benutzt hast.

- :circle: Füge in den Überlappungs-Container einen<br/>
``||game:Game over <LOSE>||``<br/>
Block ein.

- :mouse pointer:  Klicke auf ``LOSE``, um es in ``WIN`` zu ändern.


#### ~ tutorialhint

```blocks
//@highlight
scene.onOverlapTile(SpriteKind.Player, sprites.builtin.coral0, function (sprite, location) {
    game.gameOver(true)
})
let myCorg = corgio.create(SpriteKind.Player)
myCorg.horizontalMovement()
myCorg.verticalMovement()
myCorg.updateSprite()
myCorg.cameraFollow()
tiles.setTilemap(tilemap`level_1`)
```

## {Geschafft}

**Glückwunsch!! Dein einfaches Jump-'n'-Run-Spiel ist fertig! **

Probier mal, ob du die Spalte am Ende des Levels erreichst.



```blockconfig.global

tiles.setTilemap(tilemap`level_0`)

```


```jres
{
    "transparency16": {
        "data": "hwQQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==",
        "mimeType": "image/x-mkcd-f4",
        "tilemapTile": true
    },
    "level_0": {
        "id": "level_0",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxNDAwMDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDIyMjIwMjAwMDAwMDAwMDAwMDAwMDAwMDAwMjIyMjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMjIyMjIyMjIyMDIwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.builtin.oceanDepths4",
            "sprites.builtin.oceanDepths0"
        ]
    },
    "level_1": {
        "id": "level_1",
        "mimeType": "application/mkcd-tilemap",
        "data": "MTAxNDAwMDgwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDMwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMjAyMDIwMjAwMDMwMDAxMDEwMTAxMDEwMTAwMDAwMDAwMDAwMDAwMDAwMjAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAxMDEwMTAxMDIwMjAyMDIwMDAwMDAwMzAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMDAwMDAwMDAwMDAwMDMwMTAxMDEwMTAxMDEwMTAxMDEwMTAxMDIwMDAwMDAwMDAwMDAwMDAzMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDAyMjIyMDAyMDIyMjIwMjAwMDAwMDIwMDAwMDAwMDAwMDAwMjIyMjIyMjIwMDAwMDAwMDAwMDAwMDAwMDIwMDAwMDAyMjIyMjIyMjIyMjIwMDAwMDAwMA==",
        "tileset": [
            "myTiles.transparency16",
            "sprites.builtin.oceanDepths4",
            "sprites.builtin.oceanDepths0",
            "sprites.builtin.coral0"
        ]
    },
    "*": {
        "mimeType": "image/x-mkcd-f4",
        "dataEncoding": "base64",
        "namespace": "myTiles"
    }
}
```

```package
corgio
```
