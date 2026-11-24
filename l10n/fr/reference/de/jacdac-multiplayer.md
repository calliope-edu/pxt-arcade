# Mode multijoueur Jacdac

Jouez à deux : relie deux Calliope mini avec GameKit par un **câble Jacdac**. Un Calliope mini exécute le jeu, le second devient la manette du **joueur 2**.

![Câble Jacdac](/static/libs/jacdac-multiplayer.png)

## Comment ça marche

1. Transfère **le même programme** sur les deux Calliope mini. L'extension le vérifie : si un autre jeu tourne sur l'autre Calliope mini, le message **« Anderes Spiel erkannt »** (autre jeu détecté) s'affiche brièvement au lieu de la question pour jouer ensemble.
2. Relie les deux appareils par leurs **prises Jacdac** avec un câble Jacdac.
3. Sur les deux écrans apparaît la question **« Calliope mini erkannt! Mitspielen? »** (Calliope mini détecté ! Jouer ensemble ?).
4. Appuie sur **A = Oui** sur **l'un** des deux appareils. Cet appareil devient la manette et affiche **« Verbunden – Du bist Spieler 2 »** (connecté – tu es le joueur 2).
5. Sur l'autre appareil, le jeu continue. Là, tu diriges le **joueur 1**, la manette dirige le **joueur 2**.

Avec **B = Non**, chaque appareil continue son propre jeu.

## ~ hint

**Un seul écran affiche le jeu.** Le jeu tourne sur l'appareil sur lequel personne n'a appuyé sur « Oui ». La manette indique seulement si elle est connectée – sauf si tu utilises le bloc **refléter l'écran sur le GameKit 2** (voir plus bas).

## ~

## Le joueur 2 dans le programme

Pour la commande, l'extension n'a pas besoin de blocs propres (ses blocs pour le second écran se trouvent plus bas). Tu programmes le joueur 2 avec les blocs **Contrôleur** habituels pour le **joueur 2** : tout ce qui est appuyé sur la manette arrive dans le jeu comme bouton du joueur 2.

```cards
controller.player2.moveSprite(null)
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {})
controller.player2.isPressed(ControllerButton.A)
controller.player2.onEvent(ControllerEvent.Connected, function () {})
```

Les touches de direction ainsi que **A** et **B** sont transmises. Le bouton **Menu** reste sur la manette.

## Exemple : deux personnages #example

Le joueur 1 dirige le personnage rouge, le joueur 2 le vert sur le second Calliope mini. Avec **A**, le personnage concerné dit « Hallo! ». Dès que la manette est connectée, un message apparaît.

```blocks
let rot = sprites.create(img`
    . . 2 2 2 2 . .
    . 2 2 2 2 2 2 .
    2 2 1 2 2 1 2 2
    2 2 2 2 2 2 2 2
    2 2 2 2 2 2 2 2
    2 2 1 1 1 1 2 2
    . 2 2 2 2 2 2 .
    . . 2 2 2 2 . .
`, SpriteKind.Player)
let gruen = sprites.create(img`
    . . 7 7 7 7 . .
    . 7 7 7 7 7 7 .
    7 7 1 7 7 1 7 7
    7 7 7 7 7 7 7 7
    7 7 7 7 7 7 7 7
    7 7 1 1 1 1 7 7
    . 7 7 7 7 7 7 .
    . . 7 7 7 7 . .
`, SpriteKind.Player)
rot.setPosition(50, 60)
gruen.setPosition(110, 60)
rot.setStayInScreen(true)
gruen.setStayInScreen(true)
controller.moveSprite(rot)
controller.player2.moveSprite(gruen)
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    rot.sayText("Hallo!", 500)
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    gruen.sayText("Hallo!", 500)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    game.splash("Spieler 2 ist da!")
})
```

## Exemple : quand le joueur 2 débranche le câble

Si plus aucune donnée n'arrive de la manette, le jeu relâche après un court instant tous les boutons du joueur 2 pour que son personnage s'arrête. Ce n'est qu'après environ 6 secondes sans connexion que le jeu signale que le joueur 2 n'est plus connecté – ainsi, de courtes coupures sur le câble ne provoquent pas de déconnexion.

```blocks
controller.player2.onEvent(ControllerEvent.Disconnected, function () {
    game.splash("Spieler 2 ist weg", "Kabel prüfen!")
})
```

Sur la manette apparaît **« Verbindung getrennt »** (connexion interrompue). Avec **B**, elle redémarre et revient à son propre jeu.

## ~ hint

**Conseils**

* **Alimentation :** chaque Calliope mini a besoin de sa propre alimentation (USB ou piles). Le câble Jacdac n'alimente pas un second GameKit.
* **Deux joueurs :** le mode multijoueur relie exactement **deux** Calliope mini.
* **Reconnecter :** si « Non » a été choisi, redémarre les deux Calliope mini pour que la question réapparaisse.
* **Câble :** les deux prises Jacdac du Calliope mini fonctionnent de la même façon – tu peux utiliser n'importe laquelle.
* **Ne pas mélanger :** n'utilise pas dans un même projet cette extension et l'extension **Jacdac** normale.

## ~

## Refléter l'écran sur le GameKit 2

Avec ce bloc (catégorie **Contrôleur**, groupe **Multijoueur**), le Calliope mini du joueur 2 affiche aussi le jeu. Place-le dans **au démarrage** :

```blocks
jacdac.multiplayer.mirrorScreen()
```

L'hôte envoie son image par le câble Jacdac, uniquement les parties qui ont changé depuis la dernière fois. En théorie, environ **4 à 5 images entièrement nouvelles par seconde** passent par le câble. Si peu de choses changent (un personnage qui traverse un arrière-plan calme), l'image chez le joueur 2 est nettement plus fluide. Dans les jeux avec un arrière-plan qui défile ou beaucoup d'éléments en mouvement, l'image saccade sur le second écran. L'hôte n'envoie que ce qu'il faut pour que les boutons du joueur 2 passent toujours immédiatement.

Le jeu continue de tourner uniquement sur l'hôte. Le second Calliope mini affiche l'image reflétée et sert en même temps de manette : ses boutons dirigent le **joueur 2** dans le jeu, exactement comme sans reflet. Tu programmes donc le joueur 2 comme plus haut avec les blocs Contrôleur pour le **joueur 2**.

**Afficher la fréquence d'images :** appuie sur le bouton **MENU** du Calliope mini du joueur 2. En haut apparaissent les paquets reçus par seconde et le nombre d'images complètes que cela donnerait. Un nouvel appui sur **MENU** masque l'affichage.

## Envoyer le terrain de jeu au GameKit 2

Plus fluide que le reflet : avec ce bloc (catégorie **Contrôleur**, groupe **Multijoueur**), l'hôte n'envoie pas l'image finie, mais ce qui se trouve sur le terrain de jeu. Place-le dans **au démarrage** :

```blocks
jacdac.multiplayer.sendPlayfield()
```

Le GameKit 2 reconstruit à partir de cela les sprites, la tilemap, la caméra, l'arrière-plan, **le score et les vies du joueur 1** et les bulles de texte, et les dessine lui-même. Pour chaque image, seules les positions passent par le câble ; chaque image et chaque tuile n'est envoyée qu'une fois. C'est pourquoi l'image reste fluide même dans les jeux qui défilent. Le jeu continue de tourner uniquement sur l'hôte, et le GameKit 2 dirige comme toujours le **joueur 2**.

Si l'hôte affiche autre chose que le terrain de jeu (par ex. **game.splash**, un dialogue ou « Game Over »), cette image est transmise comme avec le reflet.

## ~ hint

**Ce qui n'est pas transmis :** les effets de particules, les images que le jeu dessine lui-même à l'écran, les couches d'arrière-plan (parallaxe) ainsi que le score et les vies du **joueur 2**. Pour le joueur 2, tu peux transmettre le score avec les blocs de valeurs (voir plus bas).

## ~

## Envoyer des valeurs au GameKit 2

Avec ces blocs, tu construis toi-même l'affichage du GameKit 2. L'hôte envoie des nombres nommés, par ex. la position de la balle. Le GameKit 2 crée ses propres sprites en rejoignant la partie et les place selon les valeurs reçues. Une valeur est envoyée immédiatement à chaque modification et répétée régulièrement.

```cards
jacdac.multiplayer.sendValue("x", 0)
jacdac.multiplayer.onValue("x", function (value) {})
jacdac.multiplayer.receivedValue("x")
jacdac.multiplayer.onStartAsGuest(function () {})
jacdac.multiplayer.isGuest()
```

Comme **le même programme** tourne sur les deux Calliope mini, les deux côtés se trouvent dans le même projet : **lorsque cet appareil devient le GameKit 2** ne s'exécute que sur le GameKit 2, et **est le GameKit 2** distingue les deux appareils dans les boucles. L'affichage « Verbunden – Du bist Spieler 2 » n'apparaît pas dès que tu utilises **lorsque cet appareil devient le GameKit 2**.

## Exemple : une balle sur les deux écrans

```blocks
let ball2: Sprite = null
let ball = sprites.create(img`
    . 5 5 .
    5 5 5 5
    5 5 5 5
    . 5 5 .
`, SpriteKind.Projectile)
ball.setVelocity(50, 35)
ball.setBounceOnWall(true)
game.onUpdate(function () {
    jacdac.multiplayer.sendValue("x", ball.x)
    jacdac.multiplayer.sendValue("y", ball.y)
    jacdac.multiplayer.sendValue("punkte 2", info.player2.score())
})
jacdac.multiplayer.onStartAsGuest(function () {
    ball2 = sprites.create(img`
        . 5 5 .
        5 5 5 5
        5 5 5 5
        . 5 5 .
    `, SpriteKind.Projectile)
})
jacdac.multiplayer.onValue("punkte 2", function (value) {
    info.player2.setScore(value)
})
game.onUpdate(function () {
    if (jacdac.multiplayer.isGuest() && ball2) {
        ball2.setPosition(jacdac.multiplayer.receivedValue("x"), jacdac.multiplayer.receivedValue("y"))
    }
})
```

La valeur « punkte 2 » montre aussi comment transmettre le score du joueur 2 avec **envoyer le terrain de jeu au GameKit 2** : les blocs de valeurs fonctionnent en plus du terrain de jeu.

## ~ hint

**Mémoire :** les jeux multijoueurs avec des sprites, des collisions et des scores sont généralement trop gros pour un transfert par Bluetooth. L'éditeur les crée alors automatiquement pour un transfert par câble USB (voir [Sans Bluetooth](/reference/usb-only)). **Envoyer le terrain de jeu au GameKit 2** nécessite environ 18 Ko, les blocs de valeurs environ 5 Ko.

## ~

## Pour les experts : le jeu sur les deux écrans

Ce que font les blocs de valeurs est aussi possible en **JavaScript** avec ton propre paquet de données : l'hôte envoie régulièrement un petit **état du jeu** (par ex. positions et score, jusqu'à environ 200 octets), et l'invité dessine à partir de cela son propre affichage.

```typescript-ignore
// Host: etwa 10-20 mal pro Sekunde den Zustand schicken
const state = Buffer.create(4)
state[0] = info.score()
jacdac.multiplayer.sendGameState(state)

// Gast: Zustand empfangen ...
let punkte = 0
jacdac.multiplayer.onGameState(function (data) {
    punkte = data[0]
})
// ... und statt "Verbunden" jedes Bild selbst zeichnen
jacdac.multiplayer.setGuestRenderer(function (target) {
    target.fill(9)
    target.printCenter("Punkte: " + punkte, 50, 1)
})
```

Avec `jacdac.multiplayer.isGuest()`, tu sais si ton appareil est actuellement invité. Les calculs se font toujours sur l'hôte ; l'invité n'envoie que ses boutons.

## Contexte technique

Jacdac est un bus sur un seul fil de données (sur le Calliope mini V3, à la broche **P12**). Chaque appareil s'y annonce régulièrement. La manette envoie l'état complet de ses boutons toutes les 100 millisecondes et aussi immédiatement à chaque changement, avec un compteur pour chaque appui. Ainsi, même un appui très court n'est pas perdu si un paquet de données se perd sur le câble.

## Voir aussi

[Contrôleur](/reference/controller),
[Jacdac](https://jacdac.github.io/jacdac-docs/)

```package
jacdac-multiplayer
```
