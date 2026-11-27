# Rétroplanning MTLCI 2026-27

Outil de la promo MSc MTLCI 2026-27 (KEDGE) pour suivre toutes les échéances de l'année : partiels, blocs de compétences (ECF/MS), mémoire, rapport d'alternance et cas final.

## Comment ça marche

| Partie | Où | Qui la modifie |
|---|---|---|
| **Base commune** : dates, horaires, salles, consignes, dossiers de cours | `data/base.json` | Le responsable du dépôt uniquement |
| **Calendrier d'abonnement** (.ics) | `calendar/mtlci-2026-27.ics`, généré automatiquement | Personne : il est recréé à chaque publication |
| **Modifications de chaque étudiant** : validations ✓, notes, dates, échéances ajoutées | Le navigateur de l'étudiant (stockage local) | Chaque étudiant, pour lui seul |

Ce qu'un étudiant coche ou modifie n'est visible que par lui et n'affecte jamais les autres. Ses modifications restent dans son navigateur : il doit revenir depuis le même navigateur et le même appareil (favori conseillé).

## Mettre à jour la base (pour toute la promo)

1. Sur GitHub, ouvrir `data/base.json` → icône ✏️ (Edit).
2. Modifier ou ajouter une échéance (voir le format ci-dessous), puis **Commit changes** sur `main`.
3. GitHub Actions republie le site et le calendrier en 1 à 2 minutes (onglet **Actions**).

Les étudiants voient un badge **Nouveau / Modifié** sur ce qui a changé. Les agendas abonnés se mettent à jour d'eux-mêmes (quelques heures pour Google Agenda).

### Format d'une échéance

```jsonc
{
  "id": "bloc-ecf2",                       // identifiant unique, ne jamais le changer
  "category": "blocs",                     // blocs | partiels | memoire | rapport | casfinal
  "title": "ECF2 · International Transport",
  "date": "2027-05-07",                    // AAAA-MM-JJ (vide = « À définir »)
  "startDate": "2027-05-03",               // optionnel : barre pleine dans le Gantt
  "timeStart": "13:00", "timeEnd": "16:00",// optionnel
  "room": "Amphithéâtre 8.113",            // optionnel
  "description": "…", "dateNote": "…", "evaluation": "…",
  "dateConfidence": "provisoire",          // optionnel : affiche « Date provisoire »
  "checklist": [{"t": "Livrable 1"}],      // optionnel
  "links": [{"label": "Dossier", "url": "https://…"}],
  "source": "Document d'origine",
  "en": {"title": "…", "description": "…"} // optionnel : version anglaise
}
```

Un `id` modifié est vu comme une nouvelle échéance : les étudiants perdraient leur validation sur l'ancienne.

## Abonnement agenda

Bouton **🔔 Abonner mon agenda** dans le menu : Google Agenda, Apple Calendar (iPhone/Mac), Outlook (école/entreprise ou personnel), ou lien à copier. Le calendrier contient la base commune (pas les échéances personnelles).

## Publication sur GitHub Pages (une seule fois)

1. **Settings → Pages → Build and deployment → Source : GitHub Actions**.
2. Pousser sur `main` (ou **Actions → Publier le site → Run workflow**).
3. L'adresse du site apparaît dans **Settings → Pages** : `https://<utilisateur>.github.io/<dépôt>/`.

## Structure

```
index.html                 page de l'application
assets/app.css             styles
assets/app.js              logique (vues, calque personnel, recherche, FR/EN, agenda)
data/base.json             base commune  ← le seul fichier à modifier au quotidien
tools/build_calendar.py    génère le calendrier .ics depuis la base
calendar/                  calendrier généré (recréé par GitHub Actions)
.github/workflows/pages.yml  publication automatique
```

## Données personnelles

Le dépôt et le site sont **publics** : n'y mettez ni document confidentiel ni données personnelles. Aucune liste de groupes ni aucun lien Drive n'est publié.
