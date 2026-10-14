// CommonMethod class contains reusable helper methods that can be used across different Playwright test files.


class CommonMethod{

    // Constructor receives the Playwright page object.
    // The page object is used to interact with elements on the browser page.
    constructor(page){
         this.page = page ; 
    }

    // Static method to click on an element.
    static async click(locator)
    {
        await locator.click();
    }

    // Static method to enter a value into a textbox/input field.
    static async inputTextbox(locator,value)
    {
             await locator.fill(value);   
    }

}

// Export the CommonMethod class so it can be imported and reused in other JavaScript test files.
module.exports = CommonMethod;
