import { Page }  from "@playwright/test";
export class WebInputsPage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToWebInputs() {
        await this.page.goto('https://practice.expandtesting.com/');
    }

}