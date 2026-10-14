// Import the "test" object from Playwright.
// Rename "test" to "base" so we can extend it with our own fixtures.
const {test:base} =  require ('@playwright/test');

// Import the Page class from the pages folder.This class contains locators and methods related to that class
const LoginPage = require('../pages/loginPage');
const DashboardPage = require ('../pages/dashboardPage')
const AdminPage = require('../pages/adminPage')

// Create a new custom "test" object by extending Playwright's base test.
// We are adding our own fixtures: loginPage and homePage.
const test = base.extend({
    
    // Create a custom fixture called "loginPage".
    // page = Playwright's built-in page fixture.
    // use = function used to provide the created LoginPage object to the test case.

    loginPage: async ({page},use)=>{
          
        // Create an object of the LoginPage class.
        // Pass Playwright's page object to the LoginPage constructor.
        const loginPage = new LoginPage(page);
         
        // Make the loginPage object available to the test.
        await use(loginPage);
    },

    // Create another custom fixture called "dashboardPage".
    dashboardPage : async ({page},use) => {
           const dashboardPage  = new DashboardPage(page);
           await use(dashboardPage);
    },

    // Create another custom fixture called "adminPage".
    adminPage : async ({page},use) => {
           const adminPage  = new AdminPage(page);
           await use(adminPage);
    }

});


// Export our customized "test" object.
// Other test files can import this "test" and use loginPage and homePage as fixtures.
module.exports = { test };
