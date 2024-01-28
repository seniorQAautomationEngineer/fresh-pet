import Base from './Base';

class HomePage extends Base {

    constructor(page) {
        super(page);
      }

    async clickAnyCategory(category){
        this.scrollAndClickElement(this.page.locator('//img[@class="pet-icon"][@alt="' + category + '"]'))
    }

    async clickAddToCartButton(index){
        this.clickElementByIndex(locators.buttonAddToCart, index);
    }

    async verifyCategoTitleInSearch(category, index){
        await expect(this.page.locator('//li[@class="pet-item"][@title="' + category + '"]').nth(index)).toBeVisible();
    }
}

export default HomePage;