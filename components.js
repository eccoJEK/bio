const BentoComponents = {
  // Fabbrica centralizzata per gestire contenitori, dimensioni e link
  creaBloccoBase: (dati, contenutoHtml, classeTipo) => {
    const div = document.createElement('div');
    div.className = `bento-item ${classeTipo}`;
    div.style.width = "100%";
    div.style.height = dati.altezza || "auto";
    div.innerHTML = contenutoHtml;

    if (dati.url) {
      const anchor = document.createElement('a');
      anchor.href = dati.url;
      anchor.target = "_blank";
      anchor.style.textDecoration = "none";
      anchor.style.color = "inherit";
      anchor.appendChild(div);
      return anchor;
    }
    return div;
  },

  link: function(dati) {
    const html = `
      <div class="nav-row" style="border: none; background: transparent; padding: 0; width: 100%;">
        <span class="nav-label">${dati.label || 'Link'}</span>
        <span class="nav-slashes">//</span>
      </div>
    `;
    return this.creaBloccoBase(dati, html, "type-link");
  },

  text: function(dati) {
    const html = `
      <div class="inner-thoughts-box" style="border: none; background: transparent; padding: 0; margin: 0;">
        <div class="info-header">
          <span class="terminal-dash">${dati.titolo || '//'}<span class="blinking-cursor">_</span></span>
        </div>
        <p class="quote">${dati.testo || ''}</p>
      </div>
    `;
    return this.creaBloccoBase(dati, html, "type-text");
  },

  image: function(dati) {
    const blocco = this.creaBloccoBase(dati, '', "type-image");
    const target = blocco.tagName === 'A' ? blocco.firstChild : blocco;
    
    target.style.backgroundImage = `url('${dati.url_immagine}')`;
    target.style.backgroundSize = "cover";
    target.style.backgroundPosition = "center";
    target.style.borderRadius = "var(--radius-card)";
    target.style.border = "1px solid var(--border-color)";
    return blocco;
  }
};
