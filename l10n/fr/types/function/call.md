# Appel de fonction

Utilisez une fonction par son nom dans un programme.

```sig
function doSomething(){}
doSomething();
```

Si vous avez fait une fonction dans votre programme, elle peut fonctionner comme un bloc dans d'autres parties de votre programme. Pour utiliser votre fonction, vous effectuez un *appel de fonction*. C'est comme appeler un ami à l'aide. La fonction contient un code à l'intérieur qui fera quelque chose pour aider votre autre code. Donc, vous *appelez* votre fonction pour aider à obtenir quelque chose qui sera fait maintenant. Comme ça:

```blocks
let side = 0;
let volume = 0;
function cubeit() {
    volume = side * side * side;
}

side = 15;
cubeit();
side = 21;
cubeit();
```

Dans l'exemple, la fonction **cubeit** est appelée deux fois pour calculer le volume de cubes avec des tailles différentes. Le code dans la fonction reste en un seul endroit. Il n'a pas besoin d'être copié dans le programme à chaque endroit où vous voulez calculer le volume d'un cube. C'est vraiment pratique! Votre code est réutilisable.

## Voir aussi #seealso

[define](/types/function/define), [return](/types/function/return)