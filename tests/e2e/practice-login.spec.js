import { test } from '../data'
import { environment } from '../../config/environment'

test('Test Case 1: Successful Login', async ({ page }) => {
    await page.login.visit()
    await page.login.verifyLoginForm()
    await page.login.submitLoginForm(environment.validUsername, environment.validPassword)
    await page.secure.verifySecurePage()
    await page.alert.havetext('You logged into a secure area!')

})

test('Test Case 2: Invalid Username', async ({ page }) => {
    await page.login.visit()
    await page.login.verifyLoginForm()
    await page.login.submitLoginForm('userWrong', environment.validPassword)
    await page.login.verifyLoginPage()
    await page.alert.havetext('Your username is invalid!')
})

test('Test Case 3: Invalid Password', async ({ page }) => {
    await page.login.visit()
    await page.login.verifyLoginForm()
    await page.login.submitLoginForm(environment.validUsername, 'WrongPassword')
    await page.login.verifyLoginPage()
    await page.alert.havetext('Your password is invalid!')
})

test('Test Case 4: Empty Username', async ({ page }) => {
    await page.login.visit()
    await page.login.verifyLoginForm()
    await page.login.submitLoginForm('', environment.validPassword)
    await page.login.verifyLoginPage()
    await page.alert.havetext('Your username is invalid!')
})

test('Test Case 5: Empty Password', async ({ page }) => {
    await page.login.visit()
    await page.login.verifyLoginForm()
    await page.login.submitLoginForm(environment.validUsername, '')
    await page.login.verifyLoginPage()
    await page.alert.havetext('Your password is invalid!')
})

test('Test Case 6: Empty Form', async ({ page }) => {
    await page.login.visit()
    await page.login.verifyLoginForm()
    await page.login.submitLoginForm('', '')
    await page.login.verifyLoginPage()
    await page.alert.havetext('Your username is invalid!')
})

