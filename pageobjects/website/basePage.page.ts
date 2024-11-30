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
    if (await this.allowCookiesButton().isVisible({ timeout: 5000 })) {
      //handle cookies' inconsistency
      await this.allowCookiesButton().click();
    }
  }

  async navigateTo(path: string) {
    await this.page.goto(path);
    await this.page.waitForLoadState("domcontentloaded");
  }

  async clickPlansButton() {
    await this.plansButton().click();
  }
}
