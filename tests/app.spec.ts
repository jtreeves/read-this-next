import { test, expect } from '@playwright/test'

test.describe('app', () => {
    test('should have title', async ({ page }) => {
        await page.goto('/')
        await expect(page).toHaveTitle(/Create Next App/)
    })
})
