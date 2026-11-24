# Mode multijoueur Jacdac

Joue à deux : relie deux Calliope mini avec GameKit à l'aide d'un **câble Jacdac**. Un Calliope mini exécute le jeu, le second devient la manette du **joueur 2**.

![Câble Jacdac](/static/libs/jacdac-multiplayer.png)

## Comment ça marche

1. Télécharge le **même programme** sur les deux Calliope mini. L'extension le vérifie : si un autre jeu tourne sur l'autre Calliope mini, le message **« Anderes Spiel erkannt »** (« Autre jeu détecté ») s'affiche brièvement à la place de la question pour rejoindre la partie.
2. Relie les deux appareils par leurs **prises Jacdac** avec un câble Jacdac.
3. Les deux écrans affichent la question **« Calliope mini erkannt! Mitspielen? »** (« Calliope mini détecté ! Rejoindre la partie ? »).
4. Sur **l'un** des deux appareils, appuie sur **A = Ja** (A = Oui). Cet appareil devient la manette et affiche **« Verbunden – Du bist Spieler 2 »** (« Connecté – Tu es le joueur 2 »).
5. Le jeu continue sur l'autre appareil. Là, tu contrôles le **joueur 1**, et la manette contrôle le **joueur 2**.

Avec **B = Nein** (B = Non), chaque appareil continue à jouer son propre jeu.

## ~ hint

**Un seul écran affiche le jeu.** Le jeu tourne sur l'appareil où personne n'a appuyé sur « Ja ». La manette affiche seulement si elle est connectée – sauf si tu utilises le bloc **refléter l'écran vers le joueur 2** (voir plus bas).

## ~

## Le joueur 2 dans ton programme

Pour le contrôle, l'extension n'a pas besoin de blocs propres (ses blocs pour le second écran sont plus bas). Tu programmes le joueur 2 avec les blocs **Contrôleur** habituels pour le **joueur 2** : tout ce qui est appuyé sur la manette arrive dans le jeu comme un bouton du joueur 2.

```cards
controller.player2.moveSprite(null)
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {})
controller.player2.isPressed(ControllerButton.A)
controller.player2.onEvent(ControllerEvent.Connected, function () {})
```

Les boutons de direction ainsi que **A** et **B** sont envoyés. Le bouton **Menu** reste sur la manette.

## Exemple : deux personnages #example

Le joueur 1 contrôle le personnage rouge, le joueur 2 sur le second Calliope mini contrôle le vert. Avec **A**, chaque personnage dit « Hallo! ». Dès que la manette est connectée, un message apparaît.

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

Si plus aucune donnée n'arrive de la manette, le jeu relâche après peu de temps tous les boutons du joueur 2, pour que son personnage s'arrête. C'est seulement après environ 6 secondes sans connexion que le jeu signale que le joueur 2 n'est plus connecté – ainsi, de brèves coupures sur le câble ne provoquent pas de déconnexion.

```blocks
controller.player2.onEvent(ControllerEvent.Disconnected, function () {
    game.splash("Spieler 2 ist weg", "Kabel prüfen!")
})
```

La manette affiche **« Verbindung getrennt »** (« Connexion perdue »). Avec **B**, elle redémarre et revient à son propre jeu.

## ~ hint

**Astuces**

* **Alimentation :** chaque Calliope mini a besoin de sa propre alimentation (USB ou piles). Le câble Jacdac n'alimente pas un second GameKit.
* **Deux joueurs :** le mode multijoueur relie exactement **deux** Calliope mini.
* **Reconnecter :** si « Nein » a été choisi, redémarre les deux Calliope mini pour que la question réapparaisse.
* **Câble :** les deux prises Jacdac du Calliope mini fonctionnent de la même façon – tu peux utiliser l'une ou l'autre.
* **Ne pas mélanger :** n'utilise pas cette extension et l'extension **Jacdac** normale dans le même projet.

## ~

## Refléter l'écran vers le joueur 2

Avec ce bloc (catégorie **Contrôleur**, groupe **Multijoueur**), le Calliope mini du joueur 2 affiche aussi le jeu. Place-le dans **au démarrage** :

```blocks
jacdac.multiplayer.mirrorScreen()
```

L'hôte envoie son image par le câble Jacdac, mais seulement les parties qui ont changé depuis la dernière fois. En théorie, environ **4 à 5 images entièrement nouvelles par seconde** passent par le câble. Si peu de choses changent (un personnage traverse un fond immobile), l'image du joueur 2 est beaucoup plus fluide. Dans les jeux avec un fond qui défile ou beaucoup de parties en mouvement, le second écran saccade. L'hôte n'envoie qu'autant qu'il peut tout en laissant passer immédiatement les boutons du joueur 2.

Le jeu tourne toujours uniquement sur l'hôte. Le second Calliope mini affiche l'image reflétée et sert en même temps de manette : ses boutons contrôlent le **joueur 2** dans le jeu, exactement comme sans reflet. Tu programmes donc le joueur 2 comme plus haut avec les blocs Contrôleur pour le **joueur 2**.

**Afficher la fréquence d'images :** appuie sur le bouton **MENU** du Calliope mini du joueur 2. En haut, tu vois les paquets reçus par seconde et combien d'images complètes cela représenterait. Appuie de nouveau sur **MENU** pour le masquer.

## Envoyer le terrain de jeu au joueur 2

Plus fluide que le reflet : avec ce bloc (catégorie **Contrôleur**, groupe **Multijoueur**), l'hôte n'envoie pas l'image terminée mais ce qui se trouve sur le terrain de jeu. Place-le dans **au démarrage** :

```blocks
jacdac.multiplayer.sendPlayfield()
```

Le Calliope mini du joueur 2 reconstruit à partir de cela les sprites, la carte de tuiles, la caméra, l'arrière-plan, le **score et les vies du joueur 1** ainsi que les bulles de dialogue, et les dessine lui-même. Par image, seules les positions passent par le câble ; chaque image et chaque tuile n'est envoyée qu'une fois. C'est pourquoi l'image reste fluide même dans les jeux qui défilent. Le jeu tourne toujours uniquement sur l'hôte, et l'appareil du joueur 2 contrôle le **joueur 2** comme d'habitude.

Quand l'hôte affiche autre chose que le terrain de jeu (p. ex. **game.splash**, un dialogue ou « Game Over »), cette image est reflétée comme avec le bloc de reflet.

## ~ hint

**Non transférés :** les effets de particules, les images que le jeu dessine lui-même à l'écran, les calques d'arrière-plan (parallaxe) ainsi que le score et les vies du **joueur 2**. Pour le joueur 2, envoie le score avec les blocs de valeurs (voir plus bas).

## ~

## Envoyer des valeurs au joueur 2

Avec ces blocs, tu construis toi-même la vue du joueur 2. L'hôte envoie des nombres nommés, p. ex. la position de la balle. Quand l'appareil du joueur 2 rejoint la partie, il crée ses propres sprites et les déplace vers les valeurs reçues. Une valeur est envoyée dès qu'elle change et répétée régulièrement.

```cards
jacdac.multiplayer.sendValue("x", 0)
jacdac.multiplayer.onValue("x", function (value) {})
jacdac.multiplayer.receivedValue("x")
jacdac.multiplayer.onStartAsGuest(function () {})
jacdac.multiplayer.isGuest()
```

Comme **le même programme** tourne sur les deux Calliope mini, les deux côtés sont dans le même projet : **au démarrage en tant que joueur 2** ne s'exécute que sur l'appareil du joueur 2, et **est le joueur 2** permet de distinguer les deux appareils dans les boucles. L'écran « Connecté – tu es le joueur 2 » n'apparaît plus dès que tu utilises **au démarrage en tant que joueur 2**.

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
    jacdac.multiplayer.sendValue("score 2", info.player2.score())
})
jacdac.multiplayer.onStartAsGuest(function () {
    ball2 = sprites.create(img`
        . 5 5 .
        5 5 5 5
        5 5 5 5
        . 5 5 .
    `, SpriteKind.Projectile)
})
jacdac.multiplayer.onValue("score 2", function (value) {
    info.player2.setScore(value)
})
game.onUpdate(function () {
    if (jacdac.multiplayer.isGuest() && ball2) {
        ball2.setPosition(jacdac.multiplayer.receivedValue("x"), jacdac.multiplayer.receivedValue("y"))
    }
})
```

La valeur « score 2 » montre aussi comment transférer le score du joueur 2 avec **envoyer le terrain de jeu au joueur 2** : les blocs de valeurs fonctionnent en plus du terrain de jeu.

## ~ hint

**Mémoire :** les jeux multijoueurs avec sprites, collisions et score sont généralement trop gros pour un transfert par Bluetooth. L'éditeur les prépare alors automatiquement pour un transfert par câble USB (voir [Sans Bluetooth](/reference/usb-only)). **Envoyer le terrain de jeu au joueur 2** a besoin d'environ 18 Ko, les blocs de valeurs d'environ 5 Ko.

## ~

## Pour les utilisateurs avancés : le jeu sur les deux écrans

Ce que font les blocs de valeurs marche aussi en **JavaScript** avec ton propre paquet de données : l'hôte envoie régulièrement un petit **état du jeu** (par exemple positions et points, jusqu'à environ 200 octets), et l'invité dessine sa propre vue à partir de celui-ci.

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

`jacdac.multiplayer.isGuest()` t'indique si ton appareil est actuellement l'invité. Toute la logique du jeu tourne toujours sur l'hôte ; l'invité n'envoie toujours que ses boutons.

## Contexte technique

Jacdac est un bus sur un seul fil de données (sur le Calliope mini V3, à la broche **P12**). Chaque appareil s'y annonce régulièrement. La manette envoie l'état complet de ses boutons toutes les 100 millisecondes, et aussi immédiatement dès que quelque chose change, avec un compteur pour chaque appui sur un bouton. Ainsi, même un appui très court n'est pas perdu si un paquet de données se perd sur le câble.

## Voir aussi

[Contrôleur](/reference/controller),
[Jacdac](https://jacdac.github.io/jacdac-docs/)

```package
jacdac-multiplayer
```
