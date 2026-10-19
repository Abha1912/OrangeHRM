const {test,expect} = require('../fixtures/baseFixture.js');
require('../hooks/hooks.js');

test('TC001 Verify Search',async({authenticatedPage,dashboardPage})=>{

    await expect(authenticatedPage).toHaveURL(/\/dashboard\/index/);

     await dashboardPage.search("Leave");    

});


test('TC002 Verify left menu link redirect to correct page',async({authenticatedPage,dashboardPage})=>{
    
    await expect(authenticatedPage).toHaveURL(/\/dashboard\/index/);
    await dashboardPage.validateMenuNavigation();

});