import { $ } from "@wdio/globals";
import Page from "./page.js";

class HomePage extends Page {
  get homePage() {
    return $(`~Home`);
  }
  get webviewPage() {
    return $(`~Webview`);
  }
  get loginPage() {
    return $(`~Login`);
  }
  get formsPage() {
    return $(`~Forms`);
  }
  get swipePage() {
    return $(`~Swipe`);
  }
  get dragPage() {
    return $(`~Drag`);
  }

  async navbarPageItemsDisplay() {
    await super.isDisplayed(this.homePage);
    await super.isDisplayed(this.webviewPage);
    await super.isDisplayed(this.loginPage);
    await super.isDisplayed(this.formsPage);
    await super.isDisplayed(this.swipePage);
    await super.isDisplayed(this.dragPage);
  }

  async clickLoginPage() {
    await super.click(this.loginPage);
  }

  async clickFormsPage() {
    await super.click(this.formsPage);
  }

  async clickSwipePage() {
    await super.click(this.swipePage);
  }

  async clickDragPage() {
    await super.click(this.dragPage);
  }
}

export default new HomePage();
