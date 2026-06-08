import { expect } from '@playwright/test'

export class SecurePage {
    constructor(page) {
        this.page = page
    }

    async verifySecurePage(message) {
        await expect(this.page).toHaveURL(/.*secure/)
        await expect(this.page.locator('.button')).toContainText('Logout')
    }
}