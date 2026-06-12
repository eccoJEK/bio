document.addEventListener("DOMContentLoaded", () => {
  // Verifichiamo che l'oggetto CONFIG generato da config.js sia presente a schermo
  if (typeof CONFIG === "undefined") {
    console.error("Configurazione interrotta. Controlla la sintassi di config.js");
    return;
  }

  // 1. Profilo Header (Aggiornato con il campo dinamico "sottotitolo")
  document.getElementById('site-title').innerText = CONFIG.titolo;
  document.getElementById('site-subtitle').innerText = CONFIG.sottotitolo;

  // 2. Focus Card Principale
  document.getElementById('card-tag').innerText = CONFIG.cardTag;
  document.getElementById('card-text').innerText = CONFIG.cardTesto;
  document.getElementById('card-link').href = CONFIG.cardLink;

  // 3. Primo Portale Link
  document.getElementById('nav-label-1').innerText = CONFIG.link1Label;
  document.getElementById('nav-link-1').href = CONFIG.link1Url;
  
  // 4. Secondo Portale Link
  document.getElementById('nav-label-2').innerText = CONFIG.link2Label;
  document.getElementById('nav-link-2').href = CONFIG.link2Url;

  // 5. Diario / Essence Box
  document.getElementById('diary-title').innerText = CONFIG.diarioTitolo;
  document.getElementById('diary-text').innerText = CONFIG.diarioTesto;

  // 6. Architettura Base Footer
  document.getElementById('site-version').innerText = CONFIG.versione;
});
