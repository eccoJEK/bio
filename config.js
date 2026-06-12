const CONFIG = {
  // --- IMPOSTAZIONI DI BASE ---
  titolo: "JEK",
  sottotitolo: "trying to make notes fit together.",
  versione: "JEK // index v1.2",

  // --- PALETTE COLORI CUSTOM (In formato RGB senza "rgb()") ---
  // In questo modo puoi cambiare l'anima del sito direttamente da qui
  colori: {
    anthracite: "30, 33, 41",     // Sfondo scuro principale
    coolGrey: "140, 146, 172",    // Testi e dettagli secondari
    bananaYellow: "254, 221, 0"   // Colore accento (Led, bottoni, hover)
  },

  // --- FOCUS CARD (La release principale) ---
  focusCard: {
    tag: "LATEST RELEASE",
    testo: "NOME SINGOLO DOPE",
    link: "https://spotify.com/...",
    // Incolla qui l'URL dell'immagine di copertina
    immagine: "https://images.unsplash.com/photo-1550064824-8f993041ffd3?q=80&w=1000"
  },

  // --- GRIGLIA DI LINK (Bento Style) ---
  // Puoi aggiungere o rimuovere quanti oggetti vuoi, il sistema li genererà da solo
  links: [
    /*{ label: "spotify profile", url: "https://spotify.com/..." },
    { label: "apple music", url: "https://apple.com/..." },*/
    { label: "youtube", url: "https://youtube.com/@eccoJEK"},
    { label: "soundcloud", url: "https://soundcloud.com/eccoJEK" },
    { label: "instagram", url: "https://instagram.com/eccoJEK" },
    { label: "tiktok", url: "https://tiktok.com/eccoJEK" }
  ],

  // --- BOX DIARIO / PENSIERI ---
  diario: {
    titolo: "LIVE_LOG",
    testo: "setting up the social accounts in order to start publishing."
  }
};
