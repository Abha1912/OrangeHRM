# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> TC001 Login User with correct username and password
- Location: tests\loginTest.spec.js:13:1

# Error details

```
TypeError: dashboardPage.navigateDashboardPage is not a function
```

# Test source

```ts
  1   | // Import Playwright's test and expect functions from the custom baseFixture file.
  2   | const {test} = require('../fixtures/baseFixture.js');
  3   | 
  4   | // Import the JsonReader utility.This is used to read login test data from the JSON file.
  5   | const JsonReader = require('../utils/jsonReader.js');
  6   | 
  7   | // Import the common Playwright hooks.
  8   | // These hooks handle actions such as opening the application before each test and taking screenshots when a test fails.
  9   | require('../hooks/hooks.js');
  10  | 
  11  | // Define the test case.
  12  | // "homePage" and "loginPage" are custom fixtures provided by baseFixture.js.
  13  | test('TC001 Login User with correct username and password',async({loginPage,dashboardPage})=>{
  14  | 
  15  |     // Read login credentials from the JSON test data file.
  16  |     // The login() method returns the login test data.
  17  |     const loginData = JsonReader.login();
  18  | 
  19  |     // Verify that the Login Page heading is visible.
  20  |     await loginPage.validateLoginHeading();
  21  | 
  22  |     // Login using the valid username and password retrieved from the JSON test data.
  23  |         await loginPage.login(
  24  |         loginData.validUser.username,
  25  |         loginData.validUser.password
  26  |     );
> 27  |     await dashboardPage.navigateDashboardPage();
      |                         ^ TypeError: dashboardPage.navigateDashboardPage is not a function
  28  | 
  29  | });
  30  | 
  31  | test('TC002 Login User with invalid username and password',async({loginPage})=>{
  32  | 
  33  |     // Read login credentials from the JSON test data file.
  34  |     // The login() method returns the login test data.
  35  |     const loginData = JsonReader.login();
  36  | 
  37  |     // Verify that the Login Page heading is visible.
  38  |     await loginPage.validateLoginHeading();
  39  | 
  40  |     // Login using the valid username and password retrieved from the JSON test data.
  41  |         await loginPage.login(
  42  |         loginData.invalidUser.username,
  43  |         loginData.invalidUser.password
  44  |     );
  45  | 
  46  |     await loginPage.validationMessage();
  47  | });
  48  | 
  49  | test('TC003 Login User with empty username and password',async({loginPage})=>{
  50  | 
  51  |     // Read login credentials from the JSON test data file.
  52  |     // The login() method returns the login test data.
  53  |     const loginData = JsonReader.login();
  54  | 
  55  |     // Verify that the Login Page heading is visible.
  56  |     await loginPage.validateLoginHeading();
  57  | 
  58  |     // Login using the empty user and password retrieved from the JSON test data.
  59  |         await loginPage.login(
  60  |         loginData.emptyUser.username,
  61  |         loginData.emptyUser.password
  62  |     );
  63  | 
  64  |     await loginPage.validateRequiredMessage();
  65  | });
  66  | 
  67  | 
  68  | test('TC004 Login User with sqlInjection username and password',async({loginPage})=>{
  69  | 
  70  |     // Read login credentials from the JSON test data file.
  71  |     // The login() method returns the login test data.
  72  |     const loginData = JsonReader.login();
  73  | 
  74  |     // Verify that the Login Page heading is visible.
  75  |     await loginPage.validateLoginHeading();
  76  | 
  77  |     // Login using the sqlInjection user and password retrieved from the JSON test data.
  78  |         await loginPage.login(
  79  |         loginData.sqlInjectionUser.username,
  80  |         loginData.sqlInjectionUser.password
  81  |     );
  82  | 
  83  |         await loginPage.validationMessage();
  84  | 
  85  | });
  86  | 
  87  | test('TC005 Login User with specialCharacterUser username and password',async({loginPage})=>{
  88  | 
  89  |     // Read login credentials from the JSON test data file.
  90  |     // The login() method returns the login test data.
  91  |     const loginData = JsonReader.login();
  92  | 
  93  |     // Verify that the Login Page heading is visible.
  94  |     await loginPage.validateLoginHeading();
  95  | 
  96  |     // Login using the specialCharacter user and password retrieved from the JSON test data.
  97  |         await loginPage.login(
  98  |         loginData.specialCharacterUser.username,
  99  |         loginData.specialCharacterUser.password
  100 |     );
  101 | 
  102 |         await loginPage.validationMessage();
  103 | 
  104 | });
  105 | 
  106 | test('TC006 Validate that password is masked',async({loginPage})=>{
  107 | 
  108 |     // Read login credentials from the JSON test data file.
  109 |     // The login() method returns the login test data.
  110 |     const loginData = JsonReader.login();
  111 | 
  112 |     // Verify that the Login Page heading is visible.
  113 |     await loginPage.validateLoginHeading();
  114 | 
  115 |     // Login using the valid user and password retrieved from the JSON test data.
  116 |         await loginPage.login(
  117 |         loginData.validUser.username,
  118 |         loginData.validUser.password
  119 |     );
  120 |     
  121 |         await loginPage.passwordMasked();
  122 | 
  123 | });
  124 | 
```