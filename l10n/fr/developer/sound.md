# Musique et Sons

## Mélodies

L'API musicale dans arcade crée et traite les mélodies en une séquence de notes selon une syntaxe pour chaque note. Les mélodies sont créées en utilisant la classe `music.Melody` dans arcade, qui les encode en une chaîne avec cette syntaxe. Pour voir des exemples de mélodies formatées, voir [l'extension/package mixer](https://github.com/microsoft/pxt-common-packages/blob/master/libs/mixer/melody.ts#L387).

Les mélodies sont construites avec une série de commandes, décrites ci-dessous.

### Commande: jouer note

Pour jouer une note:

    [ABCDEFG] (\d+)  (:\d+)  (-\d+)
    note      octave length  tempo
    

L'octave, la longueur et le tempo sont tous des paramètres optionnels. Voici quelques exemples:

* `A5:2-120` (jouer la note `A` dans l'octave `5` pendant `2` temps et définir le tempo à `120` bpm)
* `C` (jouer note `C` durant un temps au tempo actuel)
* `g5:1` (jouer note `G` dans l'octave `5` durant `1` temos au tempo actuel)

### Commande: silence

Pour un silence:

    [R] (:\d+)
    

Par exemple:

* `R` (silence pendant `1` temps au tempo actuel)
* `R:3` (silence pendant `3` temps au tempo actuel)

### Commande: jouer un ton

Pour jouer une fréquence pendant un certain temps en ms:

    !\d+,\d+
    

Par exemple:

* `!262,500` (joue la fréquence de `262` Hz pendant `500` ms)

### Commande: définir enveloppe

Pour définir l'enveloppe ADSR pour les sons joués:

    @\d+,\d+,\d+,\d+
    

Où les quatres valeurs indiquent:

1. "Attack" en ms
2. "Decay" en ms
3. "Sustain" volume (0-255)
4. "Release" en ms

Pour plus d'informations sur les enveloppes, consultez l'article de Wikipédia [ici](https://en.wikipedia.org/wiki/Synthesizer#Attack_Decay_Sustain_Release_(ADSR)_envelope).

### Commande: définir forme d'onde

Pour définir la forme d'onde des notes générées:

    ~\d+
    

Où le nombre fait référence à une des formes d'onde de la table ci-dessous:

| Forme d'onde  | Valeur |
| ------------- | ------ |
| triangle      | 1      |
| dent de scie  | 2      |
| sinus         | 3      |
| tunable noise | 4      |
| bruit         | 5      |
| carré (10%)   | 11     |
| carré (20%)   | 12     |
| carré (30%)   | 13     |
| carré (40%)   | 14     |
| carré (50%)   | 15     |
| cycle 16      | 16     |
| cycle 32      | 17     |
| cycle 64      | 18     |

The `noise` is an actual white noise. It ignores the requested frequency or note.

The `tunable noise` tone contains a pseudorandom sample. At high frequency it sounds similar to white noise, at low frequency it produces irregular crackling noises.

The `cycle 16`, `cycle 32`, and `cycle 64` waveforms are repeating pseudorandom patterns with a cycle length of 16/32/64 samples respectively. They sound like a noise-distorted square wave, with short cycles being more regular and long cycles being noisier.

### Commande: définir fréquence de fin

To set the end for the generated notes:

    ^\d+
    

When the end frequency is set, the tone will linear ramp the frequency from the initial set frequency to the end frequency over the duration of the tone.

Here are some examples:

* `!2000,1000^100` va démarrer à `2000` Hz et augmenter progressivement jusqu'à `100` Hz au cours des `1000` ms
* `!1300,200^50` va démarrer à `1300` Hz et s'ajuster à `50` Hz au cours des `200` ms
* `!150,500^800` va démarrer à `150` Hz et s'ajuster à `800` Hz durant les `500` ms

## Instructions de son

The low-level music API exposed in JavaScript revolves around sound "instructions".

A sound instruction is a series of bytes stored in a `Buffer` with the following format:

| Champ            | Bits |
| ---------------- | ---- |
| forme d'onde     | 8    |
| non utilisé      | 8    |
| fréquence (hz)   | 16   |
| durée (ms)       | 16   |
| volume de départ | 16   |
| volume final     | 16   |
| fréquence de fin | 16   |

Volume is a scalar value that ranges from 0 to 1024. See the table in previous section for the available values for waveform.

To play a sound buffer, use the `music.playInstructions()` API. Buffers can contain multiple instructions one after the other, so a single "effect" or "melody" should be constructed in a single Buffer.

### ~ hint

#### Récupération des buffers

To create a `Buffer`, you can use the `control.createBuffer()` API.

### ~

### Canaux

The arcade "hardware" has three available music "channels" that are mixed to produce the game audio. Using the `music.playInstructions()` API will automatically allocate a channel to play the instruction and that channel remains occupied until the sound play completes. Attempting to play too many sounds simultaneously will cause some sounds to be dropped if all channels are currently busy.

### Buffers hexa

If your music or sounds are mostly static (i.e. not created at runtime), you can save memory by storing them in `hex` buffers. These buffers are compiled into the "binary" by the MakeCode compiler. Note that there is currently no way to play sound samples - the buffers below would only apply to the `playInstructions` format described above. You can create static buffers using this tagged template literal syntax:

```typescript
// Les données dans la chaine de caractères doivent être encodées en hexadécimal
const mySound: Buffer = hex`0123456789abcdef`;
```