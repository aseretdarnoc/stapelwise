# Übergabe: Stapelweise (dok.land) Website-Relaunch

Stand: 2026-07-29. Diese Datei ist der Einstiegspunkt für eine neue Sitzung. Alles Wichtige steht hier oder in den unten genannten Dateien.

Zuletzt: Übergabepaket für ein Tech-Team gebaut, siehe Abschnitt 1c. Davor: zweites Wireframe als Optik-Versuch angelegt, siehe Abschnitt 1b. Davor: Hero-Animation der Startseite eingesetzt. Aus dem gelieferten Video ist ein freigestelltes GIF geworden, der Platzhalter „GIF folgt“ ist weg. Davor: Preisseite konzipiert und gebaut, Dubletten aus der Textdatei entfernt. Davor: Branchen-Scribbles statt „Logo folgt“ bei den Beispielprozessen, Verweis auf die Lokale-KI-Seite unter „Flexibles Betriebsmodell“. Davor: praenatura-Logo als PNG, Zitat Miriam Winkelmann auf der Lokale-KI-Seite, Klappanzeige stufenlos skalierbar, Beschriftungen der Fallstudien-Links vereinheitlicht. Davor: Bildung-Seite entfernt, neue Scribble-Icons in allen Klappanzeigen, Buttons überall vereinheitlicht, Zielsysteme statt Katalog-Link, Textänderungen von Teresa übertragen. Davor: Abstände zwischen den Abschnitten korrigiert, Schreibweisen der Dokumentarten vereinheitlicht, zwei Auswertungslisten erstellt. Davor: erste Fallstudien-Seite (Praxis Kinderleicht) mit eigenem Layout, alle Wireframe-Anmerkungen entfernt, „Vergleich“ aus dem Menü genommen, Preise bei Lokale KI ergänzt. Davor: Logistik, Steuer, Immobilien und Personal nach neuen Textvorlagen neu gebaut. Außerdem heißen die Methodik-Schritte jetzt auf **allen zwölf Seiten mit Ablauf gleich**: 0. Konfiguration, 1. Import, 2. Splitting, 3. Extrahierung, 4. Validierung, 5. Anreicherung, 6. Aktion.

---

## 1. Die Dateien

| Datei | Was drin ist | Rolle |
|---|---|---|
| `wireframe.html` | Der klickbare Entwurf, vierzehn Seiten, ca. 2,3 MB | **Das Ergebnis.** Wird direkt bearbeitet |
| `wireframe-serif-eckig.html` | Optik-Versuch, dieselben vierzehn Seiten, 0,43 MB | Nebenstrang, siehe Abschnitt 1b |
| `website-texte.md` | Sämtliche Texte aller vierzehn Seiten | **Die Textquelle** zum Bearbeiten durch Teresa |
| `konzept-website-relaunch.md` | Strategie, Wettbewerbsanalyse, Styleguide, offene Punkte | Hintergrund |
| `dokumentarten.md` | Alle 81 Dokumentarten der Branchenseiten, alphabetisch und nach Branche | Auswertung, aus dem Wireframe erzeugt |
| `zielgruppen.md` | Alle 58 Zielgruppen aus „Für wen sich Stapelweise lohnt“ | Auswertung, aus dem Wireframe erzeugt |
| `hero-trichter.gif` | Die freigestellte Hero-Animation, 480 × 453, 81 Bilder, 448 kB | Ausgangsdatei, im Wireframe zusätzlich als Base64 eingebettet |
| `variante-serif-eckig.py` | Erzeugt den Optik-Versuch aus `wireframe.html` | Werkzeug, siehe Abschnitt 1b |
| `uebergabe/` | Das Paket für das Tech-Team, 14 einzelne Seiten samt Assets und Doku | Abzug, siehe Abschnitt 1c |
| `export-skripte/` | Erzeugen den Abzug aus `wireframe.html` | Werkzeug, siehe Abschnitt 1c |

Zusätzlich: `serve.py` und `.claude/launch.json` starten den lokalen Vorschau-Server.

---

## 1b. Der Optik-Versuch: `wireframe-serif-eckig.html`

Eine Kopie zum Ausprobieren einer anderen Anmutung. **Sie ist ein Nebenstrang, kein neuer Hauptstand.** `wireframe.html` bleibt das Ergebnis. Wer inhaltlich etwas ändert, ändert es dort.

Eigenes Artifact: **https://claude.ai/code/artifact/33f61a8c-9bd2-445b-8bdf-101eb6cbb47c**

**Drei Eingriffe:**

1. **Schrift.** Bricolage Grotesque ist raus, samt der eingebetteten Schriftdatei. Überschriften und Fließtext laufen in einer Serifenschrift (`var(--serif)`: Iowan Old Style, Charter, Palatino, Georgia). Monospace (`var(--mono)`) tragen Reiter, Buttons, Navigation, Kicker, Labels, Badges, Tabellenköpfe und alle großen Zahlen. Beide Stapel stehen als Variablen im `:root`, ein anderer Serifensatz ist also eine Zeile.
2. **Eckig.** Alle 47 Abrundungen stehen auf null. Auch die dekorativen `.blob`-Kreise im Hintergrund, die dadurch zu weich verlaufenden Rechtecken werden.
3. **Keine Bilder.** 39 `img`-Tags raus, dazu 77 Bilddaten aus den `data-pool`-Attributen der Klappanzeigen. Kein einziger `data:image`-Eintrag ist übrig, deshalb schrumpft die Datei von 2,3 auf 0,43 MB.

**Was bewusst geblieben ist:** die 198 Strich-Icons (Häkchen, Schild, Schritt-Symbole) und die 14 handgezeichneten Unterstreichungen unter Logo und Überschriften. Ohne die Icons verlieren Listen und Badges ihre Marker.

**Drei Nacharbeiten, die nötig waren:**

- Auf der Startseite enthielt die rechte Ablauf-Spalte nur die GIFs. Sie ist ganz entfernt, der Text nimmt dort die volle Breite (`.stepper-wrap:not(:has(.stepper-right))`). Auf den Branchenseiten bleibt die Spalte, dort stehen die Illustrations-Platzhalter drin.
- Die Klappanzeige der Gesundheitsseite hatte als einzige nur Bilder und kein Strich-Icon. Sie hat jetzt dasselbe allgemeine Dokument-Icon wie die anderen zehn, sonst wäre sie als einzige ohne Symbol dagestanden.
- Zehn Klassen tragen ganze Sätze statt Beschriftungen (`.cta-note`, `.price-for`, `.doc-target`, `.stat-inline` und weitere). Sie stehen ausdrücklich wieder auf Serif, Monospace war dort zu schwer.

**Wenn der Versuch weitergehen soll:** Die Datei ist über `variante-serif-eckig.py` aus `wireframe.html` erzeugt, nicht von Hand. Nach Änderungen am Hauptstand also lieber `python3 variante-serif-eckig.py` neu laufen lassen, statt beide Dateien parallel zu pflegen. Das Skript überschreibt nur die Variante und lässt `wireframe.html` unangetastet. Wer an der Optik schrauben will, ändert die Konstanten `SERIF`, `MONO` und den Block `MONO_SELEKTOREN` ganz oben im Skript.

---

## 1c. Das Übergabepaket: `uebergabe/`

Für die Weitergabe an ein Tech-Team ist aus dem Entwurf ein lauffähiges Seitengerüst geworden. **Es ist ein Abzug, kein neuer Hauptstand.** `wireframe.html` bleibt das Arbeitsdokument. Wer inhaltlich etwas ändert, ändert es dort und erzeugt den Abzug danach neu.

```
uebergabe/
├── README.md            Einstieg für Entwickler
├── site/                14 einzelne HTML-Seiten, CSS, JS, Assets
├── inhalte/             Kopien der Textdateien
├── design/              Design-Tokens und Komponenten-Inventar
└── offene-punkte.md     was fehlt und was zu klären ist
```

**Was der Abzug anders macht:** jede Seite eine eigene Datei mit echtem `<head>`, echte Links statt `data-goto`, CSS und JavaScript ausgelagert, Bilder als Dateien statt Base64, kein simulierter Browserrahmen. Aus 2,29 MB in einer Datei werden 377 KB in vierzehn.

**Alle Pfade sind relativ**, jede Seite trägt den Präfix ihrer Tiefe. Das Paket läuft deshalb auch in einem Unterverzeichnis und nicht nur an der Wurzel einer Domain.

**Erzeugt wurde er mit vier Skripten**, die in `export-skripte/` liegen, samt eigener Anleitung. In dieser Reihenfolge laufen lassen: `export_assets.py`, `originale.py`, `export_css_js.py`, `export_seiten.py`. Die Konstante `SP` oben in jeder Datei zeigt auf den Sitzungs-Scratchpad und muss vor dem Lauf angepasst werden. Für einzelne Textkorrekturen ist Handarbeit im Paket schneller als ein voller Neulauf.

**Beim Bauen des Abzugs sind drei Fehler aufgefallen, die auch den Entwurf betrafen.** Sie sind in `wireframe.html` und im Paket behoben: Bei 375 Pixeln schoben lange Wörter wie „Datenschutzverantwortliche" oder „Hochschulzugangsberechtigung" zehn der vierzehn Seiten waagerecht auf. Die Korrektur steht im 640-Pixel-Block, erklärt in `uebergabe/design/design-tokens.md`. Ein vierter Fehler betraf nur den Abzug: Die zehn Menüeinträge im Aufklapper hatten kein Ziel, weil das Exportskript ein `href` ersetzt statt eingesetzt hat.

**Zwei Dinge, die beim Abzug ergänzt werden mussten:** Grundschrift und Seitenbreite steckten im Entwurf in `.wire-app` und `.browser-frame`, also im Rahmenwerk. Im Abzug tragen `body` und `.seite` diese Eigenschaften. Und die Klappanzeige unterschied Bild von Symbol daran, ob der Wert mit `data:` beginnt. Da es jetzt Dateipfade sind, hängt die Weiche am `#` im Symbolverweis.

**Bilder liegen doppelt vor:** `site/assets/img/` in Web-Auflösung (2,1 MB, das nutzen die Seiten) und `site/assets/img-original/` in Originalauflösung (71 MB, aus `~/Desktop/DokLand`).

---

## 1d. Umbau der Navigation, 11. August 2026

Das Aufklappmenü unter „Lösungen" ist weg. An seiner Stelle steht eine einzelne Übersichtsseite
`/loesungen`, und seine drei Spalten sind in die Fußleiste gewandert.

**Neu:** Seite `page-loesungen` im Entwurf, im Paket `site/loesungen/index.html`. Sie zeigt
Branchen, Anwendungsfälle und Dokumentarten als Kachelraster, dazu einen kurzen Abschnitt zum
gemeinsamen Ablauf. Der Entwurf hat damit 15 Seiten statt 14.

**Fußleiste:** vier Spaltenmenüs (`.footer-cols`) mit Branchen, Dokumentarten, Anwendungsfällen
und Unternehmen. Darunter trägt `.footer-mock` nur noch Impressum und Datenschutz.

**Entschieden und im Paket dokumentiert:** Dokumentarten und Anwendungsfälle haben keine eigenen
Seiten. Ihre Einträge führen über `data-anchor` auf `/loesungen#dokumentarten` beziehungsweise
`#anwendungsfaelle`. So gibt es keine toten Verweise, und spätere eigene Seiten brauchen nur ein
neues Ziel.

**Nebenbei behoben:** Die Kachelraster hatten dasselbe Problem wie die Rollenspalten zuvor.
`1fr` rechnet nicht unter die Breite des längsten Wortes, deshalb schob „Nebenkostenabrechnungen"
die Übersichtsseite bei 375 Pixeln auf. Alle Raster nutzen jetzt `minmax(0,1fr)`.

---

## 1e. Der geteilte Link

Der Entwurf liegt als Artifact unter
**https://claude.ai/code/artifact/30bc7a6d-cfff-4df3-8667-efde11cd681e**

Das ist die einzelne Datei `wireframe.html` mit allen 15 Seiten und der Reiterleiste,
nicht das Übergabepaket. Artifacts sind zunächst privat. Zum Teilen das Freigabemenü
auf der Seite selbst benutzen.

**Neu veröffentlichen nach Änderungen:** Aus `wireframe.html` eine Fassung ohne die
ersten beiden Zeilen erzeugen, `<html lang="de">` und `<meta charset="utf-8">` fallen weg,
weil das Artifact Kopf und Hülle selbst stellt. Dafür bekommt `<div class="wire-app">`
ein `lang="de"`, sonst fällt die deutsche Silbentrennung aus. Dann mit derselben URL
veröffentlichen, damit der Link stabil bleibt.

Es gibt noch ein zweites Artifact, den Optik-Versuch mit Serifenschrift. Der ist ein
Nebenstrang und wird nicht gepflegt.

**Vor dem Veröffentlichen immer die Navigation testen.** Der Entwurf hängt vollständig
an einem einzigen Script-Block: `showPage`, die Reiter und der `data-goto`-Handler stehen
dort zusammen. Ein Syntaxfehler an einer Stelle legt die gesamte Navigation lahm, ohne
dass die Seite kaputt aussieht. Genau das ist beim Entfernen des Aufklappmenüs passiert.

Kurzer Test in der Konsole, erwartet werden 0 Fehler:

```js
[...document.querySelectorAll('.page-mock')].map(p => p.id).forEach(sid => {
  showPage(sid);
  [...document.getElementById(sid).querySelectorAll('[data-goto]')].forEach(l => {
    l.click();
    const v = [...document.querySelectorAll('.page-mock')].filter(p => !p.hidden);
    if (v.length !== 1 || v[0].id !== l.dataset.goto) console.error(sid, '->', l.dataset.goto);
    showPage(sid);
  });
});
```

---

## 1f. Umzug ins Repository, 11. August 2026

**Dieser Ordner ist nicht mehr die Quelle.** Das Projekt liegt jetzt als Git-Repository
unter `OUTPUTS/dokland-website/`, damit Teresa mit zwei weiteren Personen daran arbeiten kann.

Der Grund ist die Bauart von `wireframe.html`: 80 Prozent der Datei sind eingebettete
Bilddaten, eine einzige Zeile ist knapp 600.000 Zeichen lang. Zwei Leute können daran nicht
gleichzeitig arbeiten, und keine Änderung wäre in einem Vergleich lesbar. Das Übergabepaket
dagegen besteht aus 17 Textdateien mit im Schnitt 26 KB. Deshalb ist die Quelle gewechselt.

**Was im Repository liegt:** die 15 Seiten an der Wurzel, damit ein Webserver sie direkt
ausliefert. Daneben `_inhalte/` mit den Markdown-Dateien und `_projekt/` mit dieser Datei,
der Design-Doku, den Exportskripten und dem eingefrorenen Prototyp.

**Rollen:** Die beiden Kolleginnen und Kollegen redigieren Texte und liefern Illustrationen,
sie schreiben keinen Code. Dafür gibt es `MITARBEIT.md`, eine Anleitung ohne HTML-Kenntnisse.
Zum Einsetzen der Bilder ist die CSS-Klasse `.illu` dazugekommen, damit das Ersetzen eines
Platzhalters eine Ein-Zeilen-Änderung bleibt.

**Wichtig für die Vorschau:** Das Repository muss privat sein, weil freigabepflichtige Inhalte
darin stecken, siehe `_projekt/offene-punkte.md`. GitHub Pages arbeitet mit privaten
Repositories aber nur im bezahlten Plan. Empfehlung deshalb: GitHub privat für die
Zusammenarbeit, Firmenserver für die gemeinsame Vorschau. Steht ausführlich in
`_projekt/einrichtung-github.md`.

**Dieser Ordner** bleibt als Archiv liegen. `wireframe.html` ist dort eingefroren, ebenso
das veröffentlichte Artifact. Beide wachsen nicht mehr mit.

---

## 2. Wichtigste Arbeitsregel

**`website-texte.md` und `wireframe.html` sind getrennte Dateien.** Es gibt keine automatische Verbindung. Wenn Teresa die Textdatei bearbeitet, muss die Änderung von Hand ins Wireframe übertragen werden. Sie sagt Bescheid, dann abgleichen und übertragen.

Beim Abgleich hilft: Schlüsselsätze aus der md-Datei im Wireframe suchen. Was dort fehlt, ist neu.

**Bewusst nicht getan:** Es gab Generator-Skripte, die Branchenseiten aus einer Datenstruktur erzeugt haben. Die sind absichtlich nicht aufgehoben worden. Grund: Teresa hat einzelne Seiten inzwischen von Hand überarbeitet (Pflege, Banken, Versicherungen). Ein erneutes Generieren aus der alten Datenstruktur würde diese Überarbeitungen überschreiben. **Seiten also immer direkt im Wireframe bearbeiten, nicht neu generieren.**

---

## 3. Sprachregel (gilt für alle Texte)

- Keine Gedankenstriche
- Kurze, präzise Sätze
- Keine "nicht X, sondern Y"-Konstruktionen
- Englische Wörter minimieren, wenn nötig als Übersetzung in Klammern hinter dem deutschen Begriff

Wenn in gelieferten Texten Gedankenstriche vorkommen, werden sie durch Doppelpunkte ersetzt und das kurz erwähnt.

---

## 4. Stand: vierzehn Seiten

| Reiter | Seite | Besonderheit |
|---|---|---|
| Startseite | Startseite | Typewriter-Aufmacher, freigestellte Trichter-Animation im Hero, klickbare Dokumentbeispiele, Ablauf mit GIFs, drei Referenzprojekte, Vergleichstabelle |
| Gesundheit | Branchenseite | Echte Dokumentart-Illustrationen, echte Rollen-Illustrationen, Foto Dr. Bartels, Kinderleicht-Logo |
| Pflege | Branchenseite | Von Teresa überarbeitet: sechs Vorteile, eigene Souveränitäts-Leiste, Zitat Karsten Vranic |
| Banken | Branchenseite | Nach eigener Vorlage: Ausgangslage-Block, sieben Vorteile, Betriebsvarianten |
| Versicherungen | Branchenseite | Nach eigener Vorlage: praenatura-Logo, Fallstudie mit drei Ergebnissen |
| Logistik | Branchenseite | Nach eigener Vorlage: Ausgangslage mit Liste, fünf Einsatzbereiche, sieben Vorteile |
| Steuer | Branchenseite | Nach eigener Vorlage: zwei getrennte Einsatzbereich-Blöcke für Steuerberatung und Wirtschaftsprüfung |
| Immobilien | Branchenseite | Nach eigener Vorlage: zwei getrennte Einsatzbereich-Blöcke für Miet- und WEG-Verwaltung |
| Personal | Branchenseite | Nach eigener Vorlage: echte Kennzahl im Hero, echte Fallstudie mit Ergebnis (250 Aktenordner in sieben Tagen) |
| Hochschule | Branchenseite | Ausgangslage mit Liste, Typische Einsatzbereiche, sieben Vorteile. Hat drei Dokumentarten der gelöschten Bildung-Seite übernommen |
| Archive | Branchenseite | Heißt jetzt „Archive und Forschung“. Zwei getrennte Leistungsblöcke für Archive und für Forschende |
| Fallstudie | Praxis Kinderleicht | **Eigenes Layout**, weicht bewusst von den Branchenseiten ab. Vorlage für weitere Fallstudien |
| Preise | Eigene Seite | Drei Pakete, Vergleich entlang der sieben Schritte, Betriebsmodelle, Rechenbeispiele, sechs Fragen |
| Lokale KI | Eigene Seite | Drei Betriebsmodelle mit Preisen, Vergleichstabelle, vier häufige Fragen |

**Aufbau der überarbeiteten Branchenseiten:** Hero → Ausgangslage → Vielfalt an Dokumenten → Souveränitäts-Leiste → So funktioniert Stapelweise → Typische Einsatzbereiche → Beispielprozess oder Fallstudie → Vorteile → Für wen sich Stapelweise lohnt → Warum Stapelweise → Sicherheit und Datenhoheit → Abschluss

Gesundheit und Pflege folgen noch der älteren Vorlage mit Kundenzitat und Kennzahlen-Leiste. Ihre Ablauf-Schritte sind aber schon auf das neue Schema umgestellt.

### Die sieben Schritte (auf allen Seiten identisch)

| Schritt | Was drin steht |
|---|---|
| 0. Konfiguration | Projektsetup: welche Dokumentarten, welche Felder, welche Zielsysteme. Nicht Teil der eigentlichen Verarbeitung, deshalb die 0 |
| 1. Import | Eingangswege, Zusammenführung an einem Punkt |
| 2. Splitting | Sammeldateien in einzelne Dokumente zerlegen |
| 3. Extrahierung | Dokumentart erkennen, definierte Felder auslesen |
| 4. Validierung | Abgleich mit Stammdaten, formale Vorprüfung, Kennzeichnung von Unstimmigkeiten |
| 5. Anreicherung | Vorschläge aus Stammdaten, Transformation in das Zielformat |
| 6. Aktion | Übergabe an die angebundenen Systeme |

**Achtung bei Schritt 5:** Auf Banken, Versicherungen und Gesundheit ist die Anreicherung noch dünn, weil die vorhandenen Texte dafür wenig hergeben. Dort fehlt Material, kein Fehler im Aufbau.

### Beschriftungen der Verweise

Fallstudien und Beispielprozesse führen alle ins Schaufenster: unter Fallstudien steht **Im Schaufenster anschauen**, unter Beispielprozessen **Zum Schaufenster**. Die FAQ-Überschrift heißt überall **Häufige Fragen und Antworten**.

### Buttons und Aufrufe

Überall nur noch zwei Beschriftungen: **Zum Schaufenster** und **Probelauf vereinbaren**. Im Hero und in der Kopfleiste stehen sie ohne Zusatz, im Abschluss vor der Fußleiste mit einer erklärenden Zeile darunter (`.cta-row` mit `.cta-item` und `.cta-note`).

### Statt Katalog-Link: das Zielsystem

Unter der Klappanzeige stand früher „Alle unterstützten Dokumentarten ansehen“. Dort steht jetzt auf jeder Branchenseite, wohin die Daten gehen, zum Beispiel „direkt in Ihr Transportmanagementsystem (TMS) oder die digitale Sendungsakte.“ Der Katalog ist ohnehin nicht gebaut.

---

## 4b. Fallstudien-Layout

Die Seite `page-fallstudie-kinderleicht` nutzt ein eigenes, redaktionelles Layout mit dem CSS-Präfix `cs-`. Sie ist als **Vorlage für weitere Fallstudien** gedacht.

**Aufbau in Bändern:** Ein `.cs-band` ist ein Abschnitt über die volle Breite. `.cs-band.tint` ist leicht getönt, `.cs-band.ink` ist dunkel und trägt die große Kennzahl. Darin sitzt `.cs-col` (schmale Lesespalte, 660 px) oder `.cs-col.wide` (900 px, für Bilder und Faktenleiste).

**Bausteine:** `.cs-eyebrow` (Label), `.cs-h1`, `.cs-sub`, `.cs-facts` (vierspaltige Faktenleiste), `.cs-bignum` (große Kennzahl), `.cs-h2` und `.cs-p` (Fließtext), `.cs-figure` mit `.cs-caption`, `.cs-check` (Häkchenliste), `.cs-quote` (Zitat mit rundem Foto), `.cs-steps` (automatisch nummeriert per CSS-Counter), `.cs-results` (Ergebniskarten), `.cs-faq` (aufklappbar über `<details>`, ohne JavaScript), `.cs-seo` (Titel und Beschreibung für Suchmaschinen).

**Neue Fallstudie anlegen:** Seite kopieren, `id` und URL ändern, Texte tauschen, Faktenleiste und Kennzahl anpassen, dann Reiter ergänzen und den passenden „Ganze Geschichte lesen“-Link der Branchenseite auf die neue `id` zeigen lassen.

---

## 4c. Preislogik

Die Preisseite trennt zwei Dimensionen, die auf der bestehenden Seite dok.land/preise vermischt sind:

1. **Das Paket** bestimmt, was Stapelweise tut: Standard ab 30 €, Professional ab 50 €, Enterprise ab 150 € im Monat.
2. **Das Betriebsmodell** bestimmt, wo es läuft: Cloud 0 €, VPC 79 €, KI-Box ab 150/200/350 € je nach Grafikspeicher.

Beides addiert sich. Drei Rechenbeispiele auf der Seite zeigen das. Die Vergleichstabelle ist entlang der sieben Methodik-Schritte aufgebaut, damit Preisseite und Branchenseiten dieselbe Sprache sprechen.

**Wichtig:** Die Zuordnung der Schritte zu den Paketen ist aus den Merkmalen der bestehenden Seite abgeleitet, nicht von Teresa bestätigt. Ebenso die Aussage, dass die KI-Box das Enterprise-Paket voraussetzt. Offene Punkte stehen am Ende des Preise-Abschnitts in `website-texte.md`.

---

## 5. Technik im Wireframe

- **Marke:** Stapelweise (Arbeitstitel), Domain dok.land
- **Farben:** Papierweiß `#F5F1E8`, Tintenblau `#172832`, Werkstattorange `#E8612C`, Himmelblau `#86B8C7`, Arbeitsgrau `#D8D6CF`
- **Schrift:** Bricolage Grotesque (als Datei eingebettet) für Überschriften, Systemschrift für Fließtext
- **Alles in einer Datei:** Bilder als Base64 eingebettet, keine externen Dateien
- **Seitenwechsel:** Reiter oben plus `[data-goto="page-XYZ"]` an beliebigen Elementen
- **Animationen laufen generisch über Klassen:** `.doc-flap` (Klappanzeige, Inhalt in `data-pool`), `.channel-type` (Typewriter, Wörter in `data-words`), `.branch-stepper` (aufklappbare Schritte)
- **Neue Branchenseite anlegen:** bestehende Seite kopieren, `id` ändern, Inhalte tauschen, dann Reiter + Menüeintrag + Branchenkacheln auf Startseite und Lokale-KI-Seite ergänzen
- **GIFs auf der Startseite:** ein `img.step-gif` kann mehrere Schritte bedienen, `data-for="2 3"`. Das JS trennt den Wert an Leerzeichen. So mussten die fünf vorhandenen GIFs für sieben Schritte nicht dupliziert werden
- **Hero-Animation:** `img.hero-gif`, absolut im `.browser-frame` positioniert, `top:120px right:36px width:262px`. Sie sitzt rechts neben der Überschrift. Die Überschrift reicht auch mit dem längsten Typewriter-Wort nur bis 500 px, das GIF beginnt bei 621 px

**Vorschau starten:** `preview_start` mit `{"name": "dokland-website"}`, dann `http://localhost:8090/wireframe.html`. Alternativ von Hand: `python3 serve.py` im Projektordner.

**Falls `preview_start` an „Operation not permitted“ scheitert:** der Sandbox-Prozess der Vorschau darf `~/Documents` nicht lesen, dann erreicht er auch `serve.py` nicht. Ausweg: `wireframe.html` und eine Kopie des Servers ins Sitzungs-Scratchpad legen, dort einen zweiten Eintrag in `.claude/launch.json` anlegen und den nach der Sitzung wieder entfernen. Die Prüfung ist damit vollständig möglich.

**GIF-Falle:** Der Vorschau-Browser zeigt animierte GIFs immer nur im ersten Bild. Das gilt auch für die GIFs, die schon vorher im Wireframe steckten. Ein Standbild im Screenshot ist also kein Hinweis auf einen Fehler. Prüfen lässt sich die Animation nur außerhalb, etwa indem man die Einzelbilder mit Pillow ausliest.

Das `serve.py` liegt jetzt **im Projektordner** und ist sitzungsunabhängig. Es legt selbst eine Arbeitskopie unter `/tmp/dokland-preview` an, weil ein Server aus `~/Documents` heraus an der macOS-Sandbox scheitert, und sendet `charset=utf-8`. Ohne den Zeichensatz zeigt der Browser alle Umlaute falsch, denn `wireframe.html` ist ein Fragment ohne `<head>`.

**Nach jeder Änderung am Wireframe den Server neu starten**, damit die Arbeitskopie aktualisiert wird. Im Browser zusätzlich einen Parameter anhängen (`?v=2`), sonst zeigt er die alte Fassung aus dem Zwischenspeicher.

**Messfalle:** Aufklappbare Schritte haben eine 0,3-Sekunden-Animation. Direkt nach einem Klick gemessene Höhen sind 0. Vor dem Messen warten.

**Screenshot-Falle:** Die Vorschau liefert nur bei Scrollposition 0 ein Bild, sonst kommt eine leere Fläche zurück. Um tiefere Abschnitte zu sehen: `marginTop` der Seite per JavaScript negativ setzen und bei Scrollposition 0 aufnehmen.

---

## 5b. Benennung der Dokumentarten

Die Klappanzeige jeder Branchenseite (`data-pool` am `.doc-flap`) ist die maßgebliche Dokumentart-Liste der Seite. Der Erkennungssatz in Schritt 3 nennt eine Auswahl davon nochmal im Fließtext, beide müssen zusammenpassen.

Vereinheitlicht wurde: **Schadensmeldung** (vorher auf Versicherungen ohne Fugen-s), **Genehmigung der Krankenkasse** (vorher im Pflege-Fließtext „Kassengenehmigung“), **Versicherten-Korrespondenz** (vorher „Nachreichung“, war keine Dokumentart), **Zählerstandfoto** (vorher „Zählerstand“, war ein Datenpunkt).

Bewusst nicht angefasst: das Wort „Nachreichungen“ auf Banken, Immobilien und Hochschule, wo es nachgereichte Unterlagen meint. Ebenso „Zählerstand“ in Feldlisten und Prüfregeln.

Die Bildung-Seite ist entfernt. Bewerbungsunterlage, Zeugnis und BAföG-Antrag sind zur Hochschulverwaltung gewandert, „Immatrikulationsformular“ ist entfallen (Dublette zu „Immatrikulationsunterlage“).

**Offen:** **Arztbrief** (Gesundheit) gegen **Arztbericht** (Versicherungen). Das ist keine Schreibweise, sondern ein eigener Fachbegriff je Branche. Ob beide dasselbe meinen, muss Teresa entscheiden.

**Ebenfalls offen:** Startseite und Hauptmenü führen eigene Dokumentart-Listen im Plural, die nicht mit den Branchenseiten abgeglichen sind. Zehn Einträge dort kommen auf keiner Branchenseite vor. Steht in `dokumentarten.md` Abschnitt 5.

---

## 5c. Sicherungen

Im Ordner `_abgleich/` liegen:

| Datei | Wofür |
|---|---|
| `website-texte.stand-*.md` | Vergleichsstände der Textdatei. Vor jeder Bearbeitungsrunde durch Teresa einen neuen anlegen, danach `diff` statt Schlüsselsatzsuche |
| `wireframe.mit-anmerkungen.html` | Letzte Fassung mit den orangen Wireframe-Kommentaren, falls sie zurück sollen |

Ältere Zwischenstände des Wireframes liegen nur im Sitzungs-Scratchpad und sind nach einem Sitzungswechsel weg. Das Artifact führt aber eine eigene Versionsliste.

---

## 5d. Wie die Hero-Animation freigestellt wurde

Die Vorlage war ein Video (1280 × 720, 24 Bilder je Sekunde, 10 Sekunden): eine gezeichnete Strichgrafik auf grauem Grund, mit Vignette und weichem Schlagschatten. Das Vorgehen ist übertragbar, falls weitere Animationen dazukommen:

1. **Hintergrund je Bild lokal schätzen.** Zwei Maximum-Filter (Fenster 15) löschen die dünnen dunklen Striche, ein Weichzeichner (Radius 18) glättet den Rest. Übrig bleibt genau das, was breiter ist als ein Strich, also Vignette und Schatten.
2. **Deckkraft aus dem Verhältnis ableiten,** nicht aus der Helligkeit. `Verhältnis = Helligkeit / Hintergrund`. Ab 12 % dunkler beginnt die Zeichnung, ab 37 % dunkler ist sie voll deckend. Der breite Totbereich ist der entscheidende Punkt: Schatten und Bildrauschen liegen bei 2 bis 10 %, echte Striche bei 40 bis 80 %. Eine engere Rampe hinterlässt einen grauen Schleier.
3. **Farbe auf Tintenblau `#172832` setzen,** die Form trägt allein der Deckkraft-Kanal. Damit passt die Animation zum Rest der Seite, und das GIF kommt mit zwei Farben aus.
4. **Auf den Inhalt zuschneiden.** Der gemeinsame Rahmen über alle Bilder war 754 × 712 von 1280 × 720, also mehr als die Hälfte leere Fläche.
5. **Schleifenstelle suchen:** das Bild ab Nummer 40, das dem ersten am ähnlichsten ist. Hier war das Bild 161 von 240, der Übergang fällt nicht auf.
6. **Ausgabe:** 12 Bilder je Sekunde, 480 px breit, zwei Farben plus Transparenz. Das ergibt 448 kB. Zum Vergleich: dieselbe Animation mit weich vorgemischten Kanten wog 1,5 MB, als animiertes WebP sogar 2,5 MB. Angezeigt wird sie mit 262 px, die Verkleinerung im Browser glättet die harten Kanten von selbst.

Es gab kein `ffmpeg` auf dem Rechner. `pip install --user imageio-ffmpeg` liefert eine mitgelieferte Programmdatei, `numpy` und `Pillow` erledigen den Rest. Die Skripte lagen nur im Sitzungs-Scratchpad.

Auf `~/Desktop/DokLand` liegt außerdem ein älteres `Header.gif` (1080 × 1080, weißer Hintergrund, nur der Trichter). Es ist nirgends eingebunden.

---

## 6. Was noch offen ist

**Funktional**
- Showroom ist überall verlinkt, existiert aber nicht
- Weitere Fallstudien fehlen. Praxis Kinderleicht ist gebaut und von der Gesundheitsseite aus verlinkt. Die „Ganze Geschichte lesen“-Links auf den anderen Seiten gehen weiterhin ins Leere
- Preise, Über uns, Kontakt, Blog sind im Menü oder Footer, aber nicht ausgearbeitet
- Dokumentart- und Anwendungsfall-Katalog sind nur Kachel-Listen

**Inhalte**
- Kundenzitat auf Bildung ist Platzhalter und im Wireframe gekennzeichnet. Logistik, Steuer, Immobilien und Personal haben durch den Neubau kein Zitat mehr
- Erfundene Kennzahlen gibt es nur noch auf Bildung. Echte Zahlen: Gesundheit, Versicherungen und Personal
- Hochschule, Archive, Logistik, Steuer und Immobilien haben kein Kundenzitat und keine Kennzahl. Statt einer Fallstudie steht dort ein Beispielprozess ohne Logo
- Auf Banken, Versicherungen und Gesundheit ist Schritt 5 (Anreicherung) noch dünn, dort fehlt Text
- Versicherungs-Zitat wartet auf Freigabe durch praenatura
- Aussagen auf der Lokale-KI-Seite fachlich noch zu bestätigen

**Bilder**
- Illustrationsflächen im Ablauf-Bereich sind auf allen Seiten Platzhalter
- Dokumentart- und Rollen-Illustrationen gibt es nur für Gesundheit
- Logos: praenatura und Kinderleicht sind echt, alle anderen Platzhalter
- Bildmaterial liegt in `~/Desktop/DokLand`

---

## 7. So startest du eine neue Sitzung

Ein Satz genügt:

> Lies HANDOVER.md in OUTPUTS/Dok.land-Website-Relaunch und mach da weiter. Als Nächstes: [dein Thema].

Das Wireframe liegt als Artifact unter **https://claude.ai/code/artifact/30bc7a6d-cfff-4df3-8667-efde11cd681e**, der Optik-Versuch unter **https://claude.ai/code/artifact/33f61a8c-9bd2-445b-8bdf-101eb6cbb47c**. Beim Veröffentlichen aus einer neuen Sitzung diese Adresse als `url` übergeben, sonst entsteht eine neue. Falls die Adresse verlorengeht: `Artifact` mit `action: "list"` aufrufen.

**Der Vorschau-Server braucht keinen Pfad-Fix mehr.** `serve.py` liegt im Projektordner, `.claude/launch.json` zeigt darauf. Einfach `preview_start` mit `{"name": "dokland-website"}`.

### Woran zuletzt gearbeitet wurde

Die letzten Runden: Hero-Animation der Startseite freigestellt und eingesetzt, Preisseite gebaut, Branchen-Scribbles eingesetzt, Buttons und Verweise vereinheitlicht, Bildung-Seite entfernt, Klappanzeigen mit echten Bildern bestückt und stufenlos skalierbar gemacht. Die Textdatei ist von Dubletten befreit und ist jetzt die alleinige Quelle.

**Was als Nächstes anstünde**, ohne Rangfolge:

- Schaufenster ist überall verlinkt, existiert aber nicht. Es ist inzwischen das Ziel fast aller Verweise und damit die größte Lücke
- Weitere Fallstudien nach dem Muster der Praxis Kinderleicht
- Über uns, Kontakt und Impressum sind im Footer, aber nicht ausgearbeitet
- Offene Fragen zur Preislogik, siehe Ende des Preise-Abschnitts in `website-texte.md`
- Bild fehlt noch für vier Dokumentarten und für die dritte Referenzprojekt-Karte auf der Startseite
- Die Illustrationsflächen im Ablauf-Bereich sind noch Platzhalter. Sie ließen sich nach demselben Verfahren wie die Hero-Animation freistellen, siehe Abschnitt 5d
