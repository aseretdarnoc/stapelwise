# Mitarbeiten: Texte ändern und Bilder einsetzen

Diese Anleitung ist für alle, die Texte redigieren oder Illustrationen liefern. Du brauchst kein HTML zu können und nichts auf deinem Rechner zu installieren. Alles läuft im Browser auf GitHub.

Was du brauchst: ein GitHub-Konto und eine Einladung zu diesem Repository.

---

## Der Ablauf in drei Sätzen

Du öffnest die Datei auf GitHub, klickst auf den Stift, änderst den Text und speicherst. Ein bis zwei Minuten später ist die Änderung auf der Vorschau-Adresse zu sehen. Wenn etwas schiefgeht, lässt sich jede Änderung zurückholen, es kann also nichts kaputtgehen.

---

## Welche Datei gehört zu welcher Seite

| Seite | Datei |
|---|---|
| Startseite | `index.html` |
| Lösungen (Übersicht) | `loesungen/index.html` |
| Gesundheit | `loesungen/branchen/gesundheit.html` |
| Pflege | `loesungen/branchen/pflege.html` |
| Banken | `loesungen/branchen/banken.html` |
| Versicherungen | `loesungen/branchen/versicherungen.html` |
| Logistik | `loesungen/branchen/logistik.html` |
| Steuerberatung | `loesungen/branchen/steuerberatung.html` |
| Immobilienverwaltung | `loesungen/branchen/immobilienverwaltung.html` |
| Personalabteilungen | `loesungen/branchen/personalabteilungen.html` |
| Hochschulverwaltung | `loesungen/branchen/hochschulverwaltung.html` |
| Archive und Forschung | `loesungen/branchen/archive.html` |
| Fallstudie Praxis Kinderleicht | `referenzprojekte/praxis-kinderleicht.html` |
| Preise | `preise.html` |
| Lokale KI | `lokale-ki.html` |

---

## Text ändern

1. Datei aus der Tabelle oben anklicken.
2. Oben rechts auf den **Stift** klicken.
3. Mit `Strg+F` (Mac: `Cmd+F`) die Stelle suchen, die du ändern willst.
4. Text ändern.
5. Oben rechts **Commit changes**. In das Feld einen kurzen Satz schreiben, was du geändert hast.

### Die eine Regel

Ändere nur Text, der **zwischen** den spitzen Klammern steht. Alles in `<` und `>` ist Technik.

```html
<h2 class="sec-title">Viele Dokumente. Viele Eingangswege.</h2>
                      ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
                      nur das hier ändern
```

Wenn du versehentlich eine spitze Klammer löschst, ist das kein Drama. Sag Bescheid, es lässt sich in einem Klick zurücksetzen.

### Sonderzeichen

Diese Schreibweisen sehen im Text seltsam aus, sind aber richtig. Bitte so stehen lassen:

| im Quelltext | erscheint als |
|---|---|
| `&amp;` | & |
| `&rarr;` oder `→` | → |
| `&nbsp;` | geschütztes Leerzeichen |

Umlaute und Anführungszeichen kannst du normal schreiben.

---

## Ein Bild einsetzen

Im Entwurf sind 123 Stellen als gestrichelte Kästen markiert, an denen noch eine Illustration fehlt.

### Schritt 1: Bild hochladen

In den Ordner `assets/img/` gehen, dann **Add file → Upload files**.

**Dateiname:** klein, ohne Umlaute, ohne Leerzeichen, mit Bindestrich. Zum Beispiel `rolle-logistik-disposition.png`.

**Format und Größe:** PNG mit Transparenz oder JPG. Längste Kante höchstens 1600 Pixel. Die Originaldateien bitte zusätzlich in der Ablage sichern, im Repository liegt nur die Web-Fassung.

### Schritt 2: Den Platzhalter ersetzen

Die Seite öffnen, auf den Stift klicken, den Platzhalter suchen und durch die Bildzeile ersetzen.

**Ablauf-Illustration** (rechts neben den sieben Schritten):
```html
<div class="illu-slot" data-for="0"><span>Illustration<br>„Konfiguration"<br>folgt</span></div>
```
wird zu
```html
<img class="illu" src="assets/img/DATEINAME.png" alt="Kurze Beschreibung">
```

**Zielgruppen-Illustration** (bei „Für wen sich Stapelweise lohnt"):
```html
<div class="role-illu-slot">Illustration<br>folgt</div>
```
wird zu
```html
<img class="role-illu" src="assets/img/DATEINAME.png" alt="Kurze Beschreibung">
```

**Porträtfoto** (bei den Kundenzitaten):
```html
<div class="author-photo-slot">Foto<br>folgt</div>
```
wird zu
```html
<img class="author-photo" src="assets/img/DATEINAME.jpg" alt="Kurze Beschreibung">
```

### Schritt 3: Den Pfad an die Seite anpassen

Das ist der einzige Punkt, an dem man leicht danebenliegt. Wie viele `../` vor `assets/` müssen, hängt davon ab, wo die Seite liegt:

| Seite | Pfad |
|---|---|
| `index.html`, `preise.html`, `lokale-ki.html` | `assets/img/DATEI.png` |
| `loesungen/index.html` | `../assets/img/DATEI.png` |
| `referenzprojekte/…` | `../assets/img/DATEI.png` |
| `loesungen/branchen/…` | `../../assets/img/DATEI.png` |

Merkhilfe: Für jeden Schrägstrich im Dateinamen der Seite ein `../`.

Wenn du es falsch machst, bleibt an der Stelle ein leeres Feld. Kaputt geht nichts, korrigiere einfach den Pfad.

### Der alt-Text

Das `alt="…"` beschreibt das Bild für Menschen, die es nicht sehen können. Ein knapper Satz, was zu sehen ist. Bei rein schmückenden Bildern `alt=""` leer lassen.

---

## Eine Datei bitte in Ruhe lassen

`assets/img/klappanzeigen.png` sieht aus wie ein Durcheinander vieler kleiner Zeichnungen. Das ist Absicht: Darin stecken alle 77 Motive der wechselnden Dokumentanzeige, und die Seiten schneiden sich jeweils eine heraus. Wer die Datei ersetzt oder zuschneidet, zerlegt die Anzeige auf allen zehn Branchenseiten.

Für die Illustrationen, die ihr liefert, ist sie nicht zuständig. Die kommen als eigene Dateien daneben.

---

## Zwei Dinge, die anders funktionieren, als man denkt

### Menü und Fußleiste stehen fünfzehn Mal da

Jede Seite trägt ihre eigene Kopf- und Fußleiste. Wenn im Menü oder in der Fußleiste ein Wort geändert werden soll, muss das in allen fünfzehn Dateien passieren. **Mach das nicht von Hand.** Sag Bescheid, solche Änderungen laufen in einem Durchgang über alle Seiten.

Dasselbe gilt für die beiden Buttons „Zum Schaufenster" und „Probelauf vereinbaren", die zusammen 93 Mal vorkommen.

### Es gibt eine zweite Textdatei

In `_inhalte/website-texte.md` stehen alle Texte noch einmal in lesbarer Form. **Das ist eine Kopie, keine Quelle.** Änderungen dort landen nicht auf der Website. Wenn du Texte änderst, ändere sie in den HTML-Dateien.

Die Datei ist trotzdem nützlich, um sich einen Überblick zu verschaffen oder Formulierungen zu vergleichen.

---

## Wenn zwei gleichzeitig arbeiten

Solange ihr an verschiedenen Dateien arbeitet, passiert nichts. GitHub führt das zusammen.

Wollt ihr an derselben Seite arbeiten, sprecht euch kurz ab. Sonst meldet GitHub beim Speichern einen Konflikt. Der ist lösbar, kostet aber Zeit.

---

## Sprachregeln für die Texte

Die Website folgt einem festen Ton. Ausführlich steht das in `_inhalte/konzept-website-relaunch.md`, hier das Wichtigste:

- **Keine Gedankenstriche.** Punkt oder Komma stattdessen.
- **Kurze Sätze.** Lieber zwei als einer mit Nebensatzkette.
- **Keine „nicht X, sondern Y"-Konstruktionen.**
- **Wenige Anglizismen.** „Posteingang" statt „Inbox".
- **Siezen.** Die Seiten sprechen Organisationen an.
- Zahlen im Fließtext ausschreiben bis zwölf, darüber Ziffern.

---

## Wo sehe ich das Ergebnis

Auf der Vorschau-Adresse, die in `README.md` steht. Sie aktualisiert sich ein bis zwei Minuten nach jedem Speichern von selbst.

Wenn du nichts siehst: Seite neu laden und dabei die Umschalttaste gedrückt halten. Der Browser hält alte Fassungen manchmal fest.
