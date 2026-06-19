document.addEventListener("DOMContentLoaded", () => {
  if (typeof CONFIG === "undefined") return;

  // Iniezione Colori
  const root = document.documentElement;
  if (CONFIG.colori) {
    if (CONFIG.colori.anthracite) root.style.setProperty('--anthracite', CONFIG.colori.anthracite);
    if (CONFIG.colori.coolGrey) root.style.setProperty('--cool-grey', CONFIG.colori.coolGrey);
    if (CONFIG.colori.bananaYellow) root.style.setProperty('--banana-yellow', CONFIG.colori.bananaYellow);
  }

  // Elementi fissi statici
  document.getElementById('site-title').innerText = CONFIG.titolo;
  document.getElementById('site-subtitle').innerText = CONFIG.sottotitolo;
  document.getElementById('diary-title').innerText = CONFIG.diario.titolo;
  document.getElementById('diary-text').innerText = CONFIG.diario.testo;
  document.getElementById('site-version').innerText = CONFIG.versione;

  // Rendering dei blocchi dal framework components
  const container = document.getElementById('bento-links-container');
  container.innerHTML = ""; 

  CONFIG.blocchi.forEach(b => {
    // Controlla se il blocco esiste dentro components.js
    if (typeof BentoComponents[b.nome] === "function") {
      const elementoGenerato = BentoComponents[b.nome](b);
      container.appendChild(elementoGenerato);
    }
  });
});
