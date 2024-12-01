import BasePage from "./basePage.page";
import { Page } from "playwright-core";

export default class LoginModal extends BasePage {
  constructor(page: Page) {
    super(page);
  }

  // Elements
  //-------------------------------------------------------------------------------------------------------------------
  private signInButton = () =>
    this.page.getByTestId("auth-modal--container").getByText("Sign in");

  private emailInput = () => this.page.getByPlaceholder("E-Mail");

  private passwordInput = () => this.page.getByPlaceholder("Password");

  private loginButton = () => this.page.getByTestId("login");

  // Actions
  //-------------------------------------------------------------------------------------------------------------------
  async signIn(email: string, password: string) {
    await this.signInButton().click();
    await this.emailInput().fill(email);
    await this.passwordInput().fill(password);
    await this.loginButton().click();
  }
}
