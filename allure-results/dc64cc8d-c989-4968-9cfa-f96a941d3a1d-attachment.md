# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboardTest.spec.js >> TC001 Verify Search
- Location: tests\dashboardTest.spec.js:5:1

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected pattern: /\/leave\/viewLeaveList/
Received string:  "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html>…</html>
       - unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers"

```

```yaml
- complementary:
  - navigation "Sidepanel":
    - link "client brand banner":
      - /url: https://www.orangehrm.com/
      - img "client brand banner"
    - textbox "Search"
    - button ""
    - separator
    - list:
      - listitem:
        - link "Admin":
          - /url: /web/index.php/admin/viewAdminModule
      - listitem:
        - link "PIM":
          - /url: /web/index.php/pim/viewPimModule
      - listitem:
        - link "Leave":
          - /url: /web/index.php/leave/viewLeaveModule
      - listitem:
        - link "Time":
          - /url: /web/index.php/time/viewTimeModule
      - listitem:
        - link "Recruitment":
          - /url: /web/index.php/recruitment/viewRecruitmentModule
      - listitem:
        - link "My Info":
          - /url: /web/index.php/pim/viewMyDetails
      - listitem:
        - link "Performance":
          - /url: /web/index.php/performance/viewPerformanceModule
      - listitem:
        - link "Dashboard":
          - /url: /web/index.php/dashboard/index
      - listitem:
        - link "Directory":
          - /url: /web/index.php/directory/viewDirectory
      - listitem:
        - link "Maintenance":
          - /url: /web/index.php/maintenance/viewMaintenanceModule
      - listitem:
        - link "Claim":
          - /url: /web/index.php/claim/viewClaimModule
          - img
          - text: Claim
      - listitem:
        - link "Buzz":
          - /url: /web/index.php/buzz/viewBuzz
- banner:
  - heading "Admin" [level=6]
  - heading "/ User Management" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Ankit Pal
      - text: 
  - navigation "Topbar Menu":
    - list:
      - listitem: User Management 
      - listitem: Job 
      - listitem: Organization 
      - listitem: Qualifications 
      - listitem:
        - link "Nationalities":
          - /url: "#"
      - listitem:
        - link "Corporate Branding":
          - /url: "#"
      - listitem: Configuration 
      - button ""
- heading "System Users" [level=5]
- button ""
- separator
- text: Username
- textbox
- text: User Role -- Select --  Employee Name
- textbox "Type for hints..."
- text: Status -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (18) Records Found
- table:
  - rowgroup:
    - row " Username  User Role  Employee Name  Status  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Username "
      - columnheader "User Role "
      - columnheader "Employee Name "
      - columnheader "Status "
      - columnheader "Actions"
  - rowgroup:
    - row " Admin Admin Ankit Pal Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "Ankit Pal"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " AkshitG ESS Akshit Gudur Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "AkshitG"
      - cell "ESS"
      - cell "Akshit Gudur"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " FMLName ESS Qwerty LName Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "FMLName"
      - cell "ESS"
      - cell "Qwerty LName"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " FMLName1 ESS FName LName Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "FMLName1"
      - cell "ESS"
      - cell "FName LName"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Jobinsam@6742 ESS Jobin Sam Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Jobinsam@6742"
      - cell "ESS"
      - cell "Jobin Sam"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " qa1414035945 ESS Zacarias Smith Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "qa1414035945"
      - cell "ESS"
      - cell "Zacarias Smith"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " rohit406varma ESS Rohit Verma Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "rohit406varma"
      - cell "ESS"
      - cell "Rohit Verma"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " User_1791979535585 Admin TestFn_1791979535585 TestLn_1791979535585 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "User_1791979535585"
      - cell "Admin"
      - cell "TestFn_1791979535585 TestLn_1791979535585"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " User_1791979610770 Admin TestFn_1791979610770 TestLn_1791979610770 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "User_1791979610770"
      - cell "Admin"
      - cell "TestFn_1791979610770 TestLn_1791979610770"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " User_1791980174784 Admin TestFn_1791980174784 TestLn_1791980174784 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "User_1791980174784"
      - cell "Admin"
      - cell "TestFn_1791980174784 TestLn_1791980174784"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " User_1791980211773 Admin TestFn_1791980211773 TestLn_1791980211773 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "User_1791980211773"
      - cell "Admin"
      - cell "TestFn_1791980211773 TestLn_1791980211773"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " User_1791980412153 Admin TestFn_1791980412153 TestLn_1791980412153 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "User_1791980412153"
      - cell "Admin"
      - cell "TestFn_1791980412153 TestLn_1791980412153"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " User_1791980450863 Admin TestFn_1791980450863 TestLn_1791980450863 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "User_1791980450863"
      - cell "Admin"
      - cell "TestFn_1791980450863 TestLn_1791980450863"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " User_1791980517866 Admin TestFn_1791980517866 TestLn_1791980517866 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "User_1791980517866"
      - cell "Admin"
      - cell "TestFn_1791980517866 TestLn_1791980517866"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " virat_1791979300545 ESS Virat Kohli Disabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "virat_1791979300545"
      - cell "ESS"
      - cell "Virat Kohli"
      - cell "Disabled"
      - cell " ":
        - button ""
        - button ""
    - row " virat_1791979871101 ESS Virat Kohli Disabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "virat_1791979871101"
      - cell "ESS"
      - cell "Virat Kohli"
      - cell "Disabled"
      - cell " ":
        - button ""
        - button ""
    - row " virat_1791980108583 ESS Virat Kohli Disabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "virat_1791980108583"
      - cell "ESS"
      - cell "Virat Kohli"
      - cell "Disabled"
      - cell " ":
        - button ""
        - button ""
    - row " Vivek404 ESS Viv pat Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Vivek404"
      - cell "ESS"
      - cell "Viv pat"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
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
  24 |         this.linkPerformance = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Performance"]');
  25 |         this.linkDashboard = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Dashboard"]');
  26 |         this.linkDirectory = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Directory"]');
  27 |         this.linkMaintenance = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Maintenance"]');
  28 |         this.linkClaim = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Claim"]');
  29 |         this.linkBuzz = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Buzz"]');
  30 |         this.linkMyInfo = page.getByRole('link',{name:'My Info'});
  31 | 
  32 |     }
  33 | 
  34 |     async navigateDashboardPage()
  35 |     {
  36 |         await expect(this.txtDashboard).toHaveText("Dashboard");
  37 |     }
  38 | 
  39 |     async search(searchText)
  40 |     {
  41 |         await CommonMethods.inputTextbox(this.inputSearch,searchText);
  42 |         const matchingMenu = this.page.locator('.oxd-main-menu-item').filter({ hasText: searchText });
  43 |         await expect(matchingMenu).toBeVisible();
  44 |         await expect(matchingMenu).toContainText(searchText);
  45 | 
  46 |         //await expect(this.listMenu).toHaveText(searchText);
  47 |     }
  48 | 
  49 |     async validateMenuNavigation()
  50 |     {
  51 |         await CommonMethods.click(this.linkAdmin);
  52 |         await expect(this.page).toHaveURL(/\/admin\/viewSystemUsers/);
  53 | 
  54 |         // await CommonMethods.click(this.linkPIM);
  55 |         // await expect(this.page).toHaveURL(/\/pim\/viewEmployee/);
  56 | 
  57 |         await CommonMethods.click(this.linkLeave);
> 58 |         await expect(this.page).toHaveURL(/\/leave\/viewLeaveList/);
     |                                 ^ Error: expect(page).toHaveURL(expected) failed
  59 | 
  60 |         await CommonMethods.click(this.linkTime);
  61 |         await expect(this.page).toHaveURL(/\/time\/viewEmployeeTimesheet/);
  62 | 
  63 |         await CommonMethods.click(this.linkRecruitment);
  64 |         await expect(this.page).toHaveURL(/\/recruitment\/viewCandidates/);
  65 | 
  66 |         await CommonMethods.click(this.linkPerformance);
  67 |         await expect(this.page).toHaveURL(/\/performance\/searchEvaluatePerformanceReview/);
  68 | 
  69 |         await CommonMethods.click(this.linkDashboard);
  70 |         await expect(this.page).toHaveURL(/\/dashboard\/index/);
  71 | 
  72 |         await CommonMethods.click(this.linkDirectory);
  73 |         await expect(this.page).toHaveURL(/\/directory\/viewDirectory/);
  74 | 
  75 |         await CommonMethods.click(this.linkClaim);
  76 |         await expect(this.page).toHaveURL(/\/claim\/viewAssignClaim/);
  77 | 
  78 |         await CommonMethods.click(this.linkBuzz);
  79 |         await expect(this.page).toHaveURL(/\/buzz\/viewBuzz/);
  80 | 
  81 |         await CommonMethods.click(this.linkMaintenance);
  82 |         await expect(this.page).toHaveURL(/\/maintenance\/viewMaintenance/);
  83 |     }
  84 |     
  85 | }
  86 | 
  87 | // Export the DashboardPage class.Other files can import and create a HomePage object.
  88 | module.exports = DashboardPage;
```