## Ajouter un sprite principal

Ajoute un sprite principal à ton projet.

Ton sprite principal est généralement ton joueur, mais il peut aussi s'agir de texte ou d'un autre élément mis en avant.

Si ton sprite principal est un joueur, tu voudras probablement pouvoir le déplacer avec la manette. Tu voudras sans doute aussi le garder à l'écran ou faire en sorte que la caméra le suive quand il quitte la zone de jeu.


### Exemple de code

Garder le sprite principal à l'écran :

```block
let monSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(monSprite)
monSprite.setFlag(SpriteFlag.StayInScreen, true)

```


Suivre le sprite principal avec la caméra :

```block
let monSprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(monSprite)
scene.cameraFollowSprite(monSprite)

```

### Configurer ton nouveau sprite

En général, tu ajouteras le code de configuration de ton sprite dans le conteneur **au démarrage**. Si tu es plus avancé, tu peux configurer ton sprite dans une fonction et appeler cette fonction dans **au démarrage**.

#### Donner un nom au sprite

Le premier argument du bloc **définir [monSprite] à** est le nom de [__*variable*__](#varied "une étiquette qui réserve la place pour quelque chose qui peut changer") qui représente le sprite dans ton programme. Par exemple, si tu appelles ton sprite **monSprite**, tu dois veiller à choisir **monSprite** dans les autres blocs qui définissent ses propriétés.


#### Définir le type du sprite

Le dernier argument du bloc **définir [monSprite] à** est le [__*type*__](#kindness "le groupe (ou la classe) auquel il appartient"). En le définissant, tu choisis le groupe auquel le sprite appartient. En général, si tu définis un sprite comme joueur principal, tu garderas le **type** sur **Player**.


#### Modifier l'image du sprite

Clique sur le carré gris (à l'intérieur de l'ovale gris) pour ouvrir l'éditeur d'images. De là, tu peux faire l'une de ces trois choses :

1. Dessiner une image dans l'**éditeur d'images**
![éditeur d'images](/static/reference/image-editor-01.jpg "Voici l'éditeur d'images" )

2. Passer à **Galerie** et choisir une image dans la bibliothèque principale
![galerie](/static/reference/image-editor-02.jpg "Voici la galerie" )

3. Passer à **Ressources** et choisir une image dans la bibliothèque du projet
![ressources](/static/reference/image-editor-03.jpg "Voici l'éditeur de ressources" )


#### Dessiner avec l'éditeur d'images

L'éditeur d'images d'Arcade est un système de dessin en pixels où tu peux dessiner avec ta palette de 16 couleurs.

Voici la liste des outils dont tu disposes :
![éditeur d'images annoté](/static/reference/image-editor-04.jpg "Éditeur d'images annoté")
