---
date: 2018-07-10
path: /blog/js-crash-course
title: JavaScript Crash Course
type: post
---

I wrote most of this post roughly a year ago for my Design Studio team, since some of our team members have not used JavaScript before. This is only meant to be a starting point in learning JavaScript.

---

## JavaScript Syntax

JavaScript is a loosely-typed language. Instead of using `int`, `boolean`, etc., to initialize a variable, `var`, `let`, and `const` are used instead.

### Variable Initialization

Note: We will use only `let` and `const`.

```javascript
// Cannot assign another value to this variable
const isEclipseFunky = true

let age = 12
let name = 'Tony'

// This is a plain object.
let allStar = {
  some: 'body',
  once: 'told me'
}

// List of numbers
let numberList = [1, 24, 25.01, 6, 0]

// Can hold mixed different types of data
let mixedList = [
  "I'm a string using double-quotes",
  'I am a string using single-quotes',
  `I'm a string using backticks`,
  12,
  false
]
```

### Functions

Functions in JavaScript are a bit more flexible here. They can be assigned to variables and arguments to other functions.

```javascript
const addNums = (a, b) => {
  return a + b
}

let addResult = addNums(1, 2) // 3

// Using a function as an input
// It will use the callbackFunction input within the function.
// Many APIs and libraries do this
function multiplyNums(a, b, callbackFunction) {
  const result = a * b
  callbackFunction(result)
}

// Note: The function is unnamed. It's fine if we only use it once.
multiplyNums(2, 12, function(answer) {
  console.log(answer) // 24
})

// Alternatively, we can write it like this:
multiplyNums(15, 3, answer => {
  console.log(answer) // 45
})
```

### Classes

```javascript
class Person {
  constructor(name, age) {
    this.name = name
    this.age = age
  }

  // This is a method
  introduce() {
    console.log(`My name is ${this.name}. I am ${this.age} years old.`)
  }
}

// New instance of Person class
let p1 = new Person('Marty', 15)
p1.introduce() // console reads: 'My name is Marty. I am 15 years old.'

// You can extend classes as well
class Student extends Person {
  constructor(name, age, id) {
    super(name, age)
    this.id = id
  }

  showId() {
    console.log(this.id)
  }

  // `introduce ()` still exists
}
```

## Modules

You can have functions, classes, and constants `export`ed frome one file and `require`d / `import`ed in another.

Let's have a simple example. Assume that both files are in the same directory.

### Exporting

```javascript
// `math.js`

const addNums = (a, b) => {
  return a + b
}

function multiplyNums(a, b) {
  return a * b
}

// (1) Here's where we export the functions
module.exports = {
  addNums: addNums,
  multiplyNums: multiplyNums
}

// (2) Note: if the property name and variable names are the same
// like in the lines above, then it can be written as such:
module.exports = {
  addNums,
  multiplyNums
}
```

For JavaScript that is transpiled with `webpack`, `parcel`, or any other bundler, you can use the ES6 syntax for exporting.

```javascript
// (3) Exporting as it is defined

export const addNums = (a, b) => {...}
export function multiplyNums(a, b) {...}
```

### Requiring / Importing

```javascript
// `index.js`

// This will import from `math.js` in the same directory
// (1) You can specify which functions, classes, or constants you want using this syntax. More on this in the links below
const { addNums, multiplyNums } = require('./math')

// (2) The other way is like this:
/*
  const math = require('./math')
  const addNums = math.addNums
  const multiplyNums = math.multiplyNums
*/

// (3) ES6 `import` syntax
/*
  import { addNums, multiplyNums } from './math'
*/

let addResult = addNums(2, 4) // 6
let multResult = multiplyNums(3, 7) // 21
```

Note: `import` / `export` is not available in Node.js natively at this time. Only `module.exports` and `require()`.

There are other neat features to ES6 that you can learn in the resources linked below.

---

## Node.JS

Node.js is a runtime environment that interprets JavaScript - similar to JVM for Java. Node.js lets a JavaScript program to be organized into separate files/modules.

### NPM

NPM is _unofficially_ called the Node Package Manager. (Technically it's not an acronym according to the NPM team, but whatever.) This is used to manage JavaScript packages and projects.

### package.json and package-lock.json

Node.js projects, like any other projects, will have to manage dependencies. They also need to be tested, built, etc. Luckily, the package.json file holds all the information listed above!

The important sections in that file are as follows:

- `name` - Project name
- `version` - Project version
- `description` - Project description
- `scripts` - Command-line scripts that are run. It's way better save the commands here than trying to memorize them. (Or have them forgotten, and no one can run anything.)
- `main` - Specifies the primary file where everything runs.
- `dependencies` - Holds list of required dependencies for the project
- `devDependencies` - Holds list of dependencies used only for development

All packages added to the project update the package-lock.json file. This file saves the specific versions and the dependencies' dependencies. This was added in version 5 of npm.

### CLI Commands

NPM uses the package.json file to run the commands below

- `npm install <package-name>` - adds package to `dependencies`
- `npm install -D <package-name>` - adds package to `devDependencies`
- `npm run <command>` - runs the appropriate script in the `scripts` section
- `npm start` - equivalent to `npm run start`
- `npm test` - equivalent to `npm run test`

---

Hopefully this gives you a clear idea about JavaScript and Node.js. I'll update this post as needed in the future. Linked below are some other tutorials or resources that may be helpful to you.

## More Info/Resources

- [DevDocs - JavaScript](https://devdocs.io/javascript/)
- [Learn ES2015](https://babeljs.io/learn-es2015/) (Note: ES6 and ES2015 are different names for the same thing.)
- [The Modern JavaScript Tutorial](https://javascript.info/)
- [Node for Java Developers](https://node.university/blog/502765/node-for-java-devs)
- [What is Node.JS for Java Developers](https://dzone.com/articles/what-is-Nodejs-for-java-developers)
- [Using a `package.json`](https://docs.npmjs.com/getting-started/using-a-package.json)
