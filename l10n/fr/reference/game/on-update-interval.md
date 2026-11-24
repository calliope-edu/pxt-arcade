# à chaque intervalle de mise à jour

Exécute du code chaque fois qu'un intervalle de temps s'est écoulé.

```sig
game.onUpdateInterval(500, function () {
	
})
```

Il existe des événements pour exécuter du code lorsque des sprites se chevauchent, entrent en collision, sont créés ou détruits. Tu peux aussi utiliser des événements pour agir lorsque des boutons sont pressés ou lorsque des compteurs du jeu atteignent zéro. Mais si tu veux du code qui contrôle régulièrement ce qui se passe dans le jeu, tu dois exécuter ce code dans une fonction de mise à jour.

Ton programme travaille avec le moteur de jeu grâce à une fonction de mise à jour. Le moteur de jeu appelle cette fonction à un intervalle de temps que tu choisis. Dans la fonction de mise à jour, tu peux mettre du code qui vérifie la position des sprites, les conditions qui modifient le score, ajuste le nombre de vies, ou vérifie si quelque chose doit terminer la partie.

Avec **onUpdateInterval**, tu décides à quelle fréquence ton code de mise à jour s'exécute. C'est différent de [onUpdate](/reference/game/on-update), où le moteur de jeu décide quand exécuter ton code de mise à jour.

Si ton programme contient à la fois des fonctions [onUpdate](/reference/game/on-update) et **onUpdateInterval**, le code de ta fonction **onUpdateInterval** s'exécute en premier.

# Paramètres

* **period** : un [nombre](/types/number) de millisecondes à attendre avant que le code de l'intervalle s'exécute. 
* **a** : le code à exécuter lorsque le temps de **period** s'est écoulé

## Exemple #example

Vérifie chaque seconde s'il reste des vies au joueur. Sinon, termine la partie !

```blocks
game.onUpdateInterval(1000, function () {
	if (info.life() < 1) {
        game.gameOver(false)
    }
})
```

## Voir aussi #seealso

[à chaque mise à jour](/reference/game/on-update)