import LoginPage from "../pageobjects/login.page.js";
import HomePage from "../pageobjects/home.page.js";

import userCredentials from "../data/user-credentials.json" assert { type: "json" };
import Helper from "../helper/helper.js";

describe("Login", () => {
  beforeEach(async () => {
    await HomePage.clickLoginPage();
  });

  it("with valid credentials", async () => {
    await HomePage.navbarPageItemsDisplay();
    const randomEmailIndex = Math.floor(
      Math.random() * userCredentials.emails.length
    );
    const randomPasswordIndex = Math.floor(
      Math.random() * userCredentials.passwords.length
    );
    await LoginPage.loginFormDisplay();
    await LoginPage.fillLoginForm(
      userCredentials.emails[randomEmailIndex],
      userCredentials.passwords[randomPasswordIndex]
    );
    await LoginPage.clickLoginBtn();
    await LoginPage.checkSignInPopupMsg();
    await LoginPage.clickSignInPopupMsgBtn();
  });
  it("with invalid credentials", async () => {
    const invalidRandomEmail = Helper.generateRandomInvalidEmail();
    const invalidRandomPassword = Helper.generateRandomInvalidPassword();
    await LoginPage.fillLoginForm(invalidRandomEmail, invalidRandomPassword);
    await LoginPage.clickLoginBtn();
    await LoginPage.checkInvalidCredentialsError();
  });
  it("with empty required fields", async () => {
    await LoginPage.clickLoginBtn();
    await LoginPage.checkBlankFieldsError();
  });
});
