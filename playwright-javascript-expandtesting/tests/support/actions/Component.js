import { expect } from '@playwright/test'

export class Alert {

    constructor(page) {
        this.page = page
        this.flashMessage = page.locator('#flash')
    }    

    async havetext(message) {
        await expect(this.flashMessage).toHaveText(message)
    }
}

export class VerifyPage {
    constructor(page) {
        this.page = page
    }

    async verifyActualPage(path) {
        await expect(this.page).toHaveURL(new RegExp(`.*${path}`))
    }
}