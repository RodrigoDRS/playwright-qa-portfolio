import { expect } from '@playwright/test'

export class Register {
    constructor(page) {
        this.page = page
        this.registerForm = page.locator('form#register')
        this.usernameInput = page.locator('#username')
        this.passwordInput = page.locator('#password')
        this.confirmPasswordInput = page.locator('#confirmPassword')
        this.registerButton = page.getByRole('button', { name: 'Register' })
    }

    async visit() {
        await this.page.goto('/register', {
            waitUntil: 'domcontentloaded'
        })
    }

    async submitRegisterForm(username, password, confirmPassword) {
        await expect(this.registerForm).toBeVisible()
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.confirmPasswordInput.fill(confirmPassword)
        await this.registerButton.click()
    }    

}