---
title: "JavaScript: Crash Course"
date: "2021-04-27T19:21:09.0000"
description: "A compressed intro of the core JavaScript API."
---

**Summary**

**TODO**

`video: https://www.youtube.com/embed/#`

**Table of Contents**

```toc

```

## Comments

- Comments are texts that can be included with code
- These are ignored (i.e. not executed) by JavaScript engines

### Single line

A single line comment starts with two forward slashes (`//`).

```javascript
> //
undefined
```

### Multi-line

A multi-line comment starts with a forward slash followed by an asterisk (`/*`)
and ends with an asterisk followed by a forward slash (`*/`).

```javascript
> /* */
undefined
```

## Variables

- Variables are identifiers pointing (wires) to a value

- An identifier:

  - must start with a letter, `_`, or `$` followed letters or numbers
  - is case sensitive (i.e. `myvar` is not the same as `myVar`)
  - must not use [reserved](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#keywords) or
    [future reserved](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#future_reserved_keywords)
    keywords
  - can be declared with `var` keyword followed by an identifier
  - except for `const`, can have an optional value

- ES2015 introduced:

  - `let` and `const` keywords as better alternatives to `var`
  - destructuring assignment to unpack collections to distinct identifiers

### `var`

- Declare a local or implicit global scope identifier with an optional value

- Avoid using it because:

  - it is problematic due to hoisting and implicit global scoping
  - ES2015 introduced `let` and `const` to solve these problems

```javascript
> var x        // can be initialized without a value
undefined
> x
undefined

> var x = 0    // or be initialized with a value
undefined
> x
0

// can't use reserved keywords as identifier name
> var break
SyntaxError: Cannot use the keyword 'break' as a identifier name.
> var break = 0
SyntaxError: Cannot use the keyword 'break' as a identifier name.

// can be redeclared
> var x
undefined
> var x = 0
undefined
> x
0

// can be reassigned
> var x
undefined
> x = 0
0
> x
0

> var x, y     // can declare multiple identifiers
undefined      // with comma operator

> var x; var y // or multiple declarations on
undefined      // a single line with semicolon

// unpack object properties from keys
// with curly braces
> var {x, y} = {x: 0, y: 1}
undefined
> x
0
> y
1

// unpack array items from indices
// with square brackets
> var [x, y] = [0, 1]
undefined
> x
0
> y
1

// identifiers declared with var are hoisted
// i.e. they are put on top before execution
// and are initialized with value undefined
> x = 0
  var x
undefined
> x
0
// is the same as:
> var x
  x = 0
0
> x
0

// identifiers declared within a function
// with var keyword is local to that function
// (i.e. local scope)
> function fn () {
    var x = 0
  }
undefined
> fn()
0
> x
ReferenceError: Can't find variable: x

// identifiers declared within a function
// without var keyword becomes global
// implicitly (i.e. implicit global scope)
> function fn () {
    x = 0
  }
undefined
> fn()
0
> x
0

// variables and functions are in the same scope
// (i.e. function with names are expanded to var)
> function fn () {}
undefined
// is expanded as:
> var fn = function () {}
undefined
```

### `let`

- Introduced in ES2015
- Declare a block scope local identifier with an optional value

- Similar to `var`, except it:

  - can't redeclare an already declared identifier name
  - solves hoisting with TDZ (or Temporal Dead Zone)
  - is in TDZ from the beginning of the block until declaration
  - solves implicit global scoping with block-scoping

```javascript
> let x     // can be initialized without a value
undefined
> x
undefined

> let x = 0 // or be initialized with a value
undefined
> x
0

// can't be redeclared
> let x
undefined
> let x
Can't create duplicate variable: 'x'

// can't be accesed before declaration
> x = 0
  let x
ReferenceError: Cannot access uninitialized variable.

// is blocked scoped
// (i.e. in curly braces)
> let x = 0
  {
    let x = 1
  }
undefined
> x
0

// same in function-scope
> let x = 0
undefined
> function fn () {
    let x = 1
    {
      let x = 2
    }
    return x
 }
undefined
> fn()
undefined
> x
0

// since variables and functions are in the same scope,
// an identifier name used by let can't be used by a
// function as a name
> let fn
undefined
> function fn () {}
SyntaxError: Can't create duplicate variable: 'fn'

// and vise versa
> function fn () {}
undefined
> let fn
SyntaxError: Can't create duplicate variable that shadows a global property: 'fn'
```

### `const`

- Introduced in ES2015
- Declare a read-only constant with a required value

- Similar to `let`, except:

  - it requires an initialized value
  - its initialized value can't be changed (except for objects and arrays)
  - its identifier can't be reassigned (i.e. read-only but still mutable)

```javascript
> const x;    // can't be initialized without a value
SyntaxError: Unexpected token ';'. const declared variable 'x' must have an initializer.

> const x = 0 // must be initialized with a value
undefined

> const x = 0 // can't be reassigned
undefined
> x = 1
TypeError: Attempted to assign to readonly property.

// except for objects
> const o = {x: 0}
undefined
> o.x = 1
1
> o
{x: 1}

// and even arrays
// (a special type of object)
> const a = [0]
undefined
> a.push(1)
2
> a
[0, 1]
```

## Values

JavaScript provides 9 types of values:

- 7 of which are primitive (immutable)

  - 6 of which are data types (`typeof` is `"<type>"`)
  - 1 of which is a structural root (`typeof` is `"object"`)

- 2 of which are non-primitive (mutable)

  - 1 of which is a special non-data (`typeof` is `"object"`)
  - 1 of which is a non-data (`typeof` is `"function"`)

### Primitive Values

- A primitive value is a data that is not an object and has no methods
- All primitive types are immutable (i.e. can't be modified)
- Except for `null` and `undefined`, primitive values have constructors
- Constructors are also known as primitive wrapper objects
- The `valueOf()` method returns the primitive value of a primitive's object

#### `String`

- A string represents a sequence of characters to represent text
- It is wrapped with a pair of quotes&mdash;either single (`''`) or double (`""`)
- There are no difference between single-quoted and double-quoted strings
- The unary plus operator (`+`) can concatenate strings
- The first element of a string starts at index `0`
- The length of a string is its total number of elements
- The `typeof` operator returns the string `"string"`

```javascript
> 'hello, world'        // single-quoted string
"hello, world"

> "hello, world"        // double-quoted string
"hello, world"

> "hello, " + "world"   // concatenate strings
"hello, world"

> "hello, world"[0]     // first element is at index 0
"h"

> "hello, world".length // length is total number of elements
12

> typeof "hello, world" // a "string" type
"string"
```

##### Template literals

- Introduced in ES2015
- Allows embedding expressions on strings
- It uses backticks (` `` `) instead of quotes (`''`, `""`)
- It was called template strings prior to ES2015
- Evaluate expressions with dollar sign followed by a pair of curly braces (`${}`)

```javascript
> let name = "world" // create an identifier named name
undefined            // with value of string "world"

> `hello, ${name}`   // interpolate the string
"hello, world"       // containing an expression
```

##### `String()` constructor

- The `String()` constructor creates a `String` object
- Calling as a function converts value to primitive string (i.e. string literal)
- Calling it with `new` keyword returns corresponding value's string object

```javascript
> String("hello, world")       // call constructor
"hello, world"                 // as a function

> new String("hello, world")   // call constructor
                               // with new keyword
String {0: "h", 1: "e", 2: "l", 3: "l", 4: "o", 5: ",", 6: " ", 7: "w", 8: "o", 9: "r", …}

> (new String("hello, world")) // convert string object
    .valueOf()                 // to primitive string
"hello, world"
```

#### `Number`

- A number represents a sequence of digits to express arithmetic values

- Prior to ES2020, there is only one numeric type , i.e.:

  - the double-precision 64-bit floating point format (or IEEE 754)
  - the IEEE 754 is a floating point number specification

- Prefix a number with `-` to negate its value (negative)

- It has three symbolic values (i.e. special constants):

  - `+Infinity` (>= `1.8×10^308`; value from `.POSITIVE_INFINITY`)
  - `-Infinity` (<= `-1.8×10^308`; value from `.NEGATIVE_INFINITY`)
  - `NaN` (Not-A-Number)

- The `.isFinite()` method checks if the value is a non-symbolic value
- The `.MIN_VALUE` property returns the lowest possible positive value
- The `.MAX_VALUE` property returns the highest possible positive value

- The number `0`:

  - is an alias of `+0`
  - are both representations of `+0` and `-0`
  - if positive, divided from a non-zero number, results to `Infinity`
  - if negative, divided from a non-zero number, results to `-Infinity`

- Prefix the unary unary plus operator (`+`) on a string to convert it to a number
- The `typeof` operator returns the string `"number"`

```javascript
> 0.0                      // floating point literal
0

> 0                        // integer
0                          // (floating point behind the scenes)

> 0 === 0.0                // equivalent,
true                       // there is no integer type

> Infinity                 // positive infinity literal
Infinity

> Number.POSITIVE_INFINITY // property for positive infinity
Infinity

> 0 + (1.8*10**308)        // >= 1.8×10^308 is +Infinity
Infinity

> -Infinity                // negative infinity literal
-Infinity

> Number.NEGATIVE_INFINITY // property for negative infinity
- Infinity

> 0 - (1.8*10**308)        // <= -1.8×10^308 is -Infinity
-Infinity

> Number.isFinite(NaN)     // number is not +/-Infinity or NaN
false

> Number.MIN_VALUE         // lowest possible positive value
5e-324

> Number.MAX_VALUE         // highest possible positive value
1.7976931348623157e+308

> 0 === +0                 // 0 is an alias of +0
true

> 0 === -0                 // -0 also represents 0
true

> 1 / +0                   // non-zero divided by positive zero
Infinity                   // is +Infinity

> 1 / -0                   // non-zero divided by negative zero
- Infinity                 // is -Infinity

> +"0"                     // convert a string to a number
0

> typeof 0                 // a "number" type
"number"
```

##### Safe Integer

- Introduced in ES2015
- The `.isSafeInteger()` method checks if the number is in safe range
- The `.MIN_SAFE_INTEGER` property returns the minimum safe integer
- The `.MAX_SAFE_INTEGER` property returns the maximum safe integer
- _Safe_ implies integers represented exactly and correctly within range
- Outside of the safe range becomes mere numeric approximations

```javascript
> Number.isSafeInteger(Infinity) // check if the number
false                            // is in the safe range

> Number.MIN_SAFE_INTEGER        // return minimum safe number
-9007199254740991                // (>= negative quadrillion)

> Number.MAX_SAFE_INTEGER        // return maximum safe number
9007199254740991                 // (<= positive quadrillion)
```

##### `Number()` constructor

- The `Number()` constructor creates a `Number` object
- Calling as a function converts value to primitive number (i.e. number literal)
- Calling it with `new` keyword returns corresponding number object

```javascript
> Number("3579")       // call constructor as a function
3579

> new Number("3579")   // call constructor
Number {}              // with new keyword

> (new Number("3579")) // convert number object
    .valueOf()         // to primitive number
3579
```

#### `BigInt`

- Introduced in ES2020
- A new numeric primitive value other than `Number`
- It is intended for integers of arbitrary precision

- It can handle integers beyond the safe range, i.e.:

  - `2^53-1`
  - or `Number.MAX_SAFE_INTEGER`

- It is represented as a number with an `n` suffix
- It can be converted to a primitive number and vise versa
- It can't be mixed with a primitive number (i.e. throws `TypeError`)
- It can't be used with any of `Math` object's built-in methods
- It can't be converted by the unary plus operator (`+`; returns `NaN`)
- Division results with fractions are truncated and are rounded up
- An array containing both a number and bigint numeric values can be sorted
- The `typeof` operator returns the string `"bigint"`

```javascript
> 0n                    // numeric literal
0n

> 0.0n                  // only allows integers
                        // (i.e. no floating point)
SyntaxError: No identifiers allowed directly after numeric literal

> 0n + (2n**53n-1n)     // can represent >= 1.8^53-1
9007199254740991n       // (or >= Number.MAX_SAFE_INTEGER)

> 0n + (2n*10n**308n)   // can represent >= 1.8×10^308
                        // (or >= Number.MAX_VALUE)
200000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000n

> 0n + 0               // can't be mixed with a
                       // primitive number
TypeError: Invalid mix of BigInt and other type in addition.

> Math.sqrt(10n)       // can't be used with Math object
TypeError: Conversion from 'BigInt' to 'number' is not allowed.

> +'0n'                // can't be converted with
NaN                    // the unary plus operator (+)

> 1n / 3n              // fractions are truncated
0n                     // and are rounded up

> [3, 1n, 2]           // an array with bigint and number
[1n, 2, 3]             // primitives can be sorted

> typeof 0n
"bigint"               // a "bigint" type
```

##### `BigInt()` constructor

- The `BigInt()` constructor creates a `BigInt` object
- It can only be called as a function and not with `new` keyword
- It can convert primitive numbers to primitive bigints
- It can't convert primivitive numbers with fractions

```javascript
> BigInt('0')           // can only be called as a function
0n

> BigInt('0.1')         // can't convert numbers with fractions
SyntaxError: Failed to parse String to BigInt

> new BigInt('0')       // can't be called with new keyword
TypeError: function is not a constructor (evaluating 'new BigInt('0')')

> BigInt(Number('0'))   // can convert primitive numbers
0n                      // to primitive bigints

> BigInt(Number('0.1')) // can't convert numbers with fractions
RangeError: Not an integer
```

#### `Boolean`

- A boolean represents a logical entity

- It has two entities&mdash;i.e. `true` for truthy and `false` for falsy values

- It is commonly used to determine which part of the code to execute, e.g.:

  - `if...else` on control flow statements
  - `for` loops on iteration statements

- The logical NOT operator (`!`) can be used to convert a value to boolean, i.e.:

  - `!` converts then flips the value to its opposite boolean value
  - `!!` converts then flips the value twice&mdash;actual boolean value

- The `typeof` operator returns the string `"boolean"`

```javascript
> true        // boolean literal (truthy)
true

> false       // boolean literal (falsy)
false

// control flow statement
> if (1 > 0) {
    "Yes"
 } else {
    "No"
 }
"Yes"

// iteration statement
> for (let i = 0; i < 3; i += 1) {
    i
 }
2

> !"false"    // converted to true then flips to false
false

> !!"false"   // converted to true, flips to false then true
true

> typeof true // a "boolean" type
"boolean"
```

##### `Boolean()` constructor

- The `Boolean()` constructor creates a `Boolean` object
- Calling as a function converts value to primitive boolean (boolean literal)
- Calling it with `new` keyword returns corresponding value's boolean object
- Passing `0`, `-0`, `null`, `false`, `NaN`, and `""` are converted to `false`&mdash;else `true`

```javascript
> Boolean(0)       // call constructor as a function
false

> new Boolean(0)   // call constructor with new keyword
Boolean {}

> (new Boolean(0)) // convert boolean object
    .valueOf()     // to primitive boolean
false
```

#### `Symbol`

- Introduced in ES2015
- A symbol represents a unique and immutable primitive value
- It is intended as unique identifier for object properties to avoid collision
- It can have an optional description (for debugging purposes)
- The `.description` property returns the symbol's description
- All symbols are guaranteed to be unique even with same description
- It is not auto-converted when called (e.g. `alert()`&mdash;use `.toString()`)

- A global symbol registry exists that holds all symbols, accessible with:

  - `.for()` method to search and return the symbol, otherwise, create it
  - `.keyFor()` method to return the symbol from a shared symbol

- When enumerating property keys of an object:

  - `Object.getOwnPropertyNames()` doesn't return symbol as keys
  - `Object.getOwnPropertySymbols()` doesn't return string as keys
  - `Object.keys()` only returns string as keys
  - `Reflect.ownKeys()` returns both symbol and string as keys (ES2015)

- The `typeof` operator returns the string `"symbol"`

```javascript
> Symbol()                        // create a symbol
Symbol()                          // without a description

> Symbol("desc")                  // create a symbol
Symbol(desc)                      // with description

> Symbol("desc").description      // show description
"desc"

> Symbol() === Symbol()           // all symbols are unique
false

> alert(Symbol())                 // not auto-converted
TypeError: Cannot convert a symbol to a string

> alert(Symbol().toString())      // or use .toString() first
undefined

// global symbol registry
> let sym = Symbol.for("My Sym")  // search or create symbol
undefined
> Symbol.keyFor(sym)              // return symbol
"My Sym"

// symbols as property key
> let o = {
    [Symbol("my sym")]: "My Sym", // compute property with []
    str: "My Str"
 }
undefined
> Object.getOwnPropertyNames(o)   // only return string as keys
["str"]
> Object.getPropertySymbols(o)    // only return symbol as keys
[Symbol(my sym)]
> Object.keys(o)                  // only return string keys
["str"]
> Reflect.ownKeys(o)              // return both string
["str", Symbol(my sym)]           // and symbol keys

> typeof Symbol()                 // a "symbol" type
"symbol"
```

##### `Symbol()` constructor

- Incomplete because it does not support `new` keyword (not supported)
- The `Object()` constructor can be used to create a symbol wrapper object

```javascript
> new Symbol()                  // can't call constructor
                                // with new keyword
TypeError: function is not a constructor (evaluating 'new Symbol()')

> Object(Symbol())              // or use Object to create
Symbol {description: undefined} // a symbol wrapper object
```

#### `null`

- A null represents an _intentional_ absence of a value
- It has only one value, the value of `null`
- It is treated as a falsy value on boolean operations (i.e. `false`)
- `typeof` incorrectly returns it as an `"object"` (**historical** and **unfixable** bug)

```javascript
> null                    // null literal
null

> Boolean(null) === false // a falsy value
true

> typeof null             // incorrectly labeled
"object"                  // as an "object" type
```

#### `undefined`

- An undefined represents an _unintentional_ absence of a value

- The value `undefined` is set when:

  - identifiers don't have any value
  - function arguments weren't specified
  - a function doesn't return any value

- It as a falsy value on boolean operations (i.e. `false`)
- It has only one value, the value of `undefined`

- It is not a reserved keyword but:

  - on global scope, it can't be overwritten
  - on local scope, it can be overwritten
  - on `strict mode`, it can only be overwritten on local scope
  - it's best, even if possible, to avoid overwriting it

- The `typeof` operator returns the string `"undefined"`

```javascript
> undefined                    // undefined literal
undefined

> let x;                       // identifiers without values
undefined                      // are set to undefined
> x
undefined

> function f(a, b) {          // unspecified arguments
    return [a, b];             // are set to undefined
 }
undefined
> f(0)
[0, undefined]

> function f() {}              // returning nothing
undefined                      // returns undefined
> f()
undefined

> function f() {
    let undefined = 0;         // can be overwritten
    return undefined;          // on local scope
 }
undefined
> f()
0

> let undefined = 0;           // but not in global scope
SyntaxError: Can't create duplicate variable that shadows a global property: 'undefined'

> Boolean(undefined) === false // it is a falsy value
true

> typeof undefined             // an "undefined" type
"undefined"

```

### Non-Primitive Values

#### `Object`

- An object represents a keyed collection of entities
- Other than primitive values, the rest are objects

- Can be initialized with:

  - `new` keyword and the `Object()` constructor
  - `.create()` method from `null` or another object
  - object literal (`{}`) of key-value pairs

- It has properties (function as value are called methods)
- It can inherit other objects through the prototype chain

```javascript
> new Object()            // initialize with constructor
{}                        // with new keyword

> Object.create(null)     // initialize with .create(null)
{}

> {}                      // initialize with object literal
{}

> {key: "value"}        // properties are key-value pairs
{key: "value"}

> {key: function () {}} // property with function is a method
{key: function}

// inherit another object's properties through its prototype
> let parent = {x: 1}
undefined
> let child = Object.crate(parent)
undefined
> child
{x: 1}
```

##### Properties

- A property is an association between a key and a value
- It can either be a value or a function (called a method)

- Object properties can be accessed through property accessors, i.e.:

  - dot notation (`.`)
  - bracket notation (`[]`)
  - optional chaning operator (`?.`&mdash;ES2015)

- Unlike identifiers:

  - it uses IdentifierNames on keys instead of Identifier
  - IdentifierNames can use reserved and future keywords

- The `delete` operator is used to delete a property of a specified key
- The `.getOwnPropertyDescriptors` method returns property attributes
- The `.defineProperty()` method is used to define property attributes
- The `.defineProperties()` method is used to define multiple attributes

```javascript
// property accessor with dot notation
> let o = {x: 1}          // create an object
undefined
> o.x                     // access property
1
> o.x = 2                 // assign value
2
> o.x = {y: 3}            // assign a sub object
{y: 3}
> o.x?.y                  // check then access property
3
> delete o.x              // delete property
true

// property accessor with bracketnotation
> let o = {x: 1}          // create an object
undefined
> o["x"]                  // access property
1
> o.x = 2                 // assign value property
2
> o.x = {y: 3}            // assign a sub object
{y: 3}
> o.x?.y                  // check then access property
3
> delete o.x              // delete property
true

> let o = {
    myKey: "My Value",   // associate MyKey with "My Value"
    myFn: function () {} // associate myFn with a method
 }
undefined

> delete o.myFn          // delete property with
true                     // delete operator

// define property attributes
> Object
    .defineProperty(
    o,
    "myKey",
    {
      value: o.myKey,
      writable: false   // make property immutable
   }
  )
{myKey: "My Value"}
> o.myKey = ""          // change the value to an empty string
""
> o.myKey               // still "My Value" (can't be changed)
"My Value"

> Object                // return object's property attributes
    .getOwnPropertyDescriptors(o)
▼ Object
  ▶ myKey: {value: "My Value", writable: false, enumerable: true, configurable: true}
```

###### Data property

- Data properties are property attributes associated on a specific key-value
- These attributes, if unspecified, defaults to `undefined` or `false`

- Its optional attributes include:

  - `value`: the value itself
  - `writable`: mutable or immutable
  - `enumerable`: show key in loops or be hidden
  - `configurable`: allow deletion or changing into an accessor or not

```javascript
> let o = {}             // create an empty object
undefined
> Object.defineProperty(
    o,                   // define in object o
    "myKey",             // the key name myKey
    {
      value: "My Value", // with value of "My Value"
      writable: true,    // that can be changed,
      enumerable: true,  // be shown in loops
      configurable: true // and can be deleted
                         // or changed to an accessor
   }
  )
{myKey: "My Value"}

> o.myKey                // value of myKey
"My Value"

> o.myKey = "New Value"  // write new value of myKey
"New Value"

> Object.keys(o)         // show myKey in loops
["myKey"]

> delete o.myKey         // delete myKey from object o
true
```

###### Accessor property

- Accessor properties are functions associated on a specific key

- Its optional attributes include:

  - `get`: a function to return the value
  - `set`: a function to change the value
  - `enumerable`: show key in loops or be hidden
  - `configurable`: allow deletion or changing into a data or not

```javascript
// create an object with properties
> let o = {
    greet: "hello",
    subject: "world"
  }
undefined
> Object.defineProperty(
    o,                      // define in object o
    "message",              // the property message
    {
      get() {               // return combined values
                            // of existing properties
       return `${this.greet} ${this.subject}`;
     },
      set(value) {          // set object properties
        [this.greet, this.subject] = value
     },
      enumerable: true,     // show in loops
      configurable: true    // allow deletion
                            // or being changed to data
   }
  )
{greet: "hello", subject: "world"}

> o.message                 // get message value
"hello world"

> o.message = ["hi", "foo"] // set object properties
"world"

> o.greet                   // property greet becomes hi
"hi"
> o.subject                 // property subject becomes foo
"foo"
> o.message                 // property message becomes hi foo
"hi foo"

> Object.keys(o)            // show messsage key in loops
["greet", "subject", "message"]

> delete o.message           // delete message from object o
true

> o                          // message has been removed
{greet: "hi", subject: "foo"}
```

##### `Object()` constructor

- The `Object()` constructor creates an object wrapper on a value
- There's no difference from calling it as a function or with `new` keyword

- If the value is:

  - empty, `null` or `undefined`, it creates an empty object (`{}`)
  - of any primitive type, it creates an object of that type
  - already an object, it will simply return that object

```javascript
> Object()          // create an empty object as function call
{}                  // (no argument)

> Object(null)      // create an empty object as function call
{}                  // (null as argument)

> Object(undefined) // create an empty object as function call
{}                  // (undefined as argument)

// no difference with new keyword
> new Object()
{}
> new Object(null)
{}
> new Object(undefined)
{}

> Object("")        // create a string object
String {length: 0}  // from a primitive string

> Object({})        // return an object
{}
```

##### Prototypes

- An object has a prototype object used as fallback to find properties
- The anscestral prototype of objects (root) is the `Object.prototype`
- `Object.prototype`'s prototype is the primitive value `null`

- Special objects have their own prototypes before `Object.prototype`, i.e.:

  - `Function.prototype` for functions
  - `Array.prototype` for arrays

- Each of these prototypes provide different sets of default properties
- The `.setPrototypOf()` method is used to change an object's prototype
- The `.getPrototypeOf()` method is used to get an object's prototype
- The `.hasOwnProperty()` method checks if a property is or not inherited

- Object instances and literals can access their prototype with `__proto__`

  - this feature is not recommended to use any longer
  - it is likely been removed from web standards
  - its existence is to ensure compatibility for web browsers

```javascript
> Object.prototype       // ancestral prototype of all objects
{}

> Object                 // Object's prototype points to
    .getPrototype(       // primitive null
      Object.prototype
  )
null

// prototypal inheritance
// on new object
> let parent = {x: 0}    // create parent object
undefined
> let child = Object     // create child object
                         // inheriting from
                         // parent object
                .create(parent)
undefined
> child                  // child object now
{x: 0}                   // has properties
                         // of parent

// prototypal inheritance
// on existing object
> let grand = {y: 1}     // create grand child object
undefined
> Object
    .setPrototypeOf(     // inherit
      grand,             // to grand object
      child              // from child object
    )
{y: 1, x: 1}
> grand                  // child object now
{y: 1, x: 1}             // has properties of
                         // both parent and
                         // child object

// altering properties
// of inherited/ing
// objects downward
> parent.x = 1           // changing property of
1                        // parent object
> child                  // also changes property of
{x: 0}                   // child object
> grand                  // even the property of
{y: 1, x: 0}             // grand child object

// altering properties
// of inherited/ing
// objects upward
> child.x = 2            // changing property
2                        // of child object
> parent                 // don't affect property of
{x: 0}                   // parent object


// check if a property
// is the object's own
// property or inheritied
> parent
    .hasOwnProperty("x") // parent object owns
true                     // the property x
> child
    .hasOwnProperty("x") // child object don't
false                    // own the property x
> grand
    .hasOwnProperty("x") // also grand child object
false                    // also doesn't own it
```

#### Arrays

- An array is one of the built-in objects
- It represents an indexed collections of data
- These collections of data are ordered by indices
- It (`Array`) inherits from `Object`
- Indices are converted to strings as names
- These names are then used to retrieve values
- Its indices starts from number `0`
- It has the special property `length`
- Increasing its `length` adds `undefined` indices
- Decreasing its length removes extra indices
- Its last index is always higher than assigned index
- The `delete` operator can be used to delete an index value
- Except that the `delete` leaves deleted indexed value as `undefined`
- Use `splice` or `slice` methods instead of `delete` to remove index and value
- The `splice` method mutates the source while the `slice` method doesn't

```javascript
> []                 // array literal
[] (0)

> ["a", true, 1]     // collection of arbitrary values
["a", true, 1'] (3)

> Object             // inehrits from Object
    .getPrototypeOf(
      Array
        .prototype
    )
{}

// indices are converted to strings
// but are only accessible thru
// bracket notation and
// optional quotes
> let arr = ["a", true, 1]
undefined
> arr.0
SyntaxError: Unexpected number '.0'
> arr["0"]
"a"
> arr[0]
"a"

> arr.length         // get the array length
3

> arr.length = 4     // increasing its length
4
> arr                // adds hidden indices
["a", true, 1, undefined] (4)

> arr.length = 2     // decreasing its length
2
> arr                // removes extra indices
["a", true] (2)

> arr[0]             // get the first item
"a"

> arr[arr.length-1]  // get the last item
true

> delete arr[1]      // delete removes an item value
true
> arr                // but replaces it with undefined
["a", undefined] (2)

> arr.splice(1, 1)   // deleting with splice removes
[undefined] (1)      // the item value and index
> arr                // but modifies the source
["a"] (1)

> arr.slice(0, 1)    // deleting with slice removes
["a"] (1)            // the item value and index
> arr                // but doesn't modify the source
["a"] (1)
```

##### `Array()` constructor
