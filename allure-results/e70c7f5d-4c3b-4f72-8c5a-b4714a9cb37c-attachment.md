# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: adminTest.spec.js >> TC001 - Verify System Users page
- Location: tests\adminTest.spec.js:5:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Admin' })

```

# Test source

```ts
  1  | 
  2  | const {expect} =  require('@playwright/test');
  3  | const CommonMethods = require('../utils/commonMethod.js');
  4  | 
  5  | 
  6  | class DashboardPage {
  7  |     
  8  |     constructor(page) {
  9  |          
  10 |         this.page = page; 
  11 | 
  12 |         this.txtDashboard = page.getByRole('heading',{name : 'Dashboard'});
  13 | 
  14 |         this.inputSearch = page.getByPlaceholder('Search');
  15 |         this.listMenu = page.locator('.oxd-main-menu-item');
  16 | 
  17 |         this.linkAdmin = page.getByRole('link', { name: 'Admin' });
  18 |         this.linkPIM = page.getByRole('link', { name: 'PIM' });
  19 |         this.linkLeave = page.getByRole('link', { name: 'Leave' });
  20 |         this.linkTime = page.getByRole('link', { name: 'Time' });
  21 |         this.linkRecruitment = page.getByRole('link', { name: 'Recruitment' });
  22 |         this.linkPerformance = page.getByRole('link', { name: 'Performance' });
  23 |         this.linkDashboard = page.getByRole('link', { name: 'Dashboard' });
  24 |         this.linkDirectory = page.getByRole('link', { name: 'Directory' });
  25 |         this.linkClaim = page.getByRole('link', { name: 'Claim' });
  26 |         this.linkBuzz = page.getByRole('link', { name: 'Buzz' });
  27 |         this.linkMyInfo = page.getByRole('link',{name:'My Info'});
  28 | 
  29 |     }
  30 |     
  31 | 
  32 |     async navigateAndVerify(locator, urlPattern) {
  33 | 
> 34 |         await locator.click();
     |                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
  35 |         await expect(this.page).toHaveURL(urlPattern);
  36 | 
  37 |     }
  38 | 
  39 |     
  40 |     async navigateToDashboardpage() {
  41 | 
  42 |         await expect(page).toHaveURL(/dashboard/);
  43 |         
  44 |     }
  45 | 
  46 | 
  47 |     async navigateToAdminpage() {
  48 |         await this.navigateAndVerify(this.linkAdmin,/\/admin\/viewSystemUsers/);
  49 |     }
  50 |  
  51 |     async validateMenuNavigation() {
  52 |         
  53 |         await this.navigateAndVerify(this.linkAdmin,/\/admin\/viewSystemUsers/);
  54 | 
  55 |         await this.navigateAndVerify(this.linkPIM,/\/pim\/viewEmployee/);
  56 | 
  57 |         await this.navigateAndVerify(this.linkLeave,/\/leave\/viewLeaveList/);
  58 | 
  59 |         await this.navigateAndVerify(this.linkTime,/\/time\/viewEmployeeTimesheet/);
  60 | 
  61 |         await this.navigateAndVerify(this.linkPerformance,/\/performance\/searchEvaluatePerformanceReview/);
  62 | 
  63 |         await this.navigateAndVerify(this.linkDashboard,/\/dashboard\/index/);
  64 | 
  65 |         await this.navigateAndVerify(this.linkDirectory,/\/directory\/viewDirectory/);
  66 | 
  67 |         await this.navigateAndVerify(this.linkClaim,/\/claim\/viewAssignClaim/);
  68 | 
  69 |         await this.navigateAndVerify(this.linkBuzz,/\/buzz\/viewBuzz/);
  70 | 
  71 |         await this.navigateAndVerify(this.linkRecruitment,/\/recruitment\/viewCandidates/);
  72 |         
  73 |     }
  74 | 
  75 |     async search(searchText) {
  76 | 
  77 |         await CommonMethods.inputTextbox(this.inputSearch,searchText);
  78 |         const matchingMenu = this.page.locator('.oxd-main-menu-item').filter({ hasText: searchText });
  79 |         await expect(matchingMenu).toBeVisible();
  80 |         await expect(matchingMenu).toContainText(searchText);
  81 | 
  82 |     }
  83 |     
  84 | }
  85 | 
  86 | // Export the DashboardPage class.Other files can import and create a HomePage object.
  87 | module.exports = DashboardPage;
```