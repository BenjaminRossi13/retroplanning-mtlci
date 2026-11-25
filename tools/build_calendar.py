#!/usr/bin/env python3
"""Génère le calendrier d'abonnement (.ics) à partir de data/base.json.

Utilisé automatiquement par GitHub Actions à chaque publication
(.github/workflows/pages.yml). Peut aussi être lancé à la main :

    python3 tools/build_calendar.py data/base.json calendar/mtlci-2026-27.ics
"""
import json, sys, hashlib
from datetime import date, datetime, timedelta, timezone

SRC = sys.argv[1] if len(sys.argv) > 1 else "data/base.json"
OUT = sys.argv[2] if len(sys.argv) > 2 else "calendar/mtlci-2026-27.ics"

base = json.load(open(SRC, encoding="utf-8"))
CAT = {"blocs": "Bloc", "partiels": "Partiel", "memoire": "Mémoire", "rapport": "Rapport d'alternance", "casfinal": "Cas final"}


def esc(s):
    return str(s or "").replace("\\", "\\\\").replace(";", "\\;").replace(",", "\\,").replace("\r", "").replace("\n", "\\n")


def fold(line):
    """Plie les lignes à 75 octets (RFC 5545) sans couper un caractère UTF-8."""
    out, cur, size = [], "", 0
    for ch in line:
        b = len(ch.encode("utf-8"))
        if size + b > 74:
            out.append(cur)
            cur, size = " ", 1
        cur += ch
        size += b
    out.append(cur)
    return "\r\n".join(out)


def ymd(s):
    return s.replace("-", "")


def next_day(s):
    return (date.fromisoformat(s) + timedelta(days=1)).isoformat()


now = datetime.now(timezone.utc).strftime("%Y%m%dT%H%M%SZ")
lines = [
    "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//MTLCI//Retroplanning//FR", "CALSCALE:GREGORIAN", "METHOD:PUBLISH",
    "X-WR-CALNAME:MTLCI 2026-27 · Échéances", "X-WR-TIMEZONE:Europe/Paris",
    "X-WR-CALDESC:Partiels\\, blocs\\, mémoire et cas final de la promo MSc MTLCI 2026-27 (mis à jour automatiquement)",
    "REFRESH-INTERVAL;VALUE=DURATION:PT6H", "X-PUBLISHED-TTL:PT6H",
    "BEGIN:VTIMEZONE", "TZID:Europe/Paris",
    "BEGIN:DAYLIGHT", "TZOFFSETFROM:+0100", "TZOFFSETTO:+0200", "TZNAME:CEST", "DTSTART:19700329T020000", "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU", "END:DAYLIGHT",
    "BEGIN:STANDARD", "TZOFFSETFROM:+0200", "TZOFFSETTO:+0100", "TZNAME:CET", "DTSTART:19701025T030000", "RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU", "END:STANDARD",
    "END:VTIMEZONE",
]
count = 0
for it in base.get("items", []):
    d = it.get("date")
    if not d:
        continue
    title = it.get("title", "")
    parts = []
    if it.get("description"): parts.append(it["description"])
    if it.get("dateNote"): parts.append("Note : " + it["dateNote"])
    if it.get("evaluation"): parts.append("Notation : " + it["evaluation"])
    en = it.get("en") or {}
    if en.get("title"): parts.append("EN: " + en["title"])
    links = it.get("links") or []
    if links:
        parts.append("Documents :\n" + "\n".join("- " + (l.get("label") or "") + " " + l.get("url", "") for l in links[:8]))
    # SEQUENCE change quand le contenu change -> les agendas mettent à jour l'événement
    seq = int(hashlib.sha1(json.dumps(it, sort_keys=True, ensure_ascii=False).encode()).hexdigest()[:6], 16) % 100000
    ev = ["BEGIN:VEVENT", f"UID:{it['id']}@mtlci-retroplanning", f"DTSTAMP:{now}", f"LAST-MODIFIED:{now}", f"SEQUENCE:{seq}",
          "SUMMARY:" + esc(f"[{CAT.get(it.get('category'), '')}] {title}")]
    ts, te = it.get("timeStart"), it.get("timeEnd")
    if ts:
        if not te:
            h = min(23, int(ts[:2]) + 1)
            te = f"{h:02d}{ts[2:]}"
        ev += [f"DTSTART;TZID=Europe/Paris:{ymd(d)}T{ts.replace(':', '')}00", f"DTEND;TZID=Europe/Paris:{ymd(d)}T{te.replace(':', '')}00"]
    else:
        ev += [f"DTSTART;VALUE=DATE:{ymd(it.get('startDate') or d)}", f"DTEND;VALUE=DATE:{ymd(next_day(d))}", "TRANSP:TRANSPARENT"]
    if it.get("room"):
        ev.append("LOCATION:" + esc(it["room"]))
    parts.append("⚠ Les mails de Mme Elisabeth Jouannaux et Mme Cherifa Meguenni sont prioritaires : vérifiez-les pour toute mise à jour. Ce calendrier aide au suivi mais ne remplace pas les informations officielles.")
    ev.append("DESCRIPTION:" + esc("\n\n".join(parts)))
    if it.get("dateConfidence") == "provisoire":
        ev.append("STATUS:TENTATIVE")
    for trig in ("-P7D", "-P1D"):
        ev += ["BEGIN:VALARM", "ACTION:DISPLAY", "DESCRIPTION:" + esc(title), f"TRIGGER:{trig}", "END:VALARM"]
    ev.append("END:VEVENT")
    lines += ev
    count += 1
lines.append("END:VCALENDAR")

import os
os.makedirs(os.path.dirname(OUT) or ".", exist_ok=True)
with open(OUT, "w", encoding="utf-8", newline="") as f:
    f.write("\r\n".join(fold(l) for l in lines) + "\r\n")
print(f"{count} événements écrits dans {OUT}")
