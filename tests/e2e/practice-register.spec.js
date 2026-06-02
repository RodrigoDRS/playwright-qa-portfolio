import { test } from '@playwright/test'
import { RegisterPage } from '../pages/RegisterPage'
import { LoginPage } from '../pages/LoginPage'
import { createUser } from '../data/factories/userFactory'

let registerPage
let loginPage

test.beforeEach(async ({ page }) => {
  registerPage = new RegisterPage(page)
  loginPage = new LoginPage(page)
})

test('Test Case 1: Successful Registration (Happy Path)', async ({ page }) => {
  const user = createUser()
  await registerPage.visit()
  await registerPage.verifyRegisterForm()
  await registerPage.submitRegisterForm(user.userName, user.password, user.password)
  await loginPage.verifyLoginPage('Successfully registered, you can log in now.')
})

test('Test Case 2: Registration with Missing Username', async ({ page }) => {
  const user = createUser()
  await registerPage.visit()
  await registerPage.verifyRegisterForm()
  await registerPage.submitRegisterForm('', user.password, user.password)
  await registerPage.verifyRegisterPage('All fields are required.')
})

test('Test Case 3: Registration with Missing Password', async ({ page }) => {
  const user = createUser()
  await registerPage.visit()
  await registerPage.verifyRegisterForm()
  await registerPage.submitRegisterForm(user.userName, '', '')
  await registerPage.verifyRegisterPage('All fields are required.')
})

test('Test Case 4: Registration with Non-matching Passwords', async ({ page }) => {
  const user = createUser()
  await registerPage.visit()
  await registerPage.verifyRegisterForm()
  await registerPage.submitRegisterForm(user.userName, user.password, 'DifferentPassword123!')
  await registerPage.verifyRegisterPage('Passwords do not match.')
})