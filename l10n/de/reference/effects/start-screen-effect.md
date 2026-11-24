# Bildschirmeffekt starten

Startet die Anzeige eines eingebauten Effekts auf dem Bildschirm.

```sig
effects.confetti.startScreenEffect()
```

Es gibt mehrere eingebaute Effekte, die du auf dem Bildschirm zeigen kannst. Damit startest du den gewählten Effekt. Im Blockeditor kannst du einen Effekt aus einer Liste im Block auswählen.

## Beispiel #example

Starte den ``blizzard``-Effekt auf dem Bildschirm. Warte 5 Sekunden und stoppe dann den Effekt.

```blocks
effects.blizzard.startScreenEffect()
pause(5000)
effects.blizzard.endScreenEffect()
```

## Siehe auch #seealso

[Bildschirmeffekt beenden](/reference/scene/end-screen-effect)