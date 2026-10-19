# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: adminTest.spec.js >> TC007 - Click Add button
- Location: tests\adminTest.spec.js:60:1

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('heading', { name: 'Add User' })
Expected: visible
Error: element(s) not found

Call log:
  - Expect "toBeVisible" getByRole('heading', { name: 'Add User' }) with timeout 5000ms
  - waiting for getByRole('heading', { name: 'Add User' })
  - Test timeout of 30000ms exceeded.

```

# Test source

```ts
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
  22  |     // Verify System Users page
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
  42  |         const roleOption = this.page.getByRole('option', { name: role});
  43  |         await CommonMethods.click(roleOption);
  44  |     }
  45  | 
  46  |     // Select status
  47  |     async selectStatus(status) {
  48  |         await CommonMethods.click(this.dropdownStatus);
  49  |         const statusOption = this.page.getByRole('option', {name: status});
  50  |         await CommonMethods.click(statusOption);
  51  |     }
  52  | 
  53  |     // Click Search
  54  |     async clickSearch() {
  55  |         await CommonMethods.click(this.btnSearch);
  56  |     }
  57  | 
  58  |     // Click Reset
  59  |     async clickReset() {
  60  |         await CommonMethods.click(this.btnReset);
  61  |     }
  62  | 
  63  |     // Click Add
  64  |     async clickAdd() {
  65  |         await CommonMethods.click(this.btnAdd);
  66  |     }
  67  | 
  68  |     // Verify username in results
  69  |     async verifyUsername(username) {
  70  |         await expect(
  71  |             this.tableUsers.getByRole('cell', {name: username}).first()).toBeVisible();
  72  |     }
  73  | 
  74  |     // Verify no records found
  75  |     async verifyNoRecords() {
  76  |         await expect(this.txtNoRecords).toBeVisible();
  77  |     }
  78  | 
  79  |     // Verify username field
  80  |     async verifyUsernameField() {
  81  |         await expect(this.inputUsername).toBeVisible();
  82  |     }
  83  | 
  84  |     // Verify Search button
  85  |     async verifySearchButton() {
  86  |         await expect(this.btnSearch).toBeVisible();
  87  |     }
  88  | 
  89  |     // Verify Reset button
  90  |     async verifyResetButton() {
  91  |         await expect(this.btnReset).toBeVisible();
  92  |     }
  93  | 
  94  |     // Verify Add button
  95  |     async verifyAddButton() {
  96  |         await expect(this.btnAdd).toBeVisible();
  97  |     }
  98  | 
  99  |     // Verify user table
  100 |     async verifyUserTable() {
  101 |         await expect(this.tableUsers).toBeVisible();
  102 |     }
  103 | 
  104 |     // Verify Add User page
  105 |     async verifyAddUserPage() {
> 106 |         await expect(this.page.getByRole('heading', {name: 'Add User'})).toBeVisible();
      |                                                                          ^ Error: expect(locator).toBeVisible() failed
  107 |     }
  108 | 
  109 |     // Verify username field is empty
  110 |     async verifyUsernameFieldIsEmpty() {
  111 |         await expect(this.inputUsername).toHaveValue('');
  112 |     }
  113 | 
  114 |     // Clear username field
  115 |     async clearUsername() {
  116 |         await CommonMethods.inputTextbox(this.inputUsername, '');
  117 |     }
  118 | 
  119 | }
  120 | 
  121 | module.exports = AdminPage;
  122 | 
```