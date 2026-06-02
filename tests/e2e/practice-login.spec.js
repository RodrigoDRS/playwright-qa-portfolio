import { test } from '@playwright/test'
import { LoginPage } from '../pages/LoginPage'
import { SecurePage } from '../pages/SecurePage'

let loginPage
let securePage

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page)
    securePage = new SecurePage(page)
})

test('Test Case 1: Successful Login', async ({ page }) => {
    await loginPage.visit()
    await loginPage.verifyLoginForm()
    await loginPage.submitLoginForm('practice', 'SuperSecretPassword!')
    await securePage.verifySecurePage('You logged into a secure area!')

})

test('Test Case 2: Invalid Username', async ({ page }) => {
    await loginPage.visit()
    await loginPage.verifyLoginForm()
    await loginPage.submitLoginForm('userWrong', 'SuperSecretPassword!')
    await loginPage.verifyLoginPage('Your username is invalid!')

})

test('Test Case 3: Invalid Password', async ({ page }) => {
    await loginPage.visit()
    await loginPage.verifyLoginForm()
    await loginPage.submitLoginForm('practice', 'WrongPassword')
    await loginPage.verifyLoginPage('Your password is invalid!')

})

test('Test Case 4: Empty Username', async ({ page }) => {
    await loginPage.visit()
    await loginPage.verifyLoginForm()
    await loginPage.submitLoginForm('', 'SuperSecretPassword!')
    await loginPage.verifyLoginPage('Your username is invalid!')
})

test('Test Case 5: Empty Password', async ({ page }) => {
    await loginPage.visit()
    await loginPage.verifyLoginForm()
    await loginPage.submitLoginForm('practice', '')
    await loginPage.verifyLoginPage('Your password is invalid!')
})

test('Test Case 6: Empty Form', async ({ page }) => {
    await loginPage.visit()
    await loginPage.verifyLoginForm()
    await loginPage.submitLoginForm('', '')
    await loginPage.verifyLoginPage('Your username is invalid!')
})

