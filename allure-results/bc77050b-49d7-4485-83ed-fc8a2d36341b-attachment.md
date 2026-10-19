# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> TC006 Validate that password is masked
- Location: tests\loginTest.spec.js:106:1

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
      - paragraph: manda user
      - text: 
  - navigation "Topbar Menu":
    - list:
      - button ""
- text: 
- paragraph: Time at Work
- separator
- img "profile picture"
- paragraph: Punched Out
- paragraph: "Punched Out: Mar 29th at 01:19 PM (GMT 7)"
- text: 0h 0m Today
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
- paragraph: manda akhil user
- paragraph: 2020-08-10 09:08 AM
- separator
- paragraph: "Hi All; Linda has been blessed with a baby boy! Linda: With love, we welcome your dear new baby to this world. Congratulations!"
- img "profile picture"
- paragraph: Sania Shaheen
- paragraph: 2020-08-10 09:08 AM
- separator
- paragraph: "World Championship: What makes the perfect snooker player? Mark Selby: Robertson has one of the best techniques in the game. It is very, very straight and he fully commits to every single shot he plays. John Higgins: Every shot is repetitive. He always keeps the same technique and cues through the ball bang straight. Barry Hawkins: Robertson is textbook with his grip and has a ramrod solid cue action, delivering it in a straight line. Honourable mentions: Shaun Murphy, Ding Junhui, Jack Lisowski."
- img "profile picture"
- paragraph: Rebecca Harmony
- paragraph: 2020-08-10 09:04 AM
- separator
- paragraph: Throwback Thursdays!!
- img
- img "profile picture"
- paragraph: Russel Hamilton
- paragraph: 2020-08-10 09:03 AM
- separator
- paragraph: Live SIMPLY Dream BIG Be GREATFULL Give LOVE Laugh LOT.......
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
  11 |           // Login heading/text
  12 |           this.txtLoginHeading = page.locator(".orangehrm-login-title");
  13 |           this.requiredMessage = page.locator(".oxd-input-field-error-message");
  14 |           this.errorMessage = page.locator(".oxd-alert-content-text");
  15 | 
  16 |           //inputFields
  17 |           this.inputUsername = page.getByPlaceholder("Username");
  18 |           this.inputPassword = page.getByPlaceholder("Password");
  19 | 
  20 |           // Navigation links/buttons
  21 |           this.btnLogin = page.getByRole('button',{name:'Login'})
  22 |     }
  23 | 
  24 |     // Verifies that the Login Page heading is visible.
  25 |     async validateLoginHeading()
  26 |     {
  27 |         await expect(this.txtLoginHeading).toBeVisible();
  28 |     }
  29 | 
  30 |     // Logs in using the provided email address and password.
  31 |     async login(username,password)
  32 |     {
  33 |         await CommonMethods.inputTextbox(this.inputUsername,username);
  34 |         await CommonMethods.inputTextbox(this.inputPassword,password);
  35 |         await CommonMethods.click(this.btnLogin);
  36 |     }
  37 | 
  38 |     async validationMessage()
  39 |     {
  40 |         await expect(this.errorMessage).toHaveText('Invalid credentials');
  41 |     }
  42 | 
  43 |     async validateRequiredMessage()
  44 |     {
  45 |         await expect(this.requiredMessage).toHaveCount(2);
  46 |         await expect(this.requiredMessage.nth(0)).toHaveText('Required');
  47 |         await expect(this.requiredMessage.nth(1)).toHaveText('Required');   
  48 |      }
  49 | 
  50 |      async passwordMasked()
  51 |      {
> 52 |         await expect(this.inputPassword).toHaveAttribute('type','password');
     |                                          ^ Error: expect(locator).toHaveAttribute(expected) failed
  53 |      }
  54 | }
  55 | 
  56 | module.exports = LoginPage;
```