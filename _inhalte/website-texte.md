# Stapelweise (dok.land) — Website-Texte

Stand: 2026-07-27. Alle Texte aller vierzehn Seiten, zum direkten Editieren. Die Methodik-Schritte heißen auf allen Seiten gleich: 0. Konfiguration, 1. Import, 2. Splitting, 3. Extrahierung, 4. Validierung, 5. Anreicherung, 6. Aktion. Struktur folgt der Seitenreihenfolge. Wenn du hier etwas änderst, sag mir Bescheid, dann übertrage ich es ins Wireframe.

---

## Navigation (auf jeder Seite gleich)

- Logo/Markenname: **Stapelweise**
- Menüpunkte: Lösungen · Lokale KI · Preise (kein Aufklappmenü mehr, Lösungen führt auf die Übersichtsseite)
- Buttons: **Zum Schaufenster** (orange) · **Probelauf vereinbaren** (weiß)

---

## Startseite

### Hero (Aufmacher)

**Überschrift** (Titelwort wechselt automatisch durch: Dokumenten, Belegen, Bildern, Screenshots, Scans, PDFs, Akten)
> Aus Stapelweise [Wort] werden strukturierte Daten.

**Unterzeile 1** (Wort wechselt durch: Post, E-Mail, Upload, Messenger, Postkutsche, Brieftaube)
> Egal auf welchem Weg: [Wort].

**Unterzeile 2** (Icon + Wort wechselt durch: Brief, Rechnung, Formular, Postkarte, Foto)
> Egal in welchem Format: [Wort].

**Platzhalter:** oben rechts im Hero steht noch ein gestrichelter Platzhalter "GIF folgt" für eine noch zu erstellende Animation.

### Vertrauens-Leiste

**(orange)** 100% Digital Souverän. **(schwarz)** Von dahoam für dihoim. Von Tohuus für dehaam. Von dahei für dehemm.

Badges: Volle Löschkontrolle · Europäischer Cloudbetrieb oder lokale Installation · 100% DSGVO-konform

### Kundenzitat (neu, vor dem Beispiele-Bereich)

> "Dass wir jeden Tag mindestens 1-2 Stunden allein mit dem Sortieren von allem Kram verbringen, der von Versicherungen, Fachkollegen, Patienten etc. reinkommt: wir dachten, das geht eben nicht anders. Mit Stapelweise sparen wir uns 90% der Zeit, fast einen ganzen Arbeitstag pro Woche."
> — Dr. Sebastian Bartels, Kinderarzt, Gemeinschaftspraxis "Kinderleicht"

### Beispiele-Bereich

**Eyebrow:** Endlich Ordnung in die Datenflut

**Überschrift:** Vom Dokumentenchaos zu *strukturierten Daten*

**Fließtext:**
> Verwandeln Sie Dokumente in verlässliche und strukturierte Datenobjekte. Egal welches Dateiformat oder welche Schriftart, ob Formular, Fließtext oder Tabelle. Ob Deutsch, Portugiesisch oder Kiswahili.

**Signatur-Zeile:** Stapelweise.

**Klickbare Dokumentbeispiele** (links: Arztbrief, Mietvertrag, Schadensmeldung, Laborbericht, Lohnabrechnung · rechts: Kontoauszug, Rechnung, Personalfragebogen, Bilanz, Frachtbrief)

Bei jedem Klick zeigt das Panel: "Ursprüngliches Dokument" + Dateiname, dann die extrahierten Felder:

- **Arztbrief** (arztbrief.pdf): Patient ••••••• · Anamnese "Seit 3 Tagen Fieber, Husten, Halsschmerzen" · Diagnose J06.9 · Therapie "Symptomatisch, Bettruhe, viel Flüssigkeit" · Behandelnder Arzt Dr. Meier · Datum 12.07.2026 · Empfehlung "Kontrolle in 2 Wochen"
- **Kontoauszug** (kontoauszug.pdf): IBAN DE12 •••• 6789 · Zeitraum 01.06.–30.06.2026 · Saldo 2.340,12 € · Buchungen 18 · Gesamt-Eingänge 4.120,00 € (+6 % ggü. Vormonat) · Gesamt-Ausgänge 1.780,00 € (−4 % ggü. Vormonat)
- **Mietvertrag** (mietvertrag.pdf): Mieter ••••••• · Mietbeginn 01.09.2026 · Kaltmiete 890 € · Kaution 2.670 € · Kündigungsfrist "3 Monate zum Quartalsende" · Übergabemängel "Kratzer Parkett Wohnzimmer, dokumentiert" · Vereinbarte Mietsteigerung "Gestaffelt, +3 % jährlich"
- **Rechnung** (rechnung.pdf): Rechnungsnummer RE-2026-0447 · Datum 03.07.2026 · Betrag 1.284,50 € · Zahlungsziel 14 Tage
- **Schadensmeldung** (schadensmeldung.pdf): Schadennummer SCH-88213 · Schadensdatum 28.06.2026 · Schadenshöhe 3.200 € · Status "In Prüfung" · Plausibilitätscheck Schadenshöhe "Im Rahmen vergleichbarer Fälle" · Bisherige Anzahl Schäden "1 (Vorjahr)" · Beschreibung Schaden "Wasserschaden nach Rohrbruch, Küche"
- **Personalfragebogen** (personalfragebogen.pdf): Name ••••••• · Eintrittsdatum 01.08.2026 · Abteilung Vertrieb · Sozialversicherung "Verifiziert"
- **Laborbericht** (laborbericht.pdf): Patient ••••••• · Wert "CRP 4,2 mg/l" · Referenzbereich "< 5 mg/l" · Datum 10.07.2026
- **Bilanz** (bilanz.pdf): Geschäftsjahr 2025 · Bilanzsumme 4,8 Mio. € · Eigenkapitalquote 34 %
- **Lohnabrechnung** (lohnabrechnung.pdf): Mitarbeiter ••••••• · Monat Juni 2026 · Bruttolohn 3.450 € · Nettolohn 2.180 € · Krankenversicherung "Techniker Krankenkasse" · Steuer-ID •• 123456 •• · Einbehaltene Lohnsteuer 412,80 €
- **Frachtbrief** (frachtbrief.pdf): Sendungsnummer FB-77190 · Absender "Spedition Nord" · Zielort Hamburg · Gewicht 640 kg

### Wie es funktioniert

**Überschrift:** Wie es funktioniert
**Unterzeile:** Methodik trifft führende KI-Technologie.

**0. Konfiguration**
> Festlegung der relevanten Datenpunkte, von Informationsparametern, Kontextwissen, Zielformaten und Zielsystemen.

**1. Import**
- Sammelpunkt: Für Dokumente aus allen denkbaren Quellen. E-Mail, SFTP, Cloud-Ordner, Scanner, Upload-Funktionen, APIs.

**2. Splitting**
- Segmentierung und Sortierung von allen eingegangenen Dokumenten in klar abgrenzbare Teile: Große Dateien aus vielen verschiedenen Unterlagen werden in einzelne Dokumente auseinandergepuzzelt.

**3. Extrahierung**
- Kontextbasierte Klassifizierung von Dokumenten und Datenpunkten: Zum Beispiel nach Dokumenttyp, nach Zielsystem, nach Nutzung, nach Branchenkontext. Stapelweise denkt mit.
- Extraktion von Datenpunkten: Auf Basis von konfigurierten Informationsbedarfen, siehe Schritt 0.

**4. Validierung**
- Plausibilitäts- und Qualitätsprüfung: automatisiert oder manuell;je nach Bedarf und Anforderungen. 
- Nachvollziehen der Binnen-Konsistenz von Datenpunkten; Identifikation von Fehl-Extraktionen und -Klassifizierungen. Bei Bedarf auch Vorab-Abgleich neuer Datenpunkte mit vorhandenen Informationen im Zielsystem (PVS, KIS, CRM, DATEV, ...), zum Beispiel neue gegen frühere Angaben, Kunden- oder Versichertennummern oder die Kombination aus Name und Geburtsdatum.

**5. Anreicherung**
- Aufbereitung und Transformation: Extrahierte und qualitätsgesicherte Datenpunkte werden in das neue Zielformat transformiert.
- Kontextbasierte Anreicherung von Datenpunkten: Zum Beispiel mit Kontextwissen wie Diagnoseschlüsseln oder Handlungsempfehlungen.

**6. Aktion**
- Weitergabe in ein beliebiges Zielsystem: Zum Beispiel ein CRM, eine Datenbank, ein Praxisverwaltungssystem (PVS), eine Kanzleisoftware, eine Schadensmanagementsoftware oder ein Personalmanagementsystem.
- Button "Zum Schaufenster" → Bildunterschrift: Stapelweise an konkreten Beispielen erleben und testen
- Button "Probelauf vereinbaren" → Bildunterschrift: Was kann Stapelweise für Sie tun? Vereinbaren Sie ein persönliches Gespräch mit uns.

- Aufbereitung und Transformation: Extrahierte und qualitätsgesicherte Datenpunkte werden in das neue Zielformat transformiert.
- Kontextbasierte Anreicherung von Datenpunkten: Zum Beispiel mit Kontextwissen wie Diagnoseschlüsseln oder Handlungsempfehlungen.
- Weitergabe in ein beliebiges Zielsystem: Zum Beispiel ein CRM, eine Datenbank, ein Praxisverwaltungssystem, eine Kanzleisoftware, eine Schadensmanagementsoftware oder ein Personalmanagementsystem.

### Lösungen: drei Zugänge

**Überschrift:** Wir bändigen die Dokumenten- und Datenflut.
**Unterzeile:** Über verschiedene Branchen, Formate und Anwendungsfälle hinweg.

**Reiter 1 — Nach Branche** (8 Kacheln)
Gesundheit · Pflege · Banken & Versicherungen · Bildungseinrichtungen · Logistik · Steuerberatung & Wirtschaftsprüfung · Immobilienverwaltung · Personalabteilungen

**Reiter 2 — Nach Dokumentart** (24 Kacheln)
Arztbriefe · Fremdbefunde · Anamnesebögen · Kontoauszüge · Gehaltsnachweise · Kreditanträge · Mietverträge · Nebenkostenabrechnungen · Schadensmeldungen · Stromzählerstände · Rechnungen · Zeugnisse · Frachtbriefe · Fahrzeugbriefe · Gesprächsprotokolle · Pflegedokumentationen · Verordnungen · Abrechnungen · Gutachten · Verträge · Vollmachten · Personalfragebögen · Sozialversicherungsnachweise · u.v.m.

**Reiter 3 — Nach Anwendungsfall** (15 Kacheln)
Aktendigitalisierung · Posteingangsmanagement · Archivzugang · Fallbearbeitungsautomatisierung · Aktenzugang · Kreditprüfung · Nebenkostenabrechnung · Zwischenzeugnis · Jahresabschlussprüfung · Lieferketten-Reporting · Universitätsverwaltung · Schulverwaltung · Auslagenmanagement · u.v.m.

### Sprachstil-Zitat (Callout)

> Weniger suchen. Weniger sortieren. Mehr schaffen.

### Sicherheit

**Überschrift:** 100% sicher mit einem 100% Zuhause-Setup
**Text:** Nutzen Sie Stapelweise auf 100% lokaler Infrastruktur: einer eigenen VPC oder sogar eigener Hardware. Gerne beraten wir Sie zu den Optionen.
**Link:** Mehr zu 100% Zuhause-Optionen →

### Referenzprojekte

1. **Die Zusatzversicherung** — echtes Praenatura-Logo eingebaut, darunter graue Kapitälchen "DIE ZUSATZVERSICHERUNG"
   Titel: Vom Schadensfall zur Leistungsprüfung ohne manuellen Abgleich
   Ergebnis: 70% kürzere Bearbeitungsdauer
   Link: Ganze Fallstudie lesen →

2. **Die Kinderarztpraxis** — echtes Kinderleicht-Logo eingebaut, darunter graue Kapitälchen "DIE KINDERARZTPRAXIS"
   Titel: Ein Posteingang der sich selbst sortiert
   Ergebnis: 1 Std./Tag Zeitersparnis
   Link: Ganze Fallstudie lesen →

3. **Die Personalabteilung** — kein Logo, stattdessen grau "Mittelständisches Unternehmen", darunter Kapitälchen "DIE PERSONALABTEILUNG"
   Titel: Von 250 Aktenordnern zu strukturierten und durchsuchbaren Personalakten
   Ergebnis: 7 Tage statt 6-monatige Migration
   Link: Ganze Fallstudie lesen →

### Vergleichstabelle
**Überschrift:** Stapelweise im Vergleich

| | Stapelweise | Claude / ChatGPT | andere Cloud-Werkzeuge | Manuell |
|---|---|---|---|---|
| Datensicherheit | Lokal, geschützt, ohne Cloud möglich | Nur Cloudbetrieb | Nur Cloudbetrieb | Anfällig für Fehler und Sicherheitslücken |
| Branchen- und Fachkontext | Vorkonfiguriert je Branche. Direkt an spezifische CRM, PVS, DATEV oder DMS angebunden. | Jedes Mal neu zu klären. | Allgemeine Texterkennung ohne Fachkontext. | Vorhanden, personengebunden. |
| Anbindung an Bestandssysteme | Direkte Schnittstellen bzw. Workflow-Anbindung. | Zusätzliche Workflow-Automatisierung nötig. | Teilweise, oft gebunden an spezifische Zielsysteme. | Flexibel, aber hochaufwändig, da händisch. |
| Kontrolle und Nachvollziehbarkeit | Strukturierte Plausibilitätsprüfung auf Basis von Vorkonfiguration und Kontext. | Kontext an einzelne Nutzer-Accounts gebunden. | Teilweise. | Volle Kontrolle, aber lange Bearbeitungsdauer. |
| Aufwand pro Dokument | Automatisiert. 2 Sekunden bis 5 Minuten, je nach Größe. | Prompting für jedes Dokument, jeden Fall aufs Neue. | Hoher Setup-Aufwand für effiziente Integration in Workflows. | Hoch. |

### Abschluss-Aufruf

**Überschrift:** Und jetzt? Ihr nächster Schritt:

- Button "Zum Schaufenster" → Bildunterschrift: Stapelweise an konkreten Beispielen erleben und testen
- Button "Probelauf vereinbaren" → Bildunterschrift: Was kann Stapelweise für Sie tun? Vereinbaren Sie ein persönliches Gespräch mit uns.

### Footer (nur hier verlinkt)

Über uns · Kontakt · Referenzprojekte · Lokale KI · Preise · Impressum · Datenschutz

---

## Branchen-Landingpage: Gesundheit

**Reihenfolge der Abschnitte:** Hero → Kundenzitat → Vielfalt an Dokumenten → Souveränitäts-Leiste → Wie es funktioniert → Fallstudie → Stapelweise Vorteile → Für wen sich Stapelweise lohnt → Warum Stapelweise im Gesundheitsbereich → Sicherheitshinweis → Abschluss-Aufruf

### Hero

**Überschrift:** Ein Posteingang der sich selbst sortiert.

**Text:**
> Fremdbefunde, Einwilligungserklärungen, Arztbriefe, Laborwerte und Abrechnungen: verschiedenste Dokumente in unterschiedlichsten Formaten über zahlreiche Kanäle. Stapelweise sammelt, erkennt und sortiert sie, liest sie aus und überführt alle wichtigen Informationen.

**Buttons:** Beispiele sehen und testen · Beratungsgespräch anfragen

**Statistik-Badge:** 1 Stunde pro Tag Arbeitsersparnis in einer mittelgroßen Arztpraxis

### Kundenzitat (neu, direkt nach dem Hero)

Dasselbe Zitat wie auf der Startseite (Dr. Sebastian Bartels, siehe oben), mit Link "Die ganze Geschichte lesen →".

### Vielfalt an Dokumenten. Über vielfältige Wege. (neu, ersetzt "Typische Dokumente")

**Links** (eine große Klappanzeige mit Illustration, klappt alle 1,5 Sekunden auf eine andere Dokumentart um; linke und rechte Schrift stehen jetzt auf einer Höhe)
Pool mit deinen Illustrationen: Arztbrief · Befund · Laborbericht · Überweisung · Rezept · Medikationsplan · Entlassungsbrief

direkt in Ihr Praxisverwaltungssystem (PVS) oder Krankenhausinformationssystem (KIS). 

**Rechts** (große Schrift, 3x so groß wie Fließtext, ohne Umrandung, Typewriter-Animation): per E-Mail · per Post · per Messenger · persönlich abgegeben

### Wie es funktioniert, in Praxis, MVZ und Klinik (neu, ersetzt den alten 3-Schritte-"Ablauf")

Gleiche Struktur wie auf der Startseite (0. Konfiguration bis IV. Weitergabe), aber inhaltlich auf den medizinischen Alltag zugeschnitten:

**0. Konfiguration**
> Festlegung, welche Datenpunkte aus Arztbriefen, Befunden und Laborberichten erfasst und abgeglichen werden sollen, etwa Geburtsdatum, Krankenversicherung, ICD-Code, Medikation oder Vitalwerte – abgestimmt auf das Zielsystem (PVS oder KIS).

**1. Import**
- Sammelpunkt: Arztbriefe, Überweisungen und Befunde kommen aus Praxisverwaltung, Fax, E-Mail und Post herein, ergänzt um Scans direkt am Empfang. Alles landet automatisch in einer gemeinsamen, virtuellen Stapelweise-"Eingangsbox".

**2. Splitting**
- Segmentierung und Sortierung: Ein eingescannter Stapel aus Arztbriefen, Laborwerten und Einwilligungserklärungen wird in einzelne, klar zuordenbare Dokumente aufgeteilt.

**3. Extrahierung**
- Kontextbasierte Klassifizierung: Zum Beispiel nach Dokumentart wie Arztbrief, Befund oder Rezept, oder nach Patient und Fall.
- Extraktion von Datenpunkten: Diagnosen, Medikation, Laborwerte und Behandlungsempfehlungen werden gezielt aus dem Dokument gelesen.

**4. Validierung**
- Plausibilitätsprüfung: Abgleich bestimmter Datenpunkte mit der bestehenden Patientenakte, etwa Geburtsdatum oder Versicherungsnummern, um Verwechslungen früh zu erkennen.
- Qualitätscheck: automatisiert oder manuell: Je nach Dringlichkeit und Dokumentart, automatisiert oder durch das Praxisteam.

**5. Anreicherung**
- Aufbereitung und Transformation: Extrahierte Werte werden in das Format der elektronischen Patientenakte gebracht.
- Kontextbasierte Anreicherung: Zum Beispiel mit Diagnoseschlüsseln nach ICD-10 oder Hinweisen auf notwendige Folgetermine.

**6. Aktion**
- Weitergabe in ein beliebiges Zielsystem: Direkt ins Praxisverwaltungssystem, das Krankenhausinformationssystem oder die Akte des MVZ.
- **Maximale Datensicherheit:** Im VPC- oder lokalen Betrieb verlassen sensible Patientendaten nie Ihr Netzwerk.
- **Alle denkbaren Formate:** Auch handschriftliche Notizen und Vermerke werden zuverlässig erkannt.
- **Nahtlose Anbindung:** Direkt an Ihr PVS oder KIS, ganz ohne zusätzliche Insellösung.
- **0** — Zusatzaufwand bei neuen Layouts oder Eingangskanälen.
- **95%+** — Genaue Erkennung von Datenpunkten und Datenkategorien, auch handschriftlich, auch aus noch völlig unbekannten Layouts.
- **<1 Minute** — Von einem neuen Dokumenten-Input zur strukturierten Hinterlegung in PVS, KIS oder sonstiger Datenbank.
- **>1 Arbeitstag** — Zeitersparnis pro Woche für eine mittelgroße Arztpraxis.
- **Für Ärztinnen und Ärzte:** Vollständige, akkurate Patientenakten mit allen wichtigen Informationen auf einen Blick. Keine lange Suche mehr in Scans und Anhängen.
- **Für Krankenschwestern und Krankenpfleger:** Weniger Zeit für die Aktenpflege, schnelleres Verständnis der Patientensituation und mehr Handlungsfähigkeit im Alltag.
- **Für Medizinische Fachangestellte** *(Vorschlag von mir)*: Weniger Zeit am Faxgerät und im Posteingang, mehr Zeit für Patientinnen und Patienten am Empfang.
- **Für Medizinisch-technische Assistenzen** *(Vorschlag von mir)*: Befunde und Messwerte werden automatisch erfasst und der richtigen Akte zugeordnet, ganz ohne manuelle Übertragung.

- Aufbereitung und Transformation: Extrahierte Werte werden in das Format der elektronischen Patientenakte gebracht.
- Kontextbasierte Anreicherung: Zum Beispiel mit Diagnoseschlüsseln nach ICD-10 oder Hinweisen auf notwendige Folgetermine.
- Weitergabe in ein beliebiges Zielsystem: Direkt ins Praxisverwaltungssystem, das Krankenhausinformationssystem oder die Akte des MVZ.

### Fallstudie (neu, größer als vorher)

**Layout:** links auf 1/4 der Breite das Kinderleicht-Logo, rechts auf 3/4 die Teaser-Box.
**Label über dem Titel:** "DIE KINDERARZTPRAXIS" in hellgrauen Kapitälchen
**Titel:** Vom Datei- und Dokumentenchaos zu mehr Ruhe im Praxisalltag: Wie eine Kinderarztpraxis ihren Posteingang mit Stapelweise neu organisiert hat
**Link:** Ganze Geschichte lesen →

### Stapelweise Vorteile für Arztpraxen, medizinische Versorgungszentren und Kliniken (neu)

- **Maximale Datensicherheit:** Durch lokalen Betrieb verlassen sensible Patientendaten nie Ihr Netzwerk.
- **Alle denkbaren Formate:** Auch handschriftliche Notizen und Vermerke werden zuverlässig erkannt.
- **Nahtlose Anbindung:** Direkt an Ihr PVS oder KIS, ganz ohne zusätzliche Insellösung.

### Warum Stapelweise im Gesundheitsbereich

- **0** — Zusatzaufwand bei neuen Layouts oder Eingangskanälen.
- **95%+** — Genaue Erkennung von Datenpunkten und Datenkategorien, auch handschriftlich, auch aus noch völlig unbekannten Layouts.
- **<1 Minute** — Von einem neuen Dokumenten-Input zur strukturierten Hinterlegung in PVS, KIS oder sonstiger Datenbank.
- **>1 Arbeitstag** — Zeitersparnis pro Woche für eine mittelgroße Arztpraxis.

### Souveränitäts-Leiste (neu, von der Startseite übernommen)

**(orange)** 100% Datensicherheit. **(schwarz)** Von dahoam für dihoim, von Tohuus für dehaam, von dahei für dehemm.

Badges (auf Gesundheit angepasst): Sichere Patientendaten · Lokal innerhalb Ihrer Räumlichkeiten · 100% rechtssicher und DSGVO-konform

### Sicherheitshinweis (branchenspezifisch, unverändert)

**Überschrift:** Patientendaten verlassen nie Ihr Netzwerk
**Text:** Die lokale KI-Box verarbeitet Befunde, Anamnesen und Abrechnungsdaten direkt in Ihrer Praxis. Keine Cloud, keine Übertragung an Dritte.
**Link:** Mehr zur lokalen KI-Box →

### Für wen sich Stapelweise lohnt (neu, vier Spalten mit Illustrationen)

- **Für Ärztinnen und Ärzte:** Vollständige, akkurate Patientenakten mit allen wichtigen Informationen auf einen Blick. Keine lange Suche mehr in Scans und Anhängen.
- **Für Krankenschwestern und Krankenpfleger:** Weniger Aufwand für die Aktenpflege, schnelleres Verständnis der Patientensituation und bessere Handlungsfähigkeit.
- **Für Medizinische Fachangestellte** *(Vorschlag von mir)*: Weniger Zeit am Faxgerät und mit Posteingang, mehr Zeit für Patientinnen und Patienten.
- **Für Medizinisch-technische Assistenzen** *(Vorschlag von mir)*: Alle wichtigen Informationen, Befunde und Messwerte auf einen Blick, da automatisch erfasst und kontextualisiert.

### Abschluss (neu)

**Überschrift:** Stapelweise Entlastung auch für Ihren Praxis- oder Klinikbetrieb?
**Buttons:** 
- Button "Zum Schaufenster" → Bildunterschrift: Stapelweise an konkreten Beispielen erleben und testen
- Button "Probelauf vereinbaren" → Bildunterschrift: Was kann Stapelweise für Sie tun? Vereinbaren Sie ein persönliches Gespräch mit uns.

---

## Branchen-Landingpage: Pflege

*URL: dok.land/loesungen/branchen/pflege*

### Hero

**Überschrift:** Mehr Zeit für die Versorgung. Weniger Zeit für Erfassung und Ablage.

**Text:**
> Verordnungen häuslicher Krankenpflege, Genehmigungen, Leistungsnachweise und Kassenrückläufer erreichen Ihren Pflegedienst über unterschiedliche Wege. Stapelweise trennt und sortiert die Dokumente, ordnet sie der richtigen Klientenakte zu, liest die benötigten Angaben aus und übergibt Dokumente und Daten an Ihre Pflegesoftware.

**Buttons:** Im Schaufenster testen · Beratungsgespräch anfragen

**Kennzahl im Hero:** Bis zu 6 Stunden weniger Erfassungs- und Verwaltungsaufwand pro Woche für einen mittelgroßen ambulanten Pflegedienst. 

### Kundenzitat

> "Unsere Pflegekräfte sollen Menschen versorgen und ihre Arbeit fachlich dokumentieren. Das wiederholte Erfassen, Zuordnen und Nachtragen von Verordnungen und Genehmigungen kostet unnötig Zeit. Seit die Unterlagen automatisch ausgelesen und der richtigen Klientenakte zugeordnet werden, haben wir deutlich mehr Ruhe in unseren Abläufen."
> — Karsten Vranic, Pflegedienstleitung eines ambulanten Pflegedienstes

### Vielfalt an Dokumenten. Über vielfältige Wege.

**Links** (Klappanzeige, wechselt alle 1,5 Sekunden):
Verordnung häuslicher Krankenpflege · Genehmigung der Krankenkasse · Leistungsnachweis · Pflegegradbescheid · Überleitungsbogen · Kassenrückläufer · Medikationsplan

**Rechts** (Typewriter, orange): per E-Mail · per Post · per Messenger · per Upload · per Fax

Darunter: direkt in Ihre Pflegesoftware, die Tourenplanung oder die nächste Abrechnung mit den Kassen.

### Souveränitäts-Leiste

**(orange)** Volle Datenhoheit. **(schwarz)** Auf Wunsch werden alle Dokumente vollständig lokal in Ihrer Einrichtung verarbeitet.

Badges: Für sensible Versorgungsdaten entwickelt · Lokale Verarbeitung möglich · Kontrollierter Zugriff innerhalb Ihrer Einrichtung

### Wie es funktioniert

**0. Konfiguration**
> Zu Beginn legen wir gemeinsam fest, welche Dokumentarten verarbeitet und welche Angaben daraus übernommen werden sollen. Das können zum Beispiel Versichertendaten, Verordnungszeitraum, verordnete Maßnahmen, Häufigkeit, Genehmigungsstatus, Pflegegrad oder zuständiger Kostenträger sein.

Die Verarbeitung wird an Ihre bestehenden Abläufe und die eingesetzte Pflegesoftware angepasst.

**1. Import**
- Verordnungen, Genehmigungen, Leistungsnachweise und Kassenpost erreichen Ihren Pflegedienst per Post, Fax oder E-Mail. Weitere Unterlagen kommen als Scan oder Foto aus der Tour zurück.

Stapelweise führt diese Dokumente an einem zentralen digitalen Eingang zusammen. Mitarbeitende müssen die Unterlagen nicht mehr einzeln vorsortieren oder manuell ablegen.

**2. Splitting**

Enthält ein Scan mehrere Dokumente, wie Verordnungen, Leistungsnachweise oder Schreiben, wird er automatisch in einzelne Dokumente aufgeteilt.

**3. Extrahierung**

Stapelweise erkennt, ob es sich beispielsweise um eine Verordnung häuslicher Krankenpflege, eine Genehmigung der Krankenkasse, einen Pflegegradbescheid oder einen Leistungsnachweis handelt.

Stapelweise liest genau die Angaben aus, die Sie für Versorgung, Verwaltung und Abrechnung benötigen. Dazu können z. B. gehören:

- Name und Geburtsdatum
- Kranken- oder Pflegekasse
- Versichertennummer
- verordnende Arztpraxis
- Ausstellungsdatum
- Verordnungszeitraum
- verordnete Maßnahmen
- Häufigkeit und Dauer
- Pflegegrad
- Genehmigungsstatus
- genehmigter Leistungszeitraum

**4. Validierung**

Namen, Geburtsdaten, Versichertennummern und weitere eindeutige Angaben werden ausgelesen und mit den vorhandenen Stammdaten abgeglichen. So kann das Dokument der richtigen versorgten Person und dem passenden Vorgang zugeordnet werden.

Anschließend werden die Angaben nach den gemeinsam festgelegten Regeln geprüft. Fehlende, widersprüchliche oder nicht eindeutig lesbare Informationen werden gekennzeichnet und einer zuständigen Person zur Prüfung vorgelegt.

Die fachliche Entscheidung bleibt jederzeit bei Ihren Mitarbeitenden.

**5. Anreicherung**
Stapelweise kann relevante Zeiträume und Bearbeitungsstände erkennen. So sehen Ihre Mitarbeitenden frühzeitig, wenn zum Beispiel:

- eine Verordnung ausläuft,
- eine Genehmigung noch fehlt,
- genehmigter und verordneter Zeitraum voneinander abweichen,
- Angaben für die Abrechnung unvollständig sind,
- eine Rückmeldung der Kranken- oder Pflegekasse bearbeitet werden muss.

Die konkreten Prüf- und Hinweisschritte werden an Ihre internen Abläufe angepasst.

Die ausgelesenen Angaben werden in das benötigte Format übertragen und zusammen mit dem Originaldokument bereitgestellt.

**6. Aktion**
Je nach eingesetzter Systemlandschaft können die Ergebnisse zum Beispiel übergeben werden an:

Ihre Pflegesoftware,
die digitale Klientenakte,
das Dokumentenmanagement,
die Einsatz- und Tourenplanung,
die Verwaltung oder
die Abrechnung.

So bleiben Dokument und strukturierte Daten miteinander verbunden und müssen nicht mehrfach erfasst werden.

### Fallstudie

**Bild:** Branchen-Scribble (echt eingebaut)
**Label (graue Kapitälchen):** Der ambulante Pflegedienst
**Titel:** Von der eingehenden Verordnung bis zur vollständigen Akte: Wie ein ambulanter Pflegedienst Verordnungen, Genehmigungen und Kassenrückläufer neu organisiert hat
**Link:** Ganze Geschichte lesen (in Arbeit) → 

### Stapelweise Vorteile für Pflege & Fürsorge

- **Weniger manuelle Erfassung:** Stammdaten, Verordnungszeiträume und weitere benötigte Angaben müssen nicht wiederholt aus Dokumenten abgeschrieben werden.
- **Vollständigere Unterlagen:** Fehlende Seiten, unklare Zuordnungen und widersprüchliche Angaben werden frühzeitig sichtbar. So können offene Punkte geklärt werden, bevor sie die Versorgung oder Abrechnung verzögern.
- **Fristen besser im Blick:** Auslaufende Verordnungen, fehlende Genehmigungen und offene Kassenrückläufer können automatisch erkannt und an die zuständigen Mitarbeitenden weitergegeben werden.
- **Auch für Scans, Fotos und Handschrift:** Stapelweise verarbeitet gedruckte Dokumente, Scans und Fotos. Handschriftliche Ergänzungen können erkannt werden. Nicht eindeutig lesbare Angaben werden zur Prüfung markiert.
- **Anschluss an bestehende Systeme:** Die Verarbeitung wird in Ihre vorhandene Systemlandschaft eingebunden. Ihre Mitarbeitenden arbeiten weiterhin mit der vertrauten Pflegesoftware.
- **Lokale Verarbeitung möglich:** In der lokalen Betriebsvariante werden Dokumente direkt in Ihrer Einrichtung verarbeitet. Sensible Versorgungsdaten müssen dafür Ihre eigene technische Umgebung nicht verlassen.

### Für wen sich Stapelweise lohnt

- **Für Pflegefachkräfte:** Weniger Zeit für das Sortieren, Zuordnen und Nachtragen von Unterlagen. Mehr Zeit für die Versorgung und die fachliche Dokumentation.
- **Für die Pflegedienstleitung:** Ein klarer Überblick über offene Vorgänge, fehlende Genehmigungen und auslaufende Verordnungen. Rückfragen müssen nicht mehr über einzelne Ordner, Postfächer und Papierstapel hinweg verfolgt werden.
- **Für die Abrechnung:** Leistungsnachweise, Genehmigungen und Kassenrückläufer stehen geordnet und zugeordnet bereit. Fehlende Informationen können erkannt werden, bevor die Abrechnung übermittelt wird.
- **Für Angehörige:** Bessere Auskunftsfähigkeit ohne langes Suchen, weil alle Unterlagen an einem Ort liegen und Kerninformationen auf einen Blick abrufbar.

### Warum Stapelweise für Pflege & Fürsorge

- **Ein zentraler Eingang:** Dokumente aus Post, Fax, E-Mail, Scan und Tour werden an einer Stelle verarbeitet.
- **Dokument und Daten bleiben verbunden:** Das Originaldokument wird gemeinsam mit den ausgelesenen Angaben abgelegt und an das Zielsystem übergeben.
- **Unklare Fälle werden sichtbar:** Stapelweise entscheidet nicht einfach über unsichere Angaben hinweg. Unvollständige, widersprüchliche oder schwer lesbare Dokumente werden zur Prüfung markiert.
- **Neue Vorlagen lassen sich ergänzen:** Ändern Krankenkassen oder andere Absender ihre Formulare, kann die Verarbeitung angepasst werden, ohne einen vollständig neuen Arbeitsablauf aufzubauen.
- **Die Verarbeitung passt zu Ihrem Pflegedienst:** Dokumentarten, Datenfelder, Prüfregeln und Übergaben werden an Ihre bestehenden Abläufe und Systeme angepasst.

### Sicherheitshinweis

**Überschrift:** Sensible Versorgungsdaten bleiben stets unter Ihrer Kontrolle
**Text:** In der lokalen Betriebsvariante verarbeitet die Stapelweise KI-Box Verordnungen, Leistungsnachweise, Pflegeunterlagen und Abrechnungsdaten direkt in Ihrer Einrichtung.
Dokumente müssen dafür nicht an ein externes KI-Modell oder eine öffentliche Cloud übertragen werden. Zugriffsrechte, Speicherorte und Löschfristen können entsprechend Ihrer internen Vorgaben eingerichtet werden.

**Link:** Mehr über die lokale Verarbeitung erfahren →

### Abschluss

**Überschrift:** Stapelweise Entlastung auch für Ihren Pflegedienst?
**Buttons:** Zum Schaufenster · Probelauf vereinbaren

---

## Branchen-Landingpage: Banken

*URL: dok.land/loesungen/branchen/banken*

### Hero

**Überschrift:** Vom Dokumenteneingang zum prüfbereiten Kreditvorgang.

**Text:**
> Gehaltsnachweise, Kontoauszüge, Steuerbescheide und Unternehmensunterlagen erreichen Banken über Portale, E-Mail, Scanstrecken und Nachreichungen. Stapelweise trennt und sortiert die Dokumente, ordnet sie der richtigen Kunden- und Kreditakte zu, liest die benötigten Angaben aus und gleicht sie mit den vorhandenen Antrags- und Stammdaten ab.
>
> Fehlende oder widersprüchliche Angaben werden gekennzeichnet und gezielt an die Kreditsachbearbeitung weitergegeben. Die Kreditwürdigkeitsprüfung und Kreditentscheidung bleiben bei Ihren Mitarbeitenden und in Ihren bestehenden Systemen.

**Buttons:** Im Schaufenster testen · Probelauf vereinbaren

**Hinweis im Hero:** Strukturierte Datenlage, bevor der Vorgang bearbeitet wird.

### Ausgangslage

> Kreditunterlagen kommen selten vollständig und in einer einheitlichen Form. Kontoauszüge liegen als PDF vor, Gehaltsnachweise als Handyfoto und Steuerunterlagen werden später per E-Mail nachgereicht. Die Sachbearbeitung muss den Vorgang immer wieder öffnen, Dokumente zuordnen und Angaben manuell übertragen.
>
> Stapelweise bereitet diese Unterlagen automatisch vor und kennzeichnet die Fälle, bei denen eine fachliche Prüfung erforderlich ist.

### Viele Dokumente. Viele Formate. Eine vollständige Kreditakte.

**Links** (Klappanzeige): Gehaltsnachweis · Kontoauszug · Steuerbescheid · Selbstauskunft · Betriebswirtschaftliche Auswertung · Jahresabschluss · Summen- und Saldenliste · Sicherheitenunterlage

**Rechts** (Typewriter, orange): über das Kundenportal · per E-Mail · per Post und Scan · als Upload aus der App · über eine Schnittstelle

Darunter: direkt in Ihr CRM, Ihre Banken- und Kreditvergabe-Software.

### Souveränitäts-Leiste

**(orange)** Ihre Daten. Ihre Infrastruktur. Ihre Entscheidung. **(schwarz)** Lokal, in Ihrer VPC oder in der Cloud.

Badges: Lokaler oder VPC-Betrieb möglich · Keine Übertragung außerhalb der gewählten Betriebsumgebung · Nachvollziehbare Verarbeitungsschritte

### So funktioniert Stapelweise

**0. Konfiguration**
> Zu Beginn legen wir gemeinsam fest, welche Dokumentarten verarbeitet und welche Angaben daraus übernommen werden sollen.
> Das können zum Beispiel sein:
- Kundennummer und Vorgangsnummer
- Name und Anschrift
- Arbeitgeber oder Unternehmen
- Einkommen und Beschäftigungszeitraum
- Kontosalden und Kontobewegungen
- wiederkehrende Einnahmen und Ausgaben
- Steuerdaten
- Umsätze und Ergebniskennzahlen
- bestehende Verbindlichkeiten
- Angaben zu Sicherheiten
- Dokumentenzeitraum und Ausstellungsdatum
> Die Verarbeitung wird an Ihre Kreditprodukte, Prüfregeln, Fachsysteme und internen Zuständigkeiten angepasst.

**1. Import**
> Kreditanträge und ergänzende Nachweise gehen über Kundenportale, E-Mail, Post, Scanstrecken, Apps oder Schnittstellen ein.
> Stapelweise führt die Dokumente in einem zentralen Verarbeitungsschritt zusammen. Später eingereichte Unterlagen können automatisch dem bereits bestehenden Kreditvorgang zugeordnet werden.

**2. Splitting**
- **Sammeldokumente automatisch aufteilen:** Enthält eine Datei mehrere Kontoauszüge, Gehaltsnachweise oder Steuerunterlagen, wird sie automatisch in einzelne Dokumente zerlegt.

**3. Extrahierung**
- **Dokumentart erkennen:** Stapelweise erkennt, ob es sich zum Beispiel um einen Gehaltsnachweis, einen Kontoauszug, einen Steuerbescheid, eine betriebswirtschaftliche Auswertung oder eine Sicherheitenunterlage handelt.
> Stapelweise liest genau die Angaben aus, die für die weitere Kreditbearbeitung benötigt werden.
> Dazu können gehören:
- Brutto- und Nettoeinkommen
- Arbeitgeber und Beschäftigungsdauer
- Abrechnungszeiträume
- Kontosalden
- wiederkehrende Zahlungseingänge
- Darlehens- und Leasingraten
- Jahresumsatz und Betriebsergebnis
- Steuerfestsetzungen
- Bilanzpositionen
- Angaben zu Sicherheiten und Eigentum
> Originaldokument und ausgelesene Daten bleiben miteinander verbunden. Die Kreditsachbearbeitung kann jederzeit nachvollziehen, aus welcher Stelle eines Dokuments eine Angabe stammt.

**4. Validierung**
- **Kunden- und Kreditakte zuordnen:** Kundennummern, Vorgangsnummern, Namen, Anschriften und weitere eindeutige Angaben werden ausgelesen und mit den vorhandenen Stammdaten abgeglichen. So landen die Unterlagen in der richtigen digitalen Akte und beim passenden Kreditantrag.
> Stapelweise trifft keine Kreditwürdigkeits- oder Kreditentscheidung.
> Das System führt formale und regelbasierte Vorprüfungen durch. Dazu können gehören:
- Abgleich von Name, Anschrift und Kundennummer
- Prüfung, ob erwartete Dokumente vorhanden sind
- Erkennung fehlender Seiten oder Zeiträume
- Vergleich von Antragsangaben mit eingereichten Nachweisen
- Abgleich wiederkehrender Einkommensangaben
- Erkennung möglicher Dubletten
- Kennzeichnung widersprüchlicher Beträge oder Zeiträume
- Markierung unleserlicher oder nicht eindeutig zuordenbarer Angaben
> Eindeutige Fälle können automatisiert weitergegeben werden. Unklare oder abweichende Fälle werden mit einem konkreten Prüfhinweis an die zuständigen Mitarbeitenden übergeben.

**5. Anreicherung**
> Die ausgelesenen und formal geprüften Angaben werden in das benötigte Datenformat übertragen und zusammen mit den Originaldokumenten bereitgestellt.

**6. Aktion**
> Je nach Systemlandschaft können die Ergebnisse zum Beispiel übergeben werden an:
- Kreditbearbeitungssysteme
- Kreditentscheidungssysteme
- Kernbankensysteme
- Dokumentenmanagementsysteme
- digitale Kunden- und Kreditakten
- CRM-Systeme
- interne Prüf- und Bearbeitungsoberflächen
> Ihre Mitarbeitenden arbeiten weiterhin in den vertrauten Fachsystemen. Stapelweise bereitet den Vorgang im Hintergrund vor.

### Beispielprozess

**Bild:** Branchen-Scribble (echt eingebaut)
**Label:** Private und gewerbliche Kreditbearbeitung
**Titel:** Nachweise automatisch erfassen und für die Kreditprüfung vorbereiten

Ein Kreditantrag wird digital eingereicht. Gehaltsnachweise, Kontoauszüge oder Unternehmensunterlagen folgen über unterschiedliche Kanäle und zu unterschiedlichen Zeitpunkten.

Stapelweise ordnet die Nachreichungen dem richtigen Vorgang zu, erkennt die Dokumentarten und liest die benötigten Angaben aus. Werte aus Antrag und Nachweisen werden regelbasiert miteinander verglichen.

Fehlende Zeiträume, widersprüchliche Beträge oder nicht eindeutig lesbare Angaben werden für die Kreditsachbearbeitung gekennzeichnet. Die fachliche Kreditwürdigkeitsprüfung und die Entscheidung bleiben vollständig bei der Bank.

**Link:** Zur ganzen Geschichte (in Arbeit) →

### Die Vorteile von Stapelweise für Banken

- **Weniger manuelle Datenerfassung:** Einkommen, Zeiträume, Salden und weitere Angaben müssen nicht mehr wiederholt aus Dokumenten übertragen werden.
- **Vollständigere Kreditakten:** Fehlende Unterlagen, unvollständige Zeiträume und unklare Zuordnungen werden frühzeitig sichtbar.
- **Weniger Rückfragen und Nachreichungen:** Die Sachbearbeitung erkennt sofort, welche Dokumente oder Angaben noch fehlen, und kann diese gezielt anfordern.
- **Klare Übergabe an die Kreditsachbearbeitung:** Unstimmigkeiten werden nicht automatisch übergangen. Sie werden mit einem konkreten Hinweis an die zuständigen Mitarbeitenden übergeben.
- **Private und gewerbliche Unterlagen verarbeiten:** Stapelweise kann sowohl standardisierte Privatkundennachweise als auch umfangreichere Unternehmensunterlagen verarbeiten.
- **Integration in bestehende Fachsysteme:** Dokumente und strukturierte Daten werden an die angebundenen Kredit-, Kernbank- oder Dokumentenmanagementsysteme übergeben.
- **Flexibles Betriebsmodell:** Stapelweise kann lokal, in einer kundenspezifischen VPC oder als Cloud-Lösung betrieben werden. Das Betriebsmodell wird an Ihre Anforderungen an Datenschutz, Informationssicherheit und Systemarchitektur angepasst.
  *Link:* Mehr zu den Optionen erfahren → (führt zur Seite Lokale KI)

### Für wen sich Stapelweise lohnt

- **Für Kreditsachbearbeitung und Marktfolge:** Unterlagen liegen bereits getrennt, zugeordnet und ausgelesen vor. Die Bearbeitung kann direkt mit der fachlichen Prüfung beginnen.
- **Für die Kreditprüfung:** Antragsangaben und eingereichte Nachweise stehen strukturiert nebeneinander. Abweichungen und fehlende Zeiträume sind sofort sichtbar.
- **Für Markt und Kundenservice:** Fehlende Unterlagen können konkret benannt werden. Kundinnen und Kunden müssen seltener pauschal um erneute Einreichung gebeten werden.
- **Für Operations:** Wiederkehrende Erfassungs- und Zuordnungsaufgaben werden automatisiert. Bearbeitungsstände und offene Fälle werden transparenter.
- **Für IT und Unternehmensarchitektur:** Stapelweise wird an bestehende Fachsysteme angebunden und kann lokal, in einer VPC oder in der Cloud betrieben werden.
- **Für Revision und Compliance:** Verarbeitungsschritte, automatische Prüfhinweise und manuelle Korrekturen können nachvollziehbar protokolliert werden.

### Warum Stapelweise für Banken?

- **Unterschiedliche Layouts statt starrer Vorlagen:** Stapelweise arbeitet nicht ausschließlich mit fest programmierten Formularmasken. Auch abweichende Layouts können verarbeitet werden. Unsichere Erkennungen werden zur Prüfung gekennzeichnet.
- **Der Mensch bleibt in der Entscheidung:** Stapelweise bereitet Kreditvorgänge vor. Kreditwürdigkeitsprüfung, Risikobewertung und Kreditentscheidung bleiben bei den zuständigen Mitarbeitenden und Systemen der Bank.
- **Regeln und Prüfungen passen zu Ihrem Prozess:** Dokumentarten, Datenfelder, Abgleichregeln und Übergaben werden an Ihre Kreditprodukte und internen Abläufe angepasst.
- **Original und Daten bleiben verbunden:** Jede ausgelesene Angabe kann zum zugrunde liegenden Dokument zurückverfolgt werden.
- **Keine zusätzliche Arbeitsoberfläche nötig:** Die Ergebnisse können direkt in die angebundenen Fachsysteme übertragen werden. Ihre Mitarbeitenden müssen nicht dauerhaft in einer weiteren Insellösung arbeiten.

### Sicherheit und Datenhoheit

**Überschrift:** Sie bestimmen, wo Ihre Daten verarbeitet werden

- **Lokal in Ihrem Haus:** Die Verarbeitung findet innerhalb Ihrer eigenen technischen Umgebung statt. Dokumente und Inhaltsdaten verlassen Ihr Netzwerk nicht.
- **In Ihrer VPC:** Die Verarbeitung findet in einer isolierten, für Sie eingerichteten Cloud-Umgebung statt. Dokumente und Inhaltsdaten werden nicht außerhalb dieser Betriebsumgebung übertragen.
- **Als Cloud-Lösung:** Für weniger restriktive Anwendungsfälle kann Stapelweise auch als verwaltete Cloud-Lösung betrieben werden. Speicherorte, Zugriffe und Auftragsverarbeitung werden vertraglich festgelegt.

Unabhängig vom gewählten Modell können Zugriffsrechte, Protokollierung, Speicherfristen und Schnittstellen an Ihre Anforderungen angepasst werden.

**Link:** Mehr über Betriebsmodelle und Datenhoheit erfahren

### Abschluss

**Überschrift:** Keine Zeit mehr mit der Eingangsbearbeitung verlieren?

**Buttons:** 

- Button "Zum Schaufenster" → Bildunterschrift: Stapelweise an konkreten Beispielen erleben und testen
- Button "Probelauf vereinbaren" → Bildunterschrift: Was kann Stapelweise für Sie tun? Vereinbaren Sie ein persönliches Gespräch mit uns.

---

> Die ausgelesenen und formal geprüften Angaben werden in das benötigte Datenformat übertragen und zusammen mit den Originaldokumenten bereitgestellt.
> Je nach Systemlandschaft können die Ergebnisse zum Beispiel übergeben werden an:
- Kreditbearbeitungssysteme
- Kreditentscheidungssysteme
- Kernbankensysteme
- Dokumentenmanagementsysteme
- digitale Kunden- und Kreditakten
- CRM-Systeme
- interne Prüf- und Bearbeitungsoberflächen
> Ihre Mitarbeitenden arbeiten weiterhin in den vertrauten Fachsystemen. Stapelweise bereitet den Vorgang im Hintergrund vor.

---
## Branchen-Landingpage: Versicherungen

*URL: dok.land/loesungen/branchen/versicherungen*

### Hero

**Überschrift:** Vom Leistungsantrag zum prüfbereiten Vorgang.

**Text:**
> Leistungsanträge, Rechnungen, Schadensmeldungen, Gutachten und Nachweise erreichen Versicherungen über viele unterschiedliche Wege und in immer neuen Formaten. Stapelweise trennt und sortiert die Unterlagen, ordnet sie dem richtigen Vertrag und Vorgang zu, liest die benötigten Angaben aus und gleicht sie mit vorhandenen Daten ab.
>
> Unvollständige oder widersprüchliche Fälle werden gekennzeichnet und gezielt an die Sachbearbeitung weitergegeben. Die fachliche Leistungs- oder Deckungsentscheidung bleibt bei Ihren Mitarbeitenden und in Ihren bestehenden Systemen.

**Buttons:** Leistungsantrag jetzt testen · Probelauf vereinbaren

**Hinweis im Hero:** Doppelt so schnelle Bearbeitung von Schadensfällen
*Gemessen in einem laufenden Kundenprojekt.*

### Kundenzitat

> „Früher mussten wir eingereichte Unterlagen einzeln öffnen, zuordnen und in unsere Systeme übertragen. Heute ist der Vorgang bereits vorbereitet, wenn die Leistungsbearbeitung ihn öffnet. Fehlende oder widersprüchliche Angaben sind direkt gekennzeichnet."
>
> **Entwurf zur Freigabe durch praenatura**

### Viele Dokumente. Viele Eingangswege. Ein geordneter Vorgang.

**Links** (Klappanzeige): Leistungsantrag · Schadensmeldung · Rechnung und Beleg · Kostenvoranschlag · Gutachten · Arztbericht · Heil- und Kostenplan · Versicherten-Korrespondenz

**Rechts** (Typewriter, orange): über das Kundenportal · per E-Mail · per Post und Scan · als Upload aus der App · über eine Schnittstelle

**Darunter:** direkt in Ihr Bestandsführungs- oder Schadenmanagementsystem.

### Souveränitäts-Leiste

**(orange)** Ihre Daten. Ihre Infrastruktur. Ihre Entscheidung. **(schwarz)** Lokal, in Ihrer VPC oder in der Cloud.

Badges: Lokaler oder VPC-Betrieb möglich · Keine Übertragung außerhalb der gewählten Betriebsumgebung · Nachvollziehbare Verarbeitungsschritte

### So funktioniert Stapelweise

**0. Konfiguration**
> Zu Beginn legen wir gemeinsam fest, welche Dokumentarten verarbeitet und welche Angaben daraus übernommen werden sollen.
> Das können zum Beispiel sein:
- Versicherungs- oder Vertragsnummer
- Name und Geburtsdatum
- Schaden- oder Leistungsfallnummer
- Rechnungsbetrag
- Rechnungs- und Leistungsdatum
- behandelnde Praxis oder leistungserbringende Stelle
- gemeldete Schadenhöhe
- Schadenzeitpunkt
- betroffene Sache oder Person
- eingereichte Nachweise
- Bearbeitungsstatus
> Die Verarbeitung wird an Ihre Produkte, Prüfregeln, Fachsysteme und internen Zuständigkeiten angepasst.

**1. Import**
> Leistungsanträge, Schadensmeldungen, Rechnungen und Nachweise gehen über Kundenportale, E-Mail, Post, Scanstrecken, Apps oder Schnittstellen ein.
> Stapelweise führt diese Unterlagen in einem zentralen Verarbeitungsschritt zusammen. Auch Nachreichungen können automatisch dem bereits bestehenden Vorgang zugeordnet werden.

**2. Splitting**
- **Sammeldokumente automatisch aufteilen:** Enthält eine eingereichte Datei mehrere Rechnungen, Anschreiben oder Nachweise, wird sie automatisch in einzelne Dokumente zerlegt.

**3. Extrahierung**
- **Dokumentart erkennen:** Stapelweise erkennt, ob es sich zum Beispiel um einen Leistungsantrag, eine Rechnung, ein Gutachten, einen Kostenvoranschlag oder eine Versicherten-Korrespondenz handelt.
> Stapelweise liest genau die Angaben aus, die für die weitere Bearbeitung benötigt werden.
> Dazu können gehören:
- Beträge und Währungen
- Rechnungs- und Leistungszeiträume
- Schadenzeitpunkt und Schadenort
- Beteiligte und Leistungserbringer
- Vertrags- und Fallnummern
- beschriebene Leistungen oder Schäden
- eingereichte Anlagen und Nachweise
> Originaldokument und ausgelesene Daten bleiben miteinander verbunden. Die Sachbearbeitung kann jederzeit nachvollziehen, aus welcher Stelle eines Dokuments eine Angabe stammt.

**4. Validierung**
- **Vertrag und Vorgang zuordnen:** Vertragsnummern, Fallnummern, Namen, Geburtsdaten und weitere eindeutige Angaben werden ausgelesen und mit den vorhandenen Stammdaten abgeglichen. So landen Dokumente in der richtigen digitalen Akte und beim passenden Leistungs- oder Schadenfall.
> Stapelweise trifft keine fachliche Leistungs-, Deckungs- oder Regulierungsentscheidung.
> Das System führt formale und regelbasierte Vorprüfungen durch. Dazu können gehören:
- Abgleich von Name, Geburtsdatum und Vertragsnummer
- Prüfung, ob erwartete Dokumente vorhanden sind
- Erkennung fehlender Seiten oder Anlagen
- Abgleich von Beträgen und Zeiträumen
- Erkennung möglicher Dubletten
- Vergleich von Angaben im Dokument mit dem bestehenden Vorgang
- Kennzeichnung unleserlicher oder widersprüchlicher Angaben
> Eindeutige Fälle können automatisiert weitergegeben werden. Unklare oder abweichende Fälle werden mit einem konkreten Prüfhinweis an die zuständigen Mitarbeitenden übergeben.

**5. Anreicherung**
> Die ausgelesenen und formal geprüften Angaben werden in das benötigte Datenformat übertragen und zusammen mit den Originaldokumenten bereitgestellt.

**6. Aktion**
> Je nach Systemlandschaft können die Ergebnisse zum Beispiel übergeben werden an:
- Bestandsführungssysteme
- Schaden- oder Leistungssysteme
- Dokumentenmanagementsysteme
- digitale Vertrags- und Kundenakten
- CRM-Systeme
- interne Prüf- und Bearbeitungsoberflächen
> Ihre Mitarbeitenden arbeiten weiterhin in den vertrauten Fachsystemen. Stapelweise bereitet den Vorgang im Hintergrund vor.

### Fallstudie

**Logo-Bereich:** praenatura
**Label:** Die Zusatzversicherung
**Titel:** Leistungsanträge schneller bearbeiten, ohne bei der Prüfung Abstriche zu machen
**Untertitel:** Wie praenatura eingereichte Rechnungen und Nachweise automatisch erfasst und für die Leistungsprüfung vorbereitet

Bei praenatura gehen Leistungsanträge mit Rechnungen, Belegen und ergänzenden Nachweisen über unterschiedliche Wege ein. Die Unterlagen müssen dem richtigen Vertrag zugeordnet, auf Vollständigkeit geprüft und für die Leistungsbearbeitung vorbereitet werden.

Stapelweise trennt die eingereichten Dokumente, erkennt die jeweilige Dokumentart und liest die benötigten Angaben aus. Vertragsdaten, Beträge und Zeiträume werden mit dem bestehenden Vorgang abgeglichen. Fehlende oder widersprüchliche Angaben werden für die zuständigen Mitarbeitenden gekennzeichnet.

Die fachliche Leistungsprüfung bleibt vollständig bei praenatura. Der vorbereitende Aufwand wird deutlich reduziert.

**Ergebnisse:**
- Doppelt so schnelle Bearbeitung von Schadensfällen
- 90 Prozent geringere Fehlerquote
- Ein Drittel weniger Rückfragen bei Versicherten

**Link:** Ganze Geschichte lesen → 

### Die Vorteile von Stapelweise für Versicherungen

- **Weniger manuelle Datenerfassung:** Beträge, Zeiträume, Vertragsnummern und weitere Angaben müssen nicht mehr wiederholt aus Dokumenten übertragen werden.
- **Vollständigere Vorgänge:** Fehlende Dokumente, unklare Zuordnungen und widersprüchliche Angaben werden frühzeitig sichtbar. Offene Punkte können gezielt geklärt werden, bevor die fachliche Bearbeitung beginnt.
- **Weniger Rückfragen:** Wenn Unterlagen von Anfang an richtig zugeordnet und formal geprüft sind, müssen Versicherte seltener dieselben Angaben oder Dokumente erneut einreichen.
- **Klare Übergabe an die Sachbearbeitung:** Unstimmigkeiten werden nicht stillschweigend übergangen. Sie werden mit einem konkreten Hinweis an die zuständigen Mitarbeitenden weitergegeben.
- **Verarbeitung unterschiedlicher Formate:** Stapelweise verarbeitet digitale Formulare, PDFs, Scans und Fotos. Nicht eindeutig lesbare Inhalte werden zur Prüfung markiert.
- **Integration in bestehende Fachsysteme:** Dokumente und strukturierte Daten werden an die angebundenen Bestands-, Schaden-, Leistungs- oder Dokumentenmanagementsysteme übergeben.
- **Flexibles Betriebsmodell:** Stapelweise kann lokal, in einer kundenspezifischen VPC oder als Cloud-Lösung betrieben werden. Das Betriebsmodell wird an Ihre Anforderungen an Datenschutz, Informationssicherheit und Systemarchitektur angepasst.
  *Link:* Mehr zu den Optionen erfahren → (führt zur Seite Lokale KI)

### Für wen sich Stapelweise lohnt

- **Für die Leistungsbearbeitung:** Rechnungen, Anträge und Nachweise liegen bereits getrennt, zugeordnet und ausgelesen vor. Die Bearbeitung kann direkt mit dem fachlichen Fall beginnen.
- **Für die Schadenbearbeitung:** Schadensmeldungen, Gutachten, Rechnungen und Nachreichungen werden dem richtigen Vorgang zugeordnet. Fehlende oder abweichende Angaben sind sofort sichtbar.
- **Für Kundenservice und Operations:** Der Bearbeitungsstand ist leichter nachvollziehbar. Rückfragen können gezielter beantwortet und fehlende Unterlagen konkret benannt werden.
- **Für IT und Unternehmensarchitektur:** Stapelweise wird an bestehende Fachsysteme angebunden und kann lokal, in einer VPC oder in der Cloud betrieben werden.
- **Für Revision und Compliance:** Verarbeitungsschritte, automatische Prüfhinweise und manuelle Korrekturen können nachvollziehbar protokolliert werden.

### Warum Stapelweise für Versicherungen?

- **Dokumente statt Vorlagen verarbeiten:** Stapelweise arbeitet nicht nur mit starren Formularvorlagen. Auch neue oder abweichende Layouts können verarbeitet werden. Unsichere Erkennungen werden zur Prüfung gekennzeichnet.
- **Der Mensch bleibt in der Entscheidung:** Stapelweise bereitet Leistungs- und Schadenfälle vor. Fachliche Entscheidungen werden weiterhin durch qualifizierte Mitarbeitende und in den dafür vorgesehenen Systemen getroffen.
- **Regeln und Prüfungen passen zu Ihrem Prozess:** Dokumentarten, Datenfelder, Abgleichregeln und Übergaben werden an Ihre Produkte und internen Abläufe angepasst.
- **Original und Daten bleiben verbunden:** Jede ausgelesene Angabe kann zum zugrunde liegenden Dokument zurückverfolgt werden.
- **Keine zusätzliche Arbeitsoberfläche nötig:** Die Ergebnisse können direkt in die angebundenen Fachsysteme übertragen werden. Ihre Mitarbeitenden müssen nicht dauerhaft in einer weiteren Insellösung arbeiten.

### Sicherheit und Datenhoheit

**Überschrift:** Sie bestimmen, wo Ihre Daten verarbeitet werden

- **Lokal in Ihrem Haus:** Die Verarbeitung findet innerhalb Ihrer eigenen technischen Umgebung statt. Dokumente und Inhaltsdaten verlassen Ihr Netzwerk nicht.
- **In Ihrer VPC:** Die Verarbeitung findet in einer isolierten, für Sie eingerichteten Cloud-Umgebung statt. Dokumente und Inhaltsdaten werden nicht außerhalb dieser Betriebsumgebung übertragen.
- **Als Cloud-Lösung:** Für weniger restriktive Anwendungsfälle kann Stapelweise auch als verwaltete Cloud-Lösung betrieben werden. Speicherorte, Zugriffe und Auftragsverarbeitung werden vertraglich festgelegt.

Unabhängig vom gewählten Modell können Zugriffsrechte, Protokollierung, Speicherfristen und Schnittstellen an Ihre Anforderungen angepasst werden.

**Link:** Mehr über Betriebsmodelle und Datenhoheit erfahren

### Abschluss

**Überschrift:** Wie viel Bearbeitungszeit steckt heute noch in Ihrem Dokumenteneingang?

**Buttons:** 
- Button "Zum Schaufenster" → Bildunterschrift: Stapelweise an konkreten Beispielen erleben und testen
- Button "Probelauf vereinbaren" → Bildunterschrift: Was kann Stapelweise für Sie tun? Vereinbaren Sie ein persönliches Gespräch mit uns. 

---

> Die ausgelesenen und formal geprüften Angaben werden in das benötigte Datenformat übertragen und zusammen mit den Originaldokumenten bereitgestellt.
> Je nach Systemlandschaft können die Ergebnisse zum Beispiel übergeben werden an:
- Bestandsführungssysteme
- Schaden- oder Leistungssysteme
- Dokumentenmanagementsysteme
- digitale Vertrags- und Kundenakten
- CRM-Systeme
- interne Prüf- und Bearbeitungsoberflächen
> Ihre Mitarbeitenden arbeiten weiterhin in den vertrauten Fachsystemen. Stapelweise bereitet den Vorgang im Hintergrund vor.

---
## Branchen-Landingpage: Logistik und Spedition

*URL: dok.land/loesungen/branchen/logistik*

### Hero

**Überschrift:** Ablieferbeleg da. Rechnung raus.

**Text:**
> Frachtbriefe, Lieferscheine, Ablieferbelege und weitere Transportdokumente kommen als Handyfoto aus dem Fahrerhaus, als Scan vom Umschlagplatz oder per E-Mail von Auftraggebern und Partnern.
>
> Stapelweise erkennt die Dokumentart, ordnet den Beleg der richtigen Sendung zu, liest die benötigten Angaben aus und gleicht sie mit dem Transportauftrag ab. Fehlende Unterschriften, unklare Fotos oder abweichende Packstückzahlen werden gekennzeichnet und gezielt an Disposition oder Abrechnung weitergegeben.

**Buttons:** Ablieferbeleg jetzt testen · Probelauf vereinbaren

**Hinweis im Hero:** Ablieferbelege in Minuten statt Tagen für die Abrechnung verfügbar.

### Ausgangslage: Wenn der Transport erledigt ist, der Beleg aber noch unterwegs

> Die Ware ist zugestellt. Im Transportmanagementsystem fehlt trotzdem noch der Abliefernachweis.
> Der unterschriebene Frachtbrief liegt im Fahrerhaus, ein Lieferschein wurde schief fotografiert und ein weiterer Beleg kommt später als Sammel-PDF aus dem Terminal. Bevor die Abrechnung starten kann, müssen Mitarbeitende die Unterlagen öffnen, der richtigen Sendung zuordnen und prüfen, ob die notwendigen Angaben vorhanden sind.
> Das verzögert den Rechnungslauf und bindet Zeit in Disposition, Service und Abrechnung.
> Stapelweise übernimmt die vorbereitenden Schritte:
- Belege aus unterschiedlichen Eingängen zusammenführen
- Sammelscans in einzelne Dokumente aufteilen
- Dokumentarten erkennen
- Sendungs- und Auftragsnummern auslesen
- Dokumente der richtigen Tour und Sendung zuordnen
- formale Abweichungen sichtbar machen
- Dokument und Daten an das Transportmanagementsystem übergeben

### Viele Belege. Viele Beteiligte. Eine vollständige Sendungsakte.

**Links** (Klappanzeige): CMR-Frachtbrief · Lieferschein · Ablieferbeleg · Transportauftrag · Palettenschein · Schadensvermerk · Ausfuhrbegleitdokument · Gefahrgutbeförderungspapier

**Rechts** (Typewriter, orange): als Foto aus dem Fahrerhaus · über die Fahrer-App · per E-Mail · aus der Scanstrecke · über eine Schnittstelle

**Darunter:** direkt in Ihr Transportmanagementsystem (TMS) oder die digitale Sendungsakte.

### Souveränitäts-Leiste

**(orange)** Ihre Daten. Ihre Infrastruktur. Ihre Entscheidung. **(schwarz)** Lokal, in Ihrer VPC oder in der Cloud.

Badges: Lokaler oder VPC-Betrieb möglich · Keine Übertragung außerhalb der gewählten Betriebsumgebung · Nachvollziehbare Verarbeitungsschritte

### So funktioniert Stapelweise

**0. Konfiguration**
> Zu Beginn legen wir gemeinsam fest, welche Dokumentarten verarbeitet und welche Angaben daraus übernommen werden sollen.
> Die Konfiguration kann sich nach Auftraggeber, Verkehrsart, Standort und Prozess unterscheiden. So werden nur die Daten ausgelesen und geprüft, die für Disposition, Sendungsverfolgung, Abrechnung oder Zollabwicklung tatsächlich benötigt werden.
> Dazu können gehören:
- Transportauftrags- oder Sendungsnummer
- Frachtbriefnummer
- Absender und Empfänger
- Belade- und Entladestelle
- Lieferdatum und Zeitstempel
- Anzahl und Art der Packstücke
- Brutto- oder Ladegewicht
- Fahrzeug- und Kennzeichendaten
- Fahrername
- Empfangsbestätigung und Unterschrift
- Vorbehalte, Schäden oder Fehlmengen
- Palettenbewegungen
- MRN oder weitere Referenznummern aus Zolldokumenten

**1. Import**
> Transportdokumente gehen über Fahrer-Apps, E-Mail-Postfächer, Scanstrecken, Kundenportale oder Schnittstellen ein.
> Stapelweise führt die Dokumente in einem gemeinsamen Verarbeitungsschritt zusammen. Ein Foto aus dem Fahrerhaus kann dadurch ebenso verarbeitet werden wie ein mehrseitiges PDF aus dem Terminal.

**2. Splitting**
> Enthält eine Datei Belege aus mehreren Touren oder Sendungen, wird sie in einzelne Dokumente zerlegt. Zusammengehörige Seiten bleiben miteinander verbunden.

**3. Extrahierung**
> Stapelweise erkennt, ob es sich zum Beispiel um einen CMR-Frachtbrief, einen Lieferschein, einen Ablieferbeleg, einen Palettenschein oder einen Schadensvermerk handelt.
> Anschließend liest Stapelweise genau die Angaben aus, die für den jeweiligen Prozess benötigt werden.
> Bei Frachtbriefen und Ablieferbelegen können das zum Beispiel sein:
- Sendungs- und Frachtbriefnummer
- Absender und Empfänger
- Be- und Entladeort
- Anzahl der Packstücke
- Gewicht
- Zustelldatum und Uhrzeit
- Name oder Kennzeichnung des Empfängers
- Unterschrift oder Empfangsbestätigung
- Vorbehalte, Beschädigungen oder Fehlmengen
> Bei Zoll- und Exportdokumenten können definierte Referenzdaten wie MRN, Ausfuhrdatum, Versender, Empfänger oder Warenpositionen übernommen werden.

**4. Validierung**
> Sendungsnummern, Auftragsnummern, Absender, Empfänger, Kennzeichen und weitere eindeutige Angaben werden mit den vorhandenen Transportdaten abgeglichen. Unklare Zuordnungen werden nicht automatisch übernommen, sondern zur Prüfung vorgelegt.
> Stapelweise trifft keine rechtliche, zollfachliche oder gefahrgutrechtliche Entscheidung.
> Das System führt formale und regelbasierte Vorprüfungen durch. Dazu können gehören:
- Abgleich von Sendungs- und Auftragsnummer
- Vergleich von Empfänger und Lieferadresse
- Abgleich von Packstückzahl und Gewicht mit dem Transportauftrag
- Prüfung, ob erwartete Seiten vorhanden sind
- Erkennung fehlender Empfangsbestätigungen
- Kennzeichnung sichtbarer Vorbehalte oder Schadensvermerke
- Erkennung möglicher Dubletten
- Prüfung der Foto- und Scanqualität
- Kennzeichnung widersprüchlicher Datums- oder Zeitangaben
> Unvollständige oder abweichende Vorgänge werden mit einem konkreten Prüfhinweis an Disposition, Service, Zollteam oder Abrechnung weitergegeben.

**5. Anreicherung**
> Bereits strukturierte Auftragsdaten aus EDI oder dem Transportmanagementsystem dienen als Referenz für Zuordnung und Abgleich. Sie müssen nicht erneut aus einem Dokument ausgelesen werden.
> Stapelweise vergibt nicht eigenständig Zolltarifnummern oder Gefahrgutklassen. Solche Angaben können aus Dokumenten ausgelesen oder mit freigegebenen Stamm- und Auftragsdaten abgeglichen werden.
> Die ausgelesenen und formal vorgeprüften Angaben werden anschließend in das vereinbarte Datenformat übertragen und zusammen mit dem Originaldokument bereitgestellt.

**6. Aktion**
> Je nach Systemlandschaft können die Ergebnisse zum Beispiel übergeben werden an:
- Transportmanagementsysteme
- digitale Sendungsakten
- Abrechnungssysteme
- Dokumentenmanagementsysteme
- Zoll- und Exportanwendungen
- Lagerverwaltungssysteme
- Kundenportale
> Ihre Mitarbeitenden arbeiten weiterhin in den vertrauten Systemen. Stapelweise bereitet die Dokumente im Hintergrund vor.

### Typische Einsatzbereiche

- **Digitaler Belegrücklauf:** Fahrerinnen und Fahrer fotografieren den unterschriebenen Ablieferbeleg direkt nach der Zustellung. Stapelweise prüft die Bildqualität, liest die Sendungsdaten aus und ordnet den Beleg dem Transportauftrag zu.
- **Vorbereitung der Frachtabrechnung:** Abrechnungsrelevante Nachweise werden erkannt und der richtigen Sendung zugeordnet. Fehlende oder unklare Dokumente sind sichtbar, bevor die Rechnung erstellt wird.
- **Sammelscans aus Niederlassungen und Terminals:** Mehrere Frachtbriefe, Lieferscheine und Palettenbelege werden in einem Schritt gescannt. Stapelweise trennt die Dokumente und verteilt sie auf die zugehörigen Sendungsakten.
- **Reklamationen und Transportschäden:** Schadensvermerke, Fotos, Ablieferbelege und weitere Nachweise werden einem bestehenden Vorgang zugeordnet und für die Bearbeitung zusammengestellt.
- **Zoll- und Exportdokumente:** Referenznummern und weitere definierte Angaben werden aus Zolldokumenten übernommen und mit dem Transportauftrag abgeglichen. Die zollfachliche Prüfung bleibt bei den zuständigen Mitarbeitenden und Systemen.

### Beispielprozess

**Label:** Spedition und Stückgutverkehr

**Überschrift:** Vom Foto aus dem Fahrerhaus zur abrechnungsfähigen Sendung

> Nach der Zustellung fotografiert der Fahrer den unterschriebenen Ablieferbeleg. Das Bild ist leicht schief und enthält handschriftliche Ergänzungen.
>
> Stapelweise richtet das Foto aus, erkennt den Ablieferbeleg und liest Sendungsnummer, Empfänger, Lieferzeit und Packstückzahl aus. Die Angaben werden mit dem Transportauftrag abgeglichen.
>
> Die Sendungsnummer und der Empfänger stimmen überein. Bei der Packstückzahl gibt es jedoch eine Abweichung. Der Beleg wird deshalb nicht unbemerkt weitergegeben, sondern mit einem konkreten Prüfhinweis an die Disposition übermittelt.
>
> Nach der Klärung steht das Dokument zusammen mit den strukturierten Angaben für die Abrechnung bereit.

**Link:** Beispielprozess ansehen

### Die Vorteile von Stapelweise für Logistikunternehmen

- **Schnellere Abrechnung:** Ablieferbelege stehen kurz nach der Zustellung in der Sendungsakte bereit. Die Abrechnung muss nicht auf Papierbelege aus dem Fahrerhaus warten.
- **Weniger manuelle Zuordnung:** Auftrags- und Sendungsnummern werden automatisch erkannt und mit den vorhandenen Transportdaten abgeglichen.
- **Fehlende Nachweise früh erkennen:** Unterschriften, Seiten oder abrechnungsrelevante Dokumente können gezielt geprüft werden, bevor ein Vorgang in der Abrechnung hängen bleibt.
- **Auch für Fotos und Scans:** Stapelweise verarbeitet PDFs, Scans und Handyfotos. Unscharfe, abgeschnittene oder nicht eindeutig lesbare Inhalte werden zur Prüfung gekennzeichnet.
- **Dokument und Transportauftrag bleiben verbunden:** Das Originaldokument wird zusammen mit den ausgelesenen Angaben in der Sendungsakte abgelegt.
- **Anschluss an bestehende Systeme:** Dokumente und Daten werden an die angebundenen Transport-, Abrechnungs- oder Dokumentenmanagementsysteme übergeben.
- **Flexibles Betriebsmodell:** Stapelweise kann lokal, in einer kundenspezifischen VPC oder als Cloud-Lösung betrieben werden. Das Betriebsmodell wird an Ihre Anforderungen an Datenschutz, Informationssicherheit und Systemarchitektur angepasst.
  *Link:* Mehr zu den Optionen erfahren → (führt zur Seite Lokale KI)

### Für wen sich Stapelweise lohnt

- **Für die Disposition:** Belege und Abweichungen sind direkt am Transportauftrag sichtbar. Mitarbeitende müssen nicht in Postfächern, Fahrer-Chats und Scanordnern suchen.
- **Für die Abrechnung:** Abliefernachweise werden automatisch der richtigen Sendung zugeordnet. Fehlende oder unklare Angaben sind vor dem Rechnungslauf sichtbar.
- **Für Fahrerinnen und Fahrer:** Ein Foto oder Upload genügt. Das manuelle Benennen, Zuordnen und Weiterleiten des Belegs entfällt.
- **Für Kundenservice und Reklamationsbearbeitung:** Transportdokumente, Empfangsbestätigungen und Schadensvermerke sind in der Sendungsakte schnell auffindbar.
- **Für Zoll und Export:** Definierte Angaben aus Zoll- und Exportdokumenten stehen strukturiert zur Verfügung. Fachliche Entscheidungen bleiben beim zuständigen Team.
- **Für IT und Prozessmanagement:** Stapelweise wird an bestehende Systeme angebunden und kann lokal, in einer VPC oder in der Cloud betrieben werden.

### Warum Stapelweise für Logistik und Spedition?

- **Unterschiedliche Belegformate statt starrer Vorlagen:** Stapelweise verarbeitet Dokumente verschiedener Auftraggeber und Partner. Unsichere Erkennungen werden zur Prüfung gekennzeichnet.
- **Dokumente und Auftragsdaten zusammenbringen:** Vorhandene Daten aus dem Transportmanagementsystem dienen als Referenz für Zuordnung und Plausibilitätschecks.
- **Der Mensch bleibt bei Abweichungen im Prozess:** Stapelweise bereitet vor und kennzeichnet Unstimmigkeiten. Disposition, Abrechnung und Fachbereiche entscheiden über die weitere Bearbeitung.
- **Original und Daten bleiben verbunden:** Jede ausgelesene Angabe kann zum zugrunde liegenden Dokument zurückverfolgt werden.
- **Keine zusätzliche Arbeitsoberfläche nötig:** Die Ergebnisse können direkt in die angebundenen Systeme übertragen werden.

### Sicherheit und Datenhoheit

**Überschrift:** Sie bestimmen, wo Transport- und Kundendaten verarbeitet werden

- **Lokal an Ihrem Standort:** Die Verarbeitung findet innerhalb Ihrer eigenen technischen Umgebung statt. Dokumente und Inhaltsdaten verlassen Ihr Netzwerk nicht.
- **In Ihrer VPC:** Die Verarbeitung findet in einer isolierten, für Sie eingerichteten Cloud-Umgebung statt. Dokumente und Inhaltsdaten werden nicht außerhalb dieser Betriebsumgebung übertragen.
- **Als Cloud-Lösung:** Stapelweise kann auch als verwaltete Cloud-Lösung betrieben werden. Speicherorte, Zugriffe und Auftragsverarbeitung werden vertraglich festgelegt.

> Unabhängig vom gewählten Modell können Zugriffsrechte, Protokollierung, Speicherfristen und Schnittstellen an Ihre Anforderungen angepasst werden.

**Link:** Mehr über Betriebsmodelle und Datenhoheit erfahren

### Abschluss

**Überschrift:** Wie lange warten Sie heute auf den letzten Beleg einer Sendung?

> Testen Sie Stapelweise mit einem typischen Frachtbrief, Lieferschein oder Ablieferbeleg. Gemeinsam prüfen wir, welche Angaben zuverlässig erkannt werden, welche formalen Prüfungen sinnvoll sind und wie die Übergabe an Ihr Transportmanagementsystem aussehen kann.

**Buttons:** Eigenen Beleg testen · Probelauf vereinbaren

---

## Branchen-Landingpage: Steuerberatung und Wirtschaftsprüfung

*URL: dok.land/loesungen/branchen/steuerberatung*

### Hero

**Überschrift:** Mandantenunterlagen geordnet, bevor die Bearbeitung beginnt.

**Text:**
> Eingangsrechnungen, Kassenbelege, Kontoauszüge, Verträge und Jahresabschlussunterlagen kommen über Portale, E-Mail, Uploads und Scanstrecken herein. Stapelweise trennt und sortiert die Dokumente, ordnet sie dem richtigen Mandat und Zeitraum zu und liest die benötigten Angaben aus.
>
> Formale Fehler, mögliche Dubletten und widersprüchliche Werte werden gekennzeichnet und gezielt an die zuständigen Fachkräfte weitergegeben. Buchung, steuerliche Würdigung und Prüfungsurteil bleiben bei Ihrer Kanzlei.

**Buttons:** Beleg jetzt testen · Probelauf vereinbaren

**Hinweis im Hero:** Weniger sortieren und übertragen. Mehr Zeit für Prüfung und Beratung.

### Ausgangslage: Digital eingereicht heißt noch nicht verarbeitungsfertig

> Mandantinnen und Mandanten liefern Unterlagen auf sehr unterschiedliche Weise.
> Eine Rechnung kommt als E-Rechnung, die nächste als PDF-Anhang und der Bewirtungsbeleg als Handyfoto. Ein mehrseitiger Kontoauszug liegt zwischen Verträgen und Kassenberichten in einem Sammelscan. Für den Jahresabschluss werden weitere Nachweise später und über andere Kanäle nachgereicht.
> Bevor die fachliche Arbeit beginnen kann, müssen Kanzleien deshalb häufig:
- Dokumente trennen und benennen
- Unterlagen dem richtigen Mandat zuordnen
- Belegangaben übertragen
- Wirtschaftsjahr und Leistungszeitraum bestimmen
- mögliche Dubletten erkennen
- fehlende oder unvollständige Unterlagen feststellen
- Belege für Rückfragen und Prüfung auffindbar halten
> Stapelweise übernimmt diese vorbereitenden Schritte und übergibt Dokumente und Daten an die bestehenden Kanzlei- und Rechnungswesensysteme.

### Viele Dokumente. Viele Mandate. Eine geordnete Bearbeitung.

**Links** (Klappanzeige): Eingangsrechnung · Ausgangsrechnung · Kassenbeleg · Kontoauszug · Vertrag · Steuerbescheid · Lohnunterlage · Jahresabschlussnachweis

**Rechts** (Typewriter, orange): über das Mandantenportal · per E-Mail · als mobiler Upload · aus der Scanstrecke · über eine Schnittstelle

**Darunter:** direkt in Ihre DATEV-Anwendungen oder Ihr Kanzleimanagementsystem.

### Souveränitäts-Leiste

**(orange)** Ihre Mandate. Ihre Infrastruktur. Ihre Entscheidung. **(schwarz)** Lokal, in Ihrer VPC oder in der Cloud.

Badges: Lokaler oder VPC-Betrieb möglich · Keine Übertragung außerhalb der gewählten Betriebsumgebung · Originalbeleg und Daten bleiben verbunden

### So funktioniert Stapelweise

**0. Konfiguration**
> Zu Beginn legen wir gemeinsam fest, welche Dokumentarten verarbeitet und welche Angaben daraus übernommen werden sollen.
> Die Konfiguration kann sich nach Mandat, Buchungskreis, Leistungsbereich und Zielsystem unterscheiden.
> Dazu können gehören:
- Mandant und Buchungskreis
- Belegart
- Belegnummer
- Beleg- und Buchungsdatum
- Leistungs- oder Abrechnungszeitraum
- Rechnungssteller und Rechnungsempfänger
- Netto-, Steuer- und Bruttobetrag
- Steuersatz und Steuerbetrag
- Währung
- Zahlungsziel
- Bankverbindung
- Bestell- oder Vertragsreferenz
- Kostenstelle oder Projekt
- Wirtschaftsjahr
- Angaben aus Steuerbescheiden und Verträgen

**1. Import**
> Dokumente gehen über Mandantenportale, E-Mail-Postfächer, mobile Uploads, Scanstrecken oder Schnittstellen ein.
> Stapelweise führt diese Eingänge in einem gemeinsamen Verarbeitungsschritt zusammen. Bereits strukturierte E-Rechnungen werden als strukturierte Daten übernommen. PDF- und Bildbelege werden ausgelesen.
> Das empfangene Originalformat bleibt erhalten und wird mit den daraus übernommenen Daten verbunden.

**2. Splitting**
> Enthält eine PDF-Datei mehrere Rechnungen, Kontoauszüge oder Verträge, wird sie in einzelne Dokumente zerlegt. Zusammengehörige Seiten bleiben miteinander verbunden.

**3. Extrahierung**
> Stapelweise erkennt, ob es sich zum Beispiel um eine Eingangsrechnung, einen Kassenbeleg, einen Kontoauszug, einen Vertrag, einen Steuerbescheid oder eine Lohnunterlage handelt.
> Anschließend liest Stapelweise genau die Angaben aus, die für Buchführung, Jahresabschluss, Steuerdeklaration oder Prüfung benötigt werden.
> Bei Rechnungen und Belegen können das zum Beispiel sein:
- Rechnungsaussteller und Rechnungsempfänger
- Rechnungsnummer
- Rechnungsdatum
- Leistungszeitraum
- Netto-, Steuer- und Bruttobetrag
- Umsatzsteuersatz
- Zahlungsziel
- IBAN
- Bestell-, Projekt- oder Vertragsreferenz
> Bei Kontoauszügen, Verträgen, Steuerbescheiden und Abschlussunterlagen können weitere definierte Angaben übernommen werden.
> Jeder ausgelesene Wert bleibt mit seiner Fundstelle im Originaldokument verbunden.

**4. Validierung**
> Mandantennummern, Unternehmensnamen, Steuernummern, Bankverbindungen, Zeiträume und weitere Referenzen werden mit den vorhandenen Stammdaten abgeglichen. Unklare Zuordnungen werden nicht automatisch übernommen, sondern zur Prüfung vorgelegt.
> Stapelweise nimmt keine abschließende steuerliche Würdigung und keine Buchungsfreigabe vor.
> Das System führt formale und regelbasierte Vorprüfungen durch. Dazu können gehören:
- rechnerischer Abgleich von Netto, Steuer und Brutto
- Prüfung, ob definierte Rechnungsangaben vorhanden sind
- Abgleich von Mandant, Rechnungsempfänger und Buchungskreis
- Erkennung möglicher Dubletten
- Vergleich von Rechnungsnummer, Betrag und Lieferant mit vorhandenen Vorgängen
- Prüfung, ob Beleg- und Leistungszeitraum plausibel sind
- Kennzeichnung abweichender Bankverbindungen
- Erkennung fehlender Seiten oder Anlagen
- Markierung unleserlicher oder nicht eindeutig erkannter Angaben
> Ein Hinweis auf fehlende Rechnungsangaben ist eine formale Vorprüfung. Die rechtliche Bewertung, ob ein Dokument im konkreten Fall zum Vorsteuerabzug berechtigt oder wie ein Sachverhalt zu buchen ist, bleibt bei der zuständigen Fachkraft.

**5. Anreicherung**
> Kontierungsvorschläge können auf Grundlage freigegebener Regeln, Stammdaten und vorhandener Buchungsmuster erzeugt werden. Die fachliche Prüfung und Freigabe bleibt bei Ihrer Kanzlei.
> Die ausgelesenen und formal vorgeprüften Angaben werden anschließend in das vereinbarte Datenformat übertragen und zusammen mit dem Originaldokument bereitgestellt.

**6. Aktion**
> Je nach Systemlandschaft können die Ergebnisse zum Beispiel übergeben werden an:
- DATEV-Anwendungen
- Kanzleimanagementsysteme
- Dokumentenmanagementsysteme
- Finanzbuchführung
- Lohn- und Gehaltsabrechnung
- digitale Steuerakten
- Prüfungs- und Datenräume
- interne Freigabeoberflächen
> Ihre Mitarbeitenden arbeiten weiterhin in den vertrauten Systemen. Stapelweise bereitet die Unterlagen im Hintergrund vor.

### Typische Einsatzbereiche in der Steuerberatung

- **Laufende Finanzbuchführung:** Eingangsrechnungen, Ausgangsrechnungen und Kassenbelege werden getrennt, dem richtigen Mandat zugeordnet und mit den benötigten Belegdaten bereitgestellt.
- **Vorbereitende Buchführung:** Stapelweise kann Kontierungsvorschläge anhand freigegebener Regeln, Stammdaten und historischer Buchungen erzeugen. Unklare oder neue Sachverhalte werden zur fachlichen Prüfung vorgelegt.
- **Jahresabschluss:** Verträge, Saldenbestätigungen, Darlehensunterlagen, Anlagenachweise und weitere Abschlussunterlagen werden nach Mandat, Jahr und Sachgebiet geordnet.
- **Steuerdeklaration und Bescheidprüfung:** Steuerbescheide und weitere Nachweise können ausgelesen, der richtigen Steuerakte zugeordnet und für den Abgleich mit Erklärungsdaten vorbereitet werden.
- **Lohn und Personal:** Stundenzettel, variable Vergütungsangaben und weitere mandantenseitige Unterlagen können strukturiert an die Lohnbearbeitung übergeben werden. Elektronische Sozialversicherungsmeldungen bleiben in den dafür vorgesehenen Verfahren.

### Typische Einsatzbereiche in der Wirtschaftsprüfung

- **Unterlagen aus Datenräumen strukturieren:** Verträge, Rechnungen, Saldenbestätigungen, Beschlüsse und weitere Prüfungsnachweise werden erkannt, benannt und den vorgesehenen Prüfungsfeldern zugeordnet.
- **Stichprobenunterlagen zusammenstellen:** Angeforderte Nachweise können anhand von Belegnummern, Beträgen, Geschäftspartnern oder Zeiträumen gefunden und mit den zugehörigen Buchungsdaten verbunden werden.
- **Vollständigkeit formaler Anfragen prüfen:** Stapelweise kann kennzeichnen, welche angeforderten Dokumente vorliegen und welche Unterlagen noch fehlen.
- **Prüfungsnachweise auffindbar halten:** Dokumente, strukturierte Angaben und Fundstellen bleiben miteinander verbunden. Die Beurteilung, ob ein Prüfungsnachweis ausreichend und geeignet ist, bleibt beim Prüfungsteam.
- **Vertrags- und Beschlussanalyse vorbereiten:** Definierte Angaben wie Laufzeiten, Kündigungsfristen, Parteien, Beträge und Beschlussdaten können ausgelesen und für die fachliche Prüfung bereitgestellt werden.

### Beispielprozess

**Label:** Steuerkanzlei mit laufender Finanzbuchführung

**Überschrift:** Vom Sammel-PDF zur prüfbereiten Belegsammlung

> Ein Mandant lädt eine PDF-Datei mit 180 Seiten hoch. Darin befinden sich Eingangsrechnungen, Kassenbelege, Kontoauszüge und zwei Verträge.
>
> Stapelweise zerlegt die Datei in einzelne Dokumente, erkennt die Belegarten und ordnet sie dem Mandat und Buchungszeitraum zu. Rechnungsnummern, Daten, Beträge und Steuersätze werden ausgelesen.
>
> Drei Rechnungen weisen dieselbe Rechnungsnummer und denselben Betrag auf. Eine weitere Rechnung enthält eine neue Bankverbindung. Diese Fälle werden mit konkreten Prüfhinweisen an die zuständige Fachkraft übergeben.
>
> Die fachliche Kontierung und Buchungsfreigabe bleiben bei der Kanzlei.

**Link:** Beispielprozess ansehen

### Die Vorteile von Stapelweise für Kanzleien und Prüfungsgesellschaften

- **Weniger Sortieren und Übertragen:** Dokumente werden automatisch getrennt, benannt und dem richtigen Mandat zugeordnet. Benötigte Belegdaten stehen strukturiert bereit.
- **E-Rechnung und Scan gemeinsam verarbeiten:** Strukturierte E-Rechnungen, PDFs, Scans und Fotos können in einem gemeinsamen Prozess verarbeitet werden.
- **Auffälligkeiten früh erkennen:** Mögliche Dubletten, fehlende Angaben und widersprüchliche Werte werden vor der fachlichen Bearbeitung sichtbar.
- **Originalformat erhalten:** Der empfangene Beleg bleibt erhalten und wird mit den ausgelesenen Daten verbunden.
- **Fachliche Verantwortung bleibt in der Kanzlei:** Stapelweise bereitet vor und macht Unsicherheiten sichtbar. Buchung, steuerliche Beurteilung und Prüfungsurteil bleiben bei qualifizierten Fachkräften.
- **Anschluss an bestehende Systeme:** Dokumente und strukturierte Daten werden an die angebundenen Kanzlei-, Rechnungswesen- oder Prüfungssysteme übergeben.
- **Flexibles Betriebsmodell:** Stapelweise kann lokal, in einer kundenspezifischen VPC oder als Cloud-Lösung betrieben werden.
  *Link:* Mehr zu den Optionen erfahren → (führt zur Seite Lokale KI)

### Für wen sich Stapelweise lohnt

- **Für Steuerfachangestellte und Fachassistenzen:** Unterlagen liegen bereits getrennt, zugeordnet und ausgelesen vor. Die Bearbeitung beginnt mit Prüfung statt mit Ablage.
- **Für Steuerberaterinnen und Steuerberater:** Unklare oder auffällige Fälle werden gezielt vorgelegt. Routinetätigkeiten binden weniger fachliche Zeit.
- **Für Lohnteams:** Mandantenseitige Nachweise und Änderungsunterlagen können strukturiert vorbereitet werden.
- **Für Wirtschaftsprüferinnen und Wirtschaftsprüfer:** Prüfungsunterlagen sind nach Vorgang und Prüfungsfeld erschlossen. Fundstellen bleiben nachvollziehbar.
- **Für Kanzleiorganisation und IT:** Stapelweise wird an bestehende Systeme angebunden und kann lokal, in einer VPC oder in der Cloud betrieben werden.

### Warum Stapelweise für Steuerberatung und Wirtschaftsprüfung?

- **Mehr als reine Belegerkennung:** Stapelweise verbindet Dokumentart, Mandat, Zeitraum, Originalbeleg und strukturierte Daten.
- **Keine automatische fachliche Entscheidung:** Kontierungs- und Bearbeitungsvorschläge bleiben Vorschläge. Fachliche Prüfung und Freigabe erfolgen in der Kanzlei.
- **Unsicherheit wird sichtbar:** Nicht eindeutig erkannte Werte werden nicht stillschweigend übernommen, sondern zur Prüfung gekennzeichnet.
- **Unterschiedliche Dokumentwelten in einem Prozess:** E-Rechnungen, PDFs, Scans, Fotos, Verträge und Bescheide können gemeinsam verarbeitet werden.
- **Keine zusätzliche Arbeitsoberfläche nötig:** Die Ergebnisse können direkt in die angebundenen Systeme übertragen werden.

### Sicherheit und Datenhoheit

**Überschrift:** Sie bestimmen, wo Mandanten- und Prüfungsdaten verarbeitet werden

- **Lokal in Ihrer Kanzlei:** Die Verarbeitung findet innerhalb Ihrer eigenen technischen Umgebung statt. Dokumente und Inhaltsdaten verlassen Ihr Netzwerk nicht.
- **In Ihrer VPC:** Die Verarbeitung findet in einer isolierten, für Sie eingerichteten Cloud-Umgebung statt. Dokumente und Inhaltsdaten werden nicht außerhalb dieser Betriebsumgebung übertragen.
- **Als Cloud-Lösung:** Stapelweise kann auch als verwaltete Cloud-Lösung betrieben werden. Speicherorte, Zugriffe und Auftragsverarbeitung werden vertraglich festgelegt.

> Unabhängig vom gewählten Modell können Zugriffsrechte, Protokollierung, Speicherfristen und Schnittstellen an Ihre Anforderungen angepasst werden.

**Link:** Mehr über Betriebsmodelle und Datenhoheit erfahren

### Abschluss

**Überschrift:** Wie viel Handarbeit steckt heute noch zwischen Dokumenteneingang und fachlicher Bearbeitung?

> Testen Sie Stapelweise mit einem typischen Beleg, Vertrag oder Sammel-PDF. Gemeinsam prüfen wir, welche Angaben zuverlässig erkannt werden, welche formalen Prüfungen sinnvoll sind und wie die Übergabe an Ihre Kanzlei- oder Prüfungssysteme aussehen kann.

**Buttons:** Eigenes Dokument testen · Probelauf vereinbaren

---

## Branchen-Landingpage: Immobilienverwaltung

*URL: dok.land/loesungen/branchen/immobilienverwaltung*

### Hero

**Überschrift:** Jede Rechnung beim richtigen Objekt. Jeder Vorgang vollständig.

**Text:**
> Rechnungen, Zählerstände, Schadensmeldungen, Übergabeprotokolle und Beschlüsse erreichen Immobilienverwaltungen über Postfächer, Portale, Scans und Fotos.
>
> Stapelweise erkennt die Dokumentart, ordnet Unterlagen der richtigen Liegenschaft, Einheit und dem passenden Vorgang zu und liest die benötigten Angaben aus. Fehlende, widersprüchliche oder nicht eindeutig zuordenbare Informationen werden gekennzeichnet und gezielt an Objektbetreuung oder Buchhaltung weitergegeben.

**Buttons:** Rechnung jetzt testen · Probelauf vereinbaren

**Hinweis im Hero:** Weniger Suche und Nacharbeit vor Buchhaltung, Betriebskostenabrechnung und Eigentümerversammlung.

### Ausgangslage: Ein Dokument ohne Objektbezug ist nur die halbe Information

> Eine Handwerkerrechnung nennt eine Straße, aber keine interne Objektnummer. Ein Zählerstandfoto kommt ohne Dateinamen. Die Schadensmeldung verweist auf eine Wohnung, während der Kostenvoranschlag später über ein anderes Postfach eingeht.
> Bevor Immobilienverwaltungen arbeiten können, müssen sie deshalb immer wieder:
- Dokumente öffnen und zuordnen
- Liegenschaft und Einheit ermitteln
- Rechnungs- und Vertragsdaten übertragen
- Vorgänge aus mehreren Eingängen zusammenführen
- Kostenarten und Zeiträume prüfen
- fehlende Belege und Zählerstände nachfordern
- Unterlagen für Mieter, Eigentümer und Belegprüfung auffindbar halten
> Stapelweise bereitet diese Dokumente für die weitere Bearbeitung in der vorhandenen Verwaltungssoftware vor.

### Viele Unterlagen. Viele Objekte. Ein geordneter Vorgang.

**Links** (Klappanzeige): Handwerkerrechnung · Versorgerrechnung · Zählerstandfoto · Schadensmeldung · Übergabeprotokoll · Mietvertrag · Versammlungsprotokoll · Eigentümerbeschluss

**Rechts** (Typewriter, orange): über das Mieterportal · über das Eigentümerportal · per E-Mail · per Post und Scan · als Foto aus dem Objekt

**Darunter:** direkt in Ihre Hausverwaltungssoftware oder die Objekt- und Einheitenakte.

### Souveränitäts-Leiste

**(orange)** Ihre Daten. Ihre Infrastruktur. Ihre Entscheidung. **(schwarz)** Lokal, in Ihrer VPC oder in der Cloud.

Badges: Lokaler oder VPC-Betrieb möglich · Keine Übertragung außerhalb der gewählten Betriebsumgebung · Dokument und Objektbezug bleiben verbunden

### So funktioniert Stapelweise

**0. Konfiguration**
> Zu Beginn legen wir gemeinsam fest, welche Dokumentarten verarbeitet und welche Angaben daraus übernommen werden sollen.
> Die Konfiguration kann zwischen Mietverwaltung, WEG-Verwaltung, Gewerbeverwaltung und technischem Gebäudemanagement unterscheiden.
> Dazu können gehören:
- Liegenschaft und Objektnummer
- Gebäude, Einheit und Mietverhältnis
- Eigentümergemeinschaft
- Vertragspartner und Rechnungssteller
- Rechnungsnummer und Rechnungsdatum
- Leistungszeitraum
- Netto-, Steuer- und Bruttobetrag
- Kostenart und Gewerk
- Zählernummer
- Ablesedatum und Zählerstand
- Schadenart und Schadendatum
- Vertragsbeginn, Vertragsende und Kündigungsfrist
- Beschlussdatum und Beschlusstext
- Bearbeitungs- und Freigabestatus

**1. Import**
> Unterlagen gehen über Mieter- und Eigentümerportale, E-Mail-Postfächer, Post- und Scanstrecken, Apps oder Schnittstellen ein.
> Stapelweise führt die Dokumente in einem gemeinsamen Verarbeitungsschritt zusammen. Nachreichungen können einem bereits bestehenden Schaden-, Instandhaltungs- oder Abrechnungsvorgang zugeordnet werden.

**2. Splitting**
> Enthält ein Scan mehrere Rechnungen, Verträge oder Protokolle, wird er in einzelne Dokumente zerlegt. Zusammengehörige Seiten bleiben verbunden.

**3. Extrahierung**
> Stapelweise erkennt, ob es sich zum Beispiel um eine Handwerkerrechnung, eine Versorgerrechnung, ein Zählerstandfoto, eine Schadensmeldung, ein Übergabeprotokoll oder einen Eigentümerbeschluss handelt.
> Anschließend liest Stapelweise genau die Angaben aus, die für den jeweiligen Verwaltungsprozess benötigt werden.
> Bei Rechnungen können das zum Beispiel sein:
- Rechnungssteller
- Rechnungsnummer
- Rechnungsdatum
- Leistungszeitraum
- Leistungsort
- Objekt- oder Auftragsreferenz
- Gewerk
- Netto-, Steuer- und Bruttobetrag
- Zahlungsziel
- Bankverbindung
> Bei Zählerständen, Protokollen, Verträgen und Beschlüssen können unter anderem erkannt werden:
- Zählernummer und Zählerart
- Ablesedatum und Stand
- Raum oder Einheit
- Vertragsparteien
- Mietbeginn und Miethöhe
- Mängel und Schlüsselübergaben
- Beschlussdatum
- Tagesordnungspunkt
- beschlossener Inhalt
- Abstimmungsergebnis
> Originaldokument und ausgelesene Angaben bleiben miteinander verbunden.

**4. Validierung**
> Adressen, Objektnummern, Wohnungsnummern, Vertragsparteien, Zählernummern und weitere Referenzen werden mit den vorhandenen Stammdaten abgeglichen. Unklare Zuordnungen werden nicht automatisch übernommen, sondern zur Prüfung vorgelegt.
> Stapelweise trifft keine abschließende buchhalterische, mietrechtliche oder WEG-rechtliche Entscheidung.
> Das System führt formale und regelbasierte Vorprüfungen durch. Dazu können gehören:
- Abgleich von Adresse, Objektnummer und Einheit
- Vergleich von Rechnungsdaten mit Auftrag oder Vertrag
- Erkennung möglicher Dubletten
- Abgleich von Zählernummern mit dem Objektstamm
- Kennzeichnung großer Abweichungen zum vorherigen Zählerstand
- Prüfung, ob erwartete Seiten oder Anlagen vorhanden sind
- Zuordnung eines Vorgangs zu Miet- oder WEG-Verwaltung
- Erkennung widersprüchlicher Beträge, Zeiträume oder Vertragsparteien
- Markierung unleserlicher oder nicht eindeutig erkannter Angaben

**5. Anreicherung**
> Stapelweise kann eine Kostenart oder einen Umlageschlüssel aus den freigegebenen Stammdaten vorschlagen. Ob eine konkrete Position umlagefähig ist und wie sie abzurechnen ist, bleibt eine fachliche und rechtliche Entscheidung der Verwaltung.
> Die ausgelesenen und formal vorgeprüften Angaben werden anschließend in das vereinbarte Datenformat übertragen und zusammen mit dem Originaldokument bereitgestellt.

**6. Aktion**
> Je nach Systemlandschaft können die Ergebnisse zum Beispiel übergeben werden an:
- Hausverwaltungssoftware
- Objekt- und Einheitenakten
- Finanzbuchhaltung
- Betriebskostenabrechnung
- Vorgangs- und Ticketsysteme
- Dokumentenmanagementsysteme
- Eigentümer- und Mieterportale
- technische Gebäudemanagementsysteme
> Ihre Mitarbeitenden arbeiten weiterhin in den vertrauten Systemen. Stapelweise bereitet die Unterlagen im Hintergrund vor.

### Typische Einsatzbereiche in der Mietverwaltung

- **Eingangsrechnungen:** Handwerker- und Versorgerrechnungen werden dem richtigen Objekt und Leistungszeitraum zugeordnet. Beträge, Gewerk und weitere Angaben stehen strukturiert bereit.
- **Betriebskostenabrechnung:** Rechnungen, Zahlungsbelege, Zählerstände und Zeiträume werden geordnet zusammengeführt. Fehlende oder nicht eindeutig zugeordnete Unterlagen werden vor Beginn der Abrechnung sichtbar.
- **Mieterwechsel:** Mietverträge, Übergabeprotokolle, Zählerstände und weitere Unterlagen werden der richtigen Einheit und dem jeweiligen Ein- oder Auszug zugeordnet.
- **Schadens- und Instandhaltungsvorgänge:** Meldung, Fotos, Auftrag, Rechnung und Korrespondenz werden in einem Vorgang zusammengeführt.

### Typische Einsatzbereiche in der WEG-Verwaltung

- **Rechnungen und Wirtschaftsplan:** Rechnungen werden der richtigen Gemeinschaft, Liegenschaft und Kostenposition zugeordnet und für Buchhaltung und Abrechnung vorbereitet.
- **Eigentümerversammlungen:** Einladungen, Vollmachten, Anwesenheitslisten, Protokolle und Beschlussunterlagen werden erkannt und geordnet abgelegt.
- **Beschlusssammlung:** Beschlussdatum, Gegenstand und Ergebnis können aus Protokollen ausgelesen und für die Übernahme in die Beschlusssammlung vorbereitet werden. Die rechtliche Prüfung und verbindliche Führung der Beschlusssammlung bleiben bei der Verwaltung.
- **Maßnahmen und Sonderumlagen:** Beschlüsse, Angebote, Aufträge und Rechnungen werden dem gleichen Maßnahmenvorgang zugeordnet.

### Beispielprozess

**Label:** Miet- und WEG-Verwaltung

**Überschrift:** Von der Handwerkerrechnung zum richtigen Objekt und Vorgang

> Eine Rechnung geht per E-Mail ein. Sie nennt die Objektadresse, aber keine interne Objektnummer. Der zugehörige Auftrag liegt bereits in der Verwaltungssoftware.
>
> Stapelweise liest Rechnungssteller, Adresse, Rechnungsnummer, Leistungsdatum, Gewerk und Betrag aus. Die Objektadresse und der Auftrag werden mit den Stammdaten abgeglichen.
>
> Die Rechnung wird der richtigen Liegenschaft und dem bestehenden Instandhaltungsvorgang zugeordnet. Eine Position lässt sich nicht eindeutig einer Kostenart zuordnen und wird deshalb mit einem Prüfhinweis an die Buchhaltung weitergegeben.

**Link:** Beispielprozess ansehen

### Die Vorteile von Stapelweise für Immobilienverwaltungen

- **Weniger manuelle Objektzuordnung:** Adressen, Einheiten, Zählernummern und interne Referenzen werden mit dem Objektstamm abgeglichen.
- **Vollständigere Abrechnungsvorbereitung:** Rechnungen, Zahlungsbelege und Zählerstände sind geordnet verfügbar. Fehlende Unterlagen werden frühzeitig sichtbar.
- **Vorgänge statt verteilter Einzeldateien:** Meldungen, Angebote, Aufträge, Rechnungen und Korrespondenz werden zu einem nachvollziehbaren Vorgang zusammengeführt.
- **Schnellere Auskunft:** Dokumente sind über Objekt, Einheit, Vertragspartner und Vorgang auffindbar.
- **Vorschläge statt verdeckter Entscheidungen:** Kostenarten und Zuordnungen können vorgeschlagen werden. Unklare oder rechtlich relevante Fälle bleiben bei den zuständigen Mitarbeitenden.
- **Anschluss an bestehende Systeme:** Dokumente und Daten werden an die angebundene Verwaltungssoftware, Buchhaltung oder das Dokumentenmanagement übergeben.
- **Flexibles Betriebsmodell:** Stapelweise kann lokal, in einer kundenspezifischen VPC oder als Cloud-Lösung betrieben werden.
  *Link:* Mehr zu den Optionen erfahren → (führt zur Seite Lokale KI)

### Für wen sich Stapelweise lohnt

- **Für die Objektbetreuung:** Dokumente und Nachreichungen liegen beim richtigen Objekt und Vorgang, ohne dass jedes Postfach einzeln durchsucht werden muss.
- **Für die Buchhaltung:** Rechnungsdaten und Objektbezug sind vorbereitet. Auffälligkeiten und unklare Kostenarten werden gezielt vorgelegt.
- **Für die Betriebskostenabrechnung:** Belege, Zeiträume und Zählerstände stehen strukturiert bereit. Fehlende Unterlagen sind vor dem Abrechnungslauf sichtbar.
- **Für WEG-Verwalterinnen und WEG-Verwalter:** Beschlüsse, Protokolle, Vollmachten und Maßnahmenunterlagen können geordnet und für die weitere Bearbeitung vorbereitet werden.
- **Für Mieter- und Eigentümerservice:** Auskünfte lassen sich schneller beantworten, weil Unterlagen objekt- und vorgangsbezogen auffindbar sind.
- **Für IT und Prozessmanagement:** Stapelweise wird an bestehende Systeme angebunden und kann lokal, in einer VPC oder in der Cloud betrieben werden.

### Warum Stapelweise für Immobilienverwaltungen?

- **Objektbezug statt reiner Belegablage:** Stapelweise verbindet Dokumente mit Liegenschaft, Einheit, Vertrag und Vorgang.
- **Miet- und WEG-Verwaltung getrennt abbilden:** Dokumentarten und Regeln können an die unterschiedlichen Prozesse angepasst werden.
- **Der Mensch bleibt bei rechtlichen und buchhalterischen Entscheidungen im Prozess:** Stapelweise bereitet vor und kennzeichnet Unstimmigkeiten. Die verbindliche Bewertung bleibt bei der Verwaltung.
- **Original und Daten bleiben verbunden:** Jede ausgelesene Angabe kann zum zugrunde liegenden Dokument zurückverfolgt werden.
- **Keine zusätzliche Arbeitsoberfläche nötig:** Die Ergebnisse können direkt in die angebundenen Systeme übertragen werden.

### Sicherheit und Datenhoheit

**Überschrift:** Sie bestimmen, wo Mieter-, Eigentümer- und Objektdaten verarbeitet werden

- **Lokal in Ihrem Unternehmen:** Die Verarbeitung findet innerhalb Ihrer eigenen technischen Umgebung statt. Dokumente und Inhaltsdaten verlassen Ihr Netzwerk nicht.
- **In Ihrer VPC:** Die Verarbeitung findet in einer isolierten, für Sie eingerichteten Cloud-Umgebung statt. Dokumente und Inhaltsdaten werden nicht außerhalb dieser Betriebsumgebung übertragen.
- **Als Cloud-Lösung:** Stapelweise kann auch als verwaltete Cloud-Lösung betrieben werden. Speicherorte, Zugriffe und Auftragsverarbeitung werden vertraglich festgelegt.

> Unabhängig vom gewählten Modell können Zugriffsrechte, Protokollierung, Speicherfristen und Schnittstellen an Ihre Anforderungen angepasst werden.

**Link:** Mehr über Betriebsmodelle und Datenhoheit erfahren

### Abschluss

**Überschrift:** Wie viel Zeit verliert Ihre Verwaltung heute beim Zuordnen und Nachtragen?

> Testen Sie Stapelweise mit einer typischen Rechnung, einem Zählerstandfoto oder einem Übergabeprotokoll. Gemeinsam prüfen wir, welche Angaben zuverlässig erkannt werden, welche formalen Prüfungen sinnvoll sind und wie die Übergabe an Ihre Verwaltungssoftware aussehen kann.

**Buttons:** Eigenes Dokument testen · Probelauf vereinbaren

---

## Branchen-Landingpage: Personalabteilungen

*URL: dok.land/loesungen/branchen/personalabteilungen*

### Hero

**Überschrift:** Aus Personalunterlagen werden geordnete, durchsuchbare Akten.

**Text:**
> Arbeitsverträge, Personalfragebögen, Bescheinigungen, Änderungsvereinbarungen und Altakten erreichen Personalabteilungen über unterschiedliche Systeme und Eingangswege.
>
> Stapelweise erkennt die Dokumentart, ordnet Unterlagen der richtigen Person und Aktenkategorie zu, liest definierte Angaben aus und gleicht sie mit dem Personalstamm ab. Unklare Zuordnungen, fehlende Seiten und widersprüchliche Daten werden gekennzeichnet und gezielt an die Personalsachbearbeitung weitergegeben.

**Buttons:** Personalunterlage jetzt testen · Probelauf vereinbaren

**Hinweis im Hero:** 250 Aktenordner in sieben Tagen für die Systemmigration aufbereitet.

**Zusatz:** Ergebnis eines Kundenprojekts. Umfang, Dokumentqualität und Zielsystem bestimmen den Aufwand jedes Projekts.

### Zwei Aufgaben, die Personalteams besonders viel Zeit kosten

- **Altakten für ein neues System aufbereiten:** Vor einem HR-Systemwechsel liegen Personalunterlagen oft über Jahre gewachsen in Papierordnern, Netzlaufwerken und unterschiedlichen Ablagestrukturen. Die Akten müssen gescannt, in einzelne Dokumente getrennt, benannt, der richtigen Person zugeordnet und in die Kategorien des neuen Systems überführt werden.
- **Laufende Unterlagen richtig ablegen und übertragen:** Auch nach der Migration kommen weiter Arbeitsverträge, Änderungsvereinbarungen, Personalfragebögen, Bescheinigungen und Zeitnachweise herein.

> Stapelweise kann beide Aufgaben übernehmen: die strukturierte Migration historischer Akten und die laufende Verarbeitung neuer Personaldokumente.

### Viele Unterlagen. Viele Beschäftigte. Eine geordnete Personalakte.

**Links** (Klappanzeige): Personalfragebogen · Arbeitsvertrag · Änderungsvereinbarung · Arbeitszeugnis · Aufenthalts- und Arbeitserlaubnis · Qualifikationsnachweis · Zeitnachweis · Bescheinigung

**Rechts** (Typewriter, orange): über das HR-Portal · per E-Mail · aus der Hauspost · aus der Scanstrecke · über eine Schnittstelle

**Darunter:** direkt in Ihre digitale Personalakte oder Ihr Personalmanagementsystem.

### Souveränitäts-Leiste

**(orange)** Ihre Personaldaten. Ihre Infrastruktur. Ihre Entscheidung. **(schwarz)** Lokal, in Ihrer VPC oder in der Cloud.

Badges: Lokaler oder VPC-Betrieb möglich · Keine Übertragung außerhalb der gewählten Betriebsumgebung · Rollen und Zugriffe nach Aktenkategorie steuerbar

### So funktioniert Stapelweise

**0. Konfiguration**
> Zu Beginn legen wir gemeinsam fest, welche Dokumentarten verarbeitet, wie sie benannt und welchen Kategorien der digitalen Personalakte sie zugeordnet werden sollen.
> Die Konfiguration kann zwischen Altaktenmigration und laufendem Dokumenteneingang unterscheiden.
> Dazu können gehören:
- Personalnummer
- Name und Geburtsdatum
- Eintritts- und Austrittsdatum
- Vertragsart
- Befristungsbeginn und Befristungsende
- Arbeitszeit
- Tätigkeit und Organisationseinheit
- Standort
- Vergütungs- oder Entgeltangaben
- Probezeit
- Kündigungsfrist
- Gültigkeitsdauer von Erlaubnissen und Nachweisen
- Dokumentdatum
- Aktenkategorie
- vorgesehene Lösch- oder Prüffrist

**1. Import**
> Laufende Dokumente gehen über HR-Portale, E-Mail-Postfächer, Hauspost, Scanstrecken oder Schnittstellen ein.
> Für eine Migration werden Papierakten oder vorhandene digitale Bestände als Massenscan beziehungsweise Dateiablage übernommen.
> Stapelweise führt die Unterlagen in einem gemeinsamen Verarbeitungsschritt zusammen.

**2. Splitting**
> Ein eingescannter Personalordner wird in einzelne Dokumente zerlegt. Mehrseitige Arbeitsverträge, Zeugnisse oder Bescheinigungen bleiben zusammen.

**3. Extrahierung**
> Stapelweise erkennt, ob es sich zum Beispiel um einen Arbeitsvertrag, eine Änderungsvereinbarung, einen Qualifikationsnachweis, ein Arbeitszeugnis oder einen Zeitnachweis handelt.
> Anschließend liest Stapelweise genau die Angaben aus, die für den jeweiligen HR-Prozess oder die Systemmigration benötigt werden.
> Bei Arbeitsverträgen und Änderungsvereinbarungen können das zum Beispiel sein:
- Vertragsparteien
- Eintrittsdatum
- Beginn und Ende einer Befristung
- Tätigkeit
- Organisationseinheit
- Standort
- vereinbarte Arbeitszeit
- Probezeit
- Kündigungsfrist
- Vergütungsangaben
- Datum und sichtbare Unterschriften
> Bei weiteren Unterlagen können unter anderem erkannt werden:
- Personalnummer
- Qualifikation und ausstellende Institution
- Gültigkeitsdauer eines Nachweises
- Arbeits- oder Aufenthaltserlaubnis
- Zeitraum eines Zeitnachweises
- Dokumentdatum und Aktenkategorie
> Originaldokument und ausgelesene Angaben bleiben miteinander verbunden.

**4. Validierung**
> Personalnummern, Namen, Geburtsdaten, Anschriften und weitere eindeutige Angaben werden mit dem vorhandenen Personalstamm abgeglichen. Dokumente mit unklarer Zuordnung werden nicht automatisch abgelegt, sondern zur Prüfung vorgelegt.
> Stapelweise trifft keine arbeitsrechtliche oder personalpolitische Entscheidung.
> Das System führt formale und regelbasierte Vorprüfungen durch. Dazu können gehören:
- Abgleich von Name, Geburtsdatum und Personalnummer
- Prüfung, ob alle Seiten eines Vertrags vorhanden sind
- Erkennung möglicher Dubletten
- Vergleich von Eintrittsdatum und Vertragsbeginn
- Kennzeichnung widersprüchlicher Arbeitszeit- oder Standortangaben
- Erkennung auslaufender Befristungen und Nachweise
- Prüfung, ob ein Dokument einer geschützten Aktenkategorie zuzuordnen ist
- Markierung unleserlicher oder nicht eindeutig erkannter Angaben
> Stapelweise kann sichtbare Unterschriften oder Stempel erkennen. Eine rechtliche Prüfung der Wirksamkeit oder Vollständigkeit eines Vertrags ersetzt das nicht.

**5. Anreicherung**
> Lösch- und Aufbewahrungsregeln werden nicht pauschal durch Stapelweise festgelegt. Sie werden aus den von Ihrem Unternehmen freigegebenen Vorgaben übernommen und den Dokumenten als Prüf- oder Löschfrist mitgegeben.
> Die ausgelesenen und formal vorgeprüften Angaben werden anschließend in das vereinbarte Datenformat übertragen und zusammen mit dem Originaldokument bereitgestellt.

**6. Aktion**
> Je nach Systemlandschaft können die Ergebnisse zum Beispiel übergeben werden an:
- digitale Personalakten
- Personalmanagementsysteme
- Lohn- und Gehaltsabrechnung
- Zeitwirtschaft
- Dokumentenmanagementsysteme
- Onboarding- und Offboarding-Prozesse
- interne Freigabeoberflächen
> Ihre Mitarbeitenden arbeiten weiterhin in den vertrauten Systemen. Stapelweise bereitet die Unterlagen im Hintergrund vor.

### Typische Einsatzbereiche

- **Migration von Papierakten:** Aktenordner werden gescannt, in einzelne Dokumente zerlegt, benannt und der richtigen Person sowie Aktenkategorie zugeordnet.
- **Migration aus Netzlaufwerken und Altsystemen:** Uneinheitlich benannte Dateien und bestehende digitale Unterlagen werden klassifiziert und für das neue HR-System aufbereitet.
- **Laufender Dokumenteneingang:** Arbeitsverträge, Änderungsvereinbarungen, Personalfragebögen und Bescheinigungen werden automatisch zugeordnet und mit den benötigten Angaben bereitgestellt.
- **Onboarding:** Personalfragebogen, Vertrag, Qualifikationsnachweise und weitere Unterlagen werden zu einem vollständigen Vorgang zusammengeführt. Fehlende Dokumente werden sichtbar.
- **Vertrags- und Fristenmanagement:** Befristungen, Probezeiten sowie Gültigkeitszeiträume von Erlaubnissen und Nachweisen können aus Dokumenten übernommen und für das Fristenmanagement bereitgestellt werden.
- **Lohnvorbereitung:** Zeitnachweise, variable Vergütungsangaben und weitere interne Unterlagen können strukturiert an die Lohnabrechnung übergeben werden. Elektronische Arbeitsunfähigkeitsdaten und Sozialversicherungsmeldungen bleiben in den gesetzlich vorgesehenen elektronischen Meldeverfahren. Stapelweise kann ergänzende Dokumente und Ausnahmen verarbeiten, ersetzt diese Verfahren aber nicht.

### Fallstudie

**Label:** Personalabteilung eines mittelständischen Unternehmens

**Überschrift:** Von 250 Aktenordnern zu strukturierten digitalen Personalakten

> Vor einem HR-Systemwechsel lagen die Personalunterlagen des Unternehmens in 250 Papierordnern vor. Die Akten waren über Jahre gewachsen und enthielten unterschiedliche Dokumenttypen, Ablagelogiken und handschriftliche Ergänzungen.
>
> Stapelweise teilte die Scans in einzelne Dokumente auf, erkannte die Dokumentarten und ordnete sie den richtigen Beschäftigten und Aktenkategorien zu. Unsichere oder widersprüchliche Fälle wurden für die manuelle Prüfung markiert.
>
> Innerhalb von sieben Tagen lagen die Unterlagen strukturiert für die Migration in das neue System vor.

**Ergebnis:** 250 Aktenordner in sieben Tagen aufbereitet

**Link:** Ganze Geschichte lesen

### Die Vorteile von Stapelweise für Personalabteilungen

- **Schnellere Aktenmigration:** Papierakten und uneinheitliche Dateiablagen werden systematisch in die Struktur des neuen HR-Systems überführt.
- **Weniger manuelle Ablage:** Dokumentart, Beschäftigte oder Beschäftigter und Aktenkategorie werden automatisch erkannt und abgeglichen.
- **Vollständigere Personalakten:** Fehlende Seiten, unklare Zuordnungen und widersprüchliche Angaben werden sichtbar, bevor Unterlagen in das Zielsystem übernommen werden.
- **Fristen aus Dokumenten übernehmen:** Befristungen und Gültigkeitszeiträume können erkannt und an das Fristenmanagement übergeben werden.
- **Schutzbedürftige Inhalte differenziert behandeln:** Aktenkategorien, Rollen und Zugriffe können nach Ihren internen Vorgaben getrennt werden.
- **Anschluss an bestehende Systeme:** Dokumente und strukturierte Daten werden an die angebundene Personalakte, das HR-System oder die Lohnabrechnung übergeben.
- **Flexibles Betriebsmodell:** Stapelweise kann lokal, in einer kundenspezifischen VPC oder als Cloud-Lösung betrieben werden.
  *Link:* Mehr zu den Optionen erfahren → (führt zur Seite Lokale KI)

### Für wen sich Stapelweise lohnt

- **Für Personalsachbearbeitung und HR Operations:** Unterlagen liegen bereits getrennt, benannt und der richtigen Person zugeordnet vor. Mitarbeitende prüfen Ausnahmen statt jede Datei einzeln abzulegen.
- **Für die Personalleitung:** Aktenbestände werden transparenter. Fristen und unvollständige Vorgänge sind gezielter sichtbar.
- **Für Lohn- und Gehaltsabrechnung:** Relevante interne Unterlagen können strukturiert vorbereitet und an das Abrechnungssystem übergeben werden.
- **Für Mitarbeitendenservice:** Bescheinigungen und Vertragsunterlagen sind schneller auffindbar, sofern die anfragende Person zugriffsberechtigt ist.
- **Für Datenschutz und Informationssicherheit:** Betriebsmodell, Rollen, Aktenkategorien, Protokollierung und Speicherorte können an die eigenen Anforderungen angepasst werden.
- **Für IT und HR-Systemverantwortliche:** Stapelweise bereitet Altdaten für Migrationen vor und bindet den laufenden Dokumenteneingang an bestehende Systeme an.

### Warum Stapelweise für Personalabteilungen?

- **Migration und laufender Betrieb in einem System:** Stapelweise kann Altbestände erschließen und anschließend neue Personaldokumente laufend verarbeiten.
- **Keine „selbstpflegende" Blackbox:** Unklare Zuordnungen und unsichere Werte werden gekennzeichnet. Die Verantwortung bleibt bei den zuständigen Mitarbeitenden.
- **Aktenkategorien statt bloßer Volltextablage:** Dokumente werden nicht nur durchsuchbar, sondern nach Ihrer Aktenstruktur geordnet.
- **Original und Daten bleiben verbunden:** Jede ausgelesene Angabe kann zum zugrunde liegenden Dokument zurückverfolgt werden.
- **Keine zusätzliche Arbeitsoberfläche nötig:** Die Ergebnisse können direkt in die angebundenen HR-Systeme übertragen werden.

### Sicherheit und Datenhoheit

**Überschrift:** Sie bestimmen, wo Personaldaten verarbeitet werden

- **Lokal in Ihrem Unternehmen:** Die Verarbeitung findet innerhalb Ihrer eigenen technischen Umgebung statt. Dokumente und Inhaltsdaten verlassen Ihr Netzwerk nicht.
- **In Ihrer VPC:** Die Verarbeitung findet in einer isolierten, für Sie eingerichteten Cloud-Umgebung statt. Dokumente und Inhaltsdaten werden nicht außerhalb dieser Betriebsumgebung übertragen.
- **Als Cloud-Lösung:** Stapelweise kann auch als verwaltete Cloud-Lösung betrieben werden. Speicherorte, Zugriffe und Auftragsverarbeitung werden vertraglich festgelegt.

> Unabhängig vom gewählten Modell können Zugriffsrechte, Protokollierung, Speicher- und Löschregeln sowie Schnittstellen an Ihre Anforderungen angepasst werden.

**Link:** Mehr über Betriebsmodelle und Datenhoheit erfahren

### Abschluss

**Überschrift:** Welcher Aktenbestand oder Dokumentenprozess kostet Ihr Team heute am meisten Zeit?

> Testen Sie Stapelweise mit einem typischen Arbeitsvertrag, Personalfragebogen oder einem Ausschnitt aus einer Altakte. Gemeinsam prüfen wir, welche Angaben zuverlässig erkannt werden, welche Aktenstruktur benötigt wird und wie die Übergabe an Ihr HR-System aussehen kann.

**Buttons:** Eigenes Dokument testen · Probelauf vereinbaren

---

## Branchen-Landingpage: Hochschulverwaltung

*URL: dok.land/loesungen/branchen/hochschulverwaltung*

### Hero

**Überschrift:** Bewerbungsunterlagen vollständig im System, bevor die Prüfung beginnt.

**Text:**
> Zeugnisse, Fächer- und Notenübersichten, Sprachnachweise und weitere Anlagen kommen in unterschiedlichen Sprachen, Layouts und Dateiformaten herein. Stapelweise trennt und sortiert die Unterlagen, ordnet sie der richtigen Bewerbung zu, liest die benötigten Angaben aus und gleicht sie mit den Daten im Bewerbungsportal ab.
>
> Fehlende, widersprüchliche oder nicht eindeutig lesbare Angaben werden gekennzeichnet und gezielt an die zuständigen Mitarbeitenden weitergegeben. Die Prüfung der Zugangsvoraussetzungen und die Zulassungsentscheidung bleiben bei Ihrer Hochschule.

**Buttons:** Zeugnis jetzt testen · Probelauf vereinbaren

**Hinweis im Hero:** Weniger abtippen. Weniger pauschale Rückfragen. Mehr Zeit für die eigentliche Zulassungsprüfung.

### Ausgangslage: Wenn aus einer Online-Bewerbung wieder Handarbeit wird

> Die Bewerbung selbst ist meist digital. Die entscheidenden Nachweise sind es häufig nur auf den ersten Blick.
>
> Zeugnisse werden als mehrseitige PDFs hochgeladen, Transcripts als Handyfoto nachgereicht und Übersetzungen von den Originaldokumenten getrennt eingereicht. Dateinamen sind nicht eindeutig, Seiten fehlen und Angaben im Formular stimmen nicht immer mit den Nachweisen überein.
>
> Gerade in den Wochen vor Bewerbungsschluss entsteht so viel wiederkehrende Arbeit:
- Dokumente öffnen und einzeln sichten
- Anlagen der richtigen Bewerbung zuordnen
- Zeugnisdaten manuell übertragen
- fehlende Nachweise feststellen
- Bewerbende um konkrete Nachreichungen bitten
- unklare Fälle an Fachbereiche oder Anerkennungsstellen weitergeben
> Stapelweise übernimmt die vorbereitenden Schritte und legt einen geordneten, prüfbereiten Vorgang im Campus-Management-System ab.

### Viele Nachweise. Viele Varianten. Eine geordnete Bewerbungsakte.

**Links** (Klappanzeige): Hochschulzugangsberechtigung · Abschlussurkunde · Fächer- und Notenübersicht · Transcript of Records · Sprachnachweis · Vorprüfungsdokumentation · Berufs- und Praktikumsnachweis · Immatrikulationsunterlage

**Rechts** (Typewriter, orange): über das Bewerbungsportal · über das Campus-Management-System · per Datei-Upload · per Post und Scan · über eine Schnittstelle

**Darunter:** direkt in Ihr Campus-Management-System oder die digitale Bewerbungsakte.

### Souveränitäts-Leiste

**(orange)** Ihre Daten. Ihre Infrastruktur. Ihre Entscheidung. **(schwarz)** Lokal, in Ihrer VPC oder in der Cloud.

Badges: Lokaler oder VPC-Betrieb möglich · Keine Übertragung außerhalb der gewählten Betriebsumgebung · Nachvollziehbare Verarbeitungsschritte

### So funktioniert Stapelweise

**0. Konfiguration**
> Zu Beginn legen wir gemeinsam fest, welche Dokumentarten in einem Bewerbungs- oder Immatrikulationsverfahren erwartet werden und welche Angaben daraus übernommen werden sollen.
> Die Konfiguration kann sich nach Studiengang, Abschlussart, Bewerbungsgruppe und Semester unterscheiden. So werden nur die Daten ausgelesen und geprüft, die für das jeweilige Verfahren tatsächlich benötigt werden.
> Dazu können gehören:
- Bewerbungs- oder Vorgangsnummer
- Name und Geburtsdatum
- Art der Hochschulzugangsberechtigung
- Ausstellungsdatum und ausstellende Institution
- Ausstellungsland
- Abschlussart und Studienfach
- Abschlussdatum
- Gesamt- oder Durchschnittsnote
- Punktzahl und ausgewiesene Notenskala
- Module, Einzelnoten und Leistungspunkte
- Sprachnachweis, Niveau und Prüfungsdatum
- Dauer von Berufstätigkeit oder Praktikum
- Status und Gültigkeit eines Nachweises

**1. Import**
> Bewerbungen und Nachreichungen gehen über Bewerbungsportale, Campus-Management-Systeme, Datei-Uploads oder Scanstrecken ein.
> Stapelweise übernimmt die Dokumente aus den vereinbarten Eingängen und führt sie in einem gemeinsamen Verarbeitungsschritt zusammen. Später eingereichte Unterlagen können dem bereits bestehenden Vorgang zugeordnet werden.

**2. Splitting**
- **Mehrteilige Dateien automatisch aufteilen:** Enthält eine PDF-Datei mehrere Zeugnisse, Übersetzungen oder Nachweise, wird sie in die einzelnen Dokumente zerlegt. Zusammengehörige Seiten bleiben miteinander verbunden.

**3. Extrahierung**
- **Dokumentart erkennen:** Stapelweise erkennt, ob es sich zum Beispiel um eine Hochschulzugangsberechtigung, eine Abschlussurkunde, ein Transcript of Records, einen Sprachnachweis oder eine Vorprüfungsdokumentation handelt.
> Stapelweise liest genau die Angaben aus, die für den jeweiligen Studiengang und Verfahrensschritt benötigt werden.
> Bei Schul- und Hochschulzeugnissen können das zum Beispiel sein:
- Art und Bezeichnung des Abschlusses
- ausstellende Schule oder Hochschule
- Land und Ort der Institution
- Abschluss- und Ausstellungsdatum
- Gesamt- oder Durchschnittsnote
- Punktzahl und Notenskala
- Fächer oder Module
- Einzelnoten
- ECTS- oder andere Leistungspunkte
- ausgewiesener Studienzeitraum
> Bei weiteren Nachweisen können unter anderem erkannt werden:
- Art des Sprachzertifikats
- ausgewiesenes Sprachniveau
- Prüfungsergebnis und Prüfungsdatum
- Arbeitgeber oder Praktikumsstelle
- Tätigkeitszeitraum
- Umfang der Tätigkeit
- Verifizierungs- oder Dokumentennummer
> Originaldokument und ausgelesene Angaben bleiben miteinander verbunden. Mitarbeitende können jederzeit nachvollziehen, aus welcher Stelle eines Dokuments ein Wert übernommen wurde.

**4. Validierung**
- **Der richtigen Bewerbung zuordnen:** Bewerbungsnummern, Namen, Geburtsdaten und weitere eindeutige Angaben werden ausgelesen und mit den Daten im Bewerbungs- oder Campus-Management-System abgeglichen. Unklare Zuordnungen werden nicht automatisch übernommen, sondern zur Prüfung vorgelegt.
> Stapelweise trifft keine Zulassungs-, Anerkennungs- oder Anrechnungsentscheidung.
> Das System führt formale und regelbasierte Vorprüfungen durch. Dazu können gehören:
- Abgleich von Name, Geburtsdatum und Bewerbungsnummer
- Prüfung, ob die für das Verfahren erwarteten Dokumente vorliegen
- Erkennung fehlender Seiten
- Zuordnung von Originaldokument und eingereichter Übersetzung
- Abgleich von Abschlussurkunde und Fächer- und Notenübersicht
- Vergleich von Formularangaben und eingereichten Nachweisen
- Prüfung, ob ein ausgewiesener Zeitraum vollständig ist
- Kennzeichnung widersprüchlicher Noten, Daten oder Institutionen
- Erkennung möglicher Dubletten
- Markierung unleserlicher oder nicht eindeutig erkannter Angaben
> Stapelweise kann außerdem sichtbare formale Merkmale wie Stempel, Unterschriften, maschinelle Vermerke oder Verifizierungscodes erfassen. Eine Echtheitsprüfung oder amtliche Anerkennung ersetzt das nicht.
> Unvollständige oder widersprüchliche Vorgänge werden mit einem konkreten Prüfhinweis an die zuständigen Mitarbeitenden übergeben.

**5. Anreicherung**
> Die ausgelesenen und formal vorgeprüften Angaben werden in das vereinbarte Datenformat übertragen und zusammen mit den Originaldokumenten bereitgestellt.

**6. Aktion**
> Je nach Systemlandschaft können die Ergebnisse zum Beispiel übergeben werden an:
- Bewerbungs- und Zulassungssysteme
- Campus-Management-Systeme
- digitale Bewerbungs- und Studierendenakten
- Dokumentenmanagementsysteme
- Systeme für Anerkennung und Anrechnung
- interne Prüf- und Bearbeitungsoberflächen
> Ihre Mitarbeitenden arbeiten weiterhin in den vertrauten Systemen. Stapelweise bereitet den Vorgang im Hintergrund vor.

### Typische Einsatzbereiche

- **Bewerbung und Zulassung:** Zeugnisse und weitere Nachweise werden automatisch getrennt, erkannt und der richtigen Bewerbung zugeordnet. Benötigte Angaben stehen strukturiert für die Prüfung bereit.
- **Internationale Bewerbungen:** Originaldokumente und Übersetzungen werden miteinander verbunden. Institutionen, Abschlüsse, Notensysteme und Sprachzertifikate können ausgelesen und für die weitere Prüfung vorbereitet werden. Die Bewertung ausländischer Bildungsnachweise und die Umrechnung von Noten bleiben bei den dafür zuständigen Stellen und Verfahren.
- **Masterzulassung:** Abschlussurkunden und Transcripts werden gemeinsam verarbeitet. Module, Einzelnoten, Gesamtabschluss und Leistungspunkte können strukturiert bereitgestellt werden. Fachliche Zugangsvoraussetzungen werden nicht eigenständig durch Stapelweise bewertet. Das System kennzeichnet lediglich, welche Angaben und Nachweise für die Prüfung vorliegen.
- **Immatrikulation:** Eingereichte Immatrikulationsunterlagen werden mit den Daten aus der zugelassenen Bewerbung abgeglichen. Fehlende oder abweichende Nachweise werden frühzeitig sichtbar.
- **Anerkennung und Anrechnung:** Transcripts, Modulübersichten und weitere Nachweise können ausgelesen, sortiert und für die fachliche Bewertung vorbereitet werden. Die Entscheidung über Gleichwertigkeit, Anerkennung oder Anrechnung bleibt bei den zuständigen Prüfungsausschüssen und Mitarbeitenden.

### Beispielprozess

**Label:** Bewerbung und Zulassung

**Überschrift:** Von der hochgeladenen Zeugnisdatei zur prüfbereiten Bewerbung

> Eine Bewerbung wird im Portal angelegt. Das Abschlusszeugnis, die Fächer- und Notenübersicht und ein Sprachnachweis werden gemeinsam als eine PDF-Datei hochgeladen. Eine beglaubigte Übersetzung wird zwei Tage später nachgereicht.
>
> Stapelweise trennt die Dokumente, ordnet sie der Bewerbung zu und verbindet die Übersetzung mit dem zugehörigen Original. Abschlussart, Institution, Abschlussdatum, Gesamtnote, Module, Leistungspunkte und Sprachlevel werden ausgelesen.
>
> Das System erkennt, dass eine Seite des Transcripts fehlt, und gibt den Vorgang mit einem konkreten Hinweis an die Sachbearbeitung weiter. Die Hochschule entscheidet anschließend, ob die Bewerbung vollständig und zulassungsfähig ist.

**Link:** Beispielprozess ansehen

### Die Vorteile von Stapelweise für Hochschulen

- **Weniger manuelle Datenerfassung:** Noten, Abschlüsse, Zeiträume und weitere Angaben müssen nicht mehr wiederholt aus Zeugnissen und Nachweisen übertragen werden.
- **Vollständigere Bewerbungsakten:** Fehlende Dokumente, Seiten und Übersetzungen werden frühzeitig sichtbar. Nachforderungen können konkret formuliert werden.
- **Weniger pauschale Rückfragen:** Bewerbende erfahren gezielt, welches Dokument oder welche Angabe noch fehlt, statt vollständige Unterlagen erneut einreichen zu müssen.
- **Bearbeitungsspitzen besser auffangen:** Wiederkehrende Erfassungs- und Zuordnungsaufgaben werden automatisiert. So bleibt in kurzen Bewerbungs- und Immatrikulationsfristen mehr Zeit für die fachlich anspruchsvollen Fälle.
- **Unterschiedliche Zeugnisformate verarbeiten:** Stapelweise verarbeitet PDFs, Scans und Fotos aus unterschiedlichen Institutionen und Ländern. Unsichere Erkennungen werden zur Prüfung markiert.
- **Anschluss an bestehende Systeme:** Dokumente und strukturierte Daten werden an die angebundenen Campus-, Bewerbungs- oder Dokumentenmanagementsysteme übergeben.
- **Flexibles Betriebsmodell:** Stapelweise kann lokal, in einer kundenspezifischen VPC oder als Cloud-Lösung betrieben werden. Das Betriebsmodell wird an Ihre Anforderungen an Datenschutz, Informationssicherheit und Systemarchitektur angepasst.
  *Link:* Mehr zu den Optionen erfahren → (führt zur Seite Lokale KI)

### Für wen sich Stapelweise lohnt

- **Für Studierendenservice und Studierendensekretariat:** Bewerbungs- und Immatrikulationsunterlagen liegen bereits getrennt, zugeordnet und ausgelesen vor. Mitarbeitende können direkt mit der Prüfung beginnen.
- **Für Zulassungsstellen:** Erwartete Nachweise, Noten und weitere Verfahrenswerte sind strukturiert verfügbar. Fehlende oder widersprüchliche Angaben werden gezielt gekennzeichnet.
- **Für International Offices:** Mehrsprachige Zeugnisse, Übersetzungen und unterschiedliche Notensysteme werden geordnet für die fachliche Bewertung bereitgestellt.
- **Für Fachbereiche und Prüfungsausschüsse:** Transcripts, Module und Leistungspunkte stehen übersichtlich zur Verfügung. Die fachliche Entscheidung bleibt bei den zuständigen Gremien.
- **Für IT und Campus-Management:** Stapelweise wird an bestehende Systeme angebunden und kann lokal, in einer VPC oder in der Cloud betrieben werden.
- **Für Datenschutz und Revision:** Verarbeitungsschritte, automatische Prüfhinweise und manuelle Korrekturen können nachvollziehbar protokolliert werden.

### Warum Stapelweise für die Hochschulverwaltung?

- **Für wechselnde Verfahren konfigurierbar:** Benötigte Dokumente und Prüfregeln können nach Studiengang, Bewerbungsgruppe und Semester angepasst werden.
- **Keine automatische Zulassungsentscheidung:** Stapelweise bereitet Unterlagen vor und kennzeichnet Unstimmigkeiten. Die fachliche und rechtliche Entscheidung bleibt bei der Hochschule.
- **Original und Daten bleiben verbunden:** Jede ausgelesene Angabe kann zum zugrunde liegenden Dokument zurückverfolgt werden.
- **Unsicherheit wird sichtbar:** Nicht eindeutig erkannte Werte werden nicht stillschweigend übernommen, sondern zur Prüfung vorgelegt.
- **Keine zusätzliche Arbeitsoberfläche nötig:** Die Ergebnisse können direkt in die angebundenen Systeme übertragen werden. Mitarbeitende müssen nicht dauerhaft in einer weiteren Insellösung arbeiten.

### Sicherheit und Datenhoheit

**Überschrift:** Sie bestimmen, wo Bewerbungs- und Studierendendaten verarbeitet werden

- **Lokal in Ihrer Hochschule:** Die Verarbeitung findet innerhalb Ihrer eigenen technischen Umgebung statt. Dokumente und Inhaltsdaten verlassen Ihr Netzwerk nicht.
- **In Ihrer VPC:** Die Verarbeitung findet in einer isolierten, für Sie eingerichteten Cloud-Umgebung statt. Dokumente und Inhaltsdaten werden nicht außerhalb dieser Betriebsumgebung übertragen.
- **Als Cloud-Lösung:** Stapelweise kann auch als verwaltete Cloud-Lösung betrieben werden. Speicherorte, Zugriffe und Auftragsverarbeitung werden vertraglich festgelegt.

> Unabhängig vom gewählten Modell können Zugriffsrechte, Protokollierung, Speicherfristen und Schnittstellen an Ihre Anforderungen angepasst werden.

**Link:** Mehr über Betriebsmodelle und Datenhoheit erfahren

### Abschluss

**Überschrift:** Wie viel Handarbeit steckt heute noch in Ihren Bewerbungsunterlagen?

> Testen Sie Stapelweise mit einem typischen Zeugnis, Transcript oder Sprachnachweis. Gemeinsam prüfen wir, welche Angaben zuverlässig erkannt werden, welche formalen Prüfungen sinnvoll sind und wie die Übergabe an Ihr Campus-Management-System aussehen kann.

**Buttons:** Eigenes Dokument testen · Probelauf vereinbaren

---

> Die ausgelesenen und formal vorgeprüften Angaben werden in das vereinbarte Datenformat übertragen und zusammen mit den Originaldokumenten bereitgestellt.
> Je nach Systemlandschaft können die Ergebnisse zum Beispiel übergeben werden an:
- Bewerbungs- und Zulassungssysteme
- Campus-Management-Systeme
- digitale Bewerbungs- und Studierendenakten
- Dokumentenmanagementsysteme
- Systeme für Anerkennung und Anrechnung
- interne Prüf- und Bearbeitungsoberflächen
> Ihre Mitarbeitenden arbeiten weiterhin in den vertrauten Systemen. Stapelweise bereitet den Vorgang im Hintergrund vor.
## Branchen-Landingpage: Archive und Forschung

*URL: dok.land/loesungen/branchen/archive*

### Hero

**Überschrift:** Aus Digitalisaten werden auffindbare Quellen.

**Text:**
> Gescannte Akten, Korrespondenzen, Protokolle, Karteien und Nachlässe liegen häufig nur als Bilddateien vor. Stapelweise erzeugt durchsuchbare Volltexte, übernimmt vorhandene Bestands- und Signaturinformationen und schlägt zusätzliche Erschließungsdaten wie Laufzeiten, Personen, Orte und Organisationen vor.
>
> Jeder Treffer bleibt mit dem Digitalisat, der Seite und dem archivischen Zusammenhang verbunden. Die abschließende Erschließung, Bewertung und Freigabe bleibt bei den Archivarinnen und Archivaren.

**Buttons:** Digitalisat jetzt testen · Pilotbestand besprechen

**Hinweis im Hero:** Mehr Quellen durchsuchen, ohne ihren archivischen Zusammenhang zu verlieren.

### Ausgangslage: Ein Scan ist noch keine erschlossene Quelle

> Viele Archive haben bereits große Mengen von Archivgut digitalisiert. Für die Recherche sind die Dateien trotzdem oft nur eingeschränkt nutzbar.
>
> Der Grund: Eine Bilddatei lässt sich nicht wie ein Volltext durchsuchen. Erschließungsinformationen liegen häufig nur auf Bestands- oder Aktenebene vor. Namen, Orte, Daten und Vorgänge im Inneren einer Akte bleiben unsichtbar, bis jemand die Seiten liest und beschreibt.
>
> Gleichzeitig müssen Archive mehr bewältigen als reine Texterkennung:
- Signaturen und Seitenfolgen müssen erhalten bleiben.
- Akten müssen in Bestand, Klassifikation und Provenienz eingeordnet bleiben.
- Vorhandene Findmittel und Metadaten dürfen nicht überschrieben werden.
- Unsichere Transkriptionen müssen erkennbar sein.
- Schutzfristen, Rechte und Zugangsbeschränkungen müssen beachtet werden.
- Daten müssen in Archivinformationssysteme und Austauschformate überführt werden können.
> Stapelweise verbindet Texterkennung und Erschließungsvorschläge mit dem bestehenden archivischen Kontext.

### Viele Quellenarten. Ein nachvollziehbarer Zugang.

**Links** (Klappanzeige): Akte · Korrespondenz · Protokoll · Karteikarte · Register · Nachlass · Urkunde · Findbuch

**Rechts** (Typewriter, orange): aus dem Massenscan · aus vorhandenen Digitalisaten · aus PDF-, TIFF- und Bilddateien · aus digitalen Ablieferungen · aus bestehenden Findmitteln

**Darunter:** direkt in Ihr Archivinformationssystem oder den digitalen Lesesaal.

### Souveränitäts-Leiste

**(orange)** Ihre Bestände. Ihre Regeln. Ihre Infrastruktur. **(schwarz)** Lokal, in Ihrer VPC oder in der Cloud.

Badges: Lokaler oder VPC-Betrieb möglich · Archivalischer Zusammenhang bleibt erhalten · Keine automatische Veröffentlichung

### So funktioniert Stapelweise

**0. Konfiguration**
> Zu Beginn wird festgelegt, was mit einem Bestand erreicht werden soll.
> Je nach Ausgangslage kann Stapelweise unterschiedliche Aufgaben übernehmen:
- gedruckte oder maschinenschriftliche Findmittel retro-konvertieren
- Volltexte aus vorhandenen Digitalisaten erzeugen
- handschriftliche Bestände mit HTR erschließen
- Erschließungsinformationen für Akten oder Vorgänge vorschlagen
- Personen, Orte und Organisationen indexieren
- Digitalisate mit vorhandenen Findbuchdaten verbinden
- Daten für ein Archivinformationssystem oder ein Rechercheportal aufbereiten
> Gemeinsam werden Bestandshierarchie, vorhandene Metadaten, gewünschte Erschließungstiefe, Qualitätsanforderungen und Ausgabeformate festgelegt.

**1. Import**
> Stapelweise verarbeitet vorhandene Digitalisate und die dazugehörigen Erschließungsinformationen.
> Dazu können gehören:
- PDF-, TIFF-, JPEG- und weitere Bilddateien
- mehrseitige Akten und Bände
- vorhandene OCR- oder Transkriptionsdateien
- Findbuch- und Verzeichnungsdaten
- Signatur- und Bestandslisten
- Exporte aus Archivinformationssystemen
- digital entstandene Textdokumente
> Bestehende Signaturen, Datei- und Seitenfolgen sowie die Zuordnung zu Bestand und Verzeichnungseinheit werden übernommen. Sie bilden den verbindlichen Rahmen für die weitere Verarbeitung.

**2. Splitting**
- **Seitenfolge und Aktenstruktur erhalten:** Stapelweise hält fest, zu welcher Akte, welchem Band und welcher Seite ein Digitalisat gehört. Fehlende, doppelte oder falsch zugeordnete Seiten können gekennzeichnet werden.
- **Dokumente innerhalb einer Akte unterscheiden:** Je nach Bestand kann das System einzelne Schreiben, Formulare, Anlagen, Protokolle oder Karteikarten innerhalb einer größeren Einheit erkennen und voneinander abgrenzen.

**3. Extrahierung**
> Maschinenschriftliche und gedruckte Texte werden mit Texterkennung (OCR) verarbeitet. Für geeignete handschriftliche Bestände kann eine Handschriftenerkennung (HTR) eingesetzt werden.
> Die Erkennungsqualität hängt unter anderem von Schriftart, Zeitraum, Scanqualität, Sprache und Einheitlichkeit des Bestands ab. Deshalb werden unsichere Wörter und schwer lesbare Bereiche mit einem Konfidenzwert gekennzeichnet.
> Volltexte können seitenweise mit den Digitalisaten verbunden und für die Suche oder weitere Bearbeitung bereitgestellt werden.

**4. Validierung**
> Stapelweise kann formale und technische Prüfungen durchführen. Dazu können gehören:
- Erkennung fehlender oder doppelter Seiten
- Prüfung der Seitenreihenfolge
- Abgleich von Datei- und Archivsignaturen
- Erkennung nicht lesbarer oder sehr unsicher transkribierter Bereiche
- Kennzeichnung widersprüchlicher Datumsangaben
- Prüfung, ob vorgeschlagene Laufzeiten außerhalb der Bestandslaufzeit liegen
- Erkennung möglicher Dubletten
- Abgleich erkannter Namen und Orte mit vorhandenen Normdaten oder kontrollierten Listen
> Unklare Ergebnisse werden nicht unbemerkt in das Findmittel übernommen. Sie werden mit einem Prüfhinweis für die archivfachliche Bearbeitung bereitgestellt.

**5. Anreicherung**
- **Vorhandene Erschließungsdaten verbinden:** Signatur, Bestand, Klassifikation, Laufzeit und vorhandener Titel werden aus dem Archivinformationssystem oder Findmittel übernommen und mit den Digitalisaten verknüpft. Stapelweise ersetzt diese Informationen nicht durch frei erzeugte Beschreibungen.
> Aus vorhandenen Metadaten und erkannten Texten kann Stapelweise Vorschläge für zusätzliche Erschließungsinformationen erzeugen.
> Dazu können gehören:
- Titelvorschlag
- Enthält-Vermerk oder kurze Inhaltsangabe
- Laufzeit und einzelne Datumsangaben
- Aktenzeichen und frühere Geschäftszeichen
- Personen
- Organisationen
- Orte
- Absender und Empfänger
- Dokumentart
- Sprache
- Sachbegriffe
- Verweise auf andere Vorgänge oder Signaturen
> Vorhandene Provenienz- und Bestandsinformationen bleiben verbindlich. Automatisch erzeugte Angaben werden als Vorschläge gekennzeichnet und können vor der Übernahme archivfachlich geprüft werden.
> Volltexte, Metadatenvorschläge und Verknüpfungen werden in den vereinbarten Formaten ausgegeben.

**6. Aktion**
> Je nach Zielsystem können dazu gehören:
- Übergabe an ein Archivinformationssystem
- Anreicherung eines digitalen Lesesaals
- Aufbau eines Volltext-Suchindex
- EAD- oder EAD(DDB)-Daten
- METS/MODS
- ALTO/XML für Volltexte und Seitenbezug
- CSV- oder JSON-Daten für Forschungsprojekte
- Verknüpfung mit Normdaten und kontrollierten Vokabularen
> Die Veröffentlichung ist ein eigener Schritt. Schutzfristen, Nutzungsrechte und Zugangsbeschränkungen bleiben verbindlich und werden nicht durch die automatische Verarbeitung aufgehoben.

### Was Stapelweise für Archive tun kann

- **Gedruckte und ältere Findmittel retro-konvertieren:** Findbücher, Karteien und Ablieferungslisten können ausgelesen und in strukturierte Datensätze überführt werden. Signaturen, Titel, Laufzeiten und weitere Angaben stehen anschließend für die Prüfung und den Import bereit.
- **Digitalisate volltextdurchsuchbar machen:** Maschinenschriftliche und gedruckte Bestände werden mit Texterkennung (OCR) erschlossen. Für geeignete handschriftliche Quellen kann Handschriftenerkennung (HTR) eingesetzt werden.
- **Ausgewählte Bestände tiefer erschließen:** Personen, Orte, Organisationen, Daten und Aktenzeichen können aus den Volltexten erkannt und als zusätzliche Sucheinstiege vorgeschlagen werden.
- **Digitalisate und Findbuchdaten verbinden:** Bereits vorhandene Erschließungsinformationen werden mit den zugehörigen Dateien, Seiten und Volltexten verknüpft.
- **Daten für Portale und Forschung aufbereiten:** Metadaten und Volltexte können in standardisierten oder projektspezifischen Formaten für Archivinformationssysteme, digitale Lesesäle, das Archivportal-D oder Forschungsumgebungen bereitgestellt werden.

### Was Stapelweise für Forschende ermöglicht

- **Im Inhalt suchen, nicht nur im Aktentitel:** Forschende können nach Begriffen suchen, die in den Dokumenten selbst vorkommen, auch wenn sie im vorhandenen Aktentitel oder Findbuch nicht genannt sind.
- **Personen, Orte und Zeiträume eingrenzen:** Erkannte Namen, Organisationen, Orte und Datumsangaben können als zusätzliche Filter oder Rechercheeinstiege genutzt werden.
- **Jeden Treffer zur Quelle zurückverfolgen:** Suchtreffer bleiben mit dem konkreten Scan, der Seite, der Verzeichnungseinheit und der Archivsignatur verbunden.
- **Größere Quellenkorpora überblicken:** Volltexte und strukturierte Metadaten erleichtern es, relevante Akten in umfangreichen Beständen zu finden und ein Forschungskorpus zusammenzustellen.
- **Transkriptionen weiterbearbeiten:** Erkannte Texte können mit Unsicherheitsmarkierungen bereitgestellt, korrigiert und für wissenschaftliche Auswertungen exportiert werden.
- **Daten nachvollziehbar zitieren und auswerten:** Quellenangaben und Signaturen bleiben erhalten. Metadaten und Volltexte können für zulässige Forschungszwecke in vereinbarten Formaten ausgegeben werden.

### Beispielprozess

**Label:** Historischer Aktenbestand

**Überschrift:** Von tausenden Bilddateien zur durchsuchbaren Quelle

> Ein Archiv hat einen Bestand vollständig digitalisiert. Die Akten liegen als TIFF-Dateien vor, sind aber nur über Signatur und Aktentitel auffindbar.
>
> Stapelweise übernimmt die vorhandene Bestandshierarchie und verbindet jede Datei mit der richtigen Verzeichnungseinheit. Die Seiten werden mit Texterkennung oder Handschriftenerkennung verarbeitet. Personen, Orte, Organisationen, Datumsangaben und Aktenzeichen werden erkannt und als zusätzliche Erschließungsinformationen vorgeschlagen.
>
> Archivfachlich verantwortliche Mitarbeitende prüfen die Vorschläge und geben ausgewählte Angaben für das Archivinformationssystem frei. Forschende können anschließend im Volltext suchen und jeden Treffer direkt zur Seite und Signatur zurückverfolgen.

**Link:** Beispielprozess ansehen

### Die Vorteile von Stapelweise für Archive

- **Mehr Zugang aus vorhandenen Digitalisaten:** Bereits gescannte Bestände werden durch Volltext und zusätzliche Sucheinstiege besser nutzbar.
- **Archivischer Zusammenhang bleibt erhalten:** Signatur, Provenienz, Bestandshierarchie und Seitenfolge werden nicht vom erkannten Text getrennt.
- **Weniger manuelle Tiefenerschließung:** Stapelweise erstellt Vorschläge für wiederkehrende Erschließungsangaben. Mitarbeitende konzentrieren sich auf fachliche Prüfung, Auswahl und schwierige Fälle.
- **Unsicherheit bleibt erkennbar:** Schwer lesbare Wörter, uneindeutige Namen und unsichere Metadaten werden gekennzeichnet, statt als gesicherte Angaben ausgegeben zu werden.
- **Geeignet für unterschiedliche Bestände:** Verarbeitung und Modelle können an Materialart, Sprache, Zeitraum, Schrift und Erschließungsziel angepasst werden.
- **Anschluss an bestehende Systeme:** Ergebnisse werden in vereinbarten Archiv- und Metadatenformaten bereitgestellt und können in bestehende Systeme übernommen werden.
- **Flexibles Betriebsmodell:** Stapelweise kann lokal, in einer kundenspezifischen VPC oder als Cloud-Lösung betrieben werden. Das Betriebsmodell wird an Schutzbedarf, Rechte und technische Infrastruktur des Bestands angepasst.
  *Link:* Mehr zu den Optionen erfahren → (führt zur Seite Lokale KI)

### Für wen sich Stapelweise lohnt

- **Für Archivarinnen und Archivare:** Volltexte und Erschließungsvorschläge liegen zur Prüfung bereit. Signaturen, Bestandszusammenhang und bestehende Verzeichnung bleiben erhalten.
- **Für Digitalisierungsstellen:** Digitalisate können automatisiert auf Vollständigkeit, Seitenfolge und technische Verarbeitbarkeit geprüft und mit Metadaten verbunden werden.
- **Für Benutzungsdienste:** Rechercheanfragen lassen sich schneller auf relevante Bestände und Verzeichnungseinheiten eingrenzen.
- **Für Forschende:** Quellen werden im Volltext durchsuchbar, ohne dass der Weg zurück zum Original, zur Seite und zur Signatur verloren geht.
- **Für IT und digitale Archive:** Stapelweise wird an bestehende Systeme angebunden und kann lokal, in einer VPC oder in der Cloud betrieben werden.
- **Für Rechte- und Datenschutzverantwortliche:** Verarbeitung und Veröffentlichung bleiben getrennte Schritte. Schutzfristen, Rechteangaben und Zugriffsbeschränkungen können aus den führenden Systemen übernommen werden.

### Warum Stapelweise für Archive?

- **Mehr als reine Texterkennung:** Stapelweise verbindet Volltext mit Signatur, Bestand, Seite und vorhandenen Erschließungsdaten.
- **Die archivfachliche Entscheidung bleibt beim Archiv:** Automatisch erzeugte Titel, Laufzeiten und Indexbegriffe sind Vorschläge. Das Archiv entscheidet, was übernommen und veröffentlicht wird.
- **Für den Bestand statt nur für einzelne Seiten:** Die Verarbeitung berücksichtigt Akten, Bände, Verzeichnungseinheiten und Bestandshierarchien.
- **Original, Volltext und Metadaten bleiben verbunden:** Jeder Wert und jeder Suchtreffer kann zum zugrunde liegenden Digitalisat zurückverfolgt werden.
- **Ausgabe in nutzbaren Formaten:** Ergebnisse können für Archivinformationssysteme, Portale und Forschungsprojekte strukturiert bereitgestellt werden.

### Sicherheit, Schutzfristen und Datenhoheit

**Überschrift:** Sie bestimmen, wo Bestände verarbeitet und wer sie nutzen darf

- **Lokal in Ihrer Einrichtung:** Die Verarbeitung findet innerhalb Ihrer eigenen technischen Umgebung statt. Digitalisate, Volltexte und Metadaten verlassen Ihr Netzwerk nicht.
- **In Ihrer VPC:** Die Verarbeitung findet in einer isolierten, für Sie eingerichteten Cloud-Umgebung statt. Inhalte werden nicht außerhalb dieser Betriebsumgebung übertragen.
- **Als Cloud-Lösung:** Für frei nutzbare oder entsprechend freigegebene Bestände kann Stapelweise auch als verwaltete Cloud-Lösung betrieben werden. Speicherorte, Zugriffe und Auftragsverarbeitung werden vertraglich festgelegt.

> Die technische Erschließung führt nicht automatisch zu einer Veröffentlichung. Schutzfristen, Persönlichkeitsrechte, Urheberrechte und bestehende Zugangsbeschränkungen bleiben maßgeblich.

**Link:** Mehr über Betriebsmodelle und Datenhoheit erfahren

### Abschluss

**Überschrift:** Welcher Bestand soll endlich im Inhalt durchsuchbar werden?

> Testen Sie Stapelweise mit einer typischen Akte, einem Findbuch oder einem kleinen Ausschnitt aus einem historischen Bestand. Gemeinsam prüfen wir, welche Texterkennung sinnvoll ist, welche Erschließungsinformationen vorgeschlagen werden können und wie die Ergebnisse in Ihr Archivinformationssystem oder Forschungsprojekt gelangen.

**Buttons:** Digitalisat testen · Pilotbestand besprechen

---

> Volltexte, Metadatenvorschläge und Verknüpfungen werden in den vereinbarten Formaten ausgegeben.
> Je nach Zielsystem können dazu gehören:
- Übergabe an ein Archivinformationssystem
- Anreicherung eines digitalen Lesesaals
- Aufbau eines Volltext-Suchindex
- EAD- oder EAD(DDB)-Daten
- METS/MODS
- ALTO/XML für Volltexte und Seitenbezug
- CSV- oder JSON-Daten für Forschungsprojekte
- Verknüpfung mit Normdaten und kontrollierten Vokabularen
> Die Veröffentlichung ist ein eigener Schritt. Schutzfristen, Nutzungsrechte und Zugangsbeschränkungen bleiben verbindlich und werden nicht durch die automatische Verarbeitung aufgehoben.
## Hauptmenü und Fußleiste (auf allen Seiten)

**Hauptmenü:** Lösungen · Lokale KI · Preise. Dazu rechts die beiden Buttons
Zum Schaufenster (orange) und Probelauf vereinbaren (weiß).

Das frühere Aufklappmenü unter „Lösungen" gibt es nicht mehr. Seine drei Spalten sind
auf die Übersichtsseite und in die Fußleiste gewandert.

**Fußleiste:** vier Spaltenmenüs, darunter eine schmale Zeile mit Impressum und Datenschutz.

- *Branchen:* Gesundheit · Pflege · Banken · Versicherungen · Logistik · Steuerberatung ·
  Immobilienverwaltung · Personalabteilungen · Hochschulverwaltung · Archive & Forschung
  (alle auf ihre eigene Seite verlinkt)
- *Dokumentarten:* Arztbriefe · Kontoauszüge · Mietverträge · Frachtbriefe · Rechnungen ·
  Personalfragebögen · Gutachten · Zeugnisse, dazu „Alle Dokumentarten →"
- *Anwendungsfälle:* Aktendigitalisierung · Posteingangsmanagement · Archivzugang ·
  Kreditprüfung · Nebenkostenabrechnung · Jahresabschlussprüfung · Variable Layouts ·
  Auslagenmanagement, dazu „Alle Anwendungsfälle →"
- *Unternehmen:* Über uns · Kontakt · Referenzprojekte · Lokale KI · Preise

Dokumentarten und Anwendungsfälle haben keine eigenen Seiten. Ihre Einträge führen auf den
passenden Abschnitt der Übersichtsseite.

---

## Seite: Lösungen (Übersicht)

*URL: dok.land/loesungen*

Diese Seite ersetzt das Aufklappmenü. Sie zeigt in drei Abschnitten, wo Stapelweise arbeitet.

**Überschrift**
> Dokumente stapeln sich überall. Nur die Formulare sind andere.

**Aufmacher, erster Absatz**
> Eine Arztpraxis sortiert Befunde, eine Spedition Ablieferbelege, ein Archiv Findbücher.
> Die Aufgabe dahinter ist dieselbe: lesen, zuordnen, weitergeben.

**Aufmacher, zweiter Absatz**
> Stapelweise arbeitet in allen diesen Bereichen mit demselben Ablauf. Was sich unterscheidet,
> sind die Dokumentarten, die Prüfregeln und das Zielsystem. Diese Seite zeigt, wo Stapelweise
> heute im Einsatz ist.

**Kennzahl-Pille**
> Zehn Branchen, ein Verfahren, ein Preismodell.

### Nach Branche

> Für zehn Bereiche gibt es eine eigene Seite mit den passenden Dokumentarten, Prüfregeln
> und Zielsystemen.

Zehn Kacheln, alle verlinkt.

### Nach Anwendungsfall

> Wiederkehrende Aufgaben, die in mehreren Branchen gleich aussehen. Sie lassen sich einzeln
> einrichten, unabhängig von der Branche.

Vierzehn Kacheln. Darunter der Hinweis:
> Ihr Fall steht nicht dabei? Im Probelauf prüfen wir an Ihren eigenen Unterlagen, was möglich ist.

### Nach Dokumentart

> Ein Auszug aus dem, was Stapelweise heute erkennt und ausliest. Neue Arten kommen über die
> Konfiguration dazu, ohne Programmierung.

23 Kacheln.

### Was überall gleich bleibt

> Der Ablauf ist in jeder Branche derselbe. Nur die Regeln darin ändern sich.

- **0. Konfiguration bis 6. Aktion:** Sieben Schritte, von der Einrichtung über das Auslesen
  und Prüfen bis zur Übergabe an Ihr System. Auf jeder Branchenseite steht, was in den
  einzelnen Schritten passiert.
- **Drei Betriebsmodelle:** Lokal auf Ihrer Hardware, in Ihrer eigenen Cloud-Umgebung oder bei
  uns betrieben. Die Wahl hängt an Ihren Datenschutzanforderungen, nicht am Funktionsumfang.
- **Ein Preismodell:** Das Paket bestimmt, was Stapelweise tut. Das Betriebsmodell bestimmt,
  wo es läuft. Beides wird getrennt berechnet.

Darunter: „Mehr zu den Optionen erfahren →" mit Verweis auf Lokale KI.

### Abschluss

Der übliche Aufruf mit beiden Buttons.

---

## Fallstudie: Praxis Kinderleicht

*URL: dok.land/referenzprojekte/praxis-kinderleicht*

**Eigenes Layout.** Diese Seite folgt nicht der Branchenseiten-Vorlage, sondern einem redaktionellen Fallstudien-Layout: schmale Lesespalte, abwechselnd getönte Bänder, ein dunkles Band für die Kennzahl. Sie dient als Vorlage für weitere Fallstudien.

**Bausteine der Vorlage, in dieser Reihenfolge:**
Aufmacher mit Label, Überschrift, Unterzeile und Kundenlogo → Faktenleiste (Einrichtung, Aufgabe, Dokumentarten, Ergebnis) → dunkles Kennzahlen-Band → Ausgangslage → Illustration „vorher" → Detailschilderung mit Checkliste → Kundenzitat mit Foto → Was Stapelweise übernimmt (nummeriert) → Ergebnis → Illustration „nachher" → Was sich verändert hat (Karten) → Kontrolle bleibt beim Kunden → Abschluss-Aufruf → FAQ (aufklappbar) → Seitenangaben für Suchmaschinen

### Seitenangaben für Suchmaschinen

**Seitentitel:** Dokumentenarbeit in der Arztpraxis reduzieren | Stapelweise

**Beschreibung:** Wie eine Kinderarztpraxis mit Stapelweise Arztbriefe, Befunde und Laborberichte automatisch zuordnet und den täglichen Sortieraufwand um rund 90 Prozent reduziert.

### Aufmacher

**Label:** Fallstudie · Gesundheit

**Überschrift:** Eine Stunde weniger Sortierarbeit. Jeden Tag.

**Unterzeile:** Wie die Kinderarztpraxis Kinderleicht Arztbriefe, Befunde und andere Dokumente schneller in die Patientenakte bringt.

> Arztbriefe kommen per E-Mail. Laborberichte per Fax. Eltern bringen Befunde, Medikationspläne und Entlassungsbriefe mit.
>
> In der Kinderarztpraxis Kinderleicht musste eine erfahrene Mitarbeiterin diese Unterlagen jeden Tag sichten, zuordnen und auf wichtige Informationen prüfen. Heute übernimmt Stapelweise einen großen Teil dieser Arbeit.

**Buttons:** Stapelweise mit eigenen Dokumenten testen · Beratungsgespräch anfragen

**Logo:** Kinderleicht (echt eingebaut)

### Faktenleiste

| Einrichtung | Aufgabe | Dokumentarten | Ergebnis |
|---|---|---|---|
| Kinderarztpraxis Kinderleicht | Tägliche Dokumentensichtung | Arztbriefe, Befunde, Laborberichte | Rund 90 % weniger Aufwand |

### Kennzahlen-Band (dunkel)

**90 %** weniger Aufwand bei der täglichen Dokumentensichtung.

### Ausgangslage

**Überschrift:** Der Tag ist schon voll. Der Dokumentenstapel wächst trotzdem.

> Das Telefon klingelt. Im Wartezimmer sitzen Familien mit fiebernden Kindern. Akuttermine müssen dazwischengeschoben werden. Gleichzeitig kommen über verschiedene Wege neue Unterlagen in der Praxis an.
>
> Jedes Dokument muss zur richtigen Patientenakte. Wichtige Werte und Angaben müssen übernommen werden. Dringende Befunde dürfen nicht im normalen Ablagestapel verschwinden.
>
> Diese Arbeit bleibt häufig bis zum Ende eines ohnehin vollen Praxistages liegen.

**Illustration 1:** Überfüllte Praxisrezeption mit Telefon, wartenden Familien, Papierstapeln und vorbeieilendem Arzt (echt eingebaut)
**Bildunterschrift:** Voller Praxistag: Telefon, Wartezimmer und Dokumentenstapel gleichzeitig.

### Jeden Tag eine Stunde „aufräumen"

> Carolin Eschwege kümmerte sich in der Praxis Kinderleicht um die eingehenden Dokumente. Etwa eine Stunde am Tag prüfte sie:

- Zu welcher Patientin oder welchem Patienten gehört die Unterlage?
- Müssen die Ärztinnen und Ärzte sie sofort sehen?
- Welche Angaben müssen in die Patientenakte übernommen werden?
- Kann das Dokument direkt abgelegt werden?
- Fehlt ein Anhang oder eine wichtige Seite?

> Dafür brauchte sie Erfahrung, Konzentration und einen guten Blick für ungewöhnliche Fälle. Gleichzeitig fehlte diese Stunde an anderen Stellen in der Praxis.

### Auch während der Behandlung musste weitergesucht werden

> Nicht jede relevante Information war bereits vorbereitet, wenn das nächste Patientengespräch begann.
>
> Die Ärztinnen und Ärzte öffneten neue Arztbriefe, überflogen Befunde und suchten nach Laborwerten, Diagnosen oder Therapiehinweisen. Häufig geschah das zwischen zwei Terminen oder direkt während des Gesprächs.
>
> Dabei blieb die Sorge, einen wichtigen Satz oder einen Anhang zu übersehen.

### Kundenzitat

> „Das, was Carolin macht, basiert auf vielen Jahren Erfahrung. Das wollte ich auch nicht in Abrede stellen. Es war ein bisschen Überzeugungsarbeit nötig. Wenn wir Stapelweise einsetzen, kann Carolin ihre Stärken einfach besser an anderer Stelle einsetzen."

**Person:** Dr. Sebastian Bartels, Praxisinhaber Kinderleicht (Foto echt eingebaut)

> Praxisinhaber Dr. Sebastian Bartels entschied sich, Stapelweise zu testen. Im Team gab es zunächst Vorbehalte. Die Skepsis war nachvollziehbar: Die tägliche Dokumentensichtung bestand schließlich aus vielen kleinen Entscheidungen.
>
> Der Test zeigte jedoch: Stapelweise konnte einen großen Teil der vorbereitenden Arbeit übernehmen. Carolins Erfahrung blieb weiterhin entscheidend für den abschließenden Qualitätscheck.

### Was Stapelweise übernimmt

1. **Dokumente erkennen:** Stapelweise verarbeitet eingehende Arztbriefe, Befunde, Laborberichte, Überweisungen, Medikationspläne und weitere medizinische Unterlagen.
2. **Der Patientenakte zuordnen:** Die Dokumente werden der richtigen Patientin oder dem richtigen Patienten zugeordnet.
3. **Wichtige Angaben auslesen:** Relevante Daten werden aus dem Dokument erfasst und für die Übernahme in die Patientenakte vorbereitet.
4. **Auffällige Unterlagen markieren:** Dokumente, die zeitnahe ärztliche Aufmerksamkeit benötigen, werden entsprechend gekennzeichnet.
5. **Das Praxisteam prüft:** Carolin kontrolliert die Ergebnisse und übernimmt Fälle, bei denen Erfahrung oder eine individuelle Entscheidung gefragt sind.

### Aus einer Stunde wurde ein kurzer Qualitätscheck

> Stapelweise reduzierte Carolins Aufwand bei der Dokumentensichtung um rund 90 Prozent. Sie wird weiterhin gebraucht. Ihre Zeit steckt heute nur deutlich seltener im Sortieren, Zuordnen und Übertragen von Informationen.
>
> Die Ärztinnen und Ärzte erhalten relevante Unterlagen schneller vorbereitet. Das Praxisteam hat mehr Zeit für Aufgaben, bei denen Menschen tatsächlich gebraucht werden.

**Illustration 2:** Ruhige Praxisrezeption, freundliches Gespräch mit der Familie, Arzt arbeitet entspannt am Tablet (echt eingebaut)
**Bildunterschrift:** Nach der Umstellung: geordneter Empfang, vorbereitete Unterlagen.

### Was sich im Praxisalltag verändert hat

- **Weniger Sortierarbeit:** Dokumente müssen nicht mehr einzeln von Grund auf gesichtet und zugeordnet werden.
- **Weniger Unterlagen zwischen Tür und Angel:** Wichtige Informationen stehen früher und übersichtlicher zur Verfügung.
- **Weniger Arbeit am Tagesende:** Ein Teil der wiederkehrenden Dokumentenarbeit ist bereits erledigt, bevor daraus ein Abendstapel wird.
- **Mehr Zeit für das Praxisteam:** Erfahrene Mitarbeiterinnen und Mitarbeiter können sich stärker um Patientinnen, Patienten und den laufenden Praxisbetrieb kümmern.

### Die Kontrolle bleibt in der Praxis

> Stapelweise bereitet die Dokumentenarbeit vor. Die endgültige Prüfung bleibt beim Praxisteam.
>
> Besondere Fälle können weiterhin individuell beurteilt werden. Unterlagen mit dringendem Handlungsbedarf werden sichtbar gemacht. Die Erfahrung der Mitarbeiterinnen und Mitarbeiter bleibt damit Teil des Prozesses.
>
> Das System nimmt Fleißarbeit ab, ohne wichtige Entscheidungen aus der Praxis zu verlagern.

### Abschluss

**Überschrift:** Wie viel Zeit steckt bei Ihnen im Dokumentenstapel?

> Vielleicht sind es 30 Minuten am Tag. Vielleicht eine Stunde. Vielleicht verteilt sich die Arbeit auf mehrere Personen und fällt deshalb kaum als eigener Zeitblock auf.
>
> Über eine Woche und ein Jahr entsteht daraus trotzdem ein erheblicher Aufwand.
>
> Testen Sie Stapelweise mit typischen Dokumenten aus Ihrer Praxis. So sehen Sie direkt, welche Unterlagen automatisch erkannt, zugeordnet und ausgelesen werden können.

**Buttons:** Stapelweise mit eigenen Dokumenten testen · Beratungsgespräch anfragen

### Häufige Fragen aus Arztpraxen

**Welche Dokumente kann Stapelweise verarbeiten?**
> Zum Beispiel Arztbriefe, Befunde, Laborberichte, Entlassungsbriefe, Überweisungen, Medikationspläne und weitere medizinische Unterlagen.

**Ersetzt Stapelweise die Prüfung durch das Praxisteam?**
> Nein. Das System übernimmt vorbereitende und wiederkehrende Arbeitsschritte. Das Praxisteam führt den abschließenden Qualitätscheck durch und entscheidet bei besonderen Fällen.

**Was passiert mit dringenden Informationen?**
> Dokumente, die zeitnahe ärztliche Aufmerksamkeit benötigen, können entsprechend markiert werden.

**Spart jede Praxis 90 Prozent des Aufwands?**
> Die rund 90 Prozent beziehen sich auf den konkreten Arbeitsschritt in der Kinderarztpraxis Kinderleicht. Die mögliche Zeitersparnis hängt von Dokumentenmenge, Abläufen und Dokumenttypen der jeweiligen Praxis ab.

---

## Seite: Preise

*URL: dok.land/preise*

**Konzeptidee:** Die bestehende Seite nennt drei Pakete mit „ab"-Preisen und wirft das lokale KI-Hosting als Enterprise-Merkmal in dieselbe Liste. Das widerspricht der Lokale-KI-Seite, die dafür eigene Preise nennt. Der Entwurf trennt deshalb zwei Dimensionen: **das Paket** (was Stapelweise tun soll) und **das Betriebsmodell** (wo es läuft). Beides wird getrennt gewählt und addiert sich.

### Hero

**Überschrift:** Zwei Fragen bestimmen Ihren Preis.

**Text:**
> Erstens: Was soll Stapelweise für Sie tun? Das bestimmt das Paket. Zweitens: Wo sollen Ihre Dokumente verarbeitet werden? Das bestimmt das Betriebsmodell.
>
> Beides wird getrennt berechnet und getrennt entschieden. Eine kleine Praxis mit hohen Datenschutzanforderungen zahlt deshalb anders als ein großes Haus mit einfacher Cloud-Nutzung.

**Hinweis im Hero:** Keine Einrichtungsgebühr. Monatlich kündbar. Alle Preise netto.

### Erste Frage: Was soll Stapelweise tun?

**Unterzeile:** Drei Pakete, aufeinander aufbauend. Sie starten klein und wechseln, wenn mehr gebraucht wird.

**Standard, ab 30 € pro Monat**
> Für Selbstständige und kleine Büros, die wiederkehrende Dokumente auslesen lassen wollen.
- Texterkennung, auch für Scans und Fotos
- Auslesen definierter Felder
- Formale Prüfung der ausgelesenen Werte
- Vorlagen je Branche
- Export als Datei

**Professional, ab 50 € pro Monat** (hervorgehoben, Kennzeichnung „Am häufigsten gewählt")
> Für Praxen, Kanzleien und mittlere Organisationen mit gemischtem Dokumenteneingang.
- Alles aus Standard
- Sammeldateien werden automatisch getrennt
- Zuordnung zur richtigen Akte über Ihre Stammdaten
- Eigene Felder und Prüfregeln
- Eingangsschnittstelle, etwa Postfach oder Scanstrecke
- Übergabe an ein Zielsystem

**Enterprise, ab 150 € pro Monat**
> Für größere Häuser mit mehreren Verfahren, Systemen und Zuständigkeiten.
- Alles aus Professional
- Anreicherung aus Ihren Stammdaten und Wissensquellen
- Regelbasierte Aktionen und Weiterleitungen
- Mehrere Ein- und Ausgangsschnittstellen
- Getrennte Verfahren und Rollen parallel
- Lokale KI-Box möglich

**Hinweis darunter:** Alle Pakete enthalten Einrichtung nach Ihren Dokumentarten, Zugriff auf das Schaufenster und Unterstützung beim Start.

### Was in welchem Paket steckt

**Unterzeile:** Aufgebaut entlang der sieben Schritte, die Stapelweise mit jedem Dokument durchläuft.

| Schritt | Standard | Professional | Enterprise |
|---|---|---|---|
| 0. Konfiguration | Vorlagen je Branche | Eigene Felder und Regeln | Mehrere Verfahren parallel |
| 1. Import | Upload und E-Mail | Zusätzlich eine Schnittstelle | Mehrere Quellen gleichzeitig |
| 2. Splitting | nicht enthalten | enthalten | enthalten |
| 3. Extrahierung | Definierte Felder | Eigene Feldschemata je Dokumentart | Frei, auch für seltene Dokumentarten |
| 4. Validierung | Formale Prüfung | Abgleich mit Ihren Stammdaten | Eigene Prüfketten und Freigabestufen |
| 5. Anreicherung | nicht enthalten | nicht enthalten | enthalten |
| 6. Aktion | Export als Datei | Ein Zielsystem | Mehrere Zielsysteme, automatische Aktionen |
| Betriebsmodell | Cloud oder VPC | Cloud oder VPC | Auch lokale KI-Box |

### Zweite Frage: Wo sollen Ihre Dokumente verarbeitet werden?

**Unterzeile:** Das Betriebsmodell wählen Sie unabhängig vom Paket. Es kommt zum Paketpreis dazu.

1. **Europäischer Cloudbetrieb**, **0 € inklusive**: Stapelweise läuft in einem Rechenzentrum innerhalb der EU. Schneller Start, kein eigener Betrieb nötig.
2. **Eigene VPC** (hervorgehoben), **79 € pro Monat**: Stapelweise läuft in Ihrer eigenen, abgeschotteten Cloud-Umgebung.
3. **Lokale KI-Box**, **nach Größe, pro Monat**: Ein Gerät in Ihrem Haus, in Ihrem Netzwerk. Setzt das Enterprise-Paket voraus.
   - 16 GB VRAM: ab 150 € pro Monat
   - 32 GB VRAM: ab 200 € pro Monat
   - 64 GB VRAM: ab 350 € pro Monat

**Link:** Mehr zu den Optionen erfahren → (führt zur Seite Lokale KI)

### Drei Beispiele, wie sich das zusammensetzt

| Wer | Paket | Betriebsmodell | Zusammen |
|---|---|---|---|
| Kinderarztpraxis, vier Behandelnde | Professional 50 € | Europäische Cloud 0 € | 50 € pro Monat |
| Steuerkanzlei mit eigener Cloud-Strategie | Professional 50 € | Eigene VPC 79 € | 129 € pro Monat |
| Klinik, Daten dürfen das Haus nicht verlassen | Enterprise 150 € | KI-Box 32 GB ab 200 € | ab 350 € pro Monat |

### Was den Preis innerhalb eines Pakets bewegt

- **Wie viele Dokumente monatlich anfallen:** Der Grundpreis deckt eine Menge ab, die für die jeweilige Größe üblich ist. Wer deutlich darüber liegt, bekommt eine passende Staffel.
- **Wie viele Dokumentarten unterschieden werden:** Jede Dokumentart bekommt ein eigenes Feldschema und eigene Prüfregeln. Fünf Arten sind schneller eingerichtet als dreißig.
- **Wie viele Systeme angebunden werden:** Eine Übergabe an ein Praxisverwaltungssystem ist etwas anderes als der Abgleich mit drei Fachsystemen gleichzeitig.
- **Wie geordnet die Ausgangslage ist:** Ein laufender Dokumenteneingang ist schneller aufgesetzt als die einmalige Migration eines gewachsenen Altbestands.

### Häufige Fragen und Antworten

**Warum steht überall „ab"?**
> Weil Dokumentenmenge, Zahl der Dokumentarten und die Zahl der angebundenen Systeme den Aufwand bestimmen. Nach einem Probelauf mit Ihren eigenen Unterlagen nennen wir einen festen Monatspreis, keine Spanne.

**Kann ich das Paket später wechseln?**
> Ja, in beide Richtungen, zum Monatsende. Die Konfiguration bleibt dabei erhalten.

**Was kostet die Einrichtung?**
> Die Einrichtung nach Ihren Dokumentarten ist im Paketpreis enthalten. Nur eine umfangreiche Migration von Altbeständen wird gesondert kalkuliert.

**Warum kostet die lokale KI-Box mehr als die Cloud?**
> Weil dafür Hardware in Ihrem Haus steht, gewartet und mit aktuellen Modellen versorgt wird. Der Preis richtet sich nach der Größe des Grafikspeichers.

**Gibt es eine Mindestlaufzeit?**
> Bei Cloud und VPC nicht, dort ist monatlich kündbar. Bei der lokalen KI-Box vereinbaren wir eine Laufzeit, weil ein Gerät angeschafft und eingerichtet wird.

**Kann ich Stapelweise vorher ausprobieren?**
> Ja. Im Schaufenster sehen Sie an echten Beispielen, was erkannt und ausgelesen wird. Im Probelauf schicken Sie uns eigene Dokumente und bekommen das Ergebnis an Ihren Unterlagen gezeigt.

### Abschluss

**Überschrift:** Welches Paket zu Ihnen passt, sagt Ihnen ein Probelauf schneller als eine Tabelle.

> Schicken Sie uns ein paar typische Dokumente aus Ihrem Alltag. Wir zeigen Ihnen, was Stapelweise damit macht, und nennen danach einen festen Monatspreis.

**Buttons:**
- Button "Zum Schaufenster" → Bildunterschrift: Stapelweise an konkreten Beispielen erleben und testen
- Button "Probelauf vereinbaren" → Bildunterschrift: Was kann Stapelweise für Sie tun? Vereinbaren Sie ein persönliches Gespräch mit uns.

### Noch zu klären

- Sind die drei Paketpreise (30, 50, 150 €) aktuell?
- Welche Dokumentmenge deckt der Grundpreis je Paket ab, ab wann greift eine Staffel?
- Stimmt die Zuordnung der sieben Schritte zu den Paketen? Sie ist aus den Merkmalen der bestehenden Seite abgeleitet.
- Setzt die lokale KI-Box wirklich Enterprise voraus? Auf der bestehenden Seite steht „lokales KI-Hosting" als Enterprise-Merkmal.

---

## Seite: Lokale KI

*URL: dok.land/lokale-ki*

### Hero

**Überschrift:** KI, mit der Daten Zuhause bleiben.

**Text:**
> Nutzen Sie Stapelweise auf 100% lokaler Infrastruktur: in einer eigenen VPC oder sogar auf eigener Hardware in Ihren Räumen. Je sensibler Ihre Dokumente sind, desto wichtiger wird die Frage, wo sie verarbeitet werden.

**Buttons:** Optionen besprechen · Zum Schaufenster
**Kennzahl im Hero:** Ihre Dokumente verlassen Ihr Netzwerk zu keinem Zeitpunkt

### Kernargument

**Überschrift:** Die Nachrichtenlage ändert sich. Ihre Anforderungen nicht.

> Ein Anbieter ändert seine Nutzungsbedingungen. Ein Rechenzentrum wechselt den Eigentümer. Ein Datenleck wird bekannt. Ein Modell verschwindet über Nacht. Wer täglich mit Patientenakten, Mandantenunterlagen oder Personaldaten arbeitet, kann seine Architektur nicht an Schlagzeilen ausrichten.

**Hervorgehoben:** Der einfachste Weg, davon unabhängig zu werden: Die Daten gehen gar nicht erst raus.

- **Anbieter ändert die Bedingungen:** Betrifft Sie nicht, wenn die Verarbeitung in Ihrer eigenen Umgebung läuft und keine Daten übertragen werden.
- **Dienst wird abgeschaltet:** Ihre Installation läuft weiter. Modelle und Konfiguration liegen bei Ihnen, nicht bei einem Anbieter.
- **Datenleck wird bekannt:** Was Ihr Haus nie verlassen hat, kann anderswo auch nicht abfließen.

### Drei Betriebsmodelle

**Überschrift:** Drei Wege. Einer davon passt zu Ihnen.

1. **Europäischer Cloudbetrieb**, **0 € inklusive**: Stapelweise läuft in einem Rechenzentrum innerhalb der EU. Schneller Start, kein eigener Betrieb nötig. *Für Organisationen, die europäische Rechtsräume brauchen, aber keine eigene Infrastruktur betreiben wollen.*
2. **Eigene VPC** (hervorgehoben), **79 € pro Monat**: Stapelweise läuft in Ihrer eigenen, abgeschotteten Cloud-Umgebung. Sie behalten die Kontrolle über Netzwerk, Zugriffe und Löschung, ohne Hardware anzuschaffen. *Für Organisationen mit eigener Cloud-Strategie und hohen Anforderungen an Nachvollziehbarkeit.*
3. **Lokale KI-Box**, **nach Größe, pro Monat**: Ein Gerät in Ihrem Haus, in Ihrem Netzwerk. Die Modelle laufen auf Ihrer Hardware und funktionieren auch ohne Internetverbindung. *Für Praxen, Kanzleien und Häuser, in denen Daten das Gebäude nicht verlassen dürfen.*
   - 16 GB VRAM: ab 150 € pro Monat
   - 32 GB VRAM: ab 200 € pro Monat
   - 64 GB VRAM: ab 350 € pro Monat

**Hinweis unter den Boxen:** Alle Preise netto. Die Cloud-Variante ist im Grundpreis von Stapelweise enthalten.

| | Europäische Cloud | Eigene VPC | Lokale KI-Box |
|---|---|---|---|
| Wo liegen die Daten | Rechenzentrum in der EU | In Ihrer eigenen Cloud-Umgebung | In Ihren Räumen |
| Wer betreibt | Wir, für Sie | Sie, mit unserer Begleitung | Sie, mit unserer Begleitung |
| Internetverbindung nötig | Ja | Ja | Nein, läuft auch offline |
| Anlaufzeit | Am schnellsten | Mittel | Länger, inklusive Hardware |
| Kontrolle über Löschung | Vertraglich geregelt | Vollständig bei Ihnen | Vollständig bei Ihnen |

### Was Sie davon haben

- **Datenschutz und Datensicherheit:** Ihre Daten verlassen Ihr Netzwerk nicht. Nichts wird an externe Server geschickt. Besonders wichtig bei Gesundheitsdaten, Geschäftsgeheimnissen und personenbezogenen Daten, und aus Sicht der DSGVO oft der entscheidende Punkt.
- **Unabhängigkeit und Verfügbarkeit:** Sie sind nicht auf eine Internetverbindung angewiesen und arbeiten auch offline weiter. Kein Modell kann plötzlich abgeschaltet, verteuert oder inhaltlich verändert werden.
- **Kontrolle und Anpassbarkeit:** Sie wählen die Modelle aus, justieren sie auf Ihre Dokumente und passen sie an Ihre Abläufe an. Nutzungsbeschränkungen der Anbieter greifen nicht.

*(Übernommen von der bestehenden Seite dok.land/lokale-ki-box, sprachlich überarbeitet.)*

### Kundenzitat

> "Mit der KI-Box habe ich zum ersten Mal das Gefühl, beides zu bekommen: moderne KI-Unterstützung und volle Kontrolle über unsere Daten. Die KI läuft lokal in der Praxis, nichts verlässt unser Netzwerk."

*(Stammt von der bestehenden Seite, dort ohne Namensnennung. Zuordnung zur Person bitte bestätigen.)*

### Was uns oft gefragt wird

- **Ist lokale KI schlechter als die großen Cloud-Modelle?** Für das Auslesen und Einordnen von Dokumenten nicht. Entscheidend ist nicht die größtmögliche Allgemeinbildung eines Modells, sondern wie genau es auf Ihre Dokumentarten und Ihr Zielsystem konfiguriert ist.
- **Was passiert, wenn es bessere Modelle gibt?** Die eingesetzten Modelle lassen sich austauschen. Sie entscheiden, wann Sie wechseln, nicht ein Anbieter.
- **Brauchen wir dafür eine eigene IT-Abteilung?** Nein. Wir richten ein, begleiten den Betrieb und übernehmen die Wartung. Bei der lokalen KI-Box liefern wir die Hardware fertig konfiguriert.
- **Was passiert mit den Daten, wenn wir aufhören?** Bei VPC und lokaler Installation liegen alle Daten von Anfang an bei Ihnen. Es gibt nichts, was ein Anbieter noch löschen müsste.

*(Antworten sind von mir formuliert und fachlich noch zu bestätigen.)*

### Souveränitäts-Leiste

Wie auf den Branchenseiten, mit den Badges der Startseite.

### Besonders wichtig, wenn Sie hier arbeiten

Acht Branchenkacheln, jede verlinkt auf die passende Branchenseite.

### Abschluss

**Überschrift:** Welche Variante passt zu Ihnen?
**Text:** Gerne beraten wir Sie zu den Optionen, von der europäischen Cloud bis zur eigenen Hardware im Haus.
**Buttons:** Optionen besprechen · Zum Schaufenster

## Offene Punkte / Platzhalter

**Bilder und Logos**
- Hero-GIF (oben rechts auf der Startseite) noch nicht erstellt.
- Fünf Illustrationsflächen im Stepper sind auf allen neun Seiten gestrichelte Platzhalter.
- Dokumentart-Illustrationen gibt es bisher nur für Gesundheit (Arztbrief, Befund, Laborbericht, Überweisung, Rezept, Medikationsplan, Entlassungsbrief). Die anderen sieben Branchen nutzen die vorhandenen Strich-Icons.
- Rollen-Illustrationen gibt es bisher nur für Gesundheit. Auf den anderen Seiten stehen Platzhalter.
- Fallstudien-Logos: Praenatura und Kinderleicht sind echt eingebaut. Alle übrigen sind Platzhalter.
- Kundenfotos: nur Dr. Bartels ist echt, alle anderen sind Platzhalter.

**Texte und Zahlen**
- Alle Kundenzitate auf den sieben neuen Branchenseiten sind von mir formuliert und im Wireframe als Beispielzitat gekennzeichnet.
- Alle Kennzahlen sind plausibel gewählt, aber erfunden. Ausnahmen: 70 % bei Banken & Versicherungen, 1 Stunde pro Tag bei Gesundheit und 7 Tage bei Personalabteilungen stammen aus euren echten Referenzprojekten.
- Alle "Ganze Fallstudie lesen"-Links führen aktuell auf `#`, es gibt noch keine echten Fallstudien-Unterseiten.
- Auf der Seite Lokale KI sind die technischen Aussagen zu den drei Betriebsmodellen und die FAQ-Antworten von mir formuliert und fachlich noch zu bestätigen.

---

## Übersicht: alle fünfzehn Seiten

| Seite | Hero-Überschrift | Kennzahl im Hero |
|---|---|---|
| Startseite | Aus Stapelweise [Dokumenten] werden strukturierte Daten. | 500+ Kunden, 10+ Jahre, lokale KI |
| Gesundheit | Ein Posteingang der sich selbst sortiert. | 1 Stunde pro Tag Arbeitsersparnis |
| Pflege & Fürsorge | Mehr Zeit am Menschen, weniger am Aktenschrank. | Rund 6 Stunden pro Woche |
| Banken | Vom Dokumenteneingang zum prüfbereiten Kreditvorgang. | Strukturierte Unterlagen vor Bearbeitungsbeginn |
| Versicherungen | Vom Leistungsantrag zum prüfbereiten Vorgang. | Doppelt so schnelle Bearbeitung von Schadensfällen |
| Bildung & Kultur | Bewerbungen, Zeugnisse, Archivgut: alles auffindbar. | Bewerbungsphase von Wochen auf Tage |
| Logistik und Spedition | Ablieferbeleg da. Rechnung raus. | Ablieferbelege in Minuten statt Tagen |
| Steuerberatung und Wirtschaftsprüfung | Mandantenunterlagen geordnet, bevor die Bearbeitung beginnt. | Weniger sortieren, mehr Zeit für Prüfung |
| Immobilienverwaltung | Jede Rechnung beim richtigen Objekt. Jeder Vorgang vollständig. | Weniger Suche und Nacharbeit vor der Abrechnung |
| Personalabteilungen | Aus Personalunterlagen werden geordnete, durchsuchbare Akten. | 250 Aktenordner in sieben Tagen aufbereitet |
| Hochschulverwaltung | Bewerbungsunterlagen vollständig im System, bevor die Prüfung beginnt. | Weniger abtippen, weniger pauschale Rückfragen |
| Archive & Forschung | Aus Digitalisaten werden auffindbare Quellen. | Mehr Quellen durchsuchen, Zusammenhang bleibt |

**Aufbau der überarbeiteten Branchenseiten:** Hero → Ausgangslage → Vielfalt an Dokumenten → Souveränitäts-Leiste → So funktioniert Stapelweise (0 bis 6) → Typische Einsatzbereiche → Beispielprozess oder Fallstudie → Vorteile → Für wen sich Stapelweise lohnt → Warum Stapelweise → Sicherheit und Datenhoheit → Abschluss-Aufruf

Gesundheit, Pflege und Bildung folgen noch der älteren Vorlage mit Kundenzitat und Kennzahlen-Leiste.
