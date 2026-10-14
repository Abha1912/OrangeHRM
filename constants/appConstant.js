// Define a class named AppConstant

class AppConstant{

    // Create a static property called BASE_URL.
    //static means you can access it directly through the class without creating an object.
    static BASE_URL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

}

// Export the AppConstant class so it can be imported and used in other JavaScript files.
//module.exports is the standard way to export something from a JavaScript file.
module.exports = AppConstant;

