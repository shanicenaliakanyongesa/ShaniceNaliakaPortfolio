
import { test, expect } from '@playwright/test';

test.describe('Portfolio Contact', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('contact section is visible', async ({ page }) => {
    const contactHeading = page.getByRole('heading', {
      name: /contact|get in touch|let's connect/i,
    }).first();

    await expect(contactHeading).toBeVisible();
  });

  test('email contact link is available', async ({ page }) => {
    const emailLink = page.locator('a[href^="mailto:"]');

    await expect(emailLink.first()).toBeVisible();
  });

  test('contact form fields are usable if a form exists', async ({ page }) => {
    const form = page.locator('form').first();

    if (await form.count() === 0) {
      test.skip(true, 'No contact form found on this portfolio');
    }

    await expect(form).toBeVisible();

    const fields = form.locator('input, textarea');

    expect(await fields.count()).toBeGreaterThan(0);
  });

});
