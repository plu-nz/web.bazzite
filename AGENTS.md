# Agent instructions

Read this README and the shared PLUNZ context in `plu-nz/.github` before changing the site.

- **Architecture:** `src/index.tsx` renders the two public routes; `src/locale.ts` contains English, Portuguese, and Spanish copy; `src/locale-preference.ts` shares the PLUNZ language cookie; `src/style.css` owns product layout. `public/` holds icons and the manifest. Wrangler deploys Vite output as static assets. No backend or analytics.
- **Responsibilities:** keep service descriptions and the privacy policy specific to Keeper.sh and SongMirror. Check OAuth scopes against source and actual instance configuration before changing claims. Never link to private service interfaces from public pages.
- **Conventions:** use English for repository content, code comments, and internal identifiers. Localize all user-facing copy. Keep semantic HTML, keyboard focus, and phone layouts usable. Every directory needs a README index.
- **Dependencies:** use pnpm and the pinned shared design-system revision. Add packages only for a concrete need.
- **Commands:** `pnpm install --frozen-lockfile`, `pnpm dev`, `pnpm check`, `pnpm build`, `pnpm exec wrangler deploy --dry-run`, `pnpm deploy`.
- **Completion checks:** type-check and build; check `/` and `/privacy` directly, including refresh, metadata, language selection, 320px layout, keyboard navigation, and public HTTPS after deployment.
