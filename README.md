# LUMC Coding Cafe Web

SvelteKit implementation of the LUMC Research Software Training Portal

## Tech stack

- SvelteKit (TypeScript)
- Tailwind CSS (base import present)
- Adapter Auto

## Implemented routes

- `/` Home
- `/training` Training Catalogue (search + level filter)
- `/cafe` Coding Cafe
- `/resources` Resource Library
- `/calendar` Training Calendar
- `/about` About the Program
- `/contact` Contact form

## Project structure

- `src/routes/+layout.svelte`: shared header/footer layout
- `src/routes/+page.svelte`: homepage
- `src/routes/<route>/+page.svelte`: page routes
- `src/lib/data.ts`: shared training/event/resource/team data

## Local development

```bash
npm install
npm run dev
```

Run checks:

```bash
npm run check
```

## Build

```bash
npm run build
npm run preview
```

## GitHub push (this repo)

Current remote:

```bash
git remote -v
# origin git@github.com:LUMC-DCC/coding_cafe.git
```

If SSH is configured:

```bash
ssh -T git@github.com
git push -u origin main
```

If SSH key auth is not configured, switch to HTTPS:

```bash
git remote set-url origin https://github.com/LUMC-DCC/coding_cafe.git
git push -u origin main
```
