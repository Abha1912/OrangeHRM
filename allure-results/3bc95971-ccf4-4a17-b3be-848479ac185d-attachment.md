# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboardTest.spec.js >> TC001 Verify Search
- Location: tests\dashboardTest.spec.js:4:1

# Error details

```
ReferenceError: expect is not defined
```

# Test source

```ts
  1  | 
  2  | const {test:base} =  require ('@playwright/test');
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
  13 |         await use(loginPage);
  14 |     },
  15 | 
  16 |     dashboardPage : async ({page},use) => {
  17 |            const dashboardPage  = new DashboardPage(page);
  18 |            await use(dashboardPage);
  19 |     },
  20 | 
  21 |     adminPage : async ({page},use) => {
  22 |            const adminPage  = new AdminPage(page);
  23 |            await use(adminPage);
  24 |     },
  25 | 
  26 |     authenticatedPage: async ({ page, loginPage }, use) => {
  27 |         const loginData = JsonReader.login();
  28 |         await loginPage.login(loginData.validUser.username,loginData.validUser.password);
> 29 |         await expect(page).toHaveURL(/dashboard/);
     |         ^ ReferenceError: expect is not defined
  30 |         await use(page);
  31 |     }
  32 | });
  33 | 
  34 | module.exports = { test };
  35 | 
```