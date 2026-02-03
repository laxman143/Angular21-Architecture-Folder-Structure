import { Given, Then, When } from "@cucumber/cucumber";
import { CustomWorld } from "../support/world";
import { expect } from "@playwright/test";
import { LoginPO } from "../support/login.po";


Given('user is logged in',async function(this:CustomWorld){
  // const loginPO = new LoginPO(this.page);
  //  await loginPO.login();
    await this.page.goto('http://localhost:4200/login');
    await this.page.fill('input[name=email]','test@example.com');
    await this.page.fill('input[name=password]','password123');

    await Promise.all([
        this.page.waitForURL('**/dashboard'),
        this.page.click('button[type="submit"]')
    ])
})

Given('user is on dashboard page',async function(this:CustomWorld){
  await this.page.waitForURL('**/dashboard');
})

When('user clicks on Products menu from left panel',async function(this:CustomWorld){
 await this.page.click('a.menu-item >> span.text:has-text("Products")');
})

Then('user should be redirected to products page',async function(this:CustomWorld){
  await this.page.waitForURL('**/products',{timeout:15000});
  expect(this.page.url()).toContain('/products');
});

Then('product list should be displayed', async function (this: CustomWorld) {
  // Wait for main container
  await this.page.waitForSelector('section.product-list', { timeout: 10000 });

  const isVisible = await this.page.isVisible('section.product-list');
  expect(isVisible).toBeTruthy();
});

Then('at least one product card should be visible', async function (this: CustomWorld) {
  // Wait for at least one card
  await this.page.waitForSelector('.product-list .card', { timeout: 10000 });

  const productCards = await this.page.locator('.product-list .card');
  const count = await productCards.count();

  expect(count).toBeGreaterThan(0);
});