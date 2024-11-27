import { Page } from "playwright-core";

export default class PricingPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Elements
  //-------------------------------------------------------------------------------------------------------------------
  //Pricing Page
  readonly getProButton = () =>
    this.page.getByRole("button", { name: "Get Pro" });
  readonly getExpertButton = () =>
    this.page.getByRole("button", { name: "Get Expert" });
  readonly getFreeButton = () =>
    this.page.getByRole("button", { name: "Get Free" });
  readonly freePlanTitle = () => this.page.getByText("Free", { exact: true });
  readonly proPlanTitle = () => this.page.getByText("Pro", { exact: true });
  readonly expertPlanTitle = () =>
    this.page.getByText("Expert", { exact: true });
  //Subscription Modal
  readonly proceedToCheckoutButton = () =>
    this.page.getByText("Proceed to Checkout –>");
  readonly proPlanSubscriptionModal = () =>
    this.page.getByRole("heading", { name: "Upgrade to Pro plan" });
  // Actions
  //-------------------------------------------------------------------------------------------------------------------
  async selectProPlan() {
    await this.getProButton().click();
  }
}
