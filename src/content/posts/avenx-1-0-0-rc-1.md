---
title: "Avenx.js 1.0.0-rc.1 is here"
meta_title: "Avenx.js 1.0.0-rc.1 is here"
description: "The first release candidate for Avenx.js 1.0.0 is on npm. The feature set is locked — now we need you to try it and break it."
date: 2026-09-22T19:13:14Z
categories: ["Releases", "Announcements"]
authors: ["Avenx.js Team"]
tags: ["avenx", "v1.0.0", "release-candidate", "release"]
discussion: "https://github.com/Avenx-JS/avenx-js/discussions/1322"
draft: false
---

After a lot of work, refactoring, testing, debugging — and probably more commits than we want to admit — **Avenx.js 1.0.0-rc.1 is now available.**

This is the first release candidate for the upcoming 1.0.0 release.

## What a release candidate means

The core feature set for 1.0 is now essentially locked in. From here on the focus is no longer on adding new features, but on making sure that what is already there is:

- reliable
- predictable
- well documented
- pleasant to use
- ready for real projects

The RC has gone through extensive validation across the compiler, runtime, CLI, plugins, production builds and end-to-end tests.

## Try it

```bash
npm install avenx-core@rc
```

Or pin the exact version:

```bash
npm install avenx-core@1.0.0-rc.1
```

## What we'd love from you

This is the point where real-world usage becomes incredibly valuable. If you try the RC, tell us about:

- bugs or unexpected behavior
- documentation that is unclear or missing
- API ergonomics and developer experience
- performance issues
- things that feel unnecessarily complicated
- problems when building a real application with Avenx.js

Even small issues are useful at this stage. If something feels strange, [open an issue](https://github.com/Avenx-JS/avenx-js/issues) or start a discussion — you don't need to be an Avenx expert to give feedback.

## What's next

If no significant release-blocking issues turn up, the RC becomes the foundation for the stable release.

> The release date announced alongside this RC was October 31st, 2026. It has since moved to January 31st, 2027 — see [the follow-up post](/avenx-v1-release-delayed).

This is a big milestone for a project that started as a fairly small experiment and has grown into a complete compiler-driven frontend framework. Thank you to everyone who has tested Avenx.js, opened issues, contributed code, given feedback or simply followed along.

Now we'd really like to see what you build with it. **Let's break it.**

## Links

- [avenx-core on npm](https://www.npmjs.com/package/avenx-core)
- [Documentation](https://docs.avenx-js.com/)
- [Repository](https://github.com/Avenx-JS/avenx-js)
