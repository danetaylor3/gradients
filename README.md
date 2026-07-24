<h1 align="center">@danetaylor3/gradients</h1>

<p align="center">
  Generative gradient avatars for React. Every seed renders a unique mesh gradient (or a crisp ordered dither) with no stored images and no network.
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@danetaylor3/gradients"><img src="https://img.shields.io/npm/v/@danetaylor3/gradients?color=000&labelColor=000" alt="npm version" /></a>
  <a href="https://bundlephobia.com/package/@danetaylor3/gradients"><img src="https://img.shields.io/badge/gzipped-2.3_kB-000?labelColor=000" alt="gzipped size" /></a>
  <img src="https://img.shields.io/badge/dependencies-0-000?labelColor=000" alt="zero dependencies" />
  <img src="https://img.shields.io/badge/types-included-000?labelColor=000" alt="types included" />
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-000?labelColor=000" alt="license" /></a>
</p>

<p align="center">
  <a href="https://avatars.outpacestudios.com"><b>Live playground →</b></a> &nbsp;·&nbsp;
  <a href="https://avatars.outpacestudios.com/docs"><b>Docs →</b></a> &nbsp;·&nbsp;
  <a href="https://www.npmjs.com/package/@danetaylor3/gradients"><b>npm →</b></a>
</p>

---

Give it any string or number (a user id, an email, a username) and it paints a
unique, good-looking gradient on a `<canvas>`. The same seed always yields the
same gradient, so you get stable avatars with **nothing to store and nothing to
fetch**. Each seed can also render as a crisp ordered dither (`pattern="dither"`),
use your own brand palette (`colors={[...]}`), or render in wide-gamut Display
P3 (`p3`).

## Quick start

Install the package in your app with whichever package manager you use:

```bash
npm i @danetaylor3/gradients   # or: pnpm add / yarn add / bun add
```

```tsx
import { GradientAvatar } from "@danetaylor3/gradients";

function UserAvatar({ user }) {
  return <GradientAvatar seed={user.id} size={40} />;
}
```

Full API, props, and engine helpers are in the
**[package README](./packages/avatars/README.md)** and the
**[docs site](https://avatars.outpacestudios.com/docs)**.

## What's in this repo

| Path | What |
|------|------|
| [`packages/avatars`](./packages/avatars) | **`@danetaylor3/gradients`**, the published React component + bundled gradient engine. |
| [`src`](./src) | The Next.js site at [avatars.outpacestudios.com](https://avatars.outpacestudios.com), the live generator and docs. |

## Local development

This repo is managed with **pnpm** (see `packageManager` in `package.json`): the lockfile and workspace config are pnpm's, and deploys build from them. Use pnpm here even if your own apps use something else.

```bash
pnpm install     # install deps
pnpm dev         # run the site → http://localhost:3000
pnpm build       # production build
pnpm lint        # biome + eslint
pnpm test        # engine property tests (palette stability)
```

The package lives in [`packages/avatars`](./packages/avatars); `pnpm packages:build` from the root (or `pnpm build` inside the package) produces the npm bundle.

## License

[MIT](./LICENSE), free to use. By [Outpace Studios](https://outpacestudios.com).
