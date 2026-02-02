import { After, Before } from "@cucumber/cucumber";
import { CustomWorld } from "./world";

Before(async function(this:CustomWorld){
  await this.init();
  console.log('🔥 BEFORE HOOK EXECUTED');

})

After(async function(this:CustomWorld){
    await this.close();
     console.log('🧹 AFTER HOOK EXECUTED');
})