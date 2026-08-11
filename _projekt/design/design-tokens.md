# Design-Tokens

Alles aus `site/assets/css/styles.css`. Farben stehen als CSS-Variablen im `:root`, alles andere ist direkt in den Regeln notiert.

---

## Farben

| Variable | Wert | Wofür |
|---|---|---|
| `--paper` | `#F5F1E8` | Papierweiß, Hintergrund um die Inhaltsspalte |
| `--paper-surface` | `#FBF9F3` | Hellere Fläche, Hintergrund der Seite selbst und der Karten |
| `--ink` | `#172832` | Tintenblau, Überschriften und kräftiger Text |
| `--ink-soft` | `#172832b3` | Ink mit 70 % Deckkraft, Fließtext |
| `--ink-mute` | `#17283280` | Ink mit 50 % Deckkraft, Nebentext, Labels, Bildunterschriften |
| `--orange` | `#E8612C` | Werkstattorange, Akzent: Buttons, Links, Zahlen, Marker |
| `--orange-fill` | `#E8612C1a` | Orange mit 10 %, gefüllte Flächen hinter Symbolen |
| `--sky` | `#86B8C7` | Himmelblau, sparsam eingesetzt |
| `--sky-fill` | `#86B8C733` | Himmelblau mit 20 %, Hintergrund der Kennzahlen-Pille |
| `--gray` | `#D8D6CF` | Arbeitsgrau, alle Linien und Rahmen |

Die drei `--ink`-Stufen sind derselbe Farbwert mit unterschiedlicher Deckkraft. Wer auf eine andere Grundfarbe wechselt, muss alle drei anpassen.

**Dunkelmodus:** Es gibt eine `@media (prefers-color-scheme: dark)`-Regel, die `--paper` und `--ink` tauscht. Sie ist nie gestalterisch durchgeprüft worden. Vor dem Livegang entweder prüfen oder entfernen.

---

## Schrift

**Überschriften:** Bricolage Grotesque, Gewicht 700 und 800. Liegt als `assets/fonts/bricolage-grotesque.woff2` bei, 76 KB, eingebunden über `@font-face`. Im CSS steht der Pfad als `../fonts/…`, weil `url()` relativ zur CSS-Datei auflöst und nicht zur Seite.

**Fließtext:** Systemschrift, kein Webfont:
```
-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif
```

**Monospace:** für die Adresszeile und technische Angaben, `ui-monospace, "SF Mono", "Cascadia Code", Menlo, Consolas, monospace`.

### Größen

| Element | Größe | Klasse |
|---|---|---|
| Hero-Überschrift | 32 px | `.hero h1` |
| Fallstudien-Überschrift | 38 px | `.cs-h1` |
| Abschnittsüberschrift | 20 px | `.sec-title` |
| Fallstudien-Zwischenüberschrift | 25 px | `.cs-h2` |
| Hero-Fließtext | 15,5 px | `.lede` |
| Fließtext | 12,5 bis 14,5 px | `.linelist-item p`, `.cs-p` |
| Nebentext, Labels | 11 bis 12 px | `.cta-note`, `.model-kicker` |
| Große Kennzahl | 74 px | `.cs-bignum .num` |
| Preisangabe | 34 px | `.price-amount` |

---

## Abstände

**Abschnitte:** `section` hat `padding: 42px 24px 38px` und eine `border-bottom` in `--gray` als Trennlinie. Die Inhaltsbreite liegt bei 960 Pixeln, gehalten von `.seite`.

**Radien:** 10 bis 14 px bei Karten, 99 px bei Pillen und Badges.

---

## Breakpoints

| Query | Zweck |
|---|---|
| `max-width: 820px` | Preiskarten und Rechenbeispiele werden einspaltig |
| `max-width: 640px` | Hauptumbruch: Grids einspaltig, Ablauf-Spalten übereinander |
| `min-width: 641px` | wenige Gegenregeln |
| `prefers-reduced-motion: reduce` | schaltet Animationen ab |
| `prefers-color-scheme: dark` | Dunkelmodus, siehe oben |

---

## Drei Dinge, die man leicht kaputt macht

### 1. Die Klappanzeige skaliert über Container-Queries

Der Abschnitt „Viele Dokumente. Viele Eingangswege." (`.doc-channel-grid`) skaliert **nicht** über feste Pixelwerte und **nicht** über die Fensterbreite, sondern über die Breite des Abschnitts:

```css
.doc-channel-grid{ container-type: inline-size; }
.doc-flap .flap-label{ font-size: clamp(17px, 2.9cqw, 32px); }
.doc-flap .flap-ic-img{ width: clamp(96px, 19cqw, 215px); }
```

Das war eine bewusste Korrektur. Vorher sprang die Schrift bei 640 Pixeln hart von 32 auf 24 Pixel und war auf mittleren Breiten deutlich zu groß im Verhältnis zu den Überschriften daneben. Wer hier auf feste Werte oder normale Media Queries zurückgeht, holt das Problem zurück.

Gemessenes Verhalten: 1100 px Abschnittsbreite ergibt 32 px Schrift, 850 px ergibt 25 px, 650 px ergibt 19 px, ab 510 px bleibt es bei 17 px.

### 2. Abschnitte brauchen ihr oberes Polster

Im ursprünglichen Entwurf trugen die Abschnitte ein `padding-top: 0`, weil darüber jeweils eine Kommentarleiste saß, die den Abstand erzeugte. Nachdem die Kommentare entfernt wurden, klebte die Trennlinie direkt auf der Überschrift des nächsten Abschnitts. Deshalb steht das Polster jetzt in der `section`-Regel.

**Wer neue Abschnitte anlegt, setzt kein `padding-top: 0`.**

### 3. Der Block unter 640 px hält lange Wörter im Zaum

Im `@media (max-width:640px)`-Block stehen vier Regeln, die auf den ersten Blick wie Kosmetik aussehen. Sie sind es nicht. Ohne sie schiebt die Seite bei 375 Pixeln waagerecht:

```css
.cert-badge{white-space:normal;}
h1,h2,h3,h4,h5,.sec-title,.cs-h1,.cs-h2{overflow-wrap:break-word; hyphens:auto;}
.doc-flap .flap-label{min-width:0; overflow-wrap:break-word; hyphens:auto;}
```

Dazu `minmax(0,1fr)` statt `1fr` in allen Rastern mit Textkacheln: `.role-grid`, `.branch-grid`, `.mini-tile-grid` und `.tile-row`. Die Kachelbeschriftungen `.mini-tile .t` und `.branch-tile .t` tragen zusätzlich `min-width:0` und Umbruch.

Der gemeinsame Grund sind lange deutsche Komposita. „Datenschutzverantwortliche", „Bewerbungsunterlagen", „Hochschulzugangsberechtigung": Ein Wort, das breiter ist als seine Spalte, wird von `1fr` und von `min-width:auto` nicht kleiner gerechnet, es steht einfach über. `hyphens:auto` greift nur, weil die Seiten `lang="de"` tragen. Wer das Attribut entfernt, holt das Problem zurück.

Auf breiten Fenstern ändert keine dieser Regeln etwas.

---

## Ein Detail zur Klappanzeige

Die Einträge stehen als JSON im Attribut `data-pool` am `.doc-flap`, je Eintrag `[Beschriftung, Quelle]`. Die Quelle entscheidet, was angezeigt wird:

- `sprite:12` ist eine Kachel aus `assets/img/klappanzeigen.png`
- ein Verweis mit `#` ist ein Symbol aus `assets/icons.svg`

Beide Elemente liegen im Markup, das JavaScript blendet um. Vier Dokumentarten haben noch kein Bild und nutzen deshalb ein Symbol, siehe `offene-punkte.md`.

### Alle 77 Motive liegen in einer Datei

`assets/img/klappanzeigen.png` ist ein Raster aus 9 mal 9 Kacheln, jede 416 mal 320 Pixel. Vorher waren das 77 einzelne Dateien. Zusammengefasst sind sie mit 300 KB kleiner als vorher mit 716 KB, und das Repository bleibt übersichtlich.

Angezeigt wird über den Hintergrund, nicht über ein `img`:

```css
.doc-flap .flap-ic-img{
  width:clamp(96px, 19cqw, 215px); height:clamp(74px, 14.6cqw, 165px);
  background-image:url("../img/klappanzeigen.png");
  background-size:900% 900%;
}
```

`background-size:900%` blendet genau eine Kachel ein. Das JavaScript setzt nur noch `background-position`, berechnet als Index geteilt durch acht, in Prozent.

**Zwei Dinge sind daran empfindlich.** Das Seitenverhältnis der Kacheln, 1,3 zu 1, entspricht dem der Anzeigefläche. Weicht eines davon ab, werden die Motive verzerrt. Und die Zahl 9 steht an drei Stellen: im CSS als 900 Prozent, im JavaScript zweimal in der Rechnung. Wer das Raster ändert, muss alle drei anfassen.

**Eine neue Dokumentart aufnehmen:** Die Quellbilder liegen nicht im Repository, sondern im Archivordner `Dok.land-Website-Relaunch/uebergabe/site/assets/img/`. Von dort das Blatt neu erzeugen, die neue Kachel hinten anhängen und den Index im `data-pool` eintragen. Solange unter 81 Motive bleiben, bleibt das Raster gleich.

Bei SVG-Elementen wirkt das `hidden`-Attribut nicht überall zuverlässig. Deshalb steht im CSS zusätzlich:

```css
.doc-flap [hidden]{ display: none !important; }
```

Und das JavaScript setzt und entfernt das Attribut ausdrücklich, statt die Eigenschaft `.hidden` zu benutzen.
