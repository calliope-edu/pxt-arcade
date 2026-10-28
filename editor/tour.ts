// Calliope edition: the editor tour (appTheme.tours.editor, docs/tours/editor-tour.md)
// in all languages of this edition. pxt fetches translated docs from the MakeCode cloud,
// where the tour is only partly translated, and the static version has no translations
// at all; extension.ts answers the tour request from here instead.
namespace pxt.editor.tour {
    export const DOC_ID = "/tours/editor-tour";

    // highlight and location of the steps, as in docs/tours/editor-tour.md
    const STEPS = [
        ["nothing", "center"],
        ["simulator", "right"],
        ["toolbox", "right"],
        ["monaco toolbox", "right"],
        ["workspace", "center"],
        ["monaco workspace", "center"],
        ["share", "below"],
        ["download", "above"],
        ["everything", "center"],
    ];

    // title and description of each step
    const TEXTS: pxt.Map<string[][]> = {
        "en": [
            ["Welcome!", "New here? Take a tour of the editor!"],
            ["Game Window", "Play and test your game in the Game Window."],
            ["Toolbox", "Drag out blocks of code from the Toolbox categories into the Workspace."],
            ["Toolbox", "Drag out snippets of code from the Toolbox categories into the Workspace."],
            ["Workspace", "Snap blocks of code together to build your program."],
            ["Workspace", "Write code to build your program."],
            ["Share", "Create a link to your project to share with others."],
            ["Download", "Download your program onto your Calliope mini."],
            ["Congratulations!", "You've completed the editor tour! 🤩🏆🤩 Happy coding!"],
        ],
        "de": [
            ["Willkommen!", "Neu hier? Mache einen Rundgang durch den Editor!"],
            ["Spielfenster", "Im Spielfenster spielst und testest du dein Spiel."],
            ["Werkzeugkasten", "Ziehe Code-Blöcke aus den Kategorien des Werkzeugkastens in den Arbeitsbereich."],
            ["Werkzeugkasten", "Ziehe Code-Schnipsel aus den Kategorien des Werkzeugkastens in den Arbeitsbereich."],
            ["Arbeitsbereich", "Stecke Code-Blöcke zusammen, um dein Programm zu bauen."],
            ["Arbeitsbereich", "Schreib Code, um dein Programm zu bauen."],
            ["Teilen", "Erstelle einen Link zu deinem Projekt, um es mit anderen zu teilen."],
            ["Herunterladen", "Lade dein Programm auf deinen Calliope mini."],
            ["Glückwunsch!", "Du hast den Rundgang durch den Editor geschafft! 🤩🏆🤩 Viel Spaß beim Programmieren!"],
        ],
        "fr": [
            ["Bienvenue !", "Nouveau ici ? Découvrez l'éditeur !"],
            ["Fenêtre de jeu", "Jouez et testez votre jeu dans la fenêtre de jeu."],
            ["Boîte à outils", "Faites glisser des blocs de code depuis les catégories de la Boîte à outils dans l'espace de travail."],
            ["Boîte à outils", "Faites glisser des extraits de code depuis les catégories de la Boîte à outils dans l'espace de travail."],
            ["Espace de travail", "Assemblez des blocs de code pour créer votre programme."],
            ["Espace de travail", "Écrivez du code pour créer votre programme."],
            ["Partager", "Créez un lien vers votre projet pour le partager avec d'autres personnes."],
            ["Télécharger", "Téléchargez votre programme sur votre Calliope mini."],
            ["Félicitations !", "Vous avez terminé la visite guidée de l'éditeur ! 🤩🏆🤩 Bon codage !"],
        ],
        "es": [
            ["¡Bienvenido!", "¿Eres nuevo? ¡Haz un recorrido por el editor!"],
            ["Ventana de juego", "Juega y prueba tu juego en la ventana de juego."],
            ["Caja de herramientas", "Arrastra bloques de código desde las categorías de la caja de herramientas al área de trabajo."],
            ["Caja de herramientas", "Arrastra fragmentos de código desde las categorías de la caja de herramientas al área de trabajo."],
            ["Área de trabajo", "Encaja bloques de código para crear tu programa."],
            ["Área de trabajo", "Escribe código para crear tu programa."],
            ["Compartir", "Crea un enlace a tu proyecto para compartirlo con otras personas."],
            ["Descargar", "Descarga tu programa en tu Calliope mini."],
            ["¡Felicidades!", "¡Has completado el recorrido por el editor! 🤩🏆🤩 ¡Feliz programación!"],
        ],
        "it": [
            ["Benvenuto!", "Sei nuovo? Fai un giro dell'editor!"],
            ["Finestra di gioco", "Gioca e prova il tuo gioco nella finestra di gioco."],
            ["Casella degli strumenti", "Trascina i blocchi di codice dalle categorie della casella degli strumenti nell'area di lavoro."],
            ["Casella degli strumenti", "Trascina frammenti di codice dalle categorie della casella degli strumenti nell'area di lavoro."],
            ["Area di lavoro", "Unisci i blocchi di codice per costruire il tuo programma."],
            ["Area di lavoro", "Scrivi codice per costruire il tuo programma."],
            ["Condividi", "Crea un link al tuo progetto per condividerlo con altri."],
            ["Scarica", "Scarica il tuo programma sul tuo Calliope mini."],
            ["Complimenti!", "Hai completato il giro dell'editor! 🤩🏆🤩 Buona programmazione!"],
        ],
        "nl": [
            ["Welkom!", "Nieuw hier? Maak een rondleiding door de editor!"],
            ["Spelvenster", "Speel en test je spel in het spelvenster."],
            ["Gereedschapskist", "Sleep codeblokken uit de categorieën van de gereedschapskist naar de werkruimte."],
            ["Gereedschapskist", "Sleep codefragmenten uit de categorieën van de gereedschapskist naar de werkruimte."],
            ["Werkruimte", "Klik codeblokken aan elkaar om je programma te bouwen."],
            ["Werkruimte", "Schrijf code om je programma te bouwen."],
            ["Delen", "Maak een link naar je project om het met anderen te delen."],
            ["Downloaden", "Zet je programma op je Calliope mini."],
            ["Gefeliciteerd!", "Je hebt de rondleiding door de editor voltooid! 🤩🏆🤩 Veel programmeerplezier!"],
        ],
        "el": [
            ["Καλώς ήρθες!", "Είσαι καινούργιος εδώ; Κάνε μια περιήγηση στον επεξεργαστή!"],
            ["Παράθυρο παιχνιδιού", "Παίξε και δοκίμασε το παιχνίδι σου στο παράθυρο παιχνιδιού."],
            ["Εργαλειοθήκη", "Σύρε μπλοκ κώδικα από τις κατηγορίες της εργαλειοθήκης στον χώρο εργασίας."],
            ["Εργαλειοθήκη", "Σύρε αποσπάσματα κώδικα από τις κατηγορίες της εργαλειοθήκης στον χώρο εργασίας."],
            ["Χώρος εργασίας", "Ένωσε μπλοκ κώδικα για να φτιάξεις το πρόγραμμά σου."],
            ["Χώρος εργασίας", "Γράψε κώδικα για να φτιάξεις το πρόγραμμά σου."],
            ["Κοινοποίηση", "Δημιούργησε έναν σύνδεσμο προς το έργο σου για να το μοιραστείς με άλλους."],
            ["Λήψη", "Μετέφερε το πρόγραμμά σου στο Calliope mini σου."],
            ["Συγχαρητήρια!", "Ολοκλήρωσες την περιήγηση στον επεξεργαστή! 🤩🏆🤩 Καλό προγραμματισμό!"],
        ],
        "tr": [
            ["Hoş geldin!", "Burada yeni misin? Düzenleyiciyi tanımak için bir tur at!"],
            ["Oyun Penceresi", "Oyununu Oyun Penceresi'nde oyna ve test et."],
            ["Araç Kutusu", "Kod bloklarını Araç Kutusu kategorilerinden Çalışma Alanı'na sürükle."],
            ["Araç Kutusu", "Kod parçacıklarını Araç Kutusu kategorilerinden Çalışma Alanı'na sürükle."],
            ["Çalışma Alanı", "Programını oluşturmak için kod bloklarını birbirine tak."],
            ["Çalışma Alanı", "Programını oluşturmak için kod yaz."],
            ["Paylaş", "Projeni başkalarıyla paylaşmak için bir bağlantı oluştur."],
            ["İndir", "Programını Calliope mini'ne yükle."],
            ["Tebrikler!", "Düzenleyici turunu tamamladın! 🤩🏆🤩 İyi kodlamalar!"],
        ],
        "ar": [
            ["مرحبًا!", "هل أنت جديد هنا؟ قم بجولة في المحرر!"],
            ["نافذة اللعبة", "العب لعبتك واختبرها في نافذة اللعبة."],
            ["صندوق الأدوات", "اسحب كتل التعليمات البرمجية من فئات صندوق الأدوات إلى مساحة العمل."],
            ["صندوق الأدوات", "اسحب مقتطفات التعليمات البرمجية من فئات صندوق الأدوات إلى مساحة العمل."],
            ["مساحة العمل", "ركّب كتل التعليمات البرمجية معًا لبناء برنامجك."],
            ["مساحة العمل", "اكتب التعليمات البرمجية لبناء برنامجك."],
            ["مشاركة", "أنشئ رابطًا لمشروعك لمشاركته مع الآخرين."],
            ["تنزيل", "نزّل برنامجك على Calliope mini الخاص بك."],
            ["تهانينا!", "لقد أكملت جولة المحرر! 🤩🏆🤩 برمجة سعيدة!"],
        ],
        "da": [
            ["Velkommen!", "Ny her? Tag en rundtur i editoren!"],
            ["Spilvindue", "Spil og test dit spil i spilvinduet."],
            ["Værktøjskasse", "Træk kodeblokke fra værktøjskassens kategorier ind i arbejdsområdet."],
            ["Værktøjskasse", "Træk kodestykker fra værktøjskassens kategorier ind i arbejdsområdet."],
            ["Arbejdsområde", "Sæt kodeblokke sammen for at bygge dit program."],
            ["Arbejdsområde", "Skriv kode for at bygge dit program."],
            ["Del", "Lav et link til dit projekt for at dele det med andre."],
            ["Download", "Overfør dit program til din Calliope mini."],
            ["Tillykke!", "Du har gennemført rundturen i editoren! 🤩🏆🤩 God fornøjelse med at kode!"],
        ],
        "pl": [
            ["Witaj!", "Jesteś tu nowy? Zwiedź edytor!"],
            ["Okno gry", "Graj i testuj swoją grę w oknie gry."],
            ["Przybornik", "Przeciągaj bloki kodu z kategorii przybornika do obszaru roboczego."],
            ["Przybornik", "Przeciągaj fragmenty kodu z kategorii przybornika do obszaru roboczego."],
            ["Obszar roboczy", "Łącz bloki kodu, aby zbudować swój program."],
            ["Obszar roboczy", "Pisz kod, aby zbudować swój program."],
            ["Udostępnij", "Utwórz link do swojego projektu, aby udostępnić go innym."],
            ["Pobierz", "Wgraj swój program na Calliope mini."],
            ["Gratulacje!", "Ukończyłeś zwiedzanie edytora! 🤩🏆🤩 Miłego kodowania!"],
        ],
        "cs": [
            ["Vítejte!", "Nováček? Vydejte se na prohlídku editoru!"],
            ["Herní okno", "V herním okně hru hrajete a testujete."],
            ["Panel nástrojů", "Přetáhněte bloky kódu z kategorií v panelu nástrojů na pracovní plochu."],
            ["Panel nástrojů", "Přetáhněte kusy kódu z kategorií v panelu nástrojů na pracovní plochu."],
            ["Pracovní plocha", "Svůj program vytvoříte tak, že zacvaknete jednotlivé bloky kódu do sebe."],
            ["Pracovní plocha", "Napište kód tvořící váš program."],
            ["Sdílet", "Vytvořte odkaz na váš projekt, abyste jej mohli sdílet s ostatními."],
            ["Stáhnout", "Nahrajte svůj program do Calliope mini."],
            ["Gratulujeme!", "Vaše prohlídka editoru je úspěšně u konce! 🤩🏆🤩 Užijte si programování!"],
        ],
        "sl": [
            ["Dobrodošli!", "Ste novi tukaj? Oglejte si urejevalnik!"],
            ["Okno igre", "V oknu igre igrajte in preizkusite svojo igro."],
            ["Orodjarna", "Povlecite bloke kode iz kategorij orodjarne v delovni prostor."],
            ["Orodjarna", "Povlecite izseke kode iz kategorij orodjarne v delovni prostor."],
            ["Delovni prostor", "Sestavite bloke kode in zgradite svoj program."],
            ["Delovni prostor", "Napišite kodo in zgradite svoj program."],
            ["Deli", "Ustvarite povezavo do svojega projekta in ga delite z drugimi."],
            ["Prenesi", "Prenesite svoj program na svoj Calliope mini."],
            ["Čestitamo!", "Ogled urejevalnika ste zaključili! 🤩🏆🤩 Veselo programiranje!"],
        ],
        "ca": [
            ["Benvingut!", "Nou aquí? Fes un recorregut per l'editor!"],
            ["Finestra del joc", "Juga i prova el teu joc a la finestra del joc."],
            ["Caixa d'eines", "Arrossega blocs de codi de les categories de la caixa d'eines a l'espai de treball."],
            ["Caixa d'eines", "Arrossega fragments de codi de les categories de la caixa d'eines a l'espai de treball."],
            ["Espai de treball", "Acobla blocs de codi per construir el teu programa."],
            ["Espai de treball", "Escriu codi per construir el teu programa."],
            ["Comparteix", "Crea un enllaç al teu projecte per compartir-lo amb altres persones."],
            ["Transfereix", "Transfereix el teu programa al teu Calliope mini."],
            ["Felicitats!", "Has completat el recorregut per l'editor! 🤩🏆🤩 Bona programació!"],
        ],
    };

    // tour as markdown for a locale such as "de" or "es-ES" (null: no translation)
    export function markdown(locale: string): string {
        const lang = (locale || "en").toLowerCase();
        const texts = TEXTS[lang] || TEXTS[lang.split("-")[0]];
        if (!texts) return null;
        let md = "# Editor Tour\n";
        STEPS.forEach((step, i) => {
            md += "\n## Step " + (i + 1) + "\n"
                + "* title: " + texts[i][0] + "\n"
                + "* description: " + texts[i][1] + "\n"
                + "* highlight: " + step[0] + "\n"
                + "* location: " + step[1] + "\n";
        });
        return md;
    }
}
