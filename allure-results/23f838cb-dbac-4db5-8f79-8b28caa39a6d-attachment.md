# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboardTest.spec.js >> TC002 Verify left menu link redirect to correct page
- Location: tests\dashboardTest.spec.js:22:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('//a[@class="oxd-main-menu-item"]//span[text()="Time"]')

```

# Test source

```ts
  1  | // CommonMethod class contains reusable helper methods that can be used across different Playwright test files.
  2  | 
  3  | 
  4  | class CommonMethod{
  5  | 
  6  |     // Constructor receives the Playwright page object.
  7  |     // The page object is used to interact with elements on the browser page.
  8  |     constructor(page){
  9  |          this.page = page ; 
  10 |     }
  11 | 
  12 |     // Static method to click on an element.
  13 |     static async click(locator)
  14 |     {
> 15 |         await locator.click();
     |                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
  16 |     }
  17 | 
  18 |     // Static method to enter a value into a textbox/input field.
  19 |     static async inputTextbox(locator,value)
  20 |     {
  21 |              await locator.fill(value);   
  22 |     }
  23 | 
  24 | }
  25 | 
  26 | // Export the CommonMethod class so it can be imported and reused in other JavaScript test files.
  27 | module.exports = CommonMethod;
  28 | 
```