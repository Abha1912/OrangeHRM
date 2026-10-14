const {expect} =  require ('@playwright/test');

// Import reusable common methods such as inputTextbox() and click().
const CommonMethods = require('../utils/commonMethod.js');

// Page Object class for the Login Page.
// This class contains Login Page locators and reusable actions/validations.
class LoginPage{

    // Constructor receives the Playwright page object.
    // The page object is used to interact with elements on the browser page.
    constructor(page)
    {
         // Store the Playwright page object in "this.page" for use throughout this class.
          this.page = page;

          // Login heading/text
          this.txtLoginHeading = page.locator(".orangehrm-login-title");
          this.requiredMessage = page.locator(".oxd-input-field-error-message");
          this.errorMessage = page.locator(".oxd-alert-content-text");

          //inputFields
          this.inputUsername = page.getByPlaceholder("Username");
          this.inputPassword = page.getByPlaceholder("Password");

          // Navigation links/buttons
          this.btnLogin = page.getByRole('button',{name:'Login'})
    }

    // Verifies that the Login Page heading is visible.
    async validateLoginHeading()
    {
        await expect(this.txtLoginHeading).toBeVisible();
    }

    // Logs in using the provided email address and password.
    async login(username,password)
    {
        await CommonMethods.inputTextbox(this.inputUsername,username);
        await CommonMethods.inputTextbox(this.inputPassword,password);
        await CommonMethods.click(this.btnLogin);
    }

    async validationMessage()
    {
        await expect(this.errorMessage).toHaveText('Invalid credentials');
    }

    async validateRequiredMessage()
    {
        await expect(this.requiredMessage).toHaveCount(2);
        await expect(this.requiredMessage.nth(0)).toHaveText('Required');
        await expect(this.requiredMessage.nth(1)).toHaveText('Required');   
     }

     async passwordMasked()
     {
        await expect(this.inputPassword).toHaveAttribute('type','password');
     }
}

       

// Export the LoginPage class so it can be imported and used in test cases or Playwright fixtures.
module.exports = LoginPage;