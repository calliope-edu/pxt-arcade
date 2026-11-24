# Ein Haufen Stöcke
### @explicitHints true


## prähistorisch (Adjektiv) @showdialog


_prä-his-to-risch_

: aus einer Zeit, bevor Menschen etwas aufgeschrieben haben

---

Mit diesem Tutorial erstellst du dein eigenes Spiel. Es spielt in der Nähe des prähistorischen Berges Karmel in Israel, und dein Ziel ist es, ein Feuer zu entfachen, bevor der Wind deine Funken wegweht.

![Lagerfeuer-Funken](/static/skillmap/sparks/sparks1.gif "Lass uns Funken erzeugen")




## {2. Dein erster Block}

**Bereit zum Programmieren?**

Lass uns als Kulisse eine Höhle in der Nähe der Berge bauen.


- :tree: Geh **im Werkzeugkasten** zur Kategorie ``||scene: Szene||`` und nimm <br/>
``||scene:setze Hintergrundbild auf [ ]||``<br/>
Ziehe ihn dann in den leeren <br/>
``||loops(noclick): beim Start||`` <br/>
Block, der schon im Arbeitsbereich liegt.



~hint Was heißt das? 🤷🏽

---

In den Anleitungen heben wir manchen Text hervor, damit du besser weißt, wonach du suchen sollst.

Wenn wir zum Beispiel den Block <br/>
``||scene:setze Hintergrundbild auf [ ]||``<br/>
vorschlagen, meinen wir diesen hier: <br/>

```block
scene.setBackgroundImage(img`.`)
```

hint~


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(img`.`)
```


## {3. Wähle die Höhle}

**Wähle einen Höhlen-Hintergrund.**

- :paint brush: Klicke auf das leere Feld und wechsle zur **Galerie**
![Zur Galerie wechseln](/static/skillmap/assets/gallery.png "zum Galerie-Fenster wechseln")
<br/>Wähle einen der Höhlen-Hintergründe.<br/>
![Wähle den Hintergrund, der aussieht wie ein Hintergrund voller Löcher.](/static/skillmap/sparks/cave.png "Wähle eine Höhle aus Meine Assets.")
<br/>Klicke dann auf **Fertig**.





#### ~ tutorialhint

```blocks
scene.setBackgroundImage(sparks.background)
```



## {4. Überprüfe dein Spiel!}


- :binoculars: Schau dir dein Projekt im Spielfenster an und sieh, was sich verändert hat!

Du solltest einen Höhlen-Hintergrund mit einer leeren Feuerstelle in der Mitte sehen.


![Das Spielfenster findest du unten rechts](/static/skillmap/sparks/game.png "Klicke auf das kleine Spielfenster, um das große Spielfenster zu öffnen.")








## {5. Füge das Sprite hinzu}


Lass uns unserem Spiel ein **SPRITE** hinzufügen, das wie Anzündholz aussieht.

~hint Was ist ein Sprite? 💡

---

In Arcade heißt jede Figur und jedes Bild, das etwas tut, **SPRITE**.

Sprites haben Eigenschaften, die du nutzen und ändern kannst — zum Beispiel Größe, Position und Lebensdauer.

Auch unser Feuerholz wird ein Sprite.

hint~

<br/>

- :paper plane: Nimm **im Werkzeugkasten** aus der Kategorie ``||sprites: Sprites||`` den Block <br/>
``||variables(sprites):setze [kindling] auf Sprite [ ] vom Typ [Player]||``<br/>
und ziehe ihn **ganz nach unten** in den ``||loops(noclick): beim Start||`` Block, der schon im Arbeitsbereich liegt.


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(sparks.background)
//@highlight
let kindling = sprites.create(img`.`, SpriteKind.Player)
```



## {6. Wähle das Anzündholz}


- :mouse pointer: Klicke auf das leere Quadrat im neuen Block und wechsle zur
**Galerie**.

![Zur Galerie wechseln](/static/skillmap/assets/gallery.png "zum Galerie-Fenster wechseln")

- :mouse pointer: Wähle **pile1** (das ist der größte Stöckehaufen in der Galerie) und klicke auf **Fertig**.



#### ~ tutorialhint

```blocks
scene.setBackgroundImage(sparks.background)
//@highlight
let kindling = sprites.create(sparks.pile1, SpriteKind.Player)
```




## {7. Überprüfe dein Spiel!}


- :binoculars: Schau dir dein Projekt im Spielfenster an!

Du solltest einen Haufen Anzündholz sehen, der über dem Boden schwebt.




## {8. Platziere das Anzündholz}

Lass uns das **Anzündholz** an der steinernen Feuerstelle ausrichten.

- :paper plane: Nimm aus der Kategorie ``||sprites:Sprites||`` den Block <br/>
``||sprites:setze Position von [kindling] auf x [70] y [80]||`` <br/>
und ziehe ihn **ganz nach unten** in den ``||loops(noclick): beim Start||`` Block, der schon im Arbeitsbereich liegt.


#### ~ tutorialhint

```blocks
scene.setBackgroundImage(sparks.background)
let kindling = sprites.create(sparks.pile1, SpriteKind.Player)
//@highlight
kindling.setPosition(70, 80)
```




## {9. Funken schlagen}

🔥 **Erzeuge Funken** 🔥

- :game: Nimm **im Werkzeugkasten** aus der Kategorie ``||controller: Controller||`` den Block <br/>
``||controller: wenn [A] Knopf [gedrückt]||`` <br/>
und lege ihn auf eine freie Stelle im Arbeitsbereich.


Das ist ein **EREIGNIS**-Block. Er sorgt dafür, dass die **AKTION** darin jedes Mal ausgeführt wird, wenn der (A)-Knopf gedrückt wird.

~hint Erzähl mir mehr über Ereignisse! 💡

---

Ereignisse sind Dinge, die passieren können (oder auch nicht), während der Code läuft. Ein Spieler drückt vielleicht einen Knopf, ein Timer läuft ab oder ein Sprite überlappt ein anderes.

Jedem dieser Ereignisse kannst du in Arcade eine besondere Aktion zuordnen.

hint~


#### ~ tutorialhint

```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () { })
```



## {10. Punkte hinzufügen}

Jetzt können wir jedes Mal einen Punkt dazuzählen, wenn der (A)-Knopf gedrückt wird.

Das ist die **AKTION**, die zu unserem **EREIGNIS** gehört.


- :id card: Nimm im Werkzeugkasten aus der Kategorie ``||info: Info||`` den Block <br/>
``||info: ändere Punktzahl um [1]||`` <br/>
und ziehe ihn in den leeren <br/>
``||controller(noclick): wenn [A] Knopf [gedrückt]||`` <br/>
Block, der schon im Arbeitsbereich liegt.



#### ~ tutorialhint
```blocks
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    //@highlight
    info.changeScoreBy(1)
})
```




## {11. Feuer hinzufügen}

Zum Schluss fügen wir bei jedem Klick einen Funken-Effekt hinzu.


- :paper plane: Nimm im Werkzeugkasten aus der Kategorie ``||sprites: Sprites||`` den Block <br/>
``||sprites: [kindling] beginne [Feuer] Effekt||`` <br/>
und ziehe ihn an eine beliebige Stelle im <br/>
``||controller(noclick): wenn [A] Knopf [gedrückt]||`` <br/>
Block, der schon im Arbeitsbereich liegt.


#### ~ tutorialhint
```blocks
let kindling: Sprite = null
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    //@highlight
    kindling.startEffect(effects.fire)
})
```




## {12. Überprüfe dein Spiel!}


- :binoculars: Schau dir dein Projekt im Spielfenster an!

Jedes Mal, wenn du den (A)-Knopf drückst, sollten Funken dein Anzündholz entzünden. Außerdem solltest du bei jedem Klick einen Punkt bekommen.




## {13. Ein bisschen sanfter}

Im Moment entstehen die Funken zu schnell. Lass uns das ändern.

- :mouse pointer: Klicke auf das weiße Pluszeichen rechts neben dem <br/>
``||sprites: [kindling] beginne [Feuer] Effekt||`` <br/>
Block.


#### ~ tutorialhint
```blocks
let kindling: Sprite = null

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    info.changeScoreBy(1)
    //@highlight
        kindling.startEffect(effects.fire, 500)
})
```




## {14. Spiel!}

- :binoculars: Schau dir an, was du gebaut hast!

Wie viele Punkte schaffst du in zwanzig Sekunden?




## {15. Geschafft}

**🪵 Super gemacht 🪵**

Du hast ein Klick-Spiel erstellt.


~hint Wie kann ich mein Spiel teilen?💡

---

**Möchtest du dein Spiel teilen?**

Klicke auf „Fertig“, um zurück zur Skillmap zu gelangen. Unten rechts findest du dann den Teilen-Knopf.

![Teile deine Karte](/static/skillmap/sparks/share.gif )

hint~


Wenn du bereit bist, klicke auf **Fertig**, um zur Skillmap zurückzukehren. Dort kannst du eine Möglichkeit zum Gewinnen oder Verlieren hinzufügen!


```blockconfig.global
info.onScore(30, function () {})
game.gameOver(true)
let kindling = sprites.create(img`.`, SpriteKind.Player)
kindling.setPosition(70, 80)
kindling.startEffect(effects.fire)

```


```ghost

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        info.changeScoreBy(1)
        kindling.startEffect(effects.fire, 500)
})
info.onScore(30, function () {
    game.gameOver(true)
})
let kindling: Sprite = null
scene.setBackgroundImage(sparks.background)
kindling = sprites.create(sparks.pile1, SpriteKind.Player)
kindling.setPosition(70, 80)
```




```package
arcade-carnival=github:microsoft/arcade-carnival
arcade-storytelling=github:microsoft/arcade-storytelling
arcade-text=github:microsoft/arcade-text
sparks=github:kiki-lee/sparks#v0.0.4
```



```customts
namespace game {
    /**
     * This is a reporter block that returns
     * the number of seconds since the game started
     */
    //% block="time since start (tenths) "
    export function timeSinceStartSec(): number {
        return game.runtime()/100;
    }
}
```