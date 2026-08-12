# AGENTS.md

`@tecsinapse/eslint-config` — published npm package (v5) providing a shared ESLint v9 flat config + Prettier options for TecSinapse TypeScript/React projects. README and commit history are in Portuguese.

## Layout

- `index.mjs` — the ESLint flat config. Exports an **array**; consumers spread it (`export default [...tecsinapseEslintConfig]`). Composes `neostandard({ noStyle: true })`, `typescript-eslint`, react + react-hooks plugins, `@eslint/js`, and `eslint-config-prettier` (must stay last in the array).
- `prettier.mjs` — Prettier options, consumed via subpath `@tecsinapse/eslint-config/prettier.mjs`.
- Only these two files are published (`"files"` field) and re-exported. There is **no build step** — source files are shipped as-is.

## Commands

There are **no scripts** in `package.json`: no tests, no lint, no typecheck, no CI. The package is verified only by the ESLint ecosystem resolving it. Package manager is **pnpm** (`pnpm-lock.yaml`); install with `pnpm install`.

## Release / publish flow (from README)

Versioning uses pnpm's native `version` command (no `standard-version`). Order matters:

1. `pnpm version $VERSION` (`patch`|`minor`|`major` or explicit x.x.x) — bumps `package.json`, creates a commit, and tags `v$VERSION`. `CHANGELOG.md` is **not** auto-generated — update it manually.
2. `git push --follow-tags origin $BRANCH`
3. `pnpm publish`

## Gotchas

- All deps (eslint, prettier, plugins) are regular `dependencies`, not `peerDependencies` — consumers get a locked toolchain. Bumping a version here is a breaking change for downstream projects; update `CHANGELOG.md` accordingly.
- Deps are pinned to major versions that are compatible with ESLint v9 flat config (`~`/`^` in package.json). Do not introduce legacy `.eslintrc` style config.
- The config's own code style (no semicolons, single quotes, per `prettier.mjs`) is not enforced on this repo — `index.mjs` itself uses mixed quotes/indentation; don't reformat it.
