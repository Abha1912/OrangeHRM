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

Locator: getByText('No Records Found')
Expected: visible
Error: strict mode violation: getByText('No Records Found') resolved to 2 elements:
    1) <span data-v-7b563373="" data-v-5a621acd="" class="oxd-text oxd-text--span">No Records Found</span> aka locator('span').filter({ hasText: 'No Records Found' })
    2) <p data-v-7b563373="" data-v-35c8fe09="" class="oxd-text oxd-text--p oxd-text--toast-message oxd-toast-content-text">No Records Found</p> aka locator('#oxd-toaster_1').getByText('No Records Found')

Call log:
  - Expect "toBeVisible" getByText('No Records Found') with timeout 5000ms
  - waiting for getByText('No Records Found')

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
  19  |         this.txtNoRecords = page.getByText('No Records Found');
  20  |         
  21  |     }
  22  | 
  23  |     // Verify System Users page
  24  |     async verifySystemUsersPage() {
  25  |         await expect(this.page).toHaveURL(/\/admin\/viewSystemUsers/);
  26  |         await expect(this.txtSystemUsers).toBeVisible();
  27  |     }
  28  | 
  29  |     // Search by username
  30  |     async searchByUsername(username) {
  31  |         await CommonMethods.inputTextbox(this.inputUsername, username);
  32  |         await CommonMethods.click(this.btnSearch);
  33  |     }
  34  | 
  35  |     // Enter employee name
  36  |     async searchByEmployeeName(employeeName) {
  37  |         await CommonMethods.inputTextbox(this.inputEmployeeName, employeeName);
  38  |     }
  39  | 
  40  |     // Select user role
  41  |     async selectUserRole(role) {
  42  |         await CommonMethods.click(this.dropdownUserRole);
  43  |         const roleOption = this.page.getByRole('option', { name: role});
  44  |         await CommonMethods.click(roleOption);
  45  |     }
  46  | 
  47  |     // Select status
  48  |     async selectStatus(status) {
  49  |         await CommonMethods.click(this.dropdownStatus);
  50  |         const statusOption = this.page.getByRole('option', {name: status});
  51  |         await CommonMethods.click(statusOption);
  52  |     }
  53  | 
  54  |     // Click Search
  55  |     async clickSearch() {
  56  |         await CommonMethods.click(this.btnSearch);
  57  |     }
  58  | 
  59  |     // Click Reset
  60  |     async clickReset() {
  61  |         await CommonMethods.click(this.btnReset);
  62  |     }
  63  | 
  64  |     // Click Add
  65  |     async clickAdd() {
  66  |         await CommonMethods.click(this.btnAdd);
  67  |     }
  68  | 
  69  |     // Verify username in results
  70  |     async verifyUsername(username) {
  71  |         await expect(
  72  |             this.tableUsers.getByRole('cell', {name: username}).first()).toBeVisible();
  73  |     }
  74  | 
  75  |     // Verify no records found
  76  |     async verifyNoRecords() {
> 77  |         await expect(this.txtNoRecords).toBeVisible();
      |                                         ^ Error: expect(locator).toBeVisible() failed
  78  |     }
  79  | 
  80  |     // Verify username field
  81  |     async verifyUsernameField() {
  82  |         await expect(this.inputUsername).toBeVisible();
  83  |     }
  84  | 
  85  |     // Verify Search button
  86  |     async verifySearchButton() {
  87  |         await expect(this.btnSearch).toBeVisible();
  88  |     }
  89  | 
  90  |     // Verify Reset button
  91  |     async verifyResetButton() {
  92  |         await expect(this.btnReset).toBeVisible();
  93  |     }
  94  | 
  95  |     // Verify Add button
  96  |     async verifyAddButton() {
  97  |         await expect(this.btnAdd).toBeVisible();
  98  |     }
  99  | 
  100 |     // Verify user table
  101 |     async verifyUserTable() {
  102 |         await expect(this.tableUsers).toBeVisible();
  103 |     }
  104 | 
  105 |     // Verify Add User page
  106 |     async verifyAddUserPage() {
  107 |         await expect(this.page.getByRole('heading', {name: 'Add User'})).toBeVisible();
  108 |     }
  109 | 
  110 |     // Verify username field is empty
  111 |     async verifyUsernameFieldIsEmpty() {
  112 |         await expect(this.inputUsername).toHaveValue('');
  113 |     }
  114 | 
  115 |     // Clear username field
  116 |     async clearUsername() {
  117 |         await CommonMethods.inputTextbox(this.inputUsername, '');
  118 |     }
  119 | 
  120 | }
  121 | 
  122 | module.exports = AdminPage;
  123 | 
```