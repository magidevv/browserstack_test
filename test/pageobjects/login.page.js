import { $, $$ } from "@wdio/globals";
import Page from "./page.js";

const signInPopup_msg = "Success";
const invalidEmail_error = "Please enter a valid email address";
const invalidPassword_error = "Please enter at least 8 characters";
const blankEmail_error = "Please enter a valid email address";
const blankPassword_error = "Please enter at least 8 characters";

class LoginPage extends Page {
  get emailField() {
    return $(`~input-email`);
  }

  get passwordField() {
    return $(`~input-password`);
  }

  get loginBtn() {
    return $(`~button-LOGIN`);
  }

  get emailErrorMsg() {
    return $(
      `//android.widget.TextView[@text="Please enter a valid email address"]`
    );
  }

  get passwordErrorMsg() {
    return $(
      `//android.widget.TextView[@text="Please enter at least 8 characters"]`
    );
  }

  get emptyEmailFieldErrorMsg() {
    return $(
      `//android.widget.TextView[@text="Please enter a valid email address"]`
    );
  }

  get emptyPasswordFieldErrorMsg() {
    return $(
      `//android.widget.TextView[@text="Please enter a valid email address"]`
    );
  }

  get signInPopupMsg() {
    return $(`//*[@resource-id="android:id/alertTitle"]`);
  }

  get signInPopupMsgBtn() {
    return $(`//*[@resource-id="android:id/button1"]`);
  }

  get signUpBtn() {
    return $(`~button-sign-up-container`);
  }

  async loginFormDisplay() {
    await super.isDisplayed(this.emailField);
    await super.isDisplayed(this.passwordField);
    await super.isDisplayed(this.loginBtn);
  }

  async checkSignInPopupMsg() {
    const signInPopupMsg = this.signInPopupMsg;
    await super.checkText(signInPopupMsg, signInPopup_msg);
  }

  async checkInvalidCredentialsError() {
    const emailErrorMsg = this.emailErrorMsg;
    const passwordErrorMsg = this.passwordErrorMsg;
    await super.checkText(emailErrorMsg, invalidEmail_error);
    await super.checkText(passwordErrorMsg, invalidPassword_error);
  }

  async checkBlankFieldsError() {
    const emailErrorMsg = this.emailErrorMsg;
    const passwordErrorMsg = this.passwordErrorMsg;
    await super.checkText(emailErrorMsg, blankEmail_error);
    await super.checkText(passwordErrorMsg, blankPassword_error);
  }

  async fillLoginForm(email, password) {
    await super.setValue(this.emailField, email);
    await super.setValue(this.passwordField, password);
  }

  async clickLoginBtn() {
    await super.click(this.loginBtn);
  }

  async clickSignUpBtn() {
    await super.click(this.signUpBtn);
  }

  async clickSignInPopupMsgBtn() {
    await super.click(this.signInPopupMsgBtn);
  }
}

export default new LoginPage();
