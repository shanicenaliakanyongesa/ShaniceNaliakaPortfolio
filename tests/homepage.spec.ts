
import { test, expect } from '@playwright/test';

test.describe('Shanice Naliaka Portfolio', () => {

  test('homepage loads successfully', async ({ page }) => {
    await page.goto('/');

    await expect(page).toHaveTitle(/.+/);

    await expect(
      page.getByRole('heading', { level: 1 })
    ).toBeVisible();
  });

  test('portfolio content is visible', async ({ page }) => {
    await page.goto('/');

    await expect(page.locator('body')).toBeVisible();

    await expect(page.locator('body')).not.toBeEmpty();
  });

  test('page has no horizontal overflow on desktop', async ({ page }) => {
    await page.goto('/');

    const hasOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth >
        document.documentElement.clientWidth;
    });

    expect(hasOverflow).toBe(false);
  });

});
