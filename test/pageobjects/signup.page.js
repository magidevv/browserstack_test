import { $, $$ } from "@wdio/globals";
import Page from "./page.js";

const signUpPopup_msg = "Signed Up!";
const invalidEmail_error = "Please enter a valid email address";
const invalidPassword_error = "Please enter at least 8 characters";
const invalidPasswordMatch_error = "Please enter the same password";
const blankEmail_error = "Please enter a valid email address";
const blankPassword_error = "Please enter at least 8 characters";
const blankPasswordMatch_error = "Please enter the same password";

class SignUpPage extends Page {
  get emailField() {
    return $(`~input-email`);
  }

  get passwordField() {
    return $(`~input-password`);
  }

  get confirmPasswordField() {
    return $(`~input-repeat-password`);
  }

  get signUpBtn() {
    return $(`~button-SIGN UP`);
  }

  get signInBtn() {
    return $(`~button-login-container`);
  }

  get signUpPopupMsg() {
    return $(`//*[@resource-id="android:id/alertTitle"]`);
  }

  get signUpPopupMsgBtn() {
    return $(`//*[@resource-id="android:id/button1"]`);
  }

  get emailFieldErrorMsg() {
    return $(
      `//android.widget.TextView[@text="Please enter a valid email address"]`
    );
  }

  get passwordFieldErrorMsg() {
    return $(
      `//android.widget.TextView[@text="Please enter at least 8 characters"]`
    );
  }

  get passwordMatchFieldErrorMsg() {
    return $(
      `//android.widget.TextView[@text="Please enter the same password"]`
    );
  }

  async signupFormDisplay() {
    await super.isDisplayed(this.emailField);
    await super.isDisplayed(this.passwordField);
    await super.isDisplayed(this.confirmPasswordField);
    await super.isDisplayed(this.signUpBtn);
  }

  async checkSignUpPopupMsg() {
    const signUpPopupMsg = this.signUpPopupMsg;
    await super.checkText(signUpPopupMsg, signUpPopup_msg);
  }

  async checkInvalidCredentialsError() {
    const emailFieldErrorMsg = this.emailFieldErrorMsg;
    const passwordFieldErrorMsg = this.passwordFieldErrorMsg;
    const passwordMatchFieldErrorMsg = this.passwordMatchFieldErrorMsg;
    await super.checkText(emailFieldErrorMsg, invalidEmail_error);
    await super.checkText(passwordFieldErrorMsg, invalidPassword_error);
    await super.checkText(
      passwordMatchFieldErrorMsg,
      invalidPasswordMatch_error
    );
  }

  async checkBlankFieldsError() {
    const emailFieldErrorMsg = this.emailFieldErrorMsg;
    const passwordFieldErrorMsg = this.passwordFieldErrorMsg;
    const passwordMatchFieldErrorMsg = this.passwordMatchFieldErrorMsg;
    await super.checkText(emailFieldErrorMsg, blankEmail_error);
    await super.checkText(passwordFieldErrorMsg, blankPassword_error);
    await super.checkText(passwordMatchFieldErrorMsg, blankPasswordMatch_error);
  }

  async fillSignupForm(email, password, confirmPassword) {
    await super.setValue(this.emailField, email);
    await super.setValue(this.passwordField, password);
    await super.setValue(this.confirmPasswordField, confirmPassword);
  }

  async clickSignUpBtn() {
    await super.click(this.signUpBtn);
  }

  async clickSignUpPopupMsgBtn() {
    await super.click(this.signUpPopupMsgBtn);
  }

  async clickSignInBtn() {
    await super.click(this.signInBtn);
  }
}

export default new SignUpPage();
