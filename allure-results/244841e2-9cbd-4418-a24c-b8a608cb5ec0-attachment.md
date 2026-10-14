# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboardTest.spec.js >> TC001 Verify Search
- Location: tests\dashboardTest.spec.js:5:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByRole('heading', { name: 'Dashboard' })
Expected: "Dashboard"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" getByRole('heading', { name: 'Dashboard' }) with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Dashboard' })
    - waiting for "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index" navigation to finish...
    - navigated to "https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index"

```

# Test source

```ts
  1  | 
  2  | const {expect} =  require('@playwright/test');
  3  | const CommonMethods = require('../utils/commonMethod.js');
  4  | 
  5  | 
  6  | class DashboardPage{
  7  |     
  8  |    
  9  |     constructor(page)
  10 |     {
  11 |          
  12 |         this.page = page; 
  13 | 
  14 |         this.txtDashboard = page.getByRole('heading',{name : 'Dashboard'});
  15 | 
  16 |         this.inputSearch = page.getByPlaceholder('Search');
  17 |         this.listMenu = page.locator('.oxd-main-menu-item');
  18 | 
  19 |     }
  20 | 
  21 | 
  22 |     async navigateDashboardPage()
  23 |     {
> 24 |         await expect(this.txtDashboard).toHaveText("Dashboard");
     |                                         ^ Error: expect(locator).toHaveText(expected) failed
  25 |     }
  26 | 
  27 |     async search(searchText)
  28 |     {
  29 |         await CommonMethods.inputTextbox(this.inputSearch,searchText);
  30 |         await expect(this.listMenu).toHaveText(searchText)
  31 |     }
  32 |     
  33 | }
  34 | 
  35 | // Export the DashboardPage class.Other files can import and create a HomePage object.
  36 | module.exports = DashboardPage;
```