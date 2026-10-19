const {expect} =  require ('@playwright/test');

const CommonMethods = require('../utils/commonMethod.js');

class LoginPage{

    constructor(page)
    {
          this.page = page;

          this.txtLoginHeading = page.locator(".orangehrm-login-title");
          this.requiredMessage = page.locator(".oxd-input-field-error-message");
          this.errorMessage = page.locator(".oxd-alert-content-text");

          this.inputUsername = page.getByPlaceholder("Username");
          this.inputPassword = page.getByPlaceholder("Password");

          this.btnLogin = page.getByRole('button',{name:'Login'});

    }

    async validateLoginHeading() {

        await expect(this.txtLoginHeading).toBeVisible();

    }

    async login(username,password) {

        await CommonMethods.inputTextbox(this.inputUsername,username);
        await CommonMethods.inputTextbox(this.inputPassword,password);
        await CommonMethods.click(this.btnLogin);

    }

    async validationMessage() {

        await expect(this.errorMessage).toHaveText('Invalid credentials');

    }

    async validateRequiredMessage() {

        await expect(this.requiredMessage).toHaveCount(2);
        await expect(this.requiredMessage.nth(0)).toHaveText('Required');
        await expect(this.requiredMessage.nth(1)).toHaveText('Required');  

     }

    async passwordMasked() {
        await expect(this.inputPassword).toHaveAttribute('type','password');

    }
}

module.exports = LoginPage;