# retourner

Retourne une valeur de résultat d'une fonction au programme.

```sig
function doSomething(){
    return 0
}
doSomething()
```

Si vous avez fait une fonction dans votre programme, elle peut fonctionner comme un bloc dans d'autres parties de votre programme. Si le but de votre fonction est de produire un résultat que votre programme utilisera, vous pouvez _retourner_ une valeur depuis la fonction. Cela se fait avec une instruction **return** dans la fonction.

Vous pouvez affecter la valeur de retour d'une fonction à une variable ou l'utiliser dans une expression comme ceci :

```blocks
let result = 0
function oneToTen() {
    return Math.randomRange(0, 10)
}

if (oneToTen() > 5) {
    result = oneToTen()
}
```

L'instruction return est généralement placée à la fin de la fonction. Vous pouvez cependant mettre une instruction return n'importe où dans la fonction. L'exécution du code de la fonction s'arrête lorsqu'elle atteint une instruction return. On considère que c'est un bon style de programmation de placer l'instruction return à la fin de la fonction.

## Exemple #example

Une fonction calcule le volume d'un cube. La valeur du résultat est retournée au programme.

```blocks
let side = 0;
let volume = 0;
function cubeit() {
    return side * side * side;
}

side = 15;
volume = cubeit();
side = 21;
volume = cubeit();
```

Dans l'exemple, la fonction **cubeit** est appelée deux fois pour calculer le volume de cubes de tailles différentes. Le code dans la fonction reste en un seul endroit. Il n'a pas besoin d'être copié dans le programme à chaque endroit où vous voulez calculer le volume d'un cube. C'est vraiment pratique! Votre code est réutilisable.

## Voir aussi #seealso

[call](/types/function/call), [define](/types/function/define)
