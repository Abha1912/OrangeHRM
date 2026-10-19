const { test, expect } = require('../fixtures/baseFixture.js');
const JsonReader = require('../utils/jsonReader.js');
require('../hooks/hooks.js');

test('TC001 - Verify System Users page', async ({dashboardPage, adminPage }) => {
   
    await dashboardPage.navigateToAdminpage();
    await adminPage.verifySystemUsersPage();
    await adminPage.verifyUsernameField();
    await adminPage.verifySearchButton();
    await adminPage.verifyResetButton();
    await adminPage.verifyAddButton();
    await adminPage.verifyUserTable();

});

test('TC002 - Search by username', async ({ authenticatedPage, dashboardPage, adminPage }) => {

    await dashboardPage.navigateToAdminpage();
    await adminPage.searchByUsername('Admin');
    await adminPage.verifyUsername('Admin');

});

test('TC003 - Search by user role', async ({ authenticatedPage, dashboardPage, adminPage }) => {

    await dashboardPage.navigateToAdminpage();
    await adminPage.selectUserRole('Admin');
    await adminPage.clickSearch();
    await adminPage.verifyUsername('Admin');

});

test('TC004 - Search by status', async ({ authenticatedPage, dashboardPage, adminPage }) => {
   
    await dashboardPage.navigateToAdminpage();
    await adminPage.selectStatus('Enabled');
    await adminPage.clickSearch();
    await expect(adminPage.tableUsers.getByRole('cell', {name: 'Enabled',exact: true}).first()).toBeVisible();

});

test('TC005 - Search nonexistent username', async ({ authenticatedPage, dashboardPage, adminPage }) => {
  
    await dashboardPage.navigateToAdminpage();
    await adminPage.searchByUsername('xyz_not_existing_12345');
    await adminPage.verifyNoRecords();

});

test('TC006 - Reset search', async ({ authenticatedPage, dashboardPage, adminPage }) => {

    await dashboardPage.navigateToAdminpage();
    await adminPage.searchByUsername('Admin');
    await adminPage.clickReset();
    await adminPage.verifyUsernameFieldIsEmpty();

});

test('TC007 - Click Add button', async ({ authenticatedPage, dashboardPage, adminPage }) => {

    await dashboardPage.navigateToAdminpage();
    await adminPage.clickAdd();
    await adminPage.verifyAddUserPage();

});