/* Stapelweise (dok.land)
   Klappanzeige der Dokumentarten, Typewriter der Eingangswege,
   aufklappbare Ablauf-Schritte, Reiter im Lösungen-Bereich.
   Die Seitenumschaltung des Entwurfs entfällt, Seiten sind jetzt echte Dateien. */
(function(){
  // ---------- hero typewriter / carousel ----------
  var reduceMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var titleWords = ["Dokumenten","Belegen","Bildern","Screenshots","Scans","PDFs","Akten"];
  var wegWords = ["Post","E-Mail","Upload","Messenger","Postkutsche","Brieftaube"];
  var formatWords = [
    {label:"Brief", icon:"#ic-brief"},
    {label:"Rechnung", icon:"#ic-rechnung"},
    {label:"Formular", icon:"#ic-formular"},
    {label:"Postkarte", icon:"#ic-postkarte"},
    {label:"Foto", icon:"#ic-foto"}
  ];
  var ti = 0, wi = 0, fi = 0;

  function typeSwap(el, newWord, iconHref){
    if(!el) return;
    var textEl = el.querySelector('.type-text');
    if(reduceMotion){
      textEl.textContent = newWord;
      if(iconHref){ var u = el.querySelector('use'); if(u) u.setAttribute('href', iconHref); }
      return;
    }
    var old = textEl.textContent;
    var i = old.length;
    el.classList.add('typing');
    var del = setInterval(function(){
      if(i > 0){ i--; textEl.textContent = old.slice(0, i); }
      else{
        clearInterval(del);
        if(iconHref){ var u = el.querySelector('use'); if(u) u.setAttribute('href', iconHref); }
        var j = 0;
        var typ = setInterval(function(){
          if(j < newWord.length){ j++; textEl.textContent = newWord.slice(0, j); }
          else{ clearInterval(typ); el.classList.remove('typing'); }
        }, 55);
      }
    }, 35);
  }

  function carouselSwap(container, newWord){
    if(!container) return;
    var cur = container.querySelector('.car-cur');
    if(reduceMotion){ cur.textContent = newWord; return; }
    var next = document.createElement('span');
    next.className = 'car-next';
    next.textContent = newWord;
    container.appendChild(next);
    var startW = cur.offsetWidth, endW = next.offsetWidth;
    container.style.width = startW + 'px';
    void container.offsetWidth;
    container.style.width = endW + 'px';
    cur.style.transform = 'translateX(-120%)';
    next.style.transform = 'translateX(0)';
    setTimeout(function(){
      cur.style.transition = 'none';
      cur.textContent = newWord;
      cur.style.transform = 'translateX(0)';
      void cur.offsetWidth;
      cur.style.transition = '';
      next.remove();
      container.style.width = '';
    }, 500);
  }

  var typeTitleEl = document.getElementById('type-title');
  var carWegEl = document.getElementById('car-weg');
  var typeFormatEl = document.getElementById('type-format');

  function heroTick(){
    ti = (ti + 1) % titleWords.length;
    typeSwap(typeTitleEl, titleWords[ti]);
    setTimeout(function(){
      wi = (wi + 1) % wegWords.length;
      carouselSwap(carWegEl, wegWords[wi]);
    }, 500);
    setTimeout(function(){
      fi = (fi + 1) % formatWords.length;
      typeSwap(typeFormatEl, formatWords[fi].label, formatWords[fi].icon);
    }, 1000);
  }
  if(typeTitleEl){
    setTimeout(function(){ heroTick(); setInterval(heroTick, 2000); }, 1500);
  }

  // ---------- Beispiele: klickbare Dokumentarten ----------
  var docData = {
    arztbrief: {file:'arztbrief.pdf', fields:[["Patient","•••••••"],["Anamnese","Seit 3 Tagen Fieber, Husten, Halsschmerzen"],["Diagnose","J06.9"],["Therapie","Symptomatisch, Bettruhe, viel Flüssigkeit"],["Behandelnder Arzt","Dr. Meier"],["Datum","12.07.2026"],["Empfehlung","Kontrolle in 2 Wochen"]]},
    kontoauszug: {file:'kontoauszug.pdf', fields:[["IBAN","DE12 •••• 6789"],["Zeitraum","01.06.–30.06.2026"],["Saldo","2.340,12 €"],["Buchungen","18"],["Gesamt-Eingänge","4.120,00 € (+6 % ggü. Vormonat)"],["Gesamt-Ausgänge","1.780,00 € (−4 % ggü. Vormonat)"]]},
    mietvertrag: {file:'mietvertrag.pdf', fields:[["Mieter","•••••••"],["Mietbeginn","01.09.2026"],["Kaltmiete","890 €"],["Kaution","2.670 €"],["Kündigungsfrist","3 Monate zum Quartalsende"],["Übergabemängel","Kratzer Parkett Wohnzimmer, dokumentiert"],["Vereinbarte Mietsteigerung","Gestaffelt, +3 % jährlich"]]},
    rechnung: {file:'rechnung.pdf', fields:[["Rechnungsnummer","RE-2026-0447"],["Datum","03.07.2026"],["Betrag","1.284,50 €"],["Zahlungsziel","14 Tage"]]},
    schadensmeldung: {file:'schadensmeldung.pdf', fields:[["Schadennummer","SCH-88213"],["Schadensdatum","28.06.2026"],["Schadenshöhe","3.200 €"],["Status","In Prüfung"],["Plausibilitätscheck Schadenshöhe","Im Rahmen vergleichbarer Fälle"],["Bisherige Anzahl Schäden","1 (Vorjahr)"],["Beschreibung Schaden","Wasserschaden nach Rohrbruch, Küche"]]},
    personalfragebogen: {file:'personalfragebogen.pdf', fields:[["Name","•••••••"],["Eintrittsdatum","01.08.2026"],["Abteilung","Vertrieb"],["Sozialversicherung","Verifiziert"]]},
    laborbericht: {file:'laborbericht.pdf', fields:[["Patient","•••••••"],["Wert","CRP 4,2 mg/l"],["Referenzbereich","< 5 mg/l"],["Datum","10.07.2026"]]},
    bilanz: {file:'bilanz.pdf', fields:[["Geschäftsjahr","2025"],["Bilanzsumme","4,8 Mio. €"],["Eigenkapitalquote","34 %"]]},
    lohnabrechnung: {file:'lohnabrechnung.pdf', fields:[["Mitarbeiter","•••••••"],["Monat","Juni 2026"],["Bruttolohn","3.450 €"],["Nettolohn","2.180 €"],["Krankenversicherung","Techniker Krankenkasse"],["Steuer-ID","•• 123456 ••"],["Einbehaltene Lohnsteuer","412,80 €"]]},
    frachtbrief: {file:'frachtbrief.pdf', fields:[["Sendungsnummer","FB-77190"],["Absender","Spedition Nord"],["Zielort","Hamburg"],["Gewicht","640 kg"]]}
  };

  function renderDoc(key){
    var d = docData[key];
    if(!d) return;
    var chip = document.getElementById('fileChip');
    if(chip) chip.textContent = d.file;
    var wrap = document.getElementById('viewerFields');
    if(!wrap) return;
    wrap.innerHTML = '';
    d.fields.forEach(function(f){
      var row = document.createElement('div');
      row.className = 'kv';
      var k = document.createElement('span'); k.className='k'; k.textContent = f[0];
      var v = document.createElement('span'); v.className='v'; v.textContent = f[1];
      row.appendChild(k); row.appendChild(v);
      wrap.appendChild(row);
    });
  }

  function positionConnector(pillRowEl){
    var wrap = document.getElementById('examplesWrap');
    var line = document.getElementById('connectorLine');
    var panel = document.querySelector('.viewer-card');
    if(!wrap || !line || !panel || !pillRowEl) return;
    var dot = pillRowEl.querySelector('.pill-dot');
    if(!dot) return;
    var side = pillRowEl.dataset.side;
    var wrapRect = wrap.getBoundingClientRect();
    var dotRect = dot.getBoundingClientRect();
    var panelRect = panel.getBoundingClientRect();
    var y = dotRect.top - wrapRect.top + dotRect.height / 2;
    var dotX = dotRect.left - wrapRect.left + dotRect.width / 2;

    line.style.top = y + 'px';
    if(side === 'right'){
      var panelRightX = panelRect.right - wrapRect.left;
      line.style.left = panelRightX + 'px';
      line.style.width = Math.max(0, dotX - panelRightX) + 'px';
    } else {
      var panelLeftX = panelRect.left - wrapRect.left;
      line.style.left = dotX + 'px';
      line.style.width = Math.max(0, panelLeftX - dotX) + 'px';
    }
    line.style.display = 'block';
  }

  document.querySelectorAll('.doc-pill').forEach(function(pill){
    pill.addEventListener('click', function(){
      document.querySelectorAll('.doc-pill').forEach(function(p){ p.classList.remove('active'); });
      pill.classList.add('active');
      renderDoc(pill.dataset.doc);
      positionConnector(pill.closest('.pill-row'));
    });
  });

  renderDoc('arztbrief');
  var firstPillRow = document.querySelector('.pill-row');
  if(firstPillRow){
    setTimeout(function(){ positionConnector(firstPillRow); }, 50);
  }
  window.addEventListener('resize', function(){
    var activePill = document.querySelector('.doc-pill.active');
    if(activePill) positionConnector(activePill.closest('.pill-row'));
  });

  // ---------- Lösungen: Nach Branche / Dokumentart / Anwendungsfall ----------
  var lsgSubtabs = document.querySelectorAll('#lsgSubtabs .subtab');
  var lsgPanels = document.querySelectorAll('.lsg-panel');

  function shuffleInTiles(container){
    var tiles = container.querySelectorAll('.mini-tile, .branch-tile');
    tiles.forEach(function(tile){
      var dx = (Math.random() * 240 - 120).toFixed(0);
      var dy = (Math.random() * 120 - 60).toFixed(0);
      var rot = (Math.random() * 50 - 25).toFixed(0);
      tile.style.transition = 'none';
      tile.style.transform = 'translate(' + dx + 'px,' + dy + 'px) rotate(' + rot + 'deg)';
    });
    void container.offsetWidth;
    tiles.forEach(function(tile, i){
      tile.style.transition = 'transform .5s cubic-bezier(.25,1,.4,1) ' + (i * 18) + 'ms';
      tile.style.transform = 'translate(0,0) rotate(0deg)';
    });
  }

  lsgSubtabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      lsgSubtabs.forEach(function(t){ t.classList.remove('active'); });
      tab.classList.add('active');
      var target = tab.dataset.panel;
      var activePanel = null;
      lsgPanels.forEach(function(p){
        p.hidden = (p.dataset.panel !== target);
        if(p.dataset.panel === target) activePanel = p;
      });
      if(activePanel) shuffleInTiles(activePanel);
    });
  });

  // ---------- Branchenseiten: Dokumentart-Klappanzeige ----------
  document.querySelectorAll('.doc-flap').forEach(function(flap){
    var pool;
    try { pool = JSON.parse(flap.dataset.pool || '[]'); } catch(e){ pool = []; }
    if(pool.length < 2) return;
    var idx = 0;
    setInterval(function(){
      idx = (idx + 1) % pool.length;
      var entry = pool[idx];
      flap.classList.remove('flap');
      void flap.offsetWidth;
      flap.classList.add('flap');
      setTimeout(function(){
        flap.querySelector('.flap-label').textContent = entry[0];
        var img = flap.querySelector('.flap-ic-img');
        var svg = flap.querySelector('.flap-ic');
        var use = flap.querySelector('use');
        // Motive stehen als "sprite:12" im Pool, Symbole als Verweis mit #.
        var istBild = entry[1] && entry[1].indexOf('sprite:') === 0;
        // Attribute statt .hidden, weil das bei SVG-Elementen nicht zuverlässig wirkt
        if(img){
          if(istBild){
            img.removeAttribute('hidden');
            var i = parseInt(entry[1].slice(7), 10);
            // 9 Spalten, 9 Zeilen. Der Prozentwert ist Index geteilt durch (Anzahl - 1).
            img.style.backgroundPosition =
              ((i % 9) / 8 * 100).toFixed(4) + '% ' + (Math.floor(i / 9) / 8 * 100).toFixed(4) + '%';
          }
          else { img.setAttribute('hidden',''); }
        }
        if(svg){
          if(istBild){ svg.setAttribute('hidden',''); }
          else { svg.removeAttribute('hidden'); }
        }
        if(use && entry[1] && !istBild) use.setAttribute('href', entry[1]);
      }, 220);
    }, 1500);
  });

  // ---------- Branchenseiten: Eingangskanal als Typewriter ----------
  var channelWords = ['per E-Mail', 'per Post', 'per Messenger', 'persönlich abgegeben'];
  document.querySelectorAll('.channel-type').forEach(function(el){
    var words = channelWords;
    if(el.dataset.words){ try { words = JSON.parse(el.dataset.words); } catch(e){} }
    var i = 0;
    setTimeout(function(){
      setInterval(function(){
        i = (i + 1) % words.length;
        typeSwap(el, words[i]);
      }, 2600);
    }, 1000);
  });

  // ---------- Branchenseiten: aufklappbarer Stepper ----------
  document.querySelectorAll('.branch-stepper').forEach(function(stepper){
    var blocks = stepper.querySelectorAll('.step-block');
    var slots  = stepper.querySelectorAll('.illu-slot');
    function setActive(idx){
      idx = String(idx);
      blocks.forEach(function(b){ b.classList.toggle('active', b.dataset.hstep === idx); });
      slots.forEach(function(s){ s.hidden = (s.dataset.for !== idx); });
    }
    blocks.forEach(function(b){
      b.addEventListener('click', function(){ setActive(b.dataset.hstep); });
    });
    if(blocks.length && 'IntersectionObserver' in window){
      var obs = new IntersectionObserver(function(entries){
        entries.forEach(function(e){ if(e.isIntersecting) setActive(e.target.dataset.hstep); });
      }, {rootMargin: '-45% 0px -45% 0px', threshold: 0});
      blocks.forEach(function(b){ obs.observe(b); });
    }
  });

})();
