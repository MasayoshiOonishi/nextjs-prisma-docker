import { chromium } from '@playwright/test';

import { readdirSync } from 'fs';
const testFolder = '/mnt/c/Users/itfllc/AppData/Local/Google/Chrome/User Data/Default';
readdirSync(testFolder).forEach(file => {
  console.log(file);
});

(async () => {


  const context = await chromium.launchPersistentContext(
    '',
  {
      headless: false,
      channel: 'chrome',
  });

  const page = await context.newPage();
  await page.goto('https://blog.bakunyo.com/');
  await page.waitForTimeout(50000);
  await page.screenshot({ path: 'bakunyo.png' });
})();