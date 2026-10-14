# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: adminTest.spec.js >> TC005 - Search nonexistent username
- Location: tests\adminTest.spec.js:74:1

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
  7   |         this.page = page;
  8   | 
  9   |         this.txtSystemUsers = page.getByRole('heading', {name: 'System Users'});
  10  | 
  11  |         this.inputUsername = page.locator('.oxd-form').first().getByRole('textbox').nth(0);
  12  |         this.dropdownUserRole = page.locator('.oxd-select-text').nth(0);
  13  |         this.dropdownStatus = page.locator('.oxd-select-text').nth(1);
  14  |         this.inputEmployeeName = page.getByPlaceholder('Type for hints...');
  15  |         this.btnSearch = page.getByRole('button', { name: 'Search' });
  16  |         this.btnReset = page.getByRole('button', { name: 'Reset' });
  17  |         this.btnAdd = page.getByRole('button', { name: 'Add' });
  18  |         this.tableUsers = page.getByRole('table');
  19  |         this.txtNoRecords = page.getByText('No Records Found');
  20  |     }
  21  | 
  22  |         // Verify System Users page
  23  |     async verifySystemUsersPage() {
  24  |         await expect(this.page).toHaveURL(/\/admin\/viewSystemUsers/);
  25  |         await expect(this.txtSystemUsers).toBeVisible();
  26  |     }
  27  | 
  28  |     // Search by username
  29  |     async searchByUsername(username) {
  30  |         await CommonMethods.inputTextbox(this.inputUsername, username);
  31  |         await CommonMethods.click(this.btnSearch);
  32  |     }
  33  | 
  34  |     // Enter employee name
  35  |     async searchByEmployeeName(employeeName) {
  36  |         await CommonMethods.inputTextbox(this.inputEmployeeName, employeeName);
  37  |     }
  38  | 
  39  |     // Select user role
  40  |     async selectUserRole(role) {
  41  |         await CommonMethods.click(this.dropdownUserRole);
  42  | 
  43  |         const roleOption = this.page.getByRole('option', {
  44  |             name: role,
  45  |             exact: true
  46  |         });
  47  | 
  48  |         await CommonMethods.click(roleOption);
  49  |     }
  50  | 
  51  |     // Select status
  52  |     async selectStatus(status) {
  53  |         await CommonMethods.click(this.dropdownStatus);
  54  | 
  55  |         const statusOption = this.page.getByRole('option', {
  56  |             name: status,
  57  |             exact: true
  58  |         });
  59  | 
  60  |         await CommonMethods.click(statusOption);
  61  |     }
  62  | 
  63  |     // Click Search
  64  |     async clickSearch() {
  65  |         await CommonMethods.click(this.btnSearch);
  66  |     }
  67  | 
  68  |     // Click Reset
  69  |     async clickReset() {
  70  |         await CommonMethods.click(this.btnReset);
  71  |     }
  72  | 
  73  |     // Click Add
  74  |     async clickAdd() {
  75  |         await CommonMethods.click(this.btnAdd);
  76  |     }
  77  | 
  78  |     // Verify username in results
  79  |     async verifyUsername(username) {
  80  |         await expect(
  81  |             this.tableUsers.getByRole('cell', {
  82  |                 name: username,
  83  |                 exact: true
  84  |             }).first()
  85  |         ).toBeVisible();
  86  |     }
  87  | 
  88  |     // Verify no records found
  89  |     async verifyNoRecords() {
> 90  |         await expect(this.txtNoRecords).toBeVisible();
      |                                         ^ Error: expect(locator).toBeVisible() failed
  91  |     }
  92  | 
  93  |     // Verify username field
  94  |     async verifyUsernameField() {
  95  |         await expect(this.inputUsername).toBeVisible();
  96  |     }
  97  | 
  98  |     // Verify Search button
  99  |     async verifySearchButton() {
  100 |         await expect(this.btnSearch).toBeVisible();
  101 |     }
  102 | 
  103 |     // Verify Reset button
  104 |     async verifyResetButton() {
  105 |         await expect(this.btnReset).toBeVisible();
  106 |     }
  107 | 
  108 |     // Verify Add button
  109 |     async verifyAddButton() {
  110 |         await expect(this.btnAdd).toBeVisible();
  111 |     }
  112 | 
  113 |     // Verify user table
  114 |     async verifyUserTable() {
  115 |         await expect(this.tableUsers).toBeVisible();
  116 |     }
  117 | 
  118 |     // Verify Add User page
  119 |     async verifyAddUserPage() {
  120 |         await expect(
  121 |             this.page.getByRole('heading', {
  122 |                 name: 'Add User',
  123 |                 exact: true
  124 |             })
  125 |         ).toBeVisible();
  126 |     }
  127 | 
  128 |     // Verify username field is empty
  129 |     async verifyUsernameFieldIsEmpty() {
  130 |         await expect(this.inputUsername).toHaveValue('');
  131 |     }
  132 | 
  133 |     // Clear username field
  134 |     async clearUsername() {
  135 |         await CommonMethods.inputTextbox(this.inputUsername, '');
  136 |     }
  137 | 
  138 | }
  139 | 
  140 | module.exports = AdminPage;
  141 | 
```