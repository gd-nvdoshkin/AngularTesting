import BasePage from './BasePage';

class Dashboard extends BasePage {

    constructor() {
        super();
        this.search = $('#search-box');
    }

    async chooseHeroFromTop(name) {
        let elem = element(by.cssContainingText('h4', name));
        browser.driver.wait(() => {
            browser.wait(protractor.ExpectedConditions.visibilityOf(elem), 10000);
            return elem;
        });
        await elem.click();
    }

    async searchHero(name) {
        await this.search.sendKeys(name);
        this.searchResult = await element(by.cssContainingText('.search-result', name));
        expect(this.searchResult.isDisplayed()).toBe(true);
        await this.searchResult.click();
    }
}

export default new Dashboard();