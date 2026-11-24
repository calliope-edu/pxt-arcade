# run In Parallel

Exécute un autre code en même temps que le code principal de ton programme.

```sig
control.runInParallel(() => {})
```

Parfois, tu veux que ton programme travaille sur plusieurs choses à la fois. La partie principale de ton programme est
toujours placée dans [``||on start||``](/blocks/on-start). Mais tu peux aussi placer une autre partie de ton
programme dans ``||control:run in parallel||``. C'est utile lorsque tu veux que ton programme continue à faire des choses importantes
sans devoir attendre que d'autres actions se produisent d'abord.

## Tâches séparées #tasks

Par exemple, tu pourrais avoir une petite tâche qui fait tourner un bit dans une chaîne de 16 caractères
composée de zéros. Elle est placée dans un bloc ``||control:run in parallel||`` :

```blocks
let bitPos = 0
let rorit = true
let zeros = ""

control.runInParallel(function() {
    while (rorit) {
        if (bitPos > 15) {
            bitPos = 0
        }
        zeros = ""
        for (let i = 0; i < 16; i++) {
            if (bitPos == i) {
                zeros = zeros + "1"
            } else {
                zeros = zeros + "0"
            }
        }
        console.log(zeros)
        pause(200)
    }
})
```

Du code est ajouté à la partie principale du programme pour activer la rotation du bit, faire une pause de `5` secondes puis la désactiver. Il fait une nouvelle pause de `5` secondes puis essaie de réactiver la rotation du bit. Cependant, la tâche parallèle est terminée et
la rotation du bit ne redémarrera pas.

```blocks
let rorit = true
pause(5000)
rorit = false
pause(5000)
rorit = true
```

## Paramètres

* **a** : le code à exécuter en arrière-plan.

## Exemple #example

Utilise une tâche parallèle pour générer un nombre magique. Dans le programme principal, vérifie deux fois la valeur du nombre magique. La première fois, vérifie la valeur tout de suite. La
deuxième fois, vérifie-la `2` secondes plus tard, une fois que la tâche parallèle a eu le temps de s'exécuter.

```blocks
let magic = 0

control.runInParallel(function() {
    magic = Math.randomRange(1000, 5000) 
})

console.logValue("magic", magic)
pause(2000)
console.logValue("magic", magic)
```

## #seealso
