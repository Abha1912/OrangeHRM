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

Locator: getByRole('heading', { name: 'Admin/User Management' })
Expected: "Admin/User Management"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveText" getByRole('heading', { name: 'Admin/User Management' }) with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Admin/User Management' })

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
      - paragraph: Ranjith Sharma
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
- text: (36) Records Found
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
    - row " ' OR '1'='1 ESS Eve King Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "' OR '1'='1"
      - cell "ESS"
      - cell "Eve King"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Admin Admin Ranjith Sharma Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Admin"
      - cell "Admin"
      - cell "Ranjith Sharma"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " admin1 Admin Timothy Amiano Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "admin1"
      - cell "Admin"
      - cell "Timothy Amiano"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " afwfwfwge Admin Charles Carter Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "afwfwfwge"
      - cell "Admin"
      - cell "Charles Carter"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " cwhite01 ESS Carol White Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "cwhite01"
      - cell "ESS"
      - cell "Carol White"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " delgadotheresa ESS Destiny Turner Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "delgadotheresa"
      - cell "ESS"
      - cell "Destiny Turner"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " disabled1 ESS Alice Smith Disabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "disabled1"
      - cell "ESS"
      - cell "Alice Smith"
      - cell "Disabled"
      - cell " ":
        - button ""
        - button ""
    - row " douglas03 Admin Destiny Turner Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "douglas03"
      - cell "Admin"
      - cell "Destiny Turner"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " essuser_1791886552034 ESS A8DCo 010Z Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "essuser_1791886552034"
      - cell "ESS"
      - cell "A8DCo 010Z"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " ess_role_171ba08423 ESS EssRole171ba08423 AccessTest Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ess_role_171ba08423"
      - cell "ESS"
      - cell "EssRole171ba08423 AccessTest"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " FHUtaqyjWK ESS Mossie Pollich Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "FHUtaqyjWK"
      - cell "ESS"
      - cell "Mossie Pollich"
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
    - row " hemanp333 Admin Ranga Akunuri Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "hemanp333"
      - cell "Admin"
      - cell "Ranga Akunuri"
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
    - row " John88121493 ESS John Doe Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "John88121493"
      - cell "ESS"
      - cell "John Doe"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " John88518525 ESS John Doe Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "John88518525"
      - cell "ESS"
      - cell "John Doe"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " jumaicajumaica Admin James Butler Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "jumaicajumaica"
      - cell "Admin"
      - cell "James Butler"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " K2PGmOsl ESS Cary Kulas Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "K2PGmOsl"
      - cell "ESS"
      - cell "Cary Kulas"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " kudaasd Admin James Butler Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "kudaasd"
      - cell "Admin"
      - cell "James Butler"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " pimuser88817132 ESS Raj ravi Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "pimuser88817132"
      - cell "ESS"
      - cell "Raj ravi"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " pimuser88973993 ESS Raj ravi Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "pimuser88973993"
      - cell "ESS"
      - cell "Raj ravi"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " pimuser89166290 ESS Raj ravi Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "pimuser89166290"
      - cell "ESS"
      - cell "Raj ravi"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " rahul.sys ESS Rahul Das Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "rahul.sys"
      - cell "ESS"
      - cell "Rahul Das"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Rams11 ESS Ram Sharma Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Rams11"
      - cell "ESS"
      - cell "Ram Sharma"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " SFEGVGG Admin fwjqofw asfjwo Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "SFEGVGG"
      - cell "Admin"
      - cell "fwjqofw asfjwo"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " Shaphee Admin Ranjith Sharma Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "Shaphee"
      - cell "Admin"
      - cell "Ranjith Sharma"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " TestUser123 ESS Charles Carter Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "TestUser123"
      - cell "ESS"
      - cell "Charles Carter"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " testuser901 Admin aniket patil Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "testuser901"
      - cell "Admin"
      - cell "aniket patil"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " testuser_ed5c5212 ESS A8DCo 010Z Disabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "testuser_ed5c5212"
      - cell "ESS"
      - cell "A8DCo 010Z"
      - cell "Disabled"
      - cell " ":
        - button ""
        - button ""
    - row " testuser_f6637eb6 ESS A8DCo 010Z Disabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "testuser_f6637eb6"
      - cell "ESS"
      - cell "A8DCo 010Z"
      - cell "Disabled"
      - cell " ":
        - button ""
        - button ""
    - row " testuser_ffd82667 ESS A8DCo 010Z Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "testuser_ffd82667"
      - cell "ESS"
      - cell "A8DCo 010Z"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " testuser_new_20261013 ESS Charles Carter Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "testuser_new_20261013"
      - cell "ESS"
      - cell "Charles Carter"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " thomasthompson ESS Joshua Evans Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "thomasthompson"
      - cell "ESS"
      - cell "Joshua Evans"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " user_edge_abcdefghijklmnopqrstuvwxyz1234 ESS Edge User Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "user_edge_abcdefghijklmnopqrstuvwxyz1234"
      - cell "ESS"
      - cell "Edge User"
      - cell "Enabled"
      - cell " ":
        - button ""
        - button ""
    - row " worief12 ESS fwjqofw asfjwo Enabled  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "worief12"
      - cell "ESS"
      - cell "fwjqofw asfjwo"
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
> 46 |         await expect(this.txtAdmin).toHaveText('Admin/User Management')
     |                                     ^ Error: expect(locator).toHaveText(expected) failed
  47 |         await CommonMethods.click(this.linkMyInfo);
  48 |         await expect(this.txtMyInfo).toHaveText('PIM')
  49 |     }
  50 |     
  51 | }
  52 | 
  53 | // Export the DashboardPage class.Other files can import and create a HomePage object.
  54 | module.exports = DashboardPage;
```