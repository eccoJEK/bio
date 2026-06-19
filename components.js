const BentoComponents = {
  "focus-card": function(dati) {
    const div = document.createElement('section');
    div.className = "focus-card";
    div.innerHTML = `
      <div class="track-image-container">
        <div id="track-image" class="track-image" style="background-image: url('${dati.immagine || ''}')"></div>
      </div>
      <div class="track-details">
        <span id="card-tag" class="inner-tag">${dati.tag || '//'}</span>
        <h2 id="card-text">${dati.testo || '//'}</h2>
        <a id="card-link" href="${dati.url || '#'}" target="_blank" class="liquid-btn">ENTER CORE</a>
      </div>
    `;
    return div;
  },

  "bento-link": function(dati) {
    const anchor = document.createElement('a');
    anchor.href = dati.url || "#"; 
    anchor.target = "_blank";
    anchor.className = "nav-row";
    anchor.innerHTML = `
      <span class="nav-label">${dati.label || '//'}</span>
      <span class="nav-slashes">//</span>
    `;
    return anchor;
  },

  // ==========================================
  // NUOVI COMPONENTI DI UTILITY
  // ==========================================

  // COMPONENTE BANNER: Un'immagine intera cliccabile (es. cover o poster)
  "bento-image": function(dati) {
    const div = document.createElement('div');
    div.style.width = "100%";
    div.style.height = dati.altezza || "140px";
    div.style.borderRadius = "var(--radius-card)";
    div.style.border = "1px solid var(--border-color)";
    div.style.backgroundImage = `url('${dati.url_immagine || ''}')`;
    div.style.backgroundSize = "cover";
    div.style.backgroundPosition = "center";
    div.style.cursor = dati.url ? "pointer" : "default";
    
    if (dati.url) {
      const anchor = document.createElement('a');
      anchor.href = dati.url;
      anchor.target = "_blank";
      anchor.appendChild(div);
      return anchor;
    }
    return div;
  },

  // COMPONENTE COUNTDOWN: Perfetto per scandire il tempo prima di una release
  "bento-countdown": function(dati) {
    const div = document.createElement('div');
    div.className = "focus-card"; 
    div.style.flexDirection = "column";
    div.style.alignItems = "flex-start";
    div.style.gap = "0.4rem";

    div.innerHTML = `
      <span class="inner-tag">${dati.tag || 'COUNTDOWN'}</span>
      <h2 style="font-size: 1.15rem; font-weight: 400; color: rgba(var(--cool-grey), 0.95);">${dati.titolo || '//'}</h2>
      <div class="timer" style="font-size: 1.4rem; color: rgb(var(--banana-yellow)); font-weight: bold; letter-spacing: 1px;">
        00d 00h 00m 00s
      </div>
    `;

    const targetDate = new Date(dati.data_target).getTime();
    const timerElement = div.querySelector('.timer');

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff < 0) {
        timerElement.innerText = dati.testo_scaduto || "OUT NOW";
        clearInterval(intervalId);
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);

      timerElement.innerText = `${d}d ${h}h ${m}m ${s}s`;
    };

    const intervalId = setInterval(updateTimer, 1000);
    updateTimer();

    return div;
  },

  // COMPONENTE CITAZIONE / AVVISO COMPATTO: Un testo centrato in giallo JEK
  "bento-alert": function(dati) {
    const div = document.createElement('div');
    div.className = "inner-thoughts-box";
    div.style.marginTop = "0";
    div.style.borderStyle = "solid";
    div.style.borderColor = "rgba(var(--banana-yellow), 0.3)";
    div.style.textAlign = "center";
    div.innerHTML = `
      <p style="color: rgb(var(--banana-yellow)); font-size: 0.9rem; font-style: italic;">
        ${dati.testo || '//'}
      </p>
    `;
    return div;
  }
};
