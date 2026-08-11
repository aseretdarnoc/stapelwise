# Komponenten-Inventar

Alle Bausteine mit Klassennamen, Fundstelle und dem, was man wissen muss. Sortiert nach Verbreitung.

---

## Rahmen jeder Seite

| Klasse | Wo | Was |
|---|---|---|
| `.seite` | alle 15 | Inhaltsspalte, 960 px, zentriert. Beim Export ergänzt, siehe README |
| `.nav-mock` | alle 15 | Kopfleiste mit Logo, Menü und zwei Buttons. Auf allen Seiten dupliziert |
| `.footer-cols` | alle 15 | Vier Spaltenmenüs in der Fußleiste: Branchen, Dokumentarten, Anwendungsfälle, Unternehmen. Darunter trägt `.footer-mock` nur noch Impressum und Datenschutz |
| `.breadcrumb` | 14 | Pfadanzeige, fehlt nur auf der Startseite |
| `.footer-mock` | alle 15 | Fußleiste. Nur zwei Einträge sind verlinkt, siehe `offene-punkte.md` |

---

## Auf allen zehn Branchenseiten

### `.doc-channel-grid` mit `.doc-flap` und `.channel-type`

Der Abschnitt „Viele Dokumente. Viele Eingangswege." Links wechselt alle 1,5 Sekunden eine Dokumentart samt Bild, rechts tippt eine Zeile die Eingangswege.

- Dokumentarten stehen als JSON im Attribut `data-pool`, je Eintrag `[Beschriftung, Quelle]`. Die Quelle ist eine Kachelnummer wie `sprite:12` aus `assets/img/klappanzeigen.png` oder ein Symbolverweis mit `#`
- Eingangswege stehen als JSON im Attribut `data-words` am `.channel-type`
- **Skaliert über Container-Queries**, siehe `design-tokens.md`

### `.branch-stepper` mit `.step-block`

Der Ablauf „So funktioniert Stapelweise", sieben aufklappbare Schritte. Ein Schritt ist offen, gesteuert über die Klasse `.active`. Beim Scrollen schaltet ein IntersectionObserver mit, Klick geht auch.

Die Schrittnummern und Titel sind auf allen Seiten identisch: 0. Konfiguration bis 6. Aktion. Rechts steht je Schritt eine `.illu-slot`, eine gestrichelte Platzhalterfläche für eine noch fehlende Illustration.

### `.linelist-row` mit `.linelist-item`

Die meistgenutzte Komponente, auf 12 Seiten. Aufzählung mit Überschrift und Absatz, orangefarbene Linie links. Trägt Vorteile, Einsatzbereiche und die Warum-Blöcke. Umbricht über `flex-wrap`, deshalb steht bei sieben Einträgen der letzte allein in einer zweiten Reihe.

### `.role-grid` mit `.role-col`

„Für wen sich Stapelweise lohnt", dreispaltig. Jede Spalte hat eine `.role-illu-slot` als Platzhalter.

### `.badge-bar`

Die Souveränitäts-Leiste. Eine hervorgehobene Aussage plus drei `.cert-badge` mit Symbol.

### `.case-study-row` mit `.case-card`

Beispielprozess oder Fallstudie. Links ein `.case-scribble` als Bild, rechts Label, Überschrift, Absätze und ein Verweis. Optional `.case-results` mit Ergebnis-Chips.

### `.model-card`

Die drei Betriebsvarianten, auf 10 Seiten. Auf der Preisseite zusätzlich mit `.model-price` und `.model-tiers` für die Staffelung nach Grafikspeicher.

### `.cta-row` mit `.cta-item` und `.cta-note`

Der Abschluss-Aufruf vor der Fußleiste. Zwei Buttons, darunter je eine erklärende Zeile. Im Hero stehen dieselben Buttons ohne Zusatz.

---

## Nur auf einzelnen Seiten

### Preisseite

| Klasse | Was |
|---|---|
| `.price-grid` mit `.price-card` | Drei Pakete. `.highlight` hebt Professional hervor, `.price-badge` trägt „Am häufigsten gewählt" |
| `.calc-row` mit `.calc-card` | Drei Rechenbeispiele, Paket plus Betriebsmodell ergibt Monatspreis |

### Fallstudie

Eigenes redaktionelles Layout mit Präfix `cs-`, bewusst anders als die Branchenseiten. **Als Vorlage für weitere Fallstudien gedacht.**

| Klasse | Was |
|---|---|
| `.cs-band` | Abschnitt über die volle Breite. `.tint` getönt, `.ink` dunkel für die große Kennzahl |
| `.cs-col` | Lesespalte, 660 px. `.wide` für 900 px bei Bildern und Faktenleiste |
| `.cs-facts` | Vierspaltige Faktenleiste: Einrichtung, Aufgabe, Dokumentarten, Ergebnis |
| `.cs-bignum` | Die große Prozentzahl |
| `.cs-steps` | Nummerierte Schritte, Nummern kommen aus einem CSS-Counter |
| `.cs-results` | Ergebniskarten |
| `.cs-faq` | Aufklappbar über `<details>`, kein JavaScript |

### Startseite

| Klasse | Was |
|---|---|
| `.subtabs` mit `.lsg-panel` | Umschalter „Nach Branche / Dokumentart / Anwendungsfall". Beim Wechsel fliegen die Kacheln ein |
| `.mini-tile`, `.branch-tile` | Kachellisten. Branchenkacheln sind verlinkt, Dokumentart-Kacheln nicht |
| `.doc-viewer`, `.doc-pill` | Klickbare Dokumentbeispiele mit Vorschau |
| `.step-gif` | Die Ablauf-Animationen. Ein GIF kann über `data-for="2 3"` mehrere Schritte bedienen, das JavaScript trennt am Leerzeichen |

### Vergleichstabellen

`.cmp` in `.cmp-wrap`, auf Startseite, Lokale KI und Preise. Der Wrapper sorgt für horizontales Scrollen auf schmalen Fenstern. `td.win` hebt die Stapelweise-Spalte hervor.

---

## Symbole

52 Strich-Symbole in `assets/icons.svg`, eingebunden über

```html
<svg><use href="../../assets/icons.svg#ic-check"/></svg>
```

Der Präfix richtet sich nach der Tiefe der Seite, auf der Startseite steht `assets/icons.svg#…`. Alle Namen beginnen mit `ic-`. Sie erben die Textfarbe über `currentColor`, lassen sich also per CSS einfärben.

**Achtung beim Sprite:** Ein externes SVG-Sprite über `<use href="datei.svg#id">` funktioniert nicht über verschiedene Domains hinweg und nicht bei `file://`. Lokal muss also ein Server laufen, sonst bleiben die Symbole leer.

---

## JavaScript

`assets/js/app.js`, 16 KB, keine Abhängigkeiten. Sieben unabhängige Blöcke, jeder hängt sich an eine Klasse und tut nichts, wenn die Klasse auf der Seite fehlt:

1. Hero-Typewriter und Karussell der Startseite
2. Klickbare Dokumentbeispiele
3. Ablauf-Schritte der Startseite samt GIF-Umschaltung
4. Umschalter im Lösungen-Bereich
5. Klappanzeige der Dokumentarten
6. Typewriter der Eingangswege
7. Aufklappbare Schritte der Branchenseiten

Alle Zeitgeber laufen über `setInterval` ohne Aufräumen. Für eine Single-Page-Anwendung müsste das überarbeitet werden, für klassisch ausgelieferte Seiten ist es unkritisch.
