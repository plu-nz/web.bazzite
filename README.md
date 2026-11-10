# PLUNZ Bazzite services

The public informational site at [bazzite.plu.nz](https://bazzite.plu.nz/) introduces two private services on a personal Bazzite server: Keeper.sh for Google Calendar synchronization and SongMirror for YouTube Music playlist synchronization. Their interfaces are reachable only on the owner's tailnet. The site also provides the privacy policy for the Google OAuth project `bazzite-514313` at `/privacy`.

## Stack and deployment

SolidJS, TypeScript, Vite, the pinned `@plunz/storybook` theme, and Cloudflare Workers Static Assets. The site has no API, account system, or analytics. The host is declared in `wrangler.jsonc`. The static asset fallback serves `/privacy` directly.

Use pnpm:

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm check
pnpm build
pnpm exec wrangler deploy --dry-run
pnpm deploy
```

The [source index](src/README.md), [public assets index](public/README.md), and [workflow index](.github/README.md) describe the files. See [AGENTS.md](AGENTS.md) for maintenance rules.

## Privacy statement sources

- Keeper scopes are in the personal Keeper source at `packages/calendar/src/core/oauth/google.ts` and confirmed by its authorization URL test.
- The Bazzite Keeper and SongMirror Quadlets bind to loopback and persist data in the user's home directory; Caddy and Tailscale expose the interfaces only to the tailnet.
- SongMirror's device code `youtube` scope was supplied by the instance owner. Its Quadlet specifies the YouTube Music token and cache files under `/data`.
- The contact address and deletion by email were confirmed by the instance owner on 10 November 2026. No automatic deletion deadline or token encryption claim is made.

Review the policy whenever a service version, OAuth scope, storage path, or access configuration changes.
