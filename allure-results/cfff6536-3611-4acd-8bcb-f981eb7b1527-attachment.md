# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: adminTest.spec.js >> TC001 - Verify System Users page
- Location: tests\adminTest.spec.js:5:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('link', { name: 'Admin' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('link', { name: 'Admin' }) with timeout 5000ms
  - waiting for getByRole('link', { name: 'Admin' })

```

```yaml
- img "company-branding"
- heading "Login" [level=5]
- paragraph: "Username : Admin"
- paragraph: "Password : admin123"
- text:  Username
- textbox "Username"
- text:  Password
- textbox "Password"
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
> 34 |         await expect(locator).toBeVisible();
     |                               ^ Error: expect(locator).toBeVisible() failed
  35 |         // await locator.click();
  36 |         // await expect(this.page).toHaveURL(urlPattern);
  37 |         await Promise.all([this.page.waitForURL(urlPattern),locator.click()]);
  38 |         await expect(this.page).toHaveURL(urlPattern);
  39 | 
  40 | 
  41 |     }
  42 | 
  43 |     
  44 |     async navigateToDashboardpage() {
  45 | 
  46 |         await expect(this.page).toHaveURL(/\/dashboard\/index/);
  47 |         
  48 |     }
  49 | 
  50 | 
  51 |     async navigateToAdminpage() {
  52 | 
  53 |         await this.navigateAndVerify(this.linkAdmin,/\/admin\/viewSystemUsers/);
  54 | 
  55 |     }
  56 |  
  57 |     async validateMenuNavigation() {
  58 |         
  59 |         await this.navigateAndVerify(this.linkAdmin,/\/admin\/viewSystemUsers/);
  60 | 
  61 |         await this.navigateAndVerify(this.linkPIM,/\/pim\/viewEmployee/);
  62 | 
  63 |         await this.navigateAndVerify(this.linkLeave,/\/leave\/viewLeaveList/);
  64 | 
  65 |         await this.navigateAndVerify(this.linkTime,/\/time\/viewEmployeeTimesheet/);
  66 | 
  67 |         await this.navigateAndVerify(this.linkPerformance,/\/performance\/searchEvaluatePerformanceReview/);
  68 | 
  69 |         await this.navigateAndVerify(this.linkDashboard,/\/dashboard\/index/);
  70 | 
  71 |         await this.navigateAndVerify(this.linkDirectory,/\/directory\/viewDirectory/);
  72 | 
  73 |         await this.navigateAndVerify(this.linkClaim,/\/claim\/viewAssignClaim/);
  74 | 
  75 |         await this.navigateAndVerify(this.linkBuzz,/\/buzz\/viewBuzz/);
  76 | 
  77 |         await this.navigateAndVerify(this.linkRecruitment,/\/recruitment\/viewCandidates/);
  78 |         
  79 |     }
  80 | 
  81 |     async search(searchText) {
  82 | 
  83 |         await CommonMethods.inputTextbox(this.inputSearch,searchText);
  84 |         const matchingMenu = this.page.locator('.oxd-main-menu-item').filter({ hasText: searchText });
  85 |         await expect(matchingMenu).toBeVisible();
  86 |         await expect(matchingMenu).toContainText(searchText);
  87 | 
  88 |     }
  89 |     
  90 | }
  91 | 
  92 | module.exports = DashboardPage;
```