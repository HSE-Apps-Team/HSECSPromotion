# HSE Computer Science

The site for computer science courses, clubs, and the CS Honor Society at Hamilton Southeastern High School.

Built with React, TypeScript, and Vite. Deployed on Vercel.

## Run it locally

```
npm install
npm run dev
```

## Editing content

Most updates only need a change in `src/data`:

- `site.ts`: club meeting time and room, CSHS application note, contact email
- `courses.ts`: courses and the three pathways
- `clubs.ts`: clubs and Honor Society activities
- `projects.ts`: student built apps (set `former: true` for retired apps)
- `apcsp.ts`: the AP Computer Science Principles page

Images live in `public/images`.

## Vercel settings

- Framework Preset: Vite
- Build Command: `npm run build`
- Output Directory: `dist`

"Redeployment for Vercel Fix"
