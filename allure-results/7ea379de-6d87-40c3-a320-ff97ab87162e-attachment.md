# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> TC001 Login User with correct username and password
- Location: tests\loginTest.spec.js:6:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Username')

```

# Test source

```ts
  1  | class CommonMethod {
  2  | 
  3  |     constructor(page) {
  4  | 
  5  |         this.page = page ; 
  6  |     }
  7  | 
  8  |     static async click(locator) {
  9  | 
  10 |         await locator.waitFor({ state: 'visible' });
  11 |         await locator.click();
  12 | 
  13 |     }
  14 | 
  15 |     static async inputTextbox(locator,value) {
  16 | 
> 17 |         await locator.fill(value);
     |                       ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  18 | 
  19 |     }
  20 | 
  21 | }
  22 | 
  23 | module.exports = CommonMethod;
  24 | 
```