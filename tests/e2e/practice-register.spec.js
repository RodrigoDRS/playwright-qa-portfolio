import { test } from '../support'
import { createUser } from '../support/factories/userFactory'
import { invalidUsers } from '../support/fixtures/invalidUsers'

test('Test Case 1: Successful Registration (Happy Path)', async ({ page }) => {
  const user = createUser()
  await page.register.visit()
  await page.register.submitRegisterForm(user.userName, user.password, user.password)
  await page.alert.havetext('Successfully registered, you can log in now.')
  await page.verifypage.verifyActualPage('login')

})

test('Test Case 2: Registration with Missing Username', async ({ page }) => {
  const user = createUser()
  await page.register.visit()
  await page.register.submitRegisterForm('', user.password, user.password)
  await page.alert.havetext('All fields are required.')
  await page.verifypage.verifyActualPage('register')

})

test('Test Case 3: Registration with Missing Password', async ({ page }) => {
  const user = createUser()
  await page.register.visit()
  await page.register.submitRegisterForm(user.userName, '', '')
  await page.alert.havetext('All fields are required.')
  await page.verifypage.verifyActualPage('register')

})

test('Test Case 4: Registration with Non-matching Passwords', async ({ page }) => {
  const user = createUser()
  await page.register.visit()
  await page.register.submitRegisterForm(user.userName, user.password, 'DifferentPassword123!')
  await page.alert.havetext('Passwords do not match.')
  await page.verifypage.verifyActualPage('register')

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
  await page.register.submitRegisterForm(user.userName, user.password, user.password)
  await page.alert.havetext('An error occurred during registration. Please try again.')
  await page.verifypage.verifyActualPage('register')

})

invalidUsers.forEach(({ scenario, userName, password, expectedAlert }) => {
  test(`Test Case 6: Invalid Username (${scenario})`, async ({ page }) => {
    
    if (scenario === 'Registration with Username Containing Uppercase Letters') {
      test.fail(true, 'Known bug: system accepts uppercase username')
    }

    await page.register.visit()
    await page.register.submitRegisterForm(userName, password, password)
    await page.alert.havetext(expectedAlert)
    await page.verifypage.verifyActualPage('register')

  })
})