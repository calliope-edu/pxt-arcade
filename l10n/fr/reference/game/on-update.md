# à chaque mise à jour

Exécute le code de mise à jour du jeu.

```sig
game.onUpdate(function () {
	
})
```

Il existe des événements pour exécuter du code lorsque des sprites se chevauchent, entrent en collision, sont créés ou détruits. Tu peux aussi utiliser des événements pour agir lorsque des boutons sont pressés ou lorsque des compteurs du jeu atteignent zéro. Mais si tu veux du code qui contrôle régulièrement ce qui se passe dans le jeu, tu dois exécuter ce code dans une fonction de mise à jour.

Ton programme travaille avec le moteur de jeu grâce à une fonction de mise à jour. Le moteur de jeu appelle cette fonction à intervalle régulier. Dans la fonction de mise à jour, tu peux mettre du code qui vérifie la position des sprites, les conditions qui modifient le score, ajuste le nombre de vies, ou vérifie si quelque chose doit terminer la partie.

## La boucle de jeu

L'une des bases de la programmation de jeux est l'utilisation d'une boucle de jeu. Elle fait partie du moteur de jeu de @boardname@. Une boucle de jeu fait avancer les actions du jeu. En code simple, elle pourrait ressembler à ceci :

```typescript-ignore
while (!gameOver) {
    checkInputs()
    gameUpdate()
    showGameUpdates()
}
```

Dans le cadre de **gameUpdate**, le code de ton **onUpdate** est exécuté pour gérer les mises à jour régulières dont ton jeu a besoin. Le temps entre les mises à jour (fréquence de mise à jour) est fixé par le moteur de jeu. Cet intervalle est assez court pour que le joueur n'attende jamais que ton programme fasse ses mises à jour. Mets dans un **onUpdate** le code qui doit s'exécuter régulièrement mais ne dépend pas d'un intervalle de temps fixe. Si tu veux que le code de mise à jour s'exécute à un intervalle que tu choisis, utilise [onUpdateInterval](/reference/game/on-update-interval).

## Paramètres

* **a** : le code à exécuter pour déplacer ou modifier les sprites.

## Exemple #example

Crée un sprite et mets-le en mouvement. Dans la fonction **onUpdate**, vérifie si le sprite atteint le bord de l'écran. Si c'est le cas, renvoie-le dans la direction opposée.

```blocks
let monSprite: Sprite = null
monSprite = sprites.create(img`
. . . . . 5 5 5 5 5 5 . . . . . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
. . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
. . . . . 5 5 5 5 5 5 . . . . . 
`, SpriteKind.Player)
monSprite.vx = 30
game.onUpdate(function () {
    if (monSprite.x > scene.screenWidth()) {
        monSprite.vx = -30
    } else if (monSprite.x < 0) {
        monSprite.vx = 30
    }
})
```

## Voir aussi #seealso

[à chaque intervalle de mise à jour](/reference/game/on-update-interval)
