import { test as base } from '@playwright/test'
import { Alert } from '../pages/Component'
import { RegisterPage } from '../pages/RegisterPage'
import { LoginPage } from '../pages/LoginPage'
import { SecurePage } from '../pages/SecurePage'

const test = base.extend({
    page: async ({ page }, use) => {
        await use({
            ...page,
            register: new RegisterPage(page),
            login: new LoginPage(page),
            secure: new SecurePage(page),
            alert: new Alert(page)
        })
    }
})

export { test }