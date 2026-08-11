# Einrichtung auf GitHub

Einmalig von Teresa auszuführen. Danach arbeiten alle im Browser, siehe `MITARBEIT.md`.

---

## Zuerst eine Entscheidung: privat oder öffentlich

**Das Repository muss privat sein.** In den Seiten stecken Dinge, die noch nicht freigegeben sind:

- Das Kundenzitat von praenatura trägt den Vermerk „Entwurf zur Freigabe durch praenatura"
- Nutzungsrechte an den Porträtfotos und den Kundenlogos sind nicht dokumentiert
- Die Preise auf der Preisseite sind ein Vorschlag, nicht bestätigt
- Die Lizenz der Schrift Bricolage Grotesque ist nicht geprüft

Alles davon steht in `_projekt/offene-punkte.md`. Ein öffentliches Repository würde diese Inhalte veröffentlichen, samt vollständiger Änderungshistorie.

**Daraus folgt eine Einschränkung:** GitHub Pages funktioniert bei privaten Repositories nur mit einem bezahlten Plan (Pro, Team oder Enterprise). Im kostenlosen Plan lassen sich Seiten nur aus öffentlichen Repositories ausliefern.

Für die gemeinsame Vorschau gibt es deshalb zwei Wege:

| Weg | Vorteil | Haken |
|---|---|---|
| **Firmenserver** | kein zusätzliches Konto, volle Kontrolle, passt zur späteren Übergabe | jemand muss nach Änderungen neu hochladen, oder es braucht eine kleine Automatik |
| **GitHub Pages mit bezahltem Plan** | aktualisiert sich nach jedem Speichern von selbst | kostet pro Person und Monat |

Empfehlung: Firmenserver für die Vorschau, GitHub privat für die Zusammenarbeit. Der Ordner lässt sich unverändert hochladen, die Pfade sind relativ und funktionieren in jedem Unterverzeichnis.

---

## 1. Repository anlegen

Auf github.com: **New repository**

- Name: `dokland-website`
- Sichtbarkeit: **Private**
- Keine Häkchen bei README, .gitignore oder Lizenz. Die Dateien sind bereits da.

## 2. Hochladen

Im Terminal, im Ordner `dokland-website`:

```bash
git remote add origin https://github.com/DEINBENUTZERNAME/dokland-website.git
git push -u origin main
```

Beim ersten Mal fragt GitHub nach Zugangsdaten. Statt des Passworts wird ein Token verlangt, das legst du unter Settings → Developer settings → Personal access tokens an. Alternativ GitHub Desktop benutzen, das erledigt die Anmeldung selbst.

## 3. Die beiden einladen

Repository → **Settings** → **Collaborators** → **Add people**

Rolle **Write** vergeben. Damit dürfen sie Dateien ändern und hochladen, aber keine Einstellungen ändern und das Repository nicht löschen.

Sie bekommen eine Einladung per E-Mail und müssen sie annehmen.

## 4. Vorschau einrichten

### Auf dem Firmenserver

Den gesamten Ordner hochladen, ohne `.git`. Zum Beispiel nach `/var/www/vorschau/stapelweise/`. Dann ist die Seite unter `https://eureadresse.de/vorschau/stapelweise/` erreichbar.

Nach Änderungen auf GitHub neu hochladen. Wer das automatisieren will, richtet auf dem Server einen `git pull` per Cron ein oder eine GitHub Action, die per SSH kopiert.

### Oder über GitHub Pages, falls ein bezahlter Plan vorhanden ist

**Settings** → **Pages** → Source: *Deploy from a branch* → Branch: `main`, Ordner: `/ (root)` → **Save**

Nach ein bis zwei Minuten steht oben die Adresse, meist `https://BENUTZERNAME.github.io/dokland-website/`.

Die Datei `.nojekyll` liegt bereits im Repository. Ohne sie würde GitHub die Ordner mit Unterstrich ignorieren.

## 5. Adresse eintragen

Die Vorschau-Adresse oben in `README.md` eintragen, damit alle sie finden. Das ist die einzige Stelle, an der sie steht.

---

## Was danach gilt

**Die Dateien in diesem Repository sind die Quelle.** Der alte Prototyp `wireframe.html` ist eingefroren und liegt nur noch als Nachschlagewerk unter `_projekt/referenz/`. Wer dort etwas ändert, ändert nichts an der Website.

**Das veröffentlichte Artifact** unter claude.ai zeigt weiterhin den Prototyp. Es ist ab jetzt eine Momentaufnahme vom 11. August 2026 und wächst nicht mit. Entweder pflegt ihr es bewusst weiter, oder ihr ersetzt es durch die Vorschau-Adresse.

**Die Exportskripte** in `_projekt/export-skripte/` haben den Umzug erzeugt und werden nicht mehr gebraucht. Nicht erneut laufen lassen, sie würden die Arbeit hier überschreiben.
