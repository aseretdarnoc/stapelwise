# -*- coding: utf-8 -*-
"""OPTIONAL. Zum Hochladen wird dieses Skript nicht gebraucht.

Die Website liegt im Repository fertig zum Kopieren. Wer sie auf einen Server
bringen will, laedt die Dateien einfach hoch, siehe HOCHLADEN.md.

Dieses Skript nimmt einem zwei Handgriffe ab:

    python3 _projekt/paket-fuer-server.py
        Legt einen Ordner an, in dem nur die Website steht.
        Die internen Unterlagen aus _projekt und _inhalte bleiben draussen.

    python3 _projekt/paket-fuer-server.py live
        Dasselbe, aber fuer den oeffentlichen Auftritt: nimmt die
        Vorschau-Sperre heraus, also noindex aus allen Seiten und Disallow
        aus robots.txt. Listet vorher auf, was einem Livegang im Weg steht.

Beides laesst sich auch von Hand machen. Das Skript ist nur schneller.
"""
import io
import os
import re
import shutil
import subprocess
import sys

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MITNEHMEN = ["index.html", "preise.html", "lokale-ki.html", "404.html", "robots.txt",
             "loesungen", "referenzprojekte", "assets"]
AUSSCHLUSS = [".DS_Store", "img-original", "__pycache__"]

ROBOTS_LIVE = "User-agent: *\nAllow: /\n"


def blockaden():
    """Was einem oeffentlichen Auftritt heute noch im Weg steht."""
    seiten = []
    for w, ds, fs in os.walk(REPO):
        ds[:] = [d for d in ds if not d.startswith((".", "_"))]
        seiten += [os.path.join(w, f) for f in fs if f.endswith(".html")]
    offen, platzhalter = 0, 0
    for s in seiten:
        t = io.open(s, encoding="utf-8").read()
        for m in re.finditer(r"<button[^>]*>(.*?)</button>", t, re.S):
            if re.sub(r"\s+", " ", re.sub(r"<[^>]+>", "", m.group(1))).strip() in (
                    "Zum Schaufenster", "Probelauf vereinbaren"):
                offen += 1
        for k in ["illu-slot", "role-illu-slot", "author-photo-slot", "logo-fallback"]:
            platzhalter += len(re.findall(r'class="[^"]*(?<![\w-])%s(?![\w-])' % k, t))
    fehlt = [n for n in ("impressum.html", "datenschutz.html")
             if not os.path.exists(os.path.join(REPO, n))]
    return offen, platzhalter, fehlt


def bauen(modus):
    ziel = os.path.join(os.path.dirname(REPO),
                        "dokland-website-" + ("live" if modus == "live" else "vorschau"))
    if os.path.exists(ziel):
        shutil.rmtree(ziel)
    os.makedirs(ziel)

    for name in MITNEHMEN:
        quelle = os.path.join(REPO, name)
        if not os.path.exists(quelle):
            print("  fehlt, uebersprungen: %s" % name)
            continue
        befehl = ["rsync", "-a"]
        for a in AUSSCHLUSS:
            befehl += ["--exclude", a]
        befehl += ([quelle + "/", os.path.join(ziel, name) + "/"] if os.path.isdir(quelle)
                   else [quelle, ziel])
        subprocess.run(befehl, check=True)

    if modus == "live":
        io.open(os.path.join(ziel, "robots.txt"), "w", encoding="utf-8").write(ROBOTS_LIVE)
        muster = re.compile(
            r'[ \t]*<!-- VORSCHAU:.*?-->\n[ \t]*<meta name="robots" content="noindex, nofollow">\n',
            re.S)
        entfernt = 0
        for w, _, fs in os.walk(ziel):
            for f in fs:
                if not f.endswith(".html"):
                    continue
                p = os.path.join(w, f)
                t = io.open(p, encoding="utf-8").read()
                neu, n = muster.subn("", t)
                if n:
                    io.open(p, "w", encoding="utf-8").write(neu)
                    entfernt += n
        print("  Vorschau-Sperre herausgenommen: robots.txt und %d Seiten" % entfernt)

    seiten = sum(1 for _, _, fs in os.walk(ziel) for f in fs if f.endswith(".html"))
    dateien = sum(len(fs) for _, _, fs in os.walk(ziel))
    groesse = subprocess.run(["du", "-sh", ziel], capture_output=True, text=True).stdout.split()[0]
    print("\nFertig: %s" % ziel)
    print("  Modus %s, %d Seiten, %d Dateien, %s" % (modus, seiten, dateien, groesse))

    if modus == "live":
        offen, platzhalter, fehlt = blockaden()
        print("\n  ACHTUNG, vor dem oeffentlichen Auftritt noch offen:")
        print("    %d Buttons ohne Ziel (Schaufenster und Probelauf)" % offen)
        print("    %d Bildplatzhalter" % platzhalter)
        if fehlt:
            print("    Pflichtseiten fehlen: %s" % ", ".join(fehlt))
        print("    Rechte an Schrift, Logos, Portraits und dem praenatura-Zitat ungeklaert")
        print("    Ausfuehrlich in _projekt/offene-punkte.md")

    print("\n  Den INHALT dieses Ordners hochladen, nicht den Ordner selbst.")


if __name__ == "__main__":
    modus = sys.argv[1] if len(sys.argv) > 1 else "vorschau"
    if modus not in ("vorschau", "live"):
        sys.exit("Modus muss 'vorschau' oder 'live' sein.")
    bauen(modus)
