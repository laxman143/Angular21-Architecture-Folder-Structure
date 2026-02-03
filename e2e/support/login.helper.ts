import { Page } from "@playwright/test";

export async function login(page: Page){
    await page.goto('http://localhost:4200/login');
    await page.fill('input[name=email]','test@example.com');
    await page.fill('input[name=password]','password123');

    await Promise.all([
        page.waitForURL('**/dashboard'),
        page.click('button[type="submit"]')
    ])
}