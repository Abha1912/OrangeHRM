# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: adminTest.spec.js >> TC007 - Click Add button
- Location: tests\adminTest.spec.js:69:1

# Error details

```
TypeError: expect is not a function
```

# Test source

```ts
  1  | const { test, expect } = require('../fixtures/baseFixture.js');
  2  | const JsonReader = require('../utils/jsonReader.js');
  3  | require('../hooks/hooks.js');
  4  | 
  5  | test('TC001 - Verify System Users page', async ({ loginPage, dashboardPage, adminPage }) => {
  6  |     const loginData = JsonReader.login();
  7  | 
  8  |     await loginPage.validateLoginHeading();
  9  |     await loginPage.login(loginData.validUser.username,loginData.validUser.password);
  10 |     await dashboardPage.navigateDashboardPage();
  11 |     await dashboardPage.navigateToAdmin();
  12 |     await adminPage.verifySystemUsersPage();
  13 | });
  14 | 
  15 | test('TC002 - Search by username', async ({ loginPage, dashboardPage, adminPage }) => {
  16 |     const loginData = JsonReader.login();
  17 | 
  18 |     await loginPage.login(loginData.validUser.username, loginData.validUser.password);
  19 |     await dashboardPage.navigateDashboardPage();
  20 |     await dashboardPage.navigateToAdmin();
  21 |     await adminPage.searchByUsername('Admin');
  22 |     await adminPage.verifyUsername('Admin');
  23 | });
  24 | 
  25 | test('TC003 - Search by user role', async ({ loginPage, dashboardPage, adminPage }) => {
  26 |     const loginData = JsonReader.login();
  27 | 
  28 |     await loginPage.login(loginData.validUser.username, loginData.validUser.password);
  29 |     await dashboardPage.navigateDashboardPage();
  30 |     await dashboardPage.navigateToAdmin();
  31 |     await adminPage.selectUserRole('Admin');
  32 |     await adminPage.clickSearch();
  33 |     await adminPage.verifyUsername('Admin');
  34 | });
  35 | 
  36 | test('TC004 - Search by status', async ({ loginPage, dashboardPage, adminPage }) => {
  37 |     const loginData = JsonReader.login();
  38 | 
  39 |     await loginPage.login(loginData.validUser.username, loginData.validUser.password);
  40 |     await dashboardPage.navigateDashboardPage();
  41 |     await dashboardPage.navigateToAdmin();
  42 |     await adminPage.selectStatus('Enabled');
  43 |     await adminPage.clickSearch();
  44 | 
  45 |     await expect(adminPage.tableUsers.getByRole('cell', {name: 'Enabled',exact: true}).first()).toBeVisible();
  46 | });
  47 | 
  48 | test('TC005 - Search nonexistent username', async ({ loginPage, dashboardPage, adminPage }) => {
  49 |     const loginData = JsonReader.login();
  50 | 
  51 |     await loginPage.login(loginData.validUser.username, loginData.validUser.password);
  52 |     await dashboardPage.navigateDashboardPage();
  53 |     await dashboardPage.navigateToAdmin();
  54 |     await adminPage.searchByUsername('xyz_not_existing_12345');
  55 |     await adminPage.verifyNoRecords();
  56 | });
  57 | 
  58 | test('TC006 - Reset search', async ({ loginPage, dashboardPage, adminPage }) => {
  59 |     const loginData = JsonReader.login();
  60 | 
  61 |     await loginPage.login(loginData.validUser.username, loginData.validUser.password);
  62 |     await dashboardPage.navigateDashboardPage();
  63 |     await dashboardPage.navigateToAdmin();
  64 |     await adminPage.searchByUsername('Admin');
  65 |     await adminPage.clickReset();
  66 |     await expect(adminPage.inputUsername).toHaveValue('');
  67 | });
  68 | 
  69 | test('TC007 - Click Add button', async ({ loginPage, dashboardPage, adminPage }) => {
  70 |     const loginData = JsonReader.login();
  71 | 
  72 |     await loginPage.login(loginData.validUser.username, loginData.validUser.password);
  73 |     await dashboardPage.navigateDashboardPage();
  74 |     await dashboardPage.navigateToAdmin();
  75 |     await adminPage.clickAdd();
> 76 |     await expect(adminPage.page.getByRole('heading', { name: 'Add User' })).toBeVisible();
     |           ^ TypeError: expect is not a function
  77 | });
```