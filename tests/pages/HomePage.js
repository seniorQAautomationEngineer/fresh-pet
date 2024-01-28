import Base from './Base';
const { expect } = require('@playwright/test');

class HomePage extends Base {

    constructor(page) {
        super(page);
        this.buttonAddToCart = page.locator('//button[@class="add-to-cart"]');
        this.buttonShoppingCart = page.locator('//a[@href="/cart"]');
      }

    async clickAnyCategory(category){
        await this.scrollAndClickElement(this.page.locator('//img[@class="pet-icon"][@alt="' + category + '"]'))
    }

    async clickAddToCartButton(index){
        await this.scrollAndClickElementAtIndex(this.buttonAddToCart, index);
    }

    async verifyCategoTitleInSearch(category, index){
        await expect(this.page.locator('//li[@class="pet-item"][@title="' + category + '"]').nth(index)).toBeVisible();
    }

    async clickShoppingCartButton(){
        await this.scrollAndClickElement(this.buttonShoppingCart);
    }

}

export default HomePage;