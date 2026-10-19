# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> TC002 Login User with invalid username and password
- Location: tests\loginTest.spec.js:31:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: locator('.orangehrm-login-title')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" locator('.orangehrm-login-title') with timeout 5000ms
  - waiting for locator('.orangehrm-login-title')

```

# Test source

```ts
  1  | const {expect} =  require ('@playwright/test');
  2  | 
  3  | const CommonMethods = require('../utils/commonMethod.js');
  4  | 
  5  | class LoginPage{
  6  | 
  7  |     constructor(page)
  8  |     {
  9  |           this.page = page;
  10 | 
  11 |           // Login heading/text
  12 |           this.txtLoginHeading = page.locator(".orangehrm-login-title");
  13 |           this.requiredMessage = page.locator(".oxd-input-field-error-message");
  14 |           this.errorMessage = page.locator(".oxd-alert-content-text");
  15 | 
  16 |           //inputFields
  17 |           this.inputUsername = page.getByPlaceholder("Username");
  18 |           this.inputPassword = page.getByPlaceholder("Password");
  19 | 
  20 |           // Navigation links/buttons
  21 |           this.btnLogin = page.getByRole('button',{name:'Login'})
  22 |     }
  23 | 
  24 |     // Verifies that the Login Page heading is visible.
  25 |     async validateLoginHeading()
  26 |     {
> 27 |         await expect(this.txtLoginHeading).toBeVisible();
     |                                            ^ Error: expect(locator).toBeVisible() failed
  28 |     }
  29 | 
  30 |     // Logs in using the provided email address and password.
  31 |     async login(username,password)
  32 |     {
  33 |         await CommonMethods.inputTextbox(this.inputUsername,username);
  34 |         await CommonMethods.inputTextbox(this.inputPassword,password);
  35 |         await CommonMethods.click(this.btnLogin);
  36 |     }
  37 | 
  38 |     async validationMessage()
  39 |     {
  40 |         await expect(this.errorMessage).toHaveText('Invalid credentials');
  41 |     }
  42 | 
  43 |     async validateRequiredMessage()
  44 |     {
  45 |         await expect(this.requiredMessage).toHaveCount(2);
  46 |         await expect(this.requiredMessage.nth(0)).toHaveText('Required');
  47 |         await expect(this.requiredMessage.nth(1)).toHaveText('Required');   
  48 |      }
  49 | 
  50 |      async passwordMasked()
  51 |      {
  52 |         await expect(this.inputPassword).toHaveAttribute('type','password');
  53 |      }
  54 | }
  55 | 
  56 | module.exports = LoginPage;
```