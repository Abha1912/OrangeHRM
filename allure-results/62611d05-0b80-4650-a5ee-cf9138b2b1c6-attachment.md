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
  17  |         this.linkAdmin = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Admin"]');
  18  |         this.linkPIM = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="PIM"]');
  19  |         this.linkLeave = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Leave"]');
  20  |         this.linkTime= page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Time"]');
  21  |         this.linkRecruitment = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Recruitment"]');
  22  |         this.linkPerformance = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Performance"]');
  23  |         this.linkDashboard = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Dashboard"]');
  24  |         this.linkDirectory = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Directory"]');
  25  |         this.linkMaintenance = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Maintenance"]');
  26  |         this.linkClaim = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Claim"]');
  27  |         this.linkBuzz = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Buzz"]');
  28  |         this.linkMyInfo = page.getByRole('link',{name:'My Info'});
  29  | 
  30  |     }
  31  | 
  32  |     async navigateDashboardPage() {
  33  | 
  34  |         await expect(this.page).toHaveURL(/\/dashboard\/index/);
  35  |         
  36  |     }
  37  | 
  38  |     async search(searchText)
  39  |     {
  40  |         await CommonMethods.inputTextbox(this.inputSearch,searchText);
  41  |         const matchingMenu = this.page.locator('.oxd-main-menu-item').filter({ hasText: searchText });
  42  |         await expect(matchingMenu).toBeVisible();
  43  |         await expect(matchingMenu).toContainText(searchText);
  44  | 
  45  |         //await expect(this.listMenu).toHaveText(searchText);
  46  |     }
  47  | 
  48  |     async navigateToAdmin(){
  49  |         await CommonMethods.click(this.linkAdmin);
  50  |         await expect(this.page).toHaveURL(/\/admin\/viewSystemUsers/);
  51  |     }
  52  | 
  53  |     async validateMenuNavigation()
  54  |     {
  55  |         await CommonMethods.click(this.linkAdmin);
  56  |         await expect(this.page).toHaveURL(/\/admin\/viewSystemUsers/);
  57  | 
  58  |         await this.page.waitForTimeout(2000); 
  59  | 
  60  |         await CommonMethods.click(this.linkPIM);
  61  |         await expect(this.page).toHaveURL(/\/pim\/viewEmployee/);
  62  | 
  63  |         await this.page.waitForTimeout(2000); 
  64  | 
  65  |         await CommonMethods.click(this.linkLeave);
  66  |         await expect(this.page).toHaveURL(/\/leave\/viewLeaveList/);
  67  | 
  68  |         await this.page.waitForTimeout(2000); 
  69  | 
  70  |         await CommonMethods.click(this.linkTime);
  71  |         await expect(this.page).toHaveURL(/\/time\/viewEmployeeTimesheet/);
  72  | 
  73  |         await this.page.waitForTimeout(2000); 
  74  | 
  75  |         await CommonMethods.click(this.linkPerformance);
  76  |         await expect(this.page).toHaveURL(/\/performance\/searchEvaluatePerformanceReview/);
  77  | 
  78  |         await this.page.waitForTimeout(2000); 
  79  | 
  80  |         await CommonMethods.click(this.linkDashboard);
  81  |         await expect(this.page).toHaveURL(/\/dashboard\/index/);
  82  | 
  83  |         await this.page.waitForTimeout(2000); 
  84  | 
  85  |         await CommonMethods.click(this.linkDirectory);
  86  |         await expect(this.page).toHaveURL(/\/directory\/viewDirectory/);
  87  | 
  88  |         await this.page.waitForTimeout(2000); 
  89  | 
  90  |         await CommonMethods.click(this.linkClaim);
  91  |         await expect(this.page).toHaveURL(/\/claim\/viewAssignClaim/);
  92  | 
> 93  |         await this.page.waitForTimeout(5000); 
      |                         ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  94  | 
  95  |         await CommonMethods.click(this.linkBuzz);
  96  |         await expect(this.page).toHaveURL(/\/buzz\/viewBuzz/);
  97  | 
  98  |         await this.page.waitForTimeout(2000); 
  99  | 
  100 |         await CommonMethods.click(this.linkRecruitment);
  101 |         await expect(this.page).toHaveURL(/\/recruitment\/viewCandidates/);
  102 | 
  103 |         await this.page.waitForTimeout(2000); 
  104 | 
  105 |         // await CommonMethods.click(this.linkMaintenance);
  106 |         // await expect(this.page).toHaveURL(/\/maintenance\/viewMaintenance/);
  107 |     }
  108 |     
  109 | }
  110 | 
  111 | // Export the DashboardPage class.Other files can import and create a HomePage object.
  112 | module.exports = DashboardPage;
```