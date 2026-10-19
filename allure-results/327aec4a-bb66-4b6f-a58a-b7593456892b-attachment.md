# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboardTest.spec.js >> TC002 Verify left menu link redirect to correct page
- Location: tests\dashboardTest.spec.js:11:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('link', { name: 'Buzz' })

```

# Test source

```ts
  1   | 
  2   | const {expect} =  require('@playwright/test');
  3   | const CommonMethods = require('../utils/commonMethod.js');
  4   | 
  5   | 
  6   | class DashboardPage {
  7   |     
  8   |     constructor(page) {
  9   |          
  10  |         this.page = page; 
  11  | 
  12  |         this.txtDashboard = page.getByRole('heading',{name : 'Dashboard'});
  13  | 
  14  |         this.inputSearch = page.getByPlaceholder('Search');
  15  |         this.listMenu = page.locator('.oxd-main-menu-item');
  16  | 
  17  |         this.linkAdmin = page.getByRole('link', { name: 'Admin' });
  18  |         this.linkPIM = page.getByRole('link', { name: 'PIM' });
  19  |         this.linkLeave = page.getByRole('link', { name: 'Leave' });
  20  |         this.linkTime = page.getByRole('link', { name: 'Time' });
  21  |         this.linkRecruitment = page.getByRole('link', { name: 'Recruitment' });
  22  |         this.linkPerformance = page.getByRole('link', { name: 'Performance' });
  23  |         this.linkDashboard = page.getByRole('link', { name: 'Dashboard' });
  24  |         this.linkDirectory = page.getByRole('link', { name: 'Directory' });
  25  |         this.linkClaim = page.getByRole('link', { name: 'Claim' });
  26  |         this.linkBuzz = page.getByRole('link', { name: 'Buzz' });
  27  |         this.linkMyInfo = page.getByRole('link',{name:'My Info'});
  28  | 
  29  |     }
  30  | 
  31  |     async navigateAndVerify(locator, urlPattern) {
  32  | 
> 33  |         await locator.click();
      |                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
  34  | 
  35  |         await expect(this.page).toHaveURL(urlPattern);
  36  | 
  37  |     }
  38  | 
  39  |     /* async navigateDashboardPage() {
  40  | 
  41  |         await expect(this.page).toHaveURL(/\/dashboard\/index/);
  42  | 
  43  |     }*/
  44  | 
  45  |     async search(searchText) {
  46  | 
  47  |         await CommonMethods.inputTextbox(this.inputSearch,searchText);
  48  |         const matchingMenu = this.page.locator('.oxd-main-menu-item').filter({ hasText: searchText });
  49  |         await expect(matchingMenu).toBeVisible();
  50  |         await expect(matchingMenu).toContainText(searchText);
  51  | 
  52  |     }
  53  | 
  54  |  
  55  |     async validateMenuNavigation() {
  56  |         await this.navigateAndVerify(
  57  |             this.linkAdmin,
  58  |             /\/admin\/viewSystemUsers/
  59  |         );
  60  | 
  61  |         await this.navigateAndVerify(
  62  |             this.linkPIM,
  63  |             /\/pim\/viewEmployee/
  64  |         );
  65  | 
  66  |         await this.navigateAndVerify(
  67  |             this.linkLeave,
  68  |             /\/leave\/viewLeaveList/
  69  |         );
  70  | 
  71  |         await this.navigateAndVerify(
  72  |             this.linkTime,
  73  |             /\/time\/viewEmployeeTimesheet/
  74  |         );
  75  | 
  76  |         await this.navigateAndVerify(
  77  |             this.linkPerformance,
  78  |             /\/performance\/searchEvaluatePerformanceReview/
  79  |         );
  80  | 
  81  |         await this.navigateAndVerify(
  82  |             this.linkDashboard,
  83  |             /\/dashboard\/index/
  84  |         );
  85  | 
  86  |         await this.navigateAndVerify(
  87  |             this.linkDirectory,
  88  |             /\/directory\/viewDirectory/
  89  |         );
  90  | 
  91  |         await this.navigateAndVerify(
  92  |             this.linkClaim,
  93  |             /\/claim\/viewAssignClaim/
  94  |         );
  95  | 
  96  |         await this.navigateAndVerify(
  97  |             this.linkBuzz,
  98  |             /\/buzz\/viewBuzz/
  99  |         );
  100 | 
  101 |         await this.navigateAndVerify(
  102 |             this.linkRecruitment,
  103 |             /\/recruitment\/viewCandidates/
  104 |         );
  105 | 
  106 | }
  107 | 
  108 |     // async validateMenuNavigation()
  109 |     // {
  110 |     //     await CommonMethods.click(this.linkAdmin);
  111 |     //     await expect(this.page).toHaveURL(/\/admin\/viewSystemUsers/);
  112 | 
  113 |     //     await this.page.waitForTimeout(2000); 
  114 | 
  115 |     //     await CommonMethods.click(this.linkPIM);
  116 |     //     await expect(this.page).toHaveURL(/\/pim\/viewEmployee/);
  117 | 
  118 |     //     await this.page.waitForTimeout(2000); 
  119 | 
  120 |     //     await CommonMethods.click(this.linkLeave);
  121 |     //     await expect(this.page).toHaveURL(/\/leave\/viewLeaveList/);
  122 | 
  123 |     //     await this.page.waitForTimeout(2000); 
  124 | 
  125 |     //     await CommonMethods.click(this.linkTime);
  126 |     //     await expect(this.page).toHaveURL(/\/time\/viewEmployeeTimesheet/);
  127 | 
  128 |     //     await this.page.waitForTimeout(2000); 
  129 | 
  130 |     //     await CommonMethods.click(this.linkPerformance);
  131 |     //     await expect(this.page).toHaveURL(/\/performance\/searchEvaluatePerformanceReview/);
  132 | 
  133 |     //     await this.page.waitForTimeout(2000); 
```