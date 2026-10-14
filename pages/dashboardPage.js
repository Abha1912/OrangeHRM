
const {expect} =  require('@playwright/test');
const CommonMethods = require('../utils/commonMethod.js');


class DashboardPage{
    
   
    constructor(page)
    {
         
        this.page = page; 

        this.txtDashboard = page.getByRole('heading',{name : 'Dashboard'});

        this.inputSearch = page.getByPlaceholder('Search');
        this.listMenu = page.locator('.oxd-main-menu-item');

        this.linkAdmin = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Admin"]');
        this.linkPIM = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="PIM"]');
        this.linkLeave = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Leave"]');
        this.linkTime= page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Time"]');
        this.linkRecruitment = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Recruitment"]');
        this.linkPerformance = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Performance"]');
        this.linkDashboard = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Dashboard"]');
        this.linkDirectory = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Directory"]');
        this.linkMaintenance = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Maintenance"]');
        this.linkClaim = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Claim"]');
        this.linkBuzz = page.locator('//a[@class="oxd-main-menu-item"]//span[text()="Buzz"]');
        this.linkMyInfo = page.getByRole('link',{name:'My Info'});

    }

    async navigateDashboardPage()
    {
        await expect(this.page).toHaveURL(/\/dashboard\/index/);
    }

    async search(searchText)
    {
        await CommonMethods.inputTextbox(this.inputSearch,searchText);
        const matchingMenu = this.page.locator('.oxd-main-menu-item').filter({ hasText: searchText });
        await expect(matchingMenu).toBeVisible();
        await expect(matchingMenu).toContainText(searchText);

        //await expect(this.listMenu).toHaveText(searchText);
    }

    async navigateToAdmin(){
        await CommonMethods.click(this.linkAdmin);
        await expect(this.page).toHaveURL(/\/admin\/viewSystemUsers/);
    }

    async validateMenuNavigation()
    {
        await CommonMethods.click(this.linkAdmin);
        await expect(this.page).toHaveURL(/\/admin\/viewSystemUsers/);

        await this.page.waitForTimeout(2000); 

        await CommonMethods.click(this.linkPIM);
        await expect(this.page).toHaveURL(/\/pim\/viewEmployee/);

        await this.page.waitForTimeout(2000); 

        await CommonMethods.click(this.linkLeave);
        await expect(this.page).toHaveURL(/\/leave\/viewLeaveList/);

        await this.page.waitForTimeout(2000); 

        await CommonMethods.click(this.linkTime);
        await expect(this.page).toHaveURL(/\/time\/viewEmployeeTimesheet/);

        await this.page.waitForTimeout(2000); 

        await CommonMethods.click(this.linkPerformance);
        await expect(this.page).toHaveURL(/\/performance\/searchEvaluatePerformanceReview/);

        await this.page.waitForTimeout(2000); 

        await CommonMethods.click(this.linkDashboard);
        await expect(this.page).toHaveURL(/\/dashboard\/index/);

        await this.page.waitForTimeout(2000); 

        await CommonMethods.click(this.linkDirectory);
        await expect(this.page).toHaveURL(/\/directory\/viewDirectory/);

        await this.page.waitForTimeout(2000); 

        await CommonMethods.click(this.linkClaim);
        await expect(this.page).toHaveURL(/\/claim\/viewAssignClaim/);

        await this.page.waitForTimeout(5000); 

        await CommonMethods.click(this.linkBuzz);
        await expect(this.page).toHaveURL(/\/buzz\/viewBuzz/);

        await this.page.waitForTimeout(2000); 

        await CommonMethods.click(this.linkRecruitment);
        await expect(this.page).toHaveURL(/\/recruitment\/viewCandidates/);

        await this.page.waitForTimeout(2000); 

        // await CommonMethods.click(this.linkMaintenance);
        // await expect(this.page).toHaveURL(/\/maintenance\/viewMaintenance/);
    }
    
}

// Export the DashboardPage class.Other files can import and create a HomePage object.
module.exports = DashboardPage;