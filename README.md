
# Password Validation Kata 🥷
Raúl Piracés & Victor RubioMarch 01, 2023

## Introduction

In this Kata we will be practising TDD and Design patterns.

We will make several iterations in which we can refactor the existing code or continue iterating through the problem.
Prerequisites

You must come to the Kata with a boilerplate of your desired programming language ready to make a basic test. If you don't know where to get one or you don't have time to make one, GitHub is full of already made templates 🙂

Take a look at this repo: https://github.com/swkBerlin/kata-bootstraps


## Goal

Design and implement a software that validates a password applying TDD.

The password will be introduced by the user (as an argument of the method) and should return if the password is valid or not.

A valid password should meet the following 

## requirements:

    Have more than 8 characters
    Contains a capital letter
    Contains a lowercase
    Contains a number
    Contains an underscore

## Technical requirements:

    We want a method that answers if the password is valid or not.
    We don't want to know the reason when the password is invalid (the return value is a boolean)

## Interesting info:

Design patters overview: https://refactoring.guru/design-patterns/catalog

---
## 1st iteration

Meet the initial technical requirements.


## 2nd iteration

Let's pretend that now we want to create another type of password validations because on our app we need different type of passwords, such as:

### Validation 2:

    Have more than 6 characters
    Contains a capital letter
    Contains a lowercase
    Contains a number

### Validation 3:

    Have more than 16 characters
    Contains a capital letter
    Contains a lowercase
    Contains an underscore


### 3rd iteration

Now we can know if a password is valid or not, but we cannot understand why, in this iteration, we should be able to return a list of errors for each invalid password, so we could know why the password it's not valid.


###  TypeScript Jest boilerplate

This boilerplate uses TypeScript and Jest as testing framework.
Test files should are picked based on their name, here's a few examples that will get picked up by Jest:

- `MyClass.test.ts`
- `MyJavaScriptModule.test.js`
- `MyComponent.test.tsx`
- `SubFolder/MyClass.test.ts`

You can customize the regexp and jest configuration by editing the `package.json` file.

## Installing dependencies

```bash
# Get Yarn
npm install -g yarn

# Install dependencies
yarn install
```

## Running tests

```bash
# Run tests once
yarn test

# Run tests with Jest-CLI custom arguments (https://jestjs.io/docs/en/cli.html)
yarn test --clearCache --debug

# Run tests for a specific file
yarn test MyFile.test.ts
```

A few other NPM scripts are provided for convenience, they all support custom arguments as described above.

```
# Run tests once with coverage
# Coverage report available in ./coverage/index.html
yarn test:cover

# Run all tests in watch mode without coverage
yarn test:watch

# Run the tests with watch mode only for files changed since the last Git commit
yarn test:changed

# Run tests for CI environment (optimized for TravisCI)
yarn test:ci
```