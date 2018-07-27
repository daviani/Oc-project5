while (optionSaisie !== 0) { // on quitte si l'utliteur rentre 0
    var optionSaisie = Number(prompt("Veuillez choisir votre action \n1 : Générateur citation Star Wars \n2 : Générateur slogan langage web \n0 : Quitter"));
    if (optionSaisie === 1) {
        printCitation(true);
    } else if (optionSaisie === 2) {
        printCitation(false);
    } else if (optionSaisie === 0) {
        document.write("<h3>Merci et aurevoir</h3>");
    } else {
        alert("Erreur, veuillez saisir un nombre equivalent à 0, 1, 2");
    }
}

function printCitation(citationSw) { //
    var titreCitation = (" de citations sur l'univers Star Wars ");
    if (!citationSw) {
        titreCitation = (" slogans sur les langages web ")
    }
    var nbCitation = Number(prompt("Veuillez choisir le nombre " + titreCitation + "entre 1 et 5"));
    while (nbCitation <= 0 || nbCitation >= 6) {
        alert("Veuillez saisir un nombre compris entre 1 et 5");
        nbCitation = Number(prompt("Veuillez choisir le nombre " + titreCitation + "entre 1 et 5"));
    }

    if (citationSw) {
        var slogOrLang = "citations"
    } else {
        var slogOrLang = "slogans"
    }
    document.write("<h3>Voici vos " + slogOrLang + " </h3>");

    for (i = 0; i < nbCitation; i++) {
        var compilCitation = swSith();
        if (citationSw) {
            compilCitation = swSith();
        } else {
            compilCitation = langageWeb();
        }
        document.write(compilCitation + "<br/>");
    }
}

function swSith() {
    var swCitation1 = [ // premier tableaux
        "Au secours Obi-wan Kenobi,",
        "Pour une fois,",
        "Tu ne vends pas de bâtons de la mort,",
        "je ne suis qu'un homme simple,",
        "Et si je vous disais",
        "Tu es l'élu, tu as apporté un équilibre à ce monde,",
        "Les sith se sont tués, victimes de leur cupidités,"
    ];

    var swCitation2 = [ // second tableaux 
        " vous êtes",
        " laisse moi te regarder",
        " tu vas rentrer chez toi,",
        " essayant de faire",
        " que la République est maintenant",
        " reste dans cette voie et tu pourra aussi le faire pour la galaxie",
        " mais de la cendre de leur destruction,"
    ];

    var swCitation3 = [ // troisième tableaux 
        " mon seul espoir.",
        " avec mes propres yeux.",
        " et penser a ton avenir.",
        " mon chemin dans l'univers.",
        " sous contrôle d'un seigneur des ténèbres des Sith.",
        " mais méfie toi de ton coeur.",
        " je suis le dernier survivant."
    ];

    var swSith1 = swCitation1[Math.floor(Math.random() * swCitation1.length)]; // Prend un élement du tableaux swCitation1
    var swSith2 = swCitation2[Math.floor(Math.random() * swCitation2.length)]; // Prend un élement du tableaux swCitation2
    var swSith3 = swCitation3[Math.floor(Math.random() * swCitation3.length)]; // Prend un élement du tableaux swCitation3
    return swSith1 + swSith2 + swSith3; // va permettre d'utiliser la fonction swSith un peu plus tard...
}

function langageWeb() {
    var slogLang1 = [
        "Javascript", // JavaScript a été créé en 1995 par Brendan Eich, notament inspiré par JAVA.
        "BASIC", // BASIC a été crée en 1964 par John George Kemeny et Thomas Eugene Kurtz (acronyme pour Beginner's All-purpose Symbolic Instruction Code).
        "Shakespeare Programming Language", // ou SPL a été créé Karl Hasselström et Jon Åslund en février 2001, doit son nom dramaturge anglais William Shakespeare.
        "Arduino", //L'Arduino emprunte son nom au Bar di Re Arduino (en français « bar du roi Arduin »)
        "Brainfuck", // est un langage de programmation exotique, inventé par Urban Müller en 1993. Il tire son nom de l’union de deux mots anglais, brain (« cerveau ») et fuck (« niquer »)
        "Fjölnir", // est un langage de programmation développé par le professeur d'informatique à l'université d'Islande Snorri Agnarsson.
        "A-0 System", // est le premier compilateur développé pour un ordinateur1. Il a été écrit par Grace Hopper entre 1951 et 1952 
        "Effeil" // est un langage de programmation orienté objet (POO) conçu par Bertrand Meyer, créé en 1986
    ];

    var slogLang2 = [
        " donne",
        " le raccourci",
        " crie tout haut",
        " ça change",
        " et vos idées",
        " pèse lourd",
        " c'est comme",
        " impossible"
    ];

    var slogLang3 = [
        " des ailes !",
        " par excellence !",
        " ce que vous pensez tout bas !",
        " l'école !",
        " des génis !",
        " dans la société !",
        " le paradis !",
        " sur le web !"
    ];

    var slogan1 = slogLang1[Math.floor(Math.random() * slogLang1.length)];
    var slogan2 = slogLang2[Math.floor(Math.random() * slogLang2.length)];
    var slogan3 = slogLang3[Math.floor(Math.random() * slogLang3.length)];
    return slogan1 + slogan2 + slogan3;
}