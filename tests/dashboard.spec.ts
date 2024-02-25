import { test, expect } from '@playwright/test'

test.describe('dashboard', () => {
    test('should have title of dashboard', async ({ page }) => {
        await page.goto('/dashboard')

        await expect(page).toHaveTitle(/Dashboard/)
    })
})
