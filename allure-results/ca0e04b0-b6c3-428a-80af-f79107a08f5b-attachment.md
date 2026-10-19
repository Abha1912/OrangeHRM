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
Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
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
  31  |     async navigateDashboardPage() {
  32  | 
  33  |         await expect(this.page).toHaveURL(/\/dashboard\/index/);
  34  | 
  35  |     }
  36  | 
  37  |     async search(searchText)
  38  |     {
  39  |         await CommonMethods.inputTextbox(this.inputSearch,searchText);
  40  |         const matchingMenu = this.page.locator('.oxd-main-menu-item').filter({ hasText: searchText });
  41  |         await expect(matchingMenu).toBeVisible();
  42  |         await expect(matchingMenu).toContainText(searchText);
  43  | 
  44  |         //await expect(this.listMenu).toHaveText(searchText);
  45  |     }
  46  | 
  47  |     async navigateToAdmin(){
  48  |         await CommonMethods.click(this.linkAdmin);
  49  |         await expect(this.page).toHaveURL(/\/admin\/viewSystemUsers/);
  50  |     }
  51  | 
  52  |     async validateMenuNavigation()
  53  |     {
  54  |         await CommonMethods.click(this.linkAdmin);
  55  |         await expect(this.page).toHaveURL(/\/admin\/viewSystemUsers/);
  56  | 
  57  |         await this.page.waitForTimeout(2000); 
  58  | 
  59  |         await CommonMethods.click(this.linkPIM);
  60  |         await expect(this.page).toHaveURL(/\/pim\/viewEmployee/);
  61  | 
  62  |         await this.page.waitForTimeout(2000); 
  63  | 
  64  |         await CommonMethods.click(this.linkLeave);
  65  |         await expect(this.page).toHaveURL(/\/leave\/viewLeaveList/);
  66  | 
  67  |         await this.page.waitForTimeout(2000); 
  68  | 
  69  |         await CommonMethods.click(this.linkTime);
  70  |         await expect(this.page).toHaveURL(/\/time\/viewEmployeeTimesheet/);
  71  | 
  72  |         await this.page.waitForTimeout(2000); 
  73  | 
  74  |         await CommonMethods.click(this.linkPerformance);
  75  |         await expect(this.page).toHaveURL(/\/performance\/searchEvaluatePerformanceReview/);
  76  | 
  77  |         await this.page.waitForTimeout(2000); 
  78  | 
  79  |         await CommonMethods.click(this.linkDashboard);
  80  |         await expect(this.page).toHaveURL(/\/dashboard\/index/);
  81  | 
  82  |         await this.page.waitForTimeout(2000); 
  83  | 
  84  |         await CommonMethods.click(this.linkDirectory);
  85  |         await expect(this.page).toHaveURL(/\/directory\/viewDirectory/);
  86  | 
  87  |         await this.page.waitForTimeout(2000); 
  88  | 
  89  |         await CommonMethods.click(this.linkClaim);
  90  |         await expect(this.page).toHaveURL(/\/claim\/viewAssignClaim/);
  91  | 
> 92  |         await this.page.waitForTimeout(5000); 
      |                         ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  93  | 
  94  |         await CommonMethods.click(this.linkBuzz);
  95  |         await expect(this.page).toHaveURL(/\/buzz\/viewBuzz/);
  96  | 
  97  |         await this.page.waitForTimeout(2000); 
  98  | 
  99  |         await CommonMethods.click(this.linkRecruitment);
  100 |         await expect(this.page).toHaveURL(/\/recruitment\/viewCandidates/);
  101 | 
  102 |         await this.page.waitForTimeout(2000); 
  103 | 
  104 |         // await CommonMethods.click(this.linkMaintenance);
  105 |         // await expect(this.page).toHaveURL(/\/maintenance\/viewMaintenance/);
  106 |     }
  107 |     
  108 | }
  109 | 
  110 | // Export the DashboardPage class.Other files can import and create a HomePage object.
  111 | module.exports = DashboardPage;
```