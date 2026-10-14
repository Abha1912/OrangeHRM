# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> TC002 Login User with correct email and password
- Location: tests\loginTest.spec.js:13:1

# Error details

```
Error: locator.fill: value: expected string, got undefined
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
  13 |     // It first checks whether the element is visible and enabled before attempting to click it.
  14 |     static async click(locator)
  15 |     {
  16 |         // Check if the locator is visible and enabled.
  17 |         if (await locator.isVisible() && await locator.isEnabled())
  18 |         {
  19 |             // Click the element only when both conditions are true.
  20 |             await locator.click();
  21 |         }
  22 |     }
  23 | 
  24 |     // Static method to enter a value into a textbox/input field.
  25 |     // It checks whether the field is visible and editable before entering the value.
  26 |     static async inputTextbox(locator,value)
  27 |     {
  28 |         // Check if the textbox is visible and editable.
  29 |         if (await locator.isVisible() && await locator.isEditable())
  30 |         {
  31 |             // Fill the textbox with the provided value.
> 32 |              await locator.fill(value);   
     |                            ^ Error: locator.fill: value: expected string, got undefined
  33 |         }
  34 |     }
  35 | 
  36 | }
  37 | 
  38 | // Export the CommonMethod class so it can be imported and reused in other JavaScript test files.
  39 | module.exports = CommonMethod;
  40 | 
```