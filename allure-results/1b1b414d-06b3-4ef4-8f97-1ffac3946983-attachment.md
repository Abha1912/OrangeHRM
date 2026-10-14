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

Expected pattern: /\/viewLeaveList/
Received string:  "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"
Timeout: 5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    13 × locator resolved to <html>…</html>
       - unexpected value "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList"

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
  - heading "PIM" [level=6]
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
      - listitem: Configuration 
      - listitem:
        - link "Employee List":
          - /url: "#"
      - listitem:
        - link "Add Employee":
          - /url: "#"
      - listitem:
        - link "Reports":
          - /url: "#"
      - button ""
- heading "Employee Information" [level=5]
- button ""
- separator
- text: Employee Name
- textbox "Type for hints..."
- text: Employee Id
- textbox
- text: Employment Status -- Select --  Include Current Employees Only  Supervisor Name
- textbox "Type for hints..."
- text: Job Title -- Select --  Sub Unit -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: (107) Records Found
- table:
  - rowgroup:
    - row " Id  First (& Middle) Name  Last Name  Job Title  Employment Status  Sub Unit  Supervisor  Actions":
      - columnheader "":
        - checkbox ""
        - text: 
      - columnheader "Id "
      - columnheader "First (& Middle) Name "
      - columnheader "Last Name "
      - columnheader "Job Title "
      - columnheader "Employment Status "
      - columnheader "Sub Unit "
      - columnheader "Supervisor "
      - columnheader "Actions"
  - rowgroup:
    - row " dfgsjsjdh 123445 34 444444 Chief Executive Officer  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "dfgsjsjdh"
      - cell "123445 34"
      - cell "444444"
      - cell "Chief Executive Officer"
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0295 99N75 425 5TlV  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0295"
      - cell "99N75 425"
      - cell "5TlV"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0312 A8DCo 4Ys 010Z  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0312"
      - cell "A8DCo 4Ys"
      - cell "010Z"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 01715 Amelia Brown  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "01715"
      - cell "Amelia"
      - cell "Brown"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0360 aniket t t  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0360"
      - cell "aniket t"
      - cell "t"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 708177 Ankit sing Pal HR Manager Full-Time Permanent Human Resources ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "708177"
      - cell "Ankit sing"
      - cell "Pal"
      - cell "HR Manager"
      - cell "Full-Time Permanent"
      - cell "Human Resources"
      - cell
      - cell "":
        - button ""
    - row " 0367 Ash J Tyson  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0367"
      - cell "Ash J"
      - cell "Tyson"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 40242544 Auto940242544 Mid Qa940242544  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "40242544"
      - cell "Auto940242544 Mid"
      - cell "Qa940242544"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0303 bala kumar ravi  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0303"
      - cell "bala kumar"
      - cell "ravi"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0292 bmrtahvwhibmrtahvwhi hbfqkhjfqbhbfqkhjfqb  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0292"
      - cell "bmrtahvwhibmrtahvwhi"
      - cell "hbfqkhjfqbhbfqkhjfqb"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0320 Charles Carter  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0320"
      - cell "Charles"
      - cell "Carter"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 00392 Charlotte Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "00392"
      - cell "Charlotte"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0363 Christopher Mcmillan  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0363"
      - cell "Christopher"
      - cell "Mcmillan"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0388 Demo test  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0388"
      - cell "Demo"
      - cell "test"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0290 dhbrukkuzldhbrukkuzl ibuvlwtfsfibuvlwtfsf  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0290"
      - cell "dhbrukkuzldhbrukkuzl"
      - cell "ibuvlwtfsfibuvlwtfsf"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0294 DHINA KARAN P  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0294"
      - cell "DHINA KARAN"
      - cell "P"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 09557 Emily Jones  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "09557"
      - cell "Emily"
      - cell "Jones"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 1235 FName Mname LName  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "1235"
      - cell "FName Mname"
      - cell "LName"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftdkux ltsxgy  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftdkux"
      - cell "ltsxgy"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue fthnvn ltwrrt  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "fthnvn"
      - cell "ltwrrt"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue fthnvn ltwrrt  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "fthnvn"
      - cell "ltwrrt"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue fthyfv ltrhtm  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "fthyfv"
      - cell "ltrhtm"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftioiu ltpugr  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftioiu"
      - cell "ltpugr"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftioiu ltpugr  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftioiu"
      - cell "ltpugr"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftioiu ltpugr  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftioiu"
      - cell "ltpugr"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftioiu ltpugr  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftioiu"
      - cell "ltpugr"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftndlm ltdyyf  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftndlm"
      - cell "ltdyyf"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftpjte ltpzkj  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftpjte"
      - cell "ltpzkj"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftyseo ltzbbp  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftyseo"
      - cell "ltzbbp"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftyseo ltzbbp  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftyseo"
      - cell "ltzbbp"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftyseo ltzbbp  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftyseo"
      - cell "ltzbbp"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftyseo ltzbbp  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftyseo"
      - cell "ltzbbp"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftyseo ltzbbp  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftyseo"
      - cell "ltzbbp"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " ATPValue ftyseo ltzbbp  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "ATPValue"
      - cell "ftyseo"
      - cell "ltzbbp"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0315hh hh hh  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0315hh"
      - cell "hh"
      - cell "hh"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 24680 INC0010011 02  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "24680"
      - cell "INC0010011"
      - cell "02"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 67890 INC0010011 01  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "67890"
      - cell "INC0010011"
      - cell "01"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0365 James Butler  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0365"
      - cell "James"
      - cell "Butler"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0367010 Jobin Mathew Sam  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0367010"
      - cell "Jobin Mathew"
      - cell "Sam"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0303 joker john selvam  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0303"
      - cell "joker john"
      - cell "selvam"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0361 Joseph Evans  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0361"
      - cell "Joseph"
      - cell "Evans"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0321 Joy Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0321"
      - cell "Joy"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0364 Joy Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0364"
      - cell "Joy"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0342 Joy Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0342"
      - cell "Joy"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0323 Joy Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0323"
      - cell "Joy"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0317 Joy Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0317"
      - cell "Joy"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0322 Joy Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0322"
      - cell "Joy"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0359 Joy Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0359"
      - cell "Joy"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0335 Joy Smith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0335"
      - cell "Joy"
      - cell "Smith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0315 JoyToy SmithSmith  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0315"
      - cell "JoyToy"
      - cell "SmithSmith"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
- navigation "Pagination Navigation":
  - list:
    - listitem:
      - button "1"
    - listitem:
      - button "2"
    - listitem:
      - button "3"
    - listitem:
      - button ""
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
  42 |         await expect(this.listMenu).toHaveText(searchText);
  43 |     }
  44 | 
  45 |     async validateMenuNavigation()
  46 |     {
  47 |         // await CommonMethods.click(this.linkAdmin);
  48 |         // await expect(this.page).toHaveURL(/\/viewSystemUsers/);
  49 | 
  50 |         await CommonMethods.click(this.linkPIM);
  51 |         await expect(this.page).toHaveURL(/\/viewEmployeeList/);
  52 | 
  53 |         await CommonMethods.click(this.linkLeave);
> 54 |         await expect(this.page).toHaveURL(/\/viewLeaveList/);
     |                                 ^ Error: expect(page).toHaveURL(expected) failed
  55 | 
  56 |         await CommonMethods.click(this.linkTime);
  57 |         await expect(this.page).toHaveURL(/\/viewEmployeeTimesheet/);
  58 | 
  59 |         await CommonMethods.click(this.linkRecruitment);
  60 |         await expect(this.page).toHaveURL(/\/viewCandidates/);
  61 | 
  62 |         await CommonMethods.click(this.linkPIM);
  63 |         await expect(this.page).toHaveURL(/\/viewPersonalDetails/);
  64 | 
  65 |         await CommonMethods.click(this.linkPerformance);
  66 |         await expect(this.page).toHaveURL(/\/searchEvaluatePerformanceReview/);
  67 | 
  68 |         await CommonMethods.click(this.linkDashboard);
  69 |         await expect(this.page).toHaveURL(/\/dashboard/);
  70 | 
  71 |         await CommonMethods.click(this.linkDirectory);
  72 |         await expect(this.page).toHaveURL(/\/viewDirectory/);
  73 | 
  74 |         // await CommonMethods.click(this.linkMaintenance);
  75 |         // await expect(this.page).toHaveURL(/\/maintenance/);
  76 | 
  77 |         await CommonMethods.click(this.linkClaim);
  78 |         await expect(this.page).toHaveURL(/\/viewAssignClaim/);
  79 | 
  80 |         await CommonMethods.click(this.linkBuzz);
  81 |         await expect(this.page).toHaveURL(/\/viewBuzz/);
  82 |     }
  83 |     
  84 | }
  85 | 
  86 | // Export the DashboardPage class.Other files can import and create a HomePage object.
  87 | module.exports = DashboardPage;
```