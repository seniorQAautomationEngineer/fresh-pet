// // @ts-check
// const { test, expect } = require('@playwright/test');
// import { locators } from './locators';

// test.describe('Smoke test', () => {
//     test('Home page smoke test', async ({ page }) => {
//         await page.goto('/');
//         page.on('domcontentloaded', () => {});

//         // Validate title
//         await expect(page).toHaveTitle(/Fresh Pets/);
//         const imageSrc = await page.getAttribute('img', 'src');
//         expect(imageSrc).toBe('../img/logo.png');

//         // Validate header
//         await expect(page.locator('//header[@class="header"]')).toBeVisible();

//           // Validate Background image
//         await expect(page.locator('//img[@src="../img/background.jpg"]')).toBeVisible();

//         // Validate Category Background
//         await expect(page.locator(locators.categoryBackground).nth(0)).toBeVisible();

//         // Validate card section
//         await expect(page.locator('//section[@class="products-section"]').nth(0)).toBeVisible();


//         // Validate Product Card
//         await expect(page.locator('//div[@class="card"]').nth(0)).toBeVisible();

//         // Validate Footer
//         await expect(page.locator('//img[@class="footer-img"]')).toBeVisible();
//     });
    
//     });

  