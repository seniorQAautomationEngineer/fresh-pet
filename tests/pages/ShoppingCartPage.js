import { runInThisContext } from 'vm';
import Base from './Base';
const { expect } = require('@playwright/test');

class ShoppingCartPage extends Base {

    constructor(page) {
        super(page);
        this.buttonCheckOut = page.locator('//button[@title="Check Out"]');
        this.titleCartNotFound = page.locator('//h1[@class="cart-not__found"]');

      }

      async clickAnyCategory(){
        await this.scrollAndClickElement(this.buttonCheckOut);
    }

    async verifyShoppingCartIsEmpty(){
        await expect(this.titleCartNotFound).toBeVisible();
    }
}


export default ShoppingCartPage;