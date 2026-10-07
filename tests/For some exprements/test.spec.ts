import { test, expect } from '@playwright/test';
import { Visit } from './methods.js';

test('has title', async ({ page }) => {
  const visit = new Visit(page);
          
    await visit.goto();

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Hillel Qauto/);
});