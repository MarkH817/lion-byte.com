---
date: 2018-06-17
path: /blog/ds-xkit-and-typescript
title: Design Studio, XKit, and TypeScript
type: post
---

It's been over six weeks since my spring semester ended and a quite a bit has happened since my last post.

## Design Studio

In my capstone course for my computer science major, [I received a Rockstar Developer award](https://newsroom.unl.edu/announce/cse/7994/45857) for "outstanding work leading and contributing to the overall final product and growth of their team members." I am grateful for the peer nomination for the award. I loved being the team's Development Manager for in this year.

![Design Studio Rockstar Award attributed to Mark Hernandez for the 2017-2018 year.](../media/ds-rockstar.jpg)

After the Design Studio showcase, I chose to keep working on the project as an Undergraduate Research Assistant for Myra Cohen. She was amazed at the outcome and welcomed my continued contribution to this and other undergraduate research projects. I'm looking forward to that!

## XKit

Since I have had a bit of spare time outside of that project, I've been itching to contributing to [an open source project, XKit](https://github.com/new-xkit/XKit).

Tumblr is a blogging platform that I use fairly frequently, and XKit feels like a must-have since there's so many enhancements. XKit is a browser extension that customizes and improves Tumblr's interface. There's a whole collection of enhancements available within the project. My favorite enhancement is "One-Click Postage" since it makes reblogging posts easier with less clicks.

XKit has been actively maintained since 2014 and has some legacy code to show. I love using the extension and wanted to lend any assistance I could provide. I started by improving their CI test speed by updating their configurations. It was minor but needed since they were using an unmaintained version of Node.

I then saw that only `eslint` was used in their test script. No unit or integration tests. Due to the project’s structure, their testing options were limited without doing a whole rework.

Initially, I wanted to modularize the project to allow more tests to be added. They've discussed doing so before in a GitHub issue labeled [The Great Modularization Project#478](https://github.com/new-xkit/XKit/issues/478). It became very apparent extremely quickly that this wasn't going to be an simple task.

The structure of the API revolves around a single god-object variable with parts of it being defined dynamically. Those were not great practices but that's due to the design choices made early on in the project.

Instead of tackling a large task, I thought it would be better to try and improve their test suite. That way, big changes can be made faster without the fear of breaking any features.

Given that unit tests weren't currently available, I looked into using TypeScript since it provides a type system on top of JavaScript.

## TypeScript

When I first learned about TypeScript two years ago, I will admit that I was hesitant about using it. I felt fairly confident that I could do without it, so I just wrote it off as "JavaScript for those who know just Java."

However, after I swapped over to VS Code back in December, I noticed nice autocomplete suggestions that were very relevant. This was because of the Intellisense packed into the editor. It even gave type specific methods since it was using TypeScript as well! This, in my opinion, was a good way of introducing TypeScript.

I added TypeScript to my side projects in later months and found a couple uncaught faults. It was mostly just placing the wrong input in a libary's function. The configuration was very simple, and the documentation was stellar!

So after trying it out, I decided to add TypeScript to the XKit project.

It's been a challenge to write the declaration file since the API docs are both incomplete and outdated in some places. I took time to look into the source code and took notes. I wrote a decent chunk of definitions before running `tsc` and there were around 700 marked errors.

Many errors came from type mismatches in some extensions. The rest of those were because some API methods were defined in another file. This was just recently refactored so that they're all in one file, which makes my task a lot easier.

This is still a work in progress, and I will be happy to make more contributions to this and other projects in the future.
