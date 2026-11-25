
import { test, expect } from '@playwright/test';

test.describe('Portfolio Projects', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('projects section is visible', async ({ page }) => {
    const projectsHeading = page.getByRole('heading', {
      name: /projects|my work|portfolio/i,
    }).first();

    await expect(projectsHeading).toBeVisible();
  });

  test('project links have valid URLs', async ({ page }) => {
    const projectLinks = page.getByRole('link', {
      name: /github|live demo|view project|source code/i,
    });

    const count = await projectLinks.count();

    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const href = await projectLinks.nth(i).getAttribute('href');

      expect(href).toBeTruthy();
      expect(href).not.toBe('#');
    }
  });

});
