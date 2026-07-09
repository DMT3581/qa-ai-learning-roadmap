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

