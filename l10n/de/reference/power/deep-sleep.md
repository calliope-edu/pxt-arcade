# deep Sleep

Versetze das Gerät in einen Stromsparmodus, den „Tiefschlaf“.

```sig
power.deepSleep()
```

Um Energie zu sparen, wenn keine Benutzereingaben zu verarbeiten, keine Ereignisse zu behandeln und nichts anzuzeigen ist, kann ein Gerät in den „Tiefschlaf“ gehen. Im Tiefschlaf stoppt das Gerät die normale Verarbeitung von Benutzerprogrammen und Eingabeereignissen. Während des Tiefschlafs reagiert das Gerät möglicherweise nur auf bestimmte Interrupts und notwendige Timer-Ereignisse.

Um das Gerät aus dem Tiefschlaf zu holen, kann ein Hardware-Ereignis nötig sein, zum Beispiel das Drücken der Reset-Taste.

```blocks
console.log("Feeling tired now. I'm going to sleep.");
power.deepSleep()
```

```package
power
```

## Siehe auch

[set deep sleep timeout](/reference/power/set-deep-sleep-timeout)
