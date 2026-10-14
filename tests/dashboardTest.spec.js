const {test} = require('../fixtures/baseFixture.js');
const JsonReader = require('../utils/jsonReader.js');
require('../hooks/hooks.js');

test.skip('TC001 Verify Search',async({loginPage,dashboardPage})=>{

    const loginData = JsonReader.login();
    await loginPage.validateLoginHeading();

        await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

     await dashboardPage.navigateDashboardPage()
    
     await dashboardPage.search("Leave");    

});


test('TC002 Verify left menu link redirect to correct page',async({loginPage,dashboardPage})=>{

    const loginData = JsonReader.login();
    await loginPage.validateLoginHeading();

        await loginPage.login(
        loginData.validUser.username,
        loginData.validUser.password
    );

    await dashboardPage.navigateDashboardPage()
    
    await dashboardPage.validateMenuNavigation();


});