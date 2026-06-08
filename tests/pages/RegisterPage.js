import { expect } from '@playwright/test'

export class RegisterPage {
    constructor(page) {
        this.page = page
    }

    async visit() {
        await this.page.goto('/register')
    }

    async verifyRegisterForm() {
        const registerForm = this.page.locator('form#register')
        await expect(registerForm).toBeVisible()

    }

    async submitRegisterForm(username, password, confirmPassword) {
        await this.page.locator('#username').fill(username)
        await this.page.locator('#password').fill(password)
        await this.page.locator('#confirmPassword').fill(confirmPassword)
        await this.page.getByRole('button', { name: 'Register' }).click()
    }

    async verifyRegisterPage(message) {
        await expect(this.page).toHaveURL(/.*register/)
        await expect(this.page.getByRole('button', { name: 'Register' })).toBeVisible()
    }

}