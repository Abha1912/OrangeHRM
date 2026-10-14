// Import Playwright's test and expect functions from the custom baseFixture file.
const {test} = require('../fixtures/baseFixture.js');

// Import the JsonReader utility.This is used to read login test data from the JSON file.
const JsonReader = require('../utils/jsonReader.js');

// Import the common Playwright hooks.
// These hooks handle actions such as opening the application before each test and taking screenshots when a test fails.
require('../hooks/hooks.js');

// Define the test case.
// "homePage" and "loginPage" are custom fixtures provided by baseFixture.js.
test('TC001 Login User with correct username and password',async({loginPage,dashboardPage})=>{

    // Read login credentials from the JSON test data file.
    // The login() method returns the login test data.
    const loginData = JsonReader.login();

    // Verify that the Login Page heading is visible.
    await loginPage.validateLoginHeading();

    // Login using the valid username and password retrieved from the JSON test data.
        await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    await dashboardPage.navigateDashboardPage();

});

test('TC002 Login User with invalid username and password',async({loginPage})=>{

    // Read login credentials from the JSON test data file.
    // The login() method returns the login test data.
    const loginData = JsonReader.login();

    // Verify that the Login Page heading is visible.
    await loginPage.validateLoginHeading();

    // Login using the valid username and password retrieved from the JSON test data.
        await loginPage.login(
        loginData.invalidUser.username,
        loginData.invalidUser.password
    );

    await loginPage.validationMessage();
});

test('TC003 Login User with empty username and password',async({loginPage})=>{

    // Read login credentials from the JSON test data file.
    // The login() method returns the login test data.
    const loginData = JsonReader.login();

    // Verify that the Login Page heading is visible.
    await loginPage.validateLoginHeading();

    // Login using the empty user and password retrieved from the JSON test data.
        await loginPage.login(
        loginData.emptyUser.username,
        loginData.emptyUser.password
    );

    await loginPage.validateRequiredMessage();
});


test('TC004 Login User with sqlInjection username and password',async({loginPage})=>{

    // Read login credentials from the JSON test data file.
    // The login() method returns the login test data.
    const loginData = JsonReader.login();

    // Verify that the Login Page heading is visible.
    await loginPage.validateLoginHeading();

    // Login using the sqlInjection user and password retrieved from the JSON test data.
        await loginPage.login(
        loginData.sqlInjectionUser.username,
        loginData.sqlInjectionUser.password
    );

        await loginPage.validationMessage();

});

test('TC005 Login User with specialCharacterUser username and password',async({loginPage})=>{

    // Read login credentials from the JSON test data file.
    // The login() method returns the login test data.
    const loginData = JsonReader.login();

    // Verify that the Login Page heading is visible.
    await loginPage.validateLoginHeading();

    // Login using the specialCharacter user and password retrieved from the JSON test data.
        await loginPage.login(
        loginData.specialCharacterUser.username,
        loginData.specialCharacterUser.password
    );

        await loginPage.validationMessage();

});

test('TC006 Validate that password is masked',async({loginPage})=>{

    // Read login credentials from the JSON test data file.
    // The login() method returns the login test data.
    const loginData = JsonReader.login();

    // Verify that the Login Page heading is visible.
    await loginPage.validateLoginHeading();

    // Login using the valid user and password retrieved from the JSON test data.
        await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );
    
        await loginPage.passwordMasked();

});
