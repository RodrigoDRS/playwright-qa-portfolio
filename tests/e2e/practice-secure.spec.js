import { test } from '../support'
import { environment } from '../../config/environment'

test('Test Case 1: Successful Logout', async ({ page }) => {
    await page.login.doLogin(environment.validUsername, environment.validPassword)
    await page.secure.doLogout()
    await page.verifypage.verifyActualPage('login')
    await page.alert.havetext('You logged out of the secure area!')
})