# arcade-character-animations

Une extension MakeCode Arcade pour créer des règles qui contrôlent quand les animations s'exécutent sur un sprite.

## Règles de base

Pour attacher des animations à un sprite, tu dois d'abord créer une « règle » qui détermine quand l'animation s'exécutera. Les règles sont composées de plusieurs parties qui décrivent chacune un comportement du sprite. Par exemple, si nous faisions un jeu de plateforme, voici quelques règles que nous pourrions utiliser pour contrôler les animations de marche :

* Courir à droite : "Moving" + "Facing Right" + "Is Hitting Wall Down"
* Courir à gauche : "Moving" + "Facing Left" + "Is Hitting Wall Down"

Dans cet exemple, "Is Hitting Wall Down" sert à vérifier si le sprite est au sol ou non.

Si nous voulions ajouter le saut à notre sprite, nous pourrions créer deux règles de plus comme celles-ci :

* Sauter à droite : "Moving" + "Facing Right"
* Sauter à gauche : "Moving" + "Facing Left"

Tu remarqueras peut-être que l'une des règles de saut sera vraie chaque fois que les règles de course sont vraies. Dans cette extension, la règle la plus spécifique l'emporte toujours sur toutes les autres. Donc, si nous avons un sprite qui bouge, regarde vers la droite et touche un mur vers le bas, c'est la règle de course qui s'applique, car elle est plus spécifique (elle a trois parties au lieu de deux).

### Exemple : marcher dans quatre directions

Cet exemple montre comment faire un jeu simple en vue de dessus où tu peux marcher dans les quatre directions.

https://makecode.com/_XV2EmJas4i8o

![Une image des blocs de l'exemple en vue de dessus](/static/libs/arcade-character-animations/image1.png)

Pour développer cet exemple, tu pourrais ajouter des animations quand le personnage pousse contre un mur !

### Exemple : jeu de plateforme à défilement horizontal

Cet exemple crée des animations courantes que tu pourrais utiliser dans un jeu de plateforme : courir, sauter et rester immobile.

https://makecode.com/_AD7hpC9pzW47

![Une image des blocs de l'exemple de jeu de plateforme](/static/libs/arcade-character-animations/image2.png)

Tu pourrais développer cet exemple en ajoutant des animations différentes selon que le joueur saute ou tombe !

Source: [microsoft/arcade-character-animations](https://github.com/microsoft/arcade-character-animations/tree/v0.1.0) (v0.1.0)

```package
arcade-character-animations
```
