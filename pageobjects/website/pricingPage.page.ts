import { Page } from "playwright-core";
import { expect } from "@playwright/test";

export default class PricingPage {
  page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  // Elements
  //-------------------------------------------------------------------------------------------------------------------
  //Pricing Page
  private getProButton = () =>
    this.page.getByRole("button", { name: "Get Pro" });

  private getExpertButton = () =>
    this.page.getByRole("button", { name: "Get Expert" });

  private getFreeButton = () =>
    this.page.getByRole("button", { name: "Get Free" });

  private freePlanTitle = () => this.page.getByText("Free", { exact: true });

  private proPlanTitle = () => this.page.getByText("Pro", { exact: true });

  private expertPlanTitle = () =>
    this.page.getByText("Expert", { exact: true });

  //Subscription Modal
  private proceedToCheckoutButton = () =>
    this.page.getByText("Proceed to Checkout –>");

  private proPlanSubscriptionModal = () =>
    this.page.getByRole("heading", { name: "Upgrade to Pro plan" });
  // Actions
  //-------------------------------------------------------------------------------------------------------------------
  async selectProPlan() {
    await this.getProButton().click();
  }

  async verifyAllPlansAreVisible() {
    await expect.soft(this.proPlanTitle()).toBeVisible(); //`soft` will allow to complete all assertions, and won't terminate if one is failing
    await expect.soft(this.freePlanTitle()).toBeVisible();
    await expect.soft(this.expertPlanTitle()).toBeVisible();
  }

  async verifyProPlan() {
    await expect.soft(this.proPlanSubscriptionModal()).toBeVisible();
    await expect.soft(this.proceedToCheckoutButton()).toBeEnabled();
  }
}
