import { expect } from '@playwright/test'
import { environment } from '../../../config/environment'

export class Secure {
    constructor(page) {
        this.page = page
        this.logoutUser = page.locator('.button', { name: 'Logout' })
    }
    
    async doLogout() {
        await this.page.login.verifyLoggedInUser(environment.validUsername)
        await this.logoutUser.click()
    }
    
}