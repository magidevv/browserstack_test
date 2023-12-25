import LoginPage from "../pageobjects/login.page.js";
import SignUpPage from "../pageobjects/signup.page.js";
import HomePage from "../pageobjects/home.page.js";

import Helper from "../helper/helper.js";

describe("Sign up", () => {
  beforeEach(async () => {
    await HomePage.clickLoginPage();
    await LoginPage.clickSignUpBtn();
  });

  it("with valid credentials", async () => {
    const validRandomEmail = Helper.generateRandomValidEmail();
    const validRandomPassword = Helper.generateRandomValidPassword();
    const validRandomPasswordMatch = validRandomPassword;
    await SignUpPage.signupFormDisplay();
    await SignUpPage.fillSignupForm(
      validRandomEmail,
      validRandomPassword,
      validRandomPasswordMatch
    );
    await SignUpPage.clickSignUpBtn();
    await SignUpPage.checkSignUpPopupMsg();
    await SignUpPage.clickSignUpPopupMsgBtn();
    await SignUpPage.clickSignInBtn();
    await LoginPage.clickLoginBtn();
    await LoginPage.checkSignInPopupMsg();
    await LoginPage.clickSignInPopupMsgBtn();
  });
  it("with invalid credentials", async () => {
    const invalidRandomEmail = Helper.generateRandomInvalidEmail();
    const invalidRandomPassword = Helper.generateRandomInvalidPassword();
    const invalidRandomPasswordMatch = Helper.generateRandomInvalidPassword();
    await SignUpPage.fillSignupForm(
      invalidRandomEmail,
      invalidRandomPassword,
      invalidRandomPasswordMatch
    );
    await SignUpPage.clickSignUpBtn();
    await SignUpPage.checkInvalidCredentialsError();
  });
  it("with empty required fields", async () => {
    await SignUpPage.clickSignUpBtn();
    await SignUpPage.checkBlankFieldsError();
  });
});
