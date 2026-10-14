# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: adminTest.spec.js >> TC003 - Search by user role
- Location: tests\adminTest.spec.js:25:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('table').getByRole('cell', { name: 'Admin', exact: true })
Expected: visible
Error: strict mode violation: getByRole('table').getByRole('cell', { name: 'Admin', exact: true }) resolved to 36 elements:
    1) <div role="cell" class="oxd-table-cell oxd-padding-cell">…</div> aka getByRole('cell', { name: 'Admin' }).first()
    2) <div role="cell" class="oxd-table-cell oxd-padding-cell">…</div> aka getByRole('cell', { name: 'Admin' }).nth(1)
    3) <div role="cell" class="oxd-table-cell oxd-padding-cell">…</div> aka getByRole('cell', { name: 'Admin' }).nth(3)
    4) <div role="cell" class="oxd-table-cell oxd-padding-cell">…</div> aka getByRole('cell', { name: 'Admin' }).nth(5)
    5) <div role="cell" class="oxd-table-cell oxd-padding-cell">…</div> aka getByRole('cell', { name: 'Admin', exact: true }).nth(4)
    6) <div role="cell" class="oxd-table-cell oxd-padding-cell">…</div> aka getByRole('cell', { name: 'Admin', exact: true }).nth(5)
    7) <div role="cell" class="oxd-table-cell oxd-padding-cell">…</div> aka locator('div:nth-child(9) > .oxd-table-row > div:nth-child(3)')
    8) <div role="cell" class="oxd-table-cell oxd-padding-cell">…</div> aka locator('div:nth-child(10) > .oxd-table-row > div:nth-child(3)')
    9) <div role="cell" class="oxd-table-cell oxd-padding-cell">…</div> aka locator('div:nth-child(11) > .oxd-table-row > div:nth-child(3)')
    10) <div role="cell" class="oxd-table-cell oxd-padding-cell">…</div> aka locator('div:nth-child(12) > .oxd-table-row > div:nth-child(3)')
    ...

Call log:
  - Expect "toBeVisible" getByRole('table').getByRole('cell', { name: 'Admin', exact: true }) with timeout 5000ms
  - waiting for getByRole('table').getByRole('cell', { name: 'Admin', exact: true })

```

# Test source

```ts
  1  | const { expect } = require('@playwright/test');
  2  | const CommonMethods = require('../utils/commonMethod.js');
  3  | 
  4  | class AdminPage {
  5  | 
  6  |     constructor(page) {
  7  |         this.page = page;
  8  | 
  9  |         this.txtSystemUsers = page.getByRole('heading', {name: 'System Users'});
  10 | 
  11 |         this.inputUsername = page.locator('.oxd-form').first().getByRole('textbox').nth(0);
  12 |         this.dropdownUserRole = page.locator('.oxd-select-text').nth(0);
  13 |         this.dropdownStatus = page.locator('.oxd-select-text').nth(1);
  14 |         this.inputEmployeeName = page.getByPlaceholder('Type for hints...');
  15 |         this.btnSearch = page.getByRole('button', { name: 'Search' });
  16 |         this.btnReset = page.getByRole('button', { name: 'Reset' });
  17 |         this.btnAdd = page.getByRole('button', { name: 'Add' });
  18 |         this.tableUsers = page.getByRole('table');
  19 |         this.txtNoRecords = page.getByText('No Records Found');
  20 |     }
  21 | 
  22 |     async verifySystemUsersPage() {
  23 |         await expect(this.page).toHaveURL(/\/admin\/viewSystemUsers/);
  24 |         await expect(this.txtSystemUsers).toBeVisible();
  25 |     }
  26 | 
  27 |     async searchByUsername(username) {
  28 |         await CommonMethods.inputTextbox(this.inputUsername, username);
  29 |         await this.btnSearch.click();
  30 |     }
  31 | 
  32 |     async searchByEmployeeName(employeeName) {
  33 |         await this.inputEmployeeName.fill(employeeName);
  34 |     }
  35 | 
  36 |     async selectUserRole(role) {
  37 |         await this.dropdownUserRole.click();
  38 |         await this.page.getByRole('option', { name: role, exact: true }).click();
  39 |     }
  40 | 
  41 |     async selectStatus(status) {
  42 |         await this.dropdownStatus.click();
  43 |         await this.page.getByRole('option', { name: status, exact: true }).click();
  44 |     }
  45 | 
  46 |     async clickSearch() {
  47 |         await this.btnSearch.click();
  48 |     }
  49 | 
  50 |     async clickReset() {
  51 |         await this.btnReset.click();
  52 |     }
  53 | 
  54 |     async clickAdd() {
  55 |         await this.btnAdd.click();
  56 |     }
  57 | 
  58 |     async verifyUsername(username) {
  59 |         await expect(
  60 |             this.tableUsers.getByRole('cell', {
  61 |                 name: username,
  62 |                 exact: true
  63 |             })
> 64 |         ).toBeVisible();
     |           ^ Error: expect(locator).toBeVisible() failed
  65 |     }
  66 | 
  67 |     async verifyNoRecords() {
  68 |         await expect(this.txtNoRecords).toBeVisible();
  69 |     }
  70 | }
  71 | 
  72 | module.exports = AdminPage;
  73 | 
```