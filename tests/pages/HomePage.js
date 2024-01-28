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
        this.header = page.locator('header[class="header"]');
        this.backgroundImage = page.locator('//img[@src="../img/background.jpg"]');
        this.productSection = page.locator('//section[@class="products-section"]');
        this.itemCard = page.locator('div[class="card"]');
        this.footer = page.locator('img[class="footer-img"]');
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

    async validatePageTitle(titleString) {
        const expectedTitlePattern = new RegExp(titleString);
        await expect(this.page).toHaveTitle(expectedTitlePattern);
    }

    async validateLogo() {
        const imageSrc = await this.page.getAttribute('img', 'src');
        expect(imageSrc).toBe('../img/logo.png');
    }

    async validateHeader(){
        await expect(this.header).toBeVisible();
    }

    async validatBackgroundImage(){
        await expect(this.backgroundImage).toBeVisible();
    }

    async verifyProductSection(){
        await expect(this.productSection).toBeVisible();
    }

    async verifyItemCard(index){
        const nthItemCard = this.itemCard.nth(index);
        await nthItemCard.waitFor({ state: 'visible', timeout: 5000 });
    }

    async validateFooter(){
        await expect(this.footer).toBeVisible();
    }

}

export default HomePage;