---
title: "JavaScript: History"
date: "2021-04-05T12:19:01.0000"
description: "A brief history about JavaScript."
---

**Summary**

Originally was called Mocha but launched as LiveScript then later renamed as JavaScript in a joint announcement with Netscape (now Mozilla) and Sun Microsystems (now Oracle)&mdash;now officially called ECMAScript.
It's no wonder that it's many names pointing to the same language have caused confusion.

When it was standardized with ECMA-262, it must now be called ECMAScript,
however, due to historical fame and relevance of the trademarked name, most people, in general, still call it JavaScript, which actually is the legacy it once was.

`video: https://www.youtube.com/embed/ADEvCJTZefI`

**Table of Contents**

```toc

```

## Names

The many names of JavaScript, before inception and after standardization.

| Name       | Description                                                                        | Year               |
| ---------- | ---------------------------------------------------------------------------------- | ------------------ |
| Mocha      | The original name that Brendan Eich (the creator) had in mind.                     | 1995 (and earlier) |
| LiveScript | The name that was used during its launch (beta release).                           | 1995 (Sep)         |
| JavaScript | Name change due to joint announcement with Sun Microsystems.                       | 1995 (Dec)         |
| JScript    | Microsoft's own implementation of JavaScript used in IE 3.0.                       | 1996 (Aug)         |
| ECMA-262   | The official name of the standard.                                                 | 1997 (Jun)         |
| ECMAScript | The official name of the language to avoid trademark issues with Sun Microsystems. | 1997 (and later)   |

## Versions

And not just names, but also its versions, even after standardization.

| Name            | Description                                                                   | Year                    |
| --------------- | ----------------------------------------------------------------------------- | ----------------------- |
| ES1...ES4       | The first to fourth editions; ES4 being abandoned due to politics.            | 1997 (Jun) ~ 1999 (Dec) |
| ES5             | The fifth edition with _strict mode_ in an attempt to correct design flaws.   | 2009 (Dec)              |
| ES5.1           | The fifth edition that is fully aligned with the third edition (ES3).         | 2011 (Jun)              |
| ES6             | The sixth edition that was later renamed to ECMAScript 2015.                  | 2015 (Jun), pre-release |
| ECMAScript 2015 | The official name of the sixth edition using the release year as its version. | 2015 (Jun), on release  |
| ES2015          | The unofficial but shortened name of the sixth version using year as version. | 2015 (Jun)              |

**Names and versions** together are summed up with the following:

| Name            | Description                                                                         | Example         |
| --------------- | ----------------------------------------------------------------------------------- | --------------- |
| JavaScript      | to refer to the old language that is a trademark of Sun Microsystems.               | JavaScript      |
| ECMAScript YYYY | to refer to the official name of the language using its date of release as version. | ECMAScript 2015 |
| ESYYYY          | to refer to the unofficial but shortened name of the official language's name.      | ES2015          |
| ESX             | to refer to the unofficial but shortest name using its release edition.             | ES6             |

## Modes

With modern implementations of JavaScript, it now has two modes.

### Strict mode

- Introduced on ECMAScript 5 to opt in to a restricted variant of JavaScript
- Not a subset but has a completely different semantics than normal JavaScript
- ES6 keywords such as classes and module syntax uses strict mode implicitly
- ES6 and above editions uses strict mode implicitly

### Sloppy mode

- An unofficial term referred to non-strict mode
- The normal, non-strict mode of JavaScript (a.k.a. legacy JavaScript)

## Core JavaScript

The ECMAScript specification only defines the _Core JavaScript_ implementation with minimal API to work with numbers, text, arrays, sets, and maps.
It does not include any I/O functionalities such as networking, storage, and graphics.

## Platforms

### Host Environments

- The ECMAScript specification uses _host environments_ to mean platforms
- JavaScript is embedded to host environments
- Host environments provide the I/O functionalities

#### Web browsers

- The original host environment for JavaScript
- Remains the most common execution environment
- Input are sent through user's mouse, keyboard and HTTP requests
- Output are displayed through HTML (page structure) and CSS (page style)
- Sandboxed, i.e., operations are confined within what web browsers allow

#### Runtime environments

- Example includes Node.js (2009) and Deno (2018)
- An alternative host environment for JavaScript
- Instead of APIs only for web browsers, allows access to the entire OS

Runtime environments allow to read/write files, send/receive data over network, make/serve HTTP requests, implement web servers and write utility scripts as an alternative to shell (e.g. BASH).
