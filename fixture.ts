import {test as base} from "@playwright/test";
import BasePage from "./pageobjects/website/basePage.page";
import PricingPage from "./pageobjects/website/pricingPage.page";
import LoginModal from "./pageobjects/website/loginModal.page";

const fixtures = base.extend<{
    basePage: BasePage;
    pricingPage: PricingPage;
    loginModal: LoginModal;
}>({
    basePage: async ({page}, use) => {
        const basePage = new BasePage(page);
        await use(basePage);
    },
    pricingPage: async ({page}, use) => {
        const pricingPage = new PricingPage(page);
        await use(pricingPage);
    },
    loginModal: async ({page}, use) => {
        const loginModal = new LoginModal(page);
        await use(loginModal);
    },
});

export {fixtures};
