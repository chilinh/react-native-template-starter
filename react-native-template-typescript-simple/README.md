# React Native with TypeScript and ESLint kit

## How to use

```
react-native init AwesomeApp --template typescript-simple && node AwesomeApp/setup.js
```

> Because of `ts-jest@23` not support `jest@24` we need to run an extra command:
>
> ```
> cd AwesomeApp && yarn
> ```
>
> and now we're good to tinker

## What's inside

- ReactNative@0.58
- Typescript@3.3.3
- [TypeScript-ESLint](https://github.com/typescript-eslint/typescript-eslint) with [Airbnb rule](https://www.npmjs.com/package/eslint-config-airbnb) and preparing for [React Hook](https://www.npmjs.com/package/eslint-plugin-react-hooks)
