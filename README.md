## Recept – Pannkaksprojekt

En enkel, statisk webbplats på svenska som visar ett klassiskt recept på tunna pannkakor. Projektet är avsett som ett litet exempel på semantisk HTML, grundläggande tillgänglighet och snabb leverans av statiskt innehåll.

**Filstruktur:**
- `index.html` — huvudsida med receptet, uppdelat i semantiska `main`, `article` och `section`-element.
- `assets/style.css` — grundläggande layout, typografi och responsivitet.
- `assets/img/` — bildresurser som används på sidan.

**Syfte:**
- Visa gott mark-up-hantverk (semantik, rubriker, listor).
- Exempel på enkla prestandaoptimeringar (lazy-loading, font-preconnect).
- Vara lätt att forka och anpassa för små statiska projekt eller övningar.

**Hur du öppnar sidan:**
- Dubbelklicka på `index.html` eller öppna filen i en webbläsare.

### Senaste ändringar
- Förbättrad semantik: tydliga sektioner för ingredienser, instruktioner och servering.
- Tillgänglighet: förbättrade rubrikstrukturer och ARIA-kopplingar där lämpligt.
- Prestanda: bilder lazy-loadas och Google Fonts förbindelser preconnectas.
- Caching: rekommendationer för lång cache på statiska resurser och kortare på HTML.