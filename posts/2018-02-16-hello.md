---
date: 2018-02-16
path: /blog/hello
title: Hello
type: post
---

Hello! My name is Mark Hernandez, and I am a web developer.

## Previous Site Attempts

Now this isn't the first time I've tried to build my personal site. I think I tried about two or three times? I deleted those versions, so I can't provide any visual comparisons.

### Beginning

At first, I tried Jekyll. (This was all before I used NodeJS. Probably in my second year of college.) It was great, but running Ruby on Windows wasn't. I believe I was trying to use LESS instead of SASS. I couldn't modify it very much because I was missing some gems. I left it untouched for a long time and eventually scrapped it.

By all means, Jekyll is still a great static site generator and is very robust! The documentation is well-organized and thorough.

### One and a Half Years Later

I had a pretty good understanding of NodeJS, React, Gulp, and Webpack. I made my custom Yeoman generator ([generator-lionbyte](https://github.com/MarkH817/generator-lionbyte)) for myself to demonstrate my understanding of the tools.

I used this to try making my personal site again. Since I was using this custom configuration, everything had to be changed manually. I took a step back and searched for a better solution for myself.

## Hello Gatsby

Now this... this is beautiful.

With Gatsby, I created this site within 2-3 weeks, and it's way better than anything I attempted to do before. All pages are built on React components. The development and build processes for Webpack were already configured! Most importantly, there's a huge ecosystem of plugins to extend Gatsby's abilities!

Where was I when this lovely static-site generator came out? This is probably going to be my go-to tool for any front-end portion of future projects!

### Netlify Deployment

Originally, I was just deploying to GitHub pages. It's fine, but I wanted to use a custom domain name. Unfortunately, I wouldn't have had `https` if I stayed there.

After scrolling around on Twitter, I saw a couple tweets mentioning Netlify. It's incredible how simple it is to deploy there -- with `https` support too! It builds and deploys from my main branch on the repository.

## Lessons Learned

- Gatsby and Netlify are so great individually and together
- Webpack does a lot more than what I realized
- My appreciation for open source projects continuously increases
