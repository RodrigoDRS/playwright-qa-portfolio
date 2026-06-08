import { expect } from '@playwright/test'

export class Alert {

    constructor(page) {
        this.page = page
    }

    async havetext(message) {
        await expect(this.page.locator('#flash')).toContainText(message)
    }
}