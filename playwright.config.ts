import { defineConfig } from '@playwright/test';

console.log('PLAYWRIGHT CONFIG LOADED BASE_URL:', process.env.BASE_URL);

export default defineConfig({
  testDir: './features',
  fullyParallel: true,
  reporter: [
    ['list'],
    ['allure-playwright', { outputFolder: 'allure-results' }]
  ],
  use: {
    baseURL: process.env.BASE_URL,
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    navigationTimeout: 60000,
    actionTimeout: 60000,
  },
});