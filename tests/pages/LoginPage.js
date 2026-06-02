import { expect } from '@playwright/test'

export class LoginPage {

    constructor(page) {
        this.page = page
    }

    async visit() {
        await this.page.goto('https://practice.expandtesting.com/login')
    }

    async verifyLoginForm() {
        const loginForm = this.page.locator('form#login')
        await expect(loginForm).toBeVisible()
    }

    async submitLoginForm(username, password) {
        await this.page.locator('#username').fill(username)
        await this.page.locator('#password').fill(password)
        await this.page.getByRole('button', { name: 'Login' }).click()
    }

    async verifyLoginPage(message) {
        await expect(this.page).toHaveURL(/.*login/)
        await expect(this.page.locator('#flash')).toContainText(message)
        await expect(this.page.locator('#submit-login')).toContainText('Login')
    }
}