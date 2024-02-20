import { test, expect } from '@playwright/test'

test.describe('app', () => {
    test('should have title matching name of site', async ({ page }) => {
        await page.goto('/')

        await expect(page).toHaveTitle(/Read This Next/)
    })
})
