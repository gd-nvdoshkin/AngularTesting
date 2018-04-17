"use strict";

import HeroesPage from '../pageObjects/HeroesPage';

var config = require('../conf').config;

describe('Check Heroes functionality', () => {
    beforeEach(async () => {
        await browser.get(config.baseUrl);
    });

    it('Check Heroes Page displayed correct', async () => {
        let heroesPage = new HeroesPage(10);
        await heroesPage.goToHeroes();
        await heroesPage.checkDisplayedCorrect();
    });

    it('Check ability to delete hero', async () => {
        let heroesPage = new HeroesPage(10);
        await heroesPage.goToHeroes();
        await heroesPage.checkDisplayedCorrect();
        await heroesPage.deleteHero('Mr. Nice');
        await heroesPage.checkDisplayedCorrect();
    });

    it('Check ability to add hero', async () => {
        let name = 'Test Hero';
        let heroesPage = new HeroesPage(10);
        await heroesPage.goToHeroes();
        await heroesPage.checkDisplayedCorrect();
        await heroesPage.addHero(name);
        await heroesPage.checkDisplayedCorrect();
        await heroesPage.checkHeroExists(name)
    });

    it('Check all heroes list contains 15 Magneta', async () => {
        let heroesPage = new HeroesPage(10);
        await heroesPage.goToHeroes();
        expect(heroesPage.getAllVisibleHeroNames()).toContain('15 Magneta');
    });
});

