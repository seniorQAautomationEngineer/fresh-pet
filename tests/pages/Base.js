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

async clickElementByIndex(element, index) {
    scrollAndClickElement(element.nth(index));
  }
}

export default Base;