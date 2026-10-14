# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboardTest.spec.js >> TC001 Verify Search
- Location: tests\dashboardTest.spec.js:5:1

# Error details

```
ReferenceError: page is not defined
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
  19 |         this.linkAdmin = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Admin"]');
  20 |         this.linkPIM = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="PIM"]');
  21 |         this.linkLeave = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Leave"]');
  22 |         this.linkTime= page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Time"]');
  23 |         this.linkRecruitment = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Recruitment"]');
  24 |         this.linkMyInfo = page.getByRole('link',{name:'My Info'});
  25 | 
  26 | 
  27 |     }
  28 | 
  29 | 
  30 |     async navigateDashboardPage()
  31 |     {
  32 |         await expect(this.txtDashboard).toHaveText("Dashboard");
  33 |     }
  34 | 
  35 |     async search(searchText)
  36 |     {
  37 |         await CommonMethods.inputTextbox(this.inputSearch,searchText);
  38 |         await expect(this.listMenu).toHaveText(searchText);
  39 |     }
  40 | 
  41 |     async validateMenuNavigation()
  42 |     {
  43 |         await CommonMethods.click(this.linkAdmin);
> 44 |         await expect(page).toHaveURL(/\/viewSystemUsers/);
     |                      ^ ReferenceError: page is not defined
  45 |         await CommonMethods.click(this.linkMyInfo);
  46 |     }
  47 |     
  48 | }
  49 | 
  50 | // Export the DashboardPage class.Other files can import and create a HomePage object.
  51 | module.exports = DashboardPage;
```