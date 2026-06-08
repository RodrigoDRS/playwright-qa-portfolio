import { test } from '../data'
import { createUser } from '../data/factories/userFactory'

test('Test Case 1: Successful Registration (Happy Path)', async ({ page }) => {
  const user = createUser()
  await page.register.visit()
  await page.register.verifyRegisterForm()
  await page.register.submitRegisterForm(user.userName, user.password, user.password)
  await page.login.verifyLoginPage()
  await page.alert.havetext('Successfully registered, you can log in now.')
})

test('Test Case 2: Registration with Missing Username', async ({ page }) => {
  const user = createUser()
  await page.register.visit()
  await page.register.verifyRegisterForm()
  await page.register.submitRegisterForm('', user.password, user.password)
  await page.register.verifyRegisterPage()
  await page.alert.havetext('All fields are required.')
})

test('Test Case 3: Registration with Missing Password', async ({ page }) => {
  const user = createUser()
  await page.register.visit()
  await page.register.verifyRegisterForm()
  await page.register.submitRegisterForm(user.userName, '', '')
  await page.register.verifyRegisterPage()
  await page.alert.havetext('All fields are required.')
})

test('Test Case 4: Registration with Non-matching Passwords', async ({ page }) => {
  const user = createUser()
  await page.register.visit()
  await page.register.verifyRegisterForm()
  await page.register.submitRegisterForm(user.userName, user.password, 'DifferentPassword123!')
  await page.register.verifyRegisterPage()
  await page.alert.havetext('Passwords do not match.')
})

test('Test Case 5: Registration with Existing Username', async ({ page, request }) => {
  const user = createUser()

  await request.post('https://practice.expandtesting.com/register', {
    data: {
      username: user.userName,
      password: user.password,
      confirmPassword: user.password
    }
  })

  await page.register.visit()
  await page.register.verifyRegisterForm()
  await page.register.submitRegisterForm(user.userName, user.password, user.password)
  await page.register.verifyRegisterPage()
  await page.alert.havetext('An error occurred during registration. Please try again.')
})

