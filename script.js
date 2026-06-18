document.addEventListener("DOMContentLoaded", () => {
  if (typeof CONFIG === "undefined" || typeof BentoComponents === "undefined") return;

  // Iniezione variabili CSS
  const root = document.documentElement;
  if (CONFIG.colori) {
    if (CONFIG.colori.anthracite) root.style.setProperty('--anthracite', CONFIG.colori.anthracite);
    if (CONFIG.colori.coolGrey) root.style.setProperty('--cool-grey', CONFIG.colori.coolGrey);
    if (CONFIG.colori.bananaYellow) root.style.setProperty('--banana-yellow', CONFIG.colori.bananaYellow);
  }

  // Dati statici
  document.getElementById('site-title').innerText = CONFIG.titolo;
  document.getElementById('site-subtitle').innerText = CONFIG.sottotitolo;
  document.getElementById('site-version').innerText = CONFIG.versione;

  // Ciclo di generazione componenti
  const container = document.getElementById('bento-links-container');
  container.innerHTML = "";

  CONFIG.bentoLayout.forEach(blocco => {
    if (typeof BentoComponents[blocco.tipo] === "function") {
      const elementoHtml = BentoComponents[blocco.tipo](blocco);
      container.appendChild(elementoHtml);
    }
  });
});
