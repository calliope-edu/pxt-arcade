# BlockOut

Utilise les touches fléchées pour faire rebondir le projectile sur ta raquette et détruire tous les blocs à l'écran !

![Vue du jeu dans le simulateur](https://cdn.makecode.com/blob/a98cec6c8eee735ada2b8087b3cc6d8ba9e8adad/static/lessons/block-out/working-game.gif)

## Objectifs d'apprentissage

Apprends les bases d'un jeu simple de projectile qui rebondit !

* Le concept de sprite
* Comment faire apparaître plusieurs sprites
* Les interactions entre sprites et projectiles
* Définir et déplacer un « joueur »
* Définir une augmentation du score
* Un mouvement semi-aléatoire

## Sections de la leçon

* [Partie 1 : Créer les sprites](#part-one-creating-the-sprites)
* [Partie 2 : Créer les blocs](#part-two-creating-the-blocks)
* [Partie 3 : Terminer la configuration](#part-three-finishing-the-setup)
* [Partie 4 : Interactions entre la balle et la raquette](#part-four-ball-and-paddle-interactions)
* [Partie 5 : Rebond directionnel](#part-five-directional-bouncing)
* [Partie 6 : Créer les collisions avec les blocs](#part-six-creating-block-collisions)
* [Partie 7 : Terminer le jeu](#part-seven-ending-the-game)

## Partie 1 : Créer les sprites

Va dans l'éditeur [MakeCode Arcade](@homeurl@) et sélectionne **Nouveau projet** pour créer un nouveau jeu.

Une fois l'éditeur chargé, tu verras un bloc vert `||loops:on start||` déjà présent dans l'espace de travail.

D'abord, nous voulons créer le joueur principal du jeu, qui dans notre cas sera une raquette. Fais glisser un bloc `||sprites:set monSprite to sprite of kind player||` depuis `||sprites:Sprites||` et place-le dans le bloc `||loops:on start||`. Clique ensuite sur `||variables:monSprite||` et sélectionne `rename variable`. Nomme ta variable `paddle`. Puis, dans l'éditeur d'images, clique sur le bloc `16x16` jusqu'à ce qu'il affiche `32x32`. Dessine une ligne violette près du bas de l'image.

![Changer de taille](https://cdn.makecode.com/blob/71dd013ce03334825016cd18381e7bae208fb6ca/static/lessons/block-out/32x32Blockout.gif)

Ensuite, fais glisser un bloc `||sprites:set monSprite position to x y||` depuis `||sprites:Sprites||` et mets-le dans le bloc `||loops:on start||`. Règle la valeur **x** sur **79** et la valeur **y** sur **100**. À nouveau depuis `||sprites:Sprites||`, fais glisser un bloc `||sprites:set monSprite stay in screen||` dans `||loops:on start||`. Remplace `monSprite` par `paddle`. Maintenant, dans `||controller:Controller||`, prends un bloc `||controller:move monSprite with buttons||` et fais-le glisser dans `||loops:on start||`. Remplace là aussi `monSprite` par `paddle`. Clique sur le signe **(+)** et règle la valeur **vx** sur **100** et la valeur **vy** sur **0**.

![Le joueur se déplace à l'écran](https://cdn.makecode.com/blob/7e6154b6d1c15630eb8114ce95f16fc5c8e4d054/static/lessons/block-out/moving-player.gif)

Ensuite, nous allons créer le projectile qui rebondira contre la raquette, les murs et les blocs. Va dans `||sprites:Sprites||`, prends un bloc `||sprites:set projectile to projectile from monSprite||` et place-le dans `||lopps:on start||`. Clique sur l'éditeur d'images et dessine une balle. Remplace `monSprite` par `paddle` et règle **vx** sur **50** et **vy** sur **-55**. Va dans `||sprites:Sprites||`, prends un bloc `||sprites:set monSprite stay in screen||` et fais-le glisser dans l'espace de travail. Règle ensuite `monSprite` sur `projectile`, puis remplace `stay in screen` par `destroy on wall`. Laisse l'interrupteur sur **OFF**. Va dans `||sprites:Sprites||`, prends un bloc `||sprites:set projectile bounce on wall on||` et fais-le glisser dans `||loops:on start||`.

```blocks
let paddle = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . b b b b b b b b b b b b b b b b b b b b b b . . . . . .
    . . . . b b b b b b b b b b b b b b b b b b b b b b . . . . . .
    . . . . b b b b b b b b b b b b b b b b b b b b b b . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
paddle.setPosition(79, 100)
paddle.setStayInScreen(true)
controller.moveSprite(paddle, 100, 0)
let projectile = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . 9 9 9 . . . . . . .
    . . . . . 9 6 7 6 9 . . . . . .
    . . . . 9 6 7 6 7 6 9 . . . . .
    . . . . 1 7 1 7 1 7 1 . . . . .
    . . . . 8 6 7 6 7 6 8 . . . . .
    . . . . . 8 6 7 6 8 . . . . . .
    . . . . . . 8 8 8 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, paddle, 50, -55)
projectile.setFlag(SpriteFlag.DestroyOnWall, false)
projectile.setBounceOnWall(true)
```

Félicitations ! Tu as maintenant créé les sprites principaux du jeu.

## Partie 2 : Créer les blocs

Dans cette partie de la leçon, nous allons créer les blocs. Va dans `||loops:Loops||`, prends un bloc `||loops:for index from 0 to||` et fais-le glisser dans l'espace de travail. Mets la valeur du champ à **9**. Duplique ce même bloc et place-le à l'intérieur de la première boucle. Change maintenant la valeur du champ de **9** à **2**. Va dans `||variables:Variables||` et crée une nouvelle variable appelée `index2`. Fais ensuite glisser `||variables:index2||` et place-le dans le champ `input` de la deuxième boucle `||loops:for loop||`.

### Créer un décalage

![Décalage des blocs](https://cdn.makecode.com/blob/57586e47db3215df6251a5f8cc66517e544f3c6d/static/lessons/block-out/offset.png)

Dans `||variables:Variables||`, fais glisser un bloc `||variables:set var to||` et place-le dans la deuxième boucle `||loops:for||`. Ouvre la liste déroulante et renomme la variable en **x**. Depuis `||math:Math||`, prends un bloc `||math:_ X _||` et mets-le dans le bloc `||variables:set x to||`. Depuis `||variables:Variables||`, fais glisser un bloc `||variables:index||` dans le premier champ du bloc `||math:_ X _||`. Mets le deuxième champ à **18**.

Maintenant, depuis `||logic:Logic||`, prends une instruction `||logic:if then||` et fais-la glisser dans la deuxième boucle. Fais glisser un bloc `||logic:0 = 0||` depuis `||logic:Logic||` et place-le dans l'instruction `||logic:if then||`. Depuis `||math:Math||`, prends un bloc `||math:remainder of _ / _||` et mets-le dans le premier champ de l'égalité. Depuis Variables, prends un bloc `||variables:index2||` et fais-le glisser dans le premier champ du reste. Mets le deuxième champ du reste à **2**. Enfin, mets le dernier champ de l'égalité à **1**.

Nous allons maintenant décaler les blocs selon la rangée dans laquelle ils apparaissent. Depuis `||variables:Variables||`, prends un bloc `||variables:set x to||` et fais-le glisser dans l'instruction if. Prends un bloc `||math:0 + 0||` dans Math et fais-le glisser dans `||variables:set x to||`. Dans le premier champ, place un bloc `||math:0 x 0||`, puis depuis `||variables:Variables||` prends un bloc `||variables:index||` et fais-le glisser dans le premier champ de `||math:0 x 0||`. Mets maintenant le deuxième champ de `||math:0 x 0||` à **18** et le deuxième champ de `||math:0 + 0||` à **8**.

### ~indice

Ta boucle `||loops:for||` devrait ressembler à ceci.

```blocks
let x=0
for (let index = 0; index <= 9; index++) {
    for (let index2 = 0; index2 <= 2; index2++) {
        x = index * 18
        if (index2 % 2 == 1) {
            x = index * 18 + 8
        }
    }
}
```

### ~

### Faire apparaître les blocs

Maintenant, dans `||variables:Variables||`, prends un bloc `||variables: set x to||` et place-le après l'instruction `||logic:if||`. Ouvre la liste déroulante, clique sur `new variable` et nomme-la `tilePick`. Depuis `||math:Math||`, prends un bloc `||math:pick random||` et règle-le de **0** à **2**.

Prends un bloc `||logic: if then else||` dans `||logic:Logic||` et fais-le glisser après `||variables:set tilePick to||`. Clique sur le symbole **(+)** du nouveau bloc `||logic:if then else||`. Dans les deux champs du bloc `||logic:if then else||`, place un bloc `||logic:0 = 0||` depuis `||logic:Logic||`. Puis depuis `||variables:Variables||`, fais glisser 2 blocs `||variables:tilePick||` et place-les dans le premier champ de chacun des blocs `||logic:0 = 0||`. Mets le deuxième champ de la première partie à **0** et le deuxième champ de la deuxième partie à **1**.

Ensuite, depuis `||sprites:Sprites||`, prends un bloc `||sprites:set monSprite to sprite of kind player||`. Ouvre la première liste déroulante et crée un nouveau nom appelé `tile`. Clique ensuite sur `player`, sélectionne `add a new kind` et nomme-le `block`. Dessine un bloc dans l'éditeur de sprites. Duplique ce bloc et place-le dans la section `||logic:else if||` et dans la section `||logic:else||`. Dessine des tuiles différentes pour chaque partie.

Enfin, depuis `||sprites:Sprites||`, prends un bloc `||sprites:set monSprite position to||` et fais-le glisser après le bloc `||logic:if then else if then else||`. Clique sur `monSprite` et sélectionne `tile`. Puis fais glisser depuis `||variables:Variables||` un bloc `||variables:x||` et place-le dans le champ `x` de `||sprites:set monSprite position to||`. Dans le champ `y`, fais glisser un bloc `||math:0 + 0||`. Dans son premier champ, fais glisser un bloc `||math:0 x 0||` et mets le deuxième champ de `||math:0 x 0||` à **18**. Dans la première partie du bloc `||math:0 x 0||`, mets un bloc `||variables:index2||` depuis `||variables:Variables||`. Mets le dernier champ du bloc `||math:0 + 0||` à **20**.

```blocks
namespace SpriteKind {
    export const block = SpriteKind.create()
}
let tile:Sprite=null
let x = 0
let tilePick = 0
for (let index = 0; index <= 9; index++) {
    for (let index2 = 0; index2 <= 2; index2++) {
        x = index * 18
        if (index2 % 2 == 1) {
            x = index * 18 + 8
        }
        tilePick = randint(0, 2)
        if (tilePick == 0) {
            tile = sprites.create(img`
                8 8 1 1 8 8 6 6 1 7 7 7 1 8 8 9
                8 8 9 1 1 6 6 9 9 8 8 7 1 8 8 9
                7 6 9 9 9 8 8 7 9 8 8 6 6 1 9 9
                7 6 6 1 1 8 8 7 9 1 6 6 1 1 9 9
                7 7 6 1 1 6 6 7 7 8 8 1 1 1 7 9
                8 8 9 1 6 6 9 9 9 8 8 1 6 1 7 9
                8 8 9 9 9 7 8 8 9 6 6 1 6 6 7 7
                7 7 7 8 8 7 8 8 6 6 9 9 9 6 8 8
                7 6 6 8 8 7 7 6 1 7 7 7 9 1 8 8
                6 6 7 7 7 1 1 6 6 7 1 8 8 7 7 7
                1 1 7 9 9 9 1 1 6 1 1 8 8 7 1 9
                8 8 1 1 6 9 8 8 6 1 9 9 9 1 1 9
                8 8 9 1 6 6 8 8 6 6 8 8 9 1 9 9
                7 6 9 9 9 6 9 9 9 6 8 8 6 6 7 7
                7 6 6 8 8 1 6 6 9 7 9 6 6 8 8 7
                7 7 6 8 8 6 6 7 7 7 9 9 9 8 8 7
            `, SpriteKind.block)
        } else if (tilePick == 1) {
            tile = sprites.create(img`
                3 d 1 3 3 3 3 3 3 3 3 3 3 3 3 3
                3 d 1 3 d d d d d d d d d d d 3
                3 d 1 3 d 1 1 1 1 1 1 1 1 1 d 3
                3 d 1 3 d 1 3 3 3 3 3 3 3 1 d 3
                3 d 1 3 d 1 3 d d d d d 3 1 d 3
                3 d 1 3 d 1 3 d 1 1 1 d 3 1 d 3
                3 d 1 3 d 1 3 d 1 3 1 d 3 1 d 3
                3 d 1 3 d 1 3 d 1 3 1 d 3 1 d 3
                3 d 1 3 d 1 3 d d 3 1 d 3 1 d 3
                3 d 1 3 d 1 3 3 3 3 1 d 3 1 d 3
                3 d 1 3 d 1 1 1 1 1 1 d 3 1 d 3
                3 d 1 3 d d d d d d d d 3 1 d 3
                3 d 1 3 3 3 3 3 3 3 3 3 3 1 d 3
                3 d 1 1 1 1 1 1 1 1 1 1 1 1 d 3
                3 d d d d d d d d d d d d d d 3
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            `, SpriteKind.block)
        } else {
            tile = sprites.create(img`
                2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1
                1 2 2 2 2 2 2 2 1 1 1 4 4 4 4 4
                1 1 2 2 2 2 2 4 4 4 4 4 4 4 4 4
                4 4 4 2 2 5 5 5 5 5 5 4 4 4 4 4
                4 4 4 4 2 2 2 2 2 5 5 5 5 5 4 4
                4 4 b b b b b b b 5 5 5 5 5 5 5
                b b b b b b b 5 5 5 5 5 2 2 2 2
                b b b b 5 5 5 5 5 5 5 5 5 5 2 2
                b b b 2 2 2 2 2 2 2 2 2 1 1 1 1
                1 1 1 1 1 1 2 2 2 1 1 1 1 1 1 1
                1 1 4 4 2 2 2 2 2 2 2 1 1 1 1 1
                4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 4
                4 4 4 5 5 5 5 5 5 5 5 5 4 4 4 4
                5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4
                b b b b b 5 5 5 5 5 5 5 5 4 4 4
                . b b b b b b b b b b b 4 4 4 4
            `, SpriteKind.block)
        }
        tile.setPosition(x, index2 * 18 + 20)
    }
}
```

## Partie 3 : Terminer la configuration

Passons maintenant à la fin de la configuration du jeu. Depuis `||info:Info||`, prends un bloc `||info:set score to 0||` et fais-le glisser dans `||loops:on start||`. Change le **0** en **1**. Depuis `||scene:Scene||`, prends un bloc `||scene:set background color to||` et règle-le sur `light pink`. Enfin, depuis `||variables:Variables||`, prends un bloc `||variables:set var to||` et fais-le glisser dans `||loops:on start||`. Ouvre la liste déroulante, clique sur `new variable`, crée une variable appelée **direction** et mets sa valeur à **1**.

```blocks
let direction = 0
info.setScore(1)
scene.setBackgroundColor(13)
direction = 1
```

## Partie 4 : Interactions entre la balle et la raquette

![Balle et raquette](https://cdn.makecode.com/blob/7e6154b6d1c15630eb8114ce95f16fc5c8e4d054/static/lessons/block-out/moving-player.gif)

Pour créer l'interaction, va dans `||sprites:Sprites||`, prends un bloc `||sprites:on sprite of kind player overlaps othersprite of kind player||` et fais-le glisser n'importe où dans ton espace de travail. Remplace le premier `player` par `projectile` et vérifie que le deuxième est réglé sur `player`. Ensuite, depuis `||sprites:Sprites||`, prends un bloc `||sprites:set monSprite velocity to||` et place-le dans `||sprites:on sprite of kind player overlaps||`. Fais glisser `sprite` depuis le bloc `||sprites:overlaps||` dans la partie `monSprite` du bloc de vitesse.

De retour dans `||sprites:Sprites||`, prends un bloc `||sprites:monSprite x||` et fais-le glisser dans le champ `vx`. Fais glisser `sprite` hors du bloc `||sprites:overlap||` et place-le sur `monSprite` dans le champ `vx`. Clique maintenant sur la liste déroulante `x` et sélectionne `vx (velocity x)`.

Depuis `||math:Math||`, prends un bloc `||math:0 x 0||` et place-le dans la partie `vy` du bloc de vitesse. Mets le premier champ du bloc à **-1** et, dans `||sprites:Sprites||`, prends un bloc `||sprites:monSprite x||` et fais-le glisser dans le deuxième champ. Ouvre la liste déroulante et sélectionne `vy (velocity y)`. Fais glisser `sprite` depuis le bloc `||sprites:overlap||` et place-le sur `monSprite` dans `||sprites:monSprite vy||`.

```blocks
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, autreSprite) {
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
})
```

## Partie 5 : Rebond directionnel

![Rebond directionnel](https://cdn.makecode.com/blob/16518e3b0e6ec1f767d1652c49826d20b96a7f47/static/lessons/block-out/directional-bouncing.gif)

Lorsque notre balle entre en collision avec un bloc, nous voulons pouvoir détecter de quel côté du bloc elle a rebondi. Dans notre implémentation, nous allons créer une fonction pour cet événement. Pour cela, va dans `Advanced` pour trouver `||functions:Functions||` et clique sur `Make a Function...`. L'éditeur de fonctions s'ouvre alors. Tape **getPos** à la place de **doSomething**. Cela représentera la position de la balle par rapport au bloc. Clique sur `Sprite` dans la barre du haut. Un nouveau **paramètre** est alors ajouté. Nomme-le **sprite**. Clique à nouveau sur `Sprite` dans la barre du haut. Un autre paramètre apparaît, nomme-le **autreSprite**.

![Créer des fonctions](https://cdn.makecode.com/blob/b8252aad434b0d514cd4140c6da3d607d53ae6b7/static/lessons/block-out/creating-functions.gif)

### ~indice

#### La définition d'un paramètre

Une fonction peut être appelée n'importe où dans le code. Une fonction peut avoir des paramètres de différents types. Cela signifie que, lorsque la fonction est appelée, des éléments comme des variables peuvent lui être transmis pour être modifiés ou édités.

### ~

Depuis `||logic:Logic||`, prends un bloc `||logic: if then else||` et place-le dans la fonction. Maintenant, depuis `||logic:Logic||`, prends un bloc `||logic:_ or _||` et place-le dans l'instruction `||logic:if||`.

Depuis `||logic:Logic||`, prends un bloc `||logic:0 < 0||` et place-le dans le premier champ du bloc `||logic:_ or _||`. Ensuite, dans le premier champ du bloc `||logic:0 < 0||`, place un bloc `||sprites:monSprite x||` depuis `||sprites:Sprites||`. Fais glisser `sprite` depuis le bloc de fonction et place-le sur `monSprite`. Dans le deuxième champ, place un bloc `||math:0 - 0||` depuis `||math:Math||`. Mets son deuxième champ à **8**. Dans la première partie du bloc `||math:0-0||`, place un bloc `||sprites:monSprite x||`. Fais glisser un `autreSprite` depuis la fonction et place-le sur `monSprite`.

Duplique le bloc entier (celui qui au départ n'était que `||logic:0 < 0||`) et place-le dans le deuxième champ de la condition `||logic:or||`. Remplace le signe `<` par un signe `>`. Puis, dans le bloc mathématique, remplace le signe `-` par un signe `+`. Dans l'instruction `||logic:if||`, place ensuite un bloc `||variables:set var to||` depuis `||variables:Variables||`. Ouvre la liste déroulante et sélectionne `direction`. Tape ensuite **1**. Dans l'instruction `||logic:else||`, place un bloc `||variables:set var to||` depuis `||variables:Variables||`. Ouvre la liste déroulante et sélectionne `direction`. Tape ensuite **0**.

Bravo, nous avons maintenant créé une fonction !

```blocks
let direction = 0
function getPos (sprite: Sprite, autreSprite: Sprite) {
    if (sprite.x < autreSprite.x - 8 || sprite.x > autreSprite.x + 8) {
        direction = 1
    } else {
        direction = 0
    }
}
```

## Partie 6 : Créer les collisions avec les blocs

![Rebond](https://cdn.makecode.com/blob/16518e3b0e6ec1f767d1652c49826d20b96a7f47/static/lessons/block-out/directional-bouncing.gif)

Dans notre jeu, quand le joueur entre en collision avec un bloc, la balle doit rebondir, le bloc doit être détruit et le score doit augmenter.

Depuis `||sprites:Sprites||`, prends un bloc `||sprites:on sprite of kind player overlaps||` et place-le dans l'espace de travail. Change le premier type de `player` à `projectile`. Puis change le deuxième type de `player` à `block`. Depuis `||info:Info||`, fais glisser un bloc `||info:change score by 1||` et place-le dans le nouveau bloc `||sprites:overlap||`. Ensuite, dans `||functions:Functions||`, prends un bloc `||functions:call getPos monSprite monSprite||` et place-le après le bloc `score`.

Prends maintenant un bloc `||logic:if then else||` dans `||logic:Logic||` et place-le après `||functions:call getPos||`. Depuis `||logic:Logic||`, prends un bloc `||logic:0 = 0||` et place-le dans l'instruction `||logic:if||`. Change le deuxième **0** en **1**. Depuis `||variables:Variables||`, fais glisser un bloc `||variables:direction||` et place-le à l'emplacement du premier **0**.

Dans la première partie de l'instruction `||logic:if||`, place un bloc `||sprites:set monSprite velocity to||` depuis `||sprites:Sprites||`. Fais glisser un `sprite` depuis le bloc `||sprites:overlaps||` et place-le sur `monSprite`. Dans le champ `vx`, fais glisser un bloc `||math:0 x 0||` depuis `||math:Math||`. Dans le premier champ du bloc `||math:0 x 0||`, tape **-1** et dans le deuxième champ, fais glisser un bloc `||sprites:monSprite x||` depuis `||sprites:Sprites||`. Fais glisser un `sprite` depuis le bloc `||sprites::overlaps||` et place-le sur `monSprite`. Ouvre ensuite la liste déroulante et choisis `vx (velocity x)`. Dans la partie `vy`, fais glisser un bloc `||math:0 x 0||` depuis `||math:Math||` et mets le premier champ à **-1**. Ajoute un bloc `||sprites:monSprite x||` depuis `||sprites:Sprites||`. Fais glisser un `sprite` depuis le bloc `||sprites:overlaps||` et place-le sur `monSprite`. Ouvre ensuite la liste déroulante et choisis `vy (velocity y)`.

Duplique le bloc `||sprites:set monSprite velocity to||` entier et place-le dans l'instruction `||logic:else||`. Fais sortir les champs `vx` et `vy` et intervertis-les. Dans le premier champ, qui correspond à `vx`, règle la liste déroulante sur `vx (velocity x)`. Dans le deuxième champ, qui correspond à `vy`, et à l'intérieur de `||math:-1x(sprite)vx velocity x||`, règle la liste déroulante sur `vy (velocity y)`.

Enfin, en dehors de l'instruction `||logic:if||`, fais glisser un bloc `||sprites:destroy monSprite||` depuis `||sprites:Sprites||`. Fais glisser un `autreSprite` depuis le bloc `||sprites:overlaps||` et place-le sur `monSprite`.

```blocks
let direction = 0
namespace SpriteKind {
    export const block = SpriteKind.create()
}
function getPos(sprite: Sprite, autreSprite: Sprite) {
    if (sprite.x < autreSprite.x - 8 || sprite.x > autreSprite.x + 8) {
        direction = 1
    } else {
        direction = 0
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.block, function (sprite, autreSprite) {
    info.changeScoreBy(1)
    getPos(sprite, autreSprite)
    if (direction == 1) {
        sprite.setVelocity(-1 * sprite.vx, sprite.vy)
    } else {
        sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    }
    autreSprite.destroy()
})
```

## Partie 7 : Terminer le jeu

Depuis `||loops:Loops||`, fais glisser un bloc `||loops:forever block||` et place-le n'importe où dans l'espace de travail. Depuis `||logic:Logic||`, fais glisser un bloc `||logic:if then||` et place-le dans la boucle `||loops:forever||`. Depuis `||logic:Logic||`, fais glisser un bloc `||logic:0 > 0||` et place-le dans l'instruction `||logic:if||`. Mets le deuxième champ à **119**. Puis depuis `||sprites:Sprites||`, fais glisser un bloc `||sprites:monSprite x||` et place-le dans le premier champ. Règle `monSprite` sur `projectile` et `x` sur `bottom`. Dans l'instruction `|logic:if||`, fais glisser un bloc `||game:use effect||` et règle l'interrupteur sur `LOSE`. Clique ensuite sur le symbole **(+)** pour régler l'effet sur `slash`. Prends un bloc `||game:game over win||` dans `||game:Game||`. Règle l'interrupteur sur `LOSE`.

Ensuite, depuis `||logic:Logic||`, fais glisser un bloc `||logic:if then||` et place-le dans la boucle `||loops:forever||`. Depuis `||logic:Logic||`, fais glisser un bloc `||logic:0 = 0||` et place-le dans l'instruction `||logic:if||`. Mets le deuxième champ à **30**. Pour le premier champ, fais glisser `||info:score||` depuis `||info:Info||`. Dans l'instruction `|logic:if||`, fais glisser un bloc `||game:use effect||` et clique sur le symbole **(+)** pour régler l'effet sur `confetti`. Prends un bloc `||game:game over||` dans `||game:Game||`.

```blocks
info.setScore(1)
let projectile: Sprite = null
forever(function () {
    if (projectile.bottom > 119) {
        game.setGameOverEffect(false, effects.slash)
        game.gameOver(false)
    }
    if (info.score() == 2) {
        game.setGameOverEffect(true, effects.confetti)
        game.gameOver(true)
    }
})
```

Nous avons maintenant un jeu entièrement fonctionnel !

## Jeu final

```blocks
namespace SpriteKind {
    export const block = SpriteKind.create()
}
function getPos (sprite: Sprite, autreSprite: Sprite) {
    if (sprite.x < autreSprite.x - 8 || sprite.x > autreSprite.x + 8) {
        direction = 1
    } else {
        direction = 0
    }
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Player, function (sprite, autreSprite) {
    sprite.setVelocity(sprite.vx, -1 * sprite.vy)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.block, function (sprite, autreSprite) {
    info.changeScoreBy(1)
    getPos(sprite, autreSprite)
    if (direction == 1) {
        sprite.setVelocity(-1 * sprite.vx, sprite.vy)
    } else {
        sprite.setVelocity(sprite.vx, -1 * sprite.vy)
    }
    autreSprite.destroy()
})
let direction = 0
let tile: Sprite = null
let tilePick = 0
let x = 0
let paddle = sprites.create(img`
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . b b b b b b b b b b b b b b b b b b b b b b . . . . . .
    . . . . b b b b b b b b b b b b b b b b b b b b b b . . . . . .
    . . . . b b b b b b b b b b b b b b b b b b b b b b . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .
`, SpriteKind.Player)
paddle.setPosition(79, 100)
paddle.setStayInScreen(true)
controller.moveSprite(paddle, 100, 0)
let projectile = sprites.createProjectileFromSprite(img`
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . 9 9 9 . . . . . . .
    . . . . . 9 6 7 6 9 . . . . . .
    . . . . 9 6 7 6 7 6 9 . . . . .
    . . . . 1 7 1 7 1 7 1 . . . . .
    . . . . 8 6 7 6 7 6 8 . . . . .
    . . . . . 8 6 7 6 8 . . . . . .
    . . . . . . 8 8 8 . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
    . . . . . . . . . . . . . . . .
`, paddle, 50, -55)
projectile.setFlag(SpriteFlag.DestroyOnWall, false)
projectile.setBounceOnWall(true)
for (let index = 0; index <= 9; index++) {
    for (let index2 = 0; index2 <= 2; index2++) {
        x = index * 18
        if (index2 % 2 == 1) {
            x = index * 18 + 8
        }
        tilePick = randint(0, 2)
        if (tilePick == 0) {
            tile = sprites.create(img`
                8 8 1 1 8 8 6 6 1 7 7 7 1 8 8 9
                8 8 9 1 1 6 6 9 9 8 8 7 1 8 8 9
                7 6 9 9 9 8 8 7 9 8 8 6 6 1 9 9
                7 6 6 1 1 8 8 7 9 1 6 6 1 1 9 9
                7 7 6 1 1 6 6 7 7 8 8 1 1 1 7 9
                8 8 9 1 6 6 9 9 9 8 8 1 6 1 7 9
                8 8 9 9 9 7 8 8 9 6 6 1 6 6 7 7
                7 7 7 8 8 7 8 8 6 6 9 9 9 6 8 8
                7 6 6 8 8 7 7 6 1 7 7 7 9 1 8 8
                6 6 7 7 7 1 1 6 6 7 1 8 8 7 7 7
                1 1 7 9 9 9 1 1 6 1 1 8 8 7 1 9
                8 8 1 1 6 9 8 8 6 1 9 9 9 1 1 9
                8 8 9 1 6 6 8 8 6 6 8 8 9 1 9 9
                7 6 9 9 9 6 9 9 9 6 8 8 6 6 7 7
                7 6 6 8 8 1 6 6 9 7 9 6 6 8 8 7
                7 7 6 8 8 6 6 7 7 7 9 9 9 8 8 7
            `, SpriteKind.block)
        } else if (tilePick == 1) {
            tile = sprites.create(img`
                3 d 1 3 3 3 3 3 3 3 3 3 3 3 3 3
                3 d 1 3 d d d d d d d d d d d 3
                3 d 1 3 d 1 1 1 1 1 1 1 1 1 d 3
                3 d 1 3 d 1 3 3 3 3 3 3 3 1 d 3
                3 d 1 3 d 1 3 d d d d d 3 1 d 3
                3 d 1 3 d 1 3 d 1 1 1 d 3 1 d 3
                3 d 1 3 d 1 3 d 1 3 1 d 3 1 d 3
                3 d 1 3 d 1 3 d 1 3 1 d 3 1 d 3
                3 d 1 3 d 1 3 d d 3 1 d 3 1 d 3
                3 d 1 3 d 1 3 3 3 3 1 d 3 1 d 3
                3 d 1 3 d 1 1 1 1 1 1 d 3 1 d 3
                3 d 1 3 d d d d d d d d 3 1 d 3
                3 d 1 3 3 3 3 3 3 3 3 3 3 1 d 3
                3 d 1 1 1 1 1 1 1 1 1 1 1 1 d 3
                3 d d d d d d d d d d d d d d 3
                3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3
            `, SpriteKind.block)
        } else {
            tile = sprites.create(img`
                2 2 2 1 1 1 1 1 1 1 1 1 1 1 1 1
                1 2 2 2 2 2 2 2 1 1 1 4 4 4 4 4
                1 1 2 2 2 2 2 4 4 4 4 4 4 4 4 4
                4 4 4 2 2 5 5 5 5 5 5 4 4 4 4 4
                4 4 4 4 2 2 2 2 2 5 5 5 5 5 4 4
                4 4 b b b b b b b 5 5 5 5 5 5 5
                b b b b b b b 5 5 5 5 5 2 2 2 2
                b b b b 5 5 5 5 5 5 5 5 5 5 2 2
                b b b 2 2 2 2 2 2 2 2 2 1 1 1 1
                1 1 1 1 1 1 2 2 2 1 1 1 1 1 1 1
                1 1 4 4 2 2 2 2 2 2 2 1 1 1 1 1
                4 4 4 4 4 4 2 2 2 2 2 2 2 2 2 4
                4 4 4 5 5 5 5 5 5 5 5 5 4 4 4 4
                5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4
                b b b b b 5 5 5 5 5 5 5 5 4 4 4
                . b b b b b b b b b b b 4 4 4 4
            `, SpriteKind.block)
        }
        tile.setPosition(x, index2 * 18 + 20)
    }
}
info.setScore(1)
scene.setBackgroundColor(13)
direction = 1
forever(function () {
    if (projectile.bottom > 119) {
        game.setGameOverEffect(false, effects.slash)
        game.gameOver(false)
    }
    if (info.score() == 30) {
        game.setGameOverEffect(true, effects.bubbles)
        game.gameOver(true)
    }
})
```

![Jeu fonctionnel](https://cdn.makecode.com/blob/a98cec6c8eee735ada2b8087b3cc6d8ba9e8adad/static/lessons/block-out/working-game.gif)