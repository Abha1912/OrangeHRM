class CommonMethod {

    constructor(page) {

        this.page = page ; 
    }

    static async click(locator) {

        await locator.waitFor({ state: 'visible' });
        await locator.click();

    }

    static async inputTextbox(locator,value) {

        await locator.fill(value);

    }

}

module.exports = CommonMethod;
