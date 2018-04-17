import BasePage from './BasePage';

var chai = require('chai');
var expect = chai.expect;

export default class HeroDetails extends BasePage {
    constructor(name) {
        super();
        this.name = name;
        this.heroDetailsTitle = $('h2');
        this.idLabel = element(by.cssContainingText('label', 'id'));
        this.nameLabel = element(by.cssContainingText('label', 'name'));
        this.inputName = $('input');
        this.backButton = element(by.buttonText('Back'));
        this.saveButton = element(by.buttonText('Save'));
    }

    async checkDisplayedCorrect() {
        expect(await this.heroDetailsTitle.getText()).equal(this.name + ' details!');
        expect(await this.idLabel.isDisplayed()).equal(true);
        expect(await this.nameLabel.isDisplayed()).equal(true);
        expect(await this.backButton.isDisplayed()).equal(true);
        expect(await this.saveButton.isDisplayed()).equal(true);
        expect(await this.inputName.getAttribute("ng-reflect-model")).equal(this.name);
    }

    async changeName(newName) {
        await this.inputName.clear();
        await this.inputName.sendKeys(newName);
    }

    async save() {
        await this.saveButton.click();
    }

    async goBack() {
        await this.backButton.click();
    }
}