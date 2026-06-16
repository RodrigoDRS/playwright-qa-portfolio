import { expect } from '@playwright/test'

export class Login {

    constructor(page) {
        this.page = page
        this.loginForm = page.locator('form#login')
        this.usernameInput = page.locator('#username')
        this.passwordInput = page.locator('#password')
        this.loginButton = page.getByRole('button', { name: 'Login' })
        this.loggedInUser = page.locator('#username')
    }

    async doLogin(username, password) {
        await this.visit()
        await this.submitLoginForm(username, password)
    }

    async visit() {
        await this.page.goto('/login', {
            waitUntil: 'domcontentloaded'
        })
    }

    async submitLoginForm(username, password) {
        await expect(this.loginForm).toBeVisible()
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await expect(this.loginButton).toBeEnabled()
        await this.loginButton.click()
    }

    async verifyLoggedInUser(username) {
        await expect(this.loggedInUser).toHaveText(`Hi, ${username}!`)
    }

}