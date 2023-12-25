import FormPage from "../pageobjects/form.page.js";
import HomePage from "../pageobjects/home.page.js";

import Helper from "../helper/helper.js";

describe("Checking", () => {
  it("the form components", async () => {
    const randomNote = Helper.generateRandomValidNote();
    await HomePage.clickFormsPage();
    await FormPage.formComponentsDisplay();
    await FormPage.fillTypeSmtField(randomNote);
    await FormPage.checkTypedText();
    await FormPage.clickSwitchBtn();
    await FormPage.checkSwitchOffText();
    await FormPage.clickSwitchBtn();
    await FormPage.checkSwitchOnText();
    await FormPage.clickDropdownList();
    await FormPage.dropdownListOptionsDisplay();
    await FormPage.clickDropdownListOption();
    // await FormPage.checkBtnsAccessibility();
    await FormPage.clickInactiveBtn();
    await FormPage.clickActiveBtn();
    await FormPage.activeBtnPopupMsgDisplay();
  });
});
