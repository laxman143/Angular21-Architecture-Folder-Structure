import { Page } from "@playwright/test";

export class LoginPO {
    readonly page: Page;
    constructor(page:Page){
    this.page = page;
    }
    async login() : Promise<void> {
        await this.page.goto('http://localhost:4200/login');
        await this.page.fill('input[name=email]', 'test@example.com');
        await this.page.fill('input[name=password]', 'password123');

        await Promise.all([
            this.page.waitForURL('**/dashboard'),
            this.page.click('button[type="submit"]')
        ])
    }
}

