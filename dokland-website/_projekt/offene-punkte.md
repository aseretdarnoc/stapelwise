# Offene Punkte

Was im Entwurf bewusst offen geblieben ist, sortiert nach Dringlichkeit. Alles aus dem Stand vom 10. August 2026.

---

## 1. Das Schaufenster fehlt

Auf jeder Seite steht der Button **„Zum Schaufenster"**, insgesamt 45 mal. Dazu kommen Verweise unter jedem Beispielprozess und jeder Fallstudie: „Im Schaufenster anschauen".

Gemeint ist eine Seite, auf der man an echten Beispieldokumenten sieht, was Stapelweise erkennt, zuordnet und ausliest. Auf der Startseite gibt es dafür bereits einen kleinen Vorgeschmack, den Bereich mit den klickbaren Dokumentbeispielen (`.doc-viewer`).

**Diese Seite existiert nicht.** Sie ist die größte inhaltliche Lücke und gleichzeitig das Ziel fast jeder Handlungsaufforderung.

---

## 2. Buttons ohne Ziel

| Beschriftung | Anzahl | Wohin |
|---|---|---|
| Zum Schaufenster | 45 | Schaufenster, existiert nicht |
| Probelauf vereinbaren | 48 | Kontaktformular oder Terminbuchung, existiert nicht |
| ↓ JSON herunterladen | 1 | Beispieldatei im Dokumentbeispiel-Bereich der Startseite |

Sie sind als `<button>` angelegt, nicht als Link, damit klar ist, dass noch kein Ziel dahinter liegt.

---

## 3. Kein Weg zurück zur Startseite

Auf keiner der 15 Seiten führt ein Verweis zur Startseite. Das Logo oben links ist kein Link, und die Pfadanzeige darunter ist reiner Text:

```html
<div class="breadcrumb">Lösungen<span class="sep">/</span>Nach Branche<span class="sep">/</span>Logistik und Spedition</div>
```

So war es schon im Entwurf angelegt, wo die Reiter über dem simulierten Browserfenster diese Aufgabe übernahmen. Auf einer echten Website fehlt der Weg zurück.

Zwei Stellen bieten sich an, beide sind übliche Konvention: das Logo verlinken, und in der Pfadanzeige mindestens „Lösungen" anklickbar machen. Beides ist eine gestalterische Entscheidung und deshalb nicht eigenmächtig ergänzt worden.

---

## 4. Dokumentarten und Anwendungsfälle haben keine eigenen Seiten

Die Fußleiste trägt drei Spaltenmenüs: Branchen, Dokumentarten, Anwendungsfälle. Nur die Branchen führen auf echte Seiten. Die Einträge der beiden anderen Spalten zeigen alle auf den passenden Abschnitt der Übersicht, also auf `/loesungen#dokumentarten` beziehungsweise `/loesungen#anwendungsfaelle`.

Das ist bewusst so gebaut und kein Versehen: Es gibt keine toten Verweise, und wenn später eigene Seiten je Dokumentart oder Anwendungsfall entstehen, muss nur das Ziel getauscht werden. Die Struktur der Fußleiste bleibt.

Dasselbe gilt auf der Übersichtsseite selbst. Dort sind die Branchenkacheln verlinkt, die Kacheln für Dokumentarten und Anwendungsfälle nicht.

---

## 5. Seiten, die im Menü oder in der Fußleiste stehen, aber fehlen

Aus der Spalte **Unternehmen** in der Fußleiste sind Referenzprojekte, Lokale KI und Preise verlinkt. Nicht gebaut sind:

- Über uns
- Kontakt
- Impressum
- Datenschutz

Impressum und Datenschutz sind in Deutschland Pflicht und müssen vor dem Livegang stehen.

---

## 6. Fehlende Bilder: 123 Platzhalter

Sie sind als gestrichelte Kästen sichtbar angelegt, damit klar ist, wo etwas hingehört.

| Art | Anzahl | Wo |
|---|---|---|
| Ablauf-Illustrationen (`.illu-slot`) | 70 | Sieben je Branchenseite, rechts neben den Schritten |
| Rollen-Illustrationen (`.role-illu-slot`) | 50 | Bei „Für wen sich Stapelweise lohnt", auf allen Branchenseiten außer Gesundheit |
| Porträtfotos (`.author-photo-slot`) | 2 | Pflege und Versicherungen, bei den Kundenzitaten |
| Kundenlogo (`.logo-fallback`) | 1 | Dritte Referenzkarte auf der Startseite |

**Gesundheit ist die einzige Seite mit echten Rollen-Illustrationen.** Sie zeigt, wie es aussehen soll.

### Vier Dokumentarten ohne Bild

In den Klappanzeigen zeigen diese vier ein Strich-Symbol statt eines gezeichneten Dokuments:

- Genehmigung der Krankenkasse (Pflege)
- Abschlussurkunde (Hochschulverwaltung)
- Transcript of Records (Hochschulverwaltung)
- Urkunde (Archive)

Die übrigen 77 Einträge haben ein Bild.

### Zwei Bilder nur in Web-Auflösung

Die beiden Illustrationen auf der Fallstudienseite (`fallstudie-kinderleicht-praxis-voll.png` und `-ruhig.png`) liegen nur in 1100 Pixel Breite vor, weil die Originaldateien nicht mehr auffindbar waren. Für die Darstellung reicht das. Wer sie größer braucht, muss sie neu anfordern.

---

## 7. Rechte und Lizenzen, ungeklärt

**Schrift:** Bricolage Grotesque liegt als `woff2` im Paket und ist im CSS eingebunden. Die Schrift wird üblicherweise unter der SIL Open Font License verbreitet, was Weitergabe und Web-Einbindung erlaubt. **Das ist nicht geprüft worden.** Vor dem Livegang die Lizenzdatei beschaffen und ablegen.

**Kundenlogos:** praenatura und Kinderleicht sind echte Logos echter Kunden. Ob eine schriftliche Freigabe für die Nutzung auf der Website vorliegt, ist nicht dokumentiert.

**Porträts:** Die Fotos von Dr. Sebastian Bartels und Miriam Winkelmann sind echt. Gleiches gilt hier.

**Zitat praenatura:** Auf der Versicherungsseite steht beim Kundenzitat ausdrücklich der Vermerk „Entwurf zur Freigabe durch praenatura". Es ist also noch nicht freigegeben.

---

## 8. Inhaltlich noch nicht entschieden

**Preislogik.** Die Preisseite ist ein Konzeptvorschlag. Vier Punkte sind nicht bestätigt, sie stehen am Ende des Preise-Abschnitts in `inhalte/website-texte.md`:

- Sind die drei Paketpreise (30, 50, 150 Euro) aktuell?
- Welche Dokumentmenge deckt der Grundpreis ab, ab wann greift eine Staffel?
- Stimmt die Zuordnung der sieben Schritte zu den Paketen? Sie ist aus den Merkmalen der bisherigen Seite abgeleitet.
- Setzt die lokale KI-Box wirklich das Enterprise-Paket voraus?

**Arztbrief oder Arztbericht.** Auf der Gesundheitsseite heißt eine Dokumentart „Arztbrief", auf der Versicherungsseite „Arztbericht". Ob beide dasselbe meinen, ist eine fachliche Entscheidung, siehe `inhalte/dokumentarten.md`.

**Kundenzitate und Kennzahlen.** Echt sind: Gesundheit (eine Stunde pro Tag), Versicherungen (doppelt so schnell, wartet auf Freigabe), Personal (250 Aktenordner in sieben Tagen). Auf den übrigen Branchenseiten gibt es weder Zitat noch Kennzahl.

**Weitere Fallstudien.** Gebaut ist nur Praxis Kinderleicht. Das Layout ist als Vorlage angelegt, siehe `design/komponenten.md`.

**Titel und Meta-Beschreibungen.** Nur die Fallstudienseite hatte fertige Angaben. Für die übrigen 14 Seiten sind sie aus Überschrift und erstem Absatz abgeleitet und redaktionell ungeprüft.

---

## 9. Technisch vor dem Livegang

- **Bildoptimierung.** Die Seiten nutzen `assets/img/` mit maximal 800 Pixel Kantenlänge. Für die Produktion braucht es responsive Größen und moderne Formate. Die Originale liegen in `assets/img-original/`, zusammen 71 MB.
- **Barrierefreiheit.** Nie geprüft. Zu klären sind mindestens: Kontraste bei `--ink-mute` auf hellem Grund, Tastaturbedienung der Ablauf-Schritte, Fokuszustände, sinnvolle `alt`-Texte. Viele Bilder haben derzeit ein leeres `alt`.
- **Schmale Fenster.** Bei 375 Pixeln steht keine der 15 Seiten mehr waagerecht über. Das hängt an den Regeln im 640-Pixel-Block, siehe `design/design-tokens.md`. Die Vergleichstabellen scrollen innerhalb ihres eigenen Rahmens (`.cmp-wrap`), das ist so gewollt. Ungeprüft sind Zwischenbreiten wie 480 oder 768 Pixel.
- **Dunkelmodus.** Es gibt eine `prefers-color-scheme: dark`-Regel, die nie gestalterisch geprüft wurde. Entweder durchziehen oder entfernen.
- **Saubere URLs.** Die Dateien tragen `.html`. Ohne Rewrites lautet die Adresse `/preise.html` statt `/preise`. **Achtung beim Umstellen:** Die Pfade sind relativ zur Dateitiefe. Wer `/loesungen/branchen/logistik.html` auf `/loesungen/branchen/logistik/` umschreibt, verschiebt die Ebene und muss die Präfixe nachziehen oder auf absolute Pfade wechseln.
- **Externes SVG-Sprite.** `<use href="../../assets/icons.svg#…">` funktioniert nicht über `file://` und nicht domainübergreifend. Lokal muss ein Server laufen.
- **Doppelte Navigation.** Kopf- und Fußleiste stehen 15 mal im Quelltext. Die Fußleiste ist seit dem Umbau deutlich größer, sie trägt vier Spaltenmenüs. Eine Änderung muss überall nachgezogen werden, solange daraus keine Komponente geworden ist.
