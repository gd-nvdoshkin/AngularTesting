"use strict";

import dashboard from '../pageObjects/Dashboard';
import HeroDetails from '../pageObjects/HeroDetails';

var config = require('../conf').config;

describe('Check Dashboard functionality', () => {
    beforeEach(async () => {
        await browser.get(config.baseUrl);
    });

    it('Check ability to update hero', async () => {
        let name = 'Narco';
        await dashboard.chooseHeroFromTop(name);
        let heroDetails = await new HeroDetails(name);
        await heroDetails.checkDisplayedCorrect();
        let newName = 'new Narco'
        await heroDetails.changeName(newName);
        await heroDetails.save();
        await dashboard.chooseHeroFromTop(newName);
        heroDetails = await new HeroDetails(newName);
        await heroDetails.checkDisplayedCorrect();
        await heroDetails.goBack();
    });

    it('Check ability to search hero', async () => {
        let name = 'Bombasto';
        await dashboard.searchHero(name);

        let heroDetails = await new HeroDetails(name);
        await heroDetails.checkDisplayedCorrect();
        await heroDetails.goBack();
    });

});

