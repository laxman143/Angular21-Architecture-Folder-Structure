import { setWorldConstructor } from "@cucumber/cucumber";
import { BrowserContext, Browser,Page, chromium } from "playwright";

export class CustomWorld {
    browser!: Browser;
    context!: BrowserContext;
    page!: Page;

    constructor(){
    }

    async init(){
      this.browser = await chromium.launch({headless: false,slowMo:500});
      this.context = await this.browser.newContext();
      this.page = await this.context.newPage();
    }

    async close(){
        await this.browser.close();
    }
}

setWorldConstructor(CustomWorld);