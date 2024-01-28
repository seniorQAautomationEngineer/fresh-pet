// @ts-check
const { test, expect } = require('@playwright/test');
import HomePage from "./pages/HomePage";
import ShoppingCartPage from "./pages/ShoppingCartPage";

test.describe('E2@ test', () => {
  let homePage;
  let shoppinCart;

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    page.on('domcontentloaded', () => {});
    homePage = new HomePage(page);
    shoppinCart = new ShoppingCartPage(page);
  });

  test('Unregistered user flow', async ({}) => {
      await homePage.clickAnyCategory('dog');
      await homePage.verifyCategoTitleInSearch('dog', 0);
      await homePage.clickAddToCartButton(0);
      await homePage.validateToastMessage('Product added to cart');
      await homePage.clickShoppingCartButton();
      await shoppinCart.clickAnyCategory();
      await shoppinCart.verifyShoppingCartIsEmpty();
      await shoppinCart.validateToastMessage('Nice to see you');
      await shoppinCart.validateToastMessage('this product will be delivered to you as soon as possible');
  });
});

  