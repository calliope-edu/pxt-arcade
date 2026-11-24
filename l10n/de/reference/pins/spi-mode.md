# SPI Mode

Lege den SPI-Signalmodus fest.

```sig
pins.spiMode(3);
```

SPI verwendet zwei Änderungen im Taktsignal, um zu entscheiden, wann Daten übertragen werden. Das sind die _Polarität (CPOL)_ und die _Phase (CPHA)_ des Takts. Da zwei Einstellungen geprüft werden, kann der Modus einen von 4 verschiedenen Werten haben: CPOL steigend oder fallend und CPHA steigend oder fallend. Das sendende und das empfangende Gerät müssen denselben Modus verwenden. Der Standardmodus ist `3`.

## Parameter

* **mode**: der SPI-Übertragungsmodus, der gesetzt werden soll. Das ist einer der folgenden Werte:
>* **0**: CPOL = `0`, CPHA = `0` - Übertragung an der vorderen steigenden Flanke des Takts 
>* **1**: CPOL = `0`, CPHA = `1` - Übertragung an der hinteren fallenden Flanke des Takts
>* **2**: CPOL = `1`, CPHA = `0` - Übertragung an der vorderen fallenden Flanke des Takts 
>* **3**: CPOL = `1`, CPHA = `1` - Übertragung an der hinteren steigenden Flanke des Takts 

## Beispiel

Setze den SPI-Signalmodus so, dass an der hinteren steigenden Flanke des Taktsignals übertragen wird.

```blocks
pins.spiMode(3);
```

## Siehe auch

[spi frequency](/reference/pins/spi-frequency)
