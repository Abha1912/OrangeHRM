# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: adminTest.spec.js >> TC004 - Search by status
- Location: tests\adminTest.spec.js:34:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /dashboard/
Received string:  "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    - locator resolved to <html>…</html>
    - unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    - waiting for "https://opensource-demo.orangehrmlive.com/web/index.php/auth/validate" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username": Admin
- text:  Password
- textbox "Password": admin123
- button "Login"
- paragraph: Forgot your password?
- link:
  - /url: https://www.linkedin.com/company/orangehrm/mycompany/
- link:
  - /url: https://www.facebook.com/OrangeHRM/
- link:
  - /url: https://twitter.com/orangehrm?lang=en
- link:
  - /url: https://www.youtube.com/c/OrangeHRMInc
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
- img "orangehrm-logo"
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
     |                            ^ Error: expect(page).toHaveURL(expected) failed
  30 |         await use(page);
  31 |     }
  32 | });
  33 | 
  34 | module.exports = { test };
  35 | 
```