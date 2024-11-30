import { fixtures as test } from "../../../fixture";
import * as dotenv from "dotenv";
import { expect } from "@playwright/test";

dotenv.config();

const email = process.env.EMAIL!;
const password = process.env.PASSWORD!;

test.describe("Pricing page tests", () => {
  test.beforeEach(async ({ basePage }) => {
    await basePage.navigateTo("/");
    await basePage.acceptCookies();
  });

  test("Navigate to pricing page and verify all plans are displayed", async ({
    basePage,
    pricingPage,
  }) => {
    await basePage.clickPlansButton();
    await pricingPage.verifyAllPlansAreVisible();
  });

  test("Navigate to pricing page and log in to select Pro Plan", async ({
    basePage,
    pricingPage,
    loginModal,
  }) => {
    await basePage.clickPlansButton();
    await pricingPage.selectProPlan();
    await loginModal.signIn(email, password);
    await pricingPage.verifyProPlan();
  });
});
