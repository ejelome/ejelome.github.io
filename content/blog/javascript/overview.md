---
title: "JavaScript: Overview"
date: "2021-04-01T19:57:03.0000"
description: "A quick overview for the JavaScript programming language."
---

**Summary**

JavaScript (or JS) is a programming language, originally of the web but has also taken over the desktop, tablet, and mobile markets.
It is the most deployed programming language in history. With Node.js, which enabled it to be used outside of web browsers,
it is now the most used programming language.

JavaScript is a high-level, dynamic, and interpreted programming language that is suited for functional and object-oriented styles of programming.
It has untyped variables and its syntax are loosely based on Java, though they are completely unrelated.
It has first-class functions derived from Scheme and uses prototype-based inheritance based on the lesser known language called Self.

It since have outgrown its scripting roots and is now robust enough to be treated as a general purpose programming language that is suitable for different kinds of programs.

`video: https://www.youtube.com/embed/1dgaga-KoY0`

**Table of Contents**

```toc

```

## A programming language

JavaScript (or JS) is a programming language created by Brendan Eich and announced its release on December 4, 1995 by Netscape (now Mozilla) and Sun Microsystems (now Oracle).

## One of WWW's core technologies

It is one of the core technologies of the web, aside from HTML and CSS.
It is the language of web browsers, commonly referred to as the client.
And with runtime environments like Node.js or Deno, it can also be run on the server.

## Conforms to ECMAScript specification

JavaScript conforms to the ECMAScript specification, in that:

| Keyword            | Description                                                                                                     |
| ------------------ | --------------------------------------------------------------------------------------------------------------- |
| ECMAScript         | Specification defined in ECMA-262 for creating a general-purpose scripting language.                            |
| ECMA-262           | Standard published by Ecma International containing the specification for a general-purpose scripting language. |
| Ecma International | Organization that creates a standard for technologies.                                                          |
| ECMA               | European Computer Manufacturers Association                                                                     |

## APIs and I/O facilities

JavaScript has APIs for manipulating text, dates, regular expressions, data structures and the DOM (or Document Object Model).

The I/O facilities of JavaScript, however, are provided by web browsers or runtime environments, not from the ECMAScript specification.

## High-level and interpreted

JavaScript is a high-level programming language which is interpreted by web browsers or runtime environments.

## JIT compiled

Old versions of JavaScript were simply executed directly from web browsers but with the introduction of V8 engine used by Chrome,
JavaScript code can now be converted into bytecode then back to the interpreter for better performance.

The bytecode can also be used by JIT compilers to produce machine code.
For instance, in V8, through the optimizing compiler.

## Single threaded

JavaScript is single threaded, which means that it can only execute one statement at a time.

### Supports multithreading

To mitigate this limitation, modern web browsers provide what are called Web workers to support multithreading.

## Synchronous

JavaScript is synchronous which makes its code execute synchronously, meaning sequentially, in order, line by line and in a blocking manner.

### Asynchronous support

To work around this limitation, web browsers provide what are called Web APIs such as setTimeout, DOM events, Fetch and so on.

And since ES6, JavaScript provides Promise, and in ES8, async/await to do asynchronous programming.

## Multiparadigm

JavaScript is event-driven with a mix of imperative and declarative paradigms.

| Keyword       | Description                                                                                                    |
| ------------- | -------------------------------------------------------------------------------------------------------------- |
| Event-driven  | The flow of the program is based on events, such as user actions like clicking the mouse or pressing a button. |
| Imperative    | Has control flow where the syntax is influenced by Java.                                                       |
| Declarative   | Has first class functions and lambdas influenced by Scheme.                                                    |
| Prototypal OO | Inherit objects through prototypes influenced by Self.                                                         |

## Dynamically typed

JavaScript is a dynamically-typed programming language where the interpreter or runtime environment assign variables their types at runtime based on their values,
such as, Boolean for true or false, Number for integers, String for quotes and so on.

### Duck typing

JavaScript also uses a style called duck typing, where the types of arguments in methods or function bodies aren't checked or tested,
instead through behavior, documentation and clear code.

Unlike statically typed programming languages, in JavaScript, a variable can change types over time.

## Weakly typed

JavaScript is also weakly typed (or loosely typed), by which it doesn't enforce correct typing and will do implicit type conversion between types when needed.
