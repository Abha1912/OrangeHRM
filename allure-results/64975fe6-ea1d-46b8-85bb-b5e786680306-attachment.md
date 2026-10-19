# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: adminTest.spec.js >> TC005 - Search nonexistent username
- Location: tests\adminTest.spec.js:43:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('table').getByText('No Records Found', { exact: true })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('table').getByText('No Records Found', { exact: true }) with timeout 5000ms
  - waiting for getByRole('table').getByText('No Records Found', { exact: true })

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
      - paragraph: ramu Mon
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
- textbox: xyz_not_existing_12345
- text: User Role -- Select --  Employee Name
- textbox "Type for hints..."
- text: Status -- Select -- 
- separator
- button "Reset"
- button "Search"
- button " Add"
- separator
- text: No Records Found
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
  - rowgroup
- paragraph: OrangeHRM OS 5.9
- paragraph:
  - text: © 2005 - 2026
  - link "OrangeHRM, Inc":
    - /url: http://www.orangehrm.com
  - text: . All rights reserved.
```

# Test source

```ts
  1   | const { expect } = require('@playwright/test');
  2   | const CommonMethods = require('../utils/commonMethod.js');
  3   | 
  4   | class AdminPage {
  5   | 
  6   |     constructor(page) {
  7   | 
  8   |         this.page = page;
  9   | 
  10  |         this.txtSystemUsers = page.getByRole('heading', {name: 'System Users'});
  11  |         this.inputUsername = page.locator('.oxd-form').first().getByRole('textbox').nth(0);
  12  |         this.dropdownUserRole = page.locator('.oxd-select-text').nth(0);
  13  |         this.dropdownStatus = page.locator('.oxd-select-text').nth(1);
  14  |         this.inputEmployeeName = page.getByPlaceholder('Type for hints...');
  15  |         this.btnSearch = page.getByRole('button', { name: 'Search' });
  16  |         this.btnReset = page.getByRole('button', { name: 'Reset' });
  17  |         this.btnAdd = page.getByRole('button', { name: 'Add' });
  18  |         this.tableUsers = page.getByRole('table');
  19  |         this.txtNoRecords = page.getByRole('table').getByText('No Records Found', { exact: true });
  20  | 
  21  |         
  22  |     }
  23  | 
  24  |     // Verify System Users page
  25  |     async verifySystemUsersPage() {
  26  |         await expect(this.page).toHaveURL(/\/admin\/viewSystemUsers/);
  27  |         await expect(this.txtSystemUsers).toBeVisible();
  28  |     }
  29  | 
  30  |     // Search by username
  31  |     async searchByUsername(username) {
  32  |         await CommonMethods.inputTextbox(this.inputUsername, username);
  33  |         await CommonMethods.click(this.btnSearch);
  34  |     }
  35  | 
  36  |     // Enter employee name
  37  |     async searchByEmployeeName(employeeName) {
  38  |         await CommonMethods.inputTextbox(this.inputEmployeeName, employeeName);
  39  |     }
  40  | 
  41  |     // Select user role
  42  |     async selectUserRole(role) {
  43  |         await CommonMethods.click(this.dropdownUserRole);
  44  |         const roleOption = this.page.getByRole('option', { name: role});
  45  |         await CommonMethods.click(roleOption);
  46  |     }
  47  | 
  48  |     // Select status
  49  |     async selectStatus(status) {
  50  |         await CommonMethods.click(this.dropdownStatus);
  51  |         const statusOption = this.page.getByRole('option', {name: status});
  52  |         await CommonMethods.click(statusOption);
  53  |     }
  54  | 
  55  |     // Click Search
  56  |     async clickSearch() {
  57  |         await CommonMethods.click(this.btnSearch);
  58  |     }
  59  | 
  60  |     // Click Reset
  61  |     async clickReset() {
  62  |         await CommonMethods.click(this.btnReset);
  63  |     }
  64  | 
  65  |     // Click Add
  66  |     async clickAdd() {
  67  |         await CommonMethods.click(this.btnAdd);
  68  |     }
  69  | 
  70  |     // Verify username in results
  71  |     async verifyUsername(username) {
  72  |         await expect(
  73  |             this.tableUsers.getByRole('cell', {name: username}).first()).toBeVisible();
  74  |     }
  75  | 
  76  |     // Verify no records found
  77  |     async verifyNoRecords() {
> 78  |         await expect(this.txtNoRecords).toBeVisible();
      |                                         ^ Error: expect(locator).toBeVisible() failed
  79  |     }
  80  | 
  81  |     // Verify username field
  82  |     async verifyUsernameField() {
  83  |         await expect(this.inputUsername).toBeVisible();
  84  |     }
  85  | 
  86  |     // Verify Search button
  87  |     async verifySearchButton() {
  88  |         await expect(this.btnSearch).toBeVisible();
  89  |     }
  90  | 
  91  |     // Verify Reset button
  92  |     async verifyResetButton() {
  93  |         await expect(this.btnReset).toBeVisible();
  94  |     }
  95  | 
  96  |     // Verify Add button
  97  |     async verifyAddButton() {
  98  |         await expect(this.btnAdd).toBeVisible();
  99  |     }
  100 | 
  101 |     // Verify user table
  102 |     async verifyUserTable() {
  103 |         await expect(this.tableUsers).toBeVisible();
  104 |     }
  105 | 
  106 |     // Verify Add User page
  107 |     async verifyAddUserPage() {
  108 |         await expect(this.page.getByRole('heading', {name: 'Add User'})).toBeVisible();
  109 |     }
  110 | 
  111 |     // Verify username field is empty
  112 |     async verifyUsernameFieldIsEmpty() {
  113 |         await expect(this.inputUsername).toHaveValue('');
  114 |     }
  115 | 
  116 |     // Clear username field
  117 |     async clearUsername() {
  118 |         await CommonMethods.inputTextbox(this.inputUsername, '');
  119 |     }
  120 | 
  121 | }
  122 | 
  123 | module.exports = AdminPage;
  124 | 
```