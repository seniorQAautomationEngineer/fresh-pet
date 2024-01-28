import Base from './Base';
const { expect } = require('@playwright/test');

class HomePage extends Base {

    constructor(page) {
        super(page);
        this.buttonAddToCart = page.locator('//button[@class="add-to-cart"]');
        this.buttonShoppingCart = page.locator('//a[@href="/cart"]');
        this.buttonSignIn = page.locator('button[class="signin-btn"]');
        this.buttonSignOut = page.locator('div[class="icons-logout"]');
        this.textFieldUsername = page.locator('input#username');
        this.buttonSubmit = page.locator('//button[text()="Submit"]');
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

    async clickSignInButton(){
        await this.buttonSignIn.click();
    }

    async clickSignOutButton(){
        await this.buttonSignOut.click();
    }

    async completeSignInForm(username){
        await this.textFieldUsername.fill(username);
        await this.buttonSubmit.click();
    }

    async verifyUsername(username){
        const buttonText = await this.buttonSignIn.textContent();
        expect(buttonText).toBe(username);
    }

}

export default HomePage;