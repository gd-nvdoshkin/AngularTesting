"use strict";

import dashboard from '../pageObjects/Dashboard';

var config = require('../conf').config;


describe('Check Base functionality', () => {
    beforeEach(async () => {
        await browser.get(config.baseUrl);
    });

    it('should have a title Tour of Heroes', () => {
        expect(dashboard.getTitle().getText()).toEqual('Tour of Heroes');
    });

    it('should have a DashboardButton is displayed', () => {
        expect(dashboard.getDashboardButton().isDisplayed()).toBe(true);
    });

    it('should have a HeroesButton is displayed', () => {
        expect(dashboard.getHeroesButton().isDisplayed()).toBe(true);
    });
});

