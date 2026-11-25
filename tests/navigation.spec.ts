
import { test, expect } from '@playwright/test';

test.describe('Portfolio Navigation', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('navigation menu is visible', async ({ page }) => {
    await expect(
      page.getByRole('navigation').first()
    ).toBeVisible();
  });

  test('navigation links have valid destinations', async ({ page }) => {
    const links = page.locator('nav a');

    const count = await links.count();

    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute('href');

      expect(href).toBeTruthy();
    }
  });

  test('internal navigation links point to existing sections', async ({ page }) => {
    const links = page.locator('nav a[href^="#"]');

    const count = await links.count();

    for (let i = 0; i < count; i++) {
      const href = await links.nth(i).getAttribute('href');

      if (href && href.length > 1) {
        await expect(page.locator(href)).toHaveCount(1);
      }
    }
  });

});
