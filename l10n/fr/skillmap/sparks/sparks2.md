# Un tas de bâtons
### @explicitHints true


## {Introduction @showdialog}

Ton code de l'activité précédente est déjà dans l'espace de travail.

Ajoutons du code qui permet au joueur de gagner ou de perdre.


![Le temps presse](/static/skillmap/sparks/sparks2.gif "Ajoutons des conditions pour gagner et perdre." )




## {2. Joue à ton jeu}


**Joue au jeu de clics !**

Appuie sur le bouton (A) ou sur la **barre d'espace** et regarde le score monter !




~hint Mon jeu ne fonctionne pas ⚠️

---

Si ton code ne fonctionne pas et que tu ne trouves pas pourquoi, clique sur
<br/>« Remplacer mon code »<br/>
pour remplacer les blocs de ton espace de travail par un nouveau code de départ.

hint~





## {3. Gagner}

**Ajoute un événement de score.**

- :id card: Dans la catégorie ``||info:Info||``, fais glisser<br/>
``||info:quand le score atteint [30]||``<br/>
sur une **zone vide** de l'espace de travail.



#### ~ tutorialhint

```blocks
info.onScore(30, function () {})
```



## {4. Fin du jeu}

**Gagne la partie quand le score atteint 30.**

- :circle: Dans la catégorie ``||game:Jeu||``, fais glisser<br/>
``||game:jeu terminé <GAGNER>||``<br/>
dans le conteneur **vide** <br/>
``||info(noclick):quand le score atteint [30]||``.



#### ~ tutorialhint

```blocks
info.onScore(30, function () {
    game.gameOver(true)
})
```






## {5. Vérifie ton jeu !}


- :binoculars: Essaie ton projet dans la fenêtre de jeu.

Appuie sur le bouton (A) le plus vite possible. Quand ton score atteint 30, tu devrais gagner la partie.




## {6. Compter les secondes}

Pour l'instant, le score gagnant est toujours 30. Remplaçons le score final par le temps qu'il t'a fallu pour gagner, puis célébrons le score « le plus bas ».

- :id card: Dans la catégorie ``||info:Info||``, fais glisser<br/>
``||info:définir score à [0]||``<br/>
**tout en haut** du conteneur<br/>
``||info(noclick):quand le score atteint [30]||`` qui se trouve déjà dans l'espace de travail.

- :circle: Dans la catégorie ``||game:Jeu||``, fais glisser<br/>
``||game:time since start (tenths)||``<br/>
pour remplacer le **0** dans le bloc <br/>
``||info(noclick):définir score à [0]||``.



#### ~ tutorialhint

```blocks
info.onScore(30, function () {
    //@highlight
    info.setScore(game.timeSinceStartSec())
    game.gameOver(true)
})
```




## {7. Le plus bas gagne}


- :circle: Dans la catégorie ``||game:Jeu||``, fais glisser<br/>
``||game:utiliser [score élevé] comme meilleur score||``<br/>
**tout en haut** du conteneur<br/>
``||info(noclick):quand le score atteint [30]||`` qui se trouve déjà dans l'espace de travail.

- :mouse pointer: Clique sur ``||game:score élevé||`` et choisis
``||game: score bas||`` dans le menu déroulant.



#### ~ tutorialhint

```blocks
info.onScore(30, function () {
    //@highlight
    game.setGameOverScoringType(game.ScoringType.LowScore)
    info.setScore(game.timeSinceStartSec())
    game.gameOver(true)
})
```




## {8. Perdre}


**Place au défi !** <br/>
❤️‍🔥 ❤️‍🔥 ❤️‍🔥

C'est trop facile d'atteindre 30. Retirons un point chaque seconde pour corser le jeu.


- :circle: Dans la catégorie ``||game:Jeu||``, fais glisser<br/>
``||game: quand mise à jour du jeu chaque [500] ms||``<br/>
sur **une zone vide** de l'espace de travail.

- :mouse pointer: Remplace **500** ms par **1000** ms (soit exactement 1 seconde).



#### ~ tutorialhint

```blocks
game.onUpdateInterval(1000, function () { })
```


## {9. Perdre}


- :id card: Dans la catégorie ``||info:Info||``, fais glisser<br/>
``||info: modifier le score de [1]||``<br/>
dans le conteneur **vide**<br/>
``||game(noclick): quand mise à jour du jeu chaque [1000] ms||``<br/>
qui se trouve déjà dans l'espace de travail.

- :mouse pointer: Remplace **1** par **-1** pour retirer un point.



#### ~ tutorialhint

```blocks
game.onUpdateInterval(1000, function () {
//@highlight
        info.changeScoreBy(-1)
})
```





## {10. Vérifie ton jeu !}


- :binoculars: Essaie ton projet dans la fenêtre de jeu.

Appuie sur le bouton (A) le plus vite possible et regarde si tu arrives à 30 points avant qu'on t'en retire trop.





## {11. Ça suffit !}

Ajoutons un moyen de perdre la partie quand le score descend trop en dessous de zéro.

🕰️ 🕰️ 🕰️

- :id card: Dans la catégorie ``||info:Info||``, fais glisser<br/>
``||info:quand le score atteint [30]||``<br/>
sur une **zone vide** de l'espace de travail.

- :mouse pointer: Clique dans le conteneur vide et remplace **30** par **-5**.


#### ~ tutorialhint

```blocks
info.onScore(-5, function () { })
```




## {12. Ça suffit !}



- :circle: Dans la catégorie ``||game:Jeu||``, fais glisser<br/>
``||game:jeu terminé <GAGNER>||``<br/>
dans le conteneur **vide** <br/>
``||info(noclick):quand le score atteint [-5]||``.

- :mouse pointer: Clique sur **`<GAGNER`>** et remplace-le par **`<PERDRE`>**.



#### ~ tutorialhint

```blocks
info.onScore(-5, function () {
    //@highlight
    game.gameOver(false)
})
```






## {13. Vérifie ton jeu !}


- :binoculars: Regarde la fenêtre de jeu.

Ne touche à aucun bouton ni aucune touche ... au bout de cinq secondes, tu devrais perdre la partie.



## {14. Rejoue}


- :binoculars: Relance ton jeu et rejoue !

Appuie sur le bouton (A) aussi vite que tu peux. Est-ce plus difficile de gagner maintenant ?




## {9. Terminé}

**👨🏽‍🚒 Tu es EN FEU 👨🏽‍🚒**

Quel super jeu tu as créé !


~hint Comment partager mon jeu ?💡

---

**Tu veux partager ton jeu ?**

Clique sur « Terminé » pour revenir à la skillmap, puis cherche le bouton de partage dans le coin inférieur droit.

![Partage ta carte](/static/skillmap/sparks/share.gif )

hint~


Quand tu es prêt, clique sur **Terminé** pour revenir à la skillmap et récupérer ta récompense !

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