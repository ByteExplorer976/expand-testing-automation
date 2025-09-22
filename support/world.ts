// support/world.ts
import * as dotenv from 'dotenv';
dotenv.config();

console.log('Cucumber loaded BASE_URL:', process.env.BASE_URL);

import { setDefaultTimeout, setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page, chromium } from '@playwright/test';

import { WebInputsPage } from '../pages/webinputs/inputs.page';

setDefaultTimeout(60 * 1000);

export class CustomWorld extends World {
  page!: Page; // Non-null assertion for TypeScript
  browser!: Browser;
  context!: BrowserContext;
  
  private _webInputsPage!: WebInputsPage;


  async init() {
    this.browser = await chromium.launch({ headless: false, args: ['--start-fullscreen'] }); // Adjust headless as needed
    // this.context = await this.browser.newContext();
    this.context = await this.browser.newContext({
      // viewport: null
    });
    this.page = await this.context.newPage();
  }

  async close() {
    await this.context.close();
    await this.browser.close();
  }


  get webInputsPage(): WebInputsPage {
    if (!this._webInputsPage) {
      this._webInputsPage = new WebInputsPage(this.page);
    }
    return this._webInputsPage;
  }

}

setWorldConstructor(CustomWorld);