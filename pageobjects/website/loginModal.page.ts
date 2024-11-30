import BasePage from "./basePage.page";
import { Page } from "playwright-core";

export default class LoginModal extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Elements
  //-------------------------------------------------------------------------------------------------------------------
  readonly signInButton = () =>
    this.page.getByTestId("auth-modal--container").getByText("Sign in");

  readonly emailInput = () => this.page.getByPlaceholder("E-Mail");

  readonly passwordInput = () => this.page.getByPlaceholder("Password");

  readonly loginButton = () => this.page.getByTestId("login");

  // Actions
  //-------------------------------------------------------------------------------------------------------------------
  async signIn(email: string, password: string) {
    await this.signInButton().click();
    await this.emailInput().fill(email);
    await this.passwordInput().fill(password);
    await this.loginButton().click();
  }
}
