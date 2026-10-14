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
- text: (105) Records Found
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
    - row " 22222 Ankit sing Pal HR Manager Full-Time Permanent Human Resources ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "22222"
      - cell "Ankit sing"
      - cell "Pal"
      - cell "HR Manager"
      - cell "Full-Time Permanent"
      - cell "Human Resources"
      - cell
      - cell "":
        - button ""
    - row " 93867240 Auto893867240 Qa893867240  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "93867240"
      - cell "Auto893867240"
      - cell "Qa893867240"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0758 Pratheep raj Stalin  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0758"
      - cell "Pratheep raj"
      - cell "Stalin"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0577223 Ram Kumar Sharma  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0577223"
      - cell "Ram Kumar"
      - cell "Sharma"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0527223 Ram Kumar Sharma  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0527223"
      - cell "Ram Kumar"
      - cell "Sharma"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 77048757 Ram Kumar Sharma Automaton Tester Full-Time Contract Ranga Akunuri  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "77048757"
      - cell "Ram Kumar"
      - cell "Sharma"
      - cell "Automaton Tester"
      - cell "Full-Time Contract"
      - cell
      - cell "Ranga Akunuri"
      - cell " ":
        - button ""
        - button ""
    - row " 0413223 Ram Kumar Sharma  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0413223"
      - cell "Ram Kumar"
      - cell "Sharma"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 78874504 Ram Kumar Sharma Automaton Tester Full-Time Contract Ranga Akunuri  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "78874504"
      - cell "Ram Kumar"
      - cell "Sharma"
      - cell "Automaton Tester"
      - cell "Full-Time Contract"
      - cell
      - cell "Ranga Akunuri"
      - cell " ":
        - button ""
        - button ""
    - row " 77491856 Ram Kumar Sharma Automaton Tester Full-Time Contract Ranga Akunuri  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "77491856"
      - cell "Ram Kumar"
      - cell "Sharma"
      - cell "Automaton Tester"
      - cell "Full-Time Contract"
      - cell
      - cell "Ranga Akunuri"
      - cell " ":
        - button ""
        - button ""
    - row " 0503223 Ram Kumar Sharma  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0503223"
      - cell "Ram Kumar"
      - cell "Sharma"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0277 Ranga Akunuri  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0277"
      - cell "Ranga"
      - cell "Akunuri"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 3322 Ravi M B  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "3322"
      - cell "Ravi M"
      - cell "B"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0042 Rebecca Harmony QA Engineer Full-Time Contract  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0042"
      - cell "Rebecca"
      - cell "Harmony"
      - cell "QA Engineer"
      - cell "Full-Time Contract"
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0261 rkbqaoxdhzrkbqaoxdhz lszuvmchnilszuvmchni  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0261"
      - cell "rkbqaoxdhzrkbqaoxdhz"
      - cell "lszuvmchnilszuvmchni"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 19990301 Rohist Kumar Verma  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "19990301"
      - cell "Rohist Kumar"
      - cell "Verma"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 19990402 Rohit Kumar Verma  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "19990402"
      - cell "Rohit Kumar"
      - cell "Verma"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 19990400 Rohit Kumar Verma  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "19990400"
      - cell "Rohit Kumar"
      - cell "Verma"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 1964100 Rohit Kumar Verma  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "1964100"
      - cell "Rohit Kumar"
      - cell "Verma"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0315b Rosanna Ryan Pagac  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0315b"
      - cell "Rosanna Ryan"
      - cell "Pagac"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 00434 rsk rj kkr  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "00434"
      - cell "rsk rj"
      - cell "kkr"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0726 rtere reter  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0726"
      - cell "rtere"
      - cell "reter"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0034 Russel Hamilton Software Engineer Full-Time Permanent  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0034"
      - cell "Russel"
      - cell "Hamilton"
      - cell "Software Engineer"
      - cell "Full-Time Permanent"
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0415 Sabryna Cruickshank  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0415"
      - cell "Sabryna"
      - cell "Cruickshank"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0300 Sagar hag hgfkag  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0300"
      - cell "Sagar hag"
      - cell "hgfkag"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0087 Sania Shaheen Customer Success Manager Full-Time Permanent Technical Support  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0087"
      - cell "Sania"
      - cell "Shaheen"
      - cell "Customer Success Manager"
      - cell "Full-Time Permanent"
      - cell "Technical Support"
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0103 Sara Tencrady Payroll Administrator Full-Time Permanent Human Resources Ankit Pal  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0103"
      - cell "Sara"
      - cell "Tencrady"
      - cell "Payroll Administrator"
      - cell "Full-Time Permanent"
      - cell "Human Resources"
      - cell "Ankit Pal"
      - cell " ":
        - button ""
        - button ""
    - row " 0289 savi g n  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0289"
      - cell "savi g"
      - cell "n"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0271 savi N n  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0271"
      - cell "savi N"
      - cell "n"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0270 savi g n  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0270"
      - cell "savi g"
      - cell "n"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0266 savi N g  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0266"
      - cell "savi N"
      - cell "g"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0303029900 savina dulvin dulvin  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0303029900"
      - cell "savina dulvin"
      - cell "dulvin"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0293029900 savina dulvin dulvin  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0293029900"
      - cell "savina dulvin"
      - cell "dulvin"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0291029900 savina dulvin dulvin  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0291029900"
      - cell "savina dulvin"
      - cell "dulvin"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0628 Sel102961 Auto  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0628"
      - cell "Sel102961"
      - cell "Auto"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 03671 Sharath V Thampi  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "03671"
      - cell "Sharath V"
      - cell "Thampi"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 03660447 Shivaduth S Thampi  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "03660447"
      - cell "Shivaduth S"
      - cell "Thampi"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 1234554 SIVA kRISHNA SK  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "1234554"
      - cell "SIVA kRISHNA"
      - cell "SK"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0303 siva kumar selvi  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0303"
      - cell "siva kumar"
      - cell "selvi"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0319 sree hema latha  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0319"
      - cell "sree hema"
      - cell "latha"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0442 Surendra R Vishwakarma  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0442"
      - cell "Surendra R"
      - cell "Vishwakarma"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0370 Suvetha Test  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0370"
      - cell "Suvetha"
      - cell "Test"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0403 Suvetha Test  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0403"
      - cell "Suvetha"
      - cell "Test"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0313 sww test  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0313"
      - cell "sww"
      - cell "test"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0310 sww test  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0310"
      - cell "sww"
      - cell "test"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 12345 Taf Automation  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "12345"
      - cell "Taf"
      - cell "Automation"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0469 Taf Automation  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0469"
      - cell "Taf"
      - cell "Automation"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0626 Taf Automation  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0626"
      - cell "Taf"
      - cell "Automation"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 0384 Tatyana Schmeler  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "0384"
      - cell "Tatyana"
      - cell "Schmeler"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 1212 Teresa Web Test  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "1212"
      - cell "Teresa Web"
      - cell "Test"
      - cell
      - cell
      - cell
      - cell
      - cell " ":
        - button ""
        - button ""
    - row " 7554 Test YW Cefolac  ":
      - cell "":
        - checkbox ""
        - text: 
      - cell "7554"
      - cell "Test YW"
      - cell "Cefolac"
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