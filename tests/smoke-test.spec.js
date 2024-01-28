// @ts-check
const { test, expect } = require('@playwright/test');
import HomePage from "./pages/HomePage";

test.describe('Smoke test', () => {
  let homePage;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    page.on('domcontentloaded', () => {});
    homePage = new HomePage(page);
  });

    test('Home page smoke test', async ({ page }) => {
        homePage.validatePageTitle('Fresh Pets');
        homePage.validateLogo();
        homePage.validateHeader();
        homePage.validatBackgroundImage();
        homePage.verifyProductSection();
        homePage.validateFooter();
    });
});

  