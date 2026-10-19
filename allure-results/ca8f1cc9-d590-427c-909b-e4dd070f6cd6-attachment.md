# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: adminTest.spec.js >> TC006 - Reset search
- Location: tests\adminTest.spec.js:51:1

# Error details

```
TypeError: dashboardPage.navigateToAdmin is not a function
```

# Test source

```ts
  1  | const { test, expect } = require('../fixtures/baseFixture.js');
  2  | const JsonReader = require('../utils/jsonReader.js');
  3  | require('../hooks/hooks.js');
  4  | 
  5  | test('TC001 - Verify System Users page', async ({dashboardPage, adminPage }) => {
  6  |    
  7  |     await dashboardPage.navigateToAdmin();
  8  |     await adminPage.verifySystemUsersPage();
  9  |     await adminPage.verifyUsernameField();
  10 |     await adminPage.verifySearchButton();
  11 |     await adminPage.verifyResetButton();
  12 |     await adminPage.verifyAddButton();
  13 |     await adminPage.verifyUserTable();
  14 | 
  15 | });
  16 | 
  17 | test('TC002 - Search by username', async ({ authenticatedPage, dashboardPage, adminPage }) => {
  18 | 
  19 |     await dashboardPage.navigateToAdmin();
  20 |     await adminPage.searchByUsername('Admin');
  21 |     await adminPage.verifyUsername('Admin');
  22 | 
  23 | });
  24 | 
  25 | test('TC003 - Search by user role', async ({ authenticatedPage, dashboardPage, adminPage }) => {
  26 | 
  27 |     await dashboardPage.navigateToAdmin();
  28 |     await adminPage.selectUserRole('Admin');
  29 |     await adminPage.clickSearch();
  30 |     await adminPage.verifyUsername('Admin');
  31 | 
  32 | });
  33 | 
  34 | test('TC004 - Search by status', async ({ authenticatedPage, dashboardPage, adminPage }) => {
  35 |    
  36 |     await dashboardPage.navigateToAdmin();
  37 |     await adminPage.selectStatus('Enabled');
  38 |     await adminPage.clickSearch();
  39 |     await expect(adminPage.tableUsers.getByRole('cell', {name: 'Enabled',exact: true}).first()).toBeVisible();
  40 | 
  41 | });
  42 | 
  43 | test('TC005 - Search nonexistent username', async ({ authenticatedPage, dashboardPage, adminPage }) => {
  44 |   
  45 |     await dashboardPage.navigateToAdmin();
  46 |     await adminPage.searchByUsername('xyz_not_existing_12345');
  47 |     await adminPage.verifyNoRecords();
  48 | 
  49 | });
  50 | 
  51 | test('TC006 - Reset search', async ({ authenticatedPage, dashboardPage, adminPage }) => {
  52 | 
> 53 |     await dashboardPage.navigateToAdmin();
     |                         ^ TypeError: dashboardPage.navigateToAdmin is not a function
  54 |     await adminPage.searchByUsername('Admin');
  55 |     await adminPage.clickReset();
  56 |     await adminPage.verifyUsernameFieldIsEmpty();
  57 | 
  58 | });
  59 | 
  60 | test('TC007 - Click Add button', async ({ authenticatedPage, dashboardPage, adminPage }) => {
  61 | 
  62 |     await dashboardPage.navigateToAdmin();
  63 |     await adminPage.clickAdd();
  64 |     await adminPage.verifyAddUserPage();
  65 | 
  66 | });
```