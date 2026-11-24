# Arène des insectes : aller-retour
### @hideReplaceMyCode true

## Présentation de l'arène des insectes @showdialog

Bienvenue dans l'👾 **Arène des insectes** 👾, où les insectes les plus malins se battent pour la gloire !

Regarde cette vidéo de présentation pour commencer, puis clique sur OK.

![Présentation de l'arène](youtube:U_bcAht2o0A "vidéo de présentation de l'arène des insectes")

## Algorithme aller-retour @showdialog

![Arène des insectes aller-retour](/static/skillmap/bug-arena/back-and-forth.gif "animation d'un motif aller-retour")

💡 Bonne idée d'avoir choisi cet algorithme – des millions de tondeuses à gazon ne peuvent pas se tromper ! 🚜

Suis ces instructions pour programmer l'algorithme d'IA ✨ de ton insecte afin qu'il fasse des allers-retours sur l'écran.

## Choisir la direction

Notre insecte se déplace tout seul, mais il est important qu'il parte dans la bonne direction ! 🗺️

Depuis la catégorie ``||hourOfAi:Bug AI||`` de la boîte à outils, fais glisser un bloc ``||hourOfAi:face towards 0||`` et dépose-le dans le bloc ``||hourOfAi:on start||``.

~hint Ça sert à quoi ?

---

``||hourOfAi:Face towards||`` oriente ton insecte vers un angle précis en degrés, où :
- 0 = droite
- 90 = bas
- 180 = gauche
- 270 = haut

![Face towards en degrés](/static/skillmap/bug-arena/degrees.png "face towards en degrés")

Notre insecte va donc d'abord se diriger vers le bord droit de l'écran.

hint~

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onStart(function () {
    //@highlight
    hourOfAi.turnTowards(0)
})
```

## 🧱 Contre le mur

Dans la fenêtre de jeu 🖼️ en bas à droite, clique sur le bouton **Practice**.

Puis choisis **No Opponent** et **Infinite**.

Tu vois ton insecte avancer vers la droite ? Super ! 😊 Mais que se passe-t-il quand il arrive de l'autre côté de l'écran ?

Rien 🥺 Alors ajoutons du code pour le moment où il touche un mur.

Depuis la catégorie ``||hourOfAi:Bug AI||``, fais glisser un bloc ``||hourOfAi:on bump wall||`` dans l'espace de travail – tu peux le poser n'importe où.

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onBumpWall(function () {

})
```

## Tourner de 90 degrés

Depuis la catégorie ``||hourOfAi:Bug AI||``, fais glisser un bloc ``||hourOfAi:turn 90||`` et dépose-le dans le bloc ``||hourOfAi:on bump wall||``.
<br/>
<br/>

~hint Que fait turn 90 ?

---

Le bloc de rotation ↩️ fait tourner notre insecte d'un certain nombre de degrés par rapport à sa direction actuelle. Un nombre positif ➕ tourne dans le sens des aiguilles d'une montre, un nombre négatif ➖ dans le sens inverse.

![Angle de rotation](/static/skillmap/bug-arena/turn-angle.png "angle de rotation")

hint~

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onBumpWall(function () {
    //@highlight
    hourOfAi.turnBy(90)
})
```

## ⬇️ Descendre

On veut tourner notre insecte de 90 degrés pour qu'il regarde vers le bas ⤵️, le faire avancer un peu ⬇️, puis le tourner encore de 90 degrés pour qu'il reparte dans l'autre sens. ↩️

Pour cela, il nous faut un bloc qui attend un certain temps ⏱️ avant de tourner à nouveau.

Depuis la catégorie ``||hourOfAi:Bug AI||``, fais glisser un bloc ``||hourOfAi:run after 1000 ms||`` et dépose-le sous le bloc ``||hourOfAi:turn 90||``.

~hint Ça sert à quoi ?

---

Le bloc ``||hourOfAi:run after||`` exécute le code qu'il contient après avoir attendu un temps donné ⏳. Ici, on attend 1 seconde, soit 1000 millisecondes (ms), avant de faire demi-tour.

hint~

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(90)
    //@highlight
    hourOfAi.doAfter(1000, function () {
 
    })
})
```

## ↩️ Fais demi-tour

Depuis la catégorie ``||hourOfAi:Bug AI||``, fais glisser un autre bloc ``||hourOfAi:turn 90||`` et dépose-le dans le bloc ``||hourOfAi:run after||``.

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onBumpWall(function () {
    hourOfAi.turnBy(90)
    hourOfAi.doAfter(1000, function () {
        //@highlight
        hourOfAi.turnBy(90)
    })
})
```

## 🚜 On tond !

Testons notre algorithme d'IA pour voir comment il se débrouille. 💫

Regarde dans la 🕹️ fenêtre de jeu. Que se passe-t-il ? 

Notre insecte fait bien des allers-retours, mais il reste tout en haut de l'écran ! ➡️⬅️

Comment faire pour que notre insecte continue de descendre ⬇️ et remplisse toute l'arène ?

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

## Crée une variable

On doit changer le sens dans lequel notre insecte tourne à chaque fois qu'il touche un mur. D'abord il tourne vers la droite ➡️ (90 degrés), puis on veut qu'il tourne vers la gauche ⬅️ (-90 degrés), et ainsi de suite, en alternance.

Pour cela, créons d'abord une variable.

Ouvre la catégorie ``||Variables:Variables||`` dans la boîte à outils et clique sur le bouton **Créer une variable...**.  

Appelle la variable **angle** et clique sur OK.

~hint C'est quoi, une variable ?

---

Une **variable** est comme un récipient 🪣 qui contient une valeur. Les variables ont un nom pour que tu puisses facilement les utiliser dans ton programme. Et la valeur d'une variable peut changer.

hint~

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

## Donner une valeur à la variable

Depuis la catégorie ``||Variables:Variables||``, fais glisser un bloc ``||Variables:définir angle à 0||`` dans le bloc ``||hourOfAi:on start||``.

Tape **-90** comme valeur de la variable angle, à la place du **0**.

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
let angle = 0
hourOfAi.onStart(function () {
    hourOfAi.turnTowards(0)
    //@highlight
    angle = -90
})
```
## Changer la valeur de la variable contre le mur

Depuis la catégorie ``||Variables:Variables||``, fais glisser un autre bloc ``||Variables:définir angle à 0||`` tout en haut du bloc ``||hourOfAi:on bump wall||``.

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onBumpWall(function () {
    //@highlight
    angle = 0
    hourOfAi.turnBy(90)
    hourOfAi.doAfter(1000, function () {
        hourOfAi.turnBy(90)
    })
})
```

## Multiplier par -1

Pour alterner entre 90 et -90 degrés, on multiplie par -1.

Depuis la catégorie ``||Math:Maths||`` de la boîte à outils, fais glisser un bloc ``||Math:multiplication||`` et dépose-le dans le bloc ``||Variables:définir angle à||``, à la place du **0**.

Depuis la catégorie ``||Variables:Variables||``, fais glisser un bloc ``||Variables:angle||`` et dépose-le dans le bloc ``||Math:multiplication||``, à la place du premier **0**.

Tape **-1** comme deuxième valeur dans le bloc ``||Math:multiplication||``.

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onBumpWall(function () {
    //@highlight
    angle = angle * -1
    hourOfAi.turnBy(90)
    hourOfAi.doAfter(1000, function () {
        hourOfAi.turnBy(90)
    })
})
```

## Angle de rotation

Il faut maintenant remplacer nos rotations de 90 degrés par notre variable ``||Variables:angle||``.

Depuis la catégorie ``||Variables:Variables||``, fais glisser deux blocs ``||Variables:angle||`` et dépose-en un dans chaque bloc ``||hourOfAi:turn||``, à la place des **90** degrés.

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
hourOfAi.onBumpWall(function () {
    angle = angle * -1
    //@highlight
    hourOfAi.turnBy(angle)
    hourOfAi.doAfter(1000, function () {
        //@highlight
        hourOfAi.turnBy(angle)
    })
})
```

## 🎉 Bien joué ! 🎉

Teste à nouveau ton jeu dans la 🕹️ fenêtre de jeu.

Tu peux pousser le curseur **SPEED** vers la droite ➡️ pour voir ton insecte faire des allers-retours et remplir l'écran d'une peinture magnifique !

👏 Beau travail ! Tu as programmé un algorithme d'IA malin ✨ qui va faucher 🍃 tes adversaires dans l'arène des insectes !

Passe maintenant à la 🏰 bataille de la tour pour défier tes insectes rivaux !

```blockconfig.local
hourOfAi.doAfter(1000, function () {

})
```

```blocks
let angle = 0
hourOfAi.onStart(function () {
    hourOfAi.turnTowards(0)
    angle = -90
})
hourOfAi.onBumpWall(function () {
    angle = angle * -1
    hourOfAi.turnBy(angle)
    hourOfAi.doAfter(1000, function () {
        hourOfAi.turnBy(angle)
    })
})
```

```template
hourOfAi.onStart(function () {
	
})
```

```package
bug-arena=github:riknoll/bug-arena
```
