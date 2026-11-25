
import { defineConfig, devices } from '@playwright/test';


export default defineConfig({
  testDir: './tests',

  fullyParallel: true,

  reporter: 'html',

  use: {
    baseURL: 'http://127.0.0.1:5173',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },

  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 7'] },
    },
  ],

webServer: {
  command: 'npm run dev -- --host 127.0.0.1 --port 5173 --strictPort',
  url: 'http://127.0.0.1:5173',
  reuseExistingServer: true,
  timeout: 120000,
},
});
