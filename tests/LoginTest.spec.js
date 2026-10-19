const {test} = require('../fixtures/baseFixture.js');
const JsonReader = require('../utils/jsonReader.js');

require('../hooks/hooks.js');

test('TC001 Login User with correct username and password',async({loginPage,dashboardPage})=>{

    const loginData = JsonReader.login();
    await loginPage.validateLoginHeading();
    await loginPage.login(loginData.validUser.username,loginData.validUser.password);
    await dashboardPage.navigateToDashboardpage();

});

test('TC002 Login User with invalid username and password',async({loginPage})=>{

    const loginData = JsonReader.login();

    await loginPage.validateLoginHeading();
    await loginPage.login(loginData.invalidUser.username,loginData.invalidUser.password);
    await loginPage.validationMessage();

});

test('TC003 Login User with empty username and password',async({loginPage})=>{

    const loginData = JsonReader.login();

    await loginPage.validateLoginHeading();
    await loginPage.login(loginData.emptyUser.username,loginData.emptyUser.password);
    await loginPage.validateRequiredMessage();

});


test('TC004 Login User with sqlInjection username and password',async({loginPage})=>{

    const loginData = JsonReader.login();

    await loginPage.validateLoginHeading();
    await loginPage.login(loginData.sqlInjectionUser.username,loginData.sqlInjectionUser.password);
    await loginPage.validationMessage();

});

test('TC005 Login User with specialCharacterUser username and password',async({loginPage})=>{

    const loginData = JsonReader.login();

    await loginPage.validateLoginHeading();
    await loginPage.login(loginData.specialCharacterUser.username,loginData.specialCharacterUser.password);
    await loginPage.validationMessage();

});

test('TC006 Validate that password is masked',async({loginPage})=>{

    await loginPage.validateLoginHeading();
    await loginPage.passwordMasked();

});
