const { expect } = require('@playwright/test');

class Base{

    constructor(page) {
        this.page = page;
    }

async scrollAndClickElement(element) {
    if (element) {
      await element.scrollIntoViewIfNeeded();
      await element.click();
    }
  }

  async scrollAndClickElementAtIndex(element, index) {
    const nthElement = await element.nth(index);
    await nthElement.scrollIntoViewIfNeeded();
    await nthElement.click();
}

async validateToastMessage(text) {
    await expect(this.page.locator('//div[@role="alert"]//div[contains(text(), "' + text + '")]')).toBeVisible();
}
}

export default Base;