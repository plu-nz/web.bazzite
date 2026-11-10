# Workflows

- [ci.yml](ci.yml) calls the shared PLUNZ pnpm check and build workflow on pull requests and pushes.
- [deploy.yml](deploy.yml) calls the shared Cloudflare Worker deployment workflow on pushes to `main` and manual dispatch. It needs the organization or repository `CLOUDFLARE_API_TOKEN` secret.

See the [automation index](../README.md).
