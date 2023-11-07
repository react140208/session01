# React & React Native - 1402/08

## Tools

- Visual Studio Code - [VS Code](https://code.visualstudio.com/)
  - [ES7+ React/Redux/React-Native snippets](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)
  - [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  - [Draw.io Integration](https://marketplace.visualstudio.com/items?itemName=hediet.vscode-drawio)
- ⭐[NodeJS](https://nodejs.org/en/download/)
  - node
  - npm
  - npx
- 🤷[Yarn](https://yarnpkg.com/)
  - To install: `npm i -g yarn`
- [React Developer Tools](https://react.dev/learn/react-developer-tools)

## Optional Tools

- Console
  - CMD 🤷
  - PowerShell
    - New console run-as-admin
    - `set-executionpolicy remotesigned`
  - [PowerShell 7](https://github.com/PowerShell/PowerShell) ⭐
  - [Windows Terminal](https://github.com/microsoft/terminal) ⭐

------

## Prerequisite

- HTML
- JavaScript - ECMAScript
  - ES 2015+
- Typescript
- CSS

------

## How To Create React Apps?

- Manual
- [create-react-app](https://create-react-app.dev/docs/getting-started)
  - `npx create-react-app app01`
  - `cd app01`
  - `yarn`
- [Vite](https://vitejs.dev/) ⭐
  - `npm create vite@latest`
  - `cd app01`
  - `npm i`
  - `npm run dev`

## JSX

- HTML in JavaScript
- single root
- close all tags
  - `<a> </a>`
  - `<input  />`
- class -> className
- all properties use **camelCase**
  - styles: `font-size` -> `fontSize`
  - events: `onclick` -> `onClick`
- switch to js
  - use `{ }`
  - in attribute: `<img src={avatar}/>`
  - in content: `<div> {msg} </div>`
  - can be JS expression
    - `{ 1 + 2 }`
    - `{ Math.random() }`
  - statements CANT BE USED 🌟
    - `{ if }` ❌
      - [Ternary Operator](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_operator) `(condition) ? true : false`
    - `{ for }` ❌
      - [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
  - pass object?
    - `style={{ fontSize: 14 }}`
- [SWC Playground](https://swc.rs/playground)
- [Converter](https://transform.tools/html-to-jsx)

## Import/Export

| Syntax  | Export statement                      | Import statement                        |
| ------- | ------------------------------------- | --------------------------------------- |
| Default | `export default function Button() {}` | `import Button from './Button.js';`     |
| Named   | `export function Button() {}`         | `import { Button } from './Button.js';` |

[Destructure](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
