import BasePage from './BasePage';

var chai = require('chai');
var expect = chai.expect;

export default class HeroesPage extends BasePage {

    constructor(nuberOfHeroes) {
        super();
        this.title = $('h2');
        this.numberOfHeroes = nuberOfHeroes;
        this.displayedHeroes = $$(".hero-element");
        this.newHeroButton = element(by.buttonText('Add New Hero'));
        this.inputName = $('input');
        this.saveButton = element(by.buttonText('Save'));
    }

    async checkDisplayedCorrect() {
        expect(await this.title.getText()).equal('My Heroes');
        expect(await this.displayedHeroes.count()).equal(this.numberOfHeroes);
        expect(await this.newHeroButton.isDisplayed()).equal(true);
    }

    async deleteHero(name) {
        let hero = await element(by.cssContainingText('.hero-element', name));
        let heroPaent = hero.element(by.xpath('..'));
        let deleteHeroButton = await heroPaent.$('.delete-button');
        await deleteHeroButton.click();
        this.numberOfHeroes--;
    }

    async addHero(name) {
        await this.newHeroButton.click();
        await this.inputName.clear().sendKeys(name);
        await this.saveButton.click();
        this.numberOfHeroes++;
    }

    async checkHeroExists(name) {
        let hero = await element(by.cssContainingText('.hero-element', name));
        expect(await hero.isDisplayed()).equal(true);
    }
}
