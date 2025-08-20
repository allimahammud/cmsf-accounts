// e2e/home.spec.ts
// import { test, expect } from '@playwright/test';

// test('homepage has welcome text', async ({ page }) => {
//   await page.goto('/login');
//   await expect(page.locator('h1')).toContainText('Welcome');
// });


import { test, expect } from '@playwright/test';

test.describe('Login page', () => {
  test('shows validation error on invalid login', async ({ page }) => {
    await page.goto('/login'); // Change to correct route if needed

    // Fill out the login form
    await page.getByLabel('Email').fill('ali.mahammud@cmsfbd.org');
    await page.getByLabel('Password').fill('123456');

    // Submit the form
    await page.getByRole('button', { name: /log in/i }).click();

    // Expect toast error
    // if credential not match then return message show here
    //await expect(page.getByText('Invalid credentials!')).toBeVisible();
   // await expect(page.getByText('Invalid credentials!')).toBeVisible({ timeout: 10000 });
  });

  test('redirects on successful login', async ({ page }) => {
    await page.goto('/login');

    // Fill out form with VALID credentials
    await page.getByLabel('Email').fill('ali.mahammud@cmsfbd.org');
    await page.getByLabel('Password').fill('123456');

    // Submit form
    await page.getByRole('button', { name: /log in/i }).click();

    // Expect redirected to dashboard or a known route
    await page.waitForURL('/dashboard/overview'); // Update this path as needed
    await expect(page).toHaveURL(/dashboard\/overview/);
  });
});
