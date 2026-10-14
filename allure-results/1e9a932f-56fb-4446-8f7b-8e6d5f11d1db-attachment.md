# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboardTest.spec.js >> TC002 Verify left menu link redirect to correct page
- Location: tests\dashboardTest.spec.js:22:1

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
  6   | class DashboardPage{
  7   |     
  8   |    
  9   |     constructor(page)
  10  |     {
  11  |          
  12  |         this.page = page; 
  13  | 
  14  |         this.txtDashboard = page.getByRole('heading',{name : 'Dashboard'});
  15  | 
  16  |         this.inputSearch = page.getByPlaceholder('Search');
  17  |         this.listMenu = page.locator('.oxd-main-menu-item');
  18  | 
  19  |         this.linkAdmin = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Admin"]');
  20  |         this.linkPIM = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="PIM"]');
  21  |         this.linkLeave = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Leave"]');
  22  |         this.linkTime= page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Time"]');
  23  |         this.linkRecruitment = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Recruitment"]');
  24  |         this.linkPerformance = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Performance"]');
  25  |         this.linkDashboard = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Dashboard"]');
  26  |         this.linkDirectory = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Directory"]');
  27  |         this.linkMaintenance = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Maintenance"]');
  28  |         this.linkClaim = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Claim"]');
  29  |         this.linkBuzz = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Buzz"]');
  30  |         this.linkMyInfo = page.getByRole('link',{name:'My Info'});
  31  | 
  32  |     }
  33  | 
  34  |     async navigateDashboardPage()
  35  |     {
  36  |         await expect(this.page).toHaveURL(/\/dashboard\/index/);
  37  |     }
  38  | 
  39  |     async search(searchText)
  40  |     {
  41  |         await CommonMethods.inputTextbox(this.inputSearch,searchText);
  42  |         const matchingMenu = this.page.locator('.oxd-main-menu-item').filter({ hasText: searchText });
  43  |         await expect(matchingMenu).toBeVisible();
  44  |         await expect(matchingMenu).toContainText(searchText);
  45  | 
  46  |         //await expect(this.listMenu).toHaveText(searchText);
  47  |     }
  48  | 
  49  |     async validateMenuNavigation()
  50  |     {
  51  |         await CommonMethods.click(this.linkAdmin);
  52  |         await expect(this.page).toHaveURL(/\/admin\/viewSystemUsers/);
  53  | 
  54  |         await this.page.waitForTimeout(2000); 
  55  | 
  56  |         await CommonMethods.click(this.linkPIM);
  57  |         await expect(this.page).toHaveURL(/\/pim\/viewEmployee/);
  58  | 
  59  |         await this.page.waitForTimeout(2000); 
  60  | 
  61  |         await CommonMethods.click(this.linkLeave);
  62  |         await expect(this.page).toHaveURL(/\/leave\/viewLeaveList/);
  63  | 
  64  |         await this.page.waitForTimeout(2000); 
  65  | 
  66  |         await CommonMethods.click(this.linkTime);
  67  |         await expect(this.page).toHaveURL(/\/time\/viewEmployeeTimesheet/);
  68  | 
  69  |         await this.page.waitForTimeout(2000); 
  70  | 
  71  |         await CommonMethods.click(this.linkPerformance);
  72  |         await expect(this.page).toHaveURL(/\/performance\/searchEvaluatePerformanceReview/);
  73  | 
  74  |         await this.page.waitForTimeout(2000); 
  75  | 
  76  |         await CommonMethods.click(this.linkDashboard);
  77  |         await expect(this.page).toHaveURL(/\/dashboard\/index/);
  78  | 
  79  |         await this.page.waitForTimeout(2000); 
  80  | 
  81  |         await CommonMethods.click(this.linkDirectory);
  82  |         await expect(this.page).toHaveURL(/\/directory\/viewDirectory/);
  83  | 
  84  |         await this.page.waitForTimeout(2000); 
  85  | 
  86  |         await CommonMethods.click(this.linkClaim);
  87  |         await expect(this.page).toHaveURL(/\/claim\/viewAssignClaim/);
  88  | 
> 89  |         await this.page.waitForTimeout(2000); 
      |                         ^ Error: page.waitForTimeout: Test timeout of 30000ms exceeded.
  90  | 
  91  |         await CommonMethods.click(this.linkBuzz);
  92  |         await expect(this.page).toHaveURL(/\/buzz\/viewBuzz/);
  93  | 
  94  |         await this.page.waitForTimeout(2000); 
  95  | 
  96  |         await CommonMethods.click(this.linkRecruitment);
  97  |         await expect(this.page).toHaveURL(/\/recruitment\/viewCandidates/);
  98  | 
  99  |         await this.page.waitForTimeout(2000); 
  100 | 
  101 |         // await CommonMethods.click(this.linkMaintenance);
  102 |         // await expect(this.page).toHaveURL(/\/maintenance\/viewMaintenance/);
  103 |     }
  104 |     
  105 | }
  106 | 
  107 | // Export the DashboardPage class.Other files can import and create a HomePage object.
  108 | module.exports = DashboardPage;
```