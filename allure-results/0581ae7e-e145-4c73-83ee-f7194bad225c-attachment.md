# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> TC001 Login User with correct username and password
- Location: tests\loginTest.spec.js:13:1

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByText('Dashboard')
Expected: visible
Error: strict mode violation: getByText('Dashboard') resolved to 2 elements:
    1) <span data-v-7b563373="" data-v-6475d26d="" class="oxd-text oxd-text--span oxd-main-menu-item--name">Dashboard</span> aka getByRole('link', { name: 'Dashboard' })
    2) <h6 data-v-7b563373="" data-v-c286b6e5="" class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module">Dashboard</h6> aka getByRole('heading', { name: 'Dashboard' })

Call log:
  - Expect "toBeVisible" getByText('Dashboard') with timeout 5000ms
  - waiting for getByText('Dashboard')

```

# Test source

```ts
  1  | //This is part of the Page Object Model (POM) design.
  2  | 
  3  | 
  4  | 
  5  | // Import "expect" from Playwright.expect is used to perform assertions/validations.
  6  | const {expect} =  require('@playwright/test');
  7  | 
  8  | // Import CommonMethods.
  9  | // This contains reusable methods such as click().
  10 | const CommonMethods = require('../utils/commonMethod.js');
  11 | 
  12 | // Create a class named DashboardPage.
  13 | // This class represents the Dashboard Page of the application.
  14 | class DashboardPage{
  15 |     
  16 |     // Constructor receives the Playwright page object.
  17 |     // The page object is used to interact with elements on the browser page.
  18 |     // Constructor runs automatically when we create an object of the HomePage class.
  19 |     constructor(page)
  20 |     {
  21 |          
  22 |        // Store the Playwright page object in "this.page" for use throughout this class.
  23 |         this.page = page; 
  24 | 
  25 |         // Navigation 
  26 |         this.txtDashboard = page.getByText('Dashboard');
  27 | 
  28 |     }
  29 | 
  30 |     // This method validates that the browser page title is "Automation Exercise".
  31 |     async navigateDashboardPage()
  32 |     {
  33 |         // Check that the current page has the expected title.
> 34 |         await expect(this.txtDashboard).toBeVisible();
     |                                         ^ Error: expect(locator).toBeVisible() failed
  35 |     }
  36 | 
  37 |     // This method opens the Signup / Login page.
  38 |     async openLoginPage()
  39 |     {
  40 |         // Use the reusable click method from CommonMethods to click the Signup / Login link.
  41 |         await CommonMethods.click(this.linkSignupLogin);
  42 |     }
  43 |     
  44 |     // This method verifies that the user is logged in.
  45 |     async validateUserIsLoggedIn()
  46 |     {
  47 |         // Check that the "Logged in as" element is visible.
  48 |          await expect(this.txtLoggedInAsUser).toBeVisible();
  49 |     }
  50 | 
  51 |     // This method deletes the current user's account.
  52 |     async deleteAccount()
  53 |     {
  54 |         // Use the reusable click method to click the Delete Account link.
  55 |         await CommonMethods.click(this.linkDeleteAccount);
  56 |     }
  57 | 
  58 |     // This method verifies that the account was successfully deleted.
  59 |     async validateAccountDeletedMessage()
  60 |     {
  61 |         // Check that the element contains exactly:"Account Deleted!"
  62 |         await expect(this.txtAccountDeleted).toHaveText('Account Deleted!');
  63 |     }
  64 | 
  65 |     // This method is intended to log the user out.
  66 |     async logout()
  67 |     {
  68 |         // Click the logout link using CommonMethods.
  69 |          await CommonMethods.click(this.linkLogout);
  70 |     }
  71 | }
  72 | 
  73 | // Export the DashboardPage class.Other files can import and create a HomePage object.
  74 | module.exports = DashboardPage;
```