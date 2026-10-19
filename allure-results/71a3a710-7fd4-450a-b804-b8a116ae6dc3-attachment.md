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
  42 |         await expect(this.page).toHaveURL(/\/dashboard\/index/);
  43 |         
  44 |     }
  45 | 
  46 | 
  47 |     async navigateToAdminpage() {
  48 | 
  49 |         await this.navigateAndVerify(this.linkAdmin,/\/admin\/viewSystemUsers/);
  50 | 
  51 |     }
  52 |  
  53 |     async validateMenuNavigation() {
  54 |         
  55 |         await this.navigateAndVerify(this.linkAdmin,/\/admin\/viewSystemUsers/);
  56 | 
  57 |         await this.navigateAndVerify(this.linkPIM,/\/pim\/viewEmployee/);
  58 | 
  59 |         await this.navigateAndVerify(this.linkLeave,/\/leave\/viewLeaveList/);
  60 | 
  61 |         await this.navigateAndVerify(this.linkTime,/\/time\/viewEmployeeTimesheet/);
  62 | 
  63 |         await this.navigateAndVerify(this.linkPerformance,/\/performance\/searchEvaluatePerformanceReview/);
  64 | 
  65 |         await this.navigateAndVerify(this.linkDashboard,/\/dashboard\/index/);
  66 | 
  67 |         await this.navigateAndVerify(this.linkDirectory,/\/directory\/viewDirectory/);
  68 | 
  69 |         await this.navigateAndVerify(this.linkClaim,/\/claim\/viewAssignClaim/);
  70 | 
  71 |         await this.navigateAndVerify(this.linkBuzz,/\/buzz\/viewBuzz/);
  72 | 
  73 |         await this.navigateAndVerify(this.linkRecruitment,/\/recruitment\/viewCandidates/);
  74 |         
  75 |     }
  76 | 
  77 |     async search(searchText) {
  78 | 
  79 |         await CommonMethods.inputTextbox(this.inputSearch,searchText);
  80 |         const matchingMenu = this.page.locator('.oxd-main-menu-item').filter({ hasText: searchText });
  81 |         await expect(matchingMenu).toBeVisible();
  82 |         await expect(matchingMenu).toContainText(searchText);
  83 | 
  84 |     }
  85 |     
  86 | }
  87 | 
  88 | module.exports = DashboardPage;
```