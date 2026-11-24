# Ein Haufen Stöcke
### @explicitHints true


## {Einführung @showdialog}

Dein Code aus der letzten Aktivität ist schon im Arbeitsbereich.

Lass uns Code hinzufügen, mit dem man gewinnen oder verlieren kann.


![Die Zeit läuft](/static/skillmap/sparks/sparks2.gif "Lass uns Bedingungen zum Gewinnen und Verlieren hinzufügen." )




## {2. Spiel dein Spiel}


**Spiel das Klick-Spiel!**

Drücke den (A)-Knopf oder die **Leertaste** und sieh zu, wie die Punktzahl steigt!




~hint Mein Spiel funktioniert nicht ⚠️

---

Wenn dein Code nicht funktioniert und du nicht herausfindest, warum, klicke auf
<br/>„Meinen Code ersetzen“<br/>
Dann werden die Blöcke in deinem Arbeitsbereich durch neuen Startcode ersetzt.

hint~





## {3. Gewinnen}

**Füge ein Punktzahl-Ereignis hinzu.**

- :id card: Ziehe aus der Kategorie ``||info:Info||`` den Block<br/>
``||info:bei Punktzahl [30]||``<br/>
auf eine **freie Stelle** im Arbeitsbereich.



#### ~ tutorialhint

```blocks
info.onScore(30, function () {})
```



## {4. Spielende}

**Gewinne das Spiel, wenn die Punktzahl 30 erreicht.**

- :circle: Ziehe aus der Kategorie ``||game:Spiel||`` den Block<br/>
``||game:Spielende <GEWONNEN>||``<br/>
in den **leeren** <br/>
``||info(noclick):bei Punktzahl [30]||`` Container.



#### ~ tutorialhint

```blocks
info.onScore(30, function () {
    game.gameOver(true)
})
```






## {5. Überprüfe dein Spiel!}


- :binoculars: Probiere dein Projekt im Spielfenster aus.

Drücke den (A)-Knopf so schnell du kannst. Wenn deine Punktzahl 30 erreicht, solltest du das Spiel gewinnen.




## {6. Sekunden zählen}

Im Moment ist die Gewinnpunktzahl immer 30. Lass uns die Endpunktzahl in die Zeit ändern, die du zum Gewinnen gebraucht hast, und dann die „niedrigste“ Punktzahl feiern.

- :id card: Ziehe aus der Kategorie ``||info:Info||`` den Block<br/>
``||info:setze Punktzahl auf [0]||``<br/>
**ganz nach oben** in den<br/>
``||info(noclick):bei Punktzahl [30]||`` Container, der schon im Arbeitsbereich liegt.

- :circle: Ziehe aus der Kategorie ``||game:Spiel||`` den Block<br/>
``||game:time since start (tenths)||``<br/>
und ersetze damit die **0** im <br/>
``||info(noclick):setze Punktzahl auf [0]||`` Block.



#### ~ tutorialhint

```blocks
info.onScore(30, function () {
    //@highlight
    info.setScore(game.timeSinceStartSec())
    game.gameOver(true)
})
```




## {7. Die Niedrigste gewinnt}


- :circle: Ziehe aus der Kategorie ``||game:Spiel||`` den Block<br/>
``||game:[Highscore] als beste Punktzahl verwenden||``<br/>
**ganz nach oben** in den<br/>
``||info(noclick):bei Punktzahl [30]||`` Container, der schon im Arbeitsbereich liegt.

- :mouse pointer: Klicke auf ``||game:Highscore||`` und wähle
``||game: niedrige Punktzahl||`` aus dem Dropdown-Menü.



#### ~ tutorialhint

```blocks
info.onScore(30, function () {
    //@highlight
    game.setGameOverScoringType(game.ScoringType.LowScore)
    info.setScore(game.timeSinceStartSec())
    game.gameOver(true)
})
```




## {8. Verlieren}


**Zeit für eine Herausforderung!** <br/>
❤️‍🔥 ❤️‍🔥 ❤️‍🔥

Es ist zu leicht, 30 Punkte zu erreichen. Lass uns jede Sekunde einen Punkt abziehen, um das Ganze spannender zu machen.


- :circle: Ziehe aus der Kategorie ``||game:Spiel||`` den Block<br/>
``||game: wenn Spielupdate alle [500] ms||``<br/>
auf **eine freie Stelle** im Arbeitsbereich.

- :mouse pointer: Ändere **500** ms in **1000** ms (das ist genau 1 Sekunde).



#### ~ tutorialhint

```blocks
game.onUpdateInterval(1000, function () { })
```


## {9. Verlieren}


- :id card: Ziehe aus der Kategorie ``||info:Info||`` den Block<br/>
``||info: ändere Punktzahl um [1]||``<br/>
in den **leeren**<br/>
``||game(noclick): wenn Spielupdate alle [1000] ms||``<br/>
Container, der schon im Arbeitsbereich liegt.

- :mouse pointer: Ändere **1** in **-1**, um einen Punkt abzuziehen.



#### ~ tutorialhint

```blocks
game.onUpdateInterval(1000, function () {
//@highlight
        info.changeScoreBy(-1)
})
```





## {10. Überprüfe dein Spiel!}


- :binoculars: Probiere dein Projekt im Spielfenster aus.

Drücke den (A)-Knopf so schnell du kannst und schau, ob du 30 Punkte erreichst, bevor dir zu viele Punkte abgezogen werden.





## {11. Genug ist genug}

Lass uns eine Möglichkeit hinzufügen, das Spiel zu verlieren, wenn die Punktzahl zu weit unter null fällt.

🕰️ 🕰️ 🕰️

- :id card: Ziehe aus der Kategorie ``||info:Info||`` den Block<br/>
``||info:bei Punktzahl [30]||``<br/>
auf eine **freie Stelle** im Arbeitsbereich.

- :mouse pointer: Klicke in den leeren Container und ändere **30** in **-5**.


#### ~ tutorialhint

```blocks
info.onScore(-5, function () { })
```




## {12. Genug ist genug}



- :circle: Ziehe aus der Kategorie ``||game:Spiel||`` den Block<br/>
``||game:Spielende <GEWONNEN>||``<br/>
in den **leeren** <br/>
``||info(noclick):bei Punktzahl [-5]||`` Container.

- :mouse pointer: Klicke auf **`<GEWONNEN`>** und ändere es in **`<VERLOREN`>**.



#### ~ tutorialhint

```blocks
info.onScore(-5, function () {
    //@highlight
    game.gameOver(false)
})
```






## {13. Überprüfe dein Spiel!}


- :binoculars: Schau dir das Spielfenster an.

Drücke keine Knöpfe oder Tasten ... nach fünf Sekunden solltest du das Spiel verlieren.



## {14. Nochmal spielen}


- :binoculars: Starte dein Spiel neu und spiel noch einmal!

Drücke den (A)-Knopf so schnell du kannst. Ist es jetzt schwerer zu gewinnen?




## {9. Geschafft}

**👨🏽‍🚒 Du bist FEUER und FLAMME 👨🏽‍🚒**

Was für ein tolles Spiel du da hast!


~hint Wie kann ich mein Spiel teilen?💡

---

**Möchtest du dein Spiel teilen?**

Klicke auf „Fertig“, um zurück zur Skillmap zu gelangen. Unten rechts findest du dann den Teilen-Knopf.

![Teile deine Karte](/static/skillmap/sparks/share.gif )

hint~


Wenn du bereit bist, klicke auf **Fertig**, um zur Skillmap zurückzukehren und deine Belohnung abzuholen!

<!--so you can
add levels to your game! -->


```blockconfig.global
info.onScore(30, function () {})
game.gameOver(true)
let kindling = sprites.create(img`.`, SpriteKind.Player)
kindling.setPosition(70, 80)
kindling.startEffect(effects.fire)

info.onScore(30, function () { })
```

```template

controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
        info.changeScoreBy(1)
        kindling.startEffect(effects.fire, 500)
})

let kindling: Sprite = null
scene.setBackgroundImage(sparks.background)
kindling = sprites.create(sparks.pile1, SpriteKind.Player)
kindling.setPosition(70, 80)
```

```ghost
info.onScore(30, function () {
    game.gameOver(true)
})

game.onUpdateInterval(1000, function () {
    if (inCutscene == false) {
        info.changeScoreBy(currentLevel * -1)
    }
})
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