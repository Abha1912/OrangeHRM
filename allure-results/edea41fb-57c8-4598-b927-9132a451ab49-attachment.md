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
  39  |     async search(searchText) {
  40  | 
  41  |         await CommonMethods.inputTextbox(this.inputSearch,searchText);
  42  |         const matchingMenu = this.page.locator('.oxd-main-menu-item').filter({ hasText: searchText });
  43  |         await expect(matchingMenu).toBeVisible();
  44  |         await expect(matchingMenu).toContainText(searchText);
  45  | 
  46  |     }
  47  |     async navigateToAdminpage(){
  48  |         await this.navigateAndVerify(this.linkAdmin,/\/admin\/viewSystemUsers/);
  49  |     }
  50  |  
  51  |     async validateMenuNavigation() {
  52  |         await this.navigateAndVerify(
  53  |             this.linkAdmin,/\/admin\/viewSystemUsers/);
  54  | 
  55  |         await this.navigateAndVerify(
  56  |             this.linkPIM,
  57  |             /\/pim\/viewEmployee/
  58  |         );
  59  | 
  60  |         await this.navigateAndVerify(
  61  |             this.linkLeave,
  62  |             /\/leave\/viewLeaveList/
  63  |         );
  64  | 
  65  |         await this.navigateAndVerify(
  66  |             this.linkTime,
  67  |             /\/time\/viewEmployeeTimesheet/
  68  |         );
  69  | 
  70  |         await this.navigateAndVerify(
  71  |             this.linkPerformance,
  72  |             /\/performance\/searchEvaluatePerformanceReview/
  73  |         );
  74  | 
  75  |         await this.navigateAndVerify(
  76  |             this.linkDashboard,
  77  |             /\/dashboard\/index/
  78  |         );
  79  | 
  80  |         await this.navigateAndVerify(
  81  |             this.linkDirectory,
  82  |             /\/directory\/viewDirectory/
  83  |         );
  84  | 
  85  |         await this.navigateAndVerify(
  86  |             this.linkClaim,
  87  |             /\/claim\/viewAssignClaim/
  88  |         );
  89  | 
  90  |         await this.navigateAndVerify(
  91  |             this.linkBuzz,
  92  |             /\/buzz\/viewBuzz/
  93  |         );
  94  | 
  95  |         await this.navigateAndVerify(
  96  |             this.linkRecruitment,
  97  |             /\/recruitment\/viewCandidates/
  98  |         );
  99  | 
  100 | }
  101 | 
  102 |     // async validateMenuNavigation()
  103 |     // {
  104 |     //     await CommonMethods.click(this.linkAdmin);
  105 |     //     await expect(this.page).toHaveURL(/\/admin\/viewSystemUsers/);
  106 | 
  107 |     //     await this.page.waitForTimeout(2000); 
  108 | 
  109 |     //     await CommonMethods.click(this.linkPIM);
  110 |     //     await expect(this.page).toHaveURL(/\/pim\/viewEmployee/);
  111 | 
  112 |     //     await this.page.waitForTimeout(2000); 
  113 | 
  114 |     //     await CommonMethods.click(this.linkLeave);
  115 |     //     await expect(this.page).toHaveURL(/\/leave\/viewLeaveList/);
  116 | 
  117 |     //     await this.page.waitForTimeout(2000); 
  118 | 
  119 |     //     await CommonMethods.click(this.linkTime);
  120 |     //     await expect(this.page).toHaveURL(/\/time\/viewEmployeeTimesheet/);
  121 | 
  122 |     //     await this.page.waitForTimeout(2000); 
  123 | 
  124 |     //     await CommonMethods.click(this.linkPerformance);
  125 |     //     await expect(this.page).toHaveURL(/\/performance\/searchEvaluatePerformanceReview/);
  126 | 
  127 |     //     await this.page.waitForTimeout(2000); 
  128 | 
  129 |     //     await CommonMethods.click(this.linkDashboard);
  130 |     //     await expect(this.page).toHaveURL(/\/dashboard\/index/);
  131 | 
  132 |     //     await this.page.waitForTimeout(2000); 
  133 | 
```