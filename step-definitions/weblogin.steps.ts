import { Given, When,Then } from "@cucumber/cucumber";
import {CustomWorld} from '../support/world'; 

Given('the user has to navigate to the application', async function (this: CustomWorld){
    await this.webInputsPage.navigateToWebInputs();
});
