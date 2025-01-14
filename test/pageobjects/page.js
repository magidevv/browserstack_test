import { browser } from "@wdio/globals";

/**
 * main page object containing all methods, selectors and functionality
 * that is shared across all page objects
 */
export default class Page {
  async pause(ms) {
    await browser.pause(ms);
  }

  async click(element) {
    await element.click();
  }

  async dblClick(element) {
    await element.doubleClick();
  }

  async setValue(element, value) {
    await element.setValue(value);
  }

  async isDisplayed(element, timeout = 5000) {
    await expect(await element).toBeDisplayed({ timeout });
  }

  async isDisabled(element) {
    await expect(await element).toBeDisabled();
  }

  async isEnabled(element) {
    await expect(await element).toBeEnabled();
  }

  async isExist(element) {
    await expect(await element).not.toBeExisting();
  }

  async getText(element) {
    return await element.getText();
  }

  async checkText(element, text) {
    const actualText = await this.getText(element);
    await expect(actualText).toContain(text);
  }

  async checkTextArray(element, textArray) {
    const actualText = await this.getText(element);
    await textArray.forEach((text) => {
      expect(actualText).toContain(text);
    });
  }
}
