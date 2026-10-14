# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: loginTest.spec.js >> TC006 Validate that password is masked
- Location: tests\loginTest.spec.js:105:1

# Error details

```
ReferenceError: expect is not defined
```

# Test source

```ts
  20  |     await loginPage.validateLoginHeading();
  21  | 
  22  |     // Login using the valid username and password retrieved from the JSON test data.
  23  |         await loginPage.login(
  24  |         loginData.validUser.username,
  25  |         loginData.validUser.password
  26  |     );
  27  | 
  28  | });
  29  | 
  30  | test('TC002 Login User with invalid username and password',async({loginPage})=>{
  31  | 
  32  |     // Read login credentials from the JSON test data file.
  33  |     // The login() method returns the login test data.
  34  |     const loginData = JsonReader.login();
  35  | 
  36  |     // Verify that the Login Page heading is visible.
  37  |     await loginPage.validateLoginHeading();
  38  | 
  39  |     // Login using the valid username and password retrieved from the JSON test data.
  40  |         await loginPage.login(
  41  |         loginData.invalidUser.username,
  42  |         loginData.invalidUser.password
  43  |     );
  44  | 
  45  |     await loginPage.validationMessage();
  46  | });
  47  | 
  48  | test('TC003 Login User with empty username and password',async({loginPage})=>{
  49  | 
  50  |     // Read login credentials from the JSON test data file.
  51  |     // The login() method returns the login test data.
  52  |     const loginData = JsonReader.login();
  53  | 
  54  |     // Verify that the Login Page heading is visible.
  55  |     await loginPage.validateLoginHeading();
  56  | 
  57  |     // Login using the empty user and password retrieved from the JSON test data.
  58  |         await loginPage.login(
  59  |         loginData.emptyUser.username,
  60  |         loginData.emptyUser.password
  61  |     );
  62  | 
  63  |     await loginPage.validateRequiredMessage();
  64  | });
  65  | 
  66  | 
  67  | test('TC004 Login User with sqlInjection username and password',async({loginPage})=>{
  68  | 
  69  |     // Read login credentials from the JSON test data file.
  70  |     // The login() method returns the login test data.
  71  |     const loginData = JsonReader.login();
  72  | 
  73  |     // Verify that the Login Page heading is visible.
  74  |     await loginPage.validateLoginHeading();
  75  | 
  76  |     // Login using the sqlInjection user and password retrieved from the JSON test data.
  77  |         await loginPage.login(
  78  |         loginData.sqlInjectionUser.username,
  79  |         loginData.sqlInjectionUser.password
  80  |     );
  81  | 
  82  |         await loginPage.validationMessage();
  83  | 
  84  | });
  85  | 
  86  | test('TC005 Login User with specialCharacterUser username and password',async({loginPage})=>{
  87  | 
  88  |     // Read login credentials from the JSON test data file.
  89  |     // The login() method returns the login test data.
  90  |     const loginData = JsonReader.login();
  91  | 
  92  |     // Verify that the Login Page heading is visible.
  93  |     await loginPage.validateLoginHeading();
  94  | 
  95  |     // Login using the specialCharacter user and password retrieved from the JSON test data.
  96  |         await loginPage.login(
  97  |         loginData.specialCharacterUser.username,
  98  |         loginData.specialCharacterUser.password
  99  |     );
  100 | 
  101 |         await loginPage.validationMessage();
  102 | 
  103 | });
  104 | 
  105 | test('TC006 Validate that password is masked',async({loginPage})=>{
  106 | 
  107 |     // Read login credentials from the JSON test data file.
  108 |     // The login() method returns the login test data.
  109 |     const loginData = JsonReader.login();
  110 | 
  111 |     // Verify that the Login Page heading is visible.
  112 |     await loginPage.validateLoginHeading();
  113 | 
  114 |     // Login using the valid user and password retrieved from the JSON test data.
  115 |         await loginPage.login(
  116 |         loginData.validUser.username,
  117 |         loginData.validUser.password
  118 |     );
  119 |     
> 120 |         await expect(this.inputPassword).toHaveAttribute('type','password');
      |         ^ ReferenceError: expect is not defined
  121 | 
  122 |         //await loginPage.validationMessage();
  123 | 
  124 | });
  125 | 
```