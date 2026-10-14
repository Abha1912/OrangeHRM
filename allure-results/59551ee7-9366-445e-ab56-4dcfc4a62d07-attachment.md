# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: adminTest.spec.js >> TC004 - Search by status
- Location: tests\adminTest.spec.js:53:1

# Error details

```
TypeError: expect is not a function
```

# Test source

```ts
  1   | const { test, expect } = require('../fixtures/baseFixture.js');
  2   | const JsonReader = require('../utils/jsonReader.js');
  3   | require('../hooks/hooks.js');
  4   | 
  5   | test('TC001 - Verify System Users page', async ({ loginPage, dashboardPage, adminPage }) => {
  6   |     const loginData = JsonReader.login();
  7   | 
  8   |     await loginPage.validateLoginHeading();
  9   |     await loginPage.login(
  10  |         loginData.validUser.username,
  11  |         loginData.validUser.password
  12  |     );
  13  |     await dashboardPage.navigateDashboardPage();
  14  |     await dashboardPage.navigateToAdmin();
  15  | 
  16  |     await adminPage.verifySystemUsersPage();
  17  |     await adminPage.verifyUsernameField();
  18  |     await adminPage.verifySearchButton();
  19  |     await adminPage.verifyResetButton();
  20  |     await adminPage.verifyAddButton();
  21  |     await adminPage.verifyUserTable();
  22  | });
  23  | 
  24  | test('TC002 - Search by username', async ({ loginPage, dashboardPage, adminPage }) => {
  25  |     const loginData = JsonReader.login();
  26  | 
  27  |     await loginPage.login(
  28  |         loginData.validUser.username,
  29  |         loginData.validUser.password
  30  |     );
  31  |     await dashboardPage.navigateDashboardPage();
  32  |     await dashboardPage.navigateToAdmin();
  33  | 
  34  |     await adminPage.searchByUsername('Admin');
  35  |     await adminPage.verifyUsername('Admin');
  36  | });
  37  | 
  38  | test('TC003 - Search by user role', async ({ loginPage, dashboardPage, adminPage }) => {
  39  |     const loginData = JsonReader.login();
  40  | 
  41  |     await loginPage.login(
  42  |         loginData.validUser.username,
  43  |         loginData.validUser.password
  44  |     );
  45  |     await dashboardPage.navigateDashboardPage();
  46  |     await dashboardPage.navigateToAdmin();
  47  | 
  48  |     await adminPage.selectUserRole('Admin');
  49  |     await adminPage.clickSearch();
  50  |     await adminPage.verifyUsername('Admin');
  51  | });
  52  | 
  53  | test('TC004 - Search by status', async ({ loginPage, dashboardPage, adminPage }) => {
  54  |     const loginData = JsonReader.login();
  55  | 
  56  |     await loginPage.login(
  57  |         loginData.validUser.username,
  58  |         loginData.validUser.password
  59  |     );
  60  |     await dashboardPage.navigateDashboardPage();
  61  |     await dashboardPage.navigateToAdmin();
  62  | 
  63  |     await adminPage.selectStatus('Enabled');
  64  |     await adminPage.clickSearch();
  65  | 
> 66  |     await expect(
      |           ^ TypeError: expect is not a function
  67  |         adminPage.tableUsers.getByRole('cell', {
  68  |             name: 'Enabled',
  69  |             exact: true
  70  |         }).first()
  71  |     ).toBeVisible();
  72  | });
  73  | 
  74  | test('TC005 - Search nonexistent username', async ({ loginPage, dashboardPage, adminPage }) => {
  75  |     const loginData = JsonReader.login();
  76  | 
  77  |     await loginPage.login(
  78  |         loginData.validUser.username,
  79  |         loginData.validUser.password
  80  |     );
  81  |     await dashboardPage.navigateDashboardPage();
  82  |     await dashboardPage.navigateToAdmin();
  83  | 
  84  |     await adminPage.searchByUsername('xyz_not_existing_12345');
  85  |     await adminPage.verifyNoRecords();
  86  | });
  87  | 
  88  | test('TC006 - Reset search', async ({ loginPage, dashboardPage, adminPage }) => {
  89  |     const loginData = JsonReader.login();
  90  | 
  91  |     await loginPage.login(
  92  |         loginData.validUser.username,
  93  |         loginData.validUser.password
  94  |     );
  95  |     await dashboardPage.navigateDashboardPage();
  96  |     await dashboardPage.navigateToAdmin();
  97  | 
  98  |     await adminPage.searchByUsername('Admin');
  99  |     await adminPage.clickReset();
  100 |     await adminPage.verifyUsernameFieldIsEmpty();
  101 | });
  102 | 
  103 | test('TC007 - Click Add button', async ({ loginPage, dashboardPage, adminPage }) => {
  104 |     const loginData = JsonReader.login();
  105 | 
  106 |     await loginPage.login(
  107 |         loginData.validUser.username,
  108 |         loginData.validUser.password
  109 |     );
  110 |     await dashboardPage.navigateDashboardPage();
  111 |     await dashboardPage.navigateToAdmin();
  112 | 
  113 |     await adminPage.clickAdd();
  114 |     await adminPage.verifyAddUserPage();
  115 | });
```