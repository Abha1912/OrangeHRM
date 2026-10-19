# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> TC001 Login User with correct username and password
- Location: tests\loginTest.spec.js:6:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByPlaceholder('Username')
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByPlaceholder('Username') with timeout 5000ms
  - waiting for getByPlaceholder('Username')

```

# Test source

```ts
  1  | 
  2  | const {test:base,expect} =  require ('@playwright/test');
  3  | 
  4  | const LoginPage = require('../pages/loginPage');
  5  | const DashboardPage = require ('../pages/dashboardPage')
  6  | const AdminPage = require('../pages/adminPage')
  7  | const JsonReader = require('../utils/jsonReader.js');
  8  | 
  9  | const test = base.extend({
  10 |     
  11 |     loginPage: async ({page},use)=>{
  12 |         const loginPage = new LoginPage(page);
> 13 |         await expect(page.getByPlaceholder('Username')).toBeVisible();
     |                                                         ^ Error: expect(locator).toBeVisible() failed
  14 |         await use(loginPage);
  15 |     },
  16 | 
  17 |     dashboardPage : async ({page},use) => {
  18 |            const dashboardPage  = new DashboardPage(page);
  19 |            await use(dashboardPage);
  20 |     },
  21 | 
  22 |     adminPage : async ({page},use) => {
  23 |            const adminPage  = new AdminPage(page);
  24 |            await use(adminPage);
  25 |     },
  26 | 
  27 |     authenticatedPage: async ({ page, loginPage }, use) => {
  28 |         const loginData = JsonReader.login();
  29 |         await loginPage.login(loginData.validUser.username,loginData.validUser.password);
  30 |         await expect(page).toHaveURL(/\/dashboard\/index/);
  31 |         await use(page);
  32 |     }
  33 | });
  34 | 
  35 | module.exports = { test,expect };
  36 | 
```