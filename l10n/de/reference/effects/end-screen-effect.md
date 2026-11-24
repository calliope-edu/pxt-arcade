# Bildschirmeffekt beenden

Beendet die Anzeige eines eingebauten Effekts auf dem Bildschirm.

```sig
effects.confetti.startScreenEffect()
```

Es gibt mehrere eingebaute Effekte, die du auf dem Bildschirm zeigen kannst. Damit stoppst du den gewählten Effekt, falls er gerade angezeigt wird. Im Blockeditor kannst du einen Effekt aus einer Liste im Block auswählen. 

## Beispiel #example

Starte die Effekte ``blizzard`` und ``confetti`` auf dem Bildschirm. Warte 5 Sekunden und stoppe dann nur den ``confetti``-Effekt.

```blocks
effects.blizzard.startScreenEffect()
effects.confetti.startScreenEffect()
pause(5000)
effects.confetti.endScreenEffect()
```

## Siehe auch #seealso

[Bildschirmeffekt starten](/reference/scene/start-screen-effect)