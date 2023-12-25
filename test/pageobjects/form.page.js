import { $, $$ } from "@wdio/globals";
import Page from "./page.js";

const switchOff_msg = "Click to turn the switch OFF";
const switchOn_msg = "Click to turn the switch ON";
const optionsList = [
  "Select an item...",
  "webdriver.io is awesome",
  "Appium is awesome",
  "This app is awesome",
];

class FormPage extends Page {
  get typeSmtField() {
    return $(`~text-input`);
  }

  get typedResultField() {
    return $(`~input-text-result`);
  }

  get switchBtn() {
    return $(`~switch`);
  }

  get switchText() {
    return $(`~switch-text`);
  }

  get dropdownList() {
    return $(`~Dropdown`);
  }

  get dropdownListOptions() {
    return $$(
      `//android.widget.CheckedTextView[@resource-id="android:id/text1"]`
    );
  }

  get inactiveBtn() {
    return $(`~button-Inactive`);
  }

  get activeBtn() {
    return $(`~button-Active`);
  }

  get activeBtnPopupMsg() {
    return $(`//*[@resource-id="android:id/message"]`);
  }

  get activeBtnPopupMsgBtn() {
    return $(`//*[@resource-id="android:id/button1"]`);
  }

  async formComponentsDisplay() {
    await super.isDisplayed(this.typeSmtField);
    await super.isDisplayed(this.typedResultField);
    await super.isDisplayed(this.switchBtn);
    await super.isDisplayed(this.switchText);
    await super.isDisplayed(this.dropdownList);
    await super.isDisplayed(this.inactiveBtn);
    await super.isDisplayed(this.activeBtn);
  }

  async dropdownListOptionsDisplay() {
    const options = this.dropdownListOptions;
    for (let i = 0; i < optionsList.length; i++) {
      const option = options[i];
      await super.isDisplayed(option);
      await super.checkText(option, optionsList[i]);
    }
  }

  async activeBtnPopupMsgDisplay() {
    await super.isDisplayed(this.activeBtnPopupMsg);
    await super.click(this.activeBtnPopupMsgBtn);
  }

  async fillTypeSmtField(text) {
    await super.setValue(this.typeSmtField, text);
  }

  async checkTypedText() {
    const typed = await super.getText(this.typeSmtField);
    await super.checkText(this.typedResultField, typed);
  }

  async checkSwitchOffText() {
    await super.checkText(this.switchText, switchOff_msg);
  }

  async checkSwitchOnText() {
    await super.checkText(this.switchText, switchOn_msg);
  }

  async checkBtnsAccessibility() {
    // await super.isDisabled(this.inactiveBtn);
    // await super.isEnabled(this.activeBtn);
  }

  async clickSwitchBtn() {
    await super.click(this.switchBtn);
  }

  async clickDropdownList() {
    await super.click(this.dropdownList);
  }

  async clickDropdownListOption() {
    const options = this.dropdownListOptions;
    await super.click(options[1]);
  }

  async clickInactiveBtn() {
    await super.click(this.inactiveBtn);
  }

  async clickActiveBtn() {
    await super.click(this.activeBtn);
  }
}

export default new FormPage();
