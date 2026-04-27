# Changelog

## 1.0.0 — 2026-04-27

First public npm release.

### Added
- TypeScript source for all three hooks with generic element types and JSDoc comments.
- ESM (`dist/index.mjs`) + CJS (`dist/index.js`) + type definitions (`dist/index.d.ts`) bundles, built with `tsup`.
- `useScrollCount` countdown support (`end < start`).
- `useScrollCount` no-op guard when `end === start` (immediately writes the final value).

### Changed
- `useScrollCount`'s `duration` parameter is now in **seconds** (default `3`), matching `useScrollFadeIn` / `useScrollClipPath` and the documented behavior. The previous JavaScript implementation was milliseconds; existing callers that omitted `duration` are unaffected.
- `useScrollClipPath` now uses `parentElement` (was `parentNode`) for stricter element typing.
- Demo (Create React App) moved to `example/` and consumes the library via `scroll-hooks: file:..`.

### Build / Packaging
- Removed `"private": true`.
- Added `main` / `module` / `types` / `exports` / `files` / `sideEffects` fields.
- Loosened React peer dependency to `>=16.8.0` (any hooks-supporting version).
