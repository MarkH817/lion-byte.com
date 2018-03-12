---
date: 2018-03-11
path: /blog/updating-generator-lionbyte
title: Updating generator-lionbyte
type: post
---

On March 9, 2018, I updated my package [`generator-lionbyte`](https://www.npmjs.com/package/generator-lionbyte) to v1.0.1!

Today, I want to share all the changes I made and my thoughts as I was working on it.

If you want to follow along or review the changes at your leisure, here are links to the version tags:

* [v0.4.0](https://github.com/MarkH817/generator-lionbyte/tree/v0.4.0)
* [v1.0.1](https://github.com/MarkH817/generator-lionbyte/tree/v1.0.1)

You can check the diffs on this page:

* [Compare changes from v0.4.0 to v1.0.1](https://github.com/MarkH817/generator-lionbyte/compare/v0.4.0...v1.0.1)

## Why I Decided to Update

I was using VS Code's debugger for Java for homework in my network communications class, and I thought it was a pretty great tool. I wanted to do a better job of debugging my JavaScript projects and rely less on `console.log()`.

I did a quick search for any how-to articles and found [one by Matt Rozema](https://spin.atomicobject.com/2016/10/29/debug-es6-code-in-node-js/). Essentially, there were 3 options: debug the transpiled version, installing another package for debugging, or setting the IDE's configuration to use `babel-node`. All of these options seemed tedious to me, and I wanted to avoid it if I could.

Then I thought, "Maybe I don't need to use `babel-node`?" The feature I absolutely wanted to keep was `async`/`await`; they make it easier to work with `Promise`s. According to [node.green](https://node.green), that particular ES2017 feature is [available all the way back to Node v7.10.1](https://node.green/#ES2017-features-async-functions)! I use the latest available Node version on my personal machines, so I'm content.

As I was looking through the page, I saw that ES6 `import`/`export` was not natively supported. I read Vance Lucas's article [Don’t Transpile JavaScript for Node.js ](http://vancelucas.com/blog/dont-transpile-javascript-for-node-js/) afterward. He basically reaffirmed that I came to the right conclusions. He mentioned that `babel` converts `import`/`export` down to `require()` and `module.exports`. It's still useful for client-side code, since `webpack` can parse and transpile it.

Thus, I decided to start updating my package.

## Prettier

Althought `prettier` doesn't necessarily affect the functionality, this basically helped save me from my past self. The last time I really worked on this project was around mid-December, so I should make everything easier to read and resume. I saw that `prettier` paired well with `standard`.

## Removing `babel-node` Usage

This was tedious, but not difficult. I re-wrote the modules to use `require` and `module.exports` as needed.

Then I saw that the build scripts I wrote using `gulp` would be useless for Node.js specific projects. It was using `gulp-babel` to transpile the code, but I don't intend to write any code to be used for Node versions < 8.

Therefore, I decided that I don't need `gulp` anymore.

## Removing `gulp` Usage

There were a lot of tasks, and I was using `gulp-hub` to let the tasks be split into separate files. The problem was, that took a long time to load all the separate files before running a single task.

The task files were distributed among the subgenerators. The server and default project types no longer needed them, so that was easy. In a way, it was pretty satisfying to delete all those files.

When I went to the static-site project type, I saw that it was heavily relying on `gulp`. It was... not the best, to say the least. I'm starting to realize that I was using way too much RAM during development with that configuration.

## Using `webpack@4` (Legato)

Since I was removing all `gulp` tasks, I thought it would be better to fully utilize `webpack`. Although it recently updated to v4, codenamed "Legato," it's a good chance for me upgrade my other projects using v3.

I previously only used `webpack` to package the JavaScript portion of a project. Now I'm letting it build and bundle everything. Most plugins have already updated to support this version, but some have to be installed with either @latest or @next. As of March 11, 2018, it is the following:

* extract-text-webpack-plugin@next
* html-webpack-plugin@latest

You can look at the `webpack` [configuration files defined here](https://github.com/MarkH817/generator-lionbyte/tree/v1.0.1/src/static-site/templates).

## Lessons Learned

* Node.js versions > 8 already support all JavaScript features I want and _more_
* `prettier` and `standard` code formatters are a nice pair
* `gulp` is still pretty good, but has better use cases for it
* `webpack` does so much for web development
