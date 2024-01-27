// @ts-check
const { test, expect } = require('@playwright/test');

test.describe('E2@ test', () => {
    test('Unregistered user flow', async ({ page }) => {
       await page.goto('/');
       page.on('domcontentloaded', () => {});
    });
    
    });

  