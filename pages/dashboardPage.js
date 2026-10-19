
const {expect} =  require('@playwright/test');
const CommonMethods = require('../utils/commonMethod.js');


class DashboardPage {
    
    constructor(page) {
         
        this.page = page; 

        this.txtDashboard = page.getByRole('heading',{name : 'Dashboard'});

        this.inputSearch = page.getByPlaceholder('Search');
        this.listMenu = page.locator('.oxd-main-menu-item');

        this.linkAdmin = page.getByRole('link', { name: 'Admin' });
        this.linkPIM = page.getByRole('link', { name: 'PIM' });
        this.linkLeave = page.getByRole('link', { name: 'Leave' });
        this.linkTime = page.getByRole('link', { name: 'Time' });
        this.linkRecruitment = page.getByRole('link', { name: 'Recruitment' });
        this.linkPerformance = page.getByRole('link', { name: 'Performance' });
        this.linkDashboard = page.getByRole('link', { name: 'Dashboard' });
        this.linkDirectory = page.getByRole('link', { name: 'Directory' });
        this.linkClaim = page.getByRole('link', { name: 'Claim' });
        this.linkBuzz = page.getByRole('link', { name: 'Buzz' });
        this.linkMyInfo = page.getByRole('link',{name:'My Info'});

    }
    

    async navigateAndVerify(locator, urlPattern) {

        await expect(locator).toBeVisible();
        // await locator.click();
        // await expect(this.page).toHaveURL(urlPattern);
        await Promise.all([this.page.waitForURL(urlPattern),locator.click()]);
        await expect(this.page).toHaveURL(urlPattern);


    }

    
    async navigateToDashboardpage() {

        await expect(this.page).toHaveURL(/\/dashboard\/index/);
        
    }


    async navigateToAdminpage() {

        await this.navigateAndVerify(this.linkAdmin,/\/admin\/viewSystemUsers/);

    }
 
    async validateMenuNavigation() {
        
        await this.navigateAndVerify(this.linkAdmin,/\/admin\/viewSystemUsers/);

        await this.navigateAndVerify(this.linkPIM,/\/pim\/viewEmployee/);

        await this.navigateAndVerify(this.linkLeave,/\/leave\/viewLeaveList/);

        await this.navigateAndVerify(this.linkTime,/\/time\/viewEmployeeTimesheet/);

        await this.navigateAndVerify(this.linkPerformance,/\/performance\/searchEvaluatePerformanceReview/);

        await this.navigateAndVerify(this.linkDashboard,/\/dashboard\/index/);

        await this.navigateAndVerify(this.linkDirectory,/\/directory\/viewDirectory/);

        await this.navigateAndVerify(this.linkClaim,/\/claim\/viewAssignClaim/);

        await this.navigateAndVerify(this.linkBuzz,/\/buzz\/viewBuzz/);

        await this.navigateAndVerify(this.linkRecruitment,/\/recruitment\/viewCandidates/);
        
    }

    async search(searchText) {

        await CommonMethods.inputTextbox(this.inputSearch,searchText);
        const matchingMenu = this.page.locator('.oxd-main-menu-item').filter({ hasText: searchText });
        await expect(matchingMenu).toBeVisible();
        await expect(matchingMenu).toContainText(searchText);

    }
    
}

module.exports = DashboardPage;