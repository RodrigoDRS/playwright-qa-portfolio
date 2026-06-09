import { test as base } from '@playwright/test'
import { Alert } from '../pages/Component'
import { RegisterPage } from '../pages/RegisterPage'
import { LoginPage } from '../pages/LoginPage'
import { SecurePage } from '../pages/SecurePage'


const test = base.extend({
    page: async ({ page }, use) => {

        const context = page

        context['register'] = new RegisterPage(page)
        context['login'] = new LoginPage(page)
        context['secure'] = new SecurePage(page)
        context['alert'] = new Alert(page)

        await use(context)
    }
})

export { test }