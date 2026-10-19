# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> TC006 Validate that password is masked
- Location: tests\loginTest.spec.js:56:1

# Error details

```
Error: expect(locator).toHaveAttribute(expected) failed

Locator: getByPlaceholder('Password')
Expected: "password"
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toHaveAttribute" getByPlaceholder('Password') with timeout 5000ms
  - waiting for getByPlaceholder('Password')

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
  - heading "Dashboard" [level=6]
  - link "Upgrade":
    - /url: https://orangehrm.com/open-source/upgrade-to-advanced
    - button "Upgrade"
  - list:
    - listitem:
      - img "profile picture"
      - paragraph: Alex Morgan
      - text: 
  - navigation "Topbar Menu":
    - list:
      - button ""
- text: 
- paragraph: Time at Work
- separator
- img "profile picture"
- paragraph: Punched In
- paragraph: "Punched In: Today at 03:31 PM (GMT 5.5)"
- text: 1h 40m Today
- button ""
- separator
- paragraph: This Week
- paragraph: Oct 19 - Oct 25
- text: 
- paragraph: 0h 0m
- text: 
- paragraph: My Actions
- separator
- button
- paragraph: (1) Pending Self Review
- button
- paragraph: (1) Candidate to Interview
- text: 
- paragraph: Quick Launch
- separator
- button "Assign Leave"
- paragraph: Assign Leave
- button "Leave List"
- paragraph: Leave List
- button "Timesheets"
- paragraph: Timesheets
- button "Apply Leave"
- paragraph: Apply Leave
- button "My Leave"
- paragraph: My Leave
- button "My Timesheet"
- paragraph: My Timesheet
- text: 
- paragraph: Buzz Latest Posts
- separator
- img "profile picture"
- paragraph: Alex Bobbity Morgan
- paragraph: 2026-19-10 04:08 PM
- separator
- paragraph: QA Buzz Message Kkviae
- img "profile picture"
- paragraph: Alex Bobbity Morgan
- paragraph: 2026-19-10 04:07 PM
- separator
- paragraph: Automated post QA Buzz Xvnosa
- img "profile picture"
- paragraph: Alex Bobbity Morgan
- paragraph: 2026-19-10 03:58 PM
- separator
- paragraph: raSDfMB
- img
- img "profile picture"
- paragraph: Alex Bobbity Morgan
- paragraph: 2026-19-10 03:46 PM
- separator
- paragraph: "16550"
- img "profile picture"
- paragraph: Alex Bobbity Morgan
- paragraph: 2026-19-10 03:38 PM
- separator
- paragraph: hrUFgAT
- img
- paragraph: Employees on Leave Today
- text: 
- separator
- img "No Content"
- paragraph: No Employees are on Leave Today
- text: 
- paragraph: Employee Distribution by Sub Unit
- separator
- list:
  - listitem: Engineering
  - listitem: Human Resources
  - listitem: Administration
  - listitem: Client Services
  - listitem: Unassigned
- text: 
- paragraph: Employee Distribution by Location
- separator
- list:
  - listitem: Texas R&D
  - listitem: New York Sales Office
  - listitem: Unassigned
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1  | const {expect} =  require ('@playwright/test');
  2  | 
  3  | const CommonMethods = require('../utils/commonMethod.js');
  4  | 
  5  | class LoginPage{
  6  | 
  7  |     constructor(page)
  8  |     {
  9  |           this.page = page;
  10 | 
  11 |           this.txtLoginHeading = page.locator(".orangehrm-login-title");
  12 |           this.requiredMessage = page.locator(".oxd-input-field-error-message");
  13 |           this.errorMessage = page.locator(".oxd-alert-content-text");
  14 | 
  15 |           this.inputUsername = page.getByPlaceholder("Username");
  16 |           this.inputPassword = page.getByPlaceholder("Password");
  17 | 
  18 |           this.btnLogin = page.getByRole('button',{name:'Login'});
  19 | 
  20 |     }
  21 | 
  22 |     async validateLoginHeading() {
  23 | 
  24 |         await expect(this.txtLoginHeading).toBeVisible();
  25 | 
  26 |     }
  27 | 
  28 |     async login(username,password) {
  29 | 
  30 |         await CommonMethods.inputTextbox(this.inputUsername,username);
  31 |         await CommonMethods.inputTextbox(this.inputPassword,password);
  32 |         await CommonMethods.click(this.btnLogin);
  33 | 
  34 |     }
  35 | 
  36 |     async validationMessage() {
  37 | 
  38 |         await expect(this.errorMessage).toHaveText('Invalid credentials');
  39 | 
  40 |     }
  41 | 
  42 |     async validateRequiredMessage() {
  43 | 
  44 |         await expect(this.requiredMessage).toHaveCount(2);
  45 |         await expect(this.requiredMessage.nth(0)).toHaveText('Required');
  46 |         await expect(this.requiredMessage.nth(1)).toHaveText('Required');  
  47 | 
  48 |      }
  49 | 
  50 |     async passwordMasked() {
> 51 |         await expect(this.inputPassword).toHaveAttribute('type','password');
     |                                          ^ Error: expect(locator).toHaveAttribute(expected) failed
  52 | 
  53 |     }
  54 | }
  55 | 
  56 | module.exports = LoginPage;
```