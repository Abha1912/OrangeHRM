
const {test:base,expect} =  require ('@playwright/test');

const LoginPage = require('../pages/loginPage');
const DashboardPage = require ('../pages/dashboardPage')
const AdminPage = require('../pages/adminPage')
const JsonReader = require('../utils/jsonReader.js');

const test = base.extend({
    
    loginPage: async ({page},use)=>{

        await use(new LoginPage(page));

        // const loginPage = new LoginPage(page);
        // await use(loginPage);
    },

    dashboardPage : async ({page},use) => {
        //    const dashboardPage  = new DashboardPage(page);
        //    await use(dashboardPage);
        await use(new DashboardPage(page));

    },

    adminPage : async ({page},use) => {
        //    const adminPage  = new AdminPage(page);
        //    await use(adminPage);
        await use(new AdminPage(page));

    },

    authenticatedPage: async ({ page, loginPage }, use) => {
        const loginData = JsonReader.login();
        await loginPage.login(loginData.validUser.username,loginData.validUser.password);
        await expect(page).toHaveURL(/\/dashboard\/index/);
        await use(page);
    }
});

module.exports = { test,expect};
