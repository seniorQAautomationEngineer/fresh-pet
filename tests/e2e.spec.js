// @ts-check
const { test, expect } = require('@playwright/test');
import { locators } from './locators';
import BaseTest from './BaseTest';
import HomePage from "./pages/HomePage";


test.describe('E2@ test', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    page.on('domcontentloaded', () => {});
    homePage = new HomePage(page);
  });

    test('Unregistered user flow', async ({ page }) => {
       homePage.clickAnyCategory('dog');
       homePage.verifyCategoTitleInSearch('dog', 0);
       homePage.clickAddToCartButton(0);

    });
});

  