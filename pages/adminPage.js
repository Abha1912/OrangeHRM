const { expect } = require('@playwright/test');
const CommonMethods = require('../utils/commonMethod.js');

class AdminPage {

    constructor(page) {

        this.page = page;

        this.txtSystemUsers = page.getByRole('heading', {name: 'System Users'});
        this.inputUsername = page.locator('.oxd-form').first().getByRole('textbox').nth(0);
        this.dropdownUserRole = page.locator('.oxd-select-text').nth(0);
        this.dropdownStatus = page.locator('.oxd-select-text').nth(1);
        this.inputEmployeeName = page.getByPlaceholder('Type for hints...');
        this.btnSearch = page.getByRole('button', { name: 'Search' });
        this.btnReset = page.getByRole('button', { name: 'Reset' });
        this.btnAdd = page.getByRole('button', { name: 'Add' });
        this.tableUsers = page.getByRole('table');
        this.txtNoRecords = page.getByRole('table').getByText('No Records Found', { exact: true });

        
    }

    // Verify System Users page
    async verifySystemUsersPage() {
        await expect(this.page).toHaveURL(/\/admin\/viewSystemUsers/);
        await expect(this.txtSystemUsers).toBeVisible();
    }

    // Search by username
    async searchByUsername(username) {
        await CommonMethods.inputTextbox(this.inputUsername, username);
        await CommonMethods.click(this.btnSearch);
    }

    // Enter employee name
    async searchByEmployeeName(employeeName) {
        await CommonMethods.inputTextbox(this.inputEmployeeName, employeeName);
    }

    // Select user role
    async selectUserRole(role) {
        await CommonMethods.click(this.dropdownUserRole);
        const roleOption = this.page.getByRole('option', { name: role});
        await CommonMethods.click(roleOption);
    }

    // Select status
    async selectStatus(status) {
        await CommonMethods.click(this.dropdownStatus);
        const statusOption = this.page.getByRole('option', {name: status});
        await CommonMethods.click(statusOption);
    }

    // Click Search
    async clickSearch() {
        await CommonMethods.click(this.btnSearch);
    }

    // Click Reset
    async clickReset() {
        await CommonMethods.click(this.btnReset);
    }

    // Click Add
    async clickAdd() {
        await CommonMethods.click(this.btnAdd);
    }

    // Verify username in results
    async verifyUsername(username) {
        await expect(
            this.tableUsers.getByRole('cell', {name: username}).first()).toBeVisible();
    }

    // Verify no records found
    async verifyNoRecords() {
        await expect(this.txtNoRecords).toBeVisible();
    }

    // Verify username field
    async verifyUsernameField() {
        await expect(this.inputUsername).toBeVisible();
    }

    // Verify Search button
    async verifySearchButton() {
        await expect(this.btnSearch).toBeVisible();
    }

    // Verify Reset button
    async verifyResetButton() {
        await expect(this.btnReset).toBeVisible();
    }

    // Verify Add button
    async verifyAddButton() {
        await expect(this.btnAdd).toBeVisible();
    }

    // Verify user table
    async verifyUserTable() {
        await expect(this.tableUsers).toBeVisible();
    }

    // Verify Add User page
    async verifyAddUserPage() {
        await expect(this.page.getByRole('heading', {name: 'Add User'})).toBeVisible();
    }

    // Verify username field is empty
    async verifyUsernameFieldIsEmpty() {
        await expect(this.inputUsername).toHaveValue('');
    }

    // Clear username field
    async clearUsername() {
        await CommonMethods.inputTextbox(this.inputUsername, '');
    }

}

module.exports = AdminPage;
