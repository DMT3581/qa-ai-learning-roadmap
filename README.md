# Layer 1 Technical Docs (VitePress)

Documentatie interna pentru programul de adoptie AI - Layer 1 (echipa QA).

## Instalare locala

```bash
npm install
npm run docs:dev
```

Deschide http://localhost:5173

## Build de productie

```bash
npm run docs:build
npm run docs:preview
```

Output-ul de build ajunge in `docs/.vitepress/dist` - acesta e folderul care se publica
(pe GitHub Pages / Azure Static Web Apps / orice hosting static).

## Structura

```
docs/
  .vitepress/
    config.mts        <- navigare + sidebar
  01-ai-fundamentals/
  02-prompting-core-skills/
  03-policy-safety/
  04-ai-tools/
  05-responsible-use-habits/   (TBD - Wave 4)
  06-qa-wins/
  07-agents-collaboration/     (TBD - Wave 5)
  08-mindset-judgment/
  index.md            <- pagina de start
  roadmap.md           <- placeholder pentru layer1-content-roadmap.md
```

## De facut

1. Inlocuieste placeholderele `(TBD titlu)` din `docs/.vitepress/config.mts` cu titlurile
   reale de capitole din `layer1-content-roadmap.md`.
2. Redenumeste fisierele `*-tbd.md` cu slug-uri descriptive (ex: `2.2-tbd.md` -> `2.2-clarifying-your-prompt.md`)
   si actualizeaza link-urile din sidebar in acelasi timp.
3. Lipeste continutul fiecarui capitol in sectiunile corespunzatoare din fisierul `.md`.
4. Clarifica numele categoriilor 5 si 7 (in acest moment sunt presupuneri pe baza notitelor
   despre Wave 4 / Wave 5).
5. Ruleaza `npm run docs:dev` ca sa verifici vizual navigarea si continutul.
