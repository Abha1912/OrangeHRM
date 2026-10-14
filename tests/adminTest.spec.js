const { test, expect } = require('../fixtures/baseFixture.js');
const JsonReader = require('../utils/jsonReader.js');
require('../hooks/hooks.js');

test('TC001 - Verify System Users page', async ({ loginPage, dashboardPage, adminPage }) => {
    const loginData = JsonReader.login();

    await loginPage.validateLoginHeading();
    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    await dashboardPage.navigateDashboardPage();
    await dashboardPage.navigateToAdmin();

    await adminPage.verifySystemUsersPage();
    await adminPage.verifyUsernameField();
    await adminPage.verifySearchButton();
    await adminPage.verifyResetButton();
    await adminPage.verifyAddButton();
    await adminPage.verifyUserTable();
});

test('TC002 - Search by username', async ({ loginPage, dashboardPage, adminPage }) => {
    const loginData = JsonReader.login();

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    await dashboardPage.navigateDashboardPage();
    await dashboardPage.navigateToAdmin();

    await adminPage.searchByUsername('Admin');
    await adminPage.verifyUsername('Admin');
});

test('TC003 - Search by user role', async ({ loginPage, dashboardPage, adminPage }) => {
    const loginData = JsonReader.login();

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    await dashboardPage.navigateDashboardPage();
    await dashboardPage.navigateToAdmin();

    await adminPage.selectUserRole('Admin');
    await adminPage.clickSearch();
    await adminPage.verifyUsername('Admin');
});

test('TC004 - Search by status', async ({ loginPage, dashboardPage, adminPage }) => {
    const loginData = JsonReader.login();

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    await dashboardPage.navigateDashboardPage();
    await dashboardPage.navigateToAdmin();

    await adminPage.selectStatus('Enabled');
    await adminPage.clickSearch();

    await expect(
        adminPage.tableUsers.getByRole('cell', {
            name: 'Enabled',
            exact: true
        }).first()
    ).toBeVisible();
});

test('TC005 - Search nonexistent username', async ({ loginPage, dashboardPage, adminPage }) => {
    const loginData = JsonReader.login();

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    await dashboardPage.navigateDashboardPage();
    await dashboardPage.navigateToAdmin();

    await adminPage.searchByUsername('xyz_not_existing_12345');
    await adminPage.verifyNoRecords();
});

test('TC006 - Reset search', async ({ loginPage, dashboardPage, adminPage }) => {
    const loginData = JsonReader.login();

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    await dashboardPage.navigateDashboardPage();
    await dashboardPage.navigateToAdmin();

    await adminPage.searchByUsername('Admin');
    await adminPage.clickReset();
    await adminPage.verifyUsernameFieldIsEmpty();
});

test('TC007 - Click Add button', async ({ loginPage, dashboardPage, adminPage }) => {
    const loginData = JsonReader.login();

    await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    await dashboardPage.navigateDashboardPage();
    await dashboardPage.navigateToAdmin();

    await adminPage.clickAdd();
    await adminPage.verifyAddUserPage();
});