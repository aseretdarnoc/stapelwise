# -*- coding: utf-8 -*-
"""Baut den Ordner, der auf den Firmenserver hochgeladen wird.

Enthaelt nur die Website. Die internen Unterlagen bleiben draussen:
_projekt und _inhalte enthalten unbestaetigte Preise, ungeklaerte Bildrechte
und ein noch nicht freigegebenes Kundenzitat. Die haben auf einem Server,
der von aussen erreichbar ist, nichts zu suchen.

    python3 _projekt/paket-fuer-server.py
"""
import os
import shutil
import subprocess

REPO = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ZIEL = os.path.join(os.path.dirname(REPO), "dokland-website-server")

# Alles, was zur Website gehoert. Der Rest bleibt zurueck.
MITNEHMEN = ["index.html", "preise.html", "lokale-ki.html",
             "loesungen", "referenzprojekte", "assets"]

# Innerhalb davon trotzdem ausschliessen
AUSSCHLUSS = [".DS_Store", "img-original", "__pycache__"]


def bauen():
    if os.path.exists(ZIEL):
        shutil.rmtree(ZIEL)
    os.makedirs(ZIEL)

    for name in MITNEHMEN:
        quelle = os.path.join(REPO, name)
        if not os.path.exists(quelle):
            print("  fehlt, uebersprungen: %s" % name)
            continue
        befehl = ["rsync", "-a"]
        for a in AUSSCHLUSS:
            befehl += ["--exclude", a]
        if os.path.isdir(quelle):
            befehl += [quelle + "/", os.path.join(ZIEL, name) + "/"]
        else:
            befehl += [quelle, ZIEL]
        subprocess.run(befehl, check=True)

    seiten = sum(1 for w, _, fs in os.walk(ZIEL) for f in fs if f.endswith(".html"))
    dateien = sum(len(fs) for _, _, fs in os.walk(ZIEL))
    groesse = subprocess.run(["du", "-sh", ZIEL], capture_output=True, text=True).stdout.split()[0]

    print("Fertig: %s" % ZIEL)
    print("  %d Seiten, %d Dateien, %s" % (seiten, dateien, groesse))
    print("\nDiesen Ordner INHALTLICH hochladen, also index.html und die Ordner")
    print("daneben, nicht den Ordner selbst mit hineinlegen.")


if __name__ == "__main__":
    bauen()
