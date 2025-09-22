// support/hooks.ts
import { Before, After } from '@cucumber/cucumber';

Before(async function () {
  await this.init(); // Initialize browser, context, page
});

After(async function () {
  await this.close(); // Clean up after each scenario
});