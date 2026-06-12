document.addEventListener("DOMContentLoaded", () => {
  if (typeof CONFIG === "undefined") {
    console.error("Configurazione interrotta. Controlla la sintassi di config.js");
    return;
  }

  // ==========================================
  // INIEZIONE DEI COLORI DINAMICI (CSS VARIABLES)
  // ==========================================
  const root = document.documentElement;
  if (CONFIG.colori) {
    if (CONFIG.colori.anthracite) root.style.setProperty('--anthracite', CONFIG.colori.anthracite);
    if (CONFIG.colori.coolGrey) root.style.setProperty('--cool-grey', CONFIG.colori.coolGrey);
    if (CONFIG.colori.bananaYellow) root.style.setProperty('--banana-yellow', CONFIG.colori.bananaYellow);
  }

  // ==========================================
  // INIEZIONE DATI TESTUALI E IMMAGINI
  // ==========================================
  // Header
  document.getElementById('site-title').innerText = CONFIG.titolo;
  document.getElementById('site-subtitle').innerText = CONFIG.sottotitolo;

  // Focus Card
  document.getElementById('card-tag').innerText = CONFIG.focusCard.tag;
  document.getElementById('card-text').innerText = CONFIG.focusCard.testo;
  document.getElementById('card-link').href = CONFIG.focusCard.link;
  document.getElementById('track-image').style.backgroundImage = `url('${CONFIG.focusCard.immagine}')`;

  // Diario / Essence Box
  document.getElementById('diary-title').innerText = CONFIG.diario.titolo;
  document.getElementById('diary-text').innerText = CONFIG.diario.testo;

  // Footer
  document.getElementById('site-version').innerText = CONFIG.versione;

  // ==========================================
  // RENDERING DINAMICO DEI BENTO LINKS
  // ==========================================
  const linksContainer = document.getElementById('bento-links-container');
  linksContainer.innerHTML = ""; // Svuota l'HTML statico precedente

  CONFIG.links.forEach(link => {
    // Crea l'elemento ancora principal
    const anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.target = "_blank";
    anchor.className = "nav-row";

    // Label del testo
    const labelSpan = document.createElement('span');
    labelSpan.className = "nav-label";
    labelSpan.innerText = link.label;

    // Slashes estetiche laterali (le barre `//`)
    const slashesSpan = document.createElement('span');
    slashesSpan.className = "nav-slashes";
    slashesSpan.innerText = "//";

    // Costruisci e appendi la struttura
    anchor.appendChild(labelSpan);
    anchor.appendChild(slashesSpan);
    linksContainer.appendChild(anchor);
  });
});
