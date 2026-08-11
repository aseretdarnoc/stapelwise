# Stapelweise (dok.land) — Website

Der Website-Entwurf für **Stapelweise** als lauffähiges HTML-Gerüst. 15 Seiten, kein Build-Schritt, keine Abhängigkeiten.

**Vorschau:** _hier die GitHub-Pages-Adresse eintragen, sobald sie steht_

---

## Für wen was gilt

| Du willst … | Lies |
|---|---|
| Texte redigieren oder Bilder einsetzen | **[MITARBEIT.md](MITARBEIT.md)** |
| wissen, wie das Projekt entstanden ist | `_projekt/HANDOVER.md` |
| wissen, was noch fehlt | `_projekt/offene-punkte.md` |
| am Design oder CSS arbeiten | `_projekt/design/design-tokens.md` und `_projekt/design/komponenten.md` |
| das Repository und die Vorschau einrichten | `_projekt/einrichtung-github.md` |

---

## Aufbau

```
.
├── index.html               Startseite
├── preise.html
├── lokale-ki.html
├── loesungen/
│   ├── index.html           Übersicht Branchen, Anwendungsfälle, Dokumentarten
│   └── branchen/            zehn Branchenseiten
├── referenzprojekte/        eine Fallstudie
├── assets/
│   ├── css/styles.css       das gesamte Design, 39 KB
│   ├── js/app.js            Anzeigelogik, 12 KB, keine Abhängigkeiten
│   ├── fonts/               Bricolage Grotesque
│   ├── icons.svg            52 Symbole als Sprite
│   └── img/                 Bilder, web-tauglich
│       └── klappanzeigen.png alle 77 Motive der Klappanzeigen in einem Raster
├── _inhalte/                Texte und Auswertungen als Markdown (Kopien, keine Quelle)
└── _projekt/                Projektunterlagen, Design-Doku, Exportskripte, Referenz
```

Die Ordner mit Unterstrich gehören nicht zur Website. Sie werden mit ausgeliefert, aber nicht verlinkt.

---

## Lokal ansehen

```
python3 -m http.server 8000
```

Dann `http://localhost:8000` öffnen.

Ein Server wird gebraucht. Über `file://` bleiben die Symbole leer, weil ein externes SVG-Sprite so nicht geladen wird.

---

## Wichtig zu wissen

**Alle Pfade sind relativ.** Deshalb läuft die Seite an der Wurzel einer Domain genauso wie unter `benutzername.github.io/dokland-website/`. Jede Seite trägt den Präfix ihrer Verzeichnistiefe: auf der Startseite `assets/css/styles.css`, auf einer Branchenseite `../../assets/css/styles.css`. Im CSS ist der Bezugspunkt die CSS-Datei selbst, dort steht die Schrift als `../fonts/…`.

**Kopf- und Fußleiste stehen in jeder der 15 Dateien.** Das ist Absicht, solange kein Framework feststeht. Änderungen daran müssen überall nachgezogen werden.

**Das ist ein Design-Entwurf, kein fertiges Frontend.** Es fehlen Barrierefreiheitsprüfung, Bildoptimierung, Formulare, Analytics, Consent-Verwaltung sowie Impressum und Datenschutz. Ausführlich in `_projekt/offene-punkte.md`.

---

## Woher die Dateien kommen

Bis August 2026 war die Quelle ein einzelner Design-Prototyp, `wireframe.html`, mit allen Seiten in einer Datei und Reiter-Navigation. Daraus sind diese 15 Seiten exportiert worden.

**Seit dem Umzug in dieses Repository sind die Dateien hier die Quelle.** Der Prototyp liegt eingefroren unter `_projekt/referenz/wireframe-eingefroren.html` und dient nur noch als Nachschlagewerk. Wer ihn ändert, ändert nichts an der Website.

Die Exportskripte in `_projekt/export-skripte/` haben den Umzug erzeugt. Sie werden nicht mehr gebraucht und liegen nur zur Nachvollziehbarkeit bei. **Nicht erneut laufen lassen**, sie würden die Arbeit in diesem Repository überschreiben.

---

## Bilder in Originalauflösung

Im Repository liegt nur die Web-Fassung, längste Kante 800 Pixel, zusammen 2,1 MB. Die Originale, zusammen 71 MB, liegen außerhalb in der gemeinsamen Ablage. Sie sind über `.gitignore` ausgeschlossen, damit das Repository schlank bleibt.
