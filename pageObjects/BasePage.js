export default class BasePage {
    constructor() {
        this.title = $('h1');
        this.dashboardButton = element(by.cssContainingText('a', 'Dashboard'));
        this.heroesButton = element(by.cssContainingText('a', 'Heroes'));
    }

    getTitle() {
        return this.title;
    }

    getDashboardButton() {
        return this.dashboardButton;
    }

    getHeroesButton() {
        return this.heroesButton;
    }

    goToDashboard() {
        this.dashboardButton.click();
    }

    async goToHeroes() {
        await this.heroesButton.click();
    }
}