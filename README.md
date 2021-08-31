# corner-case-test

Assignment of Next.js-based website with Jest tests, all written in TypeScript.

## install

```sh
$ yarn install
```

## test

```sh
$ yarn test
```

## code

- `package.json/jest`: use `ts-jest` to test TypeScript files; use mocks for imported CSS/LESS files; use TypeScript compiler to handle both TS/JS files
- `jest.setup.ts`: use `enzyme` to test with [jQuery-like APIs](https://github.com/airbnb/enzyme#readme)
- `tsconfig.jest.json`: handles JSX transformation by `ts-jest` during the test

## see also

https://github.com/vercel/next.js/tree/master/examples/with-typescript-eslint-jest

- does not use CSS files
- uses `babel-jest` instead of `ts-jest`
