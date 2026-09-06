---
publishedDate: 2026-09-06T18:30:00Z
title: Subpath Imports
description: Subpath imports are a Node-native feature compatible with no-build projects and today's build tools.
---

No one likes to import modules like this:

```typescript
import { unique } from '../../utils/list.ts'
```

It is annoying to mentally navigate and tedious to remap when moving files around. Code completion tools mitigate the pain, but code reviewers still have to read these lengthy import statements.

Using TypeScript's `compilerOptions.paths` option in `tsconfig.json`, this import could be written like this:

```typescript
import { unique } from 'utils/list.ts'
```

Simple, maintainable, and concise.

And that would be fine if TypeScript was the _only_ tool in a given project. The settings for bundlers (`webpack` or `vite`) and testing frameworks (`jest` or `vitest`) would also need updates to match it. Adding a path alias manually is simple most of the time, but debugging misconfigurations is a major headache. (My condolences if you also had to deal with `Cannot find module` error messages.) While there are packages available to automatically keep these in sync, that increases maintenance costs when dependencies need to be updated or replaced.

On top of that, there's a subtle issue lurking in the background. It's obvious to not use a path alias with the same name as a package directly imported, right? What's not obvious is when an alias collides with a transitive dependency. (Did you know there's an NPM package out there named [`utils`](https://npmx.dev/package/utils) last updated in 2015?) The common solution is to prefix the aliases with `@/` because no published packages can be named that way. The earlier example should then use `@/utils/list.ts`.

For the time, this was fine. Annoying, but fine. As far as I was aware, projects without build steps were stuck with relative paths.

Later, when the [release notes for TypeScript v6](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-6-0.html#subpath-imports-starting-with-) dropped, I sat up when I saw support for "Subpath Imports Starting with `#/`" as a highlighted feature. This was the first I heard about "subpath imports" in Node.

According to the release notes, my previous example could be configured and written like this:

```json
// `package.json`
{
  // ...
  "imports": {
    "#/*": "./src/*"
  }
}
```

```typescript
import { unique } from '#/utils/list.ts'
```

What's interesting was that the `#/` bit was the **new** part in that release. It was meant to match the behavior added in the [Node pull request allowing `#/` paths](https://github.com/nodejs/node/pull/60864) merged at the tail end of 2025. To my understanding, this was mainly for convenience so that only one subpath -- `#/*` -- was needed, similar to using `@/*`, to point to `./src/*`. The [subpath imports feature](https://nodejs.org/api/packages.html#subpath-imports), in general, has been available natively in Node since v12.19.0 / v14.6.0 in 2020 thanks to [this pull request](https://github.com/nodejs/node/pull/34117)! This allowed Node projects to have path aliases, like `#utils/*` without affecting external packages nor requiring build tools.

```json
// `package.json`
{
  // ...
  "imports": {
    "#utils/*": "./src/utils/*"
  }
}
```

```javascript
import { unique } from '#utils/list.js'
```

TypeScript and Vite are compatible with this without additional configurations! No more configuration drift/debugging! No more accidental name collisions with real package names! No more being bound to build tools for this code quality-of-life feature!

Here are some examples where I've used this. Enjoy!

- My first published/jokey NPM package - `fridaycountdown` (see on [npmx](https://npmx.dev/package/fridaycountdown)/[GitHub](https://github.com/MarkH817/fridaycountdown/blob/d8601f4888f523f3ba73af0874d7a248c6b11bc2/package.json#L18)). No compilation step needed.
- Used in [eternagame/eterna-chat](https://github.com/eternagame/eterna-chat/blob/37dd44276c5e291bcabff6ca71f2fd274d651f36/package.json#L31) when I was reworking the chat client as part of the migration to the Ergo IRC server.
- [This site's source code](https://github.com/MarkH817/lion-byte.com/blob/cb93bffcf3f60790d4d417944928632de7f8d5e6/package.json#L33).
