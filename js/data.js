// Edit subjects and projects here.
// subject ids must match the links in works.html.
//
// Per subject.html:
// - images, titleAfter, rowAlign
//
// Per project.html:
// - hero: immagine grande a destra
// - blocks: descrizioni (type "text" o "pair" con layout image-left / image-right)
// - gallery: altre immagini trascinabili con posizione iniziale

const GD = "./assets/img/projects/graphic-design";
const IL = "./assets/img/projects/illustrazione";
const DV = "./assets/img/projects/digital-video";
const CARTE_GALLERY_DIR = `${IL}/carte-gallery`;

const CARTE_GALLERY_FILES = [
  "Carte_0.png",
  "Carte_01.png",
  "Carte_02.png",
  "Carte_03.png",
  "Carte_05.png",
  "Carte-08.png",
  "Carte-10.png",
  "Carte-11.png",
  "Carte-12.png",
  "Carte-13.png",
  "Carte-14.png",
  "Carte-15.png",
  "Carte-16.png",
  "Carte-17.png",
  "Carte-18.png",
  "Carte-19.png",
  "Carte-20.png",
  "Carte-21.png",
  "Carte-22.png",
  "Carte-23.png",
  "Carte-24.png",
  "Carte-25.png",
  "Carte-26.png",
  "Carte-27.png",
  "Carte-28.png",
  "Carte-29.png",
  "Carte-30.png",
  "Carte-31.png",
  "Carte-32.png",
  "Carte-33.png",
  "Carte-34.png",
  "Carte-35.png",
  "Carte-36.png",
  "Carte-37.png",
  "Carte-38.png",
  "Carte-39.png",
  "Carte-40.png",
  "Carte-41.png",
  "Carte-42.png",
  "Carte-43.png",
  "Carte-44.png",
];

const carteGalleryExtra = CARTE_GALLERY_FILES.map((file) => `${CARTE_GALLERY_DIR}/${file}`);

const portfolioData = {
  subjects: [
    {
      id: "graphic-design",
      title: "Graphic Design",
      projects: [
        {
          id: "atletica-leonessa",
          title: "Atletica Leonessa",
          titleAfter: 3,
          rowAlign: "end",
          images: [
            `${GD}/atletica-leonessa-1.png`,
            `${GD}/atletica-leonessa-2.jpg`,
            `${GD}/atletica-leonessa-3.png`,
          ],
          hero: `${GD}/atletica-leonessa-3.png`,
          blocks: [
            {
              type: "text",
              text:
                "Restyling dell'identità visiva di Atletica Leonessa, sviluppato per rendere il logo più dinamico, riconoscibile e coerente con il mondo dell'atletica. Il progetto unisce il simbolo del leone, elemento legato alla squadra, a linee fluide ispirate alla pista e al movimento, costruendo un'identità energica e versatile, applicabile anche all'abbigliamento sportivo.",
            },
          ],
          gallery: [
            { src: `${GD}/atletica-leonessa-1.png`, width: 300, top: 48, left: 72, rotation: -4 },
          ],
          galleryExtra: [
            `${GD}/atletica-leonessa-extra-1.png`,
            `${GD}/atletica-leonessa-extra-2.png`,
            `${GD}/atletica-leonessa-extra-3.png`,
            `${GD}/atletica-leonessa-extra-4.png`,
          ],
        },
        {
          id: "gilli-games",
          title: "Gilli Games",
          titleAfter: 1,
          rowAlign: "start",
          images: [
            `${GD}/gilli-games-1.png`,
            `${GD}/gilli-games-2.png`,
            `${GD}/gilli-games-3.png`,
          ],
          hero: `${GD}/gilli-games-2.png`,
          blocks: [
            {
              type: "text",
              text:
                "Il logo di Gilli Games nasce dall'unione delle due iniziali \"G\", costruite in modo da richiamare la forma di un tavolo visto frontalmente. Il segno sintetizza così l'identità dell'azienda, specializzata nella progettazione di giochi da tavolo, attraverso una soluzione semplice, riconoscibile e direttamente collegata al mondo del gioco e della condivisione.",
            },
          ],
          gallery: [
            {
              src: `${GD}/gilli-games-1.png`,
              width: 420,
              top: 24,
              left: 40,
              rotation: 3,
              large: true,
            },
            { src: `${GD}/gilli-games-3.png`, width: 300, top: 190, left: 250, rotation: -5 },
          ],
        },
        {
          id: "posters",
          title: "Posters",
          titleAfter: 1,
          rowAlign: "center",
          images: [
            `${GD}/posters-1.jpeg`,
            `${GD}/posters-2.jpg`,
            `${GD}/posters-3.jpg`,
            `${GD}/posters-4.jpg`,
          ],
          hero: `${GD}/posters-1.jpeg`,
          blocks: [
            {
              type: "text",
              text:
                "Poster illustrato ispirato al proverbio giapponese \"明日は明日の風が吹く\", traducibile come \"domani soffierà di nuovo il vento\", un invito a non preoccuparsi troppo del futuro e a lasciare che ogni cosa trovi il proprio corso. I due gatti, rappresentati in modo ironico e affettuoso, alleggeriscono il messaggio e creano un contrasto tra saggezza tradizionale e linguaggio visivo contemporaneo.",
            },
            {
              type: "pair",
              layout: "image-left",
              image: `${GD}/posters-4.jpg`,
              text:
                "Poster dedicato a Fight Club, costruito attraverso una composizione frammentata, materica e volutamente caotica. Fotografie, testi, simboli e segni grafici richiamano i temi dell'identità, della ribellione e del conflitto interiore, restituendo l'atmosfera disturbante e anticonformista del film.",
            },
            {
              type: "pair",
              layout: "image-right",
              image: `${GD}/posters-3.jpg`,
              text:
                "Poster ispirato alla serie Altered Carbon, incentrato sul rapporto tra corpo, tecnologia e identità. La sovrapposizione di figure, trasparenze e annotazioni grafiche richiama l'idea di un corpo sostituibile e di una memoria trasferibile, creando un'immagine fredda, stratificata e futuristica.",
            },
          ],
          gallery: [],
        },
      ],
    },
    {
      id: "illustrazione",
      title: "Illustrazione",
      projects: [
        {
          id: "laf",
          title: "Laf",
          titleAfter: 3,
          rowAlign: "center",
          images: [
            `${IL}/laf-1.jpg`,
            `${IL}/laf-2.jpg`,
            `${IL}/laf-3.jpg`,
            `${IL}/laf-4.jpg`,
          ],
          hero: `${IL}/laf-2.jpg`,
          blocks: [
            {
              type: "text",
              text:
                "Progetto di branding e illustrazione per un prodotto immaginario: un inalatore portatile di gas esilarante. L'identità visiva si sviluppa attraverso quattro mondi illustrati, ciascuno associato a una diversa variante del prodotto, con colori accesi, forme fluide e un immaginario surreale pensato per comunicare leggerezza, evasione e divertimento.",
            },
          ],
          gallery: [
            { src: `${IL}/laf-1.jpg`, width: 220, top: 24, left: 64, rotation: -6 },
            { src: `${IL}/laf-3.jpg`, width: 240, top: 96, left: 210, rotation: 4 },
            { src: `${IL}/laf-4.jpg`, width: 210, top: 48, left: 350, rotation: -3 },
          ],
        },
        {
          id: "carte",
          title: "Carte",
          titleAfter: 1,
          rowAlign: "center",
          images: [
            `${IL}/carte-1.png`,
            `${IL}/carte-2.png`,
            `${IL}/carte-3.png`,
          ],
          hero: `${IL}/carte-1.png`,
          blocks: [
            {
              type: "text",
              text:
                "Mazzo di carte illustrato per il gioco della Scala 40, costruito attraverso un linguaggio geometrico essenziale. Leone, leonessa e ghepardo diventano i protagonisti delle figure, mentre i semi vengono reinterpretati attraverso impronte e segni modulari, creando un sistema visivo coerente, riconoscibile e contemporaneo.",
            },
          ],
          gallery: [
            { src: `${IL}/carte-2.png`, width: 200, top: 40, left: 96, rotation: 5 },
            { src: `${IL}/carte-3.png`, width: 200, top: 64, left: 230, rotation: -4 },
          ],
          galleryExtra: carteGalleryExtra,
        },
        {
          id: "tecnofreight",
          title: "Tecnofreight",
          titleAfter: 2,
          rowAlign: "center",
          images: [
            `${IL}/tecnofreight-1.png`,
            `${IL}/tecnofreight-2.png`,
          ],
          hero: `${IL}/tecnofreight-2.png`,
          blocks: [
            {
              type: "text",
              text:
                "Serie di illustrazioni realizzata in collaborazione con Tecnofreight, azienda specializzata nel settore dei trasporti. Il progetto traduce i valori del brand in immagini dinamiche e immediate, combinando movimento, energia e un linguaggio visivo ironico, pensato per rendere la comunicazione aziendale più riconoscibile e coinvolgente.",
            },
          ],
          gallery: [
            { src: `${IL}/tecnofreight-1.png`, width: 340, top: 56, left: 120, rotation: -2 },
          ],
        },
        {
          id: "gli-androidi-sognano-pecore-elettriche",
          title: "Gli androidi sognano pecore elettriche?",
          titleAfter: 1,
          rowAlign: "center",
          images: [
            `${IL}/gliandroidi-1.png`,
            `${IL}/gliandroidi-2.png`,
            `${IL}/gliandroidi-3.png`,
            `${IL}/gliandroidi-4.png`,
          ],
          hero: `${IL}/gliandroidi-1.png`,
          blocks: [
            {
              type: "text",
              text:
                "Restyling della copertina del romanzo di Philip K. Dick, sviluppato a partire dai temi centrali dell'opera: identità, memoria e confine tra umano e artificiale. La composizione utilizza elementi figurativi essenziali e una palette contenuta per creare un'immagine ambigua, sospesa tra realtà e simulazione.",
            },
          ],
          gallery: [
            { src: `${IL}/gliandroidi-2.png`, width: 190, top: 36, left: 80, rotation: 4 },
            { src: `${IL}/gliandroidi-3.png`, width: 190, top: 88, left: 230, rotation: -3 },
            { src: `${IL}/gliandroidi-4.png`, width: 190, top: 52, left: 360, rotation: 5 },
          ],
        },
        {
          id: "sunset-limited",
          title: "Sunset Limited",
          titleAfter: 2,
          rowAlign: "center",
          images: [
            `${IL}/sunset-limited-1.png`,
            `${IL}/sunset-limited-2.png`,
          ],
          hero: `${IL}/sunset-limited-2.png`,
          blocks: [
            {
              type: "text",
              text:
                "Restyling della copertina di Sunset Limited, costruito intorno al confronto tra i due protagonisti e alla tensione del loro dialogo. La composizione ridotta all'essenziale, dominata dal contrasto tra luce e oscurità, richiama i temi della fede, della disperazione e del limite, trasformando lo spazio grafico in una scena teatrale.",
            },
          ],
          gallery: [
            { src: `${IL}/sunset-limited-1.png`, width: 220, top: 64, left: 140, rotation: -3 },
          ],
          galleryExtra: [`${IL}/sunset-limited-extra.png`],
        },
      ],
    },
    {
      id: "digital-video",
      title: "Digital Video",
      projects: [
        {
          id: "100km-adamello",
          title: "100km l'Adamello Trail di Filippo",
          titleAfter: 1,
          rowAlign: "center",
          images: [
            `${DV}/100km-adamello-1.jpg`,
            `${DV}/100km-adamello-2.jpg`,
          ],
          hero: `${DV}/100km-adamello-1.jpg`,
          blocks: [
            {
              type: "text",
              text:
                "Racconto video dell'Adamello Ultra Trail percorso da mio fratello Filippo, una gara di 100 chilometri tra fatica, paesaggi e momenti imprevisti. Il montaggio alterna la dimensione intensa della competizione a un tono spontaneo e divertente, restituendo l'esperienza in modo personale e coinvolgente.",
            },
          ],
          gallery: [
            { src: `${DV}/100km-adamello-2.jpg`, width: 360, top: 48, left: 100, rotation: -2 },
          ],
          galleryExtra: [`${DV}/100km-adamello-extra.png`],
        },
        {
          id: "how-to-reset-after-a-storm",
          title: "How to reset after a storm",
          titleAfter: 2,
          rowAlign: "center",
          images: [
            `${DV}/how-to-reset-1.jpg`,
            `${DV}/how-to-reset-2.jpg`,
          ],
          hero: `${DV}/how-to-reset-2.jpg`,
          blocks: [
            {
              type: "text",
              text:
                "Un breve video dedicato ai piccoli gesti quotidiani che aiutano a ritrovare equilibrio dopo un momento difficile. Azioni semplici vengono osservate e romanticizzate attraverso una luce morbida e un ritmo delicato, trasformando la quotidianità in uno spazio intimo di calma e benessere.",
            },
          ],
          gallery: [
            { src: `${DV}/how-to-reset-1.jpg`, width: 340, top: 56, left: 120, rotation: 3 },
          ],
          galleryExtra: [`${DV}/how-to-reset-extra.png`],
        },
        {
          id: "restare",
          title: "Restare",
          titleAfter: 1,
          rowAlign: "center",
          images: [
            `${DV}/restare-1.jpg`,
            `${DV}/restare-2.jpg`,
            `${DV}/restare-3.jpg`,
          ],
          hero: `${DV}/restare-1.jpg`,
          blocks: [
            {
              type: "text",
              text:
                "Interpretazione visiva di Sweet Emotion dei The Kooks, costruita attraverso immagini che raccontano il desiderio di restare, la vicinanza e la fragilità dei legami. Il video traduce il tono emotivo della canzone in un racconto sospeso, intimo e malinconico.",
            },
          ],
          gallery: [
            { src: `${DV}/restare-2.jpg`, width: 300, top: 32, left: 72, rotation: -4 },
            { src: `${DV}/restare-3.jpg`, width: 280, top: 96, left: 250, rotation: 5 },
          ],
          galleryExtra: [`${DV}/restare-extra.png`],
        },
      ],
    },
  ],
};
