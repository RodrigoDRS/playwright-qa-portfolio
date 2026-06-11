import { test as base } from '@playwright/test'
import { Alert, VerifyPage } from '../actions/Component'
import { Register } from '../actions/Register'
import { Login } from '../actions/Login'
import { Secure } from '../actions/Secure'


const test = base.extend({
    page: async ({ page }, use) => {

        const context = page

        context['register'] = new Register(page)
        context['login'] = new Login(page)
        context['secure'] = new Secure(page)
        context['alert'] = new Alert(page)
        context['verifypage'] = new VerifyPage(page)

        await use(context)
    }
})

export { test }