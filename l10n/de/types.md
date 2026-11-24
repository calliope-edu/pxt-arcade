# Types

Ein *Typ* bezieht sich auf eine Art von Daten und die für diese Daten zulässigen Operationen. Die folgenden integrierten Typen werden für den @boardname@ unterstützt:

## Grundlegende (primitive) Typen #primitives

* **[Number](/types/number)**: eine ganze Zahl (32 Bit mit Vorzeichen)
* **[String](/types/string)**: eine Folge von Zeichen
* **[Boolean](/types/boolean)**: wahr oder falsch

## Komplexe Typen #complex

* **[Array](/types/array)**: eine Liste von Elementen eines primitiven Typs

## Funktionen

* **[Function](types/function)**: Code, den du überall in einem Programm wiederverwenden kannst 

## Bilder und Sprites #custom

* **[Image](/types/image)**: Zeilen und Spalten farbiger Pixel, die ein Bild ergeben
* **[Sprite](/types/sprite)**: ein Objekt, mit dem ein Bild positioniert und bewegt wird
## Benutzerdefinierte Daten

Mit TypeScript kannst du eigene Datenklassen erstellen.

```typescript
class Foo {
    public bar: number;
    baz() {

    }
}
```
