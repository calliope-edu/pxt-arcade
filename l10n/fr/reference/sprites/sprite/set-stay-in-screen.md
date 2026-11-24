# définir rester à l'écran

Fais en sorte qu'un sprite reste toujours dans la vue de l'écran.

```sig
sprites.create(null).setStayInScreen(false)
```

Tu peux faire en sorte que ton sprite reste toujours dans la vue de l'écran. Cela définit un [indicateur](/reference/sprites/sprite/set-flag#stay-in-screen) de sprite qui garde le sprite à l'écran, même si sa position ou son mouvement le ferait sortir de la vue de l'écran.

## Paramètres

* **on** : une valeur [booléenne](/types/boolean) pour définir l'indicateur ``stay in screen`` du sprite. Une valeur ``true`` signifie **ON** et une valeur ``false`` signifie **OFF**.

## Exemple

Fais apparaître un sprite à l'écran, même si sa position initiale est hors de l'écran et que son mouvement l'enverrait au-delà du bord de l'écran.

```blocks
let monSprite = sprites.create(img`
    . . . . . 2 2 2 2 2 2 . . . . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
    . . 2 2 2 2 2 2 2 2 2 2 2 2 . . 
    . . . 2 2 2 2 2 2 2 2 2 2 . . . 
    . . . . . 2 2 2 2 2 2 . . . . . 
    `, SpriteKind.Player)
monSprite.setFlag(SpriteFlag.StayInScreen, true)
pause(500)
monSprite.left = -20
monSprite.top = -50
pause(500)
monSprite.vx = 30
```

## Voir aussi

[définir l'indicateur](/reference/sprites/sprite/set-flag), [définir rebondir sur les murs](/reference/sprites/sprite/set-bounce-on-wall)