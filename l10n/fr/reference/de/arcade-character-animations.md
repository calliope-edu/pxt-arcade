# arcade-character-animations

Une extension MakeCode Arcade qui te permet de créer des règles qui contrôlent quand les animations sont jouées sur un sprite.

## Règles simples

Pour attacher des animations à un sprite, tu crées d'abord une « règle » qui définit quand l'animation est jouée. Les règles sont composées de plusieurs parties qui décrivent chacune un comportement du sprite. Par exemple, si nous créons un jeu de plateformes, nous pourrions utiliser ces règles pour les animations de course :

* Courir vers la droite : « se déplace » + « regarde à droite » + « touche un mur en bas »
* Courir vers la gauche : « se déplace » + « regarde à gauche » + « touche un mur en bas »

Dans cet exemple, « touche un mur en bas » vérifie si le sprite est au sol.

Si notre sprite doit aussi sauter, nous pouvons créer deux autres règles :

* Sauter vers la droite : « se déplace » + « regarde à droite »
* Sauter vers la gauche : « se déplace » + « regarde à gauche »

Tu remarqueras peut-être qu'une des règles de saut est toujours vraie quand une règle de course est vraie. Dans cette extension, la règle la plus précise a toujours la priorité sur toutes les autres. Donc, si un sprite se déplace, regarde à droite et touche un mur en bas, c'est la règle de course qui s'applique, parce qu'elle est plus précise (elle a trois parties au lieu de deux).

### Exemple : marcher dans quatre directions

Cet exemple montre un jeu simple en vue de dessus, dans lequel tu peux marcher dans les quatre directions.

https://makecode.com/_XV2EmJas4i8o

![Image des blocs de l'exemple en vue de dessus](/static/libs/arcade-character-animations/image1.png)

Tu pourrais améliorer cet exemple en ajoutant des animations quand le personnage pousse contre un mur !

### Exemple : jeu de plateformes à défilement horizontal

Cet exemple crée les animations typiques d'un jeu de plateformes : courir, sauter et rester immobile.

https://makecode.com/_AD7hpC9pzW47

![Image des blocs de l'exemple de jeu de plateformes](/static/libs/arcade-character-animations/image2.png)

Tu pourrais améliorer cet exemple en ajoutant des animations différentes pour le saut et la chute !

Source : [microsoft/arcade-character-animations](https://github.com/microsoft/arcade-character-animations/tree/v0.1.0) (v0.1.0)

```package
arcade-character-animations
```
