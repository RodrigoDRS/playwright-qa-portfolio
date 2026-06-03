import { test } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { SecurePage } from '../pages/SecurePage'
import { environment } from '../../config/environment'

let loginPage
let securePage

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    securePage = new SecurePage(page)
})

test('Test Case 1: Successful Login', async ({ page }) => {
    await loginPage.visit()
    await loginPage.verifyLoginForm()
    await loginPage.submitLoginForm(environment.validUsername, environment.validPassword)
    await securePage.verifySecurePage('You logged into a secure area!')

})

test('Test Case 2: Invalid Username', async ({ page }) => {
    await loginPage.visit()
    await loginPage.verifyLoginForm()
    await loginPage.submitLoginForm('userWrong', environment.validPassword)
    await loginPage.verifyLoginPage('Your username is invalid!')

})

test('Test Case 3: Invalid Password', async ({ page }) => {
    await loginPage.visit()
    await loginPage.verifyLoginForm()
    await loginPage.submitLoginForm(environment.validUsername, 'WrongPassword')
    await loginPage.verifyLoginPage('Your password is invalid!')

})

test('Test Case 4: Empty Username', async ({ page }) => {
    await loginPage.visit()
    await loginPage.verifyLoginForm()
    await loginPage.submitLoginForm('', environment.validPassword)
    await loginPage.verifyLoginPage('Your username is invalid!')
})

test('Test Case 5: Empty Password', async ({ page }) => {
    await loginPage.visit()
    await loginPage.verifyLoginForm()
    await loginPage.submitLoginForm(environment.validUsername, '')
    await loginPage.verifyLoginPage('Your password is invalid!')
})

test('Test Case 6: Empty Form', async ({ page }) => {
    await loginPage.visit()
    await loginPage.verifyLoginForm()
    await loginPage.submitLoginForm('', '')
    await loginPage.verifyLoginPage('Your username is invalid!')
})

