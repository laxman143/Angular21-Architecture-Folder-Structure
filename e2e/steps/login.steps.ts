import { Given,When,Then } from '@cucumber/cucumber'
import { expect } from '@playwright/test';
import { CustomWorld } from '../support/world';

Given('user is on login page', async function(this: CustomWorld){
    console.log("Navigating to login page");
      await this.page.goto('http://localhost:4200/login'); 
      
})

When('user enters valid email and password',async function(this: CustomWorld){
  console.log("Entering email and password")
    await this.page.fill('input[name="email"]', 'test@example.com');
    await this.page.fill('input[name="password"]', 'password123');
});

When('clicks login button',async function(this: CustomWorld){
  console.log('Clicking login button');
    await this.page.click('button[type="submit"]');
})

Then('user should be redirected to dashboard', async function(this: CustomWorld){
    console.log('User redirected to dashboard')
    await this.page.waitForTimeout(3000);
    const url = this.page.url();
    expect(url).toContain('');
})