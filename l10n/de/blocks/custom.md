# Benutzerdefinierte Blöcke

Diese Seite bietet eine kurze Einführung in die Definition eigener Blöcke in Makecode.

## Benutzerdefinierte Blöcke? Ich kann sie nicht im Editor finden!

Das stimmt. Es ist möglich, deine eigenen Funktionen in JavaScript zu definieren und diese mit Hilfe von einigen speziellen Kommentar-Makros in Blöcke zu verwandeln.

Jede exportierte JavaScript-Funktion kann in einen Block verwandelt werden, indem ein `//% block` Kommentar hinzugefügt wird:

```typescript
namespace fun {
    /**
    * Berechnet die berühmte Fibonacci-Zahlenfolge!
    */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
}
```

Es gibt verschiedene Optionen, das Auftreten deiner Blöcke zu steuern. Wir generieren ein paar von denen in der Vorlage, um dir zu helfen. Für die komplette Anleitung, lies https://makecode.com/defining-blocks.

## Speichern von Blöcken innerhalb eines Projekts

Fügen keine Blockdefinitionen direkt in `main.ts` ein, da diese als graue Blöcke angezeigt werden. Führe stattdessen folgende Schritte aus um eine neue Datei, `custom.ts`, hinzuzufügen und alle Blöcke dieser Datei hinzuzufügen.

Um `custom.ts` deinem Projekt hinzuzufügen, machst du folgendes:

* gehe zu JavaScript
* klicke auf die **Explorer**-Ansicht und erweitere diese
* klicke auf das `+`, welches gerade erschienen ist
* akzeptiere den Dialog um `custom.ts` deinem Projekt hinzuzufügen

Wenn du diese Datei bereits dem Projekt hinzugefügt hast, navigiere einfach in der Ansicht **Explorer** zu ihr.

## Verwendung eines gemeinsamen Projekts in **Erweiterungen**

Du kannst ein freigegebenes Projekt als abhängiges Paket hinzufügen und alle Blöcke dieses Projekts wiederverwenden. Klicke dazu auf **Erweiterungen**, füge den Link des freigegebenen Projekts ein und suche.

## Entwicklungszyklus

Sobald `custom.ts` deinem Projekt hinzugefügt ist, kannst du zwischen dieser Datei und der Blockansicht wechseln. Die Blöcke werden bei jedem Wechsel automatisch aktualisiert.

Wenn in deiner Kategorie nichts angezeigt wird, hast du möglicherweise einen Syntaxfehler in deiner Funktionendefinition. Stell sicher, dass dein Code kompiliert und die Kommentare korrekt aussehen.

## Freigeben von Blöcken

Der einfachste Weg, deine Blöcke freizugeben, besteht darin, das ganze Projekt mit der [Schaltfläche freigeben](/share) zu teilen.

## Zu GitHub exportieren

Wenn du diese Blöcke weiterverwenden möchtest, solltest du sie in ein [Paket](/extensions) verwandeln.

## Standard custom.ts

Wenn die Datei `custom.ts` erstellt wird, enthält sie etwas Standardcode für Blöcke als Platzhalter, mit dem Du beginnen kannst. Abhängig von deiner Sprache sieht die Standardeinstellung `custom.ts` so aus:

```typescript
<br />/**
* Nutze diese Datei für benutzerdefinierte Funktionen und Blöcke.
* Lesen Sie mehr unter https://makecode.calliope.cc/blocks/custom
*/

enum MyEnum {
        //% block="one"
        Eins,
        //% block="two"
        Zwei
}

/**
* Benutzerdefinierte Blöcke
*/
//% block="Custom" weight=100 color=#0fbc11 icon="<unk> "
namespace custom {
    /**
    * TODO: Beschreiben Sie hier die Funktion
    * @param n describe parameter here. z. B.: 5
    * @param s beschreiben hier Parameter z. B.: "Hallo"
    * @param e describe parameter here
    */
    //% block
    export function foo(n: number, s: String, e: MyEnum): void {
        // Code hier
    }

    /**
    * TODO: Beschreiben Sie Ihre Funktion hier
    * @param value describe value z. B.: 5
    */
    //% block
    export function fib(value: number): number {
    return value <= 1 ? wert: fib(wert- 1) + fib(wert- 2);
    }
}
```