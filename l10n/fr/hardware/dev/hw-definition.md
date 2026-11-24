# Définition matérielle

De nombreuses cibles matérielles fonctionneront comme une plateforme Arcade physique. Ce sont typiquement des systèmes basés sur des SoC qui exécutent un petit système d'exploitation basique.

Les cibles matérielles Arcade sont supportées par leur *définition matérielles*, fournie en tant [qu'extension](https://makecode.com/extensions). La définition matérielle spécifie les caractéristiques basiques de l'appareil et les correspondances pour l'écran, les boutons, les broches et le son.

## Extension `pxt.json`

Les composants de l'extension sont des fichiers sources, qui spécifient les correspondances (mappings) pour les périphériques, et contrôlent les comportements spécifiques à la cible matérielle. Les fichiers et dépendances sont tous déclarés dans un fichier `pxt.json`, comme n'importe quelle [extension](https://makecode.com/extensions) MakeCode.

    {
        "name": "gizmoq",
        "description": "GizmoQ board",
        "files": [
            "config.ts"
        ],
        "card": {
            "name": "GizmoQ Gamer Board",
            "description": "Image Linux GizmoQ spécialisée pour la board GizmoQ.",
            "learnMoreUrl": "https://arcade.makecode.com/boards/gizmoq",
            "buyUrl": "https://www.bing.com/search?q=gizmoq+board",
            "cardType": "hw",
            "imageUrl": "https://makecode.com/not-found/HEAD/static/boards/gizmoq.jpg"
        },
        "dependencies": {
            "core": "file:../core---gizmoq",
            "screen": "file:../screen---gizmoq",
            "mixer": "file:../mixer---gizmoq",
            "game": "file:../game"
        },
        "public": true
    }
    

Lors du téléchargement d'un programme de jeu Arcade, le matériel **GizmoQ** apparaîtra en tant que carte à sélectionner dans la boîte de dialogue **Choisissez votre matériel**. Le choix de l'appareil peut ressembler à ceci:

```codecard
[{
        "name": "GizmoQ Gamer Board",
        "description": "Image Linux GizmoQ spécialisée pour la board the GizmoQ.",
        "learnMoreUrl": "https://arcade.makecode.com/boards/gizmoq",
        "buyUrl": "https://www.bing.com/search?q=gizmoq+board",
        "cardType": "hw",
        "imageUrl": "https://cdn.makecode.com/blob/68c18522083a2b95384b3de6dd3ca20ed51b7225/static/boards/gizmoq.png"
}]
```

### Description de la configuration

L'extension de définition matérielle contient un fichier `config.ts` qui exporte des constantes qui définissent les paramètres matériel pour votre carte. Il s'agit principalement des paramètres de pin et de boutons afin de correspondre à la définition DAL. Un fichier `dal.d.ts` est généré pour vous dans l'extension `core`, celui-ci contient les définitions DAL. Le fichier `config.ts` contient également les paramètres de l'écran pour le carte. Voici un exemple de fichier `config.ts` :

```typescript-ignore
namespace config {
    // Define the pins
    export const PIN_LED = DAL.PB_11;

    export const PIN_SCK = DAL.PA_5;
    export const PIN_MISO = DAL.PA_6;
    export const PIN_MOSI = DAL.PA_7;

    export const PIN_RX = DAL.PA_10;
    export const PIN_TX = DAL.PA_9;

    export const PIN_SDA = DAL.PB_7;
    export const PIN_SCL = DAL.PB_6;

    export const PIN_D14 = DAL.PB_9;
    export const PIN_D15 = DAL.PB_8;

    // Buttons are pin settings
    export const PIN_BTN_LEFT = DAL.PB_10;
    export const PIN_BTN_UP = DAL.PA_15;
    export const PIN_BTN_RIGHT = DAL.PA_5;
    export const PIN_BTN_DOWN = DAL.PC_13;

    export const PIN_BTN_A = PIN_SDA;
    export const PIN_BTN_B = PIN_SCL;
    export const PIN_BTN_MENU = PIN_RX;

    // LCD screen SPI settings
    export const PIN_DISPLAY_CS = DAL.PB_12;
    export const PIN_DISPLAY_SCK = DAL.PB_13;
    export const PIN_DISPLAY_MOSI = DAL.PB_15;
    export const PIN_DISPLAY_DC = DAL.PC_5;
    export const PIN_DISPLAY_RST = DAL.PC_4;
    export const PIN_DISPLAY_MISO = DAL.PB_14;
    export const PIN_DISPLAY_BL = DAL.PA_4;

    // it's really piezo speaker, not an amp
    export const PIN_SPEAKER_AMP = DAL.PB_8;

    // Display metrics and config
    export const DISPLAY_CFG0 = 0x00000080;
    export const DISPLAY_CFG1 = 0x000603;

    export const DISPLAY_CFG2 = 22; // MHz
    export const DISPLAY_WIDTH = 160;
    export const DISPLAY_HEIGHT = 128;
}
```

### Interface de l'appareil

L'extension de définition matérielle peut également contenir un fichier d'interface de l'appareil, qui relie les définitions DAL aux API du namespace. Cette information se retrouve dans un fichier `device.d.ts`. Voici un exemple :

```typescript-ignore
declare namespace pins {
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_LED)
    const LED: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_SDA)
    const SDA: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_SCL)
    const SCL: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_SCK)
    const SCK: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_MISO)
    const MISO: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_MOSI)
    const MOSI: DigitalInOutPin;

    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_RX)
    const RX: DigitalInOutPin;
    //% fixedInstance shim=pxt::getPinCfg(CFG_PIN_TX)
    const TX: DigitalInOutPin;
}

declare namespace input {
    //% block="button A" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_A,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonA: Button;
    //% block="button B" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_B,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonB: Button;
    //% block="button Left" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_LEFT,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonLeft: Button;
    //% block="button Right" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_RIGHT,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonRight: Button;

    //% block="button Up" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_UP,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonUp: Button;
    //% block="button Down" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_DOWN,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonDown: Button;

    //% block="button Menu" fixedInstance
    //% shim=pxt::getButtonByPinCfg(CFG_PIN_BTN_MENU,BUTTON_ACTIVE_LOW_PULL_UP)
    const buttonMenu: Button;
}
```

### Organisation de l'extension

Les fichiers de l'extension sont `pxt.json`, `config.ts`, et `device.d.ts`. Le dossier qui contient les fichiers de l'extension est nommé avec le préfixe `hw---` suivi du nom de la carte tel qu'utilisé dans le fichier `pxt.json`. Pour l'exemple du GizmoQ, le nom de son extension matérielle est `hw---gizmoq`.