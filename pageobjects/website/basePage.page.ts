import { Page } from "playwright-core";

export default class BasePage {
  protected page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Elements
  //-------------------------------------------------------------------------------------------------------------------
  readonly allowCookiesButton = () =>
    this.page.getByRole("button", { name: "Allow all" });
  readonly plansButton = () => this.page.getByRole("button", { name: "Plans" });
  // Actions
  //-------------------------------------------------------------------------------------------------------------------
  async acceptCookies() {
    await this.allowCookiesButton().click({ timeout: 5000 });
  }

  async navigateTo(path: string) {
    await this.page.goto(path);
  }

  async clickPlansButton() {
    await this.plansButton().click();
  }
}
