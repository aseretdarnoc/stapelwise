# Stapelweise (dok.land): Konzept Website-Relaunch

Stand: 2026-07-27. Status: Konzept umgesetzt als klickbarer Entwurf. Zehn Seiten stehen im Wireframe.

**Arbeitstitel der Marke:** Stapelweise. Die Domain bleibt dok.land, der Markenname im Logo ist Stapelweise.

**Sprachregel für dieses Dokument und alle Textentwürfe:** Keine Gedankenstriche. Kurze, präzise Sätze. Keine "nicht X, sondern Y"-Konstruktionen. Englische Wörter minimieren, wenn nötig als Übersetzung in Klammern hinter dem deutschen Begriff.

**Zugehörige Dateien**
- `wireframe.html` — der klickbare Entwurf mit allen zehn Seiten
- `website-texte.md` — sämtliche Texte aller Seiten, zum direkten Bearbeiten

---

## 1. Ausgangslage

**Alte Seite (dok.land):**
- Struktur: Startseite, Zielgruppen, Referenzprojekte, Preise, Lokale-KI-Box, Kontakt.
- 13 Zielgruppen standen alle auf einer Seite untereinander. Keine eigenen Landingpages, keine visuelle Differenzierung.
- 3 Referenzprojekte vorhanden, aber mit fehlerhaften Textresten: Ein Zitat einer Weinprobe-Gründerin ("WNTN") tauchte bei den Fallbeispielen auf. Wirkte wie eine nicht fertig bereinigte Vorlage.
- Preise: 3 Stufen. Funktional, aber generisch in Sprache und Aufbau.
- Insgesamt: technisch korrekt, aber austauschbar. Genau das Problem, das behoben werden soll.

## 2. Was wir uns bei den Wettbewerbern abgeschaut haben

### Von Docsumo.com
| Element | Was es bringt | Umsetzung bei uns |
|---|---|---|
| **Lösungs-Übersicht mit Reitern** (Dokumentart, Branche, Anwendungsfall) | Viele Eingangstüren, alle führen zum selben Produkt. Besucher finden ihren Zugang darüber, wonach sie suchen | Umgesetzt: Reiter auf der Startseite und zusätzlich als Aufklappmenü im Hauptmenü |
| **Vertrauens-Kennzahlen** | Baut Glaubwürdigkeit auf, auch ohne dass man den Anbieter kennt | Umgesetzt als Kennzahlen-Leiste je Branchenseite |
| Referenzprojekte als eigene Kategorie | Beweis statt Behauptung | Umgesetzt: drei Fallbeispiele auf der Startseite, je eines auf der passenden Branchenseite |
| Vergleichsseiten | Suchmaschinen-Auffindbarkeit und Kaufentscheidungshilfe | Idee übernommen, Umsetzung bewusst anders: eine gut lesbare Tabelle statt 20 Fließtextseiten |

### Von Docupipe.ai
| Element | Was es bringt | Umsetzung bei uns |
|---|---|---|
| **Sprache und Tonalität** | Kurz, präzise, selbstbewusst. Ein Satz reicht | Leitmotiv für die gesamte Copy |
| **Live-Demo auf der Startseite** | Zeigt sofort, was das Produkt tut | Umgesetzt als klickbarer Beispiele-Bereich mit zehn Dokumentarten |
| **Showroom**: eigenes Dokument hochladen | Reduziert die Kaufhürde radikal | Als Button "Zum Schaufenster" überall verankert. Die Funktion selbst steht noch aus, siehe Abschnitt 9 |
| **Auswahlraster** vieler Dokumenttypen | Auffindbarkeit auch für spezifische Suchbegriffe | Umgesetzt in kleinerem Maßstab: 24 Dokumentarten, 15 Anwendungsfälle |
| Bewegung auf der Seite | Wirkt modern, nicht statisch | Umgesetzt: Typewriter im Aufmacher, Klappanzeige, Neusortierung der Kacheln, aufklappbarer Ablauf |
| Sicherheits-Nachweise | Vertrauen bei sensiblen Dokumenten | Umgesetzt als Souveränitäts-Leiste auf jeder Seite plus eigene Seite "Lokale KI" |
| **Vertikaler Stepper** ("Extraction you control") | Erklärt einen mehrstufigen Prozess ohne Textwand | Umgesetzt als "Wie es funktioniert" auf allen Seiten |

## 3. Die tragende Idee

Docsumo und Docupipe verkaufen im Kern ein Tool. Sie wirken aber, als hätten sie für jede Branche und jeden Dokumenttyp eine eigene Lösung, weil sie unzählige Landingpages bauen, die alle auf denselben Produktkern zeigen. Das ist kein Trick, sondern kluge Informationsarchitektur: Besucher wollen sich wiedererkennen, bevor sie glauben, dass ein Tool für sie funktioniert.

Die alte Seite hatte das Gegenteil: ein Tool, eine Seite, eine lange Liste. Der Umbau überträgt die Logik "viele Türen, ein Raum" auf acht priorisierte Branchen.

---

## 4. Seitenstruktur (Stand der Umsetzung)

```
Hauptmenü (auf jeder Seite):
Logo Stapelweise | Lösungen ▾ | Lokale KI | Vergleich | Preise
                 | [Button orange: Zum Schaufenster] [Button weiß: Probelauf vereinbaren]

Lösungen ▾ (Aufklappmenü, drei Spalten)
├── Nach Branche       → alle 8 Branchenseiten, verlinkt
├── Nach Dokumentart   → Arztbriefe, Kontoauszüge, Mietverträge, Frachtbriefe,
│                         Rechnungen, Personalfragebögen, Gutachten, Zeugnisse, u.v.m.
└── Nach Anwendungsfall → Aktendigitalisierung, Posteingangsmanagement, Archivzugang,
                          Kreditprüfung, Nebenkostenabrechnung, Jahresabschlussprüfung,
                          Variable Layouts, Auslagenmanagement, u.v.m.

Eigene Seiten:
├── Startseite
├── 8 Branchenseiten (Gesundheit, Pflege & Fürsorge, Banken & Versicherungen,
│     Bildung & Kultur, Logistik, Steuerberatung & Wirtschaftsprüfung,
│     Immobilienverwaltung, Personalabteilungen)
└── Lokale KI

Fußzeile:
Über uns · Kontakt · Blog · Referenzprojekte · Lokale KI-Box · Preise · Impressum · Datenschutz
```

### Abweichung vom ursprünglichen Konzept

Im ersten Konzept war festgelegt: Die Lokale KI-Box bekommt **keinen** eigenen Menüpunkt, sondern wird nur in den Sicherheits-Abschnitt jeder Seite eingebettet. Das ist inzwischen bewusst anders entschieden: **Lokale KI ist ein eigener Hauptmenüpunkt mit eigener Seite.** Der eingebettete Sicherheits-Abschnitt bleibt zusätzlich auf jeder Branchenseite bestehen. Begründung: Datensouveränität ist das stärkste Unterscheidungsmerkmal und trägt eine eigene Seite.

### Die 8 Branchen

1. Gesundheit (Arztpraxen, Krankenhäuser, MVZ)
2. Pflege und Fürsorge
3. Banken und Versicherungen
4. Bildung und Kultur (Schulen, Universitäten, Archive)
5. Logistik
6. Steuerberatung und Wirtschaftsprüfung
7. Immobilienverwaltung
8. Personalabteilungen

Hinweis: Personalabteilungen sind anders als die anderen sieben keine Branche, sondern eine Funktion, die es in jedem Unternehmen gibt. Läuft trotzdem als gleichwertige achte Kachel. Der einzige Unterschied: Die Formulierungen bleiben dort branchenübergreifend.

Öffentliche Verwaltung und Lohnbuchhaltung sind nicht Teil des Start-Sets.

---

## 5. Aufbau der Seiten

### Startseite

1. Aufmacher: "Aus Stapelweise [Dokumenten] werden strukturierte Daten." Das Wort wechselt per Typewriter durch sieben Begriffe. Zwei Unterzeilen wechseln zeitversetzt Eingangsweg und Format.
2. Souveränitäts-Leiste: "100% Digital Souverän." in Orange plus Dialekt-Dreiklang, darunter drei Vertrauens-Badges.
3. Kundenzitat Dr. Bartels mit Foto.
4. Beispiele-Bereich: zehn Dokumentarten links und rechts, in der Mitte öffnet sich das ausgelesene Beispiel.
5. Wie es funktioniert: fünf aufklappbare Schritte (0. Konfiguration, I. Erfassung, II. Organisation, III. Prüfung, IV. Weitergabe) mit GIF je Schritt.
6. Lösungen: drei Reiter mit animierter Neusortierung der Kacheln.
7. Claim: "Weniger suchen. Weniger sortieren. Mehr schaffen."
8. Sicherheit: 100% Zuhause-Setup.
9. Referenzprojekte: drei Fallbeispiele mit Logos.
10. Vergleichstabelle.
11. Abschluss: "Und jetzt? Ihr nächster Schritt:"

### Branchenseite (Vorlage, für alle acht identisch)

1. Aufmacher: konkrete Szene aus der Branche plus eine Kennzahl.
2. Kundenzitat.
3. Vielfalt an Dokumenten: links eine Dokumentart als Klappanzeige mit Illustration, rechts der Eingangskanal als Typewriter in Orange. Darunter die Zielsystem-Zeile.
4. Souveränitäts-Leiste, branchenspezifisch formuliert.
5. Wie es funktioniert: dieselben fünf Schritte, inhaltlich auf die Branche zugeschnitten.
6. Fallstudie: Logo links auf einem Viertel, Teaser rechts auf drei Vierteln.
7. Vorteile: drei Punkte.
8. Für wen sich Stapelweise lohnt: vier Rollen mit Illustration.
9. Kennzahlen: vier Zahlen.
10. Sicherheitshinweis, branchenspezifisch.
11. Abschluss-Aufruf.

### Seite Lokale KI

Aufmacher "KI, mit der Daten Zuhause bleiben." → Kernargument "Die Nachrichtenlage ändert sich. Ihre Anforderungen nicht." → drei Betriebsmodelle (europäische Cloud, eigene VPC, lokale KI-Box) mit Vergleichstabelle → drei Vorteile → Kundenzitat → vier häufige Fragen → Souveränitäts-Leiste → acht verlinkte Branchenkacheln → Abschluss.

---

## 6. Design und Marke

Grundlage ist der Mini-Styleguide V1 (Arbeitstitel Stapelweise).

**Farben**
| Farbe | Wert | Einsatz |
|---|---|---|
| Papierweiß | `#F5F1E8` | Hintergrund |
| Tiefes Tintenblau | `#172832` | Text |
| Werkstattorange | `#E8612C` | Akzent, Buttons, Hervorhebungen |
| Ruhiges Himmelblau | `#86B8C7` | Wolken im Hintergrund, ruhige Flächen |
| Helles Arbeitsgrau | `#D8D6CF` | Rahmen, Trennlinien |

**Schrift:** Bricolage Grotesque für Überschriften und Markenaussagen, Systemschrift für Fließtext und Bedienelemente.

**Bildsprache:** Handgezeichnete Scribbles in Schwarz mit orangenen Akzenten. Vorhanden sind sieben Dokumentart-Illustrationen (Gesundheit), vier Rollen-Illustrationen (Gesundheit) und die Prozess-GIFs von der alten Seite.

**Bewegung:** gezielt eingesetzt. Typewriter im Aufmacher, Klappanzeige im Stil einer Bahnhofsanzeige, Neusortierung der Kacheln beim Reiterwechsel, aufklappbarer Ablauf. Alle Animationen respektieren die Systemeinstellung "Bewegung reduzieren".

**Tonalität:** bildhaft, konkret, trocken-humorvoll, ohne Buzzwords. Sichtbar zum Beispiel im Dialekt-Dreiklang der Souveränitäts-Leiste.

---

## 7. Vergleichstabelle (Stand)

| | Stapelweise | Claude / ChatGPT | andere Cloud-Werkzeuge | Manuell |
|---|---|---|---|---|
| Datensicherheit | Lokal, geschützt, ohne Cloud möglich | Nur Cloudbetrieb | Nur Cloudbetrieb | Anfällig für Fehler und Sicherheitslücken |
| Branchen- und Fachkontext | Vorkonfiguriert je Branche. Direkt an spezifische CRM, PVS, DATEV oder DMS angebunden. | Jedes Mal neu zu klären. | Allgemeine Texterkennung ohne Fachkontext. | Vorhanden, personengebunden. |
| Anbindung an Bestandssysteme | Direkte Schnittstellen bzw. Workflow-Anbindung. | Zusätzliche Workflow-Automatisierung nötig. | Teilweise, oft gebunden an spezifische Zielsysteme. | Flexibel, aber hochaufwändig, da händisch. |
| Kontrolle und Nachvollziehbarkeit | Strukturierte Plausibilitätsprüfung auf Basis von Vorkonfiguration und Kontext. | Kontext an einzelne Nutzer-Accounts gebunden. | Teilweise. | Volle Kontrolle, aber lange Bearbeitungsdauer. |
| Aufwand pro Dokument | Automatisiert. 2 Sekunden bis 5 Minuten, je nach Größe. | Prompting für jedes Dokument, jeden Fall aufs Neue. | Hoher Setup-Aufwand für effiziente Integration in Workflows. | Hoch. |

Die Zeile Datensicherheit ist optisch hervorgehoben, weil sie das eigentliche Unterscheidungsmerkmal trägt.

Offene Entscheidung: Falls die Suchmaschinen-Wirkung einzelner "Stapelweise gegen [große Marke]"-Seiten gewünscht ist, lässt sich das später ergänzen. Nicht als Ersatz für die Tabelle, als zusätzliche Ebene.

---

## 8. Fallbeispiele (final)

**1. Die Zusatzversicherung** — Logo Praenatura
Titel: Vom Schadensfall zur Leistungsprüfung ohne manuellen Abgleich
Ergebnis: 70 % kürzere Bearbeitungsdauer

**2. Die Kinderarztpraxis** — Logo Kinderleicht
Titel: Ein Posteingang der sich selbst sortiert
Ergebnis: 1 Std./Tag Zeitersparnis

**3. Die Personalabteilung** — Mittelständisches Unternehmen
Titel: Von 250 Aktenordnern zu strukturierten und durchsuchbaren Personalakten
Ergebnis: 7 Tage statt 6-monatiger Migration

Alle drei sind auf der Startseite und auf der jeweils passenden Branchenseite platziert. Die ausführlichen Fallstudien-Unterseiten fehlen noch.

---

## 9. Was noch offen ist

**Funktional**
- Der Showroom ist als Button überall verankert, die Funktion selbst existiert noch nicht. Ursprünglich war zugesagt, dass er zum Start der Seite läuft.
- Die Fallstudien-Unterseiten fehlen. Alle "Ganze Geschichte lesen"-Links führen ins Leere.
- Der Dokumentart-Katalog und die Anwendungsfall-Seiten sind bisher nur Kachel-Listen ohne eigene Unterseiten.
- Vergleich, Preise, Über uns, Kontakt und Blog sind im Menü angelegt, aber noch nicht ausgearbeitet.

**Inhaltlich**
- Kundenzitate auf sieben der acht Branchenseiten sind Platzhalter und im Wireframe als Beispielzitat gekennzeichnet.
- Kennzahlen auf diesen Seiten sind plausibel gewählt, aber erfunden. Echte Zahlen liegen nur für Gesundheit, Banken & Versicherungen und Personalabteilungen vor.
- Die technischen Aussagen und die häufigen Fragen auf der Seite Lokale KI sind fachlich noch zu bestätigen.
- Die Zuordnung des Zitats auf der Seite Lokale KI zu einer Person ist zu klären.

**Bilder**
- Hero-Animation für die Startseite fehlt, aktuell ein Platzhalter.
- Illustrationsflächen im Ablauf-Bereich sind auf allen Seiten Platzhalter.
- Dokumentart- und Rollen-Illustrationen existieren bisher nur für Gesundheit.
- Fallstudien-Logos gibt es für Praenatura und Kinderleicht, die übrigen sind Platzhalter.

---

## 10. Vorschlag nächster Schritt

1. Entscheiden, ob der Showroom vor dem Start live geht oder ob die Seite zunächst ohne ihn veröffentlicht wird.
2. Echte Zahlen und Zitate für die sieben Branchenseiten sammeln, damit die Platzhalter ersetzt werden können.
3. Die drei bestehenden Fallstudien als eigene Unterseiten ausarbeiten, damit die Links greifen.
4. Illustrationen für die restlichen Branchen und für den Ablauf-Bereich erstellen.
5. Danach: Vergleich, Preise und Über uns als eigene Seiten ausarbeiten.
