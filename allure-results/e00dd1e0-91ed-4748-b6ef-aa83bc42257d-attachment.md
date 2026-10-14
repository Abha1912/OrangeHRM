# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: dashboardTest.spec.js >> TC001 Verify Search
- Location: tests\dashboardTest.spec.js:5:1

# Error details

```
Error: expect(locator).toHaveText(expected) failed

Locator: getByRole('heading', { name: 'PIM' })
Expected: "PIM"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" getByRole('heading', { name: 'PIM' }) with timeout 5000ms
  - waiting for getByRole('heading', { name: 'PIM' })

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
      - paragraph: Mahesh Babu
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
- text: (15) Records Found
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
    - row " Admin Admin Mahesh Babu Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "Mahesh Babu"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " br222 ESS Panda Rajkumar Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "br222"
      - cell "ESS"
      - cell "Panda Rajkumar"
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
    - row " Heather.Barton87 ESS Leone Cummerata Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Heather.Barton87"
      - cell "ESS"
      - cell "Leone Cummerata"
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
    - row " linh_58 ESS Linh Test Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "linh_58"
      - cell "ESS"
      - cell "Linh Test"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " linh_99 ESS Linh Test Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "linh_99"
      - cell "ESS"
      - cell "Linh Test"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Pam74 ESS Tatyana Schmeler Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Pam74"
      - cell "ESS"
      - cell "Tatyana Schmeler"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " rohit123varma ESS Rohit Verma Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "rohit123varma"
      - cell "ESS"
      - cell "Rohit Verma"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Rosalie_Jones99 ESS Sabryna Cruickshank Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Rosalie_Jones99"
      - cell "ESS"
      - cell "Sabryna Cruickshank"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " testuser14153323 ESS Test User14153323 Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "testuser14153323"
      - cell "ESS"
      - cell "Test User14153323"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " testuser1791972799483 ESS A8DCo 010Z Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "testuser1791972799483"
      - cell "ESS"
      - cell "A8DCo 010Z"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " testuser1791972827358 ESS A8DCo 010Z Disabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "testuser1791972827358"
      - cell "ESS"
      - cell "A8DCo 010Z"
      - cell "Disabled"
      - cell " ":
        - button ""
        - button ""
    - row " trobinson ESS Michael Smith Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "trobinson"
      - cell "ESS"
      - cell "Michael Smith"
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
  20 |         this.txtAdmin = page.getByRole('heading',{name : 'Admin/User Management'});
  21 |         this.linkPIM = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="PIM"]');
  22 |         this.linkLeave = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Leave"]');
  23 |         this.linkTime= page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Time"]');
  24 |         this.linkRecruitment = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Recruitment"]');
  25 |         this.linkMyInfo = page.getByRole('link',{name:'My Info'});
  26 |         this.txtMyInfo = page.getByRole('heading',{name : 'PIM'});
  27 | 
  28 | 
  29 |     }
  30 | 
  31 | 
  32 |     async navigateDashboardPage()
  33 |     {
  34 |         await expect(this.txtDashboard).toHaveText("Dashboard");
  35 |     }
  36 | 
  37 |     async search(searchText)
  38 |     {
  39 |         await CommonMethods.inputTextbox(this.inputSearch,searchText);
  40 |         await expect(this.listMenu).toHaveText(searchText);
  41 |     }
  42 | 
  43 |     async validateMenuNavigation()
  44 |     {
  45 |         await CommonMethods.click(this.linkAdmin);
  46 |         //await expect(this.txtAdmin).toHaveText('Admin/User Management')
  47 |         await CommonMethods.click(this.linkMyInfo);
> 48 |         await expect(this.txtMyInfo).toHaveText('PIM')
     |                                      ^ Error: expect(locator).toHaveText(expected) failed
  49 |     }
  50 |     
  51 | }
  52 | 
  53 | // Export the DashboardPage class.Other files can import and create a HomePage object.
  54 | module.exports = DashboardPage;
```