import { test, expect } from '@playwright/test'

test.describe('browse', () => {
    test('should have title of browse', async ({ page }) => {
        await page.goto('/browse')

        await expect(page).toHaveTitle(/NOT Browse/)
    })
})
